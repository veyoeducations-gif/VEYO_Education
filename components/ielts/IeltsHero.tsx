import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function IeltsHero() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl">
      <div className="max-w-3xl mx-auto text-center mb-4">
        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary/10 text-secondary text-label-md mb-6">
          <Icon name="assignment" className="text-sm" />
          Sınav Hazırlık
        </span>
        <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-primary mb-6 leading-tight">
          IELTS Sınavına <span className="text-secondary">Stratejik Hazırlık</span>
        </h1>
        <p className="text-body-lg text-on-surface-variant mb-8">
          Hedef üniversitenizin veya vize başvurunuzun istediği bandı doğru
          stratejiyle yakalayın. Hangi seviyeden başladığınızı, ne kadar
          zamana ihtiyacınız olduğunu ve sürecin nasıl işlediğini birlikte
          netleştirelim.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/basvuru"
            className="bg-secondary text-on-secondary text-label-md px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Ücretsiz Seviye Değerlendirmesi
          </Link>
        </div>
      </div>
    </section>
  );
}
