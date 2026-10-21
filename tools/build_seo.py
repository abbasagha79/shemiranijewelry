#!/usr/bin/env python3
"""
Generate the on-page + technical SEO layer for the SHEMIRANI site.

Idempotent: re-run after adding a design (keep DESIGNS in sync with
assets/js/designs.js). It writes, into each page's <head>, a managed block
delimited by <!--SEO:START-->..<!--SEO:END-->: title, description, canonical,
Open Graph, Twitter Card, hreflang-free (single-URL bilingual site), and JSON-LD.
It also writes a <noscript> SEO fallback into the body so non-JS crawlers and
social/AI scrapers get real text, and emits robots.txt, sitemap.xml, llms.txt.

Run: python3 tools/build_seo.py
"""
import os, re, json, glob, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
SITE = "https://shemiranijewelry.com"
BRAND = "SHEMIRANI Jewelry"
TODAY = datetime.date.today().isoformat()

# Keep in sync with assets/js/designs.js (newest first is fine; order here is display order)
DESIGNS = [
    {"id": "regalia", "name": "REGALIA", "collection": "rings",
     "desc": "REGALIA is a men's signet ring in 18K gold with 16 diamonds (0.36 ct) — a four-diamond flower at its heart, framed in gold for a quiet, lasting presence.",
     "diamonds": "16 round diamonds, 0.36 ct", "weight18k": "5.25 g"},
    {"id": "imperia", "name": "IMPERIA", "collection": "rings",
     "desc": "IMPERIA is a men's ring in 18K gold with 17 diamonds (0.19 ct) — an eight-point star around a bezel-set centre stone, with Greek-key shoulders.",
     "diamonds": "17 round diamonds, 0.19 ct", "weight18k": "5.76 g"},
    {"id": "aurelis", "name": "AURELIS", "collection": "rings",
     "desc": "AURELIS is a men's ring in 18K gold with 47 diamonds (0.61 ct) — a woven gold top edged with pavé rows and a single centre stone.",
     "diamonds": "47 round diamonds, 0.61 ct", "weight18k": "5.76 g"},
]
COLLECTIONS = {
    "rings": "Rings", "earrings": "Earrings", "bracelets": "Bracelets",
    "bangles": "Bangles", "necklaces": "Necklaces", "pendants": "Pendants",
}

ORG = {
    "@context": "https://schema.org", "@type": "JewelryStore",
    "@id": SITE + "/#org", "name": "SHEMIRANI", "alternateName": "شمیرانی",
    "url": SITE + "/", "logo": SITE + "/assets/img/brand/shemirani-logo.png",
    "image": SITE + "/assets/img/brand/shemirani-logo.png",
    "description": "Fine jewellery designed and made by Abbas Shemirani — custom 18K gold and diamond rings, hand- and computer-designed, released in limited editions. Based in Karaj, Iran.",
    "slogan": "Jewelry design & craft",
    "founder": {"@type": "Person", "@id": SITE + "/#abbas", "name": "Abbas Shemirani"},
    "address": {"@type": "PostalAddress", "addressLocality": "Karaj",
                "addressRegion": "Alborz", "addressCountry": "IR"},
    "areaServed": [{"@type": "Country", "name": "Iran"}, "International"],
    "knowsAbout": ["jewellery design", "18K gold jewellery", "diamond rings",
                   "men's rings", "custom jewellery", "stone setting", "CAD jewellery design"],
    "sameAs": ["https://t.me/abbasamrahbari"],
    "makesOffer": [{"@type": "Offer", "itemOffered": {"@type": "Product", "name": d["name"]},
                    "url": SITE + "/designs/%s/" % d["id"]} for d in DESIGNS],
}
PERSON = {
    "@context": "https://schema.org", "@type": "Person", "@id": SITE + "/#abbas",
    "name": "Abbas Shemirani", "jobTitle": "Jewellery Designer & Maker",
    "worksFor": {"@id": SITE + "/#org"}, "url": SITE + "/#story",
    "description": "Jewellery designer and maker with 7+ years of experience in ideation, hand and CAD design, and gold production, drawing on his father's 35 years in jewellery-making and stone-setting. Has designed for Iran and three other countries.",
    "knowsAbout": ["jewellery design", "gold jewellery production", "diamond setting", "CAD / 3D jewellery design"],
    "hasCredential": [
        {"@type": "EducationalOccupationalCredential", "credentialCategory": "Jewellery design certificate (national)"},
        {"@type": "EducationalOccupationalCredential", "credentialCategory": "Jewellery design certificate (national)"},
        {"@type": "EducationalOccupationalCredential", "credentialCategory": "Jewellery design certificate (international)"},
        {"@type": "EducationalOccupationalCredential", "credentialCategory": "Jewellery design certificate (international)"},
        {"@type": "EducationalOccupationalCredential", "credentialCategory": "Entrepreneurship certificate"},
    ],
}

def crumb(items):
    return {"@context": "https://schema.org", "@type": "BreadcrumbList",
            "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": n, "item": u}
                                for i, (n, u) in enumerate(items)]}

def product(d):
    return {"@context": "https://schema.org", "@type": "Product",
            "name": "SHEMIRANI %s" % d["name"], "sku": d["name"],
            "url": SITE + "/designs/%s/" % d["id"],
            "image": [SITE + "/assets/img/%s/render-01.jpg" % d["id"]],
            "description": d["desc"], "category": "Rings",
            "brand": {"@type": "Brand", "name": "SHEMIRANI"},
            "material": "18K gold, diamond",
            "manufacturer": {"@id": SITE + "/#org"},
            "additionalProperty": [
                {"@type": "PropertyValue", "name": "Diamonds", "value": d["diamonds"]},
                {"@type": "PropertyValue", "name": "18K gold weight", "value": d["weight18k"]},
            ]}

def tags(page_url, title, desc, og_image, jsonld, image_alt=None):
    og_img = og_image if og_image.startswith("http") else SITE + "/" + og_image.lstrip("/")
    out = ["<!--SEO:START (generated by tools/build_seo.py — edit there, not here)-->"]
    out.append('<title>%s</title>' % title)
    out.append('<meta name="description" content="%s">' % desc)
    out.append('<link rel="canonical" href="%s">' % page_url)
    out.append('<meta property="og:type" content="%s">' % ("website" if page_url.rstrip("/") == SITE else "article"))
    out.append('<meta property="og:site_name" content="SHEMIRANI">')
    out.append('<meta property="og:title" content="%s">' % title)
    out.append('<meta property="og:description" content="%s">' % desc)
    out.append('<meta property="og:url" content="%s">' % page_url)
    out.append('<meta property="og:image" content="%s">' % og_img)
    out.append('<meta property="og:locale" content="en_US">')
    out.append('<meta property="og:locale:alternate" content="fa_IR">')
    out.append('<meta name="twitter:card" content="summary_large_image">')
    out.append('<meta name="twitter:title" content="%s">' % title)
    out.append('<meta name="twitter:description" content="%s">' % desc)
    out.append('<meta name="twitter:image" content="%s">' % og_img)
    for block in (jsonld if isinstance(jsonld, list) else [jsonld]):
        out.append('<script type="application/ld+json">%s</script>' %
                   json.dumps(block, ensure_ascii=False, separators=(",", ":")))
    out.append("<!--SEO:END-->")
    return "\n".join(out)

def inject_head(path, block):
    s = open(path, encoding="utf-8").read()
    s = re.sub(r'<!--SEO:START.*?<!--SEO:END-->\n?', '', s, flags=re.S)  # clear old
    s = re.sub(r'<title>.*?</title>\n?', '', s, count=1, flags=re.S)       # drop legacy title
    s = re.sub(r'<meta name="description"[^>]*>\n?', '', s, count=1)        # drop legacy desc
    s = re.sub(r'<meta property="og:[^>]*>\n?', '', s)                      # drop legacy OG
    s = re.sub(r'<link rel="apple-touch-icon"[^>]*>\n?', lambda m: m.group(0), s)
    # insert right before </head>
    s = s.replace("</head>", block + "\n</head>", 1)
    open(path, "w", encoding="utf-8").write(s)

def inject_noscript(path, html):
    s = open(path, encoding="utf-8").read()
    s = re.sub(r'<noscript class="seo-fallback">.*?</noscript>\n?', '', s, flags=re.S)
    block = '<noscript class="seo-fallback">%s</noscript>' % html
    s = s.replace("<body>", "<body>\n" + block, 1) if "<body>" in s else s
    # our pages have no literal <body> (added at publish) — insert after <main ...> instead
    if block not in s:
        s = re.sub(r'(<main[^>]*>)', r'\1\n' + block, s, count=1)
    open(path, "w", encoding="utf-8").write(s)

# ---- home ----
home_title = "SHEMIRANI — Custom 18K Gold & Diamond Rings | Jewellery Design, Karaj"
home_desc = ("Fine jewellery designed and made by Abbas Shemirani: custom 18K gold and diamond "
             "men's rings, hand- and computer-designed and released in limited editions. Based in Karaj, Iran.")
inject_head("index.html", tags(SITE + "/", home_title, home_desc,
            "assets/img/brand/shemirani-logo.png", [ORG, PERSON]))
inject_noscript("index.html",
    "<h1>SHEMIRANI — fine jewellery design &amp; craft</h1>"
    "<p>Custom 18K gold and diamond rings designed and made by Abbas Shemirani in Karaj, Iran. "
    "Each design is released in a limited edition.</p>"
    "<ul>" + "".join("<li><a href=\"/designs/%s/\">%s</a></li>" % (d["id"], d["name"]) for d in DESIGNS) + "</ul>")

# ---- design pages ----
for d in DESIGNS:
    url = SITE + "/designs/%s/" % d["id"]
    title = "%s — 18K Gold & Diamond Ring | SHEMIRANI" % d["name"]
    bc = crumb([("Home", SITE + "/"), (COLLECTIONS[d["collection"]], SITE + "/collections/%s/" % d["collection"]), (d["name"], url)])
    inject_head("designs/%s/index.html" % d["id"],
                tags(url, title, d["desc"], "assets/img/%s/render-01.jpg" % d["id"], [product(d), bc]))
    inject_noscript("designs/%s/index.html" % d["id"],
        "<h1>SHEMIRANI %s</h1><p>%s</p>"
        "<p><img src=\"/assets/img/%s/render-01.jpg\" alt=\"SHEMIRANI %s ring in 18K gold with diamonds\" width=\"600\"></p>"
        % (d["name"], d["desc"], d["id"], d["name"]))

# ---- collection pages ----
for cid, cname in COLLECTIONS.items():
    url = SITE + "/collections/%s/" % cid
    ds = [d for d in DESIGNS if d["collection"] == cid]
    if ds:
        desc = "%s by SHEMIRANI — %d custom 18K gold and diamond design%s: %s. Designed and made by Abbas Shemirani." % (
            cname, len(ds), "s" if len(ds) != 1 else "", ", ".join(d["name"] for d in ds))
    else:
        desc = "%s by SHEMIRANI — custom 18K gold and diamond jewellery by Abbas Shemirani. Designs in this collection are coming soon." % cname
    title = "%s | SHEMIRANI — 18K Gold & Diamond Jewellery" % cname
    bc = crumb([("Home", SITE + "/"), ("Collections", SITE + "/#collections"), (cname, url)])
    cp = {"@context": "https://schema.org", "@type": "CollectionPage", "name": "%s — SHEMIRANI" % cname,
          "url": url, "isPartOf": {"@id": SITE + "/#org"},
          "about": {"@id": SITE + "/#org"}}
    inject_head("collections/%s/index.html" % cid,
                tags(url, title, desc, "assets/img/brand/shemirani-logo.png", [cp, bc]))
    items = "".join("<li><a href=\"/designs/%s/\">%s</a></li>" % (d["id"], d["name"]) for d in ds) or "<li>Coming soon</li>"
    inject_noscript("collections/%s/index.html" % cid,
        "<h1>%s — SHEMIRANI</h1><p>%s</p><ul>%s</ul>" % (cname, desc, items))

# ---- robots.txt ----
open("robots.txt", "w", encoding="utf-8").write(
    "# SHEMIRANI Jewelry\nUser-agent: *\nAllow: /\n\n"
    "# AI / answer engines welcome\nUser-agent: GPTBot\nAllow: /\n"
    "User-agent: OAI-SearchBot\nAllow: /\nUser-agent: ChatGPT-User\nAllow: /\n"
    "User-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n"
    "User-agent: ClaudeBot\nAllow: /\nUser-agent: Claude-Web\nAllow: /\n\n"
    "Sitemap: %s/sitemap.xml\n" % SITE)

# ---- sitemap.xml ----
urls = [(SITE + "/", "1.0"), (SITE + "/#story", "0.6")]
urls += [(SITE + "/designs/%s/" % d["id"], "0.9") for d in DESIGNS]
urls += [(SITE + "/collections/%s/" % c, "0.7") for c in COLLECTIONS]
sm = ['<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
seen = set()
for u, p in urls:
    if u in seen:
        continue
    seen.add(u)
    sm.append("  <url><loc>%s</loc><lastmod>%s</lastmod><priority>%s</priority></url>" % (u, TODAY, p))
sm.append("</urlset>")
open("sitemap.xml", "w", encoding="utf-8").write("\n".join(sm) + "\n")

# ---- llms.txt (GEO / AI answer engines) ----
llms = ["# SHEMIRANI Jewelry", "",
    "> Fine jewellery designed and made by Abbas Shemirani — custom 18K gold and diamond rings,",
    "> hand- and computer-designed and released in strictly limited editions. Based in Karaj, Iran;",
    "> serving clients in Iran and three other countries.", "",
    "Abbas Shemirani has 7+ years of experience in jewellery ideation, hand and CAD design, and gold",
    "production, building on his father's 35 years in jewellery-making and stone-setting. He holds two",
    "national and two international jewellery-design certificates and an entrepreneurship certificate.", "",
    "## Designs"]
for d in DESIGNS:
    llms.append("- [%s](%s/designs/%s/): %s" % (d["name"], SITE, d["id"], d["desc"]))
llms += ["", "## Collections"]
for cid, cname in COLLECTIONS.items():
    llms.append("- [%s](%s/collections/%s/)" % (cname, SITE, cid))
llms += ["", "## Contact", "- Telegram: https://t.me/abbasamrahbari", "- Based in Karaj, Iran"]
open("llms.txt", "w", encoding="utf-8").write("\n".join(llms) + "\n")

print("SEO built: %d designs, %d collections, sitemap/robots/llms written." % (len(DESIGNS), len(COLLECTIONS)))
