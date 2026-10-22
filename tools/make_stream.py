#!/usr/bin/env python3
"""Make the two portrait (18:25) cards a design shows in the home-page collections corridor.

    python3 tools/make_stream.py <id>

Reads assets/img/<id>/render-01.jpg (-> 600x834) and spin-poster.jpg (-> 400x556), centre-crops each to 18:25 and
writes stream-a.jpg / stream-b.jpg next to them. Add
    stream: ['assets/img/<id>/stream-a.jpg', 'assets/img/<id>/stream-b.jpg'],
to the design's entry in assets/js/designs.js."""
import sys
from PIL import Image

d = sys.argv[1]
for src, dst, W, H in (('render-01', 'stream-a', 600, 834), ('spin-poster', 'stream-b', 400, 556)):
    im = Image.open(f'assets/img/{d}/{src}.jpg').convert('RGB')
    w, h = im.size
    if w / h > W / H:
        cw = round(h * W / H); box = ((w - cw) // 2, 0, (w - cw) // 2 + cw, h)
    else:
        ch = round(w * H / W); box = (0, (h - ch) // 2, w, (h - ch) // 2 + ch)
    im.crop(box).resize((W, H), Image.LANCZOS).save(f'assets/img/{d}/{dst}.jpg', quality=80, optimize=True, progressive=True)
    print(f'assets/img/{d}/{dst}.jpg')
