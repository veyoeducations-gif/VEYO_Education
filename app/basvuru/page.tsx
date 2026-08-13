import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ApplicationIntro from "@/components/basvuru/ApplicationIntro";
import ApplicationForm from "@/components/basvuru/ApplicationForm";

export const metadata: Metadata = {
  title: "Başvuru Formu | VEYO Education",
  description:
    "VEYO Education başvuru formunu doldurun, uzman danışmanlarımız en kısa sürede sizinle iletişime geçsin.",
};

export default function ApplicationPage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-hidden pt-24 pb-unit-xl">
        {/* Arka plan dekorasyonu - sadece bu sayfaya özel, sayfa dışına taşmaz */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary-fixed to-transparent opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-[50vh] bg-secondary-fixed rounded-bl-[100%] opacity-30 blur-3xl pointer-events-none" />

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-start relative z-10 pt-unit-lg">
          <ApplicationIntro />
          <ApplicationForm />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
