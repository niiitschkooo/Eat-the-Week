/* Grün geplant · Senegal · Top 15 */
RECIPES.push(
{
  id:'sn-thieboudienne', name:'Thieboudienne · Fisch mit Tomatenreis, Karotten und Kohl', cuisine:'Senegal', flag:'🇸🇳',
  protein:'fisch', base:'reis', time:{a:20,c:40}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Karotten','Weißkohl','Tomaten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Reis',q:75,u:'g',c:'vorrat'},
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Tomatenmark',q:1.5,u:'EL',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Petersilie und Knoblauch fein hacken und die Hälfte davon in einen tiefen Schnitt im Fisch drücken (Rof). Zwiebel würfeln und im Topf in Öl 4 Minuten dünsten, Tomatenmark und restliche Kräuter 1 Minute mitrösten.',
    '500 ml Wasser angießen, Karotten in großen Stücken und den Kohl als Spalte zugeben und 15 Minuten köcheln. Fisch einlegen und bei kleiner Hitze 8 Minuten gar ziehen lassen.',
    'Fisch und Gemüse herausheben und warm halten. Etwa 160 ml Brühe im Topf lassen, den Rest beiseitestellen. Gewaschenen Reis darin zugedeckt bei kleiner Hitze 18 Minuten garen.',
    'Kinderportion ohne Salz und Chili abnehmen und den Fisch sorgfältig entgräten. Erwachsene Reis, Gemüse und Fisch mit Salz und nach Wunsch Chiliflocken würzen und mit der restlichen Brühe beträufeln.'
  ],
  kidName:'Fisch-Reis mit weichem Gemüse',
  kid:'Fisch gründlich entgräten und zerpflücken, Karotten und Kohl sehr weich und klein geschnitten zum Reis geben. Ohne Salz und Chili.',
  leftover:'Thiéb-Pfanne · 10 Min. – Reis und Gemüse mit etwas Brühe in der Pfanne vollständig durcherhitzen.',
  tipp:'Im Senegal wird Thieboudienne mit Bruchreis gekocht, er nimmt die Tomatenbrühe besonders gut auf.'
},
{
  id:'sn-soupou-kandja', name:'Soupou Kandja · Okra-Eintopf mit Fisch und Reis', cuisine:'Senegal', flag:'🇸🇳',
  protein:'fisch', base:'reis', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Okra','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Reis',q:75,u:'g',c:'vorrat'},
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Okra',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 15 Minuten garen.',
    'Okra in feine Scheiben schneiden, Zwiebel, Tomate und Knoblauch würfeln. Zwiebel und Knoblauch in Öl 3 Minuten dünsten und das Paprikapulver kurz mitrösten.',
    'Okra, Tomate und Brühe zugeben und 12 Minuten köcheln, dabei kräftig rühren, bis die Soße sämig wird. Fisch in Stücken einlegen und zugedeckt 6 Minuten garen.',
    'Kinderportion ohne Salz und Chili abnehmen und den Fisch entgräten. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und über den Reis geben.'
  ],
  kidName:'Okra-Fisch-Reis',
  kid:'Fisch entgräten und zerpflücken, Okra sehr weich kochen und fein schneiden, dann alles unter den Reis mischen. Ohne Salz und Chili.',
  tipp:'Im Original kommen rotes Palmöl und getrockneter Fisch hinein, diese Variante ist milder und leichter.'
},
{
  id:'sn-boulettes', name:'Boulettes de Poisson · Fischbällchen in Tomatensoße mit Kartoffeln', cuisine:'Senegal', flag:'🇸🇳',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','ei','gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Kartoffeln','Kräuter'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Mehl',q:15,u:'g',c:'vorrat'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Kartoffeln schälen, in Stücke schneiden und in Wasser 18 Minuten weich kochen.',
    'Fisch auf Gräten prüfen, fein hacken und mit Ei, Mehl, gehackter Petersilie und einem Viertel der Zwiebel verkneten. Mit nassen Händen walnussgroße Bällchen formen.',
    'Bällchen in Öl rundum 4 Minuten anbraten. Restliche Zwiebel und Paprika würfeln und kurz mitbraten, passierte Tomaten und 50 ml Wasser zugeben und zugedeckt 10 Minuten köcheln, bis die Bällchen durchgegart sind.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit den Kartoffeln servieren.'
  ],
  kidName:'Fischbällchen mit Kartoffeln',
  kid:'Bällchen vollständig durchgaren und halbieren oder zerdrücken, Kartoffeln mit der Soße stampfen. Ohne Salz und Chili.',
  leftover:'Boulettes-Brot · 8 Min. – Restliche Bällchen in der Soße vollständig erhitzen und in Vollkornbrot legen.',
  tipp:'Die Fischmasse vor dem Formen 10 Minuten kühlen, dann halten die Bällchen besser zusammen.'
},
{
  id:'sn-yassa-poisson', name:'Yassa Poisson · Ofenfisch mit Zitronen-Zwiebel-Soße und Süßkartoffel', cuisine:'Senegal', flag:'🇸🇳',
  protein:'fisch', base:null, time:{a:15,c:25}, devices:[['ofen'],['pfanne']], method:'Backofen + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Süßkartoffel','Karotten','Zitrone'], season:[],
  ing:[
    {n:'Süßkartoffel',q:250,u:'g',c:'gemuese'},
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Süßkartoffel und Karotte in 2 cm Würfel schneiden, mit der Hälfte des Öls mischen und 12 Minuten backen.',
    'Lachs mit der Hälfte des Zitronensafts und dem Senf einreiben, aufs Blech legen und alles weitere 12 bis 14 Minuten backen, bis der Fisch gerade durch ist.',
    'Inzwischen die Zwiebel in feine Streifen schneiden und im restlichen Öl mit dem Lorbeerblatt 15 Minuten bei mittlerer Hitze weich und goldgelb schmoren, dann mit 3 EL Wasser und dem restlichen Zitronensaft ablöschen.',
    'Kinderportion ohne Salz und Chili abnehmen und den Fisch entgräten. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und die Zwiebelsoße über den Fisch geben.'
  ],
  kidName:'Lachs mit Ofen-Süßkartoffel',
  kid:'Lachs entgräten und zerpflücken, Süßkartoffel weich backen und die sehr weich geschmorten Zwiebeln fein hacken. Ohne Salz und Chili.',
  tipp:'Für mehr Geschmack den Fisch schon morgens in Zitrone und Senf einlegen und im Kühlschrank ziehen lassen.'
},
{
  id:'sn-yassa-poulet', name:'Yassa Poulet · Zitronen-Zwiebel-Hähnchen mit Vollkornreis', cuisine:'Senegal', flag:'🇸🇳',
  protein:'gefluegel', base:'reis', time:{a:15,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Karotten','Zitrone'], season:[],
  ing:[
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Hähnchen in Stücke schneiden und mit Zitronensaft, Senf und gepresstem Knoblauch mindestens 15 Minuten marinieren. Reis in der doppelten Menge Wasser 30 Minuten garen.',
    'Hähnchen aus der Marinade nehmen und in Öl 5 Minuten rundum anbraten, dann herausnehmen.',
    'Zwiebel in Streifen und Karotte in Scheiben schneiden und mit dem Lorbeerblatt 10 Minuten weich schmoren. Marinade und 80 ml Wasser zugeben, Hähnchen zurück in die Pfanne geben und zugedeckt 12 Minuten garen, bis es durchgegart ist.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit dem Reis servieren.'
  ],
  kidName:'Zitronen-Hähnchen mit Reis',
  kid:'Hähnchen fein zerzupfen, die weich geschmorten Zwiebeln klein schneiden und mit der Soße unter den Reis mischen. Ohne Salz und Chili.',
  leftover:'Yassa-Wrap · 8 Min. – Hähnchen und Zwiebeln vollständig erhitzen und in ein Fladenbrot rollen.',
  tipp:'Die Zwiebeln langsam schmoren, bis sie süß und weich sind, dann braucht die Soße kaum Salz.'
},
{
  id:'sn-mafe', name:'Mafé · Erdnuss-Tomaten-Eintopf mit Rind, Süßkartoffel und Kohl', cuisine:'Senegal', flag:'🇸🇳',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:45}, devices:[['topf']], method:'Ein Topf',
  allergens:['nuesse'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Süßkartoffel','Weißkohl','Karotten','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Süßkartoffel',q:100,u:'g',c:'gemuese'},
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Erdnussmus, ungesüßt',q:1.5,u:'EL',c:'vorrat'},
    {n:'Tomaten, passiert',q:120,u:'ml',c:'vorrat'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Rindfleisch in 2 cm Würfel schneiden und im Topf in Öl rundum 5 Minuten anbraten. Gewürfelte Zwiebel 3 Minuten mitbraten.',
    'Passierte Tomaten und 300 ml Wasser zugeben und zugedeckt 20 Minuten köcheln.',
    'Erdnussmus mit etwas heißer Flüssigkeit glatt rühren und einrühren. Kartoffeln, Süßkartoffel und Karotte in großen Würfeln sowie den Kohl in Spalten zugeben und 18 bis 20 Minuten weich köcheln.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Milder Erdnuss-Eintopf',
  kid:'Rindfleisch sehr fein schneiden, Gemüse und Kartoffeln mit der Soße weich zerdrücken. Erdnuss nur als glattes Mus, ohne Salz und Chili.',
  leftover:'Mafé-Reis · 10 Min. – Restlichen Eintopf mit etwas Wasser vollständig erhitzen und mit Reis servieren.',
  tipp:'Im Senegal isst man Mafé meist mit Reis, mit Kartoffeln und Süßkartoffel im Topf reicht er als Eintopf.'
},
{
  id:'sn-dibi', name:'Dibi · gebratenes Lamm mit Senf-Zwiebeln im Fladenbrot', cuisine:'Senegal', flag:'🇸🇳',
  protein:'fleisch', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Tomaten','Gurke'], season:[7,8,9],
  ing:[
    {n:'Lammfleisch, mager, gewürfelt',q:110,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel in feine Ringe schneiden, Tomate und Gurke würfeln. Lammwürfel nach Bedarf noch etwas kleiner schneiden.',
    'Lamm in einer heißen Pfanne in der Hälfte des Öls 5 bis 6 Minuten rundum braten, bis es durchgegart ist, dann herausnehmen.',
    'Zwiebeln im restlichen Öl 5 Minuten weich braten, Senf und 2 EL Wasser einrühren und das Fleisch darin schwenken. Fladenbrot kurz in der Pfanne erwärmen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit Tomate und Gurke im Fladenbrot servieren.'
  ],
  kidName:'Lamm-Stückchen im Fladenbrot',
  kid:'Lamm sehr klein schneiden, die weichen Zwiebeln fein hacken und mit Gurke in weichem Fladenbrot anbieten. Ohne Salz und Chili.',
  tipp:'Im Senegal wird Dibi am Straßengrill über Holzkohle gebraten und auf Papier mit Senfzwiebeln serviert.'
},
{
  id:'sn-thiere', name:'Thiéré · Couscous mit Hähnchen-Kürbis-Soße (Bassi)', cuisine:'Senegal', flag:'🇸🇳',
  protein:'gefluegel', base:'couscous', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Kürbis','Zwiebel','Tomaten'], season:[9,10,11],
  ing:[
    {n:'Vollkorn-Couscous',q:75,u:'g',c:'vorrat'},
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Hokkaido-Kürbis',q:100,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Hähnchen würfeln, Zwiebel, Karotte und Kürbis in mundgerechte Stücke schneiden.',
    'Hähnchen in Öl 4 Minuten anbraten und die Zwiebel 2 Minuten mitbraten. Passierte Tomaten, Brühe, Zimt und Gemüse zugeben und zugedeckt 18 Minuten köcheln, bis alles weich und das Fleisch durchgegart ist.',
    'Couscous mit der gleichen Menge kochendem Wasser übergießen, 5 Minuten quellen lassen und mit der Gabel auflockern.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und die Soße über den Couscous geben.'
  ],
  kidName:'Couscous mit Hähnchen-Kürbis',
  kid:'Hähnchen fein zerzupfen, Kürbis und Karotten weich zerdrücken und mit Couscous und etwas Soße mischen. Ohne Salz und Chili.',
  leftover:'Couscous-Pfanne · 8 Min. – Couscous und Soße zusammen in der Pfanne vollständig erhitzen.',
  tipp:'Im Senegal wird Thiéré aus Hirse gedämpft, Vollkorn-Couscous ist der schnelle Ersatz und gart ohne Kochen.'
},
{
  id:'sn-ragout', name:'Ragoût de Mouton · Lamm-Kartoffel-Eintopf mit Erbsen und Karotten', cuisine:'Senegal', flag:'🇸🇳',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:55}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Erbsen','Zwiebel'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Lammfleisch, mager, gewürfelt',q:110,u:'g',c:'fisch'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Lammwürfel im Topf in Öl rundum 5 Minuten anbraten. Gewürfelte Zwiebel und Knoblauch 3 Minuten mitbraten und das Tomatenmark kurz mitrösten.',
    '400 ml Wasser und das Lorbeerblatt zugeben und zugedeckt 30 Minuten leise schmoren.',
    'Kartoffeln und Karotten in 2 cm Würfeln zugeben und 18 Minuten weich köcheln, die Erbsen in den letzten 4 Minuten zugeben.',
    'Lorbeerblatt entfernen. Kinderportion ohne Salz und Chili abnehmen, Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Lamm-Kartoffel-Stampf',
  kid:'Lamm sehr fein schneiden oder zerzupfen und mit Kartoffeln, Karotten und Erbsen weich zerdrücken. Ohne Salz und Chili.',
  leftover:'Ragoût-Bowl · 8 Min. – Restlichen Eintopf vollständig erhitzen und mit Vollkornbrot zum Tunken servieren.',
  tipp:'Im Senegal kommt Ragoût oft an Festtagen auf den Tisch und wird mit Baguette gegessen.'
},
{
  id:'sn-thiebou-yapp', name:'Thiébou Yapp · Zwiebel-Reis mit Rindfleisch, Karotten und Erbsen', cuisine:'Senegal', flag:'🇸🇳',
  protein:'fleisch', base:'reis', time:{a:15,c:40}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Karotten','Erbsen'], season:[],
  ing:[
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Rindfleisch, dünne Streifen',q:100,u:'g',c:'fisch'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Rindfleisch in kleine Stücke schneiden und im Topf in Öl 4 Minuten anbraten. Zwiebel in Streifen und gehackten Knoblauch zugeben und 8 Minuten bei mittlerer Hitze goldbraun schmoren.',
    'Karotte klein würfeln und mit Lorbeerblatt, gewaschenem Reis und 200 ml Wasser zugeben. Aufkochen und zugedeckt bei kleiner Hitze 30 Minuten garen.',
    'Erbsen in den letzten 5 Minuten unterheben und den Reis kurz ruhen lassen.',
    'Lorbeerblatt entfernen. Kinderportion ohne Salz und Chili abnehmen, Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Fleisch-Reis mit Erbsen',
  kid:'Rindfleisch sehr fein schneiden, die weichen Zwiebeln klein hacken und mit Reis und angedrückten Erbsen mischen. Ohne Salz und Chili.',
  tipp:'Thiébou Yapp ist ein Festessen zu Tabaski, im Original mit Lamm und reichlich Zwiebelsoße.'
},
{
  id:'sn-ndambe', name:'Ndambé · Augenbohnen-Süßkartoffel-Eintopf mit Vollkornbrot', cuisine:'Senegal', flag:'🇸🇳',
  protein:'huelsen', base:null, time:{a:10,c:14}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Süßkartoffel','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Augenbohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Süßkartoffel',q:120,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:120,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel und Knoblauch würfeln und in Öl 3 Minuten dünsten. Süßkartoffel in 1 cm Würfel schneiden.',
    'Süßkartoffel, Tomaten, abgespülte Bohnen und 100 ml Wasser zugeben und zugedeckt 10 Minuten köcheln, bis die Würfel weich sind.',
    'Etwa ein Drittel mit dem Löffel zerdrücken, damit der Eintopf sämig wird.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit Brot servieren.'
  ],
  kidName:'Bohnen-Süßkartoffel-Mus',
  kid:'Bohnen und Süßkartoffel fein zerdrücken, Brot in Streifen ohne harte Kruste dazu. Ohne Salz und Chili.',
  leftover:'Ndambé-Sandwich · 5 Min. – Restlichen Eintopf vollständig erhitzen und zwischen zwei Scheiben Vollkornbrot füllen.',
  tipp:'In Dakar gibt es Ndambé morgens im Baguette, als Abendessen sättigt es mit Vollkornbrot länger.'
},
{
  id:'sn-thiebou-niebe', name:'Thiébou Niébé · Tomatenreis mit Augenbohnen und Gemüse', cuisine:'Senegal', flag:'🇸🇳',
  protein:'huelsen', base:'reis', time:{a:15,c:35}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Karotten','Aubergine','Zwiebel'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Augenbohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Aubergine',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel würfeln und im Topf in Öl 4 Minuten dünsten, Tomatenmark 1 Minute mitrösten.',
    'Karotte und Aubergine in 2 cm Würfel schneiden und mit passierten Tomaten, gewaschenem Reis und 180 ml Wasser zugeben. Aufkochen und zugedeckt bei kleiner Hitze 30 Minuten garen.',
    'Abgespülte Bohnen unterheben und zugedeckt 5 Minuten durchziehen lassen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Bohnen-Tomatenreis',
  kid:'Bohnen zerdrücken und mit dem weichen Reis und klein geschnittenem Gemüse mischen. Ohne Salz und Chili.',
  leftover:'Bohnenreis-Taler · 15 Min. – Reste mit einem Ei verkneten, zu Talern formen und in der Pfanne beidseitig durchbraten.',
  tipp:'Getrocknete Augenbohnen über Nacht einweichen und 40 Minuten kochen, das ist günstiger als Dosenware.'
},
{
  id:'sn-accara', name:'Accara · Bohnenbällchen aus dem Ofen mit Tomaten-Zwiebel-Soße im Fladenbrot', cuisine:'Senegal', flag:'🇸🇳',
  protein:'huelsen', base:null, time:{a:15,c:20}, devices:[['ofen'],['pfanne']], method:'Backofen + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Tomaten','Gurke'], season:[],
  ing:[
    {n:'Augenbohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Mehl',q:15,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Ofen auf 210 °C vorheizen. Bohnen abspülen, gut abtropfen lassen und mit einem Viertel der Zwiebel, dem Knoblauch und dem Mehl zu einer dicken Masse pürieren.',
    'Mit zwei Teelöffeln kleine Bällchen auf ein mit Backpapier belegtes Blech setzen, mit der Hälfte des Öls bestreichen und 18 bis 20 Minuten goldbraun backen.',
    'Restliche Zwiebel in feine Streifen schneiden, im restlichen Öl 5 Minuten weich braten, passierte Tomaten zugeben und 6 Minuten zu einer Soße einkochen. Gurke in Scheiben schneiden.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene Soße mit Salz und nach Wunsch Chiliflocken würzen und mit Bällchen und Gurke im Fladenbrot servieren.'
  ],
  kidName:'Bohnenbällchen mit Tomatensoße',
  kid:'Bällchen halbieren oder zerdrücken, damit sie innen weich sind, und mit milder Tomatensoße und Gurkenstiften anbieten. Ohne Salz und Chili.',
  tipp:'Im Senegal werden Accara frittiert, im Ofen werden sie außen ebenfalls knusprig und brauchen nur einen Esslöffel Öl.'
},
{
  id:'sn-salade-niebe', name:'Salade de Niébé · lauwarmer Augenbohnensalat mit Hirse, Tomate und Gurke', cuisine:'Senegal', flag:'🇸🇳',
  protein:'huelsen', base:null, time:{a:8,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke','Rote Paprika','Rote Zwiebel','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Hirse',q:70,u:'g',c:'vorrat'},
    {n:'Augenbohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Hirse in einem Sieb heiß abspülen und in der doppelten Menge Wasser zugedeckt 10 Minuten köcheln, dann 5 Minuten quellen lassen.',
    'Inzwischen Tomate, Gurke und Paprika würfeln, Zwiebel und Petersilie fein hacken.',
    'Abgespülte Bohnen unter die warme Hirse heben und Gemüse, Zitronensaft und Öl untermischen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Weicher Bohnen-Hirse-Salat',
  kid:'Bohnen zerdrücken und mit der Hirse mischen, Gurke und Tomate klein schneiden und die rohe Zwiebel weglassen. Ohne Salz und Chili.',
  tipp:'Hirse ist im Senegal das traditionelle Getreide und von Natur aus glutenfrei.'
},
{
  id:'sn-pain-omelette', name:'Pain Omelette · Gemüse-Omelett mit Zwiebeln im Vollkornbrot', cuisine:'Senegal', flag:'🇸🇳',
  protein:'ei', base:null, time:{a:8,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Tomaten','Babyspinat'], season:[],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:30,u:'g',c:'gemuese'},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel in feine Streifen und Paprika in Würfel schneiden und in Öl 4 Minuten weich braten.',
    'Eier verquirlen, über das Gemüse gießen, Spinat darauflegen und bei mittlerer Hitze zugedeckt 4 bis 5 Minuten vollständig stocken lassen.',
    'Brot kurz rösten und dünn mit Senf bestreichen. Tomate in Scheiben schneiden.',
    'Kinderportion ohne Senf, Salz und Chili abnehmen. Erwachsene Omelett mit Salz und nach Wunsch Chiliflocken würzen und mit Tomate ins Brot legen.'
  ],
  kidName:'Omelett-Streifen mit Brot',
  kid:'Omelett vollständig durchgaren und in Streifen schneiden, Brot ohne harte Kruste und Tomate in kleinen Stücken dazu. Ohne Senf, Salz und Chili.',
  tipp:'In Dakar gibt es Pain Omelette an fast jeder Ecke, oft mit Pommes im Brot, hier passt ein Salat dazu.'
}
);
