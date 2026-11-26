import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Video Editing & Post-Production Course in Lucknow | Barrownz Learning Academy",
  description: "Learn timeline editing, color grading, motion graphics, and social video production at Barrownz Learning Academy, Lucknow.",
};

export default function VideoEditingPage() {
  return (
    <CourseDetailTemplate
      title="Video Editing & Post-Production Course"
      subtitle="Master storytelling, multi-track timeline editing, audio syncing, color grading, and YouTube/Reels production."
      category="Video Editing"
      duration="2 - 3 Months"
      description="Our Video Editing program at Barrownz Learning Academy trains creators and editors to produce crisp commercial videos, educational reels, and YouTube documentaries using industry-standard post-production workflows."
      highlights={[
        "Multi-track timeline cutting & pacing",
        "Color correction & cinematic LUT grading",
        "Audio cleanup, mixing & sound design",
        "Motion titles, lower thirds & transitions",
        "Short-form Reels & long-form YouTube exports",
        "Portfolio reel & agency placement support"
      ]}
      curriculum={[
        { title: "Editing Foundations & Storytelling", topics: "Project organization, frame rates, sequence setup, rough cuts, and rhythm." },
        { title: "Visual Effects & Motion Titles", topics: "Keyframing, transitions, green-screen keying, and clean lower-third graphics." },
        { title: "Color Grading & Audio Mixing", topics: "Lumetri scopes, skin-tone balancing, noise reduction, and background score ducking." },
        { title: "Exporting & Showreel Project", topics: "Codec optimization for web/social platforms and final edited showreel." }
      ]}
    />
  );
}
