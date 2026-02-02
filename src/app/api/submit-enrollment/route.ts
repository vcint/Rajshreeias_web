import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Validation schemas
interface EnrollmentData {
    fullName: string;
    email: string;
    phone: string;
    course: string;
    educationLevel?: string;
    previousAttempts?: string;
    yearOfAttempt?: string;
    optionalSubject?: string;
    message?: string;
}

// Validation functions
function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
    // Indian phone number validation (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/\s+/g, '').replace(/[^\d]/g, '');
    return phoneRegex.test(cleanPhone);
}

function validateName(name: string): boolean {
    // Name should be at least 2 characters and only contain letters, spaces, dots
    const nameRegex = /^[A-Za-z.\s]{2,50}$/;
    return nameRegex.test(name.trim());
}

function validateCourse(course: string): boolean {
    const validCourses = [
        'upsc-foundation',
        'mpsc-complete',
        'upsc-prelims',
        'mains-writing',
        'history-optional',
        'current-affairs',
        'interview',
        'other'
    ];
    return validCourses.includes(course);
}

function validateEducationLevel(level?: string): boolean {
    if (!level) return true; // Optional field
    const validLevels = ['graduate', 'post-graduate', 'final-year', 'other'];
    return validLevels.includes(level);
}

function validatePreviousAttempts(attempts?: string): boolean {
    if (!attempts) return true; // Optional field
    const validAttempts = ['0', '1', '2', '3'];
    return validAttempts.includes(attempts);
}

function validateYearOfAttempt(year?: string): boolean {
    if (!year) return true; // Optional field
    const currentYear = new Date().getFullYear();
    const yearNum = parseInt(year);
    return yearNum >= 2020 && yearNum <= currentYear;
}

function validateOptionalSubject(subject?: string): boolean {
    if (!subject) return true; // Optional field
    const validSubjects = [
        'history', 'geography', 'public-administration', 'sociology',
        'political-science', 'economics', 'anthropology', 'philosophy',
        'psychology', 'not-decided'
    ];
    return validSubjects.includes(subject);
}

function sanitizeString(str: string): string {
    return str.trim().replace(/[<>]/g, ''); // Basic XSS protection
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        
        // Type checking and basic validation
        if (!body || typeof body !== 'object') {
            return NextResponse.json(
                { error: 'Invalid request body' }, 
                { status: 400 }
            );
        }

        const { fullName, email, phone, course, educationLevel, previousAttempts, yearOfAttempt, optionalSubject, message } = body;

        // Validate required fields existence
        if (!fullName || !email || !phone || !course) {
            return NextResponse.json(
                { error: 'Missing required fields: Full Name, Email, Phone, and Course are required' }, 
                { status: 400 }
            );
        }

        // Validate data types
        if (typeof fullName !== 'string' || typeof email !== 'string' || 
            typeof phone !== 'string' || typeof course !== 'string') {
            return NextResponse.json(
                { error: 'Invalid data types for required fields' }, 
                { status: 400 }
            );
        }

        // Sanitize inputs
        const sanitizedData: EnrollmentData = {
            fullName: sanitizeString(fullName),
            email: sanitizeString(email),
            phone: sanitizeString(phone),
            course: sanitizeString(course),
            educationLevel: educationLevel ? sanitizeString(educationLevel) : undefined,
            previousAttempts: previousAttempts ? sanitizeString(previousAttempts) : undefined,
            yearOfAttempt: yearOfAttempt ? sanitizeString(yearOfAttempt) : undefined,
            optionalSubject: optionalSubject ? sanitizeString(optionalSubject) : undefined,
            message: message ? sanitizeString(message) : undefined
        };

        // Detailed field validation
        const validationErrors: string[] = [];

        // Validate full name
        if (!validateName(sanitizedData.fullName)) {
            validationErrors.push('Full Name must be 2-50 characters long and contain only letters, spaces, and dots');
        }

        // Validate email
        if (!validateEmail(sanitizedData.email)) {
            validationErrors.push('Please enter a valid email address');
        }

        // Validate phone
        if (!validatePhone(sanitizedData.phone)) {
            validationErrors.push('Please enter a valid 10-digit Indian phone number');
        }

        // Validate course
        if (!validateCourse(sanitizedData.course)) {
            validationErrors.push('Please select a valid course');
        }

        // Validate optional fields if provided
        if (sanitizedData.educationLevel && !validateEducationLevel(sanitizedData.educationLevel)) {
            validationErrors.push('Please select a valid education level');
        }

        if (sanitizedData.previousAttempts && !validatePreviousAttempts(sanitizedData.previousAttempts)) {
            validationErrors.push('Please select a valid number of previous attempts');
        }

        if (sanitizedData.yearOfAttempt && !validateYearOfAttempt(sanitizedData.yearOfAttempt)) {
            validationErrors.push('Please select a valid year of attempt (2020-present)');
        }

        if (sanitizedData.optionalSubject && !validateOptionalSubject(sanitizedData.optionalSubject)) {
            validationErrors.push('Please select a valid optional subject');
        }

        // Message length validation
        if (sanitizedData.message && sanitizedData.message.length > 1000) {
            validationErrors.push('Message must be less than 1000 characters');
        }

        // Return validation errors if any
        if (validationErrors.length > 0) {
            return NextResponse.json(
                { 
                    error: 'Validation failed', 
                    details: validationErrors 
                }, 
                { status: 400 }
            );
        }

        // Get environment variables
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
        const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
        const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

        if (!spreadsheetId || !clientEmail || !privateKey) {
            console.error('Missing Google Sheets environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' }, 
                { status: 500 }
            );
        }

        // Configure Google Sheets API
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Prepare data for Google Sheets
        const timestamp = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        const rowData = [
            timestamp,
            sanitizedData.fullName,
            sanitizedData.email,
            sanitizedData.phone,
            sanitizedData.course,
            sanitizedData.educationLevel || 'Not specified',
            sanitizedData.previousAttempts || 'Not specified',
            sanitizedData.yearOfAttempt || 'Not specified',
            sanitizedData.optionalSubject || 'Not specified',
            sanitizedData.message || 'No message'
        ];

        // Add data to Google Sheets
        await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: 'Sheet1!A:J', // Adjust range as needed
            valueInputOption: 'RAW',
            requestBody: {
                values: [rowData],
            },
        });

        return NextResponse.json({ 
            success: true, 
            message: 'Enrollment submitted successfully' 
        });

    } catch (error) {
        console.error('Error submitting enrollment:', error);
        return NextResponse.json(
            { error: 'Failed to submit enrollment' }, 
            { status: 500 }
        );
    }
}