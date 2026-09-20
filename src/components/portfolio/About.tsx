import { Section } from "./Section";

const focus = [
  "Software engineering",
  "Backend development",
  "AI & Machine Learning",
  "REST API development",
  "Problem solving & debugging",
];

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a Computer Science Engineering graduate and currently working as a Test Engineer
            at SOAIS IT Solutions. I work on Workday applications and business processes, with a
            focus on functional testing, validating workflows, identifying issues, and ensuring
            software quality.
          </p>
          <p>
            I have a strong interest in Software Engineering and enjoy understanding how
            applications work, solving technical problems, debugging issues, and continuously
            improving software quality. My technical background includes Java, Spring Boot,
            Python, SQL, React.js, REST APIs, and relational databases.
          </p>
          <p>
            Alongside software testing and development, I am interested in Artificial Intelligence
            and Machine Learning and enjoy exploring how AI can be used to build practical
            applications and automation solutions. I am continuously learning and expanding my
            skills across testing, software engineering, automation, and AI/ML.
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
