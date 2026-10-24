/* Grün geplant · Brasilien · Top 15 */
RECIPES.push(
{
  id:'br-feijoada', name:'Feijoada · Schwarze-Bohnen-Eintopf mit Rindfleisch, Grünkohl und Orange', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'fleisch', base:'reis', time:{a:20,c:40}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Grünkohl','Zwiebel','Karotten'], season:[11,12,1,2],
  ing:[
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Rindergulasch, mager',q:90,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Grünkohl oder Spinat',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Orange',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch in kleine Würfel schneiden und im Topf in der Hälfte des Öls rundum anbraten. Zwiebel, Knoblauch und Karotte gewürfelt 3 Minuten mitbraten.',
    'Bohnen, Lorbeer und 250 ml Wasser zugeben und zugedeckt 40 Minuten leise köcheln, bis das Fleisch zart ist. Zum Schluss ein Viertel der Bohnen zerdrücken, das macht den Eintopf sämig.',
    'Inzwischen den Vollkornreis nach Packung garen. Grünkohl in feine Streifen schneiden und im restlichen Öl in der Pfanne 5 Minuten weich dünsten. Orange schälen und in Stücke schneiden.',
    'Kinderportion ohne Salz abnehmen und Lorbeer entfernen. Erwachsene mit Salz und Pfeffer abschmecken und mit Reis, Grünkohl und Orangenstücken servieren.'
  ],
  kidName:'Mini-Feijoada',
  kid:'Fleisch fein zerzupfen, Bohnen grob zerdrücken und mit Reis mischen. Orange in kleine, kernlose Stücke schneiden.',
  leftover:'Bohnen-Reis-Pfanne · 10 Min. – Reste mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Mit magerem Rindfleisch statt Wurst und Speck bleibt die Feijoada leicht und trotzdem herzhaft.'
},
{
  id:'br-strogonoff-frango', name:'Strogonoff de Frango · Hähnchen-Champignon-Pfanne in Tomaten-Frischkäse-Soße', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'gefluegel', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Erbsen','Tomaten','Zwiebel'], season:[9,10],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Champignons',q:100,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Frischkäse, fettreduziert',q:40,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen.',
    'Hähnchen in kleine Würfel schneiden und in Öl 4 bis 5 Minuten rundum anbraten, bis es innen nicht mehr rosa ist. Zwiebel und geschnittene Champignons zugeben und 3 Minuten mitbraten.',
    'Passierte Tomaten, Erbsen und Paprikapulver zugeben und 4 Minuten köcheln. Pfanne vom Herd nehmen und den Frischkäse einrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Reis servieren.'
  ],
  kidName:'Mini-Strogonoff',
  kid:'Hähnchen sehr klein schneiden und mit der cremigen Soße unter den Reis mischen. Champignons fein hacken, Erbsen leicht zerdrücken.',
  leftover:'Strogonoff-Wrap · 5 Min. – Reste vollständig erhitzen und in eine Tortilla rollen.',
  tipp:'Frischkäse erst nach dem Kochen einrühren, dann flockt die Soße nicht.'
},
{
  id:'br-galinhada', name:'Galinhada · Hähnchen-Reis-Topf mit Kurkuma, Paprika und Mais', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'gefluegel', base:'reis', time:{a:15,c:35}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Tomaten','Mais','Erbsen','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:50,u:'g',c:'vorrat'},
    {n:'Erbsen, TK',q:40,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in mundgerechte Stücke schneiden und im Topf in Öl 5 Minuten anbraten. Zwiebel und Paprika gewürfelt 3 Minuten mitbraten.',
    'Reis, Kurkuma und gewürfelte Tomate unterrühren, Brühe angießen und zugedeckt 30 Minuten leise köcheln, bis der Reis weich ist.',
    'Erbsen und Mais unterheben und zugedeckt 5 Minuten ziehen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Mini-Galinhada',
  kid:'Hähnchen in sehr kleine Stücke zupfen und den Reis mit etwas Brühe saftig servieren. Maiskörner leicht zerdrücken.',
  leftover:'Galinhada-Bratlinge · 15 Min. – Reste mit einem Ei mischen, flache Taler formen und in der Pfanne durchbraten.',
  tipp:'Hähnchenschenkel bleiben beim langen Garen saftiger als Brust.'
},
{
  id:'br-frango-quiabo', name:'Frango com Quiabo e Angu · Hähnchen mit Okra und weicher Polenta', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'gefluegel', base:'polenta', time:{a:15,c:25}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Okra','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Okra',q:120,u:'g',c:'gemuese',hint:'frisch im Afro- oder Asiashop, sonst TK'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Okra waschen, gut trocken tupfen und in Scheiben schneiden. In der Pfanne in der Hälfte des Öls 5 Minuten scharf anbraten, bis sie nicht mehr schleimig ist, dann herausnehmen.',
    'Hähnchen in Stücke schneiden und im restlichen Öl mit Zwiebel und Knoblauch 5 Minuten anbraten. Gewürfelte Tomate, Kurkuma und Brühe zugeben und zugedeckt 15 Minuten schmoren, die Okra in den letzten 5 Minuten zugeben.',
    'Polenta in 280 ml kochendes Wasser einrühren und unter Rühren 5 bis 8 Minuten zu einem weichen Angu garen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und etwas Chili abschmecken.'
  ],
  kidName:'Mini-Angu mit Hähnchen',
  kid:'Hähnchen fein zerzupfen und unter die weiche Polenta rühren. Okrascheiben halbieren und weich geschmort dazugeben.',
  leftover:'Polenta-Schnitten · 15 Min. – Kalte Polenta in Scheiben schneiden, in der Pfanne braten und mit dem Rest des Schmorgerichts erhitzen.',
  tipp:'Okra zuerst trocken und heiß anbraten, dann bleibt sie bissfest und zieht keine Fäden.'
},
{
  id:'br-escondidinho', name:'Escondidinho de Carne · Hackfleisch-Gemüse unter Kartoffel-Süßkartoffel-Püree', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:35}, devices:[['topf'],['pfanne'],['ofen']], method:'Topf + Pfanne + Backofen',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Süßkartoffel','Karotten','Tomaten','Zwiebel'], season:[10,11],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:150,u:'g',c:'gemuese'},
    {n:'Süßkartoffel',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln und Süßkartoffel schälen, würfeln und in Wasser 15 Minuten weich kochen. Ofen auf 200 °C vorheizen.',
    'Zwiebel und Karotte fein würfeln und mit dem Hack in Öl 6 Minuten krümelig braten. Passierte Tomaten und Kreuzkümmel zugeben und 5 Minuten einköcheln.',
    'Kartoffeln abgießen und mit warmer Milch zu Püree stampfen. Hack in eine Auflaufform geben, Püree darauf verstreichen und mit Käse bestreuen.',
    'Im Ofen 15 Minuten backen, bis die Oberfläche goldbraun ist.',
    'Kinderportion abnehmen und etwas abkühlen lassen, sie bleibt ungesalzen. Erwachsene am Tisch mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Escondidinho',
  kid:'Gut abkühlen lassen und Püree mit dem Hack vermischen, damit keine festen Stücke bleiben. Karotte ist weich und fein gewürfelt.',
  leftover:'Püree-Taler · 12 Min. – Reste zu flachen Talern formen und in der Pfanne von beiden Seiten braten.',
  tipp:'Klassisch ist ein Püree aus Maniok, TK-Maniok aus dem Afroshop funktioniert genauso.'
},
{
  id:'br-churrasco', name:'Churrasco com Vinagrete · Rindersteak aus der Pfanne mit Tomaten-Vinagrete und Reis', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'fleisch', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Paprika','Rote Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rinderhüftsteak',q:120,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen.',
    'Für die Vinagrete Tomaten, Paprika und Zwiebel sehr fein würfeln und mit Petersilie, Essig und der Hälfte des Öls mischen.',
    'Steak trocken tupfen und im restlichen Öl in der heißen Pfanne je Seite 3 bis 4 Minuten braten, 3 Minuten ruhen lassen und quer zur Faser in dünne Streifen schneiden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Fleisch und Vinagrete mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Churrasco',
  kid:'Einige Fleischstreifen 2 Minuten länger durchbraten und sehr fein schneiden. Statt Vinagrete weiche Tomatenwürfel ohne Zwiebel und Essig dazugeben.',
  leftover:'Steak-Reis-Bowl · 8 Min. – Reste mit Bohnen erhitzen und mit frischer Vinagrete als Bowl anrichten.',
  tipp:'Vinagrete 10 Minuten durchziehen lassen, dann schmeckt sie runder.'
},
{
  id:'br-moqueca-peixe', name:'Moqueca de Peixe · Fisch-Schmortopf mit Kokosmilch, Paprika und Tomaten', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'fisch', base:'reis', time:{a:15,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Tomaten','Zwiebel','Limette','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen. Fisch in große Stücke schneiden.',
    'Zwiebel, Knoblauch und Paprika in Streifen in Öl 4 Minuten weich dünsten. Tomaten in Scheiben darauflegen.',
    'Kokosmilch angießen, Fischstücke darauf verteilen und zugedeckt bei kleiner Hitze 8 bis 10 Minuten garen, bis der Fisch innen weiß ist und leicht zerfällt.',
    'Kinderportion ohne Salz und Koriander abnehmen. Erwachsene mit Limettensaft, Salz, Koriander und nach Wunsch etwas Chili würzen.'
  ],
  kidName:'Mini-Moqueca',
  kid:'Fisch sorgfältig auf Gräten prüfen, zerpflücken und mit Reis und Kokossoße mischen. Paprika weich gedünstet klein schneiden.',
  leftover:'Moqueca-Reis-Pfanne · 10 Min. – Reste mit Erbsen in der Pfanne vollständig durcherhitzen.',
  tipp:'Klassisch kommt rotes Palmöl hinein, ein Teelöffel edelsüßes Paprikapulver gibt eine ähnliche Farbe.'
},
{
  id:'br-peixe-delicia', name:'Peixe à Delícia · überbackener Fisch mit Banane, heller Soße und Brokkoli', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'fisch', base:'reis', time:{a:15,c:20}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Banane','Brokkoli','Zitrone'], season:[6,7,8,9,10],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Banane',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Brokkoli',q:150,u:'g',c:'gemuese'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen und den Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen. Fisch in eine geölte Form legen, Banane längs halbieren und danebenlegen, Brokkoliröschen rundherum verteilen.',
    'Milch mit der Stärke verrühren, unter Rühren aufkochen und 1 Minute köcheln, bis die Soße bindet. Über Fisch und Banane gießen und mit Käse bestreuen.',
    'Im Ofen 18 bis 20 Minuten backen, bis der Fisch innen weiß ist und sich leicht zerteilen lässt.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Zitronensaft, Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Delícia',
  kid:'Fisch gründlich auf Gräten prüfen und zerpflücken. Banane und Brokkoli weich zerdrücken und mit der milden Soße und Reis mischen.',
  leftover:'Fisch-Reis-Taler · 12 Min. – Reste zerdrücken, mit einem Ei binden und in der Pfanne durchbraten.',
  tipp:'Banane zum Fisch ist in Brasilien ein Familienklassiker und kommt bei Kindern meist gut an.'
},
{
  id:'br-cuscuz-paulista', name:'Cuscuz Paulista · Maisgrieß-Gemüse-Kuchen mit Thunfisch und Ei', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'fisch', base:'polenta', time:{a:12,c:10}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Erbsen','Rote Paprika','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Thunfisch (Dose, im eigenen Saft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 140 g abgetropft'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Tomaten, gehackt (Dose)',q:120,u:'g',c:'vorrat'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ei 10 Minuten hart kochen, abschrecken und in Scheiben schneiden.',
    'Zwiebel und Paprika fein würfeln und im Topf in Öl 4 Minuten dünsten. Tomaten, Erbsen und 150 ml Wasser zugeben und aufkochen.',
    'Polenta einrieseln lassen und unter Rühren 5 Minuten garen, bis eine feste Masse entsteht. Thunfisch und Petersilie unterheben.',
    'Eischeiben in eine geölte Schüssel legen, die Masse darauf festdrücken, 3 Minuten ruhen lassen und auf einen Teller stürzen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und etwas Chili würzen.'
  ],
  kidName:'Mini-Cuscuz',
  kid:'Cuscuz in kleine, weiche Würfel schneiden und Erbsen leicht zerdrücken. Das Ei ist hart gekocht, ohne Salz und Chili servieren.',
  leftover:'Cuscuz-Schnitten · 10 Min. – Kalte Reste in Scheiben schneiden und in der Pfanne goldbraun braten.',
  tipp:'Die Schüssel vorher mit Tomaten- und Eischeiben auslegen, dann sieht der Cuscuz beim Stürzen festlich aus.'
},
{
  id:'br-baiao-de-dois', name:'Baião de Dois · Reis und Bohnen aus einem Topf mit gebratenem Käse', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'huelsen', base:'reis', time:{a:15,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Tomaten','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Augenbohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft, ersatzweise Kidneybohnen'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Halloumi',q:40,u:'g',c:'kuehl'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Paprika würfeln und im Topf in der Hälfte des Öls 3 Minuten dünsten. Reis und Kreuzkümmel einrühren, mit der doppelten Menge Wasser aufgießen und zugedeckt 30 Minuten garen.',
    'Bohnen abspülen und mit der gewürfelten Tomate unter den Reis heben, weitere 5 Minuten ziehen lassen.',
    'Halloumi würfeln, im restlichen Öl in der Pfanne 3 Minuten goldbraun braten und unter den Reis mischen.',
    'Kinderportion ohne Koriander und Salz abnehmen. Erwachsene mit Koriander, Pfeffer und wenig Salz abschmecken, der Käse ist bereits salzig.'
  ],
  kidName:'Mini-Baião',
  kid:'Bohnen zerdrücken und mit dem weichen Reis mischen. Halloumi ist salzig, daher nur ein bis zwei sehr kleine Würfel dazugeben oder weglassen.',
  leftover:'Baião-Bratlinge · 12 Min. – Reste leicht zerdrücken, zu Talern formen und in der Pfanne braten.',
  tipp:'Im Nordosten Brasiliens nimmt man Queijo coalho, Halloumi kommt ihm in der Pfanne am nächsten.'
},
{
  id:'br-feijao-tropeiro', name:'Feijão Tropeiro · Bohnenpfanne mit Grünkohl, Ei und Maniokbröseln', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'huelsen', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Grünkohl','Zwiebel','Frühlingszwiebel'], season:[11,12,1,2],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Grünkohl oder Spinat',q:100,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Maniokmehl, geröstet (Farofa)',q:30,u:'g',c:'vorrat',hint:'im Lateinamerika- oder Afroshop'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch fein würfeln und in Öl 3 Minuten dünsten. Grünkohl in feine Streifen schneiden, zugeben und 4 Minuten weich braten.',
    'Ei in die Pfanne schlagen und unter Rühren 2 Minuten vollständig stocken lassen.',
    'Bohnen abspülen, mit Paprikapulver unterheben und 3 Minuten erhitzen. Maniokmehl nach und nach einstreuen, bis die Mischung leicht krümelig ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Frühlingszwiebelringen würzen.'
  ],
  kidName:'Mini-Tropeiro',
  kid:'Bohnen grob zerdrücken und Grünkohl sehr fein hacken. Für das Kind weniger Maniokmehl nehmen, damit es nicht zu trocken wird.',
  leftover:'Tropeiro-Wrap · 5 Min. – Reste vollständig erhitzen und mit Tomate in eine Tortilla rollen.',
  tipp:'Ohne Speck bleibt das Gericht mager, geräuchertes Paprikapulver bringt für Erwachsene das rauchige Aroma.'
},
{
  id:'br-moqueca-ovos', name:'Moqueca de Ovos · Eier in Kokos-Tomaten-Soße mit Paprika und Reis', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'ei', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Tomaten','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen.',
    'Zwiebel und Paprika in Streifen in Öl 4 Minuten dünsten, gewürfelte Tomaten zugeben und 2 Minuten mitgaren. Kokosmilch angießen und aufkochen.',
    'Mit einem Löffel Mulden formen, Eier hineingleiten lassen und zugedeckt bei kleiner Hitze 7 bis 8 Minuten garen, bis Eiweiß und Eigelb ganz fest sind.',
    'Kinderportion ohne Salz und Koriander abnehmen. Erwachsene mit Limettensaft, Salz und Koriander würzen.'
  ],
  kidName:'Mini-Moqueca mit Ei',
  kid:'Ei vollständig durchgaren, klein schneiden und mit Soße unter den Reis mischen. Paprika weich gegart klein schneiden.',
  leftover:'Eier-Reis-Pfanne · 8 Min. – Reste mit Erbsen in der Pfanne vollständig durcherhitzen.',
  tipp:'Die Soße vor den Eiern ruhig 5 Minuten einköcheln lassen, dann wird sie kräftiger.'
},
{
  id:'br-quibe-abobora', name:'Quibe de Abóbora · Kürbis-Bulgur-Auflauf mit Ricotta-Spinat-Füllung', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'milch', base:'bulgur', time:{a:20,c:35}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kürbis','Spinat','Zwiebel','Kräuter'], season:[9,10,11],
  ing:[
    {n:'Bulgur',q:70,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:200,u:'g',c:'gemuese'},
    {n:'Ricotta',q:100,u:'g',c:'kuehl'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie oder Minze',q:1,u:'EL',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kürbis würfeln und in wenig Wasser 10 Minuten weich kochen. Bulgur mit 140 ml kochendem Wasser übergießen und 10 Minuten quellen lassen. Ofen auf 200 °C vorheizen.',
    'Kürbis abgießen, fein zerdrücken und mit Bulgur, sehr fein gewürfelter Zwiebel, Kräutern und Zimt zu einer formbaren Masse verkneten.',
    'Spinat hacken und mit Ricotta mischen. Die Hälfte der Kürbismasse in eine geölte Form drücken, Ricotta darauf verteilen, mit der restlichen Masse bedecken, rautenförmig einschneiden und mit Öl bestreichen.',
    'Im Ofen 25 Minuten backen, bis die Oberfläche fest und goldbraun ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene am Tisch mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Quibe',
  kid:'Ein weiches Stück aus der Mitte nehmen und in kleine Würfel schneiden. Ohne Salz, der Zimt ist mild genug für Kinder.',
  leftover:'Quibe-Brotzeit · 5 Min. – Kalte Reste mit Gurke und Joghurt in Vollkorn-Fladenbrot füllen.',
  tipp:'Quibe kam mit libanesischen Einwanderern nach Brasilien und gehört dort zu jeder Imbisstheke.'
},
{
  id:'br-torta-liquidificador', name:'Torta de Liquidificador · herzhafter Gemüsekuchen aus dem Mixer', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'ei', base:null, time:{a:15,c:35}, devices:[['ofen']], method:'Backofen',
  allergens:['ei','milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Karotten','Mais','Kirschtomaten'], season:[6,7,8,9],
  ing:[
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Weizenvollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Backpulver',q:0.5,u:'TL',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:50,u:'g',c:'vorrat'},
    {n:'Kirschtomaten',q:60,u:'g',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Eier, Milch, Mehl, Backpulver, Öl und die Hälfte des Käses mit dem Mixer oder Schneebesen 1 Minute glatt rühren.',
    'Zucchini und Karotte grob raspeln, mit dem Mais unter den Teig heben und in eine geölte Form gießen. Halbierte Kirschtomaten darauflegen und mit dem restlichen Käse bestreuen.',
    'Im Ofen 30 bis 35 Minuten backen, bis ein Holzstäbchen in der Mitte trocken herauskommt.',
    'Kinderportion abnehmen und lauwarm abkühlen lassen, der Teig ist ungesalzen. Erwachsene am Tisch mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Gemüsekuchen',
  kid:'Kuchen vollständig durchbacken und in fingerdicke Streifen zum Selbstgreifen schneiden. Für die Kinderecke die Kirschtomaten geviertelt statt halbiert auflegen.',
  leftover:'Kuchen-Brotzeit · 3 Min. – Kalte Reste in Streifen schneiden und als Pausenbrot mitnehmen.',
  tipp:'Der Teig gelingt auch mit Erbsen, Brokkoli oder Spinat, je nachdem, was im Kühlschrank liegt.'
},
{
  id:'br-panqueca-espinafre', name:'Panquecas de Espinafre e Ricota · überbackene Pfannkuchen mit Spinat-Ricotta-Füllung', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'milch', base:null, time:{a:25,c:15}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Spinat','Tomaten','Zwiebel'], season:[4,5,9,10],
  ing:[
    {n:'Weizenvollkornmehl',q:40,u:'g',c:'vorrat'},
    {n:'Milch',q:90,u:'ml',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Babyspinat',q:100,u:'g',c:'gemuese'},
    {n:'Ricotta',q:80,u:'g',c:'kuehl'},
    {n:'Tomaten, passiert',q:120,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl, Milch und Ei glatt verrühren und in einer leicht geölten Pfanne nacheinander dünne Pfannkuchen backen, je Seite etwa 1 Minute. Ofen auf 200 °C vorheizen.',
    'Zwiebel fein würfeln und im restlichen Öl glasig dünsten, Spinat zugeben und zusammenfallen lassen. Etwas abkühlen lassen und mit Ricotta mischen.',
    'Pfannkuchen mit der Füllung bestreichen, aufrollen und in eine Form legen. Passierte Tomaten mit Oregano darübergießen und mit Käse bestreuen.',
    'Im Ofen 15 Minuten backen, bis die Soße blubbert.',
    'Kinderportion ungesalzen abnehmen. Erwachsene am Tisch mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Panqueca',
  kid:'Eine Rolle in kleine Stücke schneiden und etwas abkühlen lassen. Ohne Salz servieren, der Spinat ist weich und fein verteilt.',
  leftover:'Panqueca-Auflauf · 15 Min. – Reste in Stücke schneiden, mit Tomatensoße begießen und im Ofen vollständig erhitzen.',
  tipp:'Die Pfannkuchen lassen sich am Vortag backen und gestapelt im Kühlschrank aufbewahren.'
}
);
