import React from 'react';

export default function Questions() {
  return (
    <section id="questions" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Questions?
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      {/* Modern Contact Card Box */}
      <div className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Text Area */}
        <div className="space-y-3 flex-1">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            If you have any queries regarding the course, please send an email to <strong className="text-slate-900 font-bold">courses@lawctopus.com</strong> and we will get back to you within 24 hours!
          </p>
          
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Response Guarantee: Within 24 Hours
            </span>
          </div>
        </div>

        {/* Email CTA Button */}
        <div className="w-full md:w-auto flex-shrink-0">
          <a
            href="mailto:courses@lawctopus.com"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-6 py-4 rounded-xl transition-all duration-150 w-full md:w-auto shadow-sm"
          >
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email courses@lawctopus.com
          </a>
        </div>

      </div>

    </section>
  );
}
