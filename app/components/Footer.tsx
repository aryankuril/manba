import Link from "next/link";
import { Mail, Phone, Smartphone, Facebook, Instagram, Linkedin, Twitter, Heading4 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#0b2a44] rounded-2xl text-white p-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* GET IN TOUCH (FIRST) */}
          <div>
            <h4 className="text-lg font-semibold text-[#4db3ff] mb-6">
              Get In Touch
            </h4>

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
              <Link href="#"><Facebook size={18} /></Link>
              <Link href="#"><Instagram size={18} /></Link>
              <Link href="#"><Twitter size={18} /></Link>
              <Link href="#"><Linkedin size={18} /></Link>
            </div>
          </div>

          {/* WE OFFER */}
          <div>
            <h4 className="text-lg font-semibold text-[#4db3ff] mb-6">
              We Offer
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                "New Two Wheeler Loan",
                "EV Two Wheeler",
                "New Three Wheeler Loan",
                "EV Three Wheeler Loan",
                "Pre-Owned Two Wheeler Loan",
                "Pre-Owned Car Loan",
                "Personal Loan",
                "Small Business Loan",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-[#4db3ff] transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-[#4db3ff] mb-6">
              Quick Links
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <ul className="space-y-3 text-sm">
                {[
                  "About",
                  "Team",
                  "CSR",
                  "NACH Mandate",
                  "Success Stories",
                  "Awards & Media",
                  "Careers",
                ].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-[#4db3ff] transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3 text-sm">
                {[
                  "Partners in Growth",
                  "Media",
                  "Event & Gallery",
                  "Blogs",
                  "SEBI SMART ODR",
                  "RBI Sachet",
                ].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-[#4db3ff] transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>© 2026 All Rights Reserved.</p>

          <div className="flex flex-wrap gap-6">
            <Link href="#" className="hover:text-white">Disclaimer</Link>
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white">Payment Gateway</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
