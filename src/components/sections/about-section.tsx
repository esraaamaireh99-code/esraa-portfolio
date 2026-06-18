import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-x-clip px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute left-[-8rem] top-8 h-72 w-72 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
      <MotionReveal className="mx-auto w-full max-w-5xl min-w-0">
        <div className="min-w-0 rounded-[1.75rem] border border-[#A78BFA]/25 bg-white/[0.06] p-5 shadow-2xl shadow-purple-950/30 backdrop-blur-xl sm:p-8">
          <SectionHeading eyebrow="About" title="Detail-oriented full stack engineering" />
          <p className="mt-6 break-words text-base leading-8 text-[#C7C7D9] sm:text-lg sm:leading-9">{portfolio.about}</p>
        </div>
      </MotionReveal>
    </section>
  );
}
