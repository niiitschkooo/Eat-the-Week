/* Grün geplant · Jordanien · Top 15 */
RECIPES.push(
{
  id:'jo-mansaf', name:'Mansaf · Lamm in warmer Joghurtsoße auf Kurkuma-Reis', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'fleisch', base:'reis', time:{a:20,c:70}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Gurke','Tomaten','Kräuter'], season:[],
  ing:[
    {n:'Lammkeule, mager, gewürfelt',q:110,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Griechischer Joghurt',q:150,u:'g',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Lammwürfel mit halbierter Zwiebel und Lorbeerblatt in Wasser aufkochen, Schaum abschöpfen und zugedeckt 60 Minuten weich köcheln.',
    'Reis mit Kurkuma in der doppelten Menge Wasser aufkochen und zugedeckt 15 Minuten garen.',
    'Joghurt mit Speisestärke glatt rühren, mit 150 ml Lammbrühe verrühren und unter ständigem Rühren in eine Richtung langsam erhitzen, ohne dass es kocht. Das Fleisch hineingeben und 5 Minuten ziehen lassen.',
    'Gurke und Tomaten würfeln. Kinderportion ungesalzen abnehmen, dann Erwachsene salzen, Reis mit Fleisch und Soße anrichten und mit Petersilie bestreuen.'
  ],
  kidName:'Joghurt-Lamm mit Reis',
  kid:'Lammfleisch fein zerzupfen und mit Reis und der milden Joghurtsoße mischen. Gurke in Stifte schneiden, ohne Salz.',
  leftover:'Mansaf-Wrap · 5 Min. – Reste vollständig erhitzen und mit Salat ins Fladenbrot füllen.',
  tipp:'Original-Jameed ist getrockneter, salziger Joghurt, mit Joghurt und Stärke bleibt die Soße milder und gelingt sicher.'
},
{
  id:'jo-maqluba', name:'Maqluba · gestürzter Reis mit Hähnchen, Blumenkohl und Aubergine', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'gefluegel', base:'reis', time:{a:25,c:45}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Blumenkohl','Aubergine','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:120,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Blumenkohl',q:120,u:'g',c:'gemuese'},
    {n:'Aubergine',q:0.3,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Blumenkohl in Röschen und Aubergine in Scheiben schneiden, mit der Hälfte des Öls mischen und auf dem Blech 20 Minuten rösten statt frittieren.',
    'Hähnchen würfeln, mit gewürfelter Zwiebel im Topf im restlichen Öl 5 Minuten anbraten, mit Baharat würzen und herausnehmen.',
    'Tomatenscheiben auf den Topfboden legen, darauf Hähnchen und geröstetes Gemüse schichten und den gewaschenen Reis darüber verteilen. Mit heißer Brühe knapp bedecken und zugedeckt bei kleiner Hitze 20 bis 25 Minuten garen.',
    'Topf 5 Minuten ruhen lassen, eine große Platte auflegen und stürzen. Kinderportion ungesalzen abnehmen, dann Erwachsene salzen und mit Joghurt servieren.'
  ],
  kidName:'Gestürzter Reis',
  kid:'Hähnchen und Gemüse für das Kind klein schneiden und mit Reis und Joghurt mischen, die Aubergine sehr weich. Ohne Salz.',
  leftover:'Maqluba-Pfanne · 8 Min. – Reste mit etwas Wasser in der Pfanne vollständig erhitzen.',
  tipp:'Vor dem Stürzen den Topf kurz auf die Arbeitsfläche klopfen, dann löst sich der Reis besser.'
},
{
  id:'jo-musakhan', name:'Musakhan · Sumach-Hähnchen mit Schmorzwiebeln auf Vollkorn-Fladenbrot', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'gefluegel', base:null, time:{a:15,c:35}, devices:[['ofen'],['pfanne']], method:'Pfanne + Backofen',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Gurke','Tomaten','Zitrone'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Sumach',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Hähnchen mit der Hälfte des Öls, Baharat, Zitronensaft und der Hälfte des Sumachs mischen und 25 bis 30 Minuten backen, bis es durchgegart ist.',
    'Zwiebeln in feine Halbringe schneiden und im restlichen Öl bei mittlerer Hitze 15 Minuten weich und goldgelb schmoren, restlichen Sumach unterrühren.',
    'Fladenbrot mit den Zwiebeln belegen, das zerzupfte Hähnchen darauf verteilen und 5 Minuten im Ofen knusprig backen. Gurke und Tomaten würfeln.',
    'Kinderportion ungesalzen abnehmen. Erwachsene salzen und mit Joghurt und Salat servieren.'
  ],
  kidName:'Zwiebel-Hähnchen-Fladen',
  kid:'Fladen in schmale Streifen schneiden, Hähnchen fein zerzupfen und die Zwiebeln sehr weich schmoren. Ohne Salz, mit Joghurt zum Tunken.',
  leftover:'Musakhan-Rollen · 10 Min. – Reste in dünnes Fladenbrot rollen und kurz im Ofen knusprig backen.',
  tipp:'Sumach schmeckt zitronig und ist nicht scharf, daher auch für Kinder gut geeignet.'
},
{
  id:'jo-zarb', name:'Zarb · Beduinen-Schmorgericht mit Hähnchen, Kartoffeln und Gemüse aus dem Bräter', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:55}, devices:[['ofen']], method:'Backofen, ein Bräter',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Zucchini','Zwiebel','Rote Paprika'], season:[6,7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 190 °C vorheizen. Hähnchen mit Öl, Baharat, Kurkuma und zerdrücktem Knoblauch mischen.',
    'Kartoffeln, Karotten, Zucchini, Zwiebel und Paprika in große Stücke schneiden und mit dem Hähnchen in einen Bräter geben, 100 ml Wasser angießen.',
    'Fest mit Deckel oder Alufolie verschließen und 45 Minuten garen, dann offen 10 Minuten bräunen, bis das Hähnchen durchgegart und das Gemüse weich ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Ofen-Hähnchen mit Gemüse',
  kid:'Hähnchen fein zerzupfen, Kartoffeln und Karotten weich garen und klein schneiden oder zerdrücken. Ohne Salz.',
  leftover:'Zarb-Pfanne · 10 Min. – Reste klein schneiden und mit einem Ei in der Pfanne durchbraten.',
  tipp:'Im Original garen Fleisch und Gemüse stundenlang in einem Erdofen, der geschlossene Bräter ahmt das saftige Ergebnis nach.'
},
{
  id:'jo-kofta-tahini', name:'Kofta bil tahini · Hackfleisch-Kartoffel-Blech mit Tahinisoße', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:40}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['sesam'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Tomaten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tahini (Sesammus)',q:1.5,u:'EL',c:'vorrat'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in Scheiben schneiden, mit Öl mischen und in einer Form 15 Minuten vorbacken.',
    'Hack mit fein gehackter Zwiebel, der Hälfte der Petersilie und Baharat verkneten, zu kleinen Fingern formen und zwischen die Kartoffeln legen, 10 Minuten backen.',
    'Tahini mit Zitronensaft, zerdrücktem Knoblauch und 100 ml Wasser glatt rühren. Tomatenscheiben dazulegen, Tahinisoße darübergießen und 15 Minuten backen, bis die Soße leicht gebräunt und das Fleisch durchgegart ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und restlicher Petersilie würzen.'
  ],
  kidName:'Kofta-Würfel mit Kartoffeln',
  kid:'Kofta in kleine Würfel schneiden und die Kartoffeln mit der milden Tahinisoße zerdrücken. Ohne Salz.',
  leftover:'Kofta-Pita · 5 Min. – Reste aufwärmen und mit Salat ins Fladenbrot füllen.',
  tipp:'Wird die Tahinisoße zu dick, einfach etwas Wasser einrühren, sie dickt im Ofen nach.'
},
{
  id:'jo-bamia', name:'Bamia · Okra-Tomaten-Schmortopf mit Rind und Vollkornreis', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'fleisch', base:'reis', time:{a:15,c:60}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Okra','Tomaten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Okra (TK)',q:150,u:'g',c:'tk'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:200,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:2,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch in kleine Würfel schneiden und mit gewürfelter Zwiebel im Topf in Öl 5 Minuten anbraten, Baharat kurz mitrösten.',
    'Passierte Tomaten und 200 ml Wasser angießen und zugedeckt 40 Minuten schmoren. Inzwischen Vollkornreis in einem zweiten Topf etwa 30 Minuten garen.',
    'Okra zugeben und weitere 15 Minuten köcheln, bis Fleisch und Okra weich sind. Gehackten Knoblauch und Koriander in den letzten 2 Minuten unterrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Zitronensaft abschmecken und mit Reis servieren.'
  ],
  kidName:'Okra-Rind-Topf mit Reis',
  kid:'Fleisch sehr fein schneiden oder zerzupfen, Okra in kleine Scheiben schneiden und mit Reis und Soße mischen. Ohne Salz.',
  leftover:'Bamia-Reis-Pfanne · 8 Min. – Reste mit Reis in der Pfanne vollständig erhitzen.',
  tipp:'Kleine tiefgekühlte Okraschoten aus dem arabischen oder türkischen Supermarkt bleiben fest und werden kaum schleimig.'
},
{
  id:'jo-samak-tahini', name:'Samak bi tahina · Ofenfisch auf Schmorzwiebeln mit Tahini-Zitronen-Soße', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'fisch', base:null, time:{a:15,c:30}, devices:[['ofen'],['pfanne']], method:'Pfanne + Backofen',
  allergens:['fisch','sesam','gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Tomaten','Kräuter','Zitrone'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tahini (Sesammus)',q:1.5,u:'EL',c:'vorrat'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Zwiebeln in Halbringe schneiden und in Öl 12 Minuten weich und goldbraun schmoren, mit Kreuzkümmel würzen.',
    'Zwiebeln in eine Auflaufform geben, Fisch darauflegen, mit etwas Zitronensaft beträufeln und 10 Minuten backen.',
    'Tahini mit restlichem Zitronensaft, zerdrücktem Knoblauch und 4 bis 5 EL Wasser zu einer cremigen Soße rühren, über den Fisch gießen und weitere 8 bis 10 Minuten backen, bis der Fisch durchgegart ist.',
    'Tomaten würfeln und Fladenbrot erwärmen. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz, Pfeffer und gehackter Petersilie würzen.'
  ],
  kidName:'Fisch mit Tahinisoße',
  kid:'Fisch sorgfältig entgräten und zerpflücken, mit der milden Tahinisoße und den weichen Zwiebeln mischen und weiches Brot dazureichen.',
  leftover:'Fisch-Tahini-Pita · 5 Min. – Reste kurz erwärmen und mit Tomaten ins Fladenbrot füllen.',
  tipp:'Die Zubereitung ist auch als Tajen bekannt und wird in Jordanien mit Brot oder Reis gegessen.'
},
{
  id:'jo-bulti', name:'Bulti · gebratenes Fischfilet mit Sumach auf Kräuter-Bulgur', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'fisch', base:'bulgur', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Gurke','Frühlingszwiebel','Kräuter','Zitrone'], season:[6,7,8,9],
  ing:[
    {n:'Tilapia- oder Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Bulgur',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Sumach',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Bulgur mit der 1,5-fachen Menge kochendem Wasser übergießen und zugedeckt 12 Minuten quellen lassen.',
    'Fisch mit Sumach und Kreuzkümmel bestreuen und in der Pfanne in Öl pro Seite 3 bis 4 Minuten braten, bis er sich leicht zerpflücken lässt.',
    'Tomaten, Gurke und Frühlingszwiebel klein würfeln und mit gehackter Petersilie und Zitronensaft unter den Bulgur mischen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Zitronenspalten servieren.'
  ],
  kidName:'Fisch mit Bulgur',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, Gurke und Tomate fein würfeln und die rohe Frühlingszwiebel für das Kind weglassen. Ohne Salz.',
  leftover:'Bulgur-Fisch-Lunchbox · 5 Min. – Reste kalt mit zerpflücktem Fisch und Joghurt einpacken.',
  tipp:'Bulti heißt in Jordanien der Buntbarsch aus dem Jordantal, Tilapia aus dem Supermarkt ist derselbe Fisch.'
},
{
  id:'jo-ful', name:'Ful medames · warme Saubohnen mit Zitrone, Knoblauch und Fladenbrot', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'huelsen', base:null, time:{a:8,c:10}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke','Frühlingszwiebel','Kräuter','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Saubohnen (Ful, Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 250 g abgetropft'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Bohnen mit 4 EL Wasser und Kreuzkümmel im Topf 8 bis 10 Minuten erhitzen und mit der Gabel grob zerdrücken.',
    'Knoblauch fein reiben und mit Zitronensaft und Olivenöl unter die Bohnen rühren.',
    'Tomaten, Gurke und Frühlingszwiebel würfeln, Petersilie hacken und Fladenbrot erwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Kreuzkümmel würzen und mit Gemüse und Petersilie bestreut servieren.'
  ],
  kidName:'Bohnenmus mit Brot',
  kid:'Bohnen für das Kind fein zerdrücken, damit die Schalen nicht stören, und mit weichen Brotstreifen zum Tunken anbieten. Ohne Salz.',
  leftover:'Ful-Toast · 5 Min. – Reste auf Vollkornbrot streichen und mit Tomaten belegen.',
  tipp:'Bei bekanntem G6PD-Mangel (Favismus) keine Saubohnen verwenden, dann passen Kichererbsen.'
},
{
  id:'jo-shorbat-adas', name:'Shorbat adas · sämige Rote-Linsen-Suppe mit Kreuzkümmel, Zitrone und Brotchips', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'huelsen', base:null, time:{a:10,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Zwiebel','Kartoffeln','Zitrone'], season:[],
  ing:[
    {n:'Rote Linsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:80,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:450,u:'ml',c:'vorrat'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotten und Kartoffel würfeln und im Topf in Öl mit Kreuzkümmel und Kurkuma 4 Minuten dünsten.',
    'Linsen waschen, mit der Brühe zugeben und 18 bis 20 Minuten köcheln, bis alles zerfällt, dann mit dem Schneebesen glatt rühren oder pürieren.',
    'Fladenbrot in Stücke schneiden und in einer trockenen Pfanne 4 Minuten knusprig rösten.',
    'Kinderportion ohne Zitrone und Salz abnehmen. Erwachsene mit Salz, Zitronensaft und Kreuzkümmel würzen und mit Brotchips servieren.'
  ],
  kidName:'Linsensuppe mit Brot',
  kid:'Suppe für das Kind lauwarm und etwas dicker servieren, statt Brotchips weiche Brotstreifen zum Eintunken. Ohne Salz.',
  leftover:'Linsensoße · 8 Min. – Reste dick einkochen und als Soße über Vollkornnudeln geben.',
  tipp:'In Jordanien gehört die Suppe im Ramadan zum Fastenbrechen, ein Spritzer Zitrone ist Pflicht.'
},
{
  id:'jo-rashoof', name:'Rashoof · Linsen-Bulgur-Eintopf mit Kichererbsen und Joghurt', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'huelsen', base:'bulgur', time:{a:12,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Zwiebel','Karotten','Spinat'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:40,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Bulgur',q:40,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:120,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotten würfeln und im Topf in Öl 5 Minuten dünsten, Knoblauch und Kreuzkümmel 1 Minute mitrösten.',
    'Linsen mit 500 ml Wasser zugeben und 15 Minuten köcheln, dann Bulgur und Kichererbsen zugeben und 12 Minuten weitergaren, bis alles weich und sämig ist.',
    'Spinat unterrühren. Topf vom Herd nehmen, Joghurt mit etwas heißer Flüssigkeit glatt rühren und unterziehen, nicht mehr kochen lassen.',
    'Kinderportion ungesalzen abnehmen und die Kichererbsen zerdrücken. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Linsen-Joghurt-Topf',
  kid:'Kichererbsen und Linsen für das Kind zerdrücken und den Eintopf lauwarm und dick servieren. Ohne Salz.',
  leftover:'Rashoof vom Vortag · 5 Min. – Reste mit etwas Wasser langsam erwärmen, ohne dass der Joghurt kocht.',
  tipp:'Traditionell kommt Jameed hinein, ein getrockneter Joghurt, Naturjoghurt ist milder und weniger salzig.'
},
{
  id:'jo-galayet-bandora', name:'Galayet bandora · geschmorte Knoblauch-Tomaten mit Halloumi und Fladenbrot', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'milch', base:null, time:{a:8,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['milch','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Tomaten',q:3,u:'Stk.',c:'gemuese'},
    {n:'Halloumi',q:70,u:'g',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:2,u:'Zehe',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Knoblauch in Scheiben und Zwiebel in feine Würfel schneiden und in Öl 2 Minuten anschwitzen.',
    'Tomaten in Spalten schneiden, zugeben und bei mittlerer Hitze 8 bis 10 Minuten schmoren, bis sie weich sind und Saft ziehen.',
    'Halloumi in Scheiben schneiden, an den Pfannenrand legen und pro Seite 2 Minuten goldbraun mitbraten. Fladenbrot erwärmen.',
    'Kinderportion ohne Chili abnehmen. Erwachsene mit Chiliflocken und gehackter Petersilie bestreuen, nicht salzen, da der Halloumi salzig ist.'
  ],
  kidName:'Tomaten-Tunke mit Brot',
  kid:'Halloumi ist sehr salzig, für das Kind nur ein kleines Stück klein geschnitten. Weiche Tomaten mit Brot zum Tunken, ohne Chili.',
  leftover:'Tomaten-Nudeln · 10 Min. – Reste als Soße unter Vollkornnudeln mischen.',
  tipp:'Galayet bandora wird in Jordanien gern direkt aus der Pfanne mit Brot gegessen.'
},
{
  id:'jo-mfarakeh', name:'Mfarakeh · Kartoffel-Ei-Pfanne mit Zwiebeln und Kreuzkümmel', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'ei', base:'kartoffeln', time:{a:8,c:16}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Tomaten','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 1 cm kleine Würfel schneiden und in Öl zugedeckt bei mittlerer Hitze 10 Minuten braten, dabei mehrmals wenden.',
    'Zwiebel würfeln, zugeben und offen 4 Minuten weiterbraten, bis die Kartoffeln weich und goldbraun sind, Kreuzkümmel unterrühren.',
    'Eier verquirlen, darübergießen und unter Rühren 2 bis 3 Minuten stocken lassen, bis kein flüssiges Ei mehr zu sehen ist.',
    'Tomaten und Gurke würfeln. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz, Pfeffer und Petersilie würzen.'
  ],
  kidName:'Kartoffel-Rührei',
  kid:'Rührei vollständig stocken lassen und Kartoffelwürfel bei Bedarf zerdrücken. Tomaten und Gurke in kleine Stücke schneiden, ohne Salz.',
  leftover:'Mfarakeh-Wrap · 5 Min. – Reste aufwärmen und mit Tomaten ins Fladenbrot rollen.',
  tipp:'Gekochte Kartoffeln vom Vortag verkürzen die Bratzeit auf 5 Minuten.'
},
{
  id:'jo-falafel', name:'Falafel · Ofen-Falafel im Fladenbrot mit Tahini, Tomaten und Gurke', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'huelsen', base:null, time:{a:20,c:20}, devices:[['ofen','airfryer']], method:'Backofen oder Airfryer',
  allergens:['gluten','sesam'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Tomaten','Gurke','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Haferflocken, zart',q:20,u:'g',c:'vorrat'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Tahini (Sesammus)',q:1,u:'EL',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 210 °C vorheizen. Kichererbsen gut abtropfen und trocken tupfen, mit Haferflocken, Petersilie, Knoblauch, Kreuzkümmel und 1 TL Öl mit dem Pürierstab oder der Gabel zu einer groben, formbaren Masse verarbeiten.',
    'Kleine flache Bällchen formen, auf ein Blech mit Backpapier setzen, mit restlichem Öl bepinseln und 18 bis 20 Minuten backen, nach der Hälfte wenden; im Airfryer 12 Minuten bei 190 °C.',
    'Tahini mit 2 bis 3 EL Wasser glatt rühren, Tomaten und Gurke würfeln und das Fladenbrot erwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene salzen und die Falafel mit Salat und Tahini ins Fladenbrot füllen.'
  ],
  kidName:'Mini-Falafel',
  kid:'Falafel für das Kind flach und weich backen, halbieren und mit Tahini zum Tunken anbieten, Tomaten und Gurke klein würfeln. Ohne Salz.',
  leftover:'Falafel-Bowl · 5 Min. – Reste mit Bulgur oder Reis, Salat und Tahini als Schale anrichten.',
  tipp:'Je trockener die Kichererbsen, desto besser halten die Falafel, notfalls einen Löffel Haferflocken mehr nehmen.'
},
{
  id:'jo-maftoul', name:'Maftoul · Perlcouscous mit Kürbis, Kichererbsen und Tomaten', cuisine:'Jordanien', flag:'🇯🇴',
  protein:'huelsen', base:'couscous', time:{a:15,c:20}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Kürbis','Zwiebel','Tomaten'], season:[9,10,11],
  ing:[
    {n:'Perlcouscous',q:70,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:120,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Hokkaido-Kürbis',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und im Topf in Öl 3 Minuten dünsten, Perlcouscous zugeben und 2 Minuten leicht anrösten.',
    'Kürbis in 2 cm große Würfel schneiden und mit Kurkuma und Kreuzkümmel zugeben.',
    'Tomaten, Kichererbsen und Brühe angießen und zugedeckt 12 bis 15 Minuten köcheln, bis Kürbis und Couscous weich sind und die Flüssigkeit aufgenommen ist.',
    'Kinderportion ungesalzen abnehmen und die Kichererbsen zerdrücken. Erwachsene mit Salz und Pfeffer würzen und mit Joghurt servieren.'
  ],
  kidName:'Kürbis-Perlcouscous',
  kid:'Kürbis sehr weich garen und mit den Kichererbsen leicht zerdrücken, dann mit einem Klecks Joghurt mischen. Ohne Salz.',
  leftover:'Maftoul-Salat · 5 Min. – Reste kalt mit Petersilie und Zitrone mischen.',
  tipp:'Echtes Maftoul wird aus Bulgur und Mehl von Hand gerollt, Perlcouscous ist die schnelle Alternative.'
}
);
