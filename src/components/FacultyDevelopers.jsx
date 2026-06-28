import React from 'react';
import shashankImg from '../assets/faculty/Shashank-Sardesai1.webp';
import akankshaImg from '../assets/faculty/Akanksha-Mishra2.webp';
import pranjalImg from '../assets/faculty/Pranjal-Doshi3.webp';
import arunimaImg from '../assets/faculty/Arunima-Jha4.webp';
import jaibatrukaImg from '../assets/faculty/Jai5.webp';
import keshavaImg from '../assets/faculty/H.-B-Keshava6.webp';
import gouravImg from '../assets/faculty/Gourav7.webp';
import anupImg from '../assets/faculty/Anup-Menon-V8.webp';
import tanujImg from '../assets/faculty/Tanuj9.webp';
import bhumeshImg from '../assets/faculty/Bhumesh-Varma_10.webp';
import shayoneeImg from '../assets/faculty/Shayonee-Dasgupta_11.webp';
import debanshuImg from '../assets/faculty/Debanshu-Khettry-12.webp';

export default function FacultyDevelopers() {
  const faculty = [
    {
      name: "Shashank Sardesai",
      image: shashankImg,
      bio: [
        "Shashank Sardesai graduated from the University of Pune in 2018 and is currently working as an Independent Litigator and Company Secretary.",
        "He has co-founded EverTrust Legal, a full service law firm after having previously worked with esteemed law firms such as Wadia Ghandy & Co., HSA Advocates and Khaitan Legal Associates.",
        "He also holds a Diploma in International Business Laws from Symbiosis Law School, Pune (2014) and Diploma in Cyber Laws from GLC, Mumbai (2017).",
        "Throughout his career, he has worked on partnership deeds, leave and license agreements, lease deeds, service agreements, loan agreements, NDAs, mortgage deeds, deeds of guarantee, etc."
      ]
    },
    {
      name: "Akanksha Mishra",
      image: akankshaImg,
      bio: [
        <span>
          Akanksha is currently working as the <strong className="text-slate-900 font-extrabold">Head of Lawctopus Law School</strong>, where she has taught <a href="#" className="text-rose-700 font-bold hover:underline">contract drafting & negotiation course</a> to 1500+ learners and has received an average rating of 96.5/100.
        </span>,
        "Akanksha Mishra is an independent litigator with diverse experience in commercial and real estate litigation. She is practicing at the Bombay High Court, Nagpur Bench.",
        "Akanksha has also been the corporate counsel for many start-ups, media companies, software developer companies, and PSUs like BHEL, MyCaptain, Mastersoft ERP Solutions, etc., where she drafted and reviewed multiple contracts.",
        "Akanksha graduated from SLS, Pune, in 2018 and completed her LLM in Constitutional Law from Nagpur University in 2021, where she was awarded a gold medal."
      ]
    },
    {
      name: "Pranjal Doshi",
      image: pranjalImg,
      bio: [
        "Pranjal Doshi completed his law school education from HNLU (2018) and pursued postgraduate specialization in corporate law at the University of Cambridge (2019).",
        "He has worked with leading Indian law firms having the likes of Trilegal and Khaitan & Co. He is currently working as an Associate at Walker Morris LLP, United Kingdom.",
        "Pranjal specializes in mergers, acquisitions and private equity transactions and extensively works on investment documents (both buy side and sell side) such as the share purchase agreements, shareholders’ agreement and the like."
      ]
    },
    {
      name: "Arunima Jha",
      image: arunimaImg,
      bio: [
        "Arunima Jha has over ten years of experience in the legal field and is currently working as the Head Legal Counsel at Omnicom Media Group, a global leader in media, marketing, and corporate communications.",
        "Her adeptness in media law derives from her preceding roles as Legal Counsel at BookMyShow, and K Raheja Corp, a distinguished real estate developer.",
        "She holds an LLM in Business & Corporate Law from Mumbai University, and concurrently serves as a guest lecturer at various law institutes.",
        "Arunima is also adept in privacy law, where she offers expert guidance on complex privacy and data security regulations. Throughout her career, she’s been involved in privacy assessments, separation plans, exit strategies, and preparing for public offerings, all while managing investment portfolios."
      ]
    },
    {
      name: "Adv. Jaibatruka Mohanta",
      image: jaibatrukaImg,
      bio: [
        "Adv. Jaibatruka Mohanta is a practicing Advocate before the Courts at Karnataka and other Courts across India. He is working as a Research Associate at the Centre for Environmental Law, Education, Research and Advocacy (CEERA), NLSIU to delve into cutting-edge research, policy formulation, and capacity-building programmes for the government of India.",
        "Jaibatruka, along with his team, advises the Government of India on matters of Criminal Law reforms and is involved with various groups to strengthen the criminal procedure in India.",
        "He also engages in teaching Advanced Contracts and assists the Professor at NLSIU in conducting sessions on Public Policy, Procurement, and Tendering."
      ]
    },
    {
      name: "H. B Keshava",
      image: keshavaImg,
      bio: [
        "H. B Keshava graduated from UPES Dehradun and completed his BSc. in Cognitive Psychology from Annamalai University.",
        "He is currently working as the Managing Attorney of Baskaran and Associates, an IPR advisory and practice firm based in Pune.",
        "He has been a guest faculty at New Law College, Pune, and at Career Launcher, Chennai."
      ]
    },
    {
      name: "Mr. Gourav Mohanty",
      image: gouravImg,
      bio: [
        "Mr. Gourav Mohanty is an advocate primarily practicing in Bombay before the Hon’ble Bombay High Court as well as courts/tribunals in other parts of the country.",
        "Before being an independent practitioner, he worked as a Senior Associate in the Dispute Resolution Team of Shardul Amarchand Mangaldas & Co (SAM).",
        "A gold medalist, Gourav graduated from Symbiosis Law School, Pune, in 2016. While in college, he received the Ram Jethmalani Scholarship and the Chancellor’s Award.",
        "Gourav has also received 2nd Prize in Linklaters NSLR Contract Drafting Competition."
      ]
    },
    {
      name: "Anup Menon V",
      image: anupImg,
      bio: [
        "Anup Menon V is a rank holder from Karnataka State Law University and holds an LL.M. in Corporate Laws.",
        "He is currently working as a Senior Legal Counsel at C. Mohanram & Associates, a Kerala-based law firm focused on corporate and civil law.",
        "Anup has extensive experience advising clients in India and internationally, including in the USA.",
        "He specializes in serving clients in the Corporate, Banking, and Tech sectors, providing strategic legal counsel, drafting and reviewing a wide range of commercial contracts, managing corporate compliance, and offering guidance to startups."
      ]
    },
    {
      name: "Mr. Tanuj Kalia",
      image: tanujImg,
      bio: [
        "Mr. Tanuj Kalia, the founding CEO of Lawctopus, graduated from NUJS Kolkata in 2013 and completed his MA in Law Politics and Society from AUD in 2019.",
        <span>
          He’s the author of the book <a href="#" className="text-rose-700 font-bold hover:underline">‘Law as a Career’</a> (published by <strong className="text-slate-900 font-extrabold">LexisNexis</strong> in 2015) and has keynoted at various forums including <strong className="text-slate-900 font-extrabold">TEDx</strong>, leading private colleges, and NLUs.
        </span>,
        "He’s also the winner of Business World Legal 40 under 40 award. He’s currently training to be an ICF-certified coach.",
        "As an MSME business owner he has negotiated business deals ranging from a few lakhs to a few crores in INR."
      ]
    },
    {
      name: "Mr. Bhumesh Verma (Recorded Lectures)",
      image: bhumeshImg,
      bio: [
        "Bhumesh Verma is a seasoned legal practitioner with over 25 years of experience as a corporate lawyer.",
        "Mr. Verma has been a partner at Khaitan & Co., Paras Kuhad & Associates, and is currently the Managing Partner at Corp Comm Legal.",
        "He is the author of the book ‘Practical Guide to Drafting Commercial Contracts’ published by OakBridge."
      ]
    },
    {
      name: "Shayonee Dasgupta (Lead Researcher and Content Developer)",
      image: shayoneeImg,
      bio: [
        "Shayonee is a 2012 graduate from NUJS, Kolkata. She has worked as an Associate at Trilegal (2012-15), and then at Shardul Amarchand Mangaldas where she was a senior associate in 2017-18.",
        "Deeply passionate about legal education, Shayonee is currently a consultant at IDIA and is a freelance researcher-writer."
      ]
    },
    {
      name: "Debanshu Khettry (Development of Reading Modules)",
      image: debanshuImg,
      bio: [
        "Debanshu graduated from NUJS Kolkata in 2013 and did his LLM from University College London in 2014.",
        "He’s the founder of Standard Indian Legal Citation (SILC), an Angel Investor with the Mumbai Angels Network and Calcutta Angels Network, and a corporate lawyer par excellence.",
        "He worked with Platinum Partners, Delhi before taking the reigns of Leslie and Khettry, a renowned law firm established in 1944."
      ]
    }
  ];

  return (
    <section id="faculty-developers" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Course Developers and Faculty of this Course
        </h2>
        <span className="heading-underline"></span>
      </div>

      {/* Profiles grid list */}
      <div className="space-y-6">
        {faculty.map((member, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300"
          >
            {/* Left Photo Container (Subtle rose gradient border) */}
            <div className="relative p-1 bg-gradient-to-br from-rose-100 to-rose-200/80 rounded-3xl shadow-sm flex-shrink-0 hover:from-rose-200 hover:to-rose-300 transition-all duration-300">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-[22px] overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
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

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-[13px] sm:text-sm text-slate-600 leading-relaxed font-medium">
                {member.bio.map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))}
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
          Click here to register for this course.
        </a>
      </div>

    </section>
  );
}
