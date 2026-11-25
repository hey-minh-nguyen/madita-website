# madita.ai Design System

Farben, Typografie, Raster, Logos, Komponenten und Richtlinien für madita.ai, die KI-Recruiterin von HeyJobs.

**Doku-Seite:** https://svenzuehlke.github.io/madita-design-system/ (sobald GitHub Pages aktiviert ist)

## Inhalt

| Pfad | Was |
|---|---|
| `src/guidelines.md` | Das Markenhandbuch: Tonalität, Farbe, Typografie, Layout, Bildsprache, Logo, Icons, Bewegung, Qualitätsregeln |
| `src/tokens/tokens.json` | Alle Tokens (Farben, Schrift, Abstände, Radien, Schatten, Layout, Größen) |
| `src/tokens/tokens.css` | Dieselben Tokens als CSS Custom Properties, generiert |
| `src/components/bundle.css` · `bundle.js` | Die Komponenten (React 18, global `window.Madita`, Klassenpräfix `md-`) |
| `src/components/index.d.ts` | Props aller Komponenten |
| `src/components/<Name>/` | Regeln (`README.md`) und Live-Vorschau (`preview.html`) je Komponente |
| `src/assets/` | Logos (mit indigo „.ai“), Signet, Icons |
| `docs/` | Die gebaute Doku-Seite für GitHub Pages |

## Einsetzen

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap">
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="bundle.css">
```

Alle Werte heißen wie in `tokens.json`: `var(--indigo)`, `var(--space-4)`, `var(--radius-lg)`. Wer in einem anderen Stack baut (Next.js, Webflow), übernimmt Klassen und Markup aus `bundle.js`/`bundle.css` 1:1.

## Doku-Seite neu bauen

```bash
pip install markdown
python3 scripts/build.py
```

Das Skript liest `src/` und `site/` und schreibt `docs/`. Danach `docs/` mitcommitten.

## GitHub Pages

Settings → Pages → Source „Deploy from a branch“ → Branch `main`, Ordner `/docs`.

Die Seite ist per `robots.txt` und `noindex` von Suchmaschinen ausgeschlossen, aber für alle mit dem Link erreichbar.

## Quelle

Figma „madita.ai 2027“ (Seiten CI/CD und Website). Die Qualitätsregeln folgen dem Skill [unslop](https://github.com/heydamir/unslop) von Damir Sokolovsky (CC BY 4.0). React 18.3.1 liegt unter MIT-Lizenz in `docs/vendor/`.
