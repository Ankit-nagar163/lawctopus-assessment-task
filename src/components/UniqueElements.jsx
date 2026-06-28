import React from 'react';

export default function UniqueElements() {
  const elements = [
    { ordinal: "First", text: "Well-researched, practical & detailed reading resources", num: "01" },
    { ordinal: "Second", text: "Weekly Live Sessions for the first 2 months", num: "02" },
    { ordinal: "Third", text: "7-8 Live Sessions per month for the next 4 months", num: "03" },
    { ordinal: "Fourth", text: "Learn drafting clauses and agreements first-hand with our Faculty", num: "04" },
    { ordinal: "Fifth", text: "Recorded lectures by Industry Experts", num: "05" },
    { ordinal: "Sixth", text: "Understanding International Contracts & Agreements", num: "06" },
    { ordinal: "Seventh", text: "Monthly Freelancing & Networking Sessions", num: "07" },
    {
      ordinal: "Eighth",
      text: "Practical Assignments on real-life scenarios (Draft and Get Feedback on 9 Types Agreements: Sale Deed, Software Licensing Agreement, Non-Disclosure Agreement, Return & Refund Policy, Trademark Licensing Agreement, Franchisee Agreement, Power of Attorney, Shareholders Agreement, Joint Venture Agreement)",
      num: "08"
    },
    { ordinal: "Ninth", text: "Get detailed and individualized feedback on each of your drafts", num: "09" }
  ];

  return (
    <section id="unique-elements" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          9 Unique Elements of the Online Course
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      {/* List Layout - Modern Timeline/Grid hybrid */}
      <div className="space-y-4">
        {elements.map((item) => (
          <div 
            key={item.num}
            className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-150 flex flex-col sm:flex-row items-start sm:items-center gap-4 group"
          >
            {/* Number Indicator badge */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <span className="text-2xl font-extrabold text-rose-800 bg-rose-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-rose-100 group-hover:text-rose-900 transition-colors">
                {item.num}
              </span>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block sm:hidden">
                {item.ordinal}
              </span>
            </div>

            {/* Content Details */}
            <div className="flex-1 space-y-1">
              <span className="hidden sm:inline-block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                {item.ordinal} Element
              </span>
              <p className="text-slate-800 text-[15px] font-semibold leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer Paragraph */}
      <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
        <p className="text-slate-700 text-sm leading-relaxed">
          You will draft <strong className="text-slate-950 font-bold">9 types of agreements</strong> as part of this course, with each assignment thoroughly evaluated by the faculty. Personalized feedback will be provided to every learner. Details in the Weekly structure.{" "}
          <a href="#structure-detailed" className="text-rose-700 hover:text-rose-900 font-bold underline transition-colors">
            Click here
          </a>.
        </p>
      </div>
    </section>
  );
}
