import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 space-y-6 z-10">
        <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-primary leading-tight">
          Geleceğinizi Dünyanın En İyi <br className="hidden md:block" />
          <span className="text-secondary relative">
            Üniversitelerinde İnşa Edin
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-secondary-fixed/50 rounded-full" />
          </span>
        </h1>

        <p className="text-body-lg text-on-surface-variant max-w-xl">
          VEYO Education ile yurt dışında lisans ve yüksek lisans eğitimine adım
          atın. Küresel vizyonunuzu prestijli bir eğitimle gerçeğe dönüştürmek
          için profesyonel danışmanlık hizmetlerimizle yanınızdayız.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/basvuru"
            className="bg-secondary text-on-secondary text-label-md px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center"
          >
            Hemen Başvur
          </Link>
          <Link
            href="/hizmetlerimiz"
            className="bg-surface-container-low text-primary border border-outline-variant text-label-md px-8 py-4 rounded-xl hover:bg-surface-container transition-all duration-300 flex items-center justify-center gap-2"
          >
            Hizmetlerimizi Keşfedin
            <Icon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
      </div>

      {/* Görsel kolaj: tek bir baskın fotoğraf + küçük bir aksan kare — gözü yormayan, sade bir düzen */}
      <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
        <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image
            src="/images/hero-campus.jpg"
            alt="Modern bir üniversite kampüsünde yürüyen öğrenciler"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="absolute -bottom-8 -left-6 sm:-left-10 hidden sm:block w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
          <Image
            src="/images/hero-architecture-accent.jpg"
            alt="Yurt dışı üniversite kampüs mimarisi"
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
