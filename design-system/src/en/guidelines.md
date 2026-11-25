madita.ai is the AI recruiter by HeyJobs. The website speaks to B2B recruiting teams and should feel friendly, human and technically confident: lots of white, a clear Indigo, fresh accent tiles, no black. Build every page from the tokens and components of this system; don't invent your own colours, radii or shadows.

## How to use the system

- Load `tokens.css` (custom properties for colours, spacing, radii, layout, sizes), then `components/bundle.css`. All values are named as in `tokens.json`: `var(--indigo)`, `var(--space-4)`, `var(--radius-lg)`.
- Fonts come from Google Fonts: Plus Jakarta Sans (400–800) and DM Sans (variable, opsz 9–40):
  `https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap`
- The React components live in `components/bundle.js` as `window.Madita` (React 18). Props are in `components/index.d.ts`, rules per component in `components/<Name>/README.md`.
- If you build in another stack (Next.js, Astro, Webflow), copy the classes and markup from `bundle.js`/`bundle.css` one to one and keep the `md-` prefixes.
- Type styles exist as classes in `tokens.css` (`.display`, `.h2`, `.body` …); inside components use the `md-` classes.

## Content and tone of voice

- **Language:** German first, English as a full second version. In German, customers are addressed formally („Ihre KI-Recruiterin“). In English, address is direct and friendly.
- **Madita speaks in the first person** when she introduces herself: “Hi, I'm Madita, your AI recruiter.” “I run AI interviews at human quality.” Otherwise the brand talks about Madita in the third person (“How Madita works with you”).
- **Inclusive language:** in German with a colon (Kandidat:innen, Bewerber:innen, Recruiter:innen); in English gender-neutral (candidates, recruiters).
- **Short and specific:** one benefit per sentence, numbers instead of adjectives (“Live in days, not quarters.”, “in over 90 languages”).
- **Name trust plainly:** GDPR, EU AI Act, hosting in Frankfurt, documents for the works council. Factual, without fear words.
- **Headlines:** one message, one highlight on the benefit word. No exclamation marks, no emojis, no full stop at the end of short headlines, buttons and labels. Only paragraphs of several sentences end with a full stop.
- **Exclamation marks:** avoid them in body text too; a factual statement is enough.
- **CTAs:** “Try for free” (DE: „Kostenlos ausprobieren“) is the main CTA; otherwise verb + object (“Start interview”, “Listen in every language”).
- **Numbers in German:** comma as the decimal separator, full stop for thousands, non-breaking space before % and € („25 %“, „8,25 €“, „42.800 €“). The € sign always follows the amount („390 €“, never „€ 390“). Ranges with an en dash and no spaces („30–40 %“), units with a space („48 h“), thresholds with the sign in front („< 20 €“, „> 50 %“).
- **Numbers in English:** full stop as the decimal separator, comma for thousands, € before the amount, no space before % (“25%”, “€8.25”, “€42,800”, “30–40%”).
- **Quotation marks:** German „…“, English “…”.

## Colour

- **Indigo (`indigo`, #343DBA) is the key colour.** Primary button, accent word in the hero headline, interview stage, newsletter bar. White text on it (8.3:1).
- **Text is `ink` (grey #1E1E1E), never pure black.** `ink-strong` (Dark Indigo) for navigation and card titles.
- **Lime is the marker.** `marker` behind one or two headline words and as an `accent` CTA on Indigo. Never use lime as a text colour.
- **Accent families** (lime, apple, mint, turquoise, sky-blue, each with -20 and -10) are surfaces for tiles and stages, never text. **Text on them is `ink-strong` (Dark Indigo)**: titles, body text, links, figures, and the text in lime pills. Icons in black circles stay white. Mint is the default stage for product screenshots.
- **Functional colours** (success, info, error, warning, orange + -tint) only for states, always together with a word or icon. Orange and red are not brand accents.
- **Contrasts that matter:** ink on surface 16.7:1 · white on indigo 8.3:1 · indigo-20 on indigo 5.8:1 · ink on lime 13.8:1 · indigo on indigo-10 7.3:1.
- **Limits:** `grey-40` and `ink-disabled` only reach 2.9:1 on white, so use them for placeholders, at 24 px and up, or on dark surfaces. `success` as text only on grey/indigo-dark.
- No dark theme is defined. Dark product UI appears as a screenshot on the white page.

## Typography

- **All headlines in Plus Jakarta Sans Bold (700), letter spacing 0.** No ExtraBold.
- **Scale:** `display` 64 px (home page headline only) · `h1` 48 px (page titles) · `h2` 36 px (section headlines and page endings) · `h3` 22 px (subheadings in boxes, steps, legal texts) · `stat` 40 px (figures). All fluid; the values are the desktop maximum.
- **Body text in DM Sans:** `body` 15/1.7 everywhere, `title` 20 Bold for card titles, `nav` 13 Medium, `caption` 12.
- **Quotes are always italic**, using real italic fonts (never a computed slant): large quotes in `quote-large` (Plus Jakarta Sans SemiBold 600 Italic, 25 px), short quotes and quotes in body text in `quote` (DM Sans Regular Italic, 15 px).
- **Buttons and labels** in `button` (Plus Jakarta Sans Bold 13).
- **Input fields** always in `body` (DM Sans Regular 15), the same in every form.
- Headlines `text-wrap: balance`, lead max. `measure-text` (520 px), headline max. `measure-heading` (640 px).
- **Highlights** always sit behind the text, also in two-line headlines. Every page has at least one highlight in its page title, legal pages included.
- No other typefaces.

## Layout and spacing

- **Container:** content centred, max. `container` (1228 px); hero and closing headline max. `container-wide` (1280 px). Page margin `gutter` 24 px on mobile, 48 px from 768 px.
- **Sections:** every section 96 px top and bottom (desktop), 64 px on mobile, including the first one under the menu bar and the page ending. Every section starts with a centred `SectionHeader`, then `space-16` to the content.
- **Page ending:** the same on every page: `h2` headline (36 px) with highlight and a `primary` button.
- **Grid:** strictly 4-point steps (`space-1` … `space-60`) for every padding, every gap and every fixed height, inside components too. Buttons are 44 px high (padding 12/20), 40 px in the menu bar (8/16). Pills and section labels are 32 px high (padding 0/14, 12 px) so they never outshout the headline.
- **Text heroes** (only pill and headline, no image) get 32 px at the bottom instead of 96 px, so there is no empty strip.
- **Feature cards are widgets:** five `FeatureCard`s of 264 × 386 in the `FeatureGrid` (1384 px, wider than `container`), horizontally scrollable with snap below 1424 px. Each card shows a dark mini UI of the product at the top (`WidgetLanguages`, `WidgetStatus`, `WidgetChart`, `WidgetChecklist`) and a title plus one sentence below. The feature is shown, not claimed. On the website, seven tiles sit in a 3-column grid; the first and last are double width with the widget on the right.
- **Figures:** three columns, rows separated by `Divider`.
- Lots of white space: rather one more section than two ideas in one.

## Surfaces, radii, shadows

- Radii from the CI: `radius-xs` 4 px (chips inside widgets), `radius-sm` 5 px (widget panel, chips), `radius-md` 10 px (smaller boxes), `radius-lg` 15 px (large boxes, images, screenshots, stages); `radius-pill` for buttons, labels, inputs; `radius-marker` 3 px for the marker.
- **Nested radii:** inner = outer − padding, never below 4 px. Example: feature card 15 px with 16 px padding → widget panel 5 px → chips 4 px.
- **Flat:** no shadows on cards, buttons or images. `shadow-overlay` only for dialog, sheet and toast; `focus-ring` for every keyboard focus.
- No gradients as a design element (except a subtle darkening under text on video).

## Imagery

- **Functional:** in functional applications Madita only appears in front of a neutral grey background. All shots: [Madita neutral grey (Google Drive)](https://drive.google.com/drive/folders/1ONFyvGrTvsxFW1iyFaWihlCwZ_UbQ-Vt?usp=drive_link).
- **Emotional:** authentic, slightly documentary scenes of Madita at work: desk, screen, team. Neutral, desaturated colours, natural crops, focus on the person. No posed stock photo looks. All shots: [Madita in scene (Google Drive)](https://drive.google.com/drive/folders/1uhtHCq3vkUTV1ZsMTWS3Ny4QWBVo3mo8?usp=drive_link).
- **Product:** app screenshots on `mint` or `surface-subtle` stages with `radius-lg`; dark product UI may sit on the white page.
- **Hero:** Madita as a round portrait (224 px) below headline and lead, without ring, glow or pulse. Videos (pitch, forum recording) sit directly on the page without a frame, with `radius-lg`.
- Images always with `radius-lg`, except full-bleed hero media.

## Logo

- The wordmark always sets the “.ai” in `indigo`. `madita-logo-grey.svg` (grey with indigo “.ai”) on light surfaces, `madita-logo-white.svg` (white with indigo “.ai”) on grey, indigo-dark and images. On Indigo only `madita-logo-allwhite.svg` (all white), otherwise the “.ai” disappears. The signets `madita-favicon-grey.svg` and `madita-favicon-white.svg` are for avatars and small surfaces.
- The favicon on every page is `madita-favicon-lime.svg`: the grey signet on a lime tile with radius 14 at 64 px. That keeps it visible in light and dark browsers. For iOS the same tile without radius exists as `apple-touch-icon.png` (180 px); iOS rounds it itself.
- Never recolour, distort, add effects or redraw. In the navigation 28 px high, on the left. Next to it, website, brandbook and design system show only a plain text label (e.g. "Brandbook"), no pill. The DE/EN switch marks the active language in grey, not indigo, so indigo in the header stays reserved for the CTA.
- Clear space and minimum size are not defined in the source; keep at least the height of the “m” free.

## Iconography

- **One set: [Phosphor Icons](https://phosphoricons.com), weight Regular** (MIT licence). Don't mix in other sets or weights: no Bold, no Fill, no Duotone.
- **18 px** (`icon-size`) everywhere: in buttons, lists and icon circles; 8 px gap to the text. The only exception is the menu icon in the mobile navigation at 24 px.
- In the bundle as `<Icon name="…" />`, in buttons via `icon="…"` (`icon="arrow"` = `arrow-right`). The curated set lives in `assets/Icons/` as SVG; if an icon is missing, add the matching one from Phosphor Regular (viewBox 256, `fill="currentColor"`).
- Icons in boxes sit in a black circle (`grey`) and are white. Otherwise single-colour in the text colour.
- Icons accompany, they never decorate: each one sits next to a word or carries a `label`. No sparkle, magic wand or robot icons for AI.
- No letter-spaced uppercase labels, not in the footer either; sentence case.
- No emojis as a design element.

## Motion

- Calm and functional: hover colour change 150 ms, accordion/overlay 200 ms, `ease`. Buttons: the arrow moves 3 px on hover, a click presses to 98%.
- Widgets may come alive: languages run as a ticker, bars grow, chips fade in one after the other, the online dot pulses. Quietly, never blinking. They only start when the card is in view.
- **On scroll:** lime markers draw from left to right, figures count up, cards rise 8 px into view with a short stagger. On the process page a timeline grows along.
- **On load:** industry heroes fade in image and text staggered.
- Quotes change automatically every 6 seconds, pause on hover or focus and stay controllable with arrows and dots.
- Customer logos run as a `LogoMarquee`; the ATS list as `LogoMarquee rows={3}` (a third per row, alternating direction), pausing on hover.
- No pulsing ring or glow around Madita or other images.
- `prefers-reduced-motion` stops all of it.

## Home page structure

1. `NavBar`
2. Hero: `display` headline with accent word in `ink-brand`, lead, Madita portrait, two buttons side by side (`primary` “Go to the test interview”, `outline` “Try for free”), award badge
3. “Hey, I'm Madita!”: headline, lead and pitch video without a frame
4. “Experience a Madita interview”: embedded test interview
5. Field experience: four figures 2 × 2 with a quote, numbers count up on scroll
6. “Three steps to your first interview”: three `Step` cards with an icon in a black circle
7. Benefits: six cards with an icon in a black circle
8. “Voices from the field”: one section, two white cards side by side (candidates, recruiters), each its own `Testimonial` carousel
9. Features “What Madita can do”: seven widget tiles in a 3-column grid
10. Integrations: `LogoMarquee rows={3}` with all ATS
11. Closing CTA: `h2` headline with highlight, `primary` button (as on every page)
12. Footer: white with signet, description, LinkedIn and four columns (product, industries, company with award badge, legal); below it an indigo bar with the all-white logo, “Sign in” and the `accent` button “Try for free”; at the very bottom “A product of HeyJobs” on the left and the © on the right

The website no longer shows public prices or an ROI calculator. No euro amount for Madita on any page; the price question is answered by the demo request.

## Components

**From the Figma file:** Button, SectionLabel, Highlight, SectionHeader, NavBar, EmailCapture, Checkbox, StatusChip, Stat, FeatureGrid, FeatureCard with the widgets WidgetLanguages, WidgetStatus, WidgetChart and WidgetChecklist, Testimonial, Step, Badge, Divider, LogoMarquee.

**Deliberate additions (shadcn-inspired, in the madita look):**
- **Accordion**: FAQ on compliance and pricing.
- **Tabs**: product views and steps on one surface.
- **Sheet**: mobile navigation (Figma only shows desktop).
- **Dialog**: request a demo, video, start an interview.
- **Field**: contact and demo forms with label, hint and error.
- **Switch**: monthly/yearly on the pricing page.
- **Tooltip**: explanations for DPA, TOMs, EU AI Act.
- **Toast**: feedback after submitting.

## Quality rules (anti-slop)

Based on the skill [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky (CC BY 4.0). Check before publishing any page:

- **No AI look:** no gradients on surfaces or text, no glow, no coloured shadows, no blobs, no emojis, no pulsing rings around images.
- **Grid:** every spacing, padding and fixed height on the 4-point grid; equal things are equal in size (one button height per role, one padding per card type).
- **Nested radii:** inner = outer − padding, never below 4 px.
- **Icons:** one set (Phosphor Regular), one size (18 px).
- **Text:** no exclamation marks, no full stop at the end of short headlines, buttons and labels, no letter-spaced uppercase labels, numbers in one format (see content and tone of voice).
- **No invented facts:** figures and quotes only with a source or approval.
- **Template check:** would the page also work for another product if you swapped the name? Then Madita is missing: a widget, a portrait, a real product moment.

**Deliberate exceptions for madita:** headlines in Bold 700 (unslop recommends 400–500), the movements under “Motion” (scroll reveals, markers, counters, tickers, marquees), a lime marker in every headline and section pills above every section.

## Accessibility

- Every focus shows `focus-ring` (2 px white gap + 2 px indigo).
- Text meets 4.5:1 on its surface (exceptions above under Colour).
- States never by colour alone: errors, success and status carry a word or icon.
- Forms have visible labels; the hidden label in `EmailCapture` stays for screen readers.
- Motion respects `prefers-reduced-motion`.
