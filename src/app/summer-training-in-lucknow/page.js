import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Summer Training in Lucknow 2026 | Live Projects + Job Assistance",
  description: "Summer Industrial Training for B.Tech, BCA, MCA, and Diploma students in Lucknow with Barrownz Learning Academy.",
};

export default function SummerTrainingPage() {
  return (
    <CourseDetailTemplate
      title="Summer Industrial Training Program (2026)"
      subtitle="4 to 6 weeks of rigorous hands-on corporate project training designed specifically for college engineering and IT students."
      category="Industrial Training"
      duration="4 - 6 Weeks / 3 Months"
      description="Our summer training program aligns with technical university requirements (AKTU, BTEUP, LU, etc.) to give students hands-on exposure to live production projects. You receive an authentic project completion certificate, mentor recommendation letter, and placement evaluation."
      highlights={[
        "University-compliant 4 to 6 weeks project curriculum",
        "Choice of Web Dev, Python AI, Android, or CAD streams",
        "ISO recognized project certificate with unique verification code",
        "Real software deployment to live servers",
        "Interview preparation and pre-placement offer (PPO) opportunities"
      ]}
      curriculum={[
        { title: "Orientation & Environment Setup", topics: "Git version control, IDE setup, Linux terminals, project team allocation." },
        { title: "Core Technology Deep-Dive", topics: "Selected stack specialization (Full Stack, Python, or Digital Marketing)." },
        { title: "Live Client Project Development", topics: "Agile sprints, architecture design, coding, testing, and continuous deployment." },
        { title: "Project Defense & Certification", topics: "Live project demonstration, code review, certificate issuance, and interview assessment." },
      ]}
    />
  );
}
