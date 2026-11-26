import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Digital Marketing Course in Lucknow with AI Tools | Best Training & Placement 2026",
  description: "Join Lucknow's top-rated Digital Marketing course. Master SEO, Google Ads, Meta Ads, SMM, Content Marketing, and AI-driven growth campaigns.",
};

export default function DigitalMarketingPage() {
  return (
    <CourseDetailTemplate
      title="Advanced Digital Marketing Course with AI Tools"
      subtitle="Become a certified digital growth strategist. Run live paid advertising campaigns, optimize organic Google rankings, and automate marketing with AI."
      category="Digital Marketing"
      duration="3 Months"
      description="Barrownz Learning Academy's Digital Marketing program provides real hands-on budget experience. Students gain live practice in running Google Search and Display ads, managing social media ad funnels, performing technical search engine optimization (SEO), and executing data-driven lead generation strategies."
      highlights={[
        "Live ad spending on Google Ads & Meta Ads",
        "Technical SEO, on-page, and high-impact backlink strategies",
        "Generative AI tools for marketing automation & copy",
        "Google Analytics 4 (GA4) & Search Console certification",
        "Social Media Marketing (Instagram, LinkedIn, YouTube)",
        "Guaranteed internship & agency placement support"
      ]}
      curriculum={[
        { title: "Digital Marketing Fundamentals & Funnels", topics: "Consumer psychology, marketing funnels, branding, and competitor analysis." },
        { title: "Search Engine Optimization (SEO)", topics: "Keyword research, technical audits, on-page optimization, Google algorithms, and link building." },
        { title: "Search Engine Marketing (PPC / Google Ads)", topics: "Search campaigns, Display network, Video YouTube ads, bidding strategies, and conversion tracking." },
        { title: "Social Media Marketing & Meta Ads", topics: "Facebook & Instagram business managers, custom audiences, retargeting, and creative optimization." },
        { title: "Web Analytics & Performance Reporting", topics: "Google Analytics 4, Tag Manager, conversion funnels, ROI tracking, and executive dashboards." },
        { title: "AI Marketing & Freelance Strategy", topics: "ChatGPT marketing prompts, automated email workflows, client pitching, and portfolio creation." },
      ]}
    />
  );
}
