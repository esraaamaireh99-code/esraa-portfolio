import Link from "next/link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import type { Project } from "@/data/types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <MotionReveal delay={index * 0.08}>
      <article className="flex h-full flex-col rounded-[1.5rem] border border-white/70 bg-white/75 p-6 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/10">
        <p className="text-sm font-semibold text-teal-700">{project.category}</p>
        <h3 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="rounded-full bg-gradient-to-r from-teal-50 to-purple-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-white">
              {item}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 text-sm font-semibold text-slate-950 transition hover:text-teal-700"
          aria-label={`View details for ${project.title}`}
        >
          View project details
        </Link>
      </article>
    </MotionReveal>
  );
}
