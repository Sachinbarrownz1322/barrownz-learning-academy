"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Presentation, 
  School, 
  Target, 
  GraduationCap,
  FileCheck,
  ChevronRight,
  Code2,
  Database,
  Palette,
  Laptop,
  MessageSquare,
  FileText,
  Building,
  Flag
} from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);

  const certifications = [
    {
      title: "ISO 9001 Certified",
      badge: "Quality Management",
      image: "/images/certifications/iso-9001.png",
      desc: "Our training programs are certified under the ISO 9001 quality management system, which ensures that our courses are consistently delivered to the highest standards of quality and customer satisfaction.",
    },
    {
      title: "MSME Certified",
      badge: "Govt. of India",
      image: "/images/certifications/msme.png",
      desc: "Barrownz Learning Academy is recognized by the Ministry of Micro, Small and Medium Enterprises, Government of India, as a training provider that meets the highest standards of quality and excellence in education.",
    },
    {
      title: "Skill India Certified",
      badge: "National Initiative",
      image: "/images/certifications/skill-india.png",
      desc: "We are also proud to be affiliated with Skill India, a flagship initiative of the Government of India aimed at empowering the country's youth with industry-relevant skills and knowledge to meet the needs of a job market.",
    },
    {
      title: "NSDC Certified",
      badge: "Skill Development",
      image: "/images/certifications/nsdc.png",
      desc: "Barrownz Learning Academy is an accredited training partner of the National Skill Development Corporation, a public-private partnership that works towards promoting skill development and employment opportunities in India.",
    },
  ];

  const highlights = [
    { title: "Scratch to HTML", icon: Code2, desc: "Build modern web pages from the ground up" },
    { title: "Learn how to code in Python", icon: Laptop, desc: "Master modern programming syntax & logic" },
    { title: "Unlimited database creation", icon: Database, desc: "Relational & NoSQL database architecture" },
    { title: "Adobe XD Tutorials", icon: Palette, desc: "User-centric UI/UX prototype engineering" },
  ];

  const seminarColleges = [
    "Integral University",
    "Babasaheb Bhimrao Ambedkar University Satellite Campus",
    "School of Management Science",
    "Shri Ramswaroop Memorial College of Engineering & Management",
    "Jawahar Lal Nehru Polytechnic",
    "S.R. Institute of Management & Technology",
    "City Group of Institution",
  ];

  const seminarSteps = [
    {
      title: "Expert Instructors",
      desc: "We have a team of expert instructors who are passionate about teaching and have extensive experience in their respective fields. They are well-equipped to provide practical and engaging training to our participants.",
      icon: GraduationCap
    },
    {
      title: "Interactive Sessions",
      desc: "Real-time query resolutions, live classroom demonstrations, and hands-on coding exercises designed to encourage curiosity and collaboration.",
      icon: MessageSquare
    },
    {
      title: "Small Group Sizes",
      desc: "We maintain small batch sizes in our seminars and workshops so that every aspiring student receives focused attention from the instructor.",
      icon: Users
    },
    {
      title: "Course Materials",
      desc: "Comprehensive printed and digital resources, documentation, code snippets, and study guides provided for long-term reference.",
      icon: BookOpen
    },
    {
      title: "Feedback and Evaluation",
      desc: "Continuous assessment, mini-assessments, and participant evaluation to gauge learning outcomes and provide actionable improvement feedback.",
      icon: FileText
    },
  ];

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* ════════════════════════════════════════════════════════
          1. FULL-WIDTH BACKGROUND HERO SECTION
      ════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] flex items-center overflow-hidden bg-[#20243A] text-white">
        <Image
          src="/images/slide-5.png"
          alt="Barrownz Learning Academy Seminar & Campus"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* High-Contrast Brand Scrim Overlay for Crisp Readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(32, 36, 58, 0.94) 0%, rgba(46, 49, 146, 0.85) 55%, rgba(32, 36, 58, 0.72) 100%)",
          }}
        />

        <div className="relative z-10 w-full py-14 sm:py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-medium">
              <Link href="/" className="hover:text-white underline-offset-4 hover:underline transition">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/80" />
              <span className="text-white font-bold">About Us</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#20243A]/85 backdrop-blur-md border border-white/30 text-xs font-bold text-white shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#EEF6FC]" />
              <span>ISO 9001:2015 • MSME • Skill India Affiliated</span>
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-white tracking-tight leading-tight max-w-3xl drop-shadow-sm">
              About Barrownz Learning Academy
            </h1>

            <p className="text-sm sm:text-base text-white/95 max-w-2xl leading-relaxed font-medium">
              Course Completion Certification &amp; Lucknow&apos;s leading career launchpad in Information Technology — bridging university education with real production engineering.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/RegisterForEnrollment"
                className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition shadow-md inline-flex items-center gap-2"
              >
                <span>Register for Training</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/our-team"
                className="bg-white hover:bg-[#EEF6FC] text-[#2E3192] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition shadow-md"
              >
                Meet Our Mentors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          2. WELCOME & COURSE COMPLETION CERTIFICATION
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-[#2E3192] font-bold text-xs uppercase tracking-widest bg-[#EAF4FC] px-3 py-1 rounded-full border border-[#E5EAF2]">
                Course Completion Certification
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
                Welcome to Barrownz Learning Academy!
              </h2>
              <div className="w-16 h-1 bg-[#2E3192] rounded" />
              
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-2">
                We are a leading provider of professional training and education services in Lucknow, specialising in IT courses with certification. We are proud to hold a number of certifications that attest to the quality and value of our programs.
              </p>
              
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We believe that these certifications demonstrate our commitment to providing high-quality training and education to individuals and organisations across India. Thank you for considering Barrownz Learning Academy as your partner in professional development!
              </p>

              {/* 4 Feature highlight pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-[#2E3192]/40 transition">
                      <div className="w-8 h-8 rounded-lg bg-[#EAF4FC] text-[#2E3192] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">{h.title}</h4>
                        <p className="text-xs text-gray-500">{h.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/Certificate_NGO_img.png"
                  alt="Course Completion Certification at Barrownz Learning Academy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#2E3192] text-white p-4 rounded-xl shadow-lg max-w-xs hidden sm:block">
                <p className="text-xs font-semibold leading-relaxed">
                  Trusted by 150K+ Aspirants &amp; Accredited by Prestigious National Bodies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          3. ACCREDITATIONS & CERTIFICATIONS (4 Pillars)
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: "#f8f8f9" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2E3192] font-bold text-xs uppercase tracking-widest">
              National Recognitions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              Our Accreditations &amp; Certifications
            </h2>
            <div className="mt-2 mx-auto w-16 h-1 bg-[#2E3192] rounded" />
            <p className="text-gray-600 text-xs sm:text-sm mt-3 max-w-2xl mx-auto">
              Our training quality adheres to rigorous benchmarks recognized by leading national agencies and industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((item, idx) => {
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-[#E5EAF2] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#2E3192]/40 transition-all duration-300 flex flex-col justify-between text-center"
                >
                  <div>
                    {/* Official Certification Logo Image */}
                    <div className="h-28 w-full flex items-center justify-center mb-4 relative">
                      <div className="relative h-24 w-28 sm:w-32 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 120px, 150px"
                        />
                      </div>
                    </div>

                    <h3 className="font-bold text-[#20243A] text-lg mb-1">{item.title}</h3>
                    <span className="inline-block text-[11px] font-bold text-[#0071BC] bg-[#EEF6FC] px-2.5 py-0.5 rounded-full mb-3">
                      {item.badge}
                    </span>
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed text-justify sm:text-center">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-center text-xs font-semibold text-[#2E3192]">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-500" />
                    <span>Government Recognized Benchmark</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          4. ENGAGING & INFORMATIVE SEMINARS
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual banner */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/images/slide-5.png"
                  alt="Seminars at Barrownz Learning Academy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <span className="text-[#2E3192] font-bold text-xs uppercase tracking-widest bg-[#EAF4FC] px-3 py-1 rounded-full border border-[#E5EAF2]">
                College &amp; Campus Outreach
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
                Engaging and Informative Seminars, a Valuable Learning Experience!
              </h2>
              <div className="w-16 h-1 bg-[#2E3192] rounded" />

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Barrownz Learning Academy is thrilled to offer you an opportunity to enhance your digital skills and become a master of your craft with our expert instructors who will guide you through the learning process like a wise old owl. Our Seminars cover a range of topics, including digital marketing, front-end designing, Java, PhP, Python, JavaScript and more.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Our seminars are conducted by expert instructors who will guide you through the learning process step by step. Whether you are a beginner or an experienced professional, our seminars are designed to help you enhance your skills and become an expert in your desired area.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-3">
                <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                  We conducted seminars at various locations such as:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {seminarColleges.map((col, i) => (
                    <span 
                      key={i} 
                      className="bg-white border border-gray-200 text-gray-700 text-xs px-2.5 py-1 rounded-md font-medium shadow-2xs flex items-center gap-1.5"
                    >
                      <School className="w-3.5 h-3.5 text-[#2E3192] shrink-0" />
                      <span>{col}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#2E3192] hover:bg-[#005a96] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-lg transition"
                >
                  <span>Request Seminar on Your Campus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2E3192] hover:underline"
                >
                  <span>Open Positions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          5. CALLOUT BANNER: 100 MILLION CAREER ASPIRANTS GOAL
      ════════════════════════════════════════════════════════ */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 via-[#2E3192] to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-yellow-300 font-bold text-xs uppercase tracking-widest">
            Join us and level up your expertise!
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
            Be a part of our journey to create an impact and empower over 100 Million career aspirants over the next 5 years!
          </h2>
          <div className="pt-2">
            <Link
              href="/RegisterForEnrollment"
              className="inline-block bg-white text-[#2E3192] hover:bg-gray-100 font-bold text-xs sm:text-sm px-8 py-3 rounded-lg transition shadow-md"
            >
              Enroll Now &amp; Shape Your Future
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          6. HOW DO WE CONDUCT SEMINARS (Methodology)
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#2E3192] font-bold text-xs uppercase tracking-widest">
              Our Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              How do We Conduct Seminars
            </h2>
            <div className="mt-2 mx-auto w-16 h-1 bg-[#2E3192] rounded" />
            <p className="text-gray-600 text-xs sm:text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
              We conduct our seminars in Lucknow, in a professional and organised manner, ensuring that our participants get the most out of their learning experience. At Barrownz Learning Academy, we are committed to helping you achieve your learning goals. Our seminar courses for students are designed to provide you with practical, hands-on training that will help you succeed in your chosen field. Here&apos;s how we conduct our seminars:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {seminarSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#2E3192] hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#EAF4FC] text-[#2E3192] flex items-center justify-center mb-3">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-gray-100 text-[11px] font-semibold text-[#2E3192]">
                    Step 0{i + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          7. STATS COUNTER BAR (Exact Numbers)
      ════════════════════════════════════════════════════════ */}
      <section className="py-10 px-4" style={{ background: "#2E3192" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: "2.5M+", label: "Learners on YouTube" },
            { value: "150K+", label: "Aspirants Trained" },
            { value: "20+", label: "Training Domains" },
            { value: "4.85+", label: "Learner Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold">{stat.value}</span>
              <span className="text-xs sm:text-sm font-medium mt-1 text-blue-100">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          8. FOUNDER MESSAGE / UNLOCKING CAREER RESILIENCE
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 max-w-3xl mx-auto">
              Unlocking Career Resilience: Embrace Tomorrow&apos;s Success Today
            </h2>
            <div className="mt-2 mx-auto w-16 h-1 bg-[#2E3192] rounded" />
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left — Founder Image */}
            <div className="relative shrink-0 flex justify-center">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0] bg-[#EEF6FC]">
                <Image
                  src="/images/founder/pushpendra-dwivedi.png"
                  alt="Pushpendra Dwivedi - Founder Of Barrownz Group"
                  fill
                  className="object-contain object-bottom pt-3"
                  sizes="320px"
                />
              </div>
            </div>

            {/* Right — Blockquote verbatim */}
            <div className="flex-1">
              <svg className="w-10 h-10 text-[#2E3192]/30 mb-3" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="text-gray-700 text-sm sm:text-base leading-8 italic mb-6">
                &ldquo;At the best career Academy, we understand the deep impact that we wield in shaping your future, and we take huge pride with this commitment with the utmost seriousness. When you choose us we anticipate nothing but exceptional training enriched by hands-on projects with a wide range of career opportunities. Here&apos;s to your bright journey towards a career that&apos;s designed to withstand the trials of time!&rdquo;
              </blockquote>
              <cite className="not-italic">
                <span className="font-bold text-[#2E3192] text-base block">Pushpendra Dwivedi</span>
                <span className="text-gray-500 text-sm font-medium">Founder Of Barrownz Group</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          9. CTA STRIP (Call Back from Admissions)
      ════════════════════════════════════════════════════════ */}
      <section className="py-10 px-4" style={{ background: "#2E3192" }}>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white font-semibold text-sm sm:text-base text-center md:text-left max-w-xl leading-6">
            Get a call back from our Admissions Counselling team to find out which course will be best for your Placements.
          </p>
          <Link
            href="/RegisterForEnrollment"
            className="shrink-0 bg-white hover:bg-gray-100 text-[#2E3192] font-bold px-7 py-3 rounded text-sm transition whitespace-nowrap shadow"
          >
            Get Free Counselling
          </Link>
        </div>
      </section>
    </main>
  );
}
