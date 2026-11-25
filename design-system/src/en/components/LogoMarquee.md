# LogoMarquee

Endless row of customer logos under “Recruiting teams already working with Madita”. Runs slowly, pauses on hover, stands still with `prefers-reduced-motion`.

- Customer logos are third-party brands: use the original files in their original colours (as `<img>`, 40 px high), never recolour or redraw.
- The preview shows placeholders.
- **ATS list:** `rows={3}` splits the logos into thirds: rows 1 and 3 run to the right, row 2 to the left, each at a slightly different speed. Hovering the strip pauses all rows so recruiters can find and click their system.
- The consumer provides the logos as `children` and optionally `duration` (seconds per loop) and `rows` (1 or 3).
