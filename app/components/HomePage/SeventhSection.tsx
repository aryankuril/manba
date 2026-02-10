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
    <section className="w-full container py-10 sm:py-15 lg:py-20 lg:mt-25 mt-40">
      
      {/* BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-4 lg:gap-8 items-stretch">


        {/* LEFT BIG CARD */}
        <div className="bg-white rounded-corners border border-[#d4d4d4] shadow-md p-8 flex flex-col justify-between lg:row-span-2 lg:col-span-1">
          
          <div>
            <TextAnimation>
              <h3 className="mb-3 font-semibold text-black leading-tight">
                EV Two Wheeler Loan Eligibility Criteria
              </h3>
            </TextAnimation>

            <FadeInFromLeft>
              <p className="body3 text-gray-600 max-w-xl mb-3">
                Explore the most flexible, quick and cost-effective way to own your
                dream EV two wheeler
              </p>
            </FadeInFromLeft>
          </div>

          <FadeInFromLeft>
            <Button
              text="Calculate Your Loan"
              href="/calculator"
              className="bg-[#205073] text-white w-fit"
            />
          </FadeInFromLeft>
        </div>

        {/* TOP RIGHT SMALL CARD 1 */}
        <div className="bg-white rounded-corners border border-[#d4d4d4] shadow-md hover:shadow-lg transition p-6 flex gap-4">
          <div className="flex-shrink-0">
            <MapPin className="w-8 h-8 text-[#1f4f6f]" />
          </div>

          <div>
            <h5 className="font-medium text-highlight">Resident</h5>
            <p className="mt-1 text-gray-600 body3">Indian</p>
          </div>
        </div>

        {/* TOP RIGHT SMALL CARD 2 */}
        <div className="bg-white rounded-corners border border-[#d4d4d4] shadow-md hover:shadow-lg transition p-6 flex gap-4">
          <div className="flex-shrink-0">
            <CreditCard className="w-8 h-8 text-[#1f4f6f]" />
          </div>

          <div>
            <h5 className="font-medium text-highlight">Bank Account</h5>
            <p className="mt-1 text-gray-600 body3">Operative</p>
          </div>
        </div>

        {/* BOTTOM RIGHT LONG CARD */}
        <div className="bg-white rounded-corners border border-[#d4d4d4] shadow-md hover:shadow-lg transition p-6 flex gap-4 lg:col-span-2">
          <div className="flex-shrink-0">
            <User className="w-8 h-8 text-[#1f4f6f]" />
          </div>

          <div>
            <h5 className="font-medium text-highlight">Age</h5>
            <p className="mt-1 text-gray-600 body3">
              Minimum 18 & Maximum up to 60 years
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
