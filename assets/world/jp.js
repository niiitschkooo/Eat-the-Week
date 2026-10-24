/* Grün geplant · Japan · Top 15 */
RECIPES.push(
{
  id:'jp-teriyaki-lachs', name:'Teriyaki · glasierter Lachs mit Reis und Brokkoli', cuisine:'Japan', flag:'🇯🇵',
  protein:'fisch', base:'reis', time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','soja','gluten','sesam'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Brokkoli'], season:[6,7,8,9,10],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Brokkoli',q:180,u:'g',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Apfelsaft',q:2,u:'EL',c:'vorrat'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen, mit der 1,25-fachen Menge Wasser aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen. Brokkoliröschen in den letzten 6 Minuten auf den Reis legen und mitdämpfen.',
    'Lachs in Öl auf der Hautseite 4 Minuten braten, wenden und 3 Minuten weiterbraten, bis er gerade durch ist.',
    'Ingwer fein reiben und mit Sojasauce und Apfelsaft verrühren.',
    'Kinderportion Lachs ohne Soße abnehmen. Soße in die Pfanne geben, 1 Minute einköcheln, die Erwachsenenportionen darin glasieren und mit Sesam bestreuen.'
  ],
  kidName:'Lachs mit Reis und Brokkoli',
  kid:'Lachs ohne Haut sorgfältig entgräten und zerpflücken, Brokkoli weich dämpfen. Ohne Teriyaki-Soße und ganzen Sesam.',
  leftover:'Lachs-Onigiri · 10 Min. – Reis mit zerpflücktem Lachs zu kleinen Dreiecken formen.',
  tipp:'Klassische Teriyaki-Soße enthält Mirin und Reiswein, Apfelsaft gibt die Süße ohne Alkohol.'
},
{
  id:'jp-saba-shioyaki', name:'Saba Shioyaki · Ofenmakrele mit Vollkornreis, Spinat und Rettich', cuisine:'Japan', flag:'🇯🇵',
  protein:'fisch', base:'reis', time:{a:10,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch','soja','gluten','sesam'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Spinat','Rettich','Zitrone'], season:[4,5,9,10],
  ing:[
    {n:'Makrelenfilet',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Babyspinat',q:100,u:'g',c:'gemuese'},
    {n:'Rettich',q:80,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser etwa 30 Minuten garen. Ofen auf 220 °C vorheizen.',
    'Makrelenfilets mit der Hautseite nach oben auf ein mit Öl bestrichenes Blech legen und 12 bis 14 Minuten backen, bis die Haut knusprig ist und sich der Fisch leicht zerpflücken lässt.',
    'Spinat in einem Topf mit 2 EL Wasser 2 Minuten zusammenfallen lassen, ausdrücken und klein schneiden. Rettich fein reiben.',
    'Kinderportion Fisch und Spinat ungesalzen abnehmen. Erwachsene Makrele mit einer Prise Salz und Zitrone, Spinat mit Sojasauce und Sesam und den Rettich daneben servieren.'
  ],
  kidName:'Makrele mit Spinat-Reis',
  kid:'Makrele ohne Haut sorgfältig entgräten, zerpflücken und mit Reis und Spinat mischen. Ohne Salz, Sojasauce und ganzen Sesam.',
  leftover:'Makrelen-Reisschale · 8 Min. – Reis und zerpflückte Makrele erhitzen und mit heißem Wasser und etwas Sojasauce übergießen.',
  tipp:'Shioyaki heißt salzgegrillt, im Ofen genügt eine Prise Salz am Tisch.'
},
{
  id:'jp-misoyaki-kabeljau', name:'Tara no Misoyaki · Kabeljau mit Misoglasur und Pak Choi', cuisine:'Japan', flag:'🇯🇵',
  protein:'fisch', base:'reis', time:{a:8,c:15}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch','soja'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Pak Choi','Karotten'], season:[6,7,8,9,10],
  ing:[
    {n:'Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Pak Choi',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Misopaste, hell',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Apfelsaft',q:1,u:'EL',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Reis waschen, mit der 1,25-fachen Menge Wasser aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen.',
    'Pak Choi längs halbieren und Karotte in dünne Scheiben schneiden, mit Öl mischen und auf ein Blech legen. Fisch danebenlegen.',
    'Alles 10 bis 12 Minuten backen, bis der Fisch gerade durch ist und das Gemüse weich ist.',
    'Kinderportion abnehmen und auf Gräten prüfen. Miso mit Apfelsaft verrühren, die Erwachsenenfilets damit bestreichen und mit der Grillfunktion 3 Minuten goldbraun überbacken.'
  ],
  kidName:'Zarter Ofenfisch',
  kid:'Fisch ohne Glasur servieren, sorgfältig entgräten und zerpflücken. Pak Choi und Karotte weich und klein geschnitten.',
  leftover:'Miso-Fisch-Reisschale · 8 Min. – Fisch zerpflücken und mit Reis und Gemüse vollständig erhitzen.',
  tipp:'Im Restaurant zieht der Fisch zwei Tage in süßem Miso, die schnelle Glasur kommt mit wenig Paste aus.'
},
{
  id:'jp-oyakodon', name:'Oyakodon · Reisschale mit Hähnchen, Zwiebel und Ei', cuisine:'Japan', flag:'🇯🇵',
  protein:'gefluegel', base:'reis', time:{a:10,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','soja','gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Erbsen','Spinat'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:110,u:'g',c:'fisch'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Rundkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Apfelsaft',q:1,u:'EL',c:'vorrat'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true}
  ],
  steps:[
    'Reis waschen, mit der 1,25-fachen Menge Wasser aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen.',
    'Zwiebel in dünne Streifen und Hähnchen in kleine Stücke schneiden. Beides mit 120 ml Wasser und Apfelsaft in der Pfanne 6 Minuten köcheln, bis das Hähnchen durchgegart ist.',
    'Erbsen und Spinat zugeben und 2 Minuten mitgaren.',
    'Eier verquirlen, über das Hähnchen gießen und zugedeckt bei kleiner Hitze 4 Minuten vollständig stocken lassen.',
    'Kinderportion ungewürzt abnehmen. Erwachsene mit Sojasauce beträufeln und alles auf dem Reis anrichten.'
  ],
  kidName:'Hähnchen-Ei-Reis',
  kid:'Ei vollständig durchgaren, nicht cremig wie in Japan üblich. Hähnchen klein zupfen und Erbsen leicht zerdrücken.',
  leftover:'Oyako-Reispfanne · 8 Min. – Reste in der Pfanne durchbraten, bis alles vollständig heiß ist.',
  tipp:'Oyako heißt Eltern und Kind, weil Huhn und Ei zusammen in der Schale landen.'
},
{
  id:'jp-karaage', name:'Karaage · Ingwer-Hähnchen aus dem Airfryer mit Reis und Kohlsalat', cuisine:'Japan', flag:'🇯🇵',
  protein:'gefluegel', base:'reis', time:{a:15,c:15}, devices:[['airfryer','ofen'],['topf']], method:'Airfryer oder Backofen + Topf',
  allergens:['soja','gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Gurke'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Speisestärke',q:2,u:'EL',c:'vorrat',p:true},
    {n:'Reisessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen, mit der 1,25-fachen Menge Wasser aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen.',
    'Hähnchen in mundgerechte Stücke schneiden, mit geriebenem Ingwer und Knoblauch mischen, in Speisestärke wenden und mit Öl beträufeln.',
    'Im Airfryer bei 200 °C 12 bis 14 Minuten garen und nach der Hälfte schütteln, bis das Hähnchen goldbraun und innen nicht mehr rosa ist (Backofen: 220 °C, 20 Minuten auf Backpapier).',
    'Kohl in sehr feine Streifen hobeln, Gurke in Scheiben schneiden und beides mit Reisessig mischen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Sojasauce zum Dippen und Kohlsalat servieren.'
  ],
  kidName:'Weiche Hähnchenstücke',
  kid:'Hähnchenstücke halbieren und prüfen, dass sie innen saftig und durchgegart sind. Kohl kurz in Wasser weich dünsten statt roh, Gurke geschält.',
  leftover:'Karaage-Wrap · 8 Min. – Hähnchenreste vollständig erwärmen und mit Kohl in eine Vollkorn-Tortilla rollen.',
  tipp:'Hähnchenschenkel ohne Haut bleiben im Airfryer saftiger als Brust und sind trotzdem mager.'
},
{
  id:'jp-tonkatsu', name:'Tonkatsu · Panko-Schweineschnitzel aus dem Ofen mit Kohl und Reis', cuisine:'Japan', flag:'🇯🇵',
  protein:'fleisch', base:'reis', time:{a:15,c:20}, devices:[['ofen','airfryer'],['topf']], method:'Backofen oder Airfryer + Topf',
  allergens:['gluten','ei','soja'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Karotten'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Schweinefilet',q:120,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Panko-Paniermehl',q:25,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Weißkohl',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Reis waschen, mit der 1,25-fachen Menge Wasser aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen.',
    'Panko mit dem Öl vermischen. Schweinefilet in 1,5 cm dicke Scheiben schneiden und flach drücken.',
    'Fleisch durch verquirltes Ei ziehen, im Panko wenden und auf Backpapier 15 bis 18 Minuten backen, bis die Kruste goldbraun und das Fleisch durchgegart ist.',
    'Kohl und Karotte sehr fein hobeln. Tomatenmark mit Sojasauce und 1 EL Wasser zu einer Soße verrühren.',
    'Kinderportion ohne Soße abnehmen. Erwachsene Tonkatsu in Streifen schneiden und mit Soße, Kohlsalat und Reis servieren.'
  ],
  kidName:'Knusper-Schnitzelstreifen',
  kid:'Fleisch in dünne Streifen schneiden und harte Panaderänder entfernen. Kohl und Karotte für das Kind weich dünsten statt roh, ohne Soße.',
  leftover:'Katsu-Sando · 5 Min. – Schnitzelreste mit Kohl zwischen zwei Scheiben Vollkornbrot legen.',
  tipp:'Panko vorher mit dem Öl mischen, dann bräunt es im Ofen gleichmäßig wie frittiert.'
},
{
  id:'jp-nikujaga', name:'Nikujaga · japanischer Rindfleisch-Kartoffel-Topf', cuisine:'Japan', flag:'🇯🇵',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Topf',
  allergens:['soja','gluten'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Zwiebel','Erbsen'], season:[],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Apfelsaft',q:2,u:'EL',c:'vorrat'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen und in große Stücke schneiden, Karotte in schräge Scheiben und Zwiebel in Spalten. Ingwer fein reiben.',
    'Rindfleisch in Öl im Topf 2 Minuten anbraten, Zwiebel zugeben und 2 Minuten mitbraten.',
    'Kartoffeln, Karotte, Ingwer, Apfelsaft und 300 ml Wasser zugeben und zugedeckt 18 Minuten leise köcheln, bis die Kartoffeln weich sind.',
    'Erbsen zugeben und 3 Minuten mitgaren.',
    'Kinderportion ungesalzen abnehmen. Sojasauce in den Rest rühren und 2 Minuten offen ziehen lassen.'
  ],
  kidName:'Kartoffel-Rind-Topf',
  kid:'Kartoffeln und Karotten leicht zerdrücken, Rindfleisch sehr fein schneiden. Erbsen zerdrücken, ohne Sojasauce.',
  leftover:'Nikujaga-Taler · 20 Min. – Reste zerstampfen, zu Talern formen und im Ofen bei 200 °C knusprig backen.',
  tipp:'Gilt in Japan als Inbegriff der Hausmannskost und schmeckt aufgewärmt noch runder.'
},
{
  id:'jp-yakitori', name:'Yakitori · Hähnchen-Lauch-Spieße vom Blech mit Vollkornreis', cuisine:'Japan', flag:'🇯🇵',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['ofen','airfryer'],['topf']], method:'Backofen oder Airfryer + Topf',
  allergens:['soja','gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Lauch','Zucchini','Rote Paprika'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Apfelsaft',q:1,u:'EL',c:'vorrat'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser etwa 30 Minuten garen. Ofen auf 220 °C Umluft vorheizen und Holzspieße wässern.',
    'Hähnchen in 2,5 cm große Würfel und Lauch in 3 cm lange Stücke schneiden und abwechselnd aufspießen. Zucchini und Paprika in Stücke schneiden.',
    'Spieße und Gemüse mit Öl bestreichen und auf dem Blech 15 bis 18 Minuten garen, nach der Hälfte wenden, bis das Hähnchen durchgegart ist.',
    'Sojasauce, Apfelsaft und geriebenen Ingwer in einem kleinen Topf 2 Minuten zu einer Glasur einköcheln.',
    'Kinderportion ohne Glasur abnehmen und vom Spieß ziehen. Erwachsenenspieße mit Glasur bestreichen und mit Reis servieren.'
  ],
  kidName:'Hähnchenwürfel ohne Spieß',
  kid:'Hähnchen vom Spieß nehmen und klein schneiden, Lauch und Gemüse weich garen. Ohne Glasur, Holzspieße außer Reichweite legen.',
  leftover:'Yakitori-Reisschale · 8 Min. – Fleisch vom Spieß mit Reis und Gemüse in der Pfanne vollständig erhitzen.',
  tipp:'Negima, Hähnchen im Wechsel mit Lauch, ist ein Klassiker der Yakitori-Lokale.'
},
{
  id:'jp-kare-raisu', name:'Kare Raisu · mildes japanisches Curry mit Kichererbsen, Karotten und Kartoffeln', cuisine:'Japan', flag:'🇯🇵',
  protein:'huelsen', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Kartoffeln','Zwiebel','Apfel'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Apfel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Weizenvollkornmehl',q:1,u:'EL',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Mildes Currypulver',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser etwa 30 Minuten garen.',
    'Zwiebel würfeln, Kartoffeln und Karotte in mundgerechte Stücke schneiden und den Apfel fein reiben.',
    'Zwiebel in Öl 5 Minuten weich dünsten, Mehl und Currypulver 1 Minute mitrösten. Tomatenmark und 350 ml Wasser unter Rühren zugeben.',
    'Kartoffeln, Karotte, Apfel und Kichererbsen zugeben und zugedeckt 18 Minuten köcheln, bis die Kartoffeln weich sind und die Soße sämig ist.',
    'Kinderportion abnehmen und Kichererbsen zerdrücken. Erwachsene mit Salz und nach Wunsch etwas Chili abschmecken.'
  ],
  kidName:'Mildes Curry mit Reis',
  kid:'Kichererbsen gründlich zerdrücken, Kartoffeln und Karotten weich und klein. Das Curry ist mild, Salz und Chili erst danach.',
  leftover:'Kare-Udon · 10 Min. – Currysoße mit etwas Wasser verdünnen, aufkochen und über gekochte Nudeln geben.',
  tipp:'Fertige Currywürfel sind sehr fett- und salzreich, mit Mehl und Currypulver gelingt die Soße in wenigen Minuten selbst.'
},
{
  id:'jp-okonomiyaki', name:'Okonomiyaki · Kohlpfannkuchen mit Ei und Frühlingszwiebeln', cuisine:'Japan', flag:'🇯🇵',
  protein:'ei', base:null, time:{a:12,c:12}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten','soja','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Weißkohl','Karotten','Frühlingszwiebel'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Weißkohl',q:200,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Weizenvollkornmehl',q:40,u:'g',c:'vorrat'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:2,u:'EL',c:'kuehl'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kohl in sehr feine Streifen schneiden, Karotte raspeln und Frühlingszwiebel in Ringe schneiden.',
    'Mehl mit Eiern und 60 ml Wasser glatt rühren und das Gemüse gründlich untermischen.',
    'Pfanne mit Öl erhitzen, Teig 2 cm dick zu kleinen Fladen einfüllen und zugedeckt bei mittlerer Hitze je Seite 5 bis 6 Minuten backen, bis die Mitte fest ist.',
    'Tomatenmark mit Sojasauce und 1 EL Wasser zu einer Soße verrühren.',
    'Kinderportion ohne Soße abnehmen. Erwachsene mit Soße und Joghurt bestreichen und mit Frühlingszwiebel bestreuen.'
  ],
  kidName:'Mini-Kohlpuffer',
  kid:'Kleine Fladen backen und prüfen, dass die Mitte vollständig gestockt ist. In Streifen schneiden, ohne Soße, ein Klecks Joghurt passt.',
  leftover:'Okonomiyaki-Toast · 5 Min. – Kalte Fladen in der Pfanne von beiden Seiten aufknuspern.',
  tipp:'Okonomi heißt nach Belieben: Pilze, Mais oder Hähnchenstreifen passen ebenfalls in den Teig.'
},
{
  id:'jp-omurice', name:'Omurice · Omelett mit Tomaten-Gemüse-Reis', cuisine:'Japan', flag:'🇯🇵',
  protein:'ei', base:'reis', time:{a:12,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Erbsen','Karotten','Zwiebel','Pilze'], season:[],
  ing:[
    {n:'Rundkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:50,u:'g',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen, mit der 1,25-fachen Menge Wasser aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen.',
    'Zwiebel, Karotte und Pilze fein würfeln und in der Hälfte des Öls 5 Minuten dünsten. Erbsen, Tomatenmark und passierte Tomaten zugeben, 2 Minuten köcheln und den Reis untermischen.',
    'Eier verquirlen und im restlichen Öl als dünnes Omelett zugedeckt bei mittlerer Hitze 3 Minuten vollständig stocken lassen.',
    'Kinderportion Reis ungesalzen mit Omelettstreifen anrichten. Für die Erwachsenen den Reis mit Salz und Pfeffer abschmecken, auf das Omelett geben und es darüberklappen.'
  ],
  kidName:'Tomatenreis mit Eistreifen',
  kid:'Omelett vollständig durchgaren und in Streifen über den Reis legen. Erbsen leicht zerdrücken, Gemüse fein gewürfelt und weich.',
  leftover:'Omurice-Bällchen · 10 Min. – Tomatenreis zu Bällchen formen und in der Pfanne rundum anbraten.',
  tipp:'In Japan ein Kinderklassiker mit Ketchup, passierte Tomaten mit etwas Tomatenmark sind deutlich weniger süß.'
},
{
  id:'jp-yaki-udon', name:'Yaki Udon · gebratene Udon-Nudeln mit Tofu und Gemüse', cuisine:'Japan', flag:'🇯🇵',
  protein:'tofu', base:'nudeln', time:{a:10,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','soja','sesam'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Chinakohl','Karotten','Pilze','Frühlingszwiebel'], season:[9,10,11,12],
  ing:[
    {n:'Udon-Nudeln, vorgegart',q:200,u:'g',c:'vorrat'},
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Chinakohl',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:60,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Tofu in Würfel, Chinakohl in Streifen, Karotte in Stifte, Pilze in Scheiben und Frühlingszwiebel in Ringe schneiden.',
    'Tofu in der Hälfte des Öls 5 Minuten goldbraun braten und herausnehmen.',
    'Karotte und Pilze im restlichen Öl 3 Minuten braten und den Chinakohl zugeben. Udon-Nudeln mit 3 EL Wasser lockern, zugeben und 3 Minuten mitbraten.',
    'Tofu unterheben. Kinderportion ungesalzen abnehmen, Erwachsene mit Sojasauce, Frühlingszwiebel und geröstetem Sesam abschmecken.'
  ],
  kidName:'Weiche Udon mit Tofu',
  kid:'Dicke Udon-Nudeln in kurze Stücke schneiden, Tofu klein würfeln und Gemüse weich garen. Ohne Sojasauce und ganzen Sesam.',
  leftover:'Udon-Suppe · 8 Min. – Reste in heißem Wasser mit Spinat zu einer Nudelsuppe aufkochen.',
  tipp:'Vorgegarte Udon aus dem Kühlregal oder Asialaden machen das Gericht in 20 Minuten fertig.'
},
{
  id:'jp-miso-ramen', name:'Miso-Ramen · Nudelsuppe mit Ei, Mais und Pak Choi', cuisine:'Japan', flag:'🇯🇵',
  protein:'ei', base:'nudeln', time:{a:12,c:12}, devices:[['topf']], method:'Topf',
  allergens:['ei','gluten','soja','sesam'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Pak Choi','Mais','Pilze','Frühlingszwiebel'], season:[6,7,8,9,10],
  ing:[
    {n:'Mie-Nudeln',q:80,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Pak Choi',q:120,u:'g',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:60,u:'g',c:'vorrat'},
    {n:'Champignons oder Shiitake',q:50,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Misopaste, hell',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    '500 ml Wasser mit geriebenem Ingwer, Knoblauch und Pilzscheiben aufkochen. Eier hineinlegen, 9 Minuten leise kochen, herausnehmen, abschrecken und schälen.',
    'Pak Choi längs vierteln und Frühlingszwiebel in Ringe schneiden.',
    'Nudeln, Mais und Pak Choi in die Brühe geben und 4 Minuten garen.',
    'Kinderportion Nudeln, Gemüse und ein halbes Ei mit wenig Brühe abnehmen. Miso mit etwas Brühe glatt rühren, in den Rest einrühren, nicht mehr kochen lassen und mit Sesamöl und Frühlingszwiebel servieren.'
  ],
  kidName:'Mini-Ramen',
  kid:'Nudeln kurz schneiden und nur mit wenig Brühe anbieten, Ei hart gekocht klein schneiden. Ohne Miso, denn die Paste ist sehr salzig.',
  leftover:'Ramen-Pfanne · 8 Min. – Nudel- und Gemüsereste ohne Brühe in der Pfanne mit etwas Sojasauce braten.',
  tipp:'Sapporo ist für Miso-Ramen mit Mais bekannt, Restaurantbrühen enthalten oft ein Vielfaches dieser Salzmenge.'
},
{
  id:'jp-gyoza', name:'Gyoza · Teigtaschen mit Kohl, Tofu und Shiitake aus der Pfanne', cuisine:'Japan', flag:'🇯🇵',
  protein:'tofu', base:null, time:{a:30,c:12}, devices:[['pfanne']], method:'Pfanne mit Deckel',
  allergens:['gluten','soja','sesam'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Weißkohl','Pilze','Frühlingszwiebel'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Teigblätter für Teigtaschen (TK)',q:12,u:'Stk.',c:'tk'},
    {n:'Tofu, natur',q:100,u:'g',c:'kuehl'},
    {n:'Weißkohl',q:120,u:'g',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:50,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Reisessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kohl, Pilze, Frühlingszwiebel und Ingwer sehr fein hacken. Tofu zerdrücken und alles gründlich verkneten.',
    'Je 1 TL Füllung auf ein Teigblatt geben, den Rand befeuchten, zusammenklappen und mit kleinen Falten fest verschließen.',
    'Gyoza in Öl bei mittlerer Hitze 2 Minuten anbraten, bis die Unterseite goldbraun ist. 80 ml Wasser angießen, sofort zudecken und 6 Minuten dämpfen, dann offen 2 Minuten knusprig braten.',
    'Kinderportion ohne Dip abnehmen. Für die Erwachsenen Sojasauce, Reisessig und Sesamöl als Dip verrühren.'
  ],
  kidName:'Halbierte Gyoza',
  kid:'Gyoza etwas abkühlen lassen und halbieren, damit die heiße Füllung ausdampft. Harte knusprige Ränder für kleine Kinder abschneiden, ohne Dip.',
  leftover:'Gyoza-Suppe · 8 Min. – Übrige Gyoza in heißem Wasser mit Pak Choi 4 Minuten ziehen lassen.',
  tipp:'Gyoza lassen sich roh auf einem Brett einfrieren und gefroren mit 2 Minuten längerer Dämpfzeit braten.'
},
{
  id:'jp-kake-soba', name:'Kake Soba · Buchweizennudeln in Brühe mit Tofu und Spinat', cuisine:'Japan', flag:'🇯🇵',
  protein:'tofu', base:'nudeln', time:{a:8,c:12}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','soja'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Spinat','Pilze','Frühlingszwiebel'], season:[4,5,9,10],
  ing:[
    {n:'Soba-Nudeln (Buchweizen)',q:90,u:'g',c:'vorrat'},
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Babyspinat',q:80,u:'g',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:50,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true}
  ],
  steps:[
    'Soba-Nudeln nach Packungsangabe etwa 5 Minuten garen, abgießen und kalt abspülen.',
    '450 ml Wasser mit geriebenem Ingwer und Pilzscheiben aufkochen, Tofu in Würfeln zugeben und 4 Minuten ziehen lassen.',
    'Spinat und Nudeln in die Brühe geben und 1 Minute erhitzen.',
    'Kinderportion mit wenig Brühe ungesalzen abnehmen. Erwachsene mit Sojasauce abschmecken und mit Frühlingszwiebel und nach Wunsch Shichimi-Pfeffer servieren.'
  ],
  kidName:'Soba mit Tofuwürfeln',
  kid:'Nudeln kurz schneiden und nur mit wenig Brühe anbieten, Tofu und Spinat klein schneiden. Ohne Sojasauce.',
  leftover:'Soba-Salat · 5 Min. – Nudelreste kalt mit Gurke, Edamame und etwas Sojasauce mischen.',
  tipp:'Soba mit hohem Buchweizenanteil hat mehr Ballaststoffe, ein Blick auf die Zutatenliste lohnt sich.'
}
);
