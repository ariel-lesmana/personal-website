import { IDENTITY, PERSON_ID, WEBSITE_ID, ORG_ID, SITE_URL } from "@/data/identity";

/**
 * Person + WebSite + Organization structured data, emitted as a single
 * @graph so AI engines and search crawlers can identify and cite the site
 * owner with high confidence. Data comes from the canonical IDENTITY module.
 */
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: IDENTITY.name,
        url: IDENTITY.url,
        image: IDENTITY.image,
        jobTitle: IDENTITY.jobTitle,
        description: IDENTITY.description,
        email: `mailto:${IDENTITY.email}`,
        homeLocation: {
          "@type": "Place",
          name: IDENTITY.location,
        },
        worksFor: {
          "@type": "Organization",
          "@id": ORG_ID,
          name: IDENTITY.worksFor.name,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: IDENTITY.alumniOf.name,
        },
        knowsAbout: [...IDENTITY.knowsAbout],
        sameAs: [...IDENTITY.sameAs],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: `${IDENTITY.name} — Portfolio`,
        author: { "@id": PERSON_ID },
        about: { "@id": PERSON_ID },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
