"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  User, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  GraduationCap,
  Calendar,
  Layers,
  Award,
  ExternalLink,
  Code2,
  FileText,
  Building2,
  ClipboardCheck
} from "lucide-react";
import { websiteData } from "@/data/siteData";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [placementDropdownOpen, setPlacementDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [hoveredCourseIdx, setHoveredCourseIdx] = useState(null);
  
  // Mobile accordion state for nested items
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePlacementOpen, setMobilePlacementOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);

  const aboutTimeoutRef = React.useRef(null);
  const courseTimeoutRef = React.useRef(null);
  const trainingTimeoutRef = React.useRef(null);
  const servicesTimeoutRef = React.useRef(null);
  const placementTimeoutRef = React.useRef(null);
  const galleryTimeoutRef = React.useRef(null);

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutDropdownOpen(true);
  };
  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 180);
  };

  const handleCourseEnter = () => {
    if (courseTimeoutRef.current) clearTimeout(courseTimeoutRef.current);
    setCourseDropdownOpen(true);
  };
  const handleCourseLeave = () => {
    courseTimeoutRef.current = setTimeout(() => {
      setCourseDropdownOpen(false);
    }, 200);
  };

  const handleTrainingEnter = () => {
    if (trainingTimeoutRef.current) clearTimeout(trainingTimeoutRef.current);
    setTrainingDropdownOpen(true);
  };
  const handleTrainingLeave = () => {
    trainingTimeoutRef.current = setTimeout(() => {
      setTrainingDropdownOpen(false);
    }, 200);
  };

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const handlePlacementEnter = () => {
    if (placementTimeoutRef.current) clearTimeout(placementTimeoutRef.current);
    setPlacementDropdownOpen(true);
  };
  const handlePlacementLeave = () => {
    placementTimeoutRef.current = setTimeout(() => {
      setPlacementDropdownOpen(false);
    }, 180);
  };

  const handleGalleryEnter = () => {
    if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
    setGalleryDropdownOpen(true);
  };
  const handleGalleryLeave = () => {
    galleryTimeoutRef.current = setTimeout(() => {
      setGalleryDropdownOpen(false);
    }, 180);
  };

  // DigiCoders Style Navigation Links
  const aboutLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Our Experts", href: "/our-team" },
    { label: "Appreciation Letter", href: "/about-us#appreciation" },
    { label: "MOU With Colleges", href: "/Home/OurMOUs" },
    { label: "Certifications & Achievements", href: "/Home/VerifyCertificate" },
  ];

  const courseLinks = [
    { label: "Web Development", href: "/web-development-course-in-lucknow" },
    { label: "MERN Full Stack Development", href: "/mern-full-stack-development-course" },
    { label: "Programming Languages", href: "/programming-language-course-in-lucknow" },
    { label: "Digital Marketing & SEO", href: "/digital-marketing-course-in-lucknow" },
    { label: "Data Analytics & Power BI", href: "/data-analytics-course-lucknow" },
    { label: "Graphic Designing", href: "/graphic-designing-course-in-lucknow" },
    { label: "Personality Development", href: "/personality-development-training-lucknow" },
    { label: "Video Editing & VFX", href: "/video-editing" },
    { label: "Database Engineering", href: "/database-development-course-in-lucknow" },
  ];

  const trainingLinks = [
    { label: "Summer Industrial Training 2026", href: "/summer-training-in-lucknow" },
    { label: "Winter Training Bootcamp", href: "/winter-training-in-lucknow" },
    { label: "Industrial & Apprenticeship", href: "/apprenticeship-training-in-lucknow" },
    { label: "Download Training Syllabus", href: "/Home/TrainingSyllabus" },
    { label: "Register for Training Cohort", href: "/RegisterForEnrollment" },
  ];

  const servicesLinks = [
    { label: "Custom Web & SaaS Development", href: "/services/web-development" },
    { label: "Enterprise Software & ERP Solutions", href: "/services/software-engineering" },
    { label: "Mobile Apps & Cloud DevOps", href: "/services/mobile-cloud-devops" },
    { label: "UI/UX & Product Design Systems", href: "/services/ui-ux-design" },
    { label: "Corporate IT Training & FDPs", href: "/services/corporate-training" },
    { label: "All Services Overview", href: "/services" },
  ];

  const placementLinks = [
    { label: "Placement Cell Overview", href: "/Home/BLAPlacement" },
    { label: "Recent Placements & Scholars", href: "/Home/BLAPlacement/recent-placements" },
    { label: "Corporate Hiring Partners", href: "/Home/BLAPlacement/hiring-partners" },
  ];

  const galleryLinks = [
    { label: "Campus & Practical Labs", href: "/gallery" },
    { label: "Seminars & Corporate Events", href: "/gallery/seminars-events" },
    { label: "Student Projects & Awards", href: "/gallery/projects-awards" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setCourseDropdownOpen(false);
    setTrainingDropdownOpen(false);
    setServicesDropdownOpen(false);
    setPlacementDropdownOpen(false);
    setGalleryDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* 1. TOP UTILITY BAR */}
      <div className={`bg-[#20243A] text-slate-300 text-xs sm:text-[13px] font-medium transition-all duration-300 overflow-hidden ${
        scrolled ? "max-h-0 opacity-0 py-0 border-none pointer-events-none" : "max-h-24 opacity-100 py-2 border-b border-slate-800/80"
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <a 
              href={`tel:${websiteData.phone}`} 
              className="flex items-center gap-1.5 hover:text-white transition group whitespace-nowrap"
            >
              <div className="w-5 h-5 rounded-full bg-[#EEF6FC]/10 flex items-center justify-center group-hover:bg-[#0071BC]/20 transition">
                <Phone className="w-3 h-3 text-blue-400" />
              </div>
              <span className="tracking-wide">{websiteData.phone}</span>
            </a>
            <a 
              href={`mailto:${websiteData.email}`} 
              className="flex items-center gap-1.5 hover:text-white transition group whitespace-nowrap"
            >
              <div className="w-5 h-5 rounded-full bg-[#EEF6FC]/10 flex items-center justify-center group-hover:bg-[#0071BC]/20 transition">
                <Mail className="w-3 h-3 text-blue-400" />
              </div>
              <span>{websiteData.email}</span>
            </a>
            <div className="hidden 2xl:flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
              <MapPin className="w-3 h-3 text-[#0071BC] flex-shrink-0" />
              <span className="truncate max-w-xs">{websiteData.address}</span>
            </div>
          </div>

          {/* Portals, Brochures, Verification & Socials */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2 flex-shrink-0">
            <Link
              href="/Home/VerifyStudent"
              className="inline-flex items-center gap-1.5 bg-[#0071BC] hover:bg-[#005a96] text-white px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold tracking-wide transition shadow-sm hover:shadow hover:-translate-y-0.5 whitespace-nowrap"
            >
              <User className="w-3.5 h-3.5" />
              <span>Verify Student</span>
            </Link>

            <Link
              href="/Home/VerifyCertificate"
              className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold tracking-wide transition shadow-sm hover:shadow hover:-translate-y-0.5 whitespace-nowrap"
            >
              <ClipboardCheck className="w-3.5 h-3.5 text-emerald-200" />
              <span>Verify Certificate</span>
            </Link>

            <Link
              href="/Home/TrainingSyllabus"
              className="hidden md:inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white border border-slate-700 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-semibold tracking-wide transition shadow-sm hover:shadow hover:-translate-y-0.5 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Training Brochure</span>
            </Link>

            <Link
              href="/about-us"
              className="hidden lg:inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white border border-slate-700 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-semibold tracking-wide transition shadow-sm hover:shadow hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Company Profile</span>
            </Link>

            {/* Social SVGs with Official Default Brand Colors */}
            <div className="flex items-center gap-2 pl-2 ml-1 border-l border-slate-700">
              <a 
                href={websiteData.socials.facebook} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 shadow-sm transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a 
                href={websiteData.socials.youtube} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 shadow-sm transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2.1 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z"/></svg>
              </a>
              <a 
                href={websiteData.socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 shadow-sm transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href={websiteData.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 shadow-sm transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. NOTICE BAR */}
      <div className={`marquee-container transition-all duration-300 overflow-hidden ${
        scrolled ? "max-h-0 opacity-0 py-0 pointer-events-none" : "max-h-16 opacity-100 py-1.5"
      }`}>
        <div className="marquee-content text-xs sm:text-sm font-medium">
          {[0, 1].map((dupIdx) => (
            <div key={dupIdx} className="flex items-center gap-3 pr-10 shrink-0" aria-hidden={dupIdx === 1}>
              <img src="/images/blinkStar.gif" alt="" className="w-5 h-5 inline-block shrink-0" />
              <span className="font-semibold">{websiteData.marqueeNotice || "Boost your skills with our expert-led training. Learn fast, grow faster."}</span>
              <img src="/images/blinkStar.gif" alt="" className="w-5 h-5 inline-block shrink-0" />
              <span className="text-blue-200">|</span>
              <span className="inline-flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0 inline" />
                <span>Next Batch Starting This Monday (Classroom &amp; Hybrid)</span>
              </span>
              <span className="text-blue-200">|</span>
              <span>100% Placement &amp; Live Project Certification</span>
              <span className="text-blue-200">|</span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-blue-200 shrink-0 inline" />
                <span>Call for Seat Reservation: {websiteData.phone}</span>
              </span>
              <span className="text-blue-200 pl-4">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MAIN NAVBAR (STICKY & ELEVATED) */}
      <nav className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-md py-1 border-b border-[#E5EAF2]" : "shadow-xs py-1.5 border-b border-slate-100"
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-2 xl:gap-4 h-16 sm:h-20">
            {/* Brand Logo in Landscape Format */}
            <Link href="/" className="flex items-center flex-shrink-0 group">
              <div className="relative h-11 sm:h-12 lg:h-14 w-36 sm:w-44 xl:w-48 2xl:w-52 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo/logo.png"
                  alt="Barrownz Learning Academy"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links - Pure CSS Responsive Breakpoint */}
            <div className="hidden xl:flex items-center gap-1 2xl:gap-2 text-[14px] 2xl:text-[15px] font-semibold text-slate-700 flex-shrink-0 whitespace-nowrap">
                <Link 
                  href="/" 
                  className={`px-2 xl:px-2.5 py-2 rounded-lg transition-all whitespace-nowrap flex-shrink-0 ${
                    pathname === "/" ? "text-[#2E3192] font-bold bg-[#EAF4FC]" : "hover:text-[#2E3192] hover:bg-slate-50"
                  }`}
                >
                  <span className="whitespace-nowrap flex-shrink-0">Home</span>
                </Link>
                
                {/* ABOUT DROPDOWN (DigiCoders Style) */}
                <div
                  className="relative py-2 flex-shrink-0 whitespace-nowrap"
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                >
                  <button 
                    onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                    className={`px-2 xl:px-2.5 py-2 rounded-lg text-[14px] 2xl:text-[15px] font-semibold transition-all focus:outline-none whitespace-nowrap flex-shrink-0 ${
                      aboutDropdownOpen || pathname.includes("about") || pathname.includes("team") || pathname.includes("OurMOUs") ? "text-[#2E3192] font-bold bg-[#EAF4FC]" : "text-gray-700 hover:text-[#2E3192] hover:bg-slate-50"
                    }`}
                    aria-expanded={aboutDropdownOpen}
                  >
                    <span className="whitespace-nowrap flex-shrink-0">About</span>
                  </button>

                  {/* Bridge */}
                  <div className={`absolute top-full left-0 w-full h-2 ${aboutDropdownOpen ? "block" : "hidden"}`} />

                  {/* DigiCoders Style Dropdown Menu */}
                  <div 
                    className={`absolute top-[calc(100%+2px)] left-0 min-w-[220px] bg-white shadow-2xl rounded-b-xl border border-[#E5EAF2] border-t-2 border-t-[#2E3192] overflow-hidden z-50 transition-all duration-200 ease-out origin-top ${
                      aboutDropdownOpen 
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible" 
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
                    }`}
                  >
                    <div className="py-1">
                      {aboutLinks.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setAboutDropdownOpen(false)}
                          className="block px-4 py-2.5 text-xs sm:text-[13px] font-medium text-slate-700 hover:text-[#2E3192] hover:bg-[#EAF4FC] hover:pl-5 transition-all duration-150 border-b border-slate-100 last:border-b-0 whitespace-nowrap"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 1. COURSES DROPDOWN WITH RIGHT-SIDE FLYOUT */}
                <div
                  className="relative py-2 flex-shrink-0 whitespace-nowrap"
                  onMouseEnter={handleCourseEnter}
                  onMouseLeave={() => {
                    handleCourseLeave();
                    setHoveredCourseIdx(null);
                  }}
                >
                  <button 
                    onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                    className={`px-2 xl:px-2.5 py-2 rounded-lg text-[14px] 2xl:text-[15px] font-semibold transition-all focus:outline-none whitespace-nowrap flex-shrink-0 ${
                      courseDropdownOpen || pathname.includes("course") ? "text-[#2E3192] font-bold bg-[#EAF4FC]" : "text-gray-700 hover:text-[#2E3192] hover:bg-slate-50"
                    }`}
                    aria-expanded={courseDropdownOpen}
                  >
                    <span className="whitespace-nowrap flex-shrink-0">Courses</span>
                  </button>

                  {/* Bridge */}
                  <div className={`absolute top-full left-0 w-full h-2 ${courseDropdownOpen ? "block" : "hidden"}`} />

                  {/* Dropdown Menu + Right Side Subcourse Flyout */}
                  <div 
                    className={`absolute top-[calc(100%+2px)] left-0 min-w-[260px] bg-white shadow-2xl rounded-b-xl border border-[#E5EAF2] border-t-2 border-t-[#2E3192] z-50 transition-all duration-200 ease-out origin-top ${
                      courseDropdownOpen 
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible" 
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
                    }`}
                  >
                    <div className="py-1">
                      {websiteData.coursesNavigation.map((cat, idx) => {
                        const hasSub = cat.subcourses && cat.subcourses.length > 0;
                        const isHovered = hoveredCourseIdx === idx;
                        return (
                          <div
                            key={cat.category}
                            className="relative border-b border-slate-100 last:border-b-0"
                            onMouseEnter={() => setHoveredCourseIdx(idx)}
                          >
                            <Link
                              href={cat.slug}
                              onClick={() => {
                                setCourseDropdownOpen(false);
                                setHoveredCourseIdx(null);
                              }}
                              className={`flex items-center justify-between gap-3 px-4 py-2.5 text-xs sm:text-[13px] font-medium transition-all duration-150 whitespace-nowrap ${
                                isHovered
                                  ? "text-[#2E3192] bg-[#EAF4FC] pl-5 font-bold"
                                  : "text-slate-700 hover:text-[#2E3192] hover:bg-[#EAF4FC] hover:pl-5"
                              }`}
                            >
                              <span>{cat.category}</span>
                              {hasSub && <ChevronRight className="w-3.5 h-3.5 text-[#0071BC] shrink-0" />}
                            </Link>

                            {/* Right-Side Flyout Submenu */}
                            {hasSub && isHovered && (
                              <div className="absolute top-0 left-full ml-0.5 min-w-[260px] bg-white shadow-2xl rounded-xl border border-[#E5EAF2] border-t-2 border-t-[#0071BC] py-1.5 z-50">
                                <div className="px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0071BC] border-b border-slate-100">
                                  {cat.category} Tracks
                                </div>
                                {cat.subcourses.map((sub) => (
                                  <Link
                                    key={sub.slug}
                                    href={sub.slug}
                                    onClick={() => {
                                      setCourseDropdownOpen(false);
                                      setHoveredCourseIdx(null);
                                    }}
                                    className="block px-4 py-2.5 text-xs sm:text-[13px] font-medium text-slate-700 hover:text-[#2E3192] hover:bg-[#EAF4FC] hover:pl-5 transition-all duration-150 border-b border-slate-100 last:border-b-0 whitespace-nowrap"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 2. TRAINING DROPDOWN (DigiCoders Style) */}
                <div
                  className="relative py-2 flex-shrink-0 whitespace-nowrap"
                  onMouseEnter={handleTrainingEnter}
                  onMouseLeave={handleTrainingLeave}
                >
                  <button 
                    onClick={() => setTrainingDropdownOpen(!trainingDropdownOpen)}
                    className={`px-2 xl:px-2.5 py-2 rounded-lg text-[14px] 2xl:text-[15px] font-semibold transition-all focus:outline-none whitespace-nowrap flex-shrink-0 ${
                      trainingDropdownOpen || pathname.includes("training") ? "text-[#2E3192] font-bold bg-[#EAF4FC]" : "text-gray-700 hover:text-[#2E3192] hover:bg-slate-50"
                    }`}
                    aria-expanded={trainingDropdownOpen}
                  >
                    <span className="whitespace-nowrap flex-shrink-0">Training</span>
                  </button>

                  {/* Bridge */}
                  <div className={`absolute top-full left-0 w-full h-2 ${trainingDropdownOpen ? "block" : "hidden"}`} />

                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-[calc(100%+2px)] left-0 min-w-[260px] bg-white shadow-2xl rounded-b-xl border border-[#E5EAF2] border-t-2 border-t-[#2E3192] overflow-hidden z-50 transition-all duration-200 ease-out origin-top ${
                      trainingDropdownOpen 
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible" 
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
                    }`}
                  >
                    <div className="py-1">
                      {trainingLinks.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setTrainingDropdownOpen(false)}
                          className="block px-4 py-2.5 text-xs sm:text-[13px] font-medium text-slate-700 hover:text-[#2E3192] hover:bg-[#EAF4FC] hover:pl-5 transition-all duration-150 border-b border-slate-100 last:border-b-0 whitespace-nowrap"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. OUR SERVICES DROPDOWN (DigiCoders Style) */}
                <div
                  className="relative py-2 flex-shrink-0 whitespace-nowrap"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button 
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className={`px-2 xl:px-2.5 py-2 rounded-lg text-[14px] 2xl:text-[15px] font-semibold transition-all focus:outline-none whitespace-nowrap flex-shrink-0 ${
                      servicesDropdownOpen || pathname.includes("services") ? "text-[#2E3192] font-bold bg-[#EAF4FC]" : "text-gray-700 hover:text-[#2E3192] hover:bg-slate-50"
                    }`}
                    aria-expanded={servicesDropdownOpen}
                  >
                    <span className="whitespace-nowrap flex-shrink-0">Our Services</span>
                  </button>

                  {/* Bridge */}
                  <div className={`absolute top-full left-0 w-full h-2 ${servicesDropdownOpen ? "block" : "hidden"}`} />

                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-[calc(100%+2px)] left-0 min-w-[280px] bg-white shadow-2xl rounded-b-xl border border-[#E5EAF2] border-t-2 border-t-[#2E3192] overflow-hidden z-50 transition-all duration-200 ease-out origin-top ${
                      servicesDropdownOpen 
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible" 
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
                    }`}
                  >
                    <div className="py-1">
                      {servicesLinks.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block px-4 py-2.5 text-xs sm:text-[13px] font-medium text-slate-700 hover:text-[#2E3192] hover:bg-[#EAF4FC] hover:pl-5 transition-all duration-150 border-b border-slate-100 last:border-b-0 whitespace-nowrap"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. PLACEMENT DROPDOWN (DigiCoders Style) */}
                <div
                  className="relative py-2 flex-shrink-0 whitespace-nowrap"
                  onMouseEnter={handlePlacementEnter}
                  onMouseLeave={handlePlacementLeave}
                >
                  <button 
                    onClick={() => setPlacementDropdownOpen(!placementDropdownOpen)}
                    className={`px-2 xl:px-2.5 py-2 rounded-lg text-[14px] 2xl:text-[15px] font-semibold transition-all focus:outline-none whitespace-nowrap flex-shrink-0 ${
                      placementDropdownOpen || pathname.includes("Placement") ? "text-[#2E3192] font-bold bg-[#EAF4FC]" : "text-gray-700 hover:text-[#2E3192] hover:bg-slate-50"
                    }`}
                    aria-expanded={placementDropdownOpen}
                  >
                    <span className="whitespace-nowrap flex-shrink-0">Placement</span>
                  </button>

                  {/* Bridge */}
                  <div className={`absolute top-full left-0 w-full h-2 ${placementDropdownOpen ? "block" : "hidden"}`} />

                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-[calc(100%+2px)] left-0 min-w-[230px] bg-white shadow-2xl rounded-b-xl border border-[#E5EAF2] border-t-2 border-t-[#2E3192] overflow-hidden z-50 transition-all duration-200 ease-out origin-top ${
                      placementDropdownOpen 
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible" 
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
                    }`}
                  >
                    <div className="py-1">
                      {placementLinks.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setPlacementDropdownOpen(false)}
                          className="block px-4 py-2.5 text-xs sm:text-[13px] font-medium text-slate-700 hover:text-[#2E3192] hover:bg-[#EAF4FC] hover:pl-5 transition-all duration-150 border-b border-slate-100 last:border-b-0 whitespace-nowrap"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. GALLERY DROPDOWN (DigiCoders Style) */}
                <div
                  className="relative py-2 flex-shrink-0 whitespace-nowrap"
                  onMouseEnter={handleGalleryEnter}
                  onMouseLeave={handleGalleryLeave}
                >
                  <button 
                    onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
                    className={`px-2 xl:px-2.5 py-2 rounded-lg text-[14px] 2xl:text-[15px] font-semibold transition-all focus:outline-none whitespace-nowrap flex-shrink-0 ${
                      galleryDropdownOpen || pathname.includes("gallery") ? "text-[#2E3192] font-bold bg-[#EAF4FC]" : "text-gray-700 hover:text-[#2E3192] hover:bg-slate-50"
                    }`}
                    aria-expanded={galleryDropdownOpen}
                  >
                    <span className="whitespace-nowrap flex-shrink-0">Gallery</span>
                  </button>

                  {/* Bridge */}
                  <div className={`absolute top-full left-0 w-full h-2 ${galleryDropdownOpen ? "block" : "hidden"}`} />

                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-[calc(100%+2px)] left-0 min-w-[220px] bg-white shadow-2xl rounded-b-xl border border-[#E5EAF2] border-t-2 border-t-[#2E3192] overflow-hidden z-50 transition-all duration-200 ease-out origin-top ${
                      galleryDropdownOpen 
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible" 
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
                    }`}
                  >
                    <div className="py-1">
                      {galleryLinks.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setGalleryDropdownOpen(false)}
                          className="block px-4 py-2.5 text-xs sm:text-[13px] font-medium text-slate-700 hover:text-[#2E3192] hover:bg-[#EAF4FC] hover:pl-5 transition-all duration-150 border-b border-slate-100 last:border-b-0 whitespace-nowrap"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 6. CONTACT (Direct Link, No Dropdown) */}
                <Link 
                  href="/contact-us" 
                  className={`px-2 xl:px-2.5 py-2 rounded-lg text-[14px] 2xl:text-[15px] transition-all whitespace-nowrap flex-shrink-0 ${
                    pathname.includes("contact") ? "text-[#2E3192] font-bold bg-[#EAF4FC]" : "hover:text-[#2E3192] hover:bg-slate-50"
                  }`}
                >
                  <span className="whitespace-nowrap flex-shrink-0">Contact</span>
                </Link>

                {/* 7. BLOGS */}
                <Link 
                  href="/blog" 
                  className={`px-2 xl:px-2.5 py-2 rounded-lg text-[14px] 2xl:text-[15px] transition-all whitespace-nowrap flex-shrink-0 ${
                    pathname === "/blog" ? "text-[#2E3192] font-bold bg-[#EAF4FC]" : "hover:text-[#2E3192] hover:bg-slate-50"
                  }`}
                >
                  <span className="whitespace-nowrap flex-shrink-0">Blogs</span>
                </Link>
              </div>

                {/* Desktop Action CTAs - whitespace-nowrap and flex-shrink-0 so they never wrap onto two lines */}
            <div className="hidden xl:flex items-center gap-2 flex-shrink-0 whitespace-nowrap">
                <Link
                  href="/login?mode=student"
                  className="bg-[#0071BC] hover:bg-[#005a96] text-white px-3.5 xl:px-4 py-2 rounded-lg font-bold text-[13px] 2xl:text-[14px] tracking-wide transition shadow-sm hover:shadow hover:-translate-y-0.5 duration-200 flex items-center whitespace-nowrap flex-shrink-0"
                >
                  <span className="whitespace-nowrap flex-shrink-0">Student Login</span>
                </Link>
                <Link
                  href="/login?mode=portal"
                  className="bg-[#2E3192] hover:bg-[#0071BC] text-white px-3.5 xl:px-4 py-2 rounded-lg font-bold text-[13px] 2xl:text-[14px] tracking-wide transition shadow-sm hover:shadow hover:-translate-y-0.5 duration-200 flex items-center whitespace-nowrap flex-shrink-0"
                >
                  <span className="whitespace-nowrap flex-shrink-0">BLA Login</span>
                </Link>
              </div>

            {/* Mobile & Tablet Hamburger Toggle */}
            <div className="flex xl:hidden items-center gap-2 flex-shrink-0">
              <Link
                href="/login?mode=student"
                className="text-xs font-bold bg-[#0071BC] hover:bg-[#005a96] text-white px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 shadow-sm"
              >
                Student Login
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#2E3192] hover:bg-slate-100 focus:outline-none transition flex-shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#E5EAF2] bg-white px-5 pt-3 pb-8 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900 hover:text-[#2E3192]"
            >
              Home
            </Link>
            
            {/* Mobile About Accordion */}
            <div className="py-1 border-y border-slate-100">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex justify-between items-center py-2 text-sm font-bold text-slate-900"
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition ${mobileAboutOpen ? "rotate-180 text-[#2E3192]" : ""}`} />
              </button>
              {mobileAboutOpen && (
                <div className="pl-3 py-2 space-y-2 border-l-2 border-[#2E3192] mt-1">
                  {aboutLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-[#2E3192]"
                    >
                      • {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Courses Accordion */}
            <div className="py-1 border-b border-slate-100">
              <button
                onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
                className="w-full flex justify-between items-center py-2 text-sm font-bold text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#2E3192]" />
                  Courses
                </span>
                <ChevronDown className={`w-4 h-4 transition ${mobileCourseOpen ? "rotate-180 text-[#2E3192]" : ""}`} />
              </button>
              {mobileCourseOpen && (
                <div className="pl-3 py-2 space-y-2 border-l-2 border-[#2E3192] mt-1 max-h-60 overflow-y-auto">
                  {courseLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-[#2E3192]"
                    >
                      • {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Training Accordion */}
            <div className="py-1 border-b border-slate-100">
              <button
                onClick={() => setMobileTrainingOpen(!mobileTrainingOpen)}
                className="w-full flex justify-between items-center py-2 text-sm font-bold text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#0071BC]" />
                  Training
                </span>
                <ChevronDown className={`w-4 h-4 transition ${mobileTrainingOpen ? "rotate-180 text-[#0071BC]" : ""}`} />
              </button>
              {mobileTrainingOpen && (
                <div className="pl-3 py-2 space-y-2 border-l-2 border-[#2E3192] mt-1 max-h-60 overflow-y-auto">
                  {trainingLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-[#2E3192]"
                    >
                      • {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Services Accordion */}
            <div className="py-1 border-b border-slate-100">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center py-2 text-sm font-bold text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#2E3192]" />
                  Our Services
                </span>
                <ChevronDown className={`w-4 h-4 transition ${mobileServicesOpen ? "rotate-180 text-[#2E3192]" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-3 py-2 space-y-2 border-l-2 border-[#2E3192] mt-1 max-h-60 overflow-y-auto">
                  {servicesLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-[#2E3192]"
                    >
                      • {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Placement Accordion */}
            <div className="py-1 border-b border-slate-100">
              <button
                onClick={() => setMobilePlacementOpen(!mobilePlacementOpen)}
                className="w-full flex justify-between items-center py-2 text-sm font-bold text-slate-900"
              >
                <span>Placement</span>
                <ChevronDown className={`w-4 h-4 transition ${mobilePlacementOpen ? "rotate-180 text-[#2E3192]" : ""}`} />
              </button>
              {mobilePlacementOpen && (
                <div className="pl-3 py-2 space-y-2 border-l-2 border-[#2E3192] mt-1">
                  {placementLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-[#2E3192]"
                    >
                      • {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Gallery Accordion */}
            <div className="py-1 border-b border-slate-100">
              <button
                onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
                className="w-full flex justify-between items-center py-2 text-sm font-bold text-slate-900"
              >
                <span>Gallery</span>
                <ChevronDown className={`w-4 h-4 transition ${mobileGalleryOpen ? "rotate-180 text-[#2E3192]" : ""}`} />
              </button>
              {mobileGalleryOpen && (
                <div className="pl-3 py-2 space-y-2 border-l-2 border-[#2E3192] mt-1">
                  {galleryLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-[#2E3192]"
                    >
                      • {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Link */}
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-slate-100 text-sm font-bold text-slate-900 hover:text-[#2E3192]"
            >
              Contact
            </Link>

            {/* Mobile Blogs */}
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900 hover:text-[#2E3192]"
            >
              Blogs
            </Link>

            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                href="/login?mode=student"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#0071BC] text-white py-3 rounded-xl font-bold text-xs shadow-md"
              >
                Student Login
              </Link>
              <Link
                href="/login?mode=portal"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#2E3192] text-white py-3 rounded-xl font-bold text-xs shadow-md"
              >
                BLA Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
