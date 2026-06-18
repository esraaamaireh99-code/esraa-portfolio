import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { portfolio } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Esraa Amaireh`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolio.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <article className="mx-auto w-full max-w-4xl min-w-0 rounded-[2rem] border border-[#A78BFA]/25 bg-white/[0.06] p-5 shadow-xl shadow-purple-950/30 backdrop-blur-xl sm:p-8 lg:p-10">
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-[#C4B5FD] transition hover:text-white"
        >
          Back to projects
        </Link>
        <p className="mt-8 flex w-fit max-w-full rounded-full bg-white/[0.08] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#C4B5FD] ring-1 ring-[#A78BFA]/25">
          Project
        </p>
        <h1 className="mt-3 break-words text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 break-words text-base leading-8 text-[#C7C7D9] sm:text-lg">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.stack.map((item) => (
            <span
              key={item}
              className="max-w-full break-words rounded-full border border-[#A78BFA]/25 bg-white/[0.06] px-4 py-2 text-sm font-medium text-[#C7C7D9]"
            >
              {item}
            </span>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Highlights</h2>
          <ul className="mt-5 grid gap-3 text-[#C7C7D9]">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 rounded-2xl border border-[#A78BFA]/25 bg-white/[0.06] p-4 shadow-sm shadow-purple-950/20">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8B5CF6]" />
                <span className="min-w-0 break-words">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10">
          <ButtonLink href="/#contact">Discuss Similar Work</ButtonLink>
        </div>
      </article>
    </main>
  );
}
