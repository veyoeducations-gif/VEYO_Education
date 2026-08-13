import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ServicesHero from "@/components/hizmetlerimiz/ServicesHero";
import ServicesGrid from "@/components/hizmetlerimiz/ServicesGrid";
import ServicesCTA from "@/components/hizmetlerimiz/ServicesCTA";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | VEYO Education",
  description:
    "VEYO Education'ın yurt dışı lisans, yüksek lisans, dil okulu, vize danışmanlığı, burs başvuruları ve sınav hazırlık hizmetlerini keşfedin.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 flex-grow flex flex-col">
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
