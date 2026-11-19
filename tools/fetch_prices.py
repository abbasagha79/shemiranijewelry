#!/usr/bin/env python3
"""Refresh data/prices.json (gold, coin, dollar, euro, ounce, bitcoin) for the ticker on the home page.

Run by .github/workflows/prices.yml every 15 minutes. The site only reads data/prices.json.
Source: the public JSON that tgju.org's own pages use. Its field names are listed in MAP below;
if a value stops updating, check that field name first. A failed fetch never overwrites good data.
Rial values are divided by 10 to show toman.
"""
import json, re, sys, urllib.request, datetime, pathlib

URL = "https://call4.tgju.org/ajax.json"
# id -> (tgju field, divide by 10 for toman?)
MAP = {"gold18": ("geram18", True), "coin": ("sekee", True), "usd": ("price_dollar_rl", True),
       "eur": ("price_eur", True), "ounce": ("ons", False), "btc": ("crypto-bitcoin", False)}
F = pathlib.Path(__file__).resolve().parent.parent / "data" / "prices.json"

def num(s):
    s = re.sub(r"[^0-9.\-]", "", str(s).replace(",", ""))
    return float(s) if s not in ("", "-", ".") else None

def main():
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0 (shemirani-prices)"})
    cur = json.load(urllib.request.urlopen(req, timeout=25)).get("current", {})
    data = json.loads(F.read_text(encoding="utf-8"))
    got = 0
    for it in data["items"]:
        field, rial = MAP[it["id"]]
        row = cur.get(field)
        if not row:
            continue
        v = num(row.get("p"))
        if v is None:
            continue
        it["value"] = round(v / 10) if rial else round(v, 2)
        it["pct"] = abs(num(row.get("dp")) or 0)
        it["dir"] = "dn" if row.get("dt") == "low" else "up"
        got += 1
    if not got:
        print("no values parsed; leaving file as is"); return 1
    data["updated"] = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    F.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print("updated", got, "values"); return 0

if __name__ == "__main__":
    try: sys.exit(main())
    except Exception as ex:
        print("fetch failed:", ex); sys.exit(1)
