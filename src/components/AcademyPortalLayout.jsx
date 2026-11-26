"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  UserCheck,
  Award,
  FileCheck,
  BookOpen,
  Briefcase,
  Handshake,
  ChevronRight,
  PhoneCall
} from "lucide-react";

const portalLinks = [
  { label: "Verify Certificate", href: "/Home/VerifyCertificate", icon: ShieldCheck },
  { label: "Verify Student", href: "/Home/VerifyStudent", icon: UserCheck },
  { label: "Workshop Certificate", href: "/Home/GenerateCertificate", icon: Award },
  { label: "Industrial Visit Certificate", href: "/Home/GenerateCertificateIndustrialVisit", icon: FileCheck },
  { label: "Training Syllabus", href: "/Home/TrainingSyllabus", icon: BookOpen },
  { label: "Placements & Scholars", href: "/Home/BLAPlacement", icon: Briefcase },
  { label: "Institutional MOUs", href: "/Home/OurMOUs", icon: Handshake },
];

export default function AcademyPortalLayout({
  title,
  subtitle,
  badge = "BLA Academy Portal",
  heroImage,
  children
}) {
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#F4F7FC] text-[#20243A] min-h-[75vh]">
      {/* Dashboard Portal Header (Full-Width Hero Image when provided) */}
      {heroImage ? (
        <section className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden border-b border-[#E2E8F0]">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#20243A]/92 via-[#2E3192]/80 to-[#0071BC]/65" />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-blue-200 mb-4 font-medium">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-semibold">{badge}</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  {badge}
                </span>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
                  {title}
                </h1>
                <p className="text-sm sm:text-base text-blue-100 mt-3 max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              </div>
              <a
                href="tel:+919076760009"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#EEF6FC] text-[#2E3192] px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition shadow-lg shrink-0 w-max"
              >
                <PhoneCall className="w-4 h-4 text-[#0071BC]" />
                <span>Support Desk: +91 9076760009</span>
              </a>
            </div>
          </div>
        </section>
      ) : (
        <div className="bg-white border-b border-[#E2E8F0] py-8 sm:py-10">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#64748B] mb-3">
              <Link href="/" className="hover:text-[#0071BC] transition">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#2E3192] font-bold">{badge}</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E3192]">
                  {title}
                </h1>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 max-w-2xl">
                  {subtitle}
                </p>
              </div>
              <a
                href="tel:+919076760009"
                className="inline-flex items-center gap-2 bg-[#EEF6FC] hover:bg-[#0071BC] text-[#2E3192] hover:text-white border border-[#E2E8F0] px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 w-max"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Support Desk: +91 9076760009</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard Grid: Sidebar + Main Workspace */}
      <section className="py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Portal Sidebar Navigation */}
            <aside className="lg:col-span-4 xl:col-span-3 bg-white rounded-2xl border border-[#E2E8F0] p-5 sm:p-6 shadow-md lg:sticky lg:top-24">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#2E3192] px-2 pb-3 mb-3 border-b border-[#E2E8F0]">
                Academy Portals
              </p>
              <nav className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
                {portalLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs sm:text-[13px] font-bold transition whitespace-nowrap shrink-0 ${
                        isActive
                          ? "bg-[#2E3192] text-white shadow-sm"
                          : "bg-[#F4F7FC] text-[#20243A] hover:bg-[#EEF6FC] hover:text-[#0071BC] border border-[#E2E8F0]"
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-[#0071BC]"}`} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </aside>

            {/* Main Portal Content */}
            <div className="lg:col-span-8 xl:col-span-9 min-w-0">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
