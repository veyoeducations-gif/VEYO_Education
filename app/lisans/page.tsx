import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LisansHero from "@/components/lisans/LisansHero";
import LisansWhyAbroad from "@/components/lisans/LisansWhyAbroad";
import LisansVeyoEdge from "@/components/lisans/LisansVeyoEdge";

export const metadata: Metadata = {
  title: "Lisans Programları | VEYO Education",
  description:
    "Dünyanın en prestijli üniversitelerinde lisans eğitimi için butik akademik danışmanlık. Profil analizi, stratejik başvuru ve yerleştirme süreci.",
};

export default function LisansPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <LisansHero />
        <LisansWhyAbroad />
        <LisansVeyoEdge />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
