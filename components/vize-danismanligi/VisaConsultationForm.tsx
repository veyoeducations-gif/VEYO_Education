"use client";

import { useRef, useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon";
import { sendFormEmail } from "@/lib/emailjs";

const REGION_OPTIONS = [
  { value: "europe", label: "Avrupa" },
  { value: "russia", label: "Rusya" },
  { value: "china", label: "Çin" },
  { value: "japan", label: "Japonya" },
  { value: "south_korea", label: "Güney Kore" },
  { value: "singapore", label: "Singapur" },
];

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function VisaConsultationForm() {
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
    <section className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-24">
      <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 soft-shadow border border-surface-container relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        {status === "success" ? (
          <div className="relative z-10 flex flex-col items-center text-center gap-6 py-6" role="status">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
              <Icon name="check_circle" className="!text-5xl text-secondary" />
            </div>
            <div className="space-y-3">
              <h2 className="text-headline-lg text-primary">Başvurunuz Alındı</h2>
              <p className="text-body-lg text-on-surface-variant max-w-sm mx-auto">
                Başvurunuz ekibimize ulaştı, size en kısa sürede dönüş yapacağız.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
            >
              Yeni bir başvuru gönder
              <Icon name="arrow_forward" className="text-sm" />
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-10 relative z-10">
              <h2 className="text-headline-lg text-primary mb-2">
                Vize Danışmanlığı Başvuru Formu
              </h2>
              <p className="text-body-md text-on-surface-variant">
                Formu doldurun, vize danışmanınız evraklarınızı incelesin ve size
                özel bir yol haritası çizsin.
              </p>
            </div>

            <form ref={formRef} className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="form_type"
                value="Vize Danışmanlığı Formu (/vize-danismanligi)"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="visaFirstName" className="block text-label-md text-on-surface mb-2">
                    İsim
                  </label>
                  <input
                    id="visaFirstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Adınız"
                    className="w-full bg-surface-bright border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline"
                  />
                </div>
                <div>
                  <label htmlFor="visaLastName" className="block text-label-md text-on-surface mb-2">
                    Soyisim
                  </label>
                  <input
                    id="visaLastName"
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
                  <label htmlFor="visaEmail" className="block text-label-md text-on-surface mb-2">
                    E-mail
                  </label>
                  <input
                    id="visaEmail"
                    name="email"
                    type="email"
                    required
                    placeholder="ornek@email.com"
                    className="w-full bg-surface-bright border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline"
                  />
                </div>
                <div>
                  <label htmlFor="visaPhone" className="block text-label-md text-on-surface mb-2">
                    Telefon Numarası
                  </label>
                  <input
                    id="visaPhone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+90 (5XX) XXX XX XX"
                    className="w-full bg-surface-bright border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="visaRegion" className="block text-label-md text-on-surface mb-2">
                  Vize Almak İstediğiniz Ülke/Bölge
                </label>
                <div className="relative">
                  <select
                    id="visaRegion"
                    name="region"
                    required
                    defaultValue=""
                    className="w-full bg-surface-bright border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none"
                  >
                    <option disabled value="">
                      Ülke/Bölge Seçin
                    </option>
                    {REGION_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <Icon
                    name="expand_more"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="visaMessage" className="block text-label-md text-on-surface mb-2">
                  Mesajınız (Opsiyonel)
                </label>
                <textarea
                  id="visaMessage"
                  name="message"
                  rows={4}
                  placeholder="Vize sürecinizle ilgili sormak istediklerinizi kısaca yazabilirsiniz..."
                  className="w-full bg-surface-bright border border-outline-variant rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="visaConsent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 text-secondary bg-surface-bright border-outline-variant rounded focus:ring-secondary cursor-pointer"
                />
                <label htmlFor="visaConsent" className="text-sm leading-tight text-on-surface-variant cursor-pointer">
                  <a href="/kvkk" className="text-secondary hover:underline">
                    Kişisel Verilerin Korunması Kanunu (KVKK)
                  </a>{" "}
                  kapsamındaki aydınlatma metnini okudum ve kabul ediyorum.
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-secondary text-on-secondary text-label-md py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-secondary-container transition-all disabled:opacity-60"
              >
                {status === "submitting" ? "Gönderiliyor..." : "Formu Gönder"}
              </button>

              {status === "error" && (
                <p className="text-center text-sm text-error" role="alert">
                  Bir şeyler ters gitti, lütfen tekrar deneyin.
                </p>
              )}

              <p className="text-xs text-center text-outline">
                Kişisel verileriniz KVKK kapsamında korunmaktadır.
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
