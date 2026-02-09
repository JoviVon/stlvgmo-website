export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  description: string;
  ticketLink: string;
  // SEO fields for structured data
  image?: string;
  price?: number | "free";
  currency?: string;
  availability?: "InStock" | "SoldOut" | "PreOrder";
  eventStatus?:
    | "EventScheduled"
    | "EventCancelled"
    | "EventPostponed"
    | "EventRescheduled";
  startDate?: string; // ISO 8601 format
  endDate?: string; // ISO 8601 format
}

// Add your events here - just copy and paste this template for new events!
export const upcomingEvents: Event[] = [
  {
    id: "spring-2026-concert",
    title: "Spring Concert: From Hollow to Grace",
    date: "Friday May 8, 2026",
    time: "7:30 PM",
    venue: "Webster Grove High School",
    address: "100 Selma Ave",
    city: "Webster Groves",
    state: "MO",
    zip: "63119",
    description:
      "Join us for an evening of epic video game music performed live by the St. Louis Video Game Music Orchestra feature selections from Elden Ring, Hollow Knights, Final Fantasy, and Genshin Impact",
    ticketLink: "https://givebutter.com/mY39pq",
    // SEO fields
    image: "/assets/STLVGMO_poster_Spring2026_24Jan.png",
    price: "free",
    currency: "USD",
    availability: "InStock",
    eventStatus: "EventScheduled",
    startDate: "2026-05-08T19:30:00-05:00", // 7:30 PM Central Time
    endDate: "2026-05-08T21:30:00-05:00", // Estimated 2-hour concert
  },
  {
    id: "summer-2026-concert",
    title: "Summer Concert 2026",
    date: "TBD",
    time: "TBD",
    venue: "Webster Grove High School",
    address: "100 Selma Ave",
    city: "Webster Groves",
    state: "MO",
    zip: "63119",
    description:
      "Join us for an evening of epic video game music performed live by the St. Louis Video Game Music Orchestra!",
    ticketLink: "",
  },
  // Add more events below - just copy the template above and update the details!
  // Example:
  // {
  //   id: "summer-2025-concert",
  //   title: "Summer Concert 2025",
  //   date: "August 15, 2025",
  //   time: "7:00 PM",
  //   venue: "Another Venue",
  //   address: "123 Main St",
  //   city: "St. Louis",
  //   state: "MO",
  //   zip: "63101",
  //   description: "Another amazing concert!",
  //   ticketLink: "/program",
  // },
];
