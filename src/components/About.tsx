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
          I build <span className="serif">GenAI-powered systems</span> and
          fullstack web platforms — from RAG pipelines and LLM integrations to
          production APIs that actually work at scale.
        </div>
        <div className="about-detail">
          <p>
            <strong>Ariel Pratama Lesmana</strong> is a backend-leaning
            fullstack and GenAI software engineer based in Bali, Indonesia.
          </p>
          <p>
            Currently at <strong>Senserbot</strong>, building AI-driven
            solutions for logistics and e-commerce — RAG pipelines, LLM
            integrations, and intelligent automation. Before that I shipped
            dashboards, GenAI features, and zero-rollback deployments at{" "}
            <strong>Insignia</strong>, and spent two years at{" "}
            <strong>Etherval IT Consultancy</strong> leading ERP work, AWS
            infra, and a CNN-based fitness app.
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
