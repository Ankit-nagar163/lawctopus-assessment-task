import React from 'react';

export default function WhyJoin() {
  const points = [
    {
      id: 1,
      title: "24 Essential Agreements & 54 Live Sessions",
      description: "Learn to draft 24 essential, high-demand agreements with hands-on guidance through 54 live training sessions led by industry experts.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Key Practice Areas Coverage",
      description: "Develop drafting expertise in practice areas like: Real Estate, IPR, General Corporate, and International Contracts.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Upwork Freelancing & Client Training",
      description: "Get freelancing training from a top-rated Upwork contract expert, receive direct opportunities on Upwork and handle your first client confidently!",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "10 Assignment Drafts with Expert Feedback",
      description: "Draft 10 contracts and get personalised feedback on each of your drafts. Use these 10 fine-tuned contracts in your UpWork portfolio!",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Save 4 Years of Career Progression",
      description: "Save 4 years of your legal career! Learn in 6 months what a lawyer learns in 4-5 years of practice.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Lifetime Access to Resources",
      description: "Get lifetime access to all the course materials (recorded lectures, reading resources, drafts, recordings of live sessions, etc.).",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-join" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Why You Should Join This Course?
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      {/* Grid of Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((point) => (
          <div 
            key={point.id}
            className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-200 flex flex-col gap-4 group"
          >
            {/* Icon Block */}
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors duration-200">
              {point.icon}
            </div>
            
            {/* Text details */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-[15px] tracking-tight leading-snug">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
