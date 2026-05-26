import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import portraitImg from "@/assets/portrait.jpg";
import { ArrowRight, Target, Brain, Users, Clock, Sparkles, Download, MessageCircle, Shield, Handshake } from "lucide-react";
import { LegalFooter as Footer } from "@/components/LegalLayout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Negotiation Designer – Spieltheorie im Einkauf | Martin Henze" },
      { name: "description", content: "Extrem praxisnahe Trainings zu Spieltheorie & Verhandlungsführung im Einkauf. 80% Praxisanteil, 100% Anwendbarkeit." },
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
    { href: "#mission", label: "Mission" },
    { href: "#training", label: "Neg:Designer" },
    { href: "#inhalte", label: "Inhalte" },
    { href: "/kontakt", label: "Kontakt" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="size-2.5 rounded-full bg-primary shadow-glow" />
          Negotiation<span className="text-primary">Designer</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(l => (
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

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden grain">
      <img src={heroImg} alt="Strategisches Schachbrett – Symbol für Spieltheorie" width={1920} height={1080} className="absolute inset-0 size-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6">
            <Sparkles className="size-3.5 text-primary" /> Spieltheorie · Verhandlungsdesign · Einkauf
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Verhandeln auf <br className="hidden md:block lg:hidden" /> <span className="text-gradient">Königs&shy;niveau.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Extrem praxisnahe Trainings zur Spieltheorie im Einkauf. Analytische Tiefe trifft konkrete Umsetzbarkeit – damit Ihr Team Wettbewerb maximal nutzt.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#training" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:shadow-glow transition-all">
              Training entdecken <ArrowRight className="size-4" />
            </a>
            <a href="#mission" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 font-medium hover:bg-card transition-all">
              Mission & Mindset
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[{ k: "10+", v: "Jahre Einkauf" }, { k: "80%", v: "Praxisanteil" }, { k: "100%", v: "Anwendbarkeit" }].map(s => (
              <div key={s.k}>
                <div className="text-3xl font-display font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const items = [
    { icon: Target, title: "Mission", text: "Verhandlungsexzellenz systematisch aufbauen – nachhaltig in Ihre Organisation integriert." },
    { icon: Brain, title: "Konzept", text: "80% Praxisanteil mit Vertriebs- und Einkaufssicht. Analytische Tiefe trifft konkrete Umsetzbarkeit." },
    { icon: Shield, title: "Werte", text: "Vertrauen, Diskretion, Integrität, langfristige Partnerschaft. Kompetenzen aufbauen, nicht nur Tools liefern." },
  ];
  return (
    <section id="mission" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-6 bg-radial-glow blur-2xl" />
            <img src={portraitImg} alt="Martin Henze, Negotiation Designer" loading="lazy" width={1024} height={1280} className="relative rounded-2xl shadow-elegant w-full" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Mission & Mindset</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              NegotioNerd mit über 10 Jahren <span className="text-gradient">Einkaufserfahrung</span> in der Automobilbranche.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Umfassende Erfahrung in der Anwendung spieltheoretischer Methoden und im Design von Verhandlungen sowie Verhandlungsroadmaps.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {items.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 hover:border-primary/60 transition-colors">
                  <Icon className="size-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Training() {
  const stats = [
    { icon: Clock, k: "3 Tage", v: "Intensives Format" },
    { icon: Users, k: "10 Teilnehmer", v: "Kleingruppe" },
    { icon: Handshake, k: "80% Praxis", v: "Live-Verhandlungen" },
    { icon: Sparkles, k: "100%", v: "Anwendbarkeit" },
  ];
  return (
    <section id="training" className="relative py-32 px-6 border-t border-border/60">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Trainingsangebot</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Neg:Designer – <span className="text-gradient">Spieltheorie im Einkauf</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Verhandeln mit dem spieltheoretischen Ansatz – die Königsdisziplin. Vorausschauender, rationaler, erfolgreicher. Verhaltensökonomie trifft strategische Ziele.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, k, v }) => (
            <div key={k} className="group rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-primary/70 hover:shadow-glow transition-all">
              <Icon className="size-7 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-display font-bold">{k}</div>
              <div className="text-sm text-muted-foreground mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Inhalte() {
  const items = [
    { icon: Brain, title: "Anreizstrukturen verstehen", text: "Tiefes Verständnis für strategische Interdependenzen. Eigene Ausgangssituation analysieren und Handlungsstrategien ableiten." },
    { icon: Target, title: "Mehrstufige Verhandlungen", text: "Optimale Ergebnisse erzielen – selbst unter Unsicherheit oder bei asymmetrischer Information. Spieltheorie in Aktion." },
    { icon: Sparkles, title: "Individuell. Strategisch. Wirksam.", text: "Keine Theorieübung. Methodik wird in umsetzbare Strategien übersetzt – zugeschnitten auf Ihre Herausforderungen." },
    { icon: Users, title: "Für erfahrene Verhandler", text: "Maßgeschneiderte Unterstützung statt Baukasten. Strategisches Denken wird in Ihrer Organisation internalisiert." },
  ];
  return (
    <section id="inhalte" className="py-32 px-6 border-t border-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Denkanreize</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Inhalte des Trainings</h2>
          </div>
          <a href="/NegKOMPAKT.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            <Download className="size-4" /> Trainingsinhalte als PDF
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="group relative rounded-3xl border border-border bg-card/60 backdrop-blur p-8 overflow-hidden hover:border-primary/60 transition-all">
              <div className="absolute -top-20 -right-20 size-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 rounded-xl bg-primary/15 border border-primary/30 grid place-items-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="relative py-32 px-6 border-t border-border/60">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6">
          <MessageCircle className="size-3.5 text-primary" /> Wollen wir chatten?
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
          Bereit für Ihre <span className="text-gradient">nächste Verhandlung?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Lassen Sie uns über Ihre Herausforderungen sprechen. Direkt, diskret und auf Augenhöhe.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground hover:shadow-glow transition-all">
            Martin Henze kontaktieren <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}



function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Mission />
      <Training />
      <Inhalte />
      <Contact />
      <Footer />
    </main>
  );
}
