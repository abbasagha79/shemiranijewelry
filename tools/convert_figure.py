#!/usr/bin/env python3
"""SHEMIRANI: turn an action-figure scan/sculpt (OBJ or binary STL) into the site's web model,
and print the figure's volume, size and surface area (used for the weight table).

  python3 tools/convert_figure.py figure.obj <name> [cell_mm]

Writes assets/models/<name>.bin (+ .gz): the same quantised layout the ring viewer reads
(int16 positions over the bounding box, int8 normals, uint32 indices), but with smooth
normals taken from the full-resolution mesh. `cell_mm` (default 0.30) is the vertex-clustering
grid: a bigger cell gives a lighter file. A 460k-triangle ZBrush export drops to ~100k at 0.30.
Units are assumed to be millimetres. Needs Python 3 and numpy (pip install numpy).
"""
import sys, gzip, struct, json
import numpy as np

dt = np.dtype([('n', '<f4', 3), ('v', '<f4', (3, 3)), ('a', '<u2')])

def load_obj(path):
    V, F = [], []
    for line in open(path):
        if line.startswith('v '):
            V.append(line.split()[1:4])
        elif line.startswith('f '):
            F.append([int(x.split('/')[0]) for x in line.split()[1:]])
    V = np.array(V, dtype=np.float64); F = np.array(F, dtype=np.int64)
    F = np.where(F > 0, F - 1, F + len(V))
    if F.shape[1] == 4:                       # quads -> triangles
        F = np.concatenate([F[:, [0, 1, 2]], F[:, [0, 2, 3]]])
    return V, F

def load_stl(path):
    b = open(path, 'rb').read()
    n = int(np.frombuffer(b, '<u4', 1, 80)[0])
    t = np.frombuffer(b, dt, n, 84)['v'].astype(np.float64).reshape(-1, 3)
    k = np.round(t / 1e-4).astype(np.int64)
    uk, first, inv = np.unique(k, axis=0, return_index=True, return_inverse=True)
    return t[first], inv.reshape(-1, 3)

def measure(V, F):
    a, b, c = V[F[:, 0]], V[F[:, 1]], V[F[:, 2]]
    vol = np.einsum('ij,ij->i', a, np.cross(b, c)).sum() / 6.0
    area = 0.5 * np.linalg.norm(np.cross(b - a, c - a), axis=1).sum()
    return abs(vol), area

def vertex_normals(V, F):
    a, b, c = V[F[:, 0]], V[F[:, 1]], V[F[:, 2]]
    fn = np.cross(b - a, c - a)               # area-weighted
    N = np.zeros_like(V)
    for k in range(3):
        np.add.at(N, F[:, k], fn)
    return N / np.maximum(np.linalg.norm(N, axis=1, keepdims=True), 1e-12)

def cluster(V, F, N, cell):
    key = np.floor(V / cell + 0.5).astype(np.int64)
    uk, inv = np.unique(key, axis=0, return_inverse=True)
    inv = inv.reshape(-1)
    cnt = np.bincount(inv, minlength=len(uk))[:, None]
    P = np.zeros((len(uk), 3)); np.add.at(P, inv, V); P /= cnt
    M = np.zeros((len(uk), 3)); np.add.at(M, inv, N)
    M /= np.maximum(np.linalg.norm(M, axis=1, keepdims=True), 1e-12)
    idx = inv[F]
    keep = (idx[:, 0] != idx[:, 1]) & (idx[:, 1] != idx[:, 2]) & (idx[:, 0] != idx[:, 2])
    idx = idx[keep]
    rot = np.argmin(idx, axis=1)
    canon = np.stack([np.take_along_axis(idx, ((rot + k) % 3)[:, None], 1)[:, 0] for k in range(3)], 1)
    _, first = np.unique(canon, axis=0, return_index=True)
    idx = idx[np.sort(first)]
    used = np.unique(idx)                      # drop vertices no triangle uses any more
    remap = np.full(len(P), -1, dtype=np.int64); remap[used] = np.arange(len(used))
    return P[used], M[used], remap[idx]

if __name__ == '__main__':
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    src, name = sys.argv[1], sys.argv[2]
    cell = float(sys.argv[3]) if len(sys.argv) > 3 else 0.30
    V, F = load_obj(src) if src.lower().endswith('.obj') else load_stl(src)
    vol, area = measure(V, F)
    mn, mx = V.min(0), V.max(0)
    print(json.dumps({'triangles': int(len(F)), 'volume_mm3': round(vol, 1), 'volume_cm3': round(vol / 1000, 2),
                      'surface_cm2': round(area / 100, 1), 'size_mm': [round(x, 1) for x in (mx - mn)]}))
    N = vertex_normals(V, F)
    P, M, I = cluster(V, F, N, cell)
    print('web mesh: %d vertices, %d triangles (%.0f%% of the original)' % (len(P), len(I), 100.0 * len(I) / len(F)))
    mn, mx = P.min(0), P.max(0); sc = np.maximum(mx - mn, 1e-9)
    qp = np.round((P - mn) / sc * 65535 - 32768).astype('<i2')
    qn = np.round(M * 127).astype('<i1')
    nV, nI = len(P), I.size
    hdr = struct.pack('<III I 6f', nV, nI, 0x5152, 0, *mn, *sc)
    body = hdr + qp.tobytes() + qn.tobytes() + b'\0' * ((-(nV * 9)) % 4) + I.astype('<u4').tobytes()
    out = 'assets/models/%s.bin' % name
    open(out, 'wb').write(body); open(out + '.gz', 'wb').write(gzip.compress(body, 9))
    print('wrote %s: %d bytes (%d gz)' % (out, len(body), len(gzip.compress(body, 9))))
