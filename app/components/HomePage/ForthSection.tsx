"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TextAnimation from "./../TextAnimation";
import FadeInFromLeft from "./../Animation/FadeInFromLeft";

export default function Thirdsection() {
  const steps = [
    {
      id: 1,
      title: "Customer Visits",
      desc: "Start your EV loan journey easily online.",
      icon: "/icons/rating.png",
      img: "/images/process4.png",
    },
    {
      id: 2,
      title: "CRM",
      desc: "Provide required documents for verification.",
      icon: "/icons/crm.png",
      img: "/images/process1.jpg",
    },
    {
      id: 3,
      title: "Approval",
      desc: "Loan approval in just a few minutes.",
      icon: "/icons/approve.svg",
      img: "/images/process2.jpg",
    },
    {
      id: 4,
      title: "Onboarding",
      desc: "Complete onboarding and get your EV loan.",
      icon: "/icons/onboarding.png",
      img: "/images/process3.JPG",
    },
  ];

  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev >= steps.length ? 1 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [steps.length]);

  const activeStep = steps.find((s) => s.id === active);

  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20">
      <TextAnimation>
        <h3 className="text-center font-semibold text-black mb-4">
          Get an EV Two Wheeler loan  in just 4 steps
        </h3>
      </TextAnimation>

      <FadeInFromLeft>
        <p className="text-gray-600 body3 mb-12 text-center">
          To Make Your Dream Come True
        </p>
      </FadeInFromLeft>

<div className=" mx-auto flex flex-col lg:flex-row items-center justify-center gap-50 text-left relative">

        
        {/* LEFT PROCESS LIST */}
        <div >
          {/* <h4 className="text-2xl lg:text-3xl font-semibold text-black mb-8 leading-tight">
            Get an EV loan <br /> in just 4 steps
          </h4> */}

        <div className="flex flex-col gap-20 relative pl-6 overflow-hidden">
  {/* vertical line */}
  <div className="absolute left-[50px] top-3 bottom-3 w-[2px] bg-gray-200"></div>

  {steps.map((step) => {
    const isActive = active === step.id;

    return (
      <motion.div
        key={step.id}
        onClick={() => setActive(step.id)}
        className="flex items-start gap-5 cursor-pointer relative"
        initial={false}
        animate={{
          scale: isActive ? 1.03 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {/* icon circle */}
        <motion.div
          initial={false}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-500 flex-shrink-0 ${
            isActive
              ? "bg-[#205073] border-[#205073] shadow-md"
              : "bg-gray-100 border-gray-200"
          }`}
        >
          <motion.div
            initial={false}
            animate={{
              scale: isActive ? 1.2 : 1,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Image
              src={step.icon}
              alt=""
              width={24}
              height={24}
              className="object-cover"
              style={{
                filter: isActive
                  ? "invert(70%) sepia(90%) saturate(900%) hue-rotate(50deg) brightness(105%) contrast(105%)"
                  : "brightness(0)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* text */}
        <motion.div
          className="pt-1 origin-left w-full"
          initial={false}
          animate={{
            scale: isActive ? (window.innerWidth < 768 ? 1.05 : 1.25) : 1,
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <h5
            className={`font-semibold transition-all duration-300 ${
              isActive ? "text-black" : "text-gray-500"
            }`}
          >
            {step.title}
          </h5>

          <p
            className={`text-sm mt-1 leading-snug transition-all duration-300 ${
              isActive ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {step.desc}
          </p>
        </motion.div>
      </motion.div>
    );
  })}
</div>


          {/* MOBILE IMAGE BELOW
          <div className="block lg:hidden mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep?.img}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full flex justify-center"
              >
                <Image
                  src={activeStep?.img || "/images/process1.png"}
                  alt="Process Image"
                  width={320}
                  height={320}
                  className="object-contain w-full max-w-[280px]"
                />
              </motion.div>
            </AnimatePresence>
          </div> */}

        </div>

        {/* RIGHT SIDE IMAGE (DESKTOP ONLY) */}
        <div className="hidden lg:flex justify-center items-center">
 <div className="bg-white border rounded-corners border-gray-200 shadow-xl w-[520px] h-[500px] flex items-center justify-center overflow-hidden relative">
  <AnimatePresence mode="sync">
    <motion.div
      key={activeStep?.img}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <Image
        src={activeStep?.img || "/images/process1.png"}
        alt="Process Image"
        width={520}
        height={520}
        className="w-full h-full object-cover"
      />
    </motion.div>
  </AnimatePresence>
</div>

</div>


      </div>
    </section>
  );
}
