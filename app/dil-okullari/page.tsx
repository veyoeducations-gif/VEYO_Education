import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LanguageSchoolsHero from "@/components/dil-okullari/LanguageSchoolsHero";
import LanguageSchoolsDestinations from "@/components/dil-okullari/LanguageSchoolsDestinations";
import LanguageSchoolsLifestyle from "@/components/dil-okullari/LanguageSchoolsLifestyle";

export const metadata: Metadata = {
  title: "Dil Okulları | VEYO Education",
  description:
    "İngiltere, Amerika, Kanada ve İrlanda'daki en iyi dil okulu programlarını keşfedin. Genel İngilizce, İş İngilizcesi ve IELTS sınav hazırlık seçenekleri.",
};

export default function LanguageSchoolsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-unit-xl">
        <LanguageSchoolsHero />
        <LanguageSchoolsDestinations />
        <LanguageSchoolsLifestyle />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
