import Image from "next/image";
import Icon from "@/components/ui/Icon";

const REASONS = [
  {
    icon: "public",
    title: "Küresel Vatandaşlık",
    description:
      "Farklı kültürleri içselleştirmiş, dünya meselelerine hakim ve global bir vizyonla donanmış bireyler olarak mezun olun.",
  },
  {
    icon: "psychology",
    title: "Disiplinlerarası Yaklaşım",
    description:
      "Modern eğitim modelleriyle sadece teorik bilgi değil, eleştirel düşünme ve problem çözme yetkinlikleri kazanın.",
  },
  {
    icon: "star",
    title: "Prestijli Mezuniyet Ağı",
    description:
      "Dünyanın önde gelen üniversitelerinin seçkin topluluklarının bir parçası olarak hayat boyu sürecek profesyonel bir network edinin.",
  },
];

export default function LisansWhyAbroad() {
  return (
    <section className="py-unit-xl md:py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4">
              Geleceği Tasarlayın
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
              Neden Yurt Dışında <br />
              Lisans Eğitimi?
            </h2>
            <p className="text-on-surface-variant text-lg mb-12">
              Global bir dünyada, sadece bilgi sahibi olmak yetmez. Farklı
              perspektiflere sahip olmak, sınırları aşmak ve prestijli bir
              ağın parçası olmak başarının anahtarıdır.
            </p>

            <div className="space-y-8">
              {REASONS.map((reason) => (
                <div key={reason.title} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                    <Icon name={reason.icon} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{reason.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <Image
                src="/images/lisans-why-abroad-v3.jpg"
                alt="Avrupa'da bir üniversite kampüsünde kitaplarıyla yürüyen bir öğrenci"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
