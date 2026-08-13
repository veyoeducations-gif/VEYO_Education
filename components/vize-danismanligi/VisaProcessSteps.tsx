const STEPS = [
  {
    number: "01",
    title: "Ön Değerlendirme ve Evrak Analizi",
    description:
      "Hedef ülkenizin vize gereksinimlerine göre mevcut belgeleriniz incelenir; eksik veya risk taşıyan noktalar başvurudan önce netleştirilir.",
  },
  {
    number: "02",
    title: "Başvuru Dosyasının Hazırlanması",
    description:
      "Kabul mektubu, finansal yeterlilik, sağlık sigortası ve dil belgeleri dahil tüm evraklar, ilgili konsolosluğun standartlarına uygun şekilde eksiksiz hazırlanır.",
  },
  {
    number: "03",
    title: "Randevu ve Başvuru Takibi",
    description:
      "Konsolosluk/vize merkezi randevunuz planlanır, başvurunuz sisteme işlendikten sonra süreç danışmanınız tarafından adım adım takip edilir.",
  },
  {
    number: "04",
    title: "Mülakat Simülasyonu ve Son Kontrol",
    description:
      "Mülakat gerektiren ülkeler için birebir simülasyon seansları yapılır; olası sorulara karşı özgüvenli ve hazırlıklı bir şekilde görüşmeye girersiniz.",
  },
];

export default function VisaProcessSteps() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
            Süreç Nasıl İşliyor?
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Vize başvurunuz, aşağıdaki dört adımlı ve şeffaf süreçle yönetilir —
            her aşamada danışmanınızla doğrudan iletişim halindesiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-headline-2xl text-secondary/15 leading-none block mb-2">
                {step.number}
              </span>
              <h3 className="text-headline-md text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
