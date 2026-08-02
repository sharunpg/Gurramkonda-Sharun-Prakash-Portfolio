import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { LINKS, PROFILE } from "@/data/portfolio";

const socials = [
  { href: LINKS.linkedin, label: "LinkedIn profile", Icon: Linkedin },
  { href: LINKS.github, label: "GitHub profile", Icon: Github },
  { href: LINKS.email, label: "Send an email", Icon: Mail },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
              <MapPin size={13} aria-hidden="true" />
              {PROFILE.location}
            </p>

            <h1
              className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              {PROFILE.name}
            </h1>

            <p className="mt-4 text-lg font-medium text-primary md:text-xl">
              {PROFILE.headline}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {PROFILE.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                View Projects
                <ArrowRight size={16} aria-hidden="true" />
              </a>

              {LINKS.resume && (
                <a
                  href={LINKS.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Download size={16} aria-hidden="true" />
                  Download Resume
                </a>
              )}
            </div>

            <ul className="mt-9 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT PROFILE IMAGE */}
          <div className="mx-auto w-full max-w-[340px] lg:mx-0 lg:ml-auto">
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-elevated">
              <img
                src="/sharun-prakash.jpeg"
                alt="Sharun Prakash"
                className="aspect-[4/5] w-full rounded-xl object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}