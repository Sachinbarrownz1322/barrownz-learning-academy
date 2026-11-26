"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gallerySubNav } from "@/data/galleryData";

export default function GallerySubNav() {
  const pathname = usePathname();

  return (
    <div className="bg-[#F4F7FC] border-b border-[#E2E8F0] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center gap-2 py-3.5">
        <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] mr-2">
          Gallery Sections:
        </span>
        {gallerySubNav.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? "bg-[#2E3192] text-white shadow-sm"
                  : "bg-white text-[#20243A] border border-[#E2E8F0] hover:border-[#0071BC] hover:text-[#0071BC]"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
