const steps = [
  {
    title: 'Discovery',
    description: 'We talk through your goals, scope, and references. I map out what success looks like and give you a clear timeline and quote.'
  },
  {
    title: 'Design',
    description: 'Wireframes to polished UI — or I build straight from your existing Figma. You review and sign off before a line of production code.'
  },
  {
    title: 'Build',
    description: 'Clean, responsive, accessible code with regular live previews. You watch it come together, so there are no surprises at the end.'
  },
  {
    title: 'Launch',
    description: 'Cross-browser testing, performance tuning, and deployment — plus a handover so you can edit and run the site yourself.'
  }
];

export function Process() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head reveal section-header">
          <div>
            <span className="eyebrow">Process</span>
            <h2 className="section-title">How we&apos;ll work together</h2>
          </div>
          <p className="text-lead">A simple, transparent flow — you always know what&apos;s happening and see progress along the way.</p>
        </div>
        <div className="timeline reveal-stagger">
          {steps.map((step) => (
            <div className="timeline-step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
