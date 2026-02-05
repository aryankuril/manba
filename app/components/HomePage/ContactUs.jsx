"use client";

import { useState ,useRef } from "react";
import confetti from "canvas-confetti";
import { Phone, Mail, MapPin ,ChevronDown } from "lucide-react";

import Button from "../Button";
import TextAnimation from './../TextAnimation';
import FadeInFromLeft from './../Animation/FadeInFromLeft';

const ContactUs = () => {

    const shootRealisticConfetti = () => {
        const count = 200;
        const defaults = {
            origin: { x: 0.8, y: 0.2 }
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }


//     const handleSubmit = () => {
//         // your other functions here
// setFormData({ ...formData, [e.target.name]: e.target.value });
//         shootRealisticConfetti();
//     }


 const [errors, setErrors] = useState({});
 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  cibilScore: "",
});



const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone) => {
  return /^[5-9][0-9]{9}$/.test(phone);
};


const validateField = (name, value) => {
  switch (name) {
    case "firstName":
    case "lastName":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      if (!/^[A-Za-z\s]+$/.test(value.trim()))
        return "Name can contain only letters";
      return "";

    case "email":
      if (!value.trim()) return "Email is required";
      if (!validateEmail(value)) return "Please enter a valid email";
      return "";

    case "phone":
      if (!value.trim()) return "Phone number is required";
     if (!validatePhone(value))
  return "Phone must be 10 digits and start with 5-9";

      return "";

    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10)
        return "Message must be at least 10 characters";
      return "";


      case "cibilScore":
  if (!value.trim()) return "Please select your CIBIL score";
  return "";


    default:
      return "";
  }
};

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({ ...formData, [name]: value });

  const errorMsg = validateField(name, value);

  setErrors((prev) => ({
    ...prev,
    [name]: errorMsg,
  }));
};


const sendEmail = async (e) => {
  e.preventDefault();

  const newErrors = {};

  ["firstName", "lastName", "email", "phone", "cibilScore", "message"].forEach((field) => {
    const errorMsg = validateField(field, formData[field]);
    if (errorMsg) newErrors[field] = errorMsg;
  });

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      shootRealisticConfetti();

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        cibilScore: "",
      });

      setErrors({});
    } else {
      alert("Failed to send message. Please try again.");
      console.error("API Error:", data.message);
    }
  } catch (error) {
    console.error("Request Failed:", error);
    alert("Something went wrong. Please try again.");
  }
};




  return (
    <section
    id="contact-section"
    className="min-h-screen w-full container py-10 sm:py-15 lg:py-20"
  >
      <div className="mx-auto">


        <div className="flex flex-col md:flex-row lg:h-[600px] bg-white rounded-corners shadow-md border hover:shadow-lg transition overflow-hidden">
          <div
            className="md:w-1/2 bg-cover bg-[#205073] text-white lg:p-8 p-5 relative"
           
          >


            {/* Bottom Right Image */}
  <img
    src="/images/creative1.png"
    alt="contact decoration"
    className="absolute bottom-0 right-0 w-[220px] opacity-30 z-0 pointer-events-none"
  />
            <div className="absolute inset-0  z-0 rounded-2xl" />
            <div className="relative z-10">
              <TextAnimation>
              <h3 className=" font-semibold mb-2">
                Contact Information
              </h3>
              </TextAnimation>

              <FadeInFromLeft >
              <p className="lg:mb-30 mb-6 body2">
 Have questions? Let’s help you get your EV loan faster.
               </p>
               </FadeInFromLeft>

              <div className="space-y-5 text-[16px] ">
<div className="flex items-center space-x-4 lg:mb-10">
  <Phone className="w-5 h-5 text-[#79f431]" />
  <a href="tel:02262346666" >
    022 6234 6666
  </a>
</div>

<div className="flex items-center space-x-4 lg:mb-10">
  <Mail className="w-5 h-5 text-[#79f431]" />
  <a href="mailto:info@manbafinance.com" >
    info@manbafinance.com
  </a>
</div>


  <div className="flex items-center space-x-4 lg:mb-40">
    <MapPin className="w-5 lg:h-5 text-[#79f431]" />
    <span className="max-w-sm text-sm">
      324, Runwal Heights,
Opp. Nirmal Lifestyle,
LBS Marg, Mulund (W),
Mumbai – 400080
    </span>
  </div>
</div>




              {/* <div className="flex space-x-4 mt-10">
                <img src="/icons/twitter-g.png" alt="social1" className="w-8 h-8" />
                <img src="/icons/instagram.png" alt="social2" className="w-8 h-8" />
              </div> */}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 lg:p-8 p-5 bg-white">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-black">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none text-[#011C2A] focus:border-black"
                  />
                  {errors.firstName && (
  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
)}

                </div>
                <div>
                  <label className="block text-sm text-black">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none text-[#011C2A] focus:border-black"
                  />
                  {errors.lastName && (
  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
)}

                </div>
                <div>
                  <label className="block text-sm text-black lg:mt-5 mt-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none text-[#011C2A] focus:border-black"
                  />
                  {errors.email && (
  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
)}

                </div>
                <div>
        <label className="block text-sm text-black lg:mt-5 mt-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          minLength="10"
          maxLength="10"
          placeholder=""
          className="w-full mt-1 border-b border-gray-300 focus:outline-none text-[#011C2A] focus:border-black"
        />
        {errors.phone && (
  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
)}

      </div>
              </div>

          <div className="mt-4">
  <label className="block text-sm text-black">
    Cibil Score 
    {/* <span className="text-red-500">*</span> */}
  </label>

  <div className="relative mt-2">
    <select
      name="cibilScore"
      value={formData.cibilScore}
      onChange={handleChange}
      required
      className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 focus:outline-none text-[#011C2A] focus:border-black appearance-none"
    >
      <option value="">What is your Cibil Score?</option>
      <option value="Between 500 and 650">Between 500 and 650</option>
      <option value="Between 650 and 720">Between 650 and 720</option>
      <option value="Between 720 and 800">Between 720 and 800</option>
      <option value="Above 800">Above 800</option>
    </select>

    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
  </div>

   {errors.cibilScore && (
    <p className="text-red-500 text-xs mt-1">{errors.cibilScore}</p>
  )}
</div>




              <div>
                <label className="block text-sm text-black mb-5">Message</label>
                <textarea
                  rows="2"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write a message"
                  className="w-full border-b border-gray-300 focus:outline-none text-[#011C2A] focus:border-black resize-none"
                ></textarea>

                {errors.message && (
  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
)}

              </div>


              <Button
  text="Get Started"
  className=" text-white"
  onClick={sendEmail}
/>



      

               
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
