/* Grün geplant · Italien · Top 15 */
RECIPES.push(
{
  id:'it-spaghetti-bolognese', name:'Spaghetti alla bolognese · Vollkornspaghetti mit Gemüse-Hackragù', cuisine:'Italien', flag:'🇮🇹',
  protein:'fleisch', base:'nudeln', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','milch','sellerie'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Sellerie','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Staudensellerie',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotte und Sellerie sehr fein würfeln und in Öl 5 Minuten bei mittlerer Hitze weich dünsten.',
    'Hackfleisch zugeben und krümelig braten, bis es nicht mehr rosa ist. Passierte Tomaten und Oregano einrühren und zugedeckt 25 Minuten leise köcheln.',
    'Inzwischen die Spaghetti in reichlich Wasser nach Packungsangabe bissfest kochen.',
    'Kinderportion ohne Salz abnehmen, Nudeln dafür kürzen. Erwachsene mit Salz, Pfeffer und Parmesan abschmecken.'
  ],
  nutri:{p:['Rinderhack','Vollkornnudeln'],f:['Vollkornnudeln','Karotten','Tomaten'],i:['Rinderhack'],fat:['Olivenöl']},
  kidName:'Mini-Bolognese',
  kid:'Spaghetti in kurze Stücke brechen und weich kochen. Soße ungesalzen lassen, das fein gewürfelte Gemüse ist darin gut versteckt.',
  leftover:'Bolognese-Auflauf · 20 Min. – Reste mit etwas Käse bestreut im Ofen bei 200 °C überbacken.',
  extras:['linsen'], tipp:'Die doppelte Menge Ragù kochen und eine Portion einfrieren.'
},
{
  id:'it-lasagne-spinaci', name:'Lasagne ricotta e spinaci · Spinat-Ricotta-Lasagne mit Tomatensoße', cuisine:'Italien', flag:'🇮🇹',
  protein:'milch', base:'nudeln', time:{a:20,c:35}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Spinat','Tomaten','Zucchini'], season:[],
  ing:[
    {n:'Vollkorn-Lasagneplatten',q:80,u:'g',c:'vorrat'},
    {n:'Ricotta',q:100,u:'g',c:'kuehl'},
    {n:'Blattspinat, TK',q:150,u:'g',c:'tk'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Mozzarella',q:40,u:'g',c:'kuehl'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:0.5,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 190 °C vorheizen. Spinat auftauen lassen und gut ausdrücken, Zucchini fein raspeln.',
    'Spinat, Zucchini und Ricotta mit Muskat verrühren. Passierte Tomaten mit gepresstem Knoblauch und Öl mischen.',
    'In eine Form abwechselnd Tomatensoße, Lasagneplatten und Spinat-Ricotta schichten, mit Tomatensoße und zerzupftem Mozzarella abschließen.',
    'Abgedeckt 20 Minuten, dann offen 15 Minuten backen, bis die Platten weich sind.',
    'Kinderportion ungesalzen herausschneiden und etwas abkühlen lassen. Erwachsene am Tisch mit Pfeffer und etwas Salz würzen.'
  ],
  nutri:{p:['Ricotta','Mozzarella'],f:['Vollkorn-Lasagne','Spinat','Zucchini'],i:['Spinat'],fat:['Ricotta','Olivenöl']},
  kidName:'Mini-Lasagne',
  kid:'In kleine Würfel schneiden und lauwarm servieren, ohne Salz. Ricotta macht die Füllung weich und mild.',
  leftover:'Lasagne-Würfel · 10 Min. – Reste in Würfeln mit etwas Wasser zugedeckt in der Pfanne erhitzen.',
  extras:['linsen','ei'], tipp:'Ungekochte Platten werden weich, wenn die Soße sie vollständig bedeckt.'
},
{
  id:'it-pizza-margherita', name:'Pizza Margherita · Vollkornpizza mit Tomate, Mozzarella und Gemüse', cuisine:'Italien', flag:'🇮🇹',
  protein:'milch', base:null, time:{a:20,c:40}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zucchini','Rote Paprika','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:100,u:'g',c:'vorrat'},
    {n:'Trockenhefe',q:2,u:'g',c:'vorrat',p:true},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Mozzarella',q:70,u:'g',c:'kuehl'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Basilikum, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl, Hefe, 65 ml lauwarmes Wasser und die Hälfte des Öls 5 Minuten zu einem glatten Teig kneten und zugedeckt 30 Minuten gehen lassen.',
    'Ofen mit Blech auf 240 °C vorheizen. Zucchini und Paprika in dünne Scheiben schneiden.',
    'Teig auf Backpapier dünn ausrollen, mit passierten Tomaten und Oregano bestreichen, Gemüse und zerzupften Mozzarella verteilen.',
    'Auf dem heißen Blech 10 bis 12 Minuten backen, bis der Rand gebräunt ist. Mit restlichem Öl beträufeln und Basilikum darüberzupfen.',
    'Kinderstück ohne Salz abschneiden und in Streifen teilen. Erwachsene mit Pfeffer und etwas Salz würzen.'
  ],
  nutri:{p:['Mozzarella','Dinkel-Vollkornmehl'],f:['Dinkel-Vollkornmehl','Paprika','Zucchini'],i:['Vollkornmehl'],fat:['Olivenöl','Mozzarella']},
  kidName:'Pizza-Streifen',
  kid:'Pizza in schmale Streifen schneiden und abkühlen lassen, das dünn geschnittene Gemüse ist weich gebacken. Basilikum fein zupfen oder weglassen.',
  leftover:'Pizza aus der Pfanne · 6 Min. – Reste in der Pfanne mit Deckel bei mittlerer Hitze wieder knusprig erwärmen.',
  extras:['ei'], tipp:'Der Teig lässt sich am Vorabend kneten und über Nacht im Kühlschrank gehen lassen.'
},
{
  id:'it-minestrone', name:'Minestrone · Gemüsesuppe mit weißen Bohnen und Vollkornnudeln', cuisine:'Italien', flag:'🇮🇹',
  protein:'huelsen', base:'nudeln', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch','sellerie'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Karotten','Sellerie','Grüne Bohnen','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornnudeln',q:50,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Staudensellerie',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Karotte, Sellerie und Zucchini klein würfeln, grüne Bohnen in 2 cm Stücke schneiden. Karotte und Sellerie in Öl 4 Minuten andünsten.',
    'Tomaten und Brühe zugeben, aufkochen und 10 Minuten köcheln. Zucchini, grüne Bohnen und kleine Nudeln einrühren und weitere 10 bis 12 Minuten garen, bis die Nudeln weich sind.',
    'Weiße Bohnen abspülen und die letzten 3 Minuten mitwärmen.',
    'Kinderportion abnehmen und die Bohnen leicht zerdrücken. Erwachsene mit Salz, Pfeffer und Parmesan abschmecken.'
  ],
  nutri:{p:['Weiße Bohnen','Vollkornnudeln'],f:['Weiße Bohnen','Grüne Bohnen','Vollkornnudeln'],i:['Weiße Bohnen'],fat:['Olivenöl']},
  kidName:'Mini-Minestrone',
  kid:'Weiße Bohnen mit der Gabel zerdrücken und das Gemüse weich garen. Die Suppe etwas dicker abschöpfen und ohne Salz anbieten.',
  leftover:'Dicke Minestrone · 8 Min. – Reste mit etwas Wasser aufkochen, die gequollenen Nudeln machen sie sämig.',
  extras:['ei','kichererbsen'], tipp:'Die Nudeln quellen nach, Reste deshalb mit etwas Wasser verdünnen.'
},
{
  id:'it-risotto-funghi', name:'Risotto ai funghi · Pilzrisotto mit Erbsen und Parmesan', cuisine:'Italien', flag:'🇮🇹',
  protein:'milch', base:'reis', time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Pilze','Erbsen','Zwiebel','Kräuter'], season:[9,10],
  ing:[
    {n:'Risottoreis',q:75,u:'g',c:'vorrat'},
    {n:'Champignons',q:150,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Parmesan oder Hartkäse',q:20,u:'g',c:'kuehl'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln, Pilze in Scheiben schneiden. Pilze in Öl 5 Minuten kräftig anbraten und die Hälfte für später herausnehmen.',
    'Zwiebel und Reis zugeben und 1 Minute glasig rühren. Heiße Brühe nach und nach angießen und unter Rühren 18 bis 20 Minuten köcheln, bis der Reis cremig und weich ist.',
    'Erbsen und Thymian die letzten 5 Minuten mitgaren, beiseitegelegte Pilze und Parmesan unterrühren.',
    'Kinderportion abnehmen. Erwachsene mit gehackter Petersilie, Pfeffer und etwas Salz abschmecken.'
  ],
  nutri:{p:['Parmesan','Erbsen'],f:['Erbsen','Pilze'],i:['Erbsen'],fat:['Parmesan','Olivenöl']},
  kidName:'Pilzrisotto mini',
  kid:'Pilze für das Kind sehr klein hacken und Erbsen leicht zerdrücken. Risotto etwas weicher kochen und lauwarm servieren.',
  leftover:'Risotto-Taler · 15 Min. – Kalte Reste zu flachen Talern formen und in wenig Öl von beiden Seiten goldbraun braten.',
  extras:['ei','haehnchen'], tipp:'Die Brühe heiß halten, dann wird der Reis beim Angießen schneller cremig.'
},
{
  id:'it-parmigiana', name:'Parmigiana di melanzane · Auberginenauflauf mit Tomate und Mozzarella', cuisine:'Italien', flag:'🇮🇹',
  protein:'milch', base:null, time:{a:20,c:35}, devices:[['ofen']], method:'Backofen, Blech und Form',
  allergens:['milch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Aubergine','Tomaten','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Aubergine',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Mozzarella',q:60,u:'g',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Basilikum, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Aubergine in 1 cm dicke Scheiben schneiden, dünn mit Öl bestreichen und auf dem Blech 15 Minuten backen, bis sie weich und leicht gebräunt sind.',
    'Passierte Tomaten mit gepresstem Knoblauch und zerzupftem Basilikum verrühren.',
    'In einer Form Auberginen, Tomatensoße und zerzupften Mozzarella schichten, mit Soße und Parmesan abschließen. Bei 200 °C 20 Minuten backen.',
    'Kinderportion ungesalzen abnehmen und klein schneiden. Erwachsene mit Pfeffer und etwas Salz würzen, dazu Vollkornbrot.'
  ],
  nutri:{p:['Mozzarella','Parmesan'],f:['Aubergine','Vollkornbrot','Tomaten'],i:['Vollkornbrot'],fat:['Olivenöl','Mozzarella']},
  kidName:'Auberginen-Häppchen',
  kid:'Die weich gebackene Aubergine ohne Schale in kleine Stücke schneiden. Mit etwas Soße und Brotstreifen ungesalzen anbieten.',
  leftover:'Parmigiana-Brot · 5 Min. – Kalte Reste auf geröstetes Vollkornbrot legen.',
  extras:['kichererbsen','linsen','ei'], tipp:'Backen statt Frittieren spart viel Öl, die Scheiben werden trotzdem zart.'
},
{
  id:'it-pasta-e-ceci', name:'Pasta e ceci · Kichererbsen-Nudeltopf mit Rosmarin', cuisine:'Italien', flag:'🇮🇹',
  protein:'huelsen', base:'nudeln', time:{a:8,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Karotten','Tomaten','Babyspinat','Zwiebel'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:140,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornnudeln',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Rosmarin, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotte fein würfeln und in Öl mit Rosmarin 3 Minuten andünsten.',
    'Kichererbsen abspülen und ein Drittel davon mit der Gabel zerdrücken. Alle Kichererbsen, passierte Tomaten und Brühe zugeben und aufkochen.',
    'Kleine Nudeln einrühren und 10 bis 12 Minuten unter gelegentlichem Rühren weich köcheln, zuletzt den Spinat zusammenfallen lassen.',
    'Kinderportion abnehmen und die ganzen Kichererbsen zerdrücken. Erwachsene mit Salz, Pfeffer und etwas Chili abschmecken.'
  ],
  nutri:{p:['Kichererbsen','Vollkornnudeln'],f:['Kichererbsen','Vollkornnudeln','Karotten'],i:['Kichererbsen','Spinat'],fat:['Olivenöl']},
  kidName:'Kichererbsen-Nudeln',
  kid:'Alle Kichererbsen gründlich zerdrücken, damit keine ganzen Kugeln bleiben, und kleine Nudeln weich kochen. Ohne Salz servieren.',
  leftover:'Pasta-e-ceci-Pfanne · 8 Min. – Eingedickte Reste mit etwas Wasser und frischem Spinat in der Pfanne erhitzen.',
  extras:['feta','ei'], tipp:'Die zerdrückten Kichererbsen binden den Topf ganz ohne Sahne.'
},
{
  id:'it-fagioli-uccelletto', name:'Fagioli all\'uccelletto · Weiße Bohnen in Tomaten-Salbei-Soße mit Vollkornbrot', cuisine:'Italien', flag:'🇮🇹',
  protein:'huelsen', base:null, time:{a:8,c:15}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Grünkohl','Zwiebel'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Grünkohl oder Spinat',q:60,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Salbei, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch fein hacken und mit Salbei in Öl 3 Minuten andünsten.',
    'Tomaten zugeben und 5 Minuten köcheln. Bohnen abspülen, mit dem fein geschnittenen Grünkohl oder Spinat zugeben und zugedeckt 8 Minuten sanft schmoren.',
    'Brot rösten und in Stücke schneiden.',
    'Kinderportion abnehmen und die Bohnen grob zerdrücken. Erwachsene mit Salz, Pfeffer und etwas Chili abschmecken.'
  ],
  nutri:{p:['Weiße Bohnen','Vollkornbrot'],f:['Weiße Bohnen','Vollkornbrot','Grünkohl'],i:['Weiße Bohnen','Grünkohl'],fat:['Olivenöl']},
  kidName:'Bohnen-Tomaten-Mus',
  kid:'Bohnen mit der Gabel zu einem groben Mus zerdrücken und das Blattgemüse fein hacken. Ungeröstetes Brot in weichen Streifen zum Dippen dazugeben.',
  leftover:'Bohnen-Bruschetta · 5 Min. – Reste warm auf geröstetes Vollkornbrot streichen.',
  extras:['ei','feta'], tipp:'Mit Polenta statt Brot wird daraus ein noch sättigenderes Hauptgericht.'
},
{
  id:'it-frittata', name:'Frittata di verdure · Italienisches Gemüse-Omelett aus der Pfanne', cuisine:'Italien', flag:'🇮🇹',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Rote Paprika','Babyspinat','Frühlingszwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zucchini und Paprika klein würfeln, Frühlingszwiebel in Ringe schneiden. In Öl 5 Minuten weich dünsten und den Spinat kurz zusammenfallen lassen.',
    'Eier mit Parmesan und Oregano verquirlen und über das Gemüse gießen.',
    'Zugedeckt bei milder Hitze 7 bis 8 Minuten stocken lassen, bis auch die Oberfläche fest ist, dann auf einen Teller gleiten lassen.',
    'Kinderportion in Streifen schneiden, bevor gesalzen wird. Erwachsene mit Salz und Pfeffer würzen, dazu Vollkornbrot.'
  ],
  nutri:{p:['Eier','Parmesan'],f:['Vollkornbrot','Zucchini','Paprika'],i:['Eier','Spinat'],fat:['Eier','Olivenöl']},
  kidName:'Frittata-Streifen',
  kid:'Frittata vollständig durchgaren, bis kein flüssiges Ei mehr zu sehen ist. In weiche Streifen zum Selberessen schneiden.',
  leftover:'Frittata-Panino · 5 Min. – Kalte Frittata mit Tomatenscheiben zwischen zwei Scheiben Vollkornbrot legen.',
  extras:['feta','kichererbsen'], tipp:'Gekochte Nudeln oder Kartoffeln vom Vortag lassen sich direkt mit einbacken.'
},
{
  id:'it-pesto-genovese', name:'Pasta al pesto genovese · Vollkornnudeln mit Basilikumpesto, Kartoffeln und Bohnen', cuisine:'Italien', flag:'🇮🇹',
  protein:'milch', base:'nudeln', time:{a:10,c:12}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch','nuesse'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Grüne Bohnen','Kräuter'], season:[7,8],
  ing:[
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:100,u:'g',c:'gemuese'},
    {n:'Basilikum, frisch',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:20,u:'g',c:'kuehl'},
    {n:'Pinienkerne',q:10,u:'g',c:'vorrat'},
    {n:'Knoblauch',q:0.25,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 1 cm Würfel, Bohnen in 3 cm Stücke schneiden. Kartoffeln in Wasser aufsetzen, nach 3 Minuten Nudeln und Bohnen zugeben und alles 10 bis 12 Minuten weich kochen, die Knoblauchzehe die letzten 2 Minuten mitgaren.',
    'Basilikum, Pinienkerne, den mitgegarten Knoblauch, Parmesan und Öl fein pürieren.',
    'Abgießen und dabei eine Tasse Kochwasser auffangen. Pesto mit etwas Kochwasser unter Nudeln, Kartoffeln und Bohnen mischen.',
    'Kinderportion abnehmen, Nudeln kürzen und Kartoffeln zerdrücken. Erwachsene mit Salz, Pfeffer und etwas extra Parmesan servieren.'
  ],
  nutri:{p:['Parmesan','Vollkornnudeln'],f:['Vollkornnudeln','Grüne Bohnen','Kartoffeln'],i:['Vollkornnudeln','Grüne Bohnen'],fat:['Olivenöl','Pinienkerne']},
  kidName:'Pesto-Nudeln mild',
  kid:'Pinienkerne nur fein püriert verwenden, Nudeln kürzen und Bohnen in kleine weiche Stücke schneiden. Der mitgekochte Knoblauch ist mild, Salz erst nach der Kinderportion.',
  leftover:'Pesto-Nudelsalat · 5 Min. – Kalte Reste mit geviertelten Kirschtomaten mischen.',
  extras:['kichererbsen','ei','haehnchen'], tipp:'Mit Sonnenblumenkernen statt Pinienkernen wird das Pesto nussfrei.'
},
{
  id:'it-pollo-cacciatora', name:'Pollo alla cacciatora · Geschmortes Hähnchen mit Paprika und Tomaten auf Polenta', cuisine:'Italien', flag:'🇮🇹',
  protein:'gefluegel', base:'polenta', time:{a:15,c:30}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Tomaten','Pilze','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Rosmarin, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in mundgerechte Stücke schneiden und in Öl rundum 5 Minuten anbraten.',
    'Zwiebel, Knoblauch, Paprika und Pilze klein schneiden, zugeben und 4 Minuten mitbraten. Tomaten und Rosmarin einrühren und zugedeckt 20 Minuten schmoren, bis das Fleisch zart und durchgegart ist.',
    'Polenta in 280 ml kochendes Wasser einrühren und bei kleiner Hitze unter Rühren 5 bis 10 Minuten quellen lassen.',
    'Kinderportion abnehmen und das Fleisch fein zerzupfen. Erwachsene mit Salz, Pfeffer und nach Wunsch einigen Oliven abschmecken.'
  ],
  nutri:{p:['Hähnchen'],f:['Paprika','Pilze','Tomaten'],i:['Hähnchen'],fat:['Olivenöl']},
  kidName:'Hähnchen-Polenta mild',
  kid:'Hähnchen fein zerzupfen und mit Soße unter die weiche Polenta rühren, Paprika und Pilze klein schneiden. Keine Oliven und kein Salz.',
  leftover:'Polenta-Schnitten · 15 Min. – Fest gewordene Polenta in Scheiben schneiden, in der Pfanne anbraten und mit der restlichen Soße servieren.',
  extras:['kichererbsen'], tipp:'Hähnchenschenkel bleiben beim Schmoren saftiger als Brust.'
},
{
  id:'it-scaloppine-limone', name:'Scaloppine al limone · Putenschnitzel in Zitronensoße mit Kartoffeln und Erbsen', cuisine:'Italien', flag:'🇮🇹',
  protein:'gefluegel', base:'kartoffeln', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Erbsen','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Putenschnitzel',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:100,u:'g',c:'tk'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:80,u:'ml',c:'vorrat'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Speisestärke',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 1,5 cm große Würfel schneiden und in Wasser 12 bis 14 Minuten weich kochen, die letzten 4 Minuten die Erbsen zugeben.',
    'Putenschnitzel dünn klopfen und in Öl je Seite 2 bis 3 Minuten braten, bis sie innen nicht mehr rosa sind. Herausnehmen.',
    'Brühe mit Stärke und dem Saft der halben Zitrone verrühren, in die Pfanne geben und 1 Minute sämig köcheln. Schnitzel und gehackte Petersilie kurz darin wenden.',
    'Kinderportion abnehmen und das Fleisch sehr fein schneiden. Erwachsene mit Zitronenabrieb, Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Pute','Erbsen'],f:['Kartoffeln','Erbsen'],i:['Pute','Erbsen'],fat:['Olivenöl']},
  kidName:'Zitronen-Pute mini',
  kid:'Putenfleisch sehr fein schneiden und mit etwas Soße befeuchten, Kartoffeln und Erbsen zusammen zerdrücken. Ohne Salz und Zitronenabrieb.',
  leftover:'Puten-Kartoffel-Pfanne · 10 Min. – Kartoffeln, Erbsen und klein geschnittenes Fleisch in der Pfanne anbraten.',
  extras:['kichererbsen'], tipp:'Schnitzel zwischen Frischhaltefolie mit einem Topfboden flach klopfen, dann garen sie in wenigen Minuten.'
},
{
  id:'it-polpette', name:'Polpette al sugo · Hackbällchen in Tomatensoße mit Rosmarinkartoffeln', cuisine:'Italien', flag:'🇮🇹',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:25}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Tomaten','Zucchini','Zwiebel'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Rosmarin, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 210 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls und Rosmarin mischen und 25 Minuten backen.',
    'Hackfleisch mit Haferflocken, Ei, Parmesan und fein geriebener Zwiebel verkneten und zu walnussgroßen Bällchen formen.',
    'Passierte Tomaten mit fein geraspelter Zucchini und restlichem Öl aufkochen, Bällchen hineinlegen und zugedeckt 15 Minuten leise köcheln, bis sie durchgegart sind.',
    'Kinderportion ohne Salz abnehmen und die Bällchen halbieren oder zerdrücken. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  nutri:{p:['Rinderhack','Ei','Parmesan'],f:['Kartoffeln','Zucchini','Haferflocken'],i:['Rinderhack'],fat:['Olivenöl']},
  kidName:'Mini-Polpette',
  kid:'Bällchen klein formen, vollständig durchgaren und für das Kind halbieren oder zerdrücken. Kartoffelspalten weich und ohne Salz.',
  leftover:'Polpette-Panino · 8 Min. – Reste erhitzen und in ein Vollkornbrötchen füllen.',
  extras:['linsen'], tipp:'Mit nassen Händen formen, dann kleben die Bällchen nicht.'
},
{
  id:'it-pasta-tonno', name:'Pasta al tonno · Vollkornnudeln mit Thunfisch-Tomatensoße und Zucchini', cuisine:'Italien', flag:'🇮🇹',
  protein:'fisch', base:'nudeln', time:{a:8,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','fisch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zucchini','Tomaten','Zwiebel','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Thunfisch (Dose, im eigenen Saft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 140 g abgetropft'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln in reichlich Wasser nach Packungsangabe bissfest kochen.',
    'Zwiebel fein würfeln, Zucchini grob raspeln. Beides in Öl 4 Minuten dünsten, passierte Tomaten zugeben und 5 Minuten köcheln.',
    'Thunfisch abtropfen, zerpflücken und 2 Minuten in der Soße erhitzen. Nudeln untermischen.',
    'Kinderportion abnehmen und die Nudeln kürzen. Erwachsene mit Petersilie, Zitronenabrieb, Salz und Pfeffer abschmecken.'
  ],
  nutri:{p:['Thunfisch','Vollkornnudeln'],f:['Vollkornnudeln','Zucchini','Tomaten'],i:['Thunfisch'],fat:['Olivenöl']},
  kidName:'Thunfisch-Nudeln',
  kid:'Thunfisch fein zerpflücken und gut in die Soße rühren, Nudeln kürzen, ohne Salz und Zitrone. Thunfisch für Kleinkinder nur gelegentlich anbieten.',
  leftover:'Nudelsalat al tonno · 5 Min. – Kalte Reste mit Gurkenwürfeln und einem Spritzer Zitrone mischen.',
  extras:['ei'], tipp:'Thunfisch im eigenen Saft hat deutlich weniger Fett als Thunfisch in Öl.'
},
{
  id:'it-pesce-cartoccio', name:'Pesce al cartoccio · Fisch im Päckchen mit Kirschtomaten und Ofenkartoffeln', cuisine:'Italien', flag:'🇮🇹',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kirschtomaten','Zucchini','Kartoffeln','Zitrone','Oliven'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Kirschtomaten',q:100,u:'g',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Oliven, schwarz',q:15,u:'g',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in 1 cm dicke Scheiben schneiden, mit der Hälfte des Öls mischen und auf dem Blech 15 Minuten backen.',
    'Zucchini in Scheiben schneiden, Kirschtomaten halbieren. Fisch mit Gemüse, Knoblauchscheiben, Zitronenscheiben und Oregano auf Backpapier legen, mit restlichem Öl beträufeln und zu einem Päckchen falten.',
    'Päckchen zu den Kartoffeln aufs Blech legen und 15 Minuten garen, bis der Fisch weiß ist und sich leicht zerpflücken lässt.',
    'Kinderportion abnehmen, den Fisch auf Gräten prüfen und zerpflücken. Erwachsene mit Oliven, Salz und Pfeffer servieren.'
  ],
  nutri:{p:['Seelachs oder Kabeljau'],f:['Kartoffeln','Zucchini','Tomaten'],i:['Fisch'],fat:['Olivenöl','Oliven']},
  kidName:'Päckchen-Fisch',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, die weich gegarten Kirschtomaten vierteln oder zerdrücken. Ohne Oliven und Salz.',
  leftover:'Fisch-Kartoffel-Pfanne · 10 Min. – Kartoffeln und zerpflückten Fisch in der Pfanne mit etwas Öl erhitzen.',
  extras:[], tipp:'Im geschlossenen Päckchen bleibt der Fisch saftig und das Blech sauber.'
}
);
