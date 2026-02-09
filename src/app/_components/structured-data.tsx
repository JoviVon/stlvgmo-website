import { ORGANIZATION, SOCIAL_LINKS } from "@/lib/constants";
import { Event } from "@/lib/events-data";

export function StructuredData({ events = [] }: { events?: Event[] }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "PerformingGroup",
    name: ORGANIZATION.name,
    alternateName: ORGANIZATION.shortName,
    url: "https://stlvgmo.com",
    logo: "https://stlvgmo.com/assets/blog/logos/STLVGMO_logomark.svg",
    image: "https://stlvgmo.com/assets/blog/logos/STLVGMO_wordmark.svg",
    description:
      "St. Louis Video Game Music Orchestra brings epic video game soundtracks to life through live orchestral performances.",
    email: ORGANIZATION.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORGANIZATION.location.address,
      addressLocality: ORGANIZATION.location.city,
      addressRegion: ORGANIZATION.location.state,
      postalCode: ORGANIZATION.location.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.5897",
      longitude: "-90.3547",
    },
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.youtube,
      SOCIAL_LINKS.reddit,
    ],
    genre: ["Video Game Music", "Orchestral", "Symphonic"],
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "St. Louis",
        addressRegion: "MO",
        addressCountry: "US",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "STLVGMO",
    url: "https://stlvgmo.com",
    description: "Official website of the St. Louis Video Game Music Orchestra",
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      logo: {
        "@type": "ImageObject",
        url: "https://stlvgmo.com/assets/blog/logos/STLVGMO_logomark.svg",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://stlvgmo.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Generate Event schemas for all upcoming events
  const eventSchemas = events
    .filter((event) => event.startDate && event.eventStatus) // Only include events with required fields
    .map((event) => {
      const eventSchema: any = {
        "@context": "https://schema.org",
        "@type": "MusicEvent",
        name: event.title,
        description: event.description,
        startDate: event.startDate,
        endDate: event.endDate || event.startDate,
        eventStatus: `https://schema.org/${event.eventStatus || "EventScheduled"}`,
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: event.venue,
          address: {
            "@type": "PostalAddress",
            streetAddress: event.address,
            addressLocality: event.city,
            addressRegion: event.state,
            postalCode: event.zip,
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "38.5897",
            longitude: "-90.3547",
          },
        },
        organizer: {
          "@type": "PerformingGroup",
          name: ORGANIZATION.name,
          url: "https://stlvgmo.com",
        },
        performer: {
          "@type": "PerformingGroup",
          name: ORGANIZATION.name,
          url: "https://stlvgmo.com",
        },
      };

      // Add image if available
      if (event.image) {
        eventSchema.image = [
          `https://stlvgmo.com${event.image}`,
          "https://stlvgmo.com/assets/blog/logos/STLVGMO_wordmark.svg",
        ];
      }

      // Add offers (ticket information)
      if (event.ticketLink) {
        eventSchema.offers = {
          "@type": "Offer",
          url: event.ticketLink,
          price: event.price === "free" ? "0" : event.price || "0",
          priceCurrency: event.currency || "USD",
          availability: `https://schema.org/${event.availability || "InStock"}`,
          validFrom: new Date().toISOString(),
        };
      }

      return eventSchema;
    });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {eventSchemas.map((eventSchema, index) => (
        <script
          key={`event-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      ))}
    </>
  );
}
