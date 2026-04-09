export default function Row({ title, items }) {
  return (
    <section className="px-6 py-4 md:px-10">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="group min-w-[170px] overflow-hidden rounded-2xl bg-white/5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-60 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="p-3">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-white/60">{item.tag}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
