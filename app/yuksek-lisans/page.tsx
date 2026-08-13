import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import GradHero from "@/components/yuksek-lisans/GradHero";
import GradExpertiseBento from "@/components/yuksek-lisans/GradExpertiseBento";
import GradStrategicPlacement from "@/components/yuksek-lisans/GradStrategicPlacement";
import GradCTA from "@/components/yuksek-lisans/GradCTA";

export const metadata: Metadata = {
  title: "Yüksek Lisans Programları | VEYO Education",
  description:
    "Master ve doktora başvurularınızda profesyonel rehberlik. Statement of Purpose, referans mektupları ve stratejik yerleştirme sürecinde yanınızdayız.",
};

export default function GraduateProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <GradHero />
        <GradExpertiseBento />
        <GradStrategicPlacement />
        <GradCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
