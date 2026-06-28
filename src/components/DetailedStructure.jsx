import React, { useState } from 'react';

export default function DetailedStructure() {
  const [openMonth, setOpenMonth] = useState(1);

  const months = [
    {
      id: 1,
      title: "Month 1: Draft of Essential Clauses of a Contract",
      header: "Month 1: Drafting of Essential Clauses of a Contract",
      hasContent: true,
      recordedLecturesCount: "25 in number",
      recordedLectures: [
        "What is a contract; difference between a contract and an agreement; importance of a written contract",
        "Essential features of a well-drafted contract; components of a Contract; consideration clause of a contract; damages for default",
        "Pre-contractual instruments",
        "Primary focus of a draftsperson; disadvantages of using a standard template",
        "Effective date of a contract",
        "Definition clause; Identification of parties clause; Recitals clause",
        "Territory of operation",
        "Representation and warranties clause; Non-compete and non-solicitation clause; Termination clause; Force Majeure clause; Confidentiality clause",
        "Governing law and Jurisdiction clause",
        "Intellectual Property clause; Dispute Resolution clause Assignment of obligations; Conditions Precedent clause"
      ],
      liveSessionsCount: "4 in number",
      liveSessions: [
        "Skeleton of a contract and pre-contractual instruments",
        "Substance and style of a contract",
        "How to draft introductory clauses like ‘Description of parties’, ‘Recitals’, ‘Interpretations’, ‘Definitions’, etc.",
        "How to draft operative clauses like Indemnity, Confidentiality, Conditions Precedent and Conditions Subsequent, Intellectual Property, Termination, etc.",
        "How to draft boilerplate clauses like Force Majeure, Severability, Waiver, etc.",
        "Networking Skills 1"
      ],
      readingResources: [
        "Purpose and Theories of Contract Law",
        "Elements of a Contract",
        "Pre-contractual Instruments: the step before a formal contract",
        "Drafting of Agreements: Preliminary Terms",
        "Drafting of Agreements: Operative Clauses",
        "Drafting of Agreements: Boilerplate Clauses"
      ]
    },
    {
      id: 2,
      title: "Month 2: Execution Formalities and Negotiation Skills",
      header: "Month 2: Execution Formalities and Basic Negotiation Skills",
      hasContent: true,
      recordedLecturesCount: "18 in number",
      recordedLectures: [
        "Allocation of costs pertaining to a contract",
        "Role of witnesses in a contract",
        "How to draft an Employment Agreement, a Software Licensing Agreement, and an NDA",
        "Introduction to Negotiation; Core Concepts of Negotiation; Importance of Negotiation; Key features of a good Negotiation",
        "Negotiation Terms",
        "Types of Negotiations; Techniques of Negotiations; The Negotiation Mindset; Role of a Negotiator",
        "Essential skills of a good Negotiator",
        "Steps involved in Negotiation – Pre-Negotiation; Steps involved in Negotiation – Post-Negotiation",
        "Results of Negotiation",
        "Special videos on ‘Anatomy of Contracts’"
      ],
      liveSessionsCount: "4 in number",
      liveSessions: [
        "Execution Formalities – Stamp Duty, Registration Charges, Witnesses, Signatures, etc.",
        "Contract Lab",
        "Negotiation Table Exercise",
        "Oral Assignment Feedback Session"
      ],
      readingResources: [
        "Execution Formalities & Processes",
        "Introduction to Negotiation",
        "Key Commercial Contracts"
      ]
    },
    {
      id: 3,
      title: "Month 3: Drafting International Agreements, Common Agreements, and Advanced Negotiation Skills",
      header: "Month 3: Drafting International Agreements, Common Agreements, and Advanced Negotiation Skills",
      hasContent: true,
      recordedLecturesCount: "15 in number",
      recordedLectures: [
        "Introduction to international commercial contracts (Part I)",
        "Introduction to international commercial contracts (Part II)",
        "Governing Law, Jurisdiction and Dispute Resolution Clauses in an International Contract",
        "How to draft international agreements",
        "Introduction to Loan Agreement",
        "How to draft a Loan Agreement",
        "An alternate method of drafting a Loan Agreement",
        "How to draft an Employment Agreement",
        "Introduction + How to draft a Non-Disclosure Agreement",
        "Essentials of an effective negotiation",
        "Mindset of an effective negotiator",
        "How to negotiate commercial contracts",
        "Mock negotiation of a Service Level Agreement between Company and Service-Provider",
        "Add on recordings of webinars"
      ],
      liveSessionsCount: "8 in number",
      liveSessions: [
        "International contracts and e-contracts",
        "How to draft an Employment Agreement",
        "How to draft a Non-Disclosure Agreement",
        "How to draft a Software Licensing Agreement",
        "2 Sessions on Negotiation Skills by Tanuj Kalia",
        "Networking Skills 2",
        "Freelancing Session 1"
      ],
      readingResources: [
        "All about International Commercial Contracts",
        "Draft of Employment Agreement",
        "Draft of Non-Disclosure Agreement",
        "Draft of Software Licensing Agreement",
        "Introduction to Negotiation",
        "Essentials of an effective negotiation",
        "Mindset, Techniques and Skills required to be an Effective Negotiator",
        "Negotiation of commercial contracts"
      ]
    },
    {
      id: 4,
      title: "Month 4: Drafting Intellectual Property, Technology Agreements, and Website Terms",
      header: "Month 4: Intellectual Property, Technology Agreements, and Website Terms",
      hasContent: true,
      recordedLecturesCount: "13 in number",
      recordedLectures: [
        "Introduction to Trademark Licensing and Trademark Assignment Agreement",
        "How to draft a Trademark Licensing Agreement",
        "How to draft a Trademark Assignment Agreement",
        "Introduction to Patent Licensing Agreement",
        "How to draft a Patent Licensing Agreement",
        "Introduction to Copyright Licensing Agreement",
        "How to draft a Copyright Licensing Agreement",
        "How to draft a Joint Venture Intellectual Property Agreement",
        "Introduction + How to draft Terms and Conditions of an e-commerce website",
        "How to draft Terms of Use of an e-commerce website",
        "How to draft Terms of Use of a subscription-based product website",
        "How to draft Return and Refund Policy of an e-commerce website",
        "How to draft Privacy Policy of an e-commerce website"
      ],
      liveSessionsCount: "8 in number",
      liveSessions: [
        "International contracts and e-contracts",
        "How to draft a Copyright Licensing Agreement and a Patent Licensing Agreement",
        "How to draft a Trademark Licensing Agreement and a Trademark Assignment Agreement",
        "How to draft a SAAS Agreement",
        "How to draft the Terms and Conditions of a Website (2 types) and Terms of Use of a Website (2 types)",
        "How to draft the Return and Refund Policy of a website and the Privacy Policy of a website",
        "Networking Skills 3",
        "Freelancing Session 2"
      ],
      readingResources: [
        "Draft of a Trademark Licensing Agreement",
        "Draft of a Trademark Assignment Agreement",
        "Draft of a Patent Licensing Agreement",
        "Draft of a Patent Licensing Agreement",
        "Draft of a Copyright Licensing Agreement",
        "Draft of a Copyright Licensing Agreement",
        "Draft of a Joint Venture Intellectual Property Agreement",
        "Draft of Terms and Conditions of an e-commerce website",
        "Draft of Terms of Use of an e-commerce website",
        "Draft of Terms of Use of a subscription-based product website",
        "Draft of Return and Refund Policy of an e-commerce website",
        "Draft of Privacy Policy of an e-commerce website"
      ]
    },
    {
      id: 5,
      title: "Month 5: Drafting Real Estate Agreements",
      header: "Month 5: Real Estate Agreements",
      hasContent: true,
      recordedLecturesCount: "4 in number",
      recordedLectures: [
        "Introduction to Sale Deed",
        "How to draft a Sale Deed",
        "Introduction to Leave and License Agreement",
        "How to draft a Leave and License Agreement"
      ],
      liveSessionsCount: "6 in number",
      liveSessions: [
        "How to draft a Sale Deed",
        "How to draft a Power of Attorney",
        "How to draft a Franchisee Agreement",
        "How to draft a Leave and License Agreement",
        "Networking Skills 4",
        "Freelancing Session 3"
      ],
      readingResources: [
        "Draft of a Sale Deed",
        "Draft of a Leave and License Agreement",
        "Draft of a Power of Attorney",
        "Draft of a Franchisee Agreement"
      ]
    },
    {
      id: 6,
      title: "Month 6: Drafting Business and Commercial Agreements",
      header: "Month 6: Drafting Business and Commercial Agreements",
      hasContent: true,
      recordedLecturesCount: "8 in number",
      recordedLectures: [
        "Introduction to Sports Sponsorship Agreement",
        "How to draft a Sports Sponsorship Agreement",
        "Introduction to Shareholders Agreement",
        "How to draft a Shareholders Agreement",
        "Introduction to Share Purchase and Share Subscription Agreement",
        "How to draft a Share Purchase and Share Subscription Agreement",
        "Introduction to Partnership Agreement",
        "How to draft a Partnership Agreement"
      ],
      liveSessionsCount: "6 in number",
      liveSessions: [
        "How to draft a Shareholders Agreement",
        "How to draft a Share Purchase and Share Subscription Agreement",
        "How to draft a Partnership Agreement",
        "How to draft a Joint Venture Agreement"
      ],
      readingResources: [
        "Draft of Sports Sponsorship Agreement",
        "Draft of Shareholders Agreement",
        "Draft of Share Purchase and Share Subscription Agreement",
        "Draft of Partnership Agreement",
        "Draft of Joint Venture Agreement",
        "Draft of Business Transfer Agreement"
      ]
    },
    {
      id: 7, // Custom Special Accordion Item
      isSpecial: true,
      title: "Freelancing Modules: CV, Upwork, Fiverr, Networking & Negotiation",
      header: "Freelancing Modules: CV Drafting, Cover Letters, LinkedIn, Upwork, Fiverr, Networking & Negotiation",
      hasContent: true,
      bullets: [
        "Drafting CVs that get noticed by legal recruiters",
        "Drafting Cover Letters in a way that helps you secure internships and jobs",
        "Learn to build an excellent LinkedIn Profile and get live feedback from experts",
        "Learn how to use UpWork and start applying for opportunities",
        "Learn how to use Fiverr and start applying for opportunities",
        "Freelancing in legal research, drafting, and writing projects",
        "Learn the finer nuances of networking effectively with your cohort",
        "Learn the negotiation skills that will help you in salary negotiations, negotiations with your freelancing clients, contract negotiations, sales, and even in M&A Deals that you help your clients",
        "Freelancing in contract drafting and review"
      ]
    }
  ];

  const handleToggle = (id) => {
    setOpenMonth(openMonth === id ? null : id);
  };

  return (
    <section id="structure-detailed" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Structure of this Course
        </h2>
        <div className="h-1 w-20 bg-rose-700 rounded-full"></div>
      </div>

      {/* Month Overview Summary List */}
      <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-3">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Month-wise Course Map</span>
        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-slate-800 font-semibold">
          {months.slice(0, 6).map((m) => (
            <li key={m.id}>{m.title.replace(`Month ${m.id}: `, "")}</li>
          ))}
          <li className="list-none -ml-5 text-rose-800 font-extrabold mt-2 pt-2 border-t border-slate-200/60">
            ★ Special Bonus: Freelancing Modules Included!
          </li>
        </ol>
      </div>

      {/* Interactive Accordion Syllabus */}
      <div className="space-y-4">
        {months.map((m) => {
          const isOpen = openMonth === m.id;
          
          return (
            <div 
              key={m.id}
              className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-200 ${
                isOpen ? 'border-slate-300' : 'border-slate-200/60 hover:border-slate-300'
              }`}
            >
              {/* Accordion Trigger Header */}
              <button
                onClick={() => handleToggle(m.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-slate-900 hover:bg-slate-50/55 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg text-xs font-extrabold flex items-center justify-center flex-shrink-0 ${
                    isOpen 
                      ? 'bg-rose-800 text-white' 
                      : m.isSpecial 
                        ? 'bg-amber-100 text-amber-800 font-black' 
                        : 'bg-slate-100 text-slate-600'
                  }`}>
                    {m.isSpecial ? "★" : `M${m.id}`}
                  </span>
                  <span>{m.title}</span>
                </div>
                
                <div className="flex items-center gap-3 flex-shrink-0">
                  {m.isSpecial && (
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Bonus Module
                    </span>
                  )}
                  <svg 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-rose-800' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Accordion Content Panels */}
              {isOpen && (
                <div className="border-t border-slate-100 p-6 space-y-8 bg-slate-50/30">
                  {m.isSpecial ? (
                    <div className="space-y-4">
                      <h4 className="text-sm font-extrabold text-slate-800 bg-slate-200/80 px-4 py-2.5 rounded-xl uppercase tracking-wider">
                        Module Outline
                      </h4>
                      <ul className="space-y-3 pl-4">
                        {m.bullets.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-[13px] sm:text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <>
                      {/* Recorded Lectures Block */}
                      {m.recordedLectures && m.recordedLectures.length > 0 && (
                        <div className="space-y-4">
                          <h4 className="text-sm font-extrabold text-slate-800 bg-slate-200/80 px-4 py-2.5 rounded-xl uppercase tracking-wider">
                            Recorded Lectures ({m.recordedLecturesCount})
                          </h4>
                          <ul className="space-y-3 pl-4">
                            {m.recordedLectures.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-[13px] sm:text-sm leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-700 mt-2 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Live Sessions Block */}
                      {m.liveSessions && m.liveSessions.length > 0 && (
                        <div className="space-y-4">
                          <h4 className="text-sm font-extrabold text-slate-800 bg-slate-200/80 px-4 py-2.5 rounded-xl uppercase tracking-wider">
                            Live Sessions ({m.liveSessionsCount})
                          </h4>
                          <ul className="space-y-3 pl-4">
                            {m.liveSessions.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-[13px] sm:text-sm leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Reading Resources Block */}
                      {m.readingResources && m.readingResources.length > 0 && (
                        <div className="space-y-4">
                          <h4 className="text-sm font-extrabold text-slate-800 bg-slate-200/80 px-4 py-2.5 rounded-xl uppercase tracking-wider">
                            Reading Resources
                          </h4>
                          <ul className="space-y-3 pl-4">
                            {m.readingResources.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-[13px] sm:text-sm leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
