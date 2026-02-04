"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import Image from "next/image";
import TextAnimation from "../TextAnimation";
import FadeInFromLeft from './../Animation/FadeInFromLeft';

export default function ForthSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const steps = [
    {
      id: 1,
      title: "Customer Visits",
      desc: "Visits Website OR Visits Showroom",
      icon: <Image src="/icons/rating.png" alt="" width={32} height={32} />,
    },
    {
      id: 2,
      title: "CRM",
      desc: "Information is logged in the CRM",
      icon: <Image src="/icons/crm.png" alt="" width={32} height={32} />,
    },
    {
      id: 3,
      title: "Approval",
      desc: "System Approved in 1 min",
      icon: <Image src="/icons/approved.png" alt="" width={32} height={32} />,
    },
    {
      id: 4,
      title: "Onboarding",
      desc: "KYC, E-Sign, E-Mandate & Disbursement",
      icon: <Image src="/icons/onboarding.png" alt="" width={32} height={32} />,
    },
  ];

  const [active, setActive] = useState(1);

  // 🔥 SCROLL → STEP MAPPING (FIXED)
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 0.3;
      const total = (steps.length - 1) * vh;

      const progress = Math.min(
        Math.max((start - rect.top) / total, 0),
        1
      );

      const step = Math.round(progress * (steps.length - 1)) + 1;
      setActive(step);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [steps.length]);

  return (
    /* 🔥 SCROLL SPACE (FIXED HEIGHT) */
    <div
      ref={sectionRef}
      style={{ height: `${(steps.length - 1) * 120}vh` }}
      className="relative container py-10 sm:py-15 lg:py-20"
    >
      {/* 🔥 STICKY CONTENT */}
      <div className="sticky top-[25vh] w-full container flex flex-col items-center">
        <TextAnimation>
          <h3 className="text-center font-semibold mb-4">
            How Our Process Works
          </h3>
        </TextAnimation>
        <FadeInFromLeft>
        <div className="w-full max-w-2xl">
          <p className="mb-4  font-medium text-center text-gray-600 font-secondary">
            To Make Your Dream Come True
          </p>
        </div>
        </FadeInFromLeft>

        {/* 🔥 LINE + CIRCLES WRAPPER */}
        <div className="relative w-full mt-16 hidden md:block">
          {/* LINE */}
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gray-200 rounded-full -translate-y-1/2" />

          <motion.div
            className="absolute top-1/4 left-0 h-1 rounded-full -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, #79f431 0%, #2dc8f7 100%)",
            }}
            animate={{
              width: `${((active - 1) / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* STEPS */}
          <div className="relative flex justify-between">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center w-[200px]"
              >
                {/* CIRCLE (ALIGNED ON LINE) */}
                <motion.div
                  className="w-24 h-24 bg-[#2dc8f7] flex items-center justify-center rounded-full shadow-md z-10"
                  
                >
                  {step.icon}
                </motion.div>

                <h5 className="mt-4 font-semibold text-[#205073]">{step.title}</h5>
                <p className="text-sm text-gray-600 font-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 MOBILE (unchanged logic) */}
        <div className="md:hidden w-full relative h-60 mt-16 overflow-hidden">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              animate={{
                x:
                  step.id === active
                    ? 0
                    : step.id < active
                    ? -200
                    : 200,
                opacity: step.id === active ? 1 : 0,
              }}
              className="absolute w-full flex flex-col items-center"
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center shadow-md"
                style={{
                  background:
                    active >= step.id
                      ? "linear-gradient(90deg, #55c595, #329d9c)"
                      : "#e5e7eb",
                }}
              >
                {step.icon}
              </div>
              <h3 className="mt-3 font-semibold">{step.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* BUTTONS */}
        {/* <div className="flex gap-4 mt-10">
          <Button
            onClick={() => setActive((p) => Math.max(1, p - 1))}
            text="← Previous"
            className="bg-[#205073] text-white"
          />
          <Button
            onClick={() => setActive((p) => Math.min(steps.length, p + 1))}
            text="Next →"
            className="bg-[#205073] text-white"
          />
        </div> */}
      </div>
    </div>
  );
}
