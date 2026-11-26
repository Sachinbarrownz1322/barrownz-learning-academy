"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, Mail, LogIn, ShieldCheck, AlertCircle, ArrowRight, GraduationCap, CheckCircle2 } from "lucide-react";
import { apiRequest, PANELS_BASE_URL } from "@/lib/api";

export default function LoginPage() {
  const [mode, setMode] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successPopup, setSuccessPopup] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const qMode = params.get("mode");
      setMode(qMode === "portal" ? "portal" : "student");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const role = res?.user?.roleName;
      const targetUrl =
        role === "SUPER_ADMIN" || role === "ADMIN"
          ? `${PANELS_BASE_URL}/admin`
          : role === "TRAINER"
          ? `${PANELS_BASE_URL}/trainer`
          : `${PANELS_BASE_URL}/student`;

      setSuccessPopup({
        name: res?.user?.name || "User",
        role,
      });

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1100);
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const isPortal = mode === "portal";

  return (
    <div className="min-h-[80vh] bg-[#F4F7FC] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-md p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-[#EEF6FC] text-[#2E3192] flex items-center justify-center mx-auto border border-[#E2E8F0]">
            {isPortal ? <ShieldCheck className="w-6 h-6" /> : <GraduationCap className="w-6 h-6 text-[#0071BC]" />}
          </div>
          <h1 className="font-display text-2xl font-extrabold text-[#2E3192]">
            {isPortal ? "BLA Login" : "Student Login"}
          </h1>
          <p className="text-xs text-[#64748B]">
            {isPortal
              ? "Authorized faculty and administrative staff sign in"
              : "Sign in to access your Student Dashboard, Assessments & Certificates"}
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="login-email" className="block text-xs font-bold text-[#20243A] mb-1.5">
              Registered Email *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3.5" />
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isPortal ? "staff@barrownzlearning.com" : "student@example.com"}
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="login-password" className="block text-xs font-bold text-[#20243A] mb-1.5">
              Password *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3.5" />
              <input
                id="login-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] focus:bg-white focus:outline-none focus:border-[#0071BC]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full disabled:opacity-60 text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl transition shadow-sm flex items-center justify-center gap-2 ${
              isPortal ? "bg-[#2E3192] hover:bg-[#232675]" : "bg-[#0071BC] hover:bg-[#005a96]"
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>{loading ? "Signing in..." : isPortal ? "Sign In to BLA Portal" : "Sign In to Student Portal"}</span>
          </button>
        </form>

        {/* Registration option ONLY for Students, NEVER for BLA Login (Admin/Trainer) */}
        {!isPortal && (
          <div className="pt-4 border-t border-[#E2E8F0] text-center text-xs text-[#64748B] space-y-2">
            <p>
              New student at Barrownz Learning Academy?{" "}
              <Link href="/RegisterForEnrollment" className="text-[#0071BC] font-bold hover:underline inline-flex items-center gap-1">
                <span>Complete OTR Registration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </p>
          </div>
        )}
      </div>

      {/* SweetAlert-style Login Success Popup */}
      {successPopup && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-7 text-center space-y-3 shadow-2xl border border-[#E2E8F0]">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h2 className="text-xl font-extrabold text-[#2E3192]">Login Successful!</h2>
            <p className="text-xs text-[#64748B]">
              Welcome back, <strong>{successPopup.name}</strong>. Redirecting to your portal...
            </p>
            <div className="w-6 h-6 border-2 border-[#0071BC] border-t-transparent rounded-full animate-spin mx-auto mt-2" />
          </div>
        </div>
      )}
    </div>
  );
}
