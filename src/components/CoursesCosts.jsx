import React from 'react';

export default function CoursesCosts() {
  return (
    <section id="courses-costs" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Courses and Costs
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
        Lawctopus Law School currently offers 2 courses in the field of Contract Drafting and Negotiation.
      </p>

      {/* Modern Split Cards for Course Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        
        {/* Card 1: 6-Month Course (Flagship) */}
        <div className="relative bg-white border-2 border-rose-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group">
          {/* Accent Ribbon/Badge */}
          <div className="absolute top-0 right-0 bg-rose-800 text-white text-[10px] font-extrabold tracking-widest uppercase py-1 px-4 rounded-bl-xl">
            Flagship Program
          </div>
          
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                6-Month Expert Live Course
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-3 leading-snug">
                Mastering Contract Drafting and Freelancing
              </h3>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed">
              Complete end-to-end package to master advanced contract drafting and build a profitable freelance portfolio on Upwork & Fiverr.
            </p>

            {/* Divider */}
            <hr className="border-slate-100" />
            
            {/* Price display */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Special Launch Price</span>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-slate-900">Rs. 24,999/-</span>
                <span className="text-base text-slate-400 line-through font-medium">Rs. 60,000</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#enroll"
              className="block w-full text-center bg-rose-800 hover:bg-rose-900 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all duration-150 active:scale-95 shadow-sm shadow-rose-900/10"
            >
              Enroll in 6-Month Course
            </a>
          </div>
        </div>

        {/* Card 2: 2-Month Course */}
        <div className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                2-Month Foundation Certificate
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-3 leading-snug">
                Contract Drafting and Negotiation
              </h3>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed">
              Learn the essential building blocks, drafting fundamentals, boilerplate clauses, and base negotiation skills.
            </p>

            {/* Divider */}
            <hr className="border-slate-100" />

            {/* Price display */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Standard Price</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900">Rs. 7,999</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#enroll"
              className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all duration-150 active:scale-95 shadow-sm"
            >
              Enroll in 2-Month Course
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
