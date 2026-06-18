type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, inverse = false }: SectionHeadingProps) {
  return (
    <div className="min-w-0">
      <p className={`inline-flex max-w-full whitespace-normal rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] ${
        inverse ? "bg-white/[0.08] text-[#C4B5FD] ring-1 ring-[#A78BFA]/25" : "bg-white/[0.08] text-[#C4B5FD] ring-1 ring-[#A78BFA]/25"
      }`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 break-words text-[clamp(1.875rem,7vw,2.25rem)] font-semibold tracking-tight sm:text-4xl ${inverse ? "text-white" : "text-white"}`}>
        {title}
      </h2>
    </div>
  );
}
