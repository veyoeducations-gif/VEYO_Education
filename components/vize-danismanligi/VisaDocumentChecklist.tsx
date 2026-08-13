import Icon from "@/components/ui/Icon";

const DOCUMENTS = [
  {
    icon: "badge",
    title: "Pasaport ve Kimlik Belgeleri",
    description: "En az 6 ay geçerliliği olan pasaport ve gerekli kimlik fotokopileri.",
  },
  {
    icon: "school",
    title: "Kabul Mektubu",
    description: "Eğitim kurumundan alınan resmi kabul mektubu ve öğrenci belgesi.",
  },
  {
    icon: "account_balance",
    title: "Finansal Yeterlilik Belgeleri",
    description: "Banka hesap dökümü, sponsor beyanı veya burs belgesi gibi mali kanıtlar.",
  },
  {
    icon: "health_and_safety",
    title: "Sağlık Sigortası",
    description: "Hedef ülkenin talep ettiği kapsamda geçerli bir sağlık sigortası poliçesi.",
  },
  {
    icon: "translate",
    title: "Dil Yeterlilik Sonuçları",
    description: "IELTS, TOEFL veya ilgili ülkenin kabul ettiği dil sınavı sonuç belgesi.",
  },
  {
    icon: "gavel",
    title: "Adli Sicil Kaydı",
    description: "Bazı ülkelerin talep ettiği, güncel tarihli adli sicil belgesi.",
  },
];

export default function VisaDocumentChecklist() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
          Başvuru İçin Gerekli Belgeler
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          Hedef ülkeye göre değişiklik gösterebilen belge listesini, danışmanınız
          sizin için netleştirir. Genel çerçeve şu şekildedir:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DOCUMENTS.map((doc) => (
          <div
            key={doc.title}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container soft-shadow hover:-translate-y-1 transition-transform"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
              <Icon name={doc.icon} />
            </div>
            <h3 className="text-headline-md text-primary mb-2">{doc.title}</h3>
            <p className="text-body-md text-on-surface-variant text-sm">
              {doc.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
