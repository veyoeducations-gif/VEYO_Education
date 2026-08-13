import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AboutHero from "@/components/hakkimizda/AboutHero";
import AboutWhyUs from "@/components/hakkimizda/AboutWhyUs";
import AboutContactCTA from "@/components/hakkimizda/AboutContactCTA";

export const metadata: Metadata = {
  title: "Hakkımızda | VEYO Education",
  description:
    "VEYO Education, yurt dışında bizzat eğitim almış danışmanlardan oluşan bir ekiple öğrencilere birebir, prestijli eğitim danışmanlığı sunar.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 flex-grow">
        <AboutHero />
        <AboutWhyUs />
        <AboutContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
