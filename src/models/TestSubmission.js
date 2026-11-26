import mongoose from "mongoose";

const TestAnswerSchema = new mongoose.Schema(
  {
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    selectedOption: {
      type: String,
      enum: ["A", "B", "C", "D", null],
      default: null,
    },
    isCorrect: {
      type: Boolean,
      default: false,
    },
    marksAwarded: {
      type: Number,
      default: 0,
    },
    timeSpentSeconds: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const TestSubmissionSchema = new mongoose.Schema(
  {
    assessment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assessment",
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    otrProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OTRProfile",
      required: true,
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    submittedAt: {
      type: Date,
      default: null,
    },
    answers: [TestAnswerSchema],
    totalQuestions: {
      type: Number,
      default: 0,
    },
    attemptedCount: {
      type: Number,
      default: 0,
    },
    correctCount: {
      type: Number,
      default: 0,
    },
    wrongCount: {
      type: Number,
      default: 0,
    },
    scoreObtained: {
      type: Number,
      default: 0,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    isPassed: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["IN_PROGRESS", "SUBMITTED", "AUTO_SUBMITTED", "DISQUALIFIED"],
      default: "IN_PROGRESS",
      index: true,
    },
    proctoringFlags: {
      tabSwitchCount: { type: Number, default: 0 },
      fullScreenExits: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
    collection: "test_submissions",
  }
);

TestSubmissionSchema.index({ assessment: 1, student: 1 }, { unique: true });
TestSubmissionSchema.index({ assessment: 1, status: 1 });
TestSubmissionSchema.index({ student: 1 });
TestSubmissionSchema.index({ otrProfile: 1 });

export const TestSubmission = mongoose.models.TestSubmission || mongoose.model("TestSubmission", TestSubmissionSchema);
export default TestSubmission;
