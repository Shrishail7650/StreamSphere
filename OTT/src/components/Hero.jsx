
export default function Hero() {
  return (
    <div className="h-[90vh] relative flex items-center px-10 bg-gradient-to-r from-black via-[#0f0f2d] to-black text-white">

      {/* CONTENT */}
      <div className="max-w-xl z-10">
        <h1 className="text-5xl font-bold mb-3">The Last Horizon</h1>
        <p className="text-sm text-gray-400 mb-2">
          Sci-Fi | Thriller | 2026
        </p>

        <p className="text-gray-300 leading-6">
          A crew of astronauts ventures beyond the solar system,
          uncovering a signal that challenges humanity’s understanding of life.
        </p>

        <div className="mt-5 flex gap-4">
          <button className="bg-white text-black px-5 py-2 rounded-lg font-semibold">
            ▶ Play
          </button>
          <button className="bg-gray-700 px-5 py-2 rounded-lg">
            Explore
          </button>
        </div>
      </div>

      {/* BACKGROUND OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}