"use client";

import { useEffect } from 'react';

const ScrollToTopOnMount: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ('history' in window && window.history.scrollRestoration) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);

      const ensureScrollTop = () => {
        if (window.scrollY !== 0) {
          window.scrollTo(0, 0);
        }
      };
      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(ensureScrollTop);
      } else {
        setTimeout(ensureScrollTop, 0); 
      }
    }
  }, []);

  return null;
};

export default ScrollToTopOnMount;