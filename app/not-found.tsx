import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="section page-not-found">
        <div className="container small-container text-center">
          <span className="eyebrow">404</span>
          <h1>Page not found</h1>
          <p className="text-lead">The page you are looking for does not exist or may have moved.</p>
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
