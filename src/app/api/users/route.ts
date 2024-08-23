import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest,) {
  try {
    const email = request.nextUrl.searchParams.get('email');
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Successfully retrieved user', data: user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

// export async function POST(request: NextRequest) {
//   return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
// }

// export async function PUT(request: NextRequest) {
//   return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
// }

// export async function DELETE(request: NextRequest) {
//   return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
// }