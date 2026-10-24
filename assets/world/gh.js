/* Grün geplant · Ghana · Top 15 */
RECIPES.push(
{
  id:'gh-jollof', name:'Ghana Jollof · Ingwer-Tomaten-Reis mit Rindfleisch und Erbsen', cuisine:'Ghana', flag:'🇬🇭',
  protein:'fleisch', base:'reis', time:{a:15,c:40}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Tomaten','Zwiebel','Karotten','Erbsen'], season:[],
  ing:[
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Rindfleisch, dünne Streifen',q:100,u:'g',c:'fisch'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel, Ingwer und Knoblauch fein reiben oder pürieren. Rindfleischstreifen im Topf in Öl 3 Minuten anbraten.',
    'Zwiebel-Ingwer-Paste 3 Minuten mitbraten, dann passierte Tomaten einrühren und offen 8 Minuten einkochen.',
    'Gewaschenen Reis, gewürfelte Karotte und 180 ml Wasser zugeben, aufkochen und zugedeckt bei kleiner Hitze 30 Minuten garen. Erbsen in den letzten 5 Minuten unterheben.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Milder Ingwer-Reis',
  kid:'Rindfleisch sehr klein schneiden, Erbsen leicht andrücken und alles mit dem weichen Reis mischen. Ohne Salz und Chili.',
  leftover:'Jollof-Pfanne · 10 Min. – Reste mit einem Schuss Wasser und etwas Spinat in der Pfanne vollständig durcherhitzen.',
  tipp:'In Ghana wird Jollof mit Duftreis gekocht, Vollkornreis bringt mehr Ballaststoffe und braucht etwas länger.'
},
{
  id:'gh-waakye', name:'Waakye · Reis mit Augenbohnen, Tomatensoße, Spinat und Ei', cuisine:'Ghana', flag:'🇬🇭',
  protein:'huelsen', base:'reis', time:{a:15,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Zwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Augenbohnen (Dose, abgetropft)',q:120,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Tomaten, gehackt (Dose)',q:120,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis waschen und mit 160 ml Wasser 30 Minuten garen. Abgespülte Bohnen in den letzten 5 Minuten unterheben.',
    'Zwiebel und Ingwer fein würfeln, in Öl 4 Minuten dünsten, Tomaten zugeben und 12 Minuten zu einer dicken Soße einkochen.',
    'Eier 10 Minuten hart kochen und schälen. Spinat in die Soße geben und zusammenfallen lassen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene Soße mit Salz und nach Wunsch Chiliflocken würzen und mit Reis, Bohnen und halbiertem Ei anrichten.'
  ],
  kidName:'Bohnenreis mit Ei',
  kid:'Bohnen mit der Gabel zerdrücken und unter den Reis mischen, das hart gekochte Ei fein hacken. Soße ohne Salz und Chili dazu.',
  leftover:'Waakye-Pfanne · 10 Min. – Reis und Bohnen mit etwas Soße in der Pfanne vollständig durcherhitzen.',
  tipp:'Die typische rotbraune Farbe kommt von getrockneten Hirseblättern aus dem Afroshop, die mitgekocht und dann entfernt werden.'
},
{
  id:'gh-red-red', name:'Red Red · Augenbohnen-Tomaten-Eintopf mit gebratener Kochbanane', cuisine:'Ghana', flag:'🇬🇭',
  protein:'huelsen', base:null, time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Kochbanane'], season:[],
  ing:[
    {n:'Augenbohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kochbanane',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel und Paprika fein würfeln und mit geriebenem Ingwer in der Hälfte des Öls 4 Minuten dünsten, Paprikapulver kurz mitrösten.',
    'Tomaten und abgespülte Bohnen zugeben und 10 Minuten köcheln, einen Teil der Bohnen am Topfrand zerdrücken.',
    'Kochbanane schälen, schräg in 1 cm dicke Scheiben schneiden und im restlichen Öl in einer beschichteten Pfanne je Seite 3 bis 4 Minuten goldbraun braten.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Bohnenmus mit Kochbanane',
  kid:'Bohnen gründlich zerdrücken und die weiche Kochbanane in Streifen anbieten. Ohne Salz und Chili.',
  leftover:'Bohnen-Wrap · 5 Min. – Restliche Bohnen vollständig erhitzen und mit Salat in eine Tortilla rollen.',
  tipp:'Der Name kommt vom roten Palmöl und der roten Soße, edelsüßes Paprikapulver bringt die Farbe mit weniger Fett.'
},
{
  id:'gh-nkatenkwan', name:'Nkatenkwan · Erdnusssuppe mit Hähnchen und Reisbällchen (Omo Tuo)', cuisine:'Ghana', flag:'🇬🇭',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['nuesse'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Aubergine'], season:[],
  ing:[
    {n:'Rundkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Erdnussmus, ungesüßt',q:1.5,u:'EL',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Aubergine',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis mit 200 ml Wasser 20 Minuten sehr weich kochen und kräftig mit dem Kochlöffel zu einer klebrigen Masse rühren.',
    'Hähnchen würfeln, Zwiebel, Tomaten und Aubergine grob schneiden. Alles mit geriebenem Ingwer und Brühe aufkochen und 15 Minuten köcheln.',
    'Gemüse herausnehmen, fein pürieren und zurückgeben. Erdnussmus mit etwas heißer Brühe glatt rühren, einrühren und 10 Minuten leise köcheln, bis die Suppe sämig und das Hähnchen durchgegart ist.',
    'Reismasse mit nassen Händen zu Bällchen formen. Kinderportion ohne Salz und Chili abnehmen, Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Erdnusssuppe mit Reisbällchen',
  kid:'Hähnchen fein zerzupfen, Reisbällchen klein drücken und mit der sämigen Suppe mischen. Erdnuss nur als glattes Mus, ohne Salz und Chili.',
  tipp:'Erdnussmus ohne Zucker und Salz verwenden, die Suppe dickt beim Stehen noch nach.'
},
{
  id:'gh-light-soup', name:'Light Soup · klare Tomaten-Ingwer-Suppe mit Hähnchen und Kartoffelstampf (Fufu-Art)', cuisine:'Ghana', flag:'🇬🇭',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Aubergine','Kartoffeln'], season:[7,8,9],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Aubergine',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Hähnchen in Stücke schneiden und mit Brühe, halbierter Zwiebel, geriebenem Ingwer und Knoblauch aufkochen und 5 Minuten köcheln.',
    'Ganze Tomaten und Aubergine in großen Stücken zugeben und 12 Minuten mitkochen, bis sie weich sind.',
    'Tomaten, Aubergine und Zwiebel herausnehmen, fein pürieren, zurück in die Suppe geben und weitere 8 Minuten köcheln, bis das Fleisch durchgegart ist.',
    'Parallel Kartoffeln schälen, in Wasser 18 Minuten weich kochen und zu einem festen Stampf zerdrücken.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und den Stampf in die Suppe setzen.'
  ],
  kidName:'Milde Hähnchensuppe mit Stampf',
  kid:'Hähnchen fein zerzupfen und mit Stampf und wenig Suppe zu einem dicken Brei mischen. Ohne Salz und Chili.',
  tipp:'In Ghana wird Light Soup mit Fufu aus Kochbanane und Maniok gegessen, Kartoffelstampf ist die schnelle Alternative.'
},
{
  id:'gh-fried-rice', name:'Ghana Fried Rice · Gemüse-Bratreis mit Hähnchen, Kohl und Ei', cuisine:'Ghana', flag:'🇬🇭',
  protein:'gefluegel', base:'reis', time:{a:15,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Weißkohl','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Hähnchenbrust',q:100,u:'g',c:'fisch'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 30 Minuten garen und ausdampfen lassen.',
    'Hähnchen in kleine Würfel, Karotten in Stifte und Kohl in feine Streifen schneiden. Hähnchen in Öl 5 Minuten braten, bis es durchgegart ist, Gemüse und geriebenen Ingwer 4 Minuten mitbraten.',
    'Ei in die Pfanne geben und unter Rühren vollständig stocken lassen. Reis und Frühlingszwiebel zugeben und 3 Minuten unter Wenden braten.',
    'Kinderportion ohne Sojasauce und Chili abnehmen. Erwachsene mit Sojasauce und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Mini-Bratreis',
  kid:'Hähnchen sehr fein schneiden, Kohl und Karotten weich braten, Ei vollständig durchgaren. Ohne Sojasauce und Chili.',
  tipp:'In Ghana gibt es dazu Shito, eine scharfe Paste aus Chili und getrocknetem Fisch, die nur Erwachsene am Tisch nehmen.'
},
{
  id:'gh-chichinga', name:'Chichinga · Rindfleischspieße mit Ingwer-Gewürz und Kelewele aus dem Ofen', cuisine:'Ghana', flag:'🇬🇭',
  protein:'fleisch', base:null, time:{a:15,c:25}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kochbanane','Rote Paprika','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Kochbanane',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Ingwer reiben und mit Paprikapulver und dem Öl verrühren.',
    'Kochbanane schälen, in 2 cm Würfel schneiden, mit der Hälfte der Ingwer-Mischung vermengen und auf dem Blech 10 Minuten backen.',
    'Fleisch, Paprika und Zwiebel in Stücken abwechselnd auf Spieße stecken, mit der restlichen Mischung bestreichen und neben die Kochbanane legen. Alles 12 bis 15 Minuten backen und einmal wenden, bis das Fleisch durchgegart ist.',
    'Tomate würfeln. Kinderportion ohne Salz und Chili abnehmen, Erwachsene Spieße und Kelewele mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Fleisch-Stückchen mit Ofen-Kochbanane',
  kid:'Fleisch und Gemüse vom Spieß nehmen und sehr klein schneiden, Kochbanane weich backen. Ohne Salz und Chili.',
  leftover:'Kebab-Bowl · 8 Min. – Fleisch und Kochbanane vollständig erhitzen und mit Reis und Salat anrichten.',
  tipp:'Holzspieße 10 Minuten wässern, dann verbrennen sie im Ofen nicht.'
},
{
  id:'gh-tuo-zaafi', name:'Tuo Zaafi · Maisklößchen mit Blattgemüse-Suppe und Rind (Ayoyo)', cuisine:'Ghana', flag:'🇬🇭',
  protein:'fleisch', base:'polenta', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Spinat','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Rindfleisch, dünne Streifen',q:100,u:'g',c:'fisch'},
    {n:'Blattspinat, TK',q:150,u:'g',c:'tk'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel und Tomate würfeln. Rindfleisch in Öl 3 Minuten anbraten und die Zwiebel 3 Minuten mitdünsten.',
    'Tomate und Brühe zugeben und 15 Minuten leise köcheln. Spinat zugeben, 6 Minuten mitgaren und mit dem Stabmixer kurz anpürieren, damit die Suppe sämig wird.',
    'Parallel 300 ml Wasser aufkochen, Polenta einrieseln lassen und unter kräftigem Rühren 8 Minuten zu einem festen Brei garen. Mit einer nassen Kelle Klößchen abstechen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit den Klößchen servieren.'
  ],
  kidName:'Weiche Mais-Klößchen mit Spinat',
  kid:'Polenta weich kochen, Rindfleisch sehr fein schneiden und unter die Spinatsuppe mischen. Ohne Salz und Chili.',
  tipp:'Ayoyo sind Jute-Blätter aus dem Norden Ghanas, im Afroshop gibt es sie tiefgekühlt als Molokhia.'
},
{
  id:'gh-banku', name:'Banku · Polenta-Klöße mit gebratenem Fisch und Tomaten-Zwiebel-Salsa', cuisine:'Ghana', flag:'🇬🇭',
  protein:'fisch', base:'polenta', time:{a:10,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Zwiebel','Rote Paprika','Gurke'], season:[7,8,9],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Polenta in 300 ml kochendes Wasser einrühren und unter kräftigem Rühren 8 Minuten zu einem festen Brei garen, dann mit nassen Händen zu Klößen formen.',
    'Tomaten, Paprika, Gurke und Zwiebel sehr fein würfeln und mit Limettensaft mischen.',
    'Fisch trocken tupfen und in Öl je Seite 3 bis 4 Minuten braten, bis er innen nicht mehr glasig ist.',
    'Kinderportion ohne Salz und Chili abnehmen und den Fisch entgräten. Erwachsene Fisch und Salsa mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Weiche Polenta mit Fisch',
  kid:'Polenta weicher kochen, Fisch entgräten und zerpflücken, Salsa ohne rohe Zwiebel sehr fein gehackt dazu. Ohne Salz und Chili.',
  tipp:'Echtes Banku wird aus fermentiertem Mais- und Maniokteig gerührt, im Afroshop gibt es fertiges Banku-Mehl.'
},
{
  id:'gh-okro-stew', name:'Okro Stew · Okra-Tomaten-Eintopf mit Fisch und Vollkornreis', cuisine:'Ghana', flag:'🇬🇭',
  protein:'fisch', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Okra','Tomaten','Zwiebel','Rote Paprika'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Okra',q:120,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 30 Minuten garen.',
    'Zwiebel, Paprika und Ingwer fein würfeln und in Öl 4 Minuten dünsten. Tomaten zugeben und 8 Minuten zu einer dicken Soße einkochen.',
    'Okra in Scheiben schneiden, zugeben und 6 Minuten garen. Fisch in Stücken auflegen und zugedeckt 6 Minuten ziehen lassen, bis er sich zerpflücken lässt.',
    'Kinderportion ohne Salz und Chili abnehmen und den Fisch entgräten. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Okra-Fisch mit Reis',
  kid:'Fisch entgräten und zerpflücken, Okra sehr weich garen und klein schneiden, dann mit Reis mischen. Ohne Salz und Chili.',
  tipp:'Okra nur kurz garen und wenig rühren, dann bleibt die Soße stückig statt schleimig.'
},
{
  id:'gh-garden-egg', name:'Garden Egg Stew · Auberginen-Tomaten-Eintopf mit Lachs und Kochbanane', cuisine:'Ghana', flag:'🇬🇭',
  protein:'fisch', base:null, time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Aubergine','Tomaten','Zwiebel','Kochbanane'], season:[7,8,9],
  ing:[
    {n:'Kochbanane',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Aubergine',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Kochbanane schälen, dritteln und in Wasser 15 Minuten weich kochen. Aubergine würfeln, in einem zweiten Topf 10 Minuten weich kochen, abgießen und grob zerdrücken.',
    'Zwiebel und Knoblauch würfeln und in Öl 3 Minuten dünsten. Gewürfelte Tomaten zugeben und 6 Minuten einkochen.',
    'Aubergine unterrühren, Lachs in Stücken hineinlegen und zugedeckt 6 Minuten garen, bis er sich zerpflücken lässt.',
    'Kinderportion ohne Salz und Chili abnehmen und den Fisch entgräten. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit Kochbanane servieren.'
  ],
  kidName:'Auberginen-Fisch mit Kochbanane',
  kid:'Aubergine weich zerdrücken, Fisch gründlich entgräten und zerpflücken, Kochbanane in weiche Stücke teilen. Ohne Salz und Chili.',
  tipp:'Ghanaische Garden Eggs sind kleine weiße oder grüne Auberginen, normale Auberginen schmecken etwas milder.'
},
{
  id:'gh-kontomire', name:'Kontomire Stew · Spinat-Eintopf mit Ei und Kürbiskernen, dazu Ampesi', cuisine:'Ghana', flag:'🇬🇭',
  protein:'ei', base:null, time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Spinat','Tomaten','Zwiebel','Süßkartoffel','Kochbanane'], season:[],
  ing:[
    {n:'Süßkartoffel',q:150,u:'g',c:'gemuese'},
    {n:'Kochbanane',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Blattspinat, TK',q:150,u:'g',c:'tk'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kürbiskerne, gemahlen',q:1,u:'EL',c:'vorrat',hint:'ersetzt gemahlene Agushi-Kerne'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Süßkartoffel und Kochbanane schälen, in große Stücke schneiden und in Wasser 15 bis 18 Minuten weich kochen.',
    'Zwiebel und Tomate würfeln und in Öl 5 Minuten dünsten. Aufgetauten, ausgedrückten Spinat und die mit 3 EL Wasser verrührten Kürbiskerne zugeben und 6 Minuten köcheln.',
    'Eier verquirlen, über den Eintopf gießen und unter gelegentlichem Rühren 3 bis 4 Minuten vollständig stocken lassen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit Süßkartoffel und Kochbanane servieren.'
  ],
  kidName:'Spinat-Ei mit weicher Süßkartoffel',
  kid:'Ei vollständig stocken lassen und klein rühren, Süßkartoffel und Kochbanane weich zerdrücken. Ohne Salz und Chili.',
  tipp:'Kontomire sind junge Taro-Blätter, tiefgekühlt gibt es sie im Afroshop, Spinat ist der übliche Ersatz.'
},
{
  id:'gh-egg-stew', name:'Egg Stew · Tomaten-Zwiebel-Soße mit Ei und gekochten Kartoffeln (Yams-Art)', cuisine:'Ghana', flag:'🇬🇭',
  protein:'ei', base:'kartoffeln', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Babyspinat','Kartoffeln'], season:[7,8,9],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese',hint:'ersetzt Yams'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Kartoffeln schälen, in große Stücke schneiden und in Wasser 14 Minuten weich kochen.',
    'Zwiebel in Ringe, Paprika und Tomaten in Würfel schneiden. Zwiebel und Paprika in Öl 3 Minuten dünsten, Tomaten zugeben und 6 Minuten zu einer Soße schmoren, dann den Spinat unterheben.',
    'Eier verquirlen, in die Soße gießen und unter Rühren 3 bis 4 Minuten vollständig stocken lassen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit den Kartoffeln servieren.'
  ],
  kidName:'Rührei-Soße mit Kartoffeln',
  kid:'Ei vollständig durchgaren und die Kartoffeln mit der Soße zerdrücken. Ohne Salz und Chili.',
  leftover:'Eier-Toast · 5 Min. – Restliche Soße vollständig erhitzen und auf Vollkornbrot geben.',
  tipp:'Mit echtem Yams aus dem Afroshop etwa 20 Minuten kochen, er ist fester und weniger süß als Süßkartoffel.'
},
{
  id:'gh-gari-foto', name:'Gari Foto · Maniokgrieß mit Tomaten-Ei-Soße und Erbsen', cuisine:'Ghana', flag:'🇬🇭',
  protein:'ei', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Erbsen'], season:[],
  ing:[
    {n:'Gari (Maniokgrieß)',q:60,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Gari mit 80 ml warmem Wasser beträufeln, mit der Gabel auflockern und 5 Minuten quellen lassen.',
    'Zwiebel, Paprika und Tomaten würfeln. Zwiebel und Paprika in Öl 3 Minuten dünsten, Tomaten und Erbsen zugeben und 4 Minuten schmoren.',
    'Eier verquirlen, zugeben und unter Rühren vollständig stocken lassen. Gari unterheben und 2 Minuten mitbraten.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Weiche Gari-Pfanne',
  kid:'Gari mit etwas mehr Wasser weich quellen lassen, Ei vollständig stocken lassen und Erbsen andrücken. Ohne Salz und Chili.',
  tipp:'Gari gibt es im Afroshop, in Ghana kommen oft noch Sardinen oder Thunfisch aus der Dose dazu.'
},
{
  id:'gh-tatale', name:'Tatale mit Aboboi · Kochbananen-Puffer mit Bohnen-Tomaten-Eintopf', cuisine:'Ghana', flag:'🇬🇭',
  protein:'huelsen', base:null, time:{a:12,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kochbanane','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kochbanane',q:1,u:'Stk.',c:'gemuese'},
    {n:'Mehl',q:30,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:120,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel fein würfeln. Die Hälfte mit geriebenem Ingwer in wenig Öl 3 Minuten dünsten, Tomaten und abgespülte Bohnen zugeben und 10 Minuten köcheln.',
    'Sehr reife Kochbanane schälen und mit der Gabel fein zerdrücken. Restliche Zwiebel und Mehl unterrühren, bis ein dicker Teig entsteht.',
    'Im restlichen Öl in einer beschichteten Pfanne kleine Puffer je Seite 3 Minuten goldbraun braten.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene Bohnen mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Kochbananen-Puffer mit Bohnenmus',
  kid:'Bohnen fein zerdrücken und die Puffer in Streifen schneiden, damit kleine Hände sie gut greifen. Ohne Salz und Chili.',
  tipp:'Für Tatale die Kochbanane so reif wie möglich nehmen, die Schale darf fast schwarz sein. Aboboi wird in Ghana mit Bambara-Bohnen gekocht.'
}
);
