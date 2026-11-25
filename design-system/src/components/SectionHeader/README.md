# SectionHeader

Der Kopf jeder Section: SectionLabel → H2 (fluid 28–40 px, max. `measure-heading`) → Lead (max. `measure-text`). Abstände: Label zu Headline `space-10`, Headline zu Lead `space-6`.

- `align="center"` (Standard) für alle Haupt-Sections; `align="left"` nur neben einem Bild (Intro „Hallo, ich bin Madita.“).
- `title` darf genau ein `Highlight` enthalten.
- Der Consumer liefert `label`, `title`, Lead als `children`; danach folgt der Inhalt mit `space-16` Abstand.
