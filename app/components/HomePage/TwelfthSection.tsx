"use client";

import Image from "next/image";
import TextAnimation from "./../TextAnimation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";

const products = [
  {
    title: "Two Wheeler Loan",
    image: "/images/related2.png",
    link: "https://www.manbafinance.com/two-wheeler-loan/",
  },
  {
    title: "Pre-Owned Two Wheeler Loan",
    image: "/images/related3.png",
    link: "https://www.manbafinance.com/used-two-wheeler-loan/",
  },
  {
    title: "EV Three Wheeler Loan",
    image: "/images/related1.png",
    link: "https://www.manbafinance.com/ev-three-wheeler/",
  },
];

export default function TwelfthSection() {
const sliderRef = useRef<HTMLDivElement | null>(null);


  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // AUTO SCROLL (Smooth Continuous)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;

    let speed = 0.7; // 👈 change speed here

    const autoScroll = () => {
      if (!isDown) {
        slider.scrollLeft += speed;

        // infinite loop
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isDown]);

  return (
    <section className="w-full py-10 sm:py-15 lg:py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT TEXT */}
        <div className="lg:w-[40%] w-full text-left">
        <TextAnimation>
          <h3
  className="text-[#010205]  font-semibold mb-5"
>
 EMI Calculator
</h3>
</TextAnimation>

{/* <FadeInFromLeft> */}

       <p className="text-gray-600 body3  mb-5">
Experience the joy of riding an electric two-wheeler with easy monthly installments Calculate Your EMI Now</p>

 <Button
           text="Check Your EMI"
        href="/calculator"
        className=" text-white "
          />
{/* </FadeInFromLeft> */}
        </div>

        {/* RIGHT SLIDER */}
        <div className="lg:w-[60%] w-full relative">

          {/* FADE EDGES */}
          {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10"></div> */}

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => {
              setIsDown(true);
              setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
              setScrollLeft(sliderRef.current?.scrollLeft || 0);
            }}
            onMouseLeave={() => setIsDown(false)}
            onMouseUp={() => setIsDown(false)}
            onMouseMove={(e) => {
              if (!isDown) return;
              e.preventDefault();
              const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
              const walk = (x - startX) * 1.5;
              if (sliderRef.current) {
                sliderRef.current.scrollLeft = scrollLeft - walk;
              }
            }}
            onTouchStart={(e) => {
              setIsDown(true);
              setStartX(
                e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0)
              );
              setScrollLeft(sliderRef.current?.scrollLeft || 0);
            }}
            onTouchEnd={() => setIsDown(false)}
            onTouchMove={(e) => {
              if (!isDown) return;
              const x =
                e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
              const walk = (x - startX) * 1.5;
              if (sliderRef.current) {
                sliderRef.current.scrollLeft = scrollLeft - walk;
              }
            }}
          >
            <div className="flex w-max gap-6 px-2">

              {/* Duplicate for infinite effect */}
              {[...products, ...products].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px]"
                >
                  <div className="relative rounded-corners overflow-hidden border border-[#d4d4d4] group">
                    
                    {/* Image */}
                    <div className="relative w-full h-[230px] sm:h-[260px] lg:h-[280px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition duration-500"></div>

                      {/* Content */}
                      <div className="absolute bottom-6 left-6 right-6 z-10">
                        <h5 className="font-medium text-white mb-3">
                          {item.title}
                        </h5>

                        <Link
                          href={item.link}
                          target="_blank"
                          className="relative inline-block text-white font-medium text-[16px]"
                        >
                          Explore More

                          {/* Animated underline */}
                          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white overflow-hidden">
                            <span className="absolute top-0 left-0 w-full h-full bg-[#205073] animate-[underlineMove_2.2s_linear_infinite]"></span>
                          </span>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* underline animation */}
      <style jsx>{`
        @keyframes underlineMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
