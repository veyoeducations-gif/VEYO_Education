import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CategoryBanner from "./CategoryBanner";
import { getCategory } from "./categories-data";
import type { BlogPost } from "./posts-data";

export default function FeaturedPostCard({ post }: { post: BlogPost }) {
  const category = getCategory(post.categorySlug);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-[0_8px_32px_rgba(15,23,42,0.06)] group block hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300"
    >
      <div className="md:flex h-full">
        <div className="md:w-1/2 relative overflow-hidden h-56 md:h-auto">
          <CategoryBanner
            categorySlug={post.categorySlug}
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            <span className="text-label-md text-secondary">Öne Çıkan</span>
          </div>
        </div>
        <div className="md:w-1/2 p-unit-lg flex flex-col justify-between bg-gradient-to-br from-surface-container-lowest to-surface-bright">
          <div>
            <div className="flex items-center gap-2 mb-unit-sm">
              <span className="bg-secondary/10 text-secondary text-label-md px-2 py-1 rounded">
                {category?.name}
              </span>
              <span className="text-on-surface-variant text-body-md text-sm">{post.date}</span>
            </div>
            <h2 className="text-headline-lg text-primary mb-unit-md group-hover:text-secondary transition-colors">
              {post.title}
            </h2>
            <p className="text-body-md text-on-surface-variant line-clamp-3 mb-unit-lg">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center text-secondary text-label-md group-hover:gap-2 transition-all">
            Devamını Oku
            <Icon name="arrow_forward" className="text-sm ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
