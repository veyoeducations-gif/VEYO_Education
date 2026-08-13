import Image from "next/image";
import Icon from "@/components/ui/Icon";

const SOCIAL_LINKS = [
  { icon: "video_library", label: "YouTube", href: "https://www.youtube.com/@Veyoeducations" },
  { icon: "photo_camera", label: "Instagram", href: "https://instagram.com/veyoeducations" },
  { icon: "chat", label: "WhatsApp", href: "https://wa.me/393489094166" },
];

const CONTACT_INFO = [
  {
    icon: "mail",
    label: "veyoeducations@gmail.com",
    href: "mailto:veyoeducations@gmail.com?subject=Bilgi%20Talebi%20-%20VEYO%20Education",
  },
];

const FOOTER_LINKS = [
  { label: "Hizmetler", href: "/hizmetlerimiz" },
  { label: "Ülkeler", href: "/ulkeler" },
  { label: "Sürecimiz", href: "/surecimiz" },
  { label: "Kurumsal", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "KVKK", href: "/kvkk" },
];

export default function Footer() {
  return (
    <>
      <section className="bg-surface-container-low py-24 border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center max-w-4xl mx-auto">
            <div className="space-y-6 flex flex-col items-center text-center">
              <Image
                src="/logo.svg"
                alt="VEYO Education Logo"
                width={160}
                height={56}
                className="h-14 w-auto object-contain"
              />
              <p className="text-body-md text-on-surface-variant max-w-xs">
                Geleceğinizi dünyanın en iyi üniversitelerinde inşa etmek için
                yanınızdayız. Profesyonel danışmanlık ile küresel vizyonunuzu
                gerçeğe dönüştürün.
              </p>
              <div className="flex flex-col gap-2">
                {CONTACT_INFO.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="inline-flex items-center gap-2 text-body-md text-on-surface-variant hover:text-secondary transition-colors"
                  >
                    <Icon name={info.icon} className="text-secondary text-lg" />
                    {info.label}
                  </a>
                ))}
              </div>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-on-secondary transition-all duration-300"
                  >
                    <Icon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-primary-container p-8 rounded-3xl text-on-primary-container">
              <h3 className="text-headline-md text-on-primary mb-4">
                Danışmanlık Alın
              </h3>
              <p className="text-body-md mb-6 opacity-80">
                Hayalinizdeki üniversite için ilk adımı bugün atın.
              </p>
              <a
                href="https://wa.me/393489094166"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-secondary text-on-secondary text-label-md py-3 rounded-xl hover:bg-secondary-container transition-colors flex items-center justify-center"
              >
                Randevu Oluştur
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full px-margin-mobile md:px-margin-desktop py-unit-lg flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container-highest border-t border-outline-variant/20">
        <p className="text-body-md text-on-surface-variant">
          © {new Date().getFullYear()} VEYO Education. Tüm Hakları Saklıdır.
        </p>
        <div className="flex flex-wrap gap-6 justify-start md:justify-end">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
