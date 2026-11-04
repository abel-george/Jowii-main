/**
 * Jowih Foundation - Form Integration Script
 * 
 * This script receives newsletter and contact form submissions from the Next.js website and stores them in Google Sheets.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Create these sheets/tabs: "Newsletter", "Contact"
 * 3. Add these column headers to each sheet:
 * 
 * NEWSLETTER SHEET:
 * Timestamp | First Name | Last Name | Email | Reference ID
 * 
 * CONTACT SHEET:
 * Timestamp | Name | Email | Interest | Message | Reference ID
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
  newsletter: 'Newsletter',
  contact: 'Contact'
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
    ]
  };
  
  return headers[formType] || [];
}

function prepareRowData(formType, data, referenceId) {
  const timestamp = new Date().toISOString();
  
  const rows = {
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
    formType: 'newsletter',
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  return doPost(mockEvent);
}
