import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CountriesHero from "@/components/ulkeler/CountriesHero";
import CountriesExplorer from "@/components/ulkeler/CountriesExplorer";

export const metadata: Metadata = {
  title: "Ülkeler | VEYO Education",
  description:
    "Avrupa genelinde ve Asya'da (Rusya, Çin, Güney Kore, Japonya, Singapur) eğitim ve vize danışmanlığı destinasyonlarımızı keşfedin.",
};

export default function CountriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 flex-grow">
        <CountriesHero />
        <CountriesExplorer />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
