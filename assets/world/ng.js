/* Grün geplant · Nigeria · Top 15 */
RECIPES.push(
{
  id:'ng-jollof', name:'Jollof Rice · Tomaten-Paprika-Reis mit Hähnchen und Gemüse', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'gefluegel', base:'reis', time:{a:15,c:40}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Tomaten','Rote Paprika','Zwiebel','Karotten'], season:[7,8,9],
  ing:[
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Paprika, die Hälfte der Zwiebel und das Tomatenmark mit den passierten Tomaten fein pürieren.',
    'Hähnchen würfeln und im Topf in Öl 4 Minuten rundum anbraten. Restliche Zwiebel und Karotten in kleinen Würfeln 2 Minuten mitbraten.',
    'Püree und Currypulver zugeben und offen 8 Minuten einkochen, bis die Soße dunkler und dicker wird.',
    'Gewaschenen Reis und 180 ml Wasser einrühren, aufkochen und zugedeckt bei kleiner Hitze 30 Minuten garen, bis der Reis weich ist.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Mini-Jollof',
  kid:'Hähnchen sehr klein schneiden oder zerzupfen und unter den weichen Reis mischen. Ohne Salz und Chili servieren.',
  leftover:'Jollof-Pfanne · 10 Min. – Reste mit etwas Wasser und Spinat in der Pfanne vollständig durcherhitzen.',
  tipp:'Vollkornreis 30 Minuten vorher einweichen, dann gart er im Tomatensud gleichmäßiger.'
},
{
  id:'ng-egusi', name:'Egusi · Blattgemüse-Eintopf mit gemahlenen Kernen und Rind, dazu Kartoffelstampf', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Spinat','Tomaten','Rote Paprika','Zwiebel','Kartoffeln'], season:[],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Rindfleisch, dünne Streifen',q:100,u:'g',c:'fisch'},
    {n:'Kürbiskerne, gemahlen',q:2,u:'EL',c:'vorrat',hint:'ersetzt gemahlene Egusi-Melonenkerne'},
    {n:'Blattspinat, TK',q:150,u:'g',c:'tk'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in Wasser 18 Minuten weich kochen.',
    'Zwiebel und Paprika fein würfeln. Rindfleischstreifen in Öl 3 Minuten anbraten, Zwiebel und Paprika 3 Minuten mitdünsten.',
    'Tomaten zugeben. Gemahlene Kürbiskerne mit 4 EL Wasser zu einer Paste rühren, einrühren und 8 Minuten leise köcheln, bis sich kleine Flocken bilden.',
    'Spinat zugeben und 6 Minuten mitgaren. Kartoffeln mit etwas Kochwasser fein stampfen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken abschmecken.'
  ],
  kidName:'Egusi-Stampf',
  kid:'Rindfleisch sehr fein schneiden und mit der Spinatsoße unter den Kartoffelstampf mischen. Ohne Salz und Chili anbieten.',
  leftover:'Egusi-Bowl · 10 Min. – Restliche Soße vollständig erhitzen und mit gekochten Kartoffeln oder Reis servieren.',
  tipp:'Egusi-Kerne gibt es im Afroshop, gemahlene Kürbiskerne binden den Eintopf ganz ähnlich.'
},
{
  id:'ng-efo-riro', name:'Efo Riro · Spinat-Paprika-Eintopf mit Fisch und Reis', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'fisch', base:'reis', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Spinat','Rote Paprika','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Reis',q:75,u:'g',c:'vorrat'},
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Blattspinat, TK',q:200,u:'g',c:'tk'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 15 Minuten garen.',
    'Paprika, Tomate und die Hälfte der Zwiebel grob pürieren. Restliche Zwiebel in Ringe schneiden, in Öl 3 Minuten dünsten, Püree zugeben und offen 10 Minuten einkochen.',
    'Fisch in große Stücke schneiden, in die Soße legen und zugedeckt 6 Minuten garen, bis er sich zerpflücken lässt.',
    'Aufgetauten, gut ausgedrückten Spinat vorsichtig unterheben und 3 Minuten erhitzen.',
    'Kinderportion ohne Salz und Chili abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Spinat-Fisch-Reis',
  kid:'Fisch vollständig durchgaren, sorgfältig entgräten und zerpflücken. Spinat fein gehackt mit Reis mischen, ohne Salz und Chili.',
  leftover:'Efo-Omelett · 10 Min. – Restlichen Spinat mit verquirlten Eiern in der Pfanne vollständig stocken lassen.',
  tipp:'Spinat vorher in einem Sieb gut ausdrücken, sonst wird der Eintopf wässrig.'
},
{
  id:'ng-suya', name:'Suya · Rindfleischstreifen in Erdnuss-Ingwer-Marinade mit Fladenbrot und Gurke', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'fleisch', base:null, time:{a:12,c:8}, devices:[['pfanne']], method:'Pfanne',
  allergens:['nuesse','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Gurke','Tomaten','Rote Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Erdnussmus, ungesüßt',q:1,u:'EL',c:'vorrat'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Erdnussmus mit geriebenem Ingwer, Paprikapulver und 1 EL warmem Wasser glatt rühren und die Fleischstreifen damit einreiben.',
    'Gurke und Tomate würfeln, Zwiebel in feine Ringe schneiden.',
    'Fleisch in Öl bei mittlerer Hitze 4 bis 5 Minuten braten, bis es rundum gebräunt und durchgegart ist. Fladenbrot kurz in der Pfanne erwärmen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken bestreuen und mit Zwiebelringen servieren.'
  ],
  kidName:'Mini-Suya-Brot',
  kid:'Fleisch in sehr kleine, weiche Stücke schneiden und mit Gurke in weiches Fladenbrot geben. Ohne Salz und Chili, rohe Zwiebel weglassen.',
  leftover:'Suya-Wrap · 5 Min. – Restliches Fleisch kurz durcherhitzen und mit Salat in ein Fladenbrot rollen.',
  tipp:'Im Original wird Suya über Holzkohle gegrillt, auf dem Rost im Backofen bei 220 °C dauert es etwa 8 Minuten.'
},
{
  id:'ng-gizdodo', name:'Gizdodo · Hähnchen-Kochbananen-Pfanne in Paprika-Tomaten-Soße', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'gefluegel', base:null, time:{a:15,c:25}, devices:[['ofen'],['pfanne']], method:'Backofen + Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kochbanane','Rote Paprika','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Kochbanane',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kochbanane schälen, in 2 cm Würfel schneiden, mit der Hälfte des Öls mischen und auf dem Blech 20 bis 25 Minuten goldbraun backen, einmal wenden.',
    'Paprika, Tomate, Zwiebel und Knoblauch grob pürieren.',
    'Hähnchen würfeln und im restlichen Öl 5 Minuten anbraten. Püree und Thymian zugeben und offen 10 Minuten einkochen, bis das Fleisch durchgegart ist.',
    'Kochbananenwürfel unterheben. Kinderportion ohne Salz und Chili abnehmen, Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Hähnchen mit Ofen-Dodo',
  kid:'Kochbanane weich backen und in kleine Stücke teilen, Hähnchen fein zerzupfen und mit der Soße mischen. Ohne Salz und Chili.',
  leftover:'Dodo-Bowl · 8 Min. – Reste vollständig erhitzen und mit Reis oder Bohnen anrichten.',
  tipp:'Die Kochbanane sollte gelb mit schwarzen Flecken sein, dann wird sie süß und weich. Im Original kommen Hähnchenmägen dazu.'
},
{
  id:'ng-spaghetti-jollof', name:'Jollof-Spaghetti · Vollkornnudeln in Tomaten-Paprika-Soße mit Rinderhack', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'fleisch', base:'nudeln', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Paprika','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Nudeln in reichlich Wasser nach Packungsangabe bissfest kochen, etwa 10 Minuten.',
    'Zwiebel, Paprika und Karotte fein würfeln. Hack in Öl krümelig braten, Gemüse 3 Minuten mitbraten.',
    'Passierte Tomaten, Currypulver und Thymian zugeben und 8 Minuten köcheln.',
    'Nudeln abgießen und in der Soße schwenken, bis sie rundum rot sind. Kinderportion ohne Salz und Chili abnehmen, Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Rote Mini-Spaghetti',
  kid:'Nudeln etwas weicher kochen und klein schneiden, Hack fein krümeln. Ohne Salz und Chili.',
  leftover:'Nudel-Omelett · 10 Min. – Restliche Nudeln mit verquirlten Eiern in der Pfanne vollständig stocken lassen.',
  tipp:'In Nigeria werden die Nudeln oft direkt in der mit Brühe gestreckten Soße gar gekocht, das spart einen Topf.'
},
{
  id:'ng-pepper-soup', name:'Pepper Soup · würzige Fischsuppe mit Kartoffeln und Spinat', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Babyspinat','Zwiebel'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Kartoffeln schälen und in 2 cm Würfel schneiden. Zwiebel, Ingwer und Knoblauch fein hacken.',
    'Alles mit Brühe, Lorbeerblatt und Koriander aufkochen und 15 Minuten köcheln, bis die Kartoffeln weich sind.',
    'Fisch in große Stücke schneiden, in die Suppe legen und bei kleiner Hitze 6 Minuten ziehen lassen. Spinat zugeben und 1 Minute mitziehen lassen.',
    'Lorbeerblatt entfernen. Kinderportion ohne Salz und Chili abnehmen, Erwachsene mit Salz und nach Wunsch reichlich Chiliflocken würzen.'
  ],
  kidName:'Milde Fisch-Kartoffel-Suppe',
  kid:'Fisch entgräten und zerpflücken, Kartoffeln mit der Gabel zerdrücken und mit wenig Brühe als dicken Brei anbieten. Ohne Salz und Chili.',
  tipp:'Fertige Pepper-Soup-Gewürzmischungen gibt es im Afroshop, sie kommen erst nach der Kinderportion in den Topf.'
},
{
  id:'ng-okro', name:'Okro Soup · Okra-Eintopf mit Fisch und Spinat, dazu Polenta', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'fisch', base:'polenta', time:{a:15,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Okra','Spinat','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Okra',q:120,u:'g',c:'gemuese'},
    {n:'Blattspinat, TK',q:100,u:'g',c:'tk'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Okra waschen, den Stielansatz abschneiden und in dünne Scheiben schneiden. Zwiebel und Tomate würfeln.',
    'Zwiebel in Öl 3 Minuten dünsten, Tomate und Brühe zugeben und 5 Minuten köcheln. Okra einrühren und 6 Minuten garen, bis die Soße sämig wird.',
    'Fisch in Stücken und Spinat zugeben und zugedeckt 6 Minuten ziehen lassen. Parallel Polenta in 280 ml Wasser unter Rühren 5 Minuten zu einem festen Brei kochen.',
    'Kinderportion ohne Salz und Chili abnehmen und den Fisch entgräten. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Okra-Fisch mit Polenta',
  kid:'Fisch vollständig garen, entgräten und zerpflücken, Okra sehr weich kochen und klein schneiden. Polenta weich statt fest kochen, ohne Salz.',
  tipp:'Okra gibt es tiefgekühlt im Afroshop, sie kann gefroren direkt in den Topf.'
},
{
  id:'ng-boli', name:'Boli · Ofen-Kochbanane mit Lachs und Tomaten-Paprika-Soße', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'fisch', base:null, time:{a:10,c:25}, devices:[['ofen'],['pfanne']], method:'Backofen + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kochbanane','Tomaten','Rote Paprika','Rote Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Kochbanane',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kochbanane schälen, längs halbieren, dünn mit Öl bestreichen und auf dem Blech 12 Minuten backen.',
    'Kochbanane wenden, Lachs dazulegen und weitere 12 Minuten backen, bis der Fisch gerade durch ist und die Kochbanane Röststellen hat.',
    'Inzwischen Tomaten, Paprika und Zwiebel fein würfeln und im restlichen Öl 8 Minuten zu einer stückigen Soße schmoren.',
    'Kinderportion ohne Salz und Chili abnehmen und den Lachs entgräten. Erwachsene mit Zitrone, Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Ofen-Kochbanane mit Lachs',
  kid:'Kochbanane weich backen und in Streifen teilen, Lachs gründlich entgräten und zerpflücken. Soße ohne Salz und Chili dazu.',
  tipp:'Boli ist Straßenessen aus Lagos und Port Harcourt, dort wird die Kochbanane über Holzkohle geröstet.'
},
{
  id:'ng-moi-moi', name:'Moi Moi · gebackene Bohnen-Paprika-Küchlein mit Vollkornbrot und Salat', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'huelsen', base:null, time:{a:15,c:30}, devices:[['ofen']], method:'Backofen, Förmchen',
  allergens:['ei','gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Zwiebel','Tomaten','Gurke'], season:[],
  ing:[
    {n:'Augenbohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:60,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Bohnen abspülen und mit Paprika, Zwiebel, Brühe und Öl sehr fein pürieren, dann das Ei unterrühren.',
    'Masse in gefettete Muffin- oder Auflaufförmchen füllen und mit Alufolie abdecken. Die Förmchen in eine Auflaufform stellen und 2 cm hoch heißes Wasser angießen.',
    'Im Wasserbad 30 Minuten backen, bis die Küchlein fest sind. Inzwischen Tomate und Gurke würfeln.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene Küchlein und Salat mit Salz und nach Wunsch Chiliflocken würzen und mit Brot servieren.'
  ],
  kidName:'Mini-Moi-Moi',
  kid:'Die weichen Küchlein in kleine Stücke teilen, das Ei ist nach 30 Minuten vollständig gestockt. Gurke in dünnen Stiften, Tomate ohne Schale anbieten.',
  leftover:'Moi-Moi-Brot · 5 Min. – Kalte Küchlein in Scheiben schneiden und mit Tomate auf Vollkornbrot essen.',
  tipp:'Im Original werden die Bohnen einzeln gehäutet und in Blättern gedämpft, Dosenbohnen und Muffinförmchen sparen viel Zeit.'
},
{
  id:'ng-akara', name:'Akara · Bohnen-Puffer aus der Pfanne mit weicher Polenta (Pap)', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'huelsen', base:'polenta', time:{a:12,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Tomaten'], season:[],
  ing:[
    {n:'Polenta (Maisgrieß)',q:75,u:'g',c:'vorrat'},
    {n:'Augenbohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Bohnen abspülen, gut abtropfen lassen und mit Zwiebel, Paprika und 15 g Polenta zu einer dicken Masse pürieren.',
    'Restliche Polenta in 300 ml Wasser unter Rühren aufkochen und 5 Minuten zu einem weichen Brei quellen lassen.',
    'Öl in einer beschichteten Pfanne erhitzen, mit einem Esslöffel kleine Puffer hineinsetzen und je Seite 3 bis 4 Minuten goldbraun braten.',
    'Tomate würfeln. Kinderportion ohne Salz und Chili abnehmen, Erwachsene Puffer und Tomate mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Weiche Bohnen-Puffer',
  kid:'Puffer etwas flacher braten, damit sie innen weich bleiben, und in Streifen schneiden. Polenta sehr weich und ohne Salz.',
  tipp:'Die Masse nicht zu nass pürieren, sonst zerlaufen die Puffer. Ein weiterer Esslöffel Polenta macht sie fester.'
},
{
  id:'ng-ewa-agoyin', name:'Ewa Agoyin · cremige Bohnen mit geschmorter Zwiebel-Paprika-Soße und Vollkornbrot', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'huelsen', base:null, time:{a:10,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Tomaten','Babyspinat'], season:[],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Bohnen abspülen und mit 80 ml Wasser 8 Minuten weich köcheln, dann grob zu einem cremigen Mus zerdrücken.',
    'Zwiebel in feine Ringe schneiden, Paprika fein würfeln und in Öl bei mittlerer Hitze 8 Minuten weich und leicht braun schmoren.',
    'Passierte Tomaten zugeben und 3 Minuten einkochen, Spinat unterheben und zusammenfallen lassen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene Soße mit Salz und nach Wunsch Chiliflocken würzen, über die Bohnen geben und mit Brot servieren.'
  ],
  kidName:'Bohnenmus mit Brot',
  kid:'Bohnen fein zerdrücken und mit etwas Soße mischen, Brot in Streifen ohne harte Kruste dazu. Ohne Salz und Chili.',
  leftover:'Bohnen-Toast · 8 Min. – Restliches Bohnenmus auf Vollkornbrot streichen und in der Pfanne vollständig erhitzen.',
  tipp:'Für den typischen dunklen Geschmack die Zwiebeln ruhig 10 Minuten langsam schmoren lassen.'
},
{
  id:'ng-fried-rice', name:'Nigerian Fried Rice · Curry-Gemüsereis mit Ei und Erbsen', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'ei', base:'reis', time:{a:15,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Erbsen','Grüne Bohnen','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Mildes Currypulver',q:0.75,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser mit dem Currypulver 30 Minuten garen und ausdampfen lassen.',
    'Karotten und Bohnen klein würfeln, Frühlingszwiebel in Ringe schneiden. Gemüse in Öl 5 Minuten braten, Erbsen 2 Minuten mitbraten.',
    'Eier in der Pfanne verquirlen und unter Rühren vollständig stocken lassen. Reis und Thymian zugeben und 4 Minuten unter Wenden braten.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Bunter Mini-Reis',
  kid:'Ei vollständig durchgaren und klein zupfen, Gemüse weich braten und Erbsen leicht andrücken. Ohne Salz und Chili.',
  leftover:'Reis-Taler · 12 Min. – Restlichen Reis mit einem Ei verkneten, zu Talern formen und beidseitig durchbraten.',
  tipp:'Mit Reis vom Vortag dauert das Gericht nur 15 Minuten und der Reis klebt nicht.'
},
{
  id:'ng-asaro', name:'Asaro · Süßkartoffel-Tomaten-Eintopf mit Spinat und Ei', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'ei', base:null, time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Süßkartoffel','Tomaten','Rote Paprika','Babyspinat','Zwiebel'], season:[],
  ing:[
    {n:'Süßkartoffel',q:250,u:'g',c:'gemuese',hint:'ersetzt Yams'},
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Tomaten, gehackt (Dose)',q:120,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Süßkartoffel schälen und in 3 cm Würfel schneiden. Zwiebel und Paprika würfeln und in Öl 3 Minuten dünsten.',
    'Süßkartoffel, Tomaten und Brühe zugeben, aufkochen und zugedeckt 18 Minuten köcheln, bis die Würfel weich sind. Parallel die Eier in einem kleinen Topf 10 Minuten hart kochen.',
    'Etwa ein Drittel der Süßkartoffel mit dem Löffel zerdrücken, damit der Eintopf sämig wird, dann den Spinat unterheben.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit halbierten Eiern servieren.'
  ],
  kidName:'Süßkartoffel-Brei mit Ei',
  kid:'Süßkartoffel weich zerdrücken, das hart gekochte Ei fein hacken und darüberstreuen. Ohne Salz und Chili.',
  leftover:'Asaro-Taler · 15 Min. – Kalten Rest mit 1 EL Maisgrieß formen und in der Pfanne beidseitig durchbraten.',
  tipp:'Mit echtem Yams aus dem Afroshop wird Asaro fester und weniger süß.'
},
{
  id:'ng-awara', name:'Awara · gebratener Tofu in Tomaten-Paprika-Soße mit Reis', cuisine:'Nigeria', flag:'🇳🇬',
  protein:'tofu', base:'reis', time:{a:10,c:18}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Reis',q:75,u:'g',c:'vorrat'},
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 15 Minuten garen.',
    'Tofu trocken tupfen, in 2 cm Würfel schneiden und in der Hälfte des Öls rundum 8 Minuten goldbraun braten, dann herausnehmen.',
    'Tomaten, Paprika, Zwiebel, Ingwer und Knoblauch grob pürieren, im restlichen Öl 8 Minuten einkochen und den Tofu darin wenden.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Tofu-Würfel mit Reis',
  kid:'Tofu in kleine weiche Würfel schneiden oder zerdrücken und mit der milden Soße unter den Reis mischen. Ohne Salz und Chili.',
  tipp:'Awara ist Sojakäse aus dem Norden Nigerias und schmeckt wie fester Naturtofu.'
}
);
