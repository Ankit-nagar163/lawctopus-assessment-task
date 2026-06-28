/**
 * LLS Icon Library — Consistent 24x24 SVG Icons
 * Style: strokeWidth=1.75, rounded caps/joins, modern & distinct
 * All icons are named semantically for their legal/ed-tech context
 */

const iconProps = {
  className: "w-full h-full",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

// ─── Document & Drafting ───────────────────────────────────
export const IconPenNib = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 013.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

export const IconDocument = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M9 12h6m-6 4h6M7 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8l-5-5H7z" />
    <path d="M13 3v5h5" />
  </svg>
);

export const IconContract = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

export const IconPenLine = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

// ─── Learning & Education ──────────────────────────────────
export const IconBookOpen = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

export const IconGraduationCap = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path d="M12 14V9" />
  </svg>
);

export const IconPlayCircle = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8l6 4-6 4V8z" />
  </svg>
);

export const IconVideoCamera = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M15 10l4.553-2.276A1 1 0 0121 8.764v6.472a1 1 0 01-1.447.894L15 14M4 8h8a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z" />
  </svg>
);

export const IconCalendarLive = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <circle cx="12" cy="15" r="2" fill="currentColor" stroke="none" />
  </svg>
);

export const IconMicrophoneOn = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
    <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
  </svg>
);

// ─── Career & Work ─────────────────────────────────────────
export const IconBriefcase = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4" />
  </svg>
);

export const IconTrendingUp = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export const IconCurrencyRupee = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 8h8M8 12h8M13 16l-5-4h2.5c2.5 0 4-1.5 4-4" />
  </svg>
);

export const IconUserBadge = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 14l2 2 4-4" />
  </svg>
);

export const IconMail = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 8l10 6 10-6" />
  </svg>
);

// ─── Network & Community ───────────────────────────────────
export const IconHandshake = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
);

export const IconUsers = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

export const IconGlobe = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
  </svg>
);

// ─── Recognition & Achievement ─────────────────────────────
export const IconAward = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export const IconTrophy = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M8 21h8M12 17v4M7 4H4a1 1 0 00-1 1v3c0 2.21 1.79 4 4 4 .34 0 .67-.04 1-.1" />
    <path d="M17 4h3a1 1 0 011 1v3c0 2.21-1.79 4-4 4-.34 0-.67-.04-1-.1" />
    <path d="M7 4h10v8a5 5 0 01-5 5v0a5 5 0 01-5-5V4z" />
  </svg>
);

export const IconShieldCheck = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 2l8 3v6c0 5.25-3.5 10.74-8 12C7.5 21.74 4 16.25 4 11V5l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconStar = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ─── Technology & AI ───────────────────────────────────────
export const IconSparkles = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.728 12.728.707.707M3 12H2m20 0h-1M4.22 19.778l.707-.707M18.364 5.636l.707-.707" />
    <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

export const IconLightbulb = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M9 21h6M12 3C8.686 3 6 5.686 6 9c0 2.165 1.155 4.063 2.876 5.127L9 17h6l.124-2.873C16.845 13.063 18 11.165 18 9c0-3.314-2.686-6-6-6z" />
  </svg>
);

export const IconCpu = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="8" y="8" width="8" height="8" />
    <path d="M4 12H2M4 8H2M4 16H2M12 4V2M8 4V2M16 4V2M20 12h2M20 8h2M20 16h2M12 20v2M8 20v2M16 20v2" />
  </svg>
);

// ─── Access & Lifetime ─────────────────────────────────────
export const IconInfinity = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 000 8c2 0 4-1.5 6-4zm0 0c2 2.5 4 4 6 4a4 4 0 000-8c-2 0-4 1.5-6 4z" />
  </svg>
);

export const IconUnlock = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 019.9-1" />
  </svg>
);

// ─── Feedback & Review ─────────────────────────────────────
export const IconMessageCheck = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <path d="M9 11l2 2 4-4" />
  </svg>
);

export const IconClipboardList = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h4" />
  </svg>
);

// ─── Upwork / Freelance ────────────────────────────────────
export const IconLaptopMoney = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <path d="M4 16V6a2 2 0 012-2h12a2 2 0 012 2v10" />
    <path d="M2 18h20M10 18l1 2h2l1-2" />
    <path d="M12 7v4M10 9h4" />
  </svg>
);

export const IconWebMonitor = ({ className = "w-5 h-5" }) => (
  <svg {...iconProps} className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M7 8l3 3-3 3" />
    <path d="M13 14h4" />
  </svg>
);
