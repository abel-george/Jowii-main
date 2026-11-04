# Newsletter and Contact Form Integration

The optional Google Apps Script integration is for newsletter and contact submissions only. Partnership and developer community pages send visitors directly to the ASTA OS Discord; they do not collect form details or write to a spreadsheet. Ticket booking and waitlist pages and their submission endpoints have been removed.

## Create the spreadsheet

Create a Google Sheet with two tabs named exactly:

- `Newsletter`
- `Contact`

The script adds the column headings the first time a tab is used.

## Deploy the Apps Script

1. Open **Extensions > Apps Script** from the spreadsheet.
2. Replace the editor contents with [`google-apps-script.js`](./google-apps-script.js).
3. Set `SPREADSHEET_ID` in the script to the ID from the Google Sheet URL.
4. Deploy the script as a Web App and copy its deployment URL.
5. Add the URL to the server's `.env.local` as `GOOGLE_APPS_SCRIPT_URL`.
6. If configured, set `GOOGLE_APPS_SCRIPT_API_KEY` to the same secret used by the server.

The Web App should accept JSON `POST` requests and return JSON. Keep the spreadsheet private and use an API key to reduce unauthorized submissions.

## Supported form data

- Newsletter: first name, last name, email
- Contact: name, email, interest, message

Do not add waitlist or partner application tabs: those forms have been retired and community participation is handled through Discord.
