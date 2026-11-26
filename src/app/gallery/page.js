"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Maximize2, Monitor, Users, Cpu, Sparkles, MapPin } from "lucide-react";
import { campusGalleryItems } from "@/data/galleryData";
import { fetchPublicCms } from "@/lib/cms";
import GallerySubNav from "@/components/GallerySubNav";
import GalleryLightbox from "@/components/GalleryLightbox";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [galleryItems, setGalleryItems] = useState(campusGalleryItems);
  const [categories, setCategories] = useState(["All", "Classroom Labs", "Workshops", "Seminars", "Certification"]);

  useEffect(() => {
    fetchPublicCms("/gallery?section=CAMPUS_LABS").then((cms) => {
      if (!cms) return;
      if (cms.items?.length > 0) {
        setGalleryItems(
          cms.items.map((item) => ({
            src: item.imageUrl,
            title: item.title,
            category: item.categoryName || "Classroom Labs",
            location: item.location || "Gomti Nagar Campus, Lucknow",
            desc: item.description || item.caption || "",
          }))
        );
      }
      if (cms.categories?.length > 0) {
        setCategories(["All", ...cms.categories.map((c) => c.name)]);
      }
    });
  }, []);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const labHighlights = [
    {
      icon: Monitor,
      title: "High-Speed Coding Workstations",
      desc: "Dedicated systems pre-configured with full-stack, cloud, and analytics toolchains.",
    },
    {
      icon: Users,
      title: "Mentor-Led Practical Batches",
      desc: "Small interactive cohorts ensuring 1-on-1 code reviews and debugging support.",
    },
    {
      icon: Cpu,
      title: "Live Production Environment",
      desc: "Hands-on Git workflows, staging servers, and real client deployment practice.",
    },
    {
      icon: Sparkles,
      title: "Hybrid Smart Classrooms",
      desc: "Digital projection, collaborative whiteboards, and recorded lab walkthroughs.",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden border-b border-[#E2E8F0]">
        <Image
          src="/images/slide-1.png"
          alt="Campus & Practical Labs at Barrownz Learning Academy"
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
            <span className="text-blue-100">Gallery</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">Campus & Practical Labs</span>
          </div>
          <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Campus Tour & Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Campus & Practical Labs
          </h1>
          <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
            Explore our modern coding labs, smart classrooms, and hands-on engineering workspaces at Barrownz Learning Academy, Gomti Nagar, Lucknow.
          </p>
        </div>
      </section>

      {/* 2. GALLERY SUB-NAVIGATION */}
      <GallerySubNav />

      {/* 3. LAB INFRASTRUCTURE HIGHLIGHTS */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#EEF6FC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {labHighlights.map((item, idx) => {
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

      {/* 4. FILTERABLE CAMPUS GALLERY GRID */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="inline-block text-[#2E3192] font-bold text-xs uppercase tracking-widest bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0] mb-2">
                Visual Archive
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20243A] leading-snug">
                Life Inside Our Practical Labs
              </h2>
              <p className="text-[#64748B] text-xs sm:text-sm mt-1 max-w-2xl">
                Click any photograph to open the full-resolution lightbox viewer with keyboard navigation.
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
                    <h3 className="font-bold text-[#20243A] text-sm sm:text-base group-hover:text-[#2E3192] transition-colors leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[#64748B] text-xs leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3.5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
                    <span className="inline-flex items-center gap-1 font-medium text-[#0071BC]">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                    <span className="font-semibold text-[#2E3192]">Expand ↗</span>
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

      {/* 6. ADMISSIONS CTA STRIP */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#2E3192]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-white font-bold text-lg sm:text-xl">
              Want to Visit Our Gomti Nagar Practical Labs?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm mt-1">
              Book a free demo session and experience our live project training environment in person.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/gallery/seminars-events"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-5 py-3 rounded-lg text-sm transition whitespace-nowrap"
            >
              Seminars & Events
            </Link>
            <Link
              href="/RegisterForEnrollment"
              className="bg-white hover:bg-[#EEF6FC] text-[#2E3192] font-bold px-6 py-3 rounded-lg text-sm transition whitespace-nowrap shadow"
            >
              Book Campus Demo →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
