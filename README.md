# SHEMIRANI Jewelry website

Static site (HTML, CSS, JavaScript). No build step and no server code, so it runs on GitHub Pages or any static host.

## Put it online with GitHub Pages

1. Create a new repository on GitHub and upload everything in this folder (keep the folder structure, including the empty `.nojekyll` file).
2. In the repository open **Settings → Pages**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then save.
3. After a minute the site is live at `https://<your-user>.github.io/<repository>/`.

All links are relative, so the site also works from a sub-folder or a custom domain.

## Structure

```
index.html                  home: full-screen hero; opens on the newest design and moves to the next every 30 s
collections/<name>/         one page per collection (rings, earrings, bracelets, bangles, necklaces, pendants)
designs/<name>/             one page per design (3D viewer, film, photos, specifications)
assets/js/designs.js        the list of designs: names, descriptions, specifications, photos
assets/js/ring3d.js         the 3D ring viewer (gold and diamond materials, studio light, mirror floor)
assets/js/site.js           language switch (English / Persian), sidebar menu
assets/js/home.js           home hero chapters
assets/css/site.css         shared styles; assets/css/hero.css adds the home hero
assets/models/              web versions of the 3D models
assets/img/<design>/        photos of each design
assets/video/               turntable films
assets/vendor/three.min.js  three.js r128 (MIT licence, see three.LICENSE)
```

## Add a new design

1. Photos go in `assets/img/<name>/`, the film in `assets/video/<name>-360.mp4`.
2. Export the metal and the gems as two STL files from Rhino, then run `python3 tools/convert_model.py metal.stl gems.stl <name>` in this folder (needs `pip install numpy`). It writes `assets/models/<name>-metal.bin` and `<name>-gems.json`. Add the name to the `MODELS` list at the top of `assets/js/ring3d.js`.
3. Copy one entry in `assets/js/designs.js` and fill in the name, collection, description (English and Persian), photos and specifications.
4. Copy the folder `designs/aurelis/` to `designs/<name>/` and change `data-design="aurelis"` to the new name in its `index.html`.

The new design then appears in its collection and in the sidebar menu. The design with the latest `added` date opens the home page, and the hero shows every design in turn, 30 seconds each.

## Test on your computer

Open a terminal in this folder and run `python3 -m http.server 8080`, then visit `http://localhost:8080`. (Opening `index.html` directly from the disk will not load the 3D models, because browsers block that.)
