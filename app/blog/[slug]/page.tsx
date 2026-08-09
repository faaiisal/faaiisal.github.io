import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetail } from '@/components/blog/BlogDetail';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogPosts } from '@/data/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: 'Article not found | Faisal Ahmed'
    };
  }

  return {
    title: `${post.title} | Faisal Ahmed`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: `${post.title} | Faisal Ahmed`,
      description: post.description,
      url: `https://mefaisal.com//blog/${post.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Faisal Ahmed`,
      description: post.description
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const currentIndex = blogPosts.findIndex((item) => item.slug === params.slug);
  const post = blogPosts[currentIndex];

  if (!post) {
    notFound();
  }

  const prevSlug = currentIndex > 0 ? blogPosts[currentIndex - 1].slug : undefined;
  const nextSlug = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1].slug : undefined;

  return (
    <>
      <Header />

      <main id="main">
        <BlogDetail post={post} prevSlug={prevSlug} nextSlug={nextSlug} />
      </main>

      <Footer />
    </>
  );
}
