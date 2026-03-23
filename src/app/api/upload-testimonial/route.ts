import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Only image files (JPEG, PNG, GIF, WebP) are allowed' },
        { status: 400 }
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: 'File size too large. Maximum allowed: 10MB' },
        { status: 400 }
      );
    }

    const testimonialsDir = path.join(process.cwd(), 'public', 'testimonials');
    try {
      await fs.access(testimonialsDir);
    } catch {
      await fs.mkdir(testimonialsDir, { recursive: true });
    }

    const timestamp = Date.now();
    const fileExtension = path.extname(file.name).toLowerCase();
    const baseName = path
      .basename(file.name, fileExtension)
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 40)
      .toLowerCase();

    const safeBaseName = baseName || 'testimonial';
    const fileName = `${safeBaseName}-${timestamp}${fileExtension}`;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(testimonialsDir, fileName);
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      filePath: `/testimonials/${fileName}`,
      fileName
    });
  } catch (error) {
    console.error('Testimonial upload error:', error);
    return NextResponse.json({ success: false, error: 'Failed to upload file' }, { status: 500 });
  }
}
