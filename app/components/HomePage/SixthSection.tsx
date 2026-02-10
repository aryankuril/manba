"use client";

import React from "react";
import TextAnimation from "./../TextAnimation";
import FadeInFromLeft from "./../Animation/FadeInFromLeft";
import Button from "../Button";

const documentsData = [
  {
    title: "Proof of Identity with full Date of Birth ",
    subtitle: "(Any One)",
    items: [
      "Pan Card",
      "Aadhar Card",
      "Passport",
      "Voter Id",
      "Passport size photo",
    ],
  },
  {
    title: "Proof of Residence",
    subtitle: "(Any One)",
    items: [
      "Electricity Bill (Self/Parental)",
      "Purchase Agreement",
      "Property Tax",
      "Utility Bills",
      "Rent agreement",
      "Allotment Letter",
    ],
  },
  {
    title: "Proof of Income",
    subtitle: "(Required as per Product requirement)",
    items: [
      "Salaried – Previous 3 month Salary Credit Bank statement & salary slip.",
      "Self employed – Latest Assessment year IT filed and Business Proof.",
    ],
  },
];

const SixthSection = () => {
  return (
    <section className="container py-10 sm:py-15 lg:py-20  ">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 sticky top-20 lg:top-32">

            <TextAnimation>
              <h3 className="text-left mb-3 font-semibold text-black text-3xl lg:text-4xl leading-tight">
                Documents Required to Apply For EV Two Wheeler Loan
              </h3>
            </TextAnimation>

            <p className="text-gray-600 text-lg mb-3">
              Please keep these documents ready before applying for your EV Two Wheeler Loan.
            </p>

            <Button
              text="Apply Now"
              onClick={() => {
                document.getElementById("contact-section")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="mt-2"
            />
          </div>

          {/* RIGHT SIDE STACK CARDS */}
         <div className="w-full lg:w-1/2 relative flex flex-col gap-10">
  {documentsData.map((section, index) => (
    <div
      key={index}
      className="sticky lg:top-30 top-80"
      style={{
        zIndex: 10 + index,
      }}
    >
      <div
  className={`bg-white rounded-corners border border-[#d4d4d4] shadow-md hover:shadow-lg transition overflow-hidden min-h-[300px] flex flex-col 
    ${index === 0 ? "translate-y-0" : ""}
    ${index === 1 ? "translate-y-[75px] lg:translate-y-[50px]" : ""}
    ${index === 2 ? "translate-y-[150px] lg:translate-y-[100px]" : ""}
  `}
>

        {/* Heading */}
        <div className="bg-[#205073] text-white px-5 py-3 font-medium text-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4">
  <span className="leading-snug text-base sm:text-lg lg:text-xl">
    {section.title}
  </span>

  <span className="bg-white text-[#205073] text-xs font-semibold px-3 py-1 rounded-full w-fit whitespace-nowrap">
    {section.subtitle}
  </span>
</div>



        {/* Content */}
        <ul className="p-5 space-y-3 list-disc list-outside pl-9 flex-1">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="text-gray-600 font-secondary body3 cursor-pointer transition-colors duration-200 leading-snug tracking-tight"
            >
              <TextAnimation>
                <span className="block max-w-[320px]">
                  {item}
                </span>
              </TextAnimation>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>


        </div>
      </div>
    </section>
  );
};

export default SixthSection;
