import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BlogHero from "@/components/blog/BlogHero";
import BlogSidebar from "@/components/blog/BlogSidebar";
import FeaturedPostCard from "@/components/blog/FeaturedPostCard";
import PostCard from "@/components/blog/PostCard";
import { BLOG_POSTS } from "@/components/blog/posts-data";
import { getCategory } from "@/components/blog/categories-data";

export const metadata: Metadata = {
  title: "Blog | VEYO Education",
  description:
    "Yurt dışı eğitim, vize süreçleri, bütçe planlaması ve öğrenci yaşamı hakkında uzman danışmanlarımızdan güncel rehberler.",
};

interface BlogPageProps {
  searchParams: { kategori?: string };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const activeCategory = searchParams.kategori;
  const category = activeCategory ? getCategory(activeCategory) : undefined;

  if (activeCategory && category) {
    const filteredPosts = BLOG_POSTS.filter((p) => p.categorySlug === activeCategory);

    return (
      <>
        <Navbar />
        <main className="flex-grow pt-[100px] px-margin-mobile md:px-margin-desktop pb-unit-xl max-w-container-max mx-auto w-full">
          <section className="mb-unit-xl text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-label-md mb-4">
              Kategori
            </span>
            <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-primary mb-unit-sm">
              {category.name}
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Bu kategoride {filteredPosts.length} yazı bulunuyor.
            </p>
          </section>

          <div className="flex flex-col md:flex-row gap-gutter">
            <BlogSidebar activeCategory={activeCategory} />
            <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  const [featuredPost, ...restPosts] = BLOG_POSTS;

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[100px] px-margin-mobile md:px-margin-desktop pb-unit-xl max-w-container-max mx-auto w-full">
        <BlogHero />
        <div className="flex flex-col md:flex-row gap-gutter">
          <BlogSidebar />
          <div className="w-full md:w-3/4 flex flex-col gap-gutter">
            <FeaturedPostCard post={featuredPost} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {restPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
