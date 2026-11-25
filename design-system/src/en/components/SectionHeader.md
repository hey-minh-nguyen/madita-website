# SectionHeader

The head of every section: SectionLabel → H2 (fluid 28–40 px, max. `measure-heading`) → lead (max. `measure-text`). Spacing: label to headline `space-10`, headline to lead `space-6`.

- `align="center"` (default) for all main sections; `align="left"` only next to an image.
- `title` may contain exactly one `Highlight`.
- The consumer provides `label`, `title` and the lead as `children`; the content follows with `space-16`.
