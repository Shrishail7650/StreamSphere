export default function Movies({ data }) {
  return (
    <section className="px-6 py-6 md:px-10">
      <h2 className="mb-4 text-xl font-semibold">Popular Movies</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {data.map((movie) => (
          <div
            key={movie.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:scale-[1.02]"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-3">
              <p className="font-semibold">{movie.title}</p>
              <p className="text-xs text-gray-400">
              {movie.genre} • {movie.year}
              </p>
              <p className="text-sm text-amber-300">★ {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
