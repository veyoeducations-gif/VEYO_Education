import Icon from "@/components/ui/Icon";
import CategoryBanner from "./CategoryBanner";
import { getCategory } from "./categories-data";
import type { BlogPost } from "./posts-data";

export default function ArticleHero({ post }: { post: BlogPost }) {
  const category = getCategory(post.categorySlug);

  return (
    <header className="mb-unit-xl">
      <div className="flex items-center gap-4 mb-unit-sm flex-wrap">
        <span className="bg-secondary/10 text-secondary text-label-md px-3 py-1 rounded-full">
          {category?.name}
        </span>
        <span className="text-on-surface-variant text-label-md flex items-center gap-1">
          <Icon name="schedule" className="!text-base" />
          {post.readTime}
        </span>
        <span className="text-on-surface-variant text-label-md">{post.date}</span>
      </div>

      <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-on-surface mb-unit-md">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 mb-unit-lg">
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
          <Icon name="school" />
        </div>
        <div>
          <div className="text-label-md text-on-surface">VEYO Education Danışmanlık Ekibi</div>
          <div className="text-sm text-on-surface-variant">Eğitim Danışmanlığı</div>
        </div>
      </div>

      <CategoryBanner
        categorySlug={post.categorySlug}
        className="relative w-full h-[240px] md:h-[360px] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
        iconClassName="!text-[10rem]"
      />
    </header>
  );
}
