import React from 'react';

export default function Hero() {
  return (
    <section className="mb-10 pb-8 border-b border-slate-100">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-5 text-balance">
        Lawctopus’ 6-Month Long Course <span className="text-rose-800">‘Mastering Contract Drafting and Freelancing’</span>
        <span className="block text-sm sm:text-base lg:text-lg font-bold text-slate-500 mt-2.5">
          [July 1 – December 31] • Register by June 30!
        </span>
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 text-white font-bold flex items-center justify-center shadow-inner text-sm">
            AA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-800">Aditya Aryan</span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-green-50 text-green-700 border border-green-200">
                Ongoing
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium">Jun 27, 2026</span>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l8.99-4.495m0 0l-8.99-4.499m8.99 4.495L8.68 15.24" />
              </svg>
              21 Shares
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              2 Comments
            </span>
          </div>

          <a
            href="#enroll"
            className="bg-red-800 hover:bg-red-900 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all duration-150 active:scale-95 shadow-sm"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
