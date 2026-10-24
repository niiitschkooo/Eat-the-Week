/* Grün geplant · Usbekistan · Top 15 */
RECIPES.push(
{
  id:'uz-osh', name:'Osh · usbekischer Plov mit Rind, Karotten und Kichererbsen', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'fleisch', base:'reis', time:{a:20,c:55}, devices:[['topf']], method:'Schwerer Schmortopf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Karotten','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Rindergulasch, mager',q:100,u:'g',c:'fisch'},
    {n:'Karotten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kichererbsen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in 2-cm-Würfel schneiden und im schweren Topf in Öl rundum anbraten. Drei Viertel der Zwiebel in Halbringen zugeben und 5 Minuten mitbraten.',
    'Karotten in lange, dünne Stifte schneiden, mit Kreuzkümmel zugeben, knapp mit Wasser bedecken und zugedeckt 20 Minuten schmoren.',
    'Gewaschenen Reis und abgespülte Kichererbsen gleichmäßig darauf verteilen, ganze Knoblauchzehen hineindrücken, Wasser 1,5 cm über den Reis gießen und zugedeckt bei kleinster Hitze 30 bis 35 Minuten garen.',
    'Tomaten in dünne Spalten und die restliche Zwiebel in feine Ringe schneiden und als Achichuk-Salat anrichten.',
    'Kinderportion ohne Salz abnehmen und das Fleisch klein schneiden. Plov für die Erwachsenen mit Salz abschmecken, vermengen und mit dem Salat servieren.'
  ],
  kidName:'Mini-Plov',
  kid:'Fleisch sehr klein schneiden, Kichererbsen zerdrücken und Karotten weich garen. Knoblauchzehen herausnehmen, Tomaten ohne Zwiebel und Salz klein würfeln.',
  leftover:'Plov-Pfanne · 10 Min. – Reste mit einem Schuss Wasser zugedeckt in der Pfanne vollständig erhitzen.',
  tipp:'Gelbe Karotten aus dem Bioladen schmecken besonders authentisch, orange Karotten funktionieren genauso.'
},
{
  id:'uz-lagman', name:'Lagman · Nudeln mit Rindfleisch, Paprika und Tomaten-Gemüse-Sauce', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'fleisch', base:'nudeln', time:{a:12,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Tomaten','Karotten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Rindfleisch, dünne Streifen',q:100,u:'g',c:'fisch'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln in ungesalzenem Wasser nach Packungsangabe garen.',
    'Fleisch in heißem Öl 2 Minuten scharf anbraten. Zwiebel, Karotte und Paprika in feine Streifen schneiden, zugeben und 4 Minuten braten.',
    'Tomaten würfeln und mit Tomatenmark, Knoblauch, Kreuzkümmel und 100 ml Wasser zugeben, dann 5 Minuten zu einer sämigen Sauce köcheln.',
    'Kinderportion ohne Salz abnehmen und die Nudeln klein schneiden. Erwachsene mit Salz und nach Wunsch Chili würzen und die Sauce über die Nudeln geben.'
  ],
  kidName:'Mini-Lagman',
  kid:'Nudeln kurz schneiden, Fleisch sehr fein schneiden und das Gemüse weich schmoren. Ohne Chili und Salz servieren.',
  leftover:'Qovurma Lagman · 8 Min. – Nudeln und Sauce zusammen in der Pfanne anbraten, bis alles vollständig heiß ist.',
  tipp:'Dicke Vollkorn-Spaghetti kommen den handgezogenen Lagman-Nudeln am nächsten.'
},
{
  id:'uz-dimlama', name:'Dimlama · geschichteter Schmortopf mit Lamm, Kohl und Kartoffeln', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:60}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slowcooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:5,
  veg:['Weißkohl','Kartoffeln','Karotten','Rote Paprika','Tomaten','Zwiebel'], season:[8,9,10],
  ing:[
    {n:'Lammfleisch, mager, gewürfelt',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lamm in kleine Würfel schneiden und im schweren Topf in Öl 5 Minuten anbraten, dann Zwiebelringe darauf verteilen.',
    'Karotten in Scheiben, Kartoffeln in grobe Würfel, Paprika und Tomaten in Stücke schneiden und in Schichten auf das Fleisch legen, mit Kreuzkümmel bestreuen.',
    'Mit großen Kohlblättern oder Kohlstreifen abdecken, 100 ml Wasser angießen, den Deckel fest schließen und bei kleiner Hitze 50 bis 60 Minuten im eigenen Saft schmoren.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Dill bestreuen.'
  ],
  kidName:'Mini-Dimlama',
  kid:'Lamm sehr fein zerzupfen, Gemüse und Kartoffeln mit dem Schmorsaft zerdrücken und die Paprikahaut entfernen. Ohne Salz servieren.',
  leftover:'Dimlama-Suppe · 10 Min. – Reste mit Brühe aufgießen, vollständig erhitzen und grob pürieren.',
  tipp:'Im Slowcooker alle Schichten einfüllen und 6 Stunden auf niedriger Stufe garen, das Gemüse bleibt dann in Form.'
},
{
  id:'uz-shurpa', name:'Shurpa · kräftige Lammsuppe mit Kartoffeln, Kichererbsen und Gemüse', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:60}, devices:[['topf','slowcooker']], method:'Topf oder Slowcooker',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Rote Paprika','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Lammfleisch, mager, gewürfelt',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Kichererbsen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lamm mit reichlich Wasser aufkochen, den Schaum abschöpfen und zugedeckt 35 Minuten leise köcheln.',
    'Karotten und Kartoffeln in große Stücke, Paprika und Tomaten in Viertel und die Zwiebel in Ringe schneiden.',
    'Gemüse, abgespülte Kichererbsen und Kreuzkümmel zugeben und weitere 25 Minuten köcheln, bis alles weich ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Dill würzen und mit Fladenbrot servieren.'
  ],
  kidName:'Mini-Shurpa',
  kid:'Fleisch fein zerzupfen, Kichererbsen und Kartoffeln zerdrücken und die Tomatenhaut entfernen. Lauwarm und ohne Salz servieren.',
  leftover:'Shurpa mit Nudeln · 12 Min. – übrige Suppe vollständig erhitzen und eine Handvoll Vollkornnudeln darin garen.',
  tipp:'Fleisch mit Knochen ergibt eine kräftigere Brühe, das Fleisch vor dem Servieren einfach vom Knochen lösen.'
},
{
  id:'uz-samsa', name:'Samsa · Ofen-Teigtaschen mit Hähnchen und Zwiebeln, dazu Achichuk', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'gefluegel', base:null, time:{a:35,c:25}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['gluten','milch','sesam'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Tomaten','Gurke'], season:[],
  ing:[
    {n:'Weizenvollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Weizenmehl',q:30,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Hähnchenbrust',q:120,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Beide Mehle mit Joghurt und Öl zu einem weichen Teig kneten und 15 Minuten ruhen lassen. Ofen auf 200 °C vorheizen.',
    'Hähnchen und Zwiebel sehr fein würfeln und mit Kreuzkümmel mischen.',
    'Teig in Portionen teilen, dünn zu Kreisen ausrollen, Füllung daraufgeben und zu Dreiecken falten. Mit Wasser bepinseln und mit Sesam bestreuen.',
    'Samsa auf Backpapier 22 bis 25 Minuten goldbraun backen, bis die Füllung vollständig durchgegart ist.',
    'Kinderportion abnehmen und etwas abkühlen lassen. Tomaten und Gurke in Scheiben schneiden, für die Erwachsenen mit Salz und Pfeffer würzen und dazu reichen.'
  ],
  kidName:'Mini-Samsa',
  kid:'Samsa aufbrechen, prüfen, dass das Hähnchen durchgegart ist, und in kleine Stücke teilen. Gurke und Tomate ohne Salz in Stiften dazu, Sesam nur, wenn er bereits vertragen wird.',
  leftover:'Samsa aufgebacken · 8 Min. – übrige Samsa im Ofen oder Airfryer bei 180 °C vollständig erwärmen.',
  tipp:'In Usbekistan wird Samsa im Lehmofen gebacken, ein vorgeheiztes Blech auf der untersten Schiene macht den Boden ähnlich knusprig.'
},
{
  id:'uz-tovuq-kabob', name:'Tovuq Kabob · Hähnchen-Schaschlik mit Achichuk und Fladenbrot', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'gefluegel', base:null, time:{a:12,c:12}, devices:[['ofen','airfryer']], method:'Backofen (Grill) oder Airfryer',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Gurke','Rote Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen mit Grillfunktion auf 230 °C vorheizen. Hähnchen in 3-cm-Würfel schneiden und mit Joghurt, Öl, Kreuzkümmel und Koriander mischen.',
    'Fleisch abwechselnd mit Paprikastücken auf Spieße stecken und auf dem Blech 10 bis 12 Minuten grillen, einmal wenden, bis es innen nicht mehr rosa ist.',
    'Für den Achichuk Tomaten in dünne Halbmonde, Gurke in Scheiben und Zwiebel in feine Ringe schneiden.',
    'Kinderportion ohne Salz abnehmen. Erwachsene den Salat mit Salz und Pfeffer würzen und die Spieße mit Fladenbrot servieren.'
  ],
  kidName:'Hähnchen-Happen',
  kid:'Hähnchen vom Spieß nehmen, auf Durchgaren prüfen und klein schneiden. Tomate und Gurke ohne Salz in Stiften anbieten, rohe Zwiebel weglassen.',
  leftover:'Kabob-Wrap · 5 Min. – übriges Hähnchen vollständig erhitzen und mit Salat in Fladenbrot rollen.',
  tipp:'Die Marinade am Vorabend ansetzen, über Nacht wird das Hähnchen besonders zart.'
},
{
  id:'uz-qovurilgan-baliq', name:'Qovurilgan Baliq · Fisch aus der Pfanne mit Karotten-Radieschen-Salat', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'fisch', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Radieschen','Rote Zwiebel','Zitrone'], season:[4,5,6,7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Weizenvollkornmehl',q:10,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Radieschen',q:80,u:'g',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Karotten und Radieschen grob raspeln, Zwiebel in feine Ringe schneiden und mit Dill mischen.',
    'Fisch trocken tupfen, in Stücke schneiden, mit Koriander bestreuen und dünn in Mehl wenden.',
    'Fisch in Öl bei mittlerer Hitze je Seite 3 bis 4 Minuten goldbraun braten, bis er innen weiß ist und sich leicht teilen lässt.',
    'Kinderportion ohne Salz abnehmen. Erwachsene Fisch und Salat mit Salz, Pfeffer und Zitronensaft würzen und mit Fladenbrot servieren.'
  ],
  kidName:'Fischstücke mit Möhren',
  kid:'Fisch vollständig garen, sorgfältig entgräten und zerpflücken. Karotte und Radieschen für Kleinkinder sehr fein raspeln oder kurz weich dünsten, ohne Salz und Zwiebel.',
  leftover:'Fisch-Fladen · 5 Min. – übrigen Fisch vollständig erhitzen und mit Salat in Fladenbrot füllen.',
  tipp:'In Usbekistan nimmt man gern Zander aus dem Fluss, er ist auch hier eine gute Wahl.'
},
{
  id:'uz-baliq-kabob', name:'Baliq Kabob · Fischspieße mit Paprika, Zucchini und Dillreis', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'fisch', base:'reis', time:{a:15,c:15}, devices:[['topf'],['ofen','airfryer']], method:'Topf + Backofen oder Airfryer',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Zucchini','Rote Zwiebel','Zitrone'], season:[6,7,8,9],
  ing:[
    {n:'Lachsfilet',q:130,u:'g',c:'fisch'},
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:2,u:'EL',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen und in der 1,5-fachen Menge Wasser zugedeckt 12 Minuten garen, dann 5 Minuten ruhen lassen.',
    'Ofen mit Grillfunktion auf 220 °C vorheizen. Lachs in 3-cm-Würfel, Paprika, Zucchini und Zwiebel in Stücke schneiden.',
    'Alles mit Öl und Kreuzkümmel mischen, abwechselnd auf Spieße stecken und 10 bis 12 Minuten grillen, bis der Fisch innen nicht mehr glasig ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Zitronensaft würzen und den Reis mit Dill mischen.'
  ],
  kidName:'Fisch-Gemüse-Spießchen',
  kid:'Fisch und Gemüse vom Spieß nehmen, den Fisch auf Gräten prüfen und zerpflücken, Paprika ohne Haut weich anbieten. Ohne Salz servieren.',
  leftover:'Fisch-Reis-Pfanne · 8 Min. – Reis und Gemüse in der Pfanne erhitzen, den Fisch zum Schluss zugeben und vollständig durchwärmen.',
  tipp:'Ohne Spieße einfach alles nebeneinander auf ein Blech legen, die Garzeit bleibt gleich.'
},
{
  id:'uz-mosh-kichiri', name:'Mosh Kichiri · Mungbohnen-Reis mit Röstzwiebeln und Joghurt', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'huelsen', base:'reis', time:{a:10,c:40}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Karotten','Tomaten','Gurke'], season:[],
  ing:[
    {n:'Mungbohnen, trocken',q:50,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mungbohnen und Reis waschen, mit der dreifachen Menge Wasser aufkochen und zugedeckt 35 bis 40 Minuten zu einem weichen, leicht sämigen Brei garen.',
    'Zwiebel in Halbringe und Karotte in feine Stifte schneiden und in Öl 10 Minuten langsam goldbraun braten, Kreuzkümmel zum Schluss kurz mitrösten.',
    'Tomaten und Gurke würfeln.',
    'Kinderportion ohne Salz abnehmen. Erwachsene Kichiri salzen, Zwiebel-Karotten darauf verteilen und mit Joghurt und Salat servieren.'
  ],
  kidName:'Mungbohnen-Brei',
  kid:'Kichiri weich und breiig garen, Röstzwiebeln fein hacken und mit Joghurt ohne Salz unterrühren. Tomaten und Gurke in kleinen Würfeln dazu.',
  leftover:'Kichiri-Bratlinge · 15 Min. – den fest gewordenen Rest zu flachen Bratlingen formen und in wenig Öl von beiden Seiten durchbraten.',
  tipp:'Mungbohnen 2 Stunden einweichen verkürzt die Garzeit um etwa 10 Minuten.'
},
{
  id:'uz-mashxurda', name:'Mashxurda · Mungbohnen-Eintopf mit Reis, Kartoffeln und Kräuter-Joghurt', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'huelsen', base:null, time:{a:15,c:40}, devices:[['topf']], method:'Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Rote Paprika','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Mungbohnen, trocken',q:50,u:'g',c:'vorrat'},
    {n:'Basmatireis',q:30,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mungbohnen waschen und in reichlich Wasser 20 Minuten vorkochen.',
    'Zwiebel, Karotte und Paprika würfeln und in Öl 5 Minuten andünsten, Tomaten würfeln und kurz mitgaren.',
    'Gemüse, gewürfelte Kartoffeln und gewaschenen Reis zu den Bohnen geben, bei Bedarf Wasser nachgießen und weitere 20 Minuten köcheln, bis alles weich ist.',
    'Kinderportion ohne Salz abnehmen. Joghurt mit Dill verrühren, Erwachsene mit Salz und Pfeffer würzen und mit dem Kräuter-Joghurt servieren.'
  ],
  kidName:'Mungbohnen-Eintopf mild',
  kid:'Bohnen und Gemüse sehr weich kochen und grob zerdrücken, Tomatenhaut entfernen. Ohne Salz und mit einem Löffel Joghurt servieren.',
  leftover:'Dicker Mash-Topf · 8 Min. – Reste etwas einkochen lassen und vollständig erhitzt mit Fladenbrot essen.',
  tipp:'Mashxurda wird über Nacht dicker, beim Aufwärmen einfach etwas Wasser zugeben.'
},
{
  id:'uz-kovoq-manti', name:'Kovoq Manti · gedämpfte Teigtaschen mit Kürbis, dazu Knoblauch-Joghurt', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'milch', base:null, time:{a:45,c:30}, devices:[['topf']], method:'Topf mit Dämpfeinsatz',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kürbis','Zwiebel','Kräuter'], season:[9,10,11],
  ing:[
    {n:'Weizenvollkornmehl',q:45,u:'g',c:'vorrat'},
    {n:'Weizenmehl',q:35,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:200,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Griechischer Joghurt',q:120,u:'g',c:'kuehl'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Beide Mehle mit lauwarmem Wasser und 1 TL Öl zu einem glatten, festen Teig kneten und 20 Minuten abgedeckt ruhen lassen.',
    'Kürbis und Zwiebel in sehr kleine Würfel schneiden und mit dem restlichen Öl und Kreuzkümmel mischen.',
    'Teig dünn ausrollen und in Quadrate von 10 cm schneiden. Je einen Esslöffel Füllung daraufgeben, die Ecken über der Mitte zusammendrücken und die Manti auf den geölten Dämpfeinsatz setzen.',
    'Über kochendem Wasser zugedeckt 30 Minuten dämpfen, bis der Kürbis ganz weich ist.',
    'Kinderportion abnehmen und mit Joghurt ohne Knoblauch servieren. Für die Erwachsenen Joghurt mit Knoblauch, Dill und Salz verrühren.'
  ],
  kidName:'Mini-Kürbis-Manti',
  kid:'Manti halbieren, damit sie abkühlen, und den weichen Kürbis mit der Gabel zerdrücken. Mit ungewürztem Joghurt und ohne Salz anbieten.',
  leftover:'Gebratene Manti · 10 Min. – übrige Manti in wenig Öl von beiden Seiten anbraten, bis sie vollständig heiß sind.',
  tipp:'Ohne Manti-Dampftopf klappt es mit einem Bambuskorb oder Metall-Dämpfeinsatz, die Lagen dünn mit Öl einpinseln.'
},
{
  id:'uz-kuk-somsa', name:'Kuk Somsa · grüne Ofen-Teigtaschen mit Spinat, Kräutern und Ei', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'ei', base:null, time:{a:30,c:25}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Babyspinat','Frühlingszwiebel','Kräuter','Tomaten'], season:[3,4,5,9,10],
  ing:[
    {n:'Weizenvollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Weizenmehl',q:30,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Babyspinat',q:120,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Beide Mehle mit Joghurt und Öl zu einem weichen Teig kneten und 15 Minuten ruhen lassen. Ofen auf 200 °C vorheizen.',
    'Spinat, Frühlingszwiebel und Dill fein hacken und mit den verquirlten Eiern mischen, dabei 1 EL Ei zum Bestreichen zurückbehalten.',
    'Teig zu dünnen Kreisen ausrollen, Füllung daraufgeben, zu Halbmonden falten, Ränder fest andrücken und mit Ei bestreichen.',
    'Auf Backpapier 22 bis 25 Minuten goldbraun backen, bis die Füllung vollständig gestockt ist.',
    'Kinderportion abnehmen und abkühlen lassen. Tomaten in Spalten schneiden, für die Erwachsenen mit Salz und Pfeffer würzen und dazu reichen.'
  ],
  kidName:'Grüne Mini-Somsa',
  kid:'Somsa aufschneiden und prüfen, dass das Ei innen ganz fest ist, dann in kleine Stücke teilen. Tomaten ohne Salz in kleinen Würfeln dazu.',
  leftover:'Somsa aufgebacken · 8 Min. – übrige Somsa bei 180 °C im Ofen vollständig erwärmen.',
  tipp:'Im Frühling nimmt man in Usbekistan junges Wildgrün, auch Mangold oder Bärlauch passen in die Füllung.'
},
{
  id:'uz-shivit-oshi', name:'Shivit Oshi · grüne Dill-Nudeln mit Kichererbsen-Gemüse und Joghurt', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'huelsen', base:'nudeln', time:{a:12,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kräuter','Rote Paprika','Tomaten','Karotten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:3,u:'EL',c:'gemuese'},
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln in ungesalzenem Wasser nach Packungsangabe garen. Zwei Drittel des Dills sehr fein hacken und mit 1 TL Öl verreiben.',
    'Zwiebel, Karotte und Paprika würfeln und im restlichen Öl 5 Minuten dünsten. Tomaten, abgespülte Kichererbsen und Kreuzkümmel zugeben und 6 Minuten schmoren.',
    'Nudeln abgießen und sofort mit dem Dill-Öl vermischen, bis sie grün glänzen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene das Gemüse mit Salz und Pfeffer würzen, auf den Nudeln anrichten und mit Joghurt und restlichem Dill servieren.'
  ],
  kidName:'Grüne Nudeln mild',
  kid:'Nudeln kurz schneiden, Kichererbsen zerdrücken und das Gemüse weich schmoren. Mit ungesalzenem Joghurt servieren.',
  leftover:'Grüne Nudelpfanne · 8 Min. – Nudeln und Gemüse zusammen in der Pfanne vollständig erhitzen.',
  tipp:'In Choresm wird der Dill direkt in den Nudelteig geknetet, das Dill-Öl über fertigen Nudeln ist die schnelle Variante.'
},
{
  id:'uz-tuxum-barak', name:'Tuxum Barak · Teigtaschen mit Ei-Füllung, dazu Gurken-Tomaten-Salat', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'ei', base:null, time:{a:35,c:12}, devices:[['topf']], method:'Topf',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Frühlingszwiebel','Tomaten','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Weizenvollkornmehl',q:40,u:'g',c:'vorrat'},
    {n:'Weizenmehl',q:40,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'}
  ],
  steps:[
    'Beide Mehle mit kaltem Wasser zu einem festen Teig kneten und 20 Minuten ruhen lassen.',
    'Eier mit Milch und fein geschnittener Frühlingszwiebel verquirlen.',
    'Teig dünn ausrollen und in Rechtecke von 8 x 12 cm schneiden. Zu Taschen falten, zwei Seiten fest verschließen, die Eiermilch mit einem Löffel einfüllen und die Öffnung sorgfältig zudrücken.',
    'Taschen in siedendes Wasser gleiten lassen und 10 bis 12 Minuten garen, bis die Füllung vollständig gestockt ist.',
    'Kinderportion abnehmen und mit Joghurt ohne Salz servieren. Tomaten und Gurke würfeln und für die Erwachsenen mit Salz, Pfeffer und Dill als Salat dazu reichen.'
  ],
  kidName:'Ei-Täschchen',
  kid:'Teigtaschen aufschneiden und prüfen, dass das Ei innen ganz fest ist, dann in Streifen schneiden. Mit ungesalzenem Joghurt und Gurkenstiften anbieten.',
  leftover:'Gebratene Barak · 8 Min. – übrige Teigtaschen in wenig Öl von beiden Seiten anbraten, bis sie vollständig heiß sind.',
  tipp:'Die Taschen nur zu zwei Dritteln füllen, dann platzen sie beim Kochen nicht.'
},
{
  id:'uz-noxat-shurak', name:'Noxat Shurak · warme Kichererbsen mit Zwiebeln, Tomaten und Dill', cuisine:'Usbekistan', flag:'🇺🇿',
  protein:'huelsen', base:null, time:{a:10,c:10}, devices:[['topf']], method:'Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Zwiebel','Gurke','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kichererbsen abspülen und mit 100 ml Wasser und Kreuzkümmel 8 bis 10 Minuten leise köcheln, bis sie sehr weich und heiß sind.',
    'Tomaten und Gurke würfeln und mit Dill und Öl mischen. Zwiebel in sehr feine Ringe schneiden.',
    'Kichererbsen abtropfen lassen und in Schalen füllen.',
    'Kinderportion ohne Zwiebel, Essig und Salz abnehmen. Für die Erwachsenen die Zwiebelringe mit Essig und Salz mischen und mit dem Salat über die Kichererbsen geben, dazu Fladenbrot.'
  ],
  kidName:'Kichererbsen-Teller',
  kid:'Kichererbsen weich kochen und gründlich zerdrücken, Tomaten und Gurke klein würfeln. Ohne rohe Zwiebel, Essig und Salz.',
  leftover:'Kichererbsen-Fladen · 5 Min. – Reste vollständig erhitzen, grob zerdrücken und mit Salat in Fladenbrot füllen.',
  tipp:'Getrocknete Kichererbsen über Nacht einweichen und 60 Minuten kochen, dann werden sie so cremig wie auf dem Basar in Taschkent.'
}
);
