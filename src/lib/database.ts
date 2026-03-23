import mysql from 'mysql2/promise';
import { promises as fs } from 'fs';
import path from 'path';

// Database connection
let connection: mysql.Connection | null = null;

async function getConnection(): Promise<mysql.Connection> {
  if (!connection) {
    try {
      const connectionConfig = {
        host: process.env.DB_HOST!,
        port: parseInt(process.env.DB_PORT || '3306'),
        user: process.env.DB_USER!,
        password: process.env.DB_PASSWORD!,
        database: process.env.DB_NAME!,
        ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined
      };
      
      connection = await mysql.createConnection(connectionConfig);
    } catch (error) {
      console.error('Failed to connect to MySQL:', error);
      throw error;
    }
  }
  return connection;
}

// Initialize database tables
export async function initializeTables() {
  try {
    const db = await getConnection();
    
    // Create courses table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        description TEXT,
        duration VARCHAR(255),
        delivery_mode VARCHAR(255),
        language VARCHAR(255),
        difficulty_level VARCHAR(255),
        features JSON,
        highlights JSON,
        curriculum JSON,
        payment_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create site_settings table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS site_settings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        setting_key VARCHAR(255) UNIQUE NOT NULL,
        setting_value JSON NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create faqs table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS faqs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        question TEXT NOT NULL,
        answer TEXT NOT NULL,
        category VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create testimonials table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS testimonials (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        \`rank\` VARCHAR(255),
        image VARCHAR(255),
        text TEXT NOT NULL,
        rating INT DEFAULT 5,
        course VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create student_reviews table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS student_reviews (
        id INT AUTO_INCREMENT PRIMARY KEY,
        student_name VARCHAR(255) NOT NULL,
        course VARCHAR(255) NOT NULL,
        platform VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        rating INT DEFAULT 5,
        preview TEXT,
        is_video BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create resources table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS resources (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        file_path VARCHAR(255) NOT NULL,
        file_size INT,
        upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
  } catch (error) {
    console.error('Error initializing database tables:', error);
    throw error;
  }
}

// Courses functions
export async function getCourses() {
  try {
    const db = await getConnection();
    const [rows] = await db.execute('SELECT * FROM courses ORDER BY id');
    return { courses: rows };
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}

export async function updateCourses(coursesData: any) {
  try {
    const db = await getConnection();
    
    // Clear existing courses
    await db.execute('DELETE FROM courses');
    
    // Insert new courses
    for (const course of coursesData.courses) {
      await db.execute(
        'INSERT INTO courses (name, category, description, duration, delivery_mode, language, difficulty_level, features, highlights, curriculum, payment_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          course.name,
          course.category,
          course.description,
          course.duration,
          course.deliveryMode,
          course.language,
          course.difficultyLevel,
          JSON.stringify(course.features),
          JSON.stringify(course.highlights),
          JSON.stringify(course.curriculum),
          course.paymentUrl
        ]
      );
    }
    return { success: true };
  } catch (error) {
    console.error('Error updating courses:', error);
    throw error;
  }
}

// Site Settings functions
export async function getSiteSettings() {
  try {
    const db = await getConnection();
    const [rows] = await db.execute('SELECT setting_key, setting_value FROM site_settings') as [any[], any];
    const settings: any = {};
    
    rows.forEach((row: any) => {
      const rawValue = Buffer.isBuffer(row.setting_value)
        ? row.setting_value.toString('utf-8')
        : row.setting_value;

      if (typeof rawValue === 'string') {
        try {
          settings[row.setting_key] = JSON.parse(rawValue);
        } catch {
          settings[row.setting_key] = rawValue;
        }
      } else {
        settings[row.setting_key] = rawValue;
      }
    });
    
    return settings;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    throw error;
  }
}

export async function updateSiteSettings(settingsData: any) {
  try {
    const db = await getConnection();
    
    for (const [key, value] of Object.entries(settingsData)) {
      await db.execute(
        `INSERT INTO site_settings (setting_key, setting_value, updated_at)
         VALUES (?, ?, NOW())
         ON DUPLICATE KEY UPDATE setting_value = ?, updated_at = NOW()`,
        [key, JSON.stringify(value), JSON.stringify(value)]
      );
    }
    return { success: true };
  } catch (error) {
    console.error('Error updating site settings:', error);
    throw error;
  }
}

// FAQs functions
export async function getFaqs() {
  try {
    const db = await getConnection();
    const [rows] = await db.execute('SELECT * FROM faqs ORDER BY id');
    return { faqs: rows };
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
}

export async function updateFaqs(faqsData: any) {
  try {
    const db = await getConnection();
    
    // Clear existing FAQs
    await db.execute('DELETE FROM faqs');
    
    // Insert new FAQs
    for (const faq of faqsData.faqs) {
      await db.execute(
        'INSERT INTO faqs (question, answer, category) VALUES (?, ?, ?)',
        [faq.question, faq.answer, faq.category]
      );
    }
    return { success: true };
  } catch (error) {
    console.error('Error updating FAQs:', error);
    throw error;
  }
}

// Testimonials functions
export async function getTestimonials() {
  try {
    const db = await getConnection();
    const [rows] = await db.execute('SELECT * FROM testimonials ORDER BY id');
    return { testimonials: rows };
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
}

export async function updateTestimonials(testimonialsData: any) {
  try {
    const db = await getConnection();
    
    // Clear existing testimonials
    await db.execute('DELETE FROM testimonials');
    
    // Insert new testimonials
    for (const testimonial of testimonialsData.testimonials) {
      await db.execute(
        'INSERT INTO testimonials (name, `rank`, image, text, rating, course) VALUES (?, ?, ?, ?, ?, ?)',
        [testimonial.name, testimonial.rank, testimonial.image, testimonial.text, testimonial.rating, testimonial.course]
      );
    }
    return { success: true };
  } catch (error) {
    console.error('Error updating testimonials:', error);
    throw error;
  }
}

// Student Reviews functions
export async function getStudentReviews() {
  try {
    const db = await getConnection();
    const [rows] = await db.execute('SELECT * FROM student_reviews ORDER BY id') as [any[], any];
    
    return { 
      studentReviews: (rows as any[]).map((row: any) => ({
        id: row.id,
        studentName: row.student_name,
        course: row.course,
        platform: row.platform,
        imageUrl: row.image_url,
        rating: row.rating,
        preview: row.preview,
        isVideo: row.is_video
      }))
    };
  } catch (error) {
    console.error('Error fetching student reviews:', error);
    throw error;
  }
}

export async function updateStudentReviews(reviewsData: any) {
  try {
    const db = await getConnection();
    
    // Clear existing reviews
    await db.execute('DELETE FROM student_reviews');
    
    // Insert new reviews
    for (const review of reviewsData.studentReviews) {
      await db.execute(
        'INSERT INTO student_reviews (student_name, course, platform, image_url, rating, preview, is_video) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [
          review.studentName,
          review.course,
          review.platform,
          review.imageUrl,
          review.rating,
          review.preview || '',
          review.isVideo || false
        ]
      );
    }
    return { success: true };
  } catch (error) {
    console.error('Error updating student reviews:', error);
    throw error;
  }
}

// Resources functions
export async function getResources() {
  try {
    const db = await getConnection();
    const [rows] = await db.execute('SELECT * FROM resources ORDER BY id') as [any[], any];
    
    return { 
      resources: (rows as any[]).map((row: any) => ({
        id: row.id,
        title: row.title,
        category: row.category,
        filePath: row.file_path,
        fileSize: row.file_size,
        uploadDate: row.upload_date
      }))
    };
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
}

export async function updateResources(resourcesData: any) {
  try {
    const db = await getConnection();
    
    // Clear existing resources
    await db.execute('DELETE FROM resources');
    
    // Insert new resources
    for (const resource of resourcesData.resources) {
      await db.execute(
        'INSERT INTO resources (title, category, file_path, file_size, upload_date) VALUES (?, ?, ?, ?, ?)',
        [
          resource.title,
          resource.category,
          resource.filePath,
          resource.fileSize || 0,
          resource.uploadDate || new Date()
        ]
      );
    }
    return { success: true };
  } catch (error) {
    console.error('Error updating resources:', error);
    throw error;
  }
}