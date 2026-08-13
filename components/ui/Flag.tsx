import Image from "next/image";

interface FlagProps {
  code: string;
  name: string;
  className?: string;
  size?: number;
}

/**
 * public/flags/ altındaki SVG bayrak dosyalarını gösteren küçük yardımcı bileşen.
 * Emoji bayraklar bazı işletim sistemlerinde (özellikle Windows) ülke kısaltması
 * harfleri olarak render edildiği için, tutarlı görünüm adına gerçek SVG
 * dosyaları kullanılıyor.
 */
export default function Flag({ code, name, className = "", size = 24 }: FlagProps) {
  return (
    <span
      className={`inline-block relative overflow-hidden rounded shadow-sm ring-1 ring-black/10 shrink-0 ${className}`}
      style={{ width: size, height: size * 0.75 }}
    >
      <Image
        src={`/flags/${code}.svg`}
        alt={`${name} bayrağı`}
        fill
        unoptimized
        sizes={`${size}px`}
        className="object-cover"
      />
    </span>
  );
}
