"use client";

import { upcomingEvents } from "@/lib/events-data";
import Link from "next/link";

export default function UpcomingEvents() {
  // Filter to show only upcoming events (you can add date filtering logic here if needed)
  const eventsToShow = upcomingEvents;

  // Don't render section if no events
  if (eventsToShow.length === 0) {
    return null;
  }

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

      {/* Event Cards - Grid layout for multiple events */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {eventsToShow.map((event) => (
          <div
            key={event.id}
            className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-stlvgmo-blue-600"
          >
            {/* Pixel art corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-stlvgmo-orange-500"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-stlvgmo-orange-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-stlvgmo-blue-600"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-stlvgmo-blue-600"></div>

            <div className="p-8 md:p-10">
              {/* Event Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-stlvgmo-orange-500 rounded-lg flex-shrink-0">
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
                  <h3 className="text-2xl font-bold text-white">
                    {event.title}
                  </h3>
                  <p className="text-stlvgmo-orange-400 font-medium text-sm">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-4 text-gray-300 mb-6">
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
                    <strong className="text-white">{event.date}</strong> at{" "}
                    <strong className="text-white">{event.time}</strong>
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
                      <strong className="text-white">{event.venue}</strong>
                    </p>
                    <p className="text-sm text-gray-400">
                      {event.address}, {event.city}, {event.state} {event.zip}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={event.ticketLink}
                target={
                  event.ticketLink.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  event.ticketLink.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-stlvgmo-orange-600 to-stlvgmo-orange-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto justify-center"
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
              </a>
            </div>

            {/* Animated gradient border effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-stlvgmo-blue-600/20 to-stlvgmo-orange-600/20 blur-xl"></div>
            </div>
          </div>
        ))}
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
