/* Grün geplant · Dänemark · Top 15 */
RECIPES.push(
{
  id:'dk-frikadeller', name:'Frikadeller · dänische Frikadellen mit Kartoffeln und Rotkohl-Apfel-Gemüse', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rotkohl','Apfel','Kartoffeln','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:10,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:30,u:'ml',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rotkohl',q:120,u:'g',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 15 bis 18 Minuten weich kochen. Zwiebel fein reiben und mit Hackfleisch, Haferflocken, Ei und Milch zu einer weichen Masse rühren.',
    'Mit einem Esslöffel ovale Frikadellen formen und in der Hälfte des Öls bei mittlerer Hitze von jeder Seite 5 bis 6 Minuten braten, bis sie innen nicht mehr rosa sind.',
    'Rotkohl in feine Streifen schneiden, Apfel reiben und beides im restlichen Öl mit 3 EL Wasser zugedeckt 10 Minuten weich dünsten, mit Essig abschmecken.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Frikadellen',
  kid:'Kleine Frikadellen formen, halbieren und auf Durchgaren prüfen, Rotkohl sehr weich dünsten und klein schneiden. Kartoffeln zerdrücken, ohne Salz.',
  leftover:'Frikadellen-Smørrebrød · 5 Min. – Kalte Frikadellen in Scheiben mit etwas Rotkohl auf Vollkornbrot legen.',
  tipp:'Klassisch ist Schweinehack, mageres Rinderhack macht die Frikadellen leichter und bleibt mit Milch und Haferflocken saftig.'
},
{
  id:'dk-stegt-flaesk', name:'Stegt flæsk med persillesovs · magerer Schweinerücken mit Petersiliensauce, Kartoffeln und Roter Bete', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'fleisch', base:'kartoffeln', time:{a:10,c:18}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Erbsen','Rote Bete','Kräuter'], season:[],
  ing:[
    {n:'Schweinerücken, dünne Scheiben',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Rote Bete, vorgegart',q:60,u:'g',c:'gemuese'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Petersilie, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln halbieren und in 15 bis 18 Minuten weich kochen, Erbsen in den letzten 4 Minuten mitgaren.',
    'Fleischscheiben trocken tupfen und in einer heißen Pfanne mit wenig Öl von jeder Seite 3 bis 4 Minuten kräftig braten, bis sie gebräunt und durchgegart sind.',
    'Milch mit Speisestärke verrühren, unter Rühren 2 Minuten zu einer Sauce kochen und reichlich gehackte Petersilie und Muskat einrühren.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Rote-Bete-Scheiben servieren.'
  ],
  kidName:'Fleisch mit Petersilienkartoffeln',
  kid:'Fleisch in sehr feine Streifen schneiden, Kartoffeln und Erbsen mit der Petersiliensauce zerdrücken. Ohne Salz servieren.',
  leftover:'Kartoffel-Fleisch-Pfanne · 10 Min. – Reste würfeln und mit Zwiebeln in der Pfanne knusprig braten.',
  tipp:'Stegt flæsk wurde 2014 zum dänischen Nationalgericht gewählt, mit magerem Rücken statt Bauchspeck bleibt es alltagstauglich.'
},
{
  id:'dk-boller-i-karry', name:'Boller i karry · Putenbällchen in milder Currysauce mit Lauch, Apfel und Vollkornreis', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'gefluegel', base:'reis', time:{a:20,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Lauch','Apfel','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Putenhack',q:110,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:10,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Mildes Currypulver',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen und in 25 Minuten garen. Haferflocken mit 2 EL Wasser quellen lassen und mit Putenhack zu einer glatten Masse verrühren.',
    'Brühe aufkochen, mit zwei Teelöffeln kleine Bällchen abstechen und 8 bis 10 Minuten darin gar ziehen lassen, bis sie innen durchgegart sind, dann herausnehmen.',
    'Zwiebel und Lauch in Ringe, Apfel in Würfel schneiden und mit Currypulver in der Brühe 6 Minuten weich köcheln. Milch mit Speisestärke verrühren, einrühren und 2 Minuten sämig kochen.',
    'Bällchen zurück in die Sauce geben. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz abschmecken und mit Reis servieren.'
  ],
  kidName:'Mini-Boller mit Reis',
  kid:'Bällchen halbieren und prüfen, dass sie innen durchgegart sind, mit Reis und Sauce vermengen, Lauch sehr weich kochen. Das Curry ist mild, Salz erst danach.',
  leftover:'Curry-Reispfanne · 10 Min. – Reste mit Erbsen in der Pfanne durchbraten, bis alles heiß ist.',
  tipp:'Boller i karry ist ein dänischer Familienklassiker, der Apfel in der Sauce bringt eine milde Süße ganz ohne Zucker.'
},
{
  id:'dk-morbradgryde', name:'Mørbradgryde · Schweinefilet-Pilz-Topf mit Paprika und Vollkornreis', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'fleisch', base:'reis', time:{a:15,c:25}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Rote Paprika','Tomaten','Zwiebel'], season:[8,9,10,11],
  ing:[
    {n:'Schweinefilet',q:120,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Champignons',q:100,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:60,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:80,u:'ml',c:'vorrat'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen und in 25 Minuten garen. Schweinefilet in 1 cm dicke Medaillons schneiden und in Öl von jeder Seite 2 Minuten anbraten, dann herausnehmen.',
    'Zwiebel, Pilze und Paprika in Streifen schneiden und im Bratfett 5 Minuten braten, Paprikapulver kurz mitrösten.',
    'Passierte Tomaten und Brühe zugeben, Fleisch zurück in die Pfanne legen und zugedeckt 8 Minuten leise schmoren, bis es durchgegart ist. Saure Sahne einrühren und nicht mehr kochen lassen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer abschmecken und mit Reis servieren.'
  ],
  kidName:'Filet-Reis-Topf',
  kid:'Fleisch in sehr kleine Würfel schneiden und mit Reis und Sauce mischen, Pilze und Paprika weich schmoren und klein schneiden. Ohne Salz.',
  leftover:'Mørbrad-Wrap · 6 Min. – Reste erhitzen und mit Salat in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Schweinefilet ist das magerste Stück vom Schwein und gart in wenigen Minuten, deshalb nur kurz schmoren.'
},
{
  id:'dk-skipperlabskovs', name:'Skipperlabskovs · Rindfleisch-Kartoffel-Eintopf mit Lorbeer, Schnittlauch und Roter Bete', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:80}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Rote Bete','Zwiebel'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Rote Bete, vorgegart',q:60,u:'g',c:'gemuese'},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'},
    {n:'Lorbeerblatt',q:1,u:'Stk.',c:'gewuerz',p:true},
    {n:'Pfefferkörner, schwarz',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in 2 cm große Würfel schneiden und in Öl rundum anbraten, Zwiebelwürfel kurz mitbraten.',
    'Brühe, Lorbeer und Pfefferkörner im Teesieb zugeben und zugedeckt 50 Minuten leise köcheln (Slow Cooker: alles zusammen 6 Stunden auf niedriger Stufe).',
    'Kartoffeln und Karotten würfeln, zugeben und weitere 30 Minuten köcheln, bis die Kartoffeln zerfallen und den Eintopf sämig binden. Dabei gelegentlich umrühren.',
    'Lorbeer und Teesieb entfernen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz abschmecken und mit Schnittlauch und Rote-Bete-Würfeln servieren.'
  ],
  kidName:'Labskovs-Mus',
  kid:'Fleisch in feine Fasern zupfen und mit dem sämigen Kartoffel-Karotten-Mus mischen. Gewürze vorher sicher entfernen, ohne Salz.',
  leftover:'Labskovs-Taler · 12 Min. – Kalte Reste zu Talern formen und in der Pfanne von beiden Seiten knusprig braten.',
  tipp:'Skipperlabskovs stammt aus der dänischen Seefahrt und wird klassisch mit Roggenbrot und Roter Bete gegessen.'
},
{
  id:'dk-biksemad', name:'Biksemad · dänische Kartoffel-Rindfleisch-Pfanne mit Spiegelei und Roter Bete', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'fleisch', base:'kartoffeln', time:{a:10,c:18}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Zwiebel','Rote Bete'], season:[],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:90,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Rote Bete, vorgegart',q:50,u:'g',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln und Karotten in 1 cm große Würfel schneiden und in Öl zugedeckt 12 Minuten bei mittlerer Hitze braten, dabei mehrmals wenden.',
    'Zwiebel würfeln, Rindfleisch in kleine Stücke schneiden, beides zugeben und offen 3 bis 4 Minuten braten, bis das Fleisch durchgegart ist.',
    'Daneben die Eier als Spiegeleier braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Petersilie würzen und mit Rote Bete und Senf servieren.'
  ],
  kidName:'Mini-Biksemad',
  kid:'Fleisch sehr klein schneiden, Kartoffeln und Karotten weich braten und leicht zerdrücken. Ei vollständig durchgaren und in Streifen schneiden, ohne Salz und Senf.',
  leftover:'Biksemad-Wrap · 6 Min. – Reste erhitzen und mit Gurke in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Biksemad ist in Dänemark die klassische Resteverwertung, Bratenreste vom Vortag ersetzen das frische Rindfleisch.'
},
{
  id:'dk-fiskefrikadeller', name:'Fiskefrikadeller · Fischfrikadellen mit Kartoffeln, Karottenrohkost und Joghurt-Remoulade', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:18}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Kartoffeln','Gurke','Zwiebel'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Haferflocken, zart',q:10,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 15 bis 18 Minuten weich kochen. Fisch mit dem Pürierstab oder Messer sehr fein hacken und mit Ei, Haferflocken, fein geriebener Zwiebel und Dill verrühren, 10 Minuten ruhen lassen.',
    'Mit einem nassen Esslöffel ovale Frikadellen abstechen und in Öl bei mittlerer Hitze von jeder Seite 4 Minuten braten, bis sie fest und durchgegart sind.',
    'Für die Remoulade Gurke sehr fein würfeln und mit Joghurt verrühren. Karotte fein raspeln.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Remoulade servieren.'
  ],
  kidName:'Weiche Fischfrikadellen',
  kid:'Frikadellen halbieren und prüfen, dass sie innen durchgegart sind, Kartoffeln zerdrücken und Karotte sehr fein raspeln. Joghurt-Dip ohne Salz.',
  leftover:'Fisch-Smørrebrød · 5 Min. – Kalte Frikadellen auf Vollkornbrot mit Remoulade und Gurke legen.',
  tipp:'Dänische Remoulade ist eigentlich eine Mayonnaise mit Gemüse, die Joghurt-Variante ist leichter und schmeckt Kindern genauso.'
},
{
  id:'dk-rodspaette', name:'Stegt rødspætte · gebratene Scholle mit Kartoffeln, Erbsen und Gurke', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Erbsen','Gurke','Zitrone'], season:[],
  ing:[
    {n:'Schollenfilet',q:140,u:'g',c:'fisch'},
    {n:'Roggenvollkornmehl',q:10,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln halbieren und in 15 Minuten weich kochen, Erbsen in den letzten 4 Minuten dazugeben.',
    'Schollenfilets trocken tupfen und dünn in Roggenmehl wenden.',
    'In Öl bei mittlerer Hitze von jeder Seite 2 bis 3 Minuten goldbraun braten, bis der Fisch weiß und durchgegart ist. Gurke in Scheiben schneiden.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Zitrone und Petersilie servieren.'
  ],
  kidName:'Scholle mit Erbsenkartoffeln',
  kid:'Scholle auf Gräten prüfen und zerpflücken, Kartoffeln und Erbsen zerdrücken. Gurke in Stifte schneiden, ohne Salz und Zitrone.',
  leftover:'Fischsalat-Brot · 5 Min. – Kalte Scholle zerpflücken, mit Joghurt und Gurke mischen und auf Vollkornbrot streichen.',
  tipp:'Scholle ist im späten Frühjahr besonders zart, TK-Filets eignen sich das ganze Jahr.'
},
{
  id:'dk-fisk-i-fad', name:'Fisk i fad · Ofen-Fischfilet auf Gemüse in Tomaten-Rahm-Sauce mit Vollkornreis', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'fisch', base:'reis', time:{a:15,c:25}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Lauch','Rote Paprika','Brokkoli','Tomaten'], season:[6,7,8,9,10],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Brokkoli',q:80,u:'g',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen und den Reis aufsetzen. Lauch in Ringe, Paprika in Streifen schneiden und Brokkoli in kleine Röschen teilen.',
    'Gemüse in einer geölten Auflaufform verteilen und das Fischfilet in Stücken darauflegen.',
    'Passierte Tomaten mit saurer Sahne und Paprikapulver verrühren, über Fisch und Gemüse gießen und 20 bis 25 Minuten backen, bis der Fisch durchgegart ist und sich leicht zerteilen lässt.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer abschmecken und mit Reis servieren.'
  ],
  kidName:'Fisch-Gemüse-Reis',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Gemüse weich gegart klein schneiden und mit Reis und Sauce mischen. Ohne Salz.',
  leftover:'Fisch-Reis-Pfanne · 8 Min. – Reste vorsichtig in der Pfanne erhitzen, bis alles vollständig heiß ist.',
  tipp:'Das Gemüse lässt sich nach Saison tauschen, im Sommer passen Zucchini und Kirschtomaten, im Winter Lauch und Karotten.'
},
{
  id:'dk-torsk-sennepssovs', name:'Kogt torsk med sennepssovs · Kabeljau mit milder Senfsauce, Kartoffeln, Brokkoli und Roter Bete', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Brokkoli','Rote Bete'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Rote Bete, vorgegart',q:60,u:'g',c:'gemuese'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Meerrettich (Glas)',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'},
    {n:'Lorbeerblatt',q:1,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln halbieren und in 15 Minuten weich kochen, Brokkoliröschen in den letzten 5 Minuten mitgaren.',
    'Fisch in leicht siedendem Wasser mit Lorbeerblatt 7 bis 8 Minuten gar ziehen lassen, bis er sich in Lamellen teilen lässt.',
    'Milch mit Speisestärke verrühren und unter Rühren 2 Minuten zu einer hellen Sauce kochen. Eine kleine Menge für das Kind abnehmen, dann Senf einrühren.',
    'Kinderportion ohne Salz anrichten. Erwachsene mit Salz, Meerrettich, Schnittlauch und Rote-Bete-Würfeln servieren.'
  ],
  kidName:'Kabeljau mit heller Sauce',
  kid:'Fisch sorgfältig entgräten und zerpflücken, Kartoffeln und Brokkoli mit der Sauce ohne Senf zerdrücken. Rote Bete in kleinen Würfeln, ohne Salz.',
  leftover:'Fisch-Kartoffel-Taler · 10 Min. – Reste zerdrücken, zu Talern formen und in der Pfanne goldbraun braten.',
  tipp:'In Dänemark kommt Kabeljau mit Senfsauce traditionell an Silvester auf den Tisch, mit Roter Bete und Meerrettich.'
},
{
  id:'dk-aeggekage', name:'Æggekage · dänisches Pfannen-Omelett mit Tomaten, Pilzen, Schnittlauch und Roggenbrot', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'ei', base:null, time:{a:8,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','milch','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Pilze','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Dinkel-Vollkornmehl',q:8,u:'g',c:'vorrat'},
    {n:'Champignons',q:60,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Schnittlauch',q:2,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Eier mit Milch und Mehl glatt verquirlen. Pilze in Scheiben schneiden und in Öl 4 Minuten braten.',
    'Eiermasse darübergießen und zugedeckt bei kleiner Hitze 8 Minuten stocken lassen, bis die Oberfläche vollständig fest ist.',
    'Tomaten in Spalten schneiden und mit reichlich Schnittlauch auf dem Omelett verteilen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Senf würzen und mit Roggenvollkornbrot servieren.'
  ],
  kidName:'Ei-Kuchen-Streifen',
  kid:'Omelett vollständig durchgaren und in fingerdicke Streifen schneiden, Tomaten klein würfeln. Brot in weiche Streifen, ohne Salz und Senf.',
  leftover:'Æggekage-Brot · 3 Min. – Kalte Omelettstücke mit Tomate auf Vollkornbrot legen.',
  tipp:'Klassisch kommt gebratener Speck dazu, gebratene Pilze bringen ähnlich viel Würze mit deutlich weniger Fett.'
},
{
  id:'dk-smorrebrod', name:'Smørrebrød · Roggenvollkornbrot mit Ei, Kartoffeln, Radieschen und Gurke', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'ei', base:null, time:{a:12,c:12}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Radieschen','Gurke','Kräuter'], season:[4,5,6],
  ing:[
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:120,u:'g',c:'gemuese'},
    {n:'Hüttenkäse',q:60,u:'g',c:'kuehl'},
    {n:'Radieschen',q:4,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'},
    {n:'Kresse',q:1,u:'EL',c:'gemuese'}
  ],
  steps:[
    'Kleine Kartoffeln in 12 Minuten weich kochen, Eier im selben Topf 10 Minuten hart kochen und abschrecken.',
    'Kartoffeln und Eier in Scheiben schneiden, Radieschen und Gurke dünn hobeln.',
    'Brot mit Hüttenkäse bestreichen und je zur Hälfte mit Kartoffel- oder Eischeiben belegen, mit Radieschen, Gurke, Schnittlauch und Kresse garnieren.',
    'Kinderportion abnehmen, dann Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Smørrebrød-Häppchen',
  kid:'Brot in kleine Quadrate schneiden, Ei und Kartoffeln fein zerdrücken und darauf verteilen. Radieschen weglassen oder sehr fein reiben, ohne Salz.',
  leftover:'Kartoffel-Ei-Salat · 5 Min. – Übrige Kartoffeln und Eier mit Joghurt, Gurke und Schnittlauch zu einem Salat mischen.',
  tipp:'Dänisches Rugbrød ist ein kerniges Roggenvollkornbrot, ein saftiges Roggenvollkornbrot aus dem Supermarkt kommt ihm am nächsten.'
},
{
  id:'dk-porretaerte', name:'Porretærte · Lauchtarte mit Vollkornboden, Hüttenkäse und Kirschtomaten', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'milch', base:null, time:{a:20,c:35}, devices:[['ofen']], method:'Backofen, Tarteform',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Lauch','Kirschtomaten'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Magerquark',q:30,u:'g',c:'kuehl'},
    {n:'Lauch',q:1,u:'Stange',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Hüttenkäse',q:80,u:'g',c:'kuehl'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Mehl mit Quark, Öl und 1 bis 2 EL Wasser zu einem glatten Teig verkneten, dünn ausrollen, in eine Tarteform drücken und 10 Minuten vorbacken.',
    'Lauch längs halbieren, gründlich waschen, in feine Ringe schneiden und in einer Pfanne mit 2 EL Wasser 5 Minuten weich dünsten.',
    'Eier mit Hüttenkäse, Milch und Muskat verrühren, Lauch untermischen, auf den Boden geben, mit Käse bestreuen und 25 Minuten backen, bis die Füllung fest ist.',
    'Kinderportion abnehmen, Erwachsene mit Pfeffer würzen und mit Kirschtomaten servieren.'
  ],
  kidName:'Lauchtarte-Streifen',
  kid:'Tarte abkühlen lassen und in schmale Streifen schneiden, die Füllung muss vollständig gestockt sein. Kirschtomaten vierteln, kein zusätzliches Salz.',
  leftover:'Tarte-Lunchbox · 3 Min. – Übrige Stücke kurz aufwärmen oder kalt mit Rohkost einpacken.',
  tipp:'Lauch sammelt Erde zwischen den Schichten, deshalb erst längs halbieren und unter fließendem Wasser auffächern.'
},
{
  id:'dk-braendende-kaerlighed', name:'Brændende kærlighed · Kartoffel-Karotten-Püree mit Räuchertofu, Röstzwiebeln und Roter Bete', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'tofu', base:'kartoffeln', time:{a:12,c:18}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Zwiebel','Rote Bete'], season:[],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Räuchertofu',q:100,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Bete, vorgegart',q:60,u:'g',c:'gemuese'},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln und Karotten schälen, würfeln und in 15 Minuten weich kochen, dann mit warmer Milch und Muskat zu Püree stampfen.',
    'Zwiebel in Ringe schneiden und in der Hälfte des Öls bei mittlerer Hitze 10 Minuten goldbraun braten.',
    'Räuchertofu klein würfeln, im restlichen Öl 5 Minuten knusprig braten und mit den Zwiebeln mischen.',
    'Kinderportion abnehmen. Püree mit einer Mulde anrichten, Zwiebel-Tofu-Mischung hineingeben, mit Rote Bete und Schnittlauch servieren und für die Erwachsenen mit Salz und Pfeffer würzen.'
  ],
  kidName:'Püree mit Tofu-Bröseln',
  kid:'Räuchertofu für das Kind fein zerbröseln und unter das Püree mischen, Zwiebeln sehr weich braten und klein schneiden. Ohne Salz.',
  leftover:'Püree-Taler · 10 Min. – Kaltes Püree mit den Resten zu Talern formen und in der Pfanne goldbraun braten.',
  tipp:'Im Original kommt Speck in die Mulde, Räuchertofu bringt das rauchige Aroma mit deutlich weniger Fett.'
},
{
  id:'dk-gule-aerter', name:'Gule ærter · gelbe Erbsensuppe mit Wurzelgemüse, Senf und Roggenbrot', cuisine:'Dänemark', flag:'🇩🇰',
  protein:'huelsen', base:null, time:{a:15,c:60}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:['gluten','sellerie'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:2,
  veg:['Karotten','Sellerie','Lauch','Kartoffeln'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Gelbe Schälerbsen, trocken',q:80,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:40,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:450,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Erbsen in einem Sieb gründlich spülen, mit Brühe und Thymian aufkochen, abschäumen und zugedeckt 30 Minuten köcheln.',
    'Kartoffeln, Karotten und Sellerie würfeln, Lauch in Ringe schneiden, zugeben und weitere 30 Minuten köcheln, bis die Erbsen zerfallen (Slow Cooker: alles zusammen 7 Stunden auf niedriger Stufe).',
    'Suppe kräftig umrühren, damit sie sämig wird, bei Bedarf etwas Wasser nachgießen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer abschmecken und mit Roggenvollkornbrot und Senf servieren.'
  ],
  kidName:'Erbsen-Gemüse-Brei',
  kid:'Kinderportion fein pürieren und dick servieren, Brot in weiche Streifen schneiden. Ohne Salz und Senf.',
  leftover:'Erbsen-Dip · 5 Min. – Kalte, dicke Suppenreste pürieren und als Dip zu Gemüsesticks und Brot reichen.',
  tipp:'Gule ærter schmecken aufgewärmt am nächsten Tag noch sämiger, deshalb lohnt sich gleich die doppelte Menge.'
}
);
