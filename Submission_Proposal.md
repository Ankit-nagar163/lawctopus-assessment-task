# Lawctopus Landing Page Redesign Submission

**Role Application:** Freelance Web Developer  
**Applicant Name:** Ankit Nagar  
**Contact Number:** +91 9131075091  
**Email:** ankitnagar163@gmail.com  

---

## Live Links
* **Live Deployed Landing Page (Vercel):** https://lawctopus-assessment-task.vercel.app/
* **GitHub Repository Code:** https://github.com/Ankit-nagar163/lawctopus-assessment-task

---

## Redesign Overview

For this task, I built a completely new landing page from the ground up using **React + Vite** and **Tailwind CSS**, using the existing Lawctopus WordPress course page as content and structural reference. 

Instead of working within the constraints of page builders, I coded a modern Single Page Application (SPA) designed to load instantly and provide a smoother user flow.

---

## Why this Redesign is Better than the Old Page

Here is why this custom frontend implementation provides a much better experience for prospective students than the current live page:

### 1. Performance & Speed
* **The Problem with the Old Page:** Built on WordPress/Elementor, it carries heavy stylesheet bloat, resulting in slow load times and layout shifts during scroll.
* **The Redesign Solution:** Because it is built from scratch as a React SPA with Vite, the bundle size is extremely light. It loads instantly and handles page interactions without reloading, preventing user bounce.

### 2. Streamlined Navigation (Scrollspy)
* **The Problem with the Old Page:** Users have to scroll through endless text blocks to find specific details, making it easy to miss key syllabus points.
* **The Redesign Solution:** Added a sticky sidebar table of contents (`src/components/Sidebar.jsx`) that uses browser `IntersectionObserver` to highlight the current section. Users can also click any sidebar link to jump directly to that module.

### 3. Premium Legal Branding (Color System)
* **The Problem with the Old Page:** The styling uses standard templates with plain reds and default whites.
* **The Redesign Solution:** Crafted a professional brand identity using Deep Crimson (#991b1b), Amber Gold (#b45309) accents, and a warm paper-tint background (#faf9f7) instead of plain white. This styling feels like a modern legal institution.

### 4. Interactive and Structured Elements
* **The Problem with the Old Page:** Core elements like course metrics, timeline phases, and benefits are written in flat text blocks or identical tables.
* **The Redesign Solution:**
  * Rebuilt key statistics into soft-colored metric widgets with hover scale effects.
  * Restructured the syllabus roadmaps into clear phase blocks.
  * Replaced generic emojis and outline icons with a unified vector icon set (`src/components/Icons.jsx`) that uses consistent line weight.

### 5. Clear Pricing & EMI Options
* **The Problem with the Old Page:** Fee details are buried under text sections.
* **The Redesign Solution:** Designed two distinct, side-by-side pricing cards comparing the Expert and Foundation levels. Added bold tags showing exact savings ("Save 58%") and direct links to register.

### 6. Seamless Mobile Layout
* **The Problem with the Old Page:** Breadcrumbs and long titles get cut off or overflow on mobile screens.
* **The Redesign Solution:** Breadcrumbs wrap naturally on mobile screens and navigation scales down cleanly across all viewport dimensions.

---

## Technical Details

* **Frontend:** React.js (Functional Components & Hooks)
* **Styling:** Tailwind CSS (Flexbox & grid layouts)
* **Build Tool:** Vite
* **Hosting:** Vercel

### Running Locally:
1. Clone the repository:
   git clone https://github.com/Ankit-nagar163/lawctopus-assessment-task.git
2. Install packages:
   npm install
3. Run the development server:
   npm run dev
