import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { LINKS, PROFILE } from "@/data/portfolio";

export function Footer() {
  const links = [
    { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: LINKS.github, label: "GitHub", Icon: Github },
    { href: LINKS.leetcode, label: "LeetCode", Icon: Code2 },
    { href: LINKS.email, label: "Email", Icon: Mail },
  ];

  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <ul className="flex items-center gap-2">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
