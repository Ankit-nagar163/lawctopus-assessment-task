import React, { useRef, useEffect } from 'react';

export default function Sidebar({ activeSection, sidebarItems, onItemClick }) {
  const activeRef = useRef(null);
  const sidebarRef = useRef(null);

  // Auto-scroll logic to keep highlighted elements visible within the sidebar
  useEffect(() => {
    if (!sidebarRef.current) return;

    const firstItemId = sidebarItems[0]?.id;
    const lastItemId = sidebarItems[sidebarItems.length - 1]?.id;

    if (activeSection === firstItemId) {
      sidebarRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (activeSection === lastItemId) {
      sidebarRef.current.scrollTo({ top: sidebarRef.current.scrollHeight, behavior: 'smooth' });
    } else if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeSection, sidebarItems]);

  return (
    <aside
      ref={sidebarRef}
      className="hidden lg:block lg:col-span-3 sticky top-[88px] max-h-[calc(100vh-120px)] overflow-y-auto pr-3 no-scrollbar"
    >
      <div className="py-2">
        {/* Sidebar header */}
        <div className="pl-3 mb-5">
          <p className="text-[10px] font-extrabold text-[#b45309] uppercase tracking-widest mb-0.5">
            Course Contents
          </p>
          <div className="h-px bg-gradient-to-r from-[#991b1b]/30 to-transparent mt-1.5"></div>
        </div>

        {/* Navigation list */}
        <nav className="space-y-0.5">
          {sidebarItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                ref={isActive ? activeRef : null}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick(item.id);
                }}
                className={`group flex items-start gap-2.5 px-3 py-1.5 rounded-r-xl text-[12.5px] leading-snug transition-all duration-150 ${
                  isActive
                    ? 'bg-red-50 text-[#991b1b] font-bold border-l-2 border-[#991b1b] pl-2.5 rounded-l-none'
                    : 'text-slate-500 font-medium hover:bg-slate-50 hover:text-slate-800 pl-3'
                }`}
              >
                {/* Animated active dot */}
                <span
                  className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                    isActive
                      ? 'bg-[#991b1b] sidebar-dot-active'
                      : 'bg-slate-200 group-hover:bg-slate-400'
                  }`}
                ></span>
                <span className="leading-[1.45]">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Share and Download Buttons */}
        <div className="mt-6 pt-4 border-t border-dashed border-slate-200 flex items-center justify-around text-slate-500 text-xs font-bold">
          <button className="flex items-center gap-2 hover:text-[#991b1b] transition-colors py-1.5 px-3.5 rounded-lg hover:bg-red-50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
          <button className="flex items-center gap-2 hover:text-[#991b1b] transition-colors py-1.5 px-3.5 rounded-lg hover:bg-red-50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            PDF
          </button>
        </div>
      </div>
    </aside>
  );
}
