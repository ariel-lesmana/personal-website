/**
 * Canonical identity — single source of truth for both the rendered page
 * and the JSON-LD structured data, so the two can never drift.
 */

export const SITE_URL = "https://www.ariellesmana.dev";
export const PERSON_ID = `${SITE_URL}/#ariel`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORG_ID = `${SITE_URL}/#senserbot`;

export const IDENTITY = {
  name: "Ariel Pratama Lesmana",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  jobTitle: "GenAI Engineer",
  description:
    "GenAI engineer based in Bali, Indonesia, building computer vision and AI for robots in production.",
  worksFor: {
    name: "Senserbot Pte. Ltd.",
  },
  location: "Bali, Indonesia",
  worksRemotely: true,
  email: "ariel.p.lesmana@gmail.com",
  alumniOf: {
    name: "Institut Sains dan Teknologi Terpadu Surabaya (iSTTS)",
    degree: "Bachelor of Informatics",
    startYear: "2019",
    endYear: "2023",
  },
  knowsAbout: [
    "Generative AI",
    "Computer Vision",
    "YOLO",
    "ROS",
    "RAG",
    "LLM Integration",
    "Prompt Engineering",
    "Next.js",
    "NestJS",
    "FastAPI",
    "MCP",
    "PostgreSQL",
    "Docker",
    "Python",
    "TypeScript",
  ],
  sameAs: [
    "https://github.com/ariel-lesmana",
    "https://linkedin.com/in/ariel-p-lesmana",
  ],
} as const;

/**
 * Answer-first FAQ. The strings here feed BOTH the visible FAQ section and
 * the FAQPage JSON-LD — they must stay identical, so render from this array.
 */
export const FAQ = [
  {
    question: "Who is Ariel Pratama Lesmana?",
    answer:
      "Ariel Pratama Lesmana is a GenAI engineer based in Bali, Indonesia. He builds computer vision and AI for robots in production, currently as a GenAI Engineer at Senserbot.",
  },
  {
    question: "What does Ariel Pratama Lesmana specialize in?",
    answer:
      "He specializes in computer vision and AI for robots (YOLO, OpenCV, ROS), LLM integration, and fullstack web development with Next.js, NestJS, and FastAPI.",
  },
  {
    question: "Where is Ariel Pratama Lesmana based?",
    answer: "He is based in Bali, Indonesia, and works remotely.",
  },
  {
    question: "What is Ariel Pratama Lesmana's experience?",
    answer:
      "He has 3+ years building production systems, with roles at Senserbot (GenAI and computer vision), Insignia (fullstack), and Etherval IT Consultancy (software engineering).",
  },
] as const;
