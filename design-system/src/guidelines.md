madita.ai ist die KI-Recruiterin von HeyJobs. Die Website spricht B2B-Recruiting-Teams an und soll freundlich, menschlich und technisch souverän wirken: viel Weiß, ein klares Indigo, frische Akzentkacheln, kein Schwarz. Baue jede Seite aus den Tokens und Komponenten dieses Systems; erfinde keine eigenen Farben, Radien oder Schatten.

## So setzt du das System ein

- Lade `tokens.css` (Custom Properties für Farben, Abstände, Radien, Layout, Größen) und danach `components/bundle.css`. Alle Werte heißen wie in `tokens.json`: `var(--indigo)`, `var(--space-4)`, `var(--radius-lg)`.
- Schriften kommen von Google Fonts – Plus Jakarta Sans (400–800) und DM Sans (variabel, opsz 9–40):
  `https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap`
- Die React-Komponenten liegen in `components/bundle.js` als `window.Madita` (React 18). Props stehen in `components/index.d.ts`, Regeln je Komponente in `components/<Name>/README.md`.
- Baust du in einem anderen Stack (Next.js, Astro, Webflow), übernimm die Klassen und das Markup aus `bundle.js`/`bundle.css` 1:1 und behalte die `md-`-Präfixe.
- Typo-Stile gibt es als Klassen aus `tokens.css` (`.display`, `.h2`, `.body` …); in Komponenten nutze die `md-`-Klassen.

## Inhalt und Tonalität

- **Sprache:** Deutsch. Kund:innen werden gesiezt („Ihre KI-Recruiterin“).
- **Madita spricht in der Ich-Form**, wo sie sich selbst vorstellt: „Hi, ich bin Madita, Ihre KI-Recruiterin.“ – „Ich führe KI-Interviews in menschlicher Qualität.“ Sonst spricht die Marke über Madita in der dritten Person („So arbeitet Madita mit Ihnen“).
- **Gendern mit Doppelpunkt:** Kandidat:innen, Bewerber:innen, Recruiter:innen.
- **Kurz und konkret:** ein Nutzen pro Satz, Zahlen statt Adjektive („Live in Tagen, nicht in Quartalen.“, „in über 90 Sprachen“).
- **Vertrauen benennen:** DSGVO, EU AI Act, Hosting in Frankfurt, Unterlagen für den Betriebsrat – sachlich, ohne Angstbegriffe.
- **Headlines:** eine Aussage, ein Highlight auf dem Nutzen-Wort. Kein Ausrufezeichen, keine Emojis, kein Punkt am Ende kurzer Headlines, Buttons und Labels. Nur Absätze aus mehreren Sätzen enden mit Punkt.
- **Ausrufezeichen** auch im Fließtext vermeiden; eine sachliche Aussage reicht.
- **CTAs:** „Kostenlos ausprobieren“ ist der Haupt-CTA; sonst Verb + Objekt („Interview starten“, „In jede Sprache reinhören“).
- **Zahlen:** Komma als Dezimaltrenner, Tausenderpunkt, geschütztes Leerzeichen vor % und € („25 %“, „8,25 €“, „42.800 €“). Das €-Zeichen steht immer hinter dem Betrag („390 €“, nie „€ 390“). Spannen mit Halbgeviertstrich ohne Leerzeichen („30–40 %“, „50–100 €“), Einheiten mit Leerzeichen („48 h“, „24 h“), Schwellen mit Zeichen davor („< 20 €“, „> 50 %“). Die Figma-Datei mischt Schreibweisen – im Code immer so.
- **Anführungszeichen:** „deutsch“.

## Farbe

- **Indigo (`indigo`, #343DBA) ist die Key Color.** Primärbutton, Akzentwort in der Hero-Headline, Interview-Bühne, Newsletter-Leiste. Weißer Text darauf (8,3:1).
- **Text ist `ink` (grey #1E1E1E) – nie reines Schwarz.** `ink-strong` (indigo-dark) für Navigation und Kartentitel.
- **Lime ist der Marker.** `marker` hinter ein bis zwei Headline-Wörtern und als `accent`-CTA auf Indigo. Lime nie als Textfarbe.
- **Akzentfamilien** – lime, apple, mint, turquoise, sky-blue, jeweils mit -20 und -10 – sind Flächen für Kacheln und Bühnen, nie Text. **Auf ihnen steht `ink-strong` (Dark Indigo)** – Titel, Fließtext, Links, Kennzahlen; auch der Text in Lime-Pills. Icons in schwarzen Kreisen bleiben weiß. Mint ist die Standard-Bühne für Produkt-Screenshots.
- **Funktionsfarben** (success, info, error, warning, orange + -tint) nur für Zustände, immer zusammen mit Wort oder Icon. Orange und Rot sind keine Markenakzente.
- **Kontraste, die zählen:** ink auf surface 16,7:1 · weiß auf indigo 8,3:1 · indigo-20 auf indigo 5,8:1 · ink auf lime 13,8:1 · indigo auf indigo-10 7,3:1.
- **Grenzen:** `grey-40` und `ink-disabled` erreichen auf Weiß nur 2,9:1 – nur für Platzhalter, ab 24 px oder auf dunklen Flächen. `success` als Text nur auf grey/indigo-dark.
- Ein Dark Theme ist nicht definiert. Dunkle Produkt-UI erscheint als Screenshot auf der weißen Seite.

## Typografie

- **Alle Headlines in Plus Jakarta Sans Bold (700), Laufweite 0.** Kein ExtraBold.
- **Skala:** `display` 64 px (nur Startseiten-Headline) · `h1` 48 px (Seitentitel) · `h2` 36 px (Section-Headlines und Seitenabschlüsse) · `h3` 22 px (Unterüberschriften in Boxen, Schritten, Rechtstexten) · `stat` 40 px (Kennzahlen). Alle fluid, die Werte sind das Desktop-Maximum.
- **Fließtext in DM Sans:** `body` 15/1.7 überall, `title` 20 Bold für Kartentitel, `nav` 13 Medium, `caption` 12.
- **Zitate sind immer kursiv**, mit echten Italic-Schnitten (nie schräg gerechnet): große Zitate in `quote-large` (Plus Jakarta Sans SemiBold 600 Italic, 25 px), kurze Zitate und Zitate im Fließtext in `quote` (DM Sans Regular Italic, 15 px).
- **Buttons und Labels** in `button` (Plus Jakarta Sans Bold 13).
- **Eingabefelder** immer in `body` (DM Sans Regular 15), in allen Formularen gleich.
- Headlines `text-wrap: balance`, Lead max. `measure-text` (520 px), Headline max. `measure-heading` (640 px).
- **Highlights** liegen immer hinter dem Text, auch bei zweizeiligen Headlines. Jede Seite hat mindestens im Seitentitel ein Highlight, auch Rechtstexte.
- Keine weiteren Schriften.

## Layout und Abstände

- **Container:** Inhalte zentriert, max. `container` (1228 px); Hero- und Schluss-Headline max. `container-wide` (1280 px). Seitenrand `gutter` 24 px mobil, 48 px ab 768 px.
- **Sections:** jede Section 96 px oben und unten (Desktop), 64 px mobil – auch die erste unter der Menüleiste und der Seitenabschluss. Jede Section beginnt mit `SectionHeader` (zentriert), danach `space-16` bis zum Inhalt.
- **Seitenabschluss:** auf jeder Seite gleich – `h2`-Headline (36 px) mit Highlight und `primary`-Button.
- **Raster:** strikt 4er-Schritte (`space-1` … `space-60`) für jedes Padding, jeden Gap und jede feste Höhe – auch in Komponenten. Buttons 44 px hoch (Padding 12/20), in der Menüleiste 40 px (8/16). Pills und Section-Labels 32 px hoch (Padding 0/14, 12 px), damit sie die Headline nicht übertönen.
- **Text-Heroes** (nur Pill und Headline, kein Bild) bekommen unten 32 px statt 96 px, damit kein leerer Streifen entsteht.
- **Feature-Karten sind Widgets:** fünf `FeatureCard` à 264 × 386 im `FeatureGrid` (1384 px, breiter als `container`), unter 1424 px horizontal scrollbar mit Snap. Jede Karte zeigt oben ein dunkles Mini-UI des Produkts (`WidgetLanguages`, `WidgetStatus`, `WidgetChart`, `WidgetChecklist`) und darunter Titel plus einen Satz – das Feature wird gezeigt, nicht behauptet. Auf der Website liegen sieben Kacheln in einem 3er-Raster, die erste und letzte doppelt breit mit Widget rechts.
- **Kennzahlen:** drei Spalten, Reihen durch `Divider` getrennt.
- Viel Weißraum: lieber eine Section mehr als zwei Ideen in einer.

## Flächen, Radien, Schatten

- Radien aus der CI: `radius-xs` 4 px (Chips im Widget), `radius-sm` 5 px (Widget-Panel, Chips), `radius-md` 10 px (kleinere Boxen), `radius-lg` 15 px (große Boxen, Bilder, Screenshots, Bühnen); `radius-pill` für Buttons, Labels, Inputs; `radius-marker` 3 px für den Marker.
- **Verschachtelte Radien:** innen = außen − Innenabstand, nie unter 4 px. Beispiel: Feature-Karte 15 px mit 16 px Padding → Widget-Panel 5 px → Chips 4 px.
- **Flach:** keine Schatten auf Karten, Buttons oder Bildern. `shadow-overlay` nur für Dialog, Sheet und Toast; `focus-ring` für jeden Tastaturfokus.
- Keine Verläufe als Gestaltungsmittel (ausgenommen ein dezenter Abdunkler unter Text auf Video).

## Bildsprache

- **Funktional:** In funktionalen Anwendungen erscheint Madita ausschließlich vor neutral grauem Hintergrund. Alle Motive: [Madita neutral grau (Google Drive)](https://drive.google.com/drive/folders/1ONFyvGrTvsxFW1iyFaWihlCwZ_UbQ-Vt?usp=drive_link).
- **Emotional:** Authentische, leicht dokumentarische Szenen von Madita im Arbeitsumfeld – Schreibtisch, Bildschirm, Team. Neutrale, entsättigte Farbstimmung, natürliche Bildausschnitte, Fokus auf der Person. Keine gestellten Stockfoto-Posen. Alle Motive: [Madita in Szene (Google Drive)](https://drive.google.com/drive/folders/1uhtHCq3vkUTV1ZsMTWS3Ny4QWBVo3mo8?usp=drive_link).
- **Produkt:** Screenshots der App auf `mint`- oder `surface-subtle`-Bühnen mit `radius-lg`; dunkle Produkt-UI darf auf der weißen Seite stehen.
- **Hero:** Madita als rundes Porträt (224 px) unter Headline und Lead, ohne Ring, Glow oder Puls. Videos (Pitch, Forum-Aufzeichnung) stehen ohne Rahmen mit `radius-lg` direkt auf der Seite.
- Bilder immer mit `radius-lg`, außer vollflächige Hero-Medien.

## Logo

- Die Wortmarke setzt das „.ai“ immer in `indigo`. `madita-logo-grey.svg` (grey mit indigo „.ai“) auf hellen Flächen, `madita-logo-white.svg` (weiß mit indigo „.ai“) auf grey, indigo-dark und Bildern. Auf indigo nur `madita-logo-allwhite.svg` (ganz weiß), sonst verschwindet das „.ai“. Das Signet `madita-favicon-grey.svg` und `madita-favicon-white.svg` für Avatare und kleine Flächen.
- Favicon auf allen Seiten ist `madita-favicon-lime.svg`: das Signet in grey auf einer Lime-Kachel mit Radius 14 von 64 px. So bleibt es im hellen und im dunklen Browser sichtbar. Für iOS gibt es dieselbe Kachel ohne Radius als `apple-touch-icon.png` (180 px), iOS rundet selbst.
- Nie umfärben, verzerren, mit Effekten versehen oder nachzeichnen. In der Navigation 28 px hoch, links. Rechts daneben steht auf Website, Brandbook und Design System nur ein schlichter Text-Label (z. B. „Brandbook“), keine Pill. Der DE/EN-Umschalter markiert die aktive Sprache in grey, nicht in indigo, damit Indigo im Header dem CTA vorbehalten bleibt.
- Schutzzone und Mindestgröße sind in der Quelle nicht definiert – halte mindestens die Höhe des „m“ frei.

## Ikonografie

- **Ein Set: [Phosphor Icons](https://phosphoricons.com), Gewicht Regular** (MIT-Lizenz). Keine anderen Sets mischen, keine anderen Gewichte – kein Bold, kein Fill, kein Duotone.
- **18 px** (`icon-size`) überall gleich – in Buttons, Listen und Icon-Kreisen; Abstand zum Text 8 px. Einzige Ausnahme: das Menü-Icon in der Mobilnavigation mit 24 px.
- Im Bundle als `<Icon name="…" />`, in Buttons über `icon="…"` (`icon="arrow"` = `arrow-right`). Der kuratierte Satz liegt unter `assets/Icons/` als SVG; fehlt ein Icon, das passende aus Phosphor Regular ergänzen (viewBox 256, `fill="currentColor"`).
- Icons in Boxen sitzen in einem schwarzen Kreis (`grey`) und sind weiß. Sonst einfarbig in der Textfarbe.
- Icons sind Begleiter, nie Deko: jedes steht neben einem Wort oder trägt ein `label`. Keine Funken-, Zauberstab- oder Roboter-Icons für KI.
- Keine Labels in Großbuchstaben mit Sperrung – auch nicht im Footer; Satzschreibweise.
- Keine Emojis als Gestaltungselement.

## Bewegung

- Ruhig und funktional: Hover-Farbwechsel 150 ms, Akkordeon/Overlay 200 ms, `ease`. Buttons: Pfeil rückt beim Hover 3 px, Klick drückt auf 98 %.
- Widgets dürfen leben: Sprachen laufen als Ticker, Balken wachsen, Chips blenden nacheinander ein, der Online-Punkt pulsiert – leise, nie blinkend. Sie starten erst, wenn die Karte im Bild ist.
- **Beim Scrollen:** Lime-Marker ziehen sich von links nach rechts auf, Kennzahlen zählen hoch, Karten heben sich mit 8 px und kurzem Versatz ins Bild. Auf der Prozessseite wächst eine Zeitleiste mit.
- **Beim Laden:** Branchen-Heroes blenden Bild und Text gestaffelt ein.
- Zitate wechseln alle 6 Sekunden automatisch, halten bei Hover oder Fokus an und bleiben per Pfeil und Punkt bedienbar.
- Kundenlogos laufen als `LogoMarquee`; die ATS-Liste als `LogoMarquee rows={3}` (Drittel je Reihe, Richtung wechselnd), hält bei Hover an.
- Kein pulsierender Ring oder Glow um Madita oder andere Bilder.
- `prefers-reduced-motion` stoppt alles davon.

## Seitenaufbau Startseite

1. `NavBar`
2. Hero: `display`-Headline mit Akzentwort in `ink-brand`, Lead, Madita-Porträt, zwei Buttons nebeneinander (`primary` „Zum Test-Interview“, `outline` „Kostenlos ausprobieren“), Award-Badge
3. „Hey, ich bin Madita!“: Headline, Lead und Pitch-Video ohne Rahmen
4. „Erleben Sie ein Madita-Interview“: eingebettetes Test-Interview
5. Praxiserfahrungen: vier Kennzahlen 2 × 2 mit Zitat, Zahlen zählen beim Scrollen hoch
6. „In drei Schritten zum Interview“: drei `Step`-Karten mit Icon im schwarzen Kreis
7. Vorteile: sechs Karten mit Icon im schwarzen Kreis
8. „Stimmen aus der Praxis“: ein Abschnitt, zwei weiße Karten nebeneinander (Kandidat:innen, Recruiter:innen), jede ein eigenes `Testimonial`-Karussell
9. Features „Das kann Madita“: sieben Widget-Kacheln im 3er-Raster
10. Integrationen: `LogoMarquee rows={3}` mit allen ATS
11. Schluss-CTA: `h2`-Headline mit Highlight, `primary`-Button (wie auf allen Seiten)
12. Footer: weiß mit Signet, Beschreibung, LinkedIn und vier Spalten (Produkt, Branchen, Unternehmen mit Award-Badge, Rechtliches); darunter eine indigo Leiste mit dem ganz weißen Logo, „Anmelden“ und `accent`-Button „Kostenlos ausprobieren“; ganz unten „Ein Produkt von HeyJobs“ links und das © rechts

Öffentliche Preise und ROI-Rechner gibt es auf der Website nicht mehr. Kein Euro-Betrag für Madita auf einer Seite; die Frage nach dem Preis beantwortet die Demo-Anfrage.

## Komponenten

**Aus der Figma-Datei:** Button, SectionLabel, Highlight, SectionHeader, NavBar, EmailCapture, Checkbox, StatusChip, Stat, FeatureGrid, FeatureCard mit den Widgets WidgetLanguages, WidgetStatus, WidgetChart und WidgetChecklist, Testimonial, Step, Badge, Divider, LogoMarquee.

**Bewusste Ergänzungen (shadcn-inspiriert, im madita-Look):**
- **Accordion** – FAQ zu Compliance und Preisen.
- **Tabs** – Produktansichten und Schritte auf einer Fläche.
- **Sheet** – mobile Navigation (Figma zeigt nur Desktop).
- **Dialog** – Demo anfragen, Video, Interview starten.
- **Field** – Kontakt- und Demo-Formulare mit Label, Hinweis und Fehler.
- **Switch** – monatlich/jährlich auf der Preisseite.
- **Tooltip** – Erklärungen für AVV, TOMs, EU AI Act.
- **Toast** – Rückmeldung nach dem Absenden.

## Qualitätsregeln (Anti-Slop)

Nach dem Skill [unslop](https://github.com/heydamir/unslop) von Damir Sokolovsky (CC BY 4.0). Vor jeder Veröffentlichung einer Seite prüfen:

- **Kein KI-Look:** keine Verläufe auf Flächen oder Text, kein Glow, keine farbigen Schatten, keine Blobs, keine Emojis, keine pulsierenden Ringe um Bilder.
- **Raster:** jeder Abstand, jedes Padding, jede feste Höhe auf dem 4er-Raster; gleiche Dinge sind gleich groß (eine Button-Höhe pro Rolle, ein Padding pro Kartentyp).
- **Radien verschachtelt:** innen = außen − Innenabstand, nie unter 4 px.
- **Icons:** ein Set (Phosphor Regular), eine Größe (18 px).
- **Text:** keine Ausrufezeichen, kein Punkt am Ende kurzer Headlines, Buttons und Labels, keine gesperrten Großbuchstaben-Labels, Zahlen in einem Format (siehe Inhalt und Tonalität).
- **Keine erfundenen Fakten:** Kennzahlen und Zitate nur mit Quelle bzw. Freigabe.
- **Template-Check:** Würde die Seite auch für ein anderes Produkt passen, wenn man den Namen tauscht? Dann fehlt Madita – ein Widget, ein Porträt, ein echter Produktmoment.

**Bewusste Ausnahmen für madita:** Headlines in Bold 700 (unslop empfiehlt 400–500), die Bewegungen unter „Bewegung“ (Scroll-Einblendungen, Marker, Zähler, Ticker, Laufbänder), Lime-Marker in jeder Headline und Section-Pills über jeder Section.

## Zugänglichkeit

- Jeder Fokus zeigt `focus-ring` (2 px weiße Lücke + 2 px indigo).
- Text erfüllt 4,5:1 auf seiner Fläche (Ausnahmen oben unter Farbe).
- Zustände nie nur über Farbe: Fehler, Erfolg und Status tragen Wort oder Icon.
- Formulare haben sichtbare Labels; der versteckte Label im `EmailCapture` bleibt für Screenreader.
- Bewegung respektiert `prefers-reduced-motion`.
