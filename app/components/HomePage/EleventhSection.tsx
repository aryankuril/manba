"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Kathrine Katija",
    role: "Marketing Manager, ABC Ad Services",
    message:
      "Our ad campaigns finally speak to the right audience with clarity resulting in high CTR and ROI.",
    image: "/images/Testimonials-1.jpg",
    rating: 5,
  },
  {
    name: "John Miller",
    role: "Growth Lead, Pixel Agency",
    message:
      "Their strategic thinking and execution completely transformed how we communicate our brand.",
    image: "/images/Testimonials-2.jpeg",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    role: "Founder, DEX",
    message:
      "The results were instant. Better engagement, better leads, and a clear brand voice.",
    image: "/images/Testimonials-3.jpeg",
    rating: 5,
  },
  {
    name: "Kathrine Katija",
    role: "Marketing Manager, ABC Ad Services",
    message:
      "Our ad campaigns finally speak to the right audience with clarity resulting in high CTR and ROI.",
    image: "/images/Testimonials-4.jpeg",
    rating: 5,
  },
  {
    name: "John Miller",
    role: "Growth Lead, Pixel Agency",
    message:
      "Their strategic thinking and execution completely transformed how we communicate our brand.",
    image: "/images/Testimonials-5.jpeg",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    role: "Founder, DEX",
    message:
      "The results were instant. Better engagement, better leads, and a clear brand voice.",
    image: "/images/Testimonials-6.jpeg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const total = testimonials.length;
    return [
      (active - 1 + total) % total,
      active,
      (active + 1) % total,
    ];
  };

  return (
    <div className="w-full container py-10 sm:py-15 lg:py-20">
      <h2 className="text-center mb-10 font-semibold text-black">
        What Are Clients Says
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
        {/* LEFT IMAGES */}
        <div className="flex flex-row lg:flex-col gap-4 justify-center">
          {getVisibleImages().map((index) => {
            const item = testimonials[index];
            const isActive = index === active;

            return (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`relative w-25 h-25 sm:w-24 sm:h-24 lg:w-30 lg:h-30 rounded-corners overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "ring-2 ring-[#faa220] scale-105"
                    : "opacity-40 grayscale scale-95"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative bg-white rounded-corners overflow-hidden shadow-md border hover:shadow-lg p-6 sm:p-8 lg:p-10 flex-1 min-h-[320px] lg:min-h-[370px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-medium text-gray-900 leading-snug text-base sm:text-lg">
                “{testimonials[active].message}”
              </h3>

              <p className="mt-4 text-gray-500 text-sm sm:text-base">
                Trust her work, that the words that she delivered completely
                transformed our brand presence.
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[active].role}
                  </p>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: testimonials[active].rating }).map(
                    (_, i) => (
                      <span key={i} className="text-[#faa220] text-lg">
                        ★
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
