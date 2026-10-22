import { adminTokenConfigured, isAuthorized } from '@/lib/admin-auth';
import { rateLimit, sameOrigin, securityDenied } from '@/lib/request-security';

export async function POST(request: Request) {
  const limited = rateLimit(request, 'admin-auth', 10, 10 * 60 * 1000);
  if (limited) return limited;
  if (!sameOrigin(request)) return securityDenied();
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
