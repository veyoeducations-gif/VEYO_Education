import Icon from "@/components/ui/Icon";

const FEATURES = [
  {
    icon: "work_history",
    title: "Global Kariyer",
    description:
      "Dünya devlerinin kapılarını aralayan prestijli mezuniyet ağlarına dahil olun.",
  },
  {
    icon: "diversity_3",
    title: "Kültürel Gelişim",
    description:
      "Farklı kültürleri yerinde tanıyarak vizyonunuzu ve adaptasyon yeteneğinizi geliştirin.",
  },
  {
    icon: "verified",
    title: "Dünya Standartları",
    description:
      "En modern laboratuvarlarda, alanında öncü akademisyenlerden eğitim alın.",
  },
];

export default function WorldClassroomSection() {
  return (
    <section className="bg-primary-container py-24 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Icon name="public" className="!text-[20rem] absolute -top-20 -left-20" />
        <Icon name="auto_awesome" className="!text-[15rem] absolute -bottom-20 -right-20" />
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-headline-xl md:text-headline-2xl text-white mb-6">
            Dünyayı Sınıfınız Yapın
          </h2>
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto">
            Yurt dışında eğitim sadece bir diploma değil, hayatınızı
            değiştirecek bir dönüşüm yolculuğudur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <Icon name={feature.icon} className="text-secondary-fixed !text-4xl mb-4" />
              <h3 className="text-headline-md text-white mb-3">{feature.title}</h3>
              <p className="text-body-md text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
