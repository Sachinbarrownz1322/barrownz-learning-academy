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
  BookOpen,
  AlertCircle
} from "lucide-react";
import { websiteData } from "@/data/siteData";
import { apiRequest, PANELS_BASE_URL } from "@/lib/api";

export default function RegisterForEnrollmentPage() {
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpNotice, setOtpNotice] = useState("");
  const [trainingMode, setTrainingMode] = useState("Classroom (Lucknow)");

  // Email & Mobile OTP states
  const [emailOtp, setEmailOtp] = useState("");
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailCooldown, setEmailCooldown] = useState(0);
  const [emailBusy, setEmailBusy] = useState(false);
  const [resendingConf, setResendingConf] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    dob: "",
    gender: "Male",
    phone: "",
    email: "",
    college: "",
    degree: "",
    passingYear: "2026",
    stream: "",
    city: "",
    state: "Uttar Pradesh",
    pincode: "",
    password: "",
  });

  React.useEffect(() => {
    if (emailCooldown <= 0) return;
    const t = setTimeout(() => setEmailCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [emailCooldown]);

  const handleSendEmailOtp = async () => {
    setError("");
    setOtpNotice("");
    if (!formData.email) {
      setError("Please enter your Email ID first.");
      return;
    }
    setEmailBusy(true);
    try {
      const res = await apiRequest("/otr/send-email-otp", {
        method: "POST",
        body: JSON.stringify({ email: formData.email }),
      });
      setEmailOtpSent(true);
      setEmailCooldown(60);
      setOtpNotice(res.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setEmailBusy(false);
    }
  };

  const handleVerifyEmailOtp = async () => {
    setError("");
    setOtpNotice("");
    if (!/^\d{6}$/.test(emailOtp.trim())) {
      setError("Please enter the 6-digit Email OTP.");
      return;
    }
    setEmailBusy(true);
    try {
      const res = await apiRequest("/otr/verify-email-otp", {
        method: "POST",
        body: JSON.stringify({ email: formData.email, otp: emailOtp.trim() }),
      });
      setEmailVerified(true);
      setOtpNotice(res.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setEmailBusy(false);
    }
  };

  const handleResendConfirmation = async () => {
    if (!submittedData?.otrNumber || !submittedData?.profile?.email) return;
    setResendingConf(true);
    setError("");
    setOtpNotice("");
    try {
      const res = await apiRequest("/otr/resend-confirmation", {
        method: "POST",
        body: JSON.stringify({
          email: submittedData.profile.email,
          otrNumber: submittedData.otrNumber,
        }),
      });
      setSubmittedData((prev) => ({
        ...prev,
        confirmationEmailSent: true,
        confirmationEmailError: "",
      }));
      setOtpNotice(res.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setResendingConf(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailVerified) {
      setError("Please verify your Email ID via OTP before submitting.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const payload = {
        fullName: formData.fullName,
        fatherName: formData.fatherName,
        dob: formData.dob,
        gender: formData.gender,
        email: formData.email,
        phone: formData.phone,
        address: {
          city: formData.city,
          district: formData.city,
          state: formData.state,
          pincode: formData.pincode,
        },
        education: {
          highestQualification: formData.degree,
          collegeUniversity: formData.college,
          passingYear: Number(formData.passingYear) || 2026,
        },
        trainingTrack: formData.stream,
        preferredBatchMode:
          trainingMode === "Hybrid / Live Online" ? "Online Live" : "Classroom (Lucknow)",
        password: formData.password,
      };

      const res = await apiRequest("/otr/register", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setSubmittedData(res);
    } catch (err) {
      setError(err.message || "Unable to complete OTR registration. Please check your details.");
    } finally {
      setLoading(false);
    }
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
                {submittedData ? (
                  <div className="text-center py-6 space-y-5">
                    <div className="w-16 h-16 bg-[#EEF6FC] text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-[#E2E8F0]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-2">
                        OTR Registration Successful
                      </span>
                      <h2 className="font-display text-2xl font-extrabold text-[#2E3192]">
                        Your Permanent OTR Number
                      </h2>
                      <div className="mt-3 inline-block px-5 py-2.5 rounded-xl bg-[#EEF6FC] border border-[#0071BC]/30 font-mono text-xl font-black text-[#2E3192] tracking-wider">
                        {submittedData.otrNumber}
                      </div>
                      <p className="text-xs sm:text-sm text-[#64748B] max-w-lg mx-auto mt-3 leading-relaxed">
                        Save this permanent OTR ID. Your Student Portal account has been created and you are now signed in.
                      </p>
                    </div>

                    {/* Registered Summary Box */}
                    <div className="max-w-md mx-auto text-left bg-[#F4F7FC] border border-[#E2E8F0] rounded-xl p-4 text-xs space-y-1.5">
                      <div><strong className="text-[#2E3192]">OTR ID:</strong> <span className="font-mono font-bold">{submittedData.otrNumber}</span></div>
                      <div><strong className="text-[#2E3192]">Applicant:</strong> {submittedData.profile?.fullName}</div>
                      <div><strong className="text-[#2E3192]">Email Verification:</strong> <span className="text-emerald-700 font-bold">Verified</span></div>
                      <div><strong className="text-[#2E3192]">Mobile Verification:</strong> <span className="text-amber-700 font-bold">{submittedData.profile?.mobileVerificationStatus || (submittedData.profile?.mobileVerified ? "Verified" : "Pending")}</span></div>
                      <div><strong className="text-[#2E3192]">Training Mode:</strong> {submittedData.profile?.preferredBatchMode}</div>
                      <div><strong className="text-[#2E3192]">Selected Program:</strong> {submittedData.profile?.trainingTrack}</div>
                      <div><strong className="text-[#2E3192]">Status:</strong> {submittedData.profile?.status}</div>
                    </div>

                    {submittedData.confirmationEmailSent ? (
                      <div className="max-w-md mx-auto space-y-1.5">
                        <p className="text-xs text-emerald-700 font-semibold">
                          Confirmation email sent to {submittedData.profile?.email}.
                        </p>
                        <p className="text-[11px] text-[#64748B]">
                          Not in Inbox? Please check your Spam/Junk folder or{" "}
                          <button
                            type="button"
                            disabled={resendingConf}
                            onClick={handleResendConfirmation}
                            className="text-[#0071BC] font-bold underline hover:text-[#2E3192]"
                          >
                            {resendingConf ? "Resending..." : "Resend Confirmation Email"}
                          </button>
                          .
                        </p>
                      </div>
                    ) : (
                      <div className="max-w-md mx-auto p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 space-y-2">
                        <p>{submittedData.confirmationEmailError || "Confirmation email could not be sent right now."}</p>
                        <button
                          type="button"
                          disabled={resendingConf}
                          onClick={handleResendConfirmation}
                          className="px-3 py-1.5 rounded-lg bg-[#2E3192] text-white font-bold text-[11px] hover:bg-[#0071BC]"
                        >
                          {resendingConf ? "Sending..." : "Resend Confirmation Email"}
                        </button>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={`${PANELS_BASE_URL}/student`}
                        className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold px-6 py-3 rounded-xl transition inline-flex items-center gap-2 shadow-sm"
                      >
                        <span>Open Student Panel</span>
                        <ExternalLink className="w-3.5 h-3.5" />
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

                    {error && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {otpNotice && (
                      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{otpNotice}</span>
                      </div>
                    )}

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
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">Father&apos;s Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fatherName}
                          onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                          placeholder="e.g. Rajesh Kumar"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">Date of Birth *</label>
                        <input
                          type="date"
                          required
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">Gender *</label>
                        <select
                          required
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-bold text-[#20243A]">WhatsApp / Mobile *</label>
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                            Verification: Pending
                          </span>
                        </div>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="9076760009"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                        <p className="text-[10px] text-[#64748B]">
                          10-digit Indian mobile number (SMS verification remains pending).
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-bold text-[#20243A]">Email ID *</label>
                          {emailVerified && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                              <CheckCircle2 className="w-3 h-3" /> Verified
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              setEmailVerified(false);
                              setEmailOtpSent(false);
                            }}
                            placeholder="vikas@example.com"
                            className="flex-1 text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                          />
                          {!emailVerified && (
                            <button
                              type="button"
                              disabled={emailBusy || emailCooldown > 0}
                              onClick={handleSendEmailOtp}
                              className="px-3 py-2 rounded-xl bg-[#2E3192] hover:bg-[#0071BC] disabled:opacity-50 text-white text-[11px] font-bold shrink-0 transition"
                            >
                              {emailCooldown > 0 ? `${emailCooldown}s` : emailOtpSent ? "Resend" : "Send OTP"}
                            </button>
                          )}
                        </div>
                        {emailOtpSent && !emailVerified && (
                          <div className="flex gap-2">
                            <input
                              type="text"
                              maxLength={6}
                              value={emailOtp}
                              onChange={(e) => setEmailOtp(e.target.value)}
                              placeholder="6-digit Email OTP"
                              className="flex-1 text-xs px-3 py-2 rounded-lg border border-[#0071BC]/40 bg-white font-mono"
                            />
                            <button
                              type="button"
                              disabled={emailBusy}
                              onClick={handleVerifyEmailOtp}
                              className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold shrink-0"
                            >
                              Verify
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">College / University *</label>
                        <input
                          type="text"
                          required
                          value={formData.college}
                          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                          placeholder="e.g. AKTU / Lucknow University"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">Passing Year *</label>
                        <input
                          type="number"
                          required
                          min="1990"
                          max="2035"
                          value={formData.passingYear}
                          onChange={(e) => setFormData({ ...formData, passingYear: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">Qualification / Degree *</label>
                        <input
                          type="text"
                          required
                          value={formData.degree}
                          onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                          placeholder="e.g. B.Tech (CS) / BCA"
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

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">City / District *</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Lucknow"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">State *</label>
                        <input
                          type="text"
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#20243A] mb-1.5">PIN Code *</label>
                        <input
                          type="text"
                          required
                          pattern="[1-9][0-9]{5}"
                          maxLength={6}
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          placeholder="226010"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#20243A] mb-1.5">Create Portal Password (min 8 chars) *</label>
                      <input
                        type="password"
                        required
                        minLength={8}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Create a strong password for Student Panel login"
                        className="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC] transition"
                      />
                    </div>

                    <div className="pt-2 space-y-2">
                      {!emailVerified && (
                        <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 font-semibold">
                          Verify your Email ID via OTP to enable OTR registration.
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={loading || !emailVerified}
                        className="w-full bg-[#0071BC] hover:bg-[#005a96] disabled:opacity-60 text-white text-xs sm:text-sm font-bold py-4 rounded-xl transition shadow-md flex items-center justify-center gap-2"
                      >
                        <UserPlus className="w-4 h-4" />
                        <span>{loading ? "Generating OTR ID..." : "Complete OTR & Submit Application"}</span>
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
