import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Badge, Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 / Projects" title="Selected projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50 md:p-7"
          >
            <h3 className="text-lg font-semibold text-card-foreground">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-5 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t}>
                  <Badge>{t}</Badge>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3 pt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github size={15} aria-hidden="true" /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  aria-label={`Live demo of ${project.title}`}
                >
                  <ExternalLink size={15} aria-hidden="true" /> Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
