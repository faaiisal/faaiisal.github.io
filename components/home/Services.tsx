const serviceBlocks = [
  {
    index: '01 / 05',
    title: 'Web Apps & UI Engineering',
    description: 'Modern, responsive interfaces for SaaS products, dashboards, and web applications.',
    deliverables: ['Responsive, component-based UI', 'Reusable components & design tokens', 'Figma-to-code implementation'],
    tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Tailwind CSS', 'React'],
    ideal: 'SaaS startups, tech companies, and product teams building modern web interfaces.'
  },
  {
    index: '02 / 05',
    title: 'WordPress & Development',
    description: 'Custom, scalable WordPress websites that are fast, responsive, and easy to manage.',
    deliverables: ['Custom themes or Elementor builds', 'Gutenberg/block-based layouts', 'Dynamic content with JetEngine'],
    tech: ['WordPress', 'Elementor & block editor', 'Gutenberg', 'Crocoblock', 'JetEngine'],
    ideal: 'Businesses, agencies, and WordPress product companies needing flexible websites.'
  },
  {
    index: '03 / 05',
    title: 'Landing Pages & Conversion',
    description: 'High-performing landing pages designed to communicate clearly and drive action.',
    deliverables: ['Conversion-focused page structure', 'Responsive & fast-loading layouts', 'Clear CTAs and user-focused sections'],
    tech: ['Sharp copy layout', 'Fast load & clear CTAs', 'Built to convert'],
    ideal: 'Startups, businesses, and marketing teams launching products, services, or campaigns.'
  },
  {
    index: '04 / 05',
    title: 'Templates & design systems',
    description: 'Scalable UI systems, templates, and reusable components that keep products consistent.',
    deliverables: ['Reusable component libraries', 'Design tokens & UI patterns', 'Production-ready templates and documentation'],
    tech: ['WordPress', 'Design tokens & docs', '50+ shipped on Templately'],
    ideal: 'Agencies, product teams, and template businesses scaling their design and development workflow.'
  },
  {
    index: '05 / 05',
    title: 'Performance & Frontend Optimization',
    description: 'Faster, cleaner, and more accessible websites without rebuilding what already works',
    deliverables: ['Performance & PageSpeed optimization', 'Responsive and accessibility fixes', 'Frontend code cleanup & SEO improvements'],
    tech: ['PageSpeed optimization', 'Accessibility & SEO', 'Responsive fixes'],
    ideal: 'Businesses with slow, aging, or poorly optimized websites that need measurable improvements.'
  }
];

export function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">Service In detail</span>
            <h2 className="section-title">What each engagement actually includes.</h2>
          </div>
        </div>

        {serviceBlocks.map((service) => (
          <div className="service-block reveal" key={service.index}>
            <div className="service-block-meta">
              <span className="service-index">{service.index}</span>
              <h3 style={{ fontSize: '1.3rem' }}>{service.title}</h3>
              <p className="text-muted" style={{ marginTop: 'var(--space-3)', fontSize: '0.92rem' }}>{service.description}</p>
            </div>
            <div>
              <div className="service-detail-grid">
                <div>
                  <h4>What I deliver</h4>
                  <ul className="card-list">
                    {service.deliverables.map((item) => (
                      <li key={item}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Technologies used</h4>
                  <div className="skill-tags">
                    {service.tech.map((tag) => (
                      <span className="skill-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h4 style={{ marginTop: 'var(--space-5)' }}>Ideal for</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>{service.ideal}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
