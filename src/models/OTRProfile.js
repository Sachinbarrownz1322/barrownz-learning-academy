import mongoose from "mongoose";

const OTRProfileSchema = new mongoose.Schema(
  {
    otrNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      index: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    // Personal Information
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    fatherName: {
      type: String,
      required: true,
      trim: true,
    },
    motherName: {
      type: String,
      default: "",
      trim: true,
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    category: {
      type: String,
      enum: ["GEN", "OBC", "SC", "ST", "EWS"],
      default: "GEN",
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    alternatePhone: {
      type: String,
      default: "",
      trim: true,
    },
    aadhaarNumber: {
      type: String,
      trim: true,
      default: null,
    },

    // Permanent & Communication Address
    address: {
      street: { type: String, default: "" },
      city: { type: String, required: true },
      district: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
    },

    // Academic Profile
    education: {
      highestQualification: { type: String, required: true }, // e.g., B.Tech, BCA, MCA, Diploma
      stream: { type: String, default: "" }, // CSE, IT, ME, Civil, etc.
      collegeUniversity: { type: String, required: true },
      passingYear: { type: Number, required: true },
      percentageOrCgpa: { type: String, default: "" },
    },

    // Program of Interest at BLA
    trainingTrack: {
      type: String,
      required: true, // e.g., Full Stack MERN, Python AI, Java, Summer Training
    },
    preferredBatchMode: {
      type: String,
      enum: ["Classroom (Lucknow)", "Hybrid", "Online Live"],
      default: "Classroom (Lucknow)",
    },

    // Photos & IDs
    photoUrl: {
      type: String,
      default: "",
    },
    signatureUrl: {
      type: String,
      default: "",
    },

    // Status Flags
    status: {
      type: String,
      enum: ["DRAFT", "SUBMITTED", "VERIFIED", "REJECTED"],
      default: "SUBMITTED",
      index: true,
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    verifiedAt: {
      type: Date,
      default: null,
    },
    rejectionReason: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    collection: "otr_profiles",
  }
);

OTRProfileSchema.index({ email: 1 });
OTRProfileSchema.index({ phone: 1 });
OTRProfileSchema.index({ createdAt: -1 });

export const OTRProfile = mongoose.models.OTRProfile || mongoose.model("OTRProfile", OTRProfileSchema);
export default OTRProfile;
