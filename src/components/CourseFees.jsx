import React from 'react';

export default function CourseFees() {
  return (
    <section id="fees" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="flex items-start gap-4">
        <span className="section-num hidden sm:block select-none" aria-hidden="true">07</span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
            Course Fees
          </h2>
          <span className="heading-underline"></span>
        </div>
      </div>

      <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
        Lawctopus Law School offers 2 different courses to learn Contract Drafting and Negotiation. Both courses include{' '}
        <strong className="text-[#0f172a] font-bold">Lifetime Access</strong> to all materials.
      </p>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

        {/* Fee Card 1 — Expert Level (Featured / Most Popular) */}
        <div className="relative flex flex-col bg-white border-2 border-[#991b1b] rounded-2xl shadow-md overflow-hidden">
          {/* Top ribbon */}
          <div className="bg-[#991b1b] text-white text-[10px] font-extrabold uppercase tracking-widest text-center py-1.5 px-4">
            ⭐ Most Popular — Expert Level
          </div>

          <div className="p-6 flex flex-col gap-5 flex-1">
            {/* Label & Duration */}
            <div>
              <span className="text-xs text-slate-500 font-semibold block mb-1">6 Months Long LIVE Course</span>
              <h3 className="text-xl font-extrabold text-[#0f172a]">
                Expert-Level Course on Mastering Contract Drafting & Freelancing
              </h3>
            </div>

            {/* Price block */}
            <div className="flex items-end gap-3">
              <span className="text-4xl font-black text-[#991b1b] leading-none">₹24,999</span>
              <div className="flex flex-col">
                <span className="text-sm text-slate-400 line-through font-medium">₹60,000</span>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Save 58%
                </span>
              </div>
            </div>

            {/* Key features quick list */}
            <ul className="space-y-2 text-sm text-slate-600">
              {['54+ Live Sessions', '24 Contract Assignments', 'Freelancing on Upwork/Fiverr', 'Career Placement Support', 'Lifetime Access to All Materials'].map((feat) => (
                <li key={feat} className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#991b1b] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-2">
              <a
                href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
                target="_blank"
                rel="noreferrer"
                className="cta-pulse w-full flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-sm font-extrabold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                Enroll in Expert Course
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Fee Card 2 — Foundation Level */}
        <div className="flex flex-col bg-white border border-slate-200/70 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
          <div className="bg-slate-100 text-slate-500 text-[10px] font-extrabold uppercase tracking-widest text-center py-1.5 px-4">
            Foundation Level
          </div>

          <div className="p-6 flex flex-col gap-5 flex-1">
            <div>
              <span className="text-xs text-slate-500 font-semibold block mb-1">2 Months Long LIVE Course</span>
              <h3 className="text-xl font-extrabold text-[#0f172a]">
                Foundation-Level Course on Contract Drafting
              </h3>
            </div>

            <div className="flex items-end gap-3">
              <span className="text-4xl font-black text-slate-700 leading-none">₹7,999</span>
            </div>

            <ul className="space-y-2 text-sm text-slate-600">
              {['Essential Contract Clauses', 'Execution Formalities', 'Basic Negotiation Skills', 'Reading Resources', 'Lifetime Access'].map((feat) => (
                <li key={feat} className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-2">
              <a
                href="https://www.lawctopuslawschool.com/"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-[#991b1b] hover:text-[#991b1b] text-slate-600 text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                View Foundation Course
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Instalment note */}
      <p className="text-xs text-slate-400 text-center font-medium pt-1">
        💳 EMI options available · Scholarships offered to deserving students · Contact{' '}
        <a href="mailto:courses@lawctopus.com" className="text-[#991b1b] hover:underline font-semibold">courses@lawctopus.com</a>
      </p>

    </section>
  );
}
