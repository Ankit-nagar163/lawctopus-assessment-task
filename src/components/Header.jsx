import logoPng from '../assets/logo.png';
import logoWebp from '../assets/Lawctopus-1.webp';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-[84px] bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

        {/* Logo container */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center">
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logoPng}
                alt="Lawctopus Logo"
                className="h-11 sm:h-12 lg:h-13 w-auto object-contain"
              />
            </picture>
          </a>
        </div>

        {/* Middle course text display */}
        <div className="hidden lg:flex flex-col items-center text-center">
          <h2 className="text-xs font-extrabold text-slate-800 tracking-tight">
            Expert Course on 'Mastering Contract Drafting and Freelancing'
          </h2>
          <span className="text-[10px] font-bold text-slate-400 mt-0.5">
            July 1 – December 31
          </span>
        </div>

        {/* Right Action Button */}
        <div>
          <a
            href="#enroll"
            className="bg-red-800 hover:bg-red-900 text-white text-xs font-bold px-5 py-2 rounded-full transition-all duration-150 active:scale-95 shadow-sm inline-block"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </header>
  );
}
