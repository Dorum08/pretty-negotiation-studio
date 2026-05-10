import { Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import type { ReactNode } from "react";

function Nav() {
  const links = [
    { href: "/#mission", label: "Mission" },
    { href: "/#training", label: "Neg:Designer" },
    { href: "/#inhalte", label: "Inhalte" },
    { href: "/kontakt", label: "Kontakt" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="size-2.5 rounded-full bg-primary shadow-glow" />
          Negotiation<span className="text-primary">Designer</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-glow">
          Kontakt <ArrowRight className="size-4" />
        </Link>
      </div>
    </header>
  );
}

export function LegalFooter() {
  const legal = [
    { to: "/impressum", label: "Impressum" },
    { to: "/datenschutz", label: "Datenschutz" },
    { to: "/agb", label: "AGB" },
    { to: "/cookies", label: "Cookies" },
  ] as const;
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display">
          <span className="size-2 rounded-full bg-primary" /> Negotiation Designer · Martin Henze
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {legal.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div>© {new Date().getFullYear()} · Spieltheorie im Einkauf</div>
      </div>
    </footer>
  );
}

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}

export function LegalLayout({ eyebrow = "Rechtliches", title, intro, children }: Props) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative pt-40 pb-16 px-6 overflow-hidden grain">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6">
            <FileText className="size-3.5 text-primary" /> {eyebrow}
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.05]">{title}</h1>
          {intro && <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{intro}</p>}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <article className="rounded-3xl border border-border bg-card/60 backdrop-blur p-8 sm:p-12 prose-legal">
            {children}
          </article>
        </div>
      </section>

      <LegalFooter />
    </main>
  );
}
