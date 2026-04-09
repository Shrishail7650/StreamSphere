export default function Navbar() {
  return (
    <div className="absolute top-0 w-full flex justify-between items-center px-10 py-4 z-20">

      <h1 className="text-red-600 font-bold text-xl">StreamSphere</h1>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="bg-gray-800 px-3 py-1 rounded text-sm"
        />

        <span>🔔</span>
        <span>🎁</span>

        <img
          src="https://via.placeholder.com/40"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
}