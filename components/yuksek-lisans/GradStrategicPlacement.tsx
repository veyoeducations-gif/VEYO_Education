import Image from "next/image";
import Icon from "@/components/ui/Icon";

const PROCESS_ITEMS = [
  {
    icon: "psychology",
    title: "Profil Analizi",
    description: "Güçlü yönlerinizin ve gelişim alanlarınızın detaylı haritalandırması.",
  },
  {
    icon: "target",
    title: "Hedef Okul Belirleme",
    description:
      "Güvenli, hedef ve iddialı okul kategorilerinden oluşan dengeli bir başvuru havuzu oluşturulması.",
  },
  {
    icon: "handshake",
    title: "Danışman-Öğrenci Eşleşmesi",
    description:
      "Alanınızda uzmanlaşmış deneyimli danışmanlarla birebir çalışma imkanı.",
  },
];

export default function GradStrategicPlacement() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative">
            <div className="aspect-square rounded-full overflow-hidden bg-surface-container-high relative z-10 border-8 border-white shadow-xl max-w-md mx-auto">
              <Image
                src="/images/gradlisans-placement-campus.jpg"
                alt="Üniversite kampüsü ve küresel bağlantı ağı görselleştirmesi"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
              Stratejik Yerleştirme Süreci
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-8">
              VEYO Education olarak, sizi sadece bir programa yerleştirmiyor;
              gelecekteki ağınızı kuracağınız, vizyonunuzu genişletecek en
              doğru ekosistemle eşleştiriyoruz.
            </p>
            <ul className="space-y-6">
              {PROCESS_ITEMS.map((item) => (
                <li key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-1">
                    <Icon name={item.icon} className="text-sm" />
                  </div>
                  <div>
                    <h4 className="text-headline-md text-primary mb-1">{item.title}</h4>
                    <p className="text-body-md text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
