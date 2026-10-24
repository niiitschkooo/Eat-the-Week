/* Grün geplant · Griechenland · Top 15 */
RECIPES.push(
{
  id:'gr-moussaka', name:'Moussaka · Auberginen-Hack-Auflauf mit Kartoffeln und Joghurthaube', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'fleisch', base:'kartoffeln', time:{a:25,c:45}, devices:[['ofen'],['pfanne']], method:'Pfanne + Backofen',
  allergens:['milch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Aubergine','Kartoffeln','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Aubergine',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Griechischer Joghurt',q:80,u:'g',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Aubergine und Kartoffeln in 0,5 cm dicke Scheiben schneiden, mit der Hälfte des Öls bestreichen und auf dem Blech 20 Minuten vorbacken.',
    'Inzwischen Zwiebel und Knoblauch fein würfeln und mit dem Hack im restlichen Öl krümelig und vollständig durchbraten. Tomaten und Zimt zugeben und 10 Minuten einköcheln.',
    'Kartoffeln, Hacksoße und Auberginen in eine Auflaufform schichten. Joghurt mit dem verquirlten Ei glatt rühren und darüberstreichen.',
    'Bei 180 °C 25 Minuten backen, bis die Haube fest und goldbraun ist, dann 10 Minuten ruhen lassen.',
    'Kinderportion ungesalzen abnehmen und klein schneiden. Erwachsene am Tisch mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Moussaka',
  kid:'Ein Stück aus der Mitte nehmen, Auberginenschale bei Bedarf entfernen und alles in kleine weiche Würfel schneiden. Ohne Salz servieren, die Ei-Joghurt-Haube ist vollständig durchgebacken.',
  leftover:'Moussaka-Nudeln · 10 Min. – Reste grob zerteilen und mit gekochten Nudeln und etwas Wasser vollständig erhitzen.',
  tipp:'Vorbacken statt Frittieren spart viel Öl, die Auberginen werden trotzdem weich und cremig.'
},
{
  id:'gr-gemista', name:'Gemista · gefüllte Paprika und Tomaten mit Kräuterreis und Kichererbsen', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'huelsen', base:'reis', time:{a:20,c:50}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Tomaten','Zucchini','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis 15 Minuten vorkochen und abgießen. Ofen auf 190 °C vorheizen.',
    'Von Paprika und Tomaten einen Deckel abschneiden, Kerne entfernen und das Tomateninnere hacken. Zwiebel und Zucchini fein würfeln.',
    'Reis mit Kichererbsen, Tomateninnerem, Zucchini, Zwiebel, gehackter Petersilie, Oregano und der Hälfte des Öls mischen und in das Gemüse füllen.',
    'Gemüse in eine Form setzen, Gemüsedeckel auflegen, passierte Tomaten mit 100 ml Wasser angießen, mit restlichem Öl beträufeln und 35 Minuten backen, bis die Paprika weich ist.',
    'Kinderportion ungesalzen abnehmen, Paprika in Stücke teilen und die Kichererbsen in der Füllung zerdrücken. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Weiche Gemista-Schiffchen',
  kid:'Paprika gut weich backen, aufschneiden und die Füllung mit der Gabel zerdrücken, sodass keine ganzen Kichererbsen bleiben. Ohne Salz servieren.',
  leftover:'Gemista-Reispfanne · 10 Min. – Reste grob zerteilen und mit etwas Wasser in der Pfanne vollständig erhitzen.',
  tipp:'In Griechenland kommen oft Kartoffelspalten mit in die Form, sie garen im Tomatensaft mit.'
},
{
  id:'gr-souvlaki', name:'Souvlaki · Hähnchenspieße mit Tzatziki und Vollkorn-Fladenbrot', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'gefluegel', base:null, time:{a:14,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Gurke','Tomaten','Rote Zwiebel','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Griechischer Joghurt',q:80,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in 2 cm große Würfel schneiden, mit der Hälfte des Öls, Oregano und etwas Zitronensaft mischen und auf Spieße stecken.',
    'Gurke grob raspeln, gut ausdrücken und mit dem Joghurt verrühren. Tomaten und Zwiebel in Scheiben schneiden.',
    'Spieße im restlichen Öl bei mittlerer Hitze rundum 8 bis 10 Minuten braten, bis das Fleisch innen nicht mehr rosa ist. Fladenbrot danach 1 Minute je Seite in der Pfanne wärmen.',
    'Kinderportion mit etwas Gurkenjoghurt ungesalzen abnehmen. Erwachsene rühren fein geriebenen Knoblauch in das Tzatziki und würzen mit Salz, Pfeffer und Zitrone.'
  ],
  kidName:'Hähnchen-Häppchen mit Gurken-Dip',
  kid:'Fleisch vom Spieß nehmen, in kleine Stücke schneiden und mit knoblauchfreiem Gurkenjoghurt anbieten. Brot in Streifen, Tomate klein geschnitten, rohe Zwiebel weglassen.',
  leftover:'Souvlaki-Wrap · 5 Min. – Fleischreste in der Pfanne vollständig erhitzen und mit Gemüse und Tzatziki ins Fladenbrot rollen.',
  tipp:'Ohne Spieße geht es noch schneller: die Hähnchenwürfel einfach lose in der Pfanne braten.'
},
{
  id:'gr-spanakorizo', name:'Spanakorizo · Spinatreis mit Dill, Zitrone und Feta', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'milch', base:'reis', time:{a:6,c:18}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Spinat','Frühlingszwiebel','Zitrone','Kräuter'], season:[3,4,5,6],
  ing:[
    {n:'Rundkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Babyspinat',q:150,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Feta',q:50,u:'g',c:'kuehl'},
    {n:'Griechischer Joghurt',q:80,u:'g',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Frühlingszwiebeln in Ringe schneiden und in Öl 2 Minuten andünsten. Reis zugeben und kurz mitrühren.',
    'Brühe angießen, aufkochen und zugedeckt bei kleiner Hitze 12 Minuten garen.',
    'Spinat grob hacken, mit dem Dill unterheben und weitere 4 Minuten ziehen lassen, bis der Reis weich und cremig ist.',
    'Kinderportion ohne Feta abnehmen und mit einem Klecks Joghurt mischen. Erwachsene mit Zitronensaft, Pfeffer und zerbröseltem Feta würzen, Joghurt dazu.'
  ],
  kidName:'Cremiger Spinatreis',
  kid:'Spinat fein hacken, damit keine langen Blätter bleiben, und den Reis mit Joghurt cremig rühren. Feta ist sehr salzig und bleibt beim Kind weg.',
  leftover:'Spinatreis-Taler · 15 Min. – Reste mit einem Ei verkneten, zu Talern formen und in der Pfanne beidseitig durchbraten.',
  tipp:'TK-Blattspinat funktioniert genauso, dann gefroren zum Reis geben und 2 Minuten länger garen.'
},
{
  id:'gr-gigantes', name:'Gigantes plaki · Ofenbohnen in Tomatensoße mit Vollkornbrot', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'huelsen', base:null, time:{a:12,c:35}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Karotten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 190 °C vorheizen. Zwiebel und Knoblauch fein würfeln, Karotten in dünne Scheiben schneiden.',
    'Alles mit Bohnen, gehackten Tomaten, Oregano, Öl und 100 ml Wasser in einer Auflaufform mischen.',
    'Abgedeckt 20 Minuten backen, dann offen weitere 15 Minuten, bis die Soße dick ist und die Karotten weich sind. Gehackte Petersilie unterheben.',
    'Kinderportion ungesalzen abnehmen und die Bohnen leicht zerdrücken. Erwachsene mit Salz und Pfeffer würzen und mit Brot servieren.'
  ],
  kidName:'Weiche Tomatenbohnen',
  kid:'Bohnen mit der Gabel grob zerdrücken und die Karotten sehr weich backen. Ohne Salz, dazu weiches Brot in Streifen zum Dippen.',
  leftover:'Bohnen-Toast · 8 Min. – Reste vollständig erhitzen und auf geröstetes Vollkornbrot geben.',
  tipp:'Mit getrockneten Riesenbohnen wird es noch typischer, diese über Nacht einweichen und 60 Minuten vorkochen.'
},
{
  id:'gr-fasolakia', name:'Fasolakia · grüne Bohnen in Tomatensoße mit Kartoffeln und Feta', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'milch', base:'kartoffeln', time:{a:15,c:28}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Grüne Bohnen','Kartoffeln','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Grüne Bohnen',q:180,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Feta',q:70,u:'g',c:'kuehl'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch würfeln und in Öl 3 Minuten andünsten. Bohnen putzen und halbieren, Kartoffeln in große Würfel schneiden.',
    'Bohnen, Kartoffeln, Tomaten und 150 ml Wasser zugeben, aufkochen und zugedeckt 25 Minuten leise schmoren, bis alles sehr weich ist.',
    'Gehackte Petersilie unterheben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen und den Feta darüberbröseln.'
  ],
  kidName:'Bohnen-Kartoffel-Topf',
  kid:'Bohnen sehr weich schmoren und in kurze Stücke schneiden, Kartoffeln mit der Gabel andrücken. Feta nur in kleiner Menge und vorher kurz abgespült.',
  leftover:'Bohnen-Auflauf · 20 Min. – Reste in eine Form geben, mit etwas Feta bestreuen und bei 200 °C vollständig durchbacken.',
  tipp:'TK-Bohnen sparen das Putzen und schmecken in diesem Schmorgericht genauso gut.'
},
{
  id:'gr-psari-plaki', name:'Psari plaki · Ofenfisch auf Tomaten, Zwiebeln und Kartoffeln', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:40}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Kartoffeln','Zitrone','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in dünne Scheiben schneiden, mit der Hälfte des Öls mischen und in der Form 20 Minuten vorbacken.',
    'Zwiebel in Ringe und Tomaten in Scheiben schneiden, Knoblauch und Petersilie hacken und alles mit Oregano und restlichem Öl mischen.',
    'Fisch auf die Kartoffeln legen, die Tomatenmischung darauf verteilen und 18 bis 20 Minuten backen, bis sich der Fisch leicht zerpflücken lässt.',
    'Kinderportion ungesalzen abnehmen, den Fisch auf Gräten prüfen und zerpflücken. Erwachsene mit Salz, Pfeffer und Zitronensaft würzen.'
  ],
  kidName:'Tomatenfisch mit Kartoffeln',
  kid:'Fisch sorgfältig auf Gräten prüfen, zerpflücken und mit den weichen Kartoffeln und Tomaten mischen. Ohne Salz und Zitrone servieren.',
  leftover:'Fisch-Kartoffel-Pfanne · 10 Min. – Reste grob zerteilen und in der Pfanne vollständig durcherhitzen.',
  tipp:'Im Winter statt frischer Tomaten 200 g gehackte Tomaten aus der Dose verwenden.'
},
{
  id:'gr-bakaliaros', name:'Bakaliaros skordalia · Ofen-Kabeljau mit Kartoffel-Knoblauch-Püree und Roter Bete', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:22}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Rote Bete','Zitrone'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Rote Bete, vorgegart',q:120,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in 18 Minuten weich kochen. Ofen auf 200 °C vorheizen.',
    'Fisch trocken tupfen, mit wenig Öl und Paprikapulver einreiben und auf einem Blech 12 bis 15 Minuten backen, bis er sich leicht zerpflücken lässt.',
    'Kartoffeln abgießen, dabei 100 ml Kochwasser auffangen, und mit restlichem Öl und so viel Kochwasser stampfen, bis ein cremiges Püree entsteht. Rote Bete würfeln.',
    'Kinderportion Püree vor dem Knoblauch abnehmen und ungesalzen mit zerpflücktem Fisch servieren. Erwachsene rühren fein geriebenen Knoblauch und Zitronensaft ins Püree und salzen nach Geschmack.'
  ],
  kidName:'Fisch mit Kartoffelpüree',
  kid:'Püree vor dem Knoblauch abnehmen, Fisch sorgfältig entgräten und zerpflücken. Rote Bete in kleinen weichen Würfeln dazu, sie färbt kräftig.',
  leftover:'Fisch-Kartoffel-Taler · 15 Min. – Püree- und Fischreste vermengen, zu Talern formen und in der Pfanne beidseitig durchbraten.',
  tipp:'Statt frittiert im Teigmantel wird der Fisch hier im Ofen gebacken und bleibt saftig.'
},
{
  id:'gr-giouvetsi', name:'Giouvetsi · Rindfleisch-Schmortopf mit Kritharaki aus dem Ofen', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'fleisch', base:'nudeln', time:{a:20,c:75}, devices:[['topf'],['ofen']], method:'Ofenfester Topf',
  allergens:['gluten','milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Kritharaki (Orzo)',q:80,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 170 °C vorheizen. Fleisch in kleine Würfel schneiden und im ofenfesten Topf in Öl rundum anbraten. Zwiebel, Knoblauch und Paprika würfeln und 3 Minuten mitbraten.',
    'Tomaten, Zimt, Lorbeer und 300 ml Wasser zugeben und zugedeckt im Ofen 50 Minuten schmoren, bis das Fleisch zart ist.',
    'Kritharaki und 200 ml heißes Wasser einrühren und offen weitere 20 bis 25 Minuten garen, dabei einmal umrühren, bis die Nudeln weich sind. Lorbeer entfernen.',
    'Kinderportion ungesalzen abnehmen und das Fleisch klein schneiden. Erwachsene mit Salz und Pfeffer würzen und mit Käse bestreuen.'
  ],
  kidName:'Kleine Fleisch-Nudel-Schüssel',
  kid:'Rindfleisch nach dem Schmoren mit zwei Gabeln zerzupfen oder sehr fein schneiden und mit den weichen Nudeln mischen. Ohne Salz, Käse nur als kleine Prise.',
  leftover:'Kritharaki-Pfanne · 10 Min. – Reste mit gewürfelter Zucchini und etwas Wasser in der Pfanne vollständig erhitzen.',
  tipp:'Mit Hähnchenschenkeln statt Rind verkürzt sich die Schmorzeit auf 30 Minuten.'
},
{
  id:'gr-soutzoukakia', name:'Soutzoukakia · Hackröllchen in Tomatensoße mit Vollkornreis', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'fleisch', base:'reis', time:{a:20,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Zwiebel','Gurke'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:200,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis aufsetzen und in 30 Minuten weich garen. Ofen auf 200 °C vorheizen.',
    'Zwiebel fein reiben und mit Hack, Haferflocken, gepresstem Knoblauch, Kreuzkümmel und 2 EL Wasser verkneten, dann zu daumendicken Röllchen formen.',
    'Passierte Tomaten mit Zimt und Öl in eine Auflaufform geben, die Röllchen hineinlegen und 25 Minuten backen, bis sie innen nicht mehr rosa sind. Gurke in Scheiben schneiden.',
    'Kinderportion ungesalzen abnehmen und die Röllchen in Scheiben schneiden. Erwachsene mit Salz, Pfeffer und etwas Chili würzen, Gurke dazu.'
  ],
  kidName:'Mini-Hackröllchen mit Reis',
  kid:'Röllchen in dünne Scheiben schneiden und mit Reis und Tomatensoße mischen, Gurke in weiche Stifte schneiden. Ohne Salz und Chili, Kreuzkümmel und Zimt sind mild.',
  leftover:'Gefüllte Pita · 8 Min. – Röllchen in der Soße vollständig erhitzen und mit Gurke ins Fladenbrot geben.',
  tipp:'Die Röllchen lassen sich roh einfrieren und gefroren in der Soße backen, dann 10 Minuten länger.'
},
{
  id:'gr-kotopoulo-lemonato', name:'Kotopoulo lemonato · Zitronenhähnchen mit Ofenkartoffeln und Oregano', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'gefluegel', base:'kartoffeln', time:{a:12,c:45}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Rote Zwiebel','Zitrone'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in Spalten, Karotten in dicke Stifte und Zwiebel in Spalten schneiden.',
    'Saft der Zitrone mit Öl, gepresstem Knoblauch, Oregano und 100 ml Wasser verrühren und Gemüse und Hähnchen auf dem Blech damit mischen.',
    'Etwa 45 Minuten backen und nach 25 Minuten wenden, bis die Kartoffeln goldbraun sind und das Hähnchen innen vollständig durchgegart ist.',
    'Kinderportion ungesalzen abnehmen und das Hähnchen klein zupfen. Erwachsene mit Salz, Pfeffer und etwas Zitronenschale würzen.'
  ],
  kidName:'Zitronenhähnchen-Teller',
  kid:'Hähnchen in kleine Fasern zupfen, Kartoffeln und Karotten weich backen und als Fingerfood anbieten. Ohne Salz, die mitgebackene Zitrone schmeckt mild.',
  leftover:'Hähnchen-Kartoffel-Pfanne · 10 Min. – Reste würfeln und in der Pfanne vollständig erhitzen, dazu Joghurt und Gurke.',
  tipp:'Hähnchenbrust trocknet schneller aus und kommt deshalb erst nach 20 Minuten aufs Blech.'
},
{
  id:'gr-spanakopita', name:'Spanakopita · Spinat-Feta-Pita aus Filoteig mit Gurke', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'milch', base:null, time:{a:20,c:35}, devices:[['ofen'],['pfanne']], method:'Pfanne + Backofen',
  allergens:['gluten','milch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Spinat','Frühlingszwiebel','Kräuter','Gurke'], season:[3,4,5,6],
  ing:[
    {n:'Filoteig',q:50,u:'g',c:'kuehl'},
    {n:'Babyspinat',q:200,u:'g',c:'gemuese'},
    {n:'Feta',q:60,u:'g',c:'kuehl'},
    {n:'Hüttenkäse',q:60,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Frühlingszwiebeln in Ringe schneiden und in etwas Öl 2 Minuten dünsten, Spinat zugeben und zusammenfallen lassen.',
    'Spinat gut ausdrücken, grob hacken und mit zerbröseltem Feta, Hüttenkäse, Ei, Dill und Muskat mischen.',
    'Eine Form mit der Hälfte der Filoblätter auslegen und jedes Blatt dünn mit Öl bestreichen. Füllung einstreichen und mit den übrigen Blättern abdecken.',
    'Oberfläche in Stücke einschneiden und 35 Minuten backen, bis der Teig goldbraun und die Füllung fest ist. Gurke in Scheiben schneiden.',
    'Kinderportion ohne zusätzliches Salz abnehmen, der Feta würzt genug. Erwachsene mit Pfeffer würzen und mit Gurke servieren.'
  ],
  kidName:'Kleine Spinat-Pita',
  kid:'Ein Stück aus der Mitte mit wenig Teigrand nehmen und in Streifen schneiden, die Füllung ist vollständig gestockt. Der Hüttenkäse macht sie milder und weniger salzig.',
  leftover:'Aufgebackene Pita · 8 Min. – Reste bei 180 °C im Ofen aufbacken, bis sie wieder knusprig und durchgewärmt sind.',
  tipp:'Aufgetauter, gut ausgedrückter TK-Blattspinat spart das Dünsten.'
},
{
  id:'gr-revithada', name:'Revithada · Kichererbsen-Schmortopf mit Zitrone und Rosmarin', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'huelsen', base:null, time:{a:8,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Karotten','Spinat','Zitrone'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Rosmarin, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in feine Streifen und Karotten in dünne Scheiben schneiden und in Öl 4 Minuten weich dünsten.',
    'Kichererbsen, Rosmarin, Lorbeer und 200 ml Wasser zugeben und 10 Minuten offen köcheln, dabei einige Kichererbsen am Topfrand zerdrücken, damit die Soße sämig wird.',
    'Spinat unterheben, 1 Minute ziehen lassen und das Lorbeerblatt entfernen.',
    'Kinderportion ungesalzen abnehmen und die Kichererbsen zerdrücken. Erwachsene mit Zitronensaft, Salz und Pfeffer würzen und mit Brot servieren.'
  ],
  kidName:'Kichererbsen-Mus mit Brot',
  kid:'Kichererbsen mit der Gabel zu einem groben Mus zerdrücken, die Karotten sind weich gegart. Ohne Salz, dazu weiche Brotstreifen zum Dippen.',
  leftover:'Kichererbsen-Aufstrich · 5 Min. – Reste mit etwas Olivenöl pürieren und aufs Brot streichen.',
  tipp:'Auf Sifnos gart Revithada über Nacht im Tontopf, mit Kichererbsen aus der Dose geht es in 15 Minuten.'
},
{
  id:'gr-strapatsada', name:'Strapatsada · Tomaten-Rührei mit Feta und Vollkornbrot', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'ei', base:null, time:{a:8,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','milch','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Frühlingszwiebel'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Feta',q:30,u:'g',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Tomaten fein würfeln, Paprika und Frühlingszwiebeln klein schneiden.',
    'Gemüse in Öl bei mittlerer Hitze 6 Minuten einköcheln, bis die Flüssigkeit fast verdampft ist.',
    'Verquirlte Eier zugeben und unter Rühren 3 bis 4 Minuten stocken lassen, bis kein flüssiges Ei mehr zu sehen ist.',
    'Kinderportion ohne Feta abnehmen. Erwachsene mit zerbröseltem Feta, Oregano und Pfeffer würzen und mit Brot servieren.'
  ],
  kidName:'Tomaten-Rührei mit Brotstreifen',
  kid:'Rührei vollständig durchstocken lassen und mit weichem Brot in Streifen anbieten. Feta weglassen, Paprika sehr klein schneiden.',
  leftover:'Rührei-Pita · 5 Min. – Reste in der Pfanne vollständig erhitzen und mit Gurke in ein Fladenbrot füllen.',
  tipp:'Reife Sommertomaten machen den Geschmack, im Winter eignen sich halbierte Kirschtomaten besser.'
},
{
  id:'gr-kakavia', name:'Kakavia · Fischtopf mit Kartoffeln, Karotten und Zitrone', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch','sellerie'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Sellerie','Zwiebel','Tomaten','Zitrone'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Staudensellerie',q:1,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotten und Sellerie würfeln und in Öl 3 Minuten andünsten. Kartoffeln und Tomaten in Würfel schneiden.',
    'Kartoffeln, Tomaten und 400 ml Wasser zugeben und 15 Minuten köcheln, bis die Kartoffeln weich sind.',
    'Fisch in große Stücke schneiden, in die Brühe legen und bei kleiner Hitze 6 bis 8 Minuten gar ziehen lassen. Gehackte Petersilie unterheben.',
    'Kinderportion ungesalzen abnehmen, den Fisch auf Gräten prüfen und mit den Kartoffeln zerdrücken. Erwachsene mit Salz, Pfeffer und Zitronensaft würzen.'
  ],
  kidName:'Fisch-Kartoffel-Topf',
  kid:'Fisch auf Gräten prüfen und mit Kartoffeln und Karotten grob zerdrücken, sodass nur wenig Brühe übrig bleibt. Ohne Salz und Zitrone.',
  leftover:'Fisch-Gratin · 20 Min. – Reste mit wenig Flüssigkeit in eine Form geben, mit Käse bestreuen und im Ofen vollständig durchbacken.',
  tipp:'Mit einer Scheibe Vollkornbrot wird der Fischtopf zur vollen Mahlzeit.'
}
);
