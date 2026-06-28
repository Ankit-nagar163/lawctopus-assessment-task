# Lawctopus Landing Page Redesign Submission

**Role Application:** Freelance Web Developer  
**Applicant Name:** Ankit Nagar  
**Contact Number:** +91 9131075091  
**Email:** ankitnagar163@gmail.com  

---

## Live Links
* **Redesigned Landing Page (Vercel):** https://lawctopus-assessment-task.vercel.app/
* **GitHub Repository Code:** https://github.com/Ankit-nagar163/lawctopus-assessment-task

---

## Redesign Choices & Fixes

Here is a summary of the improvements and fixes I implemented to modernize the page and improve readability:

### 1. Updated Brand Theme & Colors
* **Primary Crimson Red (#991b1b):** Switched the generic red button styles to deep crimson red matching Lawctopus' school brand identity.
* **Warm Accent Gold (#b45309):** Added a warm amber accent color for key elements like badges, active section highlights, and important chips.
* **Warm Canvas Background (#faf9f7):** Replaced the default plain white background with a subtle, warm paper tint. This makes reading long curriculum sections easier on the eyes.

### 2. SVG Icon System (Icons.jsx)
* Replaced the standard default icons and generic emojis with a custom-styled vector SVG icon library (`src/components/Icons.jsx`). Every card and benefit check now uses a matching line icon set with a consistent line weight.

### 3. Sidebar Scrollspy Navigation
* Implemented a sticky table-of-contents sidebar navigation (`src/components/Sidebar.jsx`) using the `IntersectionObserver` browser API.
* The sidebar automatically highlights active sections as the user scrolls, making long content pages easy to navigate.

### 4. Metrics & Fees Redesign
* **Metrics Panel:** The enrolled numbers ("1,500+ Students") were rebuilt into clean cards with soft backgrounds and subtle hover scaling effects.
* **Fees Section:** Redesigned the cards to clearly separate the Expert and Foundation tiers. Added inline checkout buttons, direct checklist benefits, and clear savings badges.

### 5. Layout & Mobile Fixes
* **Breadcrumbs:** Fixed the navigation bar below the header to wrap text naturally on small mobile viewports, resolving the previous layout cutting issues.
* **Branded Shares:** Replaced grey sharing options with clean, brand-colored social share badges (LinkedIn, WhatsApp, etc.).

---

## Technical Details

The codebase is built cleanly with:
* React.js (Functional Components and hooks)
* Tailwind CSS (Flexbox & grid layouts)
* Vite (For fast bundling)

### How to Run Locally:
1. Clone the repository:
   git clone https://github.com/Ankit-nagar163/lawctopus-assessment-task.git
2. Install packages:
   npm install
3. Run the development server:
   npm run dev
