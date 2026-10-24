/* Grün geplant · Schweden · Top 15 */
RECIPES.push(
{
  id:'se-kottbullar', name:'Köttbullar · Ofen-Fleischbällchen mit Kartoffelstampf, Erbsen und Preiselbeeren', cuisine:'Schweden', flag:'🇸🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:20}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Erbsen','Zwiebel'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Erbsen, TK',q:100,u:'g',c:'tk'},
    {n:'Preiselbeeren (Glas)',q:1,u:'EL',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Piment, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Zwiebel sehr fein reiben und mit Hackfleisch, Haferflocken, Ei und Piment zu einer glatten Masse kneten.',
    'Walnussgroße Bällchen formen, auf ein mit Backpapier belegtes Blech setzen, dünn mit Öl bepinseln und 15 bis 18 Minuten backen, bis sie innen durchgegart sind.',
    'Inzwischen Kartoffeln schälen, würfeln und in 15 Minuten weich kochen, dann mit warmer Milch stampfen. Erbsen in wenig Wasser 4 Minuten garen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und einem Löffel Preiselbeeren servieren.'
  ],
  kidName:'Mini-Köttbullar mit Stampf',
  kid:'Bällchen klein formen oder halbieren, damit sie sicher durchgaren und sich gut greifen lassen, Erbsen leicht zerdrücken. Ohne Salz, Preiselbeeren nur als kleiner Klecks.',
  leftover:'Köttbullar-Wrap · 8 Min. – Übrige Bällchen erhitzen und mit Gurke und Joghurt in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Die doppelte Menge Bällchen backen und die Hälfte einfrieren, dann ist das nächste Essen schnell fertig.'
},
{
  id:'se-kaldolmar', name:'Kåldolmar · Kohlrouladen mit Hackfleisch und Vollkornreis aus dem Ofen', cuisine:'Schweden', flag:'🇸🇪',
  protein:'fleisch', base:'reis', time:{a:30,c:40}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Karotten','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Weißkohl',q:200,u:'g',c:'gemuese'},
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:55,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:120,u:'ml',c:'vorrat'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Preiselbeeren (Glas)',q:1,u:'EL',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Piment, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in Wasser 25 Minuten garen und abkühlen lassen. Kohlkopf am Strunk einschneiden, 8 Minuten in kochendem Wasser blanchieren, die weichen Blätter ablösen und die dicke Mittelrippe flach schneiden.',
    'Hackfleisch mit Reis, fein geriebener Zwiebel und Piment mischen, je einen Löffel Füllung auf ein Blatt setzen und zu Päckchen rollen.',
    'Rouladen mit der Naht nach unten in eine geölte Auflaufform legen, Karottenscheiben dazwischen verteilen, Brühe angießen und bei 200 °C 40 Minuten backen, bis die Füllung durchgegart ist. Zwischendurch einmal mit Brühe begießen.',
    'Bratfond mit saurer Sahne verrühren. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz, Pfeffer und Preiselbeeren servieren.'
  ],
  kidName:'Kohlpäckchen',
  kid:'Eine Roulade in kleine Stücke schneiden, harte Blattrippen entfernen und prüfen, dass die Füllung ganz durchgegart ist. Ohne Salz servieren.',
  leftover:'Kohlrouladen-Ragout · 10 Min. – Reste klein schneiden und mit gehackten Tomaten in der Pfanne zu einem Ragout erhitzen.',
  tipp:'Den Kohlkopf am Vortag einfrieren und auftauen lassen, dann lösen sich die Blätter auch ohne Blanchieren.'
},
{
  id:'se-kalops', name:'Kalops · schwedischer Rindfleischtopf mit Piment, Karotten und Kartoffeln', cuisine:'Schweden', flag:'🇸🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:90}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Karotten','Kartoffeln','Zwiebel','Rote Bete'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Rindergulasch, mager',q:120,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rote Bete, vorgegart',q:60,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Lorbeerblatt',q:1,u:'Stk.',c:'gewuerz',p:true},
    {n:'Pimentkörner',q:3,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch trocken tupfen und portionsweise in Öl rundum kräftig anbraten. Zwiebel in Spalten schneiden und kurz mitbraten.',
    'Lorbeer, Piment und Brühe zugeben und zugedeckt bei kleiner Hitze 60 Minuten schmoren (Slow Cooker: 6 Stunden auf niedriger Stufe).',
    'Karotten in dicke Scheiben schneiden, Kartoffeln vierteln und beides in den Topf geben. Weitere 30 Minuten schmoren, bis Fleisch und Gemüse sehr weich sind.',
    'Lorbeer und Pimentkörner herausnehmen. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz und Pfeffer abschmecken und mit Rote-Bete-Scheiben servieren.'
  ],
  kidName:'Weicher Rindertopf',
  kid:'Fleisch in feine Fasern zupfen, Kartoffeln und Karotten mit etwas Sauce zerdrücken. Pimentkörner vorher sicher entfernen, ohne Salz servieren.',
  leftover:'Kalops-Pfanne · 10 Min. – Reste grob zerdrücken und in der Pfanne mit einem vollständig durchgebratenen Spiegelei servieren.',
  tipp:'Kalops schmeckt am zweiten Tag noch besser, deshalb lohnt es sich, gleich die doppelte Menge zu schmoren.'
},
{
  id:'se-lindstrom', name:'Biff à la Lindström · Hackfleischküchlein mit Roter Bete, Kartoffeln und Gurkensalat', cuisine:'Schweden', flag:'🇸🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Bete','Kartoffeln','Gurke','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Rote Bete, vorgegart',q:60,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Kapern',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in Stücke schneiden und in 15 bis 18 Minuten weich kochen.',
    'Rote Bete und Zwiebel sehr fein würfeln, mit Hackfleisch und Ei verkneten und flache Küchlein formen.',
    'Küchlein in Öl bei mittlerer Hitze von jeder Seite 5 bis 6 Minuten braten, bis sie innen nicht mehr rosa sind.',
    'Gurke in dünne Scheiben schneiden und mit Joghurt und Dill mischen. Kinderportion abnehmen, Erwachsene mit gehackten Kapern, Salz und Pfeffer servieren.'
  ],
  kidName:'Rote-Bete-Küchlein',
  kid:'Ein Küchlein in Streifen schneiden und prüfen, dass es ganz durchgegart ist, Kartoffeln mit der Gabel zerdrücken. Ohne Kapern und Salz servieren.',
  leftover:'Lindström-Brot · 5 Min. – Kalte Küchlein in Scheiben mit Gurke auf Vollkornbrot legen.',
  tipp:'Rote Bete färbt stark, beim Kneten deshalb am besten Einmalhandschuhe tragen.'
},
{
  id:'se-flygande-jakob', name:'Flygande Jacob · Hähnchen-Bananen-Auflauf mit Tomaten-Curry-Sauce und Vollkornreis', cuisine:'Schweden', flag:'🇸🇪',
  protein:'gefluegel', base:'reis', time:{a:15,c:25}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['milch','nuesse'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Tomaten','Banane','Salat'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Banane',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Römersalat',q:50,u:'g',c:'gemuese'},
    {n:'Erdnüsse, ungesalzen',q:10,u:'g',c:'vorrat'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen und in etwa 25 Minuten garen. Ofen auf 200 °C vorheizen.',
    'Hähnchen in Streifen schneiden, in Öl 3 Minuten anbraten und mit Paprikastreifen in eine Auflaufform geben.',
    'Passierte Tomaten mit saurer Sahne und Currypulver verrühren, über das Fleisch gießen und Bananenscheiben darauf verteilen. 20 Minuten backen, bis das Hähnchen durchgegart ist.',
    'Kinderportion ohne Nüsse abnehmen. Erwachsenen gehackte Erdnüsse darüberstreuen, mit Salz und etwas Chili abschmecken und mit Reis und Salat servieren.'
  ],
  kidName:'Hähnchen-Bananen-Reis',
  kid:'Hähnchen klein schneiden und mit Sauce und Reis mischen, die weich gebackene Banane mit der Gabel zerdrücken. Ohne Erdnüsse, Salz und Chili.',
  leftover:'Hähnchen-Reis-Pfanne · 10 Min. – Reste mit Erbsen in der Pfanne durchbraten, bis alles heiß ist.',
  tipp:'Banane und Curry im Auflauf klingen ungewohnt, in Schweden ist die süß-herzhafte Kombination ein beliebter Familienklassiker.'
},
{
  id:'se-laxpudding', name:'Laxpudding · Lachs-Kartoffel-Auflauf mit Lauch und Dill', cuisine:'Schweden', flag:'🇸🇪',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:45}, devices:[['ofen']], method:'Backofen, Auflaufform',
  allergens:['fisch','ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Lauch','Erbsen','Zitrone'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Lachsfilet',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 190 °C vorheizen. Kartoffeln in dünne Scheiben hobeln, Lauch in feine Ringe schneiden, Lachs würfeln und auf Gräten prüfen.',
    'Eine Auflaufform ölen und Kartoffeln, Lauch, Lachs und Dill schichtweise einfüllen, mit einer Kartoffelschicht abschließen.',
    'Eier mit Milch und Muskat verquirlen, darübergießen und 40 bis 45 Minuten backen, bis die Kartoffeln weich sind und die Eiermilch vollständig gestockt ist.',
    'Erbsen in wenig Wasser 4 Minuten garen. Kinderportion ohne Salz abnehmen, Erwachsene mit Zitrone, Salz und Pfeffer servieren.'
  ],
  kidName:'Lachs-Kartoffel-Würfel',
  kid:'Ein Stück aus der Mitte nehmen, wo Ei und Fisch sicher durchgegart sind, nochmals auf Gräten prüfen und klein würfeln. Ohne Salz und Zitrone servieren.',
  leftover:'Laxpudding-Taler · 10 Min. – Reste in Scheiben schneiden und in der Pfanne von beiden Seiten goldbraun anbraten.',
  tipp:'Mit TK-Lachs funktioniert es genauso, dann über Nacht im Kühlschrank auftauen lassen.'
},
{
  id:'se-torsk-aggsas', name:'Kokt torsk med äggsås · Kabeljau mit Eiersauce, Dillkartoffeln und Karotten', cuisine:'Schweden', flag:'🇸🇪',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch','ei','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Karotten','Zitrone'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Lorbeerblatt',q:1,u:'Stk.',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln halbieren und mit Karottenstücken in 15 Minuten weich kochen. Ei gleichzeitig 10 Minuten hart kochen, abschrecken und fein hacken.',
    'Fisch in leicht siedendem Wasser mit Lorbeerblatt 7 bis 8 Minuten ziehen lassen, bis er sich in Lamellen teilen lässt.',
    'Milch mit Speisestärke glatt rühren, unter Rühren 2 Minuten köcheln, dann gehacktes Ei und Dill unterheben.',
    'Kinderportion ohne Salz abnehmen. Sauce für die Erwachsenen mit Salz, Muskat und Zitrone abschmecken.'
  ],
  kidName:'Fisch mit Eiersauce',
  kid:'Fisch sorgfältig entgräten und zerpflücken, Kartoffeln und Karotten mit etwas Sauce zerdrücken. Das Ei ist hart gekocht und darf mit, Salz erst danach.',
  leftover:'Fischsalat-Brot · 5 Min. – Kalten Fisch mit restlicher Eiersauce und Gurke auf Vollkornbrot verteilen.',
  tipp:'Seelachs ist eine günstige Alternative zu Kabeljau, beim Kauf auf ein Siegel für nachhaltigen Fang achten.'
},
{
  id:'se-fiskgratang', name:'Fiskgratäng · Seelachs-Gratin mit Spinat und Kartoffelstampf-Rand', cuisine:'Schweden', flag:'🇸🇪',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:25}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['fisch','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Spinat','Zitrone'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Blattspinat, TK',q:120,u:'g',c:'tk'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln schälen, würfeln und in 15 Minuten weich kochen, dann mit warmer Milch und Muskat zu einem festen Stampf verarbeiten.',
    'Spinat auftauen lassen, gut ausdrücken und in eine Auflaufform geben. Fisch in Stücke schneiden, auf den Spinat legen und mit saurer Sahne, Dill und etwas Zitronensaft bestreichen.',
    'Stampf als Rand rund um den Fisch verteilen, mit Käse bestreuen und 20 bis 25 Minuten backen, bis der Fisch durchgegart und der Rand goldbraun ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Zitrone nachwürzen.'
  ],
  kidName:'Fisch-Spinat-Stampf',
  kid:'Fisch auf Gräten prüfen, zerpflücken und mit Stampf und Spinat vermischen, damit alles weich und saftig ist. Ohne Salz servieren.',
  leftover:'Fisch-Kartoffel-Taler · 10 Min. – Reste vermengen, zu Talern formen und in der Pfanne goldbraun braten.',
  tipp:'Den Stampf mit einem Spritzbeutel aufspritzen, so wird der Rand besonders knusprig.'
},
{
  id:'se-stekt-stromming', name:'Stekt strömming · gebratene Heringsfilets mit Kartoffelstampf, Erbsen und Preiselbeeren', cuisine:'Schweden', flag:'🇸🇪',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','gluten','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Erbsen','Zitrone'], season:[],
  ing:[
    {n:'Heringsfilets, frisch',q:140,u:'g',c:'fisch'},
    {n:'Roggenvollkornmehl',q:15,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Erbsen, TK',q:100,u:'g',c:'tk'},
    {n:'Preiselbeeren (Glas)',q:1,u:'EL',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in 12 bis 14 Minuten weich kochen, dann mit warmer Milch stampfen. Erbsen in wenig Wasser 4 Minuten garen.',
    'Heringsfilets trocken tupfen und dünn in Roggenmehl wenden.',
    'In Öl bei mittlerer Hitze von jeder Seite 3 Minuten braten, bis der Fisch innen nicht mehr glasig ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer, Zitrone und Preiselbeeren servieren.'
  ],
  kidName:'Hering mit Stampf',
  kid:'Fisch sorgfältig auf feine Gräten prüfen, zerpflücken und unter den Stampf mischen, Erbsen leicht zerdrücken. Ohne Salz, Preiselbeeren nur als kleiner Klecks.',
  leftover:'Hering-Salat · 6 Min. – Kalte Filets zerpflücken und mit Kartoffelresten, Joghurt und Gurke zu einem Salat mischen.',
  tipp:'Hering liefert viel Omega-3 und ist meist günstiger als Lachs, an der Fischtheke nach entgräteten Filets fragen.'
},
{
  id:'se-pyttipanna', name:'Pytt i panna · Kartoffel-Gemüse-Würfelpfanne mit Spiegelei und Roter Bete', cuisine:'Schweden', flag:'🇸🇪',
  protein:'ei', base:'kartoffeln', time:{a:8,c:16}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Rote Paprika','Pilze','Rote Bete'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Rote Bete, vorgegart',q:60,u:'g',c:'gemuese'},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln ungeschält in 1 cm große Würfel schneiden, in Öl geben und zugedeckt bei mittlerer Hitze 10 Minuten braten, dabei zweimal wenden.',
    'Zwiebel, Paprika und Champignons würfeln, zugeben und offen 3 Minuten weiterbraten, bis die Kartoffeln weich und gebräunt sind.',
    'Mulden in die Pfanne drücken, Eier hineinschlagen und zugedeckt 3 bis 4 Minuten braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer, Paprikapulver, Schnittlauch und Rote-Bete-Würfeln servieren.'
  ],
  kidName:'Mini-Pytt',
  kid:'Kartoffeln und Gemüse weich braten und klein schneiden, das Ei vollständig durchgaren und in Streifen anbieten. Ohne Salz, Rote Bete in kleinen Würfeln.',
  leftover:'Pytt-Omelett · 8 Min. – Reste in der Pfanne erhitzen, verquirlte Eier darübergießen und vollständig stocken lassen.',
  tipp:'Mit gekochten Kartoffeln vom Vortag ist die Pfanne in 12 Minuten fertig.'
},
{
  id:'se-artsoppa', name:'Ärtsoppa · gelbe Erbsensuppe mit Majoran und Vollkornknäcke', cuisine:'Schweden', flag:'🇸🇪',
  protein:'huelsen', base:null, time:{a:15,c:60}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:2,
  veg:['Karotten','Lauch','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Gelbe Schälerbsen, trocken',q:80,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Vollkorn-Knäckebrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Majoran, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Erbsen in einem Sieb gründlich spülen. Zwiebel und Karotten würfeln und in Öl 3 Minuten andünsten.',
    'Erbsen, Lauchringe, Brühe, Majoran und Thymian zugeben und zugedeckt 50 bis 60 Minuten köcheln, bis die Erbsen zerfallen (Slow Cooker: 7 Stunden auf niedriger Stufe). Bei Bedarf Wasser nachgießen.',
    'Einen Teil der Suppe grob pürieren, damit sie sämig wird.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und einem Klecks Senf abschmecken und mit Vollkornknäcke servieren.'
  ],
  kidName:'Erbsenbrei',
  kid:'Kinderportion vollständig pürieren und dick wie einen Brei servieren, Knäckebrot durch weiches Vollkornbrot ersetzen. Ohne Salz und Senf.',
  leftover:'Erbsen-Aufstrich · 5 Min. – Kalte, dick gewordene Suppe pürieren und als Aufstrich auf Vollkornbrot streichen.',
  tipp:'In Schweden kommt Erbsensuppe traditionell am Donnerstag auf den Tisch.'
},
{
  id:'se-raggmunk', name:'Raggmunk · Kartoffelpuffer aus der Pfanne mit Hüttenkäse, Gurke und Preiselbeeren', cuisine:'Schweden', flag:'🇸🇪',
  protein:'ei', base:'kartoffeln', time:{a:15,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Gurke'], season:[],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Dinkel-Vollkornmehl',q:25,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Hüttenkäse',q:80,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Preiselbeeren (Glas)',q:1,u:'EL',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl, Ei und Milch zu einem glatten Teig verrühren und 10 Minuten quellen lassen.',
    'Kartoffeln schälen, fein reiben, kräftig ausdrücken und sofort unter den Teig mischen.',
    'Öl in einer beschichteten Pfanne erhitzen, je 2 EL Teig flach ausstreichen und bei mittlerer Hitze von jeder Seite 3 bis 4 Minuten goldbraun und durchgegart braten.',
    'Gurke in Scheiben schneiden. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer würzen und mit Hüttenkäse, Gurke und Preiselbeeren servieren.'
  ],
  kidName:'Kleine Kartoffelpuffer',
  kid:'Puffer dünn und klein ausbacken, damit sie innen durchgegart sind, und in Streifen schneiden. Hüttenkäse zum Dippen, ohne Salz, Preiselbeeren nur als kleiner Klecks.',
  leftover:'Puffer-Toast · 6 Min. – Übrige Puffer im Toaster oder Ofen aufknuspern und mit Gurke und Hüttenkäse belegen.',
  tipp:'Die geriebenen Kartoffeln in einem sauberen Küchentuch auswringen, dann werden die Puffer mit wenig Öl knusprig.'
},
{
  id:'se-vasterbottenpaj', name:'Västerbottenpaj · würzige Käsequiche mit Vollkornboden, Lauch und Brokkoli', cuisine:'Schweden', flag:'🇸🇪',
  protein:'milch', base:null, time:{a:20,c:35}, devices:[['ofen']], method:'Backofen, Tarteform',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Lauch','Brokkoli','Salat'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Magerquark',q:30,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:30,u:'g',c:'kuehl'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Brokkoli',q:80,u:'g',c:'gemuese'},
    {n:'Römersalat',q:50,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Mehl mit Quark, Öl und 1 bis 2 EL Wasser zu einem glatten Teig verkneten, dünn ausrollen und in eine Tarteform drücken.',
    'Boden mit einer Gabel einstechen und 10 Minuten vorbacken. Lauch in feine Ringe schneiden, Brokkoli in kleine Röschen teilen und beides 3 Minuten dünsten.',
    'Eier mit Milch, geriebenem Käse und Muskat verquirlen. Gemüse auf dem Boden verteilen, Eiermilch darübergießen und 25 Minuten backen, bis die Füllung fest ist.',
    'Kinderportion abnehmen, Erwachsene mit Pfeffer würzen und mit Salat servieren.'
  ],
  kidName:'Käsequiche-Streifen',
  kid:'Quiche gut abkühlen lassen und in schmale Streifen schneiden, die Füllung muss vollständig gestockt sein. Salat durch weich gedünstete Brokkoliröschen ersetzen, kein zusätzliches Salz.',
  leftover:'Quiche-Salat · 5 Min. – Übrige Stücke würfeln, kurz erwärmen und über einen Blattsalat mit Tomaten geben.',
  tipp:'Västerbotten ist ein kräftiger nordschwedischer Hartkäse, ein würziger Bergkäse oder Parmesan ersetzt ihn gut.'
},
{
  id:'se-stuvad-spenat', name:'Stuvad spenat med ägg · Rahmspinat mit Ei und Kartoffeln', cuisine:'Schweden', flag:'🇸🇪',
  protein:'ei', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Spinat','Kartoffeln','Zwiebel'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Blattspinat, TK',q:150,u:'g',c:'tk'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln halbieren und in 15 Minuten weich kochen. Eier gleichzeitig 10 Minuten hart kochen, abschrecken und halbieren.',
    'Zwiebel und Knoblauch fein würfeln und in Öl glasig dünsten. Spinat gefroren zugeben und zugedeckt 6 bis 8 Minuten auftauen und erhitzen.',
    'Milch mit Speisestärke verrühren, zum Spinat geben und 2 Minuten sämig köcheln, mit Muskat würzen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer abschmecken und mit Kartoffeln und Eihälften servieren.'
  ],
  kidName:'Spinat-Kartoffel-Mus',
  kid:'Kartoffeln in den Rahmspinat drücken und zu einem weichen Mus vermischen, das hart gekochte Ei klein hacken. Ohne Salz servieren.',
  leftover:'Spinat-Omelett · 8 Min. – Restlichen Rahmspinat in der Pfanne erhitzen, verquirlte Eier darübergeben und vollständig stocken lassen.',
  tipp:'Mit frischem Frühlingsspinat schmeckt das Gericht noch milder, dann den Spinat nur 2 Minuten zusammenfallen lassen.'
},
{
  id:'se-bruna-bonor', name:'Bruna bönor · mild-süßsaure braune Bohnen mit Kartoffeln und Rotkohl-Apfel-Gemüse', cuisine:'Schweden', flag:'🇸🇪',
  protein:'huelsen', base:'kartoffeln', time:{a:12,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rotkohl','Apfel','Kartoffeln','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rotkohl',q:120,u:'g',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in Stücke schneiden und in 15 Minuten weich kochen.',
    'Zwiebel fein würfeln und in der Hälfte des Öls glasig dünsten. Bohnen abspülen, mit Brühe und der Hälfte des fein geriebenen Apfels zugeben und 10 Minuten köcheln.',
    'Speisestärke mit etwas Wasser verrühren, unterrühren und kurz aufkochen, bis die Sauce bindet, dann mit Essig abschmecken.',
    'Rotkohl in feine Streifen schneiden und mit dem restlichen Apfel im übrigen Öl und 3 EL Wasser zugedeckt 8 Minuten weich dünsten.',
    'Kinderportion ohne Salz abnehmen und die Bohnen dafür zerdrücken. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Bohnen-Kartoffel-Mus',
  kid:'Bohnen mit der Gabel gründlich zerdrücken und mit Kartoffeln mischen, Rotkohl sehr weich dünsten und klein schneiden. Ohne Salz servieren.',
  leftover:'Bohnen-Bratlinge · 12 Min. – Reste mit Haferflocken zerdrücken, zu Talern formen und in der Pfanne braten.',
  tipp:'Original sind schwedische braune Bohnen, Kidney- oder Wachtelbohnen schmecken sehr ähnlich, der Apfel ersetzt den sonst üblichen Sirup.'
}
);
