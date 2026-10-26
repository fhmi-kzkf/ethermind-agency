import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const leadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
  company: z.string().min(1, "Company name is required"),
  projectType: z.enum(["AI", "MVP", "TOOLS", "UI_UX", "MULTIPLE"]),
  estimatedBudget: z.string().min(1, "Budget range is required"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the Terms of Service and Privacy Policy" }),
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        errors[field] = issue.message;
      });

      return NextResponse.json(
        { success: false, error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    const leadData = result.data;

    // Send Gmail Notification Email if SMTP configured in .env.local
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || gmailUser || "hello@ethermind.agency";

    if (gmailUser && gmailAppPassword) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      const htmlContent = `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #080B10; color: #D7F3F5; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #121824; border: 1px solid rgba(215, 243, 245, 0.2); border-radius: 16px; padding: 32px;">
            <h2 style="color: #D7F3F5; font-weight: 300; margin-top: 0; border-bottom: 1px solid rgba(215, 243, 245, 0.1); padding-bottom: 16px;">
              🚀 New Project Inquiry — Ethermind Agency
            </h2>

            <p style="color: #A0C0C3; font-size: 14px;">You have received a new consultation submission from the website booking page:</p>

            <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
              <tr>
                <td style="padding: 10px 0; color: #6A8B90; font-size: 12px; text-transform: uppercase;">Client Name</td>
                <td style="padding: 10px 0; color: #D7F3F5; font-size: 15px; font-weight: 600;">${leadData.firstName} ${leadData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6A8B90; font-size: 12px; text-transform: uppercase;">Email Address</td>
                <td style="padding: 10px 0; color: #D7F3F5; font-size: 15px;"><a href="mailto:${leadData.email}" style="color: #64E9FF;">${leadData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6A8B90; font-size: 12px; text-transform: uppercase;">Company</td>
                <td style="padding: 10px 0; color: #D7F3F5; font-size: 15px;">${leadData.company}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6A8B90; font-size: 12px; text-transform: uppercase;">Project Scope</td>
                <td style="padding: 10px 0; color: #D7F3F5; font-size: 15px; font-weight: 600;">${leadData.projectType}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6A8B90; font-size: 12px; text-transform: uppercase;">Estimated Budget</td>
                <td style="padding: 10px 0; color: #64E9FF; font-size: 15px; font-weight: 600;">${leadData.estimatedBudget}</td>
              </tr>
            </table>

            <div style="background-color: #080B10; border: 1px solid rgba(215, 243, 245, 0.15); border-radius: 8px; padding: 16px; margin-top: 16px;">
              <div style="color: #6A8B90; font-size: 11px; text-transform: uppercase; margin-bottom: 8px;">Project Requirements / Message:</div>
              <div style="color: #D7F3F5; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${leadData.message}</div>
            </div>

            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid rgba(215, 243, 245, 0.1); text-align: center; color: #6A8B90; font-size: 12px;">
              Ethermind Agency Lead Notification Engine • ${new Date().toLocaleString()}
            </div>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Ethermind Web Leads" <${gmailUser}>`,
        to: recipientEmail,
        replyTo: leadData.email,
        subject: `[New Lead] ${leadData.projectType} Project — ${leadData.company} (${leadData.firstName})`,
        html: htmlContent,
      });

      console.log(`[Lead Email Sent] Sent to ${recipientEmail} for lead ${leadData.email}`);
    } else {
      console.log(`[Lead Captured] Lead logged locally (Configure GMAIL_USER & GMAIL_APP_PASSWORD in .env.local to receive instant Gmail alerts):`, leadData);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully. We will be in touch within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Leads API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
