import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const allServices = [
  { label: "Custom Web & SaaS Development", href: "/services/web-development" },
  { label: "Enterprise Software & ERP Solutions", href: "/services/software-engineering" },
  { label: "Mobile Apps & Cloud DevOps", href: "/services/mobile-cloud-devops" },
  { label: "UI/UX & Product Design Systems", href: "/services/ui-ux-design" },
  { label: "Corporate IT Training & FDPs", href: "/services/corporate-training" },
];

export default function ServiceDetailTemplate({
  title,
  category,
  badge,
  desc,
  features = [],
  techStack = [],
  currentHref
}) {
  const deliveryStages = [
    { step: "01", title: "Discovery & Architecture", detail: "Requirements mapping, system design, database schema, and API contract specification." },
    { step: "02", title: "Agile Engineering", detail: "Clean modular implementation with Git code reviews and weekly milestone demos." },
    { step: "03", title: "QA & Security Hardening", detail: "Validation checks, performance profiling, role-based access control, and cross-device testing." },
    { step: "04", title: "Deployment & SLA Support", detail: "Zero-downtime cloud rollout, CI/CD automation, and ongoing production monitoring." },
  ];

  return (
    <div className="w-full bg-[#F4F7FC] text-[#20243A]">
      {/* 1. EDITORIAL HERO */}
      <section className="bg-white border-b border-[#E2E8F0] py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#64748B] mb-5 flex-wrap">
            <Link href="/" className="hover:text-[#0071BC] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-[#0071BC] transition">Our Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#2E3192] font-bold">{category}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF6FC] border border-[#E2E8F0] text-xs font-bold text-[#2E3192]">
                <Sparkles className="w-3.5 h-3.5 text-[#0071BC]" />
                <span>{badge} • {category}</span>
              </span>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E3192] leading-tight">
                {title}
              </h1>

              <p className="text-sm sm:text-base text-[#64748B] max-w-2xl leading-relaxed">
                {desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#EEF6FC] text-[#2E3192] border border-[#E2E8F0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#F4F7FC] p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Project Consultation</span>
                  <span className="text-[11px] font-bold text-[#0071BC] bg-white border border-[#E2E8F0] px-2.5 py-0.5 rounded-full">
                    SLA Ready
                  </span>
                </div>
                <h2 className="text-lg font-extrabold text-[#2E3192]">Discuss Your Project</h2>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Connect with our senior engineering architects for scope estimation, architecture planning, and timelines.
                </p>
                <div className="space-y-2.5 pt-1">
                  <Link
                    href="/contact-us"
                    className="w-full flex items-center justify-center gap-2 bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl transition shadow-sm"
                  >
                    <span>Request Project Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+919076760009"
                    className="w-full flex items-center justify-center gap-2 bg-white border border-[#E2E8F0] hover:border-[#0071BC] text-[#2E3192] text-xs font-bold py-3 rounded-xl transition"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#0071BC]" />
                    <span>+91 9076760009</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES & OTHER SERVICES SIDEBAR */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 space-y-8">
              {/* Deliverables */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">
                    Core Deliverables
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#2E3192] mt-1">
                    Engineering Capabilities &amp; Standards
                  </h2>
                </div>

                <div className="space-y-3">
                  {features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[#F4F7FC] border border-[#E2E8F0]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0071BC] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#20243A] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Process */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0071BC]">
                    Execution Workflow
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#2E3192] mt-1">
                    How Barrownz Delivers Production Software
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {deliveryStages.map((stage) => (
                    <div key={stage.step} className="p-5 rounded-xl bg-[#F4F7FC] border border-[#E2E8F0] space-y-2">
                      <span className="inline-block text-xs font-black text-white bg-[#2E3192] px-2.5 py-1 rounded-md">
                        {stage.step}
                      </span>
                      <h3 className="text-sm font-extrabold text-[#2E3192]">{stage.title}</h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">{stage.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar: Explore Other Services */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3">
                <h3 className="text-sm font-extrabold text-[#2E3192] pb-3 border-b border-[#E2E8F0] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#0071BC]" />
                  <span>Explore All Services</span>
                </h3>
                <nav className="space-y-2">
                  {allServices.map((srv) => {
                    const active = currentHref === srv.href;
                    return (
                      <Link
                        key={srv.href}
                        href={srv.href}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition ${
                          active
                            ? "bg-[#2E3192] text-white shadow-sm"
                            : "bg-[#F4F7FC] text-[#20243A] hover:bg-[#EEF6FC] hover:text-[#0071BC] border border-[#E2E8F0]"
                        }`}
                      >
                        <span>{srv.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="bg-[#2E3192] text-white p-6 rounded-2xl shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold">Enterprise SLA &amp; Security</h4>
                <p className="text-xs text-[#EEF6FC] leading-relaxed">
                  Clean code ownership, documented APIs, SSL/TLS security, and dedicated post-launch support.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline pt-1"
                >
                  <Rocket className="w-3.5 h-3.5" />
                  <span>All Services Overview →</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
