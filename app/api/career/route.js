import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import connectToDatabase from "@/lib/mongodb";
import Career from "@/models/Career";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const position = formData.get("position")?.toString() || "Visa Counselor";
    const message = formData.get("message")?.toString() || "";
    const file = formData.get("resume");

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Name, Email and Phone are required." },
        { status: 400 }
      );
    }

    let resumeUrl = null;
    let resumeFileName = null;
    let resumeFileSize = 0;

    // 1. Handle file upload to Vercel Blob
    if (file && typeof file === "object" && file.size > 0) {
      resumeFileName = file.name;
      resumeFileSize = file.size;

      const token = process.env.BLOB_READ_WRITE_TOKEN;

      if (token) {
        try {
          const timestamp = Date.now();
          const cleanFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
          const blobPath = `resumes/${timestamp}-${cleanFileName}`;

          const blob = await put(blobPath, file, {
            access: "public",
            token: token,
          });

          resumeUrl = blob.url;
          console.log("Vercel Blob upload successful:", resumeUrl);
        } catch (blobErr) {
          console.error("Vercel Blob upload failed:", blobErr);
          // Continue process so application is still stored
        }
      } else {
        console.warn(
          "BLOB_READ_WRITE_TOKEN is not configured in .env. Skipping cloud upload for file:",
          resumeFileName
        );
      }
    }

    // 2. Connect to MongoDB and save
    let savedApplication = null;
    try {
      const conn = await connectToDatabase();
      if (conn) {
        savedApplication = await Career.create({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          position: position.trim(),
          message: message.trim(),
          resumeUrl: resumeUrl,
          resumeFileName: resumeFileName,
          resumeFileSize: resumeFileSize,
        });
      }
    } catch (dbError) {
      console.error("Database save failed in /api/career:", dbError);
    }

    // 3. Format email fields
    const emailFields = [
      { label: "Candidate Name", value: name },
      { label: "Phone / WhatsApp", value: phone, isPhone: true },
      { label: "Email Address", value: email, isEmail: true },
      { label: "Position Applied", value: position },
      {
        label: "Resume / CV Status",
        value: resumeUrl
          ? `${resumeFileName} (${Math.round(resumeFileSize / 1024)} KB) - Uploaded to Cloud`
          : resumeFileName
          ? `${resumeFileName} (${Math.round(resumeFileSize / 1024)} KB) - Local Testing (Token Pending)`
          : "No Resume File Attached",
      },
      { label: "Cover Note / Summary", value: message || "None provided" },
      { label: "Applied At", value: new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }) },
    ];

    // If resumeUrl exists, provide a button in the email
    const emailButton = resumeUrl
      ? {
          label: "View / Download Candidate Resume",
          url: resumeUrl,
        }
      : null;

    // 4. Send email notification to Admin via Nodemailer
    const emailResult = await sendNotificationEmail({
      subject: `[Job Application] ${name} - ${position}`,
      title: "New Job Application Received",
      badge: "Career Application",
      replyTo: email,
      fields: emailFields,
      button: emailButton,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: savedApplication ? { id: savedApplication._id } : { status: "received" },
        resumeUrl: resumeUrl,
        emailSent: emailResult.success,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/career:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

