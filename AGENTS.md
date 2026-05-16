# AGENTS.md – Projektplan "Wetter vs. Klima"

Dieses Repository wird als Basis für eine erste Version einer Android-App (optional auch als einfache Web-App) genutzt, die aktuelle Wetterdaten mit historischen Klimamitteln vergleicht.

## Zielbild (MVP)

Wir bauen eine App/Webseite, die:

1. den aktuellen Standort nutzt (oder manuell einen Ort/eine Region wählen lässt),
2. Temperatur- und Niederschlagsverlauf für den letzten Monat und das letzte Jahr zeigt,
3. den Verlauf dem historischen Klimamittel einer Referenzperiode (z. B. 1961–1990) für dieselbe Region gegenüberstellt,
4. die Abweichung klar visualisiert ("heute vs. früher").

## Produktidee (später)

- Monetarisierung über Werbung
- Gamification: "Schätze, wie viel wärmer/trockener als früher"
- Soziale Komponente: Vergleich/Challenges mit Menschen aus derselben Region

## Nächste Schritte (Roadmap)

### 1) Repository aufräumen

- Bestehende Dateien sichten (Daten, Frontend, Server)
- Altlasten dokumentieren
- Struktur für App + API + Daten vorbereiten

### 2) Datenquellen festlegen

- Öffentliche Wetter-/Klimadatenbank auswählen
- Für den Start pragmatisch: erst ein frei verfügbares Open-Source-Griddatenset nutzen (auch wenn es ungenauer ist).
- Optional später für höhere Genauigkeit: Mapping auf konkrete Wetterstation(en).
- Prüfen:
  - Standortauflösung (Koordinaten → Gridzelle; später optional nächste Station)
  - Historische Referenzzeiträume: standardmäßig 1961–1990, perspektivisch zusätzlich auswählbar
  - API-Limits und Lizenzbedingungen (bevorzugt zunächst Quellen ohne harte Limits; skalierbare APIs später)

### 3) Erstes technisches Gerüst

- Gemeinsame Datenzugriffsschicht definieren
- Für MVP zuerst einfache Web-Ansicht oder Android-Basisansicht mit:
  - Standortfreigabe oder manuelle Ortswahl
  - zwei Diagrammen (Temperatur/Niederschlag)
  - Vergleichslinie historisches Mittel

### 4) Visualisierung & Kennzahlen

- Monats-/Jahresansicht umschaltbar
- Abweichungsmetriken festlegen (z. B. Δ Temperatur in °C, Δ Niederschlag in %)
- Zusätzlich zu den Plots jeweils eine einfache Textmetrik anzeigen (z. B. "+1,8 °C vs. 1961–1990", "-12 % Niederschlag")
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
- Historisches Mittel derselben Region (standardmäßig 1961–1990) eingeblendet
- Abweichung verständlich visualisiert (Plot + kurze Textmetrik)
