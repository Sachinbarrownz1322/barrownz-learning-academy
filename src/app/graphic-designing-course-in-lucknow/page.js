import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Graphic Designing Course in Lucknow | Visual & Brand Design Training",
  description: "Learn visual communication, branding, UI graphics, and print/digital design workflows at Barrownz Learning Academy, Lucknow.",
};

export default function GraphicDesigningCoursePage() {
  return (
    <CourseDetailTemplate
      title="Graphic Designing Course in Lucknow"
      subtitle="Master visual design, brand identity, social media creatives, and digital layout systems with hands-on studio projects."
      category="Graphics Design"
      duration="2 - 3 Months"
      description="Our Graphic Designing course at Barrownz Learning Academy prepares aspiring designers for agency, corporate branding, and freelance careers through practical creative briefs and portfolio reviews."
      highlights={[
        "Typography, color theory & visual hierarchy",
        "Brand logo & corporate identity systems",
        "Social media & performance ad creatives",
        "Print-ready brochures, banners & packaging",
        "Portfolio building with real design briefs",
        "Placement & freelancing career guidance"
      ]}
      curriculum={[
        { title: "Design Fundamentals", topics: "Grid systems, color psychology, typography pairing, composition, and visual balance." },
        { title: "Vector & Brand Identity", topics: "Logo construction, brand guidelines, iconography, and scalable vector illustrations." },
        { title: "Digital & Print Publishing", topics: "Social media campaign graphics, flyers, brochures, and print color calibration." },
        { title: "Creative Portfolio Capstone", topics: "End-to-end brand kit presentation and critique with senior design mentors." }
      ]}
    />
  );
}
