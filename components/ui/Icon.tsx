type IconProps = {
  name: string;
  className?: string;
};

/**
 * Material Symbols Outlined ikon setini saran küçük bir yardımcı bileşen.
 * Kullanım: <Icon name="school" className="text-4xl text-secondary" />
 */
export default function Icon({ name, className = "" }: IconProps) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
