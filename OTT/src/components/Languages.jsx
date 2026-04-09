export default function Languages() {
  const langs = ["Hindi", "English", "Tamil", "Telugu", "Korean"];

  return (
    <div className="px-6 py-6">
      <h2 className="text-xl mb-3">Browse by Language</h2>

      <div className="flex gap-3 flex-wrap">
        {langs.map((lang, i) => (
          <span
            key={i}
            className="bg-gray-800 px-4 py-2 rounded-full hover:bg-red-600 cursor-pointer"
          >
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}