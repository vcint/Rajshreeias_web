# Google Sheets Integration Setup Guide

## Overview
This integration allows the contact form to automatically submit data to a Google Sheets spreadsheet, creating a backend database for storing student enrollments and inquiries.

## Prerequisites
1. Google Account
2. Access to Google Sheets
3. Google Cloud Console access

## Setup Steps

### 1. Create Google Sheets Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Rajashree IAS Portal - Enrollments"
4. Set up the header row in Row 1:
   ```
   A1: Timestamp
   B1: Full Name
   C1: Email
   D1: Phone
   E1: Course
   F1: Education Level
   G1: Previous Attempts
   H1: Year of Attempt
   I1: Optional Subject
   J1: Message
   ```
5. Copy the spreadsheet ID from the URL (the long string between `/spreadsheets/d/` and `/edit`)

### 2. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Name it "Rajashree IAS Portal"

### 3. Enable Google Sheets API

1. In Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and enable the API

### 4. Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in details:
   - Service Account Name: `rajashree-ias-sheets`
   - Service Account ID: `rajashree-ias-sheets`
   - Description: `Service account for Google Sheets integration`
4. Click "Create and Continue"
5. Skip role assignment (click "Continue")
6. Click "Done"

### 5. Generate Service Account Key

1. In the Credentials page, click on your service account
2. Go to the "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Choose "JSON" format
5. Download the key file
6. Keep this file secure and never commit it to version control

### 6. Share Spreadsheet with Service Account

1. Open your Google Sheets spreadsheet
2. Click "Share" button
3. Add the service account email (found in the JSON key file as `client_email`)
4. Give it "Editor" permissions
5. Uncheck "Notify people"
6. Click "Share"

### 7. Configure Environment Variables

1. Open `.env.local` file in your project root
2. Replace the placeholder values:

```env
# Google Sheets Integration
GOOGLE_SHEETS_SPREADSHEET_ID=1234567890abcdefghijklmnopqrstuvwxyz
GOOGLE_SHEETS_CLIENT_EMAIL=rajashree-ias-sheets@your-project-name.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----"

# Optional: Email notifications
NOTIFICATION_EMAIL=admin@rajashreeiasportal.com

# Application Settings
NEXT_PUBLIC_SITE_URL=https://rajashreeiasportal.com
```

**How to get these values:**
- `GOOGLE_SHEETS_SPREADSHEET_ID`: From the spreadsheet URL
- `GOOGLE_SHEETS_CLIENT_EMAIL`: The `client_email` field from downloaded JSON
- `GOOGLE_SHEETS_PRIVATE_KEY`: The `private_key` field from downloaded JSON (include the full key with \\n characters)

### 8. Install Required Package

Run this command in your project directory:
```bash
npm install googleapis
```

### 9. Update API Route

In `/src/app/api/submit-enrollment/route.ts`, uncomment the Google Sheets integration code:

1. Uncomment the import: `import { google } from 'googleapis';`
2. Uncomment the Google Sheets API code (lines 20-55)
3. Comment out or remove the console.log fallback

### 10. Test the Integration

1. Start your development server: `npm run dev`
2. Go to `/enroll` page
3. Fill out and submit the form
4. Check your Google Sheets spreadsheet to see the new row

## Data Structure

Each form submission creates a new row with:
- **Timestamp**: When the form was submitted (IST timezone)
- **Full Name**: Student's complete name
- **Email**: Contact email address
- **Phone**: Phone number
- **Course**: Selected course/program
- **Education Level**: Graduate, Post-graduate, etc.
- **Previous Attempts**: Number of previous UPSC attempts
- **Year of Attempt**: Year of last attempt
- **Optional Subject**: Chosen optional subject
- **Message**: Additional message from student

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **Service Account**: Keep the JSON key file secure
3. **Spreadsheet Permissions**: Only share with necessary accounts
4. **API Validation**: The API validates required fields before submission

## Troubleshooting

### Common Issues:

1. **"Server configuration error"**
   - Check environment variables are set correctly
   - Ensure private key includes \\n characters

2. **"Permission denied"**
   - Verify service account has access to spreadsheet
   - Check API is enabled in Google Cloud Console

3. **"Spreadsheet not found"**
   - Verify spreadsheet ID is correct
   - Ensure spreadsheet exists and is accessible

### Debug Mode:

Add this to your API route for debugging:
```javascript
console.log('Environment check:', {
    hasSpreadsheetId: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    hasClientEmail: !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    hasPrivateKey: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY
});
```

## Additional Features (Optional)

### Email Notifications
You can add email notifications when new enrollments are received by integrating with services like:
- SendGrid
- Nodemailer
- Resend

### Data Validation
Consider adding more robust validation:
- Phone number format validation
- Email format validation
- Required field validation

### Analytics
Track form submissions and conversion rates:
- Google Analytics events
- Custom analytics dashboard
- Monthly enrollment reports

## Maintenance

1. **Regular Backups**: Export spreadsheet data regularly
2. **Monitor Usage**: Check API quotas in Google Cloud Console
3. **Update Dependencies**: Keep googleapis package updated
4. **Security Review**: Rotate service account keys periodically

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check server logs for API errors
3. Verify environment variables
4. Test with minimal form data first

This integration provides a robust, free backend for your contact form without needing a complex database setup!