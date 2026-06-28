import React from 'react';

export default function Breadcrumbs() {
  return (
    <div className="bg-amber-50/40 border-b border-amber-100/60 max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs overflow-hidden">

        {/* Breadcrumbs */}
        <nav className="text-slate-500 font-medium leading-relaxed flex items-center flex-wrap gap-0.5">
          <span className="hover:text-[#991b1b] cursor-pointer transition-colors">Home</span>
          <span className="mx-1.5 text-slate-300">›</span>
          <span className="hidden md:inline hover:text-[#991b1b] cursor-pointer transition-colors">Opportunities & Events</span>
          <span className="hidden md:inline mx-1.5 text-slate-300">›</span>
          <span className="hidden sm:inline hover:text-[#991b1b] cursor-pointer transition-colors">Courses and Workshops</span>
          <span className="hidden sm:inline mx-1.5 text-slate-300">›</span>
          <span className="text-[#991b1b] font-semibold">
            Mastering Contract Drafting and Freelancing
          </span>
        </nav>

        {/* Social Share icons with brand colors */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[9px]">Share:</span>
          <div className="flex items-center gap-1.5">

            {/* LinkedIn — brand blue */}
            <a href="#" title="Share on LinkedIn"
              className="w-6 h-6 rounded-md flex items-center justify-center bg-[#0077b5]/10 hover:bg-[#0077b5] text-[#0077b5] hover:text-white transition-all duration-150">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Twitter/X — brand black */}
            <a href="#" title="Share on X (Twitter)"
              className="w-6 h-6 rounded-md flex items-center justify-center bg-slate-100 hover:bg-slate-900 text-slate-500 hover:text-white transition-all duration-150">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Facebook — brand blue */}
            <a href="#" title="Share on Facebook"
              className="w-6 h-6 rounded-md flex items-center justify-center bg-[#1877f2]/10 hover:bg-[#1877f2] text-[#1877f2] hover:text-white transition-all duration-150">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            {/* WhatsApp — brand green */}
            <a href="#" title="Share on WhatsApp"
              className="w-6 h-6 rounded-md flex items-center justify-center bg-[#25d366]/10 hover:bg-[#25d366] text-[#25d366] hover:text-white transition-all duration-150">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.85.001-2.636-1.023-5.11-2.884-6.974C16.572 1.916 14.1.89 11.468.89c-5.44 0-9.866 4.415-9.869 9.855-.001 1.77.476 3.5 1.378 5.064L1.93 20.895l5.207-1.365z" />
              </svg>
            </a>

            {/* Copy Link */}
            <a href="#" title="Copy link"
              className="w-6 h-6 rounded-md flex items-center justify-center bg-slate-100 hover:bg-[#991b1b] text-slate-400 hover:text-white transition-all duration-150">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
