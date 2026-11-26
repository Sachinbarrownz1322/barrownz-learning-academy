import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, MapPin, PhoneCall } from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";
import { hiringLogos, regionalPartners } from "@/data/placementsData";

export const metadata = {
  title: "Corporate Hiring Partners | Barrownz Learning Academy",
  description: "Explore multinational and regional IT companies recruiting trained scholars from Barrownz Learning Academy.",
};

export default function HiringPartnersPage() {
  return (
    <AcademyPortalLayout
      title="Corporate Hiring Partners"
      subtitle="From Lucknow IT hubs to multinational tech enterprises — explore organizations where BLA scholars build their careers."
      badge="Recruiter Network"
      heroImage="/images/slide-2.png"
    >
      <div className="space-y-8">
        {/* Global & Enterprise Logos Grid */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">
              Enterprise &amp; MNC Recruiters
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#2E3192] mt-0.5">
              Global Companies Where Our Learners Work
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {hiringLogos.map((partner, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F4F7FC] border border-[#E2E8F0] hover:border-[#0071BC] transition flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="relative h-10 w-28">
                  <Image src={partner.img} alt={partner.name} fill className="object-contain" sizes="112px" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#2E3192]">{partner.name}</p>
                  <p className="text-[10px] text-[#64748B]">{partner.sector}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional & Direct Campus Hiring Partners */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">
                Direct Hiring Channels
              </span>
              <h2 className="text-xl font-extrabold text-[#2E3192] mt-0.5">
                Active Corporate &amp; Startup Partners
              </h2>
            </div>
            <Link
              href="/Home/BLAPlacement/recent-placements"
              className="text-xs font-bold text-[#0071BC] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>See Hired Scholars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regionalPartners.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#F4F7FC] border border-[#E2E8F0] hover:border-[#0071BC] transition flex items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-[#2E3192] flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0071BC] shrink-0" />
                    <span>{p.company}</span>
                  </h3>
                  <p className="text-xs text-[#64748B] font-medium">{p.roles}</p>
                  <p className="text-[11px] text-[#0071BC] font-bold flex items-center gap-1 pt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{p.location}</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#2E3192] bg-[#EEF6FC] px-2.5 py-1 rounded-md shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-[#0071BC]" />
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hire From BLA CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#2E3192] text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-extrabold">Looking to Hire Trained Developers &amp; Marketers?</h3>
            <p className="text-xs text-[#EEF6FC]">
              Partner with Barrownz Learning Academy for zero-fee campus recruitment drives and pre-screened technical talent.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact-us"
              className="bg-white hover:bg-[#EEF6FC] text-[#2E3192] font-bold px-5 py-3 rounded-xl text-xs transition inline-flex items-center gap-1.5"
            >
              <span>Partner for Hiring</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="tel:+919076760009"
              className="bg-[#0071BC] hover:bg-[#005a96] text-white font-bold px-4 py-3 rounded-xl text-xs transition inline-flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+91 9076760009</span>
            </a>
          </div>
        </div>
      </div>
    </AcademyPortalLayout>
  );
}
