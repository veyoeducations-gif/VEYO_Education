import Icon from "@/components/ui/Icon";

const HIGHLIGHTS = [
  "Gerçekçi ve Şeffaf Yönlendirme",
  "Kişiselleştirilmiş İletişim",
  "7/24 Kesintisiz Destek",
];

const NOTES = [
  { icon: "school", text: "Oxford Üniversitesi Kabulü" },
  { icon: "flight", text: "Kanada Vizesi Onaylandı" },
  { icon: "apartment", text: "Londra Konaklama Ayarlandı" },
];

export default function ProcessWhyVeyo() {
  return (
    <section className="bg-surface-container-low py-unit-xl my-unit-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary mb-6">
              <Icon name="workspace_premium" className="!text-4xl" />
            </div>
            <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary-container mb-4">
              Neden VEYO Education?
            </h2>
            <h3 className="text-headline-md text-secondary mb-4">
              Deneyim Odaklı Yaklaşım
            </h3>
            <p className="text-body-md text-on-surface-variant mb-6">
              VEYO ekibi olarak, sadece danışman değil, aynı yollardan geçmiş
              eski uluslararası öğrencileriz. Yaşadığınız stresi, endişeleri ve
              beklentileri çok iyi biliyoruz. Kitabi bilgilerle değil, bizzat
              yaşanmış tecrübelerle size rehberlik ediyoruz.
            </p>
            <ul className="flex flex-col gap-3">
              {HIGHLIGHTS.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <Icon name="check_circle" className="text-secondary" />
                  <span className="text-label-md text-primary-container">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-surface to-surface-container rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Icon name="language" className="!text-[20rem]" />
              </div>
              <div className="relative h-full flex flex-col justify-between">
                {NOTES.map((note, index) => (
                  <div
                    key={note.text}
                    className={`bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white max-w-xs transition-transform hover:rotate-0 ${
                      index === 0
                        ? "self-start -rotate-2"
                        : index === 1
                          ? "self-end rotate-2"
                          : "self-center -rotate-1"
                    }`}
                  >
                    <p className="text-label-md text-primary-container flex items-center gap-2">
                      <Icon name={note.icon} className="text-secondary" />
                      {note.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
