/* Grün geplant · Norwegen · Top 15 */
RECIPES.push(
{
  id:'no-farikal', name:'Fårikål · norwegischer Lamm-Kohl-Topf mit Pfefferkörnern und Kartoffeln', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:100}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Kartoffeln','Karotten'], season:[9,10,11],
  ing:[
    {n:'Lammkeule, ausgelöst',q:120,u:'g',c:'fisch'},
    {n:'Weißkohl',q:250,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Pfefferkörner, schwarz',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lammfleisch in große Würfel schneiden. Kohl in Spalten schneiden und den Strunk daran lassen, damit sie zusammenhalten.',
    'Fleisch und Kohl schichtweise in einen Topf legen, Pfefferkörner in einem Teesieb dazwischenlegen. 300 ml Wasser angießen und zugedeckt bei kleiner Hitze 90 Minuten schmoren (Slow Cooker: 7 Stunden auf niedriger Stufe).',
    'Kartoffeln und Karotten in Stücken in den letzten 20 Minuten separat weich kochen.',
    'Teesieb entfernen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz abschmecken und mit Petersilie bestreuen.'
  ],
  kidName:'Lamm-Kohl-Mus',
  kid:'Lammfleisch in feine Fasern zupfen, Kohl und Kartoffeln sehr weich mit etwas Brühe zerdrücken. Pfefferkörner vorher vollständig entfernen, ohne Salz servieren.',
  leftover:'Lamm-Kohl-Suppe · 10 Min. – Reste klein schneiden, mit Brühe auffüllen und mit Kartoffelwürfeln erhitzen.',
  tipp:'Fårikål ist das Nationalgericht Norwegens und wird im Herbst gekocht, wenn Lamm und Kohl frisch geerntet sind.'
},
{
  id:'no-kjottkaker', name:'Kjøttkaker i brun saus · Fleischküchlein in Bratensauce mit Erbsenpüree und Kartoffeln', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:25}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Erbsen','Kartoffeln','Zwiebel'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:10,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:120,u:'g',c:'tk'},
    {n:'Dinkel-Vollkornmehl',q:8,u:'g',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Preiselbeeren (Glas)',q:1,u:'EL',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in Stücke schneiden und in 15 Minuten weich kochen. Haferflocken mit 2 EL Wasser quellen lassen und mit Hackfleisch, fein geriebener Zwiebel und Muskat glatt verkneten.',
    'Flache Küchlein formen und in Öl von jeder Seite 3 Minuten anbraten, dann herausnehmen.',
    'Mehl im Bratfett unter Rühren 2 Minuten bräunen, Brühe nach und nach einrühren, Küchlein zurück in die Sauce legen und zugedeckt 10 Minuten ziehen lassen, bis sie durchgegart sind.',
    'Erbsen in wenig Wasser 5 Minuten weich kochen und grob pürieren. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz, Pfeffer und Preiselbeeren servieren.'
  ],
  kidName:'Kjøttkake-Stückchen',
  kid:'Küchlein in kleine Stücke schneiden und in der Sauce weich werden lassen, Erbsenpüree und zerdrückte Kartoffeln dazu. Ohne Salz, Preiselbeeren nur als kleiner Klecks.',
  leftover:'Kjøttkake-Brot · 5 Min. – Kalte Küchlein in Scheiben mit Gurke auf Vollkornbrot legen.',
  tipp:'Für eine kräftig braune Sauce das Mehl geduldig bei mittlerer Hitze rösten, bis es nussig riecht.'
},
{
  id:'no-lapskaus', name:'Brun lapskaus · Rindfleisch-Eintopf mit Steckrübe, Wurzelgemüse und Kartoffeln', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:75}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:['sellerie'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Steckrübe','Karotten','Sellerie','Zwiebel'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:200,u:'g',c:'gemuese'},
    {n:'Steckrübe',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Lorbeerblatt',q:1,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in kleine Würfel schneiden und in Öl kräftig anbraten, Zwiebelwürfel kurz mitbraten.',
    'Brühe und Lorbeer zugeben und zugedeckt 40 Minuten köcheln (Slow Cooker: alles zusammen 6 Stunden auf niedriger Stufe).',
    'Kartoffeln, Steckrübe, Karotten und Sellerie würfeln, zugeben und weitere 30 Minuten köcheln, bis die Kartoffeln zerfallen und den Eintopf binden.',
    'Lorbeer entfernen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Weicher Lapskaus',
  kid:'Fleisch in feine Fasern zupfen und mit dem weichen Gemüse zu einem dicken Mus zerdrücken. Lorbeerblatt vorher sicher entfernen, ohne Salz servieren.',
  leftover:'Lapskaus-Auflauf · 20 Min. – Reste in eine Form geben, mit etwas Käse bestreuen und im Ofen überbacken.',
  tipp:'Mit Resten vom Sonntagsbraten wird Lapskaus noch schneller, dann reichen 30 Minuten Kochzeit.'
},
{
  id:'no-sodd', name:'Trøndersodd · klare Fleischsuppe mit Lamm, Hackbällchen, Kartoffeln und Karotten', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fleisch', base:'kartoffeln', time:{a:25,c:60}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Kartoffeln','Lauch'], season:[],
  ing:[
    {n:'Lammkeule, ausgelöst',q:60,u:'g',c:'fisch'},
    {n:'Rinderhack, mager',q:60,u:'g',c:'fisch'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Vollkorn-Knäckebrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Pfefferkörner, schwarz',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lammfleisch in kleine Würfel schneiden, mit Brühe und Pfefferkörnern im Teesieb aufkochen, abschäumen und zugedeckt 40 Minuten leise köcheln.',
    'Hackfleisch mit Speisestärke, Muskat und 1 EL kaltem Wasser glatt rühren und mit nassen Händen zu kleinen Bällchen formen.',
    'Kartoffeln würfeln, Karotten in Scheiben und Lauch in Ringe schneiden, mit den Bällchen in die Suppe geben und 15 bis 20 Minuten köcheln, bis alles weich und die Bällchen durchgegart sind.',
    'Teesieb entfernen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz abschmecken und mit Flatbrød oder Vollkornknäcke servieren.'
  ],
  kidName:'Sodd-Teller',
  kid:'Bällchen halbieren und prüfen, dass sie durchgegart sind, Fleisch und Gemüse aus der Suppe nehmen und mit etwas Brühe zerdrücken. Pfefferkörner vorher entfernen, ohne Salz.',
  leftover:'Fleischsuppe mit Nudeln · 12 Min. – Reste erhitzen und kleine Vollkornnudeln darin gar ziehen lassen.',
  tipp:'Sodd ist in Trøndelag ein klassisches Festessen, etwa zur Konfirmation oder am Nationalfeiertag.'
},
{
  id:'no-kalruletter', name:'Kålruletter · Kohlrouladen mit Hackfüllung, Karotten und Kartoffeln in heller Sauce', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fleisch', base:'kartoffeln', time:{a:30,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Karotten','Kartoffeln'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Weißkohl',q:200,u:'g',c:'gemuese'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:2,u:'TL',c:'vorrat',p:true},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kohlblätter vom Strunk lösen, 5 Minuten in kochendem Wasser blanchieren und die dicken Rippen flach schneiden.',
    'Hackfleisch mit der Hälfte der Speisestärke, 2 EL Milch und Muskat glatt rühren, je einen Löffel auf ein Blatt geben und fest einrollen.',
    'Rouladen mit der Naht nach unten dicht in einen Topf legen, Karottenstücke dazugeben, mit Brühe knapp bedecken und zugedeckt 25 Minuten leise köcheln. Kartoffeln gleichzeitig separat weich kochen.',
    'Rouladen herausnehmen und die Kochbrühe mit restlicher Milch und Stärke 2 Minuten zu einer hellen Sauce binden. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz, Pfeffer und Petersilie servieren.'
  ],
  kidName:'Kohlrouladen-Häppchen',
  kid:'Roulade in kleine Stücke schneiden, harte Blattrippen entfernen und die Füllung auf Durchgaren prüfen. Kartoffeln und Karotten mit der Sauce zerdrücken, ohne Salz.',
  leftover:'Kohl-Hack-Pfanne · 10 Min. – Reste klein schneiden und in der Pfanne mit gehackten Tomaten zu einem Ragout erhitzen.',
  tipp:'Wirsing ist zarter als Weißkohl und lässt sich leichter rollen.'
},
{
  id:'no-honsefrikasse', name:'Hønsefrikassé · Hühnerfrikassee mit Karotten, Blumenkohl und Vollkornreis', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['milch','sellerie'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Blumenkohl','Sellerie','Lauch'], season:[6,7,8,9,10],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Blumenkohl',q:100,u:'g',c:'gemuese'},
    {n:'Knollensellerie',q:40,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'}
  ],
  steps:[
    'Reis aufsetzen und in 25 bis 30 Minuten garen. Hähnchen würfeln, in der Brühe aufkochen und 10 Minuten leise köcheln.',
    'Karotten und Sellerie würfeln, Lauch in Ringe schneiden und Blumenkohl in kleine Röschen teilen. Zum Hähnchen geben und weitere 12 Minuten köcheln, bis Gemüse und Fleisch weich und durchgegart sind.',
    'Milch mit Speisestärke verrühren, einrühren und 2 Minuten sämig köcheln.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Petersilie abschmecken und mit Reis servieren.'
  ],
  kidName:'Hühnerfrikassee mild',
  kid:'Hähnchen fein zerzupfen, Gemüse sehr weich garen und mit Reis und Sauce zu einem sämigen Brei mischen. Ohne Salz servieren.',
  leftover:'Frikassee-Auflauf · 20 Min. – Reste mit dem Reis in eine Form geben, mit Käse bestreuen und im Ofen überbacken.',
  tipp:'Frikassee lässt sich gut einfrieren, die Sauce nach dem Auftauen einmal kräftig durchrühren.'
},
{
  id:'no-fiskesuppe', name:'Bergensk fiskesuppe · cremige Fischsuppe mit Wurzelgemüse und Kartoffeln', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:14}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch','milch','sellerie'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Sellerie','Lauch'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:80,u:'g',c:'fisch'},
    {n:'Lachsfilet',q:60,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:40,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Saure Sahne',q:20,u:'g',c:'kuehl'},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'}
  ],
  steps:[
    'Kartoffeln, Karotten und Sellerie in kleine Würfel schneiden, Lauch in feine Ringe. Alles in der Brühe 9 bis 10 Minuten weich köcheln.',
    'Milch zugießen. Fisch in mundgerechte Würfel schneiden, auf Gräten prüfen und in die nicht mehr kochende Suppe geben.',
    'Bei kleiner Hitze 4 bis 5 Minuten gar ziehen lassen, bis der Fisch innen nicht mehr glasig ist, dann saure Sahne einrühren.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Schnittlauch abschmecken.'
  ],
  kidName:'Dicke Fischsuppe',
  kid:'Fisch und Gemüse mit einer Schaumkelle herausnehmen, nochmals auf Gräten prüfen und mit wenig Suppe zu einem dicken Mus zerdrücken. Ohne Salz.',
  leftover:'Fisch-Gratin · 15 Min. – Fisch und Gemüse mit wenig Suppe in eine Form geben, mit Käse bestreuen und im Ofen überbacken.',
  tipp:'Mit salzarmem Fischfond statt Gemüsebrühe schmeckt die Suppe kräftiger nach Meer.'
},
{
  id:'no-fiskegrateng', name:'Fiskegrateng · Fisch-Nudel-Auflauf mit Brokkoli und Karottenrohkost', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fisch', base:'nudeln', time:{a:15,c:35}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['fisch','gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Brokkoli','Karotten'], season:[6,7,8,9,10],
  ing:[
    {n:'Seelachsfilet',q:130,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:70,u:'g',c:'vorrat'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:2,u:'TL',c:'vorrat',p:true},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Nudeln 2 Minuten kürzer als angegeben kochen, Brokkoliröschen in den letzten 3 Minuten mitgaren und alles abgießen.',
    'Milch mit Speisestärke und Muskat verrühren und unter Rühren 2 Minuten zu einer hellen Sauce aufkochen.',
    'Fisch würfeln, mit Nudeln, Brokkoli und Sauce in einer geölten Form mischen, mit Käse bestreuen und 25 Minuten backen, bis der Fisch durchgegart und die Oberfläche goldbraun ist.',
    'Karotte fein reiben. Kinderportion ohne Salz abnehmen, Erwachsene mit Pfeffer nachwürzen und die Karottenrohkost dazu servieren.'
  ],
  kidName:'Fisch-Nudel-Auflauf mild',
  kid:'Fisch auf Gräten prüfen und zerdrücken, Nudeln und Brokkoli klein schneiden. Karotte sehr fein reiben oder kurz weich dünsten, ohne Salz.',
  leftover:'Auflauf-Pfanne · 8 Min. – Reste in Stücken in der Pfanne von beiden Seiten knusprig anbraten.',
  tipp:'In Norwegen gehört zur Fiskegrateng fein geriebene Karottenrohkost, sie bringt Frische und Farbe auf den Teller.'
},
{
  id:'no-fiskekaker', name:'Fiskekaker · norwegische Fischküchlein mit Kartoffeln und Karotten-Kohl-Rohkost', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:18}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Weißkohl','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Speisestärke',q:2,u:'TL',c:'vorrat',p:true},
    {n:'Milch',q:30,u:'ml',c:'kuehl'},
    {n:'Frühlingszwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:60,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 15 bis 18 Minuten weich kochen.',
    'Fisch mit Speisestärke, Milch und Muskat mit dem Pürierstab zu einer glatten Masse mixen, fein geschnittene Frühlingszwiebel unterheben.',
    'Mit einem nassen Löffel kleine flache Küchlein in die Pfanne setzen und in Öl bei mittlerer Hitze von jeder Seite 4 Minuten braten, bis sie fest und durchgegart sind.',
    'Karotte und Kohl fein reiben und mit Zitronensaft mischen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Fischküchlein-Streifen',
  kid:'Küchlein in Streifen schneiden, die feine Masse ist weich und grätenfrei, Kartoffeln zerdrücken. Rohkost sehr fein reiben oder Karotten weich dünsten, ohne Salz.',
  leftover:'Fiskekake-Brot · 5 Min. – Kalte Küchlein in Scheiben mit Gurke auf Vollkornbrot legen.',
  tipp:'Gebratene Fiskekaker lassen sich gut einfrieren und in der Pfanne wieder aufwärmen.'
},
{
  id:'no-seibiff', name:'Seibiff med løk · gebratener Seelachs mit Zwiebeln, Kartoffeln und Erbsen', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Kartoffeln','Erbsen'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Dinkel-Vollkornmehl',q:10,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:100,u:'g',c:'tk'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln halbieren und in 15 Minuten weich kochen, Erbsen in den letzten 4 Minuten dazugeben.',
    'Zwiebel in Ringe schneiden und in der Hälfte des Öls 8 Minuten weich und goldbraun braten, dann an den Rand schieben.',
    'Fisch trocken tupfen, in Mehl wenden und im restlichen Öl von jeder Seite 3 Minuten braten, bis er innen nicht mehr glasig ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Petersilie servieren.'
  ],
  kidName:'Seelachs mit Erbsen',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Erbsen und Kartoffeln zerdrücken. Zwiebeln sehr weich braten und klein schneiden, ohne Salz.',
  leftover:'Seelachs-Wrap · 6 Min. – Reste erhitzen und mit Rohkost in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Seelachs heißt auf Norwegisch Sei und gehört dort zu den günstigsten Alltagsfischen.'
},
{
  id:'no-byggotto', name:'Byggotto · Graupenrisotto mit Pilzen, Erbsen, Spinat und Käse', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'milch', base:null, time:{a:15,c:35}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Pilze','Erbsen','Babyspinat','Zwiebel'], season:[8,9,10,11],
  ing:[
    {n:'Perlgraupen',q:75,u:'g',c:'vorrat'},
    {n:'Champignons',q:120,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Parmesan oder Hartkäse',q:25,u:'g',c:'kuehl'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch fein würfeln, Pilze in Scheiben schneiden. Zwiebel in Öl glasig dünsten, Pilze zugeben und 4 Minuten braten.',
    'Graupen und Thymian unterrühren, Brühe nach und nach angießen und offen 30 bis 35 Minuten unter gelegentlichem Rühren köcheln, bis die Graupen weich und cremig sind.',
    'Erbsen und Spinat in den letzten 4 Minuten untermischen, dann geriebenen Käse einrühren.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Pilz-Graupen-Brei',
  kid:'Pilze sehr klein hacken oder herauspicken, Erbsen zerdrücken und die Graupen etwas weicher kochen. Käse sparsam, ohne Salz.',
  leftover:'Graupen-Bratlinge · 12 Min. – Reste mit einem Ei verkneten, zu Talern formen und in der Pfanne vollständig durchbraten.',
  tipp:'Byggotto ist die norwegische Antwort auf Risotto, Gerste aus heimischem Anbau ersetzt dabei den Reis.'
},
{
  id:'no-blomkalsuppe', name:'Blomkålsuppe · Blumenkohlsuppe mit Kartoffeln, Ei und Vollkornbrot', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'ei', base:null, time:{a:8,c:16}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei','milch','gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Blumenkohl','Kartoffeln','Zwiebel'], season:[6,7,8,9,10],
  ing:[
    {n:'Blumenkohl',q:200,u:'g',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:100,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Eier 10 Minuten hart kochen, abschrecken und halbieren.',
    'Zwiebel würfeln und in Öl glasig dünsten. Blumenkohl in kleine Röschen und Kartoffeln in kleine Würfel schneiden, mit Brühe zugeben und 12 bis 14 Minuten weich köcheln.',
    'Ein paar Röschen beiseitelegen, den Rest mit Milch fein pürieren und die Röschen wieder zugeben.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Muskat und Schnittlauch abschmecken und mit Eihälften und Vollkornbrot servieren.'
  ],
  kidName:'Blumenkohlsuppe mit Eiwürfeln',
  kid:'Suppe dicklich pürieren, damit sie gut vom Löffel geht, das hart gekochte Ei fein hacken und Brot in weiche Streifen schneiden. Ohne Salz.',
  leftover:'Blumenkohl-Nudeln · 10 Min. – Dicke Suppenreste als Sauce mit gekochten Vollkornnudeln und etwas Käse mischen.',
  tipp:'Ein Esslöffel Haferflocken mitgekocht macht die Suppe noch sämiger und sättigender.'
},
{
  id:'no-fredagstaco', name:'Fredagstaco · norwegischer Freitags-Taco mit Bohnen, Mais und Gemüse', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'huelsen', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Paprika','Mais','Tomaten','Salat'], season:[7,8,9],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:140,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Maistortillas, klein',q:3,u:'Stk.',c:'brot'},
    {n:'Mais (Dose oder TK)',q:60,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Bohnen abspülen und abtropfen lassen. Paprika würfeln und in Öl 4 Minuten braten.',
    'Bohnen, Mais, Paprikapulver, Kreuzkümmel und 3 EL Wasser zugeben, 5 Minuten köcheln und die Bohnen dabei grob zerdrücken.',
    'Tomaten würfeln, Salat in Streifen schneiden und die Tortillas in der trockenen Pfanne kurz erwärmen.',
    'Kinderportion ohne Salz abnehmen. Jeder füllt seine Tortillas selbst, Erwachsene würzen mit Salz und etwas Chili.'
  ],
  kidName:'Mini-Taco',
  kid:'Bohnen und Mais vollständig zerdrücken, Tomaten klein würfeln und Tortilla in weiche Streifen schneiden. Ohne Chili und Salz, Joghurt als milder Dip.',
  leftover:'Taco-Salat · 5 Min. – Bohnenreste warm über Salat, Tomaten und zerbröselte Tortillas geben.',
  tipp:'Taco am Freitag ist in Norwegen eine feste Familientradition, mit Bohnen statt Hackfleisch wird er schneller und günstiger.'
},
{
  id:'no-ertesuppe', name:'Gul ertesuppe · gelbe Erbsensuppe mit Steckrübe, Wurzelgemüse und Flatbrød', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'huelsen', base:null, time:{a:15,c:60}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:['gluten','sellerie'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:2,
  veg:['Steckrübe','Karotten','Sellerie','Zwiebel'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Gelbe Schälerbsen, trocken',q:80,u:'g',c:'vorrat'},
    {n:'Steckrübe',q:60,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:450,u:'ml',c:'vorrat'},
    {n:'Vollkorn-Knäckebrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Lorbeerblatt',q:1,u:'Stk.',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Erbsen in einem Sieb gründlich spülen. Zwiebel würfeln und in Öl 3 Minuten andünsten.',
    'Erbsen, Brühe, Lorbeer und Thymian zugeben und zugedeckt 30 Minuten köcheln (Slow Cooker: alles zusammen 7 Stunden auf niedriger Stufe).',
    'Steckrübe, Karotten und Sellerie in kleine Würfel schneiden, zugeben und weitere 30 Minuten köcheln, bis die Erbsen zerfallen und das Gemüse weich ist.',
    'Lorbeer entfernen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer abschmecken und mit Flatbrød oder Vollkornknäcke servieren.'
  ],
  kidName:'Gelber Erbsenbrei',
  kid:'Kinderportion fein pürieren und dick servieren, Knäckebrot durch weiches Vollkornbrot ersetzen. Ohne Salz.',
  leftover:'Erbsensuppe mit Nudeln · 10 Min. – Reste mit Wasser verdünnen und kleine Vollkornnudeln darin garen.',
  tipp:'Gelbe Schälerbsen müssen nicht eingeweicht werden und zerfallen beim Kochen von selbst zu einer sämigen Suppe.'
},
{
  id:'no-raspeballer', name:'Raspeballer · norwegische Kartoffelklöße mit Steckrübenstampf und Räuchertofu', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'tofu', base:'kartoffeln', time:{a:25,c:40}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','soja','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Steckrübe','Karotten'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Dinkel-Vollkornmehl',q:40,u:'g',c:'vorrat'},
    {n:'Steckrübe',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Räuchertofu',q:100,u:'g',c:'kuehl'},
    {n:'Milch',q:30,u:'ml',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, fein reiben und kräftig ausdrücken, dann mit dem Mehl zu einem formbaren Teig verkneten.',
    'Mit nassen Händen kleine Klöße formen, in leicht siedende Brühe legen und 35 bis 40 Minuten ziehen lassen, ohne dass die Brühe sprudelt.',
    'Steckrübe und Karotten würfeln, in wenig Wasser 20 Minuten weich kochen und mit Milch und Muskat zu Stampf zerdrücken.',
    'Räuchertofu würfeln und in Öl 5 Minuten knusprig braten. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Kloß mit Steckrübenstampf',
  kid:'Kloß in kleine Stücke schneiden und mit dem Steckrübenstampf mischen, Räuchertofu fein zerbröseln. Ohne Salz servieren.',
  leftover:'Gebratene Klöße · 10 Min. – Übrige Klöße in Scheiben schneiden und in der Pfanne von beiden Seiten goldbraun braten.',
  tipp:'Raspeballer heißen je nach Region auch Komle oder Kumle, klassisch gibt es gesalzenes Fleisch dazu, Räuchertofu bringt das rauchige Aroma.'
}
);
