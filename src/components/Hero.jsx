import React from 'react';
import { IconUsers, IconStar, IconCalendarLive } from './Icons';

const trustStats = [
  { 
    value: '1,500+', 
    label: 'Learners Enrolled',
    Icon: IconUsers,
    color: 'text-[#991b1b]',
    bg: 'bg-red-50/60',
    border: 'border-red-100/40'
  },
  { 
    value: '96.5/100', 
    label: 'Avg. Satisfaction',
    Icon: IconStar,
    color: 'text-amber-600',
    bg: 'bg-amber-50/60',
    border: 'border-amber-100/40'
  },
  { 
    value: 'July 2026', 
    label: 'Batch Starting',
    Icon: IconCalendarLive,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50/60',
    border: 'border-indigo-100/40'
  },
];

export default function Hero() {
  return (
    <section className="mb-10 pb-8 border-b border-slate-100">

      {/* Deadline chip — small urgency indicator */}
      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-700 text-[11px] font-extrabold uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block"></span>
        Registration Open — Closes June 30, 2026
      </div>

      {/* H1 Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-[2.05rem] font-extrabold text-[#0f172a] tracking-tight leading-[1.25] mb-5 text-balance max-w-3xl">
        Lawctopus' 6-Month Long Expert Course on{' '}
        <span className="text-[#991b1b]">'Mastering Contract Drafting and Freelancing'</span>
      </h1>

      {/* Author Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#991b1b] to-[#b45309] text-white font-bold flex items-center justify-center shadow text-xs flex-shrink-0">
            AA
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-bold text-slate-800">Aditya Aryan</span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wide">
                Ongoing
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium">Jun 27, 2026 · Lawctopus Law School</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#fees"
          className="cta-pulse inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs font-extrabold px-6 py-2.5 rounded-full transition-all duration-200 active:scale-95 shadow-md whitespace-nowrap"
        >
          Enroll Now
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Trust stats grid */}
      <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {trustStats.map((stat, i) => (
          <div
            key={i}
            className={`flex items-center gap-4.5 p-4 rounded-2xl bg-white border border-slate-200/50 shadow-sm hover:shadow-md hover:border-[#b45309]/30 transition-all duration-200 group`}
          >
            {/* Color-coded Icon Box */}
            <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200`}>
              <stat.Icon className="w-5 h-5" />
            </div>
            
            {/* Text details */}
            <div className="space-y-0.5">
              <span className="text-lg font-black text-[#0f172a] block leading-none tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] font-bold text-slate-400 block leading-tight">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

