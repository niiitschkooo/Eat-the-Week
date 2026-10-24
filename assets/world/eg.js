/* Grün geplant · Ägypten · Top 15 */
RECIPES.push(
{
  id:'eg-ful', name:'Ful Medames · Saubohnen mit Tomaten, Kreuzkümmel, Zitrone und Ei', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'huelsen', base:null, time:{a:8,c:10}, devices:[['topf']], method:'Zwei kleine Töpfe',
  allergens:['gluten','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Gurke','Zitrone','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Ful-Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ei in 10 Minuten hart kochen. Bohnen abspülen, mit 80 ml Wasser 8 Minuten sanft köcheln und mit dem Kartoffelstampfer grob zerdrücken.',
    'Kreuzkümmel und die Hälfte des Öls unterrühren. Tomaten und Gurke fein würfeln, Petersilie hacken.',
    'Kinderportion abnehmen und mit gehacktem Ei anbieten. Erwachsene mit gepresstem Knoblauch, Zitronensaft, Salz, restlichem Öl und Chili würzen und mit Gemüse, Ei und Fladenbrot essen.'
  ],
  kidName:'Weiches Bohnenmus mit Ei',
  kid:'Bohnen fein zerdrücken, Ei hart gekocht und klein gehackt dazugeben. Ohne Knoblauch, Salz und Chili, mit weichem Brot.',
  leftover:'Ful-Wrap · 5 Min. – Reste vollständig erhitzen und mit Tomaten und Gurke ins Fladenbrot rollen.',
  tipp:'Ful-Bohnen in der Dose gibt es im arabischen oder türkischen Laden, ersatzweise gehen dicke Bohnen aus dem Tiefkühler.'
},
{
  id:'eg-taameya', name:'Taameya · grüne Saubohnen-Taler aus dem Ofen mit Tahina-Salat und Fladenbrot', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'huelsen', base:null, time:{a:15,c:25}, devices:[['topf'],['ofen','airfryer']], method:'Topf + Ofen oder Airfryer',
  allergens:['gluten','sesam'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kräuter','Zwiebel','Tomaten','Gurke'], season:[7,8,9],
  ing:[
    {n:'Dicke Bohnen, TK',q:150,u:'g',c:'tk'},
    {n:'Kichererbsenmehl',q:25,u:'g',c:'vorrat'},
    {n:'Petersilie',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tahini (Sesammus)',q:1,u:'EL',c:'vorrat'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Dicke Bohnen 5 Minuten in Wasser garen, abschrecken und aus den Häuten drücken.',
    'Bohnen mit Petersilie, Zwiebel, Kreuzkümmel und Kichererbsenmehl grob pürieren, kleine flache Taler formen, auf ein Blech mit Backpapier setzen und mit dem Öl bestreichen.',
    'Taler 18 bis 20 Minuten backen und nach der Hälfte wenden, im Airfryer 12 Minuten bei 190 °C.',
    'Tahini mit 2 EL Wasser glatt rühren, Tomaten und Gurke würfeln.',
    'Kinderportion abnehmen, Taler zerkleinern und mit Gurkenstiften anbieten. Erwachsene salzen und die Taler mit Salat und Tahina ins Fladenbrot füllen.'
  ],
  kidName:'Grüne Bohnen-Taler',
  kid:'Taler zerdrücken oder in kleine Stücke brechen und mit verdünnter Tahina als Dip anbieten. Gurke in Stifte, ohne Salz.',
  leftover:'Taameya-Schale · 8 Min. – Taler im Ofen aufbacken und mit Salat und Reis als Schale essen.',
  tipp:'Anders als Falafel aus der Levante wird ägyptische Taameya aus Saubohnen gemacht und ist innen leuchtend grün.'
},
{
  id:'eg-bessara', name:'Bessara · grünes Saubohnen-Kräuter-Püree mit Röstzwiebeln und Fladenbrot', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'huelsen', base:null, time:{a:8,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kräuter','Babyspinat','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Dicke Bohnen, TK',q:180,u:'g',c:'tk'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Dicke Bohnen mit Knoblauch in 300 ml Wasser 12 Minuten sehr weich kochen, in den letzten 2 Minuten den Spinat zugeben.',
    'Zwiebel parallel in feine Ringe schneiden und in der Hälfte des Öls 10 Minuten langsam goldbraun rösten.',
    'Bohnen mit etwas Kochwasser, Dill, Koriander, Kreuzkümmel und dem restlichen Öl fein pürieren, bis ein cremiges grünes Püree entsteht.',
    'Kinderportion abnehmen und mit weichen Brotstücken anbieten. Erwachsene salzen, mit Röstzwiebeln, Tomatenwürfeln und Chili bestreuen und mit Fladenbrot essen.'
  ],
  kidName:'Grünes Bohnenpüree',
  kid:'Püree glatt und lauwarm mit weichem Brot zum Eintunken anbieten, Röstzwiebeln weglassen. Ohne Salz und Chili.',
  leftover:'Bessara-Brot · 5 Min. – Kaltes Püree als Aufstrich auf Vollkornbrot mit Gurke essen.',
  tipp:'Bessara wird in Ägypten warm als Hauptgericht und kalt als Aufstrich gegessen.'
},
{
  id:'eg-eggah', name:'Eggah · Kräuter-Omelett aus dem Ofen mit Zucchini und Lauch', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'ei', base:null, time:{a:8,c:15}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Lauch','Kräuter','Tomaten'], season:[6,7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen und eine kleine Form mit dem Öl ausstreichen.',
    'Zucchini grob raspeln und gut ausdrücken, Lauch in feine Ringe schneiden, Kräuter hacken und alles mit den Eiern und Kreuzkümmel verquirlen.',
    'Masse in die Form gießen und 15 Minuten backen, bis die Eggah in der Mitte fest ist und sich ein Messer sauber herausziehen lässt.',
    'Kinderportion abnehmen und in weiche Streifen schneiden. Erwachsene salzen und mit Tomatenwürfeln und Fladenbrot essen.'
  ],
  kidName:'Kräuter-Omelett-Streifen',
  kid:'Omelett vollständig durchbacken und in Streifen zum Selberessen schneiden, Tomaten ohne Haut fein würfeln. Ohne Salz.',
  leftover:'Eggah-Sandwich · 5 Min. – Kalte Omelett-Stücke mit Tomate ins Fladenbrot legen.',
  tipp:'Eggah ist dicker als ein Omelett und wird in Ägypten auch kalt als Proviant mitgenommen.'
},
{
  id:'eg-mahshi', name:'Mahshi · gefüllte Zucchini und Paprika mit Kräuterreis und Joghurt-Gurke', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'milch', base:'reis', time:{a:25,c:40}, devices:[['topf']], method:'Großer Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Zucchini','Rote Paprika','Tomaten','Gurke','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rundkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Zucchini',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:200,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Griechischer Joghurt',q:150,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen und mit fein gewürfelter Zwiebel, gehackter Petersilie, Dill, dem Öl und 100 ml passierten Tomaten mischen.',
    'Zucchini halbieren und mit einem Teelöffel aushöhlen, Paprika oben aufschneiden und entkernen. Gemüse nur zu zwei Dritteln füllen, weil der Reis aufquillt.',
    'Gefülltes Gemüse dicht in einen Topf setzen, restliche passierte Tomaten mit 200 ml Wasser darübergießen und zugedeckt 40 Minuten leise köcheln, bis der Reis weich ist.',
    'Gurke fein würfeln und mit dem Joghurt verrühren.',
    'Kinderportion abnehmen, Füllung aus der Hülle lösen und mit dem weichen Gemüse und etwas Joghurt mischen. Erwachsene mit Salz, Pfeffer und Chili nachwürzen.'
  ],
  kidName:'Kräuterreis mit Gemüse und Joghurt',
  kid:'Füllung aus dem Gemüse lösen, die Hülle ohne Haut fein schneiden und mit Joghurt cremig mischen. Ohne Salz.',
  leftover:'Mahshi-Reispfanne · 10 Min. – Reste klein schneiden und mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'In Ägypten werden auch Weinblätter, Kohl und Auberginen gefüllt, die Kräuterreis-Füllung bleibt dieselbe.'
},
{
  id:'eg-mesaqaa', name:'Mesaqaa · Ofen-Auberginen mit Paprika, Kichererbsen und Tomatensoße', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'huelsen', base:null, time:{a:15,c:35}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Aubergine','Rote Paprika','Tomaten','Zwiebel'], season:[7,8],
  ing:[
    {n:'Aubergine',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, gehackt (Dose)',q:200,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Aubergine in 1 cm dicke Scheiben schneiden, mit der Hälfte des Öls bestreichen und auf dem Blech 15 Minuten backen, statt sie zu frittieren.',
    'Zwiebel, Paprika und Knoblauch würfeln und im restlichen Öl im Topf 5 Minuten dünsten, gehackte Tomaten, Kichererbsen und Kreuzkümmel zugeben und 5 Minuten köcheln.',
    'Auberginen und Tomatensoße in einer Form schichten und bei 190 °C 20 Minuten backen, bis die Auberginen ganz weich sind.',
    'Kinderportion abnehmen, Aubergine ohne Schale und Kichererbsen zerdrücken. Erwachsene mit Salz und Chili würzen und mit Fladenbrot essen.'
  ],
  kidName:'Weiche Auberginen-Tomaten-Soße',
  kid:'Aubergine ohne Schale mit der Soße und den Kichererbsen zu einem weichen Mus zerdrücken, mit Brotstreifen. Ohne Salz und Chili.',
  leftover:'Mesaqaa-Nudeln · 12 Min. – Reste vollständig erhitzen und als Soße unter Vollkornnudeln mischen.',
  tipp:'Ägyptische Mesaqaa wird oft ohne Fleisch gekocht und lauwarm gegessen, die Kichererbsen machen sie zur vollständigen Mahlzeit.'
},
{
  id:'eg-ads', name:'Shorbet Ads · Linsensuppe mit Kartoffel, Kreuzkümmel und gerösteten Brotwürfeln', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'huelsen', base:null, time:{a:8,c:16}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Karotten','Kartoffeln','Tomaten','Zwiebel','Zitrone'], season:[],
  ing:[
    {n:'Gelbe Linsen oder rote Linsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotten, Kartoffel und Tomate klein würfeln und mit den abgespülten Linsen und 600 ml Wasser 15 Minuten köcheln, bis alles zerfällt.',
    'Suppe mit Kreuzkümmel fein pürieren und bei Bedarf mit Wasser verdünnen.',
    'Fladenbrot parallel in Würfel schneiden und im Öl in der Pfanne 4 Minuten knusprig rösten.',
    'Kinderportion ungesalzen abnehmen und lauwarm werden lassen. Erwachsene mit Salz, reichlich Zitronensaft und Chili würzen und mit Brotwürfeln bestreuen.'
  ],
  kidName:'Linsen-Kartoffel-Suppe',
  kid:'Suppe ist glatt püriert, lauwarm mit weichem statt geröstetem Brot zum Eintunken anbieten. Ohne Salz und Chili.',
  leftover:'Linsen-Nudeltopf · 10 Min. – Suppenreste mit kleinen Vollkornnudeln aufkochen, bis sie weich sind.',
  tipp:'In Ägypten ist Shorbet Ads die Wintersuppe schlechthin, Zitrone und Kreuzkümmel gehören immer dazu.'
},
{
  id:'eg-molokhia', name:'Molokhia · grüner Blätter-Eintopf mit Knoblauch, Hähnchen und Reis', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Molokhia','Zwiebel','Zitrone'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Molokhia, TK',q:150,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:2,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriander, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen.',
    'Hähnchen mit der halbierten Zwiebel in der Brühe 15 Minuten leise köcheln, herausnehmen und in Stücke zupfen.',
    'Molokhia gefroren in die heiße Brühe geben und unter Rühren 5 Minuten erhitzen, dabei nicht sprudelnd kochen lassen.',
    'Knoblauch fein hacken und mit dem gemahlenen Koriander im Öl in der Pfanne 1 Minute goldgelb anrösten, dann unter die Molokhia rühren.',
    'Kinderportion abnehmen und das Hähnchen fein zerzupfen. Erwachsene mit Salz und Zitrone würzen und mit Reis und Hähnchen essen.'
  ],
  kidName:'Grüne Soße mit Hähnchenreis',
  kid:'Hähnchen fein zerzupfen und mit Reis und der weichen grünen Soße mischen. Ohne Salz, die Konsistenz ist ideal zum Löffeln.',
  leftover:'Molokhia-Reistopf · 8 Min. – Reste mit etwas Brühe vollständig erhitzen und mit Zitrone essen.',
  tipp:'TK-Molokhia gibt es im arabischen Laden, ersatzweise ergibt fein gehackter TK-Blattspinat eine ähnliche grüne Soße.'
},
{
  id:'eg-fattah', name:'Fattah · Reis und geröstetes Fladenbrot mit Rindfleisch und Knoblauch-Tomatensoße', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'fleisch', base:'reis', time:{a:15,c:50}, devices:[['topf'],['ofen','pfanne']], method:'Topf + Ofen oder Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Tomaten','Zwiebel','Gurke'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Reis',q:50,u:'g',c:'vorrat'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:2,u:'Zehe',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:1,u:'Stk.',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch mit der halbierten Zwiebel, dem Lorbeerblatt und 600 ml Wasser aufkochen, Schaum abschöpfen und zugedeckt 45 Minuten weich köcheln.',
    'Reis in 110 ml der Fleischbrühe zugedeckt 15 Minuten garen. Fladenbrot in Stücke schneiden und im Ofen bei 200 °C 6 Minuten oder in der Pfanne ohne Fett rösten.',
    'Knoblauch fein hacken, im Öl 1 Minute anschwitzen, passierte Tomaten und Essig zugeben und 5 Minuten köcheln.',
    'Brot in Schalen legen, mit etwas Brühe beträufeln und Reis, Fleisch und Tomatensoße darauf schichten.',
    'Kinderportion abnehmen und das Fleisch fein zerzupfen. Erwachsene salzen und mit Gurkenscheiben essen.'
  ],
  kidName:'Weiche Brot-Reis-Schichten',
  kid:'Brot gut in Brühe einweichen, Fleisch sehr fein zerzupfen und mit Reis und Tomatensoße mischen. Ohne Salz.',
  leftover:'Rindfleisch-Reis-Pfanne · 10 Min. – Fleisch und Reis mit Erbsen in der Pfanne vollständig durcherhitzen.',
  tipp:'Fattah wird in Ägypten zum Opferfest gekocht, die Fleischbrühe lässt sich gut am Vortag vorbereiten.'
},
{
  id:'eg-hawawshi', name:'Hawawshi · Fladenbrot mit gewürzter Hack-Paprika-Füllung aus dem Ofen', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'fleisch', base:null, time:{a:8,c:15}, devices:[['ofen','airfryer']], method:'Ofen oder Airfryer',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Kräuter','Tomaten','Gurke'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:0.5,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Zwiebel und Paprika sehr fein würfeln, Petersilie hacken und alles mit Hackfleisch, Kreuzkümmel und Paprikapulver verkneten.',
    'Fladenbrot seitlich aufschneiden, die Füllung dünn und gleichmäßig hineinstreichen und das Brot außen mit dem Öl bestreichen.',
    'Auf dem Rost 15 Minuten backen und nach der Hälfte wenden, bis die Füllung vollständig durchgegart ist, im Airfryer 12 Minuten bei 190 °C. Tomaten und Gurke in Stücke schneiden.',
    'Kinderportion abnehmen, in schmale Streifen schneiden und prüfen, dass die Füllung durch ist. Erwachsene mit Salz und Chili würzen und mit Gemüse essen.'
  ],
  kidName:'Hawawshi-Streifen',
  kid:'In schmale Streifen schneiden, die Füllung muss innen durchgegart und ohne Rosa sein. Harte Ränder abschneiden, ohne Salz, Gurke in Stifte.',
  leftover:'Hawawshi-Toast · 6 Min. – Reste in der Pfanne von beiden Seiten aufbacken, bis sie innen heiß sind.',
  tipp:'Die Füllung dünn verstreichen, dann gart sie in der Zeit sicher durch und das Brot wird knusprig.'
},
{
  id:'eg-macarona', name:'Macarona Béchamel · Vollkornnudel-Auflauf mit Hackfleisch und leichter Béchamel', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'fleisch', base:'nudeln', time:{a:20,c:35}, devices:[['topf'],['pfanne'],['ofen']], method:'Topf, Pfanne + Backofen',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Zwiebel','Karotten'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Mehl',q:10,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Nudeln 2 Minuten kürzer als angegeben kochen und abgießen.',
    'Zwiebel fein würfeln, Karotte raspeln und mit dem Hackfleisch in der Hälfte des Öls krümelig braten, passierte Tomaten zugeben und 8 Minuten einkochen.',
    'Für die Béchamel das restliche Öl im Nudeltopf erhitzen, Mehl 1 Minute anschwitzen, nach und nach die Milch einrühren und unter Rühren 4 Minuten köcheln, mit Muskat würzen.',
    'Die Hälfte der Nudeln in eine Form geben, Hackfleischsoße darauf verteilen, restliche Nudeln darüber schichten, mit Béchamel übergießen, Käse aufstreuen und 20 Minuten goldbraun backen.',
    'Kinderportion abnehmen und in kleine Stücke schneiden. Erwachsene nach Geschmack salzen und pfeffern.'
  ],
  kidName:'Mini-Nudelauflauf',
  kid:'Auflauf etwas abkühlen lassen und in kleine Stücke schneiden, das Hackfleisch ist durchgegart und weich. Ohne zusätzliches Salz.',
  leftover:'Auflauf-Portion · 15 Min. – Reste abgedeckt bei 180 °C im Ofen vollständig durcherhitzen.',
  tipp:'Béchamel mit Öl statt Butter und Milch statt Sahne spart viel gesättigtes Fett und bleibt trotzdem cremig.'
},
{
  id:'eg-seneya', name:'Seneyet Ferakh bel Batates · Hähnchen-Kartoffel-Blech in Tomatensoße', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:40}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Tomaten','Rote Paprika','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in Spalten, Zwiebel und Paprika in Streifen schneiden.',
    'Passierte Tomaten mit gepresstem Knoblauch, Öl, Kreuzkümmel, Paprikapulver und 100 ml Wasser verrühren.',
    'Hähnchen, Kartoffeln und Gemüse in eine tiefe Ofenform legen, die Tomatensoße darübergießen und 40 Minuten backen, bis die Kartoffeln weich sind und kein rosa Fleischsaft mehr austritt.',
    'Kinderportion abnehmen, Hähnchen fein zerzupfen und Kartoffeln zerdrücken. Erwachsene salzen und mit Chili würzen.'
  ],
  kidName:'Hähnchen-Kartoffel-Mus',
  kid:'Hähnchen fein zerzupfen, Kartoffeln mit der Tomatensoße zerdrücken und Paprika ohne Haut klein schneiden. Ohne Salz und Chili.',
  leftover:'Hähnchen-Kartoffel-Pfanne · 10 Min. – Reste klein schneiden und in der Pfanne vollständig durchbraten.',
  tipp:'Die ersten 25 Minuten mit Alufolie abgedeckt backen, dann bleibt das Hähnchen besonders saftig.'
},
{
  id:'eg-fasolia', name:'Fasolia Khadra · grüne Bohnen in Tomatensoße mit Rindfleisch und Reis', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'fleisch', base:'reis', time:{a:15,c:40}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Grüne Bohnen','Tomaten','Zwiebel','Karotten'], season:[7,8],
  ing:[
    {n:'Rindergulasch, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Grüne Bohnen',q:150,u:'g',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und im Öl 3 Minuten anschwitzen, Rindfleisch zugeben und rundum anbraten, Knoblauch, Tomatenmark und Koriander kurz mitrösten.',
    'Passierte Tomaten und 250 ml Wasser zugeben und zugedeckt 25 Minuten schmoren. Vollkornreis parallel in der doppelten Menge Wasser 30 Minuten garen.',
    'Bohnen in 3 cm lange Stücke und Karotten in Würfel schneiden, zugeben und weitere 15 Minuten köcheln, bis alles weich ist.',
    'Kinderportion abnehmen, Fleisch fein zerzupfen und Bohnen klein schneiden. Erwachsene mit Salz und Chili abschmecken und mit Reis servieren.'
  ],
  kidName:'Bohnen-Fleisch-Reis',
  kid:'Bohnen weich garen und in kleine Stücke schneiden, Fleisch fein zerzupfen und mit der Soße unter den Reis mischen. Ohne Salz.',
  leftover:'Bohnen-Reis-Topf · 10 Min. – Reste mit etwas Wasser vollständig erhitzen und mit Zitrone essen.',
  tipp:'Ägyptische Familien kochen den Eintopf auch ohne Fleisch, dann passen weiße Bohnen aus der Dose als Eiweiß.'
},
{
  id:'eg-sayadeya', name:'Sayadeya · Fisch auf Zwiebel-Kreuzkümmel-Reis nach Art von Alexandria', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'fisch', base:'reis', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Tomaten','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:75,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:170,u:'ml',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in dünne Streifen schneiden und in der Hälfte des Öls 12 Minuten langsam dunkelgoldbraun dünsten, die Hälfte davon herausnehmen.',
    'Kreuzkümmel, Koriander und Tomatenmark zu den Zwiebeln im Topf geben, Reis kurz mitrösten, mit Brühe aufgießen und zugedeckt 15 Minuten garen.',
    'Fisch mit etwas Kreuzkümmel einreiben und im restlichen Öl in der Pfanne pro Seite 3 bis 4 Minuten braten, bis er innen nicht mehr glasig ist.',
    'Kinderportion abnehmen, Fisch entgräten, zerpflücken und unter den Reis mischen. Erwachsene salzen und Reis mit den restlichen Zwiebeln, Petersilie, Fisch und Zitrone anrichten.'
  ],
  kidName:'Zwiebelreis mit Fisch',
  kid:'Fisch gründlich entgräten und zerpflücken und unter den weichen Reis mischen. Zwiebelstreifen fein hacken, ohne Salz.',
  leftover:'Sayadeya-Pfanne · 8 Min. – Reste mit Zucchiniwürfeln in der Pfanne vollständig durcherhitzen.',
  tipp:'Die langsam gerösteten Zwiebeln geben dem Reis seine typische braune Farbe, dafür braucht es mittlere Hitze und etwas Geduld.'
},
{
  id:'eg-singari', name:'Samak Singari · Ofenfisch mit Kartoffeln, Tomaten und Paprika', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'fisch', base:'kartoffeln', time:{a:12,c:30}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Tomaten','Rote Paprika','Zwiebel','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in dünne Scheiben schneiden, mit der Hälfte des Öls mischen und in einer Form 15 Minuten vorbacken.',
    'Knoblauch pressen und mit Kreuzkümmel, Koriander, Zitronensaft und dem restlichen Öl verrühren, den Fisch damit einreiben.',
    'Tomaten, Paprika und Zwiebel in Scheiben auf die Kartoffeln legen, den Fisch darauf setzen und weitere 15 Minuten backen, bis er sich leicht zerpflücken lässt.',
    'Kinderportion abnehmen, Fisch entgräten und zerpflücken, Kartoffeln zerdrücken. Erwachsene mit Salz und Chili würzen.'
  ],
  kidName:'Fisch-Kartoffel-Teller',
  kid:'Fisch sorgfältig entgräten und zerpflücken, Kartoffeln und Tomaten ohne Haut weich zerdrücken. Ohne Salz und Chili.',
  leftover:'Fisch-Kartoffel-Salat · 8 Min. – Kalte Reste mit Joghurt, Gurke und Petersilie mischen.',
  tipp:'Singari stammt aus Alexandria, dort gart traditionell ein ganzer Fisch in der Tonform.'
}
);
