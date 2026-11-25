# Accordion

Ergänzung (shadcn-inspiriert): Frage-Antwort-Liste für FAQ, Preise und Compliance. Fragen in `title`-Größe, Plus-Zeichen im indigo-10-Kreis, das sich zum ×-Kreuz dreht.

- Eine Frage pro Zeile, als echte Frage formuliert, Antwort zwei bis drei Sätze.
- Standard: eins offen (`defaultOpen`), `multiple` nur für lange Listen.
- Vollständig per Tastatur bedienbar, `aria-expanded` / `region` gesetzt.
- Plus- und Kreuz-Zeichen sind als zwei Balken gezeichnet, damit sie exakt im Kreis zentriert sitzen.
- Fokus per Tastatur: die ganze Zeile wird eine `indigo-10`-Fläche (`radius-md`, 12 px seitlich und 20 px oben/unten Luft um den Text) mit indigo Schrift, kein enger Rahmen.
