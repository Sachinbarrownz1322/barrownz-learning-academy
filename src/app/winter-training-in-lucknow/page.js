import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Winter Training in Lucknow | 4-Week Fast-Track IT Bootcamp",
  description: "Fast-track 4-week intensive winter technology training with live coding assignments and mentor feedback at Barrownz Learning Academy.",
};

export default function WinterTrainingPage() {
  return (
    <CourseDetailTemplate
      title="Winter Training Bootcamp in Lucknow"
      subtitle="Fast-track 4-week intensive technology sessions with live coding assignments and senior mentor feedback."
      category="Winter Training"
      duration="4 Weeks"
      description="Designed for B.Tech, BCA, MCA, and Diploma students during winter academic breaks, our Winter Training Bootcamp delivers focused practical coding across Web Development, Python, Java, ASP.NET Core, and Data Analytics."
      highlights={[
        "4-week intensive daily practical lab sessions",
        "Choice of Web Dev, Python, Java, or Data Analytics",
        "Live coding assignments & GitHub repository setup",
        "Senior software architect feedback & code reviews",
        "ISO 9001:2015 certified project completion",
        "Interview readiness & placement cell guidance"
      ]}
      curriculum={[
        { title: "Core Technology Intensive", topics: "Rapid hands-on ramp-up in your chosen track (Web, Python, Java, or Data Analytics)." },
        { title: "API & Database Integration", topics: "Connecting frontend interfaces with REST APIs and SQL/NoSQL data stores." },
        { title: "Mini Production Project", topics: "Building, testing, and deploying a working winter project on GitHub." },
        { title: "Assessment & Certification", topics: "Code walkthrough evaluation, mock interview feedback, and winter training certificate." }
      ]}
    />
  );
}
