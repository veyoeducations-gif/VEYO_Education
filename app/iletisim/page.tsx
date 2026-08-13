import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ContactHero from "@/components/iletisim/ContactHero";

export const metadata: Metadata = {
  title: "İletişim | VEYO Education",
  description:
    "VEYO Education ile WhatsApp, Instagram ve YouTube üzerinden iletişime geçin.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
