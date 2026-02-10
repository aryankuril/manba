"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Clock } from "lucide-react";
import TextAnimation from './../TextAnimation';

const InfoSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Smart Calculations",
      description: "Accurate EMI breakdown instantly",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Secure and reliable service",
    },
    {
      icon: Clock,
      title: "Quick Process",
      description: "Fast loan approval ",
    },
  ];

  return (
    <section className="container py-10 sm:py-15 lg:py-20 ">
      <div className=" mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <TextAnimation>
              <h2 className=" font-semibold text-gray-900">
                Simple Way to Know your EMI on the Loan
              </h2>
            </TextAnimation>
          </div>

          {/* Description Card */}
          {/* <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-10  mx-auto">
            <p className="text-center text-gray-600 leading-relaxed md:text-lg">
              Making sense of loans is hassle-free with Manba Finance's EMI
              Calculator. Plug in your loan amount, tenure, and interest rate,
              and the calculator breaks down your monthly installments (EMIs).
              What makes our calculator valuable is how it's designed to fit your
              income comfortably. The EMIs are set to avoid burdening your
              regular earnings, allowing you to handle other expenses. This
              simplifies your financial landscape, letting you pursue your goals
              without straining your pocket. Manba Finance's EMI Calculator is
              your pathway to realizing dreams while keeping your finances
              balanced.
            </p>
          </div> */}

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
  {features.map((item, index) => (
    <motion.div
      key={item.title}
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ delay: index * 0.1 }}
      // whileHover={{ y: -6 }}
      className="bg-white rounded-corners border border-[#d4d4d4] shadow-md hover:shadow-lg transition p-6 "
    >
      <div className="flex items-start gap-4 h-full">
        
        {/* LEFT ICON (FULL HEIGHT) */}
        <div className="w-14 h-full rounded-[10px] bg-[#205073] flex items-center justify-center text-[#79f431] shrink-0">
          <item.icon className="w-7 h-7" />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-left">
          <h5 className="font-medium text-highlight">
            {item.title}
          </h5>
          <p className="body3 text-gray-600 font-secondary">
            {item.description}
          </p>
        </div>

      </div>
    </motion.div>
  ))}
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
