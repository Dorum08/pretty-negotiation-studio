import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Sparkles, Send, CheckCircle2, Linkedin } from "lucide-react";
import { LegalFooter as Footer } from "@/components/LegalLayout";

export const Route = createFileRoute("/kontakt")({
  component: KontaktPage,
  head: () => ({
    meta: [
      { title: "Kontakt – Negotiation Designer | Martin Henze" },
      { name: "description", content: "Direkt, diskret und auf Augenhöhe. Sprechen Sie mit Martin Henze über Ihre nächste Verhandlung." },
      { property: "og:title", content: "Kontakt – Negotiation Designer" },
      { property: "og:description", content: "Direkt, diskret und auf Augenhöhe. Sprechen Sie mit Martin Henze über Ihre nächste Verhandlung." },
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

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-3xl border border-border bg-card/60 backdrop-blur p-8 sm:p-10 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" placeholder="Ihr Name" required />
        <Field label="Unternehmen" name="company" placeholder="Firma" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="E-Mail" name="email" type="email" placeholder="ihre@email.de" required />
        <Field label="Telefon" name="phone" placeholder="+49 ..." />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Worum geht's?</label>
        <textarea
          required
          rows={5}
          placeholder="Skizzieren Sie kurz Ihre Verhandlungssituation..."
          className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={sent}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground hover:shadow-glow transition-all disabled:opacity-70"
      >
        {sent ? (<><CheckCircle2 className="size-4" /> Nachricht gesendet</>) : (<>Nachricht senden <Send className="size-4" /></>)}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Vertraulich. Antwort innerhalb von 24 Stunden.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium mb-2 block">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}

function KontaktPage() {
  const channels = [
    { icon: Mail, label: "E-Mail", value: "info@negotiation-designer.de", href: "mailto:info@negotiation-designer.de" },
    { icon: Phone, label: "Telefon", value: "+49 91848088297", href: "tel:+4991848088297" },
    { icon: Linkedin, label: "LinkedIn", value: "Martin Henze", href: "https://www.linkedin.com/in/martin-henze-b97053399/" },
    { icon: MapPin, label: "Standort", value: "Deutschland · remote & vor Ort", href: "#" },
  ];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative pt-40 pb-20 px-6 overflow-hidden grain">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6">
              <MessageCircle className="size-3.5 text-primary" /> Wollen wir chatten?
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Sprechen wir über Ihre <span className="text-gradient">nächste Verhandlung.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Direkt, diskret und auf Augenhöhe. Schreiben Sie mir, was Sie umtreibt – ich melde mich persönlich zurück.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-5 space-y-5">
            <div className="rounded-3xl border border-border bg-card/60 backdrop-blur p-8">
              <Sparkles className="size-6 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-3">Direkter Draht zu Martin Henze</h2>
              <p className="text-muted-foreground leading-relaxed">
                Keine Callcenter, keine Vorqualifizierung. Sie schreiben – ich antworte. Erstgespräche sind kostenfrei und unverbindlich.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="group rounded-2xl border border-border bg-card/60 backdrop-blur p-5 hover:border-primary/60 hover:shadow-glow transition-all"
                >
                  <Icon className="size-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="text-sm font-medium mt-1 truncate">{value}</div>
                </a>
              ))}
            </div>

            <div className="rounded-3xl border border-primary/30 bg-primary/10 p-6">
              <p className="text-sm text-muted-foreground">Antwortzeit</p>
              <p className="text-2xl font-display font-bold text-gradient mt-1">&lt; 24 Stunden</p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
