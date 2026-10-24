/* Grün geplant · Bangladesch · Top 15 */
RECIPES.push(
{
  id:'bd-biryani', name:'Biryani · Hähnchen-Reis-Topf mit Joghurt, Kartoffeln und Gurkenjoghurt', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'gefluegel', base:'reis', time:{a:20,c:35}, devices:[['topf']], method:'Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Gurke'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:80,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in Stücke schneiden und mit der Hälfte des Joghurts, geriebenem Ingwer, Knoblauch und Garam Masala mischen. Zwiebel in feine Streifen schneiden und in Öl 8 Minuten goldbraun braten.',
    'Hähnchen und halbierte Kartoffelstücke zu den Zwiebeln geben und 5 Minuten anbraten. Gewaschenen Reis darüber verteilen und 150 ml Wasser angießen.',
    'Zugedeckt bei kleinster Hitze 25 Minuten garen, ohne umzurühren, bis Reis, Kartoffeln und Hähnchen gar sind. Gurke raspeln und mit dem restlichen Joghurt verrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen und mit dem Gurkenjoghurt servieren.'
  ],
  kidName:'Mildes Hähnchen-Biryani',
  kid:'Hähnchen fein zerzupfen und Kartoffeln mit der Gabel zerdrücken. Mit etwas Gurkenjoghurt mischen, damit der Reis saftig ist.',
  leftover:'Biryani-Pfanne · 10 Min. – Reste mit einem Schuss Wasser in der Pfanne vollständig erhitzen.',
  tipp:'In Dhaka gehört ein Stück Kartoffel in jede Biryani-Portion, es saugt das Aroma auf.'
},
{
  id:'bd-chicken-rezala', name:'Chicken Rezala · Hähnchen in milder Joghurt-Zwiebel-Soße mit Vollkorn-Fladenbrot', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'gefluegel', base:null, time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Blumenkohl','Erbsen'], season:[6,7,8,9,10],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Blumenkohl',q:100,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kardamom, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein reiben und in Öl 5 Minuten weich dünsten, ohne dass sie Farbe nimmt. Ingwer, Knoblauch und Kardamom 1 Minute mitdünsten.',
    'Hähnchen in Stücke schneiden und 3 Minuten mitbraten. Blumenkohlröschen und 100 ml Wasser zugeben und zugedeckt 12 Minuten köcheln.',
    'Hitze reduzieren, Joghurt glatt rühren und unterziehen, Erbsen zugeben und 4 Minuten sanft ziehen lassen, ohne dass es kocht. Fladenbrot in einer trockenen Pfanne erwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch einer grünen Chili würzen.'
  ],
  kidName:'Joghurt-Hähnchen mild',
  kid:'Hähnchen fein zerzupfen, Blumenkohl und Erbsen zerdrücken und mit der milden Soße mischen. Fladenbrot in weiche Streifen zum Dippen reißen.',
  leftover:'Rezala-Reis · 15 Min. – Reste vollständig erhitzen und mit frisch gekochtem Basmatireis essen.',
  tipp:'Den Joghurt nur bei kleiner Hitze unterrühren, dann flockt er nicht aus.'
},
{
  id:'bd-murgir-jhol', name:'Murgir Jhol · leichtes Hähnchen-Kartoffel-Curry mit Tomaten', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Zwiebel, Ingwer und Knoblauch fein würfeln und in Öl 3 Minuten dünsten, Kurkuma und Kreuzkümmel 1 Minute mitrösten.',
    'Hähnchen in Stücke und Kartoffeln in 2 cm große Würfel schneiden und beides 3 Minuten mitbraten. Tomatenwürfel und 250 ml Wasser zugeben.',
    'Zugedeckt 20 Minuten köcheln, bis Kartoffeln und Hähnchen gar sind. Die Soße bleibt dünn wie eine kräftige Brühe.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  kidName:'Hähnchen-Kartoffel-Topf',
  kid:'Kartoffeln mit etwas Soße zerdrücken, Hähnchen fein zerzupfen und mit dem Reis mischen. Eher dick als suppig servieren.',
  leftover:'Jhol-Reistopf · 8 Min. – Reste mit Reis in einem Topf vollständig erhitzen und dick einkochen lassen.',
  tipp:'Jhol wird mit viel Soße über Reis gegessen, für Kleinkinder etwas Flüssigkeit abgießen.'
},
{
  id:'bd-kala-bhuna', name:'Kala Bhuna · dunkel geschmortes Rindfleisch, mild gewürzt, mit Vollkorn-Fladenbrot', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'fleisch', base:null, time:{a:20,c:90}, devices:[['topf'],['pfanne']], method:'Schmortopf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Gurke','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Rindergulasch, mager',q:120,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Zwiebel',q:0.75,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in feine Streifen schneiden und in Öl 10 Minuten langsam dunkelgolden braten. Ingwer, Knoblauch, Kurkuma und Garam Masala 1 Minute mitrösten.',
    'Fleisch in 2 cm große Würfel schneiden, zugeben und 5 Minuten rundum anbraten. Mit 300 ml Wasser aufgießen und zugedeckt bei kleiner Hitze 70 Minuten schmoren.',
    'Deckel abnehmen und unter Rühren 10 Minuten einkochen, bis das Fleisch zart und dunkel glänzend ist. Gurke und Tomaten würfeln, Fladenbrot in einer trockenen Pfanne erwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  kidName:'Zartes Schmorfleisch',
  kid:'Das zarte Fleisch mit der Gabel fein zerzupfen und mit etwas Soße und weichem Fladenbrot anbieten. Tomaten und Gurke klein würfeln.',
  leftover:'Bhuna-Wrap · 8 Min. – Fleischreste vollständig erhitzen und mit Gurke in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Im Slow Cooker 6 Stunden auf niedriger Stufe schmoren und zum Schluss im Topf offen einkochen.'
},
{
  id:'bd-haleem', name:'Haleem · sämiger Eintopf aus Rindfleisch, Linsen und Bulgur', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'fleisch', base:'bulgur', time:{a:20,c:75}, devices:[['topf']], method:'Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Karotten','Babyspinat'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:80,u:'g',c:'fisch'},
    {n:'Rote Linsen, trocken',q:30,u:'g',c:'vorrat'},
    {n:'Bulgur',q:40,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in Streifen schneiden und in Öl 8 Minuten goldbraun braten, die Hälfte zum Garnieren beiseitelegen. Ingwer, Knoblauch und Garam Masala 1 Minute mitrösten.',
    'Fleisch in kleine Würfel schneiden, 5 Minuten mitbraten, mit 600 ml Wasser aufgießen und zugedeckt 45 Minuten köcheln.',
    'Linsen, Bulgur und geriebene Karotte zugeben und unter gelegentlichem Rühren 20 Minuten weiterköcheln, bis alles weich ist. Fleisch mit einem Kochlöffel zerdrücken und den Spinat unterrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, den gebratenen Zwiebeln und nach Wunsch Chili würzen.'
  ],
  kidName:'Linsen-Fleisch-Brei',
  kid:'Haleem ist von Natur aus weich und breiig, das Fleisch dafür vollständig zerfasern. Ohne gebratene Zwiebeln, Salz und Chili servieren.',
  leftover:'Haleem-Suppe · 8 Min. – Reste mit etwas Wasser verlängern und vollständig aufkochen.',
  tipp:'Haleem wird in Bangladesch besonders im Ramadan gegessen und lässt sich gut einfrieren.'
},
{
  id:'bd-shami-kabab', name:'Shami Kabab · Rindfleisch-Linsen-Taler mit Gurkenjoghurt und Fladenbrot', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'fleisch', base:null, time:{a:20,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','milch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Gurke','Tomaten','Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Rote Linsen, trocken',q:25,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Garam Masala',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen in 100 ml Wasser 10 Minuten weich kochen, bis das Wasser aufgesogen ist, und kurz abkühlen lassen.',
    'Hack mit Linsen, Ei, fein geriebener Zwiebel und Garam Masala verkneten und zu flachen Talern von 5 cm formen.',
    'Taler in Öl bei mittlerer Hitze 4 bis 5 Minuten je Seite braten, bis sie innen vollständig durchgegart sind. Gurke raspeln und mit dem Joghurt verrühren, Tomaten würfeln.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen und alles mit warmem Fladenbrot servieren.'
  ],
  kidName:'Mini-Kabab',
  kid:'Taler vollständig durchbraten und halbieren, damit die weiche Mitte sichtbar ist. Mit Gurkenjoghurt und weichen Fladenbrotstreifen anbieten.',
  leftover:'Kabab-Wrap · 5 Min. – Aufgewärmte Taler mit Gurkenjoghurt und Tomaten ins Fladenbrot rollen.',
  tipp:'Die Linsen machen die Taler saftig und strecken das Fleisch.'
},
{
  id:'bd-shorshe-maach', name:'Shorshe Maach · Lachs in milder Senf-Joghurt-Soße mit Basmatireis', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'fisch', base:'reis', time:{a:8,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Brokkoli','Babyspinat'], season:[6,7,8,9,10],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Basmatireis in der 1,5-fachen Menge Wasser 12 Minuten garen und Brokkoliröschen in den letzten 5 Minuten auf dem Reis dämpfen.',
    'Joghurt mit Senf, Kurkuma und 3 EL Wasser glatt rühren. Lachs in große Stücke schneiden.',
    'Öl in einer Pfanne erhitzen, die Senf-Joghurt-Soße einrühren, Lachs hineinlegen und zugedeckt bei kleiner Hitze 7 bis 8 Minuten gar ziehen lassen. Spinat in den letzten 2 Minuten zugeben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch grüner Chili würzen.'
  ],
  kidName:'Senf-Lachs mild',
  kid:'Lachs sorgfältig auf Gräten prüfen und zerpflücken, Brokkoli weich dämpfen. Mit der milden Joghurtsoße unter den Reis mischen, ohne Chili.',
  leftover:'Lachs-Reis-Pfanne · 8 Min. – Reis- und Fischreste mit Gemüse in der Pfanne vollständig erhitzen.',
  tipp:'Original wird der grätenreiche Ilish verwendet, Lachs ist ähnlich fettreich und leichter zu entgräten.'
},
{
  id:'bd-macher-jhol', name:'Macher Jhol · leichtes Fischcurry mit Kartoffeln, Aubergine und Tomaten', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'fisch', base:'reis', time:{a:15,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Aubergine','Tomaten','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:80,u:'g',c:'gemuese'},
    {n:'Aubergine',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fisch in große Stücke schneiden, mit der Hälfte des Kurkumas einreiben, in Öl 1 Minute je Seite anbraten und herausnehmen.',
    'Kartoffeln in Stifte und Aubergine in Würfel schneiden und mit Ingwer, Kreuzkümmel und restlichem Kurkuma 3 Minuten anbraten. Tomatenwürfel und 300 ml Wasser zugeben und 12 Minuten köcheln.',
    'Basmatireis in der 1,5-fachen Menge Wasser 12 Minuten garen. Fisch in die Soße legen und 5 Minuten sanft gar ziehen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Koriandergrün und nach Wunsch grüner Chili würzen.'
  ],
  kidName:'Fisch-Kartoffel-Topf',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, Kartoffeln und Aubergine sehr weich garen und zerdrücken. Mit wenig Soße über den Reis geben.',
  leftover:'Fisch-Kartoffel-Taler · 15 Min. – Fisch- und Kartoffelreste zerdrücken, zu Talern formen und in der Pfanne beidseitig vollständig durchbraten.',
  tipp:'Jhol ist eine dünne, leichte Soße, die mit viel Reis gegessen wird.'
},
{
  id:'bd-machh-malai-curry', name:'Machh Malai Curry · Fisch in milder Kokossoße mit Erbsen und Spinat', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'fisch', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Erbsen','Babyspinat','Rote Paprika','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Basmatireis in der 1,5-fachen Menge Wasser 12 Minuten garen. Zwiebel und Ingwer fein würfeln und in Öl 3 Minuten dünsten, Kurkuma kurz mitrösten.',
    'Paprikawürfel 2 Minuten mitdünsten, Kokosmilch und 50 ml Wasser zugeben und aufkochen.',
    'Fisch in große Stücke schneiden, mit den Erbsen in die Soße legen und zugedeckt bei kleiner Hitze 6 Minuten gar ziehen lassen. Spinat unterheben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch grüner Chili würzen.'
  ],
  kidName:'Kokos-Fisch mild',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, Erbsen leicht zerdrücken. Mit der milden Kokossoße unter den Reis mischen.',
  leftover:'Kokos-Fisch-Reis · 8 Min. – Reis- und Soßenreste zusammen in einem Topf vollständig erhitzen.',
  tipp:'Das Original wird mit Garnelen gekocht, mit Fisch ist es milder und günstiger.'
},
{
  id:'bd-bhuna-khichuri', name:'Bhuna Khichuri · Reis-Linsen-Topf mit Kürbis, Blumenkohl und Erbsen', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'huelsen', base:'reis', time:{a:15,c:35}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kürbis','Blumenkohl','Erbsen','Zwiebel'], season:[9,10],
  ing:[
    {n:'Gelbe Linsen oder rote Linsen, trocken',q:55,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:55,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:80,u:'g',c:'gemuese'},
    {n:'Blumenkohl',q:70,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:40,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Ingwer fein würfeln und in Öl 4 Minuten goldgelb braten, Kurkuma und Kreuzkümmel 1 Minute mitrösten.',
    'Reis und Linsen waschen, zugeben und 2 Minuten unter Rühren anrösten. Mit 450 ml Wasser aufgießen und zugedeckt 15 Minuten köcheln.',
    'Kürbiswürfel und Blumenkohlröschen zugeben und weitere 15 Minuten garen, Erbsen in den letzten 4 Minuten. Der Khichuri soll weich und eher trocken als suppig sein.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  kidName:'Linsen-Reis-Brei',
  kid:'Khichuri ist von Natur aus weich, Kürbis und Blumenkohl mit der Gabel zerdrücken. Ohne Salz und Chili servieren.',
  leftover:'Khichuri-Taler · 15 Min. – Reste mit einem Ei vermengen, zu Talern formen und in der Pfanne beidseitig vollständig durchbraten.',
  tipp:'An Regentagen wird Khichuri in Bangladesch gern mit einem Ei oder gebratenen Auberginenscheiben gegessen.'
},
{
  id:'bd-dal-bhat-bhorta', name:'Dal Bhat mit Aloo Bhorta · Linsen-Dal mit Reis und Kartoffelstampf', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'huelsen', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Drei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Tomaten','Babyspinat','Zwiebel'], season:[],
  ing:[
    {n:'Rote Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:120,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Kartoffeln schälen, würfeln und in Wasser 15 Minuten weich kochen.',
    'Linsen spülen und mit Kurkuma, Tomatenwürfeln und 350 ml Wasser 15 Minuten weich köcheln. Knoblauch in Scheiben in Öl goldgelb braten, zum Dal geben und den Spinat unterrühren.',
    'Kartoffeln abgießen und mit einem Schuss Öl grob zerstampfen.',
    'Kinderportion ungesalzen abnehmen. Für Erwachsene fein gewürfelte Zwiebel, Koriandergrün, Salz und nach Wunsch Chili unter den Bhorta mischen und den Dal salzen.'
  ],
  kidName:'Dal mit Kartoffelstampf',
  kid:'Dal dick und cremig servieren und den ungewürzten Kartoffelstampf daneben geben. Reis mit Dal vermischen, damit er weich ist.',
  leftover:'Dal-Suppe · 5 Min. – Dal-Reste mit etwas Wasser verlängern, vollständig aufkochen und mit dem Kartoffelstampf essen.',
  tipp:'Bhorta ist der Oberbegriff für gestampfte Beilagen, genauso gelingt er mit gerösteter Aubergine.'
},
{
  id:'bd-chotpoti', name:'Chotpoti · warmer Kichererbsen-Kartoffel-Topf mit Ei und Gurke', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'huelsen', base:'kartoffeln', time:{a:10,c:12}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Gurke','Tomaten','Rote Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kartoffeln, festkochend',q:120,u:'g',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Tamarindenpaste',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 1 cm kleine Würfel schneiden und mit dem Ei in Wasser 10 bis 12 Minuten kochen, bis die Kartoffeln weich sind und das Ei hart ist.',
    'Kichererbsen abspülen und mit Kreuzkümmel und 100 ml Wasser 8 Minuten köcheln, bis sie weich und leicht sämig sind. Ein Viertel davon zerdrücken und die Kartoffeln untermischen.',
    'Gurke, Tomaten und Zwiebel fein würfeln. Tamarindenpaste mit 2 EL Wasser verrühren und das Ei in Scheiben schneiden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Gemüsewürfeln, Ei, Tamarindensoße, Koriandergrün, Salz und nach Wunsch Chili anrichten.'
  ],
  kidName:'Kichererbsen-Kartoffel-Mus',
  kid:'Kichererbsen gründlich zerdrücken, Kartoffeln weich und das hart gekochte Ei in kleine Stücke schneiden. Gurke in dünne Stifte, ohne Tamarinde und Chili.',
  leftover:'Chotpoti-Wrap · 5 Min. – Reste vollständig erwärmen und mit Gurke in ein Vollkorn-Fladenbrot rollen.',
  tipp:'In Dhaka wird Chotpoti mit getrockneten gelben Erbsen gekocht, Kichererbsen aus der Dose sparen viel Zeit.'
},
{
  id:'bd-dimer-dalna', name:'Dimer Dalna · Eier-Kartoffel-Curry mit Tomaten, Erbsen und Basmatireis', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'ei', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Tomaten','Erbsen','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:80,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Garam Masala',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Basmatireis in der 1,5-fachen Menge Wasser 12 Minuten garen. Eier in einem zweiten Topf 9 Minuten hart kochen, abschrecken und schälen.',
    'Zwiebel, Ingwer und Tomaten fein würfeln und in Öl 4 Minuten schmoren, Kurkuma und Garam Masala 1 Minute mitrösten.',
    'Kartoffeln in 1 cm kleine Würfel schneiden, mit 150 ml Wasser zugeben und zugedeckt 7 Minuten weich köcheln. Erbsen und die leicht eingeritzten Eier 2 Minuten mitziehen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  kidName:'Mildes Eier-Curry',
  kid:'Hart gekochte Eier klein schneiden, Kartoffeln mit der Soße zerdrücken und Erbsen leicht quetschen. Ohne Salz und Chili mit Reis mischen.',
  leftover:'Eier-Curry-Brot · 5 Min. – Reste vollständig erhitzen und mit warmem Vollkorn-Fladenbrot essen.',
  tipp:'Die Eier leicht einritzen, dann nehmen sie die Soße besser auf.'
},
{
  id:'bd-chhanar-dalna', name:'Chhanar Dalna · Paneer-Würfel in milder Tomaten-Erbsen-Soße', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'milch', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Erbsen','Kartoffeln'], season:[7,8,9],
  ing:[
    {n:'Paneer',q:100,u:'g',c:'kuehl'},
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Kartoffeln, festkochend',q:60,u:'g',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Basmatireis in der 1,5-fachen Menge Wasser 12 Minuten garen. Paneer in 2 cm große Würfel schneiden, in Öl 3 Minuten rundum hellbraun braten und herausnehmen.',
    'Kartoffeln in 1 cm kleine Würfel schneiden und mit Ingwer, Kreuzkümmel und Kurkuma 2 Minuten im Bratfett anbraten. Tomatenwürfel und 150 ml Wasser zugeben und zugedeckt 7 Minuten köcheln.',
    'Erbsen und Paneer zugeben und 2 Minuten mitziehen lassen, bis die Kartoffeln weich sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  kidName:'Paneer mit Erbsen mild',
  kid:'Paneer in kleine, weiche Stücke schneiden, Erbsen leicht zerdrücken und Kartoffeln mit der Soße mischen. Ohne Salz und Chili servieren.',
  leftover:'Paneer-Wrap · 5 Min. – Reste vollständig erhitzen und in ein warmes Vollkorn-Fladenbrot rollen.',
  tipp:'Chhana ist frischer Käsebruch, Paneer aus dem Kühlregal ist der einfachste Ersatz.'
},
{
  id:'bd-ruti-bhaji-dim', name:'Ruti, Bhaji o Dim · Vollkorn-Fladenbrot mit Gemüsepfanne und Rührei', cuisine:'Bangladesch', flag:'🇧🇩',
  protein:'ei', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Weißkohl','Karotten','Erbsen','Zwiebel'], season:[],
  ing:[
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Weißkohl',q:60,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:40,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fladenbrot in der trockenen Pfanne 1 Minute je Seite erwärmen und in ein Tuch wickeln.',
    'Zwiebel würfeln, Karotten in feine Stifte und Kohl in feine Streifen schneiden. In der Hälfte des Öls mit Kurkuma und Kreuzkümmel 7 Minuten weich braten, Erbsen 2 Minuten mitgaren.',
    'Gemüse an den Rand schieben, restliches Öl zugeben und die verquirlten Eier unter Rühren vollständig stocken lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen und alles mit dem Fladenbrot essen.'
  ],
  kidName:'Fladenbrot mit Rührei',
  kid:'Rührei vollständig durchgaren und mit dem weichen Gemüse mischen, Erbsen leicht zerdrücken. Fladenbrot in weiche Streifen reißen.',
  leftover:'Gemüse-Omelett · 8 Min. – Gemüsereste mit einem weiteren Ei in der Pfanne vollständig stocken lassen.',
  tipp:'Ruti mit Bhaji und Ei ist in Bangladesch ein klassisches Frühstück, das auch abends satt macht.'
}
);
