# Security audit and controls

## Scope

This audit covers the Next.js application, public form APIs, admin news/media APIs, archive rendering, and deployment configuration.

## Controls added

- Global CSP, clickjacking, MIME-sniffing, referrer, permissions, opener, and resource policy headers in `middleware.ts`.
- Same-origin checks on all browser mutation endpoints to reduce cross-site request forgery.
- Request-size bounds before JSON and multipart parsing.
- Per-IP rate limits on public submissions, donation intents, admin authentication, news mutations, and media operations.
- Constant-time comparison for the admin bearer token.
- Admin secrets shorter than 32 characters are rejected as unconfigured.
- Upload content is checked against file signatures, not only the client-provided MIME type.
- Admin APIs continue to fail closed when `ADMIN_UPLOAD_TOKEN` or Blob storage is absent.
- External integration URLs require HTTPS outside local development, and payment checkout URLs require HTTPS.
- User-controlled news fields are rendered as text by React rather than injected as HTML.

## Deployment requirements

- Set `ADMIN_UPLOAD_TOKEN` to a random value of at least 32 bytes, rotate it if it has ever been shared, and never put it in client code or logs.
- Keep `BLOB_READ_WRITE_TOKEN` and integration API keys server-only Vercel environment variables.
- Enable Vercel WAF/rate limiting or an equivalent edge control. The in-process limiter is defense-in-depth and is not a substitute for a distributed limiter across serverless instances.
- Keep production HTTPS enabled. Add HSTS only after confirming every production and asset domain is permanently HTTPS.
- Run dependency auditing in CI where registry access is available; this environment could not reach the npm advisory endpoint.

## Residual risks

- Public news/media URLs are intentionally public because published news is public. Do not upload confidential material.
- The current CSP allows inline scripts/styles because the existing Next.js/UI stack uses them. A future nonce-based CSP would further reduce XSS risk but requires coordinated framework changes.
- Public form abuse still depends on upstream integration quotas and the deployment WAF in addition to the application limiter.
