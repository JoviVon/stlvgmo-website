"use client";

import Link from "next/link";

export default function HeroCTA() {
  return (
    <section className="my-12 md:my-16 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Primary CTA - Get Tickets */}
        <Link
          href="https://givebutter.com/mY39pq"
          className="group relative px-8 py-4 bg-gradient-to-r from-stlvgmo-orange-600 to-stlvgmo-orange-500 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
            Get Tickets
          </span>
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-stlvgmo-orange-700 to-stlvgmo-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </Link>

        {/* Secondary CTA - Join Orchestra */}
        <Link
          href="/contact"
          className="group px-8 py-4 bg-transparent border-2 border-stlvgmo-blue-600 text-stlvgmo-blue-400 font-bold text-lg rounded-lg hover:bg-stlvgmo-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 ease-out shadow-md hover:shadow-lg"
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
            Join Our Orchestra
          </span>
        </Link>
      </div>
    </section>
  );
}
