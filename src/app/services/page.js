import React from "react";
import Link from "next/link";
import {
  Code2,
  Layers,
  Smartphone,
  Cloud,
  Palette,
  GraduationCap,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall
} from "lucide-react";

export const metadata = {
  title: "Our IT & Software Development Services | Barrownz Learning Academy",
  description: "Custom Web & SaaS Development, Enterprise ERP, Mobile Apps, Cloud DevOps, UI/UX Design Systems, and Corporate IT Training.",
};

const services = [
  {
    id: "web-development",
    href: "/services/web-development",
    title: "Custom Web & SaaS Development",
    category: "Full Stack Web Engineering",
    icon: Code2,
    desc: "Scalable, high-speed React & Next.js web applications backed by Node.js microservices and high-availability SQL/NoSQL databases.",
    features: [
      "React.js & Next.js App Router frontends with SSR",
      "RESTful & GraphQL APIs with JWT & OAuth2 security",
      "PostgreSQL, MySQL & MongoDB database architecture",
    ],
    techStack: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB"],
    badge: "Flagship Service"
  },
  {
    id: "software-engineering",
    href: "/services/software-engineering",
    title: "Enterprise Software & ERP Solutions",
    category: "Business Process Automation",
    icon: Layers,
    desc: "Custom corporate ERP, CRM, inventory management, and automated workflow systems engineered on ASP.NET Core and Java platforms.",
    features: [
      "Multi-tenant ERP & CRM with granular role permissions",
      "ASP.NET Core & C# high-concurrency backend engines",
      "Audit logging, custom billing & financial workflows",
    ],
    techStack: ["ASP.NET Core", "C#", "MS SQL Server", "Java", "Docker"],
    badge: "Enterprise"
  },
  {
    id: "mobile-apps",
    href: "/services/mobile-cloud-devops",
    title: "Cross-Platform Mobile App Development",
    category: "iOS & Android Solutions",
    icon: Smartphone,
    desc: "Fast, native-like iOS and Android apps built with React Native and Flutter featuring offline-first sync and payment gateways.",
    features: [
      "Single codebase targeting App Store & Google Play",
      "Offline-first sync, push notifications & deep linking",
      "Device camera, GPS, biometrics & payment gateways",
    ],
    techStack: ["React Native", "Flutter", "Firebase", "Redux Toolkit"],
    badge: "Mobile Apps"
  },
  {
    id: "cloud-devops",
    href: "/services/mobile-cloud-devops",
    title: "Cloud Architecture, DevOps & Security",
    category: "Infrastructure & CI/CD",
    icon: Cloud,
    desc: "Automated CI/CD pipelines, Docker & Kubernetes orchestration, and resilient AWS/GCP cloud topologies engineered for high uptime.",
    features: [
      "Automated CI/CD pipelines with GitHub Actions",
      "Docker containerization & Kubernetes orchestration",
      "SSL/TLS hardening, automated backups & monitoring",
    ],
    techStack: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Nginx"],
    badge: "Cloud & DevOps"
  },
  {
    id: "ui-ux-design",
    href: "/services/ui-ux-design",
    title: "UI/UX & Digital Product Design",
    category: "User Experience Strategy",
    icon: Palette,
    desc: "Modern, accessible interfaces combining user journey mapping, interactive Figma prototypes, and scalable UI design systems.",
    features: [
      "User research, wireframing & interactive Figma prototypes",
      "Reusable design tokens & component libraries",
      "WCAG accessibility compliance across all viewports",
    ],
    techStack: ["Figma", "Adobe XD", "Design Systems", "UX Audit"],
    badge: "Product Design"
  },
  {
    id: "corporate-training",
    href: "/services/corporate-training",
    title: "Corporate IT Training & Institutional FDPs",
    category: "Enterprise Workforce Upskilling",
    icon: GraduationCap,
    desc: "Tailored corporate upskilling bootcamps and university Faculty Development Programs (FDPs) led by senior engineering mentors.",
    features: [
      "Curriculum tailored to your organization's tech stack",
      "Hands-on coding labs with live architecture reviews",
      "ISO 9001:2015 recognized training certifications",
    ],
    techStack: ["Corporate FDP", "Custom Tech Labs", "Code Reviews"],
    badge: "Workforce Upskilling"
  }
];

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#F4F7FC] text-[#20243A]">
      {/* 1. EDITORIAL HERO */}
      <section className="bg-white border-b border-[#E2E8F0] py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#64748B] mb-4">
            <Link href="/" className="hover:text-[#0071BC] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#2E3192] font-bold">Our Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF6FC] border border-[#E2E8F0] text-xs font-bold text-[#2E3192]">
                <Sparkles className="w-3.5 h-3.5 text-[#0071BC]" />
                <span>Barrownz Engineering &amp; IT Solutions</span>
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E3192] tracking-tight">
                Our Development &amp; IT Services
              </h1>
              <p className="text-sm sm:text-base text-[#64748B] max-w-2xl leading-relaxed">
                From custom Next.js web applications and enterprise ERP software to mobile apps, cloud DevOps, UI/UX design, and corporate IT training.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact-us"
                className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition shadow-sm inline-flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-14 sm:py-18">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <article
                  key={srv.id}
                  id={srv.id}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#0071BC] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center border border-[#E2E8F0]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#2E3192] text-white">
                        {srv.badge}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">
                      {srv.category}
                    </span>
                    <h2 className="text-lg font-extrabold text-[#2E3192] group-hover:text-[#0071BC] transition mt-1">
                      <Link href={srv.href}>{srv.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#64748B] mt-2.5 leading-relaxed">
                      {srv.desc}
                    </p>

                    <ul className="space-y-2 mt-4 pt-4 border-t border-[#E2E8F0]">
                      {srv.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-[#20243A]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0071BC] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {srv.techStack.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#F4F7FC] text-[#2E3192] border border-[#E2E8F0]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                    <Link
                      href={srv.href}
                      className="text-xs font-bold text-[#0071BC] hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="py-12 bg-gradient-to-r from-[#2E3192] to-[#0071BC] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold">Need Custom Software or Corporate Training?</h2>
            <p className="text-xs sm:text-sm text-[#EEF6FC] mt-1">
              Talk directly with our engineering leads for architecture review and project estimation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact-us"
              className="bg-white hover:bg-[#EEF6FC] text-[#2E3192] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition shadow-md"
            >
              Request Consultation →
            </Link>
            <a
              href="tel:+919076760009"
              className="bg-[#20243A]/40 hover:bg-[#20243A]/60 text-white border border-white/25 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition inline-flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+91 9076760009</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
