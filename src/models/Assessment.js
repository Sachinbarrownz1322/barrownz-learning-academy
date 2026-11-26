import mongoose from "mongoose";

const AssessmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    }, // e.g., TEST-MERN-2026-01
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
    description: {
      type: String,
      default: "",
    },
    durationMinutes: {
      type: Number,
      required: true,
      default: 60,
    },
    totalMarks: {
      type: Number,
      required: true,
      default: 100,
    },
    passingPercentage: {
      type: Number,
      required: true,
      default: 60,
    },
    negativeMarking: {
      isAllowed: { type: Boolean, default: false },
      penalty: { type: Number, default: 0 }, // e.g. 0.25
    },
    instructions: [
      {
        type: String,
      },
    ],
    // Time Window for scheduled tests
    startTime: {
      type: Date,
      default: null,
    },
    endTime: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ["DRAFT", "SCHEDULED", "LIVE", "COMPLETED", "ARCHIVED"],
      default: "DRAFT",
      index: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "assessments",
  }
);

AssessmentSchema.index({ course: 1, status: 1 });
AssessmentSchema.index({ batch: 1 });

export const Assessment = mongoose.models.Assessment || mongoose.model("Assessment", AssessmentSchema);
export default Assessment;
