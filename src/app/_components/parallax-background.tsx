"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black"></div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(27, 58, 218, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(27, 58, 218, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      ></div>

      {/* Floating pixel art elements */}
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-stlvgmo-orange-500 opacity-20 transform rotate-45"
        style={{
          transform: `translateY(${scrollY * 0.15}px) rotate(45deg)`,
        }}
      ></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-stlvgmo-blue-600 opacity-20 transform rotate-45"
        style={{
          transform: `translateY(${scrollY * 0.2}px) rotate(45deg)`,
        }}
      ></div>
      <div
        className="absolute top-60 left-1/4 w-2 h-2 bg-stlvgmo-orange-400 opacity-20 transform rotate-45"
        style={{
          transform: `translateY(${scrollY * 0.12}px) rotate(45deg)`,
        }}
      ></div>
      <div
        className="absolute top-80 right-1/3 w-3 h-3 bg-stlvgmo-blue-500 opacity-20 transform rotate-45"
        style={{
          transform: `translateY(${scrollY * 0.18}px) rotate(45deg)`,
        }}
      ></div>

      {/* Larger decorative elements */}
      <div
        className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-stlvgmo-blue-600/10 to-transparent blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      ></div>
      <div
        className="absolute top-1/2 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-stlvgmo-orange-500/10 to-transparent blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-gradient-to-br from-stlvgmo-blue-500/10 to-transparent blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      ></div>

      {/* Subtle scanline effect */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.5) 50%)",
          backgroundSize: "100% 4px",
          animation: "scanline 8s linear infinite",
        }}
      ></div>

      {/* Animated stars/particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translateY(${
              scrollY * (0.05 + Math.random() * 0.1)
            }px)`,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
