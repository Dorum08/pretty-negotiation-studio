import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
  head: () => ({
    meta: [
      { title: "Cookie-Richtlinie – Negotiation Designer" },
      { name: "description", content: "Informationen zu Cookies und Tracking-Technologien auf negotiation-designer.de." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap" },
    ],
  }),
});

function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Cookies"
      title={<><span className="text-gradient">Cookie-</span>Richtlinie.</>}
      intro="Wie diese Website Cookies und ähnliche Technologien einsetzt."
    >
      <h2>1. Was ist ein Cookie?</h2>
      <p>
        Ein Cookie ist eine kleine Datei aus Buchstaben und Zahlen, die auf den Computer heruntergeladen wird, wenn
        Nutzer auf bestimmte Websites zugreifen. In der Regel ermöglichen es Cookies einer Website, den Computer eines
        Nutzers zu erkennen.
      </p>
      <p>
        Das Wichtigste, was man über die von Wix platzierten Cookies wissen muss: Sie machen die Website etwas
        nutzerfreundlicher, z. B. durch die Speicherung von Website-Präferenzen und Spracheinstellungen.
      </p>

      <h2>2. Warum verwenden wir Cookies?</h2>
      <p>Wir können Cookies und ähnliche Technologien für unterschiedliche Zwecke verwenden, beispielsweise:</p>
      <ul>
        <li>aus Sicherheitsgründen und zum Schutz vor Betrug sowie um Cyber-Angriffe zu erkennen und zu verhindern</li>
        <li>um ausgewählte Dienste zur Verfügung stellen zu können</li>
        <li>um die Performance, den Betrieb und die Wirksamkeit unserer Dienste zu überwachen und zu analysieren</li>
        <li>um das Nutzererlebnis zu verbessern</li>
      </ul>

      <h2>3. Cookie-Übersicht</h2>
      <p>
        Eine Übersicht der auf Wix-Websites möglicherweise verwendeten Cookies finden Sie{" "}
        <a href="https://support.wix.com/de/article/cookies-und-deine-website-bei-wix" target="_blank" rel="noopener">
          hier
        </a>.
      </p>

      <h2>4. Optionen</h2>
      <p>
        Um mehr über Cookies zu erfahren, u. a. wie man erkennt, welche Cookies gesetzt wurden und wie man sie verwaltet,
        löscht und blockiert, empfehlen wir einen Besuch auf{" "}
        <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener">aboutcookies.org</a> oder{" "}
        <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener">allaboutcookies.org</a>.
      </p>
      <p>
        Alternativ ist es auch möglich, dass der Browser Cookies grundsätzlich blockiert. Dazu müssen Nutzer die
        Cookie-Einstellungen im Browser entsprechend ändern. Diese Einstellungen befinden sich normalerweise im Menü des
        Browsers unter „Optionen" oder „Präferenzen".
      </p>
      <p>
        Das Löschen unserer Cookies oder die Deaktivierung zukünftiger Cookies oder Tracking-Technologien kann zur Folge
        haben, dass bestimmte Bereiche oder Funktionen unserer Dienste nicht mehr zur Verfügung stehen oder das
        Nutzererlebnis anderweitig beeinträchtigt wird.
      </p>

      <h3>Browser-Anleitungen</h3>
      <ul>
        <li><a href="https://support.mozilla.org/de/kb/cookies-informationen-websites-auf-ihrem-computer" target="_blank" rel="noopener">Firefox</a></li>
        <li><a href="https://support.google.com/chrome/answer/95647?hl=DE" target="_blank" rel="noopener">Google Chrome</a></li>
        <li><a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari (macOS)</a></li>
        <li><a href="https://support.apple.com/de-de/HT201265" target="_blank" rel="noopener">Safari (iOS)</a></li>
        <li><a href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener">Internet Explorer</a></li>
      </ul>

      <p>
        Um die Verwendung eigener Daten durch Google Analytics auf allen Websites abzulehnen, nutzen Sie:{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">tools.google.com/dlpage/gaoptout</a>.
      </p>

      <p>
        Wir können diese Cookie-Richtlinie aktualisieren. Wir bitten Nutzer, diese Seite regelmäßig aufzurufen, um sich
        über den aktuellen Stand in Bezug auf die Verwendung von Cookies auf dem Laufenden zu halten.
      </p>
    </LegalLayout>
  );
}
