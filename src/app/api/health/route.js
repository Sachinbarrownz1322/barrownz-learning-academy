import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import mongoose from "mongoose";

// Pre-import all models to trigger schema compilation
import "@/models";

export async function GET() {
  const startTime = Date.now();
  try {
    const conn = await connectDB();
    const latency = Date.now() - startTime;

    // ReadyState 1 = connected
    const isConnected = mongoose.connection.readyState === 1;

    const registeredModels = Object.keys(mongoose.models);

    return NextResponse.json(
      {
        success: true,
        service: "BLA Backend API",
        status: isConnected ? "healthy" : "degraded",
        database: {
          connected: isConnected,
          name: conn.connection.name,
          host: conn.connection.host,
          port: conn.connection.port,
          latencyMs: latency,
          modelsCount: registeredModels.length,
          models: registeredModels,
        },
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        service: "BLA Backend API",
        status: "unhealthy",
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
