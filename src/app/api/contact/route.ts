import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, subject, message } = await req.json();

    if (!name || !phone || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"AquaRide Contact Form" <${process.env.SMTP_EMAIL}>`,
      to: "wahabnadeem311@gmail.com",
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(200.07deg, #01B7E7 -46.71%, #1DBCDC 69.53%); padding: 24px; border-radius: 16px 16px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 22px;">New Contact Message</h2>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">From AquaRide Website</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0A2540; width: 120px;">Name:</td>
                <td style="padding: 10px 0; color: #374151;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0A2540;">Phone:</td>
                <td style="padding: 10px 0; color: #374151;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0A2540;">Email:</td>
                <td style="padding: 10px 0; color: #374151;"><a href="mailto:${email}" style="color: #1DBCDC;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0A2540;">Subject:</td>
                <td style="padding: 10px 0; color: #374151;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 12px; border: 1px solid #e5e7eb;">
              <p style="font-weight: bold; color: #0A2540; margin: 0 0 8px;">Message:</p>
              <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 20px; display: flex; gap: 4px; height: 4px;">
              <div style="flex: 1; background: #CE1126; border-radius: 4px;"></div>
              <div style="flex: 1; background: #FCD116; border-radius: 4px;"></div>
              <div style="flex: 1; background: #006B3D; border-radius: 4px;"></div>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
