// The PDF CV, from the same data as the site: prints LaTeX to stdout. `npm run cv` compiles it with tectonic into
// public/Ariel-Pratama-Lesmana-CV.pdf, which the site links as a download. Single column, plain text, no icons or
// tables, so applicant tracking systems read it in order.
import { CV_DATA, type SkillCategory } from "../src/lib/cv-data";
import { IDENTITY, SITE_URL } from "../src/data/identity";

const tex = (s: string) =>
  s
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/([&%$#_{}])/g, "\\$1")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
const url = (u: string) => `\\href{${u}}{${tex(u.replace(/^https?:\/\/(www\.)?/, ""))}}`;

const { name, tagline, contact, experience, skills, education, certs, languages } = CV_DATA;
const CATS: SkillCategory[] = ["AI/ML", "Languages", "Backend", "Frontend", "Databases", "Infra"];

const out = String.raw`\documentclass[10pt]{article}
\usepackage[a4paper,margin=0.5in]{geometry}
\usepackage{enumitem,titlesec}
\usepackage[hidelinks]{hyperref}
\pagestyle{empty}
\setlength{\parindent}{0pt}
\titleformat{\section}{\large\bfseries\scshape}{}{0pt}{}[\vspace{-6pt}\rule{\textwidth}{0.4pt}]
\titlespacing{\section}{0pt}{7pt}{4pt}
\setlist[itemize]{leftmargin=1.1em,itemsep=0.5pt,topsep=1pt,parsep=0pt}
\newcommand{\entry}[4]{\textbf{#1}\hfill #2\\\textit{#3}\hfill\textit{#4}\par}
\hypersetup{pdftitle={${tex(IDENTITY.name)} CV},pdfauthor={${tex(IDENTITY.name)}}}
\begin{document}

\begin{center}
{\LARGE\bfseries ${tex(`${name.first} ${name.last}`)}}\\[4pt]
${tex(IDENTITY.jobTitle)} \textbullet{} ${tex(IDENTITY.location)} (remote)\\[2pt]
\href{mailto:${contact.email}}{${tex(contact.email)}} \textbar{} ${url(`https://${contact.linkedin}`)} \textbar{} ${url(`https://${contact.github}`)} \textbar{} ${url(SITE_URL)}
\end{center}

\section{Summary}
${tex(tagline)} ${tex(CV_DATA.stats[0].num + CV_DATA.stats[0].suffix)} ${tex(CV_DATA.stats[0].label)}.

\section{Experience}
${experience
  .map(
    (e) => String.raw`\entry{${tex(e.role)}}{${tex(e.date)}}{${tex(e.company)}}{${tex(e.location)}}
\begin{itemize}
${e.bullets.map((b) => String.raw`  \item \textbf{${tex(b.strong)}}${tex(b.rest)}`).join("\n")}
\end{itemize}
{\small\textit{Stack:} ${tex(e.stack.join(", "))}}\par\medskip`,
  )
  .join("\n\n")}

\section{Skills}
${CATS.map((c) => String.raw`\textbf{${tex(c)}:} ${tex(skills.filter((s) => s.cat === c).map((s) => s.name).join(", "))}`).join("\\\\\n")}

\section{Education \& Certifications}
\entry{${tex(education.school)}}{${tex(education.date)}}{${tex(education.degree)}}{${tex(education.location)}}
{\small\textit{Coursework:} ${tex(education.courses.join(", "))}}\par\smallskip
${certs.map((c) => String.raw`${tex(c.name)}, ${tex(c.issuer)} (${tex(c.date)})`).join(" \\textbullet{} ")}\\
${languages.map((l) => `${tex(l.name)} (${tex(l.level)})`).join(", ")}

\end{document}
`;
process.stdout.write(out);
