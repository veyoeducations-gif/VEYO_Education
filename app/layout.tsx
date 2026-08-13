import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VEYO Education - Geleceğinizi Dünyanın En İyi Üniversitelerinde İnşa Edin",
  description:
    "VEYO Education ile yurt dışında lisans ve yüksek lisans eğitimine adım atın. Profesyonel danışmanlık hizmetlerimizle küresel vizyonunuzu gerçeğe dönüştürün.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={plusJakartaSans.variable}>
      <head>
        {/* Material Symbols - ikon seti için gerekli, next/font kapsamı dışında */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
