# Google Forms Integration Setup Guide

This guide will help you connect all your forms (Waitlist, Newsletter, Contact, Partners) to Google Sheets for real-time data collection.

## Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new sheet
3. Create 4 tabs/sheets with these exact names:
   - `Waitlist`
   - `Newsletter`
   - `Contact`
   - `Partners`

## Step 2: Add Headers to Each Sheet

### Waitlist Sheet Headers (Row 1):
```
Timestamp | First Name | Last Name | Email | Phone | Organisation | Role | Country | Interest Category | Notes | Reference ID
```

### Newsletter Sheet Headers (Row 1):
```
Timestamp | First Name | Last Name | Email | Reference ID
```

### Contact Sheet Headers (Row 1):
```
Timestamp | Name | Email | Interest | Message | Reference ID
```

### Partners Sheet Headers (Row 1):
```
Timestamp | Partner Type | Name | Email | Country | Phone | Website | Partnership Areas | Contribution Type | Message | Additional Info | Reference ID
```

## Step 3: Add the Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Copy the entire content from `google-apps-script.js` in this project
4. Paste it into the Apps Script editor
5. **IMPORTANT**: Find this line in the script:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
   ```
6. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual Google Sheet ID:
   - Your sheet URL looks like: `https://docs.google.com/spreadsheets/d/1ABC...XYZ/edit`
   - The ID is the part between `/d/` and `/edit`: `1ABC...XYZ`

## Step 4: Deploy as Web App

1. In the Apps Script editor, click **Deploy > New deployment**
2. Click the gear icon ⚙️ and select **Web app**
3. Configure:
   - **Description**: Jowih Forms Integration
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your Web App URL:
   ```bash
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec
   ```

3. You can also add an API key (optional):
   ```bash
   GOOGLE_APPS_SCRIPT_API_KEY=your-secret-key
   ```

## Step 6: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Try submitting a test form (e.g., the waitlist form)

3. Check your Google Sheet - the submission should appear automatically

## Form Data Mapping

### Waitlist Form → Waitlist Sheet
- firstName → First Name
- lastName → Last Name
- email → Email
- phone → Phone
- organisation → Organisation
- role → Role
- country → Country
- interestCategory → Interest Category
- notes → Notes

### Newsletter Form → Newsletter Sheet
- firstName → First Name
- lastName → Last Name
- email → Email

### Contact Form → Contact Sheet
- name → Name
- email → Email
- interest → Interest
- message → Message

### Partners Form → Partners Sheet
- partnerType → Partner Type
- name → Name
- email → Email
- country → Country
- phone → Phone
- website → Website
- partnershipAreas → Partnership Areas
- contributionType → Contribution Type
- message → Message
- additionalInfo → Additional Info

## Troubleshooting

### Form submissions not appearing in Google Sheet
- Check that the Web App URL is correct in `.env.local`
- Verify the Apps Script was deployed with "Who has access: Anyone"
- Check the Apps Script deployment logs (View > Executions)
- Ensure sheet names match exactly (case-sensitive)

### Error: "This form is not connected yet"
- The `GOOGLE_APPS_SCRIPT_URL` is not set in `.env.local`
- Restart the dev server after adding the environment variable

### Error: "The connected service returned an unexpected response"
- The Apps Script may have an error - check the deployment logs
- Verify the SPREADSHEET_ID is correct

## Optional: Email Notifications

To receive email notifications when forms are submitted:

1. In the Apps Script, uncomment the `sendNotification` function call
2. Change the email address in the function:
   ```javascript
   const recipient = 'your-email@example.com';
   ```
3. Redeploy the Web App

## Security Notes

- The Web App URL is publicly accessible - anyone could technically POST to it
- For production, consider adding an API key (`GOOGLE_APPS_SCRIPT_API_KEY`)
- Add email notification for monitoring form submissions
- The Google Sheet should be shared only with trusted team members
