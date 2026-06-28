import React from 'react';
import { IconTrendingUp, IconCurrencyRupee, IconUsers } from './Icons';

export default function Benefits() {
  const column1 = [
    { text: "Law students will be able to ace Law Firm internships and get freelance opportunities", bold: ["internships and get freelance opportunities"] },
    { text: "It will save 3-4 years of your legal career! What a lawyer learns after 3-4 years of practice, you'd have learned in 6 months.", bold: ["It will save 3-4 years of your legal career!"] },
    { text: "Draft CVs and cover letters that actually get shortlisted — tailored specifically for legal internships and jobs.", bold: ["Draft CVs and cover letters"] },
    { text: "Work with a dedicated career mentor to navigate freelancing — from your first client to your first invoice.", bold: ["dedicated career mentor"] },
    { text: "The live sessions will make you an expert of 24+ most in-demand agreements in India.", bold: ["24+ most in-demand agreements"] }
  ];

  const column2 = [
    { text: "Lawyers (with 0-4 years of experience) will be able to earn additional income through contract drafting skills", bold: ["contract drafting skills"] },
    { text: "Become familiar in using Upwork, Fiverr, and LinkedIn to find paid legal drafting work.", bold: ["Upwork, Fiverr, and LinkedIn"] },
    { text: "Learn about international agreements, including aspects such as arbitration rules and governing laws, thus enhancing the scope of your freelancing.", bold: ["international agreements"] },
    { text: "Draft terms and conditions for websites — one of the most requested and recurring freelance services in the digital economy.", bold: ["terms and conditions for websites"] },
    { text: "Set up and optimise your Upwork and Fiverr profiles with real guidance — not templates.", bold: ["Upwork and Fiverr profiles"] },
    { text: "Write proposals that win projects — structured, specific, and tailored to each client's brief.", bold: ["Write proposals that win projects"] }
  ];

  const column3 = [
    { text: "Learn to network better and generate income", bold: ["Learn to network better and generate income"] },
    { text: "Learn to negotiate well in your daily life, during apartment hunting, job interviews, salary negotiations, M&A transactions, negotiation competitions, and more etc.", bold: ["negotiate well"] },
    { text: "Build connections that open doors — peers, alumni, faculty, and working lawyers in your niche.", bold: ["Build connections that open doors"] },
    { text: "Negotiate salaries, freelance rates, and engagement terms with tactics that real lawyers use — not generic advice.", bold: ["real lawyers use"] }
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
      <div className="flex items-start gap-4">
        <span className="section-num hidden sm:block select-none" aria-hidden="true">05</span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
            How will this course help you?
          </h2>
          <span className="heading-underline"></span>
        </div>
      </div>

      {/* Styled Responsive 3-Column Benefits Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Column 1: Career Advancement */}
        <div className="space-y-5 bg-white border border-slate-200/50 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-[#991b1b]">
              <IconTrendingUp className="w-4 h-4" />
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
              <IconCurrencyRupee className="w-4 h-4" />
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
              <IconUsers className="w-4 h-4" />
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
