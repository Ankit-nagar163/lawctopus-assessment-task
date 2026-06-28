import React from 'react';

export default function Benefits() {
  const column1 = [
    { text: "Law students will be able to ace Law Firm internships and get freelance opportunities", bold: ["internships and get freelance opportunities"] },
    { text: "It will save 3-4 years of your legal career! What a lawyer learns after 3-4 years of practice, you’d have learned in 6 months.", bold: ["It will save 3-4 years of your legal career!"] },
    { text: "Create standout CVs and cover letters for internships and jobs.", bold: ["Create standout CVs"] },
    { text: "Get expert mentorship to navigate freelancing with confidence.", bold: ["Get expert mentorship"] },
    { text: "The live sessions will make you an expert of 24+ most in-demand agreements in India.", bold: ["24+ most in-demand agreements"] }
  ];

  const column2 = [
    { text: "Lawyers (with 0-4 years of experience) will be able to earn additional income through contract drafting skills", bold: ["contract drafting skills"] },
    { text: "Become familiar in using freelancing platforms", bold: [] },
    { text: "Learn about international agreements, including aspects such as arbitration rules and governing laws, thus enhancing the scope of your freelancing.", bold: ["international agreements"] },
    { text: "Learn the nuances of drafting terms and conditions for websites and offer your services to the increasingly digital and always online world", bold: ["nuances of drafting terms and conditions for websites"] },
    { text: "Build strong profiles on platforms like Upwork, Fiverr, and LinkedIn.", bold: ["Build strong profiles"] },
    { text: "Learn to write winning proposals that help you land projects.", bold: ["write winning proposals"] }
  ];

  const column3 = [
    { text: "Learn to network better and generate income", bold: ["Learn to network better and generate income"] },
    { text: "Learn to negotiate well in your daily life, during apartment hunting, job interviews, salary negotiations, M&A transactions, negotiation competitions, and more etc.", bold: ["negotiate well"] },
    { text: "Master networking to build valuable professional connections.", bold: ["Master networking"] },
    { text: "Learn practical negotiation skills for salaries and career growth.", bold: ["Learn practical negotiation"] }
  ];

  // Helper to format text with bold parts
  const formatText = (text, boldPhrases) => {
    if (!boldPhrases || boldPhrases.length === 0) return text;
    let formatted = text;
    // We assume simple match for bold phrases
    boldPhrases.forEach((phrase) => {
      formatted = formatted.replace(phrase, `**${phrase}**`);
    });
    
    // Split by markdown bold format and render
    const parts = formatted.split('**');
    return parts.map((part, index) => 
      index % 2 === 1 ? <strong key={index} className="text-slate-900 font-bold">{part}</strong> : part
    );
  };

  return (
    <section id="benefits" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          How will this course help you?
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      {/* Styled Responsive 3-Column Benefits Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Column 1: Career Advancement */}
        <div className="space-y-5 bg-white border border-slate-200/50 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-700">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.263 15.541A1.75 1.75 0 007 16.5h10a1.75 1.75 0 002.737-1.458L20 8.5H4l.263 7.041zM4 8.5V7a2 2 0 012-2h12a2 2 0 012 2v1.5M9 5v3.5m6-3.5v3.5" />
              </svg>
            </div>
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-800">
              Career Advancement
            </h3>
          </div>
          <ul className="space-y-4">
            {column1.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-[13px] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-800 mt-2 flex-shrink-0"></span>
                <span>{formatText(item.text, item.bold)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Freelancing & Global Income */}
        <div className="space-y-5 bg-white border border-slate-200/50 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-800">
              Freelance & Income
            </h3>
          </div>
          <ul className="space-y-4">
            {column2.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-[13px] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
                <span>{formatText(item.text, item.bold)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Networking & Negotiation */}
        <div className="space-y-5 bg-white border border-slate-200/50 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-700">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-800">
              Negotiation & Network
            </h3>
          </div>
          <ul className="space-y-4">
            {column3.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-[13px] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                <span>{formatText(item.text, item.bold)}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
