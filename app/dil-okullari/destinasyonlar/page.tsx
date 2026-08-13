import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LanguageSchoolDestinationsPanel from "@/components/dil-okullari/LanguageSchoolDestinationsPanel";

export const metadata: Metadata = {
  title: "Dil Okulu Destinasyonları | VEYO Education",
  description:
    "Avrupa genelinde ve Amerika, Kanada gibi popüler destinasyonlarda dil okulu seçeneklerini keşfedin.",
};

export default function LanguageSchoolDestinationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 flex-grow">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-unit-xl pb-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-label-md mb-6 uppercase tracking-wider">
            Destinasyonlar
          </span>
          <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-primary mb-6">
            Dil Okulunuzu Keşfedin
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Avrupa genelinde ve Amerika, Kanada gibi popüler destinasyonlarda
            dil okulu seçeneklerimizi inceleyin. Detaylı bilgi için bir ülkeye
            tıklamanız yeterli.
          </p>
        </section>
        <LanguageSchoolDestinationsPanel />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
