"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { fadeIn, modalTransition } from "@/components/motion/variants";

export default function GalleryLightbox({ items, selectedIndex, onClose, onSelectIndex }) {
  const isOpen = selectedIndex !== null && selectedIndex >= 0 && selectedIndex < items.length;
  const current = isOpen ? items[selectedIndex] : null;

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onSelectIndex((selectedIndex + 1) % items.length);
      if (e.key === "ArrowLeft") onSelectIndex((selectedIndex - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, selectedIndex, items.length, onClose, onSelectIndex]);

  const handlePrev = (e) => {
    e.stopPropagation();
    onSelectIndex((selectedIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onSelectIndex((selectedIndex + 1) % items.length);
  };

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          key="lightbox-backdrop"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            key="lightbox-modal"
            variants={modalTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#E2E8F0]"
            onClick={(e) => e.stopPropagation()}
          >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/65 hover:bg-black text-white flex items-center justify-center transition"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {items.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#2E3192] text-white flex items-center justify-center transition"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#2E3192] text-white flex items-center justify-center transition"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="relative h-80 sm:h-[480px] w-full bg-[#111528]">
          <Image
            src={current.src}
            alt={current.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 900px"
          />
        </div>

        <div className="p-5 bg-white border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="inline-block text-[11px] font-bold text-[#2E3192] bg-[#EEF6FC] px-2.5 py-0.5 rounded-full">
                {current.category}
              </span>
              {current.location && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#64748B]">
                  <MapPin className="w-3 h-3 text-[#0071BC]" />
                  {current.location}
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#20243A]">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              {current.desc}
            </p>
          </div>
          <span className="text-xs font-semibold text-[#64748B] shrink-0">
            {selectedIndex + 1} / {items.length}
          </span>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
