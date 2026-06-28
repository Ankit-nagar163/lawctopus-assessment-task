import React from 'react';

export default function EligibilityWho() {
  const audiences = [
    {
      role: "Law Students",
      description: "Boost your CV, secure top-tier law firm internships, and start landing freelance gigs early in your college days.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479L12 21l-6.825-3.943a12.083 12.083 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      role: "Young Lawyers",
      description: "Young lawyers wanting to start earning through contract drafting and establish an independent secondary income source.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      role: "Academicians",
      description: "Stay ahead of industry updates, enhance your practical legal syllabus knowledge, and enrich your teaching repertoire.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      role: "Freelancing Enthusiasts",
      description: "Freelancing Enthusiasts looking to build global pipelines and scale client networks on platforms like Upwork and Fiverr.",
      icon: (
        <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.5M10.5 20.656l1.244-2.489a2 2 0 00.224-.922V15a2 2 0 012-2h1.618a2 2 0 001.447-.894l.82-.914a1 1 0 00.183-.347m-.466-2.18l-.79-.527a2 2 0 00-1.109-.33H13a2 2 0 01-2-2V6h-.5A2.5 2.5 0 018 3.5v-.435m1.564 19.32a9 9 0 1111.458-11.458" />
        </svg>
      )
    }
  ];

  return (
    <section id="eligibility-who" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Who can enroll for this course?
        </h2>
        <span className="heading-underline"></span>
      </div>

      {/* Target Audiences Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {audiences.map((audience, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-150 flex gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
              {audience.icon}
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-slate-950 text-base leading-snug">
                {audience.role}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                {audience.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Course Registration Callout Card */}
      <div className="bg-rose-50/50 border border-rose-100/60 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
        <div className="space-y-1.5 text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-bold text-slate-900">
            Mastering Contract Drafting & Freelancing
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Join our comprehensive 6-Month Long Expert-Level online certificate course.
          </p>
        </div>
        <a
          href="#enroll"
          className="inline-flex items-center justify-center gap-2 bg-red-800 hover:bg-red-900 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-150 active:scale-95 shadow-md shadow-red-800/10 flex-shrink-0 w-full sm:w-auto text-center"
        >
          <span>Register for 6-Month Course</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
