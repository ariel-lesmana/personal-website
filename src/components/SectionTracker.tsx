"use client";

import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext<string>("about");

export function SectionTrackerProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    );
    reveals.forEach((r) => revealObs.observe(r));

    const sections = document.querySelectorAll("section[id]");
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
    );
    sections.forEach((s) => sectionObs.observe(s));

    return () => {
      revealObs.disconnect();
      sectionObs.disconnect();
    };
  }, []);

  return <Ctx.Provider value={active}>{children}</Ctx.Provider>;
}

export function useActiveSection() {
  return useContext(Ctx);
}
