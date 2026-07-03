export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          Designed & Built by <span className="text-gray-300">Sumanth Suvarna</span>
        </p>
        <p className="text-gray-600 text-xs font-mono">
          Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
