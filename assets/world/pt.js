/* Grün geplant · Portugal · Top 15 */
RECIPES.push(
{
  id:'pt-bacalhau-bras', name:'Bacalhau à Brás · Kabeljau mit Ofen-Kartoffelstiften, Ei und Zwiebeln', cuisine:'Portugal', flag:'🇵🇹',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['ofen'],['pfanne']], method:'Backofen + Pfanne',
  allergens:['fisch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Tomaten','Oliven'], season:[],
  ing:[
    {n:'Kabeljaufilet',q:120,u:'g',c:'fisch'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Oliven, schwarz',q:15,u:'g',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in sehr dünne Stifte schneiden oder grob raspeln, mit der Hälfte des Öls mischen und auf Backpapier 20 bis 25 Minuten knusprig backen, dabei einmal wenden.',
    'Zwiebel in feine Streifen schneiden und mit dem Knoblauch im restlichen Öl 6 Minuten weich dünsten. Kabeljau in Stücke schneiden, zugeben, zugedeckt 5 Minuten garen und zerpflücken.',
    'Kartoffelstifte unterheben, das verquirlte Ei darübergießen und unter Rühren 3 bis 4 Minuten garen, bis das Ei vollständig gestockt ist.',
    'Kinderportion ohne Salz abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Petersilie, Oliven, Salz und Pfeffer vollenden, dazu Tomatenscheiben.'
  ],
  nutri:{p:['Kabeljau','Ei'],f:['Kartoffeln','Zwiebel'],i:['Ei','Kabeljau'],fat:['Olivenöl','Oliven']},
  kidName:'Mini-Brás',
  kid:'Ei vollständig stocken lassen und den Fisch sorgfältig entgräten. Harte Kartoffelstifte klein brechen, ohne Oliven und Salz.',
  leftover:'Brás-Brot · 5 Min. – Reste in der Pfanne erwärmen und auf geröstetes Vollkornbrot geben.',
  extras:[], tipp:'Klassisch werden gewässerter Stockfisch und frittiertes Kartoffelstroh verwendet, frischer Kabeljau und Ofenkartoffeln sind leichter und deutlich salzärmer.'
},
{
  id:'pt-sardinhas-assadas', name:'Sardinhas assadas · Ofen-Sardinen mit Kartoffeln und Paprikasalat', cuisine:'Portugal', flag:'🇵🇹',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Tomaten','Rote Zwiebel','Kartoffeln'], season:[7,8,9],
  ing:[
    {n:'Sardinen, frisch (küchenfertig)',q:180,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen mit Grillfunktion auf 230 °C vorheizen. Kartoffeln in Wasser 20 Minuten weich kochen.',
    'Paprika halbieren und auf dem Blech 12 Minuten rösten, bis die Haut Blasen wirft. Sardinen dünn mit Öl bestreichen, dazulegen und je Seite 4 bis 5 Minuten grillen, bis sie durchgegart sind.',
    'Paprika häuten, in Streifen schneiden und mit Tomatenspalten, Zwiebelringen, Oregano und restlichem Öl mischen.',
    'Kinderportion abnehmen, die Sardinen vollständig entgräten und zerpflücken und die Kartoffeln zerdrücken. Erwachsene mit Zitrone, Salz und Pfeffer servieren.'
  ],
  nutri:{p:['Sardinen'],f:['Kartoffeln','Paprika'],i:['Sardinen'],fat:['Sardinen (Omega-3)','Olivenöl']},
  kidName:'Sardinen-Kartoffel-Mus',
  kid:'Sardinen vollständig von Haut und Gräten befreien, zerpflücken und mit den Kartoffeln zerdrücken. Paprika gehäutet und klein geschnitten, ohne rohe Zwiebel und Salz.',
  leftover:'Sardinen-Aufstrich · 5 Min. – Übrige entgrätete Sardinen mit Joghurt und Zitrone zerdrücken und aufs Brot streichen.',
  extras:[], tipp:'Sardinen liefern viel Omega-3 und Vitamin D und sind meist günstiger als Lachs.'
},
{
  id:'pt-caldeirada', name:'Caldeirada de peixe · Portugiesischer Fischeintopf mit Kartoffeln, Paprika und Tomaten', cuisine:'Portugal', flag:'🇵🇹',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Tomaten','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in Ringe, Paprika in Streifen, Tomaten und Kartoffeln in Scheiben schneiden. Fisch in große Stücke teilen.',
    'Öl in einen breiten Topf geben und Zwiebeln, Tomaten, Paprika und Kartoffeln in Schichten einlegen, Knoblauch, Lorbeer und Paprikapulver dazwischen verteilen. 150 ml Wasser angießen und zugedeckt 20 Minuten leise köcheln.',
    'Fisch obenauf legen und zugedeckt weitere 8 bis 10 Minuten garen, bis die Kartoffeln weich sind und sich der Fisch zerpflücken lässt. Dabei nicht umrühren.',
    'Kinderportion abnehmen, den Fisch auf Gräten prüfen und mit den Kartoffeln zerdrücken. Erwachsene mit gehacktem Koriander, Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Seelachs oder Kabeljau'],f:['Kartoffeln','Paprika','Tomaten'],i:['Fisch'],fat:['Olivenöl']},
  kidName:'Fisch-Kartoffel-Schichten',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Kartoffeln und Gemüse mit etwas Sud weich zerdrücken. Tomatenhaut entfernen, ohne Salz.',
  leftover:'Caldeirada-Suppe · 10 Min. – Reste mit etwas Brühe aufkochen, grob pürieren und mit Vollkornbrot essen.',
  extras:[], tipp:'Zwei Fischsorten machen den Eintopf aromatischer, feste Filets zerfallen dabei nicht.'
},
{
  id:'pt-pescada-arroz-tomate', name:'Filetes de pescada com arroz de tomate · Fischfilet aus der Pfanne mit Tomatenreis', cuisine:'Portugal', flag:'🇵🇹',
  protein:'fisch', base:'reis', time:{a:10,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Erbsen','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Koriander, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch fein hacken, Tomaten würfeln. In der Hälfte des Öls 3 Minuten dünsten, dann den Reis zugeben und kurz mitrühren.',
    'Brühe angießen und zugedeckt 15 Minuten leise köcheln, die letzten 4 Minuten die Erbsen zugeben. Der Reis soll weich und leicht saftig bleiben.',
    'Fisch trocken tupfen, mit Paprikapulver bestäuben und im restlichen Öl je Seite 3 bis 4 Minuten braten, bis er innen weiß ist.',
    'Kinderportion ohne Salz abnehmen, den Fisch auf Gräten prüfen und zerpflücken. Erwachsene mit gehacktem Koriander, Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Seelachs'],f:['Tomaten','Erbsen'],i:['Erbsen','Fisch'],fat:['Olivenöl']},
  kidName:'Tomatenreis mit Fisch',
  kid:'Fisch sorgfältig entgräten und zerpflücken, mit dem saftigen Tomatenreis mischen und die Erbsen leicht zerdrücken. Ohne Salz.',
  leftover:'Reis-Fisch-Taler · 15 Min. – Reis und zerpflückten Fisch mit einem Ei verkneten, zu Talern formen und in der Pfanne durchbraten.',
  extras:['ei'], tipp:'Arroz de tomate wird in Portugal leicht suppig serviert, also lieber einen Schluck mehr Brühe nehmen.'
},
{
  id:'pt-frango-piri-piri', name:'Frango piri-piri · Ofenhähnchen mit Paprikamarinade, Ofenkartoffeln und Salat', cuisine:'Portugal', flag:'🇵🇹',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:35}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Salat','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:150,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Blattsalat',q:50,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 210 °C vorheizen. Kartoffeln in Spalten und Paprika in Streifen schneiden und mit der Hälfte des Öls auf dem Blech mischen.',
    'Paprikapulver, gepressten Knoblauch, Zitronensaft und restliches Öl verrühren und das Hähnchen damit einreiben.',
    'Hähnchen auf das Blech legen und 30 bis 35 Minuten backen, bis die Kartoffeln knusprig sind und der Fleischsaft klar ist.',
    'Kinderportion ohne Chili und Salz abnehmen und das Fleisch fein zerzupfen. Erwachsene Hähnchen mit Chiliflocken und Salz bestreuen und mit Salat und Tomaten servieren.'
  ],
  nutri:{p:['Hähnchen'],f:['Kartoffeln','Paprika','Salat'],i:['Hähnchen'],fat:['Olivenöl']},
  kidName:'Paprika-Hähnchen mild',
  kid:'Hähnchen ohne Chili fein zerzupfen, Kartoffelspalten und Paprika weich gebacken und ohne Salz. Salat für das Kind weglassen oder sehr fein schneiden.',
  leftover:'Piri-piri-Wrap · 5 Min. – Zerzupftes Hähnchen mit Salat in eine Vollkorn-Tortilla rollen.',
  extras:[], tipp:'Die Marinade kann schon morgens ans Fleisch, dann wird es besonders aromatisch.'
},
{
  id:'pt-bifanas', name:'Bifanas · Knoblauch-Schweineschnitzel im Vollkornbrötchen mit Salat', cuisine:'Portugal', flag:'🇵🇹',
  protein:'fleisch', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Salat','Tomaten','Gurke'], season:[6,7,8,9],
  ing:[
    {n:'Schweineschnitzel, mager',q:120,u:'g',c:'fisch'},
    {n:'Vollkornbrötchen',q:1.5,u:'Stk.',c:'brot'},
    {n:'Blattsalat',q:40,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Schnitzel dünn klopfen und mit gepresstem Knoblauch, Zitronensaft, Paprikapulver, Lorbeer und der Hälfte des Öls 5 Minuten marinieren.',
    'Lorbeer entfernen. Fleisch im restlichen Öl in der heißen Pfanne je Seite 2 bis 3 Minuten braten, bis es durchgegart ist, dann die Marinade mit 3 EL Wasser in der Pfanne kurz aufkochen.',
    'Brötchen aufschneiden und kurz in der Pfanne rösten, Tomate und Gurke in Scheiben schneiden.',
    'Kinderportion ohne Salz abnehmen, das Fleisch sehr fein schneiden und die Gurke in Stifte schneiden. Erwachsene Fleisch mit Bratensaft, Salz, Salat und Tomate ins Brötchen legen.'
  ],
  nutri:{p:['Schweinefleisch','Vollkornbrötchen'],f:['Vollkornbrötchen','Salat','Gurke'],i:['Schweinefleisch'],fat:['Olivenöl']},
  kidName:'Mini-Bifana',
  kid:'Fleisch sehr fein schneiden und mit etwas Bratensaft befeuchten, Brötchen ohne harte Kruste in Streifen. Geschälte Gurke in Stiften und Tomate klein geschnitten dazu, ohne Salz.',
  leftover:'Bifana-Salat · 5 Min. – Übriges Fleisch in Streifen schneiden und kalt über Salat mit Tomaten geben.',
  extras:[], tipp:'Klassisch wird das Fleisch in Weißwein eingelegt, Zitronensaft macht es ebenso zart und alkoholfrei.'
},
{
  id:'pt-jardineira', name:'Jardineira · Rindfleisch-Schmortopf mit Erbsen, Karotten und Kartoffeln', cuisine:'Portugal', flag:'🇵🇹',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:70}, devices:[['topf','slowcooker']], method:'Ein Topf oder Slowcooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Erbsen','Kartoffeln','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Rindfleisch zum Schmoren, mager',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch in 2 cm große Würfel schneiden und in Öl portionsweise 5 Minuten kräftig anbraten. Gewürfelte Zwiebel und Paprikapulver 2 Minuten mitrösten.',
    'Passierte Tomaten, Brühe und Lorbeer zugeben und zugedeckt 45 Minuten leise schmoren.',
    'Kartoffeln und Karotten würfeln, zugeben und 20 Minuten weiterschmoren, die letzten 5 Minuten die Erbsen zugeben. Im Slowcooker alles außer den Erbsen 6 Stunden auf niedriger Stufe garen.',
    'Lorbeer entfernen. Kinderportion ohne Salz abnehmen und das Fleisch sehr fein zerzupfen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  nutri:{p:['Rindfleisch','Erbsen'],f:['Kartoffeln','Karotten','Erbsen'],i:['Rindfleisch','Erbsen'],fat:['Olivenöl']},
  kidName:'Mini-Jardineira',
  kid:'Rindfleisch lange weich schmoren und fein zerzupfen, Kartoffeln, Karotten und Erbsen mit Soße zerdrücken. Ohne Salz.',
  leftover:'Empadão-Auflauf · 20 Min. – Reste in eine Form geben, mit Kartoffelpüree bedecken und bei 200 °C überbacken.',
  extras:[], tipp:'Gulasch aus der Rinderschulter wird beim langen Schmoren zart und bleibt mager.'
},
{
  id:'pt-arroz-de-pato', name:'Arroz de pato · Ofenreis mit zartem Entenfleisch, Karotten und Erbsen', cuisine:'Portugal', flag:'🇵🇹',
  protein:'gefluegel', base:'reis', time:{a:15,c:50}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Zwiebel','Erbsen'], season:[],
  ing:[
    {n:'Entenbrustfilet ohne Haut',q:120,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:70,u:'g',c:'tk'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Orange',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:0.5,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, geräuchert',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Entenbrust mit Brühe, halber Zwiebel, der Karotte im Stück und Lorbeer aufkochen und zugedeckt 20 Minuten leise köcheln, bis das Fleisch durchgegart ist. Fleisch und Karotte herausnehmen, das Fleisch fein zerzupfen.',
    'Restliche Zwiebel fein würfeln und in Öl mit Paprikapulver 3 Minuten andünsten, Reis kurz mitrühren. 160 ml der Entenbrühe angießen und zugedeckt 12 Minuten köcheln.',
    'Ofen auf 200 °C vorheizen. Reis mit Entenfleisch, gewürfelter Karotte und Erbsen in eine Form schichten, mit Orangenscheiben belegen und 15 Minuten backen, bis die Oberfläche leicht knusprig ist.',
    'Kinderportion ohne Salz abnehmen und das Fleisch sehr fein schneiden. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Ente'],f:['Karotten','Erbsen'],i:['Ente','Erbsen'],fat:['Olivenöl']},
  kidName:'Enten-Reis mild',
  kid:'Entenfleisch sehr fein zerzupfen und unter den weichen Reis mischen, Karotten und Erbsen zerdrücken. Ohne Salz und ohne die knusprige Kruste.',
  leftover:'Entenreis-Pfanne · 8 Min. – Reste mit Gemüse und einem Ei in der Pfanne durchbraten.',
  extras:[], tipp:'Klassisch gibt Chouriço den Rauchgeschmack, eine Prise geräuchertes Paprikapulver ersetzt die fette Wurst.'
},
{
  id:'pt-espetada', name:'Espetada madeirense · Rindfleischspieße mit Lorbeer, Paprika und Polenta', cuisine:'Portugal', flag:'🇵🇹',
  protein:'fleisch', base:'polenta', time:{a:12,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Rote Zwiebel','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Rinderhüftsteak',q:120,u:'g',c:'fisch'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:1,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch in 3 cm große Würfel schneiden und mit gepresstem Knoblauch und der Hälfte des Öls mischen. Paprika und Zwiebel in Stücke schneiden, Lorbeerblätter in Stücke brechen.',
    'Fleisch, Lorbeer und Gemüse abwechselnd auf Spieße stecken und in der heißen Pfanne mit restlichem Öl rundum 8 bis 10 Minuten braten, die Kinderspieße vollständig durchgaren.',
    'Polenta in 280 ml kochendes Wasser einrühren und bei kleiner Hitze 5 Minuten unter Rühren quellen lassen. Tomate in Spalten schneiden.',
    'Kinderportion ohne Salz abnehmen, Fleisch vom Spieß nehmen, Lorbeer entfernen und das Fleisch sehr fein schneiden. Erwachsene mit grobem Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Rindfleisch'],f:['Paprika','Polenta'],i:['Rindfleisch'],fat:['Olivenöl']},
  kidName:'Rindfleisch-Polenta mild',
  kid:'Fleisch vollständig durchgaren, sehr fein schneiden und unter die weiche Polenta rühren. Paprika weich gebraten und klein geschnitten, ohne Lorbeer und Salz.',
  leftover:'Polenta-Würfel · 12 Min. – Fest gewordene Polenta in Würfel schneiden und in wenig Öl goldbraun braten wie Milho frito.',
  extras:['kichererbsen'], tipp:'Auf Madeira stecken die Spieße auf Lorbeerzweigen, ein paar Blätter am Spieß geben das gleiche Aroma.'
},
{
  id:'pt-caldo-verde', name:'Caldo verde · Grünkohl-Kartoffel-Suppe mit weißen Bohnen und Vollkornbrot', cuisine:'Portugal', flag:'🇵🇹',
  protein:'huelsen', base:'kartoffeln', time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Grünkohl','Kartoffeln','Zwiebel'], season:[11,12,1,2],
  ing:[
    {n:'Kartoffeln, mehlig',q:200,u:'g',c:'gemuese'},
    {n:'Grünkohl oder Spinat',q:100,u:'g',c:'gemuese'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, geräuchert',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch hacken, Kartoffeln würfeln. Alles mit der Brühe aufkochen und zugedeckt 15 Minuten weich kochen.',
    'Die Hälfte der abgespülten Bohnen zugeben und alles fein pürieren.',
    'Grünkohl in sehr feine Streifen schneiden, mit den restlichen Bohnen in die Suppe geben und 6 bis 8 Minuten köcheln, bis der Kohl weich ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer, einem Faden Olivenöl und geräuchertem Paprikapulver würzen, dazu Vollkornbrot.'
  ],
  nutri:{p:['Weiße Bohnen','Vollkornbrot'],f:['Grünkohl','Weiße Bohnen','Vollkornbrot'],i:['Grünkohl','Weiße Bohnen'],fat:['Olivenöl']},
  kidName:'Grüne Kartoffelsuppe',
  kid:'Grünkohl sehr weich kochen und für das Kind mitpürieren, ganze Bohnen zerdrücken. Die Suppe dick mit Brotstreifen und ohne Salz anbieten.',
  leftover:'Grünkohl-Kartoffel-Pfanne · 10 Min. – Reste stark einkochen lassen und mit einem vollständig durchgebratenen Spiegelei servieren.',
  extras:['ei','haehnchen'], tipp:'Klassisch schwimmen Scheiben von Chouriço in der Suppe, geräuchertes Paprikapulver gibt das Aroma ohne Wurst.'
},
{
  id:'pt-ervilhas-com-ovos', name:'Ervilhas com ovos · Erbsen-Tomaten-Schmortopf mit pochierten Eiern', cuisine:'Portugal', flag:'🇵🇹',
  protein:'ei', base:null, time:{a:7,c:17}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Erbsen','Tomaten','Zwiebel','Karotten','Kräuter'], season:[],
  ing:[
    {n:'Erbsen, TK',q:150,u:'g',c:'tk'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotte fein würfeln und in Öl 4 Minuten dünsten, Paprikapulver kurz mitrösten.',
    'Erbsen und Tomaten zugeben und zugedeckt 5 Minuten köcheln.',
    'Zwei Mulden in das Gemüse drücken, die Eier hineingleiten lassen und zugedeckt bei kleiner Hitze 7 bis 8 Minuten garen, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ohne Salz abnehmen, das Ei klein schneiden und die Erbsen zerdrücken. Erwachsene mit gehacktem Koriander, Salz und Pfeffer würzen, dazu Vollkornbrot.'
  ],
  nutri:{p:['Eier','Erbsen'],f:['Erbsen','Vollkornbrot'],i:['Erbsen','Eier'],fat:['Eier','Olivenöl']},
  kidName:'Erbsen mit Ei',
  kid:'Eigelb vollständig durchgaren, das Ei klein schneiden und die Erbsen mit der Gabel zerdrücken. Brot in weichen Streifen, ohne Salz.',
  leftover:'Erbsen-Ei-Brot · 5 Min. – Reste zerdrücken und warm auf Vollkornbrot streichen.',
  extras:['feta'], tipp:'TK-Erbsen sind schnell gegart, schmecken süßlich und liefern viel pflanzliches Eiweiß.'
},
{
  id:'pt-favas-guisadas', name:'Favas guisadas · Geschmorte dicke Bohnen mit Kartoffeln und Koriander', cuisine:'Portugal', flag:'🇵🇹',
  protein:'huelsen', base:'kartoffeln', time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Tomaten','Kräuter'], season:[],
  ing:[
    {n:'Dicke Bohnen, TK',q:200,u:'g',c:'tk'},
    {n:'Kartoffeln, festkochend',q:180,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch fein hacken und in Öl 4 Minuten dünsten. Tomate würfeln, mit Paprikapulver zugeben und 2 Minuten einkochen.',
    'Kartoffeln in kleine Würfel schneiden, mit der Brühe zugeben und zugedeckt 10 Minuten köcheln.',
    'Bohnen zugeben und weitere 10 Minuten garen, bis Bohnen und Kartoffeln weich sind und die Soße leicht bindet. Die Hälfte des gehackten Korianders unterrühren.',
    'Kinderportion ohne Salz abnehmen, die Bohnen aus der Haut drücken und zerdrücken. Erwachsene mit restlichem Koriander, Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Dicke Bohnen'],f:['Dicke Bohnen','Kartoffeln'],i:['Dicke Bohnen'],fat:['Olivenöl']},
  kidName:'Bohnen-Kartoffel-Mus',
  kid:'Dicke Bohnen aus der zähen Haut drücken und mit den Kartoffeln zu Mus zerdrücken. Ohne Salz, Koriander sehr fein gehackt oder weglassen.',
  leftover:'Favas-Aufstrich · 5 Min. – Reste fein zerdrücken und mit etwas Zitrone auf Vollkornbrot streichen.',
  extras:['ei','feta'], tipp:'Gehäutete Bohnen sind zarter und schmecken Kindern meist besser.'
},
{
  id:'pt-acorda', name:'Açorda alentejana · Brot-Knoblauch-Suppe mit Koriander, Spinat und Ei', cuisine:'Portugal', flag:'🇵🇹',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','ei'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Babyspinat','Erbsen','Kräuter'], season:[3,4,5,6],
  ing:[
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Babyspinat',q:80,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Koriander, frisch',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Knoblauch und die Hälfte des Korianders fein hacken und im Topf in Öl 1 Minute andünsten.',
    'Brühe angießen und aufkochen, Erbsen und Spinat darin 3 Minuten garen.',
    'Eier einzeln in die leicht siedende Brühe gleiten lassen und 7 bis 8 Minuten pochieren, bis Eiweiß und Eigelb fest sind.',
    'Brot würfeln und in tiefe Teller verteilen, Suppe und Eier darübergeben.',
    'Kinderportion ohne Salz abnehmen, das Ei klein schneiden und das Brot weich ziehen lassen. Erwachsene mit restlichem Koriander, Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Eier','Vollkornbrot'],f:['Vollkornbrot','Spinat','Erbsen'],i:['Eier','Spinat'],fat:['Olivenöl','Eier']},
  kidName:'Brotsuppe mit Ei',
  kid:'Ei vollständig durchgaren und klein schneiden, das Brot in der Brühe weich ziehen lassen und mit dem Spinat zu Brei zerdrücken. Ohne Salz.',
  leftover:'Açorda-Pfanne · 8 Min. – Eingeweichte Brotreste mit einem Ei in der Pfanne vollständig durchbraten.',
  extras:['kichererbsen'], tipp:'Altes Brot ist hier ideal, frisches Brot vorher leicht rösten.'
},
{
  id:'pt-arroz-de-feijao', name:'Arroz de feijão · Bohnenreis mit Tomate, Wirsing und Koriander', cuisine:'Portugal', flag:'🇵🇹',
  protein:'huelsen', base:'reis', time:{a:10,c:35}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Wirsing','Karotten','Zwiebel','Kräuter'], season:[11,12,1,2],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:140,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Wirsing',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Koriander, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotte würfeln und in Öl 4 Minuten dünsten. Reis zugeben und kurz mitrühren.',
    'Tomaten und Brühe zugeben und zugedeckt 25 Minuten köcheln.',
    'Wirsing in feine Streifen schneiden, mit den abgespülten Bohnen zugeben und weitere 10 Minuten garen, bis der Reis weich und noch leicht saftig ist.',
    'Kinderportion ohne Salz abnehmen und die Bohnen zerdrücken. Erwachsene mit gehacktem Koriander, Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Kidneybohnen','Vollkornreis'],f:['Kidneybohnen','Vollkornreis','Wirsing'],i:['Kidneybohnen'],fat:['Olivenöl']},
  kidName:'Bohnenreis mild',
  kid:'Bohnen gründlich zerdrücken, Wirsing sehr weich garen und fein schneiden und alles mit dem saftigen Reis mischen. Ohne Salz.',
  leftover:'Gefüllte Paprika · 25 Min. – Reste in halbierte Paprika füllen und bei 200 °C im Ofen backen.',
  extras:['ei','feta'], tipp:'In Portugal ist Bohnenreis die Beilage zu Fisch, mit Kohl und mehr Bohnen wird er zum Hauptgericht.'
},
{
  id:'pt-feijao-frade', name:'Salada de feijão-frade · Lauwarmer Augenbohnensalat mit Ei, Paprika und Vollkornbrot', cuisine:'Portugal', flag:'🇵🇹',
  protein:'huelsen', base:null, time:{a:10,c:10}, devices:[['topf']], method:'Ein Topf',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Tomaten','Rote Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Augenbohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ei 10 Minuten hart kochen. Bohnen abspülen und die letzten 3 Minuten mit ins Kochwasser geben, dann alles abgießen.',
    'Paprika und Tomate klein würfeln, Zwiebel sehr fein hacken, Petersilie hacken. Ei kalt abschrecken, schälen und würfeln.',
    'Die warmen Bohnen mit Paprika, Tomate und Ei mischen.',
    'Kinderportion ohne Zwiebel, Essig und Salz abnehmen, mit etwas Öl mischen und die Bohnen zerdrücken. Erwachsene mit Zwiebel, Petersilie, Öl, Essig, Salz und Pfeffer anmachen, dazu Vollkornbrot.'
  ],
  nutri:{p:['Augenbohnen','Ei'],f:['Augenbohnen','Vollkornbrot','Paprika'],i:['Augenbohnen','Ei'],fat:['Olivenöl']},
  kidName:'Bohnen-Ei-Salat mild',
  kid:'Bohnen zerdrücken, das hart gekochte Ei klein schneiden und Paprika und Tomate fein würfeln. Ohne rohe Zwiebel, Essig und Salz, dafür mit etwas Öl.',
  leftover:'Bohnensalat-Brot · 5 Min. – Reste grob zerdrücken und auf Vollkornbrot geben.',
  extras:['feta','haehnchen'], tipp:'Klassisch kommt Thunfisch aus der Dose dazu, das passt gut für die Erwachsenen.'
}
);
