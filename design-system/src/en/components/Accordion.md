# Accordion

Addition (shadcn-inspired): question-and-answer list for FAQ, pricing and compliance. Questions in `title` size, a plus sign in an indigo-10 circle that turns into a × cross.

- One question per row, phrased as a real question, answer in two to three sentences.
- Default: one open (`defaultOpen`), `multiple` only for long lists.
- Fully keyboard accessible, `aria-expanded` / `region` set.
- Plus and cross are drawn as two bars so they sit exactly centred in the circle.
- Keyboard focus: the whole row becomes an `indigo-10` surface (`radius-md`, 12 px on the sides and 20 px top and bottom around the text) with indigo text, no tight outline.
