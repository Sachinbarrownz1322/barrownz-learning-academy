"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  UserPlus,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  MapPin,
  Mail,
  Laptop,
  Calendar,
  Award,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { websiteData } from "@/data/siteData";

export default function RegisterForEnrollmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [trainingMode, setTrainingMode] = useState("Classroom (Lucknow)");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    college: "",
    degree: "",
    stream: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F4F7FC] text-[#20243A]">
      {/* 1. EDITORIAL HEADER */}
      <section className="bg-white border-b border-[#E2E8F0] py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#64748B] mb-4">
            <Link href="/" className="hover:text-[#0071BC] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#2E3192] font-bold">Register for Training</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF6FC] border border-[#E2E8F0] text-xs font-bold text-[#2E3192]">
                <Sparkles className="w-3.5 h-3.5 text-[#0071BC]" />
                <span>Admissions 2026 Cohort</span>
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E3192] tracking-tight">
                Register for Training &amp; Seat Reservation
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#64748B] max-w-2xl leading-relaxed">
                Reserve your workstation seat in our hands-on industrial live project cohorts at Barrownz Learning Academy, Lucknow.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <div className="flex items-center gap-2 bg-[#F4F7FC] border border-[#E2E8F0] px-3.5 py-2.5 rounded-xl text-[#2E3192]">
                <Calendar className="w-4 h-4 text-[#0071BC]" />
                <span>New Batches Every Week</span>
              </div>
              <div className="flex items-center gap-2 bg-[#EEF6FC] border border-[#E2E8F0] px-3.5 py-2.5 rounded-xl text-[#2E3192]">
                <Award className="w-4 h-4 text-[#0071BC]" />
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPLIT 12-COLUMN ADMISSIONS WORKSPACE */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT COLUMN: CAMPUS PREVIEW, PROCESS & DIRECT HELPLINE */}
            <aside className="lg:col-span-5 space-y-6">
              {/* Campus Visual Card */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm">
                <div className="relative aspect-[16/9] w-full bg-[#EEF6FC]">
                  <Image
                    src="/images/slide-1.png"
                    alt="Hands-on Coding Labs at Barrownz Learning Academy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20243A]/75 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0071BC] px-2.5 py-0.5 rounded">
                        Practical Labs
                      </span>
                      <p className="text-sm font-bold mt-1.5">1-on-1 Mentor &amp; Live Production Repos</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="text-sm font-extrabold text-[#2E3192] uppercase tracking-wider">
                    3-Step Admission Process
                  </h2>
                  <div className="space-y-3">
                    {[
                      { step: "01", title: "Submit Application", desc: "Choose your preferred tech stack, training mode & batch." },
                      { step: "02", title: "Counselling & Guidance", desc: "Speak with our admissions mentor for roadmap alignment." },
                      { step: "03", title: "Lab Induction", desc: "Receive your enrollment code, syllabus & lab workstation." },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3 p-3 rounded-xl bg-[#F4F7FC] border border-[#E2E8F0]">
                        <span className="w-7 h-7 rounded-lg bg-[#2E3192] text-white text-xs font-black flex items-center justify-center shrink-0">
                          {item.step}
                        </span>
                        <div>
                          <h3 className="text-xs font-extrabold text-[#2E3192]">{item.title}</h3>
                          <p className="text-[11px] text-[#64748B] mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Included With Seat */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
                <h3 className="text-sm font-extrabold text-[#2E3192] flex items-center gap-2 pb-2.5 border-b border-[#E2E8F0]">
                  <ShieldCheck className="w-4 h-4 text-[#0071BC]" />
                  <span>Included With Your Training</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-[#64748B]">
                  {[
                    "Live Client Production Projects & Git Workflows",
                    "ISO 9001:2015, MSME & Skill India Recognized Certificate",
                    "100% Placement Cell Support & Mock HR Interviews",
                    "Flexible Fee Installments via Razorpay (PayUs)",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0071BC] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Admissions Desk Card */}
              <div className="bg-[#2E3192] text-white p-6 rounded-2xl shadow-md space-y-3">
                <h3 className="text-sm font-extrabold">Need Immediate Seat Confirmation?</h3>
                <p className="text-xs text-[#EEF6FC] leading-relaxed">
                  Visit our Gomti Nagar campus or call our admissions desk directly.
                </p>
                <div className="space-y-2 text-xs pt-1">
                  <a href={`tel:${websiteData.phone}`} className="flex items-center gap-2 font-bold hover:text-[#EEF6FC]">
                    <PhoneCall className="w-4 h-4 text-[#EEF6FC]" />
                    <span>{websiteData.phone}</span>
                  </a>
                  <a href={`mailto:${websiteData.email}`} className="flex items-center gap-2 text-[#EEF6FC] hover:text-white">
                    <Mail className="w-4 h-4" />
                    <span>{websiteData.email}</span>
                  </a>
                  <div className="flex items-start gap-2 text-[#EEF6FC]">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{websiteData.address}</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN: ENROLLMENT APPLICATION FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-md p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-6 space-y-5">
                    <div className="w-16 h-16 bg-[#EEF6FC] text-[#0071BC] rounded-2xl flex items-center justify-center mx-auto border border-[#E2E8F0]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#0071BC] bg-[#EEF6FC] px-3 py-1 rounded-full mb-2">
                        Frontend Preview Recorded
                      </span>
                      <h2 className="font-display text-2xl font-extrabold text-[#2E3192]">
                        Application Summary Ready
                      </h2>
                      <p className="text-xs sm:text-sm text-[#64748B] max-w-lg mx-auto mt-2 leading-relaxed">
                        This form is currently in frontend-only mode and does not store records in a backend database yet. Confirm your seat immediately via our Admissions Desk or online fee portal.
                      </p>
                    </div>

                    {/* Preview Summary Box */}
                    <div className="max-w-md mx-auto text-left bg-[#F4F7FC] border border-[#E2E8F0] rounded-xl p-4 text-xs space-y-1.5">
                      <div><strong className="text-[#2E3192]">Applicant:</strong> {formData.fullName}</div>
                      <div><strong className="text-[#2E3192]">Phone:</strong> {formData.phone}</div>
                      <div><strong className="text-[#2E3192]">Training Mode:</strong> {trainingMode}</div>
                      <div><strong className="text-[#2E3192]">Selected Program:</strong> {formData.stream}</div>
                      <div><strong className="text-[#2E3192]">College / City:</strong> {formData.college} ({formData.city})</div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={`tel:${websiteData.phone}`}
                        className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold px-6 py-3 rounded-xl transition inline-flex items-center gap-2 shadow-sm"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>Call {websiteData.phone}</span>
                      </a>
                      <a
                        href="https://rzp.io/rzp/Barrownz"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#2E3192] hover:bg-[#20243A] text-white text-xs font-bold px-5 py-3 rounded-xl transition inline-flex items-center gap-1.5"
                      >
                        <span>PayUs Fee Portal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-bold text-[#0071BC] hover:underline px-3 py-2"
                      >
                        Edit Application
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="pb-4 border-b border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h2 className="text-xl font-extrabold text-[#2E3192]">Student Admission Application</h2>
                        <p className="text-xs text-[#64748B] mt-1">
                          Fill in your personal and academic details to reserve your seat.
                        </p>
                      </div>
                      <Link
                        href="/Home/TrainingSyllabus"
                        className="text-xs font-bold text-[#0071BC] hover:underline inline-flex items-center gap-1 shrink-0"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>View Syllabus PDFs</span>
                      </Link>
                    </div>

                    {/* Preferred Training Mode Toggle */}
                    <div>
                      <label className="block text-xs font-bold text-[#20243A] mb-2">
                        Preferred Training Mode *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {["Classroom (Lucknow)", "Hybrid / Live Online"].map((mode) => {
                          const active = trainingMode === mode;
                          return (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => setTrainingMode(mode)}
                              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold border transition ${
                                active
                                  ? "bg-[#2E3192] text-white border-[#2E3192] shadow-sm"
                                  : "bg-[#F4F7FC] text-[#20243A] border-[#E2E8F0] hover:border-[#0071BC]"
                              }`}
                            >
                              <Laptop className="w-4 h-4" />
                              <span>{mode}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">Full Legal Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Vikas Kumar"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">WhatsApp / Mobile *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 9076760009"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">Email ID *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="vikas@example.com"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">College / University *</label>
                        <input
                          type="text"
                          required
                          value={formData.college}
                          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                          placeholder="e.g. AKTU / Lucknow University / BBD"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">Degree &amp; Year *</label>
                        <input
                          type="text"
                          required
                          value={formData.degree}
                          onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                          placeholder="e.g. B.Tech (CS) Final Year / BCA"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">Select Training Stream *</label>
                        <select
                          required
                          value={formData.stream}
                          onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        >
                          <option value="">-- Choose Program --</option>
                          <option value="MERN Full Stack Web Development">MERN Full Stack Web Development</option>
                          <option value="Java Full Stack & Spring Boot">Java Full Stack &amp; Spring Boot</option>
                          <option value="Python, Django & Machine Learning">Python, Django &amp; Machine Learning</option>
                          <option value="ASP.NET Core & Enterprise C#">ASP.NET Core &amp; Enterprise C#</option>
                          <option value="PHP & Laravel Development">PHP &amp; Laravel Development</option>
                          <option value="Data Analytics (SQL, Power BI, Python)">Data Analytics (SQL, Power BI, Python)</option>
                          <option value="Digital Marketing & SEO">Digital Marketing &amp; SEO</option>
                          <option value="Summer Industrial Internship (6 Weeks)">Summer Industrial Internship (6 Weeks)</option>
                          <option value="Winter Fast-Track Training">Winter Fast-Track Training</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#20243A] mb-1.5">Residential City / District *</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Lucknow, Kanpur, Sitapur, Ayodhya"
                        className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold py-4 rounded-xl transition shadow-md flex items-center justify-center gap-2"
                      >
                        <UserPlus className="w-4 h-4" />
                        <span>Submit Enrollment Application</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
