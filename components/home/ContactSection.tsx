export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <span className="eyebrow">Contact details</span>
            <h2 className="section-title" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>Reach me directly</h2>
            <div className="info-list">
              <div className="info-row">
                <div className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></div>
                <div>
                  <h3>Email</h3><a href="mailto:m.faisal674@gmail.com">m.faisal674@gmail.com</a>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg></div>
                <div>
                  <h3>Phone</h3><a href="tel:+8801673497466">+880 1673 497466</a>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM5 8.75h3.88V21H5V8.75Zm6.5 0h3.72v1.68h.05c.52-.94 1.78-1.93 3.66-1.93 3.92 0 4.64 2.5 4.64 5.76V21h-3.88v-5.88c0-1.4-.03-3.2-1.98-3.2-1.98 0-2.28 1.5-2.28 3.1V21h-3.93V8.75Z" /></svg></div>
                <div>
                  <h3>LinkedIn</h3><a href="https://www.linkedin.com/in/faaisal/" target="_blank" rel="noopener noreferrer">linkedin.com/in/faaisal</a>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.5v-1.75c-2.78.62-3.37-1.19-3.37-1.19-.46-1.2-1.11-1.52-1.11-1.52-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .28.18.6.69.5A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" /></svg></div>
                <div>
                  <h3>GitHub</h3><a href="https://github.com/faaiisal/" target="_blank" rel="noopener noreferrer">github.com/faaiisal</a>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 'var(--space-2)', background: 'var(--color-bg-alt)' }}>
              <span className="availability-pill" style={{ marginBottom: 'var(--space-3)' }}><span className="availability-dot" aria-hidden="true" />Currently available</span>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>Open to remote, hybrid and international opportunities — freelance projects and contract work.</p>
            </div>
          </div>

          <div className="reveal">
            <div className="card" style={{ padding: 'var(--space-6)' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-2)' }}>Send a message</h2>
              <p className="text-muted" style={{ fontSize: '0.88rem', marginBottom: 'var(--space-6)' }}>Tell me about your project — I&apos;ll get back with a plan and a quote.</p>

              <form id="contact-form" noValidate>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="name">Name <span className="req">*</span></label>
                    <input type="text" id="name" name="name" placeholder="Jane Doe" required autoComplete="name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email <span className="req">*</span></label>
                    <input type="email" id="email" name="email" placeholder="jane@company.com" required autoComplete="email" />
                  </div>
                  <div className="form-field full">
                    <label htmlFor="project-type">Project Type</label>
                    <select id="project-type" name="project-type">
                      <option value="">Select a project type…</option>
                      <option value="webapp">Web app / UI (React)</option>
                      <option value="wordpress">WordPress Site</option>
                      <option value="saas">Agency &amp; SaaS Product UI</option>
                      <option value="landing">Landing Page</option>
                      <option value="template">Templates / Design System</option>
                      <option value="performance">Performance Optimization</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div className="form-field full">
                    <label htmlFor="message">Message <span className="req">*</span></label>
                    <textarea id="message" name="message" rows={4} placeholder="Tell me a bit about your project…" required />
                  </div>
                </div>
                <button className="btn btn-primary btn-block" type="submit">Send Message</button>
                <p className="form-note" id="form-status" aria-live="polite" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
