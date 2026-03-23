import { NextRequest, NextResponse } from 'next/server';
import { 
  getCourses, 
  getSiteSettings, 
  getFaqs, 
  getTestimonials, 
  getStudentReviews, 
  getResources,
  initializeTables
} from '@/lib/database';
import { promises as fs } from 'fs';
import path from 'path';

// JSON file fallback function
async function getJsonData(filename: string) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', filename);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading JSON file ${filename}:`, error);
    return [];
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const file = searchParams.get('file');

    // Support both 'type' and 'file' parameters for backwards compatibility
    let dataType = type;
    if (file && !type) {
      dataType = file.replace('.json', '');
    }

    if (!dataType) {
      return NextResponse.json({ success: false, error: 'No data type specified' }, { status: 400 });
    }

    // Validate data type
    const allowedTypes = ['courses', 'site-settings', 'testimonials', 'faqs', 'resources', 'student-reviews'];
    if (!allowedTypes.includes(dataType)) {
      return NextResponse.json({ success: false, error: 'Invalid data type' }, { status: 400 });
    }

    let data;
    
    // Try database first, fallback to JSON
    try {
      await initializeTables();
      
      switch (dataType) {
        case 'courses':
          data = await getCourses();
          break;
        case 'site-settings':
          data = await getSiteSettings();
          break;
        case 'faqs':
          data = await getFaqs();
          break;
        case 'testimonials':
          data = await getTestimonials();
          break;
        case 'student-reviews':
          data = await getStudentReviews();
          break;
        case 'resources':
          data = await getResources();
          break;
        default:
          throw new Error('Invalid data type');
      }
    } catch (dbError) {
      // Fallback to JSON files
      switch (dataType) {
        case 'courses':
          data = await getJsonData('courses.json');
          break;
        case 'site-settings':
          data = await getJsonData('site-settings.json');
          break;
        case 'faqs':
          data = await getJsonData('faqs.json');
          break;
        case 'testimonials':
          data = await getJsonData('testimonials.json');
          break;
        case 'student-reviews':
          data = await getJsonData('student-reviews.json');
          break;
        case 'resources':
          data = await getJsonData('resources.json');
          break;
        default:
          throw new Error('Invalid data type');
      }
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Get content error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to read content' 
    }, { status: 500 });
  }
}