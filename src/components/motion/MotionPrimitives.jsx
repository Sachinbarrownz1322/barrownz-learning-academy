'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  cardHover,
  buttonTap,
  VIEWPORT_CONFIG,
} from './variants';

export function MotionSection({ children, className = '', variants = fadeUp, ...props }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionStagger({ children, className = '', ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, className = '', ...props }) {
  return (
    <motion.div variants={staggerItem} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function MotionCard({ children, className = '', ...props }) {
  return (
    <motion.div
      whileHover={cardHover}
      whileTap={buttonTap}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
