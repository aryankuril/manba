import Link from "next/link";
import { Mail, Phone, Smartphone, Facebook, Instagram, Linkedin, Twitter, Heading4 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#205073] rounded-2xl text-white lg:p-10 p-5">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* GET IN TOUCH (FIRST) */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Get In Touch
            </h4>


             <div className="border-t border-white/20 pt-6">

            <p className="text-sm leading-relaxed text-gray-200 mb-6">
              324, Runwal Heights,<br />
              Opp. Nirmal Lifestyle,<br />
              LBS Marg, Mulund (W),<br />
              Mumbai – 400080
            </p>

            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <Link href="mailto:info@manbafinance.com" className="hover:text-[#4db3ff]">
                  info@manbafinance.com
                </Link>
              </div>

              {/* ALL PHONE NUMBERS IN ONE LINE */}
              <div className="flex items-center gap-3 flex-wrap">
                <Phone size={16} />
                <Link href="tel:02262346666" className="hover:text-[#4db3ff]">
                  022 6234 6666
                </Link>
                <span>|</span>
                <Link href="tel:+919004977228" className="hover:text-[#4db3ff]">
                  +91 9004977228
                </Link>
                <span>|</span>
                <Link href="tel:+917039638494" className="hover:text-[#4db3ff]">
                  +91 7039638494
                </Link>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6 text-[#4db3ff]">
              <Link href="https://www.facebook.com/Manba1996#"><Facebook size={18} /></Link>
              <Link href="https://www.instagram.com/manbafinance/"><Instagram size={18} /></Link>
              <Link href="https://x.com/ManbaFinanceLtd"><Twitter size={18} /></Link>
              <Link href="https://in.linkedin.com/company/manba-finance-ltd"><Linkedin size={18} /></Link>
            </div>
            </div>
          </div>

          {/* WE OFFER */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              We Offer
            </h4>

            <div className="border-t border-white/20 pt-6">

            <ul className="space-y-3 text-sm">
  {[
    { label: "New Two Wheeler Loan", href: "https://www.manbafinance.com/two-wheeler-loan/" },
    { label: "EV Two Wheeler", href: "https://www.manbafinance.com/ev-two-wheeler/" },
    { label: "New Three Wheeler Loan", href: "https://www.manbafinance.com/three-wheeler-loan/" },
    { label: "EV Three Wheeler Loan", href: "https://www.manbafinance.com/three-wheeler-loan/" },
    { label: "Pre-Owned Two Wheeler Loan", href: "https://www.manbafinance.com/used-two-wheeler-loan/" },
    { label: "Pre-Owned Car Loan", href: "https://www.manbafinance.com/used-car-loan/" },
    { label: "Personal Loan", href: "https://www.manbafinance.com/personal-loan/" },
    { label: "Small Business Loan", href: "https://www.manbafinance.com/business-loan/" },
  ].map((item, index) => (
    <li key={index}>
      <Link href={item.href} className="hover:text-[#4db3ff] transition">
        {item.label}
      </Link>
    </li>
  ))}
</ul>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
<div className="border-t border-white/20 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <ul className="space-y-3 text-sm">
  {[
    { label: "About", href: "https://www.manbafinance.com/about-us/" },
    { label: "Team", href: "https://www.manbafinance.com/team/" },
    { label: "CSR", href: "https://www.manbafinance.com/csr/" },
    { label: "NACH Mandate", href: "https://docs.google.com/forms/d/e/1FAIpQLSf1E0MUQxlBwNJS5TFma7qZzXDQiGfi8qA4jk1ZkzMSSwGeqg/viewform" },
    { label: "Success Stories", href: "https://www.manbafinance.com/success-stories-2/" },
    { label: "Awards & Media", href: "https://www.manbafinance.com/awards/" },
    { label: "Careers", href: "https://www.manbafinance.com/careers/" },
  ].map((item, index) => (
    <li key={index}>
      <Link href={item.href} className="hover:text-[#4db3ff] transition">
        {item.label}
      </Link>
    </li>
  ))}
</ul>


              <ul className="space-y-3 text-sm">
                {[
                  { label: "Partners in Growth", href: "https://www.manbafinance.com/partners-in-growth/" },
                  { label: "Media", href: "https://www.manbafinance.com/media/" },
                  { label: "Event & Gallery", href: "https://www.manbafinance.com/events-gallery/" },
                  { label: "Blogs", href: "https://www.manbafinance.com/blog/" },
                  { label: "SEBI SMART ODR", href: "https://smartodr.in/login" },
                  { label: "RBI sachet", href: "https://sachet.rbi.org.in/" },

                 
                ].map((item, index) => (
                 <li key={index}>
      <Link href={item.href} className="hover:text-[#4db3ff] transition">
        {item.label}
      </Link>
    </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>© 2026 All Rights Reserved.</p>

          <div className="flex flex-wrap gap-6">
            <Link href="https://www.manbafinance.com/disclaimer/" className="hover:text-white">Disclaimer</Link>
            <Link href="https://www.manbafinance.com/terms-conditions/" className="hover:text-white">Terms & Conditions</Link>
            <Link href="https://www.manbafinance.com/payment-gateway-terms-conditions/" className="hover:text-white">Payment Gateway</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
