export interface FormResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  timestamp?: string;
}

async function postForm<T>(endpoint: string, data: unknown): Promise<T> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => null) as { message?: string } | null;
  if (!response.ok) {
    throw new Error(result?.message || 'The request could not be completed. Please try again later.');
  }
  return result as T;
}

export async function subscribeToNewsletter(data: {
  firstName: string;
  lastName: string;
  email: string;
}): Promise<FormResponse> {
  if (!data.firstName.trim() || !data.lastName.trim() || !data.email.trim()) {
    throw new Error('Please fill out all required fields.');
  }
  return postForm<FormResponse>('/api/newsletter', data);
}

export interface ContactFormData {
  name: string;
  email: string;
  interest: string;
  message: string;
}

export async function submitContactRequest(data: ContactFormData): Promise<FormResponse> {
  if (!data.name || !data.email || !data.message) {
    throw new Error('Please fill out all fields.');
  }

  return postForm<FormResponse>('/api/contact', data);
}

export interface DonationIntentData {
  name: string;
  email: string;
  amount: number;
  currency: string;
}

export async function createDonationIntent(data: DonationIntentData): Promise<{ success: boolean; checkoutUrl: string }> {
  if (!data.name.trim() || !data.email.trim()) {
    throw new Error('Please enter your name and email address.');
  }
  return postForm<{ success: boolean; checkoutUrl: string }>('/api/donations/intent', data);
}
