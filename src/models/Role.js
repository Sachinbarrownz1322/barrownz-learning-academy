import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Role name is required"],
      unique: true,
      trim: true,
      uppercase: true,
      enum: ["SUPER_ADMIN", "ADMIN", "TRAINER", "STUDENT"],
    },
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    permissions: [
      {
        type: String,
        trim: true,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "roles",
  }
);

// index created by unique: true on name property

export const Role = mongoose.models.Role || mongoose.model("Role", RoleSchema);
export default Role;
