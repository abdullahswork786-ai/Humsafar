import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, destination, message, source } = body;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Name, Phone and Email are required." },
        { status: 400 }
      );
    }

    // 1. Connect to MongoDB and save
    let savedContact = null;
    try {
      const conn = await connectToDatabase();
      if (conn) {
        savedContact = await Contact.create({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service: service || "General Inquiry",
          destination: destination || "Not Specified",
          message: message || "",
          source: source || "Contact Form",
        });
      }
    } catch (dbError) {
      console.error("Database save failed in /api/contact:", dbError);
      // Continue to send email so the inquiry is never missed
    }

    // 2. Send email notification to Admin via Nodemailer
    const emailResult = await sendNotificationEmail({
      subject: `[New Inquiry] ${name} - ${service || "General Inquiry"}`,
      title: "New Client Inquiry Received",
      badge: source || "Contact Form",
      replyTo: email,
      fields: [
        { label: "Client Name", value: name },
        { label: "Phone / WhatsApp", value: phone, isPhone: true },
        { label: "Email Address", value: email, isEmail: true },
        { label: "Service Selected", value: service || "General Inquiry" },
        { label: "Destination", value: destination || "Not Specified" },
        { label: "Client Message", value: message || "No message provided" },
        { label: "Form Source", value: source || "Website" },
        { label: "Received At", value: new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }) },
      ],
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully",
        data: savedContact ? { id: savedContact._id } : { status: "received" },
        emailSent: emailResult.success,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

