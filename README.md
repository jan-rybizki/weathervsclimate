# weathervsclimate

GitHub-Pages-ready static prototype that uses Open-Meteo only. Place selection is done via Leaflet + OpenStreetMap map picker and all weather data is loaded from Open-Meteo APIs using selected coordinates.

## Run locally (no Node server required)

Option 1 (Python):

```bash
python3 -m http.server 8080
```

Then open: <http://localhost:8080>

Option 2:
Use GitHub Pages directly after pushing this repository.

## Notes

- Frontend-only architecture.
- `server.js` and local station lists are deprecated and will be removed.
- Location flow:
  - start with approximate network/IP location (if available),
  - adjust by clicking/dragging marker on map,
  - optionally replace with precise browser GPS.
- Open-Meteo archive API is queried with selected `latitude`/`longitude`.
