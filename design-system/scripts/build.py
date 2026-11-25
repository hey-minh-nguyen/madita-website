#!/usr/bin/env python3
import html
import json
import re
import shutil
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
OUT = ROOT / "docs"
BLOBS = {
    "46be558fee5923f76c6ba1e93bd4a241": "assets/logos/madita-logo-grey.svg",
    "163804a337729348a00229347a0763d4": "assets/logos/madita-logo-grey.svg",
    "d46b45c1fee61ef1569969e81e924022": "assets/logos/madita-logo-white.svg",
    "2a7fabadd2a60d717cf6c10b265ea066": "assets/logos/madita-logo-white.svg",
    "ff7da66ab417684c5af6b19d918652d5": "assets/logos/madita-favicon-grey.svg",
    "fcbda3275362061a0dd002b42343adad": "assets/logos/madita-favicon-white.svg",
    "55fcb9af57f78c1ab192209bd59bf993": "assets/icons/arrow-right.svg",
    "f246ba2d68e5ebfee8f3046b3f77cfee": "assets/icons/pause.svg",
    "92d3b613fbece5d21be32c8fec9babf7": "assets/icons/speaker-slash.svg",
}
GROUP_ORDER = ["Icons", "Aktionen", "Text", "Layout", "Navigation", "Inhalt", "Features", "Produkt", "Formulare", "Ergänzungen"]
FONTS = "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap"

tokens = json.loads((SRC / "tokens" / "tokens.json").read_text())
EN_TOK = json.loads((SRC / "en" / "tokens.json").read_text())
LANG = "de"
UI = {
    "kopieren": "copy", "kursiv": "italic", "Abstände": "Spacing", "Radien": "Radii",
    "Größen und Layout": "Sizes and layout", "Schatten": "Shadows", "Wert": "Value", "Verwendung": "Usage",
    "laden": "download", "Vorschau öffnen": "Open preview", "Vorschau": "preview",
    "Komponentengruppen": "Component groups", "Richtlinien": "Guidelines",
    "Marke": "Brand", "Akzente": "Accents", "Funktion": "Functional", "Semantisch": "Semantic",
    "Aktionen": "Actions", "Text": "Text", "Layout": "Layout", "Navigation": "Navigation", "Inhalt": "Content",
    "Features": "Features", "Produkt": "Product", "Formulare": "Forms", "Ergänzungen": "Extras", "Weitere": "More",
    "Wortmarke grey mit indigo .ai": "Wordmark grey with indigo .ai", "Wortmarke weiß mit indigo .ai": "Wordmark white with indigo .ai",
    "Signet grey": "Signet grey", "Signet weiß": "Signet white", "Wortmarke ganz weiß, für indigo": "Wordmark all white, for indigo",
    "Favicon: Signet auf Lime": "Favicon: signet on lime", "madita.ai Farb- und Formenwelt": "madita.ai colours and shapes",
}


def L(s):
    return UI.get(s, s) if LANG == "en" else s


def tt(s):
    return EN_TOK.get(s, s) if LANG == "en" and isinstance(s, str) else s
colors = {t["name"]: t for t in tokens["color"]["tokens"]}


def value_of(t):
    v = t["value"]
    return v if isinstance(v, str) else v.get("light")


def resolve(name, seen=()):
    v = value_of(colors[name])
    m = re.fullmatch(r"\{(.+)\}", v)
    if m and m.group(1) not in seen:
        return resolve(m.group(1), seen + (name,))
    return v


def md(text):
    out, prev = [], ""
    for line in text.splitlines():
        if re.match(r"\s*([-*]|\d+\.) ", line) and prev.strip() and not re.match(r"\s*([-*]|\d+\.) ", prev):
            out.append("")
        out.append(line)
        prev = line
    return markdown.markdown("\n".join(out), extensions=["extra", "sane_lists"])


def esc(s):
    return html.escape(str(s), quote=True)


def build_tokens_css():
    lines = [f"/* {tokens['name']} — generated from tokens.json */", ":root {"]
    for t in tokens["color"]["tokens"]:
        v = value_of(t)
        m = re.fullmatch(r"\{(.+)\}", v)
        lines.append(f"  --{t['name']}: {'var(--' + m.group(1) + ')' if m else v};")
    for fam in ("spacing", "radius", "shadow", "layout", "size"):
        for t in tokens.get(fam, {}).get("tokens", []):
            lines.append(f"  --{t['name']}: {t['value']};")
    for k, v in tokens["type"]["families"].items():
        lines.append(f"  --font-{k}: {v};")
    lines.append("}")
    for g in tokens["type"]["groups"]:
        fam = g["family"]
        for s in g["styles"]:
            decl = [f"font-family: var(--font-{fam})", f"font-size: {s['fontSize']}", f"line-height: {s['lineHeight']}", f"font-weight: {s['fontWeight']}"]
            if s.get("letterSpacing"):
                decl.append(f"letter-spacing: {s['letterSpacing']}")
            if s.get("fontStyle"):
                decl.append(f"font-style: {s['fontStyle']}")
            lines.append(f".{s['name']} {{ {'; '.join(decl)}; }}")
    return "\n".join(lines) + "\n"


def fix_blobs(text, prefix):
    for blob, path in BLOBS.items():
        text = text.replace(f"/_blob/{blob}", prefix + path)
    return text


def components():
    items = []
    for d in sorted((SRC / "components").iterdir()):
        if not d.is_dir() or d.name == "Cover":
            continue
        prev = (d / "preview.html").read_text()
        first = prev.splitlines()[0]
        group = (re.search(r'group="([^"]+)"', first) or [None, "Weitere"])[1]
        height = int((re.search(r"height=(\d+)", first) or [None, 200])[1])
        readme = (d / "README.md").read_text() if (d / "README.md").exists() else ""
        items.append({"name": d.name, "group": group, "height": height, "readme": readme, "preview": prev})
    return items


def preview_page(c):
    body = "\n".join(c["preview"].splitlines()[1:])
    body = fix_blobs(body, "../")
    head = (
        f'<link rel="stylesheet" href="{FONTS}">'
        '<link rel="stylesheet" href="../tokens.css"><link rel="stylesheet" href="../bundle.css">'
        '<script src="../vendor/react.production.min.js"></script>'
        '<script src="../vendor/react-dom.production.min.js"></script>'
        '<script src="../bundle.js"></script>'
        '<meta name="robots" content="noindex">'
        '<style>body{margin:0;background:var(--surface)}</style>'
    )
    return body.replace("<head>", "<head>" + head, 1)


def color_section():
    groups = [
        ("Marke", ["indigo", "indigo-dark", "indigo-20", "indigo-10", "grey", "grey-40", "grey-05", "white"]),
        ("Akzente", ["lime", "lime-20", "lime-10", "apple", "apple-20", "apple-10", "mint", "mint-20", "mint-10", "turquoise", "turquoise-20", "turquoise-10", "sky-blue", "sky-blue-20", "sky-blue-10"]),
        ("Funktion", ["success", "info", "error", "warning", "orange", "success-tint", "info-tint", "error-tint", "warning-tint", "orange-tint"]),
        ("Semantisch", [n for n, t in colors.items() if value_of(t).startswith("{")]),
    ]
    out = []
    for title, names in groups:
        cards = []
        for n in names:
            t = colors[n]
            hexv = resolve(n)
            alias = value_of(t)
            alias_txt = f'<span class="ds-alias">→ {esc(alias.strip("{}"))}</span>' if alias.startswith("{") else ""
            cards.append(
                f'<button class="ds-swatch" type="button" data-copy="{esc(hexv)}" aria-label="{esc(n)} {esc(hexv)} {L('kopieren')}">'
                f'<span class="ds-swatch__chip" style="background:{esc(hexv)}"></span>'
                f'<span class="ds-swatch__meta"><b>{esc(n)}</b><code>{esc(hexv.upper())}</code>{alias_txt}<span class="ds-swatch__use">{esc(tt(t.get("usage", "")))}</span></span></button>'
            )
        out.append(f'<h3 class="ds-h3">{L(title)}</h3><div class="ds-swatches">{"".join(cards)}</div>')
    return "".join(out)


def type_section():
    rows = []
    for g in tokens["type"]["groups"]:
        rows.append(f'<h3 class="ds-h3">{esc(tt(g["name"]))}</h3><p class="ds-note">{esc(tt(g.get("note", "")))}</p>')
        for s in g["styles"]:
            spec = f'{s["fontSize"]} / {s["lineHeight"]} · {s["fontWeight"]}' + (" · " + L("kursiv") if s.get("fontStyle") else "")
            rows.append(
                f'<div class="ds-type"><div class="ds-type__meta"><b>{esc(s["name"])}</b><code>{esc(spec)}</code><span>{esc(tt(s.get("usage", "")))}</span></div>'
                f'<div class="ds-type__sample {esc(s["name"])}">{esc(tt(s.get("sample", s["name"])))}</div></div>'
            )
    return "".join(rows)


def scale_section():
    sp = "".join(
        f'<div class="ds-scale"><code>{esc(t["name"])}</code><span class="ds-scale__bar" style="width:{esc(t["value"])}"></span><span>{esc(t["value"])}</span><span class="ds-scale__use">{esc(tt(t["usage"]))}</span></div>'
        for t in tokens["spacing"]["tokens"]
    )
    rd = "".join(
        f'<div class="ds-radius"><span class="ds-radius__box{" ds-radius__box--pill" if t["name"] == "radius-pill" else ""}" style="border-radius:{esc(t["value"])}"></span><b>{esc(t["name"])}</b><code>{esc(t["value"])}</code><span>{esc(tt(t["usage"]))}</span></div>'
        for t in tokens["radius"]["tokens"]
    )
    sz = "".join(
        f'<tr><td><code>{esc(t["name"])}</code></td><td>{esc(t["value"])}</td><td>{esc(tt(t["usage"]))}</td></tr>'
        for fam in ("size", "layout") for t in tokens[fam]["tokens"]
    )
    sh = "".join(
        f'<tr><td><code>{esc(t["name"])}</code></td><td><code class="ds-wrap">{esc(t["value"])}</code></td><td>{esc(tt(t["usage"]))}</td></tr>'
        for t in tokens["shadow"]["tokens"]
    )
    return (
        f'<h3 class="ds-h3">{L("Abstände")}</h3><p class="ds-note">{esc(tt(tokens["spacing"]["note"]))}</p><div class="ds-scales">{sp}</div>'
        f'<h3 class="ds-h3">{L("Radien")}</h3><p class="ds-note">{esc(tt(tokens["radius"]["note"]))}</p><div class="ds-radii">{rd}</div>'
        f'<h3 class="ds-h3">{L("Größen und Layout")}</h3><div class="ds-table-wrap"><table class="ds-table"><thead><tr><th>Token</th><th>{L("Wert")}</th><th>{L("Verwendung")}</th></tr></thead><tbody>{sz}</tbody></table></div>'
        f'<h3 class="ds-h3">{L("Schatten")}</h3><p class="ds-note">{esc(tt(tokens["shadow"]["note"]))}</p><div class="ds-table-wrap"><table class="ds-table"><thead><tr><th>Token</th><th>{L("Wert")}</th><th>{L("Verwendung")}</th></tr></thead><tbody>{sh}</tbody></table></div>'
    )


def assets_section():
    logos = [
        ("madita-logo-grey.svg", "Wortmarke grey mit indigo .ai", "light"),
        ("madita-logo-white.svg", "Wortmarke weiß mit indigo .ai", "dark"),
        ("madita-favicon-grey.svg", "Signet grey", "light"),
        ("madita-favicon-white.svg", "Signet weiß", "dark"),
        ("madita-logo-allwhite.svg", "Wortmarke ganz weiß, für indigo", "indigo"),
        ("madita-favicon-lime.svg", "Favicon: Signet auf Lime", "light"),
    ]
    tiles = "".join(
        f'<figure class="ds-asset ds-asset--{tone}"><div class="ds-asset__stage"><img src="assets/logos/{f}" alt="{esc(L(label))}"></div>'
        f'<figcaption><b>{esc(L(label))}</b><a href="assets/logos/{f}" download>{f} {L("laden")}</a></figcaption></figure>'
        for f, label, tone in logos
    )
    icons = "".join(
        f'<a class="ds-icon" href="assets/icons/{f.name}" download title="{f.stem} {L('laden')}">{f.read_text().replace("<svg ", "<svg aria-hidden=" + chr(34) + "true" + chr(34) + " ", 1)}<span>{f.stem}</span></a>'
        for f in sorted((SRC / "assets/icons").glob("*.svg"))
    )
    return (
        f'<h3 class="ds-h3">Logos</h3><div class="ds-prose">{md(((SRC / "en/assets-logos.md") if LANG == "en" else (SRC / "assets/logos/README.md")).read_text().split(chr(10), 1)[1])}</div><div class="ds-assets">{tiles}</div>'
        f'<h3 class="ds-h3">Icons</h3><div class="ds-prose">{md(((SRC / "en/assets-icons.md") if LANG == "en" else (SRC / "assets/icons/README.md")).read_text().split(chr(10), 1)[1])}</div><div class="ds-icons">{icons}</div>'
    )


def components_section(items):
    by_group = {}
    for c in items:
        by_group.setdefault(c["group"], []).append(c)
    order = [g for g in GROUP_ORDER if g in by_group] + [g for g in by_group if g not in GROUP_ORDER]
    out, nav = [], []
    for g in order:
        cards = []
        for c in by_group[g]:
            src_readme = (SRC / "en/components" / f'{c["name"]}.md') if LANG == "en" else None
            readme = re.sub(r"^# .*\n", "", src_readme.read_text() if src_readme and src_readme.exists() else c["readme"]).strip()
            cards.append(
                f'<article class="ds-comp" id="c-{esc(c["name"].lower())}">'
                f'<header class="ds-comp__head"><h4>{esc(c["name"])}</h4><a class="ds-link" href="previews/{esc(c["name"])}.html" target="_blank" rel="noopener">{L("Vorschau öffnen")}</a></header>'
                f'<div class="ds-comp__frame"><iframe src="previews/{esc(c["name"])}.html" title="{esc(c["name"])} {L("Vorschau")}" style="height:{c["height"] + 16}px"></iframe></div>'
                f'<div class="ds-prose ds-prose--small">{md(readme)}</div></article>'
            )
        out.append(f'<h3 class="ds-h3" id="g-{esc(g.lower())}">{esc(L(g))}</h3><div class="ds-comps">{"".join(cards)}</div>')
        nav.append(f'<a href="#g-{esc(g.lower())}">{esc(L(g))}</a>')
    return f'<nav class="ds-chips" aria-label="{L('Komponentengruppen')}">{"".join(nav)}</nav>' + "".join(out)


def guidelines_section():
    text = ((SRC / "en/guidelines.md") if LANG == "en" else (SRC / "guidelines.md")).read_text()
    intro, _, rest = text.partition("\n## ")
    rest = "## " + rest
    rest = re.sub(r"^## (.+)$", lambda m: "### " + m.group(1), rest, flags=re.M)
    heads = re.findall(r"^### (.+)$", rest, flags=re.M)
    toc = "".join(f'<a href="#r-{i}">{esc(h)}</a>' for i, h in enumerate(heads))
    body = md(rest)
    for i, h in enumerate(heads):
        body = body.replace(f"<h3>{esc(h, )}</h3>", f'<h3 id="r-{i}">{esc(h)}</h3>', 1)
        body = body.replace(f"<h3>{h}</h3>", f'<h3 id="r-{i}">{h}</h3>', 1)
    return intro.strip(), f'<nav class="ds-chips" aria-label="{L('Richtlinien')}">{toc}</nav><div class="ds-prose ds-prose--guide">{body}</div>'


def main():
    if OUT.exists():
        for p in OUT.iterdir():
            if p.name != "vendor":
                shutil.rmtree(p) if p.is_dir() else p.unlink()
    OUT.mkdir(exist_ok=True)
    (OUT / "tokens.css").write_text(build_tokens_css())
    (SRC / "tokens" / "tokens.css").write_text(build_tokens_css())
    shutil.copy(SRC / "components/bundle.css", OUT / "bundle.css")
    shutil.copy(SRC / "components/bundle.js", OUT / "bundle.js")
    shutil.copytree(SRC / "assets", OUT / "assets", ignore=shutil.ignore_patterns("README.md", "LICENSE*"))
    shutil.copy(SRC / "tokens/tokens.json", OUT / "tokens.json")
    shutil.copy(ROOT / "site/site.css", OUT / "site.css")
    shutil.copy(ROOT / "site/site.js", OUT / "site.js")
    shutil.copy(ROOT / "site/og.png", OUT / "og.png")
    (OUT / "previews").mkdir()
    items = components()
    for c in items:
        (OUT / "previews" / f"{c['name']}.html").write_text(preview_page(c))
    page = external_links_new_tab(render("de"))
    (OUT / "index.html").write_text(page)
    (OUT / "en").mkdir()
    (OUT / "en" / "index.html").write_text(external_links_new_tab(render("en")))
    (OUT / ".nojekyll").write_text("")
    (OUT / "robots.txt").write_text("User-agent: *\nDisallow: /\n")
    print("built", len(items), "components")


def external_links_new_tab(page):
    def fix(m):
        tag = m.group(0)
        return tag if "target=" in tag else tag[:-1] + ' target="_blank" rel="noopener">'
    return re.sub(r'<a\b[^>]*\bhref="https?://[^"]*"[^>]*>', fix, page)


def render(lang):
    global LANG
    LANG = lang
    items = components()
    intro, guide = guidelines_section()
    page = (ROOT / "site/index.template.html").read_text()
    page = (page.replace("{{FONTS}}", FONTS)
            .replace("{{INTRO}}", esc(intro))
            .replace("{{COLORS}}", color_section())
            .replace("{{TYPE}}", type_section())
            .replace("{{SCALES}}", scale_section())
            .replace("{{ASSETS}}", assets_section())
            .replace("{{COMPONENTS}}", components_section(items))
            .replace("{{COMPONENT_COUNT}}", str(len(items)))
            .replace("{{GUIDELINES}}", guide))
    if lang == "de":
        return page.replace("{{LANGSWITCH}}", '<div class="ds-lang" aria-label="Sprache"><span aria-current="true">DE</span><a href="en/" hreflang="en" lang="en">EN</a></div>')
    for a, b in json.loads((SRC / "en" / "template.json").read_text()).items():
        page = page.replace(a, b)
    page = page.replace("{{LANGSWITCH}}", '<div class="ds-lang" aria-label="Language"><a href="../" hreflang="de" lang="de">DE</a><span aria-current="true">EN</span></div>')
    page = re.sub(r'((?:src|href)=")(?!https?:|#|\.\./|mailto:)', r"\1../", page)
    return page


if __name__ == "__main__":
    main()
