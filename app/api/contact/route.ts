import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Rate limiting (simple implementation)
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const rateLimitKey = `contact:${ip}`;
    // In production, you'd use Redis or a database for rate limiting
    // For now, we'll skip this but you should implement it

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'mariem.fersi@esprit.tn',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not specified'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>IP Address:</strong> ${ip}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
