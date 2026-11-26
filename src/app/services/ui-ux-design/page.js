import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata = {
  title: "UI/UX & Product Design Systems | Barrownz Learning Academy",
  description: "User research, wireframing, Figma prototypes, and scalable UI design systems.",
};

export default function UiUxDesignServicePage() {
  return (
    <ServiceDetailTemplate
      title="UI/UX & Digital Product Design Systems"
      category="User Experience Strategy"
      badge="Product Design"
      currentHref="/services/ui-ux-design"
      desc="Crafting modern, accessible, and high-conversion user interfaces. Our design process combines thorough user journey mapping, wireframing, interactive Figma prototypes, and modular design system creation that engineering teams can build accurately."
      features={[
        "In-depth user research, persona creation, and empathy mapping",
        "Low-fidelity wireframing and high-fidelity pixel-perfect screen designs",
        "Interactive prototypes simulating real user gestures and micro-interactions",
        "Comprehensive Design Systems with reusable UI components and design tokens",
        "WCAG accessibility compliance ensuring inclusivity across all devices",
      ]}
      techStack={["Figma", "Adobe XD", "Design Systems", "Prototyping", "UX Audit"]}
    />
  );
}
