/* Grün geplant · Jemen · Top 15 */
RECIPES.push(
{
  id:'ye-saltah', name:'Saltah · Kartoffel-Tomaten-Eintopf mit Ei und Bockshornklee-Schaum', cuisine:'Jemen', flag:'🇾🇪',
  protein:'ei', base:'kartoffeln', time:{a:15,c:20}, devices:[['topf']], method:'Ein Topf',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Tomaten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Bockshornklee, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Hawaij (jemenitische Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Bockshornklee mit 4 EL kaltem Wasser verrühren und 15 Minuten quellen lassen. Kartoffeln in kleine Würfel schneiden.',
    'Zwiebel würfeln und im Öl 3 Minuten anschwitzen, Hawaij kurz mitrösten. Kartoffeln, gewürfelte Tomaten und Brühe zugeben und 12 Minuten köcheln.',
    'Eier verquirlen, in den sprudelnden Eintopf rühren und unter Rühren 3 Minuten garen, bis sie vollständig gestockt sind.',
    'Gequollenen Bockshornklee mit dem Schneebesen und 1 EL Wasser zu einem hellen Schaum schlagen und die Hälfte des gehackten Korianders unterziehen.',
    'Kinderportion ohne Schaum abnehmen und die Kartoffeln zerdrücken. Erwachsene salzen, den Schaum auf den heißen Eintopf geben und mit Fladenbrot löffeln.'
  ],
  kidName:'Kartoffel-Ei-Eintopf',
  kid:'Kartoffeln mit der Gabel zerdrücken, Ei vollständig gestockt und klein. Ohne Bockshornklee-Schaum und ohne Salz, mit weichem Brot.',
  leftover:'Saltah-Reis · 8 Min. – Reste vollständig erhitzen und über Reis geben.',
  tipp:'Saltah gilt als Nationalgericht und kommt brodelnd im Steintopf auf den Tisch, ein kleiner gusseiserner Topf hält ebenso warm.'
},
{
  id:'ye-fahsa', name:'Fahsa · geschmortes Zupf-Rindfleisch mit Tomaten, Hawaij und Fladenbrot', cuisine:'Jemen', flag:'🇾🇪',
  protein:'fleisch', base:null, time:{a:15,c:60}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slowcooker',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Bockshornklee, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Hawaij (jemenitische Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch würfeln und im Öl anschwitzen, Rindfleisch zugeben, rundum anbraten und Hawaij kurz mitrösten.',
    'Gehackte Tomaten, geriebene Karotte und 300 ml Wasser zugeben und zugedeckt 60 Minuten schmoren, im Slowcooker 6 Stunden auf niedriger Stufe, bis das Fleisch zerfällt.',
    'Fleisch im Topf mit zwei Gabeln zerzupfen und offen einkochen, bis ein dicker Eintopf entsteht. Bockshornklee mit 3 EL Wasser verrühren, 10 Minuten quellen lassen und schaumig schlagen.',
    'Kinderportion abnehmen und das Fleisch noch feiner zerzupfen. Erwachsene salzen, den Bockshornklee-Schaum daraufgeben und mit Fladenbrot essen.'
  ],
  kidName:'Zartes Zupffleisch mit Brot',
  kid:'Fleisch sehr fein zerzupfen und mit der Tomatensoße zu weichem Brot geben. Ohne Schaum und ohne Salz.',
  leftover:'Fahsa-Wrap · 8 Min. – Reste vollständig erhitzen und mit Gurke ins Fladenbrot rollen.',
  tipp:'Fahsa schmeckt aufgewärmt noch besser und lässt sich gut am Vortag schmoren.'
},
{
  id:'ye-mandi', name:'Mandi Dijaj · Ofenhähnchen mit Gewürzreis und Tomaten-Koriander-Dip', cuisine:'Jemen', flag:'🇾🇪',
  protein:'gefluegel', base:'reis', time:{a:15,c:35}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten','Gurke'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Reis',q:75,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Hawaij (jemenitische Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Hähnchen mit der Hälfte des Öls und Hawaij einreiben und auf dem Rost über einem Blech 30 bis 35 Minuten garen, bis kein rosa Fleischsaft mehr austritt.',
    'Zwiebel würfeln und im restlichen Öl glasig dünsten, Reis, geriebene Karotte und Zimt zugeben, mit 160 ml Wasser aufgießen und zugedeckt 15 Minuten garen.',
    'Tomaten sehr fein würfeln und mit gehacktem Koriander zu einem Dip verrühren, Gurke in Scheiben schneiden.',
    'Hähnchen auf den Reis legen und den Bratensaft vom Blech darüberträufeln.',
    'Kinderportion abnehmen, Hähnchen fein zerzupfen und mit dem Reis mischen. Erwachsene salzen und den Tomaten-Dip mit Chili schärfen.'
  ],
  kidName:'Mini-Mandi',
  kid:'Hähnchen fein zerzupfen und mit dem Bratensaft unter den Reis mischen. Gurke in Stifte, ohne Salz und Chili.',
  leftover:'Mandi-Reispfanne · 10 Min. – Reis und zerzupftes Hähnchen mit Erbsen in der Pfanne vollständig durcherhitzen.',
  tipp:'Traditionell gart Mandi in einer Erdgrube, auf dem Rost im Ofen wird das Hähnchen ähnlich saftig.'
},
{
  id:'ye-zurbian', name:'Zurbian · Adener Gewürzreis mit Lamm, Kartoffeln und Joghurt', cuisine:'Jemen', flag:'🇾🇪',
  protein:'fleisch', base:'reis', time:{a:20,c:45}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Lammfleisch, mager, gewürfelt',q:110,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Hawaij (jemenitische Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lammfleisch mit Joghurt, gepresstem Knoblauch und Hawaij mischen und 15 Minuten ziehen lassen. Vollkornreis mit Kurkuma in der doppelten Menge Wasser 30 Minuten garen.',
    'Zwiebel in Streifen schneiden und im Öl 6 Minuten goldbraun dünsten, Fleisch mit der Marinade zugeben und 5 Minuten anbraten.',
    'Kartoffeln würfeln, mit gewürfelter Tomate und 150 ml Wasser zugeben und zugedeckt 30 Minuten schmoren, bis Fleisch und Kartoffeln weich sind.',
    'Reis unter das Fleisch heben und zugedeckt 5 Minuten ziehen lassen.',
    'Kinderportion abnehmen, Lammfleisch fein zerzupfen und Kartoffeln zerdrücken. Erwachsene mit Salz und Chili würzen.'
  ],
  kidName:'Weicher Lamm-Kartoffel-Reis',
  kid:'Lammfleisch sehr fein zerzupfen, Kartoffeln zerdrücken und alles mit der Joghurtsoße mischen. Ohne Salz und Chili.',
  leftover:'Zurbian-Wrap · 8 Min. – Reste vollständig erhitzen und mit Gurke ins Fladenbrot rollen.',
  tipp:'Zurbian ist das Festtagsgericht aus Aden, mit Hähnchenschenkeln statt Lamm verkürzt sich die Schmorzeit auf 20 Minuten.'
},
{
  id:'ye-maraq', name:'Maraq Dijaj · Hähnchentopf mit Hawaij, Kartoffeln und Karotten', cuisine:'Jemen', flag:'🇾🇪',
  protein:'gefluegel', base:'kartoffeln', time:{a:12,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Zwiebel','Tomaten','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Hawaij (jemenitische Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und im Öl 3 Minuten anschwitzen, Hähnchen und Hawaij zugeben und kurz anrösten.',
    'Mit 600 ml Wasser auffüllen, die gewürfelte Tomate zugeben und 15 Minuten leise köcheln, dabei den Schaum abschöpfen.',
    'Kartoffeln und Karotten in große Stücke schneiden, zugeben und weitere 15 Minuten garen, bis alles weich ist. Hähnchen herausnehmen, zerzupfen und zurückgeben.',
    'Kinderportion ungesalzen abnehmen und Kartoffeln zerdrücken. Erwachsene salzen, mit Koriander bestreuen und mit Fladenbrot und etwas Chili essen.'
  ],
  kidName:'Hähnchen-Kartoffel-Topf',
  kid:'Hähnchen fein zerzupfen, Kartoffeln und Karotten weich zerdrücken und mit wenig Brühe als dicken Brei anbieten. Ohne Salz und Chili.',
  leftover:'Hähnchen-Reis-Topf · 10 Min. – Restliche Brühe mit Reis aufkochen und die Reste darin vollständig erhitzen.',
  tipp:'Hawaij für Suppe besteht vor allem aus Kreuzkümmel, Kurkuma, Pfeffer und Kardamom und lässt sich leicht selbst mischen.'
},
{
  id:'ye-mugalgal', name:'Mugalgal · Rindfleisch-Pfanne mit Tomaten, Paprika und Fladenbrot', cuisine:'Jemen', flag:'🇾🇪',
  protein:'fleisch', base:null, time:{a:10,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Hawaij (jemenitische Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Paprika und Knoblauch würfeln. Rindfleisch im heißen Öl in 2 Portionen je 2 Minuten scharf anbraten und herausnehmen.',
    'Zwiebel und Paprika in der Pfanne 4 Minuten braten, Knoblauch und Hawaij kurz mitrösten.',
    'Gewürfelte Tomaten zugeben und 4 Minuten einkochen, Fleisch zurück in die Pfanne geben und 1 Minute durchschwenken.',
    'Kinderportion abnehmen und das Fleisch sehr klein schneiden. Erwachsene salzen, mit Koriander und Chili bestreuen und mit Fladenbrot essen.'
  ],
  kidName:'Feine Fleisch-Tomaten-Pfanne',
  kid:'Fleisch sehr fein schneiden und mit der weichen Tomatensoße mischen, Brot in Streifen dazu. Ohne Salz und Chili.',
  leftover:'Mugalgal-Reis · 8 Min. – Reste mit gekochtem Reis in der Pfanne vollständig durchbraten.',
  tipp:'Im Jemen wird Mugalgal meist mit Lamm im Steintopf gebraten, mageres Rind gart in der Pfanne genauso schnell.'
},
{
  id:'ye-aqda', name:'Aqda Dijaj · Hähnchen-Gemüse-Topf mit Hawaij und Reis', cuisine:'Jemen', flag:'🇾🇪',
  protein:'gefluegel', base:'reis', time:{a:15,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zucchini','Karotten','Rote Paprika','Tomaten','Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Hawaij (jemenitische Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 15 bis 18 Minuten garen.',
    'Hähnchen in Würfel schneiden und im Öl 5 Minuten rundum anbraten, gewürfelte Zwiebel und Hawaij zugeben.',
    'Karotten, Zucchini und Paprika würfeln, mit passierten Tomaten und 100 ml Wasser zugeben und 12 Minuten sämig schmoren, bis das Gemüse weich und das Hähnchen durchgegart ist.',
    'Kinderportion abnehmen und das Hähnchen fein schneiden. Erwachsene mit Salz und Chili würzen und mit Reis servieren.'
  ],
  kidName:'Hähnchen-Gemüse-Reis',
  kid:'Hähnchen sehr klein schneiden, Gemüse weich schmoren und mit der Soße unter den Reis mischen. Ohne Salz und Chili.',
  leftover:'Aqda-Wrap · 5 Min. – Reste vollständig erhitzen und mit Joghurt ins Fladenbrot rollen.',
  tipp:'Das Gemüse lässt sich je nach Saison tauschen, Kartoffeln und Okra sind im Jemen ebenso üblich.'
},
{
  id:'ye-mofa', name:'Samak Mofa · Ofenfisch mit Hawaij-Paste, Vollkornreis und Tomaten-Sahawiq', cuisine:'Jemen', flag:'🇾🇪',
  protein:'fisch', base:'reis', time:{a:12,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zitrone','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Hawaij (jemenitische Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Ofen auf 220 °C vorheizen.',
    'Tomatenmark, gepressten Knoblauch, Hawaij, Öl und etwas Zitronensaft zu einer Paste verrühren und den Fisch damit bestreichen.',
    'Fisch auf ein Blech mit Backpapier legen und 12 bis 15 Minuten backen, bis er sich leicht zerpflücken lässt.',
    'Für das Sahawiq die Tomaten sehr fein würfeln und mit gehacktem Koriander mischen.',
    'Kinderportion abnehmen, Fisch entgräten und zerpflücken. Erwachsene salzen und das Sahawiq mit Chili schärfen.'
  ],
  kidName:'Zarter Ofenfisch mit Reis',
  kid:'Fisch sorgfältig entgräten und zerpflücken, mit weichem Reis und fein gewürfelter Tomate ohne Chili anbieten. Ohne Salz.',
  leftover:'Fisch-Reis-Taler · 15 Min. – Reste mit einem Ei verkneten, zu Talern formen und in der Pfanne durchbraten.',
  tipp:'Mofa heißt der jemenitische Lehmofen, sehr heiße Ofenhitze gibt dem Fisch eine ähnliche Kruste.'
},
{
  id:'ye-mukhbaza', name:'Mukhbaza · Adener Fisch in Tomaten-Zwiebel-Soße mit Fladenbrot', cuisine:'Jemen', flag:'🇾🇪',
  protein:'fisch', base:null, time:{a:8,c:15}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in Streifen schneiden und im Öl 5 Minuten weich dünsten, Knoblauch, Kreuzkümmel und Kurkuma kurz mitrösten.',
    'Gehackte Tomaten zugeben und 4 Minuten einkochen.',
    'Fisch in große Stücke teilen, in die Soße legen und zugedeckt 6 bis 8 Minuten garen, bis er innen nicht mehr glasig ist.',
    'Kinderportion abnehmen, Fisch entgräten und mit Soße und Brotstücken zerdrücken. Erwachsene mit Salz, Zitrone, Koriander und Chili würzen und mit Fladenbrot essen.'
  ],
  kidName:'Fisch-Brot-Mus',
  kid:'Fisch gründlich entgräten und mit der Tomatensoße und eingeweichtem Brot zerdrücken. Ohne Salz und Chili.',
  leftover:'Fisch-Tomaten-Nudeln · 12 Min. – Restliche Soße mit Fisch vollständig erhitzen und unter Vollkornnudeln mischen.',
  tipp:'In Aden wird der Fisch mit dem Brot vermengt gegessen, mit Fladenbrot zum Eintunken gelingt das ganz ohne Frittieren.'
},
{
  id:'ye-mutabbaq', name:'Mutabbaq · gefüllte Fladen mit Ei und Frühlingszwiebeln aus der Pfanne', cuisine:'Jemen', flag:'🇾🇪',
  protein:'ei', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Frühlingszwiebel','Tomaten','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Tortillas',q:2,u:'Stk.',c:'brot'},
    {n:'Frühlingszwiebel',q:2,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Frühlingszwiebeln in feine Ringe, Tomate in kleine Würfel schneiden und mit gehacktem Koriander, Kreuzkümmel und den Eiern verquirlen.',
    'Eine Tortilla in die mit wenig Öl ausgestrichene Pfanne legen, die Hälfte der Eiermasse daraufgießen und sofort zur Hälfte zusammenklappen.',
    'Bei mittlerer Hitze mit Deckel von jeder Seite 3 bis 4 Minuten braten, bis das Ei vollständig gestockt ist. Mit der zweiten Tortilla wiederholen.',
    'Kinderportion abnehmen, in schmale Streifen schneiden und mit Gurkenstiften anbieten. Erwachsene salzen und mit Chili essen.'
  ],
  kidName:'Ei-Fladen-Streifen',
  kid:'Fladen erst servieren, wenn das Ei innen vollständig gestockt ist, und in schmale Streifen schneiden. Ohne Salz und Chili.',
  leftover:'Mutabbaq-Snack · 5 Min. – Reste in der Pfanne kurz aufbacken und mit Tomaten essen.',
  tipp:'Der originale Teig wird hauchdünn ausgezogen, mit Vollkorn-Tortillas wird daraus ein 20-Minuten-Abendessen.'
},
{
  id:'ye-adas', name:'Adas · Linseneintopf mit Hawaij, Spinat und Fladenbrot', cuisine:'Jemen', flag:'🇾🇪',
  protein:'huelsen', base:null, time:{a:10,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten','Babyspinat'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:65,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Hawaij (jemenitische Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotten und Knoblauch fein würfeln und im Öl 4 Minuten anschwitzen, Hawaij kurz mitrösten.',
    'Linsen abspülen, mit gehackten Tomaten und 400 ml Wasser zugeben und zugedeckt 25 bis 30 Minuten weich köcheln.',
    'Spinat unterheben und zusammenfallen lassen, der Eintopf soll dick und löffelbar sein.',
    'Kinderportion abnehmen und die Linsen grob zerdrücken. Erwachsene salzen, mit Chili würzen und mit Fladenbrot essen.'
  ],
  kidName:'Linsenbrei mit Brot',
  kid:'Linsen gut weich kochen und grob zerdrücken, Spinat fein hacken. Ohne Salz und Chili, mit weichen Brotstücken.',
  leftover:'Linsen-Reis-Teller · 8 Min. – Reste vollständig erhitzen und über Reis geben.',
  tipp:'Braune Linsen behalten ihre Form, wer es cremiger mag, nimmt rote Linsen und kürzt die Garzeit auf 15 Minuten.'
},
{
  id:'ye-bajiya', name:'Bajiya · Kichererbsen-Taler aus dem Ofen mit Tomatensalat und Fladenbrot', cuisine:'Jemen', flag:'🇾🇪',
  protein:'huelsen', base:null, time:{a:15,c:20}, devices:[['ofen','airfryer']], method:'Ofen oder Airfryer',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Tomaten','Gurke','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kichererbsenmehl',q:20,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kichererbsen gut abtropfen lassen und mit Zwiebel, der Hälfte des Korianders, Kreuzkümmel und Kurkuma grob pürieren.',
    'Kichererbsenmehl und die Hälfte des Öls unterkneten, kleine flache Taler formen, auf ein Blech mit Backpapier setzen und mit dem restlichen Öl bestreichen.',
    'Taler 20 Minuten backen und nach 10 Minuten wenden, im Airfryer 12 Minuten bei 190 °C. Tomaten und Gurke würfeln und mit dem restlichen Koriander mischen.',
    'Kinderportion abnehmen, Taler zerkleinern und mit Tomatenwürfeln anbieten. Erwachsene salzen und mit Salat und Chili ins Fladenbrot füllen.'
  ],
  kidName:'Weiche Kichererbsen-Taler',
  kid:'Taler in kleine Stücke brechen oder zerdrücken, Tomaten ohne Haut fein würfeln. Ohne Salz und Chili, Brot in weichen Streifen.',
  leftover:'Taler-Bowl · 8 Min. – Taler im Ofen aufbacken und mit Reis und Salat als Bowl essen.',
  tipp:'Bajiya stammt aus der indisch geprägten Küche Adens, gebacken statt frittiert bleibt sie leicht.'
},
{
  id:'ye-shafoot', name:'Shafoot · Fladenbrot in Kräuterjoghurt mit Gurke und Tomaten', cuisine:'Jemen', flag:'🇾🇪',
  protein:'milch', base:null, time:{a:12,c:3}, devices:[['pfanne']], method:'Pfanne, nur zum Aufbacken',
  allergens:['milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Gurke','Tomaten','Frühlingszwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Naturjoghurt',q:200,u:'g',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Minze, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fladenbrot in der trockenen Pfanne 3 Minuten aufbacken und in mundgerechte Stücke reißen.',
    'Joghurt mit 4 EL Wasser glatt rühren und gehackte Minze und Koriander untermischen.',
    'Gurke, Tomaten und Frühlingszwiebel fein würfeln. Brot in Schalen legen, mit dem Kräuterjoghurt übergießen, 5 Minuten ziehen lassen und das Gemüse darauf verteilen.',
    'Kinderportion abnehmen. Für die Erwachsenen gepressten Knoblauch, Salz, Kreuzkümmel und Öl darübergeben und nach Belieben mit Chili würzen.'
  ],
  kidName:'Joghurtbrot mit Gurke',
  kid:'Brot vollständig im Joghurt einweichen lassen, Gurke in Stifte schneiden und Tomaten ohne Haut fein würfeln. Ohne Knoblauch und Salz.',
  leftover:'Kräuterjoghurt-Dip · 5 Min. – Restlichen Kräuterjoghurt als Dip zu Ofenkartoffeln oder Gemüse servieren.',
  tipp:'Im Jemen wird Shafoot im Ramadan mit dünnem Lahoh-Fladen und Buttermilch gegessen, Naturjoghurt mit Wasser kommt dem nahe.'
},
{
  id:'ye-fasolia', name:'Fasolia · weiße Bohnen in Tomaten-Kreuzkümmel-Soße mit Ei und Fladenbrot', cuisine:'Jemen', flag:'🇾🇪',
  protein:'huelsen', base:null, time:{a:8,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei','gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:140,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ei in 10 Minuten hart kochen, abschrecken und vierteln.',
    'Zwiebel würfeln und im Öl 4 Minuten dünsten, Kreuzkümmel und Kurkuma kurz mitrösten. Tomaten fein würfeln und 3 Minuten einkochen.',
    'Bohnen abspülen, mit 50 ml Wasser zugeben und 5 Minuten köcheln, dabei ein Viertel der Bohnen mit dem Löffel andrücken.',
    'Kinderportion abnehmen, Bohnen zerdrücken und das Ei klein hacken. Erwachsene salzen, mit Koriander und Chili bestreuen und mit Fladenbrot essen.'
  ],
  kidName:'Bohnenmus mit Ei',
  kid:'Bohnen gründlich zerdrücken, Ei hart gekocht und klein gehackt dazugeben. Ohne Salz und Chili, mit weichem Brot.',
  leftover:'Bohnen-Toast · 5 Min. – Reste vollständig erhitzen und auf geröstetem Vollkornbrot essen.',
  tipp:'Im Jemen ein typisches Frühstück aus der Garküche, als Abendessen passt ein großer Gurken-Tomaten-Salat dazu.'
},
{
  id:'ye-fatoot', name:'Fatoot · geröstetes Fladenbrot mit Rührei, Tomaten und Spinat', cuisine:'Jemen', flag:'🇾🇪',
  protein:'ei', base:null, time:{a:6,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Babyspinat','Gurke'], season:[],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fladenbrot in kleine Stücke reißen, in der trockenen Pfanne 3 Minuten anrösten und herausnehmen.',
    'Zwiebel und Tomate würfeln und im Öl 4 Minuten dünsten, Spinat zugeben und zusammenfallen lassen.',
    'Eier mit Kreuzkümmel verquirlen, mit den Brotstücken in die Pfanne geben und unter Rühren 3 Minuten garen, bis das Ei vollständig gestockt ist.',
    'Kinderportion abnehmen und mit Gurkenstiften anbieten. Erwachsene salzen und mit Chili würzen.'
  ],
  kidName:'Weiches Brot-Rührei',
  kid:'Ei vollständig stocken lassen, die Brotstücke dabei weich halten und Spinat fein hacken. Gurke in Stifte, ohne Salz.',
  leftover:'Fatoot-Wrap · 5 Min. – Reste vollständig erhitzen und in ein frisches Fladenbrot rollen.',
  tipp:'Fatoot ist Resteküche für altbackenes Brot, je trockener das Brot, desto knuspriger wird es.'
}
);
