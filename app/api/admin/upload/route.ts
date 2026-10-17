import { put, del, list } from '@vercel/blob';
import { randomUUID } from 'crypto';
import { adminTokenConfigured, isAuthorized } from '@/lib/admin-auth';

// Admin-only media upload endpoint, backed by Vercel Blob.
//
// Access control: the caller must send `Authorization: Bearer <ADMIN_UPLOAD_TOKEN>`.
// The token is read from an environment variable (set in the Vercel dashboard), so
// the admin identity is NOT hardcoded in source and can be rotated without a deploy.
// See .env.example for the required variable.

const MAX_BYTES = 100 * 1024 * 1024; // 100MB
const ALLOWED_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/webp',
  'image/avif',
  'image/gif',
  'video/mp4',
  'video/webm',
  'video/ogg',
]);

function denyNotConfigured() {
  return Response.json(
    {
      success: false,
      message:
        'Admin token not configured. Set ADMIN_UPLOAD_TOKEN in the Vercel dashboard (Settings → Environment Variables) to any long random string, redeploy, and enter that same string on the admin page.',
      code: 'token_not_set',
    },
    { status: 401, headers: { 'cache-control': 'no-store' } },
  );
}

function denyUnauthorized() {
  return Response.json(
    { success: false, message: 'Unauthorized.', code: 'unauthorized' },
    { status: 401, headers: { 'cache-control': 'no-store' } },
  );
}

export async function POST(request: Request) {
  if (!adminTokenConfigured()) return denyNotConfigured();
  if (!isAuthorized(request)) return denyUnauthorized();
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json(
      { success: false, message: 'Blob storage is not configured.', code: 'not_configured' },
      { status: 503, headers: { 'cache-control': 'no-store' } },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json(
      { success: false, message: 'Submit the file as multipart form data.', code: 'invalid_request' },
      { status: 400, headers: { 'cache-control': 'no-store' } },
    );
  }

  const file = form.get('file');
  if (!(file instanceof File)) {
    return Response.json(
      { success: false, message: 'No file provided.', code: 'invalid_fields' },
      { status: 400, headers: { 'cache-control': 'no-store' } },
    );
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return Response.json(
      { success: false, message: 'Upload a PNG, JPEG, WebP, AVIF, GIF, MP4, WebM or OGG file.', code: 'invalid_type' },
      { status: 415, headers: { 'cache-control': 'no-store' } },
    );
  }
  if (file.size > MAX_BYTES) {
    return Response.json(
      { success: false, message: 'File exceeds the 100MB limit.', code: 'too_large' },
      { status: 413, headers: { 'cache-control': 'no-store' } },
    );
  }

  const ext = (file.name.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '');
  const pathname = `uploads/${Date.now()}-${randomUUID().slice(0, 8)}.${ext}`;

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const blob = await put(pathname, buffer, {
      access: 'public',
      contentType: file.type,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    return Response.json(
      { success: true, url: blob.url, pathname: blob.pathname, size: file.size },
      { headers: { 'cache-control': 'no-store' } },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Upload failed.';
    return Response.json(
      { success: false, message, code: 'upload_failed' },
      { status: 500, headers: { 'cache-control': 'no-store' } },
    );
  }
}

// List uploaded blobs (admin only) — used by the admin gallery.
export async function GET(request: Request) {
  if (!adminTokenConfigured()) return denyNotConfigured();
  if (!isAuthorized(request)) return denyUnauthorized();
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json(
      { success: false, message: 'Blob storage is not configured.', code: 'not_configured' },
      { status: 503, headers: { 'cache-control': 'no-store' } },
    );
  }
  try {
    const { blobs } = await list({ prefix: 'uploads/', token: process.env.BLOB_READ_WRITE_TOKEN });
    return Response.json(
      { success: true, blobs: blobs.map((b) => ({ url: b.url, pathname: b.pathname, size: b.size })) },
      { headers: { 'cache-control': 'no-store' } },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'List failed.';
    return Response.json(
      { success: false, message, code: 'list_failed' },
      { status: 500, headers: { 'cache-control': 'no-store' } },
    );
  }
}

// Delete an uploaded blob (admin only).
export async function DELETE(request: Request) {
  if (!adminTokenConfigured()) return denyNotConfigured();
  if (!isAuthorized(request)) return denyUnauthorized();
  const { searchParams } = new URL(request.url);
  const pathname = searchParams.get('pathname');
  if (!pathname || !pathname.startsWith('uploads/')) {
    return Response.json(
      { success: false, message: 'Invalid pathname.', code: 'invalid_fields' },
      { status: 400, headers: { 'cache-control': 'no-store' } },
    );
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json(
      { success: false, message: 'Blob storage is not configured.', code: 'not_configured' },
      { status: 503, headers: { 'cache-control': 'no-store' } },
    );
  }
  try {
    await del(pathname, { token: process.env.BLOB_READ_WRITE_TOKEN });
    return Response.json(
      { success: true },
      { headers: { 'cache-control': 'no-store' } },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Delete failed.';
    return Response.json(
      { success: false, message, code: 'delete_failed' },
      { status: 500, headers: { 'cache-control': 'no-store' } },
    );
  }
}
