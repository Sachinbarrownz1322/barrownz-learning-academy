"use client";

import React, { useState } from "react";
import { FileCheck, Info, Search } from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";

export default function IndustrialVisitPage() {
  const [studentId, setStudentId] = useState("");
  const [downloadReady, setDownloadReady] = useState(false);

  return (
    <AcademyPortalLayout
      title="Industrial Visit Certificate Portal"
      subtitle="Retrieve official certificates for company technical tours and industry immersion."
      badge="Industrial Visit Portal"
    >
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm max-w-2xl">
        <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-[#E2E8F0]">
          <div className="w-12 h-12 rounded-xl bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center flex-shrink-0">
            <FileCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#2E3192]">Industrial Visit Verification</h2>
            <p className="text-xs text-[#64748B]">Enter your student ID or email used during visit registration</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDownloadReady(true);
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="visit-id" className="block text-xs font-bold text-[#20243A] mb-1.5">
              Student ID / Email Address *
            </label>
            <input
              id="visit-id"
              type="text"
              required
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Student ID or registered email"
              className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#0071BC] bg-[#F4F7FC] text-[#20243A]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>Check Industrial Visit Record</span>
          </button>
        </form>

        {downloadReady && (
          <div className="mt-6 p-5 rounded-xl bg-[#EEF6FC] border border-[#E2E8F0] space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#2E3192] font-extrabold">
              <Info className="w-4 h-4 text-[#0071BC] shrink-0" />
              <span>Frontend Preview Only (Certificate Generation API Pending)</span>
            </div>
            <p className="text-[#64748B] leading-relaxed">
              Industrial visit certificate lookup requires backend API integration. Please call{" "}
              <a href="tel:+919076760009" className="font-bold text-[#0071BC] underline">+91 9076760009</a>{" "}
              for your official certificate copy.
            </p>
          </div>
        )}
      </div>
    </AcademyPortalLayout>
  );
}
