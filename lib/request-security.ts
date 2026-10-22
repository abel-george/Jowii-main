const buckets = new Map<string, { count: number; resetAt: number }>();

export function clientIp(request: Request): string {
  return request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

export function rateLimit(request: Request, namespace: string, limit: number, windowMs: number): Response | null {
  const key = `${namespace}:${clientIp(request)}`;
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || current.resetAt <= now) buckets.set(key, { count: 1, resetAt: now + windowMs });
  else current.count += 1;
  const bucket = buckets.get(key)!;
  if (bucket.count > limit) {
    return Response.json({ success: false, message: 'Too many requests. Please try again later.', code: 'rate_limited' }, {
      status: 429,
      headers: { 'cache-control': 'no-store', 'retry-after': String(Math.ceil((bucket.resetAt - now) / 1000)) },
    });
  }
  return null;
}

export function sameOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

export function contentLengthWithin(request: Request, maxBytes: number): boolean {
  const value = request.headers.get('content-length');
  return !value || Number.isSafeInteger(Number(value)) && Number(value) <= maxBytes;
}

export function securityDenied(message = 'Invalid request origin.'): Response {
  return Response.json({ success: false, message, code: 'forbidden' }, { status: 403, headers: { 'cache-control': 'no-store' } });
}
