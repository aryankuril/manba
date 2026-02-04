"use client";

import { useEffect, useRef, useState } from "react";
import TextAnimation from './../TextAnimation';

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Happy Customer", value: 900, suffix: "K+" },
  { label: "Funding Available", value: 100, suffix: "%" },
  { label: "Hours of Digital", value: 800, suffix: "+" },
  { label: "Tracked Revenue", value: 150, suffix: "M+" },
];

const StatsBar = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    stats.forEach((stat, i) => {
      let startTime: number | null = null;
      const duration = 1500;

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(progress * stat.value);
          return updated;
        });

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, [start]);

  return (
    <section ref={ref} className="w-full container py-10 sm:py-15 lg:py-20 lg:mt-20 mt-10">
      <div
  className="relative rounded-corners px-6 py-6 shadow-lg bg-[#205073] bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/images/statsbg.jpg')" }}
>

        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {stats.map((stat, i) => (
  <div key={i}>
    {/* BIG NUMBER */}
    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
      {counts[i]}
      {stat.suffix}
    </div>

    {/* LABEL */}
    <TextAnimation >
      <div className="mt-2 text-xs sm:text-sm text-white">
        {stat.label}
      </div>
    </TextAnimation>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default StatsBar;
