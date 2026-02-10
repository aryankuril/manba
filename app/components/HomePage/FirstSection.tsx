"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TextAnimation from "../TextAnimation";
import { motion } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Happy Customer", value: 900, suffix: "K+" },
  { label: "Funding Available", value: 100, suffix: "%" },
  { label: "Hours of Digital", value: 800, suffix: "+" },
  { label: "Tracked Revenue", value: 150, suffix: "M+" },
];

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const FirstSection = () => {
  return (
    <div className="lg:px-0 px-5">
      <section
        style={{
          backgroundSize: "200% 100%",
          background:
            "linear-gradient(135deg, #205073 0%, #2fa7a0 55%, #329d9c 100%)",
        }}
        className="relative w-full container rounded-corners "
      >
        <div className="relative mx-auto flex flex-col md:flex-row md:h-[70vh] min-h-fit py-10 md:py-0 px-0 md:px-8">

          {/* MOBILE DESIGN */}
          <div className="md:hidden flex flex-col items-center gap-8 w-full">

            {/* IMAGE */}
            <div className="w-full flex justify-center">
              <Image
                src="/images/slider-img-011.png"
                alt="EV Two Wheeler"
                width={500}
                height={400}
                priority
                className="w-[95%] max-w-[320px] h-auto object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="w-full text-left">
              <div className="max-w-xl text-black">
                <TextAnimation>
                  <h1 className="font-bold leading-tight">
                    EV Two Wheeler Loan
                  </h1>
                </TextAnimation>

                <motion.p
                  className="mt-4 text-base leading-relaxed font-medium text-black"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Simplify your EV loan journey with Manba Finance. Use our easy
                  EMI calculator to plan your finances smartly and confidently.
                </motion.p>

                {/* STATS GRID */}
                <div className="mt-8 grid grid-cols-2 gap-y-6 gap-x-8 w-full">
                  {stats.map((item, index) => (
                    <div key={index} className="text-left">
                      <h4 className="text-2xl font-bold text-[#79f431]">
                        <Counter value={item.value} suffix={item.suffix} />
                      </h4>
                      <p className="text-sm text-black font-semibold">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="hidden md:block  absolute right-0 lg:top-[80%]  -translate-y-1/2 pointer-events-none">
            <div className="relative w-[90vw] md:w-[600px] lg:w-[700px] h-auto">
              <Image
                src="/images/slider-img-011.png"
                alt="EV Two Wheeler"
                width={800}
                height={600}
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* DESKTOP TEXT */}
          <div className="hidden md:flex z-10 h-full w-full items-center justify-start">
            <div className="text-left">
              <div className="relative z-10 max-w-3xl text-white">
                <TextAnimation>
                  <h1 className="font-bold mb-4">EV Two Wheeler Loan</h1>
                </TextAnimation>

                <motion.p
                  className="max-w-xl body3 text-white"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Simplify your finance needs with Manba Finance, here is the easy
                  to use EMI calculator to help you plan your finances.
                </motion.p>

                <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
                  {stats.map((item, index) => (
                    <div key={index} className="text-left">
                      <h4 className="text-2xl sm:text-3xl font-bold text-[#79f431]">
                        <Counter value={item.value} suffix={item.suffix} />
                      </h4>
                      <p className="body3 text-white">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FirstSection;
