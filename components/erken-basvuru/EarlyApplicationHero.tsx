import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function EarlyApplicationHero() {
  return (
    <section className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-unit-xl mt-unit-lg">
      <div className="relative rounded-3xl overflow-hidden soft-shadow bg-surface-container-lowest flex flex-col md:flex-row min-h-[500px]">
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-label-md px-4 py-1.5 rounded-full mb-6 w-fit">
            <Icon name="schedule" className="text-base" />
            Zamanlama Her Şeydir
          </div>
          <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-primary mb-6">
            Erken Başvurunun Geleceğinize Etkisi
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-8 max-w-xl">
            Global eğitim yolculuğunda başarılı olmanın sırrı sadece
            notlarınızda değil, stratejik zamanlamada gizlidir. Hayallerinizdeki
            üniversiteye giden yolu erken adımlarla güvence altına alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/basvuru"
              className="bg-secondary text-on-secondary text-label-md px-8 py-3.5 rounded-xl hover:shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              Ücretsiz Ön Değerlendirme
              <Icon name="assignment" />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[300px]">
          <Image
            src="/images/erken-basvuru-library.jpg"
            alt="Kütüphanede kitaplarıyla ders çalışan odaklanmış bir öğrenci"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent md:w-1/3" />
        </div>
      </div>
    </section>
  );
}
