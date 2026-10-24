/* Grün geplant · Großbritannien · Top 15 */
RECIPES.push(
{
  id:'gb-fish-and-chips', name:'Fish and Chips · Ofenfisch in Haferkruste mit Ofenpommes und Erbsenpüree', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch','ei','gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Erbsen','Zitrone'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:120,u:'g',c:'tk'},
    {n:'Haferflocken, zart',q:20,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie oder Minze',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln ungeschält in fingerdicke Stifte schneiden, mit der Hälfte des Öls und dem Paprikapulver mischen und auf dem Blech 15 Minuten backen.',
    'Fisch trocken tupfen, durch das verquirlte Ei ziehen und in Haferflocken wenden. Neben die Kartoffeln legen, mit dem restlichen Öl beträufeln und 12 bis 15 Minuten backen, bis der Fisch innen nicht mehr glasig ist.',
    'Erbsen in wenig Wasser 5 Minuten weich kochen, abgießen und mit der Minze grob zerstampfen.',
    'Kinderportion ungesalzen abnehmen, Fisch auf Gräten prüfen und zerpflücken. Erwachsene mit Salz und Zitronenspalten servieren.'
  ],
  kidName:'Mini-Fish-and-Chips',
  kid:'Fisch vollständig durchgaren, auf Gräten prüfen und zerpflücken. Ofenpommes in weiche Stücke ohne harte Ecken schneiden, Erbsen fein zerdrücken.',
  leftover:'Fischbrötchen · 8 Min. – Fischreste im Ofen durcherhitzen und mit Gurke in ein Vollkornbrötchen legen.',
  tipp:'Die Kartoffelstifte 10 Minuten in kaltes Wasser legen und gut abtrocknen, dann werden sie knuspriger.'
},
{
  id:'gb-fish-pie', name:'Fish Pie · Fischauflauf mit Lauch, Erbsen und Kartoffelhaube', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:35}, devices:[['topf'],['pfanne'],['ofen']], method:'Topf + Pfanne + Backofen',
  allergens:['fisch','milch','gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Lauch','Erbsen','Babyspinat'], season:[],
  ing:[
    {n:'Seelachsfilet',q:90,u:'g',c:'fisch'},
    {n:'Lachsfilet',q:50,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Weizenmehl',q:1,u:'EL',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in 15 Minuten weich kochen. Ofen auf 200 °C vorheizen.',
    'Lauch in feine Ringe schneiden und in der Pfanne in Öl 4 Minuten dünsten. Mehl darüberstäuben, nach und nach 100 ml Milch einrühren und 2 Minuten zu einer Soße köcheln.',
    'Fisch in Würfel schneiden und mit Erbsen, Spinat und Dill in eine Auflaufform geben, die Soße darübergießen.',
    'Kartoffeln mit der restlichen Milch zerstampfen, auf dem Fisch verstreichen und 20 Minuten backen, bis die Haube goldbraun und der Fisch gar ist.',
    'Kinderportion ungesalzen abnehmen und Fisch auf Gräten prüfen. Erwachsene mit Salz, Pfeffer und Zitrone nachwürzen.'
  ],
  kidName:'Mini-Fish-Pie',
  kid:'Fisch beim Abnehmen nochmals auf Gräten prüfen und mit der Soße zerdrücken. Die Kartoffelhaube ist weich und gut löffelbar, ohne Salz servieren.',
  leftover:'Fischküchlein · 12 Min. – Reste zerdrücken, zu Talern formen und in der Pfanne von beiden Seiten durchbraten.',
  tipp:'Der Auflauf lässt sich am Vortag vorbereiten und gekühlt in den Ofen schieben, dann 10 Minuten länger backen.'
},
{
  id:'gb-kedgeree', name:'Kedgeree · Curryreis mit Fisch, Ei und Erbsen', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'fisch', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Erbsen','Zwiebel','Babyspinat','Zitrone'], season:[],
  ing:[
    {n:'Reis',q:75,u:'g',c:'vorrat'},
    {n:'Seelachsfilet',q:120,u:'g',c:'fisch'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen. Ei parallel in einem zweiten Topf in 9 Minuten hart kochen.',
    'Zwiebel fein würfeln und in der Pfanne in Öl glasig dünsten, Currypulver 30 Sekunden mitrösten.',
    'Fisch in Stücke schneiden, mit Erbsen und 3 EL Wasser in die Pfanne geben und zugedeckt 6 Minuten garen, bis er sich zerpflücken lässt. Spinat 1 Minute mitgaren.',
    'Reis untermischen, Ei pellen, vierteln und mit Petersilie darauf verteilen.',
    'Kinderportion ungesalzen abnehmen und Fisch auf Gräten prüfen. Erwachsene mit Zitronensaft, Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Kedgeree',
  kid:'Fisch zerpflücken und auf Gräten prüfen, Ei hart gekocht klein hacken und Erbsen leicht zerdrücken. Das milde Curry bleibt, Salz und Zitrone erst danach.',
  leftover:'Kedgeree-Bratlinge · 10 Min. – Reste mit einem Ei verkneten, zu Talern formen und in der Pfanne durchbraten.',
  tipp:'Mit Vollkornreis vom Vortag wird das Gericht ballaststoffreicher und ist in 12 Minuten fertig.'
},
{
  id:'gb-cottage-pie', name:'Cottage Pie · Rinderhack-Gemüse-Auflauf mit Kartoffelpüree', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:40}, devices:[['topf'],['pfanne'],['ofen']], method:'Topf + Pfanne + Backofen',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Karotten','Erbsen','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in 15 bis 18 Minuten weich kochen. Ofen auf 200 °C vorheizen.',
    'Zwiebel und Karotten fein würfeln. Hack in Öl krümelig braten, das Gemüse 5 Minuten mitbraten, dann passierte Tomaten, Thymian und Erbsen zugeben und 10 Minuten köcheln.',
    'Kartoffeln mit warmer Milch zu Püree stampfen. Hackgemüse in eine Auflaufform füllen und das Püree darauf verstreichen.',
    'Mit einer Gabel Rillen ziehen und 20 Minuten backen, bis die Oberfläche goldbraun ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene am Tisch mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Cottage-Pie',
  kid:'Hack vollständig durchgaren und fein krümeln, Karotten sehr weich und klein. Püree und Füllung leicht vermischen, damit alles saftig und löffelbar ist.',
  leftover:'Hackpfanne · 8 Min. – Reste in der Pfanne mit etwas Spinat durchbraten.',
  tipp:'Die Hälfte des Hacks durch gekochte braune Linsen ersetzen, das spart Fleisch und bringt Ballaststoffe.'
},
{
  id:'gb-sunday-roast', name:'Sunday Roast · Ofenhähnchen mit Wurzelgemüse und Bratensoße', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:40}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Pastinake','Brokkoli','Zwiebel'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Pastinake',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln, Karotten und Pastinake in grobe Stücke, Zwiebel in Spalten schneiden und mit Öl und Thymian auf dem Blech mischen.',
    'Hähnchen auf das Gemüse legen und 25 Minuten backen.',
    'Brokkoliröschen zugeben und weitere 12 bis 15 Minuten backen, bis das Hähnchen innen kein rosa Fleisch mehr zeigt.',
    'Hähnchen und Gemüse herausnehmen, die Brühe auf das heiße Blech gießen, Bratrückstände lösen und die Zwiebelspalten darin zerdrücken, so entsteht eine leichte Soße.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch etwas Senf würzen.'
  ],
  kidName:'Mini-Sonntagsbraten',
  kid:'Hähnchen fein zerzupfen und mit etwas Soße befeuchten. Wurzelgemüse und Brokkoli weich in Fingerstücke schneiden, ohne Salz.',
  leftover:'Hähnchen-Gemüse-Wrap · 8 Min. – Fleisch- und Gemüsereste erhitzen und mit Joghurt in eine Vollkorntortilla rollen.',
  tipp:'Gleich die doppelte Menge Wurzelgemüse backen, es schmeckt am nächsten Tag als Suppe oder lauwarmer Salat.'
},
{
  id:'gb-tikka-masala', name:'Chicken Tikka Masala · Joghurt-Hähnchen in milder Tomatensoße mit Vollkornreis', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'gefluegel', base:'reis', time:{a:20,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Zwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 25 bis 30 Minuten garen. Hähnchen würfeln und mit 2 EL Joghurt und der Hälfte des Garam Masala mischen.',
    'Hähnchen in Öl rundum 5 Minuten anbraten und herausnehmen. Zwiebel, Knoblauch und Ingwer fein hacken und in der Pfanne 4 Minuten weich dünsten.',
    'Passierte Tomaten und restliches Gewürz zugeben und 8 Minuten köcheln. Hähnchen und Spinat zugeben und 5 Minuten garen, bis das Fleisch durch ist.',
    'Pfanne vom Herd ziehen und den restlichen Joghurt einrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  kidName:'Mini-Tikka',
  kid:'Hähnchen sehr klein schneiden oder zerzupfen und mit viel Soße unter weichen Reis mischen. Ohne Chili und Salz, der Joghurt macht es mild.',
  leftover:'Tikka-Wrap · 8 Min. – Reste vollständig erhitzen und mit Gurke in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Hähnchen schon morgens im Joghurt einlegen, dann wird es besonders zart.'
},
{
  id:'gb-bangers-and-mash', name:'Bangers and Mash · Bratwürstchen mit Kartoffel-Erbsen-Stampf und Zwiebelsoße', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Erbsen','Zwiebel'], season:[],
  ing:[
    {n:'Geflügelbratwurst',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln und Karotten schälen, würfeln und zusammen in 15 bis 18 Minuten weich kochen. Erbsen in den letzten 4 Minuten zugeben.',
    'Würstchen in der Pfanne in wenig Öl bei mittlerer Hitze 12 Minuten rundum braten, bis sie durch sind, und herausnehmen.',
    'Zwiebel in Streifen schneiden und im Bratfett 6 Minuten weich und goldbraun dünsten. Brühe mit der angerührten Stärke zugießen und 2 Minuten zu einer Soße köcheln.',
    'Kartoffeln, Karotten und Erbsen abgießen und mit warmer Milch grob stampfen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und etwas Senf würzen.'
  ],
  kidName:'Mini-Bangers',
  kid:'Würstchen längs vierteln und in kleine Stücke schneiden, nie als runde Scheiben anbieten. Würstchen sind salzig, deshalb nur wenig davon und viel ungesalzenen Stampf.',
  leftover:'Stampf-Bratlinge · 10 Min. – Kalten Stampf mit etwas Kohl zu Talern formen und in der Pfanne goldbraun braten.',
  tipp:'Auf Würstchen mit hohem Fleischanteil und wenig Zusatzstoffen achten, Geflügelbratwurst ist meist magerer.'
},
{
  id:'gb-cornish-pasty', name:'Cornish Pasty · Vollkorn-Teigtasche mit Rindfleisch, Kartoffel und Karotte', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'fleisch', base:null, time:{a:30,c:40}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Zwiebel','Gurke'], season:[],
  ing:[
    {n:'Weizenvollkornmehl',q:80,u:'g',c:'vorrat'},
    {n:'Magerquark',q:40,u:'g',c:'kuehl'},
    {n:'Milch',q:20,u:'ml',c:'kuehl'},
    {n:'Rindfleisch, dünne Streifen',q:90,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl, Quark, Öl und 1 EL Milch zu einem glatten Teig verkneten und 10 Minuten ruhen lassen. Ofen auf 190 °C vorheizen.',
    'Kartoffeln, Karotte, Zwiebel und Rindfleisch in sehr kleine Würfel von etwa 5 mm schneiden und mit Thymian mischen.',
    'Teig rund ausrollen, die Füllung auf eine Hälfte geben, zuklappen und die Ränder fest andrücken. Mit der restlichen Milch bestreichen und oben zweimal einstechen.',
    'Auf dem Blech 40 Minuten backen, bis der Teig goldbraun und die Füllung weich ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene am Tisch mit Salz und Pfeffer nachwürzen und Gurkensticks dazu reichen.'
  ],
  kidName:'Mini-Pasty',
  kid:'Für das Kind eine kleine Teigtasche formen, die Füllung besonders fein würfeln und vollständig durchgaren. Aufgeschnitten und lauwarm servieren, Gurke geschält in Stiften.',
  leftover:'Pasty-Abendbrot · 10 Min. – Kalte Teigtaschen bei 180 °C im Ofen durchwärmen und mit Salat essen.',
  tipp:'Klassisch kommt Steckrübe in die Füllung, sie kann die Karotte ganz oder teilweise ersetzen.'
},
{
  id:'gb-beans-on-toast', name:'Beans on Toast · Tomatenbohnen auf Vollkorntoast mit Spinat', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'huelsen', base:null, time:{a:5,c:12}, devices:[['topf']], method:'Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Babyspinat','Zwiebel'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:140,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel sehr fein würfeln und in Öl 3 Minuten glasig dünsten, Paprikapulver kurz mitrösten.',
    'Passierte Tomaten und abgespülte Bohnen zugeben und 8 Minuten sämig einköcheln. Spinat in der letzten Minute unterrühren.',
    'Brot toasten und die Bohnen darauf verteilen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und einem Spritzer Essig würzen.'
  ],
  kidName:'Mini-Bohnentoast',
  kid:'Bohnen mit der Gabel grob zerdrücken und auf weichem, ungetoastetem Brot ohne harte Kruste in Streifen anbieten. Kein Salz, die Tomatensoße ist mild.',
  leftover:'Bohnen-Ofenkartoffel · 10 Min. – Bohnenreste erhitzen und über eine in der Mikrowelle gegarte Kartoffel geben.',
  tipp:'Gekaufte Baked Beans enthalten viel Zucker und Salz, selbst gemacht dauert es nur 10 Minuten.'
},
{
  id:'gb-welsh-rarebit', name:'Welsh Rarebit · überbackener Käsetoast mit Lauch und Tomaten', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'milch', base:null, time:{a:10,c:10}, devices:[['pfanne'],['ofen','airfryer']], method:'Pfanne + Backofen oder Airfryer',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Lauch','Tomaten'], season:[],
  ing:[
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Cheddar oder Bergkäse',q:40,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:30,u:'ml',c:'kuehl'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C Oberhitze oder Grill vorheizen. Lauch in feine Ringe schneiden und in der Pfanne in Öl 5 Minuten weich dünsten.',
    'Käse reiben und mit Milch, Ei und Lauch zu einer streichfähigen Masse verrühren.',
    'Brot leicht toasten, mit Tomatenscheiben belegen und die Käsemasse darauf verstreichen.',
    'Im Ofen 6 bis 8 Minuten backen, bis die Käsemasse vollständig gestockt und goldbraun ist. Im Airfryer bei 190 °C etwa 5 Minuten.',
    'Kinderportion ohne Senf abnehmen und in Streifen schneiden. Erwachsene mit Senf, Pfeffer und nach Wunsch Chili würzen.'
  ],
  kidName:'Mini-Käsetoast',
  kid:'Käsemasse vollständig durchbacken lassen und den Toast in schmale Streifen schneiden. Käse ist salzig, deshalb nur eine dünne Schicht und keine weitere Würze.',
  leftover:'Käse-Lauch-Omelett · 8 Min. – Übrige Käsemasse mit einem weiteren Ei in der Pfanne vollständig stocken lassen.',
  tipp:'Ein kräftiger, reifer Käse reicht in kleiner Menge und bringt viel Geschmack.'
},
{
  id:'gb-bubble-and-squeak', name:'Bubble and Squeak · Kartoffel-Wirsing-Pfanne mit Spiegelei', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'ei', base:'kartoffeln', time:{a:10,c:22}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Wirsing','Karotten','Zwiebel'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Wirsing',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln ungeschält in 1 cm große Würfel schneiden und in einer großen Pfanne mit Öl und 4 EL Wasser zugedeckt 10 Minuten garen.',
    'Wirsing in feine Streifen schneiden, Karotte grob raspeln, Zwiebel würfeln und alles 6 Minuten mitbraten, bis der Kohl weich ist.',
    'Kartoffeln leicht zerdrücken, flach andrücken und ohne Rühren 4 Minuten goldbraun braten. Eier daneben in die Pfanne schlagen und zugedeckt braten, bis Eiweiß und Eigelb fest sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Muskat würzen.'
  ],
  kidName:'Mini-Bubble',
  kid:'Ei braten, bis das Eigelb ganz fest ist, und in Streifen schneiden. Kohl und Kartoffeln weich zerdrücken, ohne Salz und Muskat.',
  leftover:'Bubble-Taler · 10 Min. – Reste zu kleinen Talern formen und in der Pfanne von beiden Seiten durchbraten.',
  tipp:'Ursprünglich ein Resteessen: übriger Kartoffelstampf und gegartes Gemüse vom Sonntagsbraten passen perfekt.'
},
{
  id:'gb-cauliflower-cheese', name:'Cauliflower Cheese · Blumenkohl-Käse-Auflauf mit Vollkornnudeln', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'milch', base:'nudeln', time:{a:15,c:25}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Blumenkohl','Erbsen'], season:[6,7,8,9,10],
  ing:[
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Blumenkohl',q:200,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Cheddar oder Bergkäse',q:30,u:'g',c:'kuehl'},
    {n:'Weizenmehl',q:1,u:'EL',c:'vorrat'},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Nudeln in reichlich Wasser kochen, Blumenkohlröschen und Erbsen in den letzten 6 Minuten mitgaren und alles abgießen.',
    'Im selben Topf Öl erhitzen, Mehl einrühren und nach und nach die Milch zugießen. 3 Minuten unter Rühren zu einer glatten Soße köcheln und zwei Drittel des Käses darin schmelzen.',
    'Nudeln und Gemüse untermischen, in eine Auflaufform füllen, mit dem restlichen Käse bestreuen und 12 bis 15 Minuten goldbraun überbacken.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer, Muskat und etwas Senf würzen.'
  ],
  kidName:'Mini-Blumenkohlauflauf',
  kid:'Blumenkohl sehr weich garen und klein zerdrücken, Nudeln kurz schneiden. Käse ist salzig, deshalb ohne zusätzliches Salz servieren.',
  leftover:'Blumenkohl-Nudel-Pfanne · 8 Min. – Reste mit einem Schuss Milch in der Pfanne durchwärmen und mit Spinat verlängern.',
  tipp:'Ein Teil Brokkoli statt Blumenkohl bringt Farbe auf den Teller und verändert die Garzeit nicht.'
},
{
  id:'gb-glamorgan-sausages', name:'Glamorgan Sausages · walisische Käse-Lauch-Würstchen mit Ofentomaten und Brokkoli', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'milch', base:null, time:{a:20,c:20}, devices:[['pfanne'],['ofen','airfryer']], method:'Pfanne + Backofen oder Airfryer',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Lauch','Kirschtomaten','Brokkoli'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Cheddar oder Bergkäse',q:35,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Kirschtomaten',q:100,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:80,u:'g',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Brot fein zerbröseln. Lauch in sehr feine Ringe schneiden und in der Pfanne in wenig Öl 5 Minuten weich dünsten.',
    'Käse reiben und mit Bröseln, Lauch, Ei und Thymian zu einer formbaren Masse verkneten. Zu daumendicken Würstchen formen.',
    'Würstchen mit Kirschtomaten und Brokkoliröschen auf ein Blech legen, mit dem restlichen Öl beträufeln und 18 bis 20 Minuten backen, bis die Würstchen goldbraun und fest sind. Im Airfryer bei 180 °C 12 bis 14 Minuten.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Senf, Salz und Pfeffer servieren.'
  ],
  kidName:'Mini-Käsewürstchen',
  kid:'Würstchen vollständig durchbacken, längs halbieren und klein schneiden. Kirschtomaten vierteln, Brokkoli weich garen, kein Salz, da der Käse schon salzig ist.',
  leftover:'Käse-Lauch-Brötchen · 5 Min. – Kalte Würstchen mit Tomate in ein Vollkornbrötchen legen.',
  tipp:'Die Würstchen lassen sich roh einfrieren und direkt aus dem Tiefkühler 5 Minuten länger backen.'
},
{
  id:'gb-full-english', name:'Full English · Spiegelei mit Bohnen, Pilzen, Tomaten und Vollkorntoast', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei','gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Pilze','Tomaten','Babyspinat'], season:[],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Champignons',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Vollkornbrot',q:1.5,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Bohnen mit den passierten Tomaten in einem kleinen Topf 8 Minuten sämig köcheln.',
    'Champignons in Scheiben schneiden, Tomate halbieren und beides in der Pfanne in Öl 5 Minuten braten. Spinat kurz mitdünsten und an den Rand schieben.',
    'Eier in die Pfanne schlagen und bei mittlerer Hitze zugedeckt 4 bis 5 Minuten braten, bis Eiweiß und Eigelb fest sind. Brot toasten.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Frühstücksteller',
  kid:'Eigelb vollständig fest braten und das Ei in Streifen schneiden. Bohnen zerdrücken, Pilze klein schneiden und die Tomate gehäutet und weich anbieten.',
  leftover:'Bohnen-Pilz-Toast · 5 Min. – Übrige Bohnen und Pilze erhitzen und auf Vollkorntoast geben.',
  tipp:'Statt Speck und Würstchen bringen gebratene Pilze und Bohnen den herzhaften Geschmack.'
},
{
  id:'gb-scotch-broth', name:'Scotch Broth · schottischer Graupen-Eintopf mit Linsen und Wurzelgemüse', cuisine:'Großbritannien', flag:'🇬🇧',
  protein:'huelsen', base:null, time:{a:15,c:35}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:['gluten','sellerie'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Lauch','Sellerie','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Perlgraupen',q:40,u:'g',c:'vorrat'},
    {n:'Berglinsen oder Tellerlinsen, trocken',q:50,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Staudensellerie',q:1,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Graupen in einem Sieb heiß abspülen. Zwiebel, Karotten, Lauch und Sellerie klein würfeln und in Öl 5 Minuten anschwitzen.',
    'Graupen, abgespülte Linsen, Thymian und Brühe zugeben und zugedeckt 30 bis 35 Minuten sanft köcheln, bis Graupen und Linsen weich sind. Bei Bedarf etwas Wasser nachgießen.',
    'Den Eintopf dicklich einkochen lassen und die Petersilie unterrühren.',
    'Kinderportion ungesalzen abnehmen und etwas abkühlen lassen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Graupentopf',
  kid:'Eintopf dick und löffelbar anbieten, Linsen und Gemüse leicht zerdrücken. Die Brühe ist salzarm, sonst kein Salz dazugeben.',
  leftover:'Graupen-Bratlinge · 12 Min. – Dicke Reste mit einem Ei und Haferflocken verkneten und in der Pfanne zu Talern braten.',
  tipp:'Im Slow Cooker auf niedriger Stufe 5 bis 6 Stunden garen lassen und die Petersilie erst zum Schluss zugeben.'
}
);
