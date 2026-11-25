# madita.ai – Website-Entwurf

Statischer Export des Website-Relaunch-Entwurfs aus dem Claude-Design-Canvas (CI November 2026). Ein Entwurf, keine Live-Website.

## Seiten

| Datei | Inhalt |
| --- | --- |
| `index.html` | Startseite (Version 1 aus Figma, animiert) |
| `produkt.html` | Produkt · Warum Madita |
| `preise.html` | Preise (älterer Entwurfsstand) |
| `compliance.html` | Sicherheit & Compliance (älterer Entwurfsstand) |
| `kontakt.html` | Kontakt / Demo (älterer Entwurfsstand) |

## Technik

- Jede Seite enthält ihre Vorlage in `<x-dc>` und ihre Logik in `<script type="text/x-dc">`, so wie im Canvas.
- `assets/js/dc-lite.js` rendert das im Browser mit [Preact](https://preactjs.com/) (`assets/js/preact.min.js`, MIT-Lizenz, siehe `assets/js/PREACT-LICENSE.txt`). Kein Build-Schritt nötig.
- Bilder, Icons und der Pitch-Film liegen in `assets/media/`.

## GitHub Pages

Settings → Pages → Source: „Deploy from a branch“, Branch `main`, Ordner `/ (root)`.

## Offene Punkte im Entwurf

- Hotline-Nummer, Kununu-/Glassdoor-Badges und einige Texte sind Platzhalter oder unbestätigt.
- Zitate stammen von madita.ai; Nutzung bitte freigeben lassen.
- Die Stimme von Madita ist die Vorlese-Stimme des Browsers, keine Aufnahme.
