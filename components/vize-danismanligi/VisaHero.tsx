import Icon from "@/components/ui/Icon";

const DESTINATIONS = [
  "Birleşik Krallık",
  "Avrupa",
  "Rusya",
  "Çin",
  "Japonya",
  "Güney Kore",
  "Singapur",
];

export default function VisaHero() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary/10 text-secondary text-label-md mb-6">
          <Icon name="flight_takeoff" className="text-sm" />
          Öğrenci Vize Danışmanlığı
        </span>
        <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-primary mb-6 leading-tight">
          Vize Sürecinde <span className="text-secondary">Güvenle İlerleyin</span>
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          Evrak hazırlığından mülakat simülasyonuna kadar, öğrenci vizesi
          sürecinin her adımında uzman danışmanlarımız yanınızda. Tek bir eksik
          belgenin bile süreci geciktirebildiği bu aşamada, deneyimli bir ekiple
          çalışmanın farkını yaşayın.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {DESTINATIONS.map((destination) => (
          <span
            key={destination}
            className="inline-flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/40 text-on-surface-variant text-label-md px-4 py-2 rounded-full soft-shadow"
          >
            <Icon name="public" className="text-sm text-secondary" />
            {destination}
          </span>
        ))}
      </div>
    </section>
  );
}
