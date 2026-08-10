import Link from 'next/link';
import { getBlogPostBySlug, getRelatedPosts } from '@/data/blog';
import type { BlogPost } from '@/types/blog';

export function BlogDetail({ post, prevSlug, nextSlug }: { post: BlogPost; prevSlug?: string; nextSlug?: string }) {
  const relatedPosts = getRelatedPosts(post.slug);
  const prevPost = prevSlug ? getBlogPostBySlug(prevSlug) : undefined;
  const nextPost = nextSlug ? getBlogPostBySlug(nextSlug) : undefined;

  return (
    <article className="post-detail-header section-tight">
      <div className="container-single-post">
        <Link className="back-link" href="/blog">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to articles
        </Link>

        <div className="post-meta-top">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          <span className="dot-separator">&bull;</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="post-title-main">{post.title}</h1>

        <div className="post-detail-tags">
          {post.tags.map((tag) => (
            <span className="post-tag-chip" key={`${post.slug}-${tag}`}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="container-single-post">
        <div className="prose">
          {post.content.map((block) => {
            if (block.type === 'heading') {
              const HeadingTag = `h${block.level ?? 2}` as keyof JSX.IntrinsicElements;
              return <HeadingTag key={`${post.slug}-${block.text}-${Math.random()}`} id={block.text?.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>{block.text}</HeadingTag>;
            }

            if (block.type === 'list') {
              return (
                <ul key={`${post.slug}-list-${Math.random()}`}>
                  {block.items?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            return <p key={`${post.slug}-p-${Math.random()}`}>{block.text}</p>;
          })}

          <div className="post-cta-box">
            <h3>Have a similar project in mind?</h3>
            <p>I take on frontend, WordPress, and UI engineering work for startups, agencies, and product teams.</p>
            <Link className="btn btn-primary" href="/#contact">Let&apos;s Talk</Link>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="related-posts" style={{ marginTop: 'var(--space-7)' }}>
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Related posts</h3>
            <div className="posts-grid">
              {relatedPosts.map((related) => (
                <article className="post-card" key={related.slug}>
                  <Link className="post-card-link" href={`/blog/${related.slug}`}>
                    <div className="post-meta-row"><span>{new Date(related.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span><span>·</span><span>{related.readingTime}</span></div>
                    <h3>{related.title}</h3>
                    <p>{related.description}</p>
                    <div className="post-tags-row">{related.tags.map((tag) => <span className="post-tag-chip" key={`${related.slug}-${tag}`}>{tag}</span>)}</div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="post-nav">
          {prevPost ? (
            <Link className="post-nav-card post-nav-prev" href={`/blog/${prevPost.slug}`} aria-label={`Previous article: ${prevPost.title}`}>
              <span className="post-nav-arrow" aria-hidden="true">←</span>
              <span className="post-nav-label">Prev</span>
            </Link>
          ) : <span className="post-nav-placeholder" />}

          {nextPost ? (
            <Link className="post-nav-card post-nav-next" href={`/blog/${nextPost.slug}`} aria-label={`Next article: ${nextPost.title}`}>
              <span className="post-nav-label">Next</span>
              <span className="post-nav-arrow" aria-hidden="true">→</span>
            </Link>
          ) : <span className="post-nav-placeholder" />}
        </div>
      </div>
    </article>
  );
}
