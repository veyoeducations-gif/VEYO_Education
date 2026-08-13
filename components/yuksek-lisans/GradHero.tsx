import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function GradHero() {
  return (
    <section className="relative pt-24 pb-32 px-margin-mobile md:px-margin-desktop overflow-hidden bg-gradient-to-br from-background to-secondary-fixed/20">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 relative">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-label-md mb-6 uppercase tracking-wider">
            Premium Danışmanlık
          </span>
          <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-primary mb-6">
            Kariyerinizde Devrim Yaratın: Master ve Doktora
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Dünyanın en prestijli üniversitelerinde akademik yolculuğunuzu
            şekillendirin. Kişiselleştirilmiş stratejilerimizle hedeflerinize
            ulaşmanızı sağlıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/basvuru"
              className="bg-secondary text-white px-8 py-4 rounded-xl text-label-md hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95 text-center flex items-center justify-center gap-2 group"
            >
              Hemen Başvur
              <Icon
                name="arrow_forward"
                className="text-lg group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/surecimiz"
              className="glass-panel text-primary px-8 py-4 rounded-xl text-label-md hover:bg-white/90 transition-all text-center flex items-center justify-center gap-2"
            >
              <Icon name="play_circle" className="text-lg" />
              Süreci İzle
            </Link>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block">
          <div className="relative rounded-[2rem] overflow-hidden soft-shadow aspect-[4/5] transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/images/yuksek-lisans-classroom.jpg"
              alt="Yüksek lisans seminerinde ileri araştırma yöntemlerini tartışan öğrenciler"
              fill
              priority
              sizes="(max-width: 1024px) 0px, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent" />
          </div>

          <div className="absolute top-10 -left-10 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 -right-10 w-40 h-40 bg-secondary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        </div>
      </div>
    </section>
  );
}
