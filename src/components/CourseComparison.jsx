import React from 'react';

export default function CourseComparison() {
  const rows = [
    {
      key: "GOAL",
      a: "Begin to master contract drafting",
      b: "Become an expert in contract drafting + start earning money"
    },
    {
      key: "TYPE",
      a: "LIVE",
      b: "LIVE"
    },
    {
      key: "TOTAL NUMBER OF LIVE CLASSES",
      a: "8",
      b: "55"
    },
    {
      key: "PRICE",
      a: "Rs. 7999",
      b: "Rs. 60,000 – Rs. 24,999/-"
    },
    {
      key: "LINK",
      a: "www.lawctopuslawschool.com",
      b: "www.lawctopuslawschool.com"
    },
    {
      key: "DURATION",
      a: "2 Months",
      b: "6 Months"
    },
    {
      key: "LIVE LECTURES",
      a: "Weekly live lectures",
      b: "Weekly live lectures for first 2 months and 7-8 live sessions per month for the next 4 months"
    },
    {
      key: "ELIGIBILITY",
      a: "Those want to learn the fundamentals of contract drafting and the basics of negotiation",
      b: "Those who want to learn everything from scratch and gradually become an expert-level contract draftsman"
    },
    {
      key: "IDEAL CANDIDATES",
      a: "Young law students, experienced lawyers, business professionals, CAs",
      b: "Young law students, experienced and in-experienced lawyers, business professionals, negotiators, CAs"
    },
    {
      key: "TIME COMMITMENT REQUIRED",
      a: "4-5 hours/week for professionals; 5-6 hours/week of law students",
      b: "5-6 hours/week for professionals; 6-7 hours/week of law students"
    },
    {
      key: "COMPULSORY ASSIGNMENTS + PERSONAL FEEDBACK",
      a: "2 assignments",
      b: "17 assignments (10 contract drafting assignments and 7 assignments related to freelance, CV building, etc.)"
    },
    {
      key: "NO. OF PAGES IN READING MODULES",
      a: "202 pages of practical reading modules",
      b: "800 pages (202 pages in Course A + 485 pages in Course B + 113 pages of Advanced Negotiation Module)"
    },
    {
      key: "DURATION OF RECORD LECTURES",
      a: "8 hours 38 minutes",
      b: "32 hours 3 minutes"
    },
    {
      key: "DURATION OF LIVE LECTURES",
      a: "13 hours",
      b: "85 hours"
    },
    {
      key: "NEGOTIATION MODULE",
      a: "Fundamentals",
      b: "Expert-level"
    },
    {
      key: "CAREER SESSIONS TO BECOME A FREELANCER",
      a: "NO",
      b: "YES"
    },
    {
      key: "NETWORKING SESSIONS",
      a: "NO",
      b: "YES"
    },
    {
      key: "MONEY-BACK GUARANTEE",
      a: "YES",
      b: "YES"
    },
    {
      key: "ONLINE DISCUSSION FORUM",
      a: "YES",
      b: "YES"
    },
    {
      key: "LEARNING MANAGER SUPPORT",
      a: "YES",
      b: "YES"
    },
    {
      key: "WHATSAPP AND EMAIL REMINDERS",
      a: "YES",
      b: "YES"
    },
    {
      key: "LLS ALUMNI STATUS",
      a: "YES",
      b: "YES"
    }
  ];

  return (
    <section id="comparison" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Comparison of the 2 Courses
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      {/* Modern Responsive Table Container */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm max-w-full">
        <div className="overflow-x-auto w-full max-w-full block">
          <table className="w-full text-left border-collapse min-w-[700px]">
            
            {/* Headers */}
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 sm:p-5 text-sm font-extrabold text-slate-400 w-1/4">
                  FEATURES
                </th>
                
                {/* Course A Header */}
                <th className="p-4 sm:p-5 text-sm font-extrabold text-slate-800 w-3/8 border-l border-slate-200">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase bg-slate-200 px-2 py-0.5 rounded text-slate-600 block w-max">
                      Option A
                    </span>
                    <span className="text-base font-extrabold block">Course A</span>
                    <span className="text-xs font-normal text-slate-500 block leading-snug">
                      2-Month Long Online Certificate Course on Contract Drafting and Negotiation
                    </span>
                  </div>
                </th>

                {/* Course B Header (Flagship highlighted) */}
                <th className="p-4 sm:p-5 text-sm font-extrabold text-rose-950 w-3/8 bg-rose-50/30 border-l border-slate-200">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase bg-rose-700 text-white px-2 py-0.5 rounded block w-max tracking-wider">
                      Option B (Recommended)
                    </span>
                    <span className="text-base font-extrabold block">Course B</span>
                    <span className="text-xs font-normal text-rose-950 block leading-snug">
                      6-Month Long Expert-Level Online Certificate Course on Mastering Contract Drafting and Freelancing
                    </span>
                    <div className="bg-rose-50 text-rose-800 border border-rose-100/60 text-[11px] font-semibold p-2 rounded-xl leading-relaxed mt-2">
                      (Course A + 22 live sessions on specific agreements, 4 freelancing sessions, 2 negotiation sessions, and 4 networking sessions)
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Body Rows */}
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {rows.map((row, idx) => {
                const isYesNo = row.a === "YES" || row.a === "NO";
                
                return (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    
                    {/* Key */}
                    <td className="p-4 sm:p-5 font-bold text-slate-800 uppercase tracking-tight text-xs bg-slate-50/30">
                      {row.key}
                    </td>

                    {/* Course A Value */}
                    <td className="p-4 sm:p-5 text-slate-600 border-l border-slate-100">
                      {isYesNo ? (
                        row.a === "YES" ? (
                          <span className="inline-flex items-center gap-1.5 text-emerald-700 font-extrabold">
                            <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-xs">✓</span> YES
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-slate-400 font-medium">
                            <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-xs">✗</span> NO
                          </span>
                        )
                      ) : row.key === "LINK" ? (
                        <a href={`https://${row.a}`} target="_blank" rel="noreferrer" className="text-rose-700 hover:text-rose-900 font-medium underline">
                          {row.a}
                        </a>
                      ) : row.key === "PRICE" ? (
                        <span className="font-extrabold text-slate-900">{row.a}</span>
                      ) : (
                        row.a
                      )}
                    </td>

                    {/* Course B Value (Highlight background slightly) */}
                    <td className="p-4 sm:p-5 text-slate-700 border-l border-slate-100 bg-rose-50/10">
                      {isYesNo ? (
                        row.b === "YES" ? (
                          <span className="inline-flex items-center gap-1.5 text-emerald-700 font-extrabold">
                            <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-xs">✓</span> YES
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-slate-400 font-medium">
                            <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-xs">✗</span> NO
                          </span>
                        )
                      ) : row.key === "LINK" ? (
                        <a href={`https://${row.b}`} target="_blank" rel="noreferrer" className="text-rose-700 hover:text-rose-900 font-extrabold underline">
                          {row.b}
                        </a>
                      ) : row.key === "PRICE" ? (
                        <span className="font-extrabold text-slate-900">
                          Rs. 60,000 – <span className="text-rose-800">Rs. 24,999/-</span>
                        </span>
                      ) : (
                        row.b
                      )}
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>
      </div>

      {/* Crimson high-contrast registration action bar */}
      <div className="pt-4 text-center">
        <a
          href="#enroll"
          className="inline-flex w-full sm:w-auto max-w-full items-center justify-center gap-2.5 bg-red-800 hover:bg-red-900 text-white text-xs sm:text-sm font-extrabold py-4 px-6 rounded-xl transition-all duration-150 active:scale-98 shadow-md shadow-red-800/10 uppercase tracking-wider text-center"
        >
          <span>Register for 6-Month Course</span>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

    </section>
  );
}
