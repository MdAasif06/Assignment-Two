const ProgressBar = ({ progress }) => {
  return (
    <div className="mt-6">
      <div className="h-3 bg-gray-200 rounded">
        <div
          className="h-3 bg-green-500 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-center mt-2">{progress}%</p>
    </div>
  );
};

export default ProgressBar;
