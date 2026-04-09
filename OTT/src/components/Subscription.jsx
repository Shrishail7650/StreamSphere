export default function Subscription() {
  return (
    <div className="bg-gradient-to-r from-red-900 to-black text-white p-10 text-center">
      <h2 className="text-2xl font-bold">Upgrade to Premium</h2>
      <p className="text-gray-300 mt-2">
        Watch in 4K, download offline, and enjoy ad-free streaming.
      </p>

      <div className="flex justify-center gap-6 mt-6">
        <div className="bg-black p-4 rounded-xl">₹199</div>
        <div className="bg-black p-4 rounded-xl">₹399</div>
        <div className="bg-red-600 p-4 rounded-xl">₹699</div>
      </div>
    </div>
  );
}