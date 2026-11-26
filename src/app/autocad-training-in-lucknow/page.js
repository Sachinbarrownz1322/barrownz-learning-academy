import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "CAD & AutoCAD Training in Lucknow | SolidWorks, Catia, Revit, StaadPro",
  description: "Industry-oriented CAD drafting and 3D modeling training in AutoCAD, SolidWorks, Catia, Revit, and StaadPro at Barrownz Learning Academy.",
};

export default function AutocadTrainingPage() {
  return (
    <CourseDetailTemplate
      title="AutoCAD & Engineering CAD Training in Lucknow"
      subtitle="Hands-on 2D drafting, 3D modeling, and structural design training across AutoCAD, SolidWorks, Catia, Revit, and StaadPro."
      category="CAD Training"
      duration="6 Weeks - 3 Months"
      description="Designed for Civil, Mechanical, and Architecture students, our CAD Training program at Barrownz Learning Academy provides practical lab sessions in AutoCAD, SolidWorks, Catia, Revit, and StaadPro."
      highlights={[
        "AutoCAD 2D drafting & 3D isometric modeling",
        "SolidWorks part modeling & assembly design",
        "Catia surface & mechanical engineering workflows",
        "Revit BIM architecture & floor planning",
        "StaadPro structural analysis & load modeling",
        "ISO 9001:2015 certified project documentation"
      ]}
      curriculum={[
        { title: "AutoCAD 2D & 3D Drafting", topics: "Coordinate systems, layers, dimensioning, blocks, plotting, and 3D solid modeling." },
        { title: "Mechanical CAD (SolidWorks & Catia)", topics: "Sketch constraints, parametric part design, assemblies, sheet metal, and drafting sheets." },
        { title: "Civil & BIM Design (Revit & StaadPro)", topics: "Building Information Modeling, structural framing, load combinations, and analysis reports." },
        { title: "Industry Capstone Blueprint", topics: "Complete real-world architectural or mechanical drawing portfolio with mentor review." }
      ]}
    />
  );
}
