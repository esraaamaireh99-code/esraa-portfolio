import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="relative px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-[-8rem] top-8 h-72 w-72 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
      <MotionReveal className="mx-auto max-w-5xl">
        <div className="rounded-[1.75rem] border border-[#A78BFA]/25 bg-white/[0.06] p-6 shadow-2xl shadow-purple-950/30 backdrop-blur-xl sm:p-8">
          <SectionHeading eyebrow="About" title="Detail-oriented full stack engineering" />
          <p className="mt-6 text-lg leading-9 text-[#C7C7D9]">{portfolio.about}</p>
        </div>
      </MotionReveal>
    </section>
  );
}
