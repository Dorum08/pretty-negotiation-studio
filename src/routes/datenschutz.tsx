import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/datenschutz")({
  component: DatenschutzPage,
  head: () => ({
    meta: [
      { title: "Datenschutz – Negotiation Designer" },
      { name: "description", content: "Datenschutzerklärung von Negotiation Designer Martin Henze nach DSGVO." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
});

function DatenschutzPage() {
  return (
    <LegalLayout
      eyebrow="Datenschutz"
      title={<><span className="text-gradient">Datenschutz</span> auf Augenhöhe.</>}
      intro="Verarbeitung personenbezogener Daten gemäß DSGVO und TMG."
    >
      <h2>1. Allgemeine Hinweise</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. Ich verarbeite Ihre Daten daher
        ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
      </p>
      <p>
        In dieser Datenschutzerklärung informiere ich Sie darüber, wie ich personenbezogene Daten auf meiner Website
        verarbeite, zu welchen Zwecken das geschieht und welche Rechte Sie haben.
      </p>

      <h2>2. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
        Martin Henze<br />
        Sommerauer Str. 7, 63863 Eschau<br />
        +49 (0) 9184 808 82 97<br />
        <a href="mailto:contact@negotiation-designer.de">contact@negotiation-designer.de</a>
      </p>

      <h2>3. Erhebung und Speicherung personenbezogener Daten</h2>
      <p>
        Wenn Sie meine Website aufrufen, übermittelt Ihr Browser automatisch bestimmte Informationen an den Server
        meiner Website. Diese Daten werden temporär in sogenannten Logfiles gespeichert. Dazu gehören:
      </p>
      <ul>
        <li>IP-Adresse Ihres Endgeräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Referrer-URL (Website, von der Sie auf meine Seite gelangt sind)</li>
        <li>verwendeter Browser und ggf. Betriebssystem</li>
        <li>Name Ihres Internetanbieters</li>
      </ul>
      <p>Diese Informationen benötige ich, um:</p>
      <ul>
        <li>einen reibungslosen Verbindungsaufbau sicherzustellen</li>
        <li>die Nutzung der Website technisch zu ermöglichen</li>
        <li>die Systemsicherheit und -stabilität auszuwerten</li>
        <li>mein Webangebot technisch zu optimieren</li>
      </ul>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>

      <h2>4. Cookies</h2>
      <p>
        Meine Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Browser automatisch speichert. Einige
        Cookies sind technisch notwendig, um grundlegende Funktionen der Website bereitzustellen. Andere dienen der
        statistischen Auswertung oder Marketingzwecken.
      </p>
      <p>Sie können in Ihrem Browser oder über das Cookie-Banner festlegen, welche Cookies Sie zulassen möchten.</p>
      <ul>
        <li>Notwendige Cookies: Art. 6 Abs. 1 lit. f DSGVO</li>
        <li>Alle anderen Cookies: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
      </ul>

      <h2>5. Kontaktformular</h2>
      <p>
        Wenn Sie mir über ein Kontaktformular oder per E-Mail schreiben, verarbeite ich Ihre Angaben (z. B. Name,
        E-Mail-Adresse, Nachricht), um Ihre Anfrage zu beantworten. Diese Daten gebe ich nicht ohne Ihre ausdrückliche
        Einwilligung weiter.
      </p>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>

      <h2>6. Hosting</h2>
      <p>
        Meine Website wird über Wix.com Ltd., Nemal St. 40, 6350671 Tel Aviv, Israel, bereitgestellt. Wix speichert
        Ihre Daten auf gesicherten Servern. Wix kann für bestimmte Dienste Subunternehmer einsetzen und Daten außerhalb
        der EU verarbeiten. Laut Wix erfolgt die Datenverarbeitung unter Einhaltung der DSGVO, u. a. durch den
        Abschluss von Standardvertragsklauseln.
      </p>
      <p>
        Weitere Informationen:{" "}
        <a href="https://de.wix.com/about/privacy" target="_blank" rel="noopener">de.wix.com/about/privacy</a>
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>Sie haben folgende Rechte in Bezug auf Ihre personenbezogenen Daten:</p>
      <ul>
        <li>Auskunft (Art. 15 DSGVO)</li>
        <li>Berichtigung (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen Verarbeitung (Art. 21 DSGVO)</li>
        <li>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
        <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>

      <h2>8. Widerspruchsrecht</h2>
      <p>
        Wenn Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, jederzeit
        Widerspruch gegen die Verarbeitung einzulegen, wenn sich aus Ihrer besonderen Situation Gründe dafür ergeben.
      </p>

      <h2>9. Aktualität und Änderung</h2>
      <p>
        Ich behalte mir vor, diese Datenschutzerklärung zu aktualisieren, falls rechtliche oder technische Änderungen
        dies erforderlich machen. Aktueller Stand: 07.07.2025.
      </p>

      <h2>10. Kontakt bei Datenschutzfragen</h2>
      <p>
        Bei Fragen zum Datenschutz können Sie sich jederzeit an mich wenden:<br />
        Martin Henze · <a href="mailto:contact@negotiation-designer.de">contact@negotiation-designer.de</a>
      </p>
    </LegalLayout>
  );
}
