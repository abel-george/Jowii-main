import { list, put } from '@vercel/blob';
import { randomUUID } from 'crypto';
import { adminTokenConfigured, isAuthorized } from '@/lib/admin-auth';

// News/announcements store backed by a single JSON document in Vercel Blob.
// GET is public (used by the homepage Latest section); POST/PUT/DELETE require
// the ADMIN_UPLOAD_TOKEN bearer token and are used by /admin/news.

const STORE_PATH = 'news/posts.json';
const noStore = { 'cache-control': 'no-store' };

export interface NewsPost {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string;
  excerpt: string;
  body?: string;
  image?: string;
  createdAt: string;
}

async function readPosts(): Promise<NewsPost[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  try {
    const { blobs } = await list({ prefix: STORE_PATH, token: process.env.BLOB_READ_WRITE_TOKEN });
    const blob = blobs.find((b) => b.pathname === STORE_PATH);
    if (!blob) return []; // store not created yet
    const res = await fetch(blob.url, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? (data as NewsPost[]) : [];
  } catch {
    return []; // store not created yet
  }
}

async function writePosts(posts: NewsPost[]): Promise<void> {
  await put(STORE_PATH, JSON.stringify(posts, null, 2), {
    access: 'public',
    contentType: 'application/json',
    token: process.env.BLOB_READ_WRITE_TOKEN,
    allowOverwrite: true,
  });
}

function denyNotConfigured() {
  return Response.json(
    {
      success: false,
      message:
        'Admin token not configured. Set ADMIN_UPLOAD_TOKEN in the Vercel dashboard (Settings → Environment Variables) to any long random string, redeploy, and enter that same string on the admin page.',
      code: 'token_not_set',
    },
    { status: 401, headers: noStore },
  );
}

function denyUnauthorized() {
  return Response.json(
    { success: false, message: 'Unauthorized.', code: 'unauthorized' },
    { status: 401, headers: noStore },
  );
}

// Public: list published posts, newest first.
export async function GET() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json(
      { success: true, posts: [], configured: false },
      { headers: noStore },
    );
  }
  try {
    const posts = await readPosts();
    posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    return Response.json({ success: true, posts, configured: true }, { headers: noStore });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load news.';
    return Response.json({ success: false, message, code: 'read_failed' }, { status: 500, headers: noStore });
  }
}

// Admin: create a post.
export async function POST(request: Request) {
  if (!adminTokenConfigured()) return denyNotConfigured();
  if (!isAuthorized(request)) return denyUnauthorized();
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json(
      { success: false, message: 'Blob storage is not configured.', code: 'not_configured' },
      { status: 503, headers: noStore },
    );
  }

  let payload: Partial<NewsPost>;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { success: false, message: 'Request body must be JSON.', code: 'invalid_request' },
      { status: 400, headers: noStore },
    );
  }

  const title = String(payload.title || '').trim();
  if (!title || title.length > 300) {
    return Response.json(
      { success: false, message: 'A title (max 300 characters) is required.', code: 'invalid_fields' },
      { status: 400, headers: noStore },
    );
  }
  const date = /^\d{4}-\d{2}-\d{2}$/.test(String(payload.date || '')) ? String(payload.date) : new Date().toISOString().slice(0, 10);
  const category = String(payload.category || 'Announcement').trim().slice(0, 80) || 'Announcement';
  const excerpt = String(payload.excerpt || '').trim().slice(0, 2000);
  const body = String(payload.body || '').trim().slice(0, 20000) || undefined;
  const image = String(payload.image || '').trim().slice(0, 2000) || undefined;
  if (image && !/^https?:\/\//.test(image)) {
    return Response.json(
      { success: false, message: 'Image must be an http(s) URL.', code: 'invalid_fields' },
      { status: 400, headers: noStore },
    );
  }

  const post: NewsPost = {
    id: randomUUID(),
    title,
    date,
    category,
    excerpt,
    body,
    image,
    createdAt: new Date().toISOString(),
  };

  try {
    const posts = await readPosts();
    posts.push(post);
    await writePosts(posts);
    return Response.json({ success: true, post }, { headers: noStore });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to save the post.';
    return Response.json({ success: false, message, code: 'write_failed' }, { status: 500, headers: noStore });
  }
}

// Admin: update an existing post.
export async function PUT(request: Request) {
  if (!adminTokenConfigured()) return denyNotConfigured();
  if (!isAuthorized(request)) return denyUnauthorized();

  let payload: Partial<NewsPost>;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { success: false, message: 'Request body must be JSON.', code: 'invalid_request' },
      { status: 400, headers: noStore },
    );
  }
  const id = String(payload.id || '');
  if (!id) {
    return Response.json(
      { success: false, message: 'Post id is required.', code: 'invalid_fields' },
      { status: 400, headers: noStore },
    );
  }

  try {
    const posts = await readPosts();
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) {
      return Response.json(
        { success: false, message: 'Post not found.', code: 'not_found' },
        { status: 404, headers: noStore },
      );
    }
    const existing = posts[index];
    const title = String(payload.title ?? existing.title).trim();
    if (!title || title.length > 300) {
      return Response.json(
        { success: false, message: 'A title (max 300 characters) is required.', code: 'invalid_fields' },
        { status: 400, headers: noStore },
      );
    }
    posts[index] = {
      ...existing,
      title,
      date: /^\d{4}-\d{2}-\d{2}$/.test(String(payload.date ?? '')) ? String(payload.date) : existing.date,
      category: String(payload.category ?? existing.category).trim().slice(0, 80) || 'Announcement',
      excerpt: String(payload.excerpt ?? existing.excerpt).trim().slice(0, 2000),
      body: String(payload.body ?? existing.body ?? '').trim().slice(0, 20000) || undefined,
      image: String(payload.image ?? existing.image ?? '').trim().slice(0, 2000) || undefined,
    };
    await writePosts(posts);
    return Response.json({ success: true, post: posts[index] }, { headers: noStore });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to update the post.';
    return Response.json({ success: false, message, code: 'write_failed' }, { status: 500, headers: noStore });
  }
}

// Admin: delete a post.
export async function DELETE(request: Request) {
  if (!adminTokenConfigured()) return denyNotConfigured();
  if (!isAuthorized(request)) return denyUnauthorized();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return Response.json(
      { success: false, message: 'Post id is required.', code: 'invalid_fields' },
      { status: 400, headers: noStore },
    );
  }
  try {
    const posts = await readPosts();
    const next = posts.filter((p) => p.id !== id);
    if (next.length === posts.length) {
      return Response.json(
        { success: false, message: 'Post not found.', code: 'not_found' },
        { status: 404, headers: noStore },
      );
    }
    await writePosts(next);
    return Response.json({ success: true }, { headers: noStore });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to delete the post.';
    return Response.json({ success: false, message, code: 'delete_failed' }, { status: 500, headers: noStore });
  }
}

