import mongoose from "mongoose";
import { ENV } from "./env.js";

let connectPromise = null;

mongoose.set("bufferCommands", false);

export const connectDB = async () => {
  if (!ENV.MONGO_URI) {
    throw new Error("MONGO_URI is not configured");
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  if (connectPromise) {
    return connectPromise;
  }

  connectPromise = mongoose.connect(ENV.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 5000,
  });
  const conn = await connectPromise;
  connectPromise = null;

  console.log("MongoDB connected successfully:", conn.connection.host);
  return conn;
};
