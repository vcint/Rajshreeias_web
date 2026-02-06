/**
 * Google Apps Script for Free Google Sheets Integration
 * This script creates a web app that accepts form submissions and stores them in Google Sheets
 * 
 * Setup Instructions:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Update SPREADSHEET_ID with your actual spreadsheet ID
 * 5. Deploy as a web app with permissions for "Anyone"
 * 6. Copy the web app URL and use it in your frontend
 */

// Replace with your actual Google Sheets ID
const SPREADSHEET_ID = 'your_spreadsheet_id_here';

// Main function to handle POST requests
function doPost(e) {
  try {
    let data = {};
    
    // Handle form data submission from frontend
    if (e && e.parameter) {
      data = e.parameter;
    } else {
      return ContentService
        .createTextOutput('No data received')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.phone || !data.course) {
      return ContentService
        .createTextOutput('Missing required fields')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // Get the spreadsheet and write data
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName('Sheet1') || spreadsheet.getSheets()[0];
    
    // Prepare timestamp in IST
    const now = new Date();
    const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
    const timestamp = Utilities.formatDate(istTime, 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
    
    // Prepare row data
    const rowData = [
      timestamp,
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.course || '',
      data.educationLevel || 'Not specified',
      data.previousAttempts || 'Not specified',
      data.yearOfAttempt || 'Not specified',
      data.optionalSubject || 'Not specified',
      data.message || 'No message'
    ];
    
    // Write to spreadsheet
    sheet.appendRow(rowData);
    
    // Return 200 success response only after successful write
    return ContentService
      .createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

// Handle GET requests (optional - for testing)
function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script is running')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Simple test to check spreadsheet connection
function testSpreadsheetConnection() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName('Sheet1') || spreadsheet.getSheets()[0];
    
    // Test writing a simple row
    const testRow = [new Date(), 'Test Name', 'test@email.com', '9876543210', 'test-course'];
    sheet.appendRow(testRow);
    
    return 'Test row added successfully';
  } catch (error) {
    return 'Error: ' + error.toString();
  }
}