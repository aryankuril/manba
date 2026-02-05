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
    <div className=" lg:px-0 px-5">
      <section className="relative  w-full container bg-[#205073] rounded-corners ">
        {/* Rounded outer container */}
        <div className="relative mx-auto h-[70vh] md:h-[70vh] ">


          {/* RIGHT SIDE BACKGROUND IMAGE */}
{/* <div
  className="hidden md:block absolute top-0 right-0 h-full w-[45%] bg-no-repeat bg-contain bg-right pointer-events-none"
  style={{
    backgroundImage: "url('/images/right-bg.png')",
  }}
></div> */}

          {/* MOBILE IMAGE */}
          <div className="md:hidden flex flex-col justify-center mb-8 gap-10 ">
            <Image
              src="/images/slider-img-011.png"
              alt="EV Two Wheeler"
              width={500}
              height={400}
              className="object-contain mt-12 sm:mt-16"
              priority
            />

            <div className=" z-10  lg:h-full sm:h-50 h-full flex flex-col md:flex-row items-center justify-center md:justify-start ">
              {/* Left Text Content */}
              <div className=" text-left items-center">
                <div className="relative z-10 max-w-xl text-black ">
                  <TextAnimation>
                    <h1 className="font-bold ">EV Two Wheeler Loan</h1>
                  </TextAnimation>

                  {/* Subtitle */}
                  <motion.p
                    className="mt-4 max-w-xl body2 font-semibold text-black"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    Simplify your EV loan journey with Manba Finance. Use our easy
                    EMI calculator to plan your finances smartly and confidently.
                  </motion.p>

                  {/* STATS GRID */}
                  <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
                    {stats.map((item, index) => (
                      <div key={index} className="text-left">
                        <h4 className="text-2xl sm:text-3xl font-bold text-[#79f431]">
                          <Counter value={item.value} suffix={item.suffix} />
                        </h4>
                        <p className="text-sm sm:text-base text-black font-semibold">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
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

          {/* Content */}
          <div className="   z-10  h-full  px-10 flex flex-col md:flex-row items-center justify-center md:justify-start ">
            {/* Left Text Content */}
            <div className=" hidden md:block  text-left items-center">
              <div className="relative z-10 max-w-3xl text-white ">
                <TextAnimation>
                  <h1 className="font-bold mb-4 ">EV Two Wheeler Loan</h1>
                </TextAnimation>

                {/* Subtitle */}
                <motion.p
                  className=" max-w-xl 
                     body2
                     font-semibold  text-white font-secondary"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Simplify your finance needs with Manba Finance, here is the easy
                  to use EMI calculator to help you plan your finances.
                </motion.p>

                {/* STATS GRID */}
                <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
                  {stats.map((item, index) => (
                    <div key={index} className="text-left">
                      <h4 className="text-2xl sm:text-3xl font-bold text-[#79f431]">
                        <Counter value={item.value} suffix={item.suffix} />
                      </h4>
                      <p className="body2
                     font-semibold  text-white font-secondary">
                        {item.label}
                      </p>
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
