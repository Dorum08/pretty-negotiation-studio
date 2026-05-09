import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/neg-hero.jpg";
import {
  ArrowRight, ArrowUpRight, Sparkles, Target, Brain, Gauge, Users,
  GraduationCap, Compass, BarChart3, Mail, Phone, MapPin, Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "neg.experts – Verhandeln mit Spieltheorie" },
      { name: "description", content: "Trainings, Coaching und Kompetenzanalyse für Verhandlungen auf Basis der Spieltheorie. 25+ Jahre Einkaufserfahrung. Düsseldorf." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
});

function Nav() {
  const links = [
    { href: "#training", label: "Training" },
    { href: "#coaching", label: "Coaching" },
    { href: "#analyse", label: "Competence Analysis" },
    { href: "#team", label: "Who we are" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">
          <span className="size-2.5 rounded-full bg-primary shadow-glow" />
          neg<span className="text-primary">.</span>experts
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:shadow-glow transition-all">
          Kontakt <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden grain">
      <img src={heroImg} alt="Spieltheorie Schach Grid" width={1920} height={1280} className="absolute inset-0 size-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6">
            <Sparkles className="size-3.5 text-primary" /> Spieltheorie · Verhandlung · Einkauf
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.02]">
            Hello.<br />
            We are <span className="text-gradient">neg.</span><br />
            We love to be <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-2 h-4 bg-primary/40 -skew-x-6" />
              <span className="relative">amazing.</span>
            </span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Verhandeln will erlernt sein. Wir trainieren, coachen und analysieren – mit dem
            spieltheoretischen Ansatz. 80 % Praxis. 25+ Jahre Einkaufserfahrung.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#training" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:shadow-glow transition-all">
              Let's find out <ArrowRight className="size-4" />
            </a>
            <a href="#programm" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 font-medium hover:bg-card transition-all">
              Unser Programm
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "25+", v: "Jahre Einkauf" },
              { k: "80 %", v: "Praxisanteil" },
              { k: "3", v: "Leistungsfelder" },
            ].map(s => (
              <div key={s.k}>
                <div className="text-3xl sm:text-4xl font-display font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Programm() {
  const items = [
    { n: "01", icon: GraduationCap, title: "Training & Seminar", text: "Mehrtägige Präsenzseminare. Spieltheorie und Verhaltensökonomie als emotionale & fachliche Reise.", href: "#training" },
    { n: "02", icon: BarChart3, title: "Competence Analysis", text: "Volle Transparenz über Ihr Trainingsportfolio – mit konkreten Handlungsempfehlungen.", href: "#analyse" },
    { n: "03", icon: Compass, title: "Coaching on the job", text: "Beratung in realen Verhandlungen. Strategisches Denken wird in der Organisation internalisiert.", href: "#coaching" },
  ];
  return (
    <section id="programm" className="relative py-32 px-6 border-t border-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Dienstleistungen</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Unser <span className="text-gradient">Programm</span>.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Drei Bausteine. Ein Ziel: Verhandlungsexzellenz, die in Ihrer Organisation bleibt.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map(({ n, icon: Icon, title, text, href }) => (
            <a key={n} href={href} className="group relative rounded-3xl border border-border bg-card/60 backdrop-blur p-8 overflow-hidden hover:border-primary/60 transition-all">
              <div className="absolute -top-24 -right-24 size-56 bg-primary/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="size-12 rounded-xl bg-primary/15 border border-primary/30 grid place-items-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{n}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{text}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative py-32 px-6 border-t border-border/60">
      <div className="absolute inset-0 bg-radial-glow opacity-60" />
      <div className="relative max-w-5xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-6">Unsere Mission</p>
        <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
          Wir helfen Ihnen zur <span className="text-gradient">Exzellenz</span> in Verhandlungen.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto">
          Junges Start-up aus Düsseldorf. Spezialgebiet: Verhandlungstrainings auf Basis der
          Spieltheorie. Unsere Methode: interaktiv, mit bis zu 80 % Praxisanteil – Einkäufer- und
          Vertriebssicht inklusive.
        </p>
      </div>
    </section>
  );
}

function Training() {
  const items = [
    "Spieltheoretische und verhaltensökonomische Grundlagen",
    "Auktionsformate und adäquate Anreizsysteme",
    "Zielgerichtete Verhandlungsvorbereitung",
    "Aufbau einer Verhandlungsstrategie & Lieferantenkommunikation",
  ];
  return (
    <section id="training" className="py-32 px-6 border-t border-border/60">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="font-mono text-sm text-muted-foreground">01 / Training</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
            Gefangen im Dilemma? <span className="text-gradient">Nicht mit uns.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Im mehrtägigen Präsenzseminar führen unsere Berater mit jahrelanger Industrie­erfahrung
            Ihre Mitarbeiter durch das Feld der spieltheoretischen Verhandlung – mit dem Ziel,
            Chancen sicher zu erkennen und maßgeschneiderte Verhandlungsdesigns zu entwickeln.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <div key={it} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-primary/60 transition-colors">
              <div className="flex items-start gap-3">
                <Check className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-muted-foreground mb-1">0{i + 1}</div>
                  <p className="font-medium leading-snug">{it}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coaching() {
  const items = [
    { icon: Brain, title: "Auktions- & Verhaltens­ökonomie", text: "Transfer der Grundlagen auf Ihren konkreten Verhandlungsfall." },
    { icon: Target, title: "Analyse & Profiling", text: "Eruierung von Fertigungs- und Entwicklungs­kapazitäten sowie Bieter-Motivation." },
    { icon: Gauge, title: "Live-Verhandlung", text: "Wir begleiten Sie operativ – mit Strategie statt Bauchgefühl." },
  ];
  return (
    <section id="coaching" className="py-32 px-6 border-t border-border/60 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="font-mono text-sm text-muted-foreground">02 / Coaching on the job</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              Chicken Game? <span className="text-gradient">Nicht mit uns.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Nicht wer zuerst ausweicht gewinnt – sondern wer die besseren Rahmen­bedingungen schafft.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl border border-border bg-background/60 backdrop-blur p-7 hover:border-primary/60 hover:shadow-glow transition-all">
              <Icon className="size-7 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Analyse() {
  return (
    <section id="analyse" className="py-32 px-6 border-t border-border/60">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "100 %", v: "Transparenz" },
              { k: "0", v: "Doppelungen" },
              { k: "1:1", v: "Empfehlungen" },
              { k: "360°", v: "Portfolio-Sicht" },
            ].map(s => (
              <div key={s.k} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6">
                <div className="text-3xl font-display font-bold text-gradient">{s.k}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <span className="font-mono text-sm text-muted-foreground">03 / Competence Analysis</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
            Viele Trainings. Wenig Überblick.<br />
            <span className="text-gradient">Wir ändern das.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Mit unserer Kompetenzanalyse Verhandlung erhalten Sie einen klaren Überblick über
            Ihren Schulungsbedarf – ausgerichtet an Ihren realen Verhandlungen. Inklusive
            konkreter Handlungs­empfehlungen für ein vollständiges Trainings­portfolio.
          </p>
          <a href="#kontakt" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:shadow-glow transition-all">
            Analyse anfragen <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const items = [
    { icon: Users, k: "Unser Team", v: "25 Jahre Einkauf · 35 Jahre Automotive" },
    { icon: Sparkles, k: "Spezialgebiet", v: "Spieltheorie in Verhandlungen" },
    { icon: MapPin, k: "Standort", v: "Düsseldorf · DACH-weit aktiv" },
  ];
  return (
    <section id="team" className="py-32 px-6 border-t border-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Who we are</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Praxis statt Powerpoint. <span className="text-gradient">Seit Jahrzehnten.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, k, v }) => (
            <div key={k} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-7">
              <Icon className="size-7 text-primary mb-5" />
              <h3 className="text-lg font-semibold mb-2">{k}</h3>
              <p className="text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="relative py-32 px-6 border-t border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Get in touch</p>
          <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
            Bereit für Ihre nächste <span className="text-gradient">Verhandlung?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Schreiben Sie uns – wir melden uns zeitnah mit einem konkreten Vorschlag.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <a href="mailto:contact@neg-experts.com" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Mail className="size-5 text-primary" /> contact@neg-experts.com
            </a>
            <a href="tel:+4901631530508" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone className="size-5 text-primary" /> +49 (0) 163 153 0508
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-5 text-primary" /> Wupperstraße 45, 40219 Düsseldorf
            </div>
          </div>
        </div>
        <form className="rounded-3xl border border-border bg-card/60 backdrop-blur p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Vorname" className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary outline-none transition-colors" />
            <input placeholder="Nachname" className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary outline-none transition-colors" />
          </div>
          <input type="email" placeholder="E-Mail" className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary outline-none transition-colors" />
          <textarea placeholder="Nachricht" rows={5} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary outline-none transition-colors resize-none" />
          <button type="button" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:shadow-glow transition-all">
            Send <ArrowRight className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display">
          <span className="size-2 rounded-full bg-primary" /> neg.experts · Düsseldorf
        </div>
        <div>© {new Date().getFullYear()} · Spieltheorie in Verhandlungen</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Programm />
      <Mission />
      <Training />
      <Coaching />
      <Analyse />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
