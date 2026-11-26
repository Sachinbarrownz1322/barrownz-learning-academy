import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Industrial & Apprenticeship Training in Lucknow | 6-Month to 1-Year Program",
  description: "Long-term 6-month industrial training and 1-year IT apprenticeship with real development teams at Barrownz Learning Academy.",
};

export default function ApprenticeshipTrainingPage() {
  return (
    <CourseDetailTemplate
      title="Industrial & Apprenticeship Training in Lucknow"
      subtitle="6-month to 1-year practical workplace immersion with real development teams, GitHub workflows, and monthly appraisal."
      category="Apprenticeship & Industrial Training"
      duration="6 Months - 1 Year"
      description="Our Industrial & Apprenticeship Training program at Barrownz Learning Academy immerses engineering and graduate learners in real software delivery workflows, enterprise client projects, and continuous mentor appraisal."
      highlights={[
        "Long-term practical workplace exposure",
        "Enterprise GitHub & agile sprint workflows",
        "Monthly performance appraisal & code reviews",
        "Full Stack, ASP.NET Core, Java, or Python tracks",
        "Corporate interview preparation & portfolio",
        "100% dedicated placement assistance"
      ]}
      curriculum={[
        { title: "Engineering Onboarding & Git Workflows", topics: "Branching strategies, pull requests, issue tracking, and clean coding standards." },
        { title: "Production Feature Development", topics: "Building scalable frontend modules, backend services, and database migrations." },
        { title: "Testing, Security & Deployment", topics: "Input validation, API testing, CI/CD pipelines, and cloud server maintenance." },
        { title: "Placement & Career Transition", topics: "Technical architecture defense, resume polishing, and corporate hiring drives." }
      ]}
    />
  );
}
