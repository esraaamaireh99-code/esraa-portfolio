import Link from "next/link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import type { Project } from "@/data/types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <MotionReveal className="h-full min-w-0" delay={index * 0.08}>
      <article className="flex h-full min-w-0 flex-col rounded-[1.5rem] border border-[#A78BFA]/25 bg-white/[0.06] p-5 shadow-lg shadow-purple-950/25 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-[#A78BFA]/45 hover:shadow-2xl hover:shadow-purple-950/40 sm:p-6">
        <p className="text-sm font-semibold text-[#A78BFA]">{project.category}</p>
        <h3 className="mt-3 break-words text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 min-w-0 flex-1 break-words text-sm leading-6 text-[#C7C7D9]">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="max-w-full break-words rounded-full border border-[#A78BFA]/25 bg-white/[0.06] px-3 py-1 text-xs font-medium text-[#C7C7D9]">
              {item}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 text-sm font-semibold text-[#C4B5FD] transition hover:text-white"
          aria-label={`View details for ${project.title}`}
        >
          View project details
        </Link>
      </article>
    </MotionReveal>
  );
}
