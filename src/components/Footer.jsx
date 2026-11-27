"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { websiteData } from "@/data/siteData";
import { fetchPublicCms } from "@/lib/cms";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterNotice, setNewsletterNotice] = useState(false);
  const [cmsSettings, setCmsSettings] = useState(null);

  useEffect(() => {
    fetchPublicCms("/bootstrap").then((cms) => {
      if (cms?.settings) setCmsSettings(cms.settings);
    });
  }, []);

  const copyrightText = cmsSettings?.copyrightText || "© 2026 All Rights Reserved - Barrownz Group";

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterNotice(true);
    setNewsletterEmail("");
  };
  return (
    <footer className="bg-[#20243A] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#EEF6FC]/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">ISO 9001:2015</h4>
              <p className="text-sm text-slate-400">Certified Training Standards</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#0071BC]/15 border border-[#0071BC]/30 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#0071BC]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">100% Placement</h4>
              <p className="text-sm text-slate-400">Career Assistance &amp; Drives</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Live Client Projects</h4>
              <p className="text-sm text-slate-400">Authentic Production Code</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#0071BC]/15 border border-[#0071BC]/30 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#0071BC]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">+91 9076760009</h4>
              <p className="text-sm text-slate-400">Admissions Helpline</p>
            </div>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="relative h-16 sm:h-20 w-56 sm:w-72">
                <Image
                  src="/images/logo/logo-footer.png"
                  alt="Barrownz Learning Academy"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              We are Lucknow's best IT course and certificate provider. We help people to transform their careers and get ahead in this competitive world.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={websiteData.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
              </a>
              <a
                href={websiteData.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-red-600 flex items-center justify-center transition"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2.1 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" /></svg>
              </a>
              <a
                href={websiteData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-pink-600 flex items-center justify-center transition"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a
                href={websiteData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#0071BC] flex items-center justify-center transition"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-blue-500 pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/Home/BLAPlacement" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  BLA Placement
                </Link>
              </li>
              <li>
                <Link href="/Home/OurMOUs" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  Our MOUs
                </Link>
              </li>
              <li>
                <Link href="/Home/TrainingSyllabus" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  Training Syllabus
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verification Portals */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#0071BC] pl-2.5">
              Student Portals
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/Home/VerifyCertificate" className="hover:text-[#0071BC] transition flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0071BC] shrink-0" />
                  <span>Verify Certificate By Certificate ID</span>
                </Link>
              </li>
              <li>
                <Link href="/Home/VerifyStudent" className="hover:text-[#0071BC] transition flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0071BC] shrink-0" />
                  <span>Verify Student By Student Code</span>
                </Link>
              </li>
              <li>
                <Link href="/Home/GenerateCertificate" className="hover:text-[#0071BC] transition flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0071BC] shrink-0" />
                  <span>Workshop Certificate Generate</span>
                </Link>
              </li>
              <li>
                <Link href="/Home/GenerateCertificateIndustrialVisit" className="hover:text-[#0071BC] transition flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0071BC] shrink-0" />
                  <span>Industrial Visit Certificate</span>
                </Link>
              </li>
              <li>
                <a href="https://barrownz.com/" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1.5 text-slate-400">
                  <span>Barrownz Group</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support Contact & Newsletter */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-blue-500 pl-2.5">
              Support Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0071BC] mt-1 flex-shrink-0" />
                <span>2/90, Vastu Khand Gomti Nagar Lucknow 226010</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+919076760009" className="hover:text-white transition font-semibold">
                  +91 9076760009
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:support@barrownz.com" className="hover:text-white transition">
                  support@barrownz.com
                </a>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Newsletter
              </h5>
              <form onSubmit={handleNewsletterSubmit} className="flex rounded-lg overflow-hidden border border-slate-700 bg-slate-900 focus-within:border-[#0071BC]">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Newsletter email address"
                  className="bg-transparent px-3.5 py-2.5 text-sm text-white focus:outline-none w-full"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="bg-[#0071BC] hover:bg-[#005a96] px-3.5 py-2.5 text-sm font-bold text-white transition flex items-center justify-center shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              {newsletterNotice && (
                <p className="text-xs text-amber-300 mt-1.5 leading-snug">
                  Demo preview only: email captured in local UI state (backend newsletter sync pending).
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-3">
          <p>{copyrightText}</p>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-and-condition" className="hover:text-white transition">Terms &amp; Conditions</Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-white transition">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
