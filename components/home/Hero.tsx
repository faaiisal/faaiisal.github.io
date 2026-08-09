export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="reveal is-visible">
          <span className="availability-pill">
            <span className="availability-dot" aria-hidden="true" />
            Available for Remote, Hybrid &amp; On-Site Opportunities
          </span>
          <h1 className="display-1">
            Building modern web
            <br />
            experiences that <span className="accent-italic">work.</span>
          </h1>
          <p className="text-lead">
            I&apos;m Faisal Ahmed, a Web Developer &amp; UI Engineer with 8+ years of experience turning Figma designs into responsive, accessible, high-performance products — using JavaScript, WordPress, and thoughtful UI engineering.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-primary" href="/#contact">Let&apos;s Work Together</a>
            <a className="btn btn-secondary" href="/#work">View My Projects</a>
          </div>
        </div>

        <div className="hero-panel reveal is-visible" aria-hidden="false">
          <span className="coord-tag coord-tag--tl">x: 128 · y: 64</span>
          <div className="hero-panel-header">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span>inspector.tsx</span>
          </div>
          <div className="stack-row"><span>role</span><span className="text-mono">Web Developer &amp; UI Engineer</span></div>
          <div className="stack-row"><span>stack</span><span className="text-mono">JS · React · WordPress</span></div>
          <div className="stack-row"><span>base</span><span className="text-mono">Dhaka, Bangladesh</span></div>
          <div className="stack-row"><span>status</span><span className="text-mono">Open to work</span></div>
          <div className="hero-panel-stats">
            <div><strong>8+</strong><span>Years experience</span></div>
            <div><strong>300+</strong><span>Students mentored</span></div>
            <div><strong>50+</strong><span>Products shipped</span></div>
          </div>
          <span className="coord-tag coord-tag--br">w: 420 · h: 380</span>
        </div>
      </div>
    </section>
  );
}
