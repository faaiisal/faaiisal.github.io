import Image from 'next/image';

const workItems = [
  {
    number: '01',
    title: 'FlexiGency',
    sub: 'Multipurpose Agency Website Template',
    description: 'Meet FlexiGency - Multipurpose Agency Website Template – a sleek, modern, and highly customizable solution designed for digital agencies, marketing firms, and creative professionals.',
    tags: ['Elementor', 'Multipurpose'],
    metrics: [{ label: 'page designs', value: '8' }, { label: 'sections', value: '15' }, { label: 'builder', value: 'Elementor' }],
    href: 'https://templately.com/pack/flexigency-elementor-multipurpose-agency',
    images: [
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-a1ff89805919847d32b14bac2ccd29a4%2Fflexigency-landing-page-thumbnail-oxMLnPX.jpg&w=640&q=70', alt: 'FlexiGency home page design', caption: 'Home' },
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-4ca41137ed3d63b9256cf70d86bfa574%2Fflexigency-service-page-thumbnail-CT7sHgU.jpg&w=640&q=70', alt: 'FlexiGency service page design', caption: 'Service' },
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-18441cd9c6909a5949a6ba7da27531c6%2Fflexigency-about-page-thumbnail-P6xbs7E.jpg&w=640&q=70', alt: 'FlexiGency about page design', caption: 'About' },
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-fafe75a4d1ad96c9eb5c0f6ba365b34e%2Fflexigency-casestudy-page-thumbnail-o7QCT4G.jpg&w=640&q=70', alt: 'FlexiGency case study page design', caption: 'CaseStudy' }
    ]
  },
  {
    number: '02',
    title: 'AlgoMind AI',
    sub: 'Data Science & Machine Learning Template',
    description: 'AlgoMind AI welcomes you to create interactive data science and machine learning website without coding. With this cutting-edge template pack builds an advanced WordPress site with the Gutenberg editor and learns more about machine learning.',
    tags: ['Gutenberg', 'AlgoMind AI'],
    metrics: [{ label: 'page designs', value: '6' }, { label: 'sections', value: '10' }, { label: 'builder', value: 'Gutenberg' }],
    href: 'https://templately.com/pack/algomind-ai-machine-learning-gutenberg-template',
    images: [
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-df7a6f4967dc99cfdd026d5e1c73e370%2Falgomind-ai-home-page-for-gutenberg-thumbnail-iTVmlUu.jpg&w=640&q=70', alt: 'AlgoMind AI home page design', caption: 'Home' },
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-58fd06ab4304f63e8ce70516c290aa0a%2Falgomind-ai-about-page-for-guteberg-thumbnail-chA2aR1.jpg&w=640&q=70', alt: 'AlgoMind AI about page design', caption: 'About' },
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-51b981a15dc950316e24525062f11407%2Falgomind-ai-features-page-for-gutenberg-thumbnail-JPd3GXo.jpg&w=640&q=70', alt: 'AlgoMind AI features page design', caption: 'Features' },
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-cee9e6573a7a6815efd25b108ea241f8%2Falgomind-ai-resources-page-for-gutenberg-thumbnail-h2IY4dD.jpg&w=640&q=70', alt: 'AlgoMind AI resources page design', caption: 'Resources' }
    ]
  },
  {
    number: '03',
    title: 'ChatAIBot',
    sub: 'AI Chatbot website',
    description: 'AI-powered assistance, or automation tools, ChatAIBot helps you showcase your solutions with stunning landing pages and a clean, user-friendly layout.',
    tags: ['Elementor', 'AI Chatbot'],
    metrics: [{ label: 'page designs', value: '8' }, { label: 'sections', value: '15' }, { label: 'builder', value: 'Elementor' }],
    href: 'https://templately.com/pack/chataibot-elementor-ai-chatbot-template',
    images: [
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-f4bf7c3f27fd88bfcf072bb70e0dfe04%2Fchataibot-landing-page-thumbnail-ssAQbdA.jpg&w=640&q=70', alt: 'ChatAIBot home page design', caption: 'Home' },
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-b98ba960da02c0c5792465f400dd87a2%2Fchataibot-features-page-thumbnail-j5O60KG.jpg&w=640&q=70', alt: 'ChatAIBot features page design', caption: 'Features' },
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-de291250cf5df2e9c213304d9c6cbf44%2Fchataibot-integration-page-thumbnail-zGIW5Kj.jpg&w=640&q=70', alt: 'ChatAIBot integration page design', caption: 'Integration' },
      { src: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-a50b616e930cb84bbf801fdd1150408f%2Fchataibot-pricing-page-thumbnail-F6n8x75.jpg&w=640&q=70', alt: 'ChatAIBot pricing page design', caption: 'Pricing' }
    ]
  }
];

export function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">A few things I&apos;ve shipped.</h2>
          </div>
        </div>

        <div className="work-rows">
          {workItems.map((item) => (
            <article className="work-row reveal" key={item.title}>
              <div className="wr-info">
                <div className="wr-top">
                  <span className="wr-num">{item.number}</span>
                  <span className="wr-tags">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </span>
                </div>
                <h3 className="wr-name">{item.title}</h3>
                <div className="wr-sub">{item.sub}</div>
                <p className="wr-desc">{item.description}</p>
                <div className="wr-metrics">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>
                  ))}
                </div>
                <a className="wr-link" href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="wr-live" aria-hidden="true" />
                  View on Templately
                  <svg className="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>

              <div className="wr-rail-wrap">
                <div className="wr-rail" tabIndex={0} role="group" aria-label={`${item.title} page previews — scroll horizontally`}>
                  {item.images.map((image) => (
                    <figure className="wr-shot" key={image.caption}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={900}
                        height={1030}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 36vw"
                        style={{ width: '100%', height: 'auto' }}
                        unoptimized
                      />
                      <figcaption>{image.caption}</figcaption>
                    </figure>
                  ))}
                </div>
                <div className="wr-dots" role="tablist" aria-label={`${item.title} preview slides`} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
