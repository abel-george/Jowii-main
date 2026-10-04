import { deliverToIntegration, getIntegrationError, isValidEmail, readText } from '@/lib/server-integrations';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: 'Submit the form as JSON.', code: 'invalid_request' }, { status: 400 });
  }

  const firstName = readText(body.firstName, 80);
  const lastName = readText(body.lastName, 80);
  const email = readText(body.email, 254).toLowerCase();
  if (!firstName || !lastName || !isValidEmail(email)) {
    return Response.json({ success: false, message: 'Enter your name and a valid email address.', code: 'invalid_fields' }, { status: 400 });
  }

  try {
    const receipt = await deliverToIntegration('newsletter', { firstName, lastName, email });
    return Response.json({ success: true, message: 'Your subscription was received.', referenceId: receipt.referenceId }, { headers: { 'cache-control': 'no-store' } });
  } catch (error) {
    const result = getIntegrationError(error);
    return Response.json({ success: false, ...result }, { status: result.status, headers: { 'cache-control': 'no-store' } });
  }
}