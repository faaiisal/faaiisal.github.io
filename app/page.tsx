import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { Work } from '@/components/home/Work';
import { Experience } from '@/components/home/Experience';
import { Process } from '@/components/home/Process';
import { FAQ } from '@/components/home/FAQ';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />

        <section className="section">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="eyebrow">What I do</span>
                <h2 className="section-title">I turn designs into interfaces that feel obvious to use.</h2>
              </div>
              <p className="text-lead">Fast to load, easy to use, and built to hold up as a product grows — across web apps, WordPress sites, and SaaS products.</p>
            </div>
            <div className="grid-2">
              <div className="reveal">
                <p className="text-muted" style={{ marginBottom: 'var(--space-4)' }}>
                  Over the past 8+ years I&apos;ve worked across the full frontend stack — building component-driven interfaces in HTML5, CSS3 and modern JavaScript, and shipping production WordPress sites with Elementor and Gutenberg for startups, agencies and SaaS teams.
                </p>
                <p className="text-muted">
                  Alongside hands-on development, I&apos;ve managed cross-functional delivery — coordinating designers, developers and QA engineers to keep digital products on schedule and on spec. I&apos;m currently deepening my engineering toolkit with React, Next.js, TypeScript and AI-assisted development workflows using tools like Claude, Cursor and GitHub Copilot.
                </p>
              </div>
              <ul className="card-list" style={{ gap: 'var(--space-4)' }}>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><strong>8+ years</strong> building production frontend interfaces and WordPress products.</span></li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><strong>UI engineering</strong> focus — reusable components, responsive systems, and performance.</span></li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><strong>WordPress &amp; Elementor</strong> expertise across custom themes and page builders.</span></li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><strong>Project management</strong> background coordinating designers, developers and QA.</span></li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><strong>Currently learning</strong> React, Next.js, TypeScript and AI-assisted development.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="container">
            <div className="stats-strip reveal">
              <div className="stat-cell"><strong className="stat-num" data-count-to="8" data-suffix="+">8+</strong><span>Years of experience</span></div>
              <div className="stat-cell"><strong className="stat-num" data-count-to="50" data-suffix="+">50+</strong><span>Websites &amp; products shipped</span></div>
              <div className="stat-cell"><strong className="stat-num" data-count-to="700" data-suffix="K+">700K+</strong><span>People build on templates I&apos;ve shipped</span></div>
            </div>
          </div>
        </section>

        <Services />
        <Work />

        <section className="section section-alt">
          <div className="container">
            <div className="more-tpl reveal">
              <div className="mt-head">
                <div className="mt-title">More from the library</div>
                <div className="mt-note">10 more of 145+ — all live on templately.com and Other&apos;s Projects</div>
              </div>
              <div className="mt-grid">
                {['LifeTacts', 'Cobizz Hive', 'BookAnAir', 'Health & Wellness', 'NeurAIGency', 'NooCodeHub', 'Flimo', 'FestiveLy', 'TechNet', 'RepairSuite'].map((project) => (
                  <a className="mt-row" key={project} href="#" target="_blank" rel="noreferrer">
                    <span className="mt-name">{project}</span>
                    <span className="mt-cat">{project === 'LifeTacts' ? 'Life Coach · Gutenberg' : project === 'Cobizz Hive' ? 'Co Working Space · Elementor' : project === 'BookAnAir' ? 'Booking · Gutenberg' : project === 'Health & Wellness' ? 'Multipurpose · Elementor' : project === 'NeurAIGency' ? 'AI Startup · Gutenberg' : project === 'NooCodeHub' ? 'Community · Elementor' : project === 'Flimo' ? 'Film Production · Gutenberg' : project === 'FestiveLy' ? 'Carnival · Gutenberg' : project === 'TechNet' ? 'Agency Site · Elementor' : 'Repair Management Application · SASS'}</span>
                    <svg className="mt-ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="opensource" className="section">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="eyebrow">Open source</span>
                <h2 className="section-title">Building in the open.</h2>
              </div>
              <p className="text-lead">Developer tools I&apos;m building and sharing publicly — more on the way.</p>
            </div>

            <div className="oss-grid">
              <a className="oss-card reveal" href="https://github.com/faaiisal/Eypra-RealEstate" target="_blank" rel="noopener noreferrer">
                <div className="oss-info">
                  <div className="oss-top">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="20" height="20"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
                    <span className="oss-mit oss-mit--fs">Full-stack · Open source</span>
                  </div>

                  <div className="oss-name">Eypra-RealEstate</div>
                  <p className="oss-desc">Epyra - Real Estate is a Full-Stack real estate website built with React, Next.js, TypeScript, and a Node.js (Express) backend. The platform allows users to browse, list, and manage properties seamlessly.</p>
                  <div className="oss-tags">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Next.js</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>PostgreSQL</span>
                    <span>OpenAI · Gemini · Claude</span>
                  </div>

                  <div className="oss-action">
                    <span className="wi-link">View on GitHub <span className="ar" aria-hidden="true">↗</span></span>
                  </div>
                </div>

                <div className="md-mock" aria-hidden="true">
                  <div className="md-bar">
                    <i />
                    <i />
                    <i />
                    <span>live incident map</span>
                  </div>
                  <div className="md-body">
                    <div className="mm-map">
                      <span className="mm-pin" style={{ top: '22%', left: '30%' }} />
                      <span className="mm-pin hot" style={{ top: '40%', left: '58%' }} />
                      <span className="mm-pin" style={{ top: '58%', left: '38%' }} />
                      <span className="mm-pin hot" style={{ top: '66%', left: '70%' }} />
                      <span className="mm-pin" style={{ top: '34%', left: '78%' }} />
                      <span className="mm-pin" style={{ top: '74%', left: '48%' }} />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="oss-more reveal">
              <p>
                <b>More tools are in the works</b> &mdash; I&apos;m building open-source projects regularly now. Follow along.
              </p>
              <a href="https://github.com/faaiisal" target="_blank" rel="noopener noreferrer">Follow on GitHub ↗</a>
            </div>
          </div>
        </section>

        <Experience />
        <Process />

        <section className="section section-cta">
          <div className="container">
            <div className="final-cta reveal">
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Get in touch</span>
              <h2>Have a project in mind?<br />Let&apos;s build something useful.</h2>
              <p>Remote, hybrid and international opportunities welcome — freelance or contract.</p>
              <a className="btn btn-primary" href="/#contact">Start a Conversation</a>
            </div>
          </div>
        </section>

        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
