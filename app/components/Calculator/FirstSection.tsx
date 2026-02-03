"use client";

import Image from "next/image";
import TextAnimation from "../TextAnimation";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <section className="relative w-full overflow-hidden container py-10 sm:py-15 lg:py-10  ">
      {/* Rounded outer container */}
      <div className="relative mx-auto h-[50vh] md:h-[70vh] overflow-hidden rounded-corners ">
        
        {/* Desktop Background Image */}
        <Image
          src="/images/Calculator-hero.jpg"
          alt="EMI Calculator"
          fill
          priority
          className="hidden md:block object-cover"
        />

        {/* Mobile Background Image */}
        <Image
          src="/images/Calculator-hero-m.jpg"
          alt="EMI Calculator Mobile"
          fill
          priority
          className="block md:hidden object-cover"
        />



        {/* Decorative Top-Right Image */}


        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center md:justify-start px-6 md:px-16 text-white">
          
          {/* Left Text Content */}
          <div className=" text-left mt-10 md:mt-24">



            
           <TextAnimation>
  <h1 className="font-bold leading-tight text-white">
    EMI Calculator
  </h1>
</TextAnimation>


{/* Subtitle */}
        <motion.p
          className="mt-4 max-w-xl 
                     body2
                     font-semibold  text-white"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
  Simplify your finance needs with Manba Finance, here is the easy to use EMI calculator to help you plan your finances.

        </motion.p>


          </div>

        </div>
      </div>
    </section>
  );
};

export default FirstSection;
