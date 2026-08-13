const TARGETS = [
  {
    band: "5.5 – 6.0",
    label: "Temel Seviye",
    duration: "6-8 hafta",
    description: "Dil okulu hazırlık programları ve bazı vakıf üniversiteleri için yeterli seviye.",
  },
  {
    band: "6.5 – 7.0",
    label: "Standart Üniversite Şartı",
    duration: "8-12 hafta",
    description: "Çoğu yurt dışı lisans/yüksek lisans programının genel kabul şartı.",
  },
  {
    band: "7.5+",
    label: "Rekabetçi / Burslu Programlar",
    duration: "12-16+ hafta",
    description: "Russell Group üniversiteleri, burslu programlar ve rekabetçi bölümler için hedeflenen seviye.",
  },
];

export default function IeltsTargetBands() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
          Hedef Banda Göre Yaklaşık Hazırlık Süresi
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          Süreler, mevcut seviyenize ve haftalık çalışma yoğunluğunuza göre
          değişir; aşağıdaki rakamlar genel bir yönlendirme amaçlıdır.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TARGETS.map((target) => (
          <div
            key={target.band}
            className="bg-surface-container-lowest rounded-2xl p-8 border border-surface-container soft-shadow text-center"
          >
            <p className="text-headline-2xl text-secondary mb-2">{target.band}</p>
            <h3 className="text-headline-md text-primary mb-3">{target.label}</h3>
            <span className="inline-block bg-secondary/10 text-secondary text-label-md px-3 py-1 rounded-full mb-4">
              ~{target.duration}
            </span>
            <p className="text-body-md text-on-surface-variant text-sm">
              {target.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
