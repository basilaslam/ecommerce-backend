import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

/** @type {typeof mongoose | undefined} */
export let dbInstance = undefined;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://basilaslam:Ehc3sX5VeABQlOHR@floatstore.u7ezrw4.mongodb.net/?retryWrites=true&w=majority/${DB_NAME}`
    );
    dbInstance = connectionInstance;
    console.log(
      `\n☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}\n`
    );
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
