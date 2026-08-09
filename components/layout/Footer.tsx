'use client';

import Link from 'next/link';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-signoff">
        <div className="container footer-signoff-bar">
          <div className="footer-signoff-socials">
            <a className="social-btn" href="https://github.com/faaiisal/" target="_blank" rel="noopener noreferrer" aria-label="Faisal Ahmed on GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.5v-1.75c-2.78.62-3.37-1.19-3.37-1.19-.46-1.2-1.11-1.52-1.11-1.52-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .28.18.6.69.5A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" /></svg>
            </a>
            <a className="social-btn" href="https://www.linkedin.com/in/faaisal/" target="_blank" rel="noopener noreferrer" aria-label="Faisal Ahmed on LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM5 8.75h3.88V21H5V8.75Zm6.5 0h3.72v1.68h.05c.52-.94 1.78-1.93 3.66-1.93 3.92 0 4.64 2.5 4.64 5.76V21h-3.88v-5.88c0-1.4-.03-3.2-1.98-3.2-1.98 0-2.28 1.5-2.28 3.1V21h-3.93V8.75Z" /></svg>
            </a>
            <a className="social-btn" href="mailto:m.faisal674@gmail.com" aria-label="Email Faisal Ahmed">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            </a>
            <a className="social-btn" href="https://wa.me/8801673497466" target="_blank" rel="noopener noreferrer" aria-label="Message Faisal Ahmed on WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.16c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.82-4.19-4.97-4.39-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.44.27-.29.58-.36.78-.36h.55c.18 0 .42-.03.64.5.24.57.81 1.99.88 2.13.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.71 1.19 1.53 1.94 1.05.96 1.94 1.27 2.22 1.41.28.14.44.12.6-.07.16-.19.68-.8.87-1.08.19-.28.37-.23.62-.14.25.09 1.6.77 1.87.91.28.14.46.21.53.33.07.13.07.72-.17 1.39Z" /></svg>
            </a>
          </div>
          <button className="back-to-top" type="button" aria-label="Scroll back to top" onClick={scrollToTop}>
            Back to top
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
        <span className="footer-giant-name" aria-hidden="true">FAISAL AHMED</span>
      </div>
    </footer>
  );
}
