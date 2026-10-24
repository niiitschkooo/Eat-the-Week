/* Grün geplant · Rumänien · Top 15 */
RECIPES.push(
{
  id:'ro-sarmale', name:'Sarmale · Wirsingröllchen mit Hack, Reis und Dill in Tomatensoße', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'fleisch', base:'reis', time:{a:35,c:70}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Wirsing','Zwiebel','Tomaten','Karotten','Kräuter'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Wirsing',q:200,u:'g',c:'gemuese'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:35,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Wirsingblätter ablösen, 3 Minuten in kochendem Wasser blanchieren und dicke Blattrippen flach schneiden.',
    'Zwiebel und Karotte fein würfeln und in Öl 4 Minuten dünsten. Mit Hack, rohem Reis, Thymian und der Hälfte des Dills verkneten und in kleinen Portionen fest in die Blätter wickeln.',
    'Röllchen dicht in einen Topf schichten, passierte Tomaten und Wasser bis knapp unter die Oberfläche angießen und zugedeckt 60 Minuten leise köcheln, bis Reis und Fleisch vollständig gar sind.',
    'Kinderportion ungesalzen abnehmen und die Röllchen klein schneiden. Erwachsene mit Salz, Pfeffer und restlichem Dill würzen und mit Joghurt servieren.'
  ],
  kidName:'Mini-Sarmale mit Joghurt',
  kid:'Röllchen in kleine Stücke schneiden, den weichen Wirsing fein hacken und mit Tomatensoße und Joghurt mild mischen. Ohne Salz.',
  leftover:'Sarmale mit Polenta · 12 Min. – Röllchen in der Soße vollständig erhitzen und mit schnell gekochter Polenta servieren.',
  tipp:'Sarmale schmecken aufgewärmt am zweiten Tag am besten, in Rumänien gehört Mămăligă dazu.'
},
{
  id:'ro-mici', name:'Mici · würzige Hackröllchen aus der Pfanne mit Tomaten-Gurken-Salat und Vollkornbrot', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'fleisch', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke','Rote Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:30,u:'ml',c:'vorrat'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hack mit gepresstem Knoblauch, Thymian und der kalten Brühe 2 Minuten kräftig verkneten, bis die Masse geschmeidig ist, und zu daumendicken, 8 cm langen Röllchen formen.',
    'Röllchen in Öl bei mittlerer Hitze rundum 8 bis 10 Minuten braten, bis sie innen vollständig durchgegart sind.',
    'Tomaten und Gurke würfeln, Zwiebel in feine Ringe schneiden und alles zu einem Salat mischen.',
    'Kinderportion ungesalzen abnehmen und die Röllchen in Scheiben schneiden. Erwachsene mit Salz und Pfeffer würzen und mit Senf, Salat und Brot servieren.'
  ],
  kidName:'Mici-Scheiben mit Gurke',
  kid:'Röllchen in dünne Scheiben schneiden und mit Gurkenstiften und weichem Brot anbieten, Tomaten klein würfeln. Ohne Senf, Salz und rohe Zwiebel.',
  leftover:'Mici-Bohnen-Topf · 10 Min. – Röllchen in Scheiben mit weißen Bohnen und Tomatensoße vollständig erhitzen.',
  tipp:'Die Brühe im Hack macht Mici saftig, traditionell kommt noch eine Prise Natron dazu.'
},
{
  id:'ro-ciorba-perisoare', name:'Ciorbă de perișoare · säuerlicher Gemüsetopf mit Reis-Hackbällchen', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'fleisch', base:'reis', time:{a:20,c:35}, devices:[['topf']], method:'Ein Topf',
  allergens:['sellerie'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Karotten','Sellerie','Rote Paprika','Kartoffeln','Tomaten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:30,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:50,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'}
  ],
  steps:[
    'Die Hälfte der Zwiebel fein reiben, den Rest würfeln. Hack mit geriebener Zwiebel, rohem Reis und der Hälfte der gehackten Petersilie verkneten und zu walnussgroßen Bällchen formen.',
    'Karotten, Sellerie, Paprika und Kartoffeln klein würfeln und mit der gewürfelten Zwiebel in 700 ml Wasser 10 Minuten köcheln.',
    'Bällchen und passierte Tomaten zugeben und 25 Minuten leise köcheln, bis Reis und Fleisch vollständig gar sind.',
    'Kinderportion ungesalzen und ohne Zitrone abnehmen und die Bällchen zerteilen. Erwachsene mit Zitronensaft, Salz, Pfeffer und restlicher Petersilie säuerlich abschmecken.'
  ],
  kidName:'Hackbällchen-Gemüse-Schale',
  kid:'Bällchen klein schneiden und mit weichem Gemüse und wenig Brühe in einer Schale anbieten. Ohne Salz und Zitrone.',
  leftover:'Perișoare auf Reis · 10 Min. – Bällchen und Gemüse mit wenig Brühe vollständig erhitzen und auf Reis servieren.',
  tipp:'In Rumänien säuert man mit Borș aus vergorener Weizenkleie, Zitronensaft ist die einfache Alternative und frischer Liebstöckel gibt das typische Aroma.'
},
{
  id:'ro-ciulama-pui', name:'Ciulama de pui · Hähnchen in heller Pilzsoße mit Mămăligă', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'gefluegel', base:'polenta', time:{a:15,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch','gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Pilze','Zwiebel','Erbsen','Kräuter'], season:[9,10],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Champignons',q:120,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Mehl',q:10,u:'g',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in Würfel schneiden und in Öl 5 Minuten rundum anbraten. Zwiebel würfeln, Pilze in Scheiben schneiden, zugeben und 5 Minuten mitbraten.',
    'Mehl darüberstäuben und kurz anschwitzen, Milch und 100 ml Wasser unter Rühren zugießen, Erbsen zugeben und 6 Minuten sämig köcheln, bis das Hähnchen vollständig durchgegart ist.',
    'Inzwischen 300 ml Wasser aufkochen, Polenta einrühren und unter Rühren 5 Minuten zu einem festen Brei garen.',
    'Kinderportion ungesalzen abnehmen und das Hähnchen klein schneiden. Erwachsene mit Salz, Pfeffer und Dill würzen.'
  ],
  kidName:'Rahmhähnchen mit Polenta',
  kid:'Hähnchen und Pilze klein schneiden, Erbsen zerdrücken und mit der milden Soße über weiche Polenta geben. Ohne Salz.',
  leftover:'Ciulama-Nudeln · 10 Min. – Reste mit gekochten Nudeln und etwas Milch vollständig erhitzen.',
  tipp:'Mit Milch statt Sahne bleibt die Soße hell und cremig, aber deutlich leichter.'
},
{
  id:'ro-pilaf-pui', name:'Pilaf cu pui · Hähnchen-Reistopf mit Karotten und Paprika', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'gefluegel', base:'reis', time:{a:12,c:38}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Karotten','Rote Paprika','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in Würfel schneiden und in Öl 5 Minuten rundum anbraten. Zwiebel, Karotten und Paprika würfeln und 3 Minuten mitbraten.',
    'Tomatenmark und Paprikapulver kurz mitrösten, Reis einrühren und 200 ml Wasser und Lorbeer zugeben.',
    'Zugedeckt bei kleiner Hitze 30 Minuten garen, bis der Reis weich, das Wasser aufgesogen und das Hähnchen vollständig durchgegart ist. Lorbeer entfernen und gehackte Petersilie unterheben.',
    'Kinderportion ungesalzen abnehmen und das Hähnchen klein schneiden. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Hähnchenreis',
  kid:'Hähnchen klein schneiden und mit dem weichen Reis mischen, Karotten mit der Gabel andrücken. Ohne Salz.',
  leftover:'Gefüllte Paprika · 25 Min. – Pilaf in halbierte Paprika füllen und bei 190 °C im Ofen vollständig durchbacken.',
  tipp:'Eine Handvoll TK-Erbsen in den letzten 5 Minuten macht den Pilaf noch bunter.'
},
{
  id:'ro-ostropel', name:'Ostropel de pui · Hähnchen in Tomaten-Knoblauch-Soße mit Kartoffelpüree', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Kartoffeln','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in große Stücke schneiden und in Öl rundum 6 Minuten anbraten. Zwiebel und Paprika würfeln und 3 Minuten mitbraten.',
    'Passierte Tomaten, Thymian und 100 ml Wasser zugeben und zugedeckt 20 Minuten schmoren, bis das Hähnchen vollständig durchgegart und die Soße dick ist.',
    'Inzwischen Kartoffeln schälen, würfeln, 18 Minuten weich kochen und mit warmer Milch stampfen.',
    'Kinderportion ungesalzen abnehmen und das Hähnchen klein zupfen. Erwachsene rühren gepressten Knoblauch und gehackte Petersilie in die Soße und würzen mit Salz und Pfeffer.'
  ],
  kidName:'Tomatenhähnchen mit Püree',
  kid:'Hähnchen in kleine Fasern zupfen und mit der milden Tomatensoße unter das Püree mischen. Ohne Knoblauch und Salz.',
  leftover:'Hähnchen-Nudeln · 10 Min. – Fleisch und Soße vollständig erhitzen und über Vollkornnudeln geben.',
  tipp:'Der Knoblauch kommt bei Ostropel erst zum Schluss in die Soße, so bleibt er frisch und kräftig.'
},
{
  id:'ro-plachie', name:'Plachie de pește · Ofenfisch auf Zwiebeln, Paprika und Tomaten mit Kartoffeln', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:40}, devices:[['ofen'],['pfanne']], method:'Pfanne + Backofen',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Tomaten','Kartoffeln','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in Würfel schneiden und in Wasser 12 Minuten vorkochen.',
    'Zwiebel in Ringe und Paprika in Streifen schneiden und in Öl 8 Minuten weich schmoren. Tomaten, gehackten Knoblauch, Thymian und Lorbeer zugeben und 3 Minuten köcheln.',
    'Kartoffeln in eine Form geben, die Hälfte der Soße darauf verteilen, Fisch darauflegen und mit der restlichen Soße bedecken. 18 bis 20 Minuten backen, bis sich der Fisch leicht zerpflücken lässt, dann den Lorbeer entfernen.',
    'Kinderportion ungesalzen abnehmen, den Fisch auf Gräten prüfen und zerpflücken. Erwachsene mit Salz, Pfeffer und gehackter Petersilie würzen.'
  ],
  kidName:'Weicher Zwiebelfisch mit Kartoffeln',
  kid:'Fisch sorgfältig auf Gräten prüfen, zerpflücken und mit weichen Kartoffeln und Soße mischen, die Zwiebeln sind sehr weich geschmort. Ohne Salz.',
  leftover:'Fisch auf Polenta · 10 Min. – Reste vollständig erhitzen und über schnell gekochte Polenta geben.',
  tipp:'Im Donaudelta wird Plachie mit Karpfen gemacht, festes Weißfischfilet hat weniger Gräten.'
},
{
  id:'ro-saramura', name:'Saramură de pește · Forelle im Knoblauch-Tomaten-Sud mit Mămăligă', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'fisch', base:'polenta', time:{a:10,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kirschtomaten','Rote Paprika','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Forellenfilet',q:140,u:'g',c:'fisch'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Kirschtomaten',q:120,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Für die Mămăligă 300 ml Wasser aufkochen, Polenta einrühren und unter Rühren 5 Minuten zu einem festen Brei garen.',
    'Fisch trocken tupfen und in der Hälfte des Öls bei mittlerer Hitze 3 Minuten je Seite braten, bis er sich leicht zerpflücken lässt, dann herausnehmen.',
    'Kirschtomaten halbieren, Paprika in Streifen schneiden und im restlichen Öl 3 Minuten anbraten. Brühe und Thymian zugeben, 3 Minuten köcheln und den Fisch zurück in den Sud legen.',
    'Kinderportion ungesalzen abnehmen, den Fisch auf Gräten prüfen und zerpflücken. Erwachsene rühren gepressten Knoblauch und gehackte Petersilie in den Sud und würzen mit Salz, Pfeffer und Chili.'
  ],
  kidName:'Forelle mit weicher Polenta',
  kid:'Forelle besonders sorgfältig auf Gräten prüfen, zerpflücken und mit Polenta und klein geschnittenen, weich gegarten Tomaten mischen. Ohne Knoblauch, Salz und Chili.',
  leftover:'Fisch-Polenta-Taler · 15 Min. – Polenta und Fisch vermengen, zu Talern formen und in der Pfanne beidseitig durchbraten.',
  tipp:'Saramură heißt Salzlake, mit salzarmer Brühe und frischem Knoblauch bleibt der Geschmack kräftig und der Salzgehalt niedrig.'
},
{
  id:'ro-chiftele-peste', name:'Chiftele de pește · Fischfrikadellen aus dem Ofen mit Kartoffelpüree und Gurkensalat', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:20}, devices:[['ofen','airfryer'],['topf']], method:'Backofen oder Airfryer + Topf',
  allergens:['fisch','ei','gluten','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Gurke','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln schälen, würfeln und 18 Minuten weich kochen.',
    'Fisch fein hacken und mit fein geriebener Zwiebel, Ei, Haferflocken und der Hälfte des Dills verkneten. Mit feuchten Händen kleine flache Frikadellen formen.',
    'Frikadellen auf ein Blech mit Backpapier legen, mit dem Öl bepinseln und 15 bis 18 Minuten backen, nach 10 Minuten wenden, bis sie innen vollständig durchgegart sind.',
    'Kartoffeln mit warmer Milch stampfen. Gurke in dünne Scheiben schneiden und mit Joghurt und restlichem Dill mischen.',
    'Kinderportion ungesalzen abnehmen und die Frikadellen in Stücke teilen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Fischfrikadellen mit Püree',
  kid:'Fisch vor dem Hacken sorgfältig auf Gräten prüfen, Frikadellen klein formen und vollständig durchbacken. Dazu Püree und Gurkenstifte, ohne Salz.',
  leftover:'Fischfrikadellen-Brot · 8 Min. – Frikadellen im Ofen vollständig erhitzen und mit Gurke aufs Vollkornbrot legen.',
  tipp:'Im Blitzhacker ist der Fisch in wenigen Sekunden fein genug, nur kurz pulsieren lassen.'
},
{
  id:'ro-mamaliga-branza', name:'Mămăligă cu brânză și ou · Polenta mit Schafskäse, Joghurt und Spiegelei', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'ei', base:'polenta', time:{a:6,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Gurke','Frühlingszwiebel'], season:[7,8,9],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Feta',q:40,u:'g',c:'kuehl'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    '300 ml Wasser aufkochen, Polenta einrühren und unter Rühren 5 Minuten zu einem cremigen Brei garen.',
    'Eier in Öl bei mittlerer Hitze braten, nach 3 Minuten wenden und weitere 2 Minuten braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Tomaten und Gurke in Stücke und Frühlingszwiebel in Ringe schneiden. Polenta auf Teller geben, Joghurt und zerbröselten Feta darauf verteilen und die Eier darauflegen.',
    'Kinderportion ohne Feta abnehmen und das Ei klein schneiden. Erwachsene mit Pfeffer würzen und mit Gemüse und Frühlingszwiebeln servieren.'
  ],
  kidName:'Polenta mit Ei und Joghurt',
  kid:'Ei vollständig durchbraten und klein schneiden, Polenta mit Joghurt cremig rühren und Gurke in Stifte schneiden. Feta beim Kind weglassen, er ist sehr salzig.',
  leftover:'Gebratene Polenta-Schnitten · 12 Min. – Kalte Polenta in Scheiben in der Pfanne goldbraun braten und mit Gemüse servieren.',
  tipp:'In Rumänien wird dafür salziger Schafskäse verwendet, mit wenig Feta und viel Joghurt bleibt es mild.'
},
{
  id:'ro-iahnie-fasole', name:'Iahnie de fasole · weißer Bohneneintopf mit Tomaten, Paprika und Thymian', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'huelsen', base:null, time:{a:8,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Karotten','Rote Paprika','Tomaten'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotten und Paprika klein würfeln und in Öl 5 Minuten weich dünsten, Paprikapulver kurz mitrösten.',
    'Bohnen, passierte Tomaten, Thymian, Lorbeer und 100 ml Wasser zugeben und 10 Minuten sämig köcheln. Lorbeer entfernen.',
    'Einen Teil der Bohnen am Topfrand zerdrücken, damit der Eintopf cremig wird.',
    'Kinderportion ungesalzen abnehmen und die Bohnen zerdrücken. Erwachsene mit Salz und Pfeffer würzen und mit Brot servieren.'
  ],
  kidName:'Weicher Bohnentopf',
  kid:'Bohnen und Karotten mit der Gabel zu einem groben Mus zerdrücken und lauwarm servieren. Ohne Salz, dazu weiche Brotstreifen.',
  leftover:'Bohnenaufstrich · 5 Min. – Reste pürieren und wie Fasole bătută aufs Brot streichen.',
  tipp:'Iahnie ist ein klassisches Fastengericht und kommt in Rumänien oft mit eingelegtem Gemüse auf den Tisch.'
},
{
  id:'ro-mancare-mazare', name:'Mâncare de mazăre · Erbsen-Schmortopf mit Kartoffeln, Karotten und Dill', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'huelsen', base:'kartoffeln', time:{a:10,c:20}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Erbsen','Kartoffeln','Karotten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Erbsen, TK',q:200,u:'g',c:'tk'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotten würfeln und in Öl 4 Minuten andünsten. Kartoffeln in kleine Würfel schneiden.',
    'Kartoffeln, passierte Tomaten und 200 ml Wasser zugeben und 10 Minuten köcheln.',
    'Erbsen zugeben und weitere 6 Minuten garen, bis alles weich und die Soße sämig ist. Dill unterheben.',
    'Kinderportion ungesalzen abnehmen und die Erbsen leicht zerdrücken. Erwachsene mit Salz und Pfeffer würzen und mit Joghurt servieren.'
  ],
  kidName:'Erbsen-Kartoffel-Topf',
  kid:'Erbsen mit der Gabel zerdrücken, damit sie nicht wegrollen, und mit weichen Kartoffeln und einem Klecks Joghurt mischen. Ohne Salz.',
  leftover:'Erbsen-Omelett · 10 Min. – Reste mit 2 verquirlten Eiern in der Pfanne vollständig stocken lassen.',
  tipp:'Mit Hähnchen wird daraus Mâncare de mazăre cu pui, dann 120 g Hähnchenwürfel zu Beginn anbraten.'
},
{
  id:'ro-omleta-taraneasca', name:'Omletă țărănească · Bauernomelett mit Kartoffeln, Paprika und Schafskäse', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'ei', base:'kartoffeln', time:{a:6,c:18}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Zwiebel','Tomaten','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Feta',q:30,u:'g',c:'kuehl'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 1 cm kleine Würfel schneiden und in Öl zugedeckt bei mittlerer Hitze 10 Minuten braten, dabei mehrmals wenden.',
    'Zwiebel und Paprika würfeln, zugeben und 3 Minuten mitbraten, bis die Kartoffeln weich sind. Tomate würfeln und unterheben.',
    'Verquirlte Eier mit gehackter Petersilie darübergießen und zugedeckt bei kleiner Hitze 5 Minuten stocken lassen, bis die Oberfläche fest ist.',
    'Kinderportion ohne Feta abnehmen und in Streifen schneiden. Erwachsene mit zerbröseltem Feta, Pfeffer und etwas Chili würzen.'
  ],
  kidName:'Kartoffel-Omelett-Streifen',
  kid:'Omelett vollständig stocken lassen und in Streifen schneiden, die weichen Kartoffelwürfel sind gut greifbar. Ohne Feta und Salz.',
  leftover:'Omelett-Brot · 5 Min. – Reste in der Pfanne vollständig erhitzen und mit Gurke aufs Vollkornbrot legen.',
  tipp:'Klassisch kommt Speck hinein, mit Paprika und etwas Schafskäse wird es leichter und trotzdem herzhaft.'
},
{
  id:'ro-tocanita-ciuperci', name:'Tocăniță de ciuperci · Pilzgulasch mit Mămăligă und Joghurt', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'milch', base:'polenta', time:{a:12,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Zwiebel','Rote Paprika','Tomaten','Kräuter'], season:[9,10],
  ing:[
    {n:'Champignons',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Griechischer Joghurt',q:120,u:'g',c:'kuehl'},
    {n:'Feta',q:30,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Paprika würfeln und in Öl 4 Minuten dünsten. Pilze vierteln, zugeben und bei starker Hitze 6 Minuten braten, bis die Flüssigkeit verdampft ist.',
    'Paprikapulver unterrühren, passierte Tomaten und 50 ml Wasser zugeben und 8 Minuten sämig schmoren.',
    'Inzwischen 300 ml Wasser aufkochen, Polenta einrühren und unter Rühren 5 Minuten zu einem cremigen Brei garen.',
    'Kinderportion ungesalzen abnehmen und die Pilze klein schneiden. Erwachsene mit Salz, Pfeffer und Dill würzen und mit Joghurt und zerbröseltem Feta servieren.'
  ],
  kidName:'Pilzsoße mit Polenta und Joghurt',
  kid:'Pilze fein hacken, mit der milden Soße über weiche Polenta geben und einen Klecks Joghurt unterrühren. Ohne Salz und Feta.',
  leftover:'Pilz-Omelett · 10 Min. – Pilzgulasch mit 2 verquirlten Eiern in der Pfanne vollständig stocken lassen.',
  tipp:'Mit gemischten Waldpilzen im Herbst schmeckt Tocăniță besonders aromatisch.'
},
{
  id:'ro-mancare-linte', name:'Mâncare de linte · Linsen-Gemüse-Topf mit Tomaten und Thymian, dazu Vollkornbrot', cuisine:'Rumänien', flag:'🇷🇴',
  protein:'huelsen', base:null, time:{a:10,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Zwiebel','Rote Paprika','Tomaten','Kräuter'], season:[],
  ing:[
    {n:'Berglinsen oder Tellerlinsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotten, Paprika und Knoblauch würfeln und in Öl 5 Minuten andünsten.',
    'Linsen spülen, mit Tomaten, Thymian und 400 ml Wasser zugeben und zugedeckt 25 Minuten köcheln, bis die Linsen weich sind und der Eintopf dick ist.',
    'Gehackte Petersilie unterheben.',
    'Kinderportion ungesalzen abnehmen und die Linsen leicht zerdrücken. Erwachsene mit Salz, Pfeffer und einem Spritzer Essig würzen und mit Brot servieren.'
  ],
  kidName:'Weicher Linsentopf',
  kid:'Linsen sehr weich garen und leicht zerdrücken, das Gemüse in kleinen Stücken lassen. Ohne Salz, ein Spritzer Zitrone hilft bei der Eisenaufnahme.',
  leftover:'Linsen-Bratlinge · 15 Min. – Reste mit Haferflocken verkneten, zu Talern formen und in der Pfanne durchbraten.',
  tipp:'Linsen müssen nicht eingeweicht werden, Berglinsen bleiben beim Kochen schön bissfest.'
}
);
