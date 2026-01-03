import Video from "../models/video.model.js";
import { processVideo } from "../utils/processing-video.js";

export const uploadVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No video uploaded" });
    }

    const video = await Video.create({
      userId: req.user.id,
      originalName: req.file.originalname,
      filename: req.file.filename,
      filePath: req.file.path,
      size: req.file.size,
    });

    // 🔥 processing start
    processVideo(video._id);

    res.status(201).json({
      message: "Video uploaded & processing started",
      video,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyVideos = async (req, res) => {
  try {
    const videos = await Video.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


