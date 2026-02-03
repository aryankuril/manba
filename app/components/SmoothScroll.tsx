"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0, // Higher = slower & smoother
      easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing
      lerp: 0.10, // Lower = smoother but slower catch-up
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
