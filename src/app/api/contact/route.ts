import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface SmtpError extends Error {
  responseCode?: number;
  code?: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, or message)' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Environment variable validation & auto-sanitization
    const emailUser = process.env.EMAIL_USER?.trim();
    // Auto-strip all whitespace in case App Password was pasted with spaces
    const emailPass = process.env.EMAIL_PASSWORD?.replace(/\s+/g, '');

    if (!emailUser || !emailPass) {
      console.error('SMTP configuration error: EMAIL_USER or EMAIL_PASSWORD missing in .env');
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Missing EMAIL_USER or EMAIL_PASSWORD in .env.' 
        },
        { status: 500 }
      );
    }

    // Gmail transporter setup using nodemailer standard service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Send email
    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${emailUser}>`,
        to: emailUser,
        replyTo: email, // Allows you to click 'Reply' directly to respond to the visitor
        subject: `Portfolio Contact: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
            <h2 style="color: #111; margin-bottom: 20px;">New Contact Form Submission</h2>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Message:</strong></p>
            <div style="background: #f7f7f7; padding: 15px; border-radius: 5px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #777;">Sent via your portfolio website. You can reply directly to this email to reach ${name}.</p>
          </div>
        `,
      });

      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (sendError: unknown) {
      console.error('Email sending failed:', sendError);

      const err = sendError as SmtpError;

      if (err?.responseCode === 535 || err?.code === 'EAUTH') {
        return NextResponse.json(
          { 
            error: 'Authentication failed (535): Invalid Google App Password. Please generate a new 16-character App Password at myaccount.google.com/apppasswords and update EMAIL_PASSWORD in .env.',
            code: 'EAUTH'
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { 
          error: err?.message || 'Failed to send email. Please try again later.',
          code: err?.code || 'UNKNOWN'
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Server error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
