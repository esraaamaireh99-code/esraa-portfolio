import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-950 px-5 py-16 text-white sm:px-8 lg:px-12">
      <MotionReveal className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Contact" title="Available for full stack opportunities" inverse />
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Reach out for developer roles, freelance projects, CMS platforms, API integrations, or full stack product development.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {portfolio.contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-200 hover:-translate-y-1 hover:border-teal-300 hover:bg-white/10"
            >
              <span className="text-sm text-slate-400">{item.label}</span>
              <span className="mt-2 block font-semibold text-white">{item.value}</span>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href={`mailto:${portfolio.contact.email}`}>Contact Me</ButtonLink>
        </div>
      </MotionReveal>
    </section>
  );
}
