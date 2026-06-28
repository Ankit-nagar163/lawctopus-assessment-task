import React from 'react';
import saloniImg from '../assets/coordinators/1.webp';
import anupImg from '../assets/coordinators/2.webp';
import tanujImg from '../assets/coordinators/3.webp';

export default function CareerCellFaculty() {
  const team = [
    {
      name: "Saloni Sahu, Manager, Career Advancement Cell, Lawctopus Law School",
      image: saloniImg,
      education: "BBA LLB from Prestige Institute of Management and Research and LLM from Oriental University",
      workExperience: "Content Manager at Deadly Law, Community Manager at LedX, Corporate Relations and Academic Associate at Oriental University, Outreach and Recruitment Manager at Lawctopus Law School"
    },
    {
      name: "Anup Menon V, Top-Rated UpWork Freelancer",
      image: anupImg,
      education: "A rank holder from Karnataka State Law University and holds an LL.M. in Corporate Laws.",
      workExperience: "Senior Legal Counsel at C. Mohanram & Associates, a Kerala-based law firm focused on corporate and civil law, top-rated UpWork freelancer",
      specialisation: "Extensive experience advising clients in India and internationally, including in the USA."
    },
    {
      name: "Tanuj Kalia, Founding CEO of Lawctopus, Author ‘Law as a Career’ (LexisNexis)",
      image: tanujImg,
      education: "Law graduate from NUJS Kolkata (2013), MA in Law, Politics and Society from AUD Delhi (2019)",
      workExperience: "Founding CEO of Lawctopus.com, Ex VP Marketing, Vakilsearch, Author ‘Law as a Career’ (LexisNexis)"
    }
  ];

  return (
    <section id="career-cell-faculty" className="space-y-10 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Faculty and Coordinators
        </h2>
        <span className="heading-underline"></span>
      </div>

      {/* Modern Callout Header */}
      <div className="border-l-4 border-rose-800 bg-white border border-slate-200/50 border-l-0 p-5 rounded-r-2xl shadow-sm text-center sm:text-left">
        <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
          Meet Your Faculty and Coordinators for the Career Advancement Cell
        </h3>
      </div>

      {/* Team Profiles List */}
      <div className="space-y-6">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300"
          >
            {/* Left Photo Container (Subtle rose gradient border) */}
            <div className="relative p-1 bg-gradient-to-br from-rose-100 to-rose-200/80 rounded-3xl shadow-sm flex-shrink-0 hover:from-rose-200 hover:to-rose-300 transition-all duration-300">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-[22px] overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name.split(',')[0]}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <svg class="w-12 h-12 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    `;
                  }}
                />
              </div>
            </div>

            {/* Right Profile Text Container */}
            <div className="flex-1 space-y-4 text-center md:text-left w-full">
              {/* Name */}
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug pb-2 border-b border-slate-100">
                {member.name}
              </h4>

              {/* Bio Details */}
              <div className="space-y-3 text-[13px] sm:text-sm text-slate-700 leading-relaxed">

                {/* Education */}
                <p>
                  <strong className="text-slate-900 font-extrabold">Education:</strong> {member.education}
                </p>

                {/* Work Experience */}
                <p>
                  <strong className="text-slate-900 font-extrabold">Work Experience:</strong> {member.workExperience}
                </p>

                {/* Specialisation (If present) */}
                {member.specialisation && (
                  <p>
                     <strong className="text-slate-900 font-extrabold">Specialisation:</strong> {member.specialisation}
                  </p>
                )}

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom CTA Banner (Red/Rose Bar) */}
      <div className="pt-4 text-center">
        <a
          href="#enroll"
          className="inline-block w-full bg-gradient-to-r from-red-800 to-rose-900 hover:from-red-900 hover:to-rose-950 text-white font-bold text-xs sm:text-sm py-4 px-6 rounded-xl transition-all duration-150 active:scale-98 shadow-md shadow-red-800/10 uppercase tracking-wider text-center"
        >
          Click here to register for the 6-Month Long Course Here.
        </a>
      </div>

    </section>
  );
}
