/* Grün geplant · Philippinen · Top 15 */
RECIPES.push(
{
  id:'ph-chicken-adobo', name:'Chicken Adobo · Hähnchen geschmort in Essig, Knoblauch und Lorbeer', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'gefluegel', base:'reis', time:{a:10,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['soja'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Grüne Bohnen','Karotten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Grüne Bohnen',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:2,u:'TL',c:'vorrat',p:true},
    {n:'Lorbeerblatt',q:1,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Hähnchen in große Stücke schneiden und in Öl 5 Minuten rundum anbraten.',
    'Zwiebelspalten und angedrückten Knoblauch 2 Minuten mitbraten. Essig, Lorbeerblatt und 150 ml Wasser zugeben und zugedeckt 20 Minuten sanft schmoren.',
    'Nach 10 Minuten Karottenscheiben und Bohnenstücke zugeben und mitgaren, bis Hähnchen und Gemüse weich sind. Zum Schluss offen 3 Minuten einkochen lassen.',
    'Lorbeerblatt entfernen. Kinderportion ohne Sojasauce abnehmen, dann die Soße mit Sojasauce abschmecken und für Erwachsene nach Wunsch mit Pfeffer und Chili würzen.'
  ],
  kidName:'Mildes Adobo-Hähnchen',
  kid:'Hähnchen fein zerzupfen und mit etwas Soße unter den Reis mischen, Karotten und Bohnen sehr weich garen und klein schneiden. Ohne Sojasauce servieren.',
  leftover:'Adobo-Reispfanne · 10 Min. – Reis- und Hähnchenreste in der Pfanne vollständig durchbraten, wie es auf den Philippinen zum Frühstück üblich ist.',
  tipp:'Adobo schmeckt aufgewärmt am nächsten Tag noch besser.'
},
{
  id:'ph-tinola', name:'Tinola · Ingwer-Hühnertopf mit Zucchini und Spinat', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'gefluegel', base:'reis', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zucchini','Babyspinat','Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Jasminreis',q:70,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Ingwer in feine Streifen schneiden und in Öl 3 Minuten dünsten.',
    'Hähnchen in Stücke schneiden, 3 Minuten mitbraten, mit Brühe aufgießen und zugedeckt 15 Minuten sanft köcheln.',
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen. Zucchiniwürfel in den Topf geben, 6 Minuten weich garen und den Spinat unterrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch Chili würzen.'
  ],
  kidName:'Ingwer-Hühnertopf mild',
  kid:'Ingwerstreifen herausnehmen, Hähnchen fein zerzupfen und Zucchini zerdrücken. Mit wenig Brühe über den Reis geben, damit es nicht zu suppig ist.',
  leftover:'Tinola-Reistopf · 10 Min. – Reste mit dem übrigen Reis zu einem dicken Reistopf vollständig aufkochen.',
  tipp:'Original kommen grüne Papaya oder Chayote hinein, Zucchini ist ein milder Ersatz.'
},
{
  id:'ph-bistek-tagalog', name:'Bistek Tagalog · Rindfleisch mit Zwiebeln, Limette und Brokkoli', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'fleisch', base:'reis', time:{a:10,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Brokkoli','Limette'], season:[6,7,8,9,10],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:2,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen und Brokkoliröschen in den letzten 5 Minuten auf dem Reis dämpfen.',
    'Fleisch mit geriebenem Knoblauch und dem Saft der Limette mischen. Zwiebel in Ringe schneiden, in Öl 4 Minuten weich braten und herausnehmen.',
    'Fleisch bei starker Hitze 2 bis 3 Minuten braten, bis es vollständig durch ist, dann Zwiebelringe und 3 EL Wasser zugeben.',
    'Kinderportion ohne Sojasauce abnehmen. Rest mit Sojasauce abschmecken, Erwachsene nach Wunsch mit Pfeffer würzen.'
  ],
  kidName:'Zartes Zwiebelfleisch',
  kid:'Fleisch vollständig durchbraten und sehr fein schneiden, Brokkoli weich dämpfen. Ohne Sojasauce mit weichen Zwiebeln unter den Reis mischen.',
  leftover:'Bistek-Wrap · 8 Min. – Fleisch- und Zwiebelreste vollständig erhitzen und mit Gurke in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Original wird Calamansi verwendet, Limette oder Zitrone schmecken ähnlich.'
},
{
  id:'ph-kare-kare', name:'Kare-Kare · Rindfleisch-Gemüse-Eintopf mit dünner Erdnusssoße', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'fleisch', base:'reis', time:{a:20,c:90}, devices:[['topf']], method:'Schmortopf + Topf',
  allergens:['nuesse'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Aubergine','Grüne Bohnen','Pak Choi','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Rindergulasch, mager',q:120,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Aubergine',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Pak Choi',q:60,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Erdnussmus, ungesüßt',q:1,u:'EL',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in 2 cm große Würfel schneiden und in Öl 5 Minuten rundum anbraten. Zwiebel und Knoblauch würfeln, 2 Minuten mitbraten und das Paprikapulver kurz mitrösten.',
    'Mit 400 ml Wasser aufgießen und zugedeckt bei kleiner Hitze 75 Minuten schmoren, bis das Fleisch zart ist. In den letzten 30 Minuten Vollkornreis in der doppelten Menge Wasser garen.',
    'Auberginenwürfel und Bohnenstücke 10 Minuten mitschmoren, Pak Choi in den letzten 3 Minuten zugeben. Erdnussmus mit etwas Schmorflüssigkeit glatt rühren und unterziehen, sodass eine dünne Soße entsteht.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  kidName:'Erdnuss-Rindertopf mild',
  kid:'Fleisch fein zerzupfen, Gemüse sehr weich schmoren und klein schneiden. Die Erdnusssoße ist dünn eingerührt, nie ganze Erdnüsse geben.',
  leftover:'Kare-Kare-Nudeln · 12 Min. – Reste vollständig erhitzen und mit gekochten Vollkornnudeln mischen.',
  tipp:'Im Slow Cooker 6 Stunden auf niedriger Stufe garen, Gemüse und Erdnussmus erst in der letzten halben Stunde zugeben.'
},
{
  id:'ph-pancit-canton', name:'Pancit Canton · gebratene Vollkornnudeln mit Hähnchen und Gemüse', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'gefluegel', base:'nudeln', time:{a:12,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Weißkohl','Karotten','Zuckerschoten','Zwiebel'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Hähnchenbrust',q:110,u:'g',c:'fisch'},
    {n:'Weißkohl',q:60,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zuckerschoten',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:80,u:'ml',c:'vorrat'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornnudeln nach Packungsangabe etwa 9 Minuten bissfest kochen und abgießen.',
    'Hähnchen in dünne Streifen schneiden und in Öl 4 Minuten braten, bis es durch ist. Zwiebel, Knoblauch, Karottenstifte, Kohlstreifen und Zuckerschoten 4 Minuten mitbraten.',
    'Nudeln und Brühe zugeben und 2 Minuten schwenken, bis die Flüssigkeit aufgenommen ist.',
    'Kinderportion ohne Sojasauce abnehmen. Rest mit Sojasauce abschmecken, Erwachsene nach Wunsch mit Pfeffer und Chili würzen.'
  ],
  kidName:'Kinder-Pancit',
  kid:'Nudeln kurz schneiden, Hähnchen fein zerzupfen und Zuckerschoten in feine Streifen schneiden. Ohne Sojasauce servieren.',
  leftover:'Pancit-Omelett · 10 Min. – Nudelreste mit verquirlten Eiern in der Pfanne vollständig stocken lassen.',
  tipp:'Pancit gibt es auf den Philippinen zum Geburtstag, die langen Nudeln stehen für ein langes Leben.'
},
{
  id:'ph-giniling', name:'Giniling · Rinderhack mit Kartoffeln, Karotten und Erbsen in Tomatensoße', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'fleisch', base:'reis', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Erbsen','Tomaten'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:60,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Tomaten, passiert',q:120,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Zwiebel und Knoblauch fein würfeln und in Öl 3 Minuten dünsten.',
    'Hack zugeben und 5 Minuten krümelig braten. Kartoffeln und Karotten in 1 cm kleine Würfel schneiden und 2 Minuten mitbraten.',
    'Passierte Tomaten und 100 ml Wasser zugeben und zugedeckt 15 Minuten köcheln, bis die Kartoffeln weich sind. Erbsen 3 Minuten mitgaren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Kinder-Giniling',
  kid:'Hack ist von Natur aus fein, Kartoffeln und Karotten weich garen und Erbsen leicht zerdrücken. Ohne Salz unter den Reis mischen.',
  leftover:'Tortang Giniling · 10 Min. – Hackreste in verquirlte Eier geben und als Omelett in der Pfanne vollständig stocken lassen.',
  tipp:'Klein gewürfeltes Gemüse gart schnell und verschwindet fast in der Soße.'
},
{
  id:'ph-sinigang-na-isda', name:'Sinigang na Isda · saurer Tamarinden-Fischtopf mit Gemüse und Reis', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'fisch', base:'reis', time:{a:15,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Radieschen','Grüne Bohnen','Babyspinat'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Jasminreis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Radieschen',q:50,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:50,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tamarindenpaste',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'}
  ],
  steps:[
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen. Brühe mit Zwiebelspalten und Tomatenvierteln aufkochen und 5 Minuten köcheln.',
    'Radieschen halbieren, Bohnen in Stücke schneiden und beides 6 Minuten in der Brühe garen. Tamarindenpaste einrühren.',
    'Fisch in große Stücke schneiden, zugeben und bei kleiner Hitze 5 Minuten gar ziehen lassen. Spinat zum Schluss unterheben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch einer Chilischote würzen.'
  ],
  kidName:'Milder Fischtopf',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Gemüse weich garen und klein schneiden, Radieschen vierteln. Mit wenig Brühe über den Reis geben.',
  leftover:'Sinigang-Reistopf · 8 Min. – Brühe- und Fischreste mit Reis vollständig aufkochen und dick einkochen lassen.',
  tipp:'Die Säure mit der Tamarindenpaste langsam anpassen, Kinder mögen den Topf meist etwas milder.'
},
{
  id:'ph-ginataang-isda', name:'Ginataang Isda · Lachs in Kokosmilch mit Ingwer und Pak Choi', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'fisch', base:'reis', time:{a:10,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pak Choi','Rote Paprika','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Pak Choi',q:100,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Zwiebel, Knoblauch und Ingwer fein schneiden und in Öl 3 Minuten dünsten.',
    'Paprikastreifen 3 Minuten mitdünsten, dann Kokosmilch und 50 ml Wasser zugeben und aufkochen.',
    'Lachs in große Würfel schneiden, mit dem Pak Choi in die Soße legen und zugedeckt bei kleiner Hitze 6 bis 8 Minuten gar ziehen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  kidName:'Kokos-Lachs mild',
  kid:'Lachs sorgfältig auf Gräten prüfen und zerpflücken, Pak Choi und Paprika weich garen und klein schneiden. Mit der milden Kokossoße unter den Reis mischen.',
  leftover:'Kokos-Fischreis · 8 Min. – Reis- und Fischreste mit etwas Wasser in einem Topf vollständig erhitzen.',
  tipp:'Lachs nur sanft ziehen lassen statt kochen, dann bleibt er saftig.'
},
{
  id:'ph-sarciadong-isda', name:'Sarciadong Isda · Fisch in Tomaten-Ei-Soße mit Spinat', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'fisch', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Babyspinat'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen. Fisch in große Stücke schneiden, in Öl 2 Minuten je Seite braten und herausnehmen.',
    'Zwiebel, Knoblauch und Tomaten würfeln und in der Pfanne 5 Minuten zu einer weichen Soße schmoren.',
    'Ei verquirlen, langsam in die Soße rühren und vollständig stocken lassen. Spinat und Fisch zugeben und 2 Minuten erwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Fisch in Tomatensoße',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, das Ei in der Soße vollständig garen. Mit der weichen Soße unter den Reis mischen.',
  leftover:'Sarciado-Toast · 5 Min. – Soßen- und Fischreste vollständig erhitzen und auf Vollkornbrot geben.',
  tipp:'Sarciado eignet sich auch für gebratenen Fisch vom Vortag, der in der Soße wieder saftig wird.'
},
{
  id:'ph-inihaw-na-isda', name:'Inihaw na Isda · Ofenlachs mit Tomaten-Ingwer-Füllung und Gurkensalat', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'fisch', base:'reis', time:{a:10,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Zwiebel','Gurke','Limette'], season:[7,8,9],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Ofen auf 200 °C vorheizen.',
    'Die Hälfte der Tomaten und Zwiebeln fein würfeln, mit geriebenem Ingwer mischen und auf den Fisch geben. Alles in Backpapier einschlagen und 18 bis 20 Minuten garen.',
    'Restliche Tomaten und Gurke würfeln und mit etwas Limettensaft und Öl zu einem Salat mischen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch Chili würzen.'
  ],
  kidName:'Ofenlachs mit Tomaten',
  kid:'Lachs sorgfältig auf Gräten prüfen und zerpflücken, die weich gegarten Tomaten aus dem Päckchen dazugeben. Gurke in dünne Stifte schneiden statt Salat.',
  leftover:'Lachs-Reis-Salat · 8 Min. – Reis- und Fischreste kalt mit Gurke, Tomaten und Limettensaft mischen.',
  tipp:'Im Sommer gelingt das Päckchen auch auf dem Grill.'
},
{
  id:'ph-ginisang-monggo', name:'Ginisang Monggo · Mungbohnen-Eintopf mit Kürbis, Spinat und Tomaten', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'huelsen', base:'reis', time:{a:10,c:45}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Babyspinat','Kürbis','Zwiebel'], season:[9,10],
  ing:[
    {n:'Mungbohnen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:80,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mungbohnen spülen und in 500 ml Wasser 30 bis 35 Minuten weich kochen, bis sie aufplatzen. Vollkornreis parallel in der doppelten Menge Wasser 30 Minuten garen.',
    'Zwiebel, Knoblauch und Tomaten würfeln und in Öl 5 Minuten weich dünsten.',
    'Tomatenmischung und Kürbiswürfel zu den Bohnen geben und 10 Minuten köcheln, bis der Kürbis weich ist. Spinat unterrühren.',
    'Kinderportion ungesalzen abnehmen und die Bohnen leicht zerdrücken. Erwachsene mit Salz, Pfeffer und nach Wunsch Chili würzen.'
  ],
  kidName:'Mungbohnen-Brei',
  kid:'Mungbohnen und Kürbis mit der Gabel gut zerdrücken, damit keine ganzen Bohnen bleiben. Dick und ohne Salz mit Reis servieren.',
  leftover:'Monggo-Suppe · 5 Min. – Reste mit etwas Wasser verlängern und vollständig aufkochen.',
  tipp:'Über Nacht eingeweichte Mungbohnen sind schon nach 20 Minuten weich.'
},
{
  id:'ph-tortang-talong', name:'Tortang Talong · Auberginen-Omelett mit Tomaten und Jasminreis', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'ei', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Aubergine','Tomaten','Frühlingszwiebel'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Aubergine',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen. Aubergine längs in 1 cm dicke Scheiben schneiden und in einer Pfanne mit wenig Öl zugedeckt 4 Minuten je Seite weich garen.',
    'Eier mit gehacktem Knoblauch verquirlen. Auberginenscheiben mit einer Gabel flach drücken, durch das Ei ziehen und mit dem restlichen Ei 2 Minuten je Seite braten, bis das Ei vollständig gestockt ist.',
    'Tomaten würfeln und mit Frühlingszwiebelringen mischen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch Chilisoße würzen.'
  ],
  kidName:'Auberginen-Omelett-Streifen',
  kid:'Omelett vollständig durchbraten und in Streifen schneiden, Auberginenschale bei Bedarf entfernen. Tomaten klein würfeln, ohne Salz.',
  leftover:'Omelett-Brot · 5 Min. – Omelettreste mit Tomaten auf Vollkornbrot legen und in der Pfanne vollständig durchwärmen.',
  tipp:'Klassisch wird die Aubergine ganz über der Gasflamme geröstet, das gibt ein rauchiges Aroma.'
},
{
  id:'ph-ginataang-kalabasa', name:'Ginataang Kalabasa at Sitaw · Kürbis und grüne Bohnen in Kokosmilch mit Tofu', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'tofu', base:'reis', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kürbis','Grüne Bohnen','Zwiebel'], season:[9,10],
  ing:[
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:80,u:'g',c:'gemuese'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Tofu würfeln, in Öl 6 Minuten goldbraun braten und herausnehmen.',
    'Zwiebel, Knoblauch und Ingwer fein würfeln und 2 Minuten im Bratfett dünsten. Kürbiswürfel, Kokosmilch und 80 ml Wasser zugeben und 8 Minuten köcheln.',
    'Bohnenstücke zugeben und weitere 6 Minuten garen, bis Kürbis und Bohnen weich sind. Tofu unterheben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  kidName:'Kürbis-Kokos-Tofu',
  kid:'Kürbis mit der Gabel zerdrücken, Bohnen sehr weich garen und klein schneiden, Tofu zerbröseln. Ohne Salz mit Reis mischen.',
  leftover:'Kürbis-Kokos-Suppe · 8 Min. – Reste mit etwas Brühe pürieren und vollständig aufkochen.',
  tipp:'Traditionell kommen Garnelen oder Schweinefleisch hinein, mit Tofu wird das Gericht vegetarisch.'
},
{
  id:'ph-lumpiang-gulay', name:'Lumpiang Gulay · Gemüse-Frühlingsrollen aus dem Ofen mit Tofu und Süßkartoffel', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'tofu', base:null, time:{a:25,c:20}, devices:[['ofen'],['pfanne']], method:'Pfanne + Backofen',
  allergens:['gluten','soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Süßkartoffel','Weißkohl','Karotten','Grüne Bohnen'], season:[],
  ing:[
    {n:'Frühlingsrollenblätter, TK',q:4,u:'Stk.',c:'tk'},
    {n:'Tofu, natur',q:100,u:'g',c:'kuehl'},
    {n:'Süßkartoffel',q:100,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:50,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Grüne Bohnen',q:30,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Süßkartoffel und Karotten in feine Stifte, Kohl in dünne Streifen und Bohnen in kleine Stücke schneiden, Tofu zerbröseln.',
    'Gemüse mit Knoblauch in der Hälfte des Öls 6 Minuten weich braten, Tofu 2 Minuten mitbraten und die Füllung etwas abkühlen lassen.',
    'Je 2 EL Füllung auf ein Teigblatt geben, Seiten einschlagen und fest aufrollen. Rollen mit dem restlichen Öl bestreichen und auf dem Blech 15 bis 18 Minuten goldbraun backen, nach der Hälfte wenden.',
    'Kinderportion ungesalzen abnehmen. Für Erwachsene Essig mit Sojasauce und nach Wunsch Chili als Dip verrühren.'
  ],
  kidName:'Gemüse-Röllchen',
  kid:'Röllchen halbieren, damit die weiche Füllung sichtbar ist, und harte Teigenden abschneiden. Ohne Dip servieren.',
  leftover:'Röllchen aufbacken · 8 Min. – Übrige Röllchen bei 200 °C im Ofen vollständig durchwärmen, so werden sie wieder knusprig.',
  tipp:'Frühlingsrollenblätter im Kühlschrank auftauen und unter einem feuchten Tuch aufbewahren, damit sie nicht austrocknen.'
},
{
  id:'ph-chopsuey', name:'Chopsuey · philippinische Gemüsepfanne mit Ei und Jasminreis', cuisine:'Philippinen', flag:'🇵🇭',
  protein:'ei', base:'reis', time:{a:12,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Blumenkohl','Brokkoli','Karotten','Zuckerschoten'], season:[6,7,8,9,10],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Blumenkohl',q:70,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:60,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zuckerschoten',q:40,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Speisestärke',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen. Eier in einem zweiten Topf 9 Minuten hart kochen, abschrecken, schälen und halbieren.',
    'Blumenkohl und Brokkoli in kleine Röschen, Karotten in Scheiben schneiden. Mit Knoblauch in Öl 3 Minuten braten, dann 80 ml Wasser zugeben und zugedeckt 4 Minuten dünsten.',
    'Zuckerschoten zugeben, Stärke in 2 EL Wasser verrühren, unterrühren und 1 Minute köcheln lassen. Eihälften darauf legen.',
    'Kinderportion ohne Sojasauce abnehmen. Rest mit Sojasauce abschmecken, Erwachsene nach Wunsch mit Pfeffer würzen.'
  ],
  kidName:'Gemüse mit Ei',
  kid:'Hart gekochtes Ei klein schneiden, Röschen sehr weich dünsten und Zuckerschoten in feine Streifen schneiden. Ohne Sojasauce servieren.',
  leftover:'Chopsuey-Nudeln · 10 Min. – Gemüsereste mit gekochten Vollkornnudeln in der Pfanne vollständig erhitzen.',
  tipp:'Original kommen Wachteleier hinein, für Kleinkinder müssen sie unbedingt geviertelt werden.'
}
);
