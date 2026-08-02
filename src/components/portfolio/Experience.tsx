import { EXPERIENCE } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 / Experience" title="Experience">
      <ol className="space-y-8">
        {EXPERIENCE.map((job) => (
          <li
            key={job.company}
            className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50 md:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-card-foreground">{job.role}</h3>
                <p className="mt-1 text-sm text-primary">{job.company}</p>
              </div>
              <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
            </div>
            <ul className="mt-5 space-y-3">
              {job.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
