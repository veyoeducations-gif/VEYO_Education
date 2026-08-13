import Icon from "@/components/ui/Icon";
import { getCategory } from "./categories-data";

interface CategoryBannerProps {
  categorySlug: string;
  className?: string;
  iconClassName?: string;
}

/**
 * Her blog yazısı için benzersiz bir fotoğraf kullanmak yerine, kategoriye
 * özel renk geçişi (gradient) ve büyük bir ikonla şık, tutarlı ve hızlı
 * yüklenen bir görsel banner oluşturur.
 */
export default function CategoryBanner({
  categorySlug,
  className = "",
  iconClassName = "!text-6xl",
}: CategoryBannerProps) {
  const category = getCategory(categorySlug);
  if (!category) return null;

  return (
    <div
      className={`bg-gradient-to-br ${category.gradient} flex items-center justify-center relative overflow-hidden ${className}`}
    >
      <Icon
        name={category.icon}
        className={`text-white/25 ${iconClassName} absolute -right-4 -bottom-4 select-none`}
      />
      <Icon name={category.icon} className="text-white !text-4xl relative z-10" />
    </div>
  );
}
