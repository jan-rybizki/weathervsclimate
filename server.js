const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Enable CORS for local frontend development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// ==== HIER KOMMT DER NEUE KOMBINIERTE ENDPOINT ==== //
app.get('/station', (req, res) => {
  const stationName = req.query.name;
  const stationId = req.query.id;
  const includeTemperature = req.query.includeTemperature === 'true';

  fs.readFile('data/Temperatur_1961-1990_Stationsliste.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Could not read stations file.' });

    const lines = data.split('\n');
    let found = null;
    for (const line of lines) {
      if (!line.trim() || line.startsWith("Stations_id")) continue;
      const cols = line.split(';').map(col => col.trim());
      if (
        (stationName && cols[1] && cols[1].toLowerCase() === stationName.toLowerCase()) ||
        (stationId && cols[0] && cols[0] === stationId)
      ) {
        found = {
          id: cols[0],
          name: cols[1],
          breite: cols[2],
          laenge: cols[3],
          hoehe: cols[4],
          bundesland: cols[5],
        };
        break;
      }
    }
    if (!found) return res.status(404).json({ error: 'Station not found' });

    if (includeTemperature) {
      fs.readFile('data/Temperatur_1961-1990.txt', 'utf8', (err, tdata) => {
        if (err) return res.status(500).json({ error: 'Could not read temperature data file.' });
        const tlines = tdata.split('\n');
        let theaders = [];
        let tfound = null;
        for (const line of tlines) {
          if (!line.trim()) continue;
          if (theaders.length === 0 && line.includes("Stations_id")) {
            theaders = line.split(';').map(h => h.trim());
            continue;
          }
          const cols = line.split(';').map(col => col.trim());
          if (cols[0] === found.id) {
            tfound = {};
            theaders.forEach((header, i) => {
              tfound[header] = cols[i];
            });
            break;
          }
        }
        found.temperatur = tfound;
        res.json(found);
      });
    } else {
      res.json(found);
    }
  });
});
// ==== ENDE DES NEUEN ENDPOINTS ==== //
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});