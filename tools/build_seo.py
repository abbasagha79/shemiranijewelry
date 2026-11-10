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
    {"id": "nnor-auralis", "name": "NNOR AURALIS", "collection": "pendants", "desc": "NNOR AURALIS is a bow and arrow pendant in 18K gold — a bow and an arrow drawn in a fine line of gold; the arrowhead is a heart set with diamonds; 18 diamonds, 0.09 ct.", "diamonds": "18 diamonds, 0.09 ct", "weight18k": "4.05 g"},
    {"id": "nnor-solenne", "name": "NNOR SOLENNE", "collection": "pendants", "desc": "NNOR SOLENNE is a bow pendant in 18K gold — a ribbon bow with its loops and tails set with pavé diamonds; three diamonds hang in a line below the knot, growing in size, the last one 5.05 mm; 70 diamonds, 1.69 ct.", "diamonds": "70 diamonds, 1.69 ct", "weight18k": "6.16 g"},
    {"id": "nnor-veyra", "name": "NNOR VEYRA", "collection": "pendants", "desc": "NNOR VEYRA is a flower pendant in 18K gold — a gold flower with six pointed petals opening around a round diamond; four slim claws hold the diamond; 1 diamond, 0.12 ct.", "diamonds": "1 diamond, 0.12 ct", "weight18k": "0.56 g"},
    {"id": "nnor-elara", "name": "NNOR ELARA", "collection": "rings", "desc": "NNOR ELARA is a filigree ring in 18K gold — a pointed plate of gold filigree with a flower of seven diamonds at its centre; rows of diamonds follow the four edges of the plate and run down each shoulder; 47 diamonds, 0.48 ct.", "diamonds": "47 diamonds, 0.48 ct", "weight18k": "2.54 g"},
    {"id": "nnor-lumiere", "name": "NNOR LUMIERE", "collection": "rings", "desc": "NNOR LUMIERE is a filigree ring in 18K gold — a rounded-square plate of fine gold filigree; a gold flower at the centre, with leaves and tiny beads across the plate; no stones.", "diamonds": "no diamonds", "weight18k": "4.28 g"},
    {"id": "nnor-seraph", "name": "NNOR SERAPH", "collection": "rings", "desc": "NNOR SERAPH is a solitaire ring in 18K gold — a single round diamond held by four claws; split shoulders rise to meet the setting; 1 diamond, 0.44 ct.", "diamonds": "1 diamond, 0.44 ct", "weight18k": "3.35 g"},
    {"id": "nnor-orlina", "name": "NNOR ORLINA", "collection": "rings", "desc": "NNOR ORLINA is a solitaire ring in 18K gold — a single round diamond held by four claws; split shoulders rise to meet the setting; 1 diamond, 0.44 ct.", "diamonds": "1 diamond, 0.44 ct", "weight18k": "3.13 g"},
    {"id": "nnor-celest", "name": "NNOR CELEST", "collection": "rings", "desc": "NNOR CELEST is a pavé solitaire ring in 18K gold — a large round diamond on four straight claws; beaded openwork sides set with small diamonds; 37 diamonds, 1.00 ct.", "diamonds": "37 diamonds, 1.00 ct", "weight18k": "4.58 g"},
    {"id": "nnor-amaris", "name": "NNOR AMARIS", "collection": "rings", "desc": "NNOR AMARIS is a solitaire ring in 18K gold — a princess-cut diamond held by four claws; split shoulders rise to meet the setting; 1 diamond, 0.46 ct.", "diamonds": "1 diamond, 0.46 ct", "weight18k": "3.08 g"},
    {"id": "nnor-velora", "name": "NNOR VELORA", "collection": "rings", "desc": "NNOR VELORA is a halo ring in 18K gold — a round centre diamond ringed by a halo of small diamonds; twisting shoulders rise to the setting; 15 diamonds, 0.91 ct.", "diamonds": "15 diamonds, 0.91 ct", "weight18k": "3.80 g"},
    {"id": "nnor-isola", "name": "NNOR ISOLA", "collection": "rings", "desc": "NNOR ISOLA is a halo ring in 18K gold — a princess-cut centre diamond inside a square halo of small diamonds; twisting shoulders rise to the setting; 15 diamonds, 0.43 ct.", "diamonds": "15 diamonds, 0.43 ct", "weight18k": "3.89 g"},
    {"id": "nnor-elarin", "name": "NNOR ELARIN", "collection": "rings", "desc": "NNOR ELARIN is a solitaire ring with side stones in 18K gold — a round centre diamond on four claws; smaller diamonds set along the shoulders, some in bezels and some in pairs; 13 diamonds, 0.91 ct.", "diamonds": "13 diamonds, 0.91 ct", "weight18k": "3.19 g"},
    {"id": "azerion", "name": "AZÉRION", "collection": "earrings", "desc": "AZÉRION is a pair of stud earrings in 18K gold — a pavé-set heart over a fluted five-petal gold flower; 14 diamonds, 0.17 ct each.", "diamonds": "14 round diamonds each, 0.17 ct", "weight18k": "0.99 g"},
    {"id": "celestre", "name": "CÉLESTRÉ", "collection": "earrings", "desc": "CÉLESTRÉ is a pair of stud earrings in 18K gold — three pavé-set petals and a small round stone inside open gold leaf outlines; 19 diamonds, 0.19 ct each.", "diamonds": "19 round diamonds each, 0.19 ct", "weight18k": "1.68 g"},
    {"id": "velorian", "name": "VÉLORIAN", "collection": "earrings", "desc": "VÉLORIAN is a pair of stud earrings in 18K gold — a claw-set 7.2 × 5.2 mm oval diamond ringed by petal-shaped settings; 13 diamonds, 1.00 ct each.", "diamonds": "1 oval and 12 round diamonds each, 1.00 ct", "weight18k": "1.91 g"},
    {"id": "sylvera", "name": "SYLVÉRA", "collection": "earrings", "desc": "SYLVÉRA is a pair of stud earrings in 18K gold — a diamond flower above two nested drop-shaped loops, one beaded and pavé-set; 30 diamonds, 0.23 ct each.", "diamonds": "30 round diamonds each, 0.23 ct", "weight18k": "1.80 g"},
    {"id": "emerove", "name": "ÉMEROVÉ", "collection": "earrings", "desc": "ÉMEROVÉ is a pair of stud earrings in 18K gold — a five-pointed star of diamond-set panels around a centre stone, with open gold leaves between the points; 21 diamonds, 0.28 ct each.", "diamonds": "21 round diamonds each, 0.28 ct", "weight18k": "2.11 g"},
    {"id": "zorelian", "name": "ZORÉLIAN", "collection": "rings", "desc": "ZORÉLIAN is a pavé ring in 18K gold — a diamond-set circle linked to two scalloped flower settings, on a split band with two pavé rows per side; 46 diamonds, 0.19 ct.", "diamonds": "46 round diamonds, 0.19 ct", "weight18k": "3.40 g"},
    {"id": "evorien", "name": "ÉVORIEN", "collection": "rings", "desc": "ÉVORIEN is an open ring in 18K gold — its two ends meet on top as a pavé-edged scroll and a pavé loop around a polished teardrop, on a split shank; 36 diamonds, 0.23 ct.", "diamonds": "36 round diamonds, 0.23 ct", "weight18k": "3.24 g"},
    {"id": "zephoria", "name": "ZÉPHORIA", "collection": "rings", "desc": "ZÉPHORIA is a leaf bypass ring in 18K gold — two pavé-set vines cross over the top with leaf-shaped settings of paired diamonds between them; 46 diamonds, 0.38 ct.", "diamonds": "46 round diamonds, 0.38 ct", "weight18k": "2.47 g"},
    {"id": "aurevant", "name": "AURÉVANT", "collection": "rings", "desc": "AURÉVANT is a cluster ring in 18K gold — a domed oval top with a beaded gold texture, a raised cluster of claw-set diamonds at the centre and a pavé panel on one shoulder; 35 diamonds, 0.36 ct.", "diamonds": "35 round diamonds, 0.36 ct", "weight18k": "4.61 g"},
    {"id": "calveron", "name": "CALVÉRON", "collection": "rings", "desc": "CALVÉRON is a pavé leaf ring in 18K gold — a square pavé frame meets a gold leaf plate with petal cut-outs and three claw-set stones; 25 diamonds, 0.20 ct.", "diamonds": "25 round diamonds, 0.20 ct", "weight18k": "2.52 g"},
    {"id": "verenza", "name": "VÉRÉNZA", "collection": "rings", "desc": "VÉRÉNZA is an interlaced ring in 18K gold — two pavé-edged loops meet and hold, with a pavé-set branch along one shoulder and a twisted, split band; 37 diamonds, 0.24 ct.", "diamonds": "37 round diamonds, 0.24 ct", "weight18k": "2.89 g"},
    {"id": "orlevian", "name": "ORLÉVIAN", "collection": "rings", "desc": "ORLÉVIAN is a leaf wrap ring in 18K gold — two branches of diamond-set leaves wrap around the finger, one over the other; 104 diamonds, 0.55 ct.", "diamonds": "104 round diamonds, 0.55 ct", "weight18k": "5.16 g"},
    {"id": "quorven", "name": "QUORVÉN", "collection": "rings", "desc": "QUORVÉN is an open ring in 18K gold — its two ends meet on top as a pavé ring and a plain polished ring, with a tapering pavé panel on one shoulder; 32 diamonds, 0.21 ct.", "diamonds": "32 round diamonds, 0.21 ct", "weight18k": "2.77 g"},
    {"id": "elystron", "name": "ELYSTRON", "collection": "rings", "desc": "ELYSTRON is a flower ring in 18K gold — a gold flower of diamond-set and open petals around two raised centre stones, on a twisting double shank; 11 diamonds, 0.13 ct.", "diamonds": "11 round diamonds, 0.13 ct", "weight18k": "3.76 g"},
    {"id": "dravenza", "name": "DRAVÉNZA", "collection": "rings", "desc": "DRAVÉNZA is a crossover ring in 18K gold — two pavé bands crossing in an X over a plain polished bar, on an open split shank; 43 diamonds, 0.37 ct.", "diamonds": "43 round diamonds, 0.37 ct", "weight18k": "3.67 g"},
    {"id": "opheryx", "name": "OPHERYX", "collection": "rings", "desc": "OPHERYX is a solitaire ring in 18K gold — a 0.21 ct, 3.8 mm diamond on a tall six-prong head, with two twisting diamond strands on each shoulder around a polished leaf; 27 diamonds, 0.47 ct.", "diamonds": "27 round diamonds, 0.47 ct", "weight18k": "2.29 g"},
    {"id": "vantheris", "name": "VANTHÉRIS", "collection": "rings", "desc": "VANTHÉRIS is a crown ring in 18K gold — gold arches with ball tips form a crown along a diamond-set band, with three larger diamonds as its jewels; 23 diamonds, 0.32 ct.", "diamonds": "23 round diamonds, 0.32 ct", "weight18k": "3.44 g"},
    {"id": "kryselon", "name": "KRYSELON", "collection": "rings", "desc": "KRYSELON is a solitaire ring in 18K gold — a 0.33 ct, 4.5 mm diamond in four prongs beside a small gold padlock with a keyhole, on a slim bypass shank.", "diamonds": "1 round diamond, 0.33 ct", "weight18k": "2.69 g"},
    {"id": "azmoriel", "name": "AZMORIEL", "collection": "rings", "desc": "AZMORIEL is a men's solitaire ring in 18K gold — a 0.59 ct, 5.4 mm diamond in a raised square seat on a wide flat top, with diamond rows along both edges; 37 diamonds, 1.06 ct in total.", "diamonds": "37 round diamonds, 1.06 ct", "weight18k": "7.32 g"},
    {"id": "thalver", "name": "THALVÉR", "collection": "rings", "desc": "THALVÉR is a men's ring in 18K gold — chevron arrows cut through a flat polished top, a diamond triangle beside a diamond chevron that runs down one shoulder; 20 diamonds, 0.16 ct.", "diamonds": "20 round diamonds, 0.16 ct", "weight18k": "4.68 g"},
    {"id": "myravex", "name": "MYRAVEX", "collection": "rings", "desc": "MYRAVEX is a halo cluster ring in 18K gold — a nine-stone cluster in a floating halo on a tall cathedral basket, with split pavé shoulders; 52 diamonds, 0.57 ct.", "diamonds": "52 round diamonds, 0.57 ct", "weight18k": "3.57 g"},
    {"id": "orovant", "name": "OROVANT", "collection": "rings", "desc": "OROVANT is a five-stone halo band in 18K gold — five graduated bezel-set oval diamonds, each in its own scalloped pavé halo; 47 diamonds, 0.73 ct in total.", "diamonds": "47 diamonds, 0.73 ct", "weight18k": "2.45 g"},
    {"id": "calystre", "name": "CALYSTRÉ", "collection": "rings", "desc": "CALYSTRÉ is a sculptural ring in 18K gold — three sweeping pavé ribbons curling into a loop, with polished gold petals rising behind them; 48 diamonds, 0.36 ct.", "diamonds": "48 round diamonds, 0.36 ct", "weight18k": "3.24 g"},
    {"id": "zafyren", "name": "ZAFYREN", "collection": "rings", "desc": "ZAFYREN is a cluster ring in 18K gold — a raised flower of seven diamonds over a halo of ten on tall prongs, openwork lattice sides and wide pavé shoulders; 69 diamonds, 0.72 ct.", "diamonds": "69 round diamonds, 0.72 ct", "weight18k": "6.28 g"},
    {"id": "seravel", "name": "SERAVÉL", "collection": "rings", "desc": "SERAVÉL is a solitaire band ring in 18K gold — a 0.44 ct, 5 mm diamond in four prongs on a wide fluted band edged with rows of diamonds; 43 diamonds, 0.76 ct in total.", "diamonds": "43 round diamonds, 0.76 ct", "weight18k": "4.88 g"},
    {"id": "avelis", "name": "AVELIS", "collection": "sets", "desc": "AVELIS is a set of a pendant and earrings in 18K gold — a pavé-edged teardrop pendant filled with gold scrolls, and matching six-stone diamond flower earrings; 41 diamonds, 0.26 ct.", "diamonds": "41 round diamonds, 0.26 ct (set)", "weight18k": "1.85 g"},
    {"id": "orvessa", "name": "ORVESSA", "collection": "rings", "desc": "ORVESSA is a cluster ring in 18K gold — three concentric rings of diamonds rising in steps to a raised centre stone, on sweeping shoulders; 57 diamonds, 0.48 ct.", "diamonds": "57 round diamonds, 0.48 ct", "weight18k": "4.09 g"},
    {"id": "kaverin", "name": "KAVÉRIN", "collection": "earrings", "desc": "KAVÉRIN are stud earrings in 18K gold — two parallel diamond-set bars on the diagonal with polished gold loops woven between them; 22 diamonds (0.13 ct) per earring.", "diamonds": "22 round diamonds per earring, 0.13 ct", "weight18k": "1.09 g"},
    {"id": "lumeria", "name": "LUMÉRIA", "collection": "earrings", "desc": "LUMÉRIA are statement drop earrings in 18K gold — three pavé leaves over a wide disc with two pavé rings and a swinging pavé diamond-shaped drop; 136 diamonds (0.87 ct) per earring.", "diamonds": "136 round diamonds per earring, 0.87 ct", "weight18k": "5.82 g"},
    {"id": "elune", "name": "ELUNÉ", "collection": "rings", "desc": "ELUNÉ is a band ring in 18K gold — a polished band with bevelled edges and a single 2.5 mm diamond (0.06 ct) set in a recessed cross-channel.", "diamonds": "1 round diamond, 0.06 ct", "weight18k": "4.78 g"},
    {"id": "virelune", "name": "VIRELUNE", "collection": "rings", "desc": "VIRELUNE is a solitaire ring in 18K gold — a 0.47 ct, 5 mm round diamond in a tapered four-prong head, with a row of diamonds in a pointed channel on each shoulder; 13 diamonds, 0.62 ct in total.", "diamonds": "13 round diamonds, 0.62 ct", "weight18k": "3.20 g"},
    {"id": "thevora", "name": "THÉVORA", "collection": "earrings", "desc": "THÉVORA are drop earrings in 18K gold — a diamond-set scroll curling into a spiral, with a round drop holding a seven-stone diamond flower; 28 diamonds (0.19 ct) per earring.", "diamonds": "56 round diamonds, 0.38 ct (pair)", "weight18k": "1.35 g"},
    {"id": "zarelle", "name": "ZARELLE", "collection": "rings", "desc": "ZARELLE is a solitaire ring in 18K gold — a 0.81 ct, 6 mm round diamond in a six-prong head, with woven gold strands in each shoulder framed by two rows of diamonds; 37 diamonds, 1.04 ct in total.", "diamonds": "37 round diamonds, 1.04 ct", "weight18k": "5.15 g"},
    {"id": "solvera", "name": "SOLVÉRA", "collection": "rings", "desc": "SOLVÉRA is a halo bypass ring in 18K gold — a 0.75 ct oval diamond (7.2 × 5.3 mm) in a pavé halo, with shoulders that sweep past each other; 37 diamonds, 0.96 ct in total.", "diamonds": "37 diamonds, 0.96 ct", "weight18k": "3.64 g"},
    {"id": "velora", "name": "VELORA", "collection": "pendants", "desc": "VELORA is a heart pendant in 18K gold — two diamond-set strands and a plain gold sweep drawing a heart, under a double ribbon bail; 37 diamonds, 0.29 ct.", "diamonds": "37 round diamonds, 0.29 ct", "weight18k": "3.03 g"},
    {"id": "aureve", "name": "AUREVÉ", "collection": "pendants", "desc": "AUREVÉ is a pear halo pendant in 18K gold — a pear diamond in a halo of prong-set round stones, under a twisted gold ribbon bail set with diamonds; 22 diamonds in all.", "diamonds": "22 diamonds", "weight18k": "1.15 g"},
    {"id": "imperio", "name": "IMPERIO", "collection": "pendants",
     "desc": "IMPERIO is a pendant in 18K gold — a 1.20 ct pear diamond (9 × 6 mm) hung from a looping gold ribbon set with small diamonds; 14 diamonds, 1.28 ct in total.",
     "diamonds": "14 diamonds, 1.28 ct", "weight18k": "1.95 g"},
    {"id": "lumiere", "name": "LUMIÈRE", "collection": "pendants",
     "desc": "LUMIÈRE is a cluster pendant in 18K gold — 36 round diamonds (0.45 ct) on a domed cluster, their prongs radiating like rays of light, under a polished gold dome.",
     "diamonds": "36 round diamonds, 0.45 ct", "weight18k": "2.10 g"},
    {"id": "asterion", "name": "ASTERION", "collection": "pendants",
     "desc": "ASTERION is a pendant in 18K gold with 61 diamonds (0.36 ct) — a pavé-lined teardrop frame around a pear-shaped diamond cluster, with sculpted gold leaves under a diamond-set loop.",
     "diamonds": "61 round diamonds, 0.36 ct", "weight18k": "3.79 g"},
    {"id": "crownelle", "name": "CROWNELLE", "collection": "pendants",
     "desc": "CROWNELLE is a halo pendant in 18K gold — a 1.61 ct oval diamond (9.5 × 6.5 mm) in four prongs inside a pavé halo, under a crown-like diamond scroll; 46 diamonds, 1.84 ct in total.",
     "diamonds": "46 diamonds, 1.84 ct", "weight18k": "3.17 g"},
    {"id": "sovrana", "name": "SOVRANA", "collection": "rings",
     "desc": "SOVRANA is a men's ring in 18K gold with 17 diamonds (0.14 ct) — three prong-set rows on a flat rectangular top, the middle row raised, with three open slots through each tapered shoulder.",
     "diamonds": "17 round diamonds, 0.14 ct", "weight18k": "4.26 g"},
    {"id": "royale", "name": "ROYALE", "collection": "rings",
     "desc": "ROYALE is a solitaire ring in 18K gold — a 5.8 mm, 0.73 ct round diamond in a six-prong head, with one shoulder sweeping around the stone in a single curve.",
     "diamonds": "1 round diamond, 0.73 ct", "weight18k": "4.77 g"},
    {"id": "monarch", "name": "MONARCH", "collection": "rings",
     "desc": "MONARCH is a wide band ring in 18K gold with 55 diamonds (0.38 ct) — a row of overlapping oval gold discs, each set with a diamond, framed by pavé rows on both edges.",
     "diamonds": "55 round diamonds, 0.38 ct", "weight18k": "4.68 g"},
    {"id": "valoria", "name": "VALORIA", "collection": "rings",
     "desc": "VALORIA is a solitaire ring in 18K gold with 25 diamonds (0.97 ct) — a 6 mm, 0.81 ct centre diamond in a four-prong head, with pavé clusters on the shoulders and triangular pavé insets along the band.",
     "diamonds": "25 round diamonds, 0.97 ct", "weight18k": "3.98 g"},
    {"id": "sovereign", "name": "SOVEREIGN", "collection": "bangles",
     "desc": "SOVEREIGN is an 18K gold hinged bangle with 37 diamonds (about 0.20 ct), pavé-set in a long row and a short block — a statement of confidence, independence and power.",
     "diamonds": "37 round diamonds, 0.20 ct", "weight18k": "20.40 g"},
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
# Action figures (keep in sync with SHEMIRANI_FIGURES in assets/js/designs.js)
FIGURES = [
    {"id": "catball", "name": "CATBALL",
     "desc": "CATBALL is a round-faced cat head sculpted in ZBrush — a watertight OBJ and STL file ready to 3D-print or cast, in any size, with its weight listed for resin, filament, bronze, silver, gold and platinum.",
     "size": "58.6 x 61.6 x 53.8 mm at 100%", "volume": "75.8 cm3 at 100%"},
    {"id": "cthulhu", "name": "CTHULHU",
     "desc": "CTHULHU is a chibi Cthulhu action figure with a tentacled face and bat-like wings, standing on its own rocky R'lyeh base — an STL file ready to 3D-print, cast in metal or paint, in any size, with weights for resin, filament, bronze, silver, gold and platinum.",
     "size": "57.3 x 38.6 x 51.0 mm at 100% (figure on base)", "volume": "16.7 cm3 at 100% (figure + base)"},
    {"id": "chess-helix", "name": "HELIX CHESS",
     "desc": "HELIX CHESS is a six-piece chess set with every piece twisted into an open spiral lattice — a watertight STL file ready to 3D-print or cast in metal, in any size, with weights for resin, filament, bronze, silver, gold and platinum.",
     "size": "265.0 x 40.0 x 104.0 mm at 100% (six pieces)", "volume": "127.6 cm3 at 100%"},
    {"id": "chess-staunton", "name": "STAUNTON CHESS",
     "desc": "STAUNTON CHESS is a classic six-piece Staunton chess set — pawn, rook, knight, bishop, queen and king — an STL file ready to 3D-print or cast in metal, in any size, with weights for resin, filament, bronze, silver, gold and platinum.",
     "size": "234.2 x 38.5 x 89.0 mm at 100% (six pieces)", "volume": "104.0 cm3 at 100%"},
    {"id": "chess-monolith", "name": "MONOLITH CHESS",
     "desc": "MONOLITH CHESS is a modern abstract six-piece chess set, each piece standing on a square base — an STL file ready to 3D-print or cast in metal, in any size, with weights for resin, filament, bronze, silver, gold and platinum.",
     "size": "282.0 x 42.0 x 90.0 mm at 100% (six pieces)", "volume": "140.4 cm3 at 100%"},
    {"id": "joker", "name": "JOKER BUST",
     "desc": "JOKER BUST is a grinning Joker bust in a wide-brimmed hat on a square plinth — a watertight STL file ready to 3D-print or cast in metal, in any size, with weights for resin, filament, bronze, silver, gold and platinum.",
     "size": "130.1 x 97.8 x 194.0 mm at 100% (bust, hat and plinth)", "volume": "610.6 cm3 at 100%"},
]

COLLECTIONS = {
    "rings": "Rings", "earrings": "Earrings", "bracelets": "Bracelets",
    "bangles": "Bangles", "necklaces": "Necklaces", "pendants": "Pendants", "sets": "Sets",
}
# singular noun per collection, for titles and alt text
NOUN = {
    "rings": "Ring", "earrings": "Earrings", "bracelets": "Bracelet",
    "bangles": "Bangle", "necklaces": "Necklace", "pendants": "Pendant", "sets": "Set",
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
            "description": d["desc"], "category": COLLECTIONS[d["collection"]],
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
    noun = NOUN[d["collection"]]
    title = "%s — 18K Gold %s | SHEMIRANI" % (d["name"], noun) if d["diamonds"].startswith("no diamonds") else "%s — 18K Gold & Diamond %s | SHEMIRANI" % (d["name"], noun)
    bc = crumb([("Home", SITE + "/"), (COLLECTIONS[d["collection"]], SITE + "/collections/%s/" % d["collection"]), (d["name"], url)])
    inject_head("designs/%s/index.html" % d["id"],
                tags(url, title, d["desc"], "assets/img/%s/render-01.jpg" % d["id"], [product(d), bc]))
    inject_noscript("designs/%s/index.html" % d["id"],
        "<h1>SHEMIRANI %s</h1><p>%s</p>"
        "<p><img src=\"/assets/img/%s/render-01.jpg\" alt=\"SHEMIRANI %s %s in 18K gold with diamonds\" width=\"600\"></p>"
        % (d["name"], d["desc"], d["id"], d["name"], noun.lower()))

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

# ---- action figure pages ----
FIG_DESC = ("Action figures by SHEMIRANI — %s. 3D-print and casting files that can be made larger or smaller, "
            "with weights in resin, filament, bronze, silver, gold and platinum." % ", ".join(f["name"] for f in FIGURES))
fig_url = SITE + "/collections/action-figures/"
fig_title = "Action Figure | SHEMIRANI — Figures designed in 3D"
inject_head("collections/action-figures/index.html", tags(fig_url, fig_title, FIG_DESC,
            "assets/img/%s/render-01.jpg" % FIGURES[0]["id"],
            [{"@context": "https://schema.org", "@type": "CollectionPage", "name": "Action Figure — SHEMIRANI",
              "url": fig_url, "isPartOf": {"@id": SITE + "/#org"}, "about": {"@id": SITE + "/#org"}},
             crumb([("Home", SITE + "/"), ("Action Figure", fig_url)])]))
inject_noscript("collections/action-figures/index.html",
    "<h1>Action Figure — SHEMIRANI</h1><p>%s</p><ul>%s</ul>" % (FIG_DESC,
        "".join("<li><a href=\"/figures/%s/\">%s</a></li>" % (f["id"], f["name"]) for f in FIGURES)))
for f in FIGURES:
    url = SITE + "/figures/%s/" % f["id"]
    prod = {"@context": "https://schema.org", "@type": "Product", "name": "SHEMIRANI %s" % f["name"], "sku": f["name"],
            "url": url, "image": [SITE + "/assets/img/%s/render-0%d.jpg" % (f["id"], i) for i in (1, 2, 3)],
            "description": f["desc"], "category": "Action figure",
            "brand": {"@type": "Brand", "name": "SHEMIRANI"}, "manufacturer": {"@id": SITE + "/#org"},
            "additionalProperty": [{"@type": "PropertyValue", "name": "Size", "value": f["size"]},
                                   {"@type": "PropertyValue", "name": "Volume", "value": f["volume"]}]}
    inject_head("figures/%s/index.html" % f["id"], tags(url, "%s — Action Figure | SHEMIRANI" % f["name"], f["desc"],
                "assets/img/%s/render-01.jpg" % f["id"],
                [prod, crumb([("Home", SITE + "/"), ("Action Figure", fig_url), (f["name"], url)])]))
    inject_noscript("figures/%s/index.html" % f["id"],
        "<h1>SHEMIRANI %s</h1><p>%s</p><p><img src=\"/assets/img/%s/render-01.jpg\" alt=\"SHEMIRANI %s action figure\" width=\"600\"></p>"
        % (f["name"], f["desc"], f["id"], f["name"]))

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
urls += [(fig_url, "0.7")] + [(SITE + "/figures/%s/" % f["id"], "0.9") for f in FIGURES]
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
llms += ["", "## Action figures", "- [Action Figure](%s/collections/action-figures/)" % SITE]
for f in FIGURES:
    llms.append("- [%s](%s/figures/%s/): %s" % (f["name"], SITE, f["id"], f["desc"]))
llms += ["", "## Contact", "- Telegram: https://t.me/abbasamrahbari", "- Based in Karaj, Iran"]
open("llms.txt", "w", encoding="utf-8").write("\n".join(llms) + "\n")

print("SEO built: %d designs, %d collections, sitemap/robots/llms written." % (len(DESIGNS), len(COLLECTIONS)))
