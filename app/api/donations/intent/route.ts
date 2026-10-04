import { deliverToIntegration, getIntegrationError, isValidEmail, readText } from '@/lib/server-integrations';

const allowedAmounts = new Set([10, 25, 50, 100, 250, 500, 1000]);
const allowedCurrencies = new Set(['USD', 'KES', 'GBP', 'EUR', 'CAD', 'AUD']);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: 'Submit the form as JSON.', code: 'invalid_request' }, { status: 400 });
  }

  const name = readText(body.name, 160);
  const email = readText(body.email, 254).toLowerCase();
  const amount = Number(body.amount);
  const currency = readText(body.currency, 3).toUpperCase();
  if (!name || !isValidEmail(email) || !allowedAmounts.has(amount) || !allowedCurrencies.has(currency)) {
    return Response.json({ success: false, message: 'Enter valid donor details, a listed contribution amount and currency.', code: 'invalid_fields' }, { status: 400 });
  }

  try {
    const receipt = await deliverToIntegration('donations', {
      name,
      email,
      amount,
      currency,
      purpose: 'pre-launch structural registration and setup',
      classification: 'donation-not-investment',
    }, true);
    return Response.json({ success: true, checkoutUrl: receipt.checkoutUrl }, { headers: { 'cache-control': 'no-store' } });
  } catch (error) {
    const result = getIntegrationError(error);
    return Response.json({ success: false, ...result }, { status: result.status, headers: { 'cache-control': 'no-store' } });
  }
}