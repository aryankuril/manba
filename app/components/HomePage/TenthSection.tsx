"use client";

import Image from "next/image";
import TextAnimation from "./../TextAnimation";

const logos = [
  "/images/Ather.png",
  "/images/bajaj.png",
  "/images/tvs.png",
  "/images/Hero-Electric.png",
];

export default function LogoInfiniteSlider() {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <TextAnimation>
          <h3 className="text-center mb-10 font-semibold text-black">
            Take Your Pick, We&apos;ll Finance It!!
          </h3>
        </TextAnimation>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-corners shadow-md border hover:shadow-lg transition p-4 h-[90px]"
            >
              <Image
                src={logo}
                alt="Brand logo"
                width={160}
                height={80}
                className="object-contain max-h-[55px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
