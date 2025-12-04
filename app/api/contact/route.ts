import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: "فرمت درخواست نامعتبر است" },
        { status: 400 }
      );
    }
    
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "تمام فیلدها الزامی هستند" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "فرمت ایمیل نامعتبر است" },
        { status: 400 }
      );
    }

    const recipientEmail = "jamshidiana154@gmail.com";
    let emailSent = false;
    let errorDetails = null;

    // Try to send email using Nodemailer with Gmail SMTP
    const gmailUser = process.env.GMAIL_USER || "jamshidiana154@gmail.com";
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (gmailAppPassword) {
      try {
        // Dynamic import - only executed at runtime
        const nodemailer = await import("nodemailer");
        
        // Handle both default and named exports
        const createTransport = nodemailer.default?.createTransport || nodemailer.createTransport;
        
        if (!createTransport) {
          throw new Error("Nodemailer createTransport not found");
        }

        const transporter = createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailAppPassword,
          },
        });

        // Verify connection
        await transporter.verify();

        // Send email
        const info = await transporter.sendMail({
          from: `"${name}" <${gmailUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `پیام جدید از ${name} - ${email}`,
          html: `
            <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
                پیام جدید از فرم تماس
              </h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>نام:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>ایمیل:</strong> <a href="mailto:${email}">${email}</a></p>
              </div>
              <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4CAF50; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">پیام:</h3>
                <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
              </div>
            </div>
          `,
          text: `
پیام جدید از فرم تماس

نام: ${name}
ایمیل: ${email}

پیام:
${message}
          `.trim(),
        });

        emailSent = true;
        console.log("✅ Email sent successfully via Gmail SMTP");
        console.log("📧 Message ID:", info.messageId);
      } catch (emailError: any) {
        errorDetails = emailError;
        console.error("❌ Email sending error:", emailError);
        
        // Provide specific error messages
        if (emailError?.code === "MODULE_NOT_FOUND" || emailError?.message?.includes("Cannot find module")) {
          console.error("⚠️ Nodemailer package not installed. Run: npm install nodemailer");
        } else if (emailError?.code === "EAUTH") {
          console.error("⚠️ Authentication failed. Check your Gmail App Password.");
        } else if (emailError?.code === "ECONNECTION") {
          console.error("⚠️ Connection failed. Check your internet connection.");
        }
      }
    } else {
      console.log("⚠️ Gmail App Password not configured in environment variables.");
    }

    // Log the submission
    console.log("Contact form submission:", { name, email, message });
    console.log("📬 Recipient email:", recipientEmail);

    // Return response
    if (emailSent) {
      return NextResponse.json(
        {
          success: true,
          message: "پیام با موفقیت ارسال شد",
          emailSent: true,
        },
        { status: 200 }
      );
    } else {
      // If email not sent, still return success but indicate it wasn't sent
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(`پیام از ${name}`)}&body=${encodeURIComponent(`نام: ${name}\nایمیل: ${email}\n\nپیام:\n${message}`)}`;
      
      return NextResponse.json(
        {
          success: true,
          message: "پیام ثبت شد",
          emailSent: false,
          mailto: mailtoLink,
          error: errorDetails ? "خطا در ارسال ایمیل" : null,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "خطا در پردازش درخواست. لطفاً دوباره تلاش کنید." },
      { status: 500 }
    );
  }
}
