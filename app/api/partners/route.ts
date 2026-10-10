import { deliverToIntegration, getIntegrationError, isValidEmail, readText } from '@/lib/server-integrations';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: 'Submit the form as JSON.', code: 'invalid_request' }, { status: 400 });
  }

  const name = readText(body.name, 160);
  const type = readText(body.type, 50);
  const country = readText(body.country, 100);
  const email = readText(body.email, 254).toLowerCase();
  const phone = readText(body.phone, 40);
  const website = readText(body.website, 200);
  const partnershipAreas = readText(body.partnershipAreas, 500);
  const contributionType = readText(body.contributionType, 100);
  const message = readText(body.message, 2000);
  const additionalInfo = readText(body.additionalInfo, 1000);
  
  if (!name || !type || !country || !message || !isValidEmail(email)) {
    return Response.json({ success: false, message: 'Enter your name, type, country, email and a detailed message.', code: 'invalid_fields' }, { status: 400 });
  }

  try {
    const receipt = await deliverToIntegration('partners', {
      partnerType: type,
      name,
      email,
      country,
      phone,
      website,
      partnershipAreas,
      contributionType,
      message,
      additionalInfo,
    });
    return Response.json({ success: true, message: 'Your partnership application was received.', referenceId: receipt.referenceId }, { headers: { 'cache-control': 'no-store' } });
  } catch (error) {
    const result = getIntegrationError(error);
    return Response.json({ success: false, ...result }, { status: result.status, headers: { 'cache-control': 'no-store' } });
  }
}
