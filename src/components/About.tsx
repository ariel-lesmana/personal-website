export function About() {
  return (
    <section className="section" id="about">
      <div className="section-head reveal">
        <div className="section-label">
          <span className="section-label-num">01</span>
          <span>About</span>
        </div>
        <h2 className="section-title">
          A backend-leaning <span className="serif">fullstack</span> engineer
          with a soft spot for AI in production.
        </h2>
      </div>
      <div className="about-body reveal">
        <div />
        <div className="about-lead">
          I build fullstack web platforms with a focus on{" "}
          <span className="serif">backend reliability</span>, performance, and
          shipping AI features that actually work in production.
        </div>
        <div className="about-detail">
          <p>
            Right now I&apos;m at <strong>Insignia</strong>, working remotely on
            dashboards, RESTful APIs, GenAI model integrations and Azure
            deployments. Before that I spent two years at{" "}
            <strong>Etherval IT Consultancy</strong> in Surabaya leading ERP
            work, AWS infra, and an AI fitness app.
          </p>
          <p>
            I care about query performance, automated testing, and CI/CD
            discipline — the unglamorous stuff that keeps systems from breaking
            at 2am. I speak Indonesian (native) and professional English.
          </p>
        </div>
      </div>
    </section>
  );
}
