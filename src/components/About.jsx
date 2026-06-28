import React from 'react';

export default function About() {
  return (
    <div className="space-y-10">
      
      {/* Hero Quote / Key Highlights Callout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-rose-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md">
        {/* Subtle geometric background shapes */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-rose-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/20 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative space-y-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl text-rose-400 font-serif leading-none">“</span>
            <p className="text-base sm:text-lg lg:text-[19px] font-medium leading-relaxed text-slate-100">
              Lawctopus Law School has launched a 6-month long online course on <span className="text-white font-extrabold underline decoration-rose-500 decoration-2 underline-offset-4">‘Mastering Contract Drafting and Freelancing‘</span>, consisting of 54 live sessions led by industry experts.
            </p>
          </div>
          
          <hr className="border-white/10" />

          <div className="flex items-start gap-4">
            <span className="text-3xl text-rose-400 font-serif leading-none">“</span>
            <p className="text-base sm:text-lg lg:text-[19px] font-medium leading-relaxed text-slate-100">
              This course empowers students to draft over <span className="text-white font-extrabold text-rose-300">24 complex contracts</span>, including website terms and international agreements, and teaches you how to excel as a <span className="text-white font-extrabold text-rose-300">Contract Drafting Freelancer</span> through platforms like Upwork, LinkedIn, etc.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section Content */}
      <section className="space-y-8">
        
        {/* Section Heading */}
        <div className="flex items-start gap-4">
          <span className="section-num hidden sm:block select-none" aria-hidden="true">01</span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
              About the 6-Month Long Expert-Level Course on Mastering Contract Drafting and Freelancing
            </h2>
            <span className="heading-underline"></span>
          </div>
        </div>

        <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
          This course is an opportunity for anyone looking to become an expert in contract drafting.
        </p>

        {/* Dynamic Timeline / Split Month Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Months 1-2 */}
          <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-[#b45309]/30 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-extrabold text-[#991b1b] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
                  Phase 1
                </span>
                <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full">Months 1 – 2</span>
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-3 group-hover:text-[#991b1b] transition-colors duration-200">
                Fundamentals of Contract Drafting
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Learn the core principles and fundamentals of drafting contracts. Gain essential hands-on experience by identifying contracts, and reviewing and redrafting a sale deed all by yourself.
              </p>
            </div>
          </div>

          {/* Card 2: Months 3-6 */}
          <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-[#b45309]/30 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-extrabold text-[#b45309] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full">
                  Phase 2
                </span>
                <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full">Months 3 – 6</span>
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-3 group-hover:text-[#991b1b] transition-colors duration-200">
                Advanced Specializations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Focus on specific contracts related to Real Estate, Intellectual Property, and Business Agreements (NDAs, Master Service Agreements, Power of Attorney, Shareholders & Joint Venture Agreements, e-contracts, etc.) with 7-8 LIVE sessions each month.
              </p>
            </div>
          </div>

        </div>

        {/* Additional details list styled in a clean grid */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 space-y-6">
          <h4 className="text-[11px] font-extrabold text-[#b45309] uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#b45309] rounded-full inline-block"></span>
            Key Program Components & Freelance Training
            <span className="w-4 h-0.5 bg-[#b45309] rounded-full inline-block"></span>
          </h4>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-rose-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <strong>Clause & Execution Mastery:</strong> Learn everything from drafting and negotiating clauses to handling execution formalities.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-rose-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <strong>Upwork Freelancing Sessions:</strong> Learn how to build an online profile on Upwork, write winning proposals, and earn money from a top-rated expert.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-rose-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <strong>Monthly Networking Sessions:</strong> Connect with peers and learn exactly how to build and navigate your career through networking.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-rose-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <strong>CV & Cover Letter Prep:</strong> We will train you to draft excellent CVs, customize cover letters, share Upwork opportunities, and support you in applying.
              </span>
            </li>
          </ul>
        </div>

        {/* Bottom Callout summary and Schedule link button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
          <p className="text-slate-800 text-[15px] font-bold leading-relaxed italic max-w-xl">
            It’s a complete package for those who are serious about advancing their contract drafting skills and earning money through that.
          </p>
          <a
            href="#schedule"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-3.5 rounded-xl transition-all duration-150 shadow-sm w-full sm:w-auto"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Detailed Course Schedule (PDF)
          </a>
        </div>

      </section>

    </div>
  );
}
