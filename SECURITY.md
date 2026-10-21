# Security — shemiranijewelry.com

A static site on GitHub Pages: no server code, no database, no forms, no logins,
no cookies, no API keys. This file records where each item of the security audit
stands, so it can be re-checked later. `tools/security_check.py` runs on every
pull request (with gitleaks) and fails the build if any of the hardening below
regresses.

## In place

| Item | How |
|---|---|
| Content-Security-Policy | `<meta>` on every page: `default-src 'self'`, scripts/styles/fonts/connect **`'self'` only**, `object-src 'none'`, `base-uri 'none'`, `frame-src 'none'`, `form-action 'none'`, `upgrade-insecure-requests`. CI fails if any outside origin is added. |
| No third-party code | three.js is vendored in `assets/vendor/`. Fonts are self-hosted in `assets/fonts/` (rebuild with `tools/build_fonts.sh`). The site makes **no requests to any other domain**. |
| Clickjacking | JS frame-buster on every page (GitHub Pages can't send `X-Frame-Options` / `frame-ancestors` — those only work as real HTTP headers). |
| Referrer-Policy | `strict-origin-when-cross-origin` meta on every page. |
| Secrets | None in the repo or its history — checked by gitleaks and `security_check.py` on every PR. Original design files (STL/CAD) are never committed. |
| Unsafe JS | No `eval`, `new Function` or `document.write` (CI-checked). Site data is HTML-escaped before it is inserted; the only user input (menu search) is matched as text, never inserted as HTML. |
| External links | Every `target="_blank"` link has `rel="noopener"` (CI-checked). |
| Mixed content | None — every asset is same-origin; `upgrade-insecure-requests` as a backstop. |
| Exposed files | GitHub Pages does not serve `.git`; no backup/temp/config files are committed. |
| Images | Below-the-fold images load lazily. |

## Not applicable (nothing to protect)

Form sanitisation / CSRF, API security, cookie flags, admin panel, database,
file uploads — the site has none of these. If any are added later, revisit.
(UI preferences — language, menu state — live in `localStorage`, not cookies.)

## Not possible on GitHub Pages

These are **HTTP response headers**; GitHub Pages doesn't let a site set its own,
and browsers ignore them as `<meta>` tags: `X-Content-Type-Options`,
`X-Frame-Options`, `Permissions-Policy`, `Strict-Transport-Security` (GitHub
serves HSTS itself when HTTPS is enforced). `X-XSS-Protection` is obsolete and
no longer used by browsers. To control headers you would put the domain behind
a proxy such as Cloudflare.

## Owner actions (account settings — can't be done from code)

1. Turn on two-factor authentication on the GitHub account.
2. Keep **Settings → Pages → Enforce HTTPS** checked.
3. Optional: branch protection on `main` requiring the "Security scan" check.
