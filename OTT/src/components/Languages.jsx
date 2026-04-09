export default function Languages({ items }) {
  return (
    <section className="px-6 py-6 md:px-10">
      <h2 className="mb-3 text-xl font-semibold">Browse by Language</h2>

      <div className="flex flex-wrap gap-3">
        {items.map((lang) => (
          <span
            key={lang}
            className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-red-500 hover:bg-red-600"
          >
            {lang}
          </span>
        ))}
      </div>
    </section>
  );
}
