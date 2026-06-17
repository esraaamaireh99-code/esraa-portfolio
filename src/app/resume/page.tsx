import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Full CV for Esraa Amaireh, Full Stack Developer specializing in Laravel, React, Next.js, Kotlin, Spring Boot, Node.js, databases, and API integrations.",
  openGraph: {
    title: "Resume | Esraa Amaireh",
    description: "Full CV for Esraa Amaireh, Full Stack Developer.",
  },
};

const logoPath = "/logo/esraa-logo-light-purple.svg";

const sectionClass =
  "rounded-[2rem] border border-[#E9D5FF] bg-white/72 px-5 py-8 shadow-lg shadow-purple-950/5 backdrop-blur-xl sm:px-8 sm:py-10";

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A855F7]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1E1B4B] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#FCFAFF] text-[#1E1B4B]">
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#E9D5FF]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-96 h-96 w-96 rounded-full bg-[#C084FC]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F3E8FF]/80 blur-3xl" />

      <div className="relative mx-auto max-w-[1120px] px-5 py-5 sm:px-8 lg:px-10">
        <nav
          aria-label="Resume navigation"
          className="flex flex-col gap-4 rounded-[1.75rem] border border-[#E9D5FF]/80 bg-white/75 px-4 py-4 shadow-md shadow-purple-950/5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
        >
          <Link href="/" aria-label="Go to portfolio" className="inline-flex w-fit items-center">
            <Image
              src={logoPath}
              alt="Esraa Amaireh"
              width={160}
              height={48}
              className="h-9 w-auto transition duration-200 hover:scale-[1.03] sm:h-10"
              priority
            />
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#1E1B4B]/70 sm:justify-end">
            <a className="transition hover:text-[#A855F7]" href="#resume">
              Resume
            </a>
            <a className="transition hover:text-[#A855F7]" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-[#A855F7]" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-[#A855F7]" href="#contact">
              Contact
            </a>
            <ButtonLink href={portfolio.resume.downloadUrl} download>
              Download CV
            </ButtonLink>
          </div>
        </nav>

        <MotionReveal>
          <header id="resume" className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A855F7]">
                Curriculum Vitae
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[#1E1B4B] sm:text-6xl lg:text-7xl">
                {portfolio.person.name}
              </h1>
              <p className="mt-5 text-2xl font-medium text-[#A855F7] sm:text-3xl">
                {portfolio.person.title}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#1E1B4B]/75">
                Building elegant web experiences, reliable backend systems, CMS platforms, REST APIs,
                and database-driven products with a practical full stack mindset.
              </p>

              <div id="contact" className="mt-8 flex flex-wrap gap-3 text-sm">
                {portfolio.contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="rounded-full border border-[#E9D5FF] bg-white/75 px-4 py-2 font-semibold text-[#1E1B4B]/75 shadow-sm shadow-purple-950/5 transition duration-200 hover:-translate-y-0.5 hover:border-[#C084FC] hover:bg-[#F3E8FF] hover:text-[#7E22CE]"
                  >
                    {item.value}
                  </a>
                ))}
              </div>
            </div>
          </header>
        </MotionReveal>

        <div className="grid gap-8 pb-16">
          <MotionReveal delay={0.05}>
            <section className={sectionClass}>
              <SectionIntro eyebrow="Profile" title="Professional Summary" />
              <p className="mt-6 max-w-4xl text-base leading-8 text-[#1E1B4B]/75 sm:text-lg">
                {portfolio.about}
              </p>
            </section>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <section id="experience" className={sectionClass}>
              <SectionIntro eyebrow="Experience" title="Work History" />
              <div className="mt-10 space-y-10">
                {portfolio.experience.map((role) => (
                  <article
                    key={`${role.company}-${role.period}`}
                    className="relative pl-8 sm:pl-12"
                  >
                    <span className="absolute left-0 top-2 h-[calc(100%+2.5rem)] w-px bg-[#C084FC]" />
                    <span className="absolute left-[-0.45rem] top-2 h-4 w-4 rounded-full border-4 border-white bg-[#A855F7] shadow-md shadow-purple-900/20" />

                    <div className="pb-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-[#1E1B4B]">{role.company}</h3>
                          <p className="mt-1 font-medium text-[#1E1B4B]/80">{role.position}</p>
                          <p className="mt-1 text-sm text-[#1E1B4B]/60">{role.location}</p>
                        </div>
                        <p className="w-fit rounded-full border border-[#E9D5FF] bg-[#F3E8FF] px-4 py-2 text-sm font-semibold text-[#7E22CE]">
                          {role.period}
                        </p>
                      </div>

                      <ul className="mt-5 grid gap-2 text-sm leading-6 text-[#1E1B4B]/75 sm:grid-cols-2">
                        {role.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C084FC]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <section id="skills" className={sectionClass}>
              <SectionIntro eyebrow="Skills" title="Technical Skills" />
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {portfolio.skills.map((group) => (
                  <div key={group.category}>
                    <h3 className="font-semibold text-[#1E1B4B]">{group.category}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#E9D5FF] bg-[#F3E8FF]/80 px-3.5 py-2 text-sm font-medium text-[#1E1B4B]/75 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#7E22CE] hover:shadow-md hover:shadow-purple-950/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </MotionReveal>

          <div className="grid gap-8 lg:grid-cols-2">
            <MotionReveal delay={0.2}>
              <section className={`${sectionClass} h-full`}>
                <SectionIntro eyebrow="Education" title="Education" />
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-[#1E1B4B]">
                    {portfolio.education.school}
                  </h3>
                  <p className="mt-2 leading-7 text-[#1E1B4B]/75">
                    {portfolio.education.degree}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#A855F7]">
                    {portfolio.education.period}
                  </p>
                </div>
              </section>
            </MotionReveal>

            <MotionReveal delay={0.25}>
              <section className={`${sectionClass} h-full`}>
                <SectionIntro eyebrow="Certifications" title="Certifications" />
                <div className="mt-6 flex flex-wrap gap-3">
                  {portfolio.certifications.map((certification) => (
                    <span
                      key={certification}
                      className="rounded-full border border-[#E9D5FF] bg-white/75 px-4 py-2 text-sm font-semibold text-[#1E1B4B]/75 transition duration-200 hover:-translate-y-0.5 hover:bg-[#F3E8FF] hover:text-[#7E22CE]"
                    >
                      {certification}
                    </span>
                  ))}
                </div>
              </section>
            </MotionReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
