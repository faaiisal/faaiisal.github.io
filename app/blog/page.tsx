import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogExplorer } from '@/components/blog/BlogExplorer';

export const metadata = {
  title: 'Blog | Faisal Ahmed — Web Developer & UI Engineer',
  description: 'Notes on frontend engineering, WordPress, Elementor, responsive CSS and AI-assisted development from Faisal Ahmed.',
  alternates: {
    canonical: '/blog'
  }
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="breadcrumb-path">Home <span>/</span> Blog</p>
            <span className="eyebrow">Writing</span>
            <h1>Notes on frontend engineering &amp; WordPress.</h1>
            <p className="text-lead">A portfolio blog covering practical frontend workflows, WordPress decisions, and what it takes to be a good UI engineer. Articles below are planned/portfolio pieces, not yet published externally.</p>
          </div>
        </section>

        <BlogExplorer />

        <section className="section section-alt">
          <div className="container">
            <div className="final-cta reveal">
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Have a topic in mind?</span>
              <h2 style={{ marginTop: 'var(--space-4)' }}>Want to talk shop about frontend or WordPress?</h2>
              <p>Reach out — I&apos;m always glad to compare notes with other builders.</p>
              <a className="btn btn-primary" href="/#contact">Contact Me</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
