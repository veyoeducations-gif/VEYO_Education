import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function LanguageSchoolsHero() {
  return (
    <section className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl overflow-hidden rounded-3xl mt-8">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/language-schools-hero-v2.jpg"
          alt="Yurt dışında dil eğitimi alan gülümseyen bir öğrenci"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 to-primary-container/40 z-10" />
      </div>

      <div className="relative z-20 flex flex-col items-start max-w-2xl text-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 border-white/30 text-white">
          <Icon name="public" className="text-sm" />
          <span className="text-label-md uppercase tracking-wider text-xs">
            Yurtdışı Eğitim
          </span>
        </div>
        <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-white mb-6">
          Dünyayı Kendi Dilinde Konuşun
        </h1>
        <p className="text-body-lg text-white/90 mb-8 max-w-lg">
          VEYO Education ile dünyanın en prestijli dil okullarında yerinizi
          alın. Küresel bir vizyon kazanırken, yeni kültürler keşfedin.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/dil-okullari/destinasyonlar"
            className="bg-secondary text-white text-label-md px-8 py-4 rounded-xl hover:shadow-lg transition-all active:scale-95 shadow-md border border-secondary"
          >
            Dil Okullarını Keşfet
          </Link>
          <a
            href="#danismanlik"
            className="glass-panel text-white text-label-md px-8 py-4 rounded-xl hover:bg-white/20 transition-all active:scale-95 flex items-center gap-2 border border-white/50"
          >
            <Icon name="play_circle" />
            Videoyu İzle
          </a>
        </div>
      </div>
    </section>
  );
}
