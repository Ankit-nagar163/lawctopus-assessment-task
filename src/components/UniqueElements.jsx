import React from 'react';
import {
  IconBookOpen, IconCalendarLive, IconMicrophoneOn, IconPenNib,
  IconPlayCircle, IconGlobe, IconHandshake, IconClipboardList, IconMessageCheck
} from './Icons';

const elements = [
  {
    num: '01',
    Icon: IconBookOpen,
    label: 'Reading Resources',
    text: 'Well-researched, practical & detailed reading resources — curated by practitioners, not textbooks.',
  },
  {
    num: '02',
    Icon: IconCalendarLive,
    label: 'Weekly Live Sessions',
    text: 'Weekly Live Sessions for the first 2 months — directly with course faculty, not pre-recorded.',
  },
  {
    num: '03',
    Icon: IconMicrophoneOn,
    label: 'Intensive Monthly Sessions',
    text: '7–8 Live Sessions per month for the remaining 4 months — covering specialised practice areas.',
  },
  {
    num: '04',
    Icon: IconPenNib,
    label: 'First-Hand Drafting',
    text: 'Learn drafting clauses and agreements directly with our Faculty — you draft, they correct.',
  },
  {
    num: '05',
    Icon: IconPlayCircle,
    label: 'Industry Expert Lectures',
    text: 'Recorded lectures by practising lawyers and Industry Experts — revisit anytime, for life.',
  },
  {
    num: '06',
    Icon: IconGlobe,
    label: 'International Contracts',
    text: 'Understanding International Contracts & Agreements — arbitration clauses, governing law, cross-border nuances.',
  },
  {
    num: '07',
    Icon: IconHandshake,
    label: 'Freelancing & Networking',
    text: 'Monthly Freelancing & Networking Sessions — learn to find clients, price your work, and grow your practice.',
  },
  {
    num: '08',
    Icon: IconClipboardList,
    label: '9 Real-World Assignments',
    text: 'Draft 9 real agreements: Sale Deed, NDA, Software Licensing, Return Policy, Trademark License, Franchisee Agreement, Power of Attorney, Shareholders Agreement, Joint Venture — and get them evaluated.',
  },
  {
    num: '09',
    Icon: IconMessageCheck,
    label: 'Personalised Feedback',
    text: 'Detailed, individualised feedback on every draft you submit — from real lawyers, not automated tools.',
  },
];

export default function UniqueElements() {
  return (
    <section id="unique-elements" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="flex items-start gap-4">
        <span className="section-num hidden sm:block select-none" aria-hidden="true">04</span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
            9 Unique Elements of the Online Course
          </h2>
          <span className="heading-underline"></span>
        </div>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {elements.map((item, i) => (
          <div
            key={item.num}
            className={`relative bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#b45309]/30 transition-all duration-200 flex gap-4 items-start group ${
              i === elements.length - 1 && elements.length % 2 !== 0 ? 'md:col-span-2' : ''
            }`}
          >
            {/* Icon box — modern SVG, amber tinted */}
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 text-[#b45309] group-hover:bg-amber-100 group-hover:text-[#991b1b] transition-all duration-200">
              <item.Icon className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black text-[#991b1b] bg-red-50 px-1.5 py-0.5 rounded-md tracking-wider">
                  {item.num}
                </span>
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest truncate">
                  {item.label}
                </span>
              </div>
              <p className="text-[#0f172a] text-sm font-semibold leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="flex items-start gap-3 bg-amber-50/60 border border-amber-100 p-5 rounded-2xl">
        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 text-[#b45309]">
          <IconClipboardList className="w-4 h-4" />
        </div>
        <p className="text-slate-700 text-sm leading-relaxed">
          You will draft <strong className="text-[#0f172a]">9 types of agreements</strong> as part of this course, each evaluated by the faculty with personalised written feedback.{' '}
          <a href="#structure-detailed" className="text-[#991b1b] hover:text-[#7f1d1d] font-bold underline underline-offset-2 transition-colors">
            See the detailed weekly structure →
          </a>
        </p>
      </div>
    </section>
  );
}
