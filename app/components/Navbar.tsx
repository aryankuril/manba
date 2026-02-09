"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

// import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-white/20">
      <div className="container w-full flex items-center justify-between py-3">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-2 w-[200px] z-99999">
          <Link href="/">
            <Image src="/images/Logo.svg" alt="logo" width={130} height={33} />
          </Link>
        </div>

        {/* Right Side - Nav + Button */}
        <div className="hidden lg:flex items-center space-x-10">
          
          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link href="/">
              <div className="flex items-center space-x-1 cursor-pointer body3 hover:text-gray-700 text-[#020407]">
                <span>Home</span>
                {/* <ChevronDown size={14} /> */}
              </div>
            </Link>

            <Link href="/calculator">
              <div className="flex items-center space-x-1 cursor-pointer body3 hover:text-gray-700 text-[#020407]">
                <span>EMI Calculator</span>
                {/* <ChevronDown size={14} /> */}
              </div>
            </Link>

            <Link href="https://www.manbafinance.com/success-stories-2/">
              <div className="flex items-center space-x-1 cursor-pointer body3 hover:text-gray-700 text-[#020407]">
                <span>Success Stories</span>
                {/* <ChevronDown size={14} /> */}
              </div>
            </Link>

            <Link href="https://www.manbafinance.com/contact/">
              <div className="cursor-pointer hover:text-gray-700 body3 text-black">
                Contact
              </div>
            </Link>
          </nav>

          {/* Apply Now Button */}
          <Button
            text="Apply Now"
            className="hidden md:inline-flex"
            onClick={() => {
              document.getElementById("contact-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          {mobileMenuOpen ? (
            <X
              size={22}
              className="cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <Menu
              size={22}
              className="cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 w-full h-full bg-white/80 z-10 flex flex-col lg:hidden">
            <div
              className="absolute top-5 right-5 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={28} />
            </div>

            <div className="flex flex-col space-y-6 bg-white text-[#020407] mt-16 p-6 z-10 text-left">
              <Link href="https://www.manbafinance.com/success-stories-2/">
                <div className="flex items-center space-x-2 text-[#020407] cursor-pointer hover:text-black text-xl">
                  <span>Home</span>
                  {/* <ChevronDown size={18} /> */}
                </div>
              </Link>

              <Link href="https://www.manbafinance.com/success-stories-2/">
                <div className="flex items-center space-x-2 cursor-pointer hover:text-black text-[#020407] text-xl">
                  <span>EMI Calculator</span>
                  {/* <ChevronDown size={18} /> */}
                </div>
              </Link>

              <Link href="https://www.manbafinance.com/success-stories-2/">
                <div className="flex items-center space-x-2 cursor-pointer hover:text-black text-[#020407] text-xl">
                  <span>Success Stories</span>
                  {/* <ChevronDown size={18} /> */}
                </div>
              </Link>

              <Link href="https://www.manbafinance.com/success-stories-2/">
                <div className="flex items-center space-x-2 cursor-pointer hover:text-black text-[#020407] text-xl">
                  <span>Contact</span>
                  {/* <ChevronDown size={18} /> */}
                </div>
              </Link>

              <Button
                text="Apply Now"
                onClick={() => {
                  document.getElementById("contact-section")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="bg-[#205073] text-white"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
