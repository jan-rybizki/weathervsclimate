# weathervsclimate

GitHub-Pages-ready static prototype that compares recent weather (Open-Meteo) vs. historical station climate normals (1961–1990) from local dataset files.

## Run locally (no Node server required)

Option 1 (Python):

```bash
python3 -m http.server 8080
```

Then open: <http://localhost:8080>

Option 2:
Use GitHub Pages directly after pushing this repository.

## Notes

- Frontend-only architecture (no `server.js` required for the prototype).
- Climate baseline is loaded from `data/Temperatur_1961-1990*.txt` in the repo.
- Recent weather is fetched in-browser from Open-Meteo archive API.
