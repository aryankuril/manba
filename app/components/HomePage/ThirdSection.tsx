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
    icon: <Image src="/icons/paperless2.png" alt="" width={25} height={25} />,
  },
  {
    id: "02",
    title: "Tenure 06 to 48 Months",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: <Image src="/icons/calendar2.png" alt="" width={25} height={25} />,
  },
  {
    id: "03",
    title: "Speedy Loan Approval",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: <Image src="/icons/approved2.png" alt="" width={25} height={25} />,
  },
];

const featuresRight = [
  
  {
    id: "04",
    title: "Simplified Disbursement ",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: <Image src="/icons/flash.png" alt="" width={25} height={25} />,
  },
  {
    id: "05",
    title: "Customized Schemes",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: <Image src="/icons/custom2.png" alt="" width={25} height={25} />,
  },
   {
    id: "06",
    title: "Cash EMI Facility",
    desc: "Sunt dolor aliquip consectetur laboris incididunt tempor irure veniam amet et nostrud.",
    icon: <Image src="/icons/banknotes2.png" alt="" width={25} height={25} />,
  },

];

const ThirdSection = () => {
  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20">
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
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#205073] text-white text-xl">
        {item.icon}
      </div>

      {/* TEXT */}
      <div>
        <div className="flex items-center gap-3">
          <h5 className="font-semibold text-lg text-[#205073]">{item.title}</h5>
          {/* <span className="text-gray-400 text-sm">{item.id}</span> */}
        </div>

        <p className="mt-2 text-sm text-gray-500 max-w-xs leading-relaxed font-secondary">
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
            <div className="relative w-[260px] sm:w-[320px] md:w-[400px]">
              <Image
                src="/images/sad.png" 
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
      className="flex items-start gap-5 flex-row-reverse text-left"
    >
      {/* ICON */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#205073] text-white text-xl">
        {item.icon}
      </div>

      {/* TEXT */}
      <div>
        <div className="flex items-center justify-start gap-3">
          {/* <span className="text-gray-400 text-sm">{item.id}</span> */}
          <h5 className="font-semibold text-lg text-[#205073]">{item.title}</h5>
        </div>

        <p className="mt-2 text-sm text-gray-600 font-secondary max-w-xs ml-auto leading-relaxed ">
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
