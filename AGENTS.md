# AGENTS.md – Projektplan "Wetter vs. Klima"

Dieses Repository wird als Basis für eine erste Version einer Android-App (optional auch als einfache Web-App) genutzt, die aktuelle Wetterdaten mit historischen Klimamitteln vergleicht.

## Strategische Richtungsentscheidung (neu)

- Wir entfernen die serverseitige Zwischenlogik (`server.js`) aus dem MVP-Pfad.
- Wir entfernen die Abhängigkeit von lokalen Stationslisten/Stationsdateien für die Standortwahl.
- Der MVP soll vollständig auf Open-Meteo APIs und Koordinaten-basiertem Zugriff laufen.
- Orte werden über Koordinaten definiert (Map-Picker, Geolocation, optional Geocoding), nicht über lokale Stationsnamen.

## Zielbild (MVP)

Wir bauen eine App/Webseite, die:

1. den aktuellen Standort nutzt (oder manuell einen Ort/eine Region wählen lässt),
2. Temperatur- und Niederschlagsverlauf für den letzten Monat und das letzte Jahr zeigt,
3. den Verlauf einem historischen Referenzwert gegenüberstellt (Open-Meteo-basiert, koordiniatenbezogen),
4. die Abweichung klar visualisiert ("heute vs. früher").

## Produktidee (später)

- Monetarisierung über Werbung
- Gamification: "Schätze, wie viel wärmer/trockener als früher"
- Soziale Komponente: Vergleich/Challenges mit Menschen aus derselben Region

## Nächste Schritte (Roadmap)

### 1) Repository aufräumen

- Bestehende Dateien sichten (Daten, Frontend, Server)
- Altlasten dokumentieren
- Struktur für reine Frontend-Architektur mit Open-Meteo vorbereiten

### 2) Datenquellen festlegen

- Open-Meteo als primäre Quelle für Wetter/Klimadaten im MVP
- Standortauflösung über Koordinaten (Map-Picker/Geolocation)
- Historische Referenzzeiträume perspektivisch auswählbar machen
- API-Nutzungsgrenzen und Lizenzbedingungen transparent dokumentieren

### 3) Erstes technisches Gerüst

- Gemeinsame Datenzugriffsschicht definieren
- Für MVP zuerst einfache Web-Ansicht oder Android-Basisansicht mit:
  - Standortfreigabe oder manuelle Ortswahl auf Karte
  - zwei Diagrammen (Temperatur/Niederschlag)
  - Vergleichslinie historisches Mittel (Open-Meteo-basiert)

### 4) Visualisierung & Kennzahlen

- Monats-/Jahresansicht umschaltbar
- Abweichungsmetriken festlegen (z. B. Δ Temperatur in °C, Δ Niederschlag in %)
- Zusätzlich zu den Plots jeweils eine einfache Textmetrik anzeigen
- Aussagekräftige Farben/Legenden für "normal" vs. "abweichend"

### 5) Vorbereitung auf spätere Features

- Architektur so wählen, dass Werbung/Gamification/Social später ergänzt werden kann
- Nutzerkonto nur optional und erst in späterer Phase

## Arbeitsprinzipien

- Erst funktionierender, kleiner MVP
- Datenqualität und Quellen-Transparenz vor Feature-Menge
- Jede neue Funktion mit kurzer Doku im Repo festhalten

## Definition of Done (für den MVP-Start)

- Standort kann ermittelt werden oder Ort/Region manuell gesetzt werden
- Letzter Monat + letztes Jahr für Temperatur/Niederschlag abrufbar
- Historischer Referenzwert derselben Region eingeblendet (koordiniatenbezogen)
- Abweichung verständlich visualisiert (Plot + kurze Textmetrik)
