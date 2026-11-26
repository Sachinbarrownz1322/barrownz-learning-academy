"use client";

import React, { useState } from "react";
import { UserCheck, Search, Info } from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";

export default function VerifyStudentPage() {
  const [code, setCode] = useState("");
  const [found, setFound] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    setFound({
      code: code.trim().toUpperCase(),
    });
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
              placeholder="e.g. STU-BLA-9281"
              className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#0071BC] bg-[#F4F7FC] font-mono uppercase text-[#20243A]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>Check Student Record</span>
          </button>
        </form>

        {found && (
          <div className="mt-6 p-5 rounded-xl bg-[#EEF6FC] border border-[#E2E8F0] space-y-2.5 text-xs">
            <div className="flex items-center gap-2 text-[#2E3192] font-extrabold">
              <Info className="w-4 h-4 text-[#0071BC] shrink-0" />
              <span>Frontend Preview Only (Live Student Database Pending)</span>
            </div>
            <div className="text-[#20243A] space-y-1.5 pt-2 border-t border-[#E2E8F0]">
              <div><strong>Entered Code:</strong> <span className="font-mono">{found.code}</span></div>
              <div className="text-[#64748B]">
                Live student database lookup is not connected in this static frontend yet. For official verification, contact{" "}
                <a href="tel:+919076760009" className="font-bold text-[#0071BC] underline">+91 9076760009</a>.
              </div>
            </div>
          </div>
        )}
      </div>
    </AcademyPortalLayout>
  );
}
