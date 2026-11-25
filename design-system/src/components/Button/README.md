# Button

Pillenförmiger Button in Plus Jakarta Sans Bold 13 px, 44 px hoch (mit und ohne Pfeil), Padding 12/20, Pfeil 18 px mit 8 px Abstand.

**Varianten**
- `primary` (indigo, weißer Text): der Standard-CTA. Höchstens einer pro Sichtbereich.
- `dark` (grey): der CTA in der Navigation, dort mit `size="nav"` (40 px, Padding 8/16).
- `accent` (lime, grey Text): CTA auf `surface-brand` (Interview-Demo, Newsletter).
- `inverse` (weiß, grey Text): CTA auf farbigen Kacheln.
- `outline` (Rahmen `line-strong`): Sekundäraktion, immer mit `icon="arrow"` („In jede Sprache reinhören“).
- `size="xs"` (28 px): nur als Hinweis-Pill auf Bühnen.

**Inhalt:** Verb oder Nutzen, Satzanfang groß: „Kostenlos ausprobieren“, „Interview starten“. Kein Ausrufezeichen, kein Punkt.

**Der Consumer liefert:** `children` (Label), optional `href` (rendert `<a>`), `onClick`, `type`.

**Nicht:** zwei `primary` nebeneinander; `accent` auf Weiß (zu wenig Kontur); eigene Farben.
