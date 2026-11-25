# FeatureCard

Eine Feature-Kachel als **Widget**: oben ein dunkles Mini-UI des Produkts (232 × 168, `radius-sm`, Innenabstand 16 px, `surface-inverse`; Chips darin `radius-xs`), das den Nutzen zeigt statt ihn zu behaupten, darunter Titel (`title`, 20 px Bold) und genau ein Satz (`body`) in `ink-strong`.

- Karte 264 × 386, `radius-lg`, Innenabstand 16 px, Fläche aus der Akzentfamilie: lime, mint, turquoise, sky-blue (apple als Reserve). Benachbarte Karten nie gleichfarbig.
- **Widget wählen:** `WidgetLanguages` (Sprachen), `WidgetStatus` (Verfügbarkeit, Live-Zustand), `WidgetChart` (Wachstum, Skalierung), `WidgetChecklist` (Compliance, Bereitschaft). Ein Widget pro Karte; eigene Widgets folgen denselben Regeln: dunkles Panel, Kopfzeile in grey-40, Inhalte aus StatusChips, Balken oder großen Wörtern, dezente Bewegung.
- **CTA-Karte:** ohne `widget`, `tone="indigo"`, Titel weiß oben, `action` = `Button variant="inverse"` unten. Immer die letzte Karte der Reihe.
- Titel zwei bis drei Wörter, Satz max. ~60 Zeichen – die Karte hat feste Höhe.
- Reihe immer über `FeatureGrid`.
