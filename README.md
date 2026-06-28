# Lawctopus Landing Page Redesign (Web Developer Assessment)

This repository contains my submission for the Web Developer assessment task at Lawctopus. The goal was to redesign and modernize the landing page for the **"Mastering Contract Drafting and Freelancing"** course.

I built this page from scratch using **React + Vite** and styled it with **Tailwind CSS**. It is fully responsive, optimized for loading speed, and structured to guide a user naturally from the course overview to pricing and registration details.

---

## 🛠 What's Built & Improved

Here is a breakdown of the key improvements and design decisions I implemented:

### 1. Unified Brand Experience & Color System
* **Primary color:** Deep Crimson (`#991b1b`) — aligned with law school branding.
* **Accent highlights:** Amber Gold (`#b45309`) — used for key CTA indicators, dates, and active highlights.
* **Background:** Switched from basic off-white to a warm off-white (`#faf9f7`) to give it a clean, premium, editorial look that matches professional legal platforms.

### 2. High-Performance Icons
Instead of pulling in heavy font libraries or using default emojis, I built a centralized SVG icons component (`src/components/Icons.jsx`). All cards use matching, custom-styled line icons with a consistent stroke and style to avoid a template-like feel.

### 3. Scrollspy Navigation
* Implemented a sticky sidebar navigation (`src/components/Sidebar.jsx`) that stays visible on desktop viewports.
* Connected it with an `IntersectionObserver` to dynamically highlight the current section as the user scrolls down, helping readers track their progress through content-heavy sections.

### 4. Custom Metrics Cards
The top metrics ("1,500+ Learners", "96.5/100 Avg Rating") are restructured into colored metric cards with soft background highlights and smooth hover animations.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Icons.jsx             # Unified SVG icon definitions
│   ├── Header.jsx            # Clean header with "Seats Left" warning
│   ├── Hero.jsx              # Title, author meta, stats widgets
│   ├── Sidebar.jsx           # Stateful navigation panel
│   ├── Breadcrumbs.jsx       # Non-wrapping breadcrumbs with brand share buttons
│   ├── About.jsx             # Two-phase course roadmap
│   ├── WhyJoin.jsx           # Card grid with hover effects and faint index numbers
│   └── CourseFees.jsx        # Redesigned fee structures (Expert vs Foundation cards)
├── App.jsx                   # Component layout coordination & Scrollspy state
└── index.css                 # Custom CSS rules, animations & color scheme variables
```

---

## ⚙️ Running Locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Ankit-nagar163/lawctopus-assessment-task.git
   cd lawctopus-assessment-task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local server:**
   ```bash
   npm run dev
   ```

4. **Production Build:**
   ```bash
   npm run build
   ```
