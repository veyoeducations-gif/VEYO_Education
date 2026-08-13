import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import IeltsHero from "@/components/ielts/IeltsHero";
import IeltsOverview from "@/components/ielts/IeltsOverview";
import IeltsTargetBands from "@/components/ielts/IeltsTargetBands";
import IeltsProcessCTA from "@/components/ielts/IeltsProcessCTA";

export const metadata: Metadata = {
  title: "IELTS Hazırlık | VEYO Education",
  description:
    "IELTS sınavı modülleri, hedef banda göre hazırlık süresi ve VEYO Education'ın kişiye özel IELTS hazırlık süreci hakkında bilmeniz gereken her şey.",
};

export default function IeltsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 flex-grow">
        <IeltsHero />
        <IeltsOverview />
        <IeltsTargetBands />
        <IeltsProcessCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
