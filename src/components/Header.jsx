import logoPng from '../assets/logo.png';
import logoWebp from '../assets/Lawctopus-1.webp';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-[80px] bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a href="#" className="flex items-center" aria-label="Lawctopus Home">
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logoPng}
                alt="Lawctopus Logo"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </picture>
          </a>
          {/* Vertical divider on desktop */}
          <div className="hidden lg:block w-px h-6 bg-slate-200"></div>
          <span className="hidden lg:inline-block text-[10px] font-extrabold text-[#b45309] uppercase tracking-widest bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
            Law School
          </span>
        </div>

        {/* Center course title — desktop only */}
        <div className="hidden lg:flex flex-col items-center text-center flex-1 min-w-0 px-4">
          <h2 className="text-[11.5px] font-extrabold text-[#0f172a] tracking-tight truncate max-w-md">
            Expert Course on 'Mastering Contract Drafting and Freelancing'
          </h2>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-slate-400">July 1 – December 31, 2026</span>
          </div>
        </div>

        {/* Right action area */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Seats indicator */}
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Seats Left</span>
            <span className="text-sm font-extrabold text-[#991b1b] leading-tight">Limited!</span>
          </div>
          <a
            href="#fees"
            className="cta-pulse inline-flex items-center gap-1.5 bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs font-extrabold px-4 sm:px-5 py-2 rounded-full transition-all duration-200 active:scale-95 shadow-sm whitespace-nowrap"
          >
            Enroll Now
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </header>
  );
}
