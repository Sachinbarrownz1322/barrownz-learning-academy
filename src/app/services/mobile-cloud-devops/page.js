import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata = {
  title: "Mobile Apps & Cloud DevOps | Barrownz Learning Academy",
  description: "Cross-platform iOS/Android apps with React Native & Flutter plus AWS, Docker, and CI/CD DevOps.",
};

export default function MobileCloudDevopsServicePage() {
  return (
    <ServiceDetailTemplate
      title="Mobile Apps & Cloud DevOps Infrastructure"
      category="iOS, Android & Cloud CI/CD"
      badge="Mobile & Cloud"
      currentHref="/services/mobile-cloud-devops"
      desc="Delivering intuitive cross-platform iOS and Android apps alongside resilient, auto-scaling cloud topologies across AWS and Google Cloud with automated Docker & CI/CD pipelines."
      features={[
        "Single codebase React Native & Flutter architecture for iOS and Android",
        "Offline-first sync architectures, push notifications & in-app payments",
        "Automated CI/CD build, test, and deployment workflows with GitHub Actions",
        "Containerization and orchestration with Docker, Kubernetes & Terraform",
        "SSL/TLS hardening, automated database backups, and 24/7 monitoring",
      ]}
      techStack={["React Native", "Flutter", "AWS", "Docker", "Kubernetes", "GitHub Actions"]}
    />
  );
}
