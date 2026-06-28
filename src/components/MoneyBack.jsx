import React from 'react';

export default function MoneyBack() {
  return (
    <section id="money-back" className="space-y-8 scroll-mt-24">
      
      {/* High-Trust Guarantee Banner */}
      <div className="relative overflow-hidden bg-rose-50/50 border border-rose-100/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col md:flex-row items-center gap-6 group">
        
        {/* Abstract design elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-200/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
        
        {/* Large Guarantee Badge Icon */}
        <div className="w-16 h-16 rounded-2xl bg-white border border-rose-100 flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg className="w-9 h-9 text-rose-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>

        {/* Text Block */}
        <div className="space-y-1.5 flex-1 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Money Back Guarantee
          </h2>
          <p className="text-rose-700 text-xs sm:text-sm font-bold tracking-wider uppercase">
            100% Risk-Free Enrollment
          </p>
        </div>
      </div>

      {/* Paragraph Details styled in a clean text block */}
      <div className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-2xl space-y-4">
        <p className="text-slate-800 text-[15px] sm:text-base leading-relaxed font-semibold">
          We truly believe our courses will enhance your legal skills, confidence, and career prospects.
        </p>
        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
          If you complete any of our courses <strong className="text-slate-950 font-bold">“sincerely”</strong> and still feel it didn’t add value to your career, we’ll refund <span className="text-rose-800 font-extrabold text-base underline decoration-rose-700 decoration-2 decoration-offset-2">100% of your fee</span>; no questions asked.
        </p>
      </div>

    </section>
  );
}
