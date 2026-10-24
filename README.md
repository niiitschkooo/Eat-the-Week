# Eat the Week · gesunder Familien-Wochenplan (Grün geplant)

Eine eigenständige Web-App ohne Build-Schritt: `index.html` öffnen, fertig. Alle Daten bleiben im Browser (localStorage).

## Was die App kann

- **Woche**: sieben gemüsereiche Abendessen, automatisch geplant nach Zielen (Fisch, Hülsenfrüchte, pflanzliche Tage, Fleisch höchstens), Zeitbudget, Geräten, Allergien und Saison. Tage festhalten, tauschen, als gekocht markieren, Favoriten, Notizen, Bewertung, „Basis für 2 Tage“ (eine Grundzutat einmal kochen, am Folgetag neu kombinieren), optionales Extra-Eiweiß.
- **Weltküche**: pro Land die 15 bekanntesten Gerichte, gesund und familientauglich umgesetzt, jedes mit Kinderversion. Nach Region und Land stöbern, suchen, direkt auf einen Wochentag legen.
- **Was ist da?**: Zutaten eintragen, passende Gerichte nach Trefferquote sehen, fehlende Zutaten auf einen Blick, einplanen. Optional bevorzugt der Wochenplan Gerichte, die zum Vorrat passen.
- **Kinderküche**: eigene Kleinkind-Gerichte aus vielen Ländern, Kinderversionen aller Länder-Gerichte, Altersstufen (6 Monate bis Schulkind) mit Textur- und Sicherheitsregeln, Gewürz-Entdecker.
- **Einkauf**: gesammelte Einkaufsliste für die Woche, skaliert auf den Haushalt, nach Abteilungen, abhakbar, als Text kopierbar, eigene Einträge.
- **Vorbereitung**: 20-Minuten-Wochenstart aus dem aktuellen Plan, mehrfach genutzte Zutaten, Verkettungen, Reste-Ideen, Notfallgerichte und Vorratscheck.
- **Feinplanung**: Haushalt (Erwachsene, Kinder mit Alter in Monaten, Extra-Portionen), Ernährungsweise, Ziele, Allergene, No-Gos, Zeit, Aufwand, Geräte, Datensicherung per Kopieren und Einlesen.
- **Wissen**: Orientierung nach DGE, Saisonkalender, Sicherheitsregeln nach Alter.

## Dateien

```
index.html               Seite
assets/styles.css        Gestaltung (helles und dunkles Thema)
assets/app.js            Logik: Planung, Einkauf, Kinderoption, Speichern
assets/data.js           Grundrezepte, Extras, Saisonkalender, Farben
assets/kids.js           Kinder-Weltküche, Altersstufen, Prinzipien, Gewürz-Brücken
assets/data-more.js      weitere Familiengerichte und Kindergerichte
assets/world/<land>.js   Top 15 je Land (eine Datei pro Land)
assets/world.js          Bündel aller Länderdateien (erzeugt, nicht von Hand bearbeiten)
tools/bundle.js          erzeugt assets/world.js:   node tools/bundle.js
tools/validate.js        prüft die Rezeptdaten:    node tools/validate.js
tools/BRIEF_world.md     Schema und Regeln für neue Länderdateien
```

## Neue Gerichte hinzufügen

1. Datei `assets/world/<kürzel>.js` nach dem Muster in `tools/BRIEF_world.md` anlegen.
2. `node tools/validate.js assets/world/<kürzel>.js` muss `OK` ausgeben.
3. `node tools/bundle.js` ausführen, damit `assets/world.js` neu entsteht.

## Veröffentlichen

Der Ordner ist statisch. Für GitHub Pages: Settings → Pages → Branch `main`, Ordner `/ (root)`. Die App liegt dann unter https://niiitschkooo.github.io/Eat-the-Week/

## Hinweis

Rezepte sind Vorschläge mit Richtmengen, Nährstoffangaben sind Orientierungen anhand der Zutaten. Kein Ersatz für medizinische Beratung; bei Allergien oder Unsicherheit Kinderarztpraxis, Hebamme oder Ernährungsfachkraft einbeziehen.
