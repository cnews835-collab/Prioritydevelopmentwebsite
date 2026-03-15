export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Priority Development Logo" className="w-10 h-10 object-contain brightness-0 invert" />
              <span className="font-display text-2xl font-bold tracking-wide text-white">
                Priority Development
              </span>
            </a>
            <p className="text-slate-400 text-center md:text-left max-w-xs">
              A side project built with passion — Roblox, Discord, and the web.
            </p>
          </div>

          <div className="flex gap-12 text-center md:text-left">
            <div>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-400 hover:text-accent transition-colors">Home</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors">Services</a></li>
                <li><a href="#portfolio" className="text-slate-400 hover:text-accent transition-colors">Portfolio</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-accent transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Find Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Discord</a></li>
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Roblox Group</a></li>
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Twitter / X</a></li>
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Priority Development. Just a side project — no corporate stuff here.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}