import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
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
    service: {
      type: String,
      trim: true,
      default: "General Inquiry",
    },
    destination: {
      type: String,
      trim: true,
      default: "Not Specified",
    },
    message: {
      type: String,
      trim: true,
    },
    source: {
      type: String,
      trim: true,
      default: "Contact Page",
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

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

