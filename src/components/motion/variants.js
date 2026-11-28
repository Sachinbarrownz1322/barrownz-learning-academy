export const MOTION_TIMING = {
  micro: 0.18,
  standard: 0.3,
  reveal: 0.5,
  stagger: 0.07,
  distance: 18,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: MOTION_TIMING.standard, ease: MOTION_TIMING.ease },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: MOTION_TIMING.distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_TIMING.reveal, ease: MOTION_TIMING.ease },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -MOTION_TIMING.distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_TIMING.standard, ease: MOTION_TIMING.ease },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: MOTION_TIMING.reveal, ease: MOTION_TIMING.ease },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: MOTION_TIMING.reveal, ease: MOTION_TIMING.ease },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: MOTION_TIMING.standard, ease: MOTION_TIMING.ease },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION_TIMING.stagger,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: MOTION_TIMING.ease },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: MOTION_TIMING.ease } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.16, ease: MOTION_TIMING.ease } },
};

export const modalTransition = {
  initial: { opacity: 0, scale: 0.96, y: 8 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.22, ease: MOTION_TIMING.ease } },
  exit: { opacity: 0, scale: 0.97, y: 6, transition: { duration: 0.16, ease: MOTION_TIMING.ease } },
};

export const dropdownTransition = {
  initial: { opacity: 0, y: -6, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: MOTION_TIMING.ease } },
  exit: { opacity: 0, y: -4, scale: 0.98, transition: { duration: 0.14, ease: MOTION_TIMING.ease } },
};

export const cardHover = {
  y: -3,
  transition: { duration: MOTION_TIMING.micro, ease: MOTION_TIMING.ease },
};

export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.12 },
};

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.12,
};
