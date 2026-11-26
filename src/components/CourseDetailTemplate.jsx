"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Calendar,
  Award,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Sparkles,
  PhoneCall,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Layers,
  Laptop,
  ShieldCheck
} from "lucide-react";

export default function CourseDetailTemplate({
  title,
  subtitle,
  category,
  duration = "3 - 6 Months",
  description,
  curriculum = [],
  highlights = []
}) {
  const [openModule, setOpenModule] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const courseFaqs = [
    {
      q: `Who is eligible for the ${category} program?`,
      a: "Students pursuing B.Tech, BCA, MCA, Diploma, B.Sc, or graduates looking for hands-on industry training and job readiness can enroll."
    },
    {
      q: "Does this course include live practical projects?",
      a: "Yes. Every learner builds practical lab assignments and a mentored capstone project aligned with current industry workflows."
    },
    {
      q: "Will I receive a recognized certificate and placement support?",
      a: "Yes, upon successful completion you receive an ISO 9001:2015 recognized certificate along with resume review and mock interview preparation."
    }
  ];

  return (
    <div className="w-full bg-[#F4F7FC] text-[#20243A]">
      {/* 1 & 2. BREADCRUMB + SPLIT COURSE HERO */}
      <section className="bg-white border-b border-[#E2E8F0] py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#64748B] mb-6 flex-wrap">
            <Link href="/" className="hover:text-[#0071BC] font-medium transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/Home/TrainingSyllabus" className="hover:text-[#0071BC] font-medium transition">Courses</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#2E3192] font-bold">{category}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Course Intro */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF6FC] border border-[#E2E8F0] text-xs font-bold text-[#2E3192]">
                <Sparkles className="w-3.5 h-3.5 text-[#0071BC]" />
                <span>{category} Career Track</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E3192] leading-tight tracking-tight">
                {title}
              </h1>

              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed max-w-2xl">
                {subtitle || description}
              </p>

              {/* Metadata Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#20243A]">
                <div className="flex items-center gap-2 bg-[#F4F7FC] border border-[#E2E8F0] px-3.5 py-2 rounded-xl">
                  <Clock className="w-4 h-4 text-[#0071BC]" />
                  <span>Duration: <strong className="text-[#2E3192]">{duration}</strong></span>
                </div>
                <div className="flex items-center gap-2 bg-[#F4F7FC] border border-[#E2E8F0] px-3.5 py-2 rounded-xl">
                  <Calendar className="w-4 h-4 text-[#0071BC]" />
                  <span>Schedule: <strong className="text-[#2E3192]">Weekdays &amp; Weekends</strong></span>
                </div>
                <div className="flex items-center gap-2 bg-[#EEF6FC] border border-[#E2E8F0] px-3.5 py-2 rounded-xl">
                  <Award className="w-4 h-4 text-[#2E3192]" />
                  <span><strong className="text-[#2E3192]">ISO 9001:2015</strong> &amp; Placement Support</span>
                </div>
              </div>
            </div>

            {/* Right Hero Enrollment Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#F4F7FC] p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] mb-4">
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Next Cohort</span>
                  <span className="text-[11px] font-bold text-[#0071BC] bg-white border border-[#E2E8F0] px-2.5 py-0.5 rounded-full">
                    Admissions Open
                  </span>
                </div>

                <h2 className="text-lg font-extrabold text-[#2E3192] mb-1">Reserve Your Lab Seat</h2>
                <p className="text-xs text-[#64748B] mb-5 leading-relaxed">
                  Limited workstation seats per batch for dedicated 1-on-1 mentor guidance.
                </p>

                <div className="space-y-3">
                  <Link
                    href="/RegisterForEnrollment"
                    className="w-full flex items-center justify-center gap-2 bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl transition shadow-sm"
                  >
                    <span>Enroll in This Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+919076760009"
                    className="w-full flex items-center justify-center gap-2 bg-white border border-[#E2E8F0] hover:border-[#0071BC] text-[#2E3192] hover:text-[#0071BC] text-xs font-bold py-3 rounded-xl transition"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#0071BC]" />
                    <span>Call Counselor: +91 9076760009</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + STICKY SIDEBAR */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Main Sections */}
            <div className="lg:col-span-8 space-y-8">

              {/* 3 & 4. COURSE OVERVIEW & HIGHLIGHTS */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">Program Overview</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#2E3192] mt-1">
                    Track Overview &amp; Learning Objectives
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {description}
                </p>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#2E3192] mb-3">
                    Key Course Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F7FC] border border-[#E2E8F0] text-xs text-[#20243A] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0071BC] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5 & 6. WHAT STUDENTS WILL LEARN & TECHNOLOGIES COVERED */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">Skills &amp; Tooling</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#2E3192] mt-1">
                    What You Will Learn &amp; Technologies Covered
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#EEF6FC] text-[#2E3192] border border-[#E2E8F0]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 7. CURRICULUM & MODULES ACCORDION */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E8F0]">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">Structured Syllabus</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#2E3192] mt-0.5">
                      Curriculum &amp; Modules
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-[#0071BC] bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0]">
                    {curriculum.length} Core Modules
                  </span>
                </div>

                <div className="space-y-3">
                  {curriculum.map((m, idx) => {
                    const isOpen = openModule === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-[#E2E8F0] overflow-hidden bg-[#F4F7FC]"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenModule(isOpen ? -1 : idx)}
                          className={`w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 transition ${
                            isOpen ? "bg-[#2E3192] text-white" : "bg-white text-[#20243A] hover:bg-[#EEF6FC]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                            <BookOpen className={`w-4 h-4 shrink-0 ${isOpen ? "text-white" : "text-[#0071BC]"}`} />
                            <span>Module {idx + 1}: {m.title}</span>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 shrink-0 text-[#0071BC]" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#64748B] leading-relaxed bg-[#F4F7FC] border-t border-[#E2E8F0]">
                            {m.topics}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 8, 9 & 10. PRACTICAL PROJECTS, TRAINING BENEFITS & CAREER OPPORTUNITIES */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#2E3192]">Practical Projects</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Build live industry-aligned assignments and a capstone project with Git version control and mentor code reviews.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#2E3192]">Training Benefits</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Small batch mentorship, high-speed lab workstations, ISO 9001:2015 certification, and structured evaluation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#2E3192]">Career Opportunities</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Dedicated resume building, technical mock interviews, and placement cell support for {category} roles.
                  </p>
                </div>
              </div>

              {/* 11. COURSE FAQS */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
                <h2 className="text-xl font-extrabold text-[#2E3192]">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {courseFaqs.map((faq, idx) => (
                    <div key={idx} className="rounded-xl border border-[#E2E8F0] overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                        className={`w-full text-left p-4 text-xs sm:text-sm font-bold flex items-center justify-between transition ${
                          openFaq === idx ? "bg-[#EEF6FC] text-[#2E3192]" : "bg-white text-[#20243A] hover:bg-[#F4F7FC]"
                        }`}
                      >
                        <span>{faq.q}</span>
                        {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#0071BC]" /> : <ChevronDown className="w-4 h-4 text-[#0071BC]" />}
                      </button>
                      {openFaq === idx && (
                        <div className="p-4 text-xs text-[#64748B] leading-relaxed bg-[#F4F7FC] border-t border-[#E2E8F0]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
                <h3 className="text-sm font-extrabold text-[#2E3192] pb-3 border-b border-[#E2E8F0] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#0071BC]" />
                  <span>Included With Enrollment</span>
                </h3>
                <ul className="space-y-3 text-xs text-[#64748B]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0071BC] flex-shrink-0" />
                    <span>ISO 9001:2015 Recognized Credential</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0071BC] flex-shrink-0" />
                    <span>Production Project Experience Letter</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0071BC] flex-shrink-0" />
                    <span>Online Verifiable Certificate Code</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0071BC] flex-shrink-0" />
                    <span>Corporate Interview Scheduling</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0071BC] flex-shrink-0" />
                    <span>Lab Access &amp; High-Speed Workstations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#2E3192] text-white p-6 rounded-2xl shadow-md text-center space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mx-auto">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold">Unsure If This Track Fits?</h4>
                <p className="text-xs text-[#EEF6FC] leading-relaxed">
                  Book a free 15-minute counseling session with our senior mentors to evaluate your goals and readiness.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact-us"
                    className="w-full inline-block bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold py-3 px-4 rounded-xl transition shadow"
                  >
                    Schedule Free Consultation
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 12. BOTTOM ADMISSION CTA */}
      <section className="py-12 bg-gradient-to-r from-[#2E3192] to-[#0071BC] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold">Ready to Start {category}?</h2>
            <p className="text-xs sm:text-sm text-[#EEF6FC] mt-1">
              Reserve your seat in the upcoming Lucknow classroom or hybrid cohort.
            </p>
          </div>
          <Link
            href="/RegisterForEnrollment"
            className="shrink-0 bg-white hover:bg-[#EEF6FC] text-[#2E3192] font-bold px-7 py-3 rounded-xl text-xs sm:text-sm transition shadow-md"
          >
            Enroll Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
