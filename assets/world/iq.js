/* Grün geplant · Irak · Top 15 */
RECIPES.push(
{
  id:'iq-masgouf', name:'Masgouf · Ofenfisch mit Kurkuma, Tomaten und Fladenbrot', cuisine:'Irak', flag:'🇮🇶',
  protein:'fisch', base:null, time:{a:8,c:15}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Gurke','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Fischfilet mit Öl und Kurkuma einreiben, Tomaten und Zwiebel in Scheiben schneiden.',
    'Fisch mit den Tomaten- und Zwiebelscheiben auf das Blech legen und 12 bis 15 Minuten backen, bis er sich leicht zerpflücken lässt.',
    'Gurke würfeln, Petersilie hacken und das Fladenbrot in den letzten 3 Minuten mit auf das Blech legen.',
    'Kinderportion abnehmen, Fisch auf Gräten prüfen und zerpflücken. Erwachsene mit Zitrone, Salz und etwas Chili würzen.'
  ],
  kidName:'Mini-Masgouf',
  kid:'Fisch gründlich auf Gräten prüfen und zerpflücken, die weich gebackenen Tomaten ohne Haut dazugeben. Fladenbrot in weichen Streifen, ohne Salz.',
  leftover:'Fisch-Wrap · 5 Min. – Reste erwärmen und mit Gurke und Joghurt ins Fladenbrot rollen.',
  tipp:'Im Irak wird Karpfen am offenen Feuer gegart, im Ofen gelingt die Kurkuma-Würzung mit jedem festen weißen Fisch.'
},
{
  id:'iq-mutabbaq', name:'Mutabbaq Samak · Basra-Gewürzreis mit Fisch und Zwiebeln', cuisine:'Irak', flag:'🇮🇶',
  protein:'fisch', base:'reis', time:{a:15,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Tomaten','Gurke'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:75,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rosinen',q:10,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen, mit Kurkuma und der doppelten Menge Wasser aufkochen und zugedeckt 15 Minuten leise garen.',
    'Zwiebel in Streifen schneiden und in der Hälfte des Öls 8 Minuten goldbraun dünsten, Rosinen und Baharat 1 Minute mitwärmen.',
    'Fisch in große Stücke teilen und im restlichen Öl von jeder Seite 3 bis 4 Minuten garen, bis er innen nicht mehr glasig ist.',
    'Tomaten und Gurke zu einem Salat würfeln. Reis auf eine Platte geben, Zwiebeln und Fisch obenauf legen.',
    'Kinderportion abnehmen, Fisch entgräten und zerpflücken. Erwachsene mit Salz und etwas Baharat nachwürzen.'
  ],
  kidName:'Kurkuma-Reis mit Fisch',
  kid:'Fisch sorgfältig entgräten, zerpflücken und unter den weichen Reis mischen. Rosinen klein hacken oder weglassen, kein Salz.',
  leftover:'Fisch-Reis-Pfanne · 8 Min. – Reste mit Erbsen in der Pfanne vollständig durcherhitzen.',
  tipp:'Für die echte Basra-Note eine getrocknete Limette anstechen und im Reis mitgaren.'
},
{
  id:'iq-bamia', name:'Timman wa Bamia · Okra-Tomaten-Eintopf mit Rindfleisch und Reis', cuisine:'Irak', flag:'🇮🇶',
  protein:'fleisch', base:'reis', time:{a:15,c:40}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Okra','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Okra, TK',q:150,u:'g',c:'tk'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und in Öl 4 Minuten anschwitzen, Rindfleisch zugeben und rundum anbraten.',
    'Knoblauch, Tomatenmark und Baharat kurz mitrösten, passierte Tomaten und 200 ml Wasser zugeben und zugedeckt 30 Minuten schmoren.',
    'Vollkornreis parallel in der doppelten Menge Wasser 30 bis 35 Minuten garen.',
    'Okra gefroren zum Fleisch geben und weitere 10 Minuten köcheln, bis Fleisch und Okra weich sind.',
    'Kinderportion abnehmen, Fleisch fein zerzupfen und Okra in Scheiben schneiden. Erwachsene mit Salz und Chili abschmecken.'
  ],
  kidName:'Weiche Bamia mit Reis',
  kid:'Fleisch sehr fein zerzupfen, Okra in dünne Scheiben schneiden und mit der Soße unter den Reis mischen. Ohne Salz und Chili.',
  leftover:'Bamia-Reis-Topf · 10 Min. – Reste mit etwas Wasser vollständig erhitzen und mit Petersilie servieren.',
  tipp:'TK-Okra gefroren in die Soße geben, dann bleibt sie in Form und wird weniger schleimig.'
},
{
  id:'iq-dolma', name:'Dolma · gefüllte Paprika, Zucchini und Zwiebeln mit Reis und Hack', cuisine:'Irak', flag:'🇮🇶',
  protein:'fleisch', base:'reis', time:{a:25,c:40}, devices:[['topf']], method:'Großer Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Paprika','Zucchini','Zwiebel','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:40,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen und mit Hackfleisch, gehackter Petersilie, Baharat, Öl und 2 EL passierten Tomaten verkneten.',
    'Paprika oben aufschneiden und entkernen, Zucchini halbieren und aushöhlen. Zwiebel schälen, einmal bis zur Mitte einschneiden und 5 Minuten in Wasser kochen, damit sich die Schichten lösen.',
    'Gemüse und Zwiebelschichten locker füllen, weil der Reis aufquillt, und dicht nebeneinander in einen Topf setzen.',
    'Restliche passierte Tomaten mit 200 ml Wasser und dem Zitronensaft darübergießen, mit einem Teller beschweren und zugedeckt 40 Minuten leise köcheln.',
    'Kinderportion abnehmen, Füllung aus der Hülle lösen und mit dem weichen Gemüse zerdrücken. Erwachsene mit Salz und Chili nachwürzen.'
  ],
  kidName:'Dolma-Füllung mit Gemüse',
  kid:'Füllung aus dem Gemüse lösen, die Hülle ohne Haut fein schneiden und mit der Soße mischen. Hackfleisch muss durchgegart sein, ohne Salz.',
  leftover:'Dolma-Auflauf · 20 Min. – Reste mit der Soße in einer Form bei 180 °C vollständig durcherhitzen.',
  tipp:'Gefüllte Zwiebeln gehören im Irak dazu: kurz gekocht lassen sich die Schichten leicht ablösen und füllen.'
},
{
  id:'iq-tepsi', name:'Tepsi Baytinijan · Auberginen-Kartoffel-Auflauf mit Hackbällchen', cuisine:'Irak', flag:'🇮🇶',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:45}, devices:[['ofen']], method:'Backofen, Blech + Auflaufform',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Aubergine','Kartoffeln','Tomaten','Rote Paprika','Zwiebel'], season:[7,8],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Aubergine',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Aubergine und Kartoffeln in 1 cm dicke Scheiben schneiden, mit dem Öl bestreichen und auf dem Blech 15 Minuten vorbacken, statt sie zu frittieren.',
    'Hackfleisch mit fein geriebener Zwiebel und Baharat verkneten und zu walnussgroßen Bällchen formen.',
    'Kartoffeln, Auberginen, Hackbällchen sowie Tomaten- und Paprikascheiben in eine Form schichten. Passierte Tomaten mit gepresstem Knoblauch und 100 ml Wasser darübergießen.',
    'Bei 190 °C 30 Minuten backen, bis die Bällchen durchgegart und die Kartoffeln weich sind.',
    'Kinderportion abnehmen, Hackbällchen zerteilen und Aubergine ohne Schale zerdrücken. Erwachsene mit Salz und Chili würzen.'
  ],
  kidName:'Tepsi-Teller mit Mini-Bällchen',
  kid:'Hackbällchen in kleine Stücke teilen und prüfen, dass sie innen durch sind. Aubergine ohne Schale und Kartoffeln mit der Soße zerdrücken, kein Salz.',
  leftover:'Tepsi im Fladenbrot · 10 Min. – Reste vollständig erhitzen und in warmes Fladenbrot füllen.',
  tipp:'Das Vorbacken ersetzt das traditionelle Frittieren der Auberginen und spart viel Fett.'
},
{
  id:'iq-quzi', name:'Quzi · Gewürzreis mit Lammfleisch, Erbsen und Mandeln', cuisine:'Irak', flag:'🇮🇶',
  protein:'fleisch', base:'reis', time:{a:20,c:50}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['nuesse'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Erbsen','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Lammfleisch, mager, gewürfelt',q:110,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rosinen',q:10,u:'g',c:'vorrat'},
    {n:'Mandelblättchen',q:10,u:'g',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mandeln im trockenen Topf 2 Minuten goldgelb rösten und beiseitestellen. Lammfleisch und gewürfelte Zwiebel im Öl anbraten, mit Baharat bestäuben, 400 ml Wasser angießen und zugedeckt 45 Minuten weich schmoren.',
    'Nach 15 Minuten den Vollkornreis mit Kurkuma in einem zweiten Topf in der doppelten Menge Wasser 30 Minuten garen.',
    'Karotten klein würfeln und mit den Erbsen in den letzten 10 Minuten zum Fleisch geben.',
    'Reis auf eine Platte geben, Fleisch und Gemüse obenauf verteilen und mit Rosinen und Mandeln bestreuen.',
    'Kinderportion ohne Mandeln abnehmen, Fleisch fein zerzupfen und Rosinen hacken. Erwachsene mit Salz und etwas Schmorsud nachwürzen.'
  ],
  kidName:'Mini-Quzi ohne Nüsse',
  kid:'Fleisch sehr fein zerzupfen und mit den weichen Erbsen unter den Reis mischen, Erbsen dabei andrücken. Ganze Mandeln weglassen oder fein gemahlen untermischen, Rosinen klein hacken.',
  leftover:'Quzi-Pfanne · 10 Min. – Reste mit etwas Wasser in der Pfanne vollständig durcherhitzen.',
  tipp:'Das Fleisch lässt sich am Vortag schmoren, dann steht Quzi am Abend in 30 Minuten auf dem Tisch.'
},
{
  id:'iq-tashreeb', name:'Tashreeb Dijaj · Hähnchen-Kichererbsen-Topf über Fladenbrot', cuisine:'Irak', flag:'🇮🇶',
  protein:'gefluegel', base:null, time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Karotten','Zwiebel','Tomaten','Zitrone'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Kichererbsen (Dose, abgetropft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Getrocknete Limette (Loomi)',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und im Öl 3 Minuten anschwitzen, Hähnchen, Kurkuma und Tomatenmark zugeben und kurz anrösten.',
    'Mit 500 ml Wasser auffüllen, Karotten in Scheiben und die angestochene Loomi zugeben und 25 Minuten leise köcheln.',
    'Kichererbsen in den letzten 5 Minuten mitwärmen, Hähnchen herausnehmen und zerzupfen.',
    'Fladenbrot in Stücke reißen, in tiefe Teller legen und mit Brühe, Kichererbsen, Gemüse und Fleisch übergießen.',
    'Kinderportion abnehmen, Kichererbsen zerdrücken und das Brot gut einweichen lassen. Erwachsene mit Salz und Zitrone würzen.'
  ],
  kidName:'Weiches Brot-Hähnchen-Töpfchen',
  kid:'Brot vollständig in der Brühe einweichen, Hähnchen fein zerzupfen und Kichererbsen zerdrücken. Loomi vorher entfernen, kein Salz.',
  leftover:'Hähnchen-Kichererbsen-Wrap · 8 Min. – Fleisch und Kichererbsen vollständig erhitzen und mit Gurke ins Fladenbrot rollen.',
  tipp:'Loomi gibt es im arabischen oder persischen Laden, ersatzweise ein Stück Zitronenschale mitkochen.'
},
{
  id:'iq-kebab', name:'Kebab · Hackröllchen aus der Pfanne mit Tomaten, Sumach-Zwiebeln und Fladenbrot', cuisine:'Irak', flag:'🇮🇶',
  protein:'fleisch', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Gurke','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Sumach',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Die Hälfte der Zwiebel sehr fein reiben, mit Hackfleisch, der Hälfte der gehackten Petersilie und Kreuzkümmel verkneten und zu länglichen Röllchen formen.',
    'Röllchen im Öl bei mittlerer Hitze 8 bis 10 Minuten rundum braten, bis sie innen durchgegart sind. Tomaten halbieren und 3 Minuten mitbraten.',
    'Restliche Zwiebel in feine Ringe schneiden und mit Sumach und Petersilie mischen, Gurke in Stifte schneiden.',
    'Kinderportion abnehmen, Kebab in kleine Stücke schneiden und mit weicher Tomate und Gurkenstiften anbieten. Erwachsene salzen und mit Sumach-Zwiebeln ins Fladenbrot rollen.'
  ],
  kidName:'Kebab-Häppchen',
  kid:'Kebab in kleine Stücke schneiden und prüfen, dass er innen durch ist. Gebratene Tomate ohne Haut, Gurke in Stifte, rohe Zwiebel weglassen und ohne Salz.',
  leftover:'Kebab-Tomaten-Reis · 10 Min. – Reste klein schneiden und mit Reis und passierten Tomaten vollständig erhitzen.',
  tipp:'Mit nassen Händen lassen sich die Röllchen leicht formen und kleben nicht.'
},
{
  id:'iq-adas', name:'Shorbat Adas · sämige rote Linsensuppe mit Zitrone und Fladenbrot', cuisine:'Irak', flag:'🇮🇶',
  protein:'huelsen', base:null, time:{a:8,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Karotten','Zwiebel','Zitrone'], season:[],
  ing:[
    {n:'Rote Linsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotten klein würfeln und im Öl 3 Minuten anschwitzen, Kreuzkümmel und Kurkuma kurz mitrösten.',
    'Linsen abspülen, mit der Brühe zugeben und 15 Minuten köcheln, bis sie zerfallen.',
    'Suppe fein pürieren und bei Bedarf mit etwas Wasser verdünnen. Fladenbrot in Stücke reißen.',
    'Kinderportion ungesalzen abnehmen und etwas abkühlen lassen. Erwachsene mit Salz, Zitronensaft und Chiliflocken würzen.'
  ],
  kidName:'Linsen-Löffelsuppe',
  kid:'Suppe ist püriert und gut löffelbar, lauwarm mit weichen Brotstücken zum Eintunken anbieten. Ohne Salz und Chili.',
  leftover:'Linsen-Reis · 8 Min. – Dicke Suppenreste erhitzen und als Soße über Reis geben.',
  tipp:'Die Suppe lässt sich portionsweise einfrieren und hält so etwa drei Monate.'
},
{
  id:'iq-makhlama', name:'Makhlama · Eier-Pfanne mit Tomaten, Zwiebeln und Paprika', cuisine:'Irak', flag:'🇮🇶',
  protein:'ei', base:null, time:{a:8,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Paprika würfeln und im Öl 5 Minuten weich dünsten, Kurkuma und Paprikapulver kurz mitrösten.',
    'Tomaten würfeln, zugeben und 4 Minuten einkochen, bis eine dicke Soße entsteht.',
    'Eier verquirlen, über das Gemüse gießen und unter Rühren 3 bis 4 Minuten stocken lassen, bis kein flüssiges Ei mehr zu sehen ist. Gehackte Petersilie unterheben.',
    'Kinderportion abnehmen und mit weichem Brot anbieten. Erwachsene mit Salz und Pfeffer würzen und mit Fladenbrot essen.'
  ],
  kidName:'Weiches Tomaten-Rührei',
  kid:'Ei vollständig stocken lassen und mit dem weichen Gemüse klein schneiden. Brot in Streifen ohne harte Kruste, ohne Salz.',
  leftover:'Makhlama-Wrap · 5 Min. – Reste vollständig erhitzen und mit Gurke ins Fladenbrot rollen.',
  tipp:'Im Irak ist Makhlama ein schnelles Alltagsgericht, oft kommt etwas gebratenes Hackfleisch dazu.'
},
{
  id:'iq-fasoulia', name:'Fasoulia Yabsa · weißer Bohneneintopf in Tomatensoße mit Reis', cuisine:'Irak', flag:'🇮🇶',
  protein:'huelsen', base:'reis', time:{a:10,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:140,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser aufsetzen und 30 Minuten garen.',
    'Zwiebel, Karotten und Knoblauch fein würfeln und im Öl 5 Minuten dünsten, Tomatenmark und Baharat 1 Minute mitrösten.',
    'Passierte Tomaten, 100 ml Wasser und die abgespülten Bohnen zugeben und 15 Minuten sämig köcheln.',
    'Kinderportion abnehmen und die Bohnen grob zerdrücken. Erwachsene mit Salz und Chili würzen und mit Reis servieren.'
  ],
  kidName:'Bohnen-Tomaten-Reis',
  kid:'Bohnen grob zerdrücken und mit der Soße unter den weichen Reis mischen. Karotten weich gekocht, ohne Salz.',
  leftover:'Bohnen-Fladenbrot · 5 Min. – Reste vollständig erhitzen und mit Joghurt zu Fladenbrot essen.',
  tipp:'Fasoulia ist im Irak ein Wochentagsgericht, mit Lammfleisch wird daraus ein Sonntagsessen.'
},
{
  id:'iq-kitchri', name:'Kitchri · Reis mit roten Linsen, Kreuzkümmel und Joghurt', cuisine:'Irak', flag:'🇮🇶',
  protein:'huelsen', base:'reis', time:{a:6,c:18}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Reis',q:50,u:'g',c:'vorrat'},
    {n:'Rote Linsen, trocken',q:40,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:100,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis und Linsen zusammen spülen, bis das Wasser klar ist. Zwiebel würfeln und im Öl 3 Minuten anschwitzen, Kreuzkümmel und Kurkuma kurz mitrösten.',
    'Reis und Linsen mit 300 ml Wasser zugeben, aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen, bis alles weich ist.',
    'Tomaten und Gurke würfeln. Kitchri mit einer Gabel auflockern.',
    'Kinderportion ungesalzen abnehmen und mit Joghurt verrühren. Erwachsene mit Salz würzen und mit Joghurt und Salat essen.'
  ],
  kidName:'Linsenreis mit Joghurt',
  kid:'Weichen Linsenreis mit Joghurt cremig rühren, Gurke in Stifte schneiden und Tomaten ohne Haut fein würfeln. Ohne Salz.',
  leftover:'Kitchri-Bratlinge · 15 Min. – Reste mit einem Ei verkneten, zu Talern formen und in der Pfanne durchbraten.',
  tipp:'Gründliches Spülen macht den Linsenreis locker statt breiig.'
},
{
  id:'iq-bagilla', name:'Bagilla bil Dihin · dicke Bohnen auf Fladenbrot mit Ei', cuisine:'Irak', flag:'🇮🇶',
  protein:'huelsen', base:null, time:{a:8,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Kräuter','Zitrone'], season:[],
  ing:[
    {n:'Dicke Bohnen, TK',q:150,u:'g',c:'tk'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Dicke Bohnen in 400 ml Wasser 10 Minuten weich kochen, den fein gehackten Knoblauch in den letzten 2 Minuten mitkochen und 150 ml Kochwasser auffangen.',
    'Ei in wenig Öl mit Deckel 4 bis 5 Minuten braten, bis Eiweiß und Eigelb fest sind.',
    'Fladenbrot in Stücke reißen, in eine tiefe Schale legen und mit dem warmen Kochwasser tränken. Bohnen, restliches Öl und Kreuzkümmel darauf verteilen.',
    'Kinderportion abnehmen, Bohnen aus der Haut drücken und das Ei klein schneiden. Erwachsene mit Salz, Zitrone, Petersilie und Tomatenwürfeln servieren.'
  ],
  kidName:'Bohnenbrot mit Ei',
  kid:'Dicke Bohnen aus der Haut drücken und zerdrücken, Ei vollständig durchgaren und klein schneiden. Brot gut einweichen, ohne Salz.',
  leftover:'Bohnenmus-Brot · 5 Min. – Bohnenreste mit Zitrone und Öl zerdrücken und auf Brot streichen.',
  tipp:'In Bagdad ist das ein Frühstück, mit einem Tomatensalat wird es ein vollständiges Abendessen.'
},
{
  id:'iq-bazalia', name:'Margat Bazalia · Erbsen-Karotten-Eintopf in Tomatensoße mit Reis', cuisine:'Irak', flag:'🇮🇶',
  protein:'huelsen', base:'reis', time:{a:10,c:18}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Erbsen','Karotten','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Erbsen, TK',q:120,u:'g',c:'tk'},
    {n:'Kichererbsen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen und in der doppelten Menge Wasser 15 bis 18 Minuten garen.',
    'Zwiebel und Karotten würfeln, im Öl 5 Minuten dünsten, Tomatenmark und Baharat kurz mitrösten.',
    'Passierte Tomaten und 150 ml Wasser zugeben, Erbsen und abgespülte Kichererbsen hineingeben und 12 Minuten köcheln.',
    'Kinderportion abnehmen, Erbsen und Kichererbsen zerdrücken. Erwachsene mit Salz und Chili abschmecken und mit Reis servieren.'
  ],
  kidName:'Erbsen-Tomaten-Reis',
  kid:'Erbsen und Kichererbsen mit der Gabel zerdrücken und unter den Reis mischen, damit nichts Rundes ganz bleibt. Ohne Salz und Chili.',
  leftover:'Erbsen-Reis-Pfanne · 8 Min. – Reste mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Klassisch kommt Lammfleisch hinein, mit Kichererbsen wird der Eintopf vegetarisch und in 30 Minuten satt.'
},
{
  id:'iq-laffa', name:'Laffat Batata wa Bayd · Fladenbrot-Wrap mit Ofenkartoffeln, Ei und Mango-Joghurt', cuisine:'Irak', flag:'🇮🇶',
  protein:'ei', base:'kartoffeln', time:{a:10,c:25}, devices:[['ofen','airfryer'],['topf']], method:'Ofen oder Airfryer + Topf',
  allergens:['ei','gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Tomaten','Gurke','Mango'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Mango',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Mildes Currypulver',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in kleine Würfel schneiden, mit dem Öl mischen und 25 Minuten goldbraun backen, im Airfryer 18 Minuten bei 200 °C.',
    'Eier in 10 Minuten hart kochen, abschrecken und in Scheiben schneiden.',
    'Mango sehr fein würfeln und mit Joghurt und Currypulver verrühren. Tomaten und Gurke würfeln.',
    'Kinderportion abnehmen: Kartoffeln, Ei und Gurke getrennt und ohne Salz. Erwachsene salzen und alles mit Mango-Joghurt ins Fladenbrot rollen.'
  ],
  kidName:'Kartoffel-Ei-Teller',
  kid:'Ei hart kochen und klein schneiden, Kartoffelwürfel weich und lauwarm anbieten. Mango-Joghurt als Dip, ohne Salz.',
  leftover:'Kartoffel-Ei-Pfanne · 8 Min. – Reste mit Tomaten in der Pfanne vollständig durchbraten.',
  tipp:'Amba ist eine eingelegte, salzige Mangosoße, der frische Mango-Joghurt ist eine milde Annäherung.'
}
);
