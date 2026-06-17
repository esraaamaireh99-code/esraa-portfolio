type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, inverse = false }: SectionHeadingProps) {
  return (
    <div>
      <p className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
        inverse ? "bg-white/10 text-purple-100 ring-1 ring-white/15" : "bg-[#F3E8FF] text-[#7E22CE] ring-1 ring-[#E9D5FF]"
      }`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${inverse ? "text-white" : "text-[#1E1B4B]"}`}>
        {title}
      </h2>
    </div>
  );
}
