import Icon from "@/components/ui/Icon";

const MODULES = [
  {
    icon: "headphones",
    title: "Listening",
    description: "4 bölüm, 40 soru; günlük konuşmalardan akademik sunumlara kadar dinleme becerisini ölçer.",
  },
  {
    icon: "menu_book",
    title: "Reading",
    description: "3 uzun akademik/genel metin üzerinden hızlı okuma ve çıkarım yapma becerisini test eder.",
  },
  {
    icon: "edit_note",
    title: "Writing",
    description: "Grafik/tablo yorumlama (Task 1) ve görüş yazısı (Task 2) olmak üzere iki yazma görevi içerir.",
  },
  {
    icon: "mic",
    title: "Speaking",
    description: "Bir sınav görevlisiyle birebir yapılan, 3 bölümlü kısa bir sözlü mülakattır.",
  },
];

export default function IeltsOverview() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
            IELTS Nedir, Neden Önemlidir?
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            IELTS (International English Language Testing System), üniversite
            başvurularında ve öğrenci vizesi süreçlerinde en yaygın kabul
            gören İngilizce yeterlilik sınavıdır. 1 ile 9 arasında bir "band
            score" ile puanlanır; hedeflediğiniz üniversite veya ülkeye göre
            <strong> Academic</strong> (üniversite başvuruları) veya
            <strong> General Training</strong> (göç/iş amaçlı) modülü seçilir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((module) => (
            <div
              key={module.title}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container soft-shadow"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
                <Icon name={module.icon} />
              </div>
              <h3 className="text-headline-md text-primary mb-2">{module.title}</h3>
              <p className="text-body-md text-on-surface-variant text-sm">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
