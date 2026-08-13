import Link from "next/link";
import Icon from "@/components/ui/Icon";
import HoverDropdown from "@/components/ui/HoverDropdown";

const SERVICES = [
  {
    icon: "school",
    title: "Yurt Dışı Lisans & Yüksek Lisans",
    description:
      "Dünyanın önde gelen üniversitelerinde lisans ve yüksek lisans eğitiminiz için kapsamlı danışmanlık hizmeti sunuyoruz. Profil analizi, üniversite seçimi, başvuru süreçleri ve kabul aşamasında yanınızdayız.",
    cta: "Detaylı İncele",
    span: "lg:col-span-2",
    variant: "glass" as const,
    href: null,
    dropdown: [
      { label: "Lisans", href: "/lisans" },
      { label: "Yüksek Lisans", href: "/yuksek-lisans" },
    ],
  },
  {
    icon: "language",
    title: "Dil Okulları",
    description:
      "Hedeflerinize ve bütçenize en uygun dil okullarını bulmanıza yardımcı oluyoruz. Amerika, İngiltere, Kanada ve daha fazlası.",
    cta: "Programları Keşfet",
    span: "",
    variant: "light" as const,
    href: "/dil-okullari",
  },
  {
    icon: "flight_takeoff",
    title: "Vize Danışmanlığı",
    description:
      "Öğrenci vizesi başvuru süreçlerinde uzman desteği. Evrak hazırlığından mülakat simülasyonlarına kadar kesintisiz rehberlik.",
    cta: "Süreci Öğren",
    span: "",
    variant: "light" as const,
    href: "/vize-danismanligi",
  },
  {
    icon: "emoji_events",
    title: "Burs Başvuruları",
    description:
      "Başarı bursları, ihtiyaç bursları ve özel fonlara erişiminiz için stratejik planlama ve başvuru desteği sağlıyoruz.",
    cta: "Bursları İncele",
    span: "",
    variant: "light" as const,
    href: "/burslar",
  },
  {
    icon: "assignment",
    title: "Sınav Hazırlık (IELTS/TOEFL)",
    description:
      "Yurt dışı eğitim için gerekli olan dil yeterlilik sınavlarına (IELTS, TOEFL, PTE) yönelik profesyonel materyaller ve stratejik çalışma programları sunuyoruz.",
    cta: "Hazırlığa Başla",
    span: "lg:col-span-2",
    variant: "dark" as const,
    href: "/ielts",
  },
];

export default function ServicesGrid() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto pb-unit-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {SERVICES.map((service) => {
          const isDark = service.variant === "dark";
          const isGlass = service.variant === "glass";

          const cardClassName = [
            "rounded-xl p-8 flex flex-col border border-outline-variant/30 group hover:shadow-lg transition-all duration-300",
            service.span,
            isDark
              ? "bg-primary-container text-white"
              : isGlass
                ? "glass-panel soft-shadow"
                : "bg-surface-container-lowest soft-shadow",
          ].join(" ");

          const cardContent = (
            <>
              <div
                className={[
                  "h-12 w-12 rounded-lg flex items-center justify-center mb-6",
                  isDark ? "bg-white/20 backdrop-blur-sm" : "bg-secondary/10",
                ].join(" ")}
              >
                <Icon
                  name={service.icon}
                  className={isDark ? "text-white" : "text-secondary"}
                />
              </div>

              <h3
                className={[
                  service.span ? "text-headline-lg" : "text-headline-md",
                  "mb-3",
                  isDark ? "text-white" : "text-primary",
                ].join(" ")}
              >
                {service.title}
              </h3>

              <p
                className={[
                  "text-body-md mb-6 flex-grow",
                  isDark ? "text-surface-variant" : "text-on-surface-variant",
                ].join(" ")}
              >
                {service.description}
              </p>

              {service.dropdown ? (
                <div className="mt-auto">
                  <HoverDropdown
                    panelWidthClassName="w-56"
                    trigger={
                      <span
                        className={[
                          "flex items-center text-label-md",
                          isDark ? "text-secondary-fixed-dim" : "text-secondary",
                        ].join(" ")}
                      >
                        {service.cta}
                        <Icon
                          name="chevron_right"
                          className="ml-1 text-xl font-normal leading-none"
                        />
                      </span>
                    }
                    items={service.dropdown}
                  />
                </div>
              ) : (
                <div
                  className={[
                    "flex items-center text-label-md group-hover:underline mt-auto",
                    service.href ? "" : "cursor-pointer",
                    isDark ? "text-secondary-fixed-dim" : "text-secondary",
                  ].join(" ")}
                >
                  {service.cta}
                  <Icon name="arrow_forward" className="ml-1 text-sm" />
                </div>
              )}
            </>
          );

          return service.href ? (
            <Link key={service.title} href={service.href} className={cardClassName}>
              {cardContent}
            </Link>
          ) : (
            <div key={service.title} className={cardClassName}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
