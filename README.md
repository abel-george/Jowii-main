# Jowih Institutional Website

The site presents the proposed Jowih Foundation, Great African Grid and ASTA OS frameworks. Source PDFs in `public/documents/` are the reference material; proposed legal, financial and technical structures must not be presented as active without verification.

## Development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000` by default.

## Form Providers

Server-side Route Handlers send waitlist, newsletter and contact submissions to configured endpoints. Copy `.env.example` to `.env.local` and configure the relevant provider URL and optional API key. Provider endpoints receive a JSON `POST` with a `formType` field and should return JSON such as `{"success":true,"referenceId":"..."}`. Google Apps Script web apps can be used through `GOOGLE_APPS_SCRIPT_URL` when they accept JSON and return JSON.

With no provider configured, the APIs return an explicit unavailable response. They do not store submissions in browser storage or report fabricated success.

Donation checkout is separately controlled by `DONATION_API_URL`, `DONATION_API_KEY` and `DONATIONS_ACCEPTING=true`. The donation provider must return a verified HTTPS `checkoutUrl`. Keep `DONATIONS_ACCEPTING=false` until the receiving trust/account, legal terms and PSP checkout have been independently verified and tested. The site itself does not store card or payment details.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```
