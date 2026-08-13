"use client";

import { useRef, useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon";
import { sendFormEmail } from "@/lib/emailjs";

const SERVICE_OPTIONS = [
  "Yurt Dışı Üniversite Danışmanlığı (Lisans)",
  "Yurt Dışı Üniversite Danışmanlığı (Yüksek Lisans)",
  "Dil Okulları",
  "Yaz Okulu Programları",
  "Diğer",
];

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
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
    <section className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-16">
      <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 soft-shadow border border-surface-container relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        {status === "success" ? (
          <div className="relative z-10 flex flex-col items-center text-center gap-6 py-10">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
              <Icon name="check_circle" className="!text-5xl text-secondary" />
            </div>
            <div className="space-y-3">
              <h2 className="text-headline-lg text-primary">
                Başarılı Bir Şekilde Gönderildi
              </h2>
              <p className="text-body-lg text-on-surface-variant max-w-sm mx-auto">
                Talebiniz ekibimize ulaştı, danışmanlarımız en kısa sürede
                sizinle iletişime geçecek.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
            >
              Yeni bir talep gönder
              <Icon name="arrow_forward" className="text-sm" />
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-10 relative z-10">
              <h2 className="text-headline-lg text-primary mb-2">
                Eğitim Yolculuğunuza Başlayın
              </h2>
              <p className="text-body-md text-on-surface-variant">
                Ücretsiz ön değerlendirme için formu doldurun, danışmanlarımız
                sizinle iletişime geçsin.
              </p>
            </div>

            <form ref={formRef} className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <input type="hidden" name="form_type" value="Ana Sayfa - Ön Değerlendirme Formu" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-label-md text-on-surface mb-2">
                    İsim
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Adınız"
                    className="w-full bg-surface-bright border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-label-md text-on-surface mb-2">
                    Soyisim
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Soyadınız"
                    className="w-full bg-surface-bright border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-label-md text-on-surface mb-2">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ornek@email.com"
                    className="w-full bg-surface-bright border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-label-md text-on-surface mb-2">
                    Telefon Numarası
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+90 (5XX) XXX XX XX"
                    className="w-full bg-surface-bright border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-label-md text-on-surface mb-2">
                  Hizmet Seçimi
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-surface-bright border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none"
                >
                  <option disabled value="">
                    İlgilendiğiniz hizmeti seçin
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-secondary text-on-secondary text-label-md py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-secondary-container transition-all disabled:opacity-60"
              >
                {status === "submitting" ? "Gönderiliyor..." : "Gönder"}
              </button>

              {status === "error" && (
                <p className="text-center text-sm text-error" role="alert">
                  Bir şeyler ters gitti, lütfen tekrar deneyin veya
                  WhatsApp&apos;tan bize ulaşın.
                </p>
              )}

              <p className="text-xs text-center text-outline mt-4">
                Kişisel verileriniz KVKK kapsamında korunmaktadır.
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
