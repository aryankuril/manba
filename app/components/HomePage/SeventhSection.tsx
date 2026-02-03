"use client";

import { User, MapPin, CreditCard } from "lucide-react";
import Button from "../Button";
import TextAnimation from './../TextAnimation';
import FadeInFromLeft from './../Animation/FadeInFromLeft';

const eligibilityData = [
  {
    icon: User,
    title: "Age",
    description: "Minimum 18 & Maximum up to 60 years",
  },
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
];

export default function SeventhSection() {
  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* LEFT CONTENT */}
        <div >
          <TextAnimation>
          <h3 className=" font-semibold text-black leading-tight">
            EV Two Wheeler Loan  Eligibility Criteria
          </h3>
          </TextAnimation>

          <FadeInFromLeft>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Explore the most flexible, quick and cost-effective way to own your
            dream EV two wheeler
          </p>

           <Button
            text="Calculate Your Loan"
            className="bg-[#205073] text-white lg:mt-5 mt-3"
          />

          </FadeInFromLeft>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
  {eligibilityData.map((item, index) => {
    const Icon = item.icon;
    const isLast = index === eligibilityData.length - 1;

    return (
      <div
        key={index}
        className={`flex gap-4 p-6 rounded-corners border hover:shadow-lg transition
          ${isLast ? "sm:col-span-2" : ""}
        `}
      >
        <div className="flex-shrink-0">
          <Icon className="w-8 h-8 text-[#1f4f6f]" />
        </div>

        <div>
          <h5 className="text-lg font-semibold text-gray-900">
            {item.title}
          </h5>
          <p className="mt-1 text-gray-600">
            {item.description}
          </p>
        </div>
      </div>
    );
  })}
</div>


      </div>
    </section>
  );
}
