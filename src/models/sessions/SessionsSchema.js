import { required } from "joi";
import mongoose from "mongoose";

const sessionsSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  association: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Session", "sessionsSchema");
