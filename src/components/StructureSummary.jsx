import React from 'react';

export default function StructureSummary() {
  return (
    <section id="structure-summary" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Structure of this Course
        </h2>
        <span className="heading-underline"></span>
      </div>

      {/* Description text */}
      <div className="text-slate-600 text-[15px] sm:text-base leading-relaxed space-y-4 bg-white border border-slate-200/50 p-6 rounded-2xl">
        <p>
          The course begins with a live <strong className="text-slate-950 font-bold">‘Orientation Session,’</strong> which explains how to fully benefit from it.
        </p>
        <p>
          This course will also teach you to build a strong profile, write winning proposals, and master networking and negotiation for career success.
        </p>
        <p className="text-sm font-semibold text-slate-800 pt-2">
          For the detailed month-wise structure, please <a href="#structure-detailed" className="text-rose-700 hover:text-rose-900 underline transition-colors">click here</a> (The PDF version of this doc is added below).
        </p>
        <p className="text-xs text-slate-400">
          Note: We have also added the structure at the end of this post.
        </p>
      </div>

      {/* Modern Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">

        {/* Download outline button */}
        <a
          href="#outline-download"
          className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold px-6 py-3.5 rounded-xl transition-all duration-150 w-full sm:w-auto"
        >
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Course Outline
        </a>

        {/* High-impact registration banner, styled premium (non-AI style) */}
        <a
          href="#enroll"
          className="flex-1 w-full text-center bg-red-800 hover:bg-red-900 text-white text-xs font-extrabold py-4 px-6 rounded-xl transition-all duration-150 active:scale-98 shadow-md shadow-red-800/10 tracking-wider uppercase flex items-center justify-center gap-2"
        >
          <span>Register for the 6-Month Expert Course</span>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </a>

      </div>
    </section>
  );
}
