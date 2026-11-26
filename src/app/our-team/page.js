import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Code2,
  GraduationCap,
  Laptop,
  PhoneCall,
  Sparkles,
  Users
} from "lucide-react";

export const metadata = {
  title: "Our Mentors & Team | Barrownz Learning Academy",
  description: "Meet the senior developers, tech leads, and academic directors at Barrownz Learning Academy.",
};

export default function OurTeamPage() {
  const leadership = {
    name: "Pushpendra Dwivedi",
    role: "Managing Director & Chief Mentor",
    image: "/images/pdsir1.png",
    bio: "Visionary industry leader dedicated to empowering students with real-world technical skills and life-changing career breakthroughs.",
    badge: "Leadership Spotlight",
    focus: [
      "Industry-Aligned Practical Curriculum",
      "1-on-1 Career & Placement Mentorship",
      "Live Production Engineering Standards",
    ],
  };

  const faculty = [
    {
      name: "Senior Software Architect",
      role: "Lead Full Stack & Cloud Mentor",
      image: "/images/slide-2.png",
      bio: "12+ years of enterprise experience in microservices architecture, Node.js, React, Docker, and AWS cloud infrastructures.",
      badge: "Architecture",
      skills: ["Node.js & Express", "React.js", "Docker & AWS"]
    },
    {
      name: "Performance Marketing Lead",
      role: "Digital Marketing & Growth Strategist",
      image: "/images/slide-3.jpg",
      bio: "Spearheaded multimillion-rupee ad campaigns across Google Ads, Meta Ads, programmatics, and performance search funnels.",
      badge: "Growth & ROI",
      skills: ["Technical SEO", "Google & Meta Ads", "Analytics & Funnels"]
    },
    {
      name: "Senior Data Scientist",
      role: "Data Analytics & Machine Learning Head",
      image: "/images/slide-4.jpg",
      bio: "Specialist in statistical data modeling, PostgreSQL pipeline optimization, Power BI visualizations, and Python machine learning algorithms.",
      badge: "Data & AI",
      skills: ["Python & Scikit", "Power BI", "PostgreSQL & SQL"]
    },
  ];

  const mentorshipPillars = [
    {
      icon: Code2,
      title: "1-on-1 Code Reviews",
      desc: "Line-by-line feedback on your HTML, JavaScript, Python, Java, and database architecture from practicing engineers."
    },
    {
      icon: Laptop,
      title: "Live Client Repositories",
      desc: "Hands-on Git branching, pull requests, and production deployment workflows instead of passive slide lectures."
    },
    {
      icon: Users,
      title: "Small Focused Batches",
      desc: "Dedicated mentor attention in every lab session so no student is left behind with unresolved bugs."
    },
    {
      icon: GraduationCap,
      title: "Mock HR & Tech Interviews",
      desc: "Structured technical rounds, resume reviews, and placement cell preparation before corporate hiring drives."
    }
  ];

  return (
    <div className="w-full bg-[#F4F7FC] text-[#20243A]">
      {/* 1. VOLIUM-INSPIRED EDITORIAL HERO */}
      <section className="bg-white border-b border-[#E2E8F0] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#64748B] mb-5">
            <Link href="/" className="hover:text-[#0071BC] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#2E3192] font-bold">Our Mentors &amp; Team</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF6FC] border border-[#E2E8F0] text-xs font-bold text-[#2E3192]">
                <Sparkles className="w-3.5 h-3.5 text-[#0071BC]" />
                <span>Real Industry Practitioners</span>
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E3192] leading-tight">
                Meet Our Mentors &amp; Academic Leaders
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#64748B] max-w-2xl leading-relaxed">
                Learn directly from senior engineers, software architects, and growth strategists who build and deploy production systems every single day.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-3">
              {[
                { val: "50+", label: "Expert Mentors" },
                { val: "150K+", label: "Aspirants Trained" },
                { val: "1050+", label: "Live Projects" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#F4F7FC] border border-[#E2E8F0] text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#2E3192]">{stat.val}</div>
                  <div className="text-[11px] font-semibold text-[#64748B] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED LEADERSHIP SPOTLIGHT */}
      <section className="pt-12 sm:pt-16 pb-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[420px] bg-[#EEF6FC]">
                <Image
                  src={leadership.image}
                  alt={leadership.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <span className="absolute top-4 left-4 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg bg-[#2E3192] text-white shadow-sm">
                  {leadership.badge}
                </span>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0071BC]">
                    Academy Leadership
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E3192] mt-1">
                    {leadership.name}
                  </h2>
                  <p className="text-sm font-bold text-[#0071BC] mt-1">{leadership.role}</p>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed">
                  {leadership.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {leadership.focus.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-[#F4F7FC] border border-[#E2E8F0] text-xs font-semibold text-[#20243A]">
                      <CheckCircle2 className="w-4 h-4 text-[#0071BC] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/RegisterForEnrollment"
                    className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition shadow-sm inline-flex items-center gap-2"
                  >
                    <span>Train Under Our Mentors</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+919076760009"
                    className="bg-[#EEF6FC] hover:bg-[#dcecfb] text-[#2E3192] border border-[#E2E8F0] text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition inline-flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-[#0071BC]" />
                    <span>+91 9076760009</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOMAIN LEADS & TECHNICAL FACULTY GRID */}
      <section className="py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071BC]">
                Domain Specialists
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2E3192] mt-1">
                Senior Engineering &amp; Growth Faculty
              </h2>
            </div>
            <Link
              href="/Home/TrainingSyllabus"
              className="text-xs sm:text-sm font-bold text-[#0071BC] hover:underline flex items-center gap-1"
            >
              <span>Explore Training Curriculums</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {faculty.map((m, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#0071BC] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EEF6FC]">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#20243A]/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#2E3192] text-white shadow-sm">
                      {m.badge}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#2E3192] group-hover:text-[#0071BC] transition">
                        {m.name}
                      </h3>
                      <p className="text-xs font-bold text-[#0071BC] mt-0.5">{m.role}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {m.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {m.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#EEF6FC] text-[#2E3192] border border-[#E2E8F0]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-[#E2E8F0] bg-[#F4F7FC] flex items-center justify-between text-xs font-bold text-[#2E3192]">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#0071BC]" />
                    <span>Barrownz Faculty</span>
                  </span>
                  <Link href="/RegisterForEnrollment" className="text-[#0071BC] hover:underline flex items-center gap-1">
                    <span>Train With Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW OUR MENTORS TRAIN YOU */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071BC] bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0]">
              Mentorship Approach
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2E3192] mt-2.5">
              How Our Mentors Prepare You for Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mentorshipPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#F4F7FC] border border-[#E2E8F0] hover:border-[#0071BC] transition space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] text-[#0071BC] flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#2E3192]">{p.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA STRIP */}
      <section className="py-12 bg-gradient-to-r from-[#2E3192] to-[#0071BC] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold">Want 1-on-1 Guidance From Our Mentors?</h2>
            <p className="text-xs sm:text-sm text-[#EEF6FC] mt-1">
              Join our upcoming classroom or hybrid training batch at Gomti Nagar, Lucknow.
            </p>
          </div>
          <Link
            href="/RegisterForEnrollment"
            className="shrink-0 bg-white hover:bg-[#EEF6FC] text-[#2E3192] font-bold px-7 py-3 rounded-xl text-xs sm:text-sm transition shadow-md"
          >
            Book Free Demo Session →
          </Link>
        </div>
      </section>
    </div>
  );
}
