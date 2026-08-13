import Link from "next/link";
import Icon from "@/components/ui/Icon";

const PROCESS_STEPS = [
  {
    icon: "fact_check",
    title: "Seviye Tespit Sınavı",
    description: "Mevcut seviyenizi belirleyip gerçekçi bir hedef ve zaman planı çıkarıyoruz.",
  },
  {
    icon: "calendar_month",
    title: "Kişiye Özel Çalışma Planı",
    description: "Güçlü/zayıf olduğunuz modüllere göre haftalık, ölçülebilir bir program hazırlıyoruz.",
  },
  {
    icon: "groups",
    title: "Speaking & Writing Pratiği",
    description: "Birebir konuşma pratiği ve yazma ödevlerinize detaylı, yapıcı geri bildirim.",
  },
  {
    icon: "quiz",
    title: "Deneme Sınavları",
    description: "Gerçek sınav formatında düzenli deneme sınavlarıyla sınav gününe hazır olun.",
  },
];

export default function IeltsProcessCTA() {
  return (
    <>
      <section className="bg-surface-container-low py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
              VEYO ile Hazırlık Sürecimiz
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container soft-shadow relative"
              >
                <span className="text-headline-lg text-secondary/15 leading-none block mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon name={step.icon} className="text-secondary text-2xl mb-3" />
                <h3 className="text-headline-md text-primary mb-2">{step.title}</h3>
                <p className="text-body-md text-on-surface-variant text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-24 text-center">
        <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
          Hedef Bandınıza Birlikte Ulaşalım
        </h2>
        <p className="text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
          Ücretsiz bir seviye değerlendirmesiyle başlayın; size özel bir
          hazırlık planı çıkaralım.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/basvuru"
            className="bg-secondary text-on-secondary text-label-md px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Başvuru Formunu Doldurun
          </Link>
          <a
            href="https://wa.me/393489094166"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-low text-primary border border-outline-variant text-label-md px-8 py-4 rounded-xl hover:bg-surface-container transition-all duration-300"
          >
            WhatsApp&apos;tan Sorun
          </a>
        </div>
      </section>
    </>
  );
}
