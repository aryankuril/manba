'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import TextAnimation from './../TextAnimation';
import FadeInFromLeft from './../Animation/FadeInFromLeft';
import Button from '../Button';


const NinthSection = () => {
    //  const [activeIndex, setActiveIndex] = useState(0);

const faqs = [
  {
    question: "What is the maximum age limit for applying for a Two-Wheeler Loan?",
    answer:
      "The applicant should not be older than 59 years at the end of the loan tenure.",
  },
  {
    question: "How can I apply for a Manba Two-Wheeler Loan?",
    answer:
      "You can apply in four easy steps: Visit the Manba website and register with your mobile number, enter your personal details and select your preferred two-wheeler, receive voucher details and visit the showroom, then meet our representative, submit KYC documents, and complete the process.",
  },
  {
    question: "What is the repayment tenure of the Manba Two-Wheeler Loan?",
    answer:
      "Manba Finance offers flexible repayment tenures ranging from 12 to 36 months.",
  },
  {
    question: "I am self-employed. Can I get a Two-Wheeler Loan from Manba Finance?",
    answer:
      "Yes. Self-employed individuals can apply if they have an active business and a successful business record of at least 2 years.",
  },
  {
    question: "How do I know if I am eligible for a Two-Wheeler Loan?",
    answer:
      "Manba Finance offers EV two-wheeler loans to both salaried and self-employed individuals. Eligibility is assessed based on age, employment or business history, and required documentation. Applicants should be at least 21 years old, salaried individuals should have a minimum of 6 months of work experience, and self-employed individuals should have been in business for at least 2 years.",
  },
  {
    question: "Can a salaried person get a Two-Wheeler Loan from Manba Finance?",
    answer:
      "Yes. Salaried individuals can apply for a two-wheeler loan if they are at least 21 years old and have been employed for a minimum of 6 months.",
  },
  {
    question: "I am a business owner. Can I get a Two-Wheeler Loan?",
    answer:
      "Yes. Business owners and self-employed individuals are eligible for a two-wheeler loan if they have been running their business for at least 2 years and are at least 21 years of age.",
  },
];
const [activeIndex, setActiveIndex] = useState<number | null>(0);

const toggleFaq = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};

  return (
     <section className="container py-10 sm:py-15 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="lg:w-5/12">
        <TextAnimation>
         <h2
  className="text-[#010205] text-[48px] font-semibold leading-[130%] tracking-[-0.045em] mb-4"
>
  FAQ
</h2></TextAnimation>

<FadeInFromLeft>

       <p className="text-[#878C91] text-[16px] font-medium leading-[150%] mb-6">
  Find clear answers to common questions about Manba’s EV two-wheeler loans, eligibility, process, and repayment—so you can switch to electric with confidence.
</p>

 <Button
            text="Apply Now"
              href="https://www.manbafinance.com/apply-now/"
            className="bg-[#205073] text-white "
          />
</FadeInFromLeft>

        </div>

{/* Right Section */}
<motion.div
  className="lg:w-6/12 space-y-4"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.2 }} // Repeats every time on scroll
>
  {faqs.map((faq, index) => (
    <motion.div
      key={index}
      className="border-t border-black pt-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.2 }} // Repeats every time on scroll
    >
      <div
        onClick={() => toggleFaq(index)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h5 className="font-semibold text-[#010205] text-[24px] w-120">{faq.question}</h5>
        <span className="text-2xl text-[#000000] ">
          {activeIndex === index ? "−" : "+"}
        </span>
      </div>

      {activeIndex === index && (
        <motion.p
          className="mt-4  text-[16px] text-[#878C91] "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {faq.answer}
        </motion.p>
      )}
    </motion.div>
  ))}

  <div className="border-t border-black"></div>
</motion.div>

</div>
    </section>
  )
}

export default NinthSection