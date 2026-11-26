import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Barrownz Learning Academy",
};

export default function NotFound() {
  return (
    <div className="w-full bg-[#F5F8FC] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#E5EAF2] shadow-sm space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-[#EAF4FC] text-[#0071BC] flex items-center justify-center mx-auto">
            <Compass className="w-7 h-7" />
          </div>
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#0071BC] bg-[#EAF4FC] px-3 py-1 rounded-full">
            404 — Page Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            This Page Could Not Be Located
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The link you followed may have moved or been updated. Explore our active courses, training programs, or return to the homepage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/" className="bla-btn-primary text-xs sm:text-sm px-5 py-2.5">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link href="/RegisterForEnrollment" className="bla-btn-secondary text-xs sm:text-sm px-5 py-2.5">
              <span>Register for Training</span>
            </Link>
            <a
              href="tel:+919076760009"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0071BC] hover:underline px-3 py-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+91 9076760009</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
