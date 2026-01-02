import express from "express";
import authRoutes from "./routes/auth.route.js";
import videoRoutes from "./routes/video.routes.js";
import cors from "cors";

const app = express();



app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);

export default app;
