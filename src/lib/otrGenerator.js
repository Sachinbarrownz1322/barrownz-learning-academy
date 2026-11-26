import { Counter } from "../models/Counter.js";
import { connectDB } from "./db.js";

/**
 * Generates an atomic, concurrency-safe, sequential OTR Number
 * Format: BLA-YYYY-XXXXX (e.g. BLA-2026-00001)
 *
 * Uses MongoDB findOneAndUpdate with $inc on the 'counters' collection.
 */
export async function generateOTRNumber(targetYear = new Date().getFullYear()) {
  await connectDB();

  const key = `otr_${targetYear}`;

  const counter = await Counter.findOneAndUpdate(
    { key },
    { $inc: { seq: 1 } },
    {
      returnDocument: "after",
      upsert: true,
      setDefaultsOnInsert: true,
    }
  );

  const sequentialNumber = String(counter.seq).padStart(5, "0");
  return `BLA-${targetYear}-${sequentialNumber}`;
}

export default generateOTRNumber;
