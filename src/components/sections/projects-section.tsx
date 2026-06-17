import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Projects" title="Selected full stack work" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {portfolio.projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
