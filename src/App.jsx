import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import About from './components/About';
import WhyJoin from './components/WhyJoin';
import CoursesCosts from './components/CoursesCosts';
import AboutLawSchool from './components/AboutLawSchool';
import StructureSummary from './components/StructureSummary';
import UniqueElements from './components/UniqueElements';
import Benefits from './components/Benefits';
import EligibilityWho from './components/EligibilityWho';
import FacultyDevelopers from './components/FacultyDevelopers';
import CourseFees from './components/CourseFees';
import AddonBenefits from './components/AddonBenefits';
import MoneyBack from './components/MoneyBack';
import EligibilityCriteria from './components/EligibilityCriteria';
import ClaimRefund from './components/ClaimRefund';
import Questions from './components/Questions';
import CourseComparison from './components/CourseComparison';
import DetailedStructure from './components/DetailedStructure';
import CareerSupport from './components/CareerSupport';
import CareerCellFaculty from './components/CareerCellFaculty';
import AiReady from './components/AiReady';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Complete list of all sidebar sections matching both Image 1 and Image 2
  const sidebarItems = [
    { id: 'about', label: 'About the 6-Month Long Expert-Level Course on Mastering Contract Drafting and Freelancing' },
    { id: 'why-join', label: 'Why You Should Join This Course?' },
    { id: 'courses-costs', label: 'Courses and Costs' },
    { id: 'about-lawschool', label: 'About Lawctopus Law School' },
    { id: 'structure-summary', label: 'Structure of this Course' },
    { id: 'unique-elements', label: '9 Unique Elements of the Online Course' },
    { id: 'benefits', label: 'How will this course help you?' },
    { id: 'eligibility-who', label: 'Who can enroll for this course?' },
    { id: 'faculty-developers', label: 'Course Developers and Faculty of this Course' },
    { id: 'fees', label: 'Course Fees' },
    { id: 'add-ons', label: 'Add-on Benefits' },
    { id: 'money-back', label: 'Money Back Guarantee' },
    { id: 'eligibility-criteria', label: 'Eligibility Criteria' },
    { id: 'claim-refund', label: 'How to Claim Your Refund' },
    { id: 'questions', label: 'Questions?' },
    { id: 'comparison', label: 'Comparison of the 2 Courses' },
    { id: 'structure-detailed', label: 'Structure of this Course' },
    { id: 'career-support', label: 'Career and Placement Support Provided to Students of Mastering Contract Drafting and Freelancing' },
    { id: 'career-cell-faculty', label: 'Meet Your Faculty and Coordinators for the Career Advancement Cell' },
    { id: 'ai-ready', label: 'Building AI-Ready Legal Careers at Lawctopus Law School' }
  ];

  // Set up intersection observer to highlight active sidebar section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      
      for (const item of sidebarItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSidebarItemClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 88;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-rose-600 selection:text-white">
      {/* 1. Sticky Header */}
      <Header />
      
      {/* 2. Secondary Bar (Breadcrumbs & Share) */}
      <Breadcrumbs />

      {/* 3. Main layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Title Section */}
        <Hero />
        
        {/* Main Grid with Sidebar and Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sticky/Scrollable Sidebar */}
          <Sidebar
            activeSection={activeSection}
            sidebarItems={sidebarItems}
            onItemClick={handleSidebarItemClick}
          />

          {/* Right Content Area */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* About Section */}
            <div id="about" className="scroll-mt-24">
              <About />
            </div>

            {/* Why Join Section */}
            <div id="why-join" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <WhyJoin />
            </div>

            {/* Courses and Costs Section */}
            <div id="courses-costs" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <CoursesCosts />
            </div>

            {/* About Lawctopus Law School Section */}
            <div id="about-lawschool" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <AboutLawSchool />
            </div>

            {/* Structure of this Course Section */}
            <div id="structure-summary" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <StructureSummary />
            </div>

            {/* 9 Unique Elements Section */}
            <div id="unique-elements" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <UniqueElements />
            </div>

            {/* How will this course help you Section */}
            <div id="benefits" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <Benefits />
            </div>

            {/* Who can enroll for this course Section */}
            <div id="eligibility-who" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <EligibilityWho />
            </div>

            {/* Faculty Section */}
            <div id="faculty-developers" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <FacultyDevelopers />
            </div>

            {/* Course Fees Section */}
            <div id="fees" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <CourseFees />
            </div>

            {/* Add-on Benefits Section */}
            <div id="add-ons" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <AddonBenefits />
            </div>

            {/* Money Back Guarantee Section */}
            <div id="money-back" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <MoneyBack />
            </div>

            {/* Eligibility Criteria Section */}
            <div id="eligibility-criteria" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <EligibilityCriteria />
            </div>

            {/* How to Claim Your Refund Section */}
            <div id="claim-refund" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <ClaimRefund />
            </div>

            {/* Questions Section */}
            <div id="questions" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <Questions />
            </div>

            {/* Comparison Section */}
            <div id="comparison" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <CourseComparison />
            </div>

            {/* Detailed Structure Section */}
            <div id="structure-detailed" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <DetailedStructure />
            </div>

            {/* Career and Placement Support Section */}
            <div id="career-support" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <CareerSupport />
            </div>

            {/* Meet Your Faculty and Coordinators for the Career Advancement Cell Section */}
            <div id="career-cell-faculty" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <CareerCellFaculty />
            </div>

            {/* Building AI-Ready Legal Careers at Lawctopus Law School Section */}
            <div id="ai-ready" className="scroll-mt-24 pt-10 border-t border-slate-100">
              <AiReady />
            </div>
            
          </div>
        </div>
      </main>

      {/* 4. Global Footer */}
      <footer className="bg-white border-t border-slate-100 py-10 mt-20 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p>© 2026 Lawctopus Law School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
