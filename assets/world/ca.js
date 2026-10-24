/* Grün geplant · Kanada · Top 15 */
RECIPES.push(
{
  id:'ca-tourtiere-pfanne', name:'Tourtière-Pfanne · Québecer Gewürzhack mit Kartoffeln, Karotten und Erbsen', cuisine:'Kanada', flag:'🇨🇦',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:25}, devices:[['pfanne']], method:'Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Erbsen','Zwiebel'], season:[],
  ing:[
    {n:'Putenhack',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 1 cm große Würfel schneiden und in Öl zugedeckt 10 Minuten bei mittlerer Hitze braten, dabei mehrmals wenden.',
    'Zwiebel, Knoblauch und Karotte fein würfeln, mit dem Hack zugeben und krümelig braten. Zimt und Thymian kurz mitrösten.',
    'Brühe und Erbsen zugeben und offen 8 Minuten köcheln, bis die Kartoffeln weich sind und die Flüssigkeit fast verkocht ist.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und einer Prise gemahlener Nelke abschmecken.'
  ],
  kidName:'Milde Hack-Kartoffel-Pfanne',
  kid:'Kartoffeln und Karotten weich zerdrücken, Erbsen leicht zerquetschen und das Hack fein krümeln. Ohne Salz und Nelke.',
  leftover:'Tourtière-Taschen · 20 Min. – Reste in Vollkorn-Weizentortillas einschlagen und bei 200 °C im Ofen knusprig backen.',
  tipp:'Zimt und Nelke geben den typischen Geschmack der Québecer Fleischpastete, ganz ohne Teig.'
},
{
  id:'ca-ginger-beef', name:'Ginger Beef · Calgary-Ingwer-Rindfleisch aus der Pfanne mit Paprika, Brokkoli und Reis', cuisine:'Kanada', flag:'🇨🇦',
  protein:'fleisch', base:'reis', time:{a:11,c:13}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Karotten','Brokkoli','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Jasminreis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Brokkoli',q:80,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser aufsetzen und 12 Minuten garen. Fleisch mit der Stärke vermischen.',
    'Ingwer fein reiben, Karotte und Paprika in dünne Streifen, Brokkoli in kleine Röschen und Frühlingszwiebel in Ringe schneiden.',
    'Fleisch in heißem Öl in 2 Minuten knusprig anbraten und herausnehmen. Gemüse mit Ingwer und 3 EL Wasser 5 Minuten unter Rühren braten, Fleisch zurückgeben und kurz durchschwenken.',
    'Kinderportion ohne Sojasauce abnehmen. Erwachsene mit Sojasauce, einem Spritzer Reisessig und Chili abschmecken.'
  ],
  kidName:'Mildes Ingwer-Rind',
  kid:'Fleisch sehr fein schneiden, Brokkoli und Karotten etwas länger weich dünsten. Ohne Sojasauce und Chili mit Reis vermischt servieren.',
  leftover:'Gebratener Reis · 10 Min. – Reis und Fleischreste mit einem Ei und Erbsen in der Pfanne durchbraten.',
  tipp:'Im Restaurant wird das Fleisch frittiert, mit Stärke bestäubt wird es in der heißen Pfanne ebenfalls knusprig.'
},
{
  id:'ca-donair', name:'Halifax Donair · Ofen-Gewürzfleisch im Vollkorn-Fladenbrot mit Tomate, Gurke und Joghurtsauce', cuisine:'Kanada', flag:'🇨🇦',
  protein:'fleisch', base:null, time:{a:15,c:20}, devices:[['ofen']], method:'Backofen',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Tomaten','Rote Zwiebel','Gurke','Salat'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:30,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Hack mit Paprikapulver und Oregano verkneten und auf Backpapier zu einer 1 cm dünnen Platte drücken.',
    'Fleischplatte 15 bis 18 Minuten backen, bis sie durchgegart und am Rand gebräunt ist, dann in dünne Streifen schneiden.',
    'Tomate und Gurke würfeln, Zwiebel in feine Ringe und Salat in Streifen schneiden. Joghurt mit fein geriebenem Knoblauch verrühren. Fladenbrot 2 Minuten im Ofen erwärmen.',
    'Kinderportion abnehmen. Erwachsene Fleisch leicht salzen und mit Gemüse und Joghurtsauce ins Fladenbrot füllen, nach Wunsch mit Chiliflocken.'
  ],
  kidName:'Mini-Donair-Teller',
  kid:'Fleischstreifen klein schneiden, Fladenbrot in weiche Stücke teilen und Tomate klein würfeln. Mit Naturjoghurt ohne Knoblauch und ohne Salz servieren.',
  leftover:'Donair-Pizza · 12 Min. – Fleischreste mit Tomate und etwas Käse auf Fladenbrot verteilen und im Ofen überbacken.',
  tipp:'Im Original kommt eine süße Kondensmilchsauce dazu, Joghurt mit Knoblauch ist frischer und ohne Zucker.'
},
{
  id:'ca-maple-mustard-chicken', name:'Maple Mustard Chicken · Ahorn-Senf-Hähnchen vom Blech mit Süßkartoffel und Rosenkohl', cuisine:'Kanada', flag:'🇨🇦',
  protein:'gefluegel', base:'kartoffeln', time:{a:10,c:35}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Süßkartoffel','Rosenkohl','Rote Zwiebel'], season:[10,11,12,1,2],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Süßkartoffel',q:200,u:'g',c:'gemuese'},
    {n:'Rosenkohl',q:120,u:'g',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Ahornsirup',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Süßkartoffel in 2 cm große Würfel schneiden, Rosenkohl halbieren und Zwiebel in Spalten schneiden. Mit Öl und Thymian mischen und 15 Minuten backen.',
    'Hähnchen in 3 cm große Stücke schneiden und zum Gemüse aufs Blech legen.',
    'Senf mit Ahornsirup verrühren und nur die Erwachsenenstücke damit bestreichen. Alles weitere 18 bis 20 Minuten backen, bis das Hähnchen innen nicht mehr rosa ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Blech-Hähnchen mit Ofengemüse',
  kid:'Hähnchen ohne Senfglasur garen und fein zerzupfen, Rosenkohl und Süßkartoffel sehr weich backen und zerdrücken. Ohne Salz.',
  leftover:'Hähnchen-Süßkartoffel-Salat · 8 Min. – Reste klein schneiden und mit Joghurt, Gurke und etwas Senf mischen.',
  tipp:'Ahornsirup karamellisiert schnell, deshalb die Glasur erst in der zweiten Hälfte der Backzeit auftragen.'
},
{
  id:'ca-fricot', name:'Fricot · akadischer Hähnchen-Kartoffel-Eintopf mit Karotten und Pastinake', cuisine:'Kanada', flag:'🇨🇦',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Pastinake','Zwiebel','Erbsen'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Pastinake',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:40,u:'g',c:'tk'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Bohnenkraut, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und in Öl glasig dünsten. Hähnchen in mundgerechte Stücke schneiden und 3 Minuten mitbraten.',
    'Kartoffeln, Karotte und Pastinake schälen, in 2 cm große Würfel schneiden und mit Brühe und Bohnenkraut zugeben.',
    'Zugedeckt 25 Minuten sanft köcheln, bis Gemüse und Hähnchen ganz weich sind. Erbsen für die letzten 4 Minuten zugeben.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und frischer Petersilie abschmecken.'
  ],
  kidName:'Hähnchen-Kartoffel-Topf',
  kid:'Hähnchen fein zerzupfen, Kartoffeln und Gemüse mit etwas Brühe grob zerdrücken. Ohne Salz und lauwarm servieren.',
  leftover:'Fricot-Pfanne · 10 Min. – Reste abtropfen lassen und in der Pfanne mit etwas Öl anbraten.',
  tipp:'Bohnenkraut ist das typische Kraut der Akadier, getrocknet hält es lange im Vorrat.'
},
{
  id:'ca-maple-salmon', name:'Maple Salmon · Ahorn-Lachs aus dem Ofen mit Wildreis und grünen Bohnen', cuisine:'Kanada', flag:'🇨🇦',
  protein:'fisch', base:'reis', time:{a:10,c:25}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['fisch','soja'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Grüne Bohnen','Karotten','Zitrone'], season:[],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Wildreis-Mischung',q:70,u:'g',c:'vorrat'},
    {n:'Grüne Bohnen, TK',q:120,u:'g',c:'tk'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ahornsirup',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Wildreis-Mischung nach Packungsangabe etwa 25 Minuten garen. Ofen auf 200 °C vorheizen.',
    'Bohnen und in Stifte geschnittene Karotte mit Öl auf einem Blech mischen und 10 Minuten backen.',
    'Lachs dazulegen. Ahornsirup mit Sojasauce und etwas Zitronensaft verrühren und nur die Erwachsenenstücke damit bestreichen. 12 bis 14 Minuten backen, bis der Fisch gerade durchgegart ist.',
    'Kinderportion abnehmen und den Lachs auf Gräten prüfen. Erwachsene mit Pfeffer und Zitrone servieren.'
  ],
  kidName:'Zarter Ofenlachs mit Reis',
  kid:'Lachs ohne Glasur backen, sorgfältig entgräten und zerpflücken. Bohnen und Karotten weich garen und klein schneiden, den bissfesten Wildreis mit etwas Wasser weich nachgaren.',
  leftover:'Wildreis-Salat · 8 Min. – Reis- und Lachsreste kalt mit Gurke, Apfelwürfeln und Joghurt mischen.',
  tipp:'Wildreis ist botanisch ein Wassergras aus den kanadischen Seen und hat mehr Eiweiß als gewöhnlicher Reis.'
},
{
  id:'ca-baked-haddock', name:'Baked Haddock · Ofenfisch mit Kräuter-Brotkruste, Kartoffel-Karotten-Stampf und Erbsen', cuisine:'Kanada', flag:'🇨🇦',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:20}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch','gluten','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Erbsen','Zitrone'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Vollkornbrot',q:0.5,u:'Scheiben',c:'brot'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln und Karotte schälen, würfeln und 15 Minuten weich kochen, Erbsen für die letzten 3 Minuten zugeben.',
    'Brot fein zerbröseln und mit Dill, abgeriebener Zitronenschale und Öl mischen. Fisch in eine Form legen, die Brösel darauf drücken und 12 bis 15 Minuten backen, bis der Fisch innen gar ist.',
    'Kartoffeln und Karotten abgießen, mit warmer Milch grob stampfen und die Erbsen unterheben.',
    'Kinderportion abnehmen und den Fisch auf Gräten prüfen. Erwachsene den Stampf mit Salz, Pfeffer und Zitronensaft abschmecken.'
  ],
  kidName:'Fisch mit Gemüse-Stampf',
  kid:'Fisch zerpflücken und gründlich auf Gräten prüfen, Erbsen im Stampf zerdrücken. Harte Bröselkruste für kleine Kinder abnehmen, ohne Salz.',
  leftover:'Fisch-Stampf-Küchlein · 15 Min. – Reste zu flachen Küchlein formen und in der Pfanne von beiden Seiten braten.',
  tipp:'Schellfisch ist das Original aus Nova Scotia, Kabeljau oder Seelachs funktionieren genauso.'
},
{
  id:'ca-pate-chinois', name:'Pâté chinois · Québecer Schichtauflauf mit Linsen, Mais und Kartoffelpüree', cuisine:'Kanada', flag:'🇨🇦',
  protein:'huelsen', base:'kartoffeln', time:{a:15,c:40}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Mais','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Berglinsen oder Tellerlinsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:80,u:'g',c:'vorrat'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen in der Brühe 25 Minuten weich köcheln. Gleichzeitig Kartoffeln schälen, würfeln und 15 Minuten weich kochen.',
    'Zwiebel und Karotte fein würfeln und in Öl 5 Minuten dünsten. Tomatenmark, Paprikapulver und die abgetropften Linsen untermischen.',
    'Ofen auf 200 °C vorheizen. Kartoffeln mit warmer Milch zu Püree stampfen. Linsen in eine Form geben, Mais darauf verteilen, mit Püree bedecken und 15 Minuten goldbraun backen.',
    'Kinderportion abnehmen. Erwachsene am Teller mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Pâté-chinois',
  kid:'Linsen und Mais mit dem Püree zu einem weichen Brei zerdrücken. Ohne Salz servieren.',
  leftover:'Pâté-Küchlein · 12 Min. – Reste zu Küchlein formen und in der Pfanne goldbraun braten.',
  tipp:'Das Original wird mit Rinderhack gemacht, Berglinsen behalten ihre Form und liefern ebenfalls viel Eiweiß.'
},
{
  id:'ca-soupe-aux-pois', name:'Soupe aux pois · Québecer Erbseneintopf mit gelben Schälerbsen und Vollkornbrot', cuisine:'Kanada', flag:'🇨🇦',
  protein:'huelsen', base:null, time:{a:10,c:50}, devices:[['topf','slowcooker']], method:'Topf oder Slowcooker',
  allergens:['gluten','sellerie'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Karotten','Sellerie','Zwiebel'], season:[],
  ing:[
    {n:'Gelbe Schälerbsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Staudensellerie',q:1,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Bohnenkraut, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Schälerbsen in einem Sieb gründlich abspülen. Zwiebel, Karotte und Sellerie klein würfeln und in Öl 4 Minuten dünsten.',
    'Erbsen, Brühe, Lorbeer und Bohnenkraut zugeben und zugedeckt 45 bis 50 Minuten köcheln, bis die Erbsen zerfallen. Dabei gelegentlich umrühren und bei Bedarf Wasser nachgießen.',
    'Lorbeerblatt entfernen und den Eintopf nach Wunsch teilweise pürieren. Vollkornbrot rösten.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Erbsenbrei mit Brotstreifen',
  kid:'Eintopf glatt pürieren und lauwarm anbieten, Brot in weiche Streifen zum Eintunken schneiden. Ohne Salz.',
  leftover:'Erbsen-Aufstrich · 5 Min. – Kalte, eingedickte Reste mit Zitronensaft verrühren und auf Vollkornbrot streichen.',
  tipp:'Im Slowcooker auf niedriger Stufe 6 Stunden garen, dann zerfallen die Erbsen ganz von allein.'
},
{
  id:'ca-three-sisters', name:'Three Sisters Stew · Eintopf aus Kürbis, Bohnen und Mais mit Vollkornbrot', cuisine:'Kanada', flag:'🇨🇦',
  protein:'huelsen', base:null, time:{a:15,c:25}, devices:[['topf']], method:'Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kürbis','Mais','Tomaten','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Hokkaido-Kürbis',q:200,u:'g',c:'gemuese'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Mais (Dose oder TK)',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und in Öl glasig dünsten. Kürbis mit Schale in 2 cm große Würfel schneiden und kurz mitdünsten.',
    'Tomaten, Brühe und Thymian zugeben und zugedeckt 15 Minuten köcheln, bis der Kürbis weich ist.',
    'Bohnen und Mais zugeben und 5 Minuten mitziehen lassen. Einen Teil des Kürbisses am Topfrand zerdrücken, damit der Eintopf sämig wird.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und etwas Chili abschmecken und mit geröstetem Vollkornbrot servieren.'
  ],
  kidName:'Kürbis-Bohnen-Brei',
  kid:'Kürbis, Bohnen und Mais gründlich zerdrücken, Brot in weiche Streifen schneiden. Ohne Salz und Chili.',
  leftover:'Kürbis-Bohnen-Quesadilla · 8 Min. – Eingedickte Reste mit etwas Käse zwischen zwei Tortillas in der Pfanne erhitzen.',
  tipp:'Mais, Bohnen und Kürbis wurden traditionell zusammen angebaut und ergänzen sich auch beim Eiweiß.'
},
{
  id:'ca-lazy-perogies', name:'Lazy Perogies · Vollkornnudel-Pfanne mit Hüttenkäse, Röstzwiebeln und Brokkoli', cuisine:'Kanada', flag:'🇨🇦',
  protein:'milch', base:'nudeln', time:{a:10,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Brokkoli','Erbsen'], season:[6,7,8,9,10],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Hüttenkäse',q:100,u:'g',c:'kuehl'},
    {n:'Cheddar, gerieben',q:15,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln nach Packungsangabe etwa 10 Minuten kochen, Brokkoliröschen und Erbsen für die letzten 4 Minuten mitgaren.',
    'Zwiebel in feine Halbringe schneiden und in Öl bei mittlerer Hitze 8 Minuten goldbraun braten.',
    'Nudeln und Gemüse abgießen, in die Pfanne geben und mit Hüttenkäse, Cheddar und Dill vermischen, bis der Käse schmilzt.',
    'Kinderportion abnehmen. Erwachsene mit Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Käse-Nudeln mit Gemüse',
  kid:'Nudeln klein schneiden, Brokkoli sehr weich garen und zerdrücken, nur weich gebratene Zwiebeln untermischen. Ohne Salz.',
  leftover:'Perogy-Auflauf · 15 Min. – Reste in eine Form geben, mit etwas Käse bestreuen und bei 200 °C überbacken.',
  tipp:'Hüttenkäse ersetzt die Quark-Kartoffel-Füllung der Teigtaschen und liefert viel Eiweiß.'
},
{
  id:'ca-western-sandwich', name:'Western Sandwich · Paprika-Zwiebel-Omelett im Vollkorntoast mit Tomate und Gurke', cuisine:'Kanada', flag:'🇨🇦',
  protein:'ei', base:null, time:{a:8,c:8}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Zwiebel','Babyspinat','Tomaten','Gurke'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:30,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Paprika und Zwiebel sehr fein würfeln und in Öl 4 Minuten weich dünsten, Spinat kurz zusammenfallen lassen.',
    'Eier verquirlen, über das Gemüse gießen und bei mittlerer Hitze 3 Minuten stocken lassen. Wenden und 1 bis 2 Minuten fertig garen, bis das Ei ganz fest ist.',
    'Brot toasten, Omelett passend zuschneiden und mit Tomaten- und Gurkenscheiben zwischen die Scheiben legen.',
    'Kinderportion abnehmen. Erwachsene das Omelett mit Salz, Pfeffer und nach Wunsch Senf würzen.'
  ],
  kidName:'Omelett-Toast-Streifen',
  kid:'Omelett vollständig durchgaren und in Streifen schneiden, Toast ohne harte Rinde anbieten und Tomate klein würfeln. Ohne Salz.',
  leftover:'Omelett-Wrap · 5 Min. – Übriges Omelett mit Salat in eine Vollkorn-Weizentortilla rollen.',
  tipp:'In Kanada heißt der Klassiker Western Sandwich, in den USA Denver Sandwich.'
},
{
  id:'ca-galettes-sarrasin', name:'Galettes de sarrasin · Buchweizen-Galettes mit Ei, Spinat, Pilzen und Käse', cuisine:'Kanada', flag:'🇨🇦',
  protein:'ei', base:null, time:{a:12,c:12}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Babyspinat','Pilze'], season:[],
  ing:[
    {n:'Buchweizenmehl',q:50,u:'g',c:'vorrat'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Champignons',q:60,u:'g',c:'gemuese'},
    {n:'Cheddar, gerieben',q:20,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Buchweizenmehl mit Milch, 50 ml Wasser und einem halben Ei glatt rühren und 5 Minuten quellen lassen.',
    'Champignons in Scheiben schneiden und mit dem Spinat in wenig Öl 4 Minuten braten, dann herausnehmen.',
    'Pfanne dünn ölen, pro Portion eine große Galette dünn ausbacken und nach 2 Minuten wenden. Ein Ei in die Mitte geben, mit Gemüse und Käse belegen und zugedeckt 3 bis 4 Minuten garen, bis das Ei ganz fest ist. Ränder einklappen.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Galette mit Ei',
  kid:'Ei vollständig durchgaren, Galette in kleine Quadrate schneiden und den Spinat fein hacken. Ohne Salz.',
  leftover:'Galette-Röllchen · 5 Min. – Übrige Galettes mit Frischkäse und Gurkenstiften belegen und aufrollen.',
  tipp:'Reines Buchweizenmehl ist glutenfrei, manche Mischungen enthalten aber Weizen, deshalb die Packung prüfen.'
},
{
  id:'ca-hodge-podge', name:'Hodge Podge · Nova-Scotia-Sommergemüse mit jungen Kartoffeln in Milchsauce', cuisine:'Kanada', flag:'🇨🇦',
  protein:'milch', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf']], method:'Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Grüne Bohnen','Erbsen'], season:[6,7,8],
  ing:[
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Grüne Bohnen',q:100,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Butter',q:5,u:'g',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'}
  ],
  steps:[
    'Junge Kartoffeln waschen und halbieren, Karotten in dicke Scheiben schneiden, grüne Bohnen putzen und halbieren.',
    'Kartoffeln in wenig Wasser 6 Minuten kochen, Karotten und grüne Bohnen zugeben und weitere 6 Minuten garen, Erbsen und weiße Bohnen für die letzten 3 Minuten. Bis auf einen kleinen Rest Kochwasser abgießen.',
    'Milch mit Stärke verrühren, zugießen und unter Rühren aufkochen, bis die Sauce leicht bindet. Butter und Dill unterziehen.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Sommergemüse in Milchsauce',
  kid:'Kartoffeln und Gemüse weich zerdrücken, grüne Bohnen in kurze Stücke schneiden und weiße Bohnen zerquetschen. Ohne Salz.',
  leftover:'Gemüse-Bratkartoffeln · 10 Min. – Reste abtropfen lassen und in der Pfanne mit etwas Öl knusprig braten.',
  tipp:'In Nova Scotia kommt Hodge Podge auf den Tisch, sobald die ersten neuen Kartoffeln und Bohnen geerntet sind.'
},
{
  id:'ca-feves-au-lard', name:'Fèves au lard · Québecer Ahorn-Bohnentopf aus dem Ofen mit Vollkornbrot und Apfel-Krautsalat', cuisine:'Kanada', flag:'🇨🇦',
  protein:'huelsen', base:null, time:{a:10,c:45}, devices:[['ofen','topf']], method:'Backofen oder Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Apfel','Tomaten','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Ahornsirup',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Zwiebel fein würfeln und mit Bohnen, passierten Tomaten, Ahornsirup und 100 ml Wasser in einer ofenfesten Form mischen.',
    'Zugedeckt 40 bis 45 Minuten backen, bis die Sauce eingedickt ist, nach der Hälfte umrühren. Im Topf bei kleiner Hitze dauert es etwa 25 Minuten.',
    'Weißkohl fein hobeln, Apfel raspeln und beides mit Joghurt mischen. Brot rösten.',
    'Kinderportion abnehmen. Erwachsene die Bohnen mit Senf, Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Bohnen-Brot-Teller',
  kid:'Bohnen zerdrücken und Brot in weiche Streifen schneiden. Statt Krautsalat weich gedünsteten Kohl mit geriebenem Apfel anbieten, ohne Salz und Senf.',
  leftover:'Bohnen-Toast · 5 Min. – Reste erhitzen und mit einem Spiegelei auf geröstetem Vollkornbrot servieren.',
  tipp:'Das Original gart stundenlang mit Speck, mit Senf und Ahornsirup schmeckt der Bohnentopf auch ohne Fleisch rund.'
}
);
