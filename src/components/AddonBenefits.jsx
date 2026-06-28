import React from 'react';

export default function AddonBenefits() {
  const benefits = [
    {
      title: "Completion Certificates",
      text: "Completion certificates are issued by Lawctopus Law School after completing the course.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Merit Certificates",
      text: "Merit certificates are awarded to best-performing learners.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.912 5.886h6.19l-5.008 3.639L17.006 18.4 12 14.761l-5.006 3.64 1.912-5.875-5.008-3.64h6.19L12 3z" />
        </svg>
      )
    },
    {
      title: "Free Webinar Access",
      text: "Access to webinars on contract drafting, contract lifecycle management, etc., are given for free.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "LLS Alumni Community",
      text: "LLS alumni groups are available for exclusive internship/job notifications and discounts on courses/workshops.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="add-ons" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Add-on Benefits
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      {/* Grid of Add-ons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-150 flex gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
              {benefit.icon}
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-slate-950 text-[15px] leading-snug">
                {benefit.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                {benefit.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
