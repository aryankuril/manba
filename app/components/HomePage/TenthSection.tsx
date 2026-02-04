"use client";

import Image from "next/image";
import TextAnimation from "./../TextAnimation";

const logos = [
  "/images/Ather.png",
  "/images/bajaj.png",
  "/images/tvs.png",
  "/images/Hero-Electric.png",
  "/images/Ather.png",
  "/images/bajaj.png",
  "/images/tvs.png",
  "/images/Hero-Electric.png",
];

export default function LogoInfiniteSlider() {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="relative w-full">
        <TextAnimation>
          <h3 className="text-center mb-8 sm:mb-10 font-semibold text-black px-4">
            Take Your Pick, We&apos;ll Finance It!!
          </h3>
        </TextAnimation>

        {/* FADE EDGES */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />

        {/* MASK */}
        <div className="overflow-hidden w-full">
          {/* TRACK */}
          <div className="flex w-[300%] animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center
                  w-[180px] sm:w-[220px] lg:w-[260px]
                  px-2 sm:px-3 lg:px-4
                  flex-shrink-0
                "
              >
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={140}
                  height={70}
                  className="object-contain w-auto h-9 sm:h-11 lg:h-13"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
