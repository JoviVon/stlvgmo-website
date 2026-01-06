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
