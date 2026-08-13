import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ProcessHero from "@/components/surecimiz/ProcessHero";
import ProcessTimeline from "@/components/surecimiz/ProcessTimeline";
import ProcessWhyVeyo from "@/components/surecimiz/ProcessWhyVeyo";
import ProcessCTA from "@/components/surecimiz/ProcessCTA";

export const metadata: Metadata = {
  title: "Danışmanlık Sürecimiz | VEYO Education",
  description:
    "İlk görüşmeden varış sonrası desteğe kadar VEYO Education danışmanlık sürecinin 6 adımını keşfedin.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-unit-xl">
        <ProcessHero />
        <ProcessTimeline />
        <ProcessWhyVeyo />
        <ProcessCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
