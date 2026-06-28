import React from 'react';

export default function CareerSupport() {
  const skillBuildingCategories = [
    {
      title: "CV Drafting and LinkedIn Profile Building",
      icon: (
        <svg className="w-5 h-5 text-rose-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bullets: [
        "Drafting CVs and get personalised feedback to get noticed by legal recruiters",
        "Learn to build an excellent LinkedIn Profile and get live feedback from experts"
      ]
    },
    {
      title: "Cover Letter Drafting",
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bullets: [
        "Learn drafting Cover Letters. Draft in a way that helps you secure internships and jobs",
        "Draft a cover letter for your dream job/internship and get personal feedback"
      ]
    },
    {
      title: "Basics of Networking and Negotiation",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bullets: [
        "Learn the finer nuances of networking effectively with your cohort",
        "Learn Negotiation skills that will help you in salary negotiations, etc."
      ]
    },
    {
      title: "Advanced Usage of UpWork and Fiverr for Freelancing",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bullets: [
        "Learn the Advanced tips and techniques about UpWork",
        "Learn how to use Fiverr, another popular freelancing platform"
      ]
    },
    {
      title: "Subject Specific Freelancing Skills and Strategies",
      icon: (
        <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bullets: [
        "Freelancing in legal research, drafting, and writing projects",
        "Freelancing in trademark filing, copyright research, data protection, tech contracts, etc."
      ]
    }
  ];

  return (
    <section id="career-support" className="space-y-12 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Career and Placement Support
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      {/* Modern Callout Header */}
      <div className="border-l-4 border-rose-800 bg-white border border-slate-200/50 border-l-0 p-5 rounded-r-2xl shadow-sm text-center sm:text-left">
        <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
          Career and Placement Support Provided to Students of Mastering Contract Drafting and Freelancing
        </h3>
      </div>

      {/* Sequential Blocks */}
      <div className="space-y-10">
        
        {/* Block 1: Skill Building */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-800 text-white flex items-center justify-center flex-shrink-0 font-extrabold shadow-sm">
              1
            </div>
            <h4 className="text-base sm:text-lg font-black text-slate-900">
              Skill Building: 22 Live Sessions (with Recordings) on Career Skills
            </h4>
          </div>

          {/* Skill categories list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pl-2 sm:pl-12">
            {skillBuildingCategories.map((sec, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm space-y-4 hover:border-slate-300 transition-all duration-200">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0">
                    {sec.icon}
                  </div>
                  <h5 className="font-extrabold text-slate-800 text-sm leading-tight">
                    {sec.title}
                  </h5>
                </div>
                <ul className="space-y-2.5">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-700 mt-2 flex-shrink-0"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Block 2: Opportunities Sharing */}
        <div className="flex items-start gap-4 p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-rose-800 font-extrabold">
            2
          </div>
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-black text-slate-950 leading-snug">
              Opportunities Sharing: Exclusive WhatsApp Groups for Internships, Jobs, and Freelancing Opportunities
            </h4>
          </div>
        </div>

        {/* Block 3: Dedicated Support */}
        <div className="flex items-start gap-4 p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-rose-800 font-extrabold">
            3
          </div>
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-black text-slate-950 leading-snug">
              Dedicated Support: Sharing your profiles with partner organisations for internships and CVs
            </h4>
          </div>
        </div>

        {/* Block 4: One-on-One Coaching */}
        <div className="flex items-start gap-4 p-6 bg-rose-50/20 border border-rose-100 rounded-2xl shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-rose-800 text-white flex items-center justify-center flex-shrink-0 font-extrabold">
            4
          </div>
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-black text-slate-950 leading-snug">
              One-on-One Coaching
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              A bi-monthly (once in 2 months), one-to-one, 30-45-minute-long career coaching session with LLS’ founders and faculty.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
