"use client";

import { useRef, useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon";
import { sendFormEmail } from "@/lib/emailjs";

const COUNTRY_OPTIONS = [
  { value: "uk", label: "Birleşik Krallık" },
  { value: "europe", label: "Avrupa" },
  { value: "russia", label: "Rusya" },
  { value: "china", label: "Çin" },
  { value: "japan", label: "Japonya" },
  { value: "south_korea", label: "Güney Kore" },
  { value: "singapore", label: "Singapur" },
];

const EDUCATION_LEVEL_OPTIONS = [
  { value: "dil", label: "Dil Okulu" },
  { value: "lise", label: "Lise Değişim / Yaz Okulu" },
  { value: "lisans", label: "Lisans (Üniversite)" },
  { value: "yuksek_lisans", label: "Yüksek Lisans (Master)" },
];

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ApplicationForm() {
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
    <div className="lg:col-span-7">
      <div className="bg-surface-container-lowest rounded-xl soft-shadow border border-outline-variant/30 p-6 md:p-unit-lg glass-panel relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary-fixed rounded-full opacity-40 blur-3xl pointer-events-none" />

        {status === "success" ? (
          <div
            className="relative z-10 flex flex-col items-center text-center gap-6 py-10"
            role="status"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
              <Icon name="check_circle" className="!text-5xl text-secondary" />
            </div>
            <div className="space-y-3">
              <h2 className="text-headline-xl text-on-primary-fixed">
                Başvurunuz Alındı
              </h2>
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
            <h2 className="text-headline-xl text-on-primary-fixed mb-8 relative z-10">
              Başvuru Formu
            </h2>

            <form ref={formRef} className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
              <input type="hidden" name="form_type" value="Başvuru Formu (/basvuru)" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-label-md text-on-surface">
                    Ad-Soyad
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-label-md text-on-surface">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+90 (___) ___ __ __"
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-label-md text-on-surface">
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ornek@eposta.com"
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="country" className="text-label-md text-on-surface">
                    İlgilenilen Ülke
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      required
                      defaultValue=""
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all cursor-pointer"
                    >
                      <option disabled value="">
                        Ülke Seçiniz
                      </option>
                      {COUNTRY_OPTIONS.map((option) => (
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

                <div className="flex flex-col gap-2">
                  <label htmlFor="educationLevel" className="text-label-md text-on-surface">
                    Eğitim Düzeyi
                  </label>
                  <div className="relative">
                    <select
                      id="educationLevel"
                      name="educationLevel"
                      required
                      defaultValue=""
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all cursor-pointer"
                    >
                      <option disabled value="">
                        Düzey Seçiniz
                      </option>
                      {EDUCATION_LEVEL_OPTIONS.map((option) => (
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
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-label-md text-on-surface">
                  Mesajınız (Opsiyonel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Hedeflerinizden, not ortalamanızdan veya sormak istediklerinizden kısaca bahsedebilirsiniz..."
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md text-on-surface resize-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                />
              </div>

              <div className="flex items-start gap-3 mt-2">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 text-secondary bg-surface border-outline-variant rounded focus:ring-secondary cursor-pointer"
                />
                <label htmlFor="consent" className="text-sm leading-tight text-on-surface-variant cursor-pointer">
                  <a href="/kvkk" className="text-secondary hover:underline">
                    Kişisel Verilerin Korunması Kanunu (KVKK)
                  </a>{" "}
                  kapsamındaki aydınlatma metnini okudum ve kabul ediyorum.
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full mt-4 bg-secondary text-on-secondary text-label-md py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-secondary-container transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60"
              >
                <span>
                  {status === "submitting" ? "Gönderiliyor..." : "Başvuruyu Gönder"}
                </span>
                {status !== "submitting" && (
                  <Icon
                    name="arrow_forward"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>

              {status === "error" && (
                <p className="text-center text-sm text-error" role="alert">
                  Bir şeyler ters gitti, lütfen tekrar deneyin.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
