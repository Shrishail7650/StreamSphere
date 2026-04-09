export default function Subscription({ plans }) {
  return (
    <section className="mx-6 rounded-[2rem] bg-gradient-to-r from-red-950 via-[#2b0808] to-black p-8 text-center text-white md:mx-10 md:p-10">
      <h2 className="text-2xl font-bold">Upgrade to Premium</h2>
      <p className="mt-2 text-gray-300">
        Watch in 4K, download offline, and enjoy ad-free streaming.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`min-w-32 rounded-2xl px-6 py-5 ${
              plan.accent ? "bg-red-600 text-white" : "bg-black text-gray-100"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.22em] text-white/65">
              {plan.name}
            </p>
            <p className="mt-2 text-2xl font-semibold">{plan.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
