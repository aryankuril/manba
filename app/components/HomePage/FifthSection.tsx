"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FifthSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth expansion
  const height = useTransform(scrollYProgress, [0, 0.5], ["50px", "100vh"]);
  const width = useTransform(scrollYProgress, [0, 0.5], ["92%", "100%"]);
  const radius = useTransform(scrollYProgress, [0, 0.5], ["24px", "0px"]);

  return (
    <section ref={ref} className="relative h-[200vh]  py-10 sm:py-15 lg:py-20">
      {/* Sticky expanding bar */}
      <motion.div
        style={{ height, width, borderRadius: radius }}
        className="sticky top-24 mx-auto overflow-hidden rounded-corners"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-corners"
          style={{
            backgroundImage: "url('/images/calculator.webp')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 " />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-xl px-10 text-white">
            <h3 className="text-4xl font-bold">EMI Calculator</h3>

            <h3 className="mt-2 text-2xl font-semibold">
              Own the Future Today!
            </h3>

            <p className="mt-4 text-sm leading-relaxed opacity-90">
              Experience the joy of riding an electric two-wheeler with easy
              monthly installments. Calculate your EMI now.
            </p>

            <button className="mt-6 rounded-corners bg-[#1f6f8b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#155d73]">
              Apply Now
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FifthSection;
