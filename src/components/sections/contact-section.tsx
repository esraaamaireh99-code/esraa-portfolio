import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-80 max-w-4xl rounded-full bg-[#8B5CF6]/18 blur-3xl" />
      <MotionReveal className="mx-auto w-full max-w-5xl min-w-0 rounded-[2rem] border border-[#A78BFA]/25 bg-white/[0.06] p-5 shadow-2xl shadow-purple-950/35 backdrop-blur-xl sm:p-8">
        <SectionHeading eyebrow="Contact" title="Available for full stack opportunities" inverse />
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#C7C7D9]">
          Reach out for developer roles, freelance projects, CMS platforms, API integrations, or full stack product development.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...portfolio.contactItems, { label: "GitHub", value: "GitHub", href: portfolio.contact.github, external: true }].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="flex min-h-11 min-w-0 flex-col justify-center rounded-2xl border border-[#A78BFA]/25 bg-white/[0.06] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#A78BFA]/60 hover:bg-white/[0.09]"
            >
              <span className="text-sm text-[#C7C7D9]/70">{item.label}</span>
              <span className="mt-2 block min-w-0 break-all font-semibold text-white">{item.value}</span>
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
