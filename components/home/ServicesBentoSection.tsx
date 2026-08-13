import Link from "next/link";
import Icon from "@/components/ui/Icon";

const SMALL_SERVICES = [
  {
    icon: "menu_book",
    title: "Dil Okulları",
    description: "İngiltere, ABD ve Kanada'da en iyi dil eğitimi programları.",
    href: "/dil-okullari",
  },
  {
    icon: "flight_takeoff",
    title: "Öğrenci Vizesi Danışmanlığı",
    description: "Öğrenci vizeleri için eksiksiz belge hazırlığı ve süreç yönetimi.",
    href: "/vize-danismanligi",
  },
];

export default function ServicesBentoSection() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
      <div className="text-center mb-16">
        <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary">
          Uzmanlık Alanlarımız
        </h2>
        <p className="text-body-lg text-on-surface-variant mt-4 max-w-2xl mx-auto">
          Yurt dışında lisans ve yüksek lisans eğitimine giden yolda profesyonel
          rehberlik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Öne çıkan büyük kart */}
        <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-secondary/5 border-2 border-secondary/20 p-10 flex flex-col justify-center group hover:bg-secondary/10 transition-colors">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-secondary text-on-secondary text-xs font-bold rounded-full mb-6 shadow-sm">
              Öne Çıkan Hizmetimiz
            </span>
            <h3 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-6 leading-tight">
              Yurt Dışında Lisans &amp; <br className="hidden md:block" /> Yüksek
              Lisans
            </h3>
            <p className="text-body-lg text-on-surface-variant max-w-lg mb-8">
              Dünyanın en prestijli üniversitelerine kabul sürecinizde; stratejik
              planlama, portfolyo hazırlığı ve uçtan uca başvuru yönetimi ile
              yanınızdayız.
            </p>
            <div className="flex items-center gap-2 text-secondary font-bold">
              <span>Hemen Bilgi Alın</span>
              <Icon
                name="expand_more"
                className="text-xl font-normal leading-none transition-transform duration-300 md:group-hover:rotate-180"
              />
            </div>
          </div>

          {/*
            Lisans/Yüksek Lisans paneli.
            Mobilde (tek sütunlu grid'de risksiz) normal akışta, her zaman görünür.
            Masaüstünde ise kartın kendi dolgu alanı (p-10) içinde mutlak konumlanır;
            böylece kart hover edildiğinde YÜKSEKLİĞİ HİÇ DEĞİŞMEZ — dolayısıyla
            sağdaki küçük kartların (Dil Okulları, Vize, Erken Başvuru) hizası
            bozulmaz. Panel, kartın kendi boş alanında yumuşak bir fade + kayma
            animasyonuyla belirir.
          */}
          <div
            className="relative mt-6 md:mt-0 md:absolute md:left-10 md:right-10 md:bottom-10 md:opacity-0 md:translate-y-2 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto transition-all duration-500 ease-out z-20"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/lisans"
                className="flex-1 flex items-center justify-between gap-2 bg-white text-primary border border-secondary/20 px-5 py-4 rounded-xl shadow-sm hover:border-secondary hover:bg-secondary/5 transition-colors"
              >
                <span className="font-semibold">Lisans</span>
                <Icon name="arrow_forward" className="text-secondary text-lg" />
              </Link>
              <Link
                href="/yuksek-lisans"
                className="flex-1 flex items-center justify-between gap-2 bg-white text-primary border border-secondary/20 px-5 py-4 rounded-xl shadow-sm hover:border-secondary hover:bg-secondary/5 transition-colors"
              >
                <span className="font-semibold">Yüksek Lisans</span>
                <Icon name="arrow_forward" className="text-secondary text-lg" />
              </Link>
            </div>
          </div>

          <Icon
            name="school"
            className="!text-[12rem] absolute -right-8 -bottom-8 text-secondary/5 select-none pointer-events-none"
          />
        </div>

        {/* Küçük kartlar */}
        {SMALL_SERVICES.map((service) => {
          const cardClassName =
            "bg-surface-container-lowest rounded-3xl p-6 border border-surface-container soft-shadow hover:-translate-y-1 transition-transform block";
          const content = (
            <>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                <Icon name={service.icon} />
              </div>
              <h4 className="text-headline-md text-primary mb-2">{service.title}</h4>
              <p className="text-body-md text-on-surface-variant text-sm">
                {service.description}
              </p>
            </>
          );

          return service.href ? (
            <Link key={service.title} href={service.href} className={cardClassName}>
              {content}
            </Link>
          ) : (
            <div key={service.title} className={cardClassName}>
              {content}
            </div>
          );
        })}

        {/* Erken başvuru avantajı - geniş kart */}
        <Link
          href="/erken-basvuru"
          className="md:col-span-2 bg-primary-container text-on-primary-container rounded-3xl p-8 flex items-center justify-between relative overflow-hidden group"
        >
          <div className="z-10 relative">
            <h4 className="text-headline-lg text-on-primary mb-2">
              Erken Başvuru Avantajı
            </h4>
            <p className="text-body-md max-w-sm">
              Gelecek akademik yıl için başvurularınızı şimdiden planlayın,
              kabul şansınızı artırın.
            </p>
            <span className="mt-4 text-secondary-fixed font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Detaylı Bilgi <Icon name="arrow_forward" className="text-sm" />
            </span>
          </div>
          <Icon
            name="schedule"
            className="!text-9xl absolute -right-6 -bottom-6 text-primary-fixed-dim/20 z-0"
          />
        </Link>
      </div>
    </section>
  );
}
