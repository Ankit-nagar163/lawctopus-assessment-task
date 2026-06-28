import React from 'react';
import {
  IconVideoCamera, IconBookOpen, IconLaptopMoney,
  IconClipboardList, IconSparkles, IconInfinity
} from './Icons';

const points = [
  {
    num: '01',
    Icon: IconVideoCamera,
    title: '24 Essential Agreements & 54 Live Sessions',
    description: 'Learn to draft 24 essential, high-demand agreements with hands-on guidance through 54 live training sessions led by industry experts.',
  },
  {
    num: '02',
    Icon: IconBookOpen,
    title: 'Key Practice Areas Coverage',
    description: 'Develop drafting expertise in practice areas like: Real Estate, IPR, General Corporate, and International Contracts.',
  },
  {
    num: '03',
    Icon: IconLaptopMoney,
    title: 'Upwork Freelancing & Client Training',
    description: 'Get freelancing training from a top-rated Upwork contract expert, receive direct opportunities on Upwork and handle your first client confidently!',
  },
  {
    num: '04',
    Icon: IconClipboardList,
    title: '10 Assignment Drafts with Expert Feedback',
    description: 'Draft 10 contracts and get personalised feedback on each of your drafts. Use these 10 fine-tuned contracts in your Upwork portfolio!',
  },
  {
    num: '05',
    Icon: IconSparkles,
    title: 'Save 4 Years of Career Progression',
    description: 'Save 4 years of your legal career! Learn in 6 months what a lawyer learns in 4-5 years of practice.',
  },
  {
    num: '06',
    Icon: IconInfinity,
    title: 'Lifetime Access to Resources',
    description: 'Get lifetime access to all the course materials (recorded lectures, reading resources, drafts, recordings of live sessions, etc.).',
  },
];

export default function WhyJoin() {
  return (
    <section id="why-join" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="flex items-start gap-4">
        <span className="section-num hidden sm:block select-none" aria-hidden="true">02</span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
            Why You Should Join This Course?
          </h2>
          <span className="heading-underline"></span>
        </div>
      </div>

      {/* Grid of Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {points.map((point) => (
          <div
            key={point.num}
            className="relative bg-white border border-slate-200/70 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-[#b45309]/40 transition-all duration-200 flex flex-col gap-4 group overflow-hidden"
          >
            {/* Faint background number */}
            <span
              className="absolute top-2 right-3 text-7xl font-black text-slate-100 leading-none select-none pointer-events-none group-hover:text-amber-50 transition-colors duration-300"
              aria-hidden="true"
            >
              {point.num}
            </span>

            {/* Icon Block — consistent modern SVG */}
            <div className="relative z-10 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200 flex-shrink-0 text-[#991b1b]">
              <point.Icon className="w-5 h-5" />
            </div>

            {/* Text */}
            <div className="relative z-10 space-y-1.5">
              <h3 className="font-bold text-[#0f172a] text-[15px] tracking-tight leading-snug group-hover:text-[#991b1b] transition-colors duration-200">
                {point.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>

            {/* Hover left border accent */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#991b1b] to-[#b45309] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
