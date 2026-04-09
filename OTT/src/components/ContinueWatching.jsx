export default function ContinueWatching() {
  const data = [
    "Shadow City - Episode 5",
    "Broken Code - Episode 2",
    "Zero Hour - Episode 1",
  ];

  return (
    <div className="px-6 py-6">
      <h2 className="text-xl mb-4">Continue Watching</h2>

      <div className="flex gap-4">
        {data.map((item, i) => (
          <div key={i} className="w-48">
            <div className="h-28 bg-gray-700 rounded mb-1"></div>

            {/* Progress bar */}
            <div className="h-1 bg-gray-600">
              <div className="h-1 bg-red-600 w-1/2"></div>
            </div>

            <p className="text-sm mt-1">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}