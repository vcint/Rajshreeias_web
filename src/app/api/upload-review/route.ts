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

    // Validate file type - allow images and videos
    const allowedTypes = [
      'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp',
      'video/mp4', 'video/avi', 'video/mov', 'video/wmv', 'video/webm'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Only image files (JPEG, PNG, GIF, WebP) and video files (MP4, AVI, MOV, WMV, WebM) are allowed' 
      }, { status: 400 });
    }

    // Check file size - max 10MB for images, 50MB for videos
    const maxSize = file.type.startsWith('video/') ? 50 * 1024 * 1024 : 10 * 1024 * 1024;
    if (file.size > maxSize) {
      const maxSizeMB = file.type.startsWith('video/') ? '50MB' : '10MB';
      return NextResponse.json({ 
        success: false, 
        error: `File size too large. Maximum allowed: ${maxSizeMB}` 
      }, { status: 400 });
    }

    // Create reviews directory if it doesn't exist
    const reviewsDir = path.join(process.cwd(), 'public', 'reviews');
    try {
      await fs.access(reviewsDir);
    } catch {
      await fs.mkdir(reviewsDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = path.extname(file.name);
    const baseName = path.basename(file.name, fileExtension)
      .replace(/[^a-zA-Z0-9]/g, '_') // Replace special chars with underscore
      .substring(0, 20); // Limit length
    
    const fileName = `${baseName}_${timestamp}${fileExtension}`;
    const filePath = path.join(reviewsDir, fileName);

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await fs.writeFile(filePath, buffer);

    // Return the path relative to public directory
    const publicPath = `/reviews/${fileName}`;

    return NextResponse.json({
      success: true,
      filePath: publicPath,
      fileName: fileName,
      fileType: file.type,
      isVideo: file.type.startsWith('video/')
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to upload file' 
    }, { status: 500 });
  }
}