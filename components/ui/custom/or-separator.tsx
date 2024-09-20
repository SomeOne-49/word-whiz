const OrSeparator = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="mt-3 flex items-center gap-2">
        <div className="h-px w-[calc(50%-10px)] bg-primary-light"></div>
        <h5 className="font-semibold text-primary-light">OR</h5>
        <div className="h-px w-[calc(50%-10px)] bg-primary-light"></div>
      </div>
    </div>
  );
};

export default OrSeparator;
