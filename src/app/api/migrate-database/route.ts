import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { 
  initializeTables,
  updateCourses, 
  updateSiteSettings, 
  updateFaqs, 
  updateTestimonials, 
  updateStudentReviews, 
  updateResources
} from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    // Initialize database tables
    await initializeTables();

    // Migration data from JSON files
    const contentDir = path.join(process.cwd(), 'src', 'content');
    
    // Migrate courses
    try {
      const coursesData = await fs.readFile(path.join(contentDir, 'courses.json'), 'utf8');
      await updateCourses(JSON.parse(coursesData));
      console.log('Courses migrated successfully');
    } catch (error) {
      console.error('Error migrating courses:', error);
    }

    // Migrate site settings
    try {
      const settingsData = await fs.readFile(path.join(contentDir, 'site-settings.json'), 'utf8');
      await updateSiteSettings(JSON.parse(settingsData));
      console.log('Site settings migrated successfully');
    } catch (error) {
      console.error('Error migrating site settings:', error);
    }

    // Migrate FAQs
    try {
      const faqsData = await fs.readFile(path.join(contentDir, 'faqs.json'), 'utf8');
      await updateFaqs(JSON.parse(faqsData));
      console.log('FAQs migrated successfully');
    } catch (error) {
      console.error('Error migrating FAQs:', error);
    }

    // Migrate testimonials
    try {
      const testimonialsData = await fs.readFile(path.join(contentDir, 'testimonials.json'), 'utf8');
      await updateTestimonials(JSON.parse(testimonialsData));
      console.log('Testimonials migrated successfully');
    } catch (error) {
      console.error('Error migrating testimonials:', error);
    }

    // Migrate student reviews
    try {
      const reviewsData = await fs.readFile(path.join(contentDir, 'student-reviews.json'), 'utf8');
      await updateStudentReviews(JSON.parse(reviewsData));
      console.log('Student reviews migrated successfully');
    } catch (error) {
      console.error('Error migrating student reviews:', error);
    }

    // Migrate resources
    try {
      const resourcesData = await fs.readFile(path.join(contentDir, 'resources.json'), 'utf8');
      await updateResources(JSON.parse(resourcesData));
      console.log('Resources migrated successfully');
    } catch (error) {
      console.error('Error migrating resources:', error);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Database migration completed successfully' 
    });

  } catch (error) {
    console.error('Migration error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ 
      success: false, 
      error: 'Database migration failed: ' + errorMessage 
    }, { status: 500 });
  }
}