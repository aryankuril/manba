"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  prefix?: string;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
  ticks?: { value: number; label: string }[];
}

const AnimatedSlider = ({
  label,
  value,
  min,
  max,
  step,
  unit,
  prefix = "",
  onChange,
  formatValue,
  ticks = [],
}: AnimatedSliderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  /* 🔹 Clamp ONLY for slider rendering */
  const sliderValue = Math.min(max, Math.max(min, inputValue));

  const percentage = ((sliderValue - min) / (max - min)) * 100;
  // const safePercentage = Math.min(98, Math.max(2, percentage));

  const displayValue = formatValue
    ? formatValue(inputValue)
    : inputValue.toLocaleString("en-IN");

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* 🔹 LABEL + INPUT */}
      <div className="flex justify-between items-center ">
        <label className="body2 text-black">{label}</label>

        <div className="flex items-center border border-[#205073] rounded-md overflow-hidden ">
          {prefix && (
            <span className="px-3  text-[#205073] font-semibold">
              {prefix}
            </span>
          )}
          <input
            type="number"
            value={inputValue}
            onChange={(e) => {
              const v = Number(e.target.value);
              setInputValue(v);
              onChange(v);
            }}
            className="w-28 px-3 py-2 text-[#205073] font-semibold outline-none"
          />
          {unit && (
            <span className="px-3 text-[#205073] font-semibold">
              {unit}
            </span>
          )}
        </div>
      </div>

      {/* 🔹 SLIDER */}
      <div className="relative h-10 flex items-center">
        <div className="absolute w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
  className="h-full rounded-full"
  style={{
    width: `${percentage}%`,
    backgroundSize: "200% 100%",
            background:
              "linear-gradient(135deg, #205073 0%, #2fa7a0 55%, #329d9c 100%)",
  }}
  animate={{
    boxShadow: isDragging
      ? "0 0 15px rgba(45,200,247,0.6)"
      : "0 0 8px rgba(45,200,247,0.3)",
  }}
/>

        </div>

        {/* 🔹 THUMB */}
       <motion.div
  className="absolute w-5 h-5 -translate-x-1/2 pointer-events-none z-10"
  style={{ left: `${percentage}%` }}
  animate={{ scale: isDragging ? 1.3 : 1 }}
>
  <div className="w-full h-full rounded-full bg-[#0681ae] border-4 border-white shadow-lg" />
</motion.div>


        {/* 🔹 RANGE INPUT */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          onChange={(e) => {
            const v = Number(e.target.value);
            setInputValue(v);
            onChange(v);
          }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute w-full h-10 opacity-0 cursor-pointer z-20"
        />
      </div>

      {/* 🔹 TICKS */}
      {ticks.length > 0 && (
        <div className="relative h-5">
          {ticks.map((t, index) => {
            const left = ((t.value - min) / (max - min)) * 100;

            return (
              <span
                key={t.value}
                className="absolute text-xs text-black whitespace-nowrap"
                style={{
                  left: `${left}%`,
                  transform:
                    index === 0
                      ? "translateX(0%)"
                      : index === ticks.length - 1
                      ? "translateX(-100%)"
                      : "translateX(-50%)",
                }}
              >
                {t.label}
              </span>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default AnimatedSlider;
