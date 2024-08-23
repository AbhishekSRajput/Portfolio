import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const reviews = await prisma.review.findMany();
    return NextResponse.json({ message: 'successfully retrieved message', data: reviews });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, content, userEmail } = await request.json();
    if (!title || !content || !userEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newReview = await prisma.review.upsert({
      where: { userEmail: userEmail },
      update: {
        title,
        content,
      },
      create: {
        title,
        content,
        userEmail,
      },
    });

    return NextResponse.json({ message: 'Review created successfully', data: newReview }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}