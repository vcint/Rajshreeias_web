import { NextRequest, NextResponse } from 'next/server';
import { 
  updateCourses, 
  updateSiteSettings, 
  updateFaqs, 
  updateTestimonials, 
  updateStudentReviews, 
  updateResources
} from '@/lib/database';
import { promises as fs } from 'fs';
import path from 'path';

// JSON file fallback function
async function updateJsonFile(filename: string, newData: any) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', filename);
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2));
    return { success: true };
  } catch (error) {
    console.error(`Error writing JSON file ${filename}:`, error);
    return { success: false, error: 'Failed to write JSON file' };
  }
}

export async function POST(request: NextRequest) {
  try {
    const { file, type, data } = await request.json();

    // Support both 'type' and 'file' parameters for backwards compatibility
    let dataType = type;
    if (file && !type) {
      dataType = file.replace('.json', '');
    }

    if (!dataType || !data) {
      return NextResponse.json({ success: false, error: 'Missing data type or data' }, { status: 400 });
    }

    // Validate data type
    const allowedTypes = ['courses', 'site-settings', 'testimonials', 'faqs', 'resources', 'student-reviews'];
    if (!allowedTypes.includes(dataType)) {
      return NextResponse.json({ success: false, error: 'Invalid data type' }, { status: 400 });
    }

    let result;

    // Try database first, fallback to JSON
    try {
      switch (dataType) {
        case 'courses':
          result = await updateCourses(data);
          break;
        case 'site-settings':
          result = await updateSiteSettings(data);
          break;
        case 'faqs':
          result = await updateFaqs(data);
          break;
        case 'testimonials':
          result = await updateTestimonials(data);
          break;
        case 'student-reviews':
          result = await updateStudentReviews(data);
          break;
        case 'resources':
          result = await updateResources(data);
          break;
        default:
          throw new Error('Invalid data type');
      }
    } catch (dbError) {
      // Fallback to JSON files
      switch (dataType) {
        case 'courses':
          result = await updateJsonFile('courses.json', data);
          break;
        case 'site-settings':
          result = await updateJsonFile('site-settings.json', data);
          break;
        case 'faqs':
          result = await updateJsonFile('faqs.json', data);
          break;
        case 'testimonials':
          result = await updateJsonFile('testimonials.json', data);
          break;
        case 'student-reviews':
          result = await updateJsonFile('student-reviews.json', data);
          break;
        case 'resources':
          result = await updateJsonFile('resources.json', data);
          break;
        default:
          throw new Error('Invalid data type');
      }
    }

    return NextResponse.json(result);

  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update content' 
    }, { status: 500 });
  }
}