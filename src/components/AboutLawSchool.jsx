import React from 'react';

export default function AboutLawSchool() {
  return (
    <section id="about-lawschool" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          About Lawctopus Law School
        </h2>
        <span className="heading-underline"></span>
      </div>

      {/* Trust Badges Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Stat 1 */}
        <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center space-y-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-rose-800 block">20,000+</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Students & Professionals</span>
          <p className="text-[11px] text-slate-400 mt-1">Taught practical legal skills</p>
        </div>

        {/* Stat 2 */}
        <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center space-y-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-rose-800 block">93.2/100</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Average Course Rating</span>
          <p className="text-[11px] text-slate-400 mt-1">From over 1,000+ verified ratings</p>
        </div>

        {/* Stat 3 */}
        <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center space-y-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-rose-800 block">"Warm"</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Learning Experience</span>
          <p className="text-[11px] text-slate-400 mt-1">Engaging, cozy and cohort-focused</p>
        </div>

      </div>

      {/* Paragraph body */}
      <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed bg-white border border-slate-200/50 p-6 rounded-2xl">
        <a 
          href="https://www.lawctopus.com/lawschool" 
          target="_blank" 
          rel="noreferrer" 
          className="text-rose-800 font-bold hover:underline transition-colors"
        >
          Lawctopus Law School
        </a>{" "}
        has taught a wide range of practical skills to over 20,000+ law students, young lawyers, professionals, academicians, and business people. Over 1000 students have rated our courses and the average rating is 93.2/100. Our online courses are ‘warm’ learning experiences!
      </p>

    </section>
  );
}
