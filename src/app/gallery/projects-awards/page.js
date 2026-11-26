"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Maximize2, Award, Code2, ShieldCheck, Layers } from "lucide-react";
import { projectsAwardsPhotos, featuredStudentProjects } from "@/data/galleryData";
import GallerySubNav from "@/components/GallerySubNav";
import GalleryLightbox from "@/components/GalleryLightbox";

export default function ProjectsAwardsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = ["All", "Awards & Felicitation", "Project Demos", "Accreditations"];

  const filteredPhotos = projectsAwardsPhotos.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const recognitions = [
    {
      icon: ShieldCheck,
      title: "ISO 9001:2015 Certified",
      desc: "Quality-assured technical education and standardized practical lab evaluation.",
    },
    {
      icon: Award,
      title: "MSME & Skill India",
      desc: "Government-recognized training credentials respected by domestic & MNC recruiters.",
    },
    {
      icon: Code2,
      title: "Production Capstones",
      desc: "Every scholar ships deployed full-stack, data, or enterprise software projects.",
    },
    {
      icon: Layers,
      title: "Verified Credentials",
      desc: "Online certificate & student verification portals backed by unique serial IDs.",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden border-b border-[#E2E8F0]">
        <Image
          src="/images/BLA_2_.webp"
          alt="Student Projects & Awards at Barrownz Learning Academy"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#20243A]/92 via-[#2E3192]/80 to-[#0071BC]/65" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-200 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">Student Projects & Awards</span>
          </div>
          <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Capstones & Recognitions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Student Projects & Awards
          </h1>
          <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
            Showcasing production-grade capstone applications built by our trainees alongside convocation awards and accredited certifications.
          </p>
        </div>
      </section>

      {/* 2. GALLERY SUB-NAVIGATION */}
      <GallerySubNav />

      {/* 3. ACCREDITATION & AWARD HIGHLIGHTS */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#EEF6FC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {recognitions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF6FC] text-[#2E3192] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#20243A] leading-snug">{item.title}</h3>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED STUDENT CAPSTONE PROJECTS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F4F7FC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8 sm:mb-10">
            <span className="inline-block text-[#2E3192] font-bold text-xs uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#E2E8F0] mb-2">
              Live Project Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20243A] leading-snug">
              Featured Student Capstone Builds
            </h2>
            <p className="text-[#64748B] text-xs sm:text-sm mt-1 max-w-2xl">
              Real-world software systems engineered and deployed by trainees during their industrial and summer training tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredStudentProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#0071BC]/40 transition-all flex flex-col"
              >
                <div className="relative h-48 w-full bg-[#20243A] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-[#2E3192] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow">
                    {project.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#20243A] leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0071BC] mt-1.5">
                      {project.stack}
                    </p>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                    <span className="font-medium text-[#64748B]">Mentor Reviewed</span>
                    <Link
                      href="/RegisterForEnrollment"
                      className="font-bold text-[#2E3192] hover:text-[#0071BC] transition"
                    >
                      Build Similar →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AWARDS & FELICITATION PHOTO GALLERY */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="inline-block text-[#2E3192] font-bold text-xs uppercase tracking-widest bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0] mb-2">
                Awards & Certifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20243A] leading-snug">
                Felicitation & Demo Day Highlights
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedIndex(null);
                  }}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-[#2E3192] text-white shadow-md shadow-blue-900/15"
                      : "bg-[#F4F7FC] text-[#64748B] border border-[#E2E8F0] hover:border-[#0071BC] hover:text-[#2E3192]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredPhotos.map((item, idx) => (
              <div
                key={`${item.src}-${idx}`}
                onClick={() => setSelectedIndex(idx)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#0071BC]/50 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-[#F4F7FC]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#2E3192]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-white text-[#2E3192] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#2E3192] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#20243A] text-sm sm:text-base group-hover:text-[#2E3192] transition-colors leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[#64748B] text-xs leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3.5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
                    <span className="font-medium text-[#0071BC]">Barrownz Learning Academy</span>
                    <span className="font-semibold text-[#2E3192]">Expand ↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LIGHTBOX */}
      <GalleryLightbox
        items={filteredPhotos}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelectIndex={setSelectedIndex}
      />

      {/* 7. CTA STRIP */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#2E3192]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-white font-bold text-lg sm:text-xl">
              Build Your Portfolio With Real Production Projects
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm mt-1">
              Verify existing credentials or enroll in our next hands-on project batch.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/Home/VerifyCertificate"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-5 py-3 rounded-lg text-sm transition whitespace-nowrap"
            >
              Verify Certificate
            </Link>
            <Link
              href="/RegisterForEnrollment"
              className="bg-white hover:bg-[#EEF6FC] text-[#2E3192] font-bold px-6 py-3 rounded-lg text-sm transition whitespace-nowrap shadow"
            >
              Enroll Now →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
