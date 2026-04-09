export default function Row({ title, items }) {
  return (
    <div className="px-6 py-4">
      <h2 className="text-xl mb-3 font-semibold">{title}</h2>

      <div className="flex gap-4 overflow-x-auto">
        {items.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.title}
            className="w-40 h-56 object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}