/* Grün geplant · Ungarn · Top 15 */
RECIPES.push(
{
  id:'hu-gulyasleves', name:'Gulyásleves · Gulaschsuppe mit Rind, Kartoffeln und Paprika', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:75}, devices:[['topf','slowcooker']], method:'Topf oder Slowcooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Pastinake','Rote Paprika','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilienwurzel oder Pastinake',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und in Öl 5 Minuten glasig dünsten. Fleisch in 1,5 cm große Würfel schneiden, zugeben und 5 Minuten anbraten.',
    'Topf kurz vom Herd ziehen, Paprikapulver und Kümmel einrühren, damit das Paprikapulver nicht bitter wird, und 600 ml Wasser angießen. Zugedeckt 45 Minuten leise köcheln.',
    'Karotte, Wurzel und Kartoffeln würfeln, zugeben und 20 Minuten weiterköcheln. Paprika und Tomate würfeln und in den letzten 10 Minuten mitgaren.',
    'Kinderportion abnehmen, bevor gewürzt wird. Erwachsene mit Salz, Pfeffer und nach Wunsch scharfer Paprikapaste würzen.'
  ],
  kidName:'Milde Gulaschsuppe',
  kid:'Fleisch und Gemüse aus der Suppe nehmen, sehr klein schneiden und mit wenig Brühe leicht zerdrücken. Ohne Salz und Schärfe.',
  leftover:'Gulaschsuppe mit Nudeln · 12 Min. – Reste aufkochen und kleine Vollkornnudeln darin garen.',
  tipp:'In Ungarn ist Gulyás eine Suppe, das dicke Schmorgericht heißt dort Pörkölt.'
},
{
  id:'hu-paprikas-csirke', name:'Paprikás csirke · Paprikahähnchen mit Sahnesoße und Vollkorn-Nockerln', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'gefluegel', base:null, time:{a:20,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zwiebel','Rote Paprika','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Dinkel-Vollkornmehl',q:80,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und in Öl 5 Minuten glasig dünsten. Hähnchen in mundgerechte Stücke schneiden, zugeben und rundum hell anbraten.',
    'Topf vom Herd ziehen, Paprikapulver einrühren, gewürfelte Paprika und Tomate sowie 150 ml Wasser zugeben und zugedeckt 25 Minuten leise schmoren, bis das Fleisch durchgegart und zart ist.',
    'Für die Nockerl 70 g Mehl mit Ei und etwa 50 ml Wasser zu einem zähen Teig rühren und durch einen Spätzlehobel in kochendes Wasser drücken. Sobald sie oben schwimmen, abgießen.',
    'Saure Sahne, Joghurt und restliches Mehl glatt rühren, unter die Soße ziehen und nur noch kurz erhitzen, nicht kochen.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch scharfem Rosenpaprika würzen.'
  ],
  kidName:'Mildes Paprikahähnchen mit Nockerln',
  kid:'Hähnchen klein zerzupfen und mit Nockerln und reichlich Soße mischen, Paprikahaut nach Möglichkeit entfernen. Ohne Salz und Schärfe.',
  leftover:'Nockerl-Pfanne · 8 Min. – Übrige Nockerl mit einem Ei und etwas Soße in der Pfanne vollständig durchbraten.',
  tipp:'Ohne Spätzlehobel lassen sich die Nockerl mit einem Teelöffel vom Brett ins Wasser schaben.'
},
{
  id:'hu-toltott-paprika', name:'Töltött paprika · gefüllte Paprika mit Hack und Vollkornreis in Tomatensoße', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'fleisch', base:'reis', time:{a:20,c:50}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Gelbe Paprika','Tomaten','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Gelbe Paprika',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, passiert',q:200,u:'ml',c:'vorrat'},
    {n:'Petersilie',q:1,u:'EL',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in Wasser 10 Minuten vorkochen und abgießen. Paprika oben aufschneiden, Deckel abheben und die Kerne entfernen.',
    'Zwiebel und Knoblauch fein hacken, in Öl 2 Minuten dünsten und mit Hack, Reis, Petersilie und der Hälfte des Paprikapulvers mischen.',
    'Paprika locker füllen, damit der Reis Platz zum Quellen hat, und die Deckel aufsetzen. Passierte Tomaten mit 100 ml Wasser und dem restlichen Paprikapulver im Topf aufkochen.',
    'Paprika aufrecht in die Soße setzen und zugedeckt 35 bis 40 Minuten leise köcheln, bis die Füllung vollständig durchgegart und der Reis weich ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene Soße mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Paprika-Hack-Reis mit Tomatensoße',
  kid:'Füllung aus der Paprika lösen und mit Soße mischen, die weiche Paprika ohne Haut klein schneiden. Ohne Salz servieren.',
  leftover:'Paprika-Reispfanne · 10 Min. – Reste klein schneiden und mit Soße in der Pfanne vollständig erhitzen.',
  tipp:'Helle ungarische Paprika oder Spitzpaprika sind dünnwandig und werden schneller weich.'
},
{
  id:'hu-hortobagyi-palacsinta', name:'Hortobágyi palacsinta · Vollkorn-Pfannkuchen mit Hähnchenfüllung in Paprikasoße', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'gefluegel', base:null, time:{a:30,c:25}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zwiebel','Rote Paprika','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:120,u:'g',c:'fisch'},
    {n:'Dinkel-Vollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl, Milch, Ei und 50 ml Wasser glatt verquirlen und 10 Minuten quellen lassen. Pfanne dünn mit Öl auspinseln und nacheinander dünne Pfannkuchen backen.',
    'Zwiebel und Paprika würfeln und im restlichen Öl 5 Minuten dünsten. Hähnchen klein würfeln, zugeben, Paprikapulver und passierte Tomaten einrühren und 10 Minuten köcheln, bis das Fleisch durchgegart ist.',
    'Ofen auf 180 °C vorheizen. Fleisch mit einer Schaumkelle herausheben, fein hacken und mit 2 EL Soße mischen. Pfannkuchen damit füllen, seitlich einschlagen und aufrollen.',
    'Röllchen in eine Form legen, restliche Soße mit saurer Sahne verrühren, darübergießen und 15 Minuten backen.',
    'Kinderportion abnehmen. Erwachsene mit Pfeffer und etwas Salz würzen.'
  ],
  kidName:'Hähnchen-Pfannkuchenröllchen',
  kid:'Ein Röllchen in fingerbreite Stücke schneiden und lauwarm mit etwas Soße servieren. Ohne Salz und Schärfe.',
  leftover:'Palacsinta-Auflauf · 15 Min. – Reste in der Form mit etwas Soße zugedeckt im Ofen vollständig erhitzen.',
  tipp:'Pfannkuchen und Füllung lassen sich am Vortag vorbereiten, dann bleibt am Abend nur das Überbacken.'
},
{
  id:'hu-rakott-kaposzta', name:'Rakott káposzta · Sauerkraut-Auflauf mit Hack, Vollkornreis und saurer Sahne', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'fleisch', base:'reis', time:{a:20,c:45}, devices:[['ofen'],['topf']], method:'Topf + Backofen',
  allergens:['milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Weißkohl','Zwiebel'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Sauerkraut',q:120,u:'g',c:'vorrat'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Saure Sahne',q:50,u:'g',c:'kuehl'},
    {n:'Naturjoghurt',q:30,u:'g',c:'kuehl'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 20 Minuten vorgaren. Ofen auf 180 °C vorheizen.',
    'Sauerkraut abspülen und ausdrücken, Weißkohl in feine Streifen schneiden. Beides mit 100 ml Wasser zugedeckt 10 Minuten dünsten.',
    'Zwiebel würfeln und in Öl glasig dünsten, Hack zugeben und krümelig braten, bis es nicht mehr rosa ist. Paprikapulver einrühren und mit dem Reis mischen.',
    'Hälfte des Krauts in eine Auflaufform geben, Hack-Reis darauf verteilen und mit dem restlichen Kraut abdecken. Saure Sahne mit Joghurt verrühren, darüberstreichen und 25 Minuten backen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene am Tisch mit Pfeffer und etwas Salz würzen.'
  ],
  kidName:'Kraut-Reis-Auflauf',
  kid:'Auflauf in kleine Stücke teilen und gut mischen, damit Kraut, Hack und Reis zusammen auf dem Löffel landen. Ohne Salz servieren.',
  leftover:'Kraut-Auflauf vom Vortag · 15 Min. – Reste zugedeckt im Ofen vollständig erhitzen, aufgewärmt schmeckt er noch besser.',
  tipp:'Der Auflauf lässt sich am Vortag schichten und gekühlt bis zum Backen aufbewahren.'
},
{
  id:'hu-brassoi-apropecsenye', name:'Brassói aprópecsenye · Schweinefleisch-Pfanne mit Knoblauch, Paprika und Ofenkartoffeln', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['ofen','airfryer'],['pfanne']], method:'Pfanne + Backofen',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Rote Paprika','Zwiebel','Gurke'], season:[7,8,9],
  ing:[
    {n:'Schweinefilet',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Gurke',q:0.33,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Majoran, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in 1,5 cm große Würfel schneiden, mit der Hälfte des Öls mischen und 25 Minuten knusprig backen, einmal wenden.',
    'Schweinefilet in schmale Streifen schneiden, Zwiebel und Paprika würfeln.',
    'Fleisch im restlichen Öl 3 Minuten scharf anbraten, Zwiebel und Paprika zugeben und 5 Minuten braten. Paprikapulver, Majoran, gehackten Knoblauch und 80 ml Wasser zugeben und 3 Minuten schmoren, bis das Fleisch durchgegart ist.',
    'Kartoffelwürfel unter das Fleisch heben und die Gurke in Scheiben schneiden.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Gurke servieren.'
  ],
  kidName:'Fleisch-Kartoffel-Würfel',
  kid:'Fleisch in sehr kleine Stücke schneiden und die Kartoffelwürfel leicht zerdrücken, damit sie nicht zu hart sind. Gurke schälen und in Stifte schneiden, ohne Salz.',
  leftover:'Kartoffel-Ei-Pfanne · 8 Min. – Reste in der Pfanne erhitzen und mit einem Ei vollständig stocken lassen.',
  tipp:'Mit Ofenkartoffeln statt frittierten Würfeln wird der Klassiker aus der Gaststube deutlich leichter.'
},
{
  id:'hu-halaszle', name:'Halászlé · Fischsuppe mit Zander, Paprika und Vollkornnudeln', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'fisch', base:'nudeln', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Karpfen- oder Zanderfilet',q:150,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:60,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:0.5,u:'EL',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:1.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln, in der Brühe 15 Minuten weich kochen und mit dem Stabmixer pürieren, so wird die Suppe sämig.',
    'Paprikapulver und Tomatenmark einrühren, gewürfelte Paprika und Tomate zugeben und 10 Minuten köcheln. Nudeln in einem zweiten Topf nach Packung garen.',
    'Fisch in 4 cm große Stücke schneiden, in die Suppe legen und 6 bis 8 Minuten gar ziehen lassen, ohne umzurühren.',
    'Kinderportion abnehmen. Erwachsene mit Salz und nach Wunsch scharfem Paprika würzen und die Suppe über die Nudeln schöpfen.'
  ],
  kidName:'Milde Fisch-Nudel-Suppe',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, dann mit Nudeln und wenig Suppe mischen. Ohne Salz und scharfen Paprika.',
  tipp:'Zander hat kaum Gräten und ist für Familien die einfachere Wahl als der klassische Karpfen.'
},
{
  id:'hu-harcsapaprikas', name:'Harcsapaprikás · Welspaprikasch mit saurer Sahne und Vollkornnudeln', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'fisch', base:'nudeln', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','milch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Wels- oder Zanderfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln nach Packung in Wasser garen.',
    'Zwiebel, Paprika und Tomate würfeln. Zwiebel in Öl 3 Minuten dünsten, Paprika zugeben und 3 Minuten mitbraten.',
    'Pfanne vom Herd ziehen, Paprikapulver einrühren, Tomate und 80 ml Wasser zugeben. Fisch in großen Würfeln einlegen und zugedeckt 6 bis 8 Minuten sanft garen, bis er sich leicht zerteilen lässt.',
    'Saure Sahne vorsichtig unterziehen und nur noch erwärmen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer würzen und mit den Nudeln servieren.'
  ],
  kidName:'Fisch-Paprika-Nudeln',
  kid:'Fisch auf Gräten prüfen, zerpflücken und mit Nudeln und Soße mischen, Paprikahaut nach Möglichkeit entfernen. Ohne Salz.',
  leftover:'Fischnudel-Auflauf · 15 Min. – Reste in eine Form geben, mit etwas Käse bestreuen und im Ofen vollständig erhitzen.',
  tipp:'Wels hat festes, grätenarmes Fleisch und zerfällt beim Schmoren nicht.'
},
{
  id:'hu-roston-fogas', name:'Roston fogas · gebratener Zander mit Petersilienkartoffeln und Paprika-Gurken-Salat', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Gurke','Rote Paprika','Zitrone','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Zanderfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.33,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:1,u:'EL',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in 2 cm große Würfel schneiden und in Wasser 12 bis 15 Minuten weich kochen.',
    'Gurke in dünne Scheiben hobeln, Paprika in feine Streifen schneiden und mit Zitronensaft, 1 TL Öl und etwas Paprikapulver mischen.',
    'Zander trocken tupfen und im restlichen Öl auf der Hautseite 4 Minuten braten, wenden und 2 Minuten fertig garen, bis er innen weiß ist.',
    'Kartoffeln mit Petersilie mischen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz, Pfeffer und Zitrone würzen.'
  ],
  kidName:'Zanderflocken mit Kartoffeln',
  kid:'Haut entfernen, Fisch auf Gräten prüfen und zerpflücken, Kartoffeln zerdrücken. Gurke schälen und in Stifte schneiden, ohne Zitrone und Salz.',
  leftover:'Fisch-Kartoffel-Salat · 8 Min. – Reste kalt mit Joghurt, Gurke und Petersilie zu einem Salat mischen.',
  tipp:'Der Zander aus dem Balaton gilt in Ungarn als feinster Speisefisch, TK-Zanderfilet ist eine gute Alternative.'
},
{
  id:'hu-lecso', name:'Lecsó · Paprika-Tomaten-Gemüse mit Ei und Vollkornbrot', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'ei', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Gelbe Paprika','Rote Paprika','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Gelbe Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in Streifen schneiden und in Öl 3 Minuten glasig dünsten.',
    'Paprika in Streifen und Tomate in Würfel schneiden. Paprika zugeben und 5 Minuten braten, dann Tomate und Paprikapulver zugeben und 5 Minuten weich schmoren.',
    'Eier verquirlen, über das Gemüse gießen und unter Rühren 3 Minuten stocken lassen, bis kein flüssiges Ei mehr zu sehen ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch scharfem Paprika würzen und mit Brot servieren.'
  ],
  kidName:'Paprika-Rührei mit Brot',
  kid:'Paprika möglichst ohne Haut klein schneiden, das Ei vollständig durchgaren und mit dem weichen Gemüse mischen. Brot in Streifen, ohne Salz.',
  leftover:'Lecsó-Reis · 10 Min. – Restliches Gemüse mit gekochtem Reis in der Pfanne vollständig erhitzen.',
  tipp:'Im Spätsommer, wenn Paprika und Tomaten Saison haben, schmeckt Lecsó am besten.'
},
{
  id:'hu-turos-csusza', name:'Túrós csusza · Vollkornnudeln mit Quark, Erbsen und Gurkensalat', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'milch', base:'nudeln', time:{a:8,c:12}, devices:[['topf']], method:'Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Erbsen','Gurke','Frühlingszwiebel','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Magerquark',q:100,u:'g',c:'kuehl'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln nach Packung in Wasser garen, Erbsen in den letzten 3 Minuten mitkochen und alles abgießen.',
    'Gurke in dünne Scheiben hobeln und mit Dill und 1 TL Öl mischen.',
    'Heiße Nudeln im Topf mit Quark und dem restlichen Öl mischen, saure Sahne darübergeben und kurz zugedeckt ziehen lassen, damit der Quark warm wird.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer, Paprikapulver und Frühlingszwiebel bestreuen.'
  ],
  kidName:'Quark-Nudeln mit Erbsen',
  kid:'Nudeln klein schneiden und mit Quark mischen, Erbsen leicht zerdrücken. Gurke schälen und fein raspeln, ohne Salz.',
  leftover:'Quarknudel-Auflauf · 15 Min. – Reste in eine Form geben, mit etwas Käse bestreuen und im Ofen vollständig erhitzen.',
  tipp:'Statt Speck rösten die Erwachsenen ein paar Sonnenblumenkerne in der trockenen Pfanne für den Biss.'
},
{
  id:'hu-borsofozelek', name:'Zöldborsófőzelék · cremiges Erbsengemüse mit Petersilie, Ei und Vollkornbrot', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'huelsen', base:null, time:{a:6,c:12}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Erbsen','Karotten','Kräuter'], season:[],
  ing:[
    {n:'Erbsen, TK',q:250,u:'g',c:'tk'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Dinkel-Vollkornmehl',q:10,u:'g',c:'vorrat'},
    {n:'Petersilie',q:1,u:'EL',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ei in einem kleinen Topf 10 Minuten hart kochen, abschrecken und pellen.',
    'Karotte fein würfeln und in Öl 2 Minuten dünsten. Erbsen und 100 ml Wasser zugeben und zugedeckt 6 Minuten garen.',
    'Mehl mit Milch glatt rühren, einrühren und unter Rühren 3 Minuten zu einem cremigen Gemüse köcheln. Petersilie unterheben.',
    'Kinderportion abnehmen und die Erbsen grob zerdrücken. Erwachsene mit Salz und Pfeffer würzen und mit Ei und Brot servieren.'
  ],
  kidName:'Erbsenmus mit Ei',
  kid:'Erbsen mit der Gabel oder dem Stabmixer grob pürieren, damit keine runden Erbsen im Ganzen verschluckt werden. Das hart gekochte Ei klein schneiden, ohne Salz.',
  leftover:'Erbsensuppe · 6 Min. – Reste mit Brühe verdünnen, pürieren und vollständig erhitzen.',
  tipp:'Főzelék ist in Ungarn ein Alltagsgericht zwischen Eintopf und Gemüsebeilage und wird immer mit Brot gegessen.'
},
{
  id:'hu-bableves', name:'Bableves · sättigende Bohnensuppe mit Wurzelgemüse, Paprika und Kartoffeln', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'huelsen', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Pastinake','Rote Paprika','Zwiebel'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilienwurzel oder Pastinake',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Paprikapulver, geräuchert',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und in Öl 3 Minuten dünsten. Paprikapulver kurz einrühren und sofort mit der Brühe ablöschen.',
    'Karotte, Wurzel und Kartoffeln in kleine Würfel schneiden, zugeben und 15 Minuten köcheln.',
    'Paprika würfeln und mit den abgespülten Bohnen zugeben, 8 Minuten weiterköcheln. Ein Viertel der Suppe pürieren und zurückgeben, damit sie sämig wird.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit einem Klecks saurer Sahne servieren.'
  ],
  kidName:'Sämige Bohnen-Gemüse-Suppe',
  kid:'Bohnen und Gemüse mit der Gabel zerdrücken und mit wenig Suppe mischen, damit es gut löffelbar ist. Mit etwas saurer Sahne, ohne Salz.',
  leftover:'Bohneneintopf · 8 Min. – Reste etwas einkochen lassen und als dicken Eintopf mit Vollkornbrot essen.',
  tipp:'Geräuchertes Paprikapulver ersetzt das Räucherfleisch der klassischen Jókai-Bohnensuppe.'
},
{
  id:'hu-gombapaprikas', name:'Gombapaprikás · Pilz-Paprika-Ragout mit saurer Sahne und Vollkornreis', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'milch', base:'reis', time:{a:10,c:25}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Zwiebel','Rote Paprika','Kräuter'], season:[],
  ing:[
    {n:'Champignons',q:200,u:'g',c:'gemuese'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Petersilie',q:1,u:'EL',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 25 Minuten garen.',
    'Zwiebel fein würfeln, Pilze vierteln und Paprika in Streifen schneiden. Zwiebel in Öl 3 Minuten dünsten, Pilze zugeben und bei starker Hitze 6 Minuten braten.',
    'Pfanne vom Herd ziehen, Paprikapulver einrühren, Paprika und 80 ml Wasser zugeben und 6 Minuten schmoren.',
    'Saure Sahne mit Joghurt glatt rühren, unterziehen und nur noch erwärmen, nicht kochen. Petersilie darüberstreuen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch scharfem Paprika würzen.'
  ],
  kidName:'Pilz-Rahm-Reis',
  kid:'Pilze und Paprika für das Kind klein hacken und mit Reis und Soße mischen. Ohne Salz und Schärfe.',
  leftover:'Pilz-Reis-Pfanne · 8 Min. – Reste mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Mit braunen Champignons oder Kräuterseitlingen wird das Ragout kräftiger.'
},
{
  id:'hu-rakott-krumpli', name:'Rakott krumpli · Kartoffel-Ei-Auflauf mit saurer Sahne und Paprika', cuisine:'Ungarn', flag:'🇭🇺',
  protein:'ei', base:'kartoffeln', time:{a:20,c:45}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['ei','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Zwiebel','Gurke'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Saure Sahne',q:60,u:'g',c:'kuehl'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.33,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, geräuchert',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln mit Schale 20 Minuten kochen, Eier in den letzten 10 Minuten mitkochen. Abschrecken, pellen und beides in Scheiben schneiden.',
    'Ofen auf 180 °C vorheizen. Paprika und Zwiebel fein würfeln und in Öl 3 Minuten dünsten. Saure Sahne mit Joghurt und Paprikapulver verrühren.',
    'In eine geölte Form abwechselnd Kartoffeln, Eier und Gemüse schichten, jede Lage mit etwas Sahnemischung bestreichen und mit Kartoffeln und Sahne abschließen.',
    'Auflauf 25 Minuten backen, bis die Oberfläche leicht gebräunt ist. Gurke in Scheiben dazu reichen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Kartoffel-Ei-Auflauf',
  kid:'Auflauf in kleine Würfel schneiden und etwas abkühlen lassen, das Ei ist hart gekocht und damit sicher. Gurke schälen und in Stifte schneiden, ohne Salz.',
  leftover:'Rakott-Pfanne · 8 Min. – Reste in Stücken in der Pfanne von beiden Seiten anbraten.',
  tipp:'Mit Pellkartoffeln vom Vortag ist der Auflauf in 10 Minuten geschichtet.'
}
);
