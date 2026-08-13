import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function ProcessHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-unit-xl">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/process-hero-campus.jpg"
          alt="Güneşli bir üniversite kampüs avlusunda sohbet eden öğrenciler"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 via-primary-container/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-left">
        <div className="max-w-2xl glass-panel p-unit-lg md:p-unit-xl rounded-2xl border border-white/10">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary-fixed text-label-md mb-4 backdrop-blur-sm">
            Süreci İncele
          </span>
          <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-white mb-unit-md">
            Danışmanlık Sürecimiz
          </h1>
          <p className="text-body-lg text-surface-container-high mb-unit-lg">
            VEYO Education ile global eğitim yolculuğunuzda yalnız değilsiniz.
            İlk hayalden, üniversite kapısından içeri adım attığınız o ilk güne
            kadar her adımda profesyonel rehberliğimizle yanınızdayız.
          </p>
          <Link
            href="/basvuru"
            className="bg-secondary text-on-secondary text-label-md px-8 py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-95 inline-flex items-center gap-2"
          >
            Ücretsiz Ön Görüşme Planla
            <Icon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
