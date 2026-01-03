import express from "express";
import { uploadVideo, getMyVideos } from "../controllers/video.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = express.Router();

// Upload video (Editor/Admin only)
router.post("/upload",protect,checkRole("editor","admin"),upload.single("video"),uploadVideo);

// Get logged-in user's videos
router.get("/", protect, getMyVideos);

export default router;
