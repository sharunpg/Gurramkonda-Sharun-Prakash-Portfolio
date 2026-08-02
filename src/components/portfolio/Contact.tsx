import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { LINKS, PROFILE } from "@/data/portfolio";
import { Section } from "./Section";

const inputClass =
  "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    // No backend configured: open the user's mail client with the message.
    const subject = encodeURIComponent(String(data.get("subject") ?? ""));
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSending(false);
    form.reset();
  };

  const details = [
    { Icon: Mail, label: PROFILE.email, href: LINKS.email },
    { Icon: Linkedin, label: "LinkedIn", href: LINKS.linkedin },
    { Icon: Github, label: "GitHub", href: LINKS.github },
    { Icon: MapPin, label: PROFILE.location },
  ];

  return (
    <Section id="contact" eyebrow="07 / Contact" title="Get in touch">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-base leading-relaxed text-muted-foreground">
            I am open to Software Engineer, Backend, Full-Stack, Cloud, and AI/ML opportunities.
            Feel free to reach out — I usually respond quickly.
          </p>
          <ul className="mt-7 space-y-4">
            {details.map(({ Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3 text-sm">
                <Icon size={16} className="text-primary" aria-hidden="true" />
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-lg border border-border bg-card p-6 md:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input id="name" name="name" required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              className={inputClass}
              placeholder="Opportunity / collaboration"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={inputClass}
              placeholder="Tell me about the role or project…"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            <Send size={15} aria-hidden="true" /> Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
