import Icon from "@/components/ui/Icon";

const STEPS = [
  {
    number: "01",
    icon: "psychology",
    title: "İlk Görüşme ve Profil Analizi",
    description:
      "Hedeflerinizi, akademik geçmişinizi ve bütçenizi detaylıca analiz ediyoruz. Sizi yakından tanıyarak, en uygun eğitim yol haritasını çıkarmak için ilk adımı atıyoruz.",
  },
  {
    number: "02",
    icon: "account_balance",
    title: "Üniversite ve Bölüm Seçimi",
    description:
      "Profilinize en uygun ülke, şehir, üniversite ve bölüm alternatiflerini içeren size özel, stratejik bir liste hazırlayıp detaylıca sunuyoruz.",
  },
  {
    number: "03",
    icon: "description",
    title: "Başvuru Dosyası Hazırlığı",
    description:
      "Niyet mektupları (SOP), referans yazıları, özgeçmiş ve gerekli tüm resmi evrakların eksiksiz, profesyonel ve etkileyici bir formatta hazırlanmasını sağlıyoruz.",
  },
  {
    number: "04",
    icon: "send",
    title: "Başvuru Yönetimi",
    description:
      "Hazırlanan dosyaların doğru platformlar üzerinden iletilmesi ve başvuru statülerinin anlık takibi. Kurumlarla olan tüm iletişim sürecini sizin adınıza yürütüyoruz.",
  },
  {
    number: "05",
    icon: "flight_takeoff",
    title: "Kabul ve Vize Danışmanlığı",
    description:
      "Kabul mektuplarınızın değerlendirilmesi, kesin kayıt işlemleri ve öğrenci vizesi başvurunuzun titizlikle, güncel regülasyonlara uygun şekilde tamamlanması.",
  },
  {
    number: "06",
    icon: "home",
    title: "Varış Öncesi Destek",
    description:
      "Konaklama organizasyonu, havaalanı transferi, uçak bileti planlaması ve yeni yaşamınıza adaptasyon için pratik oryantasyon bilgileri.",
  },
];

function StepCard({
  title,
  description,
  align,
}: {
  title: string;
  description: string;
  align: "left" | "right";
}) {
  return (
    <div className="glass-panel p-unit-lg rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-outline-variant/20 relative overflow-hidden text-left">
      <div
        className={`absolute top-0 w-24 h-24 bg-secondary/5 -z-10 ${
          align === "left" ? "right-0 rounded-bl-full" : "left-0 rounded-br-full"
        }`}
      />
      <h3 className="text-headline-md text-primary-container mb-2">{title}</h3>
      <p className="text-body-md text-on-surface-variant">{description}</p>
    </div>
  );
}

function StepLabel({ number, align }: { number: string; align: "left" | "right" }) {
  return (
    <>
      <span className="text-secondary text-headline-lg opacity-50 block md:hidden mb-2">
        {number}
      </span>
      <span
        className={`text-secondary text-headline-lg opacity-50 hidden md:block ${
          align === "left" ? "text-right pr-unit-lg" : "text-left pl-unit-lg"
        }`}
      >
        Adım {number}
      </span>
    </>
  );
}

export default function ProcessTimeline() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl relative">
      <div className="text-center mb-16">
        <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary-container mb-4">
          Adım Adım Başarıya
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto">
          Sizin için tasarlanmış, şeffaf ve sonuç odaklı çalışma modelimiz.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-primary-fixed-dim opacity-20" />

        <div className="flex flex-col gap-unit-xl">
          {STEPS.map((step, index) => {
            const cardOnLeft = index % 2 === 0;
            return (
              <div
                key={step.number}
                className="relative flex flex-col md:flex-row items-center justify-between group"
              >
                <div className="md:w-5/12 w-full pl-16 md:pl-0 order-2 md:order-1 mt-6 md:mt-0">
                  {cardOnLeft ? (
                    <StepCard title={step.title} description={step.description} align="left" />
                  ) : (
                    <StepLabel number={step.number} align="left" />
                  )}
                </div>

                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-surface shadow-md z-10 group-hover:scale-110 group-hover:border-secondary transition-all duration-300">
                  <Icon name={step.icon} className="text-secondary" />
                </div>

                <div className="md:w-5/12 w-full pl-16 md:pl-0 order-3 mt-6 md:mt-0">
                  {cardOnLeft ? (
                    <StepLabel number={step.number} align="right" />
                  ) : (
                    <StepCard title={step.title} description={step.description} align="right" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
