import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

const accents = [
  "from-teal-400 to-purple-400",
  "from-rose-400 to-amber-300",
  "from-purple-400 to-slate-700",
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Building across frontend, backend, and mobile" />
        <div className="mt-8 grid gap-6">
          {portfolio.experience.map((role, index) => (
            <MotionReveal key={`${role.company}-${role.period}`} delay={index * 0.08}>
              <article className="group relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/75 p-6 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-900/10">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accents[index % accents.length]}`} />
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{role.company}</h3>
                    <p className="mt-1 font-medium text-slate-700">{role.position}</p>
                    <p className="mt-1 text-sm text-slate-500">{role.location}</p>
                  </div>
                  <p className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800 ring-1 ring-teal-100">
                    {role.period}
                  </p>
                </div>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-teal-500 to-purple-500" />
                      <span>{highlight}</span>
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
