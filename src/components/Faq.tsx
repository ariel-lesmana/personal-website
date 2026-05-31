import { FAQ } from "@/data/identity";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="section" id="faq">
      <div className="section-head reveal">
        <div className="section-label">
          <span className="section-label-num">05</span>
          <span>FAQ</span>
        </div>
        <h2 className="section-title">
          Frequently <span className="serif">asked</span> questions.
        </h2>
      </div>
      <dl className="faq-list reveal">
        {FAQ.map((item) => (
          <div className="faq-item" key={item.question}>
            <dt className="faq-q">{item.question}</dt>
            <dd className="faq-a">{item.answer}</dd>
          </div>
        ))}
      </dl>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
