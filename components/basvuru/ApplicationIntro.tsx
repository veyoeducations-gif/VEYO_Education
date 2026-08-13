import Icon from "@/components/ui/Icon";

const TRUST_POINTS = [
  {
    icon: "verified_user",
    title: "Güvenilir Danışmanlık",
    description:
      "Sürecin her aşamasında şeffaf, uzman ve profesyonel destek sağlıyoruz.",
  },
  {
    icon: "public",
    title: "Global Ağ",
    description:
      "Dünyanın önde gelen üniversiteleri ve dil okullarıyla doğrudan partnerlik.",
  },
  {
    icon: "lock",
    title: "Ayrıcalıklı ve Gizli Süreç",
    description:
      "Başvurunuz, size özel atanan danışmanınız dışında kimseyle paylaşılmaz.",
  },
];

export default function ApplicationIntro() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-unit-lg pt-unit-md">
      <div className="inline-flex items-center gap-2 bg-secondary-fixed/50 text-secondary-container px-4 py-2 rounded-full w-fit">
        <Icon name="flight_takeoff" className="text-sm" />
        <span className="text-label-md uppercase tracking-wider text-xs">
          Yurt Dışı Eğitim
        </span>
      </div>

      <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-on-primary-fixed">
        Geleceğinize
        <br />
        <span className="text-secondary">İlk Adımı Atın</span>
      </h1>

      <p className="text-body-lg text-on-surface-variant mt-2 max-w-md">
        Prestijli üniversitelerde eğitim almak ve global bir kariyere
        hazırlanmak için başvuru formumuzu doldurun. Size özel atanacak uzman
        danışmanımız en kısa sürede sizinle iletişime geçecektir.
      </p>

      <div className="flex flex-col gap-6 mt-unit-md">
        {TRUST_POINTS.map((point) => (
          <div key={point.title} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
              <Icon name={point.icon} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-headline-md text-on-primary-fixed mb-1">
                {point.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
