"use client";

import React from "react";
// import { documentsData } from "./documentsData";
import TextAnimation from './../TextAnimation';
import FadeInFromLeft from './../Animation/FadeInFromLeft';
import Button from "../Button";

// documentsData.js
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
    <section className="container py-10 sm:py-15 lg:py-20 ">
      <div className=" mx-auto ">
        <TextAnimation>
          <h3 className="text-center mb-10 font-semibold text-black ">Documents Required to Apply For EV Two Wheeler Loan</h3>
        </TextAnimation>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentsData.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-corners shadow-md border hover:shadow-lg transition overflow-hidden"
            >
              {/* Heading */}
      
                <div className="bg-[#205073] text-white px-5 py-3  font-semibold text-xl">
                  {section.title}
                  <div className="mt-1 text-xs font-normal">{section.subtitle}</div>
                </div>
           

              {/* Content */}
              <ul className="p-5 space-y-3">
                {section.items.map((item, i) => (
                  <li
                  key={i}
                  className="flex items-start gap-3 text-gray-600 font-secondary text-sm cursor-pointer transition-colors duration-200 "
                  >
                    <span className="text-green-600 mt-1">✔</span>
                    <TextAnimation>
                    <span>{item}</span>
              </TextAnimation>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
<div className="text-center items-center">
          <Button
  text="Apply Now"
onClick={() => {
    document.getElementById("contact-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="mt-5 "
/>
          </div>
      </div>
    </section>
  );
};

export default SixthSection;
