"use client";

import React, { useState } from "react";
import { UserCheck, Search, CheckCircle2, AlertCircle } from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";
import { apiRequest } from "@/lib/api";

export default function VerifyStudentPage() {
  const [code, setCode] = useState("");
  const [found, setFound] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    setLoading(true);
    setError("");
    setFound(null);
    try {
      const res = await apiRequest(`/public/verify-student/${encodeURIComponent(code.trim().toUpperCase())}`);
      setFound(res.student);
    } catch (err) {
      setError(err.message || "Student record not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AcademyPortalLayout
      title="Student Verification Portal"
      subtitle="Verify student enrollment code and academy registration status."
      badge="Student Portal"
    >
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm max-w-2xl">
        <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-[#E2E8F0]">
          <div className="w-12 h-12 rounded-xl bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center flex-shrink-0">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#2E3192]">Student Roll / Enrollment Code</h2>
            <p className="text-xs text-[#64748B]">Enter the unique student ID issued at admission</p>
          </div>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label htmlFor="student-code" className="block text-xs font-bold text-[#20243A] mb-1.5">
              Student Enrollment Code *
            </label>
            <input
              id="student-code"
              type="text"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g. BLA202600001"
              className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#0071BC] bg-[#F4F7FC] font-mono uppercase text-[#20243A]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-[#0071BC] hover:bg-[#005a96] disabled:opacity-60 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>{loading ? "Verifying..." : "Check Student Record"}</span>
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {found && (
          <div className="mt-6 p-5 rounded-xl bg-[#EEF6FC] border border-[#E2E8F0] space-y-2.5 text-xs">
            <div className="flex items-center gap-2 text-[#2E3192] font-extrabold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verified Student OTR Record</span>
            </div>
            <div className="text-[#20243A] space-y-1.5 pt-2 border-t border-[#E2E8F0]">
              <div><strong>OTR Number:</strong> <span className="font-mono font-bold text-[#2E3192]">{found.otrNumber}</span></div>
              <div><strong>Student Name:</strong> {found.fullName}</div>
              <div><strong>Training Track:</strong> {found.trainingTrack}</div>
              <div><strong>Batch Mode:</strong> {found.preferredBatchMode}</div>
              <div><strong>OTR Status:</strong> <span className="font-bold text-emerald-700">{found.status}</span></div>
            </div>
          </div>
        )}
      </div>
    </AcademyPortalLayout>
  );
}
