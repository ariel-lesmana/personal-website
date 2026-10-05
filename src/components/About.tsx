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
          I build <span className="serif">AI for robots in production</span>{" "}
          and the fullstack platforms around it — from on-robot computer vision
          to the dashboards and APIs operators use every day.
        </div>
        <div className="about-detail">
          <p>
            <strong>Ariel Pratama Lesmana</strong> is a GenAI engineer based in
            Bali, Indonesia, with a backend-leaning fullstack background.
          </p>
          <p>
            Currently at <strong>Senserbot</strong>, building computer vision
            and AI for museum security and tour-guide robots — patrol logic, lift
            integration, operator dashboards, and now RAG for the robots&apos;
            answers. Before that I shipped
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
