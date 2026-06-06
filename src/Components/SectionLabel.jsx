export default function SectionLabel({ label }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-primary mb-4">
      <span className="w-8 h-px bg-primary" />
      {label}
      <span className="w-8 h-px bg-primary" />
    </span>
  );
}
