import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Social Media Marketing (SMM / SMO) Training in Lucknow | Barrownz Learning Academy",
  description: "Learn Instagram, Facebook, LinkedIn, and YouTube growth strategies, content calendars, and paid social campaigns at Barrownz Learning Academy.",
};

export default function SmoTrainingPage() {
  return (
    <CourseDetailTemplate
      title="Social Media Marketing (SMM / SMO) Training in Lucknow"
      subtitle="Build high-engagement brand communities across Instagram, Facebook, LinkedIn, and YouTube with data-backed content strategies."
      category="Digital Marketing • SMM / SMO"
      duration="6 Weeks - 2 Months"
      description="Master organic Social Media Optimization (SMO) and paid Social Media Marketing (SMM) — from content calendars, Reels/short-form hooks, and brand positioning to Meta Business Suite analytics and audience targeting."
      highlights={[
        "Instagram, Facebook, LinkedIn & YouTube Growth",
        "Content Calendar & Viral Hook Frameworks",
        "Meta Business Suite & Creator Studio",
        "Audience Targeting & Retargeting Funnels",
        "Engagement Metrics, Reach & ROI Tracking",
        "Live Brand Campaign Case Study"
      ]}
      curriculum={[
        { title: "Social Media Strategy & Branding", topics: "Platform algorithms, audience personas, profile optimization, and brand voice." },
        { title: "Content Creation & Reels Workflows", topics: "Short-form video hooks, carousel storytelling, hashtag clusters, and scheduling." },
        { title: "Paid Social & Community Management", topics: "Boosting vs Ads Manager, custom audiences, lead forms, and comment moderation." },
        { title: "Analytics & Campaign Portfolio", topics: "CTR, engagement rate, conversion attribution, and live campaign presentation." }
      ]}
    />
  );
}
