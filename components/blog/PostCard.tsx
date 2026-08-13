import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CategoryBanner from "./CategoryBanner";
import { getCategory } from "./categories-data";
import type { BlogPost } from "./posts-data";

export default function PostCard({ post }: { post: BlogPost }) {
  const category = getCategory(post.categorySlug);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.04)] group block flex flex-col hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-40 overflow-hidden">
        <CategoryBanner
          categorySlug={post.categorySlug}
          className="w-full h-full transition-transform duration-500 group-hover:scale-110"
          iconClassName="!text-5xl"
        />
      </div>
      <div className="p-unit-md flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-unit-sm">
          <span className="bg-secondary/10 text-secondary text-label-md px-2 py-1 rounded text-xs">
            {category?.name}
          </span>
          <span className="text-on-surface-variant text-body-md text-sm flex items-center gap-1">
            <Icon name="calendar_today" className="!text-base" />
            {post.date}
          </span>
        </div>
        <h3 className="text-headline-md text-primary mb-unit-sm group-hover:text-secondary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-body-md text-on-surface-variant mb-unit-md flex-grow line-clamp-2 text-sm">
          {post.excerpt}
        </p>
        <div className="border-t border-outline-variant/20 pt-unit-sm flex justify-between items-center mt-auto">
          <span className="text-label-md text-secondary">Oku</span>
          <Icon
            name="arrow_right_alt"
            className="text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
          />
        </div>
      </div>
    </Link>
  );
}
