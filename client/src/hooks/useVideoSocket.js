import { useEffect, useState } from "react";
import socket from "../socket/socet.js";

const useVideoSocket = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    socket.on("video-progress", (data) => {
      console.log("Progress:", data);
      setProgress(data.progress);
    });

    socket.on("video-completed", (data) => {
      console.log("Completed:", data);
      setStatus(data.sensitivity);
    });

    return () => {
      socket.off("video-progress");
      socket.off("video-completed");
    };
  }, []);

  return { progress, status };
};

export default useVideoSocket;
