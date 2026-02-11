"use client";

import { User, MapPin, CreditCard } from "lucide-react";
import Button from "../Button";
import TextAnimation from "./../TextAnimation";
import FadeInFromLeft from "./../Animation/FadeInFromLeft";

const eligibilityData = [
  {
    icon: MapPin,
    title: "Resident",
    description: "Indian",
  },
  {
    icon: CreditCard,
    title: "Bank Account",
    description: "Operative",
  },
  {
    icon: User,
    title: "Age",
    description: "Minimum 18 & Maximum up to 60 years",
  },
];

export default function SeventhSection() {
  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20 lg:mt-25 mt-15">
      
      {/* MAIN FULL WIDTH CARD */}
      <div
        className="rounded-corners border border-[#d4d4d4] shadow-md lg:p-8 p-5 relative overflow-hidden min-h-[420px] flex flex-col lg:flex-row justify-between gap-8"
        style={{
          backgroundImage: "url('/images/ev-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent transition duration-500"></div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center">
  <TextAnimation>
    <h3 className="max-w-xl mb-5 font-semibold text-white leading-tight">
      EV Two Wheeler Loan Eligibility Criteria
    </h3>
  </TextAnimation>

  {/* <FadeInFromLeft> */}
    <p className="body3 text-white max-w-md mb-5">
      Explore the most flexible, quick and cost-effective <br /> way to own your
      dream EV two wheeler
    </p>
  {/* </FadeInFromLeft> */}

  {/* <FadeInFromLeft> */}
    <div className="relative z-10">
      <Button
        text="Calculate Your Loan"
        href="/calculator"
        className=" text-white "
      />
    </div>
  {/* </FadeInFromLeft> */}
</div>




    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent transition duration-500"></div>
        {/* RIGHT BOX INSIDE IMAGE CARD */}
        <div className="relative z-10 w-full lg:w-[420px] bg-white/20 backdrop-blur-sm border-b border-white/20 rounded-corners border shadow-lg lg:p-6 p-5 flex flex-col justify-center">
          
          <h5 className="font-medium text-white mb-6">
            Eligibility Requirements
          </h5>

          <div className="flex flex-col gap-8">
            {eligibilityData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#205073] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#79f431]" />
                  </div>

                  <div>
                    <h5 className="font-medium text-white">{item.title}</h5>
                    <p className="text-white body3 mt-2 leading-snug">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
