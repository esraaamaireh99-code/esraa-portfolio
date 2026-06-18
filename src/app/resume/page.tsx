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
  "min-w-0 rounded-[2rem] border border-[#A78BFA]/25 bg-white/[0.06] px-5 py-8 shadow-lg shadow-purple-950/25 backdrop-blur-xl sm:px-8 sm:py-10";

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="min-w-0">
      <p className="break-words text-xs font-semibold uppercase tracking-[0.18em] text-[#A78BFA] sm:tracking-[0.24em]">
        {eyebrow}
      </p>
      <h2 className="mt-3 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#8B5CF6]/22 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-96 h-96 w-96 rounded-full bg-[#A78BFA]/16 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8B5CF6]/16 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl min-w-0 px-4 py-4 sm:px-6 md:py-5 lg:px-8">
        <nav
          aria-label="Resume navigation"
          className="flex min-w-0 flex-col gap-4 rounded-[1.75rem] border border-[#A78BFA]/25 bg-white/[0.06] px-4 py-4 shadow-md shadow-purple-950/25 backdrop-blur-xl md:flex-row md:items-center md:justify-between"
        >
          <Link href="/" aria-label="Go to portfolio" className="inline-flex w-fit items-center">
            <Image
              src={logoPath}
              alt="Esraa Amaireh"
              width={160}
              height={48}
              className="h-auto w-28 max-w-full object-contain transition duration-200 hover:scale-[1.03] sm:w-36"
              priority
            />
          </Link>

          <div className="flex min-w-0 flex-wrap items-center gap-2 text-sm font-semibold text-[#C7C7D9] md:justify-end lg:gap-3">
            <a className="inline-flex min-h-11 items-center px-2 transition hover:text-white" href="#resume">
              Resume
            </a>
            <a className="inline-flex min-h-11 items-center px-2 transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="inline-flex min-h-11 items-center px-2 transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="inline-flex min-h-11 items-center px-2 transition hover:text-white" href="#contact">
              Contact
            </a>
            <ButtonLink href={portfolio.resume.downloadUrl} download>
              Download CV
            </ButtonLink>
          </div>
        </nav>

        <MotionReveal>
          <header id="resume" className="py-16 md:py-20 lg:py-24">
            <div className="min-w-0 max-w-4xl">
              <p className="break-words text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA] sm:tracking-[0.28em]">
                Curriculum Vitae
              </p>
              <h1 className="mt-5 break-words text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {portfolio.person.name}
              </h1>
              <p className="mt-5 break-words text-xl font-medium text-[#A78BFA] sm:text-2xl md:text-3xl">
                {portfolio.person.title}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#C7C7D9]">
                Building elegant web experiences, reliable backend systems, CMS platforms, REST APIs,
                and database-driven products with a practical full stack mindset.
              </p>

              <div id="contact" className="mt-8 flex min-w-0 flex-col gap-3 text-sm sm:flex-row sm:flex-wrap">
                {portfolio.contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="inline-flex min-h-11 max-w-full items-center justify-center break-all rounded-full border border-[#A78BFA]/25 bg-white/[0.06] px-4 py-2 text-center font-semibold text-[#C7C7D9] shadow-sm shadow-purple-950/25 transition duration-200 hover:-translate-y-0.5 hover:border-[#A78BFA]/60 hover:text-white"
                  >
                    {item.value}
                  </a>
                ))}
              </div>
            </div>
          </header>
        </MotionReveal>

        <div className="grid min-w-0 gap-8 pb-16 md:pb-20 lg:pb-24">
          <MotionReveal delay={0.05}>
            <section className={sectionClass}>
              <SectionIntro eyebrow="Profile" title="Professional Summary" />
              <p className="mt-6 max-w-4xl text-base leading-8 text-[#C7C7D9] sm:text-lg">
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
                    className="relative min-w-0 pl-6 sm:pl-12"
                  >
                    <span className="absolute left-0 top-2 h-[calc(100%+2.5rem)] w-px bg-[#A78BFA]" />
                    <span className="absolute left-[-0.45rem] top-2 h-4 w-4 rounded-full border-4 border-[#050314] bg-[#8B5CF6] shadow-md shadow-purple-900/40" />

                    <div className="pb-1">
                      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="break-words text-xl font-semibold text-white">{role.company}</h3>
                          <p className="mt-1 break-words font-medium text-[#C7C7D9]">{role.position}</p>
                          <p className="mt-1 text-sm text-[#C7C7D9]/70">{role.location}</p>
                        </div>
                        <p className="w-fit max-w-full whitespace-normal rounded-full border border-[#A78BFA]/25 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-[#C4B5FD]">
                          {role.period}
                        </p>
                      </div>

                      <ul className="mt-5 grid gap-2 text-sm leading-6 text-[#C7C7D9] sm:grid-cols-2">
                        {role.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5CF6]" />
                            <span className="min-w-0 break-words">{highlight}</span>
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
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {portfolio.skills.map((group) => (
                  <div key={group.category}>
                    <h3 className="font-semibold text-white">{group.category}</h3>
                    <div className="mt-3 flex min-w-0 flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="max-w-full break-words rounded-full border border-[#A78BFA]/25 bg-white/[0.06] px-3.5 py-2 text-sm font-medium text-[#C7C7D9] transition duration-200 hover:-translate-y-0.5 hover:border-[#A78BFA]/60 hover:text-white"
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
                  <h3 className="text-lg font-semibold text-white">
                    {portfolio.education.school}
                  </h3>
                  <p className="mt-2 leading-7 text-[#C7C7D9]">
                    {portfolio.education.degree}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#A78BFA]">
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
                      className="max-w-full break-words rounded-full border border-[#A78BFA]/25 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-[#C7C7D9] transition duration-200 hover:-translate-y-0.5 hover:border-[#A78BFA]/60 hover:text-white"
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
