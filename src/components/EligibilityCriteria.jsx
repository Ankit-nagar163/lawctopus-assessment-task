import React from 'react';

export default function EligibilityCriteria() {
  return (
    <section id="eligibility-criteria" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Eligibility Criteria
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      {/* Intro text */}
      <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
        To qualify for the money-back guarantee, you must <strong className="text-slate-950 font-bold">“sincerely”</strong> complete the course, which means:
      </p>

      {/* Course Completion Card Block */}
      <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        
        <h3 className="text-lg font-extrabold text-slate-900 pb-3 border-b border-slate-100">
          Course Completion Requirements
        </h3>

        <div className="space-y-6">
          
          {/* Requirement 1 */}
          <div className="flex gap-4 items-start">
            <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 font-extrabold text-sm flex items-center justify-center flex-shrink-0">
              1
            </span>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed pt-0.5">
              Attend at least <strong className="text-slate-950 font-bold">66% of the live classes</strong> (with your video turned ON).
            </p>
          </div>

          {/* Requirement 2 */}
          <div className="flex gap-4 items-start">
            <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 font-extrabold text-sm flex items-center justify-center flex-shrink-0">
              2
            </span>
            <div className="space-y-3 flex-1 pt-0.5">
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                Submit <strong className="text-slate-950 font-bold">all assignments</strong> and receive a passing grade in each.
              </p>
              
              {/* Nested info block */}
              <div className="bg-slate-50 border-l-4 border-amber-500 p-3.5 rounded-r-xl text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you don’t pass on the first attempt, <strong className="text-slate-950 font-bold">one additional attempt</strong> will be provided per assignment.
              </div>
            </div>
          </div>

          {/* Requirement 3 */}
          <div className="flex gap-4 items-start">
            <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 font-extrabold text-sm flex items-center justify-center flex-shrink-0">
              3
            </span>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed pt-0.5">
              Email us at <a href="mailto:support@lawctopus.com" className="text-rose-800 font-extrabold hover:underline">support@lawctopus.com</a> within 10 days after completion of your batch’s closing session with the subject line ‘Request for Refund’.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
