# NavBar

Header, 88 px high, white: logo on the left (`madita-logo-grey.svg` with indigo “.ai”, 28 px high), the links centred between the logo and the language switch (DM Sans Medium 14, `ink`, 24 px apart), on the right “Sign in” as a text link and the `primary` button “Try for free” in `size="nav"` (40 px).

- Below the bar sits a soft shadow that fades out to the sides (radial gradient grey 10% → 0, 20 px high), the brand's only shadow exception.
- `autoHide` (on by default): hides when scrolling down and reappears when scrolling up; on desktop also when the mouse touches the top edge (16 px). With `sticky` it stays pinned at the top.
- Link flyouts must be usable: a click opens, hover keeps them open, 350 ms close delay, Esc and a click outside close them.
- Below 960 px: links and sign-in disappear, a menu button appears and calls `onMenu`; open the `Sheet` there.
- The consumer provides `links`, `logoSrc` and the targets for sign-in and CTA.
