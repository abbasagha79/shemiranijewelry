#!/usr/bin/env python3
"""Lighten a dense CAD export before tools/convert_model.py by vertex clustering:
every vertex is snapped to a grid of `cell` millimetres and merged with its
neighbours in the same cell; triangles that collapse are dropped. At 0.03-0.05 mm
the change is invisible on screen but can halve the triangle count, which keeps
the live 3D smooth on phones.

  python3 tools/simplify_stl.py in.stl out.stl 0.04
"""
import sys
import numpy as np

dt = np.dtype([('n', '<f4', 3), ('v', '<f4', (3, 3)), ('a', '<u2')])

def load(path):
    b = open(path, 'rb').read()
    n = np.frombuffer(b, '<u4', 1, 80)[0]
    return np.frombuffer(b, dt, n, 84)['v'].astype(np.float64)

def save(path, tri):
    a = tri[:, 1] - tri[:, 0]; b = tri[:, 2] - tri[:, 0]
    nrm = np.cross(a, b); nrm /= np.maximum(np.linalg.norm(nrm, axis=1, keepdims=True), 1e-12)
    out = np.zeros(len(tri), dt); out['n'] = nrm; out['v'] = tri
    with open(path, 'wb') as f:
        f.write(b'simplified'.ljust(80, b' ')); f.write(np.uint32(len(tri)).tobytes()); f.write(out.tobytes())

def cluster(tri, cell):
    v = tri.reshape(-1, 3)
    key = np.floor(v / cell + 0.5).astype(np.int64)
    uk, inv = np.unique(key, axis=0, return_inverse=True)
    inv = inv.reshape(-1)
    pos = np.zeros((len(uk), 3)); np.add.at(pos, inv, v); pos /= np.bincount(inv)[:, None]
    idx = inv.reshape(-1, 3)
    keep = (idx[:, 0] != idx[:, 1]) & (idx[:, 1] != idx[:, 2]) & (idx[:, 0] != idx[:, 2])
    idx = idx[keep]
    # drop exact duplicate faces (same three vertices, same winding)
    rot = np.argmin(idx, axis=1)
    canon = np.stack([np.take_along_axis(idx, ((rot + k) % 3)[:, None], 1)[:, 0] for k in range(3)], 1)
    _, first = np.unique(canon, axis=0, return_index=True)
    idx = idx[np.sort(first)]
    return pos[idx]

if __name__ == '__main__':
    src, dst, cell = sys.argv[1], sys.argv[2], float(sys.argv[3])
    t = load(src); s = cluster(t, cell); save(dst, s)
    print(f'{len(t)} -> {len(s)} triangles ({len(s) / len(t):.0%}) at {cell} mm')
