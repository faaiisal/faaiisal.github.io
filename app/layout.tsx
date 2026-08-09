import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mefaisal.com/'),
  title: 'Faisal Ahmed | Web Developer & UI Engineer',
  description:
    'Faisal Ahmed is a Web Developer & UI Engineer with 8+ years of experience in JavaScript, WordPress, Elementor, responsive web development, and modern UI engineering.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Faisal Ahmed | Web Developer & UI Engineer',
    description:
      '8+ years building responsive, accessible, performance-focused web experiences with JavaScript, WordPress and modern UI engineering.',
    url: 'https://mefaisal.com/',
    siteName: 'Faisal Ahmed',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Faisal Ahmed portfolio' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faisal Ahmed | Web Developer & UI Engineer',
    description: '8+ years building responsive, accessible, performance-focused web experiences with JavaScript, WordPress and modern UI engineering.'
  },
  icons: {
    icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" rx="20" fill="%233348E8"/%3E%3Ctext x="50" y="66" font-family="monospace" font-size="42" font-weight="700" fill="white" text-anchor="middle"%3EFA%3C/text%3E%3C/svg%3E'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`(function(){try{var stored=localStorage.getItem('fa-theme');var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');document.documentElement.setAttribute('data-theme', theme);}catch(e){document.documentElement.setAttribute('data-theme','light');}}());`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
