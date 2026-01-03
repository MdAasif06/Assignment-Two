import api from "./axios";

export const uploadVideoApi = async (file) => {
  const formData = new FormData();
  formData.append("video", file);

  return api.post("/videos/upload", formData);
};
