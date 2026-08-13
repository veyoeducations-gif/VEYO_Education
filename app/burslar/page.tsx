import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScholarshipsHero from "@/components/burslar/ScholarshipsHero";
import ScholarshipTypes from "@/components/burslar/ScholarshipTypes";
import ScholarshipRequirements from "@/components/burslar/ScholarshipRequirements";
import ScholarshipsCTA from "@/components/burslar/ScholarshipsCTA";

export const metadata: Metadata = {
  title: "Burs Fırsatları | VEYO Education",
  description:
    "Başarı bursları, ihtiyaç bursları, devlet bursları ve üniversiteye özel burs programları hakkında bilmeniz gerekenler ve başvuru şartları.",
};

export default function ScholarshipsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 flex-grow">
        <ScholarshipsHero />
        <ScholarshipTypes />
        <ScholarshipRequirements />
        <ScholarshipsCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
