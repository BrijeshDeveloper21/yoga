export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-5">
      <div className="h-px w-8" style={{ background: "#c4a46b" }} />
      <span className="text-xs tracking-[0.32em] uppercase"
        style={{ fontFamily: "var(--font-sans)", color: "#c4a46b" }}>
        {label}
      </span>
      <div className="h-px w-8" style={{ background: "#c4a46b" }} />
    </div>
  );
}
