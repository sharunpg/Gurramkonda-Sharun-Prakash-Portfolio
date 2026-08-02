import { GraduationCap, Trophy } from "lucide-react";
import { ACHIEVEMENTS, EDUCATION, LINKS } from "@/data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="05 / Education" title="Education & achievements">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6 md:p-7">
          <GraduationCap size={20} className="text-primary" aria-hidden="true" />
          <h3 className="mt-4 text-lg font-semibold text-card-foreground">{EDUCATION.degree}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{EDUCATION.school}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{EDUCATION.period}</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 md:p-7">
          <Trophy size={20} className="text-primary" aria-hidden="true" />
          <h3 className="mt-4 text-lg font-semibold text-card-foreground">Achievements</h3>
          <ul className="mt-4 space-y-3">
            {ACHIEVEMENTS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={LINKS.leetcode}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex text-sm font-medium text-primary hover:underline"
          >
            View LeetCode profile
          </a>
        </div>
      </div>
    </Section>
  );
}
