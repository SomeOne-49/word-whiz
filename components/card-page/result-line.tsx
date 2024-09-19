const ResultsLine = () => {
  return (
    <div className="mb-8 mt-3 flex items-center justify-between gap-4 text-lg">
      <div className="flex items-center gap-2">
        <div className="size-3 rounded-full bg-green-500"></div>
        <h5 className="font-semibold">43 Correct</h5>
      </div>
      <div className="flex items-center gap-2">
        <div className="size-3 rounded-full bg-red-500"></div>
        <h5 className="font-semibold">23 Incorrect</h5>
      </div>
    </div>
  )
}

export default ResultsLine;