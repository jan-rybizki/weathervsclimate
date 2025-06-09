const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Enable CORS for local frontend development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Endpoint to get station ID by station name
app.get('/station-id', (req, res) => {
  const stationName = req.query.name;
  if (!stationName) {
    return res.status(400).json({ error: 'Missing station name' });
  }

  fs.readFile('data/Temperatur_1961-1990_Stationsliste.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Could not read data file.' });

    const lines = data.split('\n');
    let found = null;
    for (const line of lines) {
      if (!line.trim() || line.startsWith("Stations_id")) continue; // Skip empty and header lines
      // Split line by semicolon and trim each field
      const cols = line.split(';').map(col => col.trim());
      // Find station name in the proper column (column 2, index 1)
      if (cols[1] && cols[1].toLowerCase() === stationName.toLowerCase()) {
        found = cols;
        break;
      }
    }
    if (!found) return res.status(404).json({ error: 'Station not found' });

    // Station ID is the first column
    res.json({ id: found[0], columns: found });
  });
});

// New endpoint to get temperature data by station ID
app.get('/temperature-data', (req, res) => {
  const stationId = req.query.id;
  if (!stationId) {
    return res.status(400).json({ error: 'Missing station ID' });
  }

  fs.readFile('data/Temperatur_1961-1990.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Could not read temperature data file.' });

    const lines = data.split('\n');
    let headers = [];
    let found = null;
    for (const line of lines) {
      if (!line.trim()) continue;
      // First non-empty line is header
      if (headers.length === 0 && line.includes("Stations_id")) {
        headers = line.split(';').map(h => h.trim());
        continue;
      }
      const cols = line.split(';').map(col => col.trim());
      if (cols[0] === stationId.trim()) {
        found = cols;
        break;
      }
    }
    if (!found) return res.status(404).json({ error: 'Temperature data not found for this station ID' });

    // Return as an object: { "Month": value }
    let result = {};
    headers.forEach((header, i) => {
      result[header] = found[i];
    });
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});