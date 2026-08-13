"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Flag from "@/components/ui/Flag";
import { COUNTRIES, type Region } from "./countries-data";

export default function CountriesExplorer() {
  const [activeTab, setActiveTab] = useState<Region>("europe");

  const filteredCountries = useMemo(
    () => COUNTRIES.filter((country) => country.region === activeTab),
    [activeTab],
  );

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
      {/* Sekme geçişi */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-surface-container-low rounded-full p-1.5 gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("europe")}
            className={`px-6 py-2.5 rounded-full text-label-md transition-all ${
              activeTab === "europe"
                ? "bg-secondary text-on-secondary shadow-sm"
                : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            Avrupa
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("asia")}
            className={`px-6 py-2.5 rounded-full text-label-md transition-all ${
              activeTab === "asia"
                ? "bg-secondary text-on-secondary shadow-sm"
                : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            Asya
          </button>
        </div>
      </div>

      <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 text-center">
        {activeTab === "europe"
          ? "Birleşik Krallık başta olmak üzere, VEYO Education Avrupa genelindeki üniversiteler ve dil okulları için kapsamlı danışmanlık sunar."
          : "Asya'daki eğitim ve vize süreçlerinde uzmanlaştığımız beş destinasyon."}{" "}
        Detaylı bilgi için bir ülkeye tıklayın.
      </p>

      {/* Kompakt bayrak + ülke ismi paneli */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {filteredCountries.map((country) => (
          <Link
            key={country.id}
            href={`/ulkeler/${country.slug}`}
            className="flex flex-col items-center justify-center gap-3 bg-surface-container-lowest border border-surface-container rounded-2xl py-6 px-4 soft-shadow hover:-translate-y-1 hover:border-secondary/40 transition-all duration-300 text-center"
          >
            <Flag code={country.flagCode} name={country.name} size={40} />
            <span className="text-body-md font-semibold text-primary">{country.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
