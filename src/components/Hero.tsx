import { CV_DATA } from "@/lib/cv-data";

const NBSP = " ";

export function Hero() {
  const firstChars = CV_DATA.name.first.split("");
  const lastChars = CV_DATA.name.last.split("");

  return (
    <section className="hero">
      <div className="hero-meta-row">
        <span>PORTFOLIO / 2026</span>
        <span>BALI → REMOTE WORLDWIDE</span>
        <span>SCROLL ↓</span>
      </div>
      <h1 className="hero-name">
        <span className="firstname">
          {firstChars.map((c, i) => (
            <span
              key={i}
              className="char"
              style={{ animationDelay: `${i * 0.03}s` }}
            >
              {c === " " ? NBSP : c}
            </span>
          ))}
        </span>
        <br />
        <span className="lastname">
          {lastChars.map((c, i) => (
            <span
              key={i}
              className="char"
              style={{ animationDelay: `${(firstChars.length + i) * 0.03 + 0.1}s` }}
            >
              {c === " " ? NBSP : c}
            </span>
          ))}
        </span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-bio">
          <strong>Fullstack developer</strong> shipping reliable web systems and
          production AI features. Currently at{" "}
          <strong>{CV_DATA.status.company}</strong>, remote.
        </p>
        <div className="hero-stats">
          {CV_DATA.stats.map((s, i) => (
            <div key={i}>
              <div className="hero-stat-num">
                {s.num}
                <span className={s.accent ? "accent" : ""}>{s.suffix}</span>
              </div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="hero-cta">
          <a href="#contact" className="cta-button">
            Get in touch <span className="arrow">↗</span>
          </a>
          <a href="#experience" className="hero-sublink">
            ↓ See selected work
          </a>
        </div>
      </div>
    </section>
  );
}
