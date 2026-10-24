/* Grün geplant · Argentinien · Top 15 */
RECIPES.push(
{
  id:'ar-asado', name:'Asado con Chimichurri · Rindersteak mit Chimichurri, Ofenkartoffeln und Paprika', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen'],['pfanne']], method:'Backofen + Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Rote Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rinderhüftsteak',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Spalten, Paprika und Zwiebel in Streifen schneiden, mit der Hälfte des Öls mischen und auf dem Blech 30 Minuten rösten.',
    'Für das Chimichurri Petersilie und Knoblauch sehr fein hacken und mit Oregano, Essig, dem restlichen Öl und 1 EL Wasser verrühren.',
    'Steak trocken tupfen und in der sehr heißen Pfanne ohne weiteres Fett je Seite 3 bis 4 Minuten braten, 3 Minuten ruhen lassen und in Streifen schneiden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Fleisch mit grobem Salz bestreuen und mit Chimichurri servieren.'
  ],
  kidName:'Mini-Asado',
  kid:'Fleischstreifen für das Kind länger durchbraten und fein schneiden, Kartoffeln zerdrücken. Statt Chimichurri etwas Öl mit fein gehackter Petersilie, ohne Knoblauch.',
  leftover:'Asado-Sandwich · 8 Min. – Fleischreste mit Ofengemüse und Chimichurri zwischen Vollkornbrot legen.',
  tipp:'Chimichurri schmeckt am besten, wenn es eine Stunde vorher angerührt wird.'
},
{
  id:'ar-empanadas', name:'Empanadas de Carne al Horno · Vollkorn-Teigtaschen mit Rindfleisch-Gemüse-Füllung', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'fleisch', base:null, time:{a:30,c:20}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Frühlingszwiebel','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Weizenvollkornmehl',q:75,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl mit der Hälfte des Öls und etwa 40 ml lauwarmem Wasser zu einem glatten Teig kneten und 10 Minuten ruhen lassen. Ei 10 Minuten hart kochen und fein hacken.',
    'Zwiebel und Paprika fein würfeln und im restlichen Öl 4 Minuten dünsten. Hack zugeben und 6 Minuten krümelig braten, mit Kreuzkümmel und Paprikapulver würzen, Frühlingszwiebel und Ei unterheben und abkühlen lassen.',
    'Ofen auf 200 °C vorheizen. Teig dünn ausrollen und Kreise von 12 cm ausstechen.',
    'Kinderportion: zwei Teigkreise mit ungesalzener Füllung belegen und mit einer Gabel markieren, die übrige Füllung für Erwachsene mit Salz und etwas Chili würzen. Alle Kreise füllen, Ränder fest andrücken, 18 bis 20 Minuten goldbraun backen und mit Tomatenscheiben servieren.'
  ],
  kidName:'Mini-Empanadas',
  kid:'Empanadas etwas abkühlen lassen und in kleine Stücke schneiden. Die Füllung ist ungesalzen und das Ei hart gekocht.',
  leftover:'Empanadas aufgebacken · 8 Min. – Reste im Ofen bei 180 °C wieder knusprig backen.',
  tipp:'Der typische Rand entsteht, wenn man ihn in kleinen Falten nach innen dreht, das Repulgue.'
},
{
  id:'ar-milanesa', name:'Milanesa de Pollo al Horno · Hähnchenschnitzel aus dem Ofen mit Kartoffel-Kürbis-Püree', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'gefluegel', base:'kartoffeln', time:{a:20,c:20}, devices:[['ofen','airfryer'],['topf']], method:'Backofen + Topf',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kürbis','Kartoffeln','Tomaten','Zitrone'], season:[9,10,11],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkorn-Semmelbrösel',q:25,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, mehlig',q:180,u:'g',c:'gemuese'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln und Kürbis würfeln und in Wasser 15 Minuten weich kochen.',
    'Hähnchenbrust waagerecht halbieren und flach klopfen. Erst im verquirlten Ei, dann in den Semmelbröseln mit Oregano wenden, auf ein Blech mit Backpapier legen und mit Öl beträufeln.',
    'Im Ofen 15 bis 18 Minuten backen und nach der Hälfte wenden, bis die Panade knusprig und das Fleisch innen nicht mehr rosa ist.',
    'Kartoffeln und Kürbis abgießen und mit warmer Milch zu Püree stampfen. Tomate in Scheiben schneiden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Püree mit Salz und Pfeffer abschmecken und die Milanesa mit Zitronenspalten servieren.'
  ],
  kidName:'Mini-Milanesa',
  kid:'Schnitzel in schmale Streifen zum Selbstgreifen schneiden und das Püree ohne Salz lassen. Tomate ohne Haut klein würfeln.',
  leftover:'Milanesa-Sandwich · 5 Min. – Kalte Schnitzel mit Tomate und Salat zwischen Vollkornbrot legen.',
  tipp:'Mit einer Tomatenscheibe und etwas Käse überbacken wird daraus eine Milanesa a la Napolitana.'
},
{
  id:'ar-carbonada', name:'Carbonada Criolla · Rindfleisch-Eintopf mit Kürbis, Mais und Aprikosen', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:60}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kürbis','Kartoffeln','Süßkartoffel','Mais','Tomaten','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:120,u:'g',c:'gemuese'},
    {n:'Süßkartoffel',q:80,u:'g',c:'gemuese'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Maiskolben, vorgegart',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Aprikosen, getrocknet',q:2,u:'Stk.',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in kleine Würfel schneiden und im Topf in Öl rundum kräftig anbraten. Gewürfelte Zwiebel zugeben und 3 Minuten mitbraten.',
    'Tomaten und Brühe zugeben und zugedeckt 35 Minuten leise schmoren.',
    'Kartoffeln, Süßkartoffel und Kürbis würfeln, den Maiskolben in Scheiben schneiden und mit den klein geschnittenen Aprikosen zugeben. Weitere 25 Minuten garen, bis alles weich ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und etwas Chili abschmecken.'
  ],
  kidName:'Mini-Carbonada',
  kid:'Fleisch fein zerzupfen, Gemüse zerdrücken und die Maiskörner vom Kolben schneiden. Die Aprikosen sind weich gegart und dürfen klein geschnitten mit.',
  leftover:'Carbonada-Auflauf · 20 Min. – Reste in eine Form geben, mit Kartoffelpüree bedecken und im Ofen überbacken.',
  tipp:'Zum Fest wird die Carbonada in Argentinien im ausgehöhlten Kürbis serviert, im Slow Cooker gart sie 6 Stunden auf niedriger Stufe.'
},
{
  id:'ar-pastel-papa', name:'Pastel de Papa · Hackfleisch-Gemüse-Auflauf mit Kartoffelhaube', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:35}, devices:[['topf'],['pfanne'],['ofen']], method:'Topf + Pfanne + Backofen',
  allergens:['milch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Karotten','Zwiebel','Oliven'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Oliven, schwarz',q:15,u:'g',c:'vorrat'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und 15 Minuten weich kochen, das Ei in den letzten 10 Minuten mitkochen. Ofen auf 200 °C vorheizen.',
    'Zwiebel, Paprika und Karotte fein würfeln und in Öl 5 Minuten dünsten. Hack zugeben und 6 Minuten krümelig braten, mit Kreuzkümmel würzen.',
    'Ei schälen und hacken, unter das Hack mischen und alles in eine Form geben. Oliven in Ringe schneiden und auf drei Viertel der Fläche verteilen.',
    'Kartoffeln mit warmer Milch zu Püree stampfen, auf dem Hack verstreichen, mit einer Gabel Rillen ziehen und 15 bis 20 Minuten goldbraun backen.',
    'Kinderportion aus der Ecke ohne Oliven abnehmen und abkühlen lassen. Erwachsene am Tisch mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Pastel',
  kid:'Aus der Ecke ohne Oliven nehmen, sie sind salzig. Püree und Hack zusammen zerdrücken und lauwarm servieren.',
  leftover:'Kartoffel-Hack-Taler · 12 Min. – Reste zu Talern formen und in der Pfanne von beiden Seiten braten.',
  tipp:'Mit etwas Kürbis im Püree wird die Haube orange und milder.'
},
{
  id:'ar-pollo-verdeo', name:'Pollo al Verdeo · Hähnchen in heller Frühlingszwiebel-Soße mit Reis und Brokkoli', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'gefluegel', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Frühlingszwiebel','Pilze','Brokkoli'], season:[6,7,8,9,10],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Frühlingszwiebel',q:2,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Frischkäse, fettreduziert',q:30,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen, die Brokkoliröschen in den letzten 5 Minuten zugedeckt obenauf mitdämpfen.',
    'Hähnchen in Streifen schneiden und in Öl 5 Minuten anbraten, bis es durchgegart ist. Das Weiße der Frühlingszwiebeln in Ringen und die Champignons in Scheiben zugeben und 3 Minuten mitbraten.',
    'Milch angießen, Frischkäse einrühren und 2 Minuten sämig köcheln. Das Grün der Frühlingszwiebeln unterheben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Mini-Pollo al Verdeo',
  kid:'Hähnchen klein schneiden und mit der milden Soße unter den Reis mischen. Brokkoli weich gedämpft zum Greifen dazulegen.',
  leftover:'Hähnchen-Reis-Auflauf · 15 Min. – Reste in eine Form geben, mit etwas Käse bestreuen und im Ofen vollständig erhitzen.',
  tipp:'Das Grün der Frühlingszwiebel erst zum Schluss zugeben, dann bleibt es frisch und mild.'
},
{
  id:'ar-trucha', name:'Trucha Patagónica · Forelle aus der Pfanne mit Petersilienkartoffeln und Salat', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Salat','Kirschtomaten','Zitrone','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Forellenfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in kleine Würfel schneiden und in Wasser 12 bis 14 Minuten weich kochen.',
    'Forellenfilet trocken tupfen und in der Hälfte des Öls auf der Hautseite 4 Minuten braten, wenden und 2 Minuten fertig garen, bis das Fleisch innen nicht mehr glasig ist.',
    'Salat zupfen, Tomaten halbieren und mit dem restlichen Öl und etwas Zitronensaft mischen. Kartoffeln abgießen und mit Petersilie schwenken.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Fisch und Kartoffeln mit Salz, Pfeffer und Zitrone würzen.'
  ],
  kidName:'Mini-Forelle',
  kid:'Forelle ohne Haut sorgfältig auf Gräten prüfen und zerpflücken, Kartoffeln zerdrücken. Kirschtomaten vierteln.',
  leftover:'Forellen-Kartoffel-Salat · 5 Min. – Kalte Reste mit Joghurt, Gurke und Petersilie mischen.',
  tipp:'Lachsforelle oder Saibling funktionieren genauso.'
},
{
  id:'ar-merluza-provenzal', name:'Merluza a la Provenzal · Ofenfisch mit Knoblauch-Petersilie, Zucchini und Vollkornreis', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'fisch', base:'reis', time:{a:12,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zucchini','Kirschtomaten','Zitrone','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kirschtomaten',q:100,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis nach Packung etwa 30 Minuten garen. Ofen auf 200 °C vorheizen.',
    'Zucchini in Scheiben schneiden, mit den Kirschtomaten und der Hälfte des Öls auf ein Blech geben und 10 Minuten rösten.',
    'Fisch zwischen das Gemüse legen und 12 bis 15 Minuten backen, bis er sich leicht zerteilen lässt. Inzwischen Knoblauch und Petersilie sehr fein hacken und mit dem restlichen Öl verrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit der Knoblauch-Petersilie, Zitronensaft und Salz würzen.'
  ],
  kidName:'Mini-Merluza',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, Kirschtomaten vierteln und Zucchini weich zerdrücken. Nur etwas Petersilie, kein roher Knoblauch.',
  leftover:'Fisch-Reis-Pfanne · 10 Min. – Reste mit Erbsen in der Pfanne vollständig durcherhitzen.',
  tipp:'Merluza heißt auf Deutsch Seehecht, er ist oft tiefgekühlt erhältlich und passt genauso.'
},
{
  id:'ar-chupin', name:'Chupín de Pescado · Fisch-Tomaten-Schmortopf aus dem Litoral mit Kartoffeln', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Tomaten','Zwiebel','Kartoffeln','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Paprika in Streifen schneiden und im Topf in Öl 5 Minuten dünsten.',
    'Kartoffeln in dünne Scheiben schneiden, mit Tomaten, Brühe und Lorbeer zugeben und zugedeckt 15 Minuten köcheln, bis die Kartoffeln fast weich sind.',
    'Fisch in große Stücke schneiden, auf das Gemüse legen und zugedeckt bei kleiner Hitze 8 bis 10 Minuten garen, ohne umzurühren.',
    'Kinderportion ungesalzen abnehmen und Lorbeer entfernen. Erwachsene mit Salz, Pfeffer, Petersilie und etwas Chili würzen.'
  ],
  kidName:'Mini-Chupín',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, Kartoffeln mit etwas Sud zerdrücken. Ohne Salz und Chili servieren.',
  leftover:'Fisch-Kartoffel-Auflauf · 15 Min. – Reste in eine Form geben, mit etwas Käse bestreuen und im Ofen vollständig erhitzen.',
  tipp:'Am Paraná nimmt man Flussfische wie Surubí, jeder feste weiße Fisch passt.'
},
{
  id:'ar-locro', name:'Locro · vegetarischer Mais-Bohnen-Kürbis-Eintopf aus dem Nordwesten', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'huelsen', base:null, time:{a:15,c:35}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kürbis','Mais','Kartoffeln','Lauch','Rote Paprika'], season:[9,10,11],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Hokkaido-Kürbis',q:200,u:'g',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:80,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:120,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lauch in Ringe und Paprika in Würfel schneiden und im Topf in der Hälfte des Öls 4 Minuten dünsten.',
    'Kürbis und Kartoffeln würfeln, mit Mais, Bohnen, Kreuzkümmel und Brühe zugeben und zugedeckt 30 Minuten köcheln, bis der Kürbis zerfällt und der Eintopf sämig ist. Ab und zu umrühren.',
    'Restliches Öl mit dem Paprikapulver in einem kleinen Topf kurz erwärmen, das ergibt die rote Würze Grasa colorada.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit dem Paprikaöl beträufeln und mit Salz und Chili würzen.'
  ],
  kidName:'Mini-Locro',
  kid:'Eintopf leicht pürieren oder Bohnen und Mais gründlich zerdrücken. Ohne Salz und Chili, ein paar Tropfen des milden Paprikaöls dürfen mit.',
  leftover:'Locro-Pfanne · 10 Min. – Dicke Reste mit einem Ei in der Pfanne vollständig erhitzen.',
  tipp:'Locro ist das Nationalgericht zum 25. Mai, die klassische Variante kocht man mit Rinderbrust.'
},
{
  id:'ar-guiso-lentejas', name:'Guiso de Lentejas · Linseneintopf mit Kürbis, Paprika und Vollkornreis', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'huelsen', base:'reis', time:{a:15,c:35}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kürbis','Rote Paprika','Karotten','Zwiebel','Tomaten'], season:[9,10,11],
  ing:[
    {n:'Braune Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis nach Packung etwa 30 Minuten garen.',
    'Zwiebel, Paprika und Karotte würfeln und in Öl 4 Minuten dünsten, Paprikapulver kurz mitrösten.',
    'Linsen abspülen und mit gewürfeltem Kürbis, passierten Tomaten und Brühe zugeben. Zugedeckt 30 Minuten köcheln, bis die Linsen weich sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und einem Spritzer Essig abschmecken und mit Reis servieren.'
  ],
  kidName:'Mini-Guiso',
  kid:'Linsen und Kürbis mit der Gabel zerdrücken und mit Reis mischen, damit nichts zu fest ist. Ohne Salz servieren.',
  leftover:'Linsen-Bratlinge · 15 Min. – Reste mit Haferflocken binden, Taler formen und in der Pfanne braten.',
  tipp:'Ein Lorbeerblatt und etwas geräuchertes Paprikapulver ersetzen den Geschmack der Chorizo.'
},
{
  id:'ar-tarta-acelga', name:'Tarta de Acelga · Mangold-Tarte mit Ei und Ricotta auf Vollkornboden', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'ei', base:null, time:{a:25,c:35}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Mangold','Zwiebel','Tomaten'], season:[6,7,8,9,10],
  ing:[
    {n:'Weizenvollkornmehl',q:60,u:'g',c:'vorrat'},
    {n:'Mangold',q:200,u:'g',c:'gemuese'},
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Ricotta',q:60,u:'g',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl mit der Hälfte des Öls und etwa 30 ml Wasser zu einem glatten Teig kneten, dünn ausrollen und eine kleine geölte Form damit auslegen. Ofen auf 190 °C vorheizen.',
    'Zwiebel fein würfeln und im restlichen Öl glasig dünsten. Mangoldblätter in Streifen schneiden, Stiele fein würfeln, zugeben und 5 Minuten dünsten, bis die Flüssigkeit verdampft ist.',
    'Eier mit Ricotta, Käse und Muskat verquirlen, den etwas abgekühlten Mangold unterheben und auf den Teig füllen.',
    'Im Ofen 30 bis 35 Minuten backen, bis die Füllung fest ist und in der Mitte nicht mehr wackelt. Tomate in Scheiben dazu reichen.',
    'Kinderportion abnehmen und lauwarm abkühlen lassen, die Tarte ist ungesalzen. Erwachsene am Tisch mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Tarta',
  kid:'Die Füllung muss ganz durchgestockt sein, dann in fingerdicke Streifen schneiden. Tomate ohne Haut klein würfeln.',
  leftover:'Tarta-Brotzeit · 3 Min. – Kalte Reste in Stücke schneiden und als Pausenbrot mitnehmen.',
  tipp:'Mit Spinat statt Mangold heißt sie Tarta de Espinaca und gelingt genauso.'
},
{
  id:'ar-noquis', name:'Ñoquis del 29 · Ricotta-Gnocchi mit Tomaten-Spinat-Soße', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'milch', base:null, time:{a:20,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Spinat','Zwiebel'], season:[4,5,9,10],
  ing:[
    {n:'Ricotta',q:100,u:'g',c:'kuehl'},
    {n:'Weizenvollkornmehl',q:60,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Babyspinat',q:80,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ricotta, Ei, die Hälfte des Käses und das Mehl zu einem weichen Teig verkneten, zu daumendicken Rollen formen und in 2 cm lange Stücke schneiden.',
    'Zwiebel fein würfeln und in Öl glasig dünsten. Passierte Tomaten und Oregano zugeben und 8 Minuten köcheln, dann den Spinat unterheben und zusammenfallen lassen.',
    'Ñoquis in siedendem, ungesalzenem Wasser garen, bis sie an die Oberfläche steigen, noch 1 Minute ziehen lassen und mit einer Schaumkelle in die Soße heben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit dem restlichen Käse bestreuen.'
  ],
  kidName:'Mini-Ñoquis',
  kid:'Ñoquis halbieren und lauwarm in der milden Tomatensoße servieren. Käse nur wenig, Salz ganz weglassen.',
  leftover:'Ñoquis-Auflauf · 15 Min. – Reste in eine Form geben, mit etwas Käse bestreuen und im Ofen überbacken.',
  tipp:'Am 29. jedes Monats essen viele Familien in Argentinien Ñoquis und legen einen Geldschein unter den Teller.'
},
{
  id:'ar-humita', name:'Humita en Olla · cremiger Mais mit Kürbis, Paprika und Käse, dazu Vollkornbrot', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'milch', base:null, time:{a:10,c:12}, devices:[['topf']], method:'Topf',
  allergens:['milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Mais','Kürbis','Rote Paprika','Zwiebel'], season:[8,9,10],
  ing:[
    {n:'Mais (Dose oder TK)',q:150,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Mozzarella',q:60,u:'g',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Paprika und Kürbis sehr fein würfeln und in Öl 5 Minuten dünsten, Paprikapulver kurz mitrösten.',
    'Mais mit der Milch grob pürieren, zum Gemüse geben und unter Rühren 8 bis 10 Minuten cremig einköcheln, bis der Kürbis weich ist.',
    'Mozzarella würfeln und unterrühren, bis er schmilzt. Brot dazu rösten.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und etwas Chili würzen.'
  ],
  kidName:'Mini-Humita',
  kid:'Die Humita ist schon cremig, für kleine Kinder einfach etwas glatter pürieren. Brot in Streifen zum Eintunken schneiden.',
  leftover:'Humita-Empanadas · 25 Min. – Reste als Füllung in Teigkreise geben und im Ofen goldbraun backen.',
  tipp:'Mit frischen Maiskolben im Spätsommer schmeckt sie am süßesten, die Körner einfach mit dem Messer abschneiden.'
},
{
  id:'ar-revuelto-zapallitos', name:'Revuelto de Zapallitos · Zucchini-Rührei mit Zwiebel und Vollkornbrot', cuisine:'Argentinien', flag:'🇦🇷',
  protein:'ei', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Zwiebel','Tomaten'], season:[6,7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zucchini',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in feine Streifen schneiden und in Öl 3 Minuten glasig dünsten. Zucchini grob raspeln, zugeben und 5 Minuten braten, bis die Flüssigkeit verdampft ist.',
    'Eier mit Käse und Oregano verquirlen, in die Pfanne gießen und bei mittlerer Hitze unter Rühren 2 bis 3 Minuten vollständig stocken lassen.',
    'Brot rösten und Tomate in Scheiben schneiden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Revuelto',
  kid:'Rührei ganz durchgaren, bis nichts mehr flüssig ist, und mit der weichen Zucchini klein zerteilen. Brot in schmale Streifen schneiden.',
  leftover:'Revuelto-Sandwich · 5 Min. – Kalte Reste mit Tomate zwischen zwei Scheiben Vollkornbrot legen.',
  tipp:'In Argentinien nimmt man runde Zapallitos, normale Zucchini schmecken genauso.'
}
);
