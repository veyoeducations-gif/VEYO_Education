import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function LisansHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-unit-xl overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lisans-hero-graduation.jpg"
          alt="Üniversite kampüsünde lisans öğrencileri"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-background/90 to-background" />
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/10 backdrop-blur-md border border-secondary/20 mb-10 animate-reveal">
          <Icon name="auto_awesome" className="text-secondary text-sm" />
          <span className="text-label-md text-secondary uppercase tracking-widest text-[11px]">
            Bireysel Danışmanlık
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-10 max-w-5xl mx-auto leading-[1.1] animate-reveal">
          Sınır Tanımayan Bir Akademik <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-text">
            Yolculuğun Başlangıcı
          </span>
        </h1>

        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 animate-reveal reveal-delay-1">
          Dünyanın en prestijli üniversitelerinde yerinizi alın. Akademik
          yolculuğunuzda size özel stratejilerle, hayallerinizdeki kariyere
          giden kapıları VEYO ayrıcalığıyla aralayın.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal reveal-delay-2">
          <Link
            href="/basvuru"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-full hover:bg-secondary transition-all duration-500 shadow-xl shadow-primary/20 hover:-translate-y-1"
          >
            Ücretsiz Ön Görüşme Planla
            <Icon name="arrow_outward" className="text-sm" />
          </Link>
          <Link
            href="/surecimiz"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-primary border border-outline-variant/30 px-10 py-5 rounded-full hover:bg-surface-container-low transition-all duration-300 group"
          >
            Süreci Keşfedin
            <Icon
              name="arrow_forward"
              className="text-sm group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
