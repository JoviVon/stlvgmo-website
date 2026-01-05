"use client";

import Link from "next/link";

export default function UpcomingEvents() {
  return (
    <section className="my-16 md:my-20 animate-slide-in">
      {/* Section Header with pixel art accent */}
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Upcoming Events
          </h2>
          {/* Pixel art underline */}
          <div className="h-1 bg-gradient-to-r from-transparent via-stlvgmo-orange-500 to-transparent"></div>
        </div>
      </div>

      {/* Event Card */}
      <div className="max-w-4xl mx-auto">
        <div className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-stlvgmo-blue-600">
          {/* Pixel art corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-stlvgmo-orange-500"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-stlvgmo-orange-500"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-stlvgmo-blue-600"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-stlvgmo-blue-600"></div>

          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Event Details */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-stlvgmo-orange-500 rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Spring Concert 2025
                    </h3>
                    <p className="text-stlvgmo-orange-400 font-medium">
                      Video Game Music Spectacular
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-stlvgmo-blue-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-lg">
                      <strong className="text-white">May 8, 2025</strong> at{" "}
                      <strong className="text-white">7:30 PM</strong>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-stlvgmo-blue-400 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-lg">
                        <strong className="text-white">
                          Webster Grove High School
                        </strong>
                      </p>
                      <p className="text-sm text-gray-400">
                        100 Selma Ave, Webster Groves, MO 63119
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-stlvgmo-blue-400 flex-shrink-0"
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
                    <span className="text-lg">
                      Featuring music from your favorite video games
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0">
                <Link
                  href="/program"
                  className="group/btn inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-stlvgmo-orange-600 to-stlvgmo-orange-500 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
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
                  <svg
                    className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Animated gradient border effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-stlvgmo-blue-600/20 to-stlvgmo-orange-600/20 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Retro-style divider */}
      <div className="mt-16 flex items-center justify-center gap-2">
        <div className="w-2 h-2 bg-stlvgmo-blue-600 transform rotate-45"></div>
        <div className="w-2 h-2 bg-stlvgmo-orange-500 transform rotate-45"></div>
        <div className="w-2 h-2 bg-stlvgmo-blue-600 transform rotate-45"></div>
      </div>
    </section>
  );
}
