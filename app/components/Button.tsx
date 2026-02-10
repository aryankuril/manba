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
    <span className="flex relative z-10">
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

  const ShineEffect = (
    <span
      className={`absolute top-0 left-[-80px] h-[250%] w-[45px] rotate-45 translate-y-[-35%] transition-all duration-700 ease-out ${
        hovered ? "left-[150%]" : "left-[-80px]"
      }`}
      style={{
        background:
          "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.55), rgba(255,255,255,0))",
      }}
    ></span>
  );

  if (href) {
    return (
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundSize: "200% 100%",
          background:
            "linear-gradient(135deg, #205073 0%, #2fa7a0 55%, #329d9c 100%)",
        }}
        className={`relative inline-flex items-center justify-center px-8 py-3 rounded-[32px] uppercase text-white font-semibold text-base overflow-hidden transition-all duration-300 ease-out hover:scale-[1.06] ${className}`}
      >
        {ShineEffect}
        {ButtonContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={internalClick}
      disabled={disabled || loading}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundSize: "200% 100%",
        background:
          "linear-gradient(135deg, #205073 0%, #2fa7a0 55%, #329d9c 100%)",
      }}
      className={`relative inline-flex items-center justify-center px-10 py-3 cursor-pointer rounded-[32px] uppercase text-white font-semibold text-base overflow-hidden transition-all duration-300 ease-out hover:scale-[1.06] ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {ShineEffect}
      {ButtonContent}
    </button>
  );
};

export default Button;
