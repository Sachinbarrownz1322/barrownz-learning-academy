"use client";

import React, { useState } from "react";
import { Award, Info, Search } from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";

export default function GenerateCertificatePage() {
  const [phone, setPhone] = useState("");
  const [ready, setReady] = useState(false);

  return (
    <AcademyPortalLayout
      title="Workshop Certificate Download"
      subtitle="Retrieve e-certificates for college workshops and technical seminars."
      badge="Workshop Portal"
    >
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm max-w-2xl">
        <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-[#E2E8F0]">
          <div className="w-12 h-12 rounded-xl bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#2E3192]">Participant Verification</h2>
            <p className="text-xs text-[#64748B]">Enter registered mobile number used during workshop attendance</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setReady(true);
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="workshop-phone" className="block text-xs font-bold text-[#20243A] mb-1.5">
              Registered Mobile Number *
            </label>
            <input
              id="workshop-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9076760009"
              className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#0071BC] bg-[#F4F7FC] text-[#20243A]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>Check Workshop Certificate</span>
          </button>
        </form>

        {ready && (
          <div className="mt-6 p-5 rounded-xl bg-[#EEF6FC] border border-[#E2E8F0] space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#2E3192] font-extrabold">
              <Info className="w-4 h-4 text-[#0071BC] shrink-0" />
              <span>Frontend Preview Only (Certificate Generation API Pending)</span>
            </div>
            <p className="text-[#64748B] leading-relaxed">
              PDF generation and attendance lookup require backend API integration. For your workshop e-certificate copy, please contact{" "}
              <a href="tel:+919076760009" className="font-bold text-[#0071BC] underline">+91 9076760009</a>.
            </p>
          </div>
        )}
      </div>
    </AcademyPortalLayout>
  );
}
