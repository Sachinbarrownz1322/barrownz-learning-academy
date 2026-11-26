import mongoose from "mongoose";

const BatchSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    }, // e.g., BLA-2026-MERN-B1
    name: {
      type: String,
      required: true,
      trim: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    trainer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mode: {
      type: String,
      enum: ["Classroom", "Hybrid", "Online Live"],
      default: "Classroom",
    },
    timing: {
      startTime: { type: String, default: "10:00 AM" },
      endTime: { type: String, default: "12:00 PM" },
      days: [{ type: String, enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] }],
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      default: null,
    },
    maxCapacity: {
      type: Number,
      default: 30,
    },
    students: [
      {
        student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        otrProfile: { type: mongoose.Schema.Types.ObjectId, ref: "OTRProfile" },
        enrolledAt: { type: Date, default: Date.now },
        status: { type: String, enum: ["ACTIVE", "COMPLETED", "DROPPED"], default: "ACTIVE" },
      },
    ],
    status: {
      type: String,
      enum: ["UPCOMING", "ONGOING", "COMPLETED", "ARCHIVED"],
      default: "UPCOMING",
      index: true,
    },
  },
  {
    timestamps: true,
    collection: "batches",
  }
);

BatchSchema.index({ course: 1, status: 1 });
BatchSchema.index({ trainer: 1, status: 1 });

export const Batch = mongoose.models.Batch || mongoose.model("Batch", BatchSchema);
export default Batch;
