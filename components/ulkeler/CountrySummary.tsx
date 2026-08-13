import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { CountrySummary as CountrySummaryType } from "./countries-data";

export default function CountrySummary({
  countryName,
  summary,
}: {
  countryName: string;
  summary: CountrySummaryType;
}) {
  const sections = [
    {
      icon: "public",
      title: "Eğitim Kalitesi ve Dünyadaki Yeri",
      text: summary.quality,
    },
    {
      icon: "account_balance",
      title: "Prestijli Üniversiteler",
      text: summary.universities,
    },
    {
      icon: "payments",
      title: "Maliyet Aralığı",
      text: summary.cost,
    },
    {
      icon: "diversity_3",
      title: "Yaşam Koşulları",
      text: summary.lifestyle,
    },
  ];

  return (
    <>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-surface-container soft-shadow"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
                <Icon name={section.icon} />
              </div>
              <h3 className="text-headline-md text-primary mb-3">{section.title}</h3>
              <p className="text-body-md text-on-surface-variant">{section.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Satış odaklı kapanış / CTA */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24">
        <div className="bg-primary-container text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-headline-lg text-on-primary mb-4">
              {countryName} İçin Harekete Geçmeye Hazır Mısınız?
            </h2>
            <p className="text-body-lg text-primary-fixed-dim mb-8">{summary.pitch}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/basvuru"
                className="bg-secondary text-on-secondary text-label-md px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
              >
                Başvuru Formunu Doldurun
                <Icon name="arrow_forward" className="text-sm" />
              </Link>
              <a
                href="https://wa.me/393489094166"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 bg-white/10 backdrop-blur-sm text-white text-label-md px-8 py-4 rounded-xl hover:bg-white/20 transition-all text-center"
              >
                WhatsApp'tan Danışın
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
