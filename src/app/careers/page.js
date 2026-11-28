"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, Clock, Send, CheckCircle2, Sparkles } from "lucide-react";

const OPENINGS = [
  {
    title: "Senior MERN Stack Trainer / Mentor",
    department: "Technical Faculty",
    location: "Gomti Nagar, Lucknow (On-site)",
    type: "Full-Time",
    exp: "2–5 Years",
  },
  {
    title: "Python, Data Analytics & AI Instructor",
    department: "Data Science & AI",
    location: "Lucknow (Hybrid)",
    type: "Full-Time",
    exp: "2–4 Years",
  },
  {
    title: "HR & Student Placement Coordinator",
    department: "HR & Placements",
    location: "Gomti Nagar, Lucknow",
    type: "Full-Time",
    exp: "1–3 Years",
  },
  {
    title: "SEO & Digital Marketing Executive",
    department: "Marketing & Growth",
    location: "Lucknow (On-site)",
    type: "Full-Time",
    exp: "1–3 Years",
  },
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(OPENINGS[0].title);
  const [form, setForm] = useState({ name: "", email: "", phone: "", portfolio: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", portfolio: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0071BC] bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0]">
            <Sparkles className="w-3.5 h-3.5" /> Careers at BLA
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#2E3192]">
            Join Barrownz Learning Academy
          </h1>
          <p className="text-sm text-[#64748B]">
            Work with our SEO, HR, Placement, and Technical Mentorship teams to shape the next generation of software engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-lg font-extrabold text-[#2E3192]">Current Openings</h2>
            {OPENINGS.map((job) => (
              <div
                key={job.title}
                onClick={() => setSelectedRole(job.title)}
                className={`cursor-pointer bg-white p-5 rounded-2xl border transition-all ${
                  selectedRole === job.title ? "border-[#0071BC] shadow-md" : "border-[#E2E8F0] hover:border-[#0071BC]/50"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-[#0071BC] bg-[#EEF6FC] px-2.5 py-0.5 rounded-full">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-[#64748B]">{job.exp}</span>
                </div>
                <h3 className="text-base font-extrabold text-[#2E3192] mt-2">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-[#64748B] mt-2">
                  <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#0071BC]" /> {job.location}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#0071BC]" /> {job.type}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#2E3192] font-extrabold text-base">
              <Briefcase className="w-5 h-5 text-[#0071BC]" />
              <span>Apply Now</span>
            </div>
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Application received for <strong>{selectedRole}</strong>! Our HR team will contact you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-[#20243A] mb-1">Position</label>
                  <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC]">
                    {OPENINGS.map((j) => <option key={j.title} value={j.title}>{j.title}</option>)}
                  </select>
                </div>
                <input required placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0]" />
                <input required type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0]" />
                <input required placeholder="Mobile Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0]" />
                <input placeholder="Resume / LinkedIn / Portfolio URL" value={form.portfolio} onChange={(e) => setForm({ ...form, portfolio: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0]" />
                <textarea rows={3} placeholder="Brief note about your experience..." value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0]" />
                <button type="submit" className="w-full bg-[#2E3192] hover:bg-[#0071BC] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition">
                  <span>Submit Application</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
