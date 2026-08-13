import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import EarlyApplicationHero from "@/components/erken-basvuru/EarlyApplicationHero";
import EarlyApplicationBenefits from "@/components/erken-basvuru/EarlyApplicationBenefits";
import EarlyApplicationTimeline from "@/components/erken-basvuru/EarlyApplicationTimeline";
import EarlyApplicationExpertNote from "@/components/erken-basvuru/EarlyApplicationExpertNote";

export const metadata: Metadata = {
  title: "Erken Başvurunun Geleceğinize Etkisi | VEYO Education",
  description:
    "Erken başvurunun kabul şansı, burs ve konaklama avantajlarını keşfedin; ideal başvuru takvimini inceleyin.",
};

export default function EarlyApplicationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-unit-xl">
        <EarlyApplicationHero />
        <EarlyApplicationBenefits />
        <EarlyApplicationTimeline />
        <EarlyApplicationExpertNote />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
