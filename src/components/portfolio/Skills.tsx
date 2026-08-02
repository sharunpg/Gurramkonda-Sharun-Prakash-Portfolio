import { SKILLS } from "@/data/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 / Skills" title="Technical skills">
      <div className="divide-y divide-border border-y border-border">
        {SKILLS.map((group) => (
          <div key={group.category} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
              {group.category}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
