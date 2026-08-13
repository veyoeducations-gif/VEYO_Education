import Icon from "@/components/ui/Icon";

const EDGE_CARDS = [
  {
    icon: "diversity_3",
    title: "Elite Mentorship",
    description:
      "Sadece başvuru sürecinde değil, akademik gelişiminizde de yanınızdayız. Alanında uzman mentörlerimizle potansiyelinizi maksimize edin.",
  },
  {
    icon: "architecture",
    title: "Portfolio Strategy",
    description:
      "Özgeçmişinizden motivasyon mektubunuza kadar her detay, başvurduğunuz üniversitenin karakterine uygun olarak stratejik bir şekilde kurgulanır.",
  },
  {
    icon: "self_improvement",
    title: "Application Psychology",
    description:
      "Kabul kurullarının ne aradığını biliyoruz. Başvurunuzun psikolojik etkisini yönetiyor, benzersiz hikayenizi en etkileyici şekilde anlatıyoruz.",
  },
];

export default function LisansVeyoEdge() {
  return (
    <section className="py-24 md:py-40 px-margin-mobile md:px-margin-desktop bg-primary text-white">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            VEYO Farkı: Butik ve Elit Danışmanlık
          </h2>
          <p className="text-primary-fixed-dim/70 max-w-2xl mx-auto text-lg">
            Biz bir eğitim acentesi değiliz; geleceğinizi titizlikle inşa eden
            akademik mimarlarız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {EDGE_CARDS.map((card) => (
            <div
              key={card.title}
              className="group p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-all duration-500"
            >
              <Icon name={card.icon} className="!text-4xl text-secondary mb-8 block" />
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-primary-fixed-dim/60 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
