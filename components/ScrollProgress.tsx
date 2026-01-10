'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-16 md:top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-emerald-600 to-blue-700 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
