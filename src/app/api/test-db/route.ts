import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  try {
    // Test database connection
    const connectionConfig = {
      host: process.env.DB_HOST!,
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined
    };
    
    const connection = await mysql.createConnection(connectionConfig);

    // Test simple query
    const [results] = await connection.execute('SELECT 1 as test');
    await connection.end();

    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      testResult: results
    });

  } catch (error: any) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      code: error.code
    }, { status: 500 });
  }
}