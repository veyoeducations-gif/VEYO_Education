const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/393489094166",
    external: true,
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/veyoeducations",
    external: true,
    icon: (
      <>
        <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    label: "E-posta",
    href: "mailto:veyoeducations@gmail.com?subject=Bilgi%20Talebi%20-%20VEYO%20Education",
    external: false,
    icon: (
      <>
        <rect height="16" rx="2" width="20" x="2" y="4" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Veyoeducations",
    external: true,
    icon: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </>
    ),
  },
];

export default function ContactHero() {
  return (
    <section className="relative flex-grow flex items-center justify-center overflow-hidden py-unit-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-primary-fixed/20 to-surface-container pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-fixed/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-fixed/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-surface-dim/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="glass-panel rounded-[2rem] p-10 md:p-20 flex flex-col items-center justify-center w-full shadow-[0_8px_32px_0_rgba(15,23,42,0.05)] transition-all duration-500 hover:shadow-[0_12px_48px_0_rgba(15,23,42,0.08)]">
          <div className="text-center mb-12">
            <h1 className="text-headline-2xl text-on-surface mb-4 tracking-tight">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg mx-auto">
              Eğitim yolculuğunuzda size rehberlik etmek için buradayız.
              WhatsApp, e-posta veya sosyal medya üzerinden bize
              dilediğiniz zaman ulaşabilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 w-full">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                aria-label={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="social-btn w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border border-outline-variant/30 flex items-center justify-center text-on-surface-variant shadow-sm group"
              >
                <svg
                  className="transition-colors duration-300"
                  fill="none"
                  height="36"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="36"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
