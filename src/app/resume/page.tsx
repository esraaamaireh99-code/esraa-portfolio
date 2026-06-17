import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
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

const sectionShell =
  "rounded-[1.5rem] border border-white/70 bg-white/75 p-5 shadow-lg shadow-slate-900/10 backdrop-blur-xl sm:p-6";

const resumeSections = [
  { eyebrow: "Profile", title: "Professional Summary" },
  { eyebrow: "Experience", title: "Work History" },
  { eyebrow: "Skills", title: "Technical Skills" },
  { eyebrow: "Education", title: "Education" },
  { eyebrow: "Certifications", title: "Professional Learning" },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen overflow-x-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="sticky top-0 z-40 -mx-5 mb-6 border-b border-white/60 bg-white/70 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 transition hover:text-purple-700"
            >
              Back to portfolio
            </Link>
            <ButtonLink href={portfolio.resume.downloadUrl} download>
              Download CV
            </ButtonLink>
          </div>
        </div>

        <article className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6">
            <section className="rounded-[1.75rem] border border-white/70 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-6 text-white shadow-2xl shadow-slate-900/20">
              <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-teal-100 ring-1 ring-white/15">
                Curriculum Vitae
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                {portfolio.person.name}
              </h1>
              <p className="mt-3 text-xl text-teal-100">{portfolio.person.title}</p>
              <div className="mt-6 grid gap-3 text-sm text-slate-200">
                {portfolio.contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10 transition hover:bg-white/15"
                  >
                    <span className="block text-xs uppercase tracking-[0.16em] text-teal-200">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words font-semibold text-white">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <nav className={`${sectionShell} hidden lg:block`} aria-label="Resume sections">
              <p className="text-sm font-semibold text-slate-950">Sections</p>
              <div className="mt-4 grid gap-2">
                {resumeSections.map((section) => (
                  <a
                    key={section.eyebrow}
                    href={`#${section.eyebrow.toLowerCase()}`}
                    className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-teal-50 hover:text-teal-800"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          <div className="grid gap-6">
            <section id="profile" className={sectionShell}>
              <SectionHeading eyebrow="Profile" title="Professional Summary" />
              <p className="mt-5 leading-8 text-slate-700">{portfolio.about}</p>
            </section>

            <section id="experience" className={sectionShell}>
              <SectionHeading eyebrow="Experience" title="Work History" />
              <div className="mt-6 grid gap-5">
                {portfolio.experience.map((role, index) => (
                  <article
                    key={`${role.company}-${role.period}`}
                    className="rounded-[1.25rem] border border-white/80 bg-gradient-to-br from-white/90 to-teal-50/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-700">
                          Role {index + 1}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-slate-950">{role.company}</h3>
                        <p className="text-sm font-medium text-slate-700">{role.position}</p>
                        <p className="text-sm text-slate-500">{role.location}</p>
                      </div>
                      <p className="w-fit rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-800 ring-1 ring-rose-100">
                        {role.period}
                      </p>
                    </div>
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
                      {role.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="skills" className={sectionShell}>
              <SectionHeading eyebrow="Skills" title="Technical Skills" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {portfolio.skills.map((group) => (
                  <article key={group.category} className="rounded-[1.25rem] border border-purple-100 bg-purple-50/60 p-5">
                    <h3 className="font-semibold text-slate-950">{group.category}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-white transition hover:-translate-y-0.5 hover:text-purple-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="education" className={sectionShell}>
              <SectionHeading eyebrow="Education" title="Education" />
              <div className="mt-5 rounded-[1.25rem] border border-amber-100 bg-amber-50/70 p-5">
                <h3 className="font-semibold text-slate-950">{portfolio.education.school}</h3>
                <p className="mt-1 text-sm text-slate-700">{portfolio.education.degree}</p>
                <p className="mt-2 text-sm font-semibold text-teal-800">{portfolio.education.period}</p>
              </div>
            </section>

            <section id="certifications" className={sectionShell}>
              <SectionHeading eyebrow="Certifications" title="Professional Learning" />
              <div className="mt-5 flex flex-wrap gap-3">
                {portfolio.certifications.map((certification) => (
                  <span
                    key={certification}
                    className="rounded-full border border-teal-100 bg-teal-50/80 px-4 py-2 text-sm font-semibold text-teal-900 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    {certification}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
