import mongoose from "mongoose";

const StudentDocumentSchema = new mongoose.Schema(
  {
    otrProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OTRProfile",
      required: true,
      index: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    docType: {
      type: String,
      required: true,
      enum: ["AADHAAR", "MARKSHEET", "COLLEGE_ID", "PHOTO", "SIGNATURE", "CERTIFICATE", "OTHER"],
    },
    fileName: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    fileSize: {
      type: Number, // in bytes
      default: 0,
    },
    mimeType: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: "student_documents",
  }
);

StudentDocumentSchema.index({ otrProfile: 1, docType: 1 });

export const StudentDocument = mongoose.models.StudentDocument || mongoose.model("StudentDocument", StudentDocumentSchema);
export default StudentDocument;
