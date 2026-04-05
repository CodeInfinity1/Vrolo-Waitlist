import { NextRequest, NextResponse } from 'next/server';
import isEmail from 'validator/lib/isEmail';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, company, role } = body;

    // Validate email presence
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
        { status: 400 }
      );
    }

    // Strict type checks for optional fields (prevent NoSQL object injection)
    if (name && typeof name !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid name format.' }, { status: 400 });
    }
    if (company && typeof company !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid company format.' }, { status: 400 });
    }
    if (role && typeof role !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid role format.' }, { status: 400 });
    }

    // Validate email format
    if (!isEmail(email.trim())) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    await connectDB();

    // Check for duplicate
    const existing = await Waitlist.findOne({ email: email.trim().toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "You're already on the waitlist! We'll be in touch." },
        { status: 409 }
      );
    }

    // Create entry
    const entry = await Waitlist.create({
      email: email.trim().toLowerCase(),
      name: name?.trim() || undefined,
      company: company?.trim() || undefined,
      role: role?.trim() || undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: "You're on the waitlist! We'll reach out when early access opens.",
        data: { id: entry._id, email: entry.email, createdAt: entry.createdAt },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('[Waitlist API Error]', error);

    // Mongoose duplicate key error
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code: number }).code === 11000
    ) {
      return NextResponse.json(
        { success: false, message: "You're already on the waitlist! We'll be in touch." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed.' },
    { status: 405 }
  );
}
