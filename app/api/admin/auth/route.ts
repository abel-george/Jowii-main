import { adminTokenConfigured, isAuthorized } from '@/lib/admin-auth';

export async function POST(request: Request) {
  if (!adminTokenConfigured()) {
    return Response.json(
      { success: false, message: 'Admin access is not configured.', code: 'token_not_set' },
      { status: 401, headers: { 'cache-control': 'no-store' } },
    );
  }
  if (!isAuthorized(request)) {
    return Response.json(
      { success: false, message: 'That admin token is not valid.', code: 'unauthorized' },
      { status: 401, headers: { 'cache-control': 'no-store' } },
    );
  }
  return Response.json({ success: true }, { headers: { 'cache-control': 'no-store' } });
}
