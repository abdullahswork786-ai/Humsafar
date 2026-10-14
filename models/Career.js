import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    resumeUrl: {
      type: String,
      trim: true,
      default: null,
    },
    resumeFileName: {
      type: String,
      trim: true,
      default: null,
    },
    resumeFileSize: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["New", "Reviewed", "Shortlisted", "Rejected"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Career || mongoose.model("Career", CareerSchema);

