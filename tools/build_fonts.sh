#!/usr/bin/env bash
# Rebuild the self-hosted fonts in assets/fonts/ from the official Google Fonts sources.
# Needs git and fontTools (pip install fonttools). Output is subset WOFF:
# Latin for Inter / Cinzel / Chakra Petch, Persian + Latin for Vazirmatn.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=$(mktemp -d)
git clone --depth 1 --filter=blob:none --sparse https://github.com/google/fonts.git "$SRC" >/dev/null
git -C "$SRC" sparse-checkout set ofl/inter ofl/cinzel ofl/chakrapetch ofl/vazirmatn
G="$SRC/ofl"
LAT="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2190-2199,U+2212,U+2215,U+2318,U+FEFF,U+FFFD"
FA="U+0000-00FF,U+0600-06FF,U+0750-077F,U+08A0-08FF,U+200C-200F,U+2010-2027,U+2030-205E,U+FB50-FDFF,U+FE70-FEFF,U+FEFF,U+FFFD"
sub(){ pyftsubset "$1" --unicodes="$2" --flavor=woff --layout-features='*' --no-hinting --desubroutinize --output-file="$3"; }
mkdir -p assets/fonts
sub "$G/inter/Inter[opsz,wght].ttf"        "$LAT" assets/fonts/inter-var.woff
sub "$G/cinzel/Cinzel[wght].ttf"           "$LAT" assets/fonts/cinzel-var.woff
sub "$G/chakrapetch/ChakraPetch-Bold.ttf"  "$LAT" assets/fonts/chakrapetch-700.woff
sub "$G/vazirmatn/Vazirmatn[wght].ttf"     "$FA"  assets/fonts/vazirmatn-var.woff
for f in inter:Inter cinzel:Cinzel chakrapetch:ChakraPetch vazirmatn:Vazirmatn; do
  cp "$G/${f%%:*}/OFL.txt" "assets/fonts/OFL-${f##*:}.txt"
done
rm -rf "$SRC"
echo "fonts rebuilt in assets/fonts/"
