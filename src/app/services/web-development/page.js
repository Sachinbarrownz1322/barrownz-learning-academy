import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata = {
  title: "Custom Web & SaaS Development | Barrownz Learning Academy",
  description: "Scalable React, Next.js, Node.js, and cloud database web application development services.",
};

export default function WebDevelopmentServicePage() {
  return (
    <ServiceDetailTemplate
      title="Custom Web & SaaS Application Development"
      category="Full Stack Web Engineering"
      badge="Flagship Service"
      currentHref="/services/web-development"
      desc="We build scalable, high-speed, enterprise-grade web applications utilizing modern component architectures. From single-page React/Next.js portals to complex microservice backends, our development practices follow clean code principles and high security benchmarks."
      features={[
        "React.js & Next.js App Router frontends with server-side rendering (SSR)",
        "RESTful APIs and GraphQL microservices with Node.js / Express",
        "Secure JWT authentication, OAuth2, and role-based access control",
        "PostgreSQL, MySQL, and MongoDB high-availability database setups",
        "Performance optimization with sub-second page loads and Lighthouse 95+ score",
      ]}
      techStack={["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"]}
    />
  );
}
