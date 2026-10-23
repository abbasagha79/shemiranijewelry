#!/usr/bin/env python3
"""SHEMIRANI: convert a design's Rhino STL exports into the site's web model files.

  python3 tools/convert_model.py metal.stl gems.stl <name> [--upright]

--upright is for pendants and other pieces drawn lying flat (face up +Z, top of the piece +Y):
the piece is stood up so its face looks at the viewer and its top points up.

Writes assets/models/<name>-metal.bin (+ .gz) and assets/models/<name>-gems.json.
Needs Python 3 and numpy (pip install numpy). Models are expected in millimetres, Z up,
the finger along Y (the usual Rhino / Matrix ring orientation).
The gems STL is read stone by stone: each stone's centre, size and facing is stored,
and the site draws it as a brilliant; oval stones keep their length and direction.
"""
import numpy as np, json, struct, gzip, sys
dt=np.dtype([('n','<f4',3),('v','<f4',(3,3)),('a','<u2')])
def load(f):
    b=open(f,'rb').read(); n=np.frombuffer(b,'<u4',1,80)[0]
    return np.frombuffer(b,dt,n,84)['v'].astype(np.float64)
def weld(tri, q=1e-4):
    v=tri.reshape(-1,3); k=np.round(v/q).astype(np.int64)
    uk,inv=np.unique(k,axis=0,return_inverse=True)
    pos=np.zeros((len(uk),3)); np.add.at(pos,inv,v); cnt=np.bincount(inv,minlength=len(uk)); pos/=cnt[:,None]
    idx=inv.reshape(-1,3)
    keep=(idx[:,0]!=idx[:,1])&(idx[:,1]!=idx[:,2])&(idx[:,0]!=idx[:,2]); idx=idx[keep]
    return pos,idx
def crease_split(pos, idx, crease_deg=35):
    """Per-corner normals that stay sharp across hard edges: each corner averages only the
    faces around its vertex that bend less than crease_deg from its own face."""
    a=pos[idx[:,0]];b=pos[idx[:,1]];c=pos[idx[:,2]]
    fn=np.cross(b-a,c-a); ar=np.linalg.norm(fn,axis=1,keepdims=True); un=fn/np.maximum(ar,1e-12)
    nF=len(idx); corners=idx.reshape(-1); cf=np.repeat(np.arange(nF),3)
    order=np.argsort(corners,kind='stable'); sc=corners[order]; sf=cf[order]
    starts=np.searchsorted(sc,np.arange(len(pos))); ends=np.searchsorted(sc,np.arange(len(pos)),side='right')
    cosT=np.cos(np.radians(crease_deg)); cn=np.zeros((nF*3,3))
    for v in range(len(pos)):
        fs=sf[starts[v]:ends[v]]
        if len(fs)==0: continue
        N=un[fs]; W=fn[fs]
        sim=(N@N.T)>cosT
        acc=sim.astype(np.float64)@W
        acc/=np.maximum(np.linalg.norm(acc,axis=1,keepdims=True),1e-12)
        for k,f in enumerate(fs):
            j=np.where(idx[f]==v)[0][0]; cn[f*3+j]=acc[k]
    # weld corners that share a vertex and (almost) the same normal
    qn=np.round(cn*64).astype(np.int64)
    key=np.concatenate([corners[:,None],qn],1)
    uk,inv=np.unique(key,axis=0,return_inverse=True)
    newpos=pos[uk[:,0]]; newn=np.zeros((len(uk),3)); np.add.at(newn,inv,cn)
    newn/=np.maximum(np.linalg.norm(newn,axis=1,keepdims=True),1e-12)
    return newpos,newn,inv.reshape(-1,3)

import os
UPRIGHT='--upright' in sys.argv; args=[a for a in sys.argv[1:] if not a.startswith('--')]
if len(args)<3: sys.exit('usage: python3 tools/convert_model.py <metal.stl> <gems.stl> <name> [--upright]   (run from the site folder)')
METAL,GEMS,NAME=args[:3]; OUT='assets/models/'
_load=load
def load(f):
    t=_load(f)
    if UPRIGHT:   # (x, y, z) -> (x, -z, y): the top (+Y) goes up, the face (+Z) turns to the front (-Y)
        t=np.stack([t[...,0],-t[...,2],t[...,1]],axis=-1)
    return t
metal=load(METAL); pos,idx=weld(metal)
print('metal verts',len(pos),'tris',len(idx))
pos,nrm,idx=crease_split(pos,idx)
print('after crease split verts',len(pos))
# measurements
z=pos[:,2]; x=pos[:,0]
band=pos[(np.abs(z)<0.25)]; print('inner radius ~', np.abs(band[:,0]).min(), 'outer half width at z0', np.abs(band[:,0]).max())
print('bbox',pos.min(0),pos.max(0))
# write: header nV,nI,flags, then pos int16 quantized (bbox), normals int8, indices u32
mn=pos.min(0); mx=pos.max(0); sc=(mx-mn)
qp=np.round((pos-mn)/sc*65535-32768).astype('<i2')
qn=np.round(nrm*127).astype('<i1')
nV=len(pos); nI=idx.size
hdr=struct.pack('<III I 6f',nV,nI,0x5152,0,*mn,*sc)
body=hdr+qp.tobytes()+qn.tobytes()+b'\0'*((-(nV*6+nV*3))%4)+idx.astype('<u4').tobytes()
open(OUT+NAME+'-metal.bin','wb').write(body)
open(OUT+NAME+'-metal.bin.gz','wb').write(gzip.compress(body,9))
print('metal bytes',len(body),'gz',len(gzip.compress(body,9)))

# gems: components
g=load(GEMS); gp,gi=weld(g)
n=len(gp); parent=np.arange(n)
def find(a):
    while parent[a]!=a:
        parent[a]=parent[parent[a]]; a=parent[a]
    return a
for t in gi:
    r0=find(t[0])
    for j in (1,2):
        r=find(t[j])
        if r!=r0: parent[r]=r0
roots=np.array([find(i) for i in range(n)])
comps={}
for vi,r in enumerate(roots): comps.setdefault(r,[]).append(vi)
print('gem components',len(comps))
gems=[]
tri_root=roots[gi[:,0]]
for r,vs in comps.items():
    P=gp[vs]; c=P.mean(0); Q=P-c
    w,V=np.linalg.eigh(Q.T@Q); ax=V[:,0]
    T=gi[tri_root==r]; a=gp[T[:,0]];b=gp[T[:,1]];cc=gp[T[:,2]]
    fn=np.cross(b-a,cc-a); ar=np.linalg.norm(fn,axis=1)/2; un=fn/np.maximum(np.linalg.norm(fn,axis=1,keepdims=True),1e-12)
    d=un@ax
    # the table: biggest flat area facing +/-ax
    if UPRIGHT: out=np.array([0.0,-1.0,0.0])   # the table faces the front
    else: out=np.array([c[0],0.0,c[2]]); out/=max(np.linalg.norm(out),1e-9)
    if ax@out<0: ax=-ax   # the table faces away from the finger
    h=Q@ax; radial=np.linalg.norm(Q-np.outer(h,ax),axis=1)
    dia=2*radial.max()
    # put origin at girdle: girdle is where radius is max
    gh=h[radial>radial.max()*0.985].mean()
    top=h.max(); bot=h.min()
    st=dict(c=(c+ax*gh).round(4).tolist(), n=ax.round(4).tolist(), d=round(float(dia),3), crown=round(float(top-gh),3), pav=round(float(gh-bot),3))
    # oval / elongated stones: measure the girdle along its two in-plane axes
    G=Q[radial>radial.max()*0.6]; G=G-np.outer(G@ax,ax)
    w2,V2=np.linalg.eigh(G.T@G); u=V2[:,2]; v=np.cross(ax,u)
    L=float((G@u).max()-(G@u).min()); W=float((G@v).max()-(G@v).min())
    if L>W*1.12:
        st['d']=round(W,3); st['L']=round(L,3); st['u']=u.round(4).tolist()
    gems.append(st)
ds=sorted(round(x['d'],2) for x in gems)
from collections import Counter; print(Counter(ds))
json.dump(gems,open(OUT+NAME+'-gems.json','w'),separators=(',',':'))
print(gems[0])
