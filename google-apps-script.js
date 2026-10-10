/**
 * Jowih Foundation - Form Integration Script
 * 
 * This script receives form submissions from the Next.js website and stores them in Google Sheets.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Create these sheets/tabs: "Waitlist", "Newsletter", "Contact", "Partners"
 * 3. Add these column headers to each sheet:
 * 
 * WAITLIST SHEET:
 * Timestamp | First Name | Last Name | Email | Phone | Organisation | Role | Country | Interest Category | Notes | Reference ID
 * 
 * NEWSLETTER SHEET:
 * Timestamp | First Name | Last Name | Email | Reference ID
 * 
 * CONTACT SHEET:
 * Timestamp | Name | Email | Interest | Message | Reference ID
 * 
 * PARTNERS SHEET:
 * Timestamp | Partner Type | Name | Email | Country | Phone | Website | Partnership Areas | Contribution Type | Message | Additional Info | Reference ID
 * 
 * 4. Go to Extensions > Apps Script
 * 5. Paste this code
 * 6. Deploy as Web App:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 7. Copy the Web App URL
 * 8. Add to your .env.local file:
 *    GOOGLE_APPS_SCRIPT_URL=your-web-app-url
 */

const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your Google Sheet ID

// Sheet names
const SHEETS = {
  waitlist: 'Waitlist',
  newsletter: 'Newsletter',
  contact: 'Contact',
  partners: 'Partners'
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // Wait up to 10 seconds for exclusive access
    
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;
    
    // Validate form type
    if (!SHEETS[formType]) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid form type'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Generate reference ID
    const referenceId = Utilities.getUuid();
    
    // Get the sheet
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEETS[formType]);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Sheet not found: ' + SHEETS[formType]
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(getHeaders(formType));
    }
    
    // Prepare row data
    const rowData = prepareRowData(formType, data, referenceId);
    
    // Append to sheet
    sheet.appendRow(rowData);
    
    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      referenceId: referenceId
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function getHeaders(formType) {
  const headers = {
    waitlist: [
      'Timestamp',
      'First Name',
      'Last Name',
      'Email',
      'Phone',
      'Organisation',
      'Role',
      'Country',
      'Interest Category',
      'Notes',
      'Reference ID'
    ],
    newsletter: [
      'Timestamp',
      'First Name',
      'Last Name',
      'Email',
      'Reference ID'
    ],
    contact: [
      'Timestamp',
      'Name',
      'Email',
      'Interest',
      'Message',
      'Reference ID'
    ],
    partners: [
      'Timestamp',
      'Partner Type',
      'Name',
      'Email',
      'Country',
      'Phone',
      'Website',
      'Partnership Areas',
      'Contribution Type',
      'Message',
      'Additional Info',
      'Reference ID'
    ]
  };
  
  return headers[formType] || [];
}

function prepareRowData(formType, data, referenceId) {
  const timestamp = new Date().toISOString();
  
  const rows = {
    waitlist: [
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.organisation || '',
      data.role || '',
      data.country || '',
      data.interestCategory || '',
      data.notes || '',
      referenceId
    ],
    newsletter: [
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      referenceId
    ],
    contact: [
      timestamp,
      data.name || '',
      data.email || '',
      data.interest || '',
      data.message || '',
      referenceId
    ],
    partners: [
      timestamp,
      data.partnerType || '',
      data.name || '',
      data.email || '',
      data.country || '',
      data.phone || '',
      data.website || '',
      data.partnershipAreas || '',
      data.contributionType || '',
      data.message || '',
      data.additionalInfo || '',
      referenceId
    ]
  };
  
  return rows[formType] || [];
}

// Optional: Function to send email notification
function sendNotification(formType, data) {
  const recipient = 'your-email@example.com'; // Replace with your email
  
  const subject = `New ${formType} submission from Jowih Website`;
  const body = `
    You received a new ${formType} submission:
    
    Name: ${data.firstName || data.name || 'N/A'}
    Email: ${data.email || 'N/A'}
    
    Reference ID: ${Utilities.getUuid()}
    
    Check your Google Sheet for full details.
  `;
  
  MailApp.sendEmail(recipient, subject, body);
}

// Test function - run this to test the script
function testPost() {
  const testData = {
    formType: 'waitlist',
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '+1234567890',
    organisation: 'Test Org',
    role: 'Developer',
    country: 'Test Country',
    interestCategory: 'Technology',
    notes: 'Test submission'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  return doPost(mockEvent);
}
