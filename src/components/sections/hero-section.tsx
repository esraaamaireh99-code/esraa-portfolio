import { ButtonLink } from "@/components/ui/button-link";
import { GlassCard } from "@/components/ui/glass-card";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { portfolio } from "@/data/portfolio";

const badgeStyles = {
  teal: "bg-teal-100 text-teal-900 ring-teal-200",
  purple: "bg-purple-100 text-purple-900 ring-purple-200",
  coral: "bg-rose-100 text-rose-900 ring-rose-200",
  cream: "bg-amber-100 text-amber-950 ring-amber-200",
  navy: "bg-slate-900 text-white ring-slate-700",
};

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <MotionReveal>
          <p className="inline-flex rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-800 ring-1 ring-white/80 backdrop-blur">
            {portfolio.person.title}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {portfolio.hero.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            {portfolio.hero.subheadline}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {portfolio.hero.badges.map((badge) => (
              <span
                key={badge.label}
                className={`rounded-full px-4 py-2 text-sm font-semibold ring-1 transition hover:-translate-y-0.5 ${badgeStyles[badge.tone]}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {portfolio.hero.actions.map((action) => (
              <ButtonLink key={action.href} href={action.href} download={action.download} variant={action.variant}>
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <GlassCard className="p-6">
            <div className="rounded-[1.25rem] bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-6 text-white shadow-lg shadow-slate-900/20">
              <p className="text-sm font-medium text-teal-200">Core specialties</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {portfolio.person.specialties.map((specialty) => (
                  <span key={specialty} className="rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/10">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              {portfolio.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/80 bg-white/65 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <dt className="text-sm text-slate-500">{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-slate-950">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 grid gap-3">
              {portfolio.experience.slice(0, 2).map((role) => (
                <div
                  key={role.company}
                  className="rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-50/90 to-purple-50/80 p-4"
                >
                  <p className="text-sm font-semibold text-slate-950">{role.position}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {role.company} &middot; {role.period}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </MotionReveal>
      </div>
    </section>
  );
}
