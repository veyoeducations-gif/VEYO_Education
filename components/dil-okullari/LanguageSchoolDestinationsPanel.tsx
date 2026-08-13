"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Flag from "@/components/ui/Flag";
import {
  LANGUAGE_SCHOOL_DESTINATIONS,
  type DestinationCategory,
} from "./language-school-destinations";

export default function LanguageSchoolDestinationsPanel() {
  const [activeTab, setActiveTab] = useState<DestinationCategory>("europe");

  const filtered = useMemo(
    () => LANGUAGE_SCHOOL_DESTINATIONS.filter((d) => d.category === activeTab),
    [activeTab],
  );

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
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
            onClick={() => setActiveTab("other")}
            className={`px-6 py-2.5 rounded-full text-label-md transition-all ${
              activeTab === "other"
                ? "bg-secondary text-on-secondary shadow-sm"
                : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            Diğer Popüler Destinasyonlar
          </button>
        </div>
      </div>

      <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 text-center">
        Detaylı bilgi, popüler şehirler ve program içeriği için bir ülkeye
        tıklayın.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {filtered.map((destination) => (
          <Link
            key={destination.id}
            href={`/dil-okullari/${destination.slug}`}
            className="flex flex-col items-center justify-center gap-3 bg-surface-container-lowest border border-surface-container rounded-2xl py-6 px-4 soft-shadow hover:-translate-y-1 hover:border-secondary/40 transition-all duration-300 text-center"
          >
            <Flag code={destination.flagCode} name={destination.name} size={40} />
            <span className="text-body-md font-semibold text-primary">
              {destination.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
