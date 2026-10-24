/* Grün geplant · Irland · Top 15 */
RECIPES.push(
{
  id:'ie-irish-stew', name:'Irish Stew · Lammeintopf mit Kartoffeln, Karotten und Lauch', cuisine:'Irland', flag:'🇮🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:60}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Zwiebel','Lauch','Kräuter'], season:[],
  ing:[
    {n:'Lammkeule, mager, gewürfelt',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lammfleisch in 2 cm große Würfel schneiden, sichtbares Fett entfernen und in einem schweren Topf in Öl rundum 5 Minuten anbraten.',
    'Zwiebel und Lauch in Ringe, Karotten in dicke Scheiben schneiden und kurz mitbraten. Brühe, Thymian und Lorbeer zugeben und zugedeckt 30 Minuten sanft köcheln.',
    'Kartoffeln schälen, in große Stücke schneiden, zugeben und weitere 25 bis 30 Minuten garen, bis Fleisch und Kartoffeln weich sind. Einige Kartoffelstücke zerdrücken, damit der Eintopf bindet.',
    'Lorbeer entfernen und die Petersilie unterrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Irish-Stew',
  kid:'Lammfleisch fein zerzupfen und mit zerdrückten Kartoffeln und weichen Karotten mischen. Lorbeerblatt sicher entfernen und ohne Salz servieren.',
  leftover:'Stew-Pie · 25 Min. – Reste in eine Form geben, mit Kartoffelstampf bedecken und im Ofen überbacken.',
  tipp:'Im Slow Cooker auf niedriger Stufe 6 Stunden garen, dann wird das Lamm besonders zart.'
},
{
  id:'ie-dublin-coddle', name:'Dublin Coddle · Würstchen-Kartoffel-Schmortopf mit Zwiebeln und Karotten', cuisine:'Irland', flag:'🇮🇪',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:40}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Karotten','Erbsen','Kräuter'], season:[],
  ing:[
    {n:'Geflügelbratwurst',q:90,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Würstchen in einem breiten Topf in Öl 5 Minuten rundum anbraten, herausnehmen und in dicke Stücke schneiden.',
    'Zwiebeln in Streifen, Karotten in Scheiben und Kartoffeln in dicke Scheiben schneiden. Abwechselnd mit den Würstchen in den Topf schichten und mit Thymian bestreuen.',
    'Brühe angießen und zugedeckt bei kleiner Hitze 35 Minuten sanft schmoren, bis die Kartoffeln weich sind. Erbsen in den letzten 5 Minuten zugeben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Petersilie, Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Coddle',
  kid:'Würstchen längs vierteln und klein schneiden, nie als runde Scheiben anbieten. Kartoffeln und Karotten mit etwas Brühe zerdrücken, kein Salz.',
  leftover:'Coddle-Pfanne · 10 Min. – Reste abtropfen lassen und in der Pfanne mit etwas Spinat knusprig braten.',
  tipp:'Klassisch gehören Speckstreifen hinein, etwas magerer Kochschinken ist die leichtere Wahl.'
},
{
  id:'ie-bacon-and-cabbage', name:'Bacon and Cabbage · Schweinefilet mit Wirsing, Kartoffeln und Petersiliensoße', cuisine:'Irland', flag:'🇮🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Wirsing','Kartoffeln','Kräuter'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Schweinefilet',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Wirsing',q:150,u:'g',c:'gemuese'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Petersilie, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen und in 20 Minuten weich kochen. Wirsing in Streifen schneiden und in einem zweiten Topf in wenig Wasser 8 Minuten weich garen.',
    'Schweinefilet in 2 cm dicke Medaillons schneiden und in der Pfanne in Öl je Seite 4 Minuten braten, bis es durchgegart ist. Kurz ruhen lassen.',
    'Milch mit der angerührten Stärke im Wirsingtopf unter Rühren aufkochen und 2 Minuten köcheln. Petersilie fein hacken und einrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Fleisch und Soße mit Salz, Pfeffer, Muskat und Senf würzen.'
  ],
  kidName:'Mini-Filet mit Kohl',
  kid:'Schweinefilet vollständig durchgaren, sehr fein schneiden und mit Petersiliensoße befeuchten. Wirsing und Kartoffeln weich zerdrücken, ohne Senf und Salz.',
  leftover:'Kohl-Kartoffel-Pfanne · 10 Min. – Reste klein schneiden und mit einem Ei in der Pfanne durchbraten.',
  tipp:'Im Original wird gepökelter Schweinerücken gekocht, Filet ist deutlich salzärmer und schneller gar.'
},
{
  id:'ie-chicken-leek-pie', name:'Chicken and Leek Pie · Hähnchen-Lauch-Pie mit Vollkorn-Teigdeckel', cuisine:'Irland', flag:'🇮🇪',
  protein:'gefluegel', base:null, time:{a:25,c:30}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Lauch','Pilze','Erbsen'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Weizenvollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Magerquark',q:30,u:'g',c:'kuehl'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Mehl, Quark, 1 TL Öl und 1 EL Wasser zu einem glatten Teig verkneten und kurz ruhen lassen.',
    'Hähnchen würfeln und im restlichen Öl 4 Minuten anbraten. Lauch in Ringe und Pilze in Scheiben schneiden, zugeben und 5 Minuten dünsten.',
    'Milch mit der Stärke verrühren, mit Erbsen und Thymian in die Pfanne geben und 2 Minuten zu einer cremigen Füllung köcheln. In eine kleine Auflaufform füllen.',
    'Teig dünn ausrollen, auf die Füllung legen, die Ränder andrücken, einstechen und 20 bis 25 Minuten goldbraun backen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer nachwürzen.'
  ],
  kidName:'Mini-Pie',
  kid:'Hähnchen vollständig durchgaren und sehr klein schneiden, Lauch weich. Den Teigdeckel in weiche Stücke brechen und mit der Füllung mischen, ohne Salz.',
  leftover:'Hähnchen-Lauch-Nudeln · 10 Min. – Übrige Füllung erhitzen und mit Vollkornnudeln mischen.',
  tipp:'Die Füllung lässt sich am Vortag kochen, dann nur noch den Teig auflegen und backen.'
},
{
  id:'ie-beef-stew', name:'Irish Beef Stew · Rindfleischeintopf mit Wurzelgemüse und Vollkornbrot', cuisine:'Irland', flag:'🇮🇪',
  protein:'fleisch', base:null, time:{a:20,c:95}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slow Cooker',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Pastinake','Zwiebel','Pilze','Tomaten'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Pastinake',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:60,u:'g',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1.5,u:'Scheiben',c:'brot'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch trocken tupfen und portionsweise im Schmortopf in Öl rundum kräftig anbraten, dann herausnehmen.',
    'Zwiebel würfeln, Karotten und Pastinake in Stücke und Pilze in Viertel schneiden und im Bratfett 5 Minuten anrösten.',
    'Fleisch zurückgeben, passierte Tomaten, Brühe und Thymian zugeben und zugedeckt bei kleiner Hitze 80 bis 90 Minuten schmoren, bis das Fleisch zart ist.',
    'Offen 5 Minuten sämig einkochen und mit Vollkornbrot servieren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Rindereintopf',
  kid:'Rindfleisch fein zerzupfen und mit weichem, zerdrücktem Gemüse und Soße mischen. Brot ohne harte Kruste in Streifen dazu, kein Salz.',
  leftover:'Stew-Ragout · 10 Min. – Reste erhitzen und mit Vollkornnudeln als Ragout servieren.',
  tipp:'Im Slow Cooker auf niedriger Stufe 7 bis 8 Stunden garen, morgens angesetzt ist er abends fertig.'
},
{
  id:'ie-spice-bag', name:'Spice Bag · Ofenhähnchen mit Ofenpommes, Paprika und Zwiebeln', cuisine:'Irland', flag:'🇮🇪',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen','airfryer']], method:'Backofen oder Airfryer',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Zwiebel','Frühlingszwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Fünf-Gewürze-Pulver',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Stifte schneiden, mit der Hälfte des Öls und dem Paprikapulver mischen und 15 Minuten backen.',
    'Hähnchen in Streifen schneiden und mit Stärke und restlichem Öl mischen. Paprika und Zwiebel in Streifen schneiden.',
    'Hähnchen und Gemüse zu den Kartoffeln geben und weitere 15 Minuten backen, bis das Hähnchen durch und goldbraun ist. Im Airfryer bei 200 °C in zwei Durchgängen garen.',
    'Kinderportion ohne Gewürzmischung abnehmen. Erwachsene alles mit Fünf-Gewürze-Pulver, Salz und Chili mischen und Frühlingszwiebel darüberstreuen.'
  ],
  kidName:'Mini-Spice-Bag',
  kid:'Hähnchen in weiche Streifen zerzupfen, Paprika und Zwiebel weich gebacken klein schneiden. Ohne Fünf-Gewürze-Pulver, Salz und Chili servieren.',
  leftover:'Spice-Bag-Wrap · 8 Min. – Reste im Ofen erwärmen und mit Joghurt in eine Vollkorntortilla rollen.',
  tipp:'Der irische Imbiss-Klassiker wird sonst frittiert, im Ofen wird er mit einem Bruchteil des Fetts knusprig.'
},
{
  id:'ie-seafood-chowder', name:'Seafood Chowder · cremiger Fischeintopf mit Kartoffeln und Vollkornbrot', cuisine:'Irland', flag:'🇮🇪',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:22}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch','milch','gluten','sellerie'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Lauch','Sellerie','Karotten','Kräuter'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Staudensellerie',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:1.5,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lauch, Sellerie und Karotte klein würfeln und in Öl 4 Minuten anschwitzen. Kartoffeln schälen, in 1 cm große Würfel schneiden und zugeben.',
    'Brühe angießen und 12 Minuten köcheln, bis die Kartoffeln weich sind. Ein Viertel der Kartoffeln am Topfrand zerdrücken, damit der Eintopf sämig wird.',
    'Milch zugießen, Fisch in mundgerechten Stücken einlegen und bei kleiner Hitze 5 bis 6 Minuten ziehen lassen, bis er gar ist, ohne dass es kocht.',
    'Dill unterrühren und mit Vollkornbrot servieren.',
    'Kinderportion ungesalzen abnehmen und Fisch auf Gräten prüfen. Erwachsene mit Salz, Pfeffer und etwas Zitrone würzen.'
  ],
  kidName:'Mini-Chowder',
  kid:'Dick und löffelbar mit wenig Flüssigkeit anbieten, Fisch auf Gräten prüfen und zerpflücken. Gemüse weich zerdrücken, Brot ohne Kruste zum Eintunken.',
  leftover:'Chowder Tag 2 · 5 Min. – Reste langsam erhitzen, ohne zu kochen, und mit frischem Spinat strecken.',
  tipp:'Klassisch kommt ein Stück geräucherter Fisch hinein, eine kleine Menge reicht für den Geschmack, da er sehr salzig ist.'
},
{
  id:'ie-salmon-champ', name:'Salmon and Champ · Pfannenlachs mit Frühlingszwiebel-Kartoffelstampf und Brokkoli', cuisine:'Irland', flag:'🇮🇪',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Frühlingszwiebel','Brokkoli','Zitrone'], season:[],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:2,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in kleine Würfel schneiden und in 12 bis 15 Minuten weich kochen. Brokkoliröschen in den letzten 5 Minuten mitgaren.',
    'Frühlingszwiebeln in feine Ringe schneiden und in der Milch 2 Minuten erwärmen.',
    'Lachs in Öl auf der Hautseite 4 Minuten braten, wenden und 3 Minuten fertig garen, bis er innen nicht mehr glasig ist.',
    'Brokkoli herausnehmen, Kartoffeln abgießen und mit der Frühlingszwiebel-Milch grob stampfen.',
    'Kinderportion ungesalzen abnehmen, Lachs zerpflücken und auf Gräten prüfen. Erwachsene mit Salz, Pfeffer und Zitrone würzen.'
  ],
  kidName:'Mini-Lachs-Champ',
  kid:'Lachs vollständig durchgaren, zerpflücken und auf Gräten prüfen. Stampf weich und ohne Salz, Brokkoli sehr weich in kleinen Röschen.',
  leftover:'Lachs-Champ-Taler · 10 Min. – Stampf und Lachs vermengen, zu Talern formen und in der Pfanne von beiden Seiten durchbraten.',
  tipp:'Die Frühlingszwiebeln in warmer Milch ziehen zu lassen gibt dem Stampf ein mildes Zwiebelaroma, das Kinder meist mögen.'
},
{
  id:'ie-fish-cakes', name:'Irish Fish Cakes · Fisch-Kartoffel-Küchlein aus dem Ofen mit Erbsen und Joghurt-Dip', cuisine:'Irland', flag:'🇮🇪',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:35}, devices:[['topf'],['ofen','airfryer']], method:'Topf + Backofen oder Airfryer',
  allergens:['fisch','ei','gluten','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Erbsen','Frühlingszwiebel','Zitrone'], season:[],
  ing:[
    {n:'Seelachsfilet',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:200,u:'g',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Haferflocken, zart',q:20,u:'g',c:'vorrat'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Erbsen, TK',q:100,u:'g',c:'tk'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in 15 Minuten weich kochen. Den Fisch für die letzten 6 Minuten zugeben und mitgaren, dann alles gut abtropfen lassen.',
    'Ofen auf 200 °C vorheizen. Kartoffeln zerstampfen, Fisch zerpflücken und auf Gräten prüfen. Mit Ei, Haferflocken, fein geschnittener Frühlingszwiebel und Dill vermengen.',
    'Mit feuchten Händen flache Küchlein formen, auf ein Blech mit Backpapier legen, mit Öl bestreichen und 18 bis 20 Minuten backen, nach der Hälfte wenden. Im Airfryer bei 190 °C etwa 12 Minuten.',
    'Erbsen in wenig Wasser 4 Minuten garen. Joghurt mit etwas Zitronensaft verrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Zitrone würzen.'
  ],
  kidName:'Mini-Fischküchlein',
  kid:'Küchlein vollständig durchbacken und halbieren, damit die weiche Mitte sichtbar ist. Erbsen leicht zerdrücken, Joghurt-Dip ohne Zitrone.',
  leftover:'Fischküchlein-Brot · 5 Min. – Kalte Küchlein mit Gurke und Joghurt auf Vollkornbrot legen.',
  tipp:'Die Küchlein roh einfrieren und direkt aus dem Tiefkühler 8 Minuten länger backen.'
},
{
  id:'ie-colcannon', name:'Colcannon · Grünkohl-Kartoffelstampf mit Spiegelei', cuisine:'Irland', flag:'🇮🇪',
  protein:'ei', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Grünkohl','Frühlingszwiebel'], season:[11,12,1,2],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Grünkohl oder Spinat',q:100,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in kleine Würfel schneiden und in 12 bis 15 Minuten weich kochen. Grünkohl ohne Strünke fein schneiden und in den letzten 5 Minuten mitgaren.',
    'Frühlingszwiebel in Ringe schneiden und in der Milch kurz erwärmen.',
    'Eier in der Pfanne in Öl bei mittlerer Hitze zugedeckt 5 Minuten braten, bis Eiweiß und Eigelb fest sind.',
    'Kartoffeln und Grünkohl abgießen und mit der warmen Milch zu einem groben Stampf verarbeiten.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Muskat würzen.'
  ],
  kidName:'Mini-Colcannon',
  kid:'Ei vollständig fest braten und klein schneiden, Grünkohl sehr fein hacken und weich garen. Stampf ohne Salz und Muskat anbieten.',
  leftover:'Colcannon-Taler · 10 Min. – Kalten Stampf zu Talern formen und in der Pfanne goldbraun braten.',
  tipp:'Mit TK-Grünkohl geht es noch schneller, außerhalb der Saison passt auch Wirsing.'
},
{
  id:'ie-boxty', name:'Boxty · irische Kartoffelpfannkuchen mit Pilzen, Spinat und Hüttenkäse', cuisine:'Irland', flag:'🇮🇪',
  protein:'milch', base:'kartoffeln', time:{a:12,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Pilze','Babyspinat','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Weizenvollkornmehl',q:40,u:'g',c:'vorrat'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Champignons',q:100,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Hüttenkäse',q:100,u:'g',c:'kuehl'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln fein reiben und in einem Tuch kräftig ausdrücken. Mit Mehl, Milch und Ei zu einem dicken Teig verrühren.',
    'In einer beschichteten Pfanne mit wenig Öl kleine, flache Pfannkuchen bei mittlerer Hitze je Seite 3 bis 4 Minuten goldbraun und durch braten.',
    'Pilze in Scheiben schneiden und im restlichen Öl 4 Minuten braten, Spinat zugeben und zusammenfallen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene die Pilze mit Salz und Pfeffer würzen und alles mit Hüttenkäse und Frühlingszwiebel servieren.'
  ],
  kidName:'Mini-Boxty',
  kid:'Pfannkuchen gut durchbraten, in weiche Streifen schneiden und mit Hüttenkäse bestreichen. Pilze sehr klein schneiden, ohne Salz.',
  leftover:'Boxty-Wrap · 5 Min. – Übrige Pfannkuchen aufwärmen und mit Spinat und Hüttenkäse aufrollen.',
  tipp:'Die geriebenen Kartoffeln sehr gut ausdrücken, dann werden die Pfannkuchen knusprig statt weich.'
},
{
  id:'ie-vegetable-soup', name:'Irish Vegetable Soup · dicke Gemüsesuppe mit roten Linsen und Vollkornbrot', cuisine:'Irland', flag:'🇮🇪',
  protein:'huelsen', base:null, time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Lauch','Kartoffeln','Zwiebel','Kräuter'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Rote Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:100,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Lauch, Karotten und Kartoffeln klein würfeln und in Öl 5 Minuten anschwitzen.',
    'Abgespülte Linsen, Thymian und Brühe zugeben und 18 bis 20 Minuten köcheln, bis alles weich ist.',
    'Die Hälfte der Suppe pürieren oder grob zerstampfen, damit sie dick und sämig wird. Petersilie unterrühren und mit Vollkornbrot servieren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Gemüsesuppe',
  kid:'Suppe dick lassen und mit einem vorgeladenen Löffel anbieten. Brot ohne harte Kruste in Streifen zum Eintunken, kein Salz.',
  leftover:'Linsen-Gemüse-Soße · 8 Min. – Dick eingekochte Reste als Soße über Vollkornnudeln geben.',
  tipp:'Irisches Sodabrot kommt ohne Hefe aus und ist aus Vollkornmehl, Buttermilch und Natron in 40 Minuten gebacken.'
},
{
  id:'ie-lentil-shepherds-pie', name:'Shepherd\'s Pie · Linsen-Gemüse-Auflauf mit Kartoffelhaube', cuisine:'Irland', flag:'🇮🇪',
  protein:'huelsen', base:'kartoffeln', time:{a:20,c:45}, devices:[['topf'],['pfanne'],['ofen']], method:'Topf + Pfanne + Backofen',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Zwiebel','Erbsen','Tomaten'], season:[],
  ing:[
    {n:'Berglinsen oder Tellerlinsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen in der Brühe 20 bis 25 Minuten weich kochen. Kartoffeln schälen, würfeln und parallel in 15 bis 18 Minuten weich kochen. Ofen auf 200 °C vorheizen.',
    'Zwiebel und Karotten fein würfeln und in der Pfanne in Öl 5 Minuten dünsten. Linsen mit der restlichen Flüssigkeit, passierte Tomaten, Erbsen und Thymian zugeben und 5 Minuten dick einköcheln.',
    'Kartoffeln mit warmer Milch zu Püree stampfen. Linsenmasse in eine Form füllen, das Püree darauf verteilen und 20 Minuten goldbraun backen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch etwas Senf würzen.'
  ],
  kidName:'Mini-Linsen-Pie',
  kid:'Linsen sehr weich kochen und leicht zerdrücken, Püree und Füllung vermischen. Ohne Salz servieren, die Tomaten machen es mild-süßlich.',
  leftover:'Linsen-Bolognese · 10 Min. – Übrige Füllung mit etwas Tomate verlängern und über Vollkornnudeln geben.',
  tipp:'Der Auflauf lässt sich gut vorbereiten und portionsweise einfrieren.'
},
{
  id:'ie-irish-breakfast', name:'Irish Breakfast · Rührei mit Pilzen, Tomaten und Vollkorn-Sodabrot', cuisine:'Irland', flag:'🇮🇪',
  protein:'ei', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Pilze','Tomaten','Babyspinat','Kräuter'], season:[],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Champignons',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Schnittlauch, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Pilze in Scheiben schneiden und in der Hälfte des Öls 4 Minuten braten. Tomate halbieren und mit der Schnittfläche nach unten 3 Minuten mitbraten, Spinat kurz zusammenfallen lassen und alles auf Teller verteilen.',
    'Eier verquirlen und im restlichen Öl bei kleiner Hitze unter langsamem Rühren 3 bis 4 Minuten stocken lassen, bis keine flüssigen Stellen mehr bleiben.',
    'Brot toasten oder kurz in der Pfanne rösten.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Schnittlauch würzen.'
  ],
  kidName:'Mini-Frühstück',
  kid:'Rührei vollständig stocken lassen, Pilze klein schneiden und die Tomate gehäutet und weich anbieten. Brot in weiche Streifen ohne Kruste schneiden.',
  leftover:'Pilz-Ei-Toast · 5 Min. – Übrige Pilze mit einem Ei verrühren, vollständig stocken lassen und auf Vollkorntoast geben.',
  tipp:'Ein Vollkorn-Sodabrot lässt sich am Wochenende backen und in Scheiben einfrieren.'
},
{
  id:'ie-potato-leek-soup', name:'Potato and Leek Soup · Kartoffel-Lauch-Suppe mit weißen Bohnen und Vollkornbrot', cuisine:'Irland', flag:'🇮🇪',
  protein:'huelsen', base:'kartoffeln', time:{a:10,c:20}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Lauch','Zwiebel','Kräuter'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Kartoffeln, mehlig',q:200,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Vollkornbrot',q:1.5,u:'Scheiben',c:'brot'},
    {n:'Schnittlauch, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln, Lauch in Ringe schneiden und in Öl 5 Minuten weich dünsten, ohne dass er Farbe nimmt.',
    'Kartoffeln schälen, klein würfeln, mit der Brühe zugeben und 15 Minuten weich köcheln. Abgespülte Bohnen in den letzten 5 Minuten zugeben.',
    'Milch zugießen und die Suppe fein pürieren, sie soll dick und cremig sein. Schnittlauch darüberstreuen und mit Vollkornbrot servieren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Muskat würzen.'
  ],
  kidName:'Mini-Lauchsuppe',
  kid:'Suppe dick und lauwarm mit einem vorgeladenen Löffel anbieten. Brot ohne harte Kruste zum Eintunken, kein Salz und kein Muskat.',
  leftover:'Kartoffel-Lauch-Auflauf · 20 Min. – Dicke Reste mit Vollkornnudeln mischen, mit Käse bestreuen und überbacken.',
  tipp:'Die Bohnen machen die Suppe sämig und sättigend, ganz ohne Sahne.'
}
);
