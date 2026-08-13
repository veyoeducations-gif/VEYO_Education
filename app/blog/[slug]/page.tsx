import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleCTA from "@/components/blog/ArticleCTA";
import RelatedPostsSidebar from "@/components/blog/RelatedPostsSidebar";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/components/blog/posts-data";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | VEYO Education Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      <Navbar />
      <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-unit-xl pt-[104px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8">
            <ArticleHero post={post} />
            <ArticleContent blocks={post.content} />
            <ArticleCTA />
          </div>
          <RelatedPostsSidebar posts={relatedPosts} />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
