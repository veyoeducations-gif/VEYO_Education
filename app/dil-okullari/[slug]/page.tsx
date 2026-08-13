import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LanguageSchoolCountryContent from "@/components/dil-okullari/LanguageSchoolCountryContent";
import { LANGUAGE_SCHOOL_DESTINATIONS } from "@/components/dil-okullari/language-school-destinations";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return LANGUAGE_SCHOOL_DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const destination = LANGUAGE_SCHOOL_DESTINATIONS.find((d) => d.slug === params.slug);
  if (!destination) return {};

  return {
    title: `${destination.name} Dil Okulları | VEYO Education`,
    description: destination.overview,
  };
}

export default function LanguageSchoolCountryPage({ params }: PageProps) {
  const destination = LANGUAGE_SCHOOL_DESTINATIONS.find((d) => d.slug === params.slug);
  if (!destination) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 flex-grow">
        <LanguageSchoolCountryContent destination={destination} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
