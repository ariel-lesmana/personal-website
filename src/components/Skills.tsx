"use client";

import { useMemo, useState } from "react";
import { CV_DATA } from "@/lib/cv-data";

const CAT_LIST = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "AI/ML",
  "Infra",
] as const;

export function Skills() {
  const [activeCat, setActiveCat] = useState<string>("All");

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: CV_DATA.skills.length };
    CV_DATA.skills.forEach((s) => {
      map[s.cat] = (map[s.cat] || 0) + 1;
    });
    return map;
  }, []);

  return (
    <section className="section" id="skills">
      <div className="section-head reveal">
        <div className="section-label">
          <span className="section-label-num">03</span>
          <span>Skills &amp; Stack</span>
        </div>
        <h2 className="section-title">
          What I reach for, by <span className="serif">category</span>.
        </h2>
      </div>
      <div className="skills-wrap reveal">
        <div className="skills-filters">
          {CAT_LIST.map((c) => (
            <button
              key={c}
              className={`skills-filter ${activeCat === c ? "active" : ""}`}
              onClick={() => setActiveCat(c)}
            >
              {c} <span className="skills-filter-count">{counts[c] || 0}</span>
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {CV_DATA.skills.map((s) => {
            const dim = activeCat !== "All" && s.cat !== activeCat;
            return (
              <div key={s.name} className={`skill-cell ${dim ? "dim" : ""}`}>
                <div className="skill-cat">{s.cat}</div>
                <div className="skill-name">{s.name}</div>
                <div className="skill-level">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`skill-dot ${n <= s.level ? "filled" : ""}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
