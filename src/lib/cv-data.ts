export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "AI/ML"
  | "Infra";

export type Stat = { num: string; suffix: string; label: string; accent?: boolean };

export type ExperienceBullet = { strong: string; rest: string };

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  date: string;
  current: boolean;
  stack: string[];
  bullets: ExperienceBullet[];
  highlight: { num: string; label: string };
};

export type Skill = { name: string; cat: SkillCategory; level: 1 | 2 | 3 | 4 | 5 };

export type Cert = { name: string; issuer: string; date: string };

export type Language = { name: string; level: string };

export const CV_DATA = {
  name: { first: "Ariel Pratama", last: "Lesmana" },
  tagline:
    "Fullstack developer building reliable web systems and shipping AI features into production.",
  status: {
    label: "Currently",
    company: "Insignia",
    role: "Fullstack Developer",
    remote: true,
  },
  contact: {
    email: "ariel.p.lesmana@gmail.com",
    linkedin: "linkedin.com/in/ariel-p-lesmana",
    github: "github.com/ariel-lesmana",
  },
  stats: [
    { num: "3", suffix: "+", label: "years building production systems" },
    { num: "95", suffix: "%", label: "accuracy on CV-based fitness AI", accent: true },
    { num: "100", suffix: "%", label: "Azure deploy success — zero rollbacks", accent: true },
  ] as Stat[],
  experience: [
    {
      id: "insignia",
      company: "Insignia",
      role: "Fullstack Developer",
      location: "Remote",
      date: "Jun 2025 — Present",
      current: true,
      stack: ["Next.js", "Node.js", "REST API", "Azure", "PostgreSQL", "GenAI", "LLM"],
      bullets: [
        {
          strong: "Built a full-stack dashboard system",
          rest: " improving data visibility and operational efficiency for clients.",
        },
        {
          strong: "Designed RESTful APIs",
          rest: " for reliable backend integrations across multiple client systems.",
        },
        {
          strong: "Integrated GenAI models",
          rest: " into production — pushed latest improvements live without regressions.",
        },
        {
          strong: "Optimized DB queries",
          rest: " for measurable response-time gains and better app performance.",
        },
      ],
      highlight: { num: "100%", label: "successful Azure deploys — zero rollbacks" },
    },
    {
      id: "etherval",
      company: "Etherval IT Consultancy",
      role: "Software Engineer",
      location: "Surabaya, Indonesia",
      date: "Aug 2023 — May 2025",
      current: false,
      stack: [
        "Spring Boot",
        "NestJS",
        "FastAPI",
        "AWS",
        "Docker",
        "TensorFlow",
        "PostgreSQL",
        "MongoDB",
        "MariaDB",
        "GitHub Actions",
      ],
      bullets: [
        {
          strong: "Led ERP development",
          rest: " used daily by 10–20 users; cut lag in key flows.",
        },
        {
          strong: "Integrated AWS Lambda, ECR, ECS, S3",
          rest: " — slashed debugging time, hit 80% reliability for AI functions.",
        },
        {
          strong: "Engineered an AI fitness app",
          rest: " with CNNs and Google ML libs to track exercise form — 95%+ accuracy.",
        },
        {
          strong: "Optimized report-gen query perf",
          rest: " across ~10k records on MariaDB, PostgreSQL, MongoDB.",
        },
        {
          strong: "Introduced automated testing",
          rest: " — reduced deployment errors to 2%; integration tests on every branch.",
        },
        {
          strong: "Built CI/CD via GitHub Actions",
          rest: " — production deployment success rate climbed to 90%.",
        },
      ],
      highlight: { num: "95%+", label: "accuracy on CNN-based exercise form tracker" },
    },
  ] as Experience[],
  skills: [
    { name: "Python", cat: "Languages", level: 5 },
    { name: "JavaScript", cat: "Languages", level: 5 },
    { name: "TypeScript", cat: "Languages", level: 5 },
    { name: "Java", cat: "Languages", level: 4 },
    { name: "SQL", cat: "Languages", level: 4 },
    { name: "Dart", cat: "Languages", level: 3 },
    { name: "Kotlin", cat: "Languages", level: 3 },
    { name: "C", cat: "Languages", level: 3 },
    { name: "HTML/CSS", cat: "Languages", level: 4 },
    { name: "Next.js", cat: "Frontend", level: 5 },
    { name: "React", cat: "Frontend", level: 5 },
    { name: "Node.js", cat: "Backend", level: 5 },
    { name: "NestJS", cat: "Backend", level: 4 },
    { name: "FastAPI", cat: "Backend", level: 4 },
    { name: "Spring Boot", cat: "Backend", level: 4 },
    { name: "REST API", cat: "Backend", level: 5 },
    { name: "PostgreSQL", cat: "Databases", level: 5 },
    { name: "MongoDB", cat: "Databases", level: 4 },
    { name: "MariaDB", cat: "Databases", level: 4 },
    { name: "Supabase", cat: "Databases", level: 4 },
    { name: "GenAI", cat: "AI/ML", level: 5 },
    { name: "LLM Integration", cat: "AI/ML", level: 5 },
    { name: "Prompt Engineering", cat: "AI/ML", level: 4 },
    { name: "NLP", cat: "AI/ML", level: 4 },
    { name: "TensorFlow", cat: "AI/ML", level: 4 },
    { name: "CNN", cat: "AI/ML", level: 4 },
    { name: "ARIMA", cat: "AI/ML", level: 3 },
    { name: "Docker", cat: "Infra", level: 4 },
    { name: "AWS", cat: "Infra", level: 4 },
    { name: "Azure", cat: "Infra", level: 4 },
    { name: "GitHub Actions", cat: "Infra", level: 5 },
    { name: "CI/CD", cat: "Infra", level: 5 },
    { name: "Jenkins", cat: "Infra", level: 3 },
    { name: "Git", cat: "Infra", level: 5 },
    { name: "Linux", cat: "Infra", level: 4 },
  ] as Skill[],
  education: {
    school: "Institut Sains dan Teknologi Terpadu Surabaya",
    schoolShort: "iSTTS",
    degree: "Bachelor of Informatics, Computer Science",
    date: "Jul 2019 — Jul 2023",
    location: "Surabaya, Indonesia",
    courses: [
      "Data Structures",
      "Big Data",
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
      "Generative Algorithm",
      "Data Analytics",
      "Data Mining",
    ],
  },
  certs: [
    { name: "Intro to Machine Learning", issuer: "Kaggle", date: "Jan 2025" },
    { name: "AWS Academy Graduate — Data Analytics", issuer: "Amazon Web Services", date: "2023" },
  ] as Cert[],
  languages: [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Professional" },
  ] as Language[],
};

export type CVData = typeof CV_DATA;
