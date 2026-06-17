import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

const skillAccents = [
  "border-teal-200 bg-teal-50/80",
  "border-purple-200 bg-purple-50/80",
  "border-rose-200 bg-rose-50/80",
  "border-amber-200 bg-amber-50/80",
  "border-slate-200 bg-slate-50/80",
  "border-cyan-200 bg-cyan-50/80",
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="Practical tools for production systems" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((group, index) => (
            <MotionReveal key={group.category} delay={index * 0.05}>
              <article className={`h-full rounded-[1.5rem] border p-5 shadow-lg shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl ${skillAccents[index % skillAccents.length]}`}>
                <h3 className="text-lg font-semibold text-slate-950">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-white/90 transition hover:-translate-y-0.5 hover:text-slate-950">
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
