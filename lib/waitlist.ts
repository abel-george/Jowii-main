export interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  country: string;
  interestCategory: string;
  notes?: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  timestamp?: string;
}

export const INTEREST_OPTIONS = [
  'Founder / Builder',
  'Future capital architecture inquiry',
  'Startup Team',
  'Corporate Enterprise',
  'Government & Policy Maker',
  'Student / Academic Researcher',
  'Developer / Engineer',
  'Delivery & Infrastructure Partner',
  'Media & Storyteller',
  'Diaspora Member',
  'Other',
];

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

export async function submitWaitlist(data: WaitlistFormData): Promise<WaitlistResponse> {
  if (!data.email || !data.firstName || !data.lastName || !data.organisation) {
    throw new Error('Please fill out all required fields.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error('Please provide a valid email address.');
  }

  return postForm<WaitlistResponse>('/api/waitlist', data);
}

export async function subscribeToNewsletter(data: {
  firstName: string;
  lastName: string;
  email: string;
}): Promise<WaitlistResponse> {
  if (!data.firstName.trim() || !data.lastName.trim() || !data.email.trim()) {
    throw new Error('Please fill out all required fields.');
  }
  return postForm<WaitlistResponse>('/api/newsletter', data);
}

export interface ContactFormData {
  name: string;
  email: string;
  interest: string;
  message: string;
}

export async function submitContactRequest(data: ContactFormData): Promise<WaitlistResponse> {
  if (!data.name || !data.email || !data.message) {
    throw new Error('Please fill out all fields.');
  }

  return postForm<WaitlistResponse>('/api/contact', data);
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
