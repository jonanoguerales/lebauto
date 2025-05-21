'use client';
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

interface PathDimensions {
  initialPath: string;
  targetPath: string;
}

export default function Curve() {
  const [pathDimensions, setPathDimensions] = useState<PathDimensions>({
    initialPath: '',
    targetPath: '',
  });

  useEffect(() => {
    const updatePaths = () => {
      const vh = window.innerHeight;
      setPathDimensions({
        initialPath: `M100 0 L200 0 L200 ${vh} L100 ${vh} Q-100 ${vh / 2} 100 0`,
        targetPath: `M100 0 L200 0 L200 ${vh} L100 ${vh} Q100 ${vh / 2} 100 0`,
      });
    };
    updatePaths();
  }, []);

  const curveVariants: Variants = {
    initial: {
      d: pathDimensions.initialPath,
    },
    enter: {
      d: pathDimensions.targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: pathDimensions.initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  if (!pathDimensions.initialPath) {
    return null;
  }

  return (
    <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-white stroke-none">
      <motion.path variants={curveVariants} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  );
}