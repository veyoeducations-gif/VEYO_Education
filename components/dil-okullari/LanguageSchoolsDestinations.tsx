import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

const PROGRAMS = [
  {
    icon: "forum",
    title: "Genel İngilizce",
    description: "Günlük iletişim becerilerinizi akıcı hale getirin.",
  },
  {
    icon: "work",
    title: "İş İngilizcesi",
    description: "Profesyonel hayatta küresel bir adım atın.",
  },
  {
    icon: "school",
    title: "Sınav Hazırlık (IELTS)",
    description: "Akademik hedeflerinize ulaşmak için garantili başarı.",
  },
];

export default function LanguageSchoolsDestinations() {
  return (
    <section
      id="destinasyonlar"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Destinasyonlar */}
        <div className="lg:col-span-8 flex flex-col gap-gutter">
          <div className="mb-4">
            <h2 className="text-headline-lg text-primary mb-2">
              Popüler Destinasyonlar
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Dünyanın dört bir yanındaki elit eğitim merkezleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter h-full">
            {/* İngiltere - büyük kart */}
            <Link href="/dil-okullari/uk" className="relative rounded-2xl overflow-hidden group h-64 md:h-auto soft-shadow border border-outline-variant/30 block">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02I85hdkchR-U3xawgKPL6ZVHNN4CiVtkl0wp0Sq-wwBFfgb010b6rhkgx1Vsk-gv_BoOkHW05tKNVswLu0uSnyQGKYqjwwZC6A5cGd8UesOF67laiIt4bIf5AMOibQ-tdStPt7Mal8ZfUQQ_DeokpQfjxpbH2p_dB8seZLvXfMP8t3Cpcsz1A-qNE_fjbWqYTRp_4RKjjkfr42wcOKyLNYZBJrUtMX4AeGhRHpFobkbldLyabAQb1h6V0QIDF8wIyUaSRCpOcn0N"
                alt="Londra'da Big Ben ve kırmızı çift katlı otobüs"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-headline-md text-white flex items-center gap-2">
                  İngiltere
                  <Icon
                    name="arrow_forward"
                    className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300"
                  />
                </h3>
                <p className="text-body-md text-white/80 mt-1">
                  Londra, Oxford, Cambridge
                </p>
              </div>
            </Link>

            <div className="flex flex-col gap-gutter h-full">
              {/* Amerika */}
              <Link href="/dil-okullari/us" className="relative rounded-2xl overflow-hidden group flex-1 soft-shadow border border-outline-variant/30 min-h-[160px] block">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKyDUOt1DzJ5AJYqoWHW4oNcyGj74HWK4oLfoead0JAMHMWrsUeZG-AYSsPxF7A2OdOuirTKsIreFWJjT5_sWeTrlf2zrxrQD557ECyJtE4AjfzSMH8fmgyrDvlb6V8KOUkhAot4Gyi4ESEWzhnugoIY9W2H5FCkz_h0KCuT-mAdPRjX5GmEp1EqieAoqVnnXNrbRmEi7auoPzqeRRmIjvfDbrGxHvlyiQa8zqm7WtDcbfodqO-RZw59V82Oe7zkIkmVuRS9ZmejFy"
                  alt="New York silüeti ve Özgürlük Heykeli"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-headline-md text-white">Amerika</h3>
                </div>
              </Link>

              <div className="flex gap-gutter flex-1">
                {/* Kanada */}
                <Link href="/dil-okullari/ca" className="relative rounded-2xl overflow-hidden group flex-1 soft-shadow border border-outline-variant/30 min-h-[160px] block">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCg89kqJivGZcOpwbkxZcUGROyaqPMAzfMYKup7nR-vTjZtCyqYc5DlIBLYessziYNFqm9EHagBud69jKWMgbD0T3iFZqdee4hap9GyN9uN0iHDCL7Jot1PyE3hwEjd-IlLdIYkV91NLah6h1CuRNPqeetS3cdQqt1S3lyWBQ0XGlGz6votOeTVVNRhtDVCpcPsE5ChufK-QaxF_UptAmTUbGEnWMZhvLloDMTmFge4_pnxx_7YneWJMakx_UuyYPW_ljvUCtUW_KI"
                    alt="Toronto'da CN Tower"
                    fill
                    sizes="(max-width: 768px) 25vw, 12vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-headline-md text-white">Kanada</h3>
                  </div>
                </Link>

                {/* İrlanda */}
                <Link href="/dil-okullari/ie" className="relative rounded-2xl overflow-hidden group flex-1 soft-shadow border border-outline-variant/30 min-h-[160px] block">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3aWmoSFLpNxxnesklCrLb1yx8vNCvphZBpfNhNjmMa50XBEqmJ-gO06fXWpFjO3U6O76vaChaIeOrju3kq-QT4nyF0O1ry8GUQJA8lqUq-JehdCbvkASpi9-97iK0ff2WqadLvs-oMgGUuDyyIljdUcbhtte1Xb9FuyCcA_SVEi_keXJw04eGBn9SRgek9lwCaNJSx7bh39HxVh0qGF9sqQLGdmLXMYrM-oDgSNCmMXTEgpIxMrAgymtxE8_3smvHlzK_jxt9amG9"
                    alt="Dublin yakınlarında yeşil İrlanda kırsalı"
                    fill
                    sizes="(max-width: 768px) 25vw, 12vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-headline-md text-white">İrlanda</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Program Seçenekleri */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <h2 className="text-headline-lg text-primary mb-2 lg:mt-0 mt-8">
            Program Seçenekleri
          </h2>
          <div className="bg-surface-container-lowest rounded-2xl p-6 soft-shadow border border-outline-variant/50 h-full flex flex-col gap-6">
            {PROGRAMS.map((program, index) => (
              <div key={program.title}>
                {index > 0 && <div className="w-full h-px bg-outline-variant/20 mb-6" />}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                    <Icon name={program.icon} />
                  </div>
                  <div>
                    <h4 className="text-headline-md text-primary">{program.title}</h4>
                    <p className="text-body-md text-on-surface-variant mt-1">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
