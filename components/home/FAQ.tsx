const faqs = [
  {
    id: 'faq-1',
    question: 'What kind of projects do you take on?',
    answer: 'Frontend builds, WordPress and Elementor sites, SaaS product UI, landing pages, and performance or accessibility improvements to existing websites.'
  },
  {
    id: 'faq-2',
    question: 'How long does a typical project take?',
    answer: 'It depends entirely on scope — a landing page can move in days, while a full WordPress build or SaaS interface typically takes several weeks. I will give you a clear estimate after understanding the brief.'
  },
  {
    id: 'faq-3',
    question: 'How do you charge?',
    answer: 'Fixed price per project when the scope is well-defined, or hourly for ongoing and open-ended work. We agree on it together before I begin — no surprises on the invoice.'
  },
  {
    id: 'faq-4',
    question: 'Do you work remotely & with international companies?',
    answer: 'Yes — Remote work is my primary way of working, and I have delivered projects for international teams and clients outside Bangladesh. I am comfortable collaborating across different time zones and communication styles.'
  },
  {
    id: 'faq-5',
    question: 'Can you work with my existing team or codebase?',
    answer: 'Absolutely. I can join an existing team, build from your Figma, or pick up and extend an existing WordPress, Shopify, or React codebase.'
  },
  {
    id: 'faq-6',
    question: 'Will I be able to edit the site myself afterward?',
    answer: 'Yes. Every project I deliver comes with a handover — documentation, a walkthrough of the CMS or codebase, and enough context for you to manage updates confidently.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Good questions</h2>
          </div>
          <p className="text-lead">The things most clients usually want to know before we start working together.</p>
        </div>
      </div>
      <div className="container container--narrow">
        <div className="accordion" role="presentation">
          {faqs.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <h3>
                <button className="accordion-trigger" aria-expanded={index === 0 ? 'true' : 'false'} aria-controls={item.id} id={`faq-trigger-${index + 1}`} type="button">
                  <span>{item.question}</span>
                  <span className="plus-icon" aria-hidden="true" />
                </button>
              </h3>
              <div className="accordion-panel" id={item.id} role="region" aria-labelledby={`faq-trigger-${index + 1}`}>
                <div className="accordion-panel-inner">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
