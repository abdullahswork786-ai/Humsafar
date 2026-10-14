import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Assessment from "@/models/Assessment";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
      currentCountry,
      preferredDestination,
      serviceRequired,
      purpose,
      contactMethod,
      additionalMessage,
    } = body;

    // Validate required fields
    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Full Name, Phone and Email are required." },
        { status: 400 }
      );
    }

    // 1. Connect to MongoDB and save
    let savedAssessment = null;
    try {
      const conn = await connectToDatabase();
      if (conn) {
        savedAssessment = await Assessment.create({
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          currentCountry: currentCountry || "Pakistan",
          preferredDestination: preferredDestination || "Not Specified",
          serviceRequired: serviceRequired || "Study Abroad & Student Visa",
          purpose: purpose || "",
          contactMethod: contactMethod || "WhatsApp",
          additionalMessage: additionalMessage || "",
        });
      }
    } catch (dbError) {
      console.error("Database save failed in /api/assessment:", dbError);
      // We log but continue to attempt email notification so inquiry is never lost
    }

    // 2. Send email notification to Admin via Nodemailer
    const emailResult = await sendNotificationEmail({
      subject: `[Assessment] ${fullName} - ${serviceRequired || "Evaluation"}`,
      title: "New Free Assessment Request",
      badge: "Free Assessment",
      replyTo: email,
      fields: [
        { label: "Applicant Name", value: fullName },
        { label: "Phone / WhatsApp", value: phone, isPhone: true },
        { label: "Email Address", value: email, isEmail: true },
        { label: "Current Country", value: currentCountry || "Pakistan" },
        { label: "Target Destination", value: preferredDestination || "Not Specified" },
        { label: "Service Required", value: serviceRequired || "Study Abroad & Student Visa" },
        { label: "Travel / Study Purpose", value: purpose || "Not provided" },
        { label: "Preferred Contact", value: contactMethod || "WhatsApp" },
        { label: "Background / Notes", value: additionalMessage || "None provided" },
        { label: "Submitted At", value: new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }) },
      ],
    });

    return NextResponse.json(
      {
        success: true,
        message: "Assessment request submitted successfully",
        data: savedAssessment ? { id: savedAssessment._id } : { status: "received" },
        emailSent: emailResult.success,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/assessment:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

