import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Check for required SMTP environment variables
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.error('Missing SMTP environment variables:', missingVars);
      return NextResponse.json({ 
        error: 'Email service is not configured. Please contact us directly at info@stlvgmo.com' 
      }, { status: 503 });
    }

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Add connection timeout and other options
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 5000, // 5 seconds
      socketTimeout: 10000, // 10 seconds
    });

    // Verify SMTP connection before sending
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      return NextResponse.json({ 
        error: 'Email service is temporarily unavailable. Please contact us directly at info@stlvgmo.com' 
      }, { status: 503 });
    }

    // Send email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@stlvgmo.com',
      replyTo: email, // Allow direct reply to the sender
      subject: `${subject} - Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 3px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from the STLVGMO website contact form.
          </p>
        </div>
      `,
    };

    console.log('Attempting to send email with configuration:');
    console.log(`- From: ${process.env.SMTP_USER}`);
    console.log(`- To: info@stlvgmo.com`);
    console.log(`- SMTP Host: ${process.env.SMTP_HOST}`);
    console.log(`- SMTP Port: ${process.env.SMTP_PORT}`);

    const result = await transporter.sendMail(mailOptions);
    
    console.log('Email send result:', {
      messageId: result.messageId,
      response: result.response,
      accepted: result.accepted,
      rejected: result.rejected,
      pending: result.pending
    });

    // Check if email was actually accepted
    if (result.rejected && result.rejected.length > 0) {
      console.error('Email was rejected:', result.rejected);
      return NextResponse.json({ 
        error: 'Email delivery failed. Please contact us directly at info@stlvgmo.com' 
      }, { status: 500 });
    }

    console.log(`Contact form email sent successfully from ${email} (${name})`);
    return NextResponse.json({ 
      message: 'Email sent successfully',
      debug: process.env.NODE_ENV === 'development' ? {
        messageId: result.messageId,
        accepted: result.accepted
      } : undefined
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages based on error type
    if (error instanceof Error) {
      if (error.message.includes('EAUTH')) {
        return NextResponse.json({ 
          error: 'Email authentication failed. Please contact us directly at info@stlvgmo.com' 
        }, { status: 503 });
      } else if (error.message.includes('ECONNECTION') || error.message.includes('ETIMEDOUT')) {
        return NextResponse.json({ 
          error: 'Email service connection failed. Please contact us directly at info@stlvgmo.com' 
        }, { status: 503 });
      }
    }
    
    return NextResponse.json({ 
      error: 'Failed to send email. Please contact us directly at info@stlvgmo.com' 
    }, { status: 500 });
  }
}
