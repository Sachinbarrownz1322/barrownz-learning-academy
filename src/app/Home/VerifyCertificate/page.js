"use client";

import React, { useState } from "react";
import { ShieldCheck, Search, Info } from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";

export default function VerifyCertificatePage() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certId.trim()) return;
    setResult({
      id: certId.trim().toUpperCase(),
    });
  };

  return (
    <AcademyPortalLayout
      title="Certificate Verification Portal"
      subtitle="Validate physical and e-certificates issued by Barrownz Learning Academy."
      badge="ISO 9001:2015 Accreditation"
    >
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm max-w-2xl">
        <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-[#E2E8F0]">
          <div className="w-12 h-12 rounded-xl bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#2E3192]">Enter Certificate ID</h2>
            <p className="text-xs text-[#64748B]">Printed on the bottom-left corner of your official certificate</p>
          </div>
        </div>

        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <label htmlFor="cert-id" className="block text-xs font-bold text-[#20243A] mb-1.5">
              Certificate Serial Number *
            </label>
            <input
              id="cert-id"
              type="text"
              required
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              placeholder="e.g. BLA-2026-8841"
              className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#0071BC] bg-[#F4F7FC] font-mono uppercase text-[#20243A]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>Check Certificate ID</span>
          </button>
        </form>

        {result && (
          <div className="mt-6 p-5 rounded-xl bg-[#EEF6FC] border border-[#E2E8F0] space-y-2.5 text-xs">
            <div className="flex items-center gap-2 text-[#2E3192] font-extrabold">
              <Info className="w-4 h-4 text-[#0071BC] shrink-0" />
              <span>Frontend Preview Only (Live Ledger Lookup Pending)</span>
            </div>
            <div className="text-[#20243A] space-y-1.5 pt-2 border-t border-[#E2E8F0]">
              <div><strong>Entered ID:</strong> <span className="font-mono">{result.id}</span></div>
              <div className="text-[#64748B]">
                Live database verification is not connected in this static frontend yet. For official verification, contact{" "}
                <a href="tel:+919076760009" className="font-bold text-[#0071BC] underline">+91 9076760009</a>.
              </div>
            </div>
          </div>
        )}
      </div>
    </AcademyPortalLayout>
  );
}
