import mongoose from "mongoose";

const AssessmentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
    },
    currentCountry: {
      type: String,
      trim: true,
      default: "Pakistan",
    },
    preferredDestination: {
      type: String,
      trim: true,
    },
    serviceRequired: {
      type: String,
      trim: true,
    },
    purpose: {
      type: String,
      trim: true,
    },
    contactMethod: {
      type: String,
      trim: true,
      default: "WhatsApp",
    },
    additionalMessage: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["New", "In Review", "Contacted", "Closed"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Assessment || mongoose.model("Assessment", AssessmentSchema);

