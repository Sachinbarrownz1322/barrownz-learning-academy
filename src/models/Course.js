import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    }, // e.g., BLA-FS-MERN, BLA-PY-AI, BLA-DM-SEO
    title: {
      type: String,
      required: [true, "Course title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Web Development",
        "Programming Languages",
        "Digital Marketing & SEO",
        "Data Analytics & AI",
        "Design & Multimedia",
        "Database Engineering",
        "Industrial & Summer Training",
      ],
    },
    durationWeeks: {
      type: Number,
      required: true,
      default: 6,
    },
    fee: {
      amount: { type: Number, required: true },
      currency: { type: String, default: "INR" },
    },
    syllabusUrl: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "courses",
  }
);

CourseSchema.index({ category: 1, isActive: 1 });

export const Course = mongoose.models.Course || mongoose.model("Course", CourseSchema);
export default Course;
