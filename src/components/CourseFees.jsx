import React from 'react';

export default function CourseFees() {
  return (
    <section id="fees" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Course Fees
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
        Lawctopus Law School has 2 different courses to learn Contract Drafting and Negotiation.
      </p>

      {/* Modern High-End Layout for Fees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Fee block 1 */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200">
          <div className="space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-800 bg-rose-50 px-2.5 py-1 rounded-full">
              Expert Level
            </span>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 font-semibold block">6 Months Long LIVE Course</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900">Rs. 24,999/-</span>
                <span className="text-sm text-slate-400 line-through font-medium">Rs. 60,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fee block 2 */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200">
          <div className="space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              Foundation Level
            </span>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 font-semibold block">2 Months Long LIVE Course</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900">Rs. 7,999/-</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
