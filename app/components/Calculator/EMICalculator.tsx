"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import AnimatedSlider from "./AnimatedSlider";
import ResultCard from "./ResultCard";
import PieChart from "./PieChart";
import Button from "../Button";
import Image from "next/image";

import { Calculator, ArrowRight } from "lucide-react";
import TextAnimation from "./../TextAnimation";
import FadeInFromLeft from "./../Animation/FadeInFromLeft";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTenure, setLoanTenure] = useState(24);

  const calculations = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principal,
    };
  }, [loanAmount, interestRate, loanTenure]);

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full mb-12 overflow-visible">
        {/* FULL WIDTH BACKGROUND IMAGE (OUTSIDE CONTAINER) */}
        {/* <div className="absolute -top-30 left-0 w-full h-[320px] -z-10">
          <Image
            src="/images/Shape1.png"
            alt="bg"
            fill
            className="object-cover"
            priority
          />
        </div> */}

        <div className="py-10 sm:py-15 lg:py-10 container">
          {/* Text Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-center lg:text-left">
            <TextAnimation>
              <h2 className="font-semibold text-black">EMI Calculator</h2>
            </TextAnimation>

            <FadeInFromLeft>
              <p className="body3 text-gray-600 font-secondary mt-2">
                Manba Finance simplifies finances with easy EMI calculator
              </p>
            </FadeInFromLeft>
          </div>
        </div>

        <div className="glass-card rounded-2xl md:rounded-3xl shadow-glass container relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 max-w-6xl mx-auto">
            {/* Input Section */}
            <div className="space-y-6">
              <AnimatedSlider
                label="Loan Amount"
                value={loanAmount}
                min={30000}
                max={2500000}
                step={5000}
                prefix="₹"
                unit=""
                onChange={setLoanAmount}
                ticks={[
                  { value: 100000, label: "1L" },
                  { value: 300000, label: "3L" },
                  { value: 500000, label: "5L" },
                  { value: 1000000, label: "10L" },
                  { value: 2500000, label: "25L" },
                ]}
              />

              <AnimatedSlider
                label="Interest Rate"
                value={interestRate}
                min={7}
                max={22}
                step={0.1}
                unit="%"
                onChange={setInterestRate}
                formatValue={(v) => v.toFixed(1)}
                ticks={[
                  { value: 7, label: "7%" },
                  { value: 10, label: "10%" },
                  { value: 14, label: "14%" },
                  { value: 18, label: "18%" },
                  { value: 22, label: "22%" },
                ]}
              />

              <AnimatedSlider
                label="Loan Tenure"
                value={loanTenure}
                min={12}
                max={84}
                step={1}
                unit="Months"
                onChange={setLoanTenure}
                ticks={[
                  { value: 12, label: "1Y" },
                  { value: 24, label: "2Y" },
                  { value: 36, label: "3Y" },
                  { value: 48, label: "4Y" },
                  { value: 60, label: "5Y" },
                  { value: 84, label: "7Y" },
                ]}
              />



              {/* CTA BAR BELOW SLIDERS */}
<div className="hidden md:flex w-full bg-white border border-[#d4d4d4] rounded-2xl shadow-md px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative overflow-hidden">



  {/* BG IMAGE */}
  <Image
    src="/images/ev-bg.jpg"   // <-- add your bg image here later
    alt="bg"
    fill
    className="object-cover"
    priority
  />

    <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* CONTENT */}
  <div className="relative z-10">
    <h5 className=" font-medium text-white">
     Need EMI Help?
    </h5>

    <p className="body3 text-white mt-1 max-w-sm">
     Get instant EMI details with <br /> Manba Finance.
    </p>
  </div>

  {/* BUTTON */}
 <Button
        text="APPLY NOW"
        href="/calculator"
        className=" text-white z-10 "
      />

</div>


            </div>

            {/* ===================== RESULTS SECTION (ICICI STYLE) ===================== */}
           {/* ===================== RESULTS SECTION (FULL HEIGHT MATCH LEFT) ===================== */}
<div className="w-full h-full bg-white rounded-2xl border border-[#d4d4d4] shadow-md overflow-hidden flex flex-col justify-between">

  {/* TOP EMI */}
  <div className="text-center px-5 py-5 border-b border-dashed border-gray-300">
    <p className="body3 font-semibold text-gray-800">
      Monthly EMI
    </p>

    <h4 className="text-[22px] font-bold text-[#205073] leading-tight mt-1">
      ₹ {calculations.emi.toLocaleString("en-IN")}
    </h4>
  </div>

  {/* MIDDLE 2 BOXES */}
  <div className="grid grid-cols-2 text-center border-b border-dashed border-gray-300 flex-1">
    
    {/* Total Interest */}
    <div className="px-4 py-5 border-r border-dashed border-gray-300 flex flex-col justify-center">
      <p className="body3 font-semibold text-gray-800">
        Total Interest 
      </p>

      <h4 className="text-[18px] font-bold text-[#205073] mt-2">
        ₹ {calculations.totalInterest.toLocaleString("en-IN")}
      </h4>
    </div>

    {/* Total Payment */}
    <div className="px-4 py-5 flex flex-col justify-center">
      <p className="body3 font-semibold text-gray-800">
        Total Payment
      </p>

      {/* <p className="text-[10px] text-gray-400">(Principal + Interest)</p> */}

      <h4 className="text-[18px] font-bold text-[#205073] mt-2">
        ₹ {calculations.totalPayment.toLocaleString("en-IN")}
      </h4>
    </div>

  </div>

  {/* PIE CHART TITLE */}
  <div className="text-center pt-4 pb-2">
    <p className="body3 font-semibold text-gray-800">
      Break-up of Total Payment
    </p>
  </div>

  {/* PIE CHART */}
  <div className="flex justify-center pb-5">
    <div className="w-[180px]">
      <PieChart
        principal={calculations.principal}
        interest={calculations.totalInterest}
      />
    </div>
  </div>

</div>
<div className=" md:hidden mt-5 w-full bg-white border border-[#d4d4d4] rounded-2xl shadow-md px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative overflow-hidden">

  {/* BG IMAGE */}
  <Image
    src="/images/ev-bg.jpg"   // <-- add your bg image here later
    alt="bg"
    fill
    className="object-cover"
    priority
  />

  {/* CONTENT */}
  <div className="relative z-10">
    <h5 className=" font-semibold text-white">
     Need EMI Help?
    </h5>

    <p className="body3 text-white mt-1">
      Making sense of loans is hassle-free with Manba Finance's EMI Calculator.
    </p>
  </div>

  {/* BUTTON */}
 <Button
        text="APPLY NOW"
        href="/calculator"
        className=" text-white "
      />

</div>

            {/* ===================== END RESULTS SECTION ===================== */}
          </div>

          {/* Center Apply Button Below Both Sections */}
          {/* <div className="w-full flex flex-col items-center justify-center mt-10">
            <Button
              text="Apply Now"
              onClick={() => {
                if (typeof window !== "undefined") {
                  document.getElementById("contact-section")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="bg-[#205073] text-white w-full md:w-[280px]"
            />

            <p className="body3 text-gray-600 text-center mt-3 max-w-md">
              Making sense of loans is hassle-free with Manba Finance's EMI
              Calculator.
            </p>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default EMICalculator;
