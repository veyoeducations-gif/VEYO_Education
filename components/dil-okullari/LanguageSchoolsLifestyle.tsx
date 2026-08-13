"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { sendFormEmail } from "@/lib/emailjs";

type SubmitState = "idle" | "submitting" | "success" | "error";

const HIGHLIGHTS = [
  "Özenle seçilmiş aile yanı konaklamalar",
  "Güvenli ve modern kampüs içi yurtlar",
  "Zengin kültürel ve sosyal aktiviteler",
];

export default function LanguageSchoolsLifestyle() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      if (formRef.current) {
        await sendFormEmail(formRef.current);
      }
      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS gönderim hatası:", error);
      setStatus("error");
    }
  }

  return (
    <section
      id="danismanlik"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl scroll-mt-24"
    >
      <div className="relative rounded-3xl overflow-hidden bg-primary-container text-white p-8 md:p-12">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmg27EGsRJ_fkPaWgyfg7Dr2xFDgldWLBpdrVEtECr8OckgYQ_CJDSjoycedwagdNOzTp5rRx4U6QYoZ6yfkyvUiAqL-Z6BYZke0G_xKtGFKoIhlXnqUlR17YO5XWBoo4C3L3PfQ_qusZkxcelXL3DKqPRt-HMjjSg3Lxj7KSwZHFwh30VMrOjW0AKAxWt1yxoq6uIueadIE8PKm-1nKeyf_l18s61wqFUxEET0wGg6JWouV2NujsrhQ0uZPE5t0ocntVr0RwAHTdh"
          alt="Modern bir öğrenci lounge alanının soyut mimari görünümü"
          fill
          sizes="100vw"
          className="object-cover opacity-20 mix-blend-overlay"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-unit-xl items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full border border-secondary bg-secondary/20 text-secondary-fixed text-label-md mb-4">
              Yaşam &amp; Deneyim
            </span>
            <h2 className="text-headline-xl mb-6">Konaklama ve Sosyal Hayat</h2>
            <p className="text-body-lg text-primary-fixed-dim mb-8">
              Eğitim sadece sınıfta bitmez. Seçkin aile yanı konaklamaları veya
              modern öğrenci yurtlarında kalarak, yerel kültürü yaşayın. Hafta
              sonu gezileri ve sosyal kulüplerle unutulmaz anılar biriktirin.
            </p>
            <div className="flex flex-col gap-4">
              {HIGHLIGHTS.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <Icon name="check_circle" className="text-secondary-fixed" />
                  <span className="text-body-md text-white/90">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl border-white/10 shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full blur-3xl opacity-50 pointer-events-none" />

            {status === "success" ? (
              <div className="relative z-10 flex flex-col items-center text-center gap-4 py-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="check_circle" className="!text-4xl text-secondary-fixed" />
                </div>
                <h3 className="text-headline-md text-white">Başvurunuz Alındı</h3>
                <p className="text-body-md text-white/80 max-w-xs">
                  Başvurunuz ekibimize ulaştı, size en kısa sürede dönüş
                  yapacağız.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 inline-flex items-center gap-2 text-secondary-fixed font-semibold hover:gap-3 transition-all"
                >
                  Yeni bir talep gönder
                  <Icon name="arrow_forward" className="text-sm" />
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-headline-md text-white mb-6 relative z-10">
                  Hemen Danışmanlık Alın
                </h3>
                <form ref={formRef} className="flex flex-col gap-4 relative z-10" onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="form_type"
                    value="Dil Okulları - Danışmanlık Formu"
                  />
                  <div>
                    <label htmlFor="lsName" className="text-label-md text-white/80 block mb-1">
                      Adınız Soyadınız
                    </label>
                    <input
                      id="lsName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Örn: Ali Yılmaz"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lsEmail" className="text-label-md text-white/80 block mb-1">
                      E-posta Adresiniz
                    </label>
                    <input
                      id="lsEmail"
                      name="email"
                      type="email"
                      required
                      placeholder="mail@ornek.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-4 bg-white text-primary-container text-label-md px-6 py-4 rounded-xl hover:bg-surface-variant transition-colors active:scale-95 w-full font-bold disabled:opacity-60"
                  >
                    {status === "submitting" ? "Gönderiliyor..." : "Ücretsiz Görüşme Ayarla"}
                  </button>
                  {status === "error" && (
                    <p className="text-center text-sm text-tertiary-fixed" role="alert">
                      Bir şeyler ters gitti, lütfen tekrar deneyin.
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
