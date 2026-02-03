"use client";

import { useState } from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  formData?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
  className?: string;
  href?: string; // optional link support
  disabled?: boolean; // optional disabled state
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>; // updated
}

const Button: React.FC<ButtonProps> = ({
  text,
  formData,
  className,
  href,
  disabled = false,
  onClick, // ✅ accept external click handler
}) => {
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const chars = text.split("").map((char) => (char === " " ? "\u00A0" : char));

  const internalClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      await onClick(e); // call the external onClick
      return;
    }

    if (!formData) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Email sent successfully!");
      } else {
        alert("❌ Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const ButtonContent = (
    <span className="flex">
      {chars.map((char, idx) => (
        <span
          key={idx}
          className="relative block overflow-hidden h-6 w-auto"
          style={{ transitionDelay: `${idx * 30}ms` }}
        >
          <span
            className={`block transition-transform duration-300 ease-in-out ${
              hovered ? "-translate-y-6" : "translate-y-0"
            }`}
          >
            {char}
          </span>
          <span
            className={`block absolute left-0 top-0 transition-transform duration-300 ease-in-out ${
              hovered ? "translate-y-0" : "translate-y-6"
            }`}
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`relative inline-flex items-center justify-center px-5 py-3 border border-white rounded-[32px] uppercase text-white font-sans text-base overflow-hidden ${className}`}
      >
        {ButtonContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={internalClick} // use updated click handler
      disabled={disabled || loading}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative inline-flex items-center justify-center px-5 py-3 cursor-pointer border border-white rounded-[32px] uppercase text-white font-sans text-base overflow-hidden ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {ButtonContent}
    </button>
  );
};

export default Button;
