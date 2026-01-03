import Video from "../models/video.model.js";

export const processVideo = async (videoId) => {
  let progress = 0;

  const interval = setInterval(async () => {
    progress += 10;

    await Video.findByIdAndUpdate(videoId, {
      status: "processing",
      progress,
    });

    // real-time progress send
    global.io.emit("video-progress", {
      videoId,
      progress,
    });

    if (progress >= 100) {
      clearInterval(interval);

      // fake sensitivity logic
      const sensitivity = Math.random() > 0.5 ? "safe" : "flagged";

      await Video.findByIdAndUpdate(videoId, {
        status: "completed",
        sensitivity,
        progress: 100,
      });

      global.io.emit("video-completed", {
        videoId,
        sensitivity,
      });
    }
  }, 1000); // every 1 second
};
