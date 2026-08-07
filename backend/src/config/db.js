import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);

    console.log("MongoDB connected successfully:", conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Do not exit the process on connection failure — in serverless
    // environments (like Vercel) exiting will terminate the function.
    // The app can still run without a DB during build/deploy; ensure
    // runtime environment variables (MONGO_URI) are set for full
    // functionality.
  }
};
