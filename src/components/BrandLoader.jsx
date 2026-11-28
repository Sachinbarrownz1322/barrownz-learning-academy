'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const SIZES = {
  sm: { box: 'w-16 h-16', text: 'text-[11px]', pct: 'text-xs' },
  md: { box: 'w-28 h-28', text: 'text-xs', pct: 'text-sm' },
  lg: { box: 'w-36 h-36', text: 'text-sm', pct: 'text-base' },
};

const CIRCUMFERENCE = 2 * Math.PI * 55;

export default function BrandLoader({
  label = 'Barrownz Learning Academy',
  sublabel = '',
  size = 'md',
  fullScreen = false,
  progress,
  className = '',
}) {
  const cfg = SIZES[size] || SIZES.md;
  const shouldReduceMotion = useReducedMotion();
  const [internalProgress, setInternalProgress] = useState(typeof progress === 'number' ? progress : 12);

  useEffect(() => {
    if (typeof progress === 'number') {
      setInternalProgress(Math.max(0, Math.min(100, Math.round(progress))));
      return;
    }
    const updateFromReadyState = () => {
      if (document.readyState === 'complete') {
        setInternalProgress(100);
      } else if (document.readyState === 'interactive') {
        setInternalProgress(72);
      } else {
        setInternalProgress(35);
      }
    };
    updateFromReadyState();
    document.addEventListener('readystatechange', updateFromReadyState);
    return () => document.removeEventListener('readystatechange', updateFromReadyState);
  }, [progress]);

  const pct = typeof progress === 'number' ? Math.max(0, Math.min(100, Math.round(progress))) : internalProgress;
  const isComplete = pct >= 100;
  const dashOffset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;

  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col items-center justify-center text-center gap-3 ${className}`}
    >
      <div className={`relative ${cfg.box} flex items-center justify-center select-none`}>
        <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full -rotate-90" aria-hidden="true">
          <circle cx="60" cy="60" r="55" fill="none" stroke="#0071BC" strokeOpacity="0.14" strokeWidth="2.5" />
          <motion.circle
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke="#0071BC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
        </svg>

        <svg viewBox="0 0 100 100" className="w-[74%] h-[74%]" aria-label="Barrownz Learning Academy">
          <defs>
            <linearGradient id="blaBlueGradWeb" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0071BC" />
              <stop offset="100%" stopColor="#2E3192" />
            </linearGradient>
          </defs>
          <text x="16" y="43" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="37" fill="#0071BC">
            B
          </text>
          <text x="16" y="78" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="37" fill="url(#blaBlueGradWeb)">
            L
          </text>
          <text x="49" y="78" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="37" fill="#2E3192">
            A
          </text>
          <text
            x="50"
            y="89"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="5.4"
            letterSpacing="0.4"
            fill="#0071BC"
          >
            BARROWNZ LEARNING ACADEMY
          </text>

          <motion.g
            style={{ transformOrigin: '50px 50px' }}
            animate={
              shouldReduceMotion || isComplete
                ? { rotate: 0, scale: 1, x: 0, y: 0 }
                : { rotate: 360, scale: 0.88 }
            }
            transition={
              shouldReduceMotion || isComplete
                ? { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                : { rotate: { repeat: Infinity, duration: 2.2, ease: 'linear' }, scale: { duration: 0.3 } }
            }
          >
            <motion.g
              animate={shouldReduceMotion || isComplete ? { x: 0, y: 0 } : { x: 18, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <path d="M 29 66 Q 52 57 57 25" fill="none" stroke="url(#blaBlueGradWeb)" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 29 66 Q 52 57 57 25" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2.5 2.5" strokeLinecap="round" />
              <polygon points="57,17 51,28 63,27" fill="#0071BC" />
            </motion.g>
          </motion.g>
        </svg>
      </div>

      <div className="space-y-0.5">
        <div className={`${cfg.pct} font-extrabold text-[#2E3192] tabular-nums tracking-tight`}>
          {pct}%
        </div>
        {label && <p className={`${cfg.text} font-bold text-[#2E3192] tracking-wide`}>{label}</p>}
        {sublabel && <p className="text-[11px] font-semibold text-[#0071BC]">{sublabel}</p>}
      </div>
    </motion.div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        {content}
      </div>
    );
  }

  return content;
}
