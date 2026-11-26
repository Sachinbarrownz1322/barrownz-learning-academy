import mongoose from "mongoose";

const AuditLogSchema = new mongoose.Schema(
  {
    actor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    actorEmail: {
      type: String,
      default: "system",
    },
    role: {
      type: String,
      default: "SYSTEM",
    },
    action: {
      type: String,
      required: true, // e.g., OTR_REGISTERED, USER_LOGIN, EXAM_SUBMITTED, CERTIFICATE_ISSUED
      uppercase: true,
    },
    targetCollection: {
      type: String,
      default: "",
    },
    targetId: {
      type: String,
      default: "",
    },
    ipAddress: {
      type: String,
      default: "",
    },
    userAgent: {
      type: String,
      default: "",
    },
    details: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
    collection: "audit_logs",
  }
);

AuditLogSchema.index({ action: 1 });
AuditLogSchema.index({ actor: 1 });
AuditLogSchema.index({ createdAt: -1 });

export const AuditLog = mongoose.models.AuditLog || mongoose.model("AuditLog", AuditLogSchema);
export default AuditLog;
