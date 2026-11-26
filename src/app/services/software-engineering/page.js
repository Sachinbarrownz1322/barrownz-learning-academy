import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata = {
  title: "Enterprise Software & ERP Solutions | Barrownz Learning Academy",
  description: "Custom ERP, CRM, inventory management, and workflow automation on ASP.NET Core and Java.",
};

export default function SoftwareEngineeringServicePage() {
  return (
    <ServiceDetailTemplate
      title="Enterprise Software Engineering & ERP Solutions"
      category="Business Process Automation"
      badge="Enterprise"
      currentHref="/services/software-engineering"
      desc="Custom corporate software tailored to specific industry workflows. We engineer robust ERP, CRM, inventory management, and automated workflow systems on reliable ASP.NET Core and Java platforms built to support high-concurrency business operations."
      features={[
        "Multi-tenant ERP architecture with granular permission control",
        "ASP.NET Core & C# high-performance backend engines",
        "Automated financial reconciliation and customized billing systems",
        "Real-time event-driven messaging with RabbitMQ and WebSockets",
        "Comprehensive audit logging, regulatory compliance & data encryption",
      ]}
      techStack={["ASP.NET Core", "C#", "MS SQL Server", "Java", "Docker", "Redis"]}
    />
  );
}
