import Icon from "@/components/ui/Icon";

const BENEFITS = [
  {
    icon: "how_to_reg",
    title: "Daha Yüksek Kabul Şansı",
    description:
      "Prestijli üniversiteler kotalarını erken başvuru döneminde doldurmaya başlar. Erken başvurarak rekabeti azaltın.",
  },
  {
    icon: "school",
    title: "Burs Avantajları",
    description:
      "En değerli ve kapsamlı burs fırsatları, genellikle erken başvuru tarihlerinde kapanır. Şansınızı kaçırmayın.",
  },
  {
    icon: "apartment",
    title: "Konaklama Önceliği",
    description:
      "Kampüs içi veya en iyi öğrenci yurtlarındaki yerler hızla tükenir. Erken kayıt, en iyi seçenekleri garanti altına alır.",
  },
  {
    icon: "flight_takeoff",
    title: "Vize ve Hazırlık Süreci",
    description:
      "Belge toplama, çeviriler ve vize süreçleri için kendinize stressiz ve geniş bir zaman dilimi yaratın.",
  },
];

export default function EarlyApplicationBenefits() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-unit-xl">
      <div className="text-center mb-12">
        <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
          Neden Erken Başvuru?
        </h2>
        <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Zamanı kendi avantajınıza çevirerek rakiplerinizin bir adım önüne
          geçin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit.title}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
          >
            <div className="w-12 h-12 bg-primary-fixed/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
              <Icon name={benefit.icon} className="text-secondary text-2xl" />
            </div>
            <h3 className="text-headline-md text-primary mb-3">{benefit.title}</h3>
            <p className="text-body-md text-on-surface-variant">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
