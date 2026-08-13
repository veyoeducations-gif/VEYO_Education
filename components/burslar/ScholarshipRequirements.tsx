import Icon from "@/components/ui/Icon";

const REQUIREMENTS = [
  "Belirli bir akademik ortalama (genellikle not döküm belgesiyle kanıtlanan)",
  "Dil yeterlilik sınav sonucu (IELTS/TOEFL gibi)",
  "Niyet mektubu (motivation letter) ve kariyer hedeflerinizi anlatan bir metin",
  "Akademik veya profesyonel referans mektupları",
  "Bazı burslarda ayrı bir mülakat veya ek deneme/sınav süreci",
  "Başvuru takvimine uygun, zamanında tamamlanmış bir dosya",
];

export default function ScholarshipRequirements() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
            Başvuru İçin Genel Şartlar
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-4">
            Her burs programının kendi kriterleri olsa da, güçlü bir başvuru
            dosyası genellikle aşağıdaki unsurları içerir:
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {REQUIREMENTS.map((requirement) => (
            <div key={requirement} className="flex items-start gap-3">
              <Icon name="check_circle" className="text-secondary mt-1 shrink-0" />
              <span className="text-body-lg text-on-surface-variant">{requirement}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
