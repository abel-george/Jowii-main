import { deliverToIntegration, getIntegrationError, isValidEmail, readText } from '@/lib/server-integrations';
import { contentLengthWithin, rateLimit, sameOrigin, securityDenied } from '@/lib/request-security';

export async function POST(request: Request) {
  const limited = rateLimit(request, 'contact', 5, 10 * 60 * 1000);
  if (limited) return limited;
  if (!sameOrigin(request)) return securityDenied();
  if (!contentLengthWithin(request, 32 * 1024)) return Response.json({ success: false, message: 'Request is too large.', code: 'too_large' }, { status: 413 });
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: 'Submit the form as JSON.', code: 'invalid_request' }, { status: 400 });
  }

  const name = readText(body.name, 160);
  const email = readText(body.email, 254).toLowerCase();
  const message = readText(body.message, 4000);
  const interest = readText(body.interest, 100);
  if (!name || !message || !isValidEmail(email)) {
    return Response.json({ success: false, message: 'Enter your name, a valid email address and a message.', code: 'invalid_fields' }, { status: 400 });
  }

  try {
    const receipt = await deliverToIntegration('contact', { name, email, interest, message });
    return Response.json({ success: true, message: 'Your enquiry was received.', referenceId: receipt.referenceId }, { headers: { 'cache-control': 'no-store' } });
  } catch (error) {
    const result = getIntegrationError(error);
    return Response.json({ success: false, ...result }, { status: result.status, headers: { 'cache-control': 'no-store' } });
  }
}
