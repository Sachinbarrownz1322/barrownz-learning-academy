import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Pay Per Click (PPC) & Google Ads Training in Lucknow | Barrownz Learning Academy",
  description: "Master Google Search Ads, Display, YouTube Ads, Meta Ads, conversion tracking, and ROAS optimization at Barrownz Learning Academy.",
};

export default function PpcTrainingPage() {
  return (
    <CourseDetailTemplate
      title="Pay Per Click (PPC) & Performance Ads Training in Lucknow"
      subtitle="Launch high-ROI Google Ads and Meta Ads campaigns with keyword bidding, landing page optimization, and conversion tracking."
      category="Digital Marketing • PPC"
      duration="6 Weeks - 2 Months"
      description="Our Performance Marketing & PPC course trains you on Google Search, Display, Shopping, and Meta Ads Manager — covering bidding strategies, quality score optimization, Google Tag Manager, and ROAS reporting."
      highlights={[
        "Google Search, Display & YouTube Ads",
        "Meta Ads Manager & Pixel Tracking",
        "Keyword Match Types & Negative Keywords",
        "Ad Copywriting, Extensions & Quality Score",
        "Google Tag Manager & Conversion Tracking",
        "Budget Pacing, CPA & ROAS Optimization"
      ]}
      curriculum={[
        { title: "PPC Fundamentals & Account Structure", topics: "Campaigns, ad groups, bidding models (CPC, CPA, ROAS), and quality score mechanics." },
        { title: "Google Search & Display Campaigns", topics: "Keyword match types, responsive search ads, extensions, and remarketing lists." },
        { title: "Meta Ads & Conversion Tracking", topics: "Meta Pixel, Google Tag Manager events, custom/lookalike audiences, and A/B testing." },
        { title: "Optimization & Live Ad Audit", topics: "Search term reports, reducing wasted ad spend, and performance dashboarding." }
      ]}
    />
  );
}
