import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import VisaHero from "@/components/vize-danismanligi/VisaHero";
import VisaProcessSteps from "@/components/vize-danismanligi/VisaProcessSteps";
import VisaDocumentChecklist from "@/components/vize-danismanligi/VisaDocumentChecklist";
import VisaFAQ from "@/components/vize-danismanligi/VisaFAQ";
import VisaConsultationForm from "@/components/vize-danismanligi/VisaConsultationForm";
import VisaCTA from "@/components/vize-danismanligi/VisaCTA";

export const metadata: Metadata = {
  title: "Öğrenci Vize Danışmanlığı | VEYO Education",
  description:
    "Öğrenci vizesi başvuru sürecinde evrak hazırlığından mülakat simülasyonuna kadar uzman danışmanlık. Avrupa, Rusya, Çin, Japonya, Güney Kore ve Singapur için vize desteği.",
};

export default function VisaConsultingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 flex-grow flex flex-col">
        <VisaHero />
        <VisaProcessSteps />
        <VisaDocumentChecklist />
        <VisaFAQ />
        <VisaConsultationForm />
        <VisaCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
