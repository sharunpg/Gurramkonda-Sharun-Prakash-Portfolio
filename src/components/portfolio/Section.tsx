import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-border py-20 md:py-28", className)}>
      <div ref={ref} className="container-page reveal">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">
      {children}
    </span>
  );
}
