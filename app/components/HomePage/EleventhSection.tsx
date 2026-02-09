"use client";

import Image from "next/image";
import TextAnimation from "./../TextAnimation";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Kathrine Katija",
    role: "Marketing Manager",
    message:
      "Our ad campaigns finally speak to the right audience with clarity resulting in high CTR and ROI.",
    image: "/images/Testimonials-1.jpg",
    rating: 5,
  },
  {
    name: "John Miller",
    role: "Growth Lead",
    message:
      "Their strategic thinking completely transformed how we communicate our brand.",
    image: "/images/Testimonials-2.jpeg",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    role: "Founder, DEX",
    message: "Better engagement, better leads, and a crystal clear brand voice.",
    image: "/images/Testimonials-3.jpeg",
    rating: 5,
  },
  {
    name: "Neha Kapoor",
    role: "CMO",
    message:
      "Messaging, positioning, and growth strategy — everything became clear.",
    image: "/images/Testimonials-4.jpeg",
    rating: 5,
  },
];

export default function TestimonialMarquee() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // AUTO SCROLL
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;
    let speed = 0.7; // adjust speed here

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



const highlightWords = (text: string) => {
  const highlightList = [
    "ad campaigns finally speak to the right",
    "strategic thinking completely transformed",
    "Better engagement, better leads,",
    "everything became clear.",
  ];

  let updatedText = text;

  highlightList.forEach((phrase) => {
    const regex = new RegExp(`(${phrase})`, "gi");

    updatedText = updatedText.replace(
      regex,
      `<span class="bg-[#fff2a8] px-1 rounded-sm font-medium">$1</span>`
    );
  });

  return <span dangerouslySetInnerHTML={{ __html: updatedText }} />;
};



  return (
    <section className="w-full py-16 overflow-hidden">
      <TextAnimation>
        <h3 className="text-center mb-10 font-semibold text-black">
          What Our Clients Say
        </h3>
      </TextAnimation>

      {/* FADE EDGES */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* MASK */}
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
            setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
            setScrollLeft(sliderRef.current?.scrollLeft || 0);
          }}
          onTouchEnd={() => setIsDown(false)}
          onTouchMove={(e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
            const walk = (x - startX) * 1.5;
            if (sliderRef.current) {
              sliderRef.current.scrollLeft = scrollLeft - walk;
            }
          }}
        >
          <div className="flex w-max">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="flex-shrink-0 px-2">
                <div className="bg-white  rounded-corners p-4 gap-5 border  border-[#d4d4d4] shadow-md flex h-full overflow-hidden w-[520px]">
                  {/* IMAGE */}
                  <div className="relative w-[250px] min-h-[250px] flex-shrink-0">
                   <Image
  src={item.image}
  alt={item.name}
  fill
  sizes="(max-width: 768px) 100vw, 180px"
    className="object-cover object-top  rounded-corners"
/>

                  </div>

                  {/* CONTENT */}
                  <div className=" flex flex-col justify-between">
                    <p className="text-gray-900 body3  leading-relaxed">
“{highlightWords(item.message)}”

</p>


                    <div className="mt-6">
                      <p className="font-semibold text-[#205073]">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">{item.role}</p>

                      <div className="flex gap-1 mt-2">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <span key={i} className="text-[#faa220]">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
