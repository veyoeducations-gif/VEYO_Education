import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CategoryBanner from "./CategoryBanner";
import { getCategory } from "./categories-data";
import type { BlogPost } from "./posts-data";

export default function RelatedPostsSidebar({ posts }: { posts: BlogPost[] }) {
  return (
    <aside className="lg:col-span-4 mt-unit-xl lg:mt-0">
      <div className="lg:sticky lg:top-28">
        <h3 className="text-headline-md text-on-surface mb-unit-md flex items-center">
          <Icon name="explore" className="mr-2 text-secondary" />
          İlginç Yazılar
        </h3>
        <div className="flex flex-col gap-unit-md">
          {posts.map((post) => {
            const category = getCategory(post.categorySlug);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden hover:shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition-all duration-300"
              >
                <div className="w-1/3 h-24 relative overflow-hidden shrink-0">
                  <CategoryBanner
                    categorySlug={post.categorySlug}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    iconClassName="!text-3xl"
                  />
                </div>
                <div className="w-2/3 p-3 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-secondary mb-1">
                    {category?.name}
                  </span>
                  <h4 className="text-label-md text-on-surface group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
