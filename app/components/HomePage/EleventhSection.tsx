"use client";

import Image from "next/image";
import TextAnimation from './../TextAnimation';

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
    message:
      "Better engagement, better leads, and a crystal clear brand voice.",
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
        <div className="overflow-hidden w-full">
          {/* TRACK */}
          <div className="flex animate-marquee w-max">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                
              >
                <div className="bg-white border rounded-corners shadow-md flex h-full overflow-hidden">
                  {/* IMAGE */}
                  <div className="relative w-2/2 min-h-[220px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-fit"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col justify-between">
                    <p className="text-gray-900 text-sm leading-relaxed">
                      “{item.message}”
                    </p>

                    <div className="mt-6">
                      <p className="font-semibold text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>

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
