import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  CheckCircle2,
  ArrowRight,
  Building2,
  GraduationCap,
  PhoneCall
} from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";

export const metadata = {
  title: "Our MOUs & Corporate Ties | Barrownz Learning Academy",
  description: "Institutional and corporate MOUs signed by Barrownz Learning Academy to empower students.",
};

export default function OurMOUsPage() {
  const mous = [
    {
      title: "Academic Exchange & Lab Partnerships",
      partner: "Technical Universities & Engineering Colleges",
      image: "/images/slide-5.png",
      desc: "Delivering credit-approved summer internships, hands-on workshop modules, and specialized training programs on campus.",
      linkText: "Request Campus Workshop",
      href: "/contact-us"
    },
    {
      title: "Direct Corporate Placement Drives",
      partner: "Regional IT Startups & Software Exporters",
      image: "/images/slide-3.jpg",
      desc: "Direct recruitment channels, early talent scouting, and pre-placement interviews for top-performing scholars.",
      linkText: "View Placement Records",
      href: "/Home/BLAPlacement"
    },
    {
      title: "Skill Development CSR Initiatives",
      partner: "Youth Empowerment Foundations & NGOs",
      image: "/images/Certificate_NGO_img.png",
      desc: "Providing merit-based scholarships, digital literacy, and job-oriented coding tracks to underprivileged youths.",
      linkText: "Explore Accreditations",
      href: "/about-us"
    },
    {
      title: "Industrial Apprenticeship Training",
      partner: "Industrial Fabrication & Engineering Firms",
      image: "/images/slide-2.png",
      desc: "CAD/CAM mechanical drafting, live equipment inspection, and practical manufacturing software training.",
      linkText: "Explore Apprenticeship",
      href: "/apprenticeship-training-in-lucknow"
    },
  ];

  const partnerColleges = [
    "Integral University",
    "Babasaheb Bhimrao Ambedkar University Satellite Campus",
    "School of Management Science",
    "Shri Ramswaroop Memorial College of Engineering & Management",
    "Jawahar Lal Nehru Polytechnic",
    "S.R. Institute of Management & Technology",
    "City Group of Institution",
  ];

  return (
    <AcademyPortalLayout
      title="Memorandums of Understanding (MOUs)"
      subtitle="Formal institutional and corporate agreements designed to expand student internships, workshops, and hiring opportunities."
      badge="Academic & Corporate Alliances"
    >
      <div className="space-y-8">
        {/* Featured MOU Visual Showcase */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 relative h-60 sm:h-72 bg-[#EEF6FC]">
              <Image
                src="/images/Certificate_NGO_img.png"
                alt="Barrownz Learning Academy MOU Signing & Accreditation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#0071BC] bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0]">
                Institutional &amp; Industry Collaboration
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#2E3192]">
                Bridging Campuses With Industry-Ready Engineering
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Through formal MOUs with universities, polytechnics, and IT employers, Barrownz Learning Academy conducts on-campus technical seminars, summer industrial cohorts, and direct placement drives.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/contact-us"
                  className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition inline-flex items-center gap-1.5"
                >
                  <span>Initiate Institutional Tie-Up</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/Home/TrainingSyllabus"
                  className="bg-[#EEF6FC] hover:bg-[#dcecfb] text-[#2E3192] border border-[#E2E8F0] text-xs font-bold px-4 py-2.5 rounded-xl transition"
                >
                  View Training Syllabus
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 MOU Cards with Real Images & Working Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mous.map((m, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:border-[#0071BC] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EEF6FC]">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20243A]/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#2E3192] text-white shadow-sm">
                    <Handshake className="w-3 h-3" />
                    <span>Active MOU</span>
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-extrabold text-[#2E3192] group-hover:text-[#0071BC] transition">
                    {m.title}
                  </h3>
                  <p className="text-xs font-bold text-[#0071BC] mt-1">{m.partner}</p>
                  <p className="text-xs text-[#64748B] mt-2.5 leading-relaxed">{m.desc}</p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-[#E2E8F0] bg-[#F4F7FC] flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-[#2E3192]">
                  <CheckCircle2 className="w-4 h-4 text-[#0071BC]" />
                  <span>Active Agreement</span>
                </span>
                <Link href={m.href} className="text-[#0071BC] hover:underline flex items-center gap-1">
                  <span>{m.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Academic Seminar & College Outreach Partners */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">
                Campus Outreach &amp; Seminars
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#2E3192] mt-0.5">
                Partner Universities &amp; Technical Institutes
              </h3>
            </div>
            <Link href="/about-us" className="text-xs font-bold text-[#0071BC] hover:underline flex items-center gap-1">
              <span>Read Full Seminar Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {partnerColleges.map((college, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F4F7FC] border border-[#E2E8F0] text-xs font-bold text-[#20243A]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>{college}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#2E3192] text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-extrabold flex items-center justify-center sm:justify-start gap-2">
              <Building2 className="w-5 h-5 text-[#EEF6FC]" />
              <span>Interested in Partnering with Barrownz?</span>
            </h3>
            <p className="text-xs text-[#EEF6FC]">
              Connect with our institutional coordinator for placement drives, workshops, or campus lab training.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#EEF6FC] text-[#2E3192] text-xs font-bold px-5 py-3 rounded-xl transition"
            >
              <span>Initiate Institutional Tie-Up</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919076760009"
              className="inline-flex items-center gap-1.5 bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold px-4 py-3 rounded-xl transition"
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
