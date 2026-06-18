import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute right-[-10rem] top-20 h-80 w-80 rounded-full bg-[#8B5CF6]/18 blur-3xl" />
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeading eyebrow="Experience" title="Building across frontend, backend, and mobile" />
        <div className="mt-8 grid gap-6">
          {portfolio.experience.map((role, index) => (
            <MotionReveal key={`${role.company}-${role.period}`} delay={index * 0.08}>
              <article className="group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-[#A78BFA]/25 bg-white/[0.06] p-5 shadow-lg shadow-purple-950/25 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-[#A78BFA]/45 hover:shadow-2xl hover:shadow-purple-950/40 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent" />
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <h3 className="break-words text-xl font-semibold text-white">{role.company}</h3>
                    <p className="mt-1 break-words font-medium text-[#C7C7D9]">{role.position}</p>
                    <p className="mt-1 text-sm text-[#C7C7D9]/70">{role.location}</p>
                  </div>
                  <p className="w-fit max-w-full whitespace-normal rounded-full bg-white/[0.06] px-4 py-2 text-sm font-semibold text-[#C4B5FD] ring-1 ring-[#A78BFA]/25">
                    {role.period}
                  </p>
                </div>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-[#C7C7D9] md:grid-cols-2">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.9)]" />
                      <span className="min-w-0 break-words">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
