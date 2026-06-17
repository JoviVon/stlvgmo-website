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
    id: "summer-2026-concert",
    title: "Echos of Hyrule",
    date: "Saturday July 11, 2026",
    time: "1:00 PM",
    venue: "Webster Grove High School",
    address: "100 Selma Ave",
    city: "Webster Groves",
    state: "MO",
    zip: "63119",
    description: 'All Legend of Zelda music concert: "Echoes of Hyrule."',
    ticketLink: "https://givebutter.com/stlvgmo-echoes-of-hyrule",
  },
  {
    id: "trivia-night-2026",
    title: "STLVGMO Trivia Night",
    date: "November 7th, 2026",
    time: "7-9:30pm",
    venue: "THE HEIGHTS: The Richmond Heights Community Center",
    address: "8001 Dale Ave, Richmond Heights, MO 63117",
    city: "St. Louis",
    state: "MO",
    zip: "63117",
    description:
      "Join us for a fun community trivia night benefiting STLVGMO. Details coming soon.",
    ticketLink: "/trivia",
  },
  {
    id: "gateway-fate-2026",
    title: "Gateway Fate ",
    date: "October 17th & 18th 2026",
    time: "Various Times",
    venue: "St. Charles Convention Center",
    address: "1 Convention Center Plz St. Charles MO, 63303",
    city: "St. Louis",
    state: "MO",
    zip: "63303",
    description: "Full details will be announced soon.",
    ticketLink: "/events",
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
