# LogoMarquee

Endlos laufende Reihe der Kundenlogos unter „Recruiting-Teams, die bereits mit Madita arbeiten“. Läuft langsam, hält bei Hover an, steht still bei `prefers-reduced-motion`.

- Kundenlogos sind fremde Marken: Originaldateien in Originalfarben einsetzen (als `<img>`, 40 px hoch), nie umfärben oder nachzeichnen.
- Die Vorschau zeigt Platzhalter.
- **ATS-Liste:** `rows={3}` teilt die Logos in Drittel: Reihe 1 und 3 laufen nach rechts, Reihe 2 nach links, jede leicht anders schnell. Ein Hover über die Leiste hält alle Reihen an, damit Recruiter:innen ihr System finden und anklicken können.
- Der Consumer liefert die Logos als `children` und optional `duration` (Sekunden pro Durchlauf) und `rows` (1 oder 3).
