import { CERTIFICATIONS } from "@/data/portfolio";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="06 / Certifications" title="Certifications">
      <div className="divide-y divide-border border-y border-border">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.name} className="flex flex-col justify-between gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
            <h3 className="text-sm font-semibold text-foreground">{cert.name}</h3>
            <p className="shrink-0 text-sm text-muted-foreground">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
