import { isIntegrationConfigured } from '@/lib/server-integrations';

export async function GET() {
  return Response.json(
    { accepting: isIntegrationConfigured('donations') },
    { headers: { 'cache-control': 'no-store' } },
  );
}