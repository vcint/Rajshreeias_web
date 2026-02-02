# Google Sheets Integration Installation

## Quick Setup Commands

### 1. Install Required Package
```bash
# Try this first
npm install googleapis

# If the above fails due to SSL issues, try:
npm install googleapis --legacy-peer-deps

# Or if still having issues:
yarn add googleapis
```

### 2. Verify Installation
```bash
npm list googleapis
```

### 3. Test Environment Variables
Create a simple test file to verify your environment variables are loaded correctly:

```javascript
// test-env.js
console.log('Environment Variables Check:');
console.log('GOOGLE_SHEETS_SPREADSHEET_ID:', process.env.GOOGLE_SHEETS_SPREADSHEET_ID ? 'Set' : 'Not set');
console.log('GOOGLE_SHEETS_CLIENT_EMAIL:', process.env.GOOGLE_SHEETS_CLIENT_EMAIL ? 'Set' : 'Not set');
console.log('GOOGLE_SHEETS_PRIVATE_KEY:', process.env.GOOGLE_SHEETS_PRIVATE_KEY ? 'Set (length: ' + process.env.GOOGLE_SHEETS_PRIVATE_KEY.length + ')' : 'Not set');

// Run with: node -r dotenv/config test-env.js
```

## Alternative Package Managers

If npm is having SSL issues:

### Using Yarn:
```bash
yarn add googleapis
```

### Using pnpm:
```bash
pnpm add googleapis
```

### Manual Installation (if all else fails):
```bash
npm config set strict-ssl false
npm install googleapis
npm config set strict-ssl true
```

## Development Server Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Enable Google Sheets Integration

Once the package is installed, uncomment these lines in `/src/app/api/submit-enrollment/route.ts`:

1. Line 2: `import { google } from 'googleapis';`
2. Lines 20-55: The entire Google Sheets API integration block

The form will then submit data directly to your Google Sheets spreadsheet!