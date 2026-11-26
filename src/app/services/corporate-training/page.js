import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata = {
  title: "Corporate IT Training & Institutional FDPs | Barrownz Learning Academy",
  description: "Customized corporate upskilling bootcamps and Faculty Development Programs (FDPs).",
};

export default function CorporateTrainingServicePage() {
  return (
    <ServiceDetailTemplate
      title="Corporate IT Training & Institutional FDPs"
      category="Enterprise Workforce Upskilling"
      badge="Workforce Upskilling"
      currentHref="/services/corporate-training"
      desc="Empowering tech teams, university faculty, and student cohorts with cutting-edge industry skills. We conduct intensive corporate upskilling bootcamps and Faculty Development Programs (FDPs) delivered by hands-on engineering mentors."
      features={[
        "Curriculum tailored to your organization's specific technical tech stack",
        "Practical live-coding labs with actual enterprise project reviews",
        "Interactive Q&A, code refactoring sessions, and architectural mentorship",
        "Pre-training assessments and post-training benchmark evaluations",
        "Government-recognized certifications under ISO 9001:2015 standards",
      ]}
      techStack={["Corporate FDP", "Custom Tech Labs", "Hands-on Code Reviews", "Assessments"]}
    />
  );
}
