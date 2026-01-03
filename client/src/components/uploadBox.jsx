const UploadBox = ({ onFileChange, onUpload }) => {
  return (
    <>
      <input
        type="file"
        accept="video/*"
        onChange={onFileChange}
        className="mb-4"
      />

      <button
        onClick={onUpload}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Upload Video
      </button>
    </>
  );
};

export default UploadBox;
