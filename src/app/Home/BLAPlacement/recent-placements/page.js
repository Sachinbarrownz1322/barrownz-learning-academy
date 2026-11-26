"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Search,
  ArrowRight
} from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";
import { placementsList, placementRoles } from "@/data/placementsData";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function RecentPlacementsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const filteredPlacements = placementsList.filter((p) => {
    const matchesRole = selectedRole === "All" || p.category === selectedRole;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <AcademyPortalLayout
      title="Recent Placements & Hired Scholars"
      subtitle="Explore our 18+ placed scholars across HCL Tech, Amazon, Techvizo, Barrownz Pearl Web, and leading regional companies."
      badge="Placed Scholars"
      heroImage="/images/slide-5.png"
    >
      <div className="space-y-6">
        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {placementRoles.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setSelectedRole(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedRole === r
                    ? "bg-[#2E3192] text-white shadow-sm"
                    : "bg-[#F4F7FC] text-[#20243A] hover:bg-[#EEF6FC] hover:text-[#0071BC] border border-[#E2E8F0]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search student, role or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#E2E8F0] bg-[#F4F7FC] text-[#20243A] focus:outline-none focus:border-[#0071BC] transition"
            />
          </div>
        </div>

        {/* Placement Cards Grid (Top Image / Bottom Data) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPlacements.map((student, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0071BC] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EEF6FC]">
                  {student.image ? (
                    <>
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#20243A]/70 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#EEF6FC] via-white to-[#F4F7FC] flex flex-col items-center justify-center p-4">
                      <div className="w-20 h-20 rounded-2xl bg-[#2E3192] text-white font-black text-2xl flex items-center justify-center shadow-md">
                        {getInitials(student.name)}
                      </div>
                    </div>
                  )}

                  <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm bg-[#2E3192] text-white">
                    BLA Placed
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-[#2E3192] bg-white/95 px-2.5 py-1 rounded-md shadow-sm">
                    {student.badge}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#2E3192] group-hover:text-[#0071BC] transition truncate">
                    {student.name}
                  </h3>

                  <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                    <div className="flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-[#0071BC] shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Designation</span>
                        <p className="text-xs font-bold text-[#20243A] truncate">{student.role}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Building2 className="w-4 h-4 text-[#2E3192] shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Company / Recruiter</span>
                        <p className="text-xs font-bold text-[#20243A] truncate">{student.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3.5 border-t border-[#E2E8F0] bg-[#F4F7FC] flex items-center justify-between text-[11px]">
                <span className="text-[#0071BC] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Placement</span>
                </span>
                <span className="text-[#64748B] font-medium">BLA Cohort</span>
              </div>
            </article>
          ))}
        </div>

        {filteredPlacements.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#E2E8F0]">
            <p className="text-[#64748B] font-semibold text-sm">No placement records found matching your filter.</p>
            <button
              type="button"
              onClick={() => { setSelectedRole("All"); setSearchTerm(""); }}
              className="mt-3 text-xs font-bold text-[#0071BC] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        <div className="p-6 rounded-2xl bg-[#2E3192] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-semibold">Want to prepare for your next software engineering or digital marketing offer?</p>
          <Link
            href="/RegisterForEnrollment"
            className="shrink-0 bg-white hover:bg-[#EEF6FC] text-[#2E3192] font-bold px-5 py-2.5 rounded-xl text-xs transition inline-flex items-center gap-1.5"
          >
            <span>Register for Training</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </AcademyPortalLayout>
  );
}
