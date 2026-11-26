import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  FileCheck,
  GraduationCap,
  Users
} from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";
import { placementsList, hiringLogos } from "@/data/placementsData";

export const metadata = {
  title: "Placement Cell Overview | Barrownz Learning Academy",
  description: "100% Placement assistance, mock interviews, resume engineering, and corporate hiring drives at Barrownz Learning Academy.",
};

export default function PlacementOverviewPage() {
  const readinessSteps = [
    {
      step: "01",
      icon: FileCheck,
      title: "Resume & GitHub Portfolio Audit",
      desc: "ATS-friendly technical resumes highlighting live client projects, Git commits, and deployed applications."
    },
    {
      step: "02",
      icon: GraduationCap,
      title: "Technical Coding & System Drills",
      desc: "Structured practice across DSA, SQL queries, REST APIs, and framework architecture questions."
    },
    {
      step: "03",
      icon: Users,
      title: "Mock HR & Panel Interviews",
      desc: "1-on-1 evaluation rounds with senior software architects and HR mentors with actionable feedback."
    },
    {
      step: "04",
      icon: Briefcase,
      title: "Campus & Corporate Hiring Drives",
      desc: "Direct interview scheduling with IT exporters, startups, and multinational hiring partners."
    }
  ];

  const featuredScholars = placementsList.slice(0, 3);

  return (
    <AcademyPortalLayout
      title="Placement Cell Overview"
      subtitle="100% Placement Commitment — structured technical readiness, mock interviews, and direct corporate hiring drives."
      badge="Placement Cell"
      heroImage="/images/slide-4.jpg"
    >
      <div className="space-y-8">
        {/* Quick Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { val: "100%", label: "Placement Commitment" },
            { val: "Amazon, HCL...", label: "Top Tech Employers" },
            { val: "18+ Recruits", label: "Featured in Current Batch" },
            { val: "Lucknow & Metros", label: "Multi-City Job Offers" },
          ].map((stat, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-[#E2E8F0] text-center shadow-sm">
              <div className="text-lg sm:text-xl font-extrabold text-[#2E3192]">{stat.val}</div>
              <div className="text-[11px] sm:text-xs text-[#64748B] font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 4-Stage Placement Readiness Pipeline */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">
                Career Acceleration Process
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#2E3192] mt-0.5">
                How BLA Prepares You for Placement Drives
              </h2>
            </div>
            <Link
              href="/Home/BLAPlacement/recent-placements"
              className="text-xs font-bold text-[#0071BC] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View All 18+ Scholars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {readinessSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="p-5 rounded-xl bg-[#F4F7FC] border border-[#E2E8F0] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center border border-[#E2E8F0]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-white bg-[#2E3192] px-2.5 py-1 rounded-md">
                      Stage {item.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-[#2E3192]">{item.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Recent Placements Preview */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">
                Placed Scholars Highlight
              </span>
              <h2 className="text-xl font-extrabold text-[#2E3192] mt-0.5">
                Recent Placements &amp; Hired Scholars
              </h2>
            </div>
            <Link
              href="/Home/BLAPlacement/recent-placements"
              className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition inline-flex items-center gap-1.5 shrink-0 w-max"
            >
              <span>Explore All Placed Scholars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredScholars.map((st, i) => (
              <article key={i} className="rounded-2xl border border-[#E2E8F0] overflow-hidden bg-[#F4F7FC] flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full bg-[#EEF6FC]">
                  <Image
                    src={st.image}
                    alt={st.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold bg-[#2E3192] text-white px-2 py-0.5 rounded">
                    {st.badge}
                  </span>
                </div>
                <div className="p-4 space-y-1.5 bg-white">
                  <h3 className="text-sm font-extrabold text-[#2E3192]">{st.name}</h3>
                  <p className="text-xs text-[#64748B] font-medium">{st.role}</p>
                  <p className="text-xs font-bold text-[#0071BC] flex items-center gap-1 pt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{st.company}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Hiring Partners Preview */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-extrabold text-[#2E3192]">Corporate Hiring Partners</h3>
              <p className="text-xs text-[#64748B]">Our learners work across multinational IT enterprises and regional tech startups.</p>
            </div>
            <Link
              href="/Home/BLAPlacement/hiring-partners"
              className="text-xs font-bold text-[#0071BC] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View All Hiring Partners</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
            {hiringLogos.map((logo, idx) => (
              <div key={idx} className="relative h-10 w-28 opacity-85 hover:opacity-100 transition">
                <Image src={logo.img} alt={logo.name} fill className="object-contain" sizes="112px" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#2E3192] text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-[#EEF6FC] shrink-0 hidden sm:block" />
            <p className="text-xs sm:text-sm font-semibold max-w-xl leading-relaxed">
              Get a call back from our Admissions Counselling team to choose the right job-oriented track for your placement goals.
            </p>
          </div>
          <Link
            href="/RegisterForEnrollment"
            className="shrink-0 bg-white hover:bg-[#EEF6FC] text-[#2E3192] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Get Free Counselling</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </AcademyPortalLayout>
  );
}
