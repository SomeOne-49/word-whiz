const Statistics = () => {
  return (
    <div className="mt-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="size-4 rounded-full bg-green-700" />
        <h6 className="text-lg font-semibold text-primary">24 Correct</h6>
      </div>
      <div className="flex items-center gap-2">
        <div className="size-4 rounded-full bg-red-700" />
        <h6 className="text-lg font-semibold text-primary">13 Incorrect</h6>
      </div>
    </div>
  );
};

export default Statistics;
