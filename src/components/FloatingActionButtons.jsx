"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { websiteData } from "@/data/siteData";

export default function FloatingActionButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const rawPhone = websiteData.phone || "+919076760009";
  const cleanPhone = rawPhone.replace(/[^0-9]/g, "");

  return (
    <div className="fixed right-4 sm:right-6 bottom-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#2E3192] border border-[#E2E8F0] shadow-lg hover:shadow-xl hover:bg-[#EEF6FC] transition-all duration-300 flex items-center justify-center group focus:outline-none"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* WhatsApp Chat Button */}
      <a
        href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
          "Hello Barrownz Learning Academy, I want to inquire about IT training & courses."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center relative group focus:outline-none"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#20243A] text-white text-xs font-semibold rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      {/* Call Helpline Button */}
      <a
        href={`tel:${rawPhone}`}
        aria-label="Call Admissions Helpline"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0071BC] hover:bg-[#005a96] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center relative group focus:outline-none"
      >
        <Phone className="w-5 h-5 fill-current text-white" />
        {/* Pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#0071BC]/30 animate-ping -z-10" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#20243A] text-white text-xs font-semibold rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Call: {rawPhone}
        </span>
      </a>
    </div>
  );
}
