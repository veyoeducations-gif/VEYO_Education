import Image from "next/image";
import Icon from "@/components/ui/Icon";

export default function GradExpertiseBento() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
            Uzmanlık Alanınızı Keşfedin
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Akademik tutkularınızı profesyonel başarıya dönüştürecek araştırma
            fırsatlarını birlikte belirliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kişiselleştirilmiş Yol Haritası - büyük kart */}
          <div className="md:col-span-2 bg-white rounded-2xl p-8 soft-shadow border border-outline-variant/50 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                <Icon name="explore" />
              </div>
              <h3 className="text-headline-lg text-primary mb-4">
                Kişiselleştirilmiş Yol Haritası
              </h3>
              <p className="text-body-md text-on-surface-variant max-w-md">
                Sizin akademik geçmişinize ve kariyer hedeflerinize en uygun
                niş araştırma alanlarını ve programları haritalandırıyoruz.
                Yüzlerce seçenek arasından en doğru eşleşmeyi buluyoruz.
              </p>
            </div>
            <Icon
              name="route"
              className="!text-[200px] absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Araştırma Fırsatları */}
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-secondary mb-4 shadow-sm">
              <Icon name="biotech" />
            </div>
            <h4 className="text-headline-md text-primary mb-2">Araştırma Fırsatları</h4>
            <p className="text-body-md text-on-surface-variant">
              Önde gelen laboratuvarlar ve araştırma merkezleriyle bağlantı
              kurma stratejileri.
            </p>
          </div>

          {/* Profesyonel Gelişim */}
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-secondary mb-4 shadow-sm">
              <Icon name="trending_up" />
            </div>
            <h4 className="text-headline-md text-primary mb-2">Profesyonel Gelişim</h4>
            <p className="text-body-md text-on-surface-variant">
              Mezuniyet sonrası endüstri veya akademi kariyerinize sağlam bir
              zemin hazırlama.
            </p>
          </div>

          {/* Geleceğin Disiplinleri */}
          <div className="md:col-span-2 bg-primary-container text-white rounded-2xl p-8 overflow-hidden relative group">
            <div className="relative z-10 md:w-2/3">
              <h3 className="text-headline-lg mb-4">Geleceğin Disiplinleri</h3>
              <p className="text-body-md text-on-primary-container mb-6">
                Yapay zeka, sürdürülebilirlik, biyoteknoloji ve veri bilimi
                gibi yükselen alanlarda rekabet avantajı sağlayacak program
                seçimleri.
              </p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-30 md:opacity-100">
              <Image
                src="/images/gradlisans-disciplines-abstract.jpg"
                alt="Yapay zeka ve veri bilimi disiplinlerini temsil eden soyut görsel"
                fill
                sizes="(max-width: 768px) 33vw, 300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
