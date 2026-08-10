'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { blogPosts, blogTags } from '@/data/blog';

const POSTS_PER_PAGE = 6;

export function BlogExplorer() {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const inTag = activeTag === 'All' || post.tags.includes(activeTag as (typeof post.tags)[number]);
      const inSearch =
        !normalized ||
        post.title.toLowerCase().includes(normalized) ||
        post.description.toLowerCase().includes(normalized) ||
        post.tags.some((tag) => tag.toLowerCase().includes(normalized));

      return inTag && inSearch;
    });
  }, [activeTag, query]);

  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [activeTag, query]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;
  const showNoResults = filteredPosts.length === 0;

  return (
    <section className="section">
      <div className="container">
        <div className="blog-controls">
          <div className="blog-search-wrap">
            <svg className="blog-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="blog-search-input"
              placeholder="Search articles by title or topic…"
              aria-label="Search articles"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="blog-tags" role="group" aria-label="Filter articles by tag">
            <button type="button" className={`blog-tag-btn ${activeTag === 'All' ? 'is-active' : ''}`} data-tag="All" onClick={() => setActiveTag('All')}>All</button>
            {blogTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`blog-tag-btn ${activeTag === tag ? 'is-active' : ''}`}
                data-tag={tag}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="posts-grid">
          {visiblePosts.map((post) => (
            <article className="post-card" key={post.slug} data-tags={post.tags.join(',')} data-search={post.description}>
              <Link className="post-card-link" href={`/blog/${post.slug}`}>
                <div className="post-meta-row"><span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span><span>·</span><span>{post.readingTime}</span></div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="post-tags-row">
                  {post.tags.map((tag) => (
                    <span className="post-tag-chip" key={`${post.slug}-${tag}`}>{tag}</span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>

        <p className={`blog-no-results ${showNoResults ? 'is-visible' : ''}`}>
          No articles match your search. Try a different keyword or tag.
        </p>

        {hasMorePosts && !showNoResults && (
          <div className="load-more-wrap">
            <button
              className="btn btn-secondary load-more-btn"
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + 3, filteredPosts.length))}
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
