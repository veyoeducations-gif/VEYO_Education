export interface BlogCategory {
  slug: string;
  name: string;
  icon: string;
  gradient: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "danismanlik-ve-karar-sureci",
    name: "Danışmanlık ve Karar Süreci",
    icon: "psychology",
    gradient: "from-secondary to-secondary-container",
  },
  {
    slug: "butce-ve-maliyet",
    name: "Bütçe ve Maliyet",
    icon: "payments",
    gradient: "from-primary-container to-secondary",
  },
  {
    slug: "vize-rehberi",
    name: "Vize Rehberi",
    icon: "flight_takeoff",
    gradient: "from-secondary-container to-primary-container",
  },
  {
    slug: "basvuru-sartlari",
    name: "Başvuru Şartları",
    icon: "assignment_turned_in",
    gradient: "from-primary-container to-tertiary-container",
  },
  {
    slug: "yasam-ve-kariyer",
    name: "Yaşam ve Kariyer",
    icon: "diversity_3",
    gradient: "from-secondary to-tertiary-container",
  },
];

export function getCategory(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((category) => category.slug === slug);
}
