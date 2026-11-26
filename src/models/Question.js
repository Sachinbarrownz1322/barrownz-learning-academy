import mongoose from "mongoose";

const QuestionOptionSchema = new mongoose.Schema(
  {
    optionKey: {
      type: String,
      required: true,
      enum: ["A", "B", "C", "D"],
    },
    optionText: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const QuestionSchema = new mongoose.Schema(
  {
    assessment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assessment",
      required: true,
      index: true,
    },
    questionText: {
      type: String,
      required: true,
      trim: true,
    },
    codeSnippet: {
      type: String,
      default: "",
    },
    options: {
      type: [QuestionOptionSchema],
      validate: {
        validator: function (v) {
          return v && v.length >= 2;
        },
        message: "Question must have at least 2 options",
      },
      required: true,
    },
    correctOption: {
      type: String,
      required: true,
      enum: ["A", "B", "C", "D"],
      select: false, // Hidden by default from student queries
    },
    marks: {
      type: Number,
      required: true,
      default: 2,
    },
    explanation: {
      type: String,
      default: "",
      select: false,
    },
    difficulty: {
      type: String,
      enum: ["EASY", "MEDIUM", "HARD"],
      default: "MEDIUM",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: "questions",
  }
);

QuestionSchema.index({ assessment: 1, order: 1 });

export const Question = mongoose.models.Question || mongoose.model("Question", QuestionSchema);
export default Question;
