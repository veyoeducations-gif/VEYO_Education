import Link from "next/link";
import { BLOG_CATEGORIES } from "./categories-data";
import { BLOG_POSTS } from "./posts-data";

export default function BlogSidebar({ activeCategory }: { activeCategory?: string }) {
  return (
    <aside className="w-full md:w-1/4 mb-unit-lg md:mb-0">
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-unit-lg shadow-[0_4px_24px_rgba(15,23,42,0.04)] md:sticky md:top-28">
        <h3 className="text-headline-md text-primary mb-unit-md border-b border-outline-variant/30 pb-unit-xs">
          Kategoriler
        </h3>
        <ul className="space-y-0">
          <li>
            <Link
              href="/blog"
              className={`flex items-center justify-between group py-2 ${
                !activeCategory ? "text-secondary font-bold" : ""
              }`}
            >
              <span
                className={`text-body-md group-hover:text-secondary transition-colors ${
                  !activeCategory ? "text-secondary" : "text-on-surface-variant"
                }`}
              >
                Tüm Yazılar
              </span>
              <span className="bg-secondary/10 text-secondary text-label-md px-2 py-1 rounded-full group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                {BLOG_POSTS.length}
              </span>
            </Link>
          </li>
          {BLOG_CATEGORIES.map((category) => {
            const count = BLOG_POSTS.filter((p) => p.categorySlug === category.slug).length;
            const isActive = activeCategory === category.slug;
            return (
              <li key={category.slug}>
                <Link
                  href={`/blog?kategori=${category.slug}`}
                  className="flex items-center justify-between group py-2 border-t border-outline-variant/20"
                >
                  <span
                    className={`text-body-md group-hover:text-secondary transition-colors ${
                      isActive ? "text-secondary font-bold" : "text-on-surface-variant"
                    }`}
                  >
                    {category.name}
                  </span>
                  <span className="bg-secondary/10 text-secondary text-label-md px-2 py-1 rounded-full group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    {count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-unit-lg pt-unit-md border-t border-outline-variant/30">
          <h4 className="text-label-md text-on-surface-variant mb-unit-sm uppercase tracking-wide">
            Bültene Abone Ol
          </h4>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full px-4 py-2 rounded-lg border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md bg-surface-bright"
            />
            <button
              type="button"
              className="w-full bg-primary-container text-on-primary-container text-label-md py-2 rounded-lg hover:bg-primary hover:text-on-primary transition-colors"
            >
              Kayıt Ol
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
