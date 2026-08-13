"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

const FAQ_ITEMS = [
  {
    question: "Öğrenci vizesi başvurusu ne kadar sürer?",
    answer:
      "Süre hedef ülkeye ve dönemin yoğunluğuna göre değişir; genellikle birkaç haftadan bir buçuk aya kadar sürebilir. Danışmanınız, başvuru öncesinde size özel bir zaman planlaması yapar.",
  },
  {
    question: "Vize reddi riskini nasıl azaltabilirim?",
    answer:
      "Ret kararlarının büyük bölümü eksik veya tutarsız evraktan kaynaklanır. Başvurunuzu göndermeden önce yaptığımız detaylı evrak analizi, bu riski en aza indirmeyi hedefler.",
  },
  {
    question: "Finansal yeterlilik için ne kadar bakiye gösterilmeli?",
    answer:
      "Bu miktar hedef ülkeye, eğitim programının süresine ve yaşam maliyetlerine göre değişir. Danışmanınız, sizin durumunuza özel güncel rakamları netleştirir.",
  },
  {
    question: "Mülakata nasıl hazırlanacağım?",
    answer:
      "Mülakat gerektiren ülkeler için birebir simülasyon seansları düzenliyoruz; sık sorulan sorular ve olası zorlayıcı senaryolar üzerinden pratik yaparak özgüveninizi artırıyoruz.",
  },
];

export default function VisaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <h2 className="text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Vize süreciyle ilgili en çok merak edilen sorular ve yanıtları.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-surface-container-lowest rounded-2xl border border-surface-container soft-shadow overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-headline-md text-primary">
                    {item.question}
                  </span>
                  <Icon
                    name={isOpen ? "remove" : "add"}
                    className="text-secondary shrink-0"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-body-md text-on-surface-variant">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
