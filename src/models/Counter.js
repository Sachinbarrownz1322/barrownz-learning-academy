import mongoose from "mongoose";

const CounterSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    seq: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: "counters",
  }
);

// key already has unique: true on field definition

export const Counter = mongoose.models.Counter || mongoose.model("Counter", CounterSchema);
export default Counter;
