// Shared Framer Motion variants — one motion standard for the whole site.
import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const iconPop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const buttonMotion = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
} as const;
