"use client";

import Image from "next/image";
import TextAnimation from "../TextAnimation";
import FadeInFromLeft from './../Animation/FadeInFromLeft';
import FadeInFromBottom from "../Animation/FadeInFromBottom";
import FadeInFromRight from './../Animation/FadeInFromRight';

const featuresLeft = [
  {
    id: "01",
    title: "Paperless Journey",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: (
      <Image
        src="/icons/paper.svg"
        alt=""
        width={25}
        height={25}
        style={{
          filter:
            "invert(70%) sepia(90%) saturate(900%) hue-rotate(50deg) brightness(105%) contrast(105%)",
        }}
      />
    ),
  },
  {
    id: "02",
    title: "Tenure 06 to 48 Months",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: (
      <Image
        src="/icons/calendar3.svg"
        alt=""
        width={25}
        height={25}
        style={{
          filter:
            "invert(70%) sepia(90%) saturate(900%) hue-rotate(50deg) brightness(105%) contrast(105%)",
        }}
      />
    ),
  },
  {
    id: "03",
    title: "Speedy Loan Approval",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: (
      <Image
        src="/icons/approve3.svg"
        alt=""
        width={25}
        height={25}
        style={{
          filter:
            "invert(70%) sepia(90%) saturate(900%) hue-rotate(50deg) brightness(105%) contrast(105%)",
        }}
      />
    ),
  },
];


const featuresRight = [
  
  {
    id: "04",
    title: "Simplified Disbursement ",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: (
      <Image
        src="/icons/funds-transfer3.svg"
        alt=""
        width={25}
        height={25}
        style={{
          filter:
            "invert(70%) sepia(90%) saturate(900%) hue-rotate(50deg) brightness(105%) contrast(105%)",
        }}
      />
    ),
  },
  {
    id: "05",
    title: "Customized Schemes",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: (
      <Image
        src="/icons/custom3.svg"
        alt=""
        width={25}
        height={25}
        style={{
          filter:
            "invert(70%) sepia(90%) saturate(900%) hue-rotate(50deg) brightness(105%) contrast(105%)",
        }}
      />
    ),
  },
   {
    id: "06",
    title: "Cash EMI Facility",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: (
      <Image
        src="/icons/money3.svg"
        alt=""
        width={25}
        height={25}
        style={{
          filter:
            "invert(70%) sepia(90%) saturate(900%) hue-rotate(50deg) brightness(105%) contrast(105%)",
        }}
      />
    ),
  },

];

const ThirdSection = () => {
  return (
    <section className="w-full  container py-10 sm:py-15 lg:py-20 lg:mt-40 mt-10">
      <div className=" mx-auto ">

           <TextAnimation>
      <h3 className="text-center font-semibold text-black mb-10 ">Advanced Features</h3>
      </TextAnimation>
          


        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">

          {/* LEFT FEATURES */}
 <FadeInFromLeft>
<div className="space-y-12">
  {featuresLeft.map((item) => (
    <div key={item.id} className="flex items-start gap-5">
      {/* ICON */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#205073] text-white text-xl">
        {item.icon}
      </div>

      {/* TEXT */}
      <div>
        <div className="flex items-center gap-3">
          <h5 className="font-medium text-highlight">{item.title}</h5>

          {/* <span className="text-gray-400 text-sm">{item.id}</span> */}
        </div>

         <p className="mt-2 body3 text-gray-600 font-secondary max-w-xs ml-auto leading-relaxed ">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>
</FadeInFromLeft>

          {/* CENTER IMAGE */}
          <FadeInFromBottom>
          <div className="flex justify-center">
            <div className="relative w-[260px] sm:w-[320px] md:w-[450px]">
              <Image
                src="/images/Features2.png" 
                alt="EV Feature"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
          </FadeInFromBottom>

          {/* RIGHT FEATURES */}
          <FadeInFromRight>
<div className="space-y-12">
  {featuresRight.map((item) => (
    <div
      key={item.id}
      className="flex items-start gap-5  sm:flex-row-reverse text-left"

    >
      {/* ICON */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#205073] text-white text-xl">
        {item.icon}
      </div>

      {/* TEXT */}
      <div>
        <div className="flex items-center justify-start gap-3">
          {/* <span className="text-gray-400 text-sm">{item.id}</span> */}
          <h5 className="font-medium text-highlight">{item.title}</h5>
        </div>

        <p className="mt-2 body3 text-gray-600 font-secondary max-w-xs ml-auto leading-relaxed ">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>
</FadeInFromRight>

        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
