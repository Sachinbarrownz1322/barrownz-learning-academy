"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Search, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";
import { apiRequest } from "@/lib/api";

export default function VerifyCertificatePage() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const performVerify = async (serial) => {
    const clean = String(serial || "").trim().toUpperCase();
    if (!clean) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await apiRequest(`/public/verify-certificate/${encodeURIComponent(clean)}`);
      setResult(res);
    } catch (err) {
      setError(err.message || "Certificate record not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");
      if (id) {
        setCertId(id.toUpperCase());
        performVerify(id);
      }
    }
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    performVerify(certId);
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
              placeholder="e.g. BLA-CERT-2026-00001"
              className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#0071BC] bg-[#F4F7FC] font-mono uppercase text-[#20243A]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-[#0071BC] hover:bg-[#005a96] disabled:opacity-60 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>{loading ? "Verifying..." : "Check Certificate ID"}</span>
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {result?.certificate && (
          <div
            className={`mt-6 p-5 rounded-xl border space-y-3 text-xs ${
              result.verified
                ? "bg-[#EEF6FC] border-[#0071BC]/30"
                : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex items-center gap-2 font-extrabold">
              {result.verified ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-[#2E3192]">Verified Authentic BLA Certificate</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-red-700">Certificate Revoked</span>
                </>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-2.5 text-[#20243A] pt-2 border-t border-[#E2E8F0]">
              <div>
                <span className="text-[#64748B] block text-[10px]">Certificate ID</span>
                <span className="font-mono font-bold text-[#0071BC]">{result.certificate.certificateId}</span>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px]">Student Name</span>
                <span className="font-bold">{result.certificate.studentName}</span>
              </div>
              {result.certificate.otrNumber && (
                <div>
                  <span className="text-[#64748B] block text-[10px]">OTR Number</span>
                  <span className="font-mono font-semibold">{result.certificate.otrNumber}</span>
                </div>
              )}
              <div>
                <span className="text-[#64748B] block text-[10px]">Program / Course</span>
                <span className="font-bold">{result.certificate.courseTitle}</span>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px]">Type & Grade</span>
                <span className="font-semibold">
                  {result.certificate.certificateType} • Grade: {result.certificate.gradeOrScore}
                </span>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px]">Issue Date</span>
                <span className="font-semibold">
                  {new Date(result.certificate.issueDate).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            {result.certificate.isRevoked && result.certificate.revocationReason && (
              <p className="text-red-700 font-medium pt-1">
                Reason: {result.certificate.revocationReason}
              </p>
            )}
          </div>
        )}
      </div>
    </AcademyPortalLayout>
  );
}
