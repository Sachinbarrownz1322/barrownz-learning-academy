"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Maximize2, Calendar, MapPin, Mic2, Building2, Users2, Briefcase } from "lucide-react";
import { seminarsEventsItems } from "@/data/galleryData";
import GallerySubNav from "@/components/GallerySubNav";
import GalleryLightbox from "@/components/GalleryLightbox";

export default function SeminarsEventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = ["All", "University Seminars", "Corporate Workshops", "Mock Drives", "Orientation"];

  const filteredItems = seminarsEventsItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const eventPillars = [
    {
      icon: Mic2,
      stat: "50+ Seminars",
      title: "University Tech Outreach",
      desc: "Hands-on career guidance & emerging tech workshops across engineering colleges.",
    },
    {
      icon: Building2,
      stat: "Corporate Connect",
      title: "Industry Architecture Talks",
      desc: "Live sessions led by senior architects on real-world software systems & cloud.",
    },
    {
      icon: Briefcase,
      stat: "Mock Drives",
      title: "HR & Technical Interviews",
      desc: "Simulated hiring panels preparing students for MNC and startup placements.",
    },
    {
      icon: Users2,
      stat: "Batch Inductions",
      title: "Structured Orientations",
      desc: "Clear roadmap briefings covering Git workflows, coding sprints, and capstone goals.",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden border-b border-[#E2E8F0]">
        <Image
          src="/images/slide-3.jpg"
          alt="Seminars & Corporate Events at Barrownz Learning Academy"
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
            <span className="text-white font-semibold">Seminars & Corporate Events</span>
          </div>
          <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outreach & Industry Events
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Seminars & Corporate Events
          </h1>
          <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
            Highlights from campus technology seminars, corporate workshops, faculty development programs, and placement mock interview drives.
          </p>
        </div>
      </section>

      {/* 2. GALLERY SUB-NAVIGATION */}
      <GallerySubNav />

      {/* 3. EVENT PILLARS */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#EEF6FC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {eventPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF6FC] text-[#2E3192] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0071BC] bg-[#EEF6FC] px-2.5 py-1 rounded-full">
                    {pillar.stat}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#20243A]">{pillar.title}</h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. EVENTS GALLERY GRID */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="inline-block text-[#2E3192] font-bold text-xs uppercase tracking-widest bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0] mb-2">
                Event Moments
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20243A] leading-snug">
                Campus Outreach & Industry Sessions
              </h2>
              <p className="text-[#64748B] text-xs sm:text-sm mt-1 max-w-2xl">
                Filter by event type or click any card to inspect the session details in full screen.
              </p>
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
            {filteredItems.map((item, idx) => (
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
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-[#0071BC] mb-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-bold text-[#20243A] text-sm sm:text-base group-hover:text-[#2E3192] transition-colors leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[#64748B] text-xs leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3.5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
                    <span className="inline-flex items-center gap-1 font-medium text-[#20243A]">
                      <MapPin className="w-3 h-3 text-[#0071BC]" />
                      {item.location}
                    </span>
                    <span className="font-semibold text-[#2E3192]">View ↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LIGHTBOX */}
      <GalleryLightbox
        items={filteredItems}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelectIndex={setSelectedIndex}
      />

      {/* 6. CTA STRIP */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#2E3192]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-white font-bold text-lg sm:text-xl">
              Invite Barrownz Learning Academy for a Campus Seminar
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm mt-1">
              Partner with our engineering mentors for technical workshops, FDPs, and placement readiness bootcamps.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/gallery/projects-awards"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-5 py-3 rounded-lg text-sm transition whitespace-nowrap"
            >
              Student Projects & Awards
            </Link>
            <Link
              href="/contact-us"
              className="bg-white hover:bg-[#EEF6FC] text-[#2E3192] font-bold px-6 py-3 rounded-lg text-sm transition whitespace-nowrap shadow"
            >
              Request Campus Workshop →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
