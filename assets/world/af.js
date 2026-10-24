/* Grün geplant · Afghanistan · Top 15 */
RECIPES.push(
{
  id:'af-qabili-palaw', name:'Qabili Palaw · Reis mit Lamm, Karotten und Rosinen', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'fleisch', base:'reis', time:{a:20,c:70}, devices:[['topf'],['pfanne']], method:'Schmortopf + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Zwiebel','Gurke','Tomaten'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Lammfleisch, mager, gewürfelt',q:100,u:'g',c:'fisch'},
    {n:'Karotten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rosinen',q:1,u:'EL',c:'vorrat'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kardamom, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und in der Hälfte des Öls goldbraun braten. Lamm zugeben, rundum anbraten, mit Wasser bedecken und zugedeckt 35 Minuten schmoren.',
    'Gewaschenen Reis, Kreuzkümmel und Kardamom zum Fleisch geben, Wasser auffüllen, bis der Reis 1 cm bedeckt ist, und zugedeckt bei kleiner Hitze 30 Minuten garen.',
    'Karotten in feine Stifte schneiden und mit den Rosinen im restlichen Öl in der Pfanne 5 Minuten weich dünsten, dann auf dem Reis verteilen und 5 Minuten ziehen lassen.',
    'Gurke und Tomaten würfeln und als Salat anrichten.',
    'Kinderportion ohne Salz abnehmen. Erwachsene den Palaw mit Salz abschmecken und mit dem Salat servieren.'
  ],
  kidName:'Mini-Palaw',
  kid:'Lamm sehr fein zerzupfen, Rosinen halbieren oder für Kinder unter drei Jahren weglassen. Karotten weich garen und ohne Salz servieren.',
  leftover:'Palaw-Pfanne · 10 Min. – Reste mit etwas Wasser zugedeckt in der Pfanne vollständig erhitzen.',
  tipp:'Traditionell kommen geröstete Mandeln und Pistazien obenauf, bei Nussallergie einfach weglassen.'
},
{
  id:'af-mantu', name:'Mantu · gedämpfte Teigtaschen mit Rinderhack, Joghurt und Linsen-Tomaten-Sauce', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'fleisch', base:null, time:{a:35,c:25}, devices:[['topf']], method:'Zwei Töpfe, einer mit Dämpfeinsatz',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zwiebel','Karotten','Tomaten'], season:[],
  ing:[
    {n:'Wan-Tan-Teigblätter',q:10,u:'Stk.',c:'tk'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Linsen, trocken',q:25,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:120,u:'ml',c:'vorrat'},
    {n:'Griechischer Joghurt',q:80,u:'g',c:'kuehl'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Minze, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hack mit fein geriebener Zwiebel, geraspelter Karotte und Koriander mischen.',
    'Je einen Teelöffel Füllung auf ein Teigblatt setzen, die Ränder mit Wasser befeuchten, zwei gegenüberliegende Ecken zusammendrücken und die beiden anderen darüberlegen.',
    'Mantu auf einem geölten Dämpfeinsatz über kochendem Wasser zugedeckt 20 bis 25 Minuten dämpfen, bis die Füllung vollständig durchgegart ist.',
    'Linsen mit passierten Tomaten und 100 ml Wasser 12 Minuten zu einer dicken Sauce kochen.',
    'Kinderportion ohne Knoblauch und Salz abnehmen. Für die Erwachsenen Joghurt mit Knoblauch und Salz verrühren, die Mantu damit bestreichen, Linsensauce darübergeben und mit Minze bestreuen.'
  ],
  kidName:'Mini-Mantu',
  kid:'Mantu halbieren und prüfen, dass das Hack innen grau und durchgegart ist. Mit ungewürztem Joghurt und etwas Linsensauce, ohne Knoblauch und Salz servieren.',
  leftover:'Mantu aus der Pfanne · 10 Min. – übrige Mantu in wenig Öl anbraten, bis sie vollständig heiß sind, und mit Joghurt servieren.',
  tipp:'Wan-Tan-Blätter aus dem Asiamarkt nutzen auch viele afghanische Familien in Europa, das spart das Teigkneten.'
},
{
  id:'af-chapli-kabab', name:'Chapli Kabab · flache Hack-Patties mit Tomate und Koriander, dazu Fladenbrot', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'fleisch', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Frühlingszwiebel','Gurke','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Koriander, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ein Drittel der Tomaten sehr fein würfeln, Frühlingszwiebel und Koriandergrün hacken.',
    'Hack mit Tomatenwürfeln, Frühlingszwiebel, der Hälfte des Koriandergrüns und den Gewürzen verkneten und zu flachen, handtellergroßen Patties formen.',
    'In wenig Öl bei mittlerer Hitze je Seite 4 bis 5 Minuten braten, bis sie innen nicht mehr rosa sind.',
    'Kinderportion ohne Salz abnehmen. Restliche Tomaten und Gurke in Scheiben schneiden, für die Erwachsenen salzen und mit Joghurt, Koriandergrün, Chili und Fladenbrot servieren.'
  ],
  kidName:'Mini-Chapli',
  kid:'Patties klein und dünn formen, damit sie sicher durchgaren, und in Streifen schneiden. Ohne Chili und Salz, mit Joghurt zum Dippen.',
  leftover:'Kabab-Wrap · 5 Min. – übrige Patties vollständig erhitzen und mit Salat und Joghurt in Fladenbrot rollen.',
  tipp:'Für die Erwachsenen passen Chiliflocken und grob zerstoßene Koriandersamen direkt in den Teig der eigenen Patties.'
},
{
  id:'af-lawang', name:'Lawang · Hähnchen in Joghurt-Kurkuma-Sauce mit Spinat und Reis', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'gefluegel', base:'reis', time:{a:12,c:17}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zwiebel','Tomaten','Babyspinat','Kräuter'], season:[],
  ing:[
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Naturjoghurt',q:100,u:'g',c:'kuehl'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen und in der 1,5-fachen Menge Wasser zugedeckt 12 Minuten garen, dann 5 Minuten ruhen lassen.',
    'Zwiebel fein würfeln und in Öl 4 Minuten glasig dünsten. Hähnchen in kleine Würfel schneiden, mit Knoblauch und Kurkuma zugeben und 5 Minuten anbraten.',
    'Tomaten würfeln, mit 4 EL Wasser zugeben und 6 Minuten köcheln, bis das Hähnchen durchgegart ist, dann den Spinat zusammenfallen lassen.',
    'Pfanne vom Herd nehmen, den Joghurt erst mit etwas Sauce glatt rühren und dann untermischen, damit er nicht ausflockt.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer abschmecken und mit Koriandergrün bestreut zum Reis servieren.'
  ],
  kidName:'Mildes Joghurt-Hähnchen',
  kid:'Hähnchen sehr klein schneiden und mit Reis und Sauce mischen, den Spinat fein hacken. Ohne Salz und Pfeffer servieren.',
  leftover:'Lawang-Wrap · 5 Min. – Reste vollständig erhitzen und in Fladenbrot rollen.',
  tipp:'Lawang gelingt auch mit Fischstücken, die dann nur die letzten 5 Minuten in der Sauce garen.'
},
{
  id:'af-sabzi-challow', name:'Sabzi Challow · Spinat-Lamm-Eintopf mit Lauch und Reis', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'fleisch', base:'reis', time:{a:15,c:50}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Spinat','Lauch','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Lammfleisch, mager, gewürfelt',q:100,u:'g',c:'fisch'},
    {n:'Blattspinat, TK',q:200,u:'g',c:'tk'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und in Öl goldbraun braten. Lamm zugeben, rundum anbraten, knapp mit Wasser bedecken und zugedeckt 30 Minuten schmoren.',
    'Reis in einem zweiten Topf in der doppelten Menge Wasser 30 bis 35 Minuten garen.',
    'Lauch in feine Ringe schneiden und mit Spinat, Knoblauch, Koriander und Dill zum Fleisch geben, dann weitere 15 Minuten schmoren, bis das Fleisch zart ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch Chili abschmecken und mit dem Reis servieren.'
  ],
  kidName:'Spinat-Reis mild',
  kid:'Lamm sehr fein zerzupfen und mit dem weichen Spinat unter den Reis mischen. Ohne Salz und Chili servieren.',
  leftover:'Sabzi-Fladen · 8 Min. – Reste vollständig erhitzen und mit Joghurt in warmes Fladenbrot füllen.',
  tipp:'Frischer Dill und das Grün vom Lauch machen den Spinat besonders aromatisch, beides darf großzügig hinein.'
},
{
  id:'af-karahi-murgh', name:'Karahi Murgh · Hähnchen mit Tomaten, Ingwer und Paprika aus der Pfanne', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'gefluegel', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in kleine Würfel schneiden und in heißem Öl 4 Minuten rundum anbraten.',
    'Zwiebel, Ingwer und Knoblauch fein hacken, Paprika in Streifen schneiden und 3 Minuten mitbraten.',
    'Tomaten würfeln, mit Kreuzkümmel zugeben und offen 6 bis 7 Minuten einkochen, bis eine dicke Sauce entsteht und das Hähnchen durchgegart ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und frischer Chili würzen, mit Koriandergrün bestreuen und mit Fladenbrot servieren.'
  ],
  kidName:'Tomaten-Hähnchen mild',
  kid:'Hähnchen sehr klein schneiden, Paprika und Tomaten weich schmoren und die Haut entfernen. Ohne Chili und Salz, mit weichem Fladenbrot zum Tunken.',
  leftover:'Karahi-Reis · 8 Min. – Reste mit gekochtem Reis in der Pfanne vollständig erhitzen.',
  tipp:'Im Original wird im gusseisernen Karahi gekocht, eine weite Pfanne mit hohem Rand funktioniert genauso.'
},
{
  id:'af-mahi', name:'Mahi · gewürzter Ofenfisch mit grünem Koriander-Chatni und Fladenbrot', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'fisch', base:null, time:{a:10,c:12}, devices:[['ofen','airfryer']], method:'Backofen oder Airfryer',
  allergens:['fisch','gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kräuter','Tomaten','Gurke','Rote Zwiebel'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Koriandergrün',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Fisch trocken tupfen, in breite Stücke schneiden, mit Öl und Kurkuma einreiben und auf Backpapier legen.',
    'Fisch 10 bis 12 Minuten backen, bis er innen weiß ist und sich leicht zerteilen lässt.',
    'Inzwischen Koriandergrün sehr fein hacken und mit Joghurt und einem Spritzer Zitronensaft verrühren. Tomaten, Gurke und Zwiebel in Scheiben schneiden.',
    'Kinderportion ohne Salz abnehmen. Erwachsene den Fisch mit Salz und Chili würzen und mit Chatni, Salat und Fladenbrot servieren.'
  ],
  kidName:'Goldene Fischstücke',
  kid:'Fisch vollständig durchgaren, sorgfältig entgräten und zerpflücken. Chatni ohne Salz als milden Dip, Gurke in Stiften, rohe Zwiebel weglassen.',
  leftover:'Fisch-Fladen · 5 Min. – übrigen Fisch vollständig erhitzen und mit Salat und Chatni in Fladenbrot rollen.',
  tipp:'In Kabul isst man Mahi vor allem im Winter, der Ofen ersetzt hier das Frittieren vom Straßenstand.'
},
{
  id:'af-qorma-mahi', name:'Qorma-e Mahi · Fisch in Tomaten-Zwiebel-Sauce mit Zucchini und Reis', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'fisch', base:'reis', time:{a:12,c:22}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zwiebel','Tomaten','Zucchini','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen und in der 1,5-fachen Menge Wasser zugedeckt 12 Minuten garen, dann ruhen lassen.',
    'Zwiebel fein würfeln und in Öl 6 Minuten goldbraun dünsten, Knoblauch, Kurkuma und gemahlenen Koriander kurz mitrösten.',
    'Zucchini würfeln, mit den Tomaten zugeben und 8 Minuten zu einer dicken Sauce köcheln.',
    'Fisch in große Stücke schneiden, in die Sauce legen und zugedeckt 6 bis 8 Minuten gar ziehen lassen, bis er innen weiß ist.',
    'Kinderportion ohne Salz abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz und Chili abschmecken und mit Koriandergrün bestreut zum Reis servieren.'
  ],
  kidName:'Fisch in Tomatensauce',
  kid:'Fisch vollständig garen, sorgfältig entgräten und in der Sauce zerpflücken, Zucchini weich schmoren. Ohne Chili und Salz mit Reis mischen.',
  leftover:'Fisch-Reis-Topf · 8 Min. – Reis und Sauce zusammen zugedeckt vollständig erhitzen.',
  tipp:'Fester Kabeljau zerfällt in der Sauce weniger als Seelachs, die Stücke nur einmal vorsichtig wenden.'
},
{
  id:'af-borani-banjan', name:'Borani Banjan · Ofen-Auberginen mit Tomatensauce und Knoblauch-Joghurt', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'milch', base:null, time:{a:15,c:30}, devices:[['ofen'],['pfanne']], method:'Backofen + Pfanne',
  allergens:['milch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Aubergine','Tomaten','Rote Paprika','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Aubergine',q:0.75,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Griechischer Joghurt',q:150,u:'g',c:'kuehl'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Minze, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Aubergine in 1 cm dicke Scheiben schneiden, beidseitig dünn mit Öl bepinseln und auf Backpapier 20 bis 25 Minuten weich und goldbraun backen, einmal wenden.',
    'Zwiebel und Paprika fein würfeln und im restlichen Öl 5 Minuten dünsten, Kurkuma und Tomaten zugeben und 10 Minuten einkochen.',
    'Auberginenscheiben in die Sauce legen und 5 Minuten ziehen lassen.',
    'Kinderportion ohne Knoblauch und Salz abnehmen und mit Joghurt servieren. Für die Erwachsenen Joghurt mit Knoblauch und Salz verrühren, auf die Auberginen geben, mit Minze bestreuen und mit Fladenbrot servieren.'
  ],
  kidName:'Mildes Auberginen-Mus',
  kid:'Weiche Auberginen ohne Schale mit der Tomatensauce zerdrücken und mit ungewürztem Joghurt mischen. Fladenbrot in Streifen zum Tunken.',
  leftover:'Borani-Brot · 5 Min. – Reste vollständig erhitzen und als warmen Aufstrich auf Fladenbrot geben.',
  tipp:'Traditionell werden die Auberginen frittiert, im Ofen gebacken brauchen sie nur einen Bruchteil des Öls.'
},
{
  id:'af-kadu-borani', name:'Kadu Borani · geschmorter Kürbis mit Tomaten und Knoblauch-Joghurt', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'milch', base:'reis', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kürbis','Tomaten','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Griechischer Joghurt',q:120,u:'g',c:'kuehl'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Minze, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser zugedeckt 30 Minuten garen.',
    'Kürbis mit Schale in 3 cm große Stücke schneiden. Zwiebel und Ingwer fein würfeln und in Öl 4 Minuten dünsten, Kurkuma kurz mitrösten.',
    'Kürbis und passierte Tomaten zugeben und zugedeckt bei kleiner Hitze 20 Minuten schmoren, bis der Kürbis weich ist, aber nicht zerfällt.',
    'Kinderportion ohne Knoblauch und Salz abnehmen und mit Joghurt servieren. Für die Erwachsenen Joghurt mit Knoblauch und Salz verrühren, über den Kürbis geben und mit Minze bestreuen.'
  ],
  kidName:'Kürbis-Joghurt-Mus',
  kid:'Weichen Kürbis mit der Gabel zerdrücken und mit ungewürztem Joghurt und Reis mischen. Ohne Knoblauch und Salz servieren.',
  leftover:'Kürbis-Reis-Pfanne · 8 Min. – Reste in der Pfanne vollständig erhitzen und mit einem Klecks Joghurt servieren.',
  tipp:'In Afghanistan wird Kadu Borani oft gezuckert, ein reifer Hokkaido bringt genug eigene Süße mit.'
},
{
  id:'af-bolani', name:'Bolani · gefülltes Fladenbrot mit Kartoffeln und Frühlingszwiebeln, dazu Minz-Joghurt', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'milch', base:'kartoffeln', time:{a:30,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Frühlingszwiebel','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Kartoffeln, mehlig',q:200,u:'g',c:'gemuese'},
    {n:'Weizenvollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Weizenmehl',q:30,u:'g',c:'vorrat'},
    {n:'Frühlingszwiebel',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Griechischer Joghurt',q:120,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Minze, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Beide Mehle mit lauwarmem Wasser und 1 TL Öl zu einem weichen Teig kneten und 20 Minuten ruhen lassen.',
    'Kartoffeln schälen, in Stücke schneiden und 15 Minuten weich kochen, abgießen und mit fein geschnittener Frühlingszwiebel und Koriandergrün zerstampfen.',
    'Teig in Portionen teilen und dünn ausrollen, eine Hälfte mit Füllung bestreichen, zuklappen und die Ränder fest andrücken.',
    'Bolani in einer dünn geölten Pfanne bei mittlerer Hitze je Seite 3 bis 4 Minuten goldbraun backen.',
    'Kinderportion ohne Salz abnehmen. Joghurt mit geriebener Gurke und Minze verrühren, für die Erwachsenen salzen und zu den Bolani reichen.'
  ],
  kidName:'Mini-Bolani',
  kid:'Bolani in schmale Streifen schneiden und gut abkühlen lassen, die Füllung ist innen sehr heiß. Mit ungesalzenem Gurken-Joghurt zum Dippen.',
  leftover:'Bolani aufgebacken · 5 Min. – übrige Fladen in der trockenen Pfanne von beiden Seiten vollständig erwärmen.',
  tipp:'Die Füllung lässt sich mit Lauch oder Kürbis abwandeln, beides ist in Afghanistan ebenso beliebt.'
},
{
  id:'af-ashak', name:'Ashak · Lauch-Teigtaschen mit Joghurt und Schälerbsen-Tomaten-Sauce', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'huelsen', base:null, time:{a:35,c:40}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Lauch','Frühlingszwiebel','Tomaten','Kräuter'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Wan-Tan-Teigblätter',q:10,u:'Stk.',c:'tk'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gelbe Schälerbsen, trocken',q:40,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Griechischer Joghurt',q:100,u:'g',c:'kuehl'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Minze, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Schälerbsen spülen und mit passierten Tomaten, Koriander und 250 ml Wasser 35 bis 40 Minuten zu einer dicken Sauce kochen.',
    'Lauch und Frühlingszwiebel sehr fein schneiden und mit dem Öl verkneten, bis sie zusammenfallen.',
    'Je einen Teelöffel Füllung auf ein Teigblatt geben, den Rand befeuchten und zu Halbmonden falten.',
    'Ashak in siedendem Wasser portionsweise 4 bis 5 Minuten garen, bis Teig und Lauch weich sind, und mit einer Schaumkelle herausheben.',
    'Kinderportion ohne Knoblauch und Salz abnehmen. Für die Erwachsenen Joghurt mit Knoblauch und Salz verrühren, auf die Ashak streichen, Sauce darübergeben und mit Minze bestreuen.'
  ],
  kidName:'Mini-Ashak',
  kid:'Ashak halbieren und abkühlen lassen, mit ungewürztem Joghurt und etwas zerdrückter Erbsensauce servieren. Ohne Knoblauch und Salz.',
  leftover:'Ashak-Auflauf · 15 Min. – übrige Ashak mit Sauce und Joghurt in einer Form bei 180 °C im Ofen vollständig erhitzen.',
  tipp:'Die Erbsensauce lässt sich am Vortag kochen, dann ist Ashak am Abend in 25 Minuten fertig.'
},
{
  id:'af-lubia', name:'Lubia · Kidneybohnen-Eintopf mit Tomaten und Koriander, dazu Fladenbrot', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'huelsen', base:null, time:{a:10,c:14}, devices:[['topf']], method:'Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Babyspinat','Kräuter'], season:[],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch fein würfeln und in Öl 4 Minuten dünsten, Kurkuma und gemahlenen Koriander kurz mitrösten.',
    'Tomaten und abgespülte Bohnen zugeben und 8 Minuten sämig köcheln, dabei einige Bohnen mit dem Löffel zerdrücken.',
    'Spinat unterheben und zusammenfallen lassen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Chili abschmecken und mit Koriandergrün und Fladenbrot servieren.'
  ],
  kidName:'Bohnen-Tunke',
  kid:'Bohnen gründlich zerdrücken, Bohnenhäute möglichst entfernen und den Spinat fein hacken. Ohne Chili und Salz mit Fladenbrot zum Tunken.',
  leftover:'Lubia mit Reis · 8 Min. – Reste vollständig erhitzen und über Reis oder in Fladenbrot servieren.',
  tipp:'Klassisch wird Lubia zu Challow, gedämpftem Reis, gegessen, mit Fladenbrot geht es schneller.'
},
{
  id:'af-aush', name:'Aush · Nudel-Eintopf mit Kichererbsen, Spinat, Joghurt und Minze', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'huelsen', base:'nudeln', time:{a:12,c:18}, devices:[['topf']], method:'Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Babyspinat','Tomaten','Karotten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:60,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Minze, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotte fein würfeln und in Öl 4 Minuten andünsten, dann mit passierten Tomaten und der dreifachen Menge Wasser aufkochen.',
    'Nudeln in kurze Stücke brechen, mit den abgespülten Kichererbsen zugeben und 10 bis 12 Minuten weich köcheln.',
    'Spinat und Dill unterrühren und 2 Minuten ziehen lassen.',
    'Kinderportion ohne Salz abnehmen, etwas abkühlen lassen und Joghurt unterrühren. Erwachsene mit Salz, Pfeffer und Minze würzen und mit einem großen Klecks Joghurt servieren.'
  ],
  kidName:'Mini-Aush',
  kid:'Nudeln weich kochen und klein schneiden, Kichererbsen zerdrücken und den Eintopf lauwarm mit Joghurt sämig rühren. Ohne Salz servieren.',
  leftover:'Dicker Aush · 8 Min. – Reste mit etwas Wasser vollständig erhitzen, die Nudeln nehmen über Nacht viel Flüssigkeit auf.',
  tipp:'Aush ist ein typisches Wintergericht, Erwachsene streuen gern getrocknete Minze und Chili obendrauf.'
},
{
  id:'af-tukhm-banjan-rumi', name:'Tukhm-e Banjan-e Rumi · Eier in Tomaten-Zwiebel-Sauce mit Fladenbrot', cuisine:'Afghanistan', flag:'🇦🇫',
  protein:'ei', base:null, time:{a:8,c:12}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Paprika fein würfeln und in Öl 4 Minuten weich dünsten, Kurkuma kurz mitrösten.',
    'Tomaten würfeln, zugeben und 4 Minuten einkochen.',
    'Eier verquirlen, in die Pfanne gießen und unter gelegentlichem Rühren 3 bis 4 Minuten vollständig stocken lassen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Chili würzen, mit Koriandergrün bestreuen und mit Fladenbrot servieren.'
  ],
  kidName:'Tomaten-Rührei',
  kid:'Eier vollständig fest stocken lassen, die Tomatenhaut entfernen und alles klein schneiden. Ohne Salz und Chili mit Fladenbrotstreifen.',
  leftover:'Rührei-Wrap · 5 Min. – Reste vollständig erhitzen und mit Salat in Fladenbrot rollen.',
  tipp:'In Afghanistan ein beliebtes schnelles Abendessen, mit etwas Feta obendrauf wird es noch sättigender.'
}
);
