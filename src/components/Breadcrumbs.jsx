import React from 'react';

export default function Breadcrumbs() {
  const ShareIcons = {
    linkedin: (
      <svg className="w-4 h-4 text-slate-400 hover:text-rose-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4 text-slate-400 hover:text-rose-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
    facebook: (
      <svg className="w-4 h-4 text-slate-400 hover:text-rose-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
    whatsapp: (
      <svg className="w-4 h-4 text-slate-400 hover:text-rose-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.85.001-2.636-1.023-5.11-2.884-6.974C16.572 1.916 14.1 .89 11.468.89c-5.44 0-9.866 4.415-9.869 9.855-.001 1.77.476 3.5 1.378 5.064L1.93 20.895l5.207-1.365z" />
      </svg>
    ),
    telegram: (
      <svg className="w-4 h-4 text-slate-400 hover:text-rose-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 2.5a1 1 0 00-.9-.3L.8 9.6a1 1 0 00-.1 1.8l5.2 2.3 2.4 7.6a1 1 0 001.7.3l3.7-4.4 5.3 4.2a1 1 0 001.6-.5l4-17a1 1 0 00-.6-1.1zm-8.8 11.8l-8.6-2.5 10.8-6.5-7.4 8.2 5.2 1z" />
      </svg>
    ),
    link: (
      <svg className="w-4 h-4 text-slate-400 hover:text-rose-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs border-b border-slate-100 overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="text-slate-500 font-medium w-full block whitespace-normal break-words leading-relaxed">
        <span className="hover:text-rose-700 cursor-pointer">Home</span>
        <span className="mx-1.5">»</span>
        <span className="hidden md:inline hover:text-rose-700 cursor-pointer">Opportunities & Events</span>
        <span className="hidden md:inline mx-1.5">»</span>
        <span className="hidden sm:inline hover:text-rose-700 cursor-pointer">Courses and Workshops</span>
        <span className="hidden sm:inline mx-1.5">»</span>
        <span className="text-rose-700 font-bold">
          Lawctopus’ 6-Month Long Course ‘Mastering Contract Drafting and Freelancing’
        </span>
      </nav>

      {/* Social shares */}
      <div className="flex items-center gap-3">
        <span className="text-slate-400 font-semibold uppercase tracking-wider text-[9px]">Share:</span>
        <div className="flex items-center gap-2">
          <a href="#" className="p-1 rounded hover:bg-slate-50 transition-colors" title="LinkedIn">{ShareIcons.linkedin}</a>
          <a href="#" className="p-1 rounded hover:bg-slate-50 transition-colors" title="Twitter">{ShareIcons.twitter}</a>
          <a href="#" className="p-1 rounded hover:bg-slate-50 transition-colors" title="Facebook">{ShareIcons.facebook}</a>
          <a href="#" className="p-1 rounded hover:bg-slate-50 transition-colors" title="WhatsApp">{ShareIcons.whatsapp}</a>
          <a href="#" className="p-1 rounded hover:bg-slate-50 transition-colors" title="Telegram">{ShareIcons.telegram}</a>
          <a href="#" className="p-1 rounded hover:bg-slate-50 transition-colors" title="Copy Link">{ShareIcons.link}</a>
        </div>
      </div>
    </div>
  );
}
