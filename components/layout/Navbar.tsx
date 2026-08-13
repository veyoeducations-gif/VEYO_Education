"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import HoverDropdown from "@/components/ui/HoverDropdown";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Ülkeler", href: "/ulkeler" },
  {
    label: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    dropdown: [
      { label: "Lisans", href: "/lisans" },
      { label: "Yüksek Lisans", href: "/yuksek-lisans" },
      { label: "Dil Okulları", href: "/dil-okullari" },
      { label: "Öğrenci Vize İşlemleri", href: "/vize-danismanligi" },
      { label: "IELTS Hazırlık", href: "/ielts" },
      { label: "Burs Fırsatları", href: "/burslar" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  // Sayfa değiştiğinde mobil menüyü otomatik kapat.
  useEffect(() => {
    setMobileOpen(false);
    setMobileSubOpen(false);
  }, [pathname]);

  // Menü açıkken arka planın kaymasını önle.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-unit-sm">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo.svg"
            alt="VEYO Education Logo"
            width={120}
            height={40}
            className="h-9 md:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Masaüstü navigasyon */}
        <div className="hidden md:flex gap-unit-lg items-center">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            const linkClassName = isActive
              ? "text-body-md font-bold text-secondary border-b-2 border-secondary pb-1"
              : "text-body-md text-on-surface-variant hover:text-secondary transition-colors";

            if (!link.dropdown) {
              return (
                <Link key={link.label} href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              );
            }

            return (
              <HoverDropdown
                key={link.label}
                panelWidthClassName="w-64"
                trigger={
                  <Link href={link.href} className={`${linkClassName} flex items-center gap-1`}>
                    {link.label}
                    <Icon name="expand_more" className="text-base" />
                  </Link>
                }
                items={link.dropdown}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-2 md:gap-0">
          <Link
            href="/basvuru"
            className="hidden sm:inline-flex text-label-md bg-secondary text-on-secondary px-unit-lg py-unit-sm rounded-xl hover:shadow-md transition-all duration-300 active:scale-95"
          >
            Hemen Başvur
          </Link>

          {/* Mobil hamburger butonu */}
          <button
            type="button"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-primary hover:bg-surface-container-low active:scale-95 transition-all"
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="!text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobil açılır menü paneli */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-outline-variant/30 bg-white/95 backdrop-blur-md ${
          mobileOpen ? "max-h-[calc(100vh-64px)]" : "max-h-0"
        }`}
      >
        <div className="overflow-y-auto max-h-[calc(100vh-64px)] px-margin-mobile py-unit-md flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            const baseClassName = `flex-1 py-3 text-body-lg ${
              isActive ? "text-secondary font-bold" : "text-on-surface"
            }`;

            if (!link.dropdown) {
              return (
                <Link key={link.label} href={link.href} className={baseClassName}>
                  {link.label}
                </Link>
              );
            }

            return (
              <div key={link.label} className="border-b border-outline-variant/10 last:border-none">
                <div className="flex items-center">
                  <Link href={link.href} className={baseClassName}>
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    aria-label="Alt menüyü aç/kapat"
                    aria-expanded={mobileSubOpen}
                    onClick={() => setMobileSubOpen((prev) => !prev)}
                    className="w-11 h-11 flex items-center justify-center text-on-surface-variant shrink-0"
                  >
                    <Icon
                      name="expand_more"
                      className={`text-2xl transition-transform duration-300 ${mobileSubOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    mobileSubOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col pb-2 pl-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="py-2.5 text-body-md text-on-surface-variant hover:text-secondary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Link
            href="/basvuru"
            className="mt-3 w-full text-center text-label-md bg-secondary text-on-secondary px-unit-lg py-3.5 rounded-xl active:scale-95 transition-all"
          >
            Hemen Başvur
          </Link>
        </div>
      </div>
    </nav>
  );
}
