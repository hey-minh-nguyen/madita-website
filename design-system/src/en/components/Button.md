# Button

Pill-shaped button in Plus Jakarta Sans Bold 13 px, 44 px high (with and without arrow), padding 12/20, arrow 18 px with an 8 px gap.

**Variants**
- `primary` (indigo, white text): the default CTA. At most one per viewport.
- `dark` (grey): the CTA in the navigation, there with `size="nav"` (40 px, padding 8/16).
- `accent` (lime, grey text): CTA on `surface-brand` (interview demo, newsletter).
- `inverse` (white, grey text): CTA on coloured tiles.
- `outline` (border `line-strong`): secondary action, always with `icon="arrow"` (“Listen in every language”).
- `size="xs"` (28 px): only as a hint pill on stages.

**Content:** a verb or benefit, sentence case: “Try for free”, “Start interview”. No exclamation mark, no full stop.

**The consumer provides:** `children` (label), optional `href` (renders `<a>`), `onClick`, `type`.

**Don't:** two `primary` buttons side by side; `accent` on white (too little contrast); custom colours.
