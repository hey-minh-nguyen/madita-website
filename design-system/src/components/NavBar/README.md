# NavBar

Kopfzeile, 88 px hoch, weiß: Logo links (`madita-logo-grey.svg` mit indigo „.ai“, 28 px hoch), daneben mittig zwischen Logo und Sprachumschalter die Links (DM Sans Medium 14, `ink`, Abstand 24 px), rechts „Anmelden“ als Textlink und der `primary`-Button „Kostenlos ausprobieren“ in `size="nav"` (40 px).

- Unter der Leiste liegt ein weicher Schatten, der zu den Seiten ausläuft (radialer Verlauf grey 10 % → 0, 20 px hoch) – die einzige Schattenausnahme der Marke.
- `autoHide` (Standard an): blendet beim Runterscrollen aus und beim Hochscrollen wieder ein; auf Desktop auch, wenn die Maus den oberen Rand (16 px) berührt. Mit `sticky` bleibt sie oben angeheftet.
- Flyouts der Links müssen bedienbar sein: Klick öffnet, Hover hält offen, 350 ms Schließverzögerung, Esc und Klick außerhalb schließen.
- Unter 960 px: Links und Anmelden verschwinden, ein Menü-Button erscheint und ruft `onMenu` – dort das `Sheet` öffnen.
- Der Consumer liefert `links`, `logoSrc`, Ziele für Anmelden und CTA.
