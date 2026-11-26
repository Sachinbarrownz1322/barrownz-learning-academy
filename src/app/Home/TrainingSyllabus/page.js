"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Download,
  ExternalLink,
  Eye,
  FileText,
  X
} from "lucide-react";
import AcademyPortalLayout from "@/components/AcademyPortalLayout";

const syllabi = [
  {
    title: "Full Stack MERN Engineering",
    duration: "6 Months",
    modules: "React, Node, Express, MongoDB, Redux, JWT",
    href: "/mern-full-stack-development-course",
    pdf: "/syllabi/mern-full-stack-syllabus.pdf"
  },
  {
    title: "Digital Marketing & AI Growth",
    duration: "3 Months",
    modules: "SEO, Google Ads, Meta Ads, GA4, Funnel Design",
    href: "/digital-marketing-course-in-lucknow",
    pdf: "/syllabi/digital-marketing-syllabus.pdf"
  },
  {
    title: "Python & Machine Learning Foundations",
    duration: "4 Months",
    modules: "Python OOP, Django, REST API, Pandas, Scikit",
    href: "/python-development-course-in-lucknow",
    pdf: "/syllabi/python-ml-syllabus.pdf"
  },
  {
    title: "Data Analytics Master Track",
    duration: "4 Months",
    modules: "Advanced Excel, SQL Queries, Power BI, Tableau",
    href: "/data-analytics-course-lucknow",
    pdf: "/syllabi/data-analytics-syllabus.pdf"
  },
  {
    title: "ASP.NET Enterprise Architecture",
    duration: "4 Months",
    modules: "C#, .NET Core, Web APIs, MS SQL Server, Linq",
    href: "/asp-dot-net-development-course-in-lucknow",
    pdf: "/syllabi/aspnet-enterprise-syllabus.pdf"
  },
  {
    title: "Java Full Stack & Spring Boot",
    duration: "4 - 6 Months",
    modules: "Core Java, Spring Boot, Hibernate JPA, MySQL, React",
    href: "/java-development-course-in-lucknow",
    pdf: "/syllabi/java-full-stack-syllabus.pdf"
  },
];

export default function TrainingSyllabusPage() {
  const [previewDoc, setPreviewDoc] = useState(null);

  return (
    <AcademyPortalLayout
      title="Training Curriculums & Syllabus"
      subtitle="Preview syllabus PDFs directly in your browser or download them for offline reading."
      badge="Curriculum Directory"
    >
      <div className="space-y-4">
        {syllabi.map((s, idx) => (
          <div
            key={idx}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:border-[#0071BC] transition flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center shrink-0 mt-0.5 border border-[#E2E8F0]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-[#2E3192]">{s.title}</h2>
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#64748B] mt-1">
                  <span className="font-bold text-[#0071BC] bg-[#EEF6FC] px-2.5 py-0.5 rounded">
                    Duration: {s.duration}
                  </span>
                  <span>Modules: {s.modules}</span>
                </div>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0071BC] hover:underline mt-2"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>View Course Page</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* PDF Preview, New Tab & Download Actions */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setPreviewDoc(s)}
                className="bg-[#EEF6FC] hover:bg-[#dcecfb] text-[#2E3192] border border-[#E2E8F0] text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-[#0071BC]" />
                <span>View PDF</span>
              </button>

              <a
                href={s.pdf}
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-[#F4F7FC] text-[#20243A] border border-[#E2E8F0] text-xs font-bold px-3.5 py-2.5 rounded-xl transition flex items-center gap-1.5"
                title="Open PDF in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#0071BC]" />
                <span>Open</span>
              </a>

              <a
                href={s.pdf}
                download
                className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Inline PDF Viewer Modal */}
      {previewDoc && (
        <div
          className="fixed inset-0 z-50 bg-[#20243A]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`PDF Preview: ${previewDoc.title}`}
        >
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-[#E2E8F0] bg-[#F4F7FC] flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-extrabold text-[#2E3192] truncate">
                  {previewDoc.title} — Syllabus PDF
                </h3>
                <p className="text-[11px] text-[#64748B]">
                  Duration: {previewDoc.duration}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={previewDoc.pdf}
                  download
                  className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewDoc(null)}
                  className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#20243A] hover:text-[#2E3192] hover:bg-[#EEF6FC] transition"
                  aria-label="Close PDF preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Frame */}
            <div className="flex-1 bg-[#F4F7FC]">
              <iframe
                src={previewDoc.pdf}
                title={previewDoc.title}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </AcademyPortalLayout>
  );
}
