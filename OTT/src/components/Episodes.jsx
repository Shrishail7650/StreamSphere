export default function Episodes() {
  const episodes = [
    "Episode 1",
    "Episode 2",
    "Episode 3",
    "Episode 4",
  ];

  return (
    <div className="absolute bottom-0 w-full px-10 pb-6">
      <h2 className="text-xl mb-3">Episodes</h2>

      <div className="flex gap-4 overflow-x-scroll">
        {episodes.map((ep, i) => (
          <div
            key={i}
            className="min-w-[200px] bg-gray-800 rounded-xl p-3 hover:scale-105 transition"
          >
            <img
              src="https://via.placeholder.com/200x120"
              className="rounded-lg"
            />
            <p className="text-sm mt-2">{ep}</p>
          </div>
        ))}
      </div>
    </div>
  );
}