import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CountryHero from "@/components/ulkeler/CountryHero";
import CountryStats from "@/components/ulkeler/CountryStats";
import CountrySummary from "@/components/ulkeler/CountrySummary";
import { COUNTRIES } from "@/components/ulkeler/countries-data";

interface CountryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return COUNTRIES.map((country) => ({ slug: country.slug }));
}

export function generateMetadata({ params }: CountryPageProps): Metadata {
  const country = COUNTRIES.find((c) => c.slug === params.slug);
  if (!country) return {};

  return {
    title: `${country.name} - Yurt Dışı Eğitim Danışmanlığı | VEYO Education`,
    description: country.summary.quality,
  };
}

export default function CountryDetailPage({ params }: CountryPageProps) {
  const country = COUNTRIES.find((c) => c.slug === params.slug);
  if (!country) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 flex-grow">
        <CountryHero country={country} />
        <CountryStats stats={country.stats} />
        <CountrySummary countryName={country.name} summary={country.summary} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
