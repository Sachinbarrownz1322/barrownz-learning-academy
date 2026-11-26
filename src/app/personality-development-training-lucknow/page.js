import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Personality Development Training in Lucknow | Communication & Interview Prep",
  description: "Build confident communication, corporate etiquette, resume presentation, and HR interview skills at Barrownz Learning Academy.",
};

export default function PersonalityDevelopmentPage() {
  return (
    <CourseDetailTemplate
      title="Personality Development & Soft Skills Training"
      subtitle="Enhance spoken communication, corporate etiquette, group discussion skills, and HR interview confidence."
      category="Personality Development"
      duration="4 - 8 Weeks"
      description="Our Personality Development program at Barrownz Learning Academy equips students and job seekers with professional communication, body language, resume articulation, and mock HR interview readiness."
      highlights={[
        "Spoken fluency & active listening practice",
        "Corporate etiquette & workplace communication",
        "Group discussion & presentation confidence",
        "ATS-friendly resume & LinkedIn profile review",
        "Mock HR & behavioral interview sessions",
        "Dedicated placement cell mentorship"
      ]}
      curriculum={[
        { title: "Communication & Confidence", topics: "Voice modulation, clarity, non-verbal body language, and overcoming stage hesitation." },
        { title: "Corporate & Team Etiquette", topics: "Professional email writing, meeting participation, time management, and leadership habits." },
        { title: "Group Discussions & Presentations", topics: "Structured argument framing, public speaking drills, and slide storytelling." },
        { title: "Interview Readiness", topics: "Personal pitch crafting, common HR questions, and 1-on-1 mock interview feedback." }
      ]}
    />
  );
}
