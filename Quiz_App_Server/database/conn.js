import mongoose from "mongoose";
import { insertQuestions } from "../controllers/controller.js";

export default async function connect() {
  await mongoose.connect(process.env.ATLAS_URI);
  // insertQuestions();

  console.log("Database Connected");
}
