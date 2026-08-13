import Image from "next/image";
import Icon from "@/components/ui/Icon";

const FEATURE_CARDS = [
  {
    icon: "insights",
    title: "Stratejik Akademik Profil Analizi",
    description:
      "Akademik geçmişiniz, hedef ülke ve bölüm tercihleriniz derinlemesine incelenir; size özel, veriye dayalı bir kabul stratejisi oluşturulur. Genel şablonlar değil, yalnızca sizin profilinize özgü bir yol haritası.",
  },
  {
    icon: "workspace_premium",
    title: "Elit Portfolyo & Niyet Mektubu Mentorluğu",
    description:
      "Dünyanın en seçici üniversitelerinin kabul komitelerini etkileyecek bir anlatım için, danışmanınızla birebir, çok turlu revizyon seanslarında hikayenizi en güçlü haliyle kağıda dökersiniz.",
  },
  {
    icon: "support_agent",
    title: "Size Özel Danışmanla Kesintisiz Erişim",
    description:
      "Süreç boyunca tek bir uzman danışmana atanırsınız; sorularınız 7/24 öncelikli olarak yanıtlanır. Aracı yok, bekleme yok — sadece doğrudan ve ayrıcalıklı bir iletişim hattı.",
  },
];

export default function PersonalConsultingSection() {
  return (
    <section className="py-24 bg-surface-bright">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
          <div className="flex-1">
            <span className="text-secondary text-label-md tracking-wider uppercase mb-4 block">
              Butik Danışmanlık Programı
            </span>
            <h2 className="text-headline-xl md:text-headline-2xl text-primary mb-6">
              Size Özel, Ayrıcalıklı Bir Kabul Deneyimi
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-8">
              VEYO Education&apos;da danışmanlık, herkese aynı şablonu sunan bir
              hizmet değildir. Sınırlı sayıda öğrenciyle çalışarak, her
              adayımıza tek bir uzman danışmanın tam zamanını ve dikkatini
              ayırdığımız, uçtan uca özenle kurgulanmış bir VIP deneyim
              sunuyoruz. Hedefiniz sadece bir üniversiteye kabul almak değil;
              bunu en doğru, en stratejik ve en az stresli şekilde başarmak.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-label-md px-4 py-2 rounded-full">
                <Icon name="verified_user" className="text-base" />
                Birebir Danışman Ataması
              </span>
              <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-label-md px-4 py-2 rounded-full">
                <Icon name="lock" className="text-base" />
                Gizlilik ve Ayrıcalıklı Süreç
              </span>
              <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-label-md px-4 py-2 rounded-full">
                <Icon name="event_available" className="text-base" />
                Sınırlı Kontenjan
              </span>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-md">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/consulting-advisor-meeting-v3.jpg"
                alt="Mezuniyet cübbesiyle diploma tutan gururlu bir mezun"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-outline-variant/20 max-w-[200px]">
              <p className="text-label-md text-secondary">%100 Kişiye Özel</p>
              <p className="text-xs text-on-surface-variant">
                Danışmanınız yalnızca sizin sürecinize odaklanır.
              </p>
            </div>
          </div>
        </div>

        {/* Detaylandırılmış özellik kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((feature) => (
            <div
              key={feature.title}
              className="bg-surface-container-lowest rounded-3xl p-8 border border-surface-container soft-shadow hover:-translate-y-1 transition-transform"
            >
              <div className="w-14 h-14 bg-primary-container rounded-2xl flex items-center justify-center text-secondary-fixed mb-6">
                <Icon name={feature.icon} className="text-2xl" />
              </div>
              <h3 className="text-headline-md text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
