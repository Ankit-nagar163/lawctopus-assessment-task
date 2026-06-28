import React from 'react';
import { IconShieldCheck } from './Icons';

export default function MoneyBack() {
  return (
    <section id="money-back" className="scroll-mt-24">

      {/* Dark premium guarantee banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] text-white p-7 sm:p-10 shadow-lg">

        {/* Faint watermark background text */}
        <div
          className="absolute top-0 right-4 text-[7rem] sm:text-[9rem] font-black text-white/5 leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          100%
        </div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">

          {/* Icon — modern SVG, not emoji */}
          <div className="flex-shrink-0 flex flex-col items-center gap-1">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-400">
              <IconShieldCheck className="w-9 h-9" />
            </div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 mt-1 text-center">
              Risk-Free
            </p>
          </div>

          {/* Text block */}
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Money Back Guarantee
            </h2>
            <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
              We back our course with complete confidence. If you complete it{' '}
              <span className="text-white font-bold">"sincerely"</span> and still feel it didn't add real value to your career,{' '}
              <span className="text-amber-400 font-extrabold underline underline-offset-2">we refund 100% of your fee</span> — no questions, no conditions.
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              This offer reflects how much we believe in the quality of this course and our faculty.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
