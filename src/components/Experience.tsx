"use client";

import { useState, MouseEvent } from "react";
import { CV_DATA, type Experience as Exp } from "@/lib/cv-data";

function ExperienceItem({
  item,
  isOpen,
  onToggle,
}: {
  item: Exp;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const handle = (e: MouseEvent) => {
    e.preventDefault();
    onToggle();
  };
  return (
    <div className={`exp-item ${isOpen ? "open" : ""}`} onClick={handle}>
      <div className="exp-date">
        {item.date}
        {item.current && (
          <div>
            <span className="current">● NOW</span>
          </div>
        )}
      </div>
      <div className="exp-main">
        <div className="exp-header">
          <div className="exp-title-block">
            <div className="exp-role">
              {item.role} <span className="at">at</span>{" "}
              <span className="company">{item.company}</span>
            </div>
            <div className="exp-loc">{item.location}</div>
          </div>
          <div className="exp-toggle">
            <span className="icon" />
          </div>
        </div>
        <div className="exp-body">
          <div className="exp-body-inner">
            <div className="exp-body-content">
              <div className="exp-bullets">
                {item.bullets.map((b, i) => (
                  <div key={i} className="exp-bullet">
                    <span className="exp-bullet-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <strong>{b.strong}</strong>
                      {b.rest}
                    </span>
                  </div>
                ))}
              </div>
              <div className="exp-side">
                <div className="exp-highlight-card">
                  <div className="exp-highlight-num">{item.highlight.num}</div>
                  <div className="exp-highlight-label">
                    {item.highlight.label}
                  </div>
                </div>
                <div>
                  <div className="exp-stack-label">Stack</div>
                  <div className="exp-stack-chips">
                    {item.stack.map((s) => (
                      <span key={s} className="exp-stack-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(
    CV_DATA.experience[0].id,
  );
  return (
    <section className="section" id="experience">
      <div className="section-head reveal">
        <div className="section-label">
          <span className="section-label-num">02</span>
          <span>Selected Work</span>
        </div>
        <h2 className="section-title">
          Two roles, <span className="serif">three years</span>, lots of shipped
          systems.
        </h2>
      </div>
      <div className="exp-list reveal">
        {CV_DATA.experience.map((item) => (
          <ExperienceItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() =>
              setOpenId(openId === item.id ? null : item.id)
            }
          />
        ))}
      </div>
    </section>
  );
}
