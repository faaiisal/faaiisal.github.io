'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { homeNavigation } from '@/data/site';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Faisal Ahmed — Web Developer & UI Engineer">
          <span className="brand-mark">FA</span>
          Faisal Ahmed
        </Link>

        <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} id="nav-links" aria-label="Primary navigation">
          {homeNavigation.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.href === '/blog' ? undefined : undefined}
              onClick={() => setIsOpen(false)}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="nav-toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="nav-links"
            onClick={() => setIsOpen((value) => !value)}
          >
            <svg className="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            <svg className="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
