import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-x-clip px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute right-[12%] top-10 h-72 w-72 rounded-full bg-[#8B5CF6]/16 blur-3xl" />
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeading eyebrow="Projects" title="Selected full stack work" />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
