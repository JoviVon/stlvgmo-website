import { ORGANIZATION, SOCIAL_LINKS } from "@/lib/constants";

export function StructuredData() {
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
    </>
  );
}
