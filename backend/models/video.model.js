import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    originalName: String,
    filename: String,
    filePath: String,

    status: {
      type: String,
      enum: ["uploaded", "processing", "completed", "failed"],
      default: "uploaded",
    },

    sensitivity: {
      type: String,
      enum: ["pending", "safe", "flagged"],
      default: "pending",
    },

    progress: {
      type: Number,
      default: 0,
    },

    size: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Video", videoSchema);

