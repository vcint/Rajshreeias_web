import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
  
  // Clear the admin token cookie
  response.cookies.delete({ name: 'admin_token', path: '/' });
  
  return response;
}