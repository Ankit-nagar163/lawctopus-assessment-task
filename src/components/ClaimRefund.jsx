import React from 'react';

export default function ClaimRefund() {
  const steps = [
    {
      step: "01",
      title: "Send Refund Request Email",
      text: "Send an email to support@lawctopus.com within 10 days after the course ends.",
      highlight: "support@lawctopus.com"
    },
    {
      step: "02",
      title: "Application Review",
      text: "We’ll review your request and reply within 5 days.",
      highlight: "within 5 days"
    },
    {
      step: "03",
      title: "Processing Payment",
      text: "If eligible, your refund will be processed within 10 working days.",
      highlight: "within 10 working days"
    }
  ];

  return (
    <section id="claim-refund" className="space-y-8 scroll-mt-24">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          How to Claim Your Refund
        </h2>
        <span className="heading-underline"></span>
      </div>

      {/* Process Step Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((item, idx) => (
          <div 
            key={idx}
            className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
          >
            {/* Step badge */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-rose-800/10 tracking-wider">
                  STEP {item.step}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-rose-700"></span>
              </div>
              
              <h3 className="font-bold text-slate-950 text-base leading-snug">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                {item.text.includes("support@lawctopus.com") ? (
                  <>
                    Send an email to <a href="mailto:support@lawctopus.com" className="text-rose-800 font-extrabold hover:underline">support@lawctopus.com</a> within 10 days after the course ends.
                  </>
                ) : item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary trust statement card */}
      <div className="bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
        {/* Subtle decorative background circle */}
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>
        
        <p className="text-base sm:text-[17px] font-medium leading-relaxed max-w-3xl relative">
          Our money back guarantee is straightforward. If you put in the effort, we promise you’ll see real results. And if not; we’ll return your money.
        </p>
      </div>

    </section>
  );
}
