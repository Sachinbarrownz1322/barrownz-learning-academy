import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "SEO Training in Lucknow | Technical, On-Page & Off-Page SEO",
  description: "Master Search Engine Optimization (SEO), keyword research, technical audits, Google Search Console, and link building at Barrownz Learning Academy.",
};

export default function SeoTrainingPage() {
  return (
    <CourseDetailTemplate
      title="Search Engine Optimization (SEO) Training in Lucknow"
      subtitle="Rank websites organically on Google with keyword intelligence, technical SEO audits, on-page optimization, and analytics."
      category="Digital Marketing • SEO"
      duration="6 Weeks - 2 Months"
      description="Our specialized SEO training program covers search engine algorithms, keyword intent mapping, on-page structure, Core Web Vitals, schema markup, backlink outreach, and Google Search Console / GA4 reporting."
      highlights={[
        "Search Intent & Keyword Research",
        "On-Page SEO, Meta Tags & Content Structure",
        "Technical SEO, Sitemaps & Core Web Vitals",
        "Schema Markup & Local SEO (Google Business)",
        "Ethical Link Building & Competitor Audits",
        "Google Search Console & GA4 Reporting"
      ]}
      curriculum={[
        { title: "Search Engine Fundamentals & Keywords", topics: "Crawling, indexing, ranking signals, long-tail keyword research, and competitor gap analysis." },
        { title: "On-Page & Content Optimization", topics: "Title/meta optimization, heading hierarchy, internal linking, and SEO copywriting." },
        { title: "Technical SEO & Local Search", topics: "Robots.txt, XML sitemaps, canonical tags, schema JSON-LD, and Google Business Profile." },
        { title: "Off-Page SEO & Live Audit Project", topics: "Authority backlinks, Search Console diagnostics, and full website SEO audit presentation." }
      ]}
    />
  );
}
