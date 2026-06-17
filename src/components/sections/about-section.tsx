import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-16 sm:px-8 lg:px-12">
      <MotionReveal className="mx-auto max-w-5xl">
        <div className="rounded-[1.75rem] border border-white/70 bg-white/70 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-xl sm:p-8">
          <SectionHeading eyebrow="About" title="Detail-oriented full stack engineering" />
          <p className="mt-6 text-lg leading-9 text-slate-700">{portfolio.about}</p>
        </div>
      </MotionReveal>
    </section>
  );
}
