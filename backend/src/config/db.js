import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  if (!ENV.MONGO_URI) {
    throw new Error("MONGO_URI is not configured");
  }

  const conn = await mongoose.connect(ENV.MONGO_URI);

  console.log("MongoDB connected successfully:", conn.connection.host);
};
