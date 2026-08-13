import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function ProcessCTA() {
  return (
    <section className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center py-unit-xl">
      <h2 className="text-headline-lg text-primary-container mb-4">
        Hayalinizdeki Eğitime İlk Adımı Atın
      </h2>
      <p className="text-body-md text-on-surface-variant mb-8 max-w-2xl mx-auto">
        Hedeflerinizi dinlemek ve size özel yol haritasını birlikte çizmek için
        sabırsızlanıyoruz. Hemen ücretsiz bir ön görüşme planlayın.
      </p>
      <Link
        href="/basvuru"
        className="bg-primary-container text-on-primary-container text-label-md px-10 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 inline-flex items-center gap-3"
      >
        <span className="text-white">Ücretsiz Ön Görüşme Planla</span>
        <Icon name="calendar_month" className="text-white" />
      </Link>
    </section>
  );
}
