# Anleitung: Top-15-Gerichte eines Landes als Datendatei

Du schreibst DATEN (deutschsprachige Inhalte) für die Web-App „Grün geplant“, einen gesunden Familien-Wochenplaner mit Kleinkind-Option. Pro Land eine Datei `assets/world/<slug>.js` mit genau 15 Gerichten. Die Datei wird nach `data.js` geladen und hängt an das bestehende Array an:

```js
/* Grün geplant · <Land> · Top 15 */
RECIPES.push(
  { ... },
  { ... }
);
```

Lies vorher `assets/data.js` (die ersten 150 Zeilen reichen) für Ton und Schreibweise der Zutaten.

## Auswahl der 15 Gerichte
Die 15 bekanntesten, typischsten Gerichte des Landes, die sich als gesundes Familien-Abendessen eignen. Echte Gerichtsnamen, dann ein deutscher Zusatz: `name:'Bibimbap · bunte Reisschale mit Gemüse und Ei'`. Gesund umgesetzt: viel Gemüse, wenig Salz, Vollkorn wo sinnvoll, mageres Fleisch, kein Frittieren als Hauptmethode (Ofen oder Pfanne stattdessen). Nichts Rohes (kein roher Fisch, kein rohes Ei, kein Tatar), kein Alkohol, keine Süßspeisen, keine Suppe ohne Sättigung. Mischung: mehrere vegetarische (Hülsenfrüchte, Tofu, Ei, Milchprodukt), 2 bis 4 mit Fisch, 3 bis 6 mit Fleisch oder Geflügel, davon mindestens 4 Gerichte unter 25 Minuten Gesamtzeit und mindestens 4 mit `wholegrain:true`.

## Schema je Gericht (alle Felder Pflicht, außer die als optional markierten)
```js
{
  id:'kr-bibimbap',               // Pflicht: Landes-Kürzel + '-' + Kurzname, nur a-z, 0-9 und Bindestrich, weltweit eindeutig
  name:'Bibimbap · bunte Reisschale mit Gemüse und Ei',
  cuisine:'Korea',                // exakt der deutsche Landesname aus deinem Auftrag
  flag:'🇰🇷',                     // exakt aus deinem Auftrag
  protein:'ei',                   // fisch | fleisch | gefluegel | huelsen | tofu | ei | milch  (Hauptproteinquelle)
  base:'reis',                    // quinoa | reis | kartoffeln | nudeln | couscous | bulgur | polenta | null
  time:{a:15,c:20},               // aktive Minuten, Garminuten (Zahlen)
  devices:[['topf'],['pfanne']],  // Gruppen; je Gruppe muss EIN Gerät da sein. Erlaubt: topf, pfanne, ofen, airfryer, mikrowelle, maschine, slowcooker. Beispiele: [['ofen']], [['airfryer','ofen']], [['topf','slowcooker']]
  method:'Topf + Pfanne',
  allergens:['ei','soja'],        // nur: gluten, milch, ei, soja, nuesse, fisch, sesam, sellerie (leer: [])
  wholegrain:true, lowChop:false, oneVessel:false,
  baseCount:4,                    // Anzahl der Hauptkomponenten
  veg:['Karotten','Zucchini','Spinat'],   // Gemüsesorten des Gerichts, deutsche Namen (siehe Liste unten)
  season:[],                      // Monate 1-12, wenn das Hauptgemüse Saison hat, sonst []
  ing:[                           // Mengen für EINE Erwachsenenportion, 6 bis 10 Einträge
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:['...','...','...'],      // 3 bis 5 Sätze, konkret mit Minuten und Temperaturen. Letzter Schritt: Kinderportion mild/ungesalzen abnehmen, dann Erwachsene würzen.
  kidName:'Mini-Bibimbap',        // Pflicht: Name der Kinderversion, kurz
  kid:'Ei vollständig durchgaren und klein schneiden, Gemüse weich dünsten, ohne Gochujang und Salz als kleine getrennte Häufchen anbieten.', // Pflicht: 1-2 Sätze, konkrete Kleinkind-Anpassung (Textur, Hülsenfrüchte zerdrücken, rundes Obst/Gemüse vierteln, kein Salz, keine Schärfe, kein Honig, Ei/Fisch durchgaren)
  leftover:'Reis-Pfanne · 8 Min. – Reste mit Gemüse in der Pfanne durchbraten.',  // optional, Format 'Name · N Min. – ein Satz'
  tipp:'...'                      // optional, ein Satz
}
```
Richtwerte je Erwachsenenportion: Reis/Quinoa/Bulgur/Couscous trocken 70–80 g, Nudeln 90 g, Polenta 70 g, Kartoffeln 250 g, Fischfilet 140 g, Hähnchen 130 g, Hackfleisch 100 g, Rind in Streifen 110 g, Tofu 125 g, Hülsenfrüchte aus der Dose abgetropft 130–150 g (dann `hint:'1 Dose ≈ 240 g abgetropft'`), trockene Linsen 60–70 g, Gemüse insgesamt 150–250 g, Öl 1 EL.

## Zutaten-Schreibweise (wichtig: die Einkaufsliste fasst gleich geschriebene Zutaten zusammen)
Vorhandene Namen genau so verwenden: 'Rote Paprika', 'Tomaten', 'Tomaten, passiert', 'Tomaten, gehackt (Dose)', 'Kirschtomaten', 'Babyspinat', 'Brokkoli', 'Karotten', 'Hokkaido-Kürbis', 'Zucchini', 'Erbsen, TK', 'Kartoffeln', 'Kartoffeln, festkochend', 'Kartoffeln, mehlig', 'Süßkartoffel', 'Avocado', 'Champignons', 'Gurke', 'Blumenkohl', 'Lauch', 'Grünkohl oder Spinat', 'Pak Choi', 'Zwiebel', 'Rote Zwiebel', 'Knoblauch' (u:'Zehe'), 'Ingwer', 'Frühlingszwiebel', 'Limette', 'Zitrone', 'Mais (Dose oder TK)', 'Kichererbsen (Dose, abgetropft)', 'Schwarze Bohnen (Dose, abgetropft)', 'Kidneybohnen (Dose, abgetropft)', 'Weiße Bohnen (Dose, abgetropft)', 'Rote Linsen, trocken', 'Vollkornreis', 'Reis', 'Jasminreis', 'Rundkornreis', 'Quinoa', 'Vollkornnudeln', 'Reisnudeln', 'Bulgur', 'Vollkorn-Couscous', 'Polenta (Maisgrieß)', 'Tofu, natur', 'Eier', 'Feta', 'Naturjoghurt', 'Milch', 'Parmesan oder Hartkäse', 'Lachsfilet', 'Seelachsfilet', 'Hähnchenbrust', 'Rinderhack, mager', 'Rindfleisch, dünne Streifen', 'Kokosmilch', 'Gemüsebrühe, salzarm', 'Sojasauce, salzreduziert', 'Olivenöl', 'Rapsöl', 'Sesamöl', 'Kreuzkümmel, gemahlen', 'Paprikapulver, edelsüß', 'Kurkuma', 'Zimt', 'Vollkornbrot' (u:'Scheiben'), 'Maistortillas, klein', 'Vollkorn-Fladenbrot'. Neue Zutaten sinnvoll und einheitlich benennen (Singular bei Stückware wie 'Aubergine', Plural wie 'Tomaten' nur wenn oben so). Einheiten: g, ml, Stk., EL, TL, Scheiben, Zehe, Stange, Bund.
Kategorien `c`: gemuese (Gemüse, Obst, frische Kräuter) · vorrat (Getreide, Dosen, Nudeln, Saucen) · kuehl (Milchprodukte, Eier, Tofu, Hummus) · fisch (Fisch UND Fleisch) · tk (Tiefkühl) · brot · gewuerz (Öl, Gewürze, immer mit p:true).
Gemüsenamen für `veg` bevorzugt aus: Rote Paprika, Tomaten, Kirschtomaten, Mais, Babyspinat, Spinat, Brokkoli, Karotten, Kürbis, Zucchini, Erbsen, Kartoffeln, Süßkartoffel, Avocado, Pilze, Gurke, Blumenkohl, Lauch, Grünkohl, Pak Choi, Zwiebel, Rote Zwiebel, Zuckerschoten, Salat, Frühlingszwiebel, Rote Bete, Apfel, Zitrone, Limette, Aubergine, Grüne Bohnen, Kohl, Weißkohl, Rotkohl, Wirsing, Rosenkohl, Kohlrabi, Fenchel, Sellerie, Pastinake, Okra, Mangold, Spargel, Radieschen, Chinakohl, Bambussprossen, Mango, Ananas, Banane, Kochbanane, Maniok, Yams, Oliven, Artischocke, Rucola, Kräuter.

## Qualität
Deutsch, sachlich, kurz, keine Ausrufezeichen, kein Marketing. Einfache Anführungszeichen für Strings; ein Apostroph im Text als \' schreiben. Keine Kommentare innerhalb der Objekte nötig. Jede Datei zuerst mit `node --check` prüfen, dann mit dem Prüfskript:

    cd /home/user/werkstatt/gruen-geplant && node tools/validate.js assets/world/<slug>.js

Es muss `OK` ausgeben und `pro Land: {"<Land>":15}` zeigen. Erst dann die nächste Datei. Ändere KEINE anderen Dateien.
