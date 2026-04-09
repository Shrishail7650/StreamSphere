export default function Movies({ data }) {
  return (
    <div className="px-6 py-6">
      <h2 className="text-xl mb-4">Popular Movies</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((movie, i) => (
          <div
            key={i}
            className="bg-gray-800 p-3 rounded-xl hover:scale-105 transition"
          >
            <div className="h-32 bg-gray-700 rounded mb-2"></div>
            <p className="font-semibold">{movie.title}</p>
            <p className="text-xs text-gray-400">
              {movie.genre} • {movie.year}
            </p>
            <p className="text-yellow-400 text-sm">⭐ {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}