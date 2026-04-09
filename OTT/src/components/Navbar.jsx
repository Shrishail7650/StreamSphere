export default function Navbar() {
  return (
    <header className="absolute top-0 z-20 flex w-full items-center justify-between px-6 py-4 md:px-10">
      <h1 className="text-xl font-bold text-red-500">StreamSphere</h1>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white placeholder:text-white/45"
        />

        <span className="hidden text-sm text-white/70 md:inline">Kids</span>
        <span className="hidden text-sm text-white/70 md:inline">My List</span>
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10">
          <svg
            viewBox="0 0 64 64"
            aria-hidden="true"
            className="h-full w-full"
          >
            <defs>
              <linearGradient id="avatarBg" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#2d1b15" />
                <stop offset="100%" stopColor="#120b08" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" fill="url(#avatarBg)" />
            <circle cx="32" cy="24" r="11" fill="#f1c27d" />
            <path
              d="M20 58c2-10 9-15 12-15s10 5 12 15"
              fill="#4f7fbb"
            />
            <path
              d="M21 22c1-10 8-15 16-15 6 0 11 3 15 10-3-1-5-1-7 0-1 1-3 1-5 1-7 1-11 4-14 9-3-1-4-3-5-5Z"
              fill="#111111"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
