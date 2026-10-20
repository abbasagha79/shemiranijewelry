#!/usr/bin/env python3
"""
SHEMIRANI static-site security check.

Runs in CI on every pull request (and can be run locally: `python3 tools/security_check.py`).
No Docker, no network, no LLM. It encodes the hardening rules this static site must keep,
so a future edit can't silently regress them. Exit code 1 if any check fails.

Checks, per HTML page:
  1. Content-Security-Policy meta present, with the required restrictive directives.
  2. Referrer-Policy meta present.
  3. A clickjacking frame-buster present.
Across the whole tree:
  4. No obvious secrets (api keys / tokens / private keys) committed.
  5. No dangerous dynamic execution (eval / new Function / document.write) in JS.
  6. Every target="_blank" link carries rel="noopener".
  7. No external script/style hosts other than the allowed Google Fonts.
"""
import glob, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
fails = []
def fail(msg): fails.append(msg)

HTML = ['index.html'] + glob.glob('designs/*/index.html') + glob.glob('collections/*/index.html')
JS   = glob.glob('assets/js/*.js')

REQUIRED_CSP = [
    "default-src 'self'", "object-src 'none'", "base-uri 'none'",
    "script-src 'self'", "connect-src 'self'", "frame-src 'none'",
]
for f in HTML:
    s = open(f, encoding='utf-8').read()
    m = re.search(r'http-equiv="Content-Security-Policy"\s+content="([^"]+)"', s)
    if not m:
        fail(f"{f}: missing Content-Security-Policy meta"); continue
    csp = m.group(1)
    for need in REQUIRED_CSP:
        if need not in csp:
            fail(f"{f}: CSP missing directive: {need}")
    if "'unsafe-eval'" in csp:
        fail(f"{f}: CSP must not allow 'unsafe-eval'")
    if 'name="referrer"' not in s:
        fail(f"{f}: missing Referrer-Policy meta")
    if 'top!==self' not in s.replace(' ', ''):
        fail(f"{f}: missing clickjacking frame-buster")

# secrets (allow obvious false positives: local var names, data-* attrs)
SECRET = re.compile(r'(?i)(?:api[_-]?key|secret[_-]?key|access[_-]?token|private[_-]?key|'
                    r'-----BEGIN [A-Z ]*PRIVATE KEY-----|AKIA[0-9A-Z]{16}|'
                    r'gh[pousr]_[A-Za-z0-9]{20,}|sk-[A-Za-z0-9]{20,})')
for f in glob.glob('assets/js/*.js') + HTML:
    for i, line in enumerate(open(f, encoding='utf-8'), 1):
        if SECRET.search(line):
            fail(f"{f}:{i}: possible committed secret: {line.strip()[:80]}")

# dangerous dynamic execution (inline HTML scripts included)
DANGER = re.compile(r'\beval\s*\(|new\s+Function\s*\(|document\.write\s*\(')
for f in JS + HTML:
    for i, line in enumerate(open(f, encoding='utf-8'), 1):
        if DANGER.search(line):
            fail(f"{f}:{i}: dangerous dynamic execution: {line.strip()[:80]}")

# target=_blank without rel=noopener (scan html + js string templates)
for f in HTML + JS:
    s = open(f, encoding='utf-8').read()
    for tag in re.findall(r'<a\b[^>]*target=["\']_blank["\'][^>]*>', s):
        if 'noopener' not in tag:
            fail(f"{f}: _blank link without rel=noopener: {tag[:80]}")

# external hosts in <script src> / <link href> must be on the allow-list
ALLOWED = ('fonts.googleapis.com', 'fonts.gstatic.com')
for f in HTML:
    s = open(f, encoding='utf-8').read()
    for url in re.findall(r'<(?:script|link)[^>]+(?:src|href)=["\'](https?://[^"\']+)', s):
        host = re.sub(r'^https?://', '', url).split('/')[0]
        if not any(host == a or host.endswith('.' + a) for a in ALLOWED):
            fail(f"{f}: external resource host not allow-listed: {host}")

if fails:
    print("SECURITY CHECK FAILED:\n" + "\n".join("  - " + x for x in fails))
    sys.exit(1)
print(f"Security check passed: {len(HTML)} pages, {len(JS)} scripts, no issues.")
