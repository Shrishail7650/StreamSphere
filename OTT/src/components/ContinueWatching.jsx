export default function ContinueWatching({ items }) {
  return (
    <section className="px-6 py-6 md:px-10">
      <h2 className="mb-4 text-xl font-semibold">Continue Watching</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.detail}`}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-3">
              <p className="font-semibold">{item.title}</p>
              <p className="mb-3 text-sm text-white/65">{item.detail}</p>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-red-500"
                  style={{ width: `${item.progress}%` }}
                />
              </div>

              <p className="mt-2 text-xs text-white/55">{item.progress}% completed</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
