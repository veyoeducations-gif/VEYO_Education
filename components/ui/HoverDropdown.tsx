"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export interface HoverDropdownItem {
  label: string;
  href: string;
}

interface HoverDropdownProps {
  trigger: React.ReactNode;
  items: HoverDropdownItem[];
  panelWidthClassName?: string;
  align?: "left" | "right";
}

/**
 * Fare imleci (hover) ile açılan, klavye erişilebilirliği (focus/blur) ve
 * dokunmatik cihazlar için tıklama desteği olan animasyonlu bir açılır menü.
 *
 * Kapanma anında küçük bir gecikme (150ms) uygulanır; böylece kullanıcı fare
 * imlecini tetikleyiciden panelin üzerine taşırken aradaki mikro an
 * yüzünden menü aniden kapanmaz — akıcı bir geçiş deneyimi sağlar.
 *
 * Dokunmatik cihazlarda bazı tarayıcılar "tap" olayında hem mouseenter hem
 * click olayını art arda tetikleyebilir; tıklama burada bilinçli olarak
 * "her zaman aç" (toggle değil) olarak tasarlandı ve kapatma, dışarı
 * tıklama/dokunma ile sağlanıyor — böylece hover+click çakışmasından
 * kaynaklanan "anında kapanma" hatası oluşmuyor.
 */
export default function HoverDropdown({
  trigger,
  items,
  panelWidthClassName = "w-56",
  align = "left",
}: HoverDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openNow() {
    clearCloseTimer();
    setOpen(true);
  }

  function closeWithDelay() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  // Dışarı tıklama/dokunma: menüyü kapat (özellikle dokunmatik cihazlarda
  // hover davranışı olmadığı için birincil kapatma yöntemi budur).
  useEffect(() => {
    if (!open) return;

    function handleOutsideInteraction(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction);
    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={openNow}
      onMouseLeave={closeWithDelay}
      onFocus={openNow}
      onBlur={closeWithDelay}
    >
      <div onClick={openNow} className="inline-block cursor-pointer">
        {trigger}
      </div>

      <div
        className={`absolute top-full ${align === "left" ? "left-0" : "right-0"} pt-3 z-30 transition-all duration-200 ease-out ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-1 scale-95 pointer-events-none"
        }`}
      >
        <div
          className={`${panelWidthClassName} max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl border border-outline-variant/30 p-2 origin-top`}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-body-md text-on-surface-variant hover:text-secondary hover:bg-surface-container-low transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
