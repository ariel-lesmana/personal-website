"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useActiveSection } from "./SectionTracker";

const LINKS = [
  { id: "about", n: "01", label: "About" },
  { id: "experience", n: "02", label: "Work" },
  { id: "skills", n: "03", label: "Skills" },
  { id: "education", n: "04", label: "Studies" },
  { id: "contact", n: "05", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-brand">
        <span className="nav-dot" />
        <span>AVAILABLE / REMOTE</span>
      </div>
      <div className="nav-links">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`nav-link ${active === l.id ? "active" : ""}`}
          >
            <span className="nav-link-num">{l.n}</span>
            <span>{l.label}</span>
          </a>
        ))}
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {theme === "light" ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
