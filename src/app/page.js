"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Award,
  Users,
  BookOpen,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Code2,
  Laptop,
  Sparkles,
  MapPin,
  Calendar,
  Zap,
  Phone,
  Mail,
  Send
} from "lucide-react";

/* ─── HERO SLIDES DATA ─── */
const slides = [
  {
    src: "/images/Certificate_NGO_img.png",
    alt: "Barrownz Learning Academy - MOU & Accreditation",
    title: "MOU & Academic Accreditations",
    subtitle: "ISO 9001:2015, MSME & Skill India Affiliated Practical IT Training."
  },
  {
    src: "/images/slide-5.png",
    alt: "Barrownz Learning Academy - Skill Seminars",
    title: "Skill-Based Campus Seminars",
    subtitle: "Conducted Across Top Technical Universities & Engineering Colleges."
  },
  {
    src: "/images/slide-2.png",
    alt: "Barrownz Learning Academy - Live Projects",
    title: "Live Client Production Projects",
    subtitle: "Learn Full Stack, Cloud Topologies & Modern Enterprise Frameworks."
  },
  {
    src: "/images/slide-3.jpg",
    alt: "Barrownz Learning Academy - Job-Oriented Training",
    title: "100% Placement Record",
    subtitle: "Fast-Track Career Acceleration with Dedicated Corporate Mentorship."
  },
  {
    src: "/images/slide-1.png",
    alt: "Barrownz Learning Academy - Interactive Labs",
    title: "Hands-on Technical Coding Labs",
    subtitle: "Expert 1-on-1 Guidance by Experienced Industry Software Architects."
  },
  {
    src: "/images/slide-4.jpg",
    alt: "Barrownz Learning Academy - Mock Interviews",
    title: "Interview Prep & HR Evaluations",
    subtitle: "Comprehensive Resume Building & Technical HR Mock Interview Sessions."
  },
];

/* ─── UPCOMING BATCHES ─── */
const upcomingBatches = [
  {
    course: "MERN Full Stack Development",
    image: "/images/batches/mern-full-stack.png",
    date: "Starts This Monday",
    mode: "Classroom / Hybrid",
    seats: "Limited (8 Seats Left)",
    badge: "Most Popular",
    color: "border-[#E2E8F0]",
    badgeBg: "bg-[#2E3192] text-white"
  },
  {
    course: "Python AI & Data Analytics",
    image: "/images/batches/python-ai-analytics.png",
    date: "Starts Next Wednesday",
    mode: "Live Interactive Lab",
    seats: "5 Seats Left",
    badge: "High Demand",
    color: "border-[#E2E8F0]",
    badgeBg: "bg-[#0071BC] text-white"
  },
  {
    course: "Summer Industrial Training 2026",
    image: "/images/batches/summer-training-2026.jpg",
    date: "Registration Open",
    mode: "4 to 6 Weeks Cohort",
    seats: "Early Bird Discount",
    badge: "Summer Special",
    color: "border-[#E2E8F0]",
    badgeBg: "bg-[#2E3192] text-white"
  },
  {
    course: "Digital Marketing & Performance SEO",
    image: "/images/batches/digital-marketing-seo.jpg",
    date: "Batch Commencing Soon",
    mode: "Hands-on Live Ad Budgets",
    seats: "10 Seats Available",
    badge: "Career Track",
    color: "border-[#E2E8F0]",
    badgeBg: "bg-[#0071BC] text-white"
  },
];

/* ─── RECENT PLACEMENTS ─── */
const recentPlacements = [
  { name: "Ayush Srivastava", role: "Software Developer", company: "HCL Tech", image: "/images/placements/ayush-srivastava.jpg", logo: "/images/hcl.png" },
  { name: "Arti Jaiswal", role: "Support Engineer", company: "Amazon", image: "/images/placements/arti-jaiswal.jpg", logo: "/images/slide-1.png" },
  { name: "Om Shiva Rana", role: "Software Developer", company: "Techvizo, Mumbai", image: "/images/placements/om-shiva-rana.jpg", logo: "/images/slide-2.png" },
  { name: "Faizal Khan", role: "Java Developer", company: "Barrownz Pearl Web", image: "/images/placements/faizal-khan.jpg", logo: "/images/logo/logo.png" },
  { name: "Anjali Singh", role: "Web Developer", company: "Core Solution, Lucknow", image: "/images/placements/anjali-singh.jpg", logo: "/images/slide-3.jpg" },
  { name: "Swekchha Singh", role: "Digital Marketing Executive", company: "Digi Explorer", image: "/images/placements/swekchha-singh.jpg", logo: "/images/slide-4.jpg" },
  { name: "Aryan Gupta", role: "Junior Java Developer", company: "Barrownz Pearl Web", image: "/images/placements/ayush-srivastava.jpg", logo: "/images/slide-5.png" },
  { name: "Mohd Anas", role: "Junior Java Developer", company: "Barrownz Pearl Web", image: "/images/placements/faizal-khan.jpg", logo: "/images/slide-1.png" },
  { name: "Ritik Kumar Rai", role: "ASP .Net Developer", company: "Barrownz Group", image: "/images/placements/om-shiva-rana.jpg", logo: "/images/logo/logo.png" },
];

/* ─── INDUSTRY TECH STACK ─── */
const techDomains = [
  {
    category: "Web & Modern Frameworks",
    items: [
      { name: "HTML5 & CSS3", image: "/images/tech-stack/html-css.jpg", level: "Markup & Styling", desc: "Semantic tags, modern flexbox, CSS grid & responsive layouts." },
      { name: "JavaScript ES6+", image: "/images/tech-stack/javascript.jpg", level: "Client Logic", desc: "Asynchronous programming, closures, promises, fetch & DOM API." },
      { name: "React.js", image: "/images/tech-stack/react.jpg", level: "UI Library", desc: "Component architecture, hooks, state management & virtual DOM." },
      { name: "Node.js & Express", image: "/images/tech-stack/nodejs.jpg", level: "Backend Server", desc: "RESTful APIs, routing, middleware & secure authentication." },
      { name: "MERN Stack", image: "/images/tech-stack/mern-stack.jpg", level: "Full Stack Track", desc: "End-to-end production development from database to frontend." },
      { name: "ASP.NET Core", image: "/images/tech-stack/aspnet.jpg", level: "Enterprise Track", desc: "C# robust server-side architecture, MVC & MS SQL Server." },
    ]
  },
  {
    category: "Backend, Mobile, Data & AI",
    items: [
      { name: "Python Programming", image: "/images/tech-stack/python.jpg", level: "Core & Advanced", desc: "OOP concepts, data structures, scripting & API integration." },
      { name: "Data Analytics & Power BI", image: "/images/tech-stack/data-analytics.jpg", level: "Data Intelligence", desc: "SQL queries, Excel dashboards, Power BI charts & insights." },
      { name: "Machine Learning (AI)", image: "/images/tech-stack/machine-learning.jpg", level: "Applied Algorithms", desc: "Supervised & unsupervised learning with NumPy, Pandas & Scikit." },
      { name: "Java Programming", image: "/images/tech-stack/java.jpg", level: "Object Oriented", desc: "Core Java, JVM internals, Spring Boot basics & JDBC connection." },
      { name: "Database Engineering", image: "/images/tech-stack/database.jpg", level: "SQL & NoSQL", desc: "MySQL, PostgreSQL, MongoDB, queries, indexing & normalization." },
      { name: "PHP & Laravel", image: "/images/tech-stack/php-laravel.jpg", level: "Web Framework", desc: "Dynamic web portals, MVC structure, MySQL & CMS solutions." },
    ]
  }
];

/* ─── TRAINING PROGRAMS ─── */
const trainingPrograms = [
  { title: "Summer Training", image: "/images/programs/summer-training.jpg", duration: "4 - 6 Weeks", desc: "Hands-on project development for B.Tech, BCA, MCA, and Diploma students during summer breaks with project certificate." },
  { title: "Winter Training", image: "/images/programs/winter-training.png", duration: "4 Weeks", desc: "Fast-track intensive technology sessions with live coding assignments and mentor feedback sessions." },
  { title: "Industrial Training", image: "/images/programs/industrial-training.png", duration: "6 Months", desc: "Comprehensive enterprise IT internship with client application development, GitHub workflow, and interview guidance." },
  { title: "Vocational Training", image: "/images/programs/vocational-training.png", duration: "2 - 4 Weeks", desc: "Skill-enhancement short courses covering core basics of web engineering, databases, and Python scripting." },
  { title: "Apprenticeship Training", image: "/images/programs/apprenticeship-training.png", duration: "1 Year", desc: "Long-term practical workplace exposure with real development teams and monthly performance appraisal." },
  { title: "Internship Training", image: "/images/programs/internship-training.png", duration: "3 - 6 Months", desc: "Work as junior developer in live software environment with stipend opportunities and direct corporate placement." },
  { title: "Project Training", image: "/images/programs/project-training.png", duration: "Custom Project", desc: "Minor & Major college academic projects developed from scratch under direct senior architect guidance." },
  { title: "Syllabus Training", image: "/images/programs/syllabus-training.png", duration: "Semester-wise", desc: "Curriculum aligned academic coaching with practical implementation to secure top university marks." },
  { title: "Faculty Training", image: "/images/programs/faculty-training.png", duration: "FDP Workshops", desc: "Faculty Development Programs updating professors and lecturers with modern IT industry trends." },
];

/* ─── BRANCHES ─── */
const branches = [
  {
    city: "Lucknow Head Office",
    address: "2/90, Vastu Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    phone: "+91 9076760009",
    email: "support@barrownz.com",
    tag: "Main Campus & Labs"
  }
];

/* ─── FAQ DATA ─── */
const faqData = [
  { q: "Who can enroll in training courses at Barrownz Learning Academy?", a: "Our programs are open to college students (B.Tech, BCA, MCA, B.Sc CS, Diploma), recent graduates, working professionals, and career switchers wanting practical IT training." },
  { q: "Do you provide live project experience during training?", a: "Yes, every student works on authentic client projects and production repositories, gaining experience with Git, code reviews, and software testing." },
  { q: "Is 100% placement assistance provided?", a: "Yes, our dedicated placement cell provides profile-centric resume building, mock interviews, and scheduled campus interview drives with hiring partners." },
  { q: "Are short-term summer and winter training certificates recognized?", a: "Yes, our training is certified under ISO 9001:2015, MSME, and affiliated with national skill development bodies, making your certificates valid across industries." },
  { q: "Can I pay course fees in flexible installments?", a: "Yes, Barrownz Learning Academy offers flexible installment plans and online fee submission via Razorpay so financial constraints don't stop your learning." }
];

/* ═══════════════════════════════════════════════════
   FULL-SCREEN HERO SLIDER (Top Banner)
═══════════════════════════════════════════════════ */
function FullScreenHeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (dir) => {
    clearInterval(timerRef.current);
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
    startTimer();
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#20243A]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full relative h-[340px] sm:h-[420px] md:h-[480px] lg:h-[540px] xl:h-[600px]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20243A]/90 via-[#20243A]/40 to-black/15 flex flex-col justify-end pb-10 sm:pb-14 text-white">
              <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8">
                <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white bg-[#2E3192] px-3 py-1 rounded-md mb-2.5 shadow-sm">
                  Barrownz Learning Academy
                </span>
                <h2 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black max-w-3xl leading-tight text-white drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-100 mt-1.5 sm:mt-2 max-w-xl line-clamp-2 sm:line-clamp-none font-medium leading-relaxed">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-4 sm:mt-5">
                  <Link
                    href="/RegisterForEnrollment"
                    className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition shadow-md flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span>Enroll Online</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                  <a
                    href="tel:+919076760009"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition border border-white/30 flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>+91 9076760009</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => go(-1)}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 bg-[#20243A]/70 hover:bg-[#0071BC] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 bg-[#20243A]/70 hover:bg-[#0071BC] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { clearInterval(timerRef.current); setCurrent(i); startTimer(); }}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${i === current ? "w-6 sm:w-8 bg-white" : "w-1.5 sm:w-2 bg-white/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HERO VISUAL SHOWCASE (LearnHub Editorial Split)
═══════════════════════════════════════════════════ */
function HeroVisualCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (dir) => {
    clearInterval(timerRef.current);
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
    startTimer();
  };

  return (
    <div className="relative">
      {/* Subtle decorative backdrop */}
      <div className="hidden sm:block absolute -inset-3 rounded-3xl bg-[#EEF6FC] border border-[#E2E8F0] -z-10" />

      <div className="relative w-full overflow-hidden rounded-2xl bg-[#20243A] shadow-xl border border-[#E2E8F0]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full relative h-[280px] sm:h-[360px] lg:h-[420px]"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20243A]/90 via-[#20243A]/25 to-transparent flex flex-col justify-end p-5 sm:p-7 text-white">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-[#0071BC] px-2.5 py-0.5 rounded w-max mb-2">
                  {slide.title}
                </span>
                <p className="text-xs sm:text-sm text-slate-100 max-w-md font-medium leading-snug">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#0071BC] text-[#20243A] hover:text-white w-9 h-9 rounded-full flex items-center justify-center transition shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#0071BC] text-[#20243A] hover:text-white w-9 h-9 rounded-full flex items-center justify-center transition shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-3.5 right-4 flex gap-1.5 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { clearInterval(timerRef.current); setCurrent(i); startTimer(); }}
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Info Card 1: Top Left */}
      <div className="hidden md:flex items-center gap-3 absolute -top-4 -left-4 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-[#E2E8F0] z-20">
        <div className="w-9 h-9 rounded-lg bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center shrink-0">
          <Users className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm font-extrabold text-[#2E3192] leading-none">150K+</p>
          <p className="text-[11px] text-[#64748B] font-medium mt-0.5">Aspirants Trained</p>
        </div>
      </div>

      {/* Floating Info Card 2: Bottom Right */}
      <div className="hidden md:flex items-center gap-3 absolute -bottom-4 -right-4 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-[#E2E8F0] z-20">
        <div className="w-9 h-9 rounded-lg bg-[#EEF6FC] text-[#2E3192] flex items-center justify-center shrink-0">
          <Award className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm font-extrabold text-[#2E3192] leading-none">1050+ Projects</p>
          <p className="text-[11px] text-[#64748B] font-medium mt-0.5">50+ Industry Mentors</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════ */
export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [enquirySent, setEnquirySent] = useState(false);
  const [quickForm, setQuickForm] = useState({ name: "", phone: "", course: "MERN Full Stack Development" });

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setEnquirySent(true);
  };

  return (
    <main className="w-full overflow-x-hidden bg-white text-[#20243A]">

      {/* ─── 0. FULL-SCREEN HERO SLIDER ─── */}
      <section aria-label="Full screen hero slider">
        <FullScreenHeroSlider />
      </section>

      {/* ─── 1. LEARNHUB-INSPIRED SPLIT EDITORIAL HERO ─── */}
      <section
        id="hero"
        aria-label="Hero showcase"
        className="relative bg-[#F4F7FC] border-b border-[#E2E8F0] pt-10 sm:pt-14 lg:pt-16 pb-0 overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            {/* Left Editorial Content */}
            <div className="lg:col-span-7 space-y-5 pb-10 sm:pb-14 lg:pb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF6FC] border border-[#E2E8F0] text-xs font-bold text-[#2E3192]">
                <Sparkles className="w-3.5 h-3.5 text-[#0071BC]" />
                <span>Barrownz Learning Academy • Gomti Nagar, Lucknow</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-[#2E3192] leading-[1.12] tracking-tight">
                Practical IT Training Built for Real Engineering Careers
              </h1>

              <p className="text-sm sm:text-base text-[#64748B] max-w-xl leading-relaxed font-normal">
                Bridge university theory with production-grade software development, Data Analytics, Python AI, and Performance Digital Marketing under senior industry mentors.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/web-development-course-in-lucknow"
                  className="bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition shadow-sm hover:shadow-md flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="/contact-us"
                  className="bg-white hover:bg-[#EEF6FC] text-[#2E3192] border border-[#E2E8F0] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition flex items-center gap-2 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#0071BC] shrink-0" />
                  <span>Contact Admissions</span>
                </Link>
              </div>

              {/* Genuine Trust Indicators */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-semibold text-[#20243A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0071BC] shrink-0" />
                  ISO 9001:2015 Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0071BC] shrink-0" />
                  MSME &amp; Skill India Affiliated
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0071BC] shrink-0" />
                  100% Placement Assistance
                </span>
              </div>
            </div>

            {/* Right Visual — Seamless Studio Cutout Closer to Text */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start lg:-ml-8">
              <div className="relative w-full max-w-[400px] sm:max-w-[440px] h-[340px] sm:h-[420px] lg:h-[470px]">
                {/* Soft subtle radial glow behind cutout (no box/border) */}
                <div
                  className="absolute inset-x-8 bottom-0 top-10 rounded-full bg-gradient-to-t from-[#0071BC]/10 via-[#2E3192]/5 to-transparent blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <Image
                  src="/images/founder/pushpendra-dwivedi.png"
                  alt="Pushpendra Dwivedi - Founder of Barrownz Group"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_18px_30px_rgba(32,36,58,0.14)]"
                  sizes="(max-width: 1024px) 100vw, 440px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 1B. TRUST & ACCREDITATION FEATURE BAR ─── */}
      <section className="bg-white py-5 border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {[
              { icon: Award, title: "ISO 9001:2015", sub: "Certified Training" },
              { icon: Code2, title: "Live Projects", sub: "Real Production Code" },
              { icon: CheckCircle2, title: "100% Placement", sub: "Drives & Mock Prep" },
              { icon: Building2, title: "Govt. Accredited", sub: "MSME & Skill India" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#F4F7FC] border border-[#E2E8F0]">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF6FC] text-[#0071BC] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#2E3192] truncate">{item.title}</h4>
                    <p className="text-[11px] text-[#64748B] truncate">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 1C. QUICK ADMISSION CONSULTATION STRIP ─── */}
      <section className="py-6 bg-[#EEF6FC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {enquirySent ? (
            <div className="bg-white border border-[#E2E8F0] text-[#20243A] p-4 rounded-xl text-center text-xs sm:text-sm font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#0071BC] shrink-0" />
              <span>
                Frontend preview only (no backend connected yet). For immediate callback, please call{" "}
                <a href="tel:+919076760009" className="underline font-bold text-[#0071BC]">+91 9076760009</a>.
              </span>
            </div>
          ) : (
            <form onSubmit={handleQuickSubmit} className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 shrink-0 text-center lg:text-left">
                <div className="w-10 h-10 rounded-xl bg-[#2E3192] text-white flex items-center justify-center shrink-0 hidden sm:flex">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#2E3192]">Request Quick Admissions Call Back</h4>
                  <p className="text-xs text-[#64748B]">Free 1-on-1 career counselling with software mentors</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full lg:w-auto flex-1 max-w-2xl">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={quickForm.name}
                  onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#0071BC] bg-white text-[#20243A]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile (+91)"
                  value={quickForm.phone}
                  onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#0071BC] bg-white text-[#20243A]"
                />
                <select
                  value={quickForm.course}
                  onChange={(e) => setQuickForm({ ...quickForm, course: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#0071BC] bg-white text-[#20243A]"
                >
                  <option value="MERN Full Stack Development">MERN Full Stack</option>
                  <option value="Python AI & ML Track">Python AI &amp; ML</option>
                  <option value="Summer Training 2026">Summer Training 2026</option>
                  <option value="Java Full Stack Development">Java Full Stack</option>
                  <option value="Data Analytics & Power BI">Data Analytics</option>
                  <option value="ASP.NET Core & C#">ASP.NET Core</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition whitespace-nowrap shadow-sm shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>Request Call Back</span>
                <Send className="w-3.5 h-3.5 shrink-0" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── 2. UPCOMING & ONGOING TRAINING BATCHES ─── */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-[#0071BC] font-bold text-xs uppercase tracking-widest bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0]">
                Seat Reservation
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E3192] mt-2.5">
                Upcoming &amp; Ongoing Training Batches
              </h2>
            </div>
            <Link
              href="/RegisterForEnrollment"
              className="text-xs sm:text-sm font-bold text-[#0071BC] hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              <span>Reserve Your Cohort Seat</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

          <div className="overflow-hidden py-3">
            <div className="animate-marquee-ltr flex gap-5">
              {[...upcomingBatches, ...upcomingBatches].map((b, i) => (
                <div
                  key={i}
                  className={`w-[280px] sm:w-[310px] lg:w-[330px] shrink-0 bg-white rounded-2xl border ${b.color} overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0071BC] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F4F7FC] rounded-t-2xl">
                      <Image
                        src={b.image}
                        alt={b.course}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 310px, 330px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#20243A]/60 via-transparent to-black/15" />

                      <span className={`absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm ${b.badgeBg}`}>
                        {b.badge}
                      </span>

                      <span className="absolute top-3 right-3 text-[10px] font-bold bg-[#20243A]/75 backdrop-blur-md text-white px-2 py-0.5 rounded">
                        Live Lab
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-extrabold text-[#2E3192] leading-snug group-hover:text-[#0071BC] transition line-clamp-1">
                        {b.course}
                      </h3>
                      <div className="mt-3.5 space-y-2 text-xs text-[#64748B]">
                        <p className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#0071BC] shrink-0" />
                          <span className="font-medium text-[#20243A]">{b.date}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Laptop className="w-4 h-4 text-[#0071BC] shrink-0" />
                          <span>{b.mode}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-[#2E3192] shrink-0" />
                          <span className="font-semibold text-[#2E3192]">{b.seats}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0">
                    <Link
                      href="/RegisterForEnrollment"
                      className="w-full block text-center bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold py-2.5 rounded-xl transition whitespace-nowrap shadow-sm"
                    >
                      Reserve Seat Online →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT BLA (Editorial Asymmetric Split) ─── */}
      <section className="py-14 sm:py-20 bg-[#F4F7FC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-[#0071BC] font-bold text-xs uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#E2E8F0]">
                About Barrownz Learning Academy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E3192] leading-tight">
                Best IT &amp; Industrial Training Academy in Lucknow
              </h2>
              <div className="w-16 h-1 bg-[#0071BC] rounded" />

              <p className="text-[#20243A] text-xs sm:text-sm md:text-base leading-relaxed pt-1">
                Barrownz Learning Academy is Lucknow&apos;s leading practical IT and software engineering institute, dedicated to bridging academic theoretical syllabi with fast-paced corporate engineering standards. Certified under ISO 9001:2015 and recognized by MSME and Skill India, our programs deliver direct employability.
              </p>

              <p className="text-[#64748B] text-xs sm:text-sm md:text-base leading-relaxed">
                We replace outdated textbook memorization with hands-on coding repositories, Git version control, RESTful API design, database normalization, and mock HR interviews. Whether aspiring for Full Stack Web Development, Python AI, or Performance Digital Marketing, learners train under tech veterans.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { title: "100% Placement", sub: "Assistance Record" },
                  { title: "ISO 9001:2015", sub: "Quality Standard" },
                  { title: "Live Projects", sub: "Production Repos" },
                  { title: "Govt. Accredited", sub: "MSME & Skill India" },
                ].map((feat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] text-center shadow-sm">
                    <h4 className="text-xs font-extrabold text-[#2E3192] truncate">{feat.title}</h4>
                    <p className="text-[11px] text-[#64748B] mt-0.5 truncate">{feat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 bg-[#0071BC] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition shadow-sm whitespace-nowrap"
                >
                  <span>Explore More About Us</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="/Home/BLAPlacement"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#EEF6FC] text-[#2E3192] text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition border border-[#E2E8F0] whitespace-nowrap"
                >
                  <span>View Placement Record</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-96 lg:h-[420px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/Certificate_NGO_img.png"
                  alt="Barrownz Learning Academy Campus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. RECENT PLACEMENT SECTION ─── */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-xs font-bold text-[#0071BC] uppercase tracking-wider bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0]">
                Success Stories
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E3192] mt-2.5">
                Recent Placements &amp; Hired Scholars
              </h2>
            </div>
            <Link
              href="/Home/BLAPlacement"
              className="text-xs sm:text-sm font-bold text-[#0071BC] hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              <span>View All Placements</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

          <div className="overflow-hidden py-3">
            <div className="animate-marquee-rtl flex gap-5 sm:gap-6">
              {[...recentPlacements.slice(0, 6), ...recentPlacements.slice(0, 6)].map((st, i) => (
                <div
                  key={i}
                  className="w-[280px] sm:w-[310px] lg:w-[330px] shrink-0 bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0071BC] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F4F7FC] rounded-t-2xl">
                      <Image
                        src={st.image}
                        alt={st.name}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 310px, 330px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#20243A]/75 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm bg-[#2E3192] text-white">
                        BLA Placed
                      </span>
                      <span className="absolute bottom-2.5 right-3 text-[11px] font-bold text-white bg-[#20243A]/75 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EEF6FC]" />
                        <span>Verified Hired</span>
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-extrabold text-[#2E3192] group-hover:text-[#0071BC] transition truncate">
                        {st.name}
                      </h3>
                      <p className="text-xs text-[#64748B] font-medium mt-0.5 truncate">{st.role}</p>

                      <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                        <p className="text-xs font-bold text-[#20243A] flex items-center gap-1.5 truncate">
                          <Building2 className="w-4 h-4 text-[#0071BC] shrink-0" />
                          <span className="truncate">{st.company}</span>
                        </p>
                        <span className="text-[10px] font-bold text-[#0071BC] bg-[#EEF6FC] px-2 py-0.5 rounded shrink-0">
                          Hired
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. NUMBERS THAT SHOW OUR GROWTH ─── */}
      <section className="py-14 sm:py-18 bg-[#2E3192]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center mb-10">
            <span className="text-[#EEF6FC] font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
              Measurable Excellence
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-3">
              Numbers That Show Our Growth
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { num: "50+", label: "Expert Mentors" },
              { num: "150K+", label: "Aspirants Trained" },
              { num: "1050+", label: "Projects Completed" },
              { num: "100%", label: "Placement Commitment" },
            ].map((stat, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm text-[#EEF6FC] font-semibold mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. INDUSTRY-READY TECHNOLOGY STACK ─── */}
      <section id="tech-stack" className="py-16 sm:py-20 bg-[#F4F7FC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-[#0071BC] font-bold text-xs uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#E2E8F0]">
              Technical Modules
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E3192] mt-2.5">
              Industry-Ready Technology Stack
            </h2>
            <div className="w-16 h-1 bg-[#0071BC] rounded mx-auto mt-3 mb-4" />
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
              Barrownz Learning Academy equips students with modern engineering frameworks, full stack architectures, and cloud databases demanded by tech recruiters.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12">
            {techDomains.map((domain, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#2E3192]">{domain.category}</h3>
                  <div className="flex-1 h-px bg-[#E2E8F0]" />
                </div>

                <div className="overflow-hidden py-3">
                  <div className={`${idx % 2 === 0 ? "animate-marquee-ltr" : "animate-marquee-rtl"} flex gap-5`}>
                    {[...domain.items, ...domain.items].map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        className="w-[280px] sm:w-[310px] lg:w-[330px] shrink-0 bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:border-[#0071BC] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                      >
                        <div>
                          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#20243A] rounded-t-2xl">
                            <Image
                              src={tech.image}
                              alt={tech.name}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 640px) 280px, (max-width: 1024px) 310px, 330px"
                            />
                            <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded bg-white/95 text-[#2E3192] shadow-sm">
                              {tech.level}
                            </span>
                          </div>

                          <div className="p-5">
                            <h4 className="text-base font-extrabold text-[#2E3192] group-hover:text-[#0071BC] transition">
                              {tech.name}
                            </h4>
                            <p className="text-xs text-[#64748B] leading-relaxed mt-1.5">
                              {tech.desc}
                            </p>
                          </div>
                        </div>

                        <div className="px-5 pb-4 pt-0">
                          <div className="pt-3 border-t border-[#E2E8F0] text-[11px] font-semibold text-[#0071BC] flex items-center justify-between">
                            <span>Certified Curriculum</span>
                            <Link href="/RegisterForEnrollment" className="group-hover:translate-x-1 transition-transform font-bold">
                              Explore →
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. OUR TRAINING PROGRAMS ─── */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-[#0071BC] font-bold text-xs uppercase tracking-widest bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0]">
              Academy Programs
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E3192] mt-2.5">
              Our Training Programs
            </h2>
            <div className="w-16 h-1 bg-[#0071BC] rounded mx-auto mt-3 mb-4" />
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
              Choose from industry-certified training formats structured for engineering, diploma, and degree students.
            </p>
          </div>

          <div className="overflow-hidden py-3">
            <div className="animate-marquee-ltr flex gap-5 sm:gap-6">
              {[...trainingPrograms, ...trainingPrograms].map((prog, i) => {
                const origIdx = i % trainingPrograms.length;
                return (
                  <div
                    key={i}
                    className="w-[280px] sm:w-[310px] lg:w-[330px] shrink-0 bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:border-[#0071BC] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#20243A] rounded-t-2xl">
                        <Image
                          src={prog.image}
                          alt={prog.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 280px, (max-width: 1024px) 310px, 330px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#20243A]/60 via-transparent to-transparent" />

                        <span className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-[#2E3192]/90 text-white flex items-center justify-center font-black text-xs shadow-sm">
                          0{origIdx + 1}
                        </span>

                        <span className="absolute top-3 right-3 text-[10px] font-extrabold text-[#2E3192] bg-[#EEF6FC] px-2.5 py-0.5 rounded shadow-sm">
                          {prog.duration}
                        </span>
                      </div>

                      <div className="p-5">
                        <h3 className="text-base font-extrabold text-[#2E3192] group-hover:text-[#0071BC] transition mb-2">
                          {prog.title}
                        </h3>
                        <p className="text-xs text-[#64748B] leading-relaxed">{prog.desc}</p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-0">
                      <div className="pt-3.5 border-t border-[#E2E8F0]">
                        <Link
                          href="/RegisterForEnrollment"
                          className="text-xs font-bold text-[#0071BC] hover:underline flex items-center justify-between whitespace-nowrap"
                        >
                          <span>Enroll in {prog.title}</span>
                          <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. OUR CAMPUS / LUCKNOW HEAD OFFICE ─── */}
      <section className="py-14 sm:py-18 bg-[#F4F7FC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[#0071BC] font-bold text-xs uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#E2E8F0]">
                Regional Presence
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2E3192] pt-1">
                Visit Our Lucknow Training Campus
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Experience dedicated coding workstations, live mentor guidance, and interactive seminar halls in Gomti Nagar, Lucknow.
              </p>
            </div>

            <div className="lg:col-span-7">
              {branches.map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#0071BC] hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#2E3192] bg-[#EEF6FC] border border-[#E2E8F0] px-3 py-1 rounded-md">
                      {b.tag}
                    </span>
                    <span className="text-[11px] font-bold text-[#0071BC] bg-[#EEF6FC] px-2.5 py-0.5 rounded-full">
                      Admissions Open
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#2E3192]">{b.city}</h3>
                  <p className="text-sm text-[#64748B] mt-2 leading-relaxed flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#0071BC] shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>
                  <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                    <a href={`tel:${b.phone}`} className="text-[#20243A] font-bold hover:text-[#0071BC] flex items-center gap-2 whitespace-nowrap">
                      <Phone className="w-4 h-4 text-[#0071BC] shrink-0" />
                      <span>{b.phone}</span>
                    </a>
                    <a href={`mailto:${b.email}`} className="text-[#64748B] hover:text-[#0071BC] flex items-center gap-2 whitespace-nowrap">
                      <Mail className="w-4 h-4 text-[#0071BC] shrink-0" />
                      <span>{b.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. GENERAL FAQ SECTION (Split Editorial Layout) ─── */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[#0071BC] font-bold text-xs uppercase tracking-widest bg-[#EEF6FC] px-3 py-1 rounded-full border border-[#E2E8F0]">
                Knowledge Base
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2E3192]">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Find clear answers about course eligibility, live project exposure, certificates, and placement support at Barrownz Learning Academy.
              </p>
              <div className="p-5 rounded-2xl bg-[#F4F7FC] border border-[#E2E8F0] space-y-2">
                <p className="text-xs font-bold text-[#2E3192]">Still have a specific question?</p>
                <a href="tel:+919076760009" className="inline-flex items-center gap-2 text-xs font-bold text-[#0071BC] hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Speak with Admissions: +91 9076760009</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {faqData.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                    className={`w-full text-left p-4 sm:p-5 text-xs sm:text-sm font-bold flex justify-between items-center transition ${
                      activeFaq === idx ? "bg-[#2E3192] text-white" : "text-[#20243A] hover:bg-[#F4F7FC]"
                    }`}
                  >
                    <span className="pr-3">{f.q}</span>
                    {activeFaq === idx ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#0071BC]" />}
                  </button>
                  {activeFaq === idx && (
                    <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#E2E8F0] bg-[#F4F7FC]">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 10. ADMISSIONS COUNSELLING CTA STRIP ─── */}
      <section className="py-12 sm:py-14 bg-gradient-to-r from-[#2E3192] to-[#0071BC]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <p className="text-white font-semibold text-sm sm:text-base max-w-xl leading-relaxed">
            Get a call back from our Admissions Counselling team to find out which course will be best for your Placements.
          </p>
          <Link
            href="/RegisterForEnrollment"
            className="shrink-0 bg-white hover:bg-[#EEF6FC] text-[#2E3192] font-bold px-7 py-3 rounded-xl text-xs sm:text-sm transition whitespace-nowrap shadow-md"
          >
            Get Free Counselling →
          </Link>
        </div>
      </section>

    </main>
  );
}
