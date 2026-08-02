import { Section } from "./Section";

const focus = [
  "Problem solving & debugging",
  "REST API development",
  "Database integration",
  "Testing & root cause analysis",
  "Continuous learning",
];

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a Computer Science Engineering graduate with hands-on experience building
            full-stack, backend, and AI-powered applications. My work spans Java and Spring Boot
            services, React.js interfaces, Python-based machine learning prototypes, and relational
            databases such as PostgreSQL and MySQL.
          </p>
          <p>
            I enjoy breaking down problems, debugging systematically, and designing REST APIs that
            are documented, validated, and secure. Alongside development, I care about testing and
            root cause analysis — verifying behaviour with unit, integration, and API tests before
            shipping.
          </p>
          <p>
            I have foundational knowledge of cloud and DevOps practices, including AWS cloud
            fundamentals, Docker, Kubernetes, and CI/CD workflows, and I keep learning continuously
            to grow into a well-rounded software engineer.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Focus areas</h3>
          <ul className="mt-4 space-y-3">
            {focus.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-card-foreground">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
