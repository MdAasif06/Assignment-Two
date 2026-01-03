import express from "express";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import videoRoutes from "./routes/video.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connect

connectDB();

// Middlewares

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);

//HTTP Server

const server = http.createServer(app);

// Socket.IO Setup

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// global io (agar controllers me use karna ho)
global.io = io;

// Socket Testing

io.on("connection", (socket) => {
  console.log("Socket client connected:", socket.id);

  // server → client
  socket.emit("hello-from-server", {
    message: "Hello Socket.IO is working",
  });

  // client → server
  socket.on("hello-from-client", (data) => {
    console.log("Message from client:", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Start Server

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
