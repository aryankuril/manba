"use client";

import Image from "next/image";
import TextAnimation from "../TextAnimation";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <div className=" lg:px-0 px-5">
    <section 
    className="relative  w-full container bg-[#205073] rounded-corners ">
      {/* Rounded outer container */}
      <div className="relative mx-auto h-[55vh] md:h-[60vh] ">

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
            <h1 className="font-bold ">
              EV Two Wheeler
            </h1>
          </TextAnimation>

{/* Subtitle */}
        <motion.p
          className="mt-4 max-w-xl 
                     body2
                     font-semibold  text-black"
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
        </div>
        
        {/* RIGHT IMAGE */}
        <div className="hidden md:block  absolute right-0 lg:top-[70%]  -translate-y-1/2 pointer-events-none">
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



            
   <div className="relative z-10 max-w-xl text-white ">
          <TextAnimation>
            <h1 className="font-bold mb-4 ">
              EV Two Wheeler
            </h1>
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
  Simplify your finance needs with Manba Finance, here is the easy to use EMI calculator to help you plan your finances.

        </motion.p>
        </div>



          </div>

        </div>

 
      </div>
    </section>
    </div>
  );
};

export default FirstSection;
