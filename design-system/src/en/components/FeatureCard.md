# FeatureCard

A feature tile as a **widget**: at the top a dark mini UI of the product (232 × 168, `radius-sm`, 16 px padding, `surface-inverse`; chips inside `radius-xs`) that shows the benefit instead of claiming it, below it a title (`title`, 20 px Bold) and exactly one sentence (`body`) in `ink-strong`.

- Card 264 × 386, `radius-lg`, 16 px padding, surface from the accent family: lime, mint, turquoise, sky-blue (apple as a reserve). Neighbouring cards never share a colour.
- **Choose a widget:** `WidgetLanguages` (languages), `WidgetStatus` (availability, live state), `WidgetChart` (growth, scale), `WidgetChecklist` (compliance, readiness). One widget per card; custom widgets follow the same rules: dark panel, header in grey-40, content made of StatusChips, bars or big words, subtle motion.
- **CTA card:** without `widget`, `tone="indigo"`, white title at the top, `action` = `Button variant="inverse"` at the bottom. Always the last card in the row.
- Title two to three words, sentence max. ~60 characters, as the card has a fixed height.
- Always place the row in a `FeatureGrid`.
