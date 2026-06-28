import React from 'react';
import { IconAward, IconTrophy, IconWebMonitor, IconUsers } from './Icons';

const benefits = [
  {
    Icon: IconAward,
    title: 'Completion Certificate',
    text: 'Issued by Lawctopus Law School upon completing the course. Shareable on LinkedIn, recognised by law firms.',
    tag: 'On Completion',
    color: 'text-[#991b1b]',
    bg: 'bg-red-50',
    tagColor: 'text-[#991b1b] bg-red-50 border-red-200',
  },
  {
    Icon: IconTrophy,
    title: 'Merit Certificate',
    text: 'Awarded exclusively to top-performing learners — a mark of distinction that stands out in applications.',
    tag: 'Top Performers',
    color: 'text-[#b45309]',
    bg: 'bg-amber-50',
    tagColor: 'text-[#b45309] bg-amber-50 border-amber-200',
  },
  {
    Icon: IconWebMonitor,
    title: 'Free Webinar Access',
    text: 'Lifetime access to webinars on contract drafting, contract lifecycle management, and more — completely free.',
    tag: 'Lifetime Access',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    tagColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
  {
    Icon: IconUsers,
    title: 'LLS Alumni Network',
    text: 'Join an exclusive alumni WhatsApp group for internship leads, job alerts, course discounts, and peer networking.',
    tag: 'Exclusive Community',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    tagColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
];

export default function AddonBenefits() {
  return (
    <section id="add-ons" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="flex items-start gap-4">
        <span className="section-num hidden sm:block select-none" aria-hidden="true">08</span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
            Add-on Benefits
          </h2>
          <span className="heading-underline"></span>
        </div>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-[#b45309]/30 transition-all duration-200 flex gap-4 items-start group"
          >
            {/* Distinct icon per benefit */}
            <div className={`w-11 h-11 rounded-xl ${b.bg} border border-slate-100 flex items-center justify-center flex-shrink-0 ${b.color} group-hover:scale-105 transition-transform duration-200`}>
              <b.Icon className="w-5 h-5" />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <h3 className="font-bold text-[#0f172a] text-[15px] leading-snug">
                  {b.title}
                </h3>
                <span className={`text-[9px] font-extrabold uppercase tracking-wider border px-2 py-0.5 rounded-full whitespace-nowrap ${b.tagColor}`}>
                  {b.tag}
                </span>
              </div>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                {b.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
