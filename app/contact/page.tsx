import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Contact | Faisal Ahmed',
  description: 'Get in touch with Faisal Ahmed for frontend, WordPress, UI engineering, and product work.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="breadcrumb-path">Home <span>/</span> Contact</p>
            <span className="eyebrow">Contact</span>
            <h1>Let&apos;s build something useful.</h1>
            <p className="text-lead">Open to remote, hybrid, and international opportunities — freelance projects and contract work.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="contact-grid">
              <div className="reveal">
                <div className="info-list">
                  <div className="info-row">
                    <div className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></div>
                    <div><h3>Email</h3><a href="mailto:m.faisal674@gmail.com">m.faisal674@gmail.com</a></div>
                  </div>
                  <div className="info-row">
                    <div className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg></div>
                    <div><h3>Phone</h3><a href="tel:+8801673497466">+880 1673 497466</a></div>
                  </div>
                  <div className="info-row">
                    <div className="info-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM5 8.75h3.88V21H5V8.75Zm6.5 0h3.72v1.68h.05c.52-.94 1.78-1.93 3.66-1.93 3.92 0 4.64 2.5 4.64 5.76V21h-3.88v-5.88c0-1.4-.03-3.2-1.98-3.2-1.98 0-2.28 1.5-2.28 3.1V21h-3.93V8.75Z" /></svg></div>
                    <div><h3>LinkedIn</h3><a href="https://www.linkedin.com/in/faaisal/" target="_blank" rel="noopener noreferrer">linkedin.com/in/faaisal</a></div>
                  </div>
                </div>
              </div>

              <div className="reveal">
                <div className="card" style={{ padding: 'var(--space-6)' }}>
                  <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-2)' }}>Send a message</h2>
                  <p className="text-muted" style={{ fontSize: '0.88rem', marginBottom: 'var(--space-6)' }}>Tell me about your project — I&apos;ll get back with a plan and a quote.</p>

                  <form id="contact-form" noValidate>
                    <div className="form-grid">
                      <div className="form-field"><label htmlFor="name">Name <span className="req">*</span></label><input type="text" id="name" name="name" placeholder="Jane Doe" required autoComplete="name" /></div>
                      <div className="form-field"><label htmlFor="email">Email <span className="req">*</span></label><input type="email" id="email" name="email" placeholder="jane@company.com" required autoComplete="email" /></div>
                      <div className="form-field full"><label htmlFor="project-type">Project Type</label><select id="project-type" name="project-type"><option value="">Select a project type…</option><option value="webapp">Web app / UI (React)</option><option value="wordpress">WordPress Site</option><option value="saas">Agency &amp; SaaS Product UI</option><option value="landing">Landing Page</option><option value="template">Templates / Design System</option><option value="performance">Performance Optimization</option><option value="other">Something else</option></select></div>
                      <div className="form-field full"><label htmlFor="message">Message <span className="req">*</span></label><textarea id="message" name="message" rows={4} placeholder="Tell me a bit about your project…" required /></div>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">Send Message</button>
                    <p className="form-note" id="form-status" aria-live="polite" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
