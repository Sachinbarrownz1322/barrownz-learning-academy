"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Send, 
  CheckCircle2, 
  RefreshCw, 
  Headphones, 
  Building2, 
  ShieldCheck,
  GraduationCap,
  AlertCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    captchaInput: "",
  });

  const [captchaCode, setCaptchaCode] = useState("7K8M2");
  const [submitted, setSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  // Function to refresh captcha code
  const refreshCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
    setCaptchaError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setSubmitted(true);
  };

  // Exact departmental contact numbers
  const departments = [
    { name: "Admin", number: "+91 9076760001", role: "Administration & Operations" },
    { name: "IT", number: "+91 9076760002", role: "Technical Infrastructure & Labs" },
    { name: "Sales", number: "+91 9076760003", role: "Admissions & Course Guidance" },
    { name: "Support", number: "+91 9076760004", role: "Student Queries & Helpdesk" },
    { name: "HR", number: "+91 9076760005", role: "Careers & Corporate Hiring" },
    { name: "Training", number: "+91 9076760009", role: "Corporate & Industrial Training" },
  ];

  // Exact course list verbatim from user specification
  const courseOptions = [
    "web development courses",
    "Programming Language",
    "digital marketing course in lucknow",
    "Database",
    "ASP.Net Development",
    "PHP Development",
    "Python Development",
    "Java Development",
    "Frontend Development",
    "Wordpress Development",
    "Pay Per Click",
    "SMM/SMO",
    "Search Engine Optimization",
    "C # programming",
    "C++ Programming",
    "Winter Training",
    "Summer Training",
    "Apprenticeship Training",
    "Java programming",
    "Php programming",
    "Python Programming",
    "Graphic Design Courses",
    "personality development training",
    "Video Editing",
    "AutoCAD",
    "Solidworks",
    "Catia",
    "Revit",
    "StaadPro",
    "MERN Full Stack Development Course",
    "Free Summer Training Program",
    "Python AI/ML",
    "Data analytics courses",
    "Java Full Stack Development",
  ];

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* ════════════════════════════════════════════════════════
          1. BREADCRUMB / HERO SECTION
      ════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-gradient-to-r from-[#20243A] via-[#2E3192] to-[#0071BC] text-white py-14 lg:py-16 px-4 overflow-hidden border-b border-[#E2E8F0]">
        {/* <Image
          src="/images/vedioImg1.jpg"
          alt="Contact Barrownz Learning Academy Lucknow"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#20243A]/92 via-[#2E3192]/80 to-[#0071BC]/65" /> */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-200 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">Contact Us</span>
          </div>
          <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Admissions &amp; Support Desk
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Contact Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
            Get in touch with Barrownz Learning Academy for course admissions, industrial training inquiries, or technical career counselling.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          2. CONTACT DETAILS & GET IN TOUCH FORM
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* ─── LEFT: DIRECT CONTACT DETAILS (5 Cols) ─── */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-block text-[#2E3192] font-bold text-xs uppercase tracking-widest bg-[#EAF4FC] px-3 py-1 rounded-full border border-[#E5EAF2] mb-2">
                  Direct Lines
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                  Departmental Helplines
                </h2>
                <div className="w-16 h-1 bg-[#2E3192] rounded mt-2 mb-4" />
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Call our specialized desks directly for immediate query assistance, seat reservation, or training syllabus guidance.
                </p>
              </div>

              {/* Department Phone Numbers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {departments.map((dept, i) => (
                  <div 
                    key={i} 
                    className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#2E3192] hover:shadow-sm transition"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#2E3192]" />
                        {dept.name}
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase font-semibold">Desk</span>
                    </div>
                    <a
                      href={`tel:${dept.number.replace(/\s+/g, '')}`}
                      className="text-xs font-extrabold text-[#2E3192] hover:underline block"
                    >
                      {dept.number}
                    </a>
                    <span className="text-[10px] text-gray-500 block mt-0.5">{dept.role}</span>
                  </div>
                ))}
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#EAF4FC]/60 border border-[#E5EAF2] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#2E3192] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-900 block">Official Email</span>
                  <a href="mailto:support@barrownz.com" className="text-xs font-semibold text-[#2E3192] hover:underline">
                    support@barrownz.com
                  </a>
                  <p className="text-[11px] text-gray-500 mt-0.5">Average reply time within 2 business hours</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-900 block">Campus Address</span>
                  <p className="text-xs font-bold text-gray-800 mt-0.5">Barrownz Group</p>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    2/90, Vastu Khand Gomti Nagar Lucknow 226010
                  </p>
                </div>
              </div>
            </div>

            {/* ─── RIGHT: GET IN TOUCH FORM (7 Cols) ─── */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                  Get in Touch
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your details below and our admissions team will contact you directly with batch details.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 px-4 bg-amber-50 rounded-xl border border-amber-200">
                  <CheckCircle2 className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-gray-900">Inquiry Form Preview (Frontend Only)</h4>
                  <p className="text-xs text-gray-700 mt-1 max-w-md mx-auto leading-relaxed">
                    Form validation passed in frontend demo mode (backend email/CRM persistence is not connected yet). Please call{" "}
                    <a href="tel:+919076760009" className="font-bold text-[#0071BC] underline">+91 9076760009</a>{" "}
                    or email{" "}
                    <a href="mailto:support@barrownz.com" className="font-bold text-[#0071BC] underline">support@barrownz.com</a>{" "}
                    for immediate assistance.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", course: "", message: "", captchaInput: "" });
                      refreshCaptcha();
                    }}
                    className="mt-5 text-xs font-bold text-[#2E3192] hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#2E3192]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#2E3192]"
                      />
                    </div>
                  </div>

                  {/* Phone with +91 Country Code */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:border-[#2E3192]">
                      <span className="bg-gray-100 text-gray-700 px-3 py-2.5 text-xs font-bold flex items-center border-r border-gray-300">
                        +91
                      </span>
                      <input
                        required
                        type="tel"
                        placeholder="9076760009"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Course Dropdown (All 34 options verbatim) */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Select Course *
                    </label>
                    <select
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#2E3192] text-gray-700"
                    >
                      <option value="">--Select a Course--</option>
                      {courseOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Message or Queries
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about batch timings, fee structures, syllabus, or summer training..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#2E3192] resize-none"
                    />
                  </div>

                  {/* CAPTCHA SECTION */}
                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Security Verification *
                    </label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      {/* Stylized Captcha Canvas Box */}
                      <div className="flex items-center gap-2">
                        <div className="bg-slate-800 text-yellow-300 font-mono tracking-widest font-extrabold text-base px-4 py-2 rounded-lg select-none shadow-inner border border-slate-700">
                          {captchaCode}
                        </div>
                        <button
                          type="button"
                          onClick={refreshCaptcha}
                          className="p-2 text-gray-500 hover:text-[#2E3192] transition"
                          title="Refresh CAPTCHA"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Captcha Input */}
                      <div className="w-full sm:flex-1">
                        <input
                          required
                          type="text"
                          placeholder="Enter the CAPTCHA"
                          value={formData.captchaInput}
                          onChange={(e) => {
                            setFormData({ ...formData, captchaInput: e.target.value });
                            setCaptchaError(false);
                          }}
                          className={`w-full text-xs border rounded-lg px-3 py-2.5 focus:outline-none ${
                            captchaError ? "border-red-500 focus:border-red-500 bg-red-50/30" : "border-gray-300 focus:border-[#2E3192]"
                          }`}
                        />
                      </div>
                    </div>
                    {captchaError && (
                      <p className="text-[11px] text-red-600 mt-1 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Invalid CAPTCHA code. Please enter the characters shown above.</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full bg-[#2E3192] hover:bg-[#005a96] text-white font-bold py-3 rounded-lg text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          3. CTA STRIP (Call Back from Admissions)
      ════════════════════════════════════════════════════════ */}
      <section className="py-10 px-4" style={{ background: "#2E3192" }}>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white font-semibold text-sm sm:text-base text-center md:text-left max-w-xl leading-6">
            Get a call back from our Admissions Counselling team to find out which course will be best for your Placements.
          </p>
          <Link
            href="/RegisterForEnrollment"
            className="shrink-0 bg-white hover:bg-gray-100 text-[#2E3192] font-bold px-7 py-3 rounded text-sm transition whitespace-nowrap shadow"
          >
            Get Free Counselling
          </Link>
        </div>
      </section>
    </main>
  );
}
