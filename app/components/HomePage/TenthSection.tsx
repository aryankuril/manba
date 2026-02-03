"use client";

import Image from "next/image";

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
    <section className="w-full container py-10 sm:py-15 lg:py-20 overflow-hidden">
      <div className="relative w-full">
<h2 className="text-center mb-10 font-semibold text-black ">Take Your Pick, We'll Finance It!!</h2>

        {/* FADE EDGES */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* MASK */}
        <div className="overflow-hidden">
          {/* TRACK */}
          <div className="flex w-[300%] animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-[400px] px-8"
              >
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={200}
                  height={100}
                  className="object-contain "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
