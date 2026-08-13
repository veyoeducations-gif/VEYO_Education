import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/home/Hero";
import WorldClassroomSection from "@/components/home/WorldClassroomSection";
import ServicesBentoSection from "@/components/home/ServicesBentoSection";
import PersonalConsultingSection from "@/components/home/PersonalConsultingSection";
import ContactForm from "@/components/home/ContactForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <Hero />
        <WorldClassroomSection />
        <ServicesBentoSection />
        <PersonalConsultingSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
