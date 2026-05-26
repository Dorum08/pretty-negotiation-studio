import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/impressum")({
  component: ImpressumPage,
  head: () => ({
    meta: [
      { title: "Impressum – Negotiation Designer" },
      { name: "description", content: "Anbieterkennzeichnung gemäß § 5 TMG – Negotiation Designer Martin Henze." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
});

function ImpressumPage() {
  return (
    <LegalLayout
      eyebrow="Impressum"
      title={<>Anbieter&shy;kennzeichnung.</>}
      intro="Angaben gemäß § 5 TMG."
    >
      <h2>Negotiation Designer</h2>
      <p>
        Martin Henze<br />
        Sommerauer Str. 7<br />
        63863 Eschau<br />
        Deutschland
      </p>

      <h3>Kontakt</h3>
      <p>
        Telefon: +49 (0) 9184 808 82 97<br />
        E-Mail: <a href="mailto:contact@negotiation-designer.de">contact@negotiation-designer.de</a><br />
        Web: <a href="https://www.negotiation-designer.de">www.negotiation-designer.de</a>
      </p>

      <h3>Vertretungsberechtigt</h3>
      <p>Martin Henze (Inhaber)</p>

      <h3>Umsatzsteuer-ID</h3>
      <p>USt-IdNr.: DE 123456789</p>

      <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
      <p>Martin Henze, Anschrift wie oben.</p>
    </LegalLayout>
  );
}
