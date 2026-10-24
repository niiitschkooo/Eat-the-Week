/* Grün geplant · Israel · Top 15 */
RECIPES.push(
{
  id:'il-sabich', name:'Sabich · Fladenbrot mit gebratener Aubergine, Ei, Hummus und Salat', cuisine:'Israel', flag:'🇮🇱',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei','gluten','sesam'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Aubergine','Tomaten','Gurke','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Aubergine',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Hummus',q:50,u:'g',c:'kuehl'},
    {n:'Tahini (Sesammus)',q:1,u:'EL',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Eier 10 Minuten hart kochen, abschrecken und pellen.',
    'Aubergine in 1 cm dicke Scheiben schneiden, dünn mit Öl bestreichen und in der Pfanne pro Seite 4 bis 5 Minuten weich und goldbraun braten.',
    'Tomaten und Gurke fein würfeln und mit gehackter Petersilie und etwas Zitronensaft mischen. Tahini mit restlichem Zitronensaft und 2 EL Wasser glatt rühren.',
    'Fladenbrot mit Hummus bestreichen, mit Aubergine, Eischeiben und Salat füllen und mit Tahini beträufeln. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz würzen.'
  ],
  kidName:'Sabich-Teller',
  kid:'Ei vollständig hart gekocht und klein geschnitten, Aubergine weich in Streifen, dazu Hummus und weiches Brot getrennt auf dem Teller anbieten.',
  leftover:'Sabich-Salat · 5 Min. – Übrige Aubergine und Ei klein schneiden und mit Salat und Tahini mischen.',
  tipp:'Klassisch gehört Amba dazu, eine würzige Mangosoße, die nur die Erwachsenen nehmen.'
},
{
  id:'il-hummus-masabacha', name:'Hummus Masabacha · warmer Hummus mit gebratenen Champignons und Fladenbrot', cuisine:'Israel', flag:'🇮🇱',
  protein:'huelsen', base:null, time:{a:10,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['sesam','gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Pilze','Zwiebel','Tomaten','Zitrone'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tahini (Sesammus)',q:1.5,u:'EL',c:'vorrat'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Champignons',q:120,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kichererbsen mit 3 EL Wasser 5 Minuten erhitzen. Die Hälfte mit Tahini, Zitronensaft, Knoblauch und etwas Kochwasser mit der Gabel zu einer cremigen Masse zerdrücken, den Rest ganz lassen.',
    'Champignons in Scheiben und Zwiebel in Streifen schneiden und in Öl 6 bis 8 Minuten goldbraun braten, mit Kreuzkümmel würzen.',
    'Warmen Hummus auf Teller streichen, ganze Kichererbsen und Pilze in die Mitte geben, Tomaten in Spalten schneiden und Fladenbrot dazureichen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Kreuzkümmel und einem Spritzer Olivenöl würzen.'
  ],
  kidName:'Hummus zum Tunken',
  kid:'Für das Kind nur den cremigen Teil nehmen und die ganzen Kichererbsen zerdrücken, Pilze klein schneiden und Brot in Streifen zum Tunken anbieten.',
  leftover:'Hummus-Toast · 5 Min. – Reste auf Vollkornbrot streichen und mit Tomate belegen.',
  tipp:'Mit dem Pürierstab wird der Hummus glatter, die grobe warme Variante heißt in Israel Masabacha.'
},
{
  id:'il-schnitzel', name:'Schnitzel · Hähnchenschnitzel mit Sesampanade aus dem Ofen, Kartoffeln und israelischem Salat', cuisine:'Israel', flag:'🇮🇱',
  protein:'gefluegel', base:'kartoffeln', time:{a:20,c:25}, devices:[['ofen','airfryer'],['topf']], method:'Backofen oder Airfryer + Topf',
  allergens:['gluten','ei','sesam'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Gurke','Kartoffeln','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Paniermehl',q:25,u:'g',c:'vorrat'},
    {n:'Sesam',q:2,u:'TL',c:'gewuerz',p:true},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in Stücke schneiden und in 15 bis 20 Minuten weich kochen. Ofen auf 220 °C vorheizen.',
    'Hähnchenbrust waagerecht halbieren und flach klopfen. Erst durch verquirltes Ei, dann durch Paniermehl mit Sesam und Paprikapulver ziehen.',
    'Schnitzel auf ein Blech mit Backpapier legen, mit Öl beträufeln und 15 bis 18 Minuten backen, nach der Hälfte wenden, bis sie innen nicht mehr rosa sind; im Airfryer 10 bis 12 Minuten bei 200 °C.',
    'Tomaten und Gurke sehr fein würfeln und mit Zitronensaft mischen. Kinderportion ungesalzen abnehmen, dann Erwachsene salzen.'
  ],
  kidName:'Mini-Schnitzel',
  kid:'Schnitzel in schmale Streifen schneiden, Kartoffeln leicht zerdrücken und Gurke in Stifte statt Würfel schneiden. Ohne Salz.',
  leftover:'Schnitzel-Pita · 5 Min. – Kalte Schnitzelstreifen mit Hummus und Salat ins Fladenbrot legen.',
  tipp:'Ein paar Tropfen Öl auf der Panade reichen im Ofen für eine knusprige Kruste.'
},
{
  id:'il-meorav', name:'Me\'orav Yerushalmi · Jerusalemer Hähnchenpfanne mit Zwiebeln und Tahini im Fladenbrot', cuisine:'Israel', flag:'🇮🇱',
  protein:'gefluegel', base:null, time:{a:10,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['gluten','sesam'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Zwiebel','Rote Paprika','Gurke','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Tahini (Sesammus)',q:1,u:'EL',c:'vorrat'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in kleine, dünne Stücke schneiden, Zwiebel und Paprika in Streifen.',
    'Öl in einer großen Pfanne stark erhitzen, Hähnchen 4 Minuten scharf anbraten, dann Zwiebeln und Paprika zugeben und weitere 6 bis 8 Minuten braten, bis das Fleisch durchgegart ist. Kurkuma und Kreuzkümmel in den letzten 2 Minuten zugeben.',
    'Tahini mit 2 bis 3 EL Wasser glatt rühren, Gurke und Tomaten würfeln und das Fladenbrot erwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene salzen und alles mit Tahini und Salat ins Fladenbrot füllen.'
  ],
  kidName:'Hähnchen-Zwiebel-Pita',
  kid:'Hähnchen fein schneiden, Zwiebeln und Paprika weich braten und klein schneiden, mit wenig Tahini und weichem Brot anbieten. Ohne Salz.',
  leftover:'Me\'orav-Reis · 8 Min. – Reste mit gekochtem Reis in der Pfanne vollständig erhitzen.',
  tipp:'Im Original kommen Hähnchenherzen und Leber dazu, die Variante mit Schenkelfleisch ist milder und kinderfreundlicher.'
},
{
  id:'il-chraime', name:'Chraime · Fisch in würziger Tomaten-Paprika-Soße mit Vollkornreis', cuisine:'Israel', flag:'🇮🇱',
  protein:'fisch', base:'reis', time:{a:12,c:30}, devices:[['topf'],['pfanne']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Paprika','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:2,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis aufsetzen und etwa 30 Minuten garen.',
    'Knoblauch und Paprika fein würfeln und in Öl 4 Minuten dünsten, Paprikapulver und Kümmel 30 Sekunden mitrösten, Tomaten und 50 ml Wasser zugeben und 8 Minuten köcheln.',
    'Fisch in große Stücke schneiden, in die Soße legen und zugedeckt 8 bis 10 Minuten sanft garen, bis er sich leicht zerpflücken lässt.',
    'Kinderportion ohne Chili und Salz abnehmen. Erwachsene mit Chiliflocken, Salz und gehacktem Koriander würzen und mit Reis servieren.'
  ],
  kidName:'Fisch in Paprikasoße',
  kid:'Fisch sorgfältig entgräten, zerpflücken und mit der milden Soße unter den Reis mischen.',
  leftover:'Fisch-Tomaten-Pasta · 10 Min. – Reste zerpflückt mit Vollkornnudeln vollständig erhitzen.',
  tipp:'Chraime wird in vielen israelischen Familien freitags zum Schabbat gekocht.'
},
{
  id:'il-ktzitzot-dag', name:'Ktzitzot dag · Fischfrikadellen aus dem Ofen mit Ofengemüse und Tahini-Zitronen-Soße', cuisine:'Israel', flag:'🇮🇱',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:25}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['fisch','ei','gluten','sesam'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Paniermehl',q:15,u:'g',c:'vorrat'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tahini (Sesammus)',q:1,u:'EL',c:'vorrat'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 210 °C vorheizen. Kartoffeln und Karotten in Spalten schneiden, mit der Hälfte des Öls mischen und 10 Minuten vorbacken.',
    'Fisch sehr fein hacken und mit Ei, Paniermehl, gehackter Petersilie und abgeriebener Zitronenschale verkneten, dann kleine flache Frikadellen formen.',
    'Frikadellen auf das Blech legen, mit restlichem Öl bestreichen und 15 Minuten backen, nach der Hälfte wenden, bis sie durchgegart sind.',
    'Tahini mit Zitronensaft und etwas Wasser glatt rühren, Gurke in Scheiben schneiden. Kinderportion ungesalzen abnehmen, dann Erwachsene salzen.'
  ],
  kidName:'Fisch-Bällchen',
  kid:'Fisch vor dem Hacken gründlich auf Gräten prüfen. Frikadellen halbieren, Kartoffeln und Karotten weich und mit wenig Tahini zum Tunken anbieten.',
  leftover:'Fisch-Pita · 5 Min. – Kalte Frikadellen mit Tahini und Gurke ins Fladenbrot legen.',
  tipp:'Ktzitzot werden in Israel oft in Tomatensoße geschmort, die Ofenvariante ist schneller.'
},
{
  id:'il-hamin', name:'Hamin · Schabbat-Eintopf mit Rind, Bohnen, Kartoffeln und Ei', cuisine:'Israel', flag:'🇮🇱',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:240}, devices:[['slowcooker','ofen']], method:'Slowcooker oder Backofen, ein Topf',
  allergens:['ei','gluten'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Perlgraupen',q:25,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in Spalten schneiden und im ofenfesten Topf oder im Slowcooker-Einsatz mit dem Fleisch in Öl 5 Minuten anbraten, Paprikapulver und Knoblauch kurz mitrösten.',
    'Kartoffeln und Karotten in große Stücke schneiden und mit Bohnen und Graupen zugeben. Die gewaschenen Eier in der Schale obenauf legen und alles knapp mit Wasser bedecken.',
    'Zugedeckt im Ofen bei 120 °C 4 Stunden oder im Slowcooker auf niedriger Stufe 8 Stunden garen, bis das Fleisch zerfällt.',
    'Eier pellen und halbieren. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Mini-Hamin',
  kid:'Fleisch fein zerzupfen, Kartoffeln und Bohnen zerdrücken und das vollständig durchgegarte Ei klein schneiden. Ohne Salz.',
  leftover:'Hamin-Eintopf · 10 Min. – Reste mit etwas Brühe verdünnen und vollständig aufkochen.',
  tipp:'Am Vorabend ansetzen, dann ist das Essen fertig, wenn alle nach Hause kommen.'
},
{
  id:'il-memulaim', name:'Memulaim · gefüllte Paprika mit Reis-Hack-Füllung in Tomatensoße', cuisine:'Israel', flag:'🇮🇱',
  protein:'fleisch', base:'reis', time:{a:20,c:45}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Tomaten','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rote Paprika',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Reis',q:40,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 190 °C vorheizen. Reis 10 Minuten in heißem Wasser einweichen. Paprika oben abschneiden und entkernen.',
    'Hack mit abgetropftem Reis, fein gewürfelter Zwiebel, gehackter Petersilie und Baharat mischen und locker in die Paprika füllen.',
    'Paprika aufrecht in eine Form setzen, passierte Tomaten mit 150 ml Wasser angießen, mit Öl beträufeln und zugedeckt 45 Minuten backen, bis Reis und Fleisch gar sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Joghurt servieren.'
  ],
  kidName:'Gefüllte Paprika-Stücke',
  kid:'Paprikahaut abziehen, wenn sie sich löst, alles in kleine Stücke schneiden und mit Füllung und Joghurt mischen. Ohne Salz.',
  leftover:'Paprika-Reis-Pfanne · 8 Min. – Reste klein schneiden und mit der Soße vollständig erhitzen.',
  tipp:'In Israel werden auch Zucchini, Zwiebeln und Auberginen so gefüllt, gemischte Formen sind beliebt.'
},
{
  id:'il-sofrito', name:'Sofrito · geschmortes Zitronen-Kurkuma-Hähnchen mit Kartoffeln', cuisine:'Israel', flag:'🇮🇱',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:45}, devices:[['topf']], method:'Ein Topf (Schmortopf)',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Zwiebel','Zitrone'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:2,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen im Schmortopf in Öl rundum 5 Minuten anbraten, Kurkuma, Paprikapulver und zerdrückten Knoblauch kurz mitrösten.',
    'Zwiebel in Spalten, Kartoffeln und Karotten in große Stücke schneiden und zugeben, Zitronensaft und 150 ml Wasser angießen.',
    'Zugedeckt bei kleiner Hitze 40 Minuten schmoren und zwischendurch wenden, bis Kartoffeln und Hähnchen weich und durchgegart sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und gehackter Petersilie würzen.'
  ],
  kidName:'Gelbes Hähnchen mit Kartoffeln',
  kid:'Hähnchen fein zerzupfen und die Kartoffeln mit etwas Schmorsaft zerdrücken. Karotten weich, ohne Salz.',
  leftover:'Hähnchen-Kartoffel-Pfanne · 10 Min. – Reste klein schneiden und in der Pfanne knusprig durchbraten.',
  tipp:'Klassisch werden die Kartoffeln vorher frittiert, kurz angebratene Kartoffeln reichen völlig.'
},
{
  id:'il-kubbeh', name:'Kubbeh Hamusta · säuerliche Gemüsesuppe mit Bulgur-Hack-Klößchen', cuisine:'Israel', flag:'🇮🇱',
  protein:'fleisch', base:'bulgur', time:{a:30,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','sellerie'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Mangold','Sellerie','Zwiebel','Zitrone'], season:[6,7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:80,u:'g',c:'fisch'},
    {n:'Bulgur',q:50,u:'g',c:'vorrat'},
    {n:'Weizenvollkornmehl',q:15,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Mangold',q:80,u:'g',c:'gemuese'},
    {n:'Staudensellerie',q:1,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Bulgur 10 Minuten in warmem Wasser einweichen, gut ausdrücken und mit Mehl und 2 EL Wasser zu einem formbaren Teig kneten.',
    'Hack mit einem Teil der fein gewürfelten Zwiebel mischen. Teig in walnussgroße Stücke teilen, flach drücken, je einen Teelöffel Hack daraufgeben und zu Klößchen verschließen.',
    'Restliche Zwiebel und Sellerie würfeln und im Topf in Öl 4 Minuten dünsten, Brühe angießen, Zucchiniwürfel und Mangoldstreifen zugeben und aufkochen.',
    'Klößchen einlegen und 15 bis 18 Minuten leise köcheln, bis sie oben schwimmen und das Fleisch durchgegart ist, dann mit Zitronensaft säuern.',
    'Kinderportion ungesalzen und mit wenig Zitrone abnehmen. Erwachsene mit Salz und mehr Zitrone abschmecken.'
  ],
  kidName:'Klößchen-Suppe',
  kid:'Klößchen für das Kind vierteln und etwas abkühlen lassen, Gemüse weich kochen. Ohne Salz und nur leicht säuerlich.',
  leftover:'Kubbeh mit Reis · 8 Min. – Reste vollständig aufkochen und über gekochten Reis geben.',
  tipp:'Die Klößchen lassen sich auf Vorrat formen und roh einfrieren.'
},
{
  id:'il-ptitim', name:'Ptitim · Israelischer Perlcouscous mit Zucchini, Kirschtomaten und Feta', cuisine:'Israel', flag:'🇮🇱',
  protein:'milch', base:'couscous', time:{a:8,c:12}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Zucchini','Kirschtomaten','Zwiebel','Babyspinat'], season:[6,7,8,9],
  ing:[
    {n:'Perlcouscous',q:75,u:'g',c:'vorrat'},
    {n:'Feta',q:60,u:'g',c:'kuehl'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kirschtomaten',q:100,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:30,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:180,u:'ml',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und im Topf in Öl 3 Minuten dünsten, Perlcouscous zugeben und 2 Minuten unter Rühren leicht rösten.',
    'Zucchini würfeln, mit Brühe und Thymian zugeben und zugedeckt 8 bis 10 Minuten garen, bis die Flüssigkeit aufgenommen ist.',
    'Kirschtomaten halbieren und mit dem Spinat unterheben, bis er zusammenfällt.',
    'Kinderportion mit nur wenig Feta und ohne Salz abnehmen. Erwachsene mit restlichem zerbröseltem Feta, Zitronensaft und Pfeffer servieren.'
  ],
  kidName:'Perlen-Pasta mit Gemüse',
  kid:'Kirschtomaten für das Kind vierteln, Zucchini weich garen und nur wenig Feta zugeben, da er salzig ist. Ptitim lassen sich gut mit dem Löffel essen.',
  leftover:'Ptitim-Salat · 5 Min. – Reste kalt mit Gurke und Zitrone mischen.',
  tipp:'Ptitim heißen hierzulande meist Perlcouscous oder israelischer Couscous.'
},
{
  id:'il-couscous', name:'Couscous marokkanisch · Vollkorn-Couscous mit Kürbis-Kichererbsen-Gemüse', cuisine:'Israel', flag:'🇮🇱',
  protein:'huelsen', base:'couscous', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf + Schüssel',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kürbis','Karotten','Zucchini','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Vollkorn-Couscous',q:70,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:120,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und im Topf in Öl 3 Minuten dünsten, Kurkuma und Zimt kurz mitrösten.',
    'Kürbis, Karotten und Zucchini in große Würfel schneiden, mit Kichererbsen und Brühe zugeben und 18 bis 20 Minuten köcheln, bis das Gemüse weich ist.',
    'Couscous in einer Schüssel mit der gleichen Menge kochender Brühe aus dem Topf übergießen, 5 Minuten zugedeckt quellen lassen und auflockern.',
    'Kinderportion ungesalzen abnehmen und die Kichererbsen zerdrücken. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Couscous mit Gemüse',
  kid:'Gemüse für das Kind sehr weich garen und klein schneiden, Kichererbsen zerdrücken und mit etwas Brühe unter den Couscous mischen. Ohne Salz.',
  leftover:'Couscous-Pfanne · 8 Min. – Reste mit einem Ei in der Pfanne durchbraten.',
  tipp:'In marokkanisch-jüdischen Familien wird die Brühe separat gereicht, damit jeder seinen Couscous selbst befeuchtet.'
},
{
  id:'il-latkes', name:'Latkes · Kartoffel-Zucchini-Puffer aus dem Ofen mit Dill-Joghurt', cuisine:'Israel', flag:'🇮🇱',
  protein:'ei', base:'kartoffeln', time:{a:20,c:25}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['ei','milch','gluten'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Zucchini','Zwiebel','Gurke','Apfel'], season:[],
  ing:[
    {n:'Kartoffeln, mehlig',q:220,u:'g',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Weizenvollkornmehl',q:15,u:'g',c:'vorrat'},
    {n:'Griechischer Joghurt',q:120,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln, Zucchini und Zwiebel grob raspeln und in einem Tuch kräftig ausdrücken.',
    'Mit Ei und Mehl mischen, kleine flache Häufchen auf ein Blech mit geöltem Backpapier setzen und dünn mit Öl bepinseln.',
    'Etwa 25 Minuten backen und nach 15 Minuten wenden, bis die Puffer beidseitig goldbraun und durchgegart sind.',
    'Joghurt mit Dill und geraspelter Gurke verrühren, Apfel in dünne Spalten schneiden. Kinderportion ungesalzen abnehmen, dann Erwachsene salzen.'
  ],
  kidName:'Mini-Latkes',
  kid:'Puffer dünn und weich backen, in Streifen schneiden und mit Dill-Joghurt servieren. Apfel für das Kind fein reiben statt in Spalten.',
  leftover:'Latkes-Toast · 5 Min. – Puffer im Ofen aufbacken und mit Joghurt belegen.',
  tipp:'Latkes gehören in Israel zu Chanukka, aus dem Ofen brauchen sie nur einen Bruchteil des Öls.'
},
{
  id:'il-pashtida', name:'Pashtida · Zucchini-Käse-Auflauf mit Ei, Tomaten und Vollkornbrot', cuisine:'Israel', flag:'🇮🇱',
  protein:'milch', base:null, time:{a:15,c:35}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['ei','milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Frühlingszwiebel','Tomaten','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Hüttenkäse',q:100,u:'g',c:'kuehl'},
    {n:'Feta',q:30,u:'g',c:'kuehl'},
    {n:'Zucchini',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Weizenvollkornmehl',q:15,u:'g',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Zucchini grob raspeln und kräftig ausdrücken, Frühlingszwiebel in Ringe schneiden.',
    'Eier mit Hüttenkäse, Mehl und Dill verquirlen, Zucchini, Frühlingszwiebel und zerbröselten Feta unterheben.',
    'Masse in eine geölte kleine Form füllen und 30 bis 35 Minuten backen, bis die Mitte fest und goldbraun ist.',
    'Tomaten in Scheiben schneiden. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Pfeffer würzen und mit Brot servieren.'
  ],
  kidName:'Zucchini-Auflauf-Würfel',
  kid:'Auflauf vollständig durchbacken, etwas abkühlen lassen und in kleine Würfel schneiden. Durch den Feta ist er schon leicht salzig, daher nichts nachsalzen.',
  leftover:'Pashtida-Lunchbox · 2 Min. – Kalte Stücke mit Tomaten und Gurke einpacken.',
  tipp:'Pashtida gelingt auch mit Spinat, Brokkoli oder Kürbis statt Zucchini.'
},
{
  id:'il-kruvit', name:'Kruvit · Ofenblumenkohl mit Tahini auf Kräuter-Linsen-Bulgur', cuisine:'Israel', flag:'🇮🇱',
  protein:'huelsen', base:'bulgur', time:{a:15,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['sesam','gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Blumenkohl','Kräuter','Rote Zwiebel','Zitrone'], season:[6,7,8,9,10],
  ing:[
    {n:'Blumenkohl',q:250,u:'g',c:'gemuese'},
    {n:'Berglinsen oder Tellerlinsen, trocken',q:50,u:'g',c:'vorrat'},
    {n:'Bulgur',q:40,u:'g',c:'vorrat'},
    {n:'Tahini (Sesammus)',q:1,u:'EL',c:'vorrat'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Granatapfel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Blumenkohl in große Röschen oder dicke Scheiben schneiden, mit Öl und Kreuzkümmel mischen und 25 bis 30 Minuten rösten, bis er weich und an den Rändern gebräunt ist.',
    'Linsen in reichlich Wasser 20 Minuten garen, in den letzten 10 Minuten den Bulgur zugeben und dann abgießen.',
    'Tahini mit dem halben Zitronensaft und 2 bis 3 EL Wasser glatt rühren. Linsen-Bulgur mit gehackter Petersilie, fein gewürfelter roter Zwiebel und restlichem Zitronensaft mischen.',
    'Blumenkohl auf den Linsen anrichten, mit Tahini beträufeln und mit Granatapfelkernen bestreuen. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Blumenkohl mit Linsen',
  kid:'Blumenkohl besonders weich rösten und klein schneiden, Linsen leicht zerdrücken. Für das Kind rohe Zwiebel weglassen und Granatapfelkerne zerdrücken.',
  leftover:'Linsen-Blumenkohl-Salat · 5 Min. – Reste kalt mit Tahini und Gurke mischen.',
  tipp:'Ganz im Ofen gerösteter Blumenkohl mit Tahini ist in Tel Aviv ein bekanntes Restaurantgericht.'
}
);
