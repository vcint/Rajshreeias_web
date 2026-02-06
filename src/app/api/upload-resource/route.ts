import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;
    const title = data.get('title') as string;
    const category = data.get('category') as string;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      return NextResponse.json({ success: false, error: 'Only PDF files are allowed' }, { status: 400 });
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ success: false, error: 'File size too large. Max 10MB allowed' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const timestamp = Date.now();
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    const fileName = `${timestamp}-${sanitizedTitle}.pdf`;

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true });
    }

    // Save file
    const filePath = path.join(uploadsDir, fileName);
    await fs.writeFile(filePath, buffer);

    // Update resources.json
    const resourcesPath = path.join(process.cwd(), 'src', 'content', 'resources.json');
    const resourcesContent = await fs.readFile(resourcesPath, 'utf8');
    const resources = JSON.parse(resourcesContent);

    // Add new resource to appropriate category
    const newResource = {
      id: `resource-${timestamp}`,
      title: title,
      type: 'PDF Document',
      date: new Date().toISOString().split('T')[0],
      downloadUrl: `/uploads/${fileName}`,
      featured: false
    };

    if (!resources[category]) {
      resources[category] = {
        title: getCategoryTitle(category),
        description: getCategoryDescription(category),
        items: []
      };
    }

    resources[category].items.unshift(newResource);

    // Save updated resources.json
    await fs.writeFile(resourcesPath, JSON.stringify(resources, null, 2));

    return NextResponse.json({
      success: true,
      fileName: fileName,
      downloadUrl: `/uploads/${fileName}`
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Upload failed. Please try again.' 
    }, { status: 500 });
  }
}

function getCategoryTitle(category: string): string {
  const titles: Record<string, string> = {
    currentAffairs: 'Current Affairs Updates',
    previousYearQuestions: 'Previous Year Questions',
    studyNotes: 'Free Study Notes',
    syllabus: 'UPSC Syllabus'
  };
  return titles[category] || 'Resources';
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    currentAffairs: 'Stay updated with daily news analysis and monthly compilations',
    previousYearQuestions: 'Comprehensive collection of UPSC previous year questions with solutions',
    studyNotes: 'High-quality notes prepared by our expert faculty',
    syllabus: 'Complete UPSC syllabus and exam pattern'
  };
  return descriptions[category] || 'Educational resources for UPSC preparation';
}