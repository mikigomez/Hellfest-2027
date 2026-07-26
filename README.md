# Hellfest 2027 — Crew Site

Static site for the trip: countdown, travel info, packing checklists, and band predictions.

## Editing content

Everything lives in [`js/data.js`](js/data.js):

- `PACKING_LISTS` — packing checklist per person. Add/remove strings in the array for that name.
- `PREDICTIONS` — the 20 band predictions per person.
- `TRIP_INFO` — dates, address, Airbnb link, countdown target.

Edit that file, commit, and push — GitHub Pages picks up the change automatically within a minute or two.

## Running locally

No build step. Just serve the folder and open it:

```bash
python3 -m http.server 8877
```

Then visit `http://localhost:8877`.

## Publishing on GitHub Pages

1. Create a new **public** repo on GitHub (e.g. `hellfest2027`) — free GitHub Pages requires a public repo.
2. From this folder, push it:
   ```bash
   git remote add origin https://github.com/<your-username>/hellfest2027.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub: repo → **Settings** → **Pages** → under "Build and deployment", set Source to **Deploy from a branch**, branch `main`, folder `/ (root)` → Save.
4. After a minute, the site is live at `https://<your-username>.github.io/hellfest2027/`.

The URL is public but obscure — nobody finds it without the link.
