// Shared bearer-token check for admin-only API routes.
//
// The token comes from the ADMIN_UPLOAD_TOKEN environment variable (set it in
// the Vercel dashboard → Settings → Environment Variables, then redeploy).
// There is no server-generated token: you invent a long random string, store it
// as the env var, and enter the same string on the admin pages.
export function adminTokenConfigured(): boolean {
  return Boolean(process.env.ADMIN_UPLOAD_TOKEN);
}

export function isAuthorized(request: Request): boolean {
  const adminToken = process.env.ADMIN_UPLOAD_TOKEN;
  if (!adminToken) return false; // no token configured => deny all
  const header = request.headers.get('authorization') || '';
  const [scheme, token] = header.split(' ');
  if (scheme?.toLowerCase() !== 'bearer') return false;
  // Constant-time comparison to avoid timing attacks.
  const expected = Buffer.from(adminToken);
  const provided = Buffer.from(token || '');
  if (expected.length !== provided.length) return false;
  return Buffer.compare(expected, provided) === 0;
}
