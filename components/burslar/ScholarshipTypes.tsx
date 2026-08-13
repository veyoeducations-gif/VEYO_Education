import Icon from "@/components/ui/Icon";

const SCHOLARSHIP_TYPES = [
  {
    icon: "military_tech",
    title: "Başarı Bursları (Merit-Based)",
    description:
      "Akademik ortalama, sınav sonuçları veya özel yeteneklere dayalı olarak üniversitelerin doğrudan sunduğu burslardır.",
  },
  {
    icon: "volunteer_activism",
    title: "İhtiyaç Bursları (Need-Based)",
    description:
      "Ailenin finansal durumuna göre değerlendirilen, eğitim maliyetinin bir kısmını veya tamamını karşılayan destek programlarıdır.",
  },
  {
    icon: "flag",
    title: "Devlet Bursları",
    description:
      "Chevening (İngiltere), DAAD (Almanya), Stipendium Hungaricum (Macaristan), MEXT (Japonya) ve Çin Hükümeti Bursu (CSC) gibi ülke bazlı, kapsamlı destek programlarıdır.",
  },
  {
    icon: "account_balance",
    title: "Üniversiteye Özel Burslar",
    description:
      "Üniversitelerin kendi bütçesinden, genellikle kabul ile birlikte otomatik veya ayrı bir başvuru ile sunduğu burs ve indirim programlarıdır.",
  },
];

export default function ScholarshipTypes() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
            Burs Türleri
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Burslar genellikle dört ana kategoriye ayrılır; bazı programlar bu
            kategorilerin birden fazlasını aynı anda kapsar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCHOLARSHIP_TYPES.map((type) => (
            <div
              key={type.title}
              className="bg-surface-container-lowest rounded-2xl p-8 border border-surface-container soft-shadow"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
                <Icon name={type.icon} />
              </div>
              <h3 className="text-headline-md text-primary mb-3">{type.title}</h3>
              <p className="text-body-md text-on-surface-variant">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
