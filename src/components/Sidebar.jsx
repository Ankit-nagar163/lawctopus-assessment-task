import React, { useRef, useEffect } from 'react';

export default function Sidebar({ activeSection, sidebarItems, onItemClick }) {
  const activeRef = useRef(null);
  const sidebarRef = useRef(null);

  // Auto-scroll logic to keep highlighted elements visible within the sidebar viewport (Desktop)
  useEffect(() => {
    if (!sidebarRef.current) return;

    const firstItemId = sidebarItems[0]?.id;
    const lastItemId = sidebarItems[sidebarItems.length - 1]?.id;

    if (activeSection === firstItemId) {
      sidebarRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (activeSection === lastItemId) {
      sidebarRef.current.scrollTo({
        top: sidebarRef.current.scrollHeight,
        behavior: 'smooth'
      });
    } else if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [activeSection, sidebarItems]);

  return (
    <aside
      ref={sidebarRef}
      className="hidden lg:block lg:col-span-3 sticky top-[88px] max-h-[calc(100vh-120px)] overflow-y-auto pr-3 no-scrollbar border-r border-slate-100"
    >
      <div className="py-2">
        <h3 className="text-rose-800 font-extrabold text-xs uppercase tracking-wider pl-3 mb-4">
          What's Inside
        </h3>

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
                className={`block px-3 py-1.5 rounded-xl text-[13px] leading-snug transition-all duration-150 ${isActive
                  ? 'bg-rose-50 text-rose-800 font-bold border-l-4 border-rose-800 pl-2 rounded-l-none'
                  : 'text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 pl-3'
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Share and Download Buttons flow naturally at the end of the sidebar list */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-around text-slate-500 text-xs font-bold">
          <button className="flex items-center gap-2 hover:text-rose-700 transition-colors py-1.5 px-3.5 rounded-lg hover:bg-slate-50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186l.09.034m-.09-.034a2.25 2.25 0 001.272.647m-1.272-.681a2.25 2.25 0 001.313.704m-1.442-.738l.09.034m1.352-.068a2.25 2.25 0 00.129 1.15m-.13-1.15a2.25 2.25 0 01.13 1.15m-1.482-.034l.09-.034m1.392.068a2.25 2.25 0 001.272-.647m-1.272.681a2.25 2.25 0 01-1.313-.704M12 5.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12 14.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            </svg>
            Share
          </button>
          <button className="flex items-center gap-2 hover:text-rose-700 transition-colors py-1.5 px-3.5 rounded-lg hover:bg-slate-50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </aside>
  );
}
