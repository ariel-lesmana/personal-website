import { CV_DATA } from "@/lib/cv-data";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="section-head reveal">
        <div className="section-label">
          <span className="section-label-num">04</span>
          <span>Studies &amp; Credentials</span>
        </div>
        <h2 className="section-title">
          Degree, <span className="serif">certs</span>, languages.
        </h2>
      </div>
      <div className="edu-grid reveal">
        <div />
        <div className="edu-card">
          <div className="edu-date">{CV_DATA.education.date}</div>
          <div className="edu-school">{CV_DATA.education.school}</div>
          <div className="edu-degree">{CV_DATA.education.degree}</div>
          <div className="edu-loc">{CV_DATA.education.location}</div>
          <div className="exp-stack-label">Relevant Coursework</div>
          <div className="edu-courses">
            {CV_DATA.education.courses.map((c) => (
              <span key={c} className="edu-course">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="exp-stack-label" style={{ marginBottom: 16 }}>
            Certifications
          </div>
          <div className="cert-list">
            {CV_DATA.certs.map((c) => (
              <div key={c.name} className="cert-item">
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                </div>
                <div className="cert-date">{c.date}</div>
              </div>
            ))}
          </div>
          <div
            className="exp-stack-label"
            style={{ marginTop: 36, marginBottom: 12 }}
          >
            Spoken Languages
          </div>
          <div className="cert-list">
            {CV_DATA.languages.map((l) => (
              <div key={l.name} className="cert-item">
                <div>
                  <div className="cert-name">{l.name}</div>
                </div>
                <div className="cert-date">{l.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
