export type IntegrationName = 'waitlist' | 'newsletter' | 'contact' | 'donations';

export interface IntegrationReceipt {
  referenceId?: string;
  checkoutUrl?: string;
}

export class IntegrationError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code: string,
  ) {
    super(message);
    this.name = 'IntegrationError';
  }
}

const integrationConfig: Record<IntegrationName, { url: string | undefined; key: string | undefined }> = {
  waitlist: {
    url: process.env.WAITLIST_API_URL || process.env.GOOGLE_APPS_SCRIPT_URL,
    key: process.env.WAITLIST_API_KEY || process.env.GOOGLE_APPS_SCRIPT_API_KEY,
  },
  newsletter: {
    url: process.env.NEWSLETTER_API_URL || process.env.GOOGLE_APPS_SCRIPT_URL,
    key: process.env.NEWSLETTER_API_KEY || process.env.GOOGLE_APPS_SCRIPT_API_KEY,
  },
  contact: {
    url: process.env.CONTACT_API_URL || process.env.GOOGLE_APPS_SCRIPT_URL,
    key: process.env.CONTACT_API_KEY || process.env.GOOGLE_APPS_SCRIPT_API_KEY,
  },
  donations: {
    url: process.env.DONATION_API_URL,
    key: process.env.DONATION_API_KEY,
  },
};

export function isIntegrationConfigured(name: IntegrationName): boolean {
  if (name === 'donations') {
    return process.env.DONATIONS_ACCEPTING === 'true' && Boolean(integrationConfig[name].url);
  }
  return Boolean(integrationConfig[name].url);
}

export async function deliverToIntegration(
  name: IntegrationName,
  payload: Record<string, unknown>,
  requireCheckoutUrl = false,
): Promise<IntegrationReceipt> {
  const config = integrationConfig[name];
  if (!config.url || !isIntegrationConfigured(name)) {
    throw new IntegrationError(
      name === 'donations'
        ? 'Online contributions are not open yet. No payment has been taken.'
        : 'This form is not connected yet. Please try again later.',
      503,
      'integration_not_configured',
    );
  }

  let endpoint: URL;
  try {
    endpoint = new URL(config.url);
  } catch {
    throw new IntegrationError('The configured service endpoint is invalid.', 503, 'invalid_integration_config');
  }

  if (endpoint.protocol !== 'https:' && endpoint.hostname !== 'localhost' && endpoint.hostname !== '127.0.0.1') {
    throw new IntegrationError('The configured service endpoint must use HTTPS.', 503, 'invalid_integration_config');
  }

  const headers = new Headers({
    'content-type': 'application/json',
    'x-jowih-submission-type': name,
  });
  if (config.key) headers.set('authorization', `Bearer ${config.key}`);

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ ...payload, formType: name, submittedAt: new Date().toISOString() }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    });
  } catch {
    throw new IntegrationError('The connected service could not be reached. Please try again later.', 502, 'integration_unavailable');
  }

  if (!response.ok) {
    throw new IntegrationError('The connected service did not accept this submission. Please try again later.', 502, 'integration_rejected');
  }

  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('text/html')) {
    throw new IntegrationError('The connected service returned an unexpected response.', 502, 'integration_invalid_response');
  }

  let receipt: IntegrationReceipt = {};
  if (contentType.includes('application/json')) {
    let result: unknown;
    try {
      result = await response.json();
    } catch {
      throw new IntegrationError('The connected service returned an unexpected response.', 502, 'integration_invalid_response');
    }
    if (typeof result === 'object' && result !== null) {
      const data = result as Record<string, unknown>;
      if (data.success === false || data.ok === false) {
        throw new IntegrationError('The connected service did not accept this submission. Please try again later.', 502, 'integration_rejected');
      }
      const referenceId = typeof data.referenceId === 'string' ? data.referenceId : undefined;
      const checkoutUrl = typeof data.checkoutUrl === 'string' ? data.checkoutUrl : undefined;
      receipt = { referenceId, checkoutUrl };
    }
  }

  if (requireCheckoutUrl) {
    if (!receipt.checkoutUrl) {
      throw new IntegrationError('The payment service did not return a secure checkout link. No payment has been taken.', 502, 'checkout_unavailable');
    }
    let checkoutUrl: URL;
    try {
      checkoutUrl = new URL(receipt.checkoutUrl);
    } catch {
      throw new IntegrationError('The payment service returned an invalid checkout link.', 502, 'checkout_invalid');
    }
    if (checkoutUrl.protocol !== 'https:') {
      throw new IntegrationError('The payment service returned an invalid checkout link.', 502, 'checkout_invalid');
    }
  }

  return receipt;
}

export function getIntegrationError(error: unknown): { message: string; status: number; code: string } {
  if (error instanceof IntegrationError) {
    return { message: error.message, status: error.status, code: error.code };
  }
  return { message: 'The request could not be completed. Please try again later.', status: 500, code: 'unexpected_error' };
}

export function readText(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}