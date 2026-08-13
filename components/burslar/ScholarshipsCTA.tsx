import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function ScholarshipsCTA() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24">
      <div className="bg-primary-container text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-headline-lg text-on-primary mb-4">
              VEYO Education Burs Danışmanlığı
            </h2>
            <p className="text-body-lg text-primary-fixed-dim">
              Profilinize uygun burs programlarını araştırıyor, başvuru
              dosyanızı (niyet mektubu, referanslar, evraklar) güçlü bir
              şekilde hazırlıyor ve son başvuru tarihlerini sizin için takip
              ediyoruz.
            </p>
          </div>
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
              WhatsApp&apos;tan Sorun
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
