/* Grün geplant · Chile · Top 15 */
RECIPES.push(
{
  id:'cl-pastel-de-choclo', name:'Pastel de Choclo · Maisauflauf mit Rinderhack, Ei, Oliven und Basilikum', cuisine:'Chile', flag:'🇨🇱',
  protein:'fleisch', base:null, time:{a:20,c:30}, devices:[['pfanne'],['topf'],['ofen']], method:'Pfanne + Topf + Backofen',
  allergens:['milch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Mais','Zwiebel','Tomaten','Oliven'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Mais (Dose oder TK)',q:200,u:'g',c:'vorrat'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Schwarze Oliven, entsteint',q:3,u:'Stk.',c:'vorrat'},
    {n:'Basilikum, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Ei 10 Minuten hart kochen. Den größten Teil der Zwiebel fein würfeln und mit dem Hack 8 Minuten krümelig braten, bis es durchgegart ist, dann mit Kreuzkümmel, Paprikapulver und 3 EL Wasser 2 Minuten schmoren.',
    'Mais mit Milch und Basilikum fein pürieren und im Topf unter Rühren 5 Minuten zu einem dicken Brei einkochen.',
    'Hack in eine Auflaufform geben, Eischeiben und Oliven darauf verteilen, mit dem Maisbrei bedecken und 20 Minuten backen, bis die Oberfläche goldbraun ist.',
    'Kinderportion ohne Oliven abnehmen und etwas abkühlen lassen. Für die Erwachsenen Tomaten in Scheiben mit der restlichen Zwiebel als Ensalada chilena anrichten und alles mit Salz würzen.'
  ],
  nutri:{p:['Rindfleisch','Eier'],f:['Mais','Tomaten'],i:['Rindfleisch','Eier'],fat:['Oliven']},
  kidName:'Mini-Maisauflauf',
  kid:'Ohne Oliven abnehmen, Ei klein schneiden und den Auflauf lauwarm mit der Gabel etwas zerdrücken. Kein Salz, die Maiskruste ist von Natur aus mild-süß.',
  leftover:'Mais-Hack-Pfanne · 8 Min. – Auflaufreste mit etwas Wasser in der Pfanne vollständig durcherhitzen.',
  extras:[], tipp:'In Chile wird die Maiskruste oft mit Zucker bestreut; hier bleibt sie ohne, das Basilikum gibt genug Aroma.'
},
{
  id:'cl-cazuela-de-ave', name:'Cazuela de Ave · Hühnertopf mit Kartoffeln, Kürbis, Mais und grünen Bohnen', cuisine:'Chile', flag:'🇨🇱',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Kürbis','Mais','Grüne Bohnen','Karotten'], season:[9,10,11],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:60,u:'g',c:'vorrat'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in große Stücke schneiden und in Öl rundum 4 Minuten anbraten. Zwiebel und Karotte in Stücken kurz mitbraten.',
    'Mit Brühe aufgießen, Oregano zugeben und 10 Minuten köcheln.',
    'Kartoffeln und Kürbis in große Würfel schneiden, zugeben und 12 Minuten garen. Bohnen und Mais zugeben und 6 Minuten weitergaren, bis alles weich und das Hähnchen vollständig durchgegart ist.',
    'Kinderportion ungesalzen abnehmen und alles klein schneiden. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Hähnchen'],f:['Kartoffeln','Kürbis','Grüne Bohnen'],i:['Hähnchen'],fat:['Olivenöl']},
  kidName:'Kleiner Hühnertopf',
  kid:'Hähnchen fein zerzupfen, Kartoffeln und Kürbis mit etwas Brühe zerdrücken, Bohnen klein schneiden und Mais leicht zerdrücken. Ohne Salz.',
  leftover:'Hühner-Gemüse-Reis · 10 Min. – Reste mit gekochtem Reis vollständig erhitzen und dicker einkochen.',
  extras:[], tipp:'In Chile kommt von jedem Gemüse ein großes Stück in den Teller, gegessen wird mit Messer und Löffel.'
},
{
  id:'cl-pollo-arvejado', name:'Pollo Arvejado · Hähnchen mit Erbsen und Karotten in heller Soße, dazu Reis', cuisine:'Chile', flag:'🇨🇱',
  protein:'gefluegel', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Erbsen','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Reis',q:75,u:'g',c:'vorrat'},
    {n:'Erbsen, TK',q:100,u:'g',c:'tk'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen und in etwa 14 Minuten garen. Hähnchen in mundgerechte Würfel, Karotten in kleine Würfel schneiden.',
    'Hähnchen in Öl 4 Minuten anbraten, Zwiebel, Knoblauch und Karotten zugeben und 3 Minuten mitbraten.',
    'Brühe, Paprikapulver, Oregano und Erbsen zugeben und 6 Minuten köcheln, bis das Hähnchen durchgegart und die Soße leicht eingekocht ist.',
    'Kinderportion ungesalzen abnehmen und das Hähnchen klein schneiden. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Hähnchen','Erbsen'],f:['Erbsen','Karotten'],i:['Hähnchen','Erbsen'],fat:['Olivenöl']},
  kidName:'Hähnchen-Erbsen-Reis',
  kid:'Hähnchen fein schneiden, Erbsen leicht zerdrücken und mit Soße unter den Reis mischen. Ohne Salz.',
  leftover:'Erbsen-Reis-Pfanne · 8 Min. – Reste mit einem Ei in der Pfanne vollständig durchbraten.',
  extras:[], tipp:'Mit Kartoffelpüree statt Reis schmeckt es wie bei chilenischen Großmüttern.'
},
{
  id:'cl-lomo-a-lo-pobre', name:'Lomo a lo Pobre · Rindersteak mit Ofenkartoffeln, Schmorzwiebeln und Spiegelei', cuisine:'Chile', flag:'🇨🇱',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen','airfryer'],['pfanne']], method:'Backofen + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Zwiebel','Tomaten','Salat'], season:[],
  ing:[
    {n:'Rinderhüftsteak',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls und Paprikapulver mischen und 25 bis 30 Minuten knusprig backen.',
    'Zwiebel in Ringe schneiden und im restlichen Öl bei mittlerer Hitze 10 Minuten weich und goldbraun schmoren, dann herausnehmen.',
    'Steak trocken tupfen, pro Seite 3 bis 4 Minuten braten und 5 Minuten ruhen lassen. Ei in derselben Pfanne braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ungesalzen abnehmen und das Fleisch in dünne Streifen schneiden. Erwachsene mit Salz und Pfeffer würzen und mit Tomaten und Salat servieren.'
  ],
  nutri:{p:['Rindfleisch','Ei'],f:['Kartoffeln','Tomaten'],i:['Rindfleisch','Ei'],fat:['Olivenöl']},
  kidName:'Kleiner Steak-Teller',
  kid:'Kinderstück vom Steak vollständig durchbraten und in sehr dünne, kurze Streifen schneiden, Ei ganz durchgaren. Kartoffeln weich, ohne Salz.',
  leftover:'Bauernfrühstück · 10 Min. – Kartoffel- und Fleischreste mit Zwiebeln und einem Ei in der Pfanne durchbraten.',
  extras:[], tipp:'Die Ofenkartoffeln ersetzen die frittierten Pommes, die in Chile traditionell dazugehören.'
},
{
  id:'cl-empanadas-de-pino', name:'Empanadas de Pino · Vollkorn-Empanadas aus dem Ofen mit Rinderhack, Ei und Oliven', cuisine:'Chile', flag:'🇨🇱',
  protein:'fleisch', base:null, time:{a:30,c:25}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Tomaten','Oliven'], season:[],
  ing:[
    {n:'Weizenvollkornmehl',q:70,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Schwarze Oliven, entsteint',q:2,u:'Stk.',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl, Joghurt, Öl und 1 bis 2 EL Wasser zu einem glatten Teig kneten und abgedeckt ruhen lassen. Ei 10 Minuten hart kochen.',
    'Zwiebel fein würfeln und mit dem Hack 10 Minuten braten, bis es durchgegart und die Zwiebel weich ist, dann Kreuzkümmel und Paprikapulver unterrühren.',
    'Ofen auf 200 °C vorheizen. Teig dünn zu Kreisen von etwa 15 cm ausrollen, Füllung und Eistücke daraufgeben, Oliven nur in die Erwachsenen-Empanadas legen. Zu Halbmonden falten, Ränder fest andrücken und 20 bis 25 Minuten goldbraun backen.',
    'Kinderportion etwas abkühlen lassen und aufschneiden, damit der Dampf entweicht. Erwachsene mit Tomatenscheiben servieren und am Tisch mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Rindfleisch','Ei','Joghurt'],f:['Vollkornmehl','Zwiebel'],i:['Rindfleisch','Ei'],fat:['Olivenöl','Oliven']},
  kidName:'Mini-Empanada',
  kid:'Kinder-Empanada ohne Oliven füllen und das Ei in der Füllung klein hacken. Nach dem Backen lauwarm in Streifen schneiden, ohne Salz.',
  leftover:'Empanada-Pausenbrot · 8 Min. – Übrige Empanadas im Ofen vollständig aufbacken und mit Gurkensticks servieren.',
  extras:[], tipp:'Empanadas lassen sich ungebacken einfrieren und gefroren mit 10 Minuten mehr Backzeit backen.'
},
{
  id:'cl-charquican', name:'Charquicán · Kürbis-Kartoffel-Stampf mit Rinderhack, Mais und Erbsen', cuisine:'Chile', flag:'🇨🇱',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kürbis','Kartoffeln','Mais','Erbsen','Zwiebel'], season:[9,10,11,12],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:200,u:'g',c:'gemuese'},
    {n:'Hokkaido-Kürbis',q:150,u:'g',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:50,u:'g',c:'vorrat'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel würfeln und in Öl 3 Minuten andünsten, Hack zugeben und 6 Minuten krümelig braten, bis es durchgegart ist.',
    'Kartoffeln und Kürbis in kleine Würfel schneiden, mit Paprikapulver, Oregano und 200 ml Wasser zugeben und zugedeckt 15 Minuten weich köcheln.',
    'Mais und Erbsen zugeben, 4 Minuten mitgaren und alles mit dem Kartoffelstampfer grob zerdrücken.',
    'Kinderportion ungesalzen abnehmen und etwas feiner stampfen. Erwachsene mit Salz, Pfeffer und nach Belieben Chiliflocken oder Merkén würzen.'
  ],
  nutri:{p:['Rindfleisch'],f:['Kürbis','Kartoffeln','Erbsen'],i:['Rindfleisch','Erbsen'],fat:['Olivenöl']},
  kidName:'Kürbis-Hack-Stampf',
  kid:'Fein stampfen, damit Mais und Erbsen zerdrückt sind, und lauwarm servieren. Ohne Salz und Chili.',
  leftover:'Charquicán-Taler · 15 Min. – Reste mit einem Ei verkneten, zu Talern formen und in der Pfanne durchbraten.',
  extras:['ei'], tipp:'Original wird Charqui verwendet, getrocknetes Rindfleisch; mageres Hack ist salzärmer und schneller gar.'
},
{
  id:'cl-caldillo-de-congrio', name:'Caldillo de Congrio · Fischtopf mit Kartoffeln, Tomaten und Karotten', cuisine:'Chile', flag:'🇨🇱',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Tomaten','Karotten','Rote Paprika','Zwiebel'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch, Karotte und Paprika würfeln und in Öl 5 Minuten andünsten.',
    'Kartoffeln in Scheiben und Tomaten in Würfel schneiden, mit Brühe und Oregano zugeben und 15 Minuten köcheln, bis die Kartoffeln fast weich sind.',
    'Fisch in große Stücke schneiden, in den Topf legen und bei kleiner Hitze zugedeckt 6 bis 8 Minuten gar ziehen lassen.',
    'Kinderportion ungesalzen abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Fisch'],f:['Kartoffeln','Tomaten','Karotten'],i:[],fat:['Olivenöl']},
  kidName:'Kleiner Fischtopf',
  kid:'Fisch sorgfältig entgräten und zerpflücken, Kartoffeln und Karotten mit etwas Brühe zerdrücken. Ohne Salz.',
  leftover:'Fisch-Kartoffel-Pfanne · 10 Min. – Reste ohne viel Brühe in der Pfanne vollständig durcherhitzen.',
  extras:[], tipp:'Pablo Neruda hat diesem Fischtopf ein Gedicht gewidmet, die „Ode an den Caldillo de Congrio“.'
},
{
  id:'cl-chupe-de-pescado', name:'Chupe de Pescado · Fisch-Brot-Auflauf mit Milch, Käse und Spinat', cuisine:'Chile', flag:'🇨🇱',
  protein:'fisch', base:null, time:{a:15,c:25}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['fisch','milch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Babyspinat','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornbrot',q:1.5,u:'Scheiben',c:'brot'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Brot würfeln und in der Milch einweichen. Zwiebel würfeln, in Öl 5 Minuten weich dünsten und den Spinat kurz zusammenfallen lassen.',
    'Fisch in Würfel schneiden. Eingeweichtes Brot mit der Gabel zu einem Brei zerdrücken und mit Zwiebel, Spinat und Fisch mischen.',
    'In eine kleine Auflaufform füllen, mit Käse und Paprikapulver bestreuen und 18 bis 20 Minuten backen, bis der Fisch durchgegart und die Oberfläche goldbraun ist.',
    'Kinderportion abnehmen, nochmals auf Gräten prüfen und etwas abkühlen lassen. Erwachsene mit Pfeffer würzen und mit Tomatenscheiben servieren, Salz ist dank Käse kaum nötig.'
  ],
  nutri:{p:['Fisch','Milch','Käse'],f:['Vollkornbrot','Spinat'],i:['Spinat'],fat:['Käse','Olivenöl']},
  kidName:'Fisch-Brot-Auflauf',
  kid:'Fisch gründlich auf Gräten prüfen und den Auflauf lauwarm mit der Gabel zerdrücken. Nicht nachsalzen, der Käse würzt schon.',
  leftover:'Fisch-Bratlinge · 12 Min. – Kalte Reste zu Talern formen und in der Pfanne von beiden Seiten durchbraten.',
  extras:[], tipp:'An der chilenischen Küste wird Chupe meist mit Meeresfrüchten gemacht; mit Fischfilet ist er kinderfreundlicher.'
},
{
  id:'cl-salmon-a-la-plancha', name:'Salmón a la Plancha · Lachs aus der Pfanne mit Quinoa, Avocado und Ensalada chilena', cuisine:'Chile', flag:'🇨🇱',
  protein:'fisch', base:'quinoa', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Zwiebel','Avocado','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Quinoa',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Quinoa gründlich spülen und in der doppelten Menge Wasser etwa 14 Minuten garen.',
    'Tomaten in Spalten und Zwiebel in sehr feine Ringe schneiden, mit Koriander und der Hälfte des Öls zur Ensalada chilena mischen. Avocado in Scheiben schneiden.',
    'Lachs trocken tupfen und im restlichen Öl auf der Hautseite 5 Minuten, dann auf der anderen Seite 2 bis 3 Minuten braten, bis er gerade durch ist.',
    'Kinderportion ungesalzen abnehmen und den Lachs zerpflücken. Erwachsene mit Zitrone, Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Lachs','Quinoa'],f:['Quinoa','Tomaten','Avocado'],i:['Quinoa'],fat:['Lachs (Omega-3)','Avocado','Olivenöl']},
  kidName:'Lachs mit Quinoa und Avocado',
  kid:'Lachs entgräten und zerpflücken, Avocado zerdrücken und Tomaten fein würfeln. Ohne rohe Zwiebel, Salz und Zitrone.',
  leftover:'Lachs-Quinoa-Salat · 5 Min. – Kalte Reste mit Gurke und Zitrone zu einem Salat mischen.',
  extras:[], tipp:'Chile gehört zu den größten Lachserzeugern der Welt; Lachs mit ASC- oder Bio-Siegel wählen.'
},
{
  id:'cl-porotos-granados', name:'Porotos Granados · Bohneneintopf mit Kürbis, Mais und Basilikum', cuisine:'Chile', flag:'🇨🇱',
  protein:'huelsen', base:null, time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kürbis','Mais','Tomaten','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Hokkaido-Kürbis',q:200,u:'g',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:80,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Basilikum, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel und Knoblauch würfeln und in Öl 3 Minuten andünsten. Tomate würfeln und mit Paprikapulver 2 Minuten mitschmoren.',
    'Kürbis in Würfel schneiden, mit 250 ml Wasser zugeben und 15 Minuten köcheln, bis er zerfällt und den Eintopf bindet.',
    'Bohnen und Mais zugeben und 5 Minuten mitgaren, dann das gehackte Basilikum unterrühren.',
    'Kinderportion ungesalzen abnehmen und Bohnen und Mais zerdrücken. Erwachsene mit Salz und nach Belieben Chiliflocken oder Merkén würzen.'
  ],
  nutri:{p:['Weiße Bohnen'],f:['Weiße Bohnen','Kürbis','Mais'],i:['Weiße Bohnen'],fat:['Olivenöl']},
  kidName:'Kürbis-Bohnen-Mus',
  kid:'Bohnen und Mais gründlich zerdrücken und unter den weichen Kürbis mischen. Ohne Salz und Chili.',
  leftover:'Bohnen-Polenta · 10 Min. – Reste vollständig erhitzen und über schnell gegarte Polenta geben.',
  extras:['ei','feta'], tipp:'In Chile werden frische Bohnen aus der Hülse verwendet; weiße Bohnen aus der Dose sind der einfachste Ersatz.'
},
{
  id:'cl-porotos-con-riendas', name:'Porotos con Riendas · Bohneneintopf mit Vollkorn-Spaghetti, Kürbis und Spinat', cuisine:'Chile', flag:'🇨🇱',
  protein:'huelsen', base:'nudeln', time:{a:10,c:14}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kürbis','Karotten','Zwiebel','Babyspinat'], season:[9,10,11],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornnudeln',q:70,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:30,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotte fein würfeln und in Öl mit Paprikapulver 3 Minuten andünsten.',
    'Kürbis in kleine Würfel schneiden, mit der Brühe zugeben und aufkochen. Spaghetti in kurze Stücke brechen und darin 10 Minuten garen.',
    'Bohnen und Spinat zugeben und 2 Minuten mitziehen lassen, bis der Eintopf sämig ist.',
    'Kinderportion ungesalzen abnehmen und die Bohnen zerdrücken. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Weiße Bohnen','Vollkornnudeln'],f:['Weiße Bohnen','Vollkornnudeln','Kürbis'],i:['Weiße Bohnen','Spinat'],fat:['Olivenöl']},
  kidName:'Bohnen-Nudel-Topf',
  kid:'Bohnen zerdrücken, Nudelstücke und Kürbis weich garen und lauwarm servieren. Ohne Salz.',
  leftover:'Bohnen-Nudel-Auflauf · 20 Min. – Reste mit etwas Käse bestreuen und im Ofen vollständig durcherhitzen.',
  extras:['feta'], tipp:'„Riendas“ heißt Zügel, gemeint sind die Spaghetti, die wie Lederriemen im Eintopf liegen.'
},
{
  id:'cl-lentejas', name:'Lentejas con Arroz · Linseneintopf mit Karotten, Paprika und Vollkornreis', cuisine:'Chile', flag:'🇨🇱',
  protein:'huelsen', base:'reis', time:{a:10,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Rote Paprika','Zwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen und in etwa 30 Minuten garen. Zwiebel, Knoblauch, Karotte und Paprika würfeln und in Öl 4 Minuten andünsten.',
    'Paprikapulver und Kreuzkümmel kurz mitrösten, Linsen abspülen und mit 400 ml Wasser zugeben.',
    'Zugedeckt 25 Minuten köcheln, bis die Linsen weich sind, zum Schluss den Spinat unterheben.',
    'Kinderportion ungesalzen abnehmen und die Linsen leicht zerdrücken. Erwachsene mit Salz und Pfeffer würzen und mit Reis servieren.'
  ],
  nutri:{p:['Linsen','Vollkornreis'],f:['Linsen','Vollkornreis','Karotten'],i:['Linsen','Spinat'],fat:['Olivenöl']},
  kidName:'Linsen mit Reis',
  kid:'Linsen weich garen, leicht zerdrücken und mit dem Reis mischen. Spinat fein hacken, ohne Salz.',
  leftover:'Linsen-Reis-Bratlinge · 15 Min. – Reste mit einem Ei vermengen, zu Talern formen und in der Pfanne durchbraten.',
  extras:['ei','feta'], tipp:'Ein Spritzer Zitrone kurz vor dem Servieren macht das Eisen aus den Linsen besser verfügbar.'
},
{
  id:'cl-humitas', name:'Humitas al Horno · Mais-Basilikum-Küchlein aus dem Ofen mit Tomatensalat', cuisine:'Chile', flag:'🇨🇱',
  protein:'milch', base:null, time:{a:15,c:25}, devices:[['ofen']], method:'Backofen, Muffinblech',
  allergens:['milch','ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Mais','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Mais (Dose oder TK)',q:200,u:'g',c:'vorrat'},
    {n:'Hüttenkäse',q:100,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Polenta (Maisgrieß)',q:30,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Basilikum, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 190 °C vorheizen. Zwiebel fein würfeln. Mais mit Ei, Basilikum und Paprikapulver grob pürieren.',
    'Hüttenkäse, Polenta und Zwiebel unterrühren und den Teig 5 Minuten quellen lassen.',
    'In geölte Muffinmulden füllen und 22 bis 25 Minuten backen, bis die Küchlein fest und goldbraun sind und das Ei vollständig gestockt ist.',
    'Kinderportion abnehmen, etwas abkühlen lassen und halbieren. Tomaten in Spalten schneiden und für die Erwachsenen mit Salz, Pfeffer und dem restlichen Öl anmachen.'
  ],
  nutri:{p:['Hüttenkäse','Ei'],f:['Mais','Tomaten'],i:['Ei'],fat:['Olivenöl']},
  kidName:'Mais-Küchlein',
  kid:'Küchlein lauwarm halbieren, damit die weiche Mitte sichtbar ist; das Ei ist vollständig durchgebacken. Tomaten fein würfeln, ohne Salz.',
  leftover:'Humita-Brotzeit · 5 Min. – Kalte Küchlein mit Gurke und Joghurtdip als Abendbrot servieren.',
  extras:['joghurt'], tipp:'Traditionell wird die Masse in Maisblätter gewickelt und gedämpft; die Muffinform macht es alltagstauglich.'
},
{
  id:'cl-tortilla-de-acelga', name:'Tortilla de Acelga · Mangold-Omelett mit Tomaten und Vollkornbrot', cuisine:'Chile', flag:'🇨🇱',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Mangold','Zwiebel','Tomaten'], season:[6,7,8],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Mangold',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mangoldstiele in feine Streifen, Blätter grob schneiden. Zwiebel und Knoblauch würfeln und mit den Stielen in Öl 4 Minuten dünsten.',
    'Blätter zugeben und 2 Minuten zusammenfallen lassen. Eier mit Oregano verquirlen und über das Gemüse gießen.',
    'Zugedeckt bei kleiner Hitze 6 Minuten stocken lassen, wenden und 1 bis 2 Minuten weitergaren, bis das Ei vollständig fest ist.',
    'Kinderportion ungesalzen abnehmen und in Streifen schneiden. Erwachsene mit Salz und Pfeffer würzen und mit Tomatenscheiben und Brot servieren.'
  ],
  nutri:{p:['Eier'],f:['Mangold','Vollkornbrot'],i:['Eier','Mangold'],fat:['Olivenöl','Eier']},
  kidName:'Mangold-Omelett-Streifen',
  kid:'Omelett vollständig durchgaren und in weiche Streifen schneiden, Mangold fein hacken. Tomaten fein würfeln, ohne Salz.',
  leftover:'Omelett-Sandwich · 5 Min. – Kalte Omelettstücke mit Tomate auf Vollkornbrot legen.',
  extras:['feta','huettenkaese'], tipp:'Statt Mangold eignen sich Spinat oder geraspelte Zucchini.'
},
{
  id:'cl-guiso-de-zapallo-italiano', name:'Guiso de Zapallo Italiano · Zucchini-Mais-Ragout mit Rührei und Reis', cuisine:'Chile', flag:'🇨🇱',
  protein:'ei', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zucchini','Mais','Rote Paprika','Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Zucchini',q:1,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Mais (Dose oder TK)',q:60,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis aufsetzen und in etwa 14 Minuten garen. Zwiebel, Knoblauch und Paprika würfeln und in Öl 3 Minuten andünsten.',
    'Zucchini würfeln, mit Mais und Oregano zugeben und 7 Minuten weich schmoren.',
    'Eier verquirlen, über das Gemüse gießen und unter Rühren 3 Minuten garen, bis sie vollständig gestockt sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und nach Belieben Chiliflocken oder Merkén würzen und mit Reis servieren.'
  ],
  nutri:{p:['Eier'],f:['Zucchini','Mais','Paprika'],i:['Eier'],fat:['Olivenöl','Eier']},
  kidName:'Zucchini-Rührei mit Reis',
  kid:'Ei vollständig durchgaren, Zucchini weich schmoren, Mais zerdrücken und alles mit Reis mischen. Ohne Salz und Chili.',
  leftover:'Gefüllte Tortilla · 8 Min. – Reste vollständig erhitzen und in eine Vollkorn-Tortilla rollen.',
  extras:['feta','kichererbsen'], tipp:'„Zapallo italiano“ ist in Chile der Name für Zucchini.'
}
);
