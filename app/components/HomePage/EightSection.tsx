"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EightSection() {
  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20">
      <div className="mx-auto">
        <div className="relative overflow-hidden rounded-corners bg-gradient-to-r from-[#1c5c78] to-[#1b6f91] px-8 py-8 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

            {/* LEFT IMAGE — ANIMATED */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ x: -140, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1], // very smooth (easeOutExpo-like)
              }}
            >
              <Image
                src="/images/bike.svg"
                alt="EV Scooter"
                width={420}
                height={420}
                className="w-full max-w-md"
                priority
              />
            </motion.div>

            {/* RIGHT CONTENT */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
                Switch to Electric, <br /> Keep it Clean
              </h2>

              <p className="mt-5 text-lg text-white/90 max-w-xl">
                Electric Scooter Loan and EV Bike Loan. Made Easy by Manba!
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-5">
                <button className="bg-[#f9a825] hover:bg-[#f59e0b] text-white font-medium px-7 py-4 rounded-corners transition">
                  Apply Now for EV Wheeler Loan
                </button>

                <button className="border border-white text-white hover:bg-white hover:text-[#1b6f91] font-medium px-7 py-4 rounded-corners transition">
                  EMI Calculator
                </button>
              </div>
            </div>

          </div>

          {/* subtle diagonal overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
