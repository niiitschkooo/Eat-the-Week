/* Grün geplant · Iran · Top 15 */
RECIPES.push(
{
  id:'ir-kabab-koobideh', name:'Chelow Kabab Koobideh · Hackspieße mit Safranreis und Ofentomaten', cuisine:'Iran', flag:'🇮🇷',
  protein:'fleisch', base:'reis', time:{a:15,c:15}, devices:[['topf'],['ofen']], method:'Topf + Backofen (Grill)',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Safran (Döschen 0,1 g)',q:0.25,u:'Stk.',c:'gewuerz',p:true},
    {n:'Sumach',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen und in der 1,5-fachen Menge Wasser zugedeckt 12 Minuten garen. Safran in 1 EL heißem Wasser auflösen und unter einen Teil des Reises mischen.',
    'Ofen mit Grillfunktion auf 240 °C vorheizen. Ein Viertel der Zwiebel fein reiben, den Saft ausdrücken und mit dem Hack 2 Minuten kräftig verkneten.',
    'Hack zu flachen, länglichen Rollen formen und aufs Blech legen, halbierte Tomaten danebenlegen, mit Öl bepinseln und 10 bis 12 Minuten grillen, bis das Fleisch innen nicht mehr rosa ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene den Kabab mit Salz und Sumach bestreuen und mit Reis, Tomaten, Gurke, restlicher Zwiebel in Ringen und Petersilie servieren.'
  ],
  kidName:'Mini-Koobideh',
  kid:'Hackrollen klein formen, vollständig durchgaren und in Scheiben schneiden. Ofentomate ohne Haut zerdrücken, Reis ohne Salz.',
  leftover:'Kabab-Reis-Pfanne · 8 Min. – Reste in Stücke schneiden und mit dem Reis in der Pfanne vollständig erhitzen.',
  tipp:'Das Hack kräftig kneten, dann hält es auch ohne Ei oder Brot gut zusammen.'
},
{
  id:'ir-joojeh-kabab', name:'Joojeh Kabab · Safran-Zitronen-Hähnchen mit Salat Shirazi und Fladenbrot', cuisine:'Iran', flag:'🇮🇷',
  protein:'gefluegel', base:null, time:{a:12,c:12}, devices:[['ofen','airfryer']], method:'Backofen (Grill) oder Airfryer',
  allergens:['milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke','Rote Zwiebel','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Safran (Döschen 0,1 g)',q:0.25,u:'Stk.',c:'gewuerz',p:true},
    {n:'Minze, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen mit Grillfunktion auf 230 °C vorheizen. Safran in 1 EL heißem Wasser auflösen und mit Joghurt, der Hälfte des Zitronensafts und der Hälfte des Öls verrühren.',
    'Hähnchen in 3-cm-Würfel schneiden, in der Marinade wenden, auf Spieße stecken und 10 bis 12 Minuten grillen, einmal wenden, bis es innen nicht mehr rosa ist.',
    'Für den Salat Shirazi Tomaten, Gurke und Zwiebel sehr fein würfeln und mit restlichem Zitronensaft, Öl und Minze mischen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene Hähnchen und Salat mit Salz und Pfeffer würzen und mit Fladenbrot servieren.'
  ],
  kidName:'Safran-Hähnchen-Happen',
  kid:'Hähnchen vom Spieß nehmen, auf Durchgaren prüfen und klein schneiden. Gurke und Tomate ohne Zwiebel und Salz in kleinen Würfeln dazu.',
  leftover:'Joojeh-Wrap · 5 Min. – übriges Hähnchen vollständig erhitzen und mit Salat in Fladenbrot rollen.',
  tipp:'Klassisch gibt es Joojeh mit Safranreis, wer Zeit hat, kocht Basmatireis dazu.'
},
{
  id:'ir-ghormeh-sabzi', name:'Ghormeh Sabzi · Kräutereintopf mit Rind, Kidneybohnen und getrockneter Limette', cuisine:'Iran', flag:'🇮🇷',
  protein:'fleisch', base:'reis', time:{a:20,c:90}, devices:[['topf','slowcooker'],['pfanne']], method:'Schmortopf oder Slowcooker + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kräuter','Babyspinat','Lauch','Zwiebel'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Rindergulasch, mager',q:100,u:'g',c:'fisch'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Petersilie, frisch',q:0.75,u:'Bund',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Getrocknete Limette',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Bockshornkleeblätter, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und in der Hälfte des Öls goldbraun braten. Fleisch in kleinen Würfeln zugeben, rundum anbraten, mit Wasser bedecken und zugedeckt 45 Minuten schmoren.',
    'Petersilie, Spinat und Lauch sehr fein hacken und im restlichen Öl in der Pfanne 10 Minuten dunkelgrün dünsten, Bockshornklee kurz mitrösten.',
    'Kräuter, angestochene Limette und abgespülte Bohnen zum Fleisch geben und weitere 40 Minuten leise schmoren, bis das Fleisch zart ist. Reis parallel 35 Minuten garen.',
    'Kinderportion ohne Salz abnehmen und die Limette entfernen. Erwachsene mit Salz und Pfeffer abschmecken und mit dem Reis servieren.'
  ],
  kidName:'Grüner Kräutertopf mild',
  kid:'Fleisch fein zerzupfen, Bohnen zerdrücken und alles mit dem Reis mischen. Getrocknete Limette sicher entfernen und ohne Salz servieren.',
  leftover:'Ghormeh am zweiten Tag · 10 Min. – Eintopf vollständig erhitzen, durchgezogen schmeckt er noch kräftiger.',
  tipp:'Getrocknete Limetten und Bockshornklee gibt es im persischen oder türkischen Supermarkt, fertig gedünstete Ghormeh-Kräuter auch tiefgekühlt.'
},
{
  id:'ir-fesenjan', name:'Fesenjan · Hähnchen in Walnuss-Granatapfel-Sauce mit Kürbis und Reis', cuisine:'Iran', flag:'🇮🇷',
  protein:'gefluegel', base:'reis', time:{a:15,c:45}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['nuesse'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Kürbis','Zwiebel','Gurke'], season:[9,10,11],
  ing:[
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Walnusskerne, gemahlen',q:30,u:'g',c:'vorrat'},
    {n:'Granatapfelsirup',q:1,u:'EL',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und im Öl 5 Minuten goldbraun dünsten, Hähnchen in großen Stücken und Kurkuma zugeben und rundum anbraten.',
    'Gemahlene Walnüsse zugeben und unter Rühren 2 Minuten rösten, dann Granatapfelsirup einrühren und knapp mit Wasser bedecken.',
    'Kürbis würfeln, zugeben und zugedeckt bei kleiner Hitze 35 bis 40 Minuten schmoren, öfter umrühren, bis die Sauce dunkel und cremig ist. Reis parallel 12 Minuten garen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und nach Geschmack etwas mehr Granatapfelsirup abschmecken und mit Reis und Gurkenscheiben servieren.'
  ],
  kidName:'Walnuss-Hähnchen mild',
  kid:'Hähnchen fein zerzupfen, Kürbis zerdrücken und beides mit Reis und Sauce mischen. Nur geben, wenn Walnüsse bereits vertragen werden, ganze Nussstücke vermeiden.',
  leftover:'Fesenjan-Reis · 10 Min. – Reste mit etwas Wasser zugedeckt vollständig erhitzen, die Sauce dickt über Nacht nach.',
  tipp:'Die Sauce wird mit jeder Minute Schmorzeit dunkler und runder, wer Zeit hat, lässt sie 60 Minuten köcheln.'
},
{
  id:'ir-zereshk-polo', name:'Zereshk Polo ba Morgh · Berberitzenreis mit Safran-Hähnchen und Gurken-Joghurt', cuisine:'Iran', flag:'🇮🇷',
  protein:'gefluegel', base:'reis', time:{a:15,c:35}, devices:[['topf'],['pfanne']], method:'Zwei Töpfe + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zwiebel','Tomaten','Gurke'], season:[],
  ing:[
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Berberitzen, getrocknet',q:1,u:'EL',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Safran (Döschen 0,1 g)',q:0.25,u:'Stk.',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in Halbringe schneiden und in der Hälfte des Öls im Topf 5 Minuten dünsten, Hähnchen und Kurkuma zugeben und rundum anbraten. Safran in 2 EL heißem Wasser auflösen.',
    'Tomaten würfeln und mit 100 ml Wasser und der Hälfte des Safranwassers zugeben, dann zugedeckt 25 bis 30 Minuten schmoren, bis das Hähnchen zart und durchgegart ist.',
    'Reis waschen und in der 1,5-fachen Menge Wasser 12 Minuten garen. Berberitzen im restlichen Öl in der Pfanne 1 Minute schwenken, ohne sie zu bräunen, und mit dem restlichen Safran unter einen Teil des Reises heben.',
    'Gurke fein würfeln und unter den Joghurt rühren.',
    'Kinderportion ohne Salz abnehmen. Erwachsene das Hähnchen mit Salz und Pfeffer abschmecken und mit Berberitzenreis und Gurken-Joghurt servieren.'
  ],
  kidName:'Safran-Hähnchen mit Reis',
  kid:'Hähnchen fein zerzupfen und mit Reis und Sauce mischen. Nur wenige Berberitzen geben, sie sind sehr sauer, und ohne Salz servieren.',
  leftover:'Berberitzen-Reispfanne · 8 Min. – Reis und zerzupftes Hähnchen in der Pfanne vollständig erhitzen.',
  tipp:'Berberitzen vorher 5 Minuten in kaltem Wasser einweichen und abtropfen lassen, dann bleiben sie rund und saftig.'
},
{
  id:'ir-abgoosht', name:'Abgoosht · Lamm-Kichererbsen-Eintopf mit Kartoffeln, Tomaten und Fladenbrot', cuisine:'Iran', flag:'🇮🇷',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:90}, devices:[['topf','slowcooker']], method:'Topf oder Slowcooker',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Tomaten','Zwiebel','Radieschen'], season:[],
  ing:[
    {n:'Lammfleisch, mager, gewürfelt',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Kichererbsen (Dose, abgetropft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:50,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Radieschen',q:60,u:'g',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Getrocknete Limette',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lamm mit der Hälfte der Zwiebel, Kurkuma und der angestochenen Limette mit Wasser bedecken, aufkochen, Schaum abschöpfen und zugedeckt 60 Minuten leise köcheln.',
    'Kartoffeln halbieren, Tomaten vierteln und mit abgespülten Kichererbsen und Bohnen zugeben, dann weitere 30 Minuten garen, bis alles sehr weich ist.',
    'Brühe abgießen und als Suppe mit Fladenbrotstücken servieren. Fleisch, Kartoffeln und Hülsenfrüchte ohne Limette mit dem Stampfer grob zerdrücken.',
    'Kinderportion ohne Salz abnehmen. Erwachsene Brühe und Stampf mit Salz und Pfeffer würzen und mit Radieschen und der restlichen Zwiebel in Spalten servieren.'
  ],
  kidName:'Dizi-Stampf mild',
  kid:'Fleisch, Kartoffeln und Kichererbsen fein zerstampfen und die Limette sicher entfernen. Lauwarm und ohne Salz, dazu Brühe mit eingeweichtem Brot.',
  leftover:'Stampf-Brot · 5 Min. – übrigen Stampf vollständig erhitzen und auf Fladenbrot streichen.',
  tipp:'Im Slowcooker alles zusammen 7 Stunden auf niedriger Stufe garen, das ist die bequemste Art für Abgoosht.'
},
{
  id:'ir-sabzi-polo-mahi', name:'Sabzi Polo ba Mahi · Kräuterreis mit gebratenem Fisch und Zitrone', cuisine:'Iran', flag:'🇮🇷',
  protein:'fisch', base:'reis', time:{a:15,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kräuter','Frühlingszwiebel','Babyspinat','Zitrone'], season:[],
  ing:[
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Dill, frisch oder TK',q:3,u:'EL',c:'gemuese'},
    {n:'Petersilie, frisch',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Dill, Petersilie, Frühlingszwiebel und Spinat sehr fein hacken.',
    'Reis waschen und in der 1,5-fachen Menge Wasser zugedeckt 10 Minuten garen, die Kräuter untermischen und weitere 5 Minuten bei kleinster Hitze ziehen lassen.',
    'Fisch trocken tupfen, mit Kurkuma bestreuen und in Öl bei mittlerer Hitze je Seite 3 bis 4 Minuten braten, bis er innen weiß ist.',
    'Kinderportion ohne Salz abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz, Pfeffer und Zitronensaft würzen.'
  ],
  kidName:'Grüner Reis mit Fisch',
  kid:'Fisch vollständig garen, entgräten und zerpflücken und unter den weichen Kräuterreis mischen. Ohne Salz servieren.',
  leftover:'Kräuterreis-Pfanne · 8 Min. – Reis mit einem verquirlten Ei in der Pfanne braten, bis das Ei vollständig gestockt ist.',
  tipp:'Zu Nouruz, dem persischen Neujahr, gehört Sabzi Polo ba Mahi auf den Tisch, oft zusammen mit Kuku Sabzi.'
},
{
  id:'ir-ghalieh-mahi', name:'Ghalieh Mahi · Fisch in Koriander-Tamarinden-Sauce mit Reis', cuisine:'Iran', flag:'🇮🇷',
  protein:'fisch', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kräuter','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Koriandergrün',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tamarindenpaste',q:1,u:'TL',c:'vorrat'},
    {n:'Bockshornkleeblätter, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen und in der 1,5-fachen Menge Wasser zugedeckt 12 Minuten garen.',
    'Zwiebel und Knoblauch fein hacken und in Öl 4 Minuten dünsten, Kurkuma und Bockshornklee kurz mitrösten, dann fein gehacktes Koriandergrün 2 Minuten mitdünsten.',
    'Tamarindenpaste mit 100 ml Wasser verrühren und angießen, Fisch in Stücken hineinlegen und zugedeckt 6 bis 7 Minuten gar ziehen lassen, bis er innen weiß ist.',
    'Kinderportion ohne Salz abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz und Chili würzen und mit Reis und Tomatenspalten servieren.'
  ],
  kidName:'Fisch in grüner Sauce',
  kid:'Fisch vollständig garen, sorgfältig entgräten und zerpflücken und mit Reis und wenig Sauce mischen. Ohne Chili und Salz, Tomaten in kleinen Würfeln.',
  leftover:'Ghalieh-Reis · 8 Min. – Reste mit etwas Wasser zugedeckt in der Pfanne vollständig erhitzen.',
  tipp:'Im Süden Irans wird Ghalieh Mahi sehr scharf gegessen, die Chili deshalb erst nach dem Abnehmen der Kinderportion zugeben.'
},
{
  id:'ir-kuku-sabzi', name:'Kuku Sabzi · Kräuter-Omelett aus der Pfanne mit Joghurt und Fladenbrot', cuisine:'Iran', flag:'🇮🇷',
  protein:'ei', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kräuter','Frühlingszwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Petersilie, frisch',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:2,u:'EL',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kräuter, Frühlingszwiebel und Spinat sehr fein hacken.',
    'Eier mit Kurkuma verquirlen und die Kräuter unterrühren, die Masse soll mehr grün als gelb sein.',
    'Öl in einer kleinen beschichteten Pfanne erhitzen, Masse einfüllen und zugedeckt bei kleiner Hitze 10 Minuten stocken lassen. Dann wenden und weitere 3 Minuten garen, bis die Mitte ganz fest ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Joghurt und Fladenbrot servieren.'
  ],
  kidName:'Grüne Kuku-Streifen',
  kid:'Kuku vollständig durchgaren, bis die Mitte fest ist, und in fingerdicke Streifen schneiden. Mit ungewürztem Joghurt zum Dippen.',
  leftover:'Kuku-Brot · 3 Min. – übrige Kuku kalt oder kurz erwärmt mit Joghurt in Fladenbrot rollen.',
  tipp:'Klassisch kommen Berberitzen und gehackte Walnüsse in die Masse, für Kleinkinder die Nüsse weglassen.'
},
{
  id:'ir-mirza-ghasemi', name:'Mirza Ghasemi · rauchige Auberginen mit Tomaten, Knoblauch und Ei', cuisine:'Iran', flag:'🇮🇷',
  protein:'ei', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Aubergine','Tomaten','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Aubergine',q:0.75,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Petersilie, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Paprikapulver, geräuchert',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Aubergine schälen und in 1-cm-Würfel schneiden, Tomaten würfeln und Knoblauch fein hacken.',
    'Aubergine im Öl zugedeckt bei mittlerer Hitze 8 Minuten weich schmoren, zweimal umrühren und dann mit der Gabel grob zerdrücken.',
    'Knoblauch, Kurkuma, Paprikapulver und Tomaten zugeben und 3 Minuten einkochen. Eier verquirlen, unterrühren und unter Rühren 3 Minuten vollständig stocken lassen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen, mit Petersilie bestreuen und mit Fladenbrot servieren.'
  ],
  kidName:'Auberginen-Rührei',
  kid:'Eier vollständig stocken lassen und alles fein zerdrücken, die Tomatenhaut entfernen. Ohne Salz mit weichem Fladenbrot servieren.',
  leftover:'Mirza-Aufstrich · 3 Min. – Reste kurz und vollständig erwärmen und dick auf Fladenbrot streichen.',
  tipp:'Im Original werden die Auberginen über offener Flamme geröstet, geräuchertes Paprikapulver bringt das Raucharoma in die schnelle Pfannenversion.'
},
{
  id:'ir-kashk-bademjan', name:'Kashk-e Bademjan · Auberginen-Creme mit Joghurt, Minze und Röstzwiebeln', cuisine:'Iran', flag:'🇮🇷',
  protein:'milch', base:null, time:{a:9,c:15}, devices:[['pfanne']], method:'Pfanne',
  allergens:['milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Aubergine','Zwiebel','Gurke'], season:[7,8,9],
  ing:[
    {n:'Aubergine',q:0.75,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Griechischer Joghurt',q:150,u:'g',c:'kuehl'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Minze, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in feine Halbringe schneiden und in der Hälfte des Öls 5 Minuten goldbraun braten, die Hälfte als Topping herausnehmen.',
    'Aubergine schälen, in kleine Würfel schneiden und mit Kurkuma und restlichem Öl zugeben, zugedeckt 10 Minuten weich schmoren und dann grob zerstampfen.',
    'Pfanne vom Herd nehmen und zwei Drittel des Joghurts unterrühren.',
    'Kinderportion ohne Knoblauch und Salz abnehmen. Für die Erwachsenen Knoblauch und Salz unterrühren, mit restlichem Joghurt, Röstzwiebeln und Minze garnieren und mit Fladenbrot und Gurke servieren.'
  ],
  kidName:'Auberginen-Joghurt-Dip',
  kid:'Auberginen sehr weich schmoren, fein zerdrücken und mit ungewürztem Joghurt mischen. Röstzwiebeln fein hacken, Fladenbrot und Gurke in Streifen dazu.',
  leftover:'Bademjan-Brot · 3 Min. – Reste kalt oder kurz erwärmt auf Fladenbrot streichen.',
  tipp:'Kashk, eine gesäuerte Molkenpaste aus dem persischen Laden, ist das Original, griechischer Joghurt ist die mildere Alternative.'
},
{
  id:'ir-adas-polo', name:'Adas Polo · Linsenreis mit Röstzwiebeln, Rosinen und Gurken-Joghurt', cuisine:'Iran', flag:'🇮🇷',
  protein:'huelsen', base:'reis', time:{a:10,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Gurke','Tomaten'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:50,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rosinen',q:1,u:'EL',c:'vorrat'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Minze, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen und Reis waschen und zusammen in der doppelten Menge Wasser zugedeckt 30 bis 35 Minuten garen, bis beides weich ist.',
    'Zwiebel in feine Halbringe schneiden und in Öl 10 Minuten langsam goldbraun braten, Rosinen und Zimt in der letzten Minute zugeben.',
    'Gurke reiben und mit Joghurt und Minze verrühren, Tomaten würfeln.',
    'Kinderportion ohne Salz abnehmen. Erwachsene den Linsenreis salzen, mit Zwiebeln und Rosinen belegen und mit Gurken-Joghurt und Tomaten servieren.'
  ],
  kidName:'Linsenreis mild',
  kid:'Linsen weich garen und leicht zerdrücken, Rosinen halbieren oder für Kinder unter drei Jahren weglassen. Ohne Salz und mit Joghurt servieren.',
  leftover:'Adas-Polo-Pfanne · 8 Min. – Reste mit etwas Wasser in der Pfanne vollständig erhitzen.',
  tipp:'Klassisch kommen auch ein paar gewürfelte Datteln dazu, kurz mit den Zwiebeln geschwenkt.'
},
{
  id:'ir-ash-reshteh', name:'Ash Reshteh · Nudel-Bohnen-Kräuter-Eintopf mit Joghurt und Minzöl', cuisine:'Iran', flag:'🇮🇷',
  protein:'huelsen', base:'nudeln', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kräuter','Babyspinat','Lauch','Zwiebel'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:50,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Petersilie, frisch',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Minze, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in Halbringe schneiden und in der Hälfte des Öls 8 Minuten goldbraun braten, die Hälfte als Topping beiseitestellen.',
    'Lauch in Ringe schneiden, Petersilie und Spinat grob hacken und mit der übrigen Zwiebel, abgespülten Kichererbsen, Bohnen und reichlich Wasser im Topf 15 Minuten köcheln.',
    'Nudeln in Stücke brechen, zugeben und 10 Minuten weich köcheln, bis der Eintopf sämig ist.',
    'Restliches Öl in der Pfanne erwärmen, die Minze 20 Sekunden darin schwenken und vom Herd nehmen.',
    'Kinderportion ohne Salz abnehmen und Joghurt unterrühren. Erwachsene mit Salz und Pfeffer würzen und mit Joghurt, Röstzwiebeln und Minzöl servieren.'
  ],
  kidName:'Mini-Ash',
  kid:'Nudeln weich kochen und klein schneiden, Bohnen und Kichererbsen zerdrücken und den Eintopf lauwarm mit Joghurt mischen. Ohne Salz servieren.',
  leftover:'Dicker Ash · 8 Min. – Reste mit etwas Wasser vollständig erhitzen, der Eintopf dickt über Nacht stark nach.',
  tipp:'Kashk aus dem persischen Laden ersetzt im Original den Joghurt und gibt die typische säuerliche Note.'
},
{
  id:'ir-gheimeh', name:'Gheimeh · Schälerbsen-Tomaten-Eintopf mit getrockneter Limette und Ofenkartoffel-Stiften', cuisine:'Iran', flag:'🇮🇷',
  protein:'huelsen', base:'reis', time:{a:15,c:50}, devices:[['topf'],['ofen','airfryer']], method:'Topf + Backofen oder Airfryer',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Zwiebel','Kartoffeln'], season:[],
  ing:[
    {n:'Basmatireis',q:60,u:'g',c:'vorrat'},
    {n:'Gelbe Schälerbsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:120,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Getrocknete Limette',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und in der Hälfte des Öls 5 Minuten goldbraun dünsten, Tomatenmark, Kurkuma und Zimt kurz mitrösten.',
    'Gespülte Schälerbsen, Tomaten, angestochene Limette und reichlich Wasser zugeben und zugedeckt 45 Minuten köcheln, bis die Erbsen weich sind, aber noch Form haben.',
    'Ofen auf 220 °C vorheizen. Kartoffeln in dünne Stifte schneiden, mit dem restlichen Öl mischen und 20 bis 25 Minuten knusprig backen. Reis 12 Minuten garen.',
    'Kinderportion ohne Salz abnehmen und die Limette entfernen. Erwachsene mit Salz und Pfeffer abschmecken und mit Reis und den Kartoffelstiften obenauf servieren.'
  ],
  kidName:'Erbsen-Tomaten-Topf',
  kid:'Schälerbsen weich kochen und zerdrücken, Limette sicher entfernen und die Kartoffelstifte in kleine, weiche Stücke brechen. Ohne Salz servieren.',
  leftover:'Gheimeh-Reis-Topf · 10 Min. – Eintopf und Reis zusammen mit etwas Wasser vollständig erhitzen.',
  tipp:'Traditionell kocht man Gheimeh mit Lamm, die vegetarische Version wird durch die getrocknete Limette genauso aromatisch.'
},
{
  id:'ir-baghali-polo', name:'Baghali Polo · Dillreis mit dicken Bohnen und Safran-Joghurt', cuisine:'Iran', flag:'🇮🇷',
  protein:'huelsen', base:'reis', time:{a:10,c:20}, devices:[['topf']], method:'Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kräuter','Gurke','Tomaten','Zitrone'], season:[],
  ing:[
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Dicke Bohnen, TK',q:130,u:'g',c:'tk'},
    {n:'Dill, frisch oder TK',q:3,u:'EL',c:'gemuese'},
    {n:'Griechischer Joghurt',q:100,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Safran (Döschen 0,1 g)',q:0.25,u:'Stk.',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Dicke Bohnen 5 Minuten in Wasser garen, abschrecken und die Kerne aus der Haut drücken.',
    'Reis waschen und im selben Topf mit Öl, Kurkuma und der 1,5-fachen Menge Wasser aufkochen, Bohnen und Dill zugeben und zugedeckt bei kleinster Hitze 12 bis 14 Minuten garen.',
    'Safran in 1 EL heißem Wasser auflösen und unter den Joghurt rühren. Gurke und Tomaten würfeln und mit Zitronensaft mischen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene Reis und Salat mit Salz und Pfeffer würzen und mit dem Safran-Joghurt servieren.'
  ],
  kidName:'Grüner Bohnenreis',
  kid:'Bohnen aus der Haut drücken und zerquetschen, unter den weichen Dillreis mischen und mit ungewürztem Joghurt servieren. Tomate und Gurke klein würfeln.',
  leftover:'Dillreis-Bratlinge · 15 Min. – Reste mit einem Ei verkneten, flache Bratlinge formen und in wenig Öl vollständig durchbraten.',
  tipp:'Klassisch gibt es Baghali Polo mit geschmorter Lammhaxe, mit Bohnen und Joghurt ist der Reis aber schon eine vollständige Mahlzeit.'
}
);
