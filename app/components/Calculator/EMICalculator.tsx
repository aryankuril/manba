 "use client"
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSlider from './AnimatedSlider';
import ResultCard from './ResultCard';
import PieChart from './PieChart';
import Button from '../Button';
import Image from "next/image";

// import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight } from 'lucide-react';
import TextAnimation from './../TextAnimation';
import FadeInFromLeft from './../Animation/FadeInFromLeft';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTenure, setLoanTenure] = useState(24);

  const calculations = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure;

    // EMI Formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
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

        <div className="py-10 sm:py-15 lg:py-10 container">

          {/* Text Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-center lg:text-left">
            <TextAnimation>
              <h2 className="font-semibold text-black">
                EMI Calculator
              </h2>
            </TextAnimation>



<FadeInFromLeft>
            <p className="body3 text-gray-600 font-secondary  mt-2">
              Manba Finance simplifies finances with easy EMI calculator
            </p>
            </FadeInFromLeft>
          </div>

        </div>

        <div className="glass-card rounded-2xl md:rounded-3xl shadow-glass container">
          
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

              {/* Apply Now Button */}
              {/* <div className="hidden md:block w-full">
                <Button
  text="Apply Now"
  href="/#contact-section"
  className="mt-4 bg-[#205073] text-white w-full"
/>

                <p className="body3 text-gray-600 text-center  mt-2">
                  Making sense of loans is hassle-free with <br />  Manba Finance's EMI Calculator.
                </p>
              </div> */}

            </div>

           
           {/* Results Section */}
<div className="h-full flex flex-col justify-between">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">

  {/* Pie Chart */}
  <motion.div
    className="w-full flex items-center justify-center h-full "
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 }}
  >
    <div className="w-full flex justify-center items-center h-full">
      <div className="w-[170px]">
        <PieChart
          principal={calculations.principal}
          interest={calculations.totalInterest}
        />
      </div>
    </div>
  </motion.div>

  {/* Monthly EMI */}
  <div className="w-full h-full flex ">
    <div className="w-full flex flex-col flex-1 max-h-[500px]">

        <ResultCard
          label="Monthly EMI"
          value={calculations.emi}
          highlight={true}
          delay={0.3}
        />

    </div>
  </div>

</div>



  {/* Bottom Row (Total Interest + Total Payment) */}
  <div className="grid grid-cols-2 gap-4 mt-6 items-stretch">

    {/* Total Interest */}
    <div className="w-full">
      <ResultCard
        value={calculations.totalInterest}
        label="Total Interest"
        delay={0.4}
      />
    </div>

    {/* Total Payment */}
    <div className="w-full">
      <ResultCard
        label="Total Payment"
        value={calculations.totalPayment}
        delay={0.5}
      />
    </div>

  </div>

</div>


          </div>

       {/* Center Apply Button Below Both Sections */}
<div className="w-full flex flex-col items-center justify-center mt-10">
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
    Making sense of loans is hassle-free with Manba Finance's EMI Calculator.
  </p>
</div>


        </div>

      </div>

    </motion.div>
  );
};

export default EMICalculator;
