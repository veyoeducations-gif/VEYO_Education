const TIMELINE_STEPS = [
  {
    number: 1,
    period: "Eylül - Ekim",
    title: "Araştırma & Hazırlık",
    description: "Üniversite seçimi ve dil yeterlilik sınavları (IELTS/TOEFL).",
    style: "active" as const,
  },
  {
    number: 2,
    period: "Kasım - Aralık",
    title: "Erken Başvurular",
    description: "Niyet mektupları ve referansların tamamlanıp gönderilmesi.",
    style: "active" as const,
  },
  {
    number: 3,
    period: "Ocak - Şubat",
    title: "Normal Başvurular",
    description: "Kalan kontenjanlar için standart başvuru dönemi.",
    style: "muted" as const,
  },
  {
    number: 4,
    period: "Mart ve Sonrası",
    title: "Geç Başvurular",
    description: "Sınırlı seçenekler, düşük burs ihtimali ve stresli vize süreci.",
    style: "faint" as const,
  },
];

const BADGE_STYLES = {
  active: "bg-secondary text-on-secondary",
  muted: "bg-secondary-container text-on-secondary",
  faint: "bg-surface-container-high text-on-surface-variant",
};

const CARD_OPACITY = {
  active: "",
  muted: "opacity-70",
  faint: "opacity-50",
};

export default function EarlyApplicationTimeline() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-unit-xl">
      <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 border border-outline-variant/20 soft-shadow">
        <h2 className="text-headline-lg text-primary mb-10 text-center">
          İdeal Başvuru Takvimi
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-surface-container-high -translate-y-1/2 z-0" />
          <div className="md:hidden absolute top-0 left-6 w-1 h-full bg-surface-container-high z-0" />

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
            {TIMELINE_STEPS.map((step) => (
              <div
                key={step.number}
                className="flex md:flex-col items-center gap-4 md:w-1/4"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 shadow-md ${BADGE_STYLES[step.style]}`}
                >
                  {step.number}
                </div>
                <div
                  className={`md:text-center bg-white p-4 rounded-xl shadow-sm border border-outline-variant/10 w-full relative ${CARD_OPACITY[step.style]}`}
                >
                  <h4
                    className={`text-label-md mb-1 ${step.style === "active" ? "text-secondary" : "text-on-surface-variant"}`}
                  >
                    {step.period}
                  </h4>
                  <h5 className="text-headline-md text-primary mb-2 text-sm">
                    {step.title}
                  </h5>
                  <p className="text-body-md text-on-surface-variant text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
