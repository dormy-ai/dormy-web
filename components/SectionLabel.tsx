/*
 * Design: Editorial Warmth
 * Section label: coral dot + uppercase text, consistent across all sections
 */

interface SectionLabelProps {
  text: string;
  light?: boolean;
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div className={`w-2 h-2 rounded-full ${light ? "bg-coral-light" : "bg-coral"}`} />
      <span
        className={`text-xs font-semibold tracking-[0.15em] uppercase ${
          light ? "text-coral-light" : "text-coral"
        }`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {text}
      </span>
    </div>
  );
}
