import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function AboutContactCTA() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-unit-xl bg-white">
      <div className="max-w-container-max mx-auto flex flex-col items-center text-center gap-unit-lg">
        <span className="text-secondary text-label-md uppercase tracking-wider bg-secondary/10 w-fit px-3 py-1 rounded-full mx-auto">
          Bize Ulaşın
        </span>
        <h2 className="text-headline-xl text-primary">İletişim</h2>
        <p className="text-body-lg text-on-surface-variant max-w-xl">
          Eğitim yolculuğunuzda size rehberlik etmek için buradayız.
          Sorularınız için bizimle iletişime geçebilirsiniz.
        </p>
        <Link
          href="/iletisim"
          className="bg-secondary text-on-secondary text-label-md px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
        >
          İletişime Geçin
          <Icon name="arrow_forward" className="text-sm" />
        </Link>
      </div>
    </section>
  );
}
