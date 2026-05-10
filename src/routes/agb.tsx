import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/agb")({
  component: AGBPage,
  head: () => ({
    meta: [
      { title: "AGB – Negotiation Designer" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen für Schulungen und Beratungen von Negotiation Designer Martin Henze." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
});

function AGBPage() {
  return (
    <LegalLayout
      eyebrow="AGB"
      title={<>Allgemeine <span className="text-gradient">Geschäftsbedingungen.</span></>}
      intro="Für das Einzelunternehmen Negotiation Designer Martin Henze."
    >
      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen dem Einzelunternehmen
        Negotiation Designer Martin Henze, nachfolgend „Anbieter" genannt, und dessen Kunden über die Durchführung
        von Schulungen und Beratungen im Bereich spieltheoretischem Wissen für Industrieunternehmen.
      </p>

      <h2>2. Leistungen</h2>
      <p>
        Der Anbieter bietet Schulungen zur Vermittlung von spieltheoretischem Wissen für Industrieunternehmen an.
        Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder Vertrag.
      </p>

      <h2>3. Vertragsschluss</h2>
      <p>
        Ein Vertrag kommt durch schriftliche oder elektronische Bestätigung des Angebots durch den Kunden zustande.
        Änderungen oder Ergänzungen bedürfen der Schriftform.
      </p>

      <h2>4. Vergütung und Zahlungsbedingungen</h2>
      <p>
        Die Vergütung richtet sich nach dem jeweils vereinbarten Angebot. Rechnungen sind innerhalb von 30 Tagen
        nach Rechnungsstellung ohne Abzug zu zahlen, sofern nichts anderes vereinbart wurde.
      </p>

      <h2>5. Stornierung und Rücktritt</h2>
      <p>Storniert der Kunde eine bereits bestätigte Schulung, gelten folgende Bedingungen:</p>
      <ul>
        <li>Mehr als 4 Wochen vor Veranstaltungsbeginn: <strong>0 %</strong> Stornierungsgebühr</li>
        <li>Zwischen 2 und 4 Wochen vor Veranstaltungsbeginn: <strong>50 %</strong> Stornierungsgebühr</li>
        <li>Weniger als 2 Wochen vor Veranstaltungsbeginn: <strong>80 %</strong> Stornierungsgebühr</li>
      </ul>
      <p>Die Benennung eines Ersatzteilnehmers ist jederzeit kostenfrei möglich.</p>

      <h2>6. Mitwirkungspflichten des Kunden</h2>
      <p>
        Der Kunde stellt sicher, dass die für die Durchführung der Schulung erforderlichen Voraussetzungen
        (z. B. geeignete Räumlichkeiten, technische Ausstattung) rechtzeitig und – wenn vereinbart – auf eigene
        Kosten bereitgestellt werden, sofern der Veranstaltungsort nicht durch den Anbieter organisiert wird.
      </p>

      <h2>7. Datenschutz</h2>
      <p>
        Personenbezogene Daten werden ausschließlich zur Vertragsabwicklung und gemäß den geltenden
        Datenschutzbestimmungen verarbeitet. Weitere Informationen finden sich in der Datenschutzerklärung des Anbieters.
      </p>

      <h2>8. Urheberrecht und Nutzungsrechte</h2>
      <p>
        Alle im Rahmen der Schulungen bereitgestellten Unterlagen, Präsentationen und Inhalte sind urheberrechtlich
        geschützt. Die Nutzung ist ausschließlich für den eigenen Gebrauch des Kunden bestimmt. Eine Weitergabe an
        Dritte oder anderweitige Nutzung bedarf der vorherigen schriftlichen Zustimmung des Anbieters.
      </p>

      <h2>9. Haftung</h2>
      <p>
        Der Anbieter haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Für einfache Fahrlässigkeit haftet
        der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), wobei die Haftung auf den
        vertragstypischen, vorhersehbaren Schaden begrenzt ist. Eine weitergehende Haftung ist ausgeschlossen. Die
        Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt.
      </p>

      <h2>10. Vertraulichkeit</h2>
      <p>
        Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen
        geheim zu halten und nicht an Dritte weiterzugeben.
      </p>

      <h2>11. Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist der Sitz des Anbieters. Sollte eine
        Bestimmung dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        Die Parteien verpflichten sich, die unwirksame Bestimmung durch eine solche zu ersetzen, die dem
        wirtschaftlichen Zweck der unwirksamen Bestimmung möglichst nahekommt.
      </p>
    </LegalLayout>
  );
}
