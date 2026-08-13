import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function ArticleCTA() {
  return (
    <div className="mt-unit-xl p-unit-lg md:p-unit-xl bg-surface-container-low rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.08)] border border-outline-variant/20 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-unit-md">
        <div className="max-w-lg text-center md:text-left">
          <h3 className="text-headline-md text-primary mb-2">Hayallerinizi Ertelemeyin</h3>
          <p className="text-body-md text-on-surface-variant">
            Yurt dışı eğitim yolculuğunuza güvenle adım atmak için profesyonel
            danışmanlarımızla yol haritanızı birlikte çizelim.
          </p>
        </div>
        <Link
          href="/basvuru"
          className="shrink-0 w-full md:w-auto bg-secondary text-on-secondary text-label-md px-8 py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
        >
          Ücretsiz Ön Görüşme Randevusu Alın
          <Icon name="arrow_forward" className="!text-xl" />
        </Link>
      </div>
    </div>
  );
}
