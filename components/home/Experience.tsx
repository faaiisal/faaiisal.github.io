const experienceItems = [
  {
    period: '2021 — 2025',
    role: 'Mid-Level Frontend Developer',
    company: 'Startise · Dhaka, Bangladesh',
    bullets: [
      'Built and optimized WordPress UI systems for Templately using Elementor and Gutenberg, creating reusable patterns that improved speed, consistency, and design scalability.',
      'Developed custom widgets and storefront features for Essential Blocks, BetterDocs, Better Payment, NotificationX, Easy.Jobs, StoreSEO, StoreFAQ, and TrustSync.',
      'Worked on production-ready template structures for high-traffic product experiences, balancing performance, UX quality, and maintainability across multiple client-facing products.'
    ],
    tags: ['Elementor', 'Gutenberg', 'WordPress', 'UI Systems']
  },
  {
    period: '2017 — 2020',
    role: 'Frontend Developer',
    company: 'Deligram · Dhaka, Bangladesh',
    bullets: [
      'Designed and built responsive, semantic interfaces for an omni-channel eCommerce platform, improving UX consistency and reducing frontend defects during integration.',
      'Created clean, scalable HTML/CSS/JS markup and collaborated with developers to ship faster and more reliably across product modules.',
      'Launched and maintained the company’s WordPress website, improving digital presence, content usability, and frontend quality.'
    ],
    tags: ['Semantic UI', 'WordPress', 'Ecommerce UX']
  },
  {
    period: '2015 — 2017',
    role: 'Independent Contractor',
    company: 'SmartOne (Canada) · TechNet Ltd (UK)',
    bullets: [
      'Led redesign initiatives and frontend delivery for WordPress-based websites and B2B experiences, improving user engagement and stakeholder satisfaction.',
      'Managed delivery from concept through deployment for multiple client and in-house products, balancing design quality, implementation speed, and launch readiness.',
      'Built clean frontend experiences for HR, SaaS, and eCommerce products, helping teams improve clarity, performance, and product consistency.'
    ],
    tags: ['Project Leadership', 'WordPress', 'Delivery']
  }
];

export function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">Experience</span>
            <h2 className="section-title">A track record of shipping real products.</h2>
          </div>
        </div>

        <div className="experience-list">
          {experienceItems.map((item) => (
            <div className="experience-item reveal" key={`${item.company}-${item.period}`}>
              <div className="experience-date-row">
                <span className="experience-date">{item.period}</span>
              </div>
              <h3 className="experience-item-title">{item.role}</h3>
              <span className="experience-company">{item.company}</span>
              <ul className="text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="experience-tags">
                {item.tags.map((tag) => (
                  <span className="exp-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
