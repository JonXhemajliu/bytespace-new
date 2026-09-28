export default function Sponsors() {
  const logos = ["logolipsum", "logolipsum", "logolipsum", "logolipsum", "logolipsum"];

  return (
    <div className="w-full border-y border-gray-100 bg-white py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-around gap-8 opacity-50 grayscale transition-all hover:grayscale-0">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center gap-2 text-lg font-bold tracking-wider text-gray-700">
            <div className="h-6 w-6 rounded-full bg-gray-400" />
            <span>{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}