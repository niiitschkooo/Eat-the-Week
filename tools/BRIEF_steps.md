# Anleitung: Zubereitungsschritte eindeutig formulieren

Die App „Grün geplant“ zeigt jeden Zubereitungsschritt als eigene Karte im Kochmodus. Wer kocht, liest einen Schritt einmal und handelt. Deshalb muss bei jedem Verb sofort klar sein, **welche Zutat** gemeint ist.

## Das Problem (Beispiel aus der App)

> Kürbis weich dämpfen, Mais erhitzen und zerdrücken oder pürieren.

Unklar: Wird nur der Mais zerdrückt oder auch der Kürbis?

**Richtig, je nach Absicht:**

> Kürbis weich dämpfen. Mais erhitzen und mit der Gabel zerdrücken oder pürieren. Den Kürbis in Stücken lassen.

oder

> Kürbis weich dämpfen und Mais erhitzen. Beides zusammen zerdrücken oder pürieren.

## Regeln

1. **Jedes Verb hat ein klares Objekt.** Bekommen zwei Zutaten unterschiedliche Behandlungen, stehen sie in getrennten Sätzen oder Satzteilen mit eigenem Verb. Bekommen sie dieselbe Behandlung, steht das ausdrücklich da („beides“, „Kürbis und Mais zusammen“, „alle drei“).
2. **Keine schwebenden Verben am Satzende** nach einer Aufzählung („A dünsten, B erhitzen und zerdrücken“). Entweder das Objekt wiederholen („B erhitzen und B zerdrücken“ → „B erhitzen und zerdrücken. A nicht zerdrücken.“) oder in zwei Sätze teilen.
3. **Pronomen nur, wenn eindeutig.** „es“, „sie“, „diese“, „das Ganze“, „alles“ nur verwenden, wenn genau eine Sache gemeint sein kann. Sonst die Zutat nennen.
4. **„oder“ zwischen Handlungen** nur mit klarem Objekt: „Den Mais zerdrücken oder pürieren“ ist gut, „zerdrücken oder pürieren“ nach einer Aufzählung nicht.
5. **Mengen, Zeiten, Temperaturen bleiben gleich.** Nichts erfinden, nichts weglassen. Die Zutatenliste nicht ändern.
6. **Kinderportion:** Ausdrücklich sagen, welche Teile für das Kind zerdrückt, zerpflückt oder klein geschnitten werden („Kichererbsen für das Kind zerdrücken, Gemüse in weichen Stücken lassen“).
7. **Kurz bleiben.** Ein Schritt darf zwei bis drei kurze Sätze haben. Deutsch, sachlich, keine Ausrufezeichen.
8. Nur ändern, was unklar ist. Klare Schritte bleiben wörtlich stehen.

## Was du ändern darfst

- `steps` (Familiengerichte und Kindergerichte)
- `kid` (Text der Kinderversion), `serve` (Kindergerichte), `leftover`, `tipp` — nur wenn dort dieselbe Unklarheit steckt

Alles andere (ids, Namen, Zutaten, Mengen, Allergene, Felder) bleibt unverändert. Strings in einfachen Anführungszeichen; ein Apostroph im Text als \' schreiben.

## Ablauf je Datei

1. Alle Schritte der Datei ausgeben, zum Beispiel mit:
   `node -e 'const fs=require("fs"),vm=require("vm");const c={RECIPES:[],KIDS:[],EXTRAS:{},VEG_COLORS:{}};vm.createContext(c);vm.runInContext(fs.readFileSync(process.argv[1],"utf8").replace(/^const /gm,"var "),c);(c.RECIPES.length?c.RECIPES:c.KIDS).forEach(r=>{console.log("## "+r.id);r.steps.forEach((s,i)=>console.log(i+1+". "+s));if(r.kid)console.log("K: "+r.kid)})' assets/world/xx.js`
2. Jeden Schritt prüfen. Unklare Schritte mit dem Edit-Werkzeug ersetzen (exakter Text alt → neu).
3. `node --check <datei>` und `cd /home/user/werkstatt/gruen-geplant && node tools/validate.js` (für Länderdateien mit Pfad) müssen OK melden.
