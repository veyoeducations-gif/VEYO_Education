import Icon from "@/components/ui/Icon";
import type { CountryStats as CountryStatsType } from "./countries-data";

export default function CountryStats({ stats }: { stats: CountryStatsType }) {
  const items = [
    {
      icon: "school",
      value: stats.bachelorPrograms,
      label: "İngilizce Lisans Programı",
    },
    {
      icon: "workspace_premium",
      value: stats.masterPrograms,
      label: "İngilizce Yüksek Lisans Programı",
    },
    {
      icon: "menu_book",
      value: stats.languageSchools,
      label: "Dil Okulu",
    },
    {
      icon: "assignment",
      value: stats.prepPrograms,
      label: "Hazırlık Sınıfı Programı",
    },
  ];

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container soft-shadow text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
              <Icon name={item.icon} />
            </div>
            <p className="text-headline-lg text-primary mb-1">{item.value}+</p>
            <p className="text-body-md text-on-surface-variant text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
