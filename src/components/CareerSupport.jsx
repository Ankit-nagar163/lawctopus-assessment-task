import React from 'react';
import { IconPenLine, IconMail, IconUsers, IconCurrencyRupee, IconLightbulb } from './Icons';

export default function CareerSupport() {
  const skillBuildingCategories = [
    {
      title: "CV Drafting and LinkedIn Profile Building",
      iconEl: <IconPenLine className="w-5 h-5" />,
      color: 'text-[#991b1b]',
      bg: 'bg-red-50',
      bullets: [
        "Drafting CVs and get personalised feedback to get noticed by legal recruiters",
        "Learn to build an excellent LinkedIn Profile and get live feedback from experts"
      ]
    },
    {
      title: "Cover Letter Drafting",
      iconEl: <IconMail className="w-5 h-5" />,
      color: 'text-[#b45309]',
      bg: 'bg-amber-50',
      bullets: [
        "Learn drafting Cover Letters. Draft in a way that helps you secure internships and jobs",
        "Draft a cover letter for your dream job/internship and get personal feedback"
      ]
    },
    {
      title: "Basics of Networking and Negotiation",
      iconEl: <IconUsers className="w-5 h-5" />,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      bullets: [
        "Learn the finer nuances of networking effectively with your cohort",
        "Learn Negotiation skills that will help you in salary negotiations, etc."
      ]
    },
    {
      title: "Advanced Usage of UpWork and Fiverr for Freelancing",
      iconEl: <IconCurrencyRupee className="w-5 h-5" />,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      bullets: [
        "Learn the Advanced tips and techniques about UpWork",
        "Learn how to use Fiverr, another popular freelancing platform"
      ]
    },
    {
      title: "Subject Specific Freelancing Skills and Strategies",
      iconEl: <IconLightbulb className="w-5 h-5" />,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
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
        <span className="heading-underline"></span>
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
                  <div className={`w-9 h-9 rounded-lg ${sec.bg} flex items-center justify-center flex-shrink-0 ${sec.color}`}>
                    {sec.iconEl}
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
