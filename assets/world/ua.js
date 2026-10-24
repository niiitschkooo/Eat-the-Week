/* Grün geplant · Ukraine · Top 15 */
RECIPES.push(
{
  id:'ua-borschtsch', name:'Borschtsch · Rote-Bete-Eintopf mit Bohnen, Kohl und Kartoffeln', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'huelsen', base:'kartoffeln', time:{a:20,c:35}, devices:[['topf']], method:'Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Bete','Weißkohl','Kartoffeln','Karotten','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Rote Bete',q:1,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln, Karotte und Rote Bete grob raspeln und in Öl 5 Minuten dünsten. Tomatenmark einrühren und 1 Minute mitrösten.',
    'Brühe angießen, Kartoffeln in Würfeln zugeben und 15 Minuten köcheln.',
    'Weißkohl in feine Streifen schneiden, mit den abgespülten Bohnen zugeben und 12 Minuten weiterköcheln, bis der Kohl weich ist.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Pfeffer abschmecken und mit einem Klecks saurer Sahne servieren.'
  ],
  kidName:'Rote-Bete-Bohnen-Suppe',
  kid:'Gemüse und Bohnen mit wenig Suppe grob zerdrücken, damit es gut löffelbar ist, und mit saurer Sahne mischen. Ohne Salz servieren und ein Lätzchen bereitlegen, weil Rote Bete stark färbt.',
  leftover:'Borschtsch vom Vortag · 8 Min. – Reste vollständig erhitzen, am zweiten Tag schmeckt der Eintopf noch runder.',
  tipp:'Mit Einweghandschuhen bleiben die Finger beim Raspeln der Roten Bete sauber.'
},
{
  id:'ua-warenyky', name:'Warenyky · Teigtaschen mit Quark-Dill-Füllung, saurer Sahne und Gurken-Tomaten-Salat', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'milch', base:null, time:{a:35,c:15}, devices:[['topf']], method:'Topf',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Gurke','Tomaten','Frühlingszwiebel','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:90,u:'g',c:'vorrat'},
    {n:'Magerquark',q:120,u:'g',c:'kuehl'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Frühlingszwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.33,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl mit 50 ml warmem Wasser und dem Öl zu einem glatten Teig kneten und abgedeckt 15 Minuten ruhen lassen.',
    'Quark mit Ei, fein geschnittener Frühlingszwiebel und Dill verrühren.',
    'Teig dünn ausrollen, Kreise von 8 cm ausstechen, je 1 TL Füllung daraufsetzen, zu Halbmonden falten und die Ränder fest zusammendrücken.',
    'Warenyky portionsweise in siedendem Wasser garen und 3 Minuten oben schwimmen lassen, damit die Füllung mit dem Ei vollständig gart. Gurke und Tomate würfeln.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Pfeffer, etwas Salz und saurer Sahne servieren.'
  ],
  kidName:'Mini-Warenyky',
  kid:'Teigtaschen halbieren, kurz abkühlen lassen und mit etwas saurer Sahne anbieten, die Füllung bleibt ungesalzen. Tomate entkernen und klein würfeln.',
  leftover:'Warenyky aus der Pfanne · 8 Min. – Übrige Teigtaschen in wenig Öl mit Zwiebelringen knusprig braten.',
  tipp:'Ein Glas mit 8 cm Durchmesser ersetzt den Ausstecher.'
},
{
  id:'ua-deruny', name:'Deruny · Kartoffelpuffer aus der Pfanne mit Champignon-Rahm-Soße', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'ei', base:null, time:{a:25,c:20}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Pilze','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Dinkel-Vollkornmehl',q:15,u:'g',c:'vorrat'},
    {n:'Champignons',q:150,u:'g',c:'gemuese'},
    {n:'Saure Sahne',q:50,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Pilze in Scheiben schneiden und mit der Hälfte der Zwiebel in Würfeln in 1 TL Öl 6 Minuten braten. Saure Sahne und 3 EL Wasser einrühren, kurz erhitzen und warm stellen.',
    'Kartoffeln und restliche Zwiebel fein reiben, in einem Tuch kräftig ausdrücken und mit Ei und Mehl verrühren.',
    'Pfanne mit wenig Öl auspinseln, je 1 EL Teig flach hineinsetzen und bei mittlerer Hitze je Seite 3 bis 4 Minuten goldbraun und durchgegart braten. Vor jeder Runde etwas Öl nachpinseln.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Dill bestreuen und mit der Pilzsoße servieren.'
  ],
  kidName:'Kleine Kartoffelpuffer mit Pilzsoße',
  kid:'Puffer etwas abkühlen lassen und in Streifen schneiden, Pilze für das Kind fein hacken und unter die Soße mischen. Ohne Salz.',
  leftover:'Deruny aus dem Ofen · 8 Min. – Kalte Puffer bei 200 °C im Ofen wieder knusprig backen.',
  tipp:'Die Stärke, die sich im ausgedrückten Kartoffelsaft absetzt, zurück in den Teig geben, dann halten die Puffer besser.'
},
{
  id:'ua-banosch', name:'Banosch · cremige Maisgrieß-Polenta mit gebratenen Pilzen und Schafskäse', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'milch', base:'polenta', time:{a:8,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Pilze','Zwiebel','Tomaten','Kräuter'], season:[],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Feta',q:40,u:'g',c:'kuehl'},
    {n:'Champignons',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Milch mit 150 ml Wasser aufkochen, Polenta einrieseln lassen und unter Rühren bei kleiner Hitze 5 bis 8 Minuten zu einem cremigen Brei garen. Saure Sahne unterrühren.',
    'Pilze in Scheiben und Zwiebel in Würfel schneiden und in Öl bei starker Hitze 6 Minuten goldbraun braten.',
    'Tomate in Spalten schneiden. Banosch auf Teller geben und die Pilze darauf verteilen.',
    'Kinderportion mit nur wenig Feta abnehmen. Erwachsene reichlich Feta darüberbröseln und mit Pfeffer und Dill würzen, Salz ist durch den Käse kaum nötig.'
  ],
  kidName:'Pilz-Polenta mit Käse',
  kid:'Polenta etwas abkühlen lassen, Pilze fein hacken und unterrühren. Nur wenig Feta, weil er salzig ist, Tomate entkernen und würfeln.',
  leftover:'Polenta-Schnitten · 10 Min. – Erkaltete Polenta in Scheiben schneiden und in der Pfanne von beiden Seiten anbraten.',
  tipp:'In den Karpaten wird Banosch mit Bryndza gegessen, ein milder Schafskäse oder Feta passt ebenso.'
},
{
  id:'ua-hretschka', name:'Hretschka · Buchweizen mit Pilzen, Zwiebeln und Spiegelei', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'ei', base:null, time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Zwiebel','Karotten','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Buchweizen',q:70,u:'g',c:'vorrat'},
    {n:'Champignons',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Gurke',q:0.33,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Buchweizen in 150 ml Wasser aufkochen und zugedeckt bei kleiner Hitze 12 bis 15 Minuten quellen lassen.',
    'Zwiebel würfeln, Karotte raspeln und Pilze in Scheiben schneiden, alles in der Hälfte des Öls 8 Minuten braten und unter den Buchweizen heben.',
    'Im restlichen Öl die Eier braten, bis Eiweiß und Eigelb vollständig fest sind. Gurke in Scheiben schneiden.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Dill würzen.'
  ],
  kidName:'Buchweizen mit Pilzen und Ei',
  kid:'Pilze klein hacken und mit dem weichen Buchweizen mischen, das durchgebratene Ei in kleine Stücke schneiden. Gurke schälen und in Stifte schneiden, ohne Salz.',
  leftover:'Buchweizen-Bratlinge · 15 Min. – Reste mit einem Ei und etwas Haferflocken verkneten und als kleine Taler durchbraten.',
  tipp:'Gerösteter Buchweizen aus dem Osteuropa-Regal schmeckt nussiger als ungerösteter.'
},
{
  id:'ua-selenyj-borschtsch', name:'Selenyj borschtsch · grüne Suppe mit Spinat, Kartoffeln und Ei', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'ei', base:'kartoffeln', time:{a:12,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei','milch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Spinat','Kartoffeln','Frühlingszwiebel','Karotten','Zitrone'], season:[3,4,5,6],
  ing:[
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:100,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'}
  ],
  steps:[
    'Kartoffeln und Karotte in kleine Würfel schneiden und in der Brühe 15 Minuten weich köcheln.',
    'Eier in einem kleinen Topf 10 Minuten hart kochen, abschrecken, pellen und würfeln.',
    'Spinat grob hacken und Frühlingszwiebel in Ringe schneiden, beides in die Suppe geben und 3 Minuten ziehen lassen.',
    'Kinderportion abnehmen. Erwachsene mit Zitronensaft, Salz und Pfeffer säuerlich abschmecken und mit Ei, saurer Sahne, Dill und Brot servieren.'
  ],
  kidName:'Grüne Kartoffelsuppe mit Ei',
  kid:'Suppe für das Kind mit wenig Flüssigkeit grob pürieren und mit saurer Sahne mischen. Das hart gekochte Ei klein schneiden, ohne Salz und Zitrone.',
  leftover:'Grüne Suppe mit frischem Ei · 10 Min. – Reste vollständig erhitzen und mit einem frisch hart gekochten Ei servieren.',
  tipp:'Klassisch kommt Sauerampfer hinein, den es im Frühling auf dem Markt gibt, dann die Zitrone weglassen.'
},
{
  id:'ua-ryba-w-smetani', name:'Ryba w smetani · Fischfilet in Dill-Sahne-Soße mit Kartoffeln und Erbsen', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Erbsen','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Saure Sahne',q:50,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in 2 cm große Würfel schneiden und in Wasser 15 Minuten kochen, Erbsen in den letzten 3 Minuten zugeben.',
    'Zwiebel fein würfeln und in Öl 3 Minuten glasig dünsten. Saure Sahne mit 50 ml Wasser verrühren und zugeben.',
    'Fisch in die Soße legen und zugedeckt bei kleiner Hitze 8 Minuten garen, bis er sich leicht zerteilen lässt. Dill unterziehen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Fisch in Dillsoße mit Kartoffeln',
  kid:'Fisch auf Gräten prüfen und zerpflücken, mit Kartoffeln und Soße zerdrücken. Erbsen leicht quetschen, ohne Salz.',
  leftover:'Fisch-Kartoffel-Auflauf · 15 Min. – Reste in eine Form geben und zugedeckt im Ofen vollständig erhitzen.',
  tipp:'In der Ukraine wird oft Karausche verwendet, jeder feste weiße Fisch eignet sich ebenso.'
},
{
  id:'ua-juschka', name:'Juschka · klare Fischsuppe mit Kartoffeln, Karotten und Dill', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'fisch', base:'kartoffeln', time:{a:12,c:25}, devices:[['topf']], method:'Topf',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:450,u:'ml',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:2,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotte würfeln und Kartoffeln in 1,5 cm große Stücke schneiden. Mit Brühe und Lorbeer aufkochen und 15 Minuten köcheln, bis die Kartoffeln weich sind.',
    'Fisch in 3 cm große Stücke schneiden, in die Suppe legen und 6 bis 8 Minuten gar ziehen lassen. Lorbeerblatt entfernen.',
    'Dill unterziehen und das Brot dazu in Scheiben schneiden.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Milde Fisch-Kartoffel-Suppe',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Kartoffeln und Karotten mit wenig Brühe zerdrücken, damit es gut löffelbar ist. Ohne Salz.',
  tipp:'Mit einer Handvoll Hirse, 15 Minuten mitgekocht, wird die Suppe noch sättigender.'
},
{
  id:'ua-sudak', name:'Sudak · gebratener Zander mit Dillkartoffeln und Krautsalat', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Weißkohl','Karotten','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Zanderfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in 2 cm große Würfel schneiden und in Wasser 12 bis 14 Minuten weich kochen.',
    'Weißkohl und Karotte fein hobeln, mit Zitronensaft und 1 TL Öl kräftig durchkneten.',
    'Zander trocken tupfen und im restlichen Öl auf der Hautseite 4 Minuten braten, wenden und 2 Minuten fertig garen, bis er innen weiß ist.',
    'Kartoffeln mit Dill mischen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz, Pfeffer und Zitrone würzen.'
  ],
  kidName:'Zanderflocken mit Dillkartoffeln',
  kid:'Haut entfernen, Fisch auf Gräten prüfen und zerpflücken, Kartoffeln zerdrücken. Statt rohem Krautsalat sehr fein geriebene Karotte anbieten, ohne Salz und Zitrone.',
  leftover:'Kartoffel-Kraut-Salat · 5 Min. – Übrige Kartoffeln mit dem Krautsalat und etwas Joghurt mischen.',
  tipp:'Der Krautsalat heißt in der Ukraine Vitaminsalat und hält sich gekühlt zwei Tage.'
},
{
  id:'ua-kotleta-po-kyjiwsky', name:'Kotleta po-kyjiwsky · Hähnchen Kiew aus dem Ofen mit Dillbutter, Püree und Erbsen', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'gefluegel', base:'kartoffeln', time:{a:25,c:25}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Erbsen','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Butter',q:10,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Semmelbrösel',q:25,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Erbsen, TK',q:100,u:'g',c:'tk'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Butter mit Dill verkneten, zu kleinen Stangen formen und 10 Minuten ins Gefrierfach legen. Ofen auf 200 °C vorheizen.',
    'Hähnchenbrust seitlich tief einschneiden, aufklappen und flach klopfen. Butterstange daraufsetzen, fest einrollen, die Enden einschlagen, durch verquirltes Ei ziehen und in den Bröseln wälzen.',
    'Röllchen auf ein Blech mit Backpapier legen, mit Öl beträufeln und 22 bis 25 Minuten backen, bis die Panade goldbraun und das Fleisch innen vollständig durchgegart ist.',
    'Kartoffeln schälen, würfeln und in Wasser 15 Minuten kochen, Erbsen in den letzten 3 Minuten zugeben. Kartoffeln mit warmer Milch zu Püree stampfen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Hähnchenröllchen mit Püree',
  kid:'Röllchen aufschneiden und etwas abkühlen lassen, da die Butterfüllung heiß ist, dann in kleine Stücke schneiden. Erbsen leicht zerdrücken und unter das Püree mischen.',
  leftover:'Hähnchen-Brot · 5 Min. – Kalte Hähnchenscheiben mit Gurke auf Vollkornbrot legen.',
  tipp:'Die Enden gut einschlagen, dann bleibt die Dillbutter beim Backen im Röllchen.'
},
{
  id:'ua-liniwi-holubzi', name:'Liniwi holubzi · faule Kohlrouladen als Hack-Reis-Bällchen in Tomaten-Sahne-Soße', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'fleisch', base:'reis', time:{a:20,c:55}, devices:[['ofen'],['topf']], method:'Topf + Backofen',
  allergens:['milch','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Weißkohl','Karotten','Zwiebel','Tomaten'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Weißkohl',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in Wasser 20 Minuten vorgaren und abgießen. Ofen auf 180 °C vorheizen.',
    'Weißkohl sehr fein hacken, Zwiebel und Karotte fein reiben und alles in Öl 6 Minuten weich dünsten.',
    'Abgekühltes Gemüse mit Hack, Reis und Ei verkneten, mit nassen Händen ovale Bällchen formen und in eine Auflaufform setzen.',
    'Passierte Tomaten mit saurer Sahne und 80 ml Wasser verrühren, darübergießen und 35 bis 40 Minuten backen, bis die Bällchen vollständig durchgegart sind.',
    'Kinderportion ohne Salz abnehmen. Erwachsene am Tisch mit Salz und Pfeffer würzen.'
  ],
  kidName:'Kohl-Hack-Bällchen',
  kid:'Bällchen halbieren oder vierteln und mit der milden Soße zerdrücken. Ohne Salz servieren.',
  leftover:'Bällchen-Reis-Pfanne · 10 Min. – Reste zerteilen und mit der Soße in der Pfanne vollständig erhitzen.',
  tipp:'Die faule Variante spart das Wickeln der Kohlblätter und schmeckt fast wie klassische Holubzi.'
},
{
  id:'ua-hretschanyky', name:'Hretschanyky · Buchweizen-Hackfrikadellen in Tomatensoße mit Gurkensalat', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'fleisch', base:null, time:{a:20,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zwiebel','Karotten','Tomaten','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Buchweizen',q:50,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Buchweizen in 120 ml Wasser 12 Minuten weich garen und abkühlen lassen.',
    'Zwiebel fein reiben und mit Hack, Buchweizen und Ei verkneten. Mit nassen Händen flache Frikadellen formen.',
    'Frikadellen in der Hälfte des Öls je Seite 3 Minuten anbraten. Geraspelte Karotte, passierte Tomaten und 50 ml Wasser zugeben und zugedeckt 12 Minuten schmoren, bis die Frikadellen vollständig durchgegart sind.',
    'Gurke in Scheiben schneiden und mit Dill und dem restlichen Öl mischen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Buchweizen-Frikadellen mit Tomatensoße',
  kid:'Frikadellen in kleine Stücke teilen und mit Tomatensoße mischen, durch den Buchweizen sind sie besonders weich. Gurke schälen und in Stifte schneiden, ohne Salz.',
  leftover:'Frikadellen-Brot · 5 Min. – Kalte Frikadellen in Scheiben mit Gurke auf Vollkornbrot legen.',
  tipp:'Der Buchweizen macht die Frikadellen saftig und streckt das Fleisch.'
},
{
  id:'ua-kulisch', name:'Kulisch · Hirse-Kartoffel-Eintopf mit Hähnchen und Karotten', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Zwiebel','Karotten','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Hirse',q:50,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:450,u:'ml',c:'vorrat'},
    {n:'Petersilie',q:1,u:'EL',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in 2 cm große Würfel schneiden und in Öl 4 Minuten anbraten. Zwiebel und Karotte würfeln, zugeben und 3 Minuten mitbraten.',
    'Hirse heiß abspülen und mit gewürfelten Kartoffeln und der Brühe zugeben. 25 Minuten leise köcheln, bis Hirse und Kartoffeln weich sind und der Kulisch dicklich ist.',
    'Knoblauch fein hacken und mit der Petersilie unterrühren.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Hirse-Hähnchen-Brei',
  kid:'Hähnchen fein zerzupfen und mit den weichen Kartoffeln und der Hirse leicht zerdrücken. Ohne Salz servieren.',
  leftover:'Hirse-Pfanne · 8 Min. – Dick gewordene Reste in der Pfanne mit etwas Gemüse vollständig erhitzen und anbraten.',
  tipp:'Kulisch war das Lagerfeuer-Essen der Kosaken und wird beim Abkühlen fest, mit etwas Brühe lässt er sich gut aufwärmen.'
},
{
  id:'ua-petschenja', name:'Petschenja · Schmortopf mit Schweinefleisch, Kartoffeln, Karotten und Pilzen', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:60}, devices:[['ofen','slowcooker']], method:'Backofen oder Slowcooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Pilze','Zwiebel'], season:[],
  ing:[
    {n:'Schweinegulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Fleisch in 2 cm große Würfel schneiden und mit Paprikapulver und Öl mischen.',
    'Kartoffeln, Karotten und Zwiebel in grobe Stücke schneiden, Pilze halbieren und Knoblauch fein hacken.',
    'Alles mit Lorbeer in einen Bräter oder eine Form mit Deckel schichten, Brühe angießen und zugedeckt 60 Minuten schmoren, bis Fleisch und Kartoffeln weich sind. Im Slowcooker 6 Stunden auf niedriger Stufe garen.',
    'Lorbeerblatt entfernen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Ofentopf mit zartem Fleisch',
  kid:'Fleisch sehr klein schneiden oder zerzupfen, Kartoffeln und Karotten mit etwas Schmorsaft zerdrücken. Ohne Salz.',
  leftover:'Schmortopf vom Vortag · 10 Min. – Reste zugedeckt vollständig erhitzen und mit Gurkensalat essen.',
  tipp:'In der Ukraine wird Petschenja in kleinen Tontöpfen gegart, jede ofenfeste Form mit Deckel funktioniert genauso.'
},
{
  id:'ua-krutschenyky', name:'Krutschenyky · Schweinerouladen mit Pilzfüllung in Sahnesoße und Buchweizen', cuisine:'Ukraine', flag:'🇺🇦',
  protein:'fleisch', base:null, time:{a:25,c:40}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Pilze','Zwiebel','Karotten','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Schweineschnitzel, mager',q:120,u:'g',c:'fisch'},
    {n:'Champignons',q:100,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Buchweizen',q:70,u:'g',c:'vorrat'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Gurke',q:0.33,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Pilze und Zwiebel fein hacken und in der Hälfte des Öls 6 Minuten braten, bis die Flüssigkeit verdampft ist.',
    'Schnitzel dünn klopfen, mit der Pilzmasse bestreichen, aufrollen und mit Zahnstochern feststecken. Im restlichen Öl rundum 4 Minuten anbraten.',
    'Karotte in Scheiben zugeben, Brühe angießen und zugedeckt 30 Minuten leise schmoren, bis das Fleisch zart ist. Buchweizen in 150 ml Wasser aufkochen und 15 Minuten quellen lassen.',
    'Rouladen herausnehmen, saure Sahne in die Soße rühren und nur noch erwärmen. Gurke in Scheiben schneiden.',
    'Zahnstocher entfernen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz, Pfeffer und Dill würzen.'
  ],
  kidName:'Rouladenstückchen mit Buchweizen',
  kid:'Roulade in dünne Scheiben und dann klein schneiden und mit Buchweizen und Soße mischen. Gurke schälen und in Stifte schneiden, ohne Salz.',
  leftover:'Rouladen-Buchweizen-Pfanne · 10 Min. – Reste klein schneiden und mit Soße und Buchweizen in der Pfanne vollständig erhitzen.',
  tipp:'Klassisch kommen auch ein paar gehackte Trockenpflaumen in die Füllung, das passt gut zu Schweinefleisch.'
}
);
