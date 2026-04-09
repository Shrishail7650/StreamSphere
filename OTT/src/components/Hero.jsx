
export default function Hero({ content }) {
  return (
    <section
      className="relative flex min-h-[88vh] items-center overflow-hidden px-6 pb-28 pt-28 text-white md:px-10"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.82) 42%, rgba(5,5,5,0.45) 100%), url(${content.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-2xl">
        <span className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-white/75">
          Featured Premiere
        </span>
        <h1 className="mb-3 text-4xl font-bold md:text-6xl">{content.title}</h1>
        <p className="mb-3 text-sm text-white/70 md:text-base">{content.meta}</p>

        <p className="max-w-xl text-sm leading-7 text-white/80 md:text-base">
          {content.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black">
            Play Now
          </button>
          <button className="rounded-lg border border-white/20 bg-white/10 px-6 py-3">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
