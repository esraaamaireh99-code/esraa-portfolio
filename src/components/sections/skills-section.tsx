import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute left-1/3 top-16 h-72 w-72 rounded-full bg-[#A78BFA]/12 blur-3xl" />
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeading eyebrow="Skills" title="Practical tools for production systems" />
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((group, index) => (
            <MotionReveal key={group.category} delay={index * 0.05}>
              <article className="h-full min-w-0 rounded-[1.5rem] border border-[#A78BFA]/25 bg-white/[0.06] p-5 shadow-lg shadow-purple-950/25 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-[#A78BFA]/45 hover:shadow-xl hover:shadow-purple-950/35">
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="max-w-full break-words rounded-full border border-[#A78BFA]/25 bg-white/[0.06] px-3 py-1.5 text-sm font-medium text-[#C7C7D9] transition hover:-translate-y-0.5 hover:border-[#A78BFA]/60 hover:text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
