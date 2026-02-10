"use client"

import Image from "next/image";
import TextAnimation from "./../TextAnimation";
import Link from "next/link";

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
  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20">
      <div className="mx-auto">
        {/* Heading */}
        <TextAnimation>
          <h3 className="text-center text-black font-semibold mb-10">
            Related Products
          </h3>
        </TextAnimation>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="relative rounded-corners overflow-hidden border border-[#d4d4d4] group"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition duration-500"></div>

                {/* Content on Image */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h5 className="font-medium text-white mb-3">
                    {item.title}
                  </h5>

                  {/* Explore Button */}
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

              {/* Tailwind Animation */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
