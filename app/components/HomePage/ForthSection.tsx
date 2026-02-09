"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChartBar,
  Rocket,
  ClipboardList,
  Search,
  Zap,
} from "lucide-react";
import Button from "../Button";
import Image from "next/image";
import TextAnimation from './../TextAnimation';
import FadeInFromLeft from './../Animation/FadeInFromLeft';

export default function Thirdsection() {
  const steps = [
    {
      id: 1,
      title: "Customer Visits",
      desc: "Visits Website OR Visits Showroom",
      icon: "/icons/rating.png",
    },
    {
      id: 2,
      title: "CRM",
      desc: "Information is logged in the CRM",
      icon: "/icons/crm.png",
    },
    {
      id: 3,
      title: "Approval",
      desc: "System Approved in 1 min",
      icon: "/icons/approve.svg",
    },
    {
      id: 4,
      title: "Onboarding",
      desc: "GEO Deployment",
      icon: "/icons/onboarding.png",
    },
  ];

const [active, setActive] = useState(0);


useEffect(() => {
  const isMobile = window.innerWidth < 768;

  setActive(isMobile ? 1 : 0);

  const interval = setInterval(() => {
    setActive((prev) => {
      if (prev >= steps.length) {
        return isMobile ? 1 : 0;
      }
      return prev + 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [steps.length]);




const progressMap: Record<number, number> = {
  0: 0,
  1: 10,
  2: 38,
  3: 65,
  4: 100,
};



  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="w-full container py-10 sm:py-15 lg:py-20 flex flex-col items-center">
      <TextAnimation>
        <h3 className="text-center font-semibold text-black ">
          How Our Process Works
        </h3>
      </TextAnimation>

      <FadeInFromLeft>
      <p className="text-gray-600 body3 mb-10 text-center">
        To Make Your Dream Come True
      </p>
      </FadeInFromLeft>

      <div className="relative w-full px-6 overflow-hidden">
    
        {/* Desktop Background Line */}
        <div className="absolute top-[80px] left-[30px]  w-full h-1 bg-gray-200 rounded-full hidden md:block"></div>

        {/* Desktop Animated Fill Line */}
        <motion.div
  className="absolute top-[80px] h-1 w-full rounded-full hidden md:block"
  initial={{ width: 0 }}
  animate={{ width: `${progressMap[active] ?? 0}%` }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  style={{
    backgroundSize: "200% 100%",
    background:
      "linear-gradient(135deg, #205073 0%, #2fa7a0 55%, #329d9c 100%)",
  }}
/>


        {/* DESKTOP STEPS */}
        <div className="hidden md:flex justify-between relative z-10 mt-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActive(step.id)}
            >
              <motion.div
                className={`w-24 h-24 flex items-center justify-center rounded-full shadow-md transition-all ${
                  active >= step.id ? "bg-[#205073]" : "bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={step.icon}
                  alt=""
                  width={32}
                  height={32}
                  style={{
                    filter:
                      active >= step.id
                        ? "invert(70%) sepia(90%) saturate(900%) hue-rotate(50deg) brightness(105%) contrast(105%)"
                        : "brightness(0)",
                  }}
                />
              </motion.div>

              <h5 className="mt-4 font-medium text-highlight">{step.title}</h5>
              <p className="text-sm text-gray-600 body3">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* MOBILE SLIDING BALL ANIMATION */}
        <div className="md:hidden w-full flex justify-center relative h-50 mt-6 overflow-hidden">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={false}
              animate={{
                x:
                  step.id === active
                    ? 0
                    : step.id < active
                    ? -200
                    : 200,
                opacity: step.id === active ? 1 : 0,
                scale: step.id === active ? 1 : 0.6,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute flex flex-col items-center "
            >
              <div
                className={`w-28 h-28 flex items-center justify-center rounded-full shadow-md transition-all ${
                  active >= step.id ? "bg-[#205073]" : "bg-gray-200"
                }`}
              >
                <Image
                  src={step.icon}
                  alt=""
                  width={32}
                  height={32}
                  style={{
                    filter:
                      active >= step.id
                        ? "invert(70%) sepia(90%) saturate(900%) hue-rotate(50deg) brightness(105%) contrast(105%)"
                        : "brightness(0)",
                  }}
                />
              </div>

              <h5 className="mt-4 font-semibold">{step.title}</h5>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
