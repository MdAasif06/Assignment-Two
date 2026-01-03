import { useState } from "react";
import UploadBox from "../components/uploadBox";
import ProgressBar from "../components/ProgressBar";
import StatusBadge from "../components/statusBadge";
import useVideoSocket from "../hooks/useVideoSocket";
import { uploadVideoApi } from "../api/video.api";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const { progress, status } = useVideoSocket();

  const uploadVideo = async () => {
    if (!file) return alert("Select video");
    await uploadVideoApi(file);
    alert("Video uploaded");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 w-96 rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-center">
          Upload Video
        </h1>

        <UploadBox
          onFileChange={(e) => setFile(e.target.files[0])}
          onUpload={uploadVideo}
        />

        <ProgressBar progress={progress} />
        <StatusBadge status={status} />
      </div>
    </div>
  );
};

export default Dashboard;
