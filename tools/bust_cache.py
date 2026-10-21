#!/usr/bin/env python3
"""Append / refresh a ?v=<version> query on every local asset link (CSS + JS) in all
HTML pages, so browsers and the GitHub Pages CDN fetch fresh files after each deploy
instead of serving a stale cached copy. Re-run with a new version after changing assets:

    python3 tools/bust_cache.py            # version = today's date (YYYYMMDD)
    python3 tools/bust_cache.py 20261021   # explicit version
"""
import re, sys, glob, datetime, os

VERSION = sys.argv[1] if len(sys.argv) > 1 else datetime.date.today().strftime("%Y%m%d")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# (href|src)="...assets/....css|.js" with an optional existing ?v=...
PAT = re.compile(r'(\b(?:href|src)=")([^"]*assets/[^"?]+\.(?:css|js))(?:\?v=[^"]*)?(")')

def bust(m):
    return f'{m.group(1)}{m.group(2)}?v={VERSION}{m.group(3)}'

changed = 0
for path in glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True):
    with open(path, encoding="utf-8") as f:
        src = f.read()
    out = PAT.sub(bust, src)
    if out != src:
        with open(path, "w", encoding="utf-8") as f:
            f.write(out)
        changed += 1

print(f"cache-bust v={VERSION}: updated {changed} HTML file(s)")
