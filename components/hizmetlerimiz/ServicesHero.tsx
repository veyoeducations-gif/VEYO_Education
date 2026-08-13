import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative py-unit-xl px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-label-md mb-4">
            Profesyonel Hizmetler
          </span>
          <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-primary mb-6">
            Geleceğinizi Birlikte Şekillendirelim
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            VEYO Education olarak, eğitim yolculuğunuzun her adımında size özel,
            güvenilir ve yenilikçi çözümler sunuyoruz.
          </p>
        </div>

        <div className="relative w-full h-[320px] md:h-[400px] rounded-[2rem] overflow-hidden soft-shadow">
          <Image
            src="/images/services-hero-consulting.jpg"
            alt="Danışmanlarımızla profesyonel bir görüşme anı"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
