import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema(
  {
    certificateId: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    }, // e.g., BLA-CERT-2026-98421
    studentName: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    otrProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OTRProfile",
      default: null,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Batch",
      default: null,
    },
    certificateType: {
      type: String,
      enum: ["TRAINING_COMPLETION", "INTERNSHIP", "WORKSHOP", "INDUSTRIAL_VISIT", "MERIT"],
      default: "TRAINING_COMPLETION",
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
    gradeOrScore: {
      type: String,
      default: "A",
    },
    qrCodeData: {
      type: String,
      default: "",
    },
    verificationUrl: {
      type: String,
      default: "",
    },
    isRevoked: {
      type: Boolean,
      default: false,
    },
    revocationReason: {
      type: String,
      default: "",
    },
    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
    collection: "certificates",
  }
);

CertificateSchema.index({ user: 1 });
CertificateSchema.index({ otrProfile: 1 });
CertificateSchema.index({ certificateType: 1 });

export const Certificate = mongoose.models.Certificate || mongoose.model("Certificate", CertificateSchema);
export default Certificate;
