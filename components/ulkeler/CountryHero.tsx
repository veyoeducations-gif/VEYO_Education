import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Flag from "@/components/ui/Flag";
import type { CountryPoint } from "./countries-data";

export default function CountryHero({ country }: { country: CountryPoint }) {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-unit-xl pb-8">
      <Link
        href="/ulkeler"
        className="inline-flex items-center gap-1 text-on-surface-variant hover:text-secondary text-label-md mb-6 transition-colors"
      >
        <Icon name="arrow_back" className="text-base" />
        Tüm Ülkeler
      </Link>

      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <Flag
          code={country.flagCode}
          name={country.name}
          size={112}
          className="rounded-2xl shadow-lg ring-1 ring-black/10"
        />
        <div>
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-label-md mb-3 uppercase tracking-wider">
            {country.region === "europe" ? "Avrupa" : "Asya"}
          </span>
          <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-primary mb-2">
            {country.name}
          </h1>
          <p className="text-body-lg text-on-surface-variant flex items-center gap-2">
            <Icon name="location_on" className="text-secondary text-lg" />
            Başkent: {country.capital}
          </p>
        </div>
      </div>
    </section>
  );
}
