import { CV_DATA } from "@/lib/cv-data";

export function Contact() {
  const { contact } = CV_DATA;
  return (
    <section className="contact-section" id="contact">
      <div className="section-label reveal" style={{ display: "flex", gap: 12 }}>
        <span className="section-label-num">06</span>
        <span>Contact</span>
      </div>
      <h2 className="contact-cta reveal">
        Let&apos;s build <span className="serif accent">something</span> together.
      </h2>
      <div className="contact-grid reveal">
        <a href={`mailto:${contact.email}`} className="contact-link">
          <span className="contact-link-label">Email</span>
          <span className="contact-link-value">
            <span>{contact.email}</span>
            <span className="contact-link-arrow">↗</span>
          </span>
        </a>
        <a
          href={`https://${contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-label">LinkedIn</span>
          <span className="contact-link-value">
            <span>ariel-p-lesmana</span>
            <span className="contact-link-arrow">↗</span>
          </span>
        </a>
        <a
          href={`https://${contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-label">GitHub</span>
          <span className="contact-link-value">
            <span>ariel-lesmana</span>
            <span className="contact-link-arrow">↗</span>
          </span>
        </a>
      </div>
    </section>
  );
}
