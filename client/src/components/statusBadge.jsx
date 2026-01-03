const StatusBadge = ({ status }) => {
  if (!status) return null;

  return (
    <p className="text-center mt-4 font-semibold">
      Status:{" "}
      <span
        className={status === "safe" ? "text-green-600" : "text-red-600"}
      >
        {status}
      </span>
    </p>
  );
};

export default StatusBadge;
