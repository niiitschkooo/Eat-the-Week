/* Grün geplant · Georgien · Top 15 */
RECIPES.push(
{
  id:'ge-kalmakhi', name:'Kalmakhi · Ofenforelle mit Estragon, Tomaten und weicher Polenta', cuisine:'Georgien', flag:'🇬🇪',
  protein:'fisch', base:'polenta', time:{a:10,c:14}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kirschtomaten','Rote Paprika','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Forellenfilet',q:140,u:'g',c:'fisch'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Kirschtomaten',q:120,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Estragon, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Granatapfelkerne',q:2,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kirschtomaten halbieren, Paprika in Streifen schneiden und mit der Hälfte des Öls auf ein Blech geben.',
    'Forellenfilets mit der Hautseite nach unten dazulegen, mit gehacktem Knoblauch, Estragon und restlichem Öl bestreichen und 12 bis 14 Minuten backen, bis der Fisch gerade durch ist.',
    'Inzwischen die Polenta in 280 ml kochendes Wasser einrühren und nach Packungsangabe 5 bis 10 Minuten weich und cremig garen.',
    'Kinderportion ungesalzen abnehmen und Fisch auf Gräten prüfen. Erwachsene mit Salz, Pfeffer und Granatapfelkernen servieren.'
  ],
  kidName:'Mini-Kalmakhi',
  kid:'Forelle sorgfältig entgräten und zerpflücken, Polenta weich und cremig anbieten. Kirschtomaten vierteln und Granatapfelkerne für das Kleinkind weglassen.',
  leftover:'Polenta-Schnitten · 10 Min. – Kalte Polenta in Scheiben schneiden, in der Pfanne anbraten und Fisch- und Gemüsereste darauf erwärmen.',
  tipp:'In Georgien wird die Forelle oft im Ganzen über Holzkohle gegrillt, Filets aus dem Ofen sind schneller und grätenärmer.'
},
{
  id:'ge-kindzmari', name:'Kindzmari · Seelachs in Koriander-Knoblauch-Sud mit Tomaten-Gurken-Salat und Fladenbrot', cuisine:'Georgien', flag:'🇬🇪',
  protein:'fisch', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Koriander, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Brühe in einer Pfanne aufkochen, Fisch einlegen und zugedeckt bei kleiner Hitze 6 bis 8 Minuten ziehen lassen, bis er sich leicht zerpflücken lässt.',
    'Koriander und Knoblauch getrennt fein hacken. Tomaten und Gurke würfeln und mit Öl zu einem Salat mischen.',
    'Fisch auf Teller heben und 3 EL vom heißen Sud mit dem Koriander verrühren. Fladenbrot dazu reichen.',
    'Kinderportion nur mit etwas Koriander-Sud, ohne Knoblauch, Essig und Salz abnehmen. Für die Erwachsenen Knoblauch und Essig in den Kräutersud rühren, über den Fisch geben und mit Salz würzen.'
  ],
  kidName:'Mini-Kindzmari',
  kid:'Fisch vollständig garen, auf Gräten prüfen und zerpflücken, nur mit mildem Kräutersud ohne Knoblauch und Essig. Gurke schälen und Tomate in kleine, weiche Würfel schneiden.',
  leftover:'Fisch-Fladenbrot · 5 Min. – Kalte Fischreste mit Joghurt und Koriander in Fladenbrot rollen.',
  tipp:'Kindzmari wird in Georgien oft kalt als Vorspeise gegessen, warm mit Brot und Salat wird daraus ein schnelles Abendessen.'
},
{
  id:'ge-chakhokhbili', name:'Chakhokhbili · Hähnchen-Tomaten-Schmortopf mit Kräutern und Vollkornreis', cuisine:'Georgien', flag:'🇬🇪',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Zwiebel','Rote Paprika','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:200,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Chmeli-Suneli (Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 25 bis 30 Minuten garen.',
    'Hähnchen in große Stücke schneiden und im zweiten Topf in Öl rundum 5 Minuten anbraten. Zwiebel in Streifen und Paprika in Würfel schneiden, zugeben und 5 Minuten weich dünsten.',
    'Gehackte Tomaten und Chmeli-Suneli zugeben und zugedeckt 20 Minuten schmoren, bis das Hähnchen zart und durchgegart ist. Knoblauch fein hacken und in den letzten 5 Minuten mitgaren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch Chili würzen und Koriander darüberstreuen.'
  ],
  kidName:'Mini-Chakhokhbili',
  kid:'Hähnchen vollständig durchgaren, fein zerzupfen und mit viel Tomatensoße unter weichen Reis mischen. Ohne Chili und Salz, Kräuter fein gehackt.',
  leftover:'Tomaten-Hähnchen-Pasta · 10 Min. – Reste vollständig erhitzen und mit Vollkornnudeln mischen.',
  tipp:'Chmeli-Suneli ist die typische georgische Gewürzmischung mit Bockshornklee und Koriander, ersatzweise etwas gemahlenen Koriander und Paprikapulver nehmen.'
},
{
  id:'ge-shkmeruli', name:'Shkmeruli · Ofenhähnchen in Knoblauch-Milch-Soße mit Kartoffeln und Brokkoli', cuisine:'Georgien', flag:'🇬🇪',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:45}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Brokkoli','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Knoblauch',q:1.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls in eine Auflaufform geben und 15 Minuten vorbacken.',
    'Hähnchen mit dem restlichen Öl bestreichen, auf die Kartoffeln legen und 15 Minuten backen.',
    'Knoblauch fein reiben und mit der Milch verrühren. Brokkoliröschen in die Form geben, die Knoblauchmilch angießen und weitere 12 bis 15 Minuten backen, bis das Hähnchen durch und die Soße leicht eingekocht ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Koriander servieren.'
  ],
  kidName:'Mini-Shkmeruli',
  kid:'Hähnchen zerzupfen und mit der Milchsoße befeuchten, der Knoblauch wird im Ofen mild. Kartoffeln und Brokkoli weich zerdrücken, ohne Salz.',
  leftover:'Knoblauch-Hähnchen-Wrap · 8 Min. – Reste erhitzen und mit Gurke in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Im Original wird das Hähnchen in viel Butter gebraten, im Ofen mit Milch wird es genauso saftig und deutlich leichter.'
},
{
  id:'ge-chashushuli', name:'Chashushuli · georgischer Rindfleisch-Tomaten-Paprika-Topf mit Vollkorn-Fladenbrot', cuisine:'Georgien', flag:'🇬🇪',
  protein:'fleisch', base:null, time:{a:20,c:60}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Chmeli-Suneli (Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch in kleine Würfel schneiden und im Topf in Öl portionsweise kräftig anbraten.',
    'Zwiebel und Paprika in Streifen schneiden, zugeben und 5 Minuten mitbraten. Tomaten, Chmeli-Suneli und 100 ml Wasser zugeben.',
    'Zugedeckt bei kleiner Hitze 50 bis 60 Minuten schmoren, bis das Fleisch zart ist. Knoblauch fein hacken und in den letzten 5 Minuten zugeben.',
    'Koriander unterrühren und mit warmem Fladenbrot servieren.',
    'Kinderportion ungesalzen und ohne Chili abnehmen. Erwachsene mit Salz, Pfeffer und Chili würzen.'
  ],
  kidName:'Mini-Chashushuli',
  kid:'Rindfleisch sehr fein schneiden oder zerzupfen und mit der Soße mischen, Paprika weich schmoren. Ohne Chili und Salz, Fladenbrot zum Dippen.',
  leftover:'Chashushuli-Reis · 8 Min. – Reste vollständig erhitzen und mit Reis als Schmorpfanne servieren.',
  tipp:'Chashushuli bedeutet etwa „scharf geschmort“, die Schärfe kommt hier erst nach der Kinderportion dazu.'
},
{
  id:'ge-khinkali', name:'Khinkali · georgische Teigtaschen mit Rinderhack und Kräutern', cuisine:'Georgien', flag:'🇬🇪',
  protein:'fleisch', base:null, time:{a:40,c:15}, devices:[['topf']], method:'Großer Topf',
  allergens:['gluten'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Tomaten','Gurke','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Weizenmehl',q:90,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl mit 45 ml Wasser zu einem festen, glatten Teig kneten und 15 Minuten abgedeckt ruhen lassen.',
    'Zwiebel sehr fein hacken und mit Hack, Koriander, Kreuzkümmel und 3 EL kaltem Wasser zu einer saftigen Füllung verkneten.',
    'Teig dünn ausrollen und Kreise von 10 cm ausstechen. Je 1 TL Füllung in die Mitte geben, die Ränder in Falten nach oben führen und oben fest zudrehen.',
    'Khinkali in reichlich siedendem Wasser 12 bis 15 Minuten garen, bis sie oben schwimmen und die Füllung durch ist. Tomaten und Gurke als Salat dazu schneiden.',
    'Kinderportion ungesalzen abnehmen und aufschneiden. Erwachsene mit schwarzem Pfeffer und Salz würzen.'
  ],
  kidName:'Mini-Khinkali',
  kid:'Teigtaschen aufschneiden und etwas abkühlen lassen, damit der heiße Saft nicht verbrüht, dann Füllung und Teig klein schneiden. Hack muss vollständig durchgegart sein, Gurke geschält.',
  leftover:'Khinkali-Pfanne · 10 Min. – Übrige Teigtaschen halbieren und in der Pfanne mit etwas Öl goldbraun anbraten.',
  tipp:'Größere Mengen auf Vorrat falten und roh einfrieren, gefroren direkt ins kochende Wasser geben und 3 Minuten länger garen.'
},
{
  id:'ge-ojakhuri', name:'Ojakhuri · Schweinefilet mit Ofenkartoffeln, Zwiebeln und Paprika', cuisine:'Georgien', flag:'🇬🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:35}, devices:[['ofen'],['pfanne']], method:'Backofen + Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Rote Paprika','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Schweinefilet',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Granatapfelkerne',q:1,u:'EL',c:'gemuese'},
    {n:'Chmeli-Suneli (Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Spalten schneiden, mit zwei Dritteln des Öls mischen und 30 bis 35 Minuten knusprig backen, einmal wenden.',
    'Schweinefilet in Würfel schneiden und mit Chmeli-Suneli mischen. Zwiebel und Paprika in Streifen schneiden.',
    'Fleisch im restlichen Öl in der Pfanne 5 bis 6 Minuten rundum braten, bis es durch ist. Zwiebel, Paprika und gehackten Knoblauch zugeben und 5 Minuten weich braten.',
    'Kartoffeln untermischen und mit Koriander bestreuen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Granatapfelkernen servieren.'
  ],
  kidName:'Mini-Ojakhuri',
  kid:'Schweinefleisch vollständig durchgaren und sehr klein schneiden, Kartoffeln weich und ohne harte Kruste anbieten. Ohne Salz und Granatapfelkerne, Paprika weich gebraten.',
  leftover:'Ojakhuri-Pfanne mit Ei · 10 Min. – Reste in der Pfanne erhitzen und mit einem Ei vollständig stocken lassen.',
  tipp:'Ojakhuri heißt „Familienessen“, im Original werden die Kartoffeln in Fett gebraten, aus dem Ofen werden sie genauso knusprig.'
},
{
  id:'ge-kharcho', name:'Kharcho · dicke Rindfleisch-Reis-Suppe mit Walnüssen und Tomaten', cuisine:'Georgien', flag:'🇬🇪',
  protein:'fleisch', base:'reis', time:{a:15,c:70}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:['nuesse'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Kräuter'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:100,u:'g',c:'fisch'},
    {n:'Reis',q:50,u:'g',c:'vorrat'},
    {n:'Walnusskerne',q:15,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Chmeli-Suneli (Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und im Topf in Öl 4 Minuten dünsten. Rindfleisch in kleine Würfel schneiden, zugeben, mit 600 ml Wasser auffüllen und zugedeckt 45 Minuten köcheln.',
    'Paprika würfeln und mit passierten Tomaten und Reis zugeben. 18 Minuten köcheln, bis der Reis weich und die Suppe dicklich ist.',
    'Walnüsse sehr fein mahlen und mit gehacktem Knoblauch und Chmeli-Suneli einrühren, 3 Minuten mitkochen und den Koriander unterrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, einem Spritzer Zitrone und nach Wunsch Chili würzen.'
  ],
  kidName:'Mini-Kharcho',
  kid:'Suppe dick und löffelbar anbieten und das Fleisch sehr fein schneiden. Walnüsse nur fein gemahlen, nie ganz, und ohne Chili, Zitrone und Salz.',
  leftover:'Kharcho-Reis · 8 Min. – Dick eingekochte Reste als Reispfanne mit frischem Koriander servieren.',
  tipp:'Im Original sorgt Tkemali, eine saure Pflaumensoße, für die Säure, ein Spritzer Zitronensaft kommt dem nahe.'
},
{
  id:'ge-lobio', name:'Lobio · georgischer Kidneybohnen-Eintopf mit Koriander und Vollkorn-Fladenbrot', cuisine:'Georgien', flag:'🇬🇪',
  protein:'huelsen', base:null, time:{a:10,c:20}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Tomaten','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Chmeli-Suneli (Gewürzmischung)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und in Öl 5 Minuten weich dünsten, gehackten Knoblauch und Chmeli-Suneli 1 Minute mitrösten.',
    'Abgespülte Bohnen, gehackte Tomaten und 100 ml Wasser zugeben und 12 Minuten köcheln.',
    'Ein Drittel der Bohnen mit dem Kartoffelstampfer zerdrücken, damit der Eintopf cremig wird. Koriander unterrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, einem Spritzer Essig und nach Wunsch Chili würzen und mit Fladenbrot und Gurke servieren.'
  ],
  kidName:'Mini-Lobio',
  kid:'Bohnen für das Kind vollständig zerdrücken und mit Fladenbrotstreifen zum Dippen anbieten. Gurke schälen, ohne Chili und Salz.',
  leftover:'Lobio-Fladenbrot · 10 Min. – Bohnenreste dick einkochen, auf Fladenbrot streichen, mit Käse bestreuen und im Ofen überbacken.',
  tipp:'Typisch georgisch ist 1 EL fein gemahlene Walnüsse im Eintopf, dann aber an das Nuss-Allergen denken.'
},
{
  id:'ge-ajapsandali', name:'Ajapsandali · georgisches Schmorgemüse mit Aubergine, Feta und Fladenbrot', cuisine:'Georgien', flag:'🇬🇪',
  protein:'milch', base:null, time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Aubergine','Rote Paprika','Tomaten','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Aubergine',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Feta',q:60,u:'g',c:'kuehl'},
    {n:'Naturjoghurt',q:100,u:'g',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Aubergine in 2 cm große Würfel schneiden und im Topf in Öl 6 Minuten rundum anbraten. Zwiebel und Paprika in Streifen schneiden, zugeben und 5 Minuten mitbraten.',
    'Gehackte Tomaten und Knoblauch zugeben und zugedeckt 20 Minuten sanft schmoren, bis die Aubergine ganz weich ist.',
    'Koriander unterrühren und mit zerbröseltem Feta, Joghurt und Fladenbrot servieren.',
    'Kinderportion ungesalzen abnehmen und nur wenig Feta dazugeben. Erwachsene mit Salz, Pfeffer und nach Wunsch Chili würzen.'
  ],
  kidName:'Mini-Ajapsandali',
  kid:'Gemüse weich schmoren und grob zerdrücken, Auberginenschale weich gegart oder entfernt. Feta ist salzig, deshalb lieber Joghurt als milde Eiweißquelle und Fladenbrot zum Dippen.',
  leftover:'Gemüse-Omelett · 10 Min. – Übriges Schmorgemüse in der Pfanne erhitzen und mit zwei Eiern vollständig stocken lassen.',
  tipp:'Ajapsandali schmeckt am nächsten Tag noch besser und wird in Georgien auch lauwarm gegessen.'
},
{
  id:'ge-adjaruli-khachapuri', name:'Adjaruli Khachapuri · Käsebrot-Schiffchen mit durchgebackenem Ei und Tomatensalat', cuisine:'Georgien', flag:'🇬🇪',
  protein:'milch', base:null, time:{a:20,c:20}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke'], season:[6,7,8,9],
  ing:[
    {n:'Weizenvollkornmehl',q:80,u:'g',c:'vorrat'},
    {n:'Magerquark',q:80,u:'g',c:'kuehl'},
    {n:'Milch',q:30,u:'ml',c:'kuehl'},
    {n:'Backpulver',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Mozzarella',q:40,u:'g',c:'kuehl'},
    {n:'Feta',q:30,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Mehl, Backpulver, 40 g Quark, Milch und Öl zu einem glatten Teig kneten und zu einem Oval ausrollen.',
    'Die langen Ränder einrollen und die Enden zu einem Schiffchen zusammendrücken. Mozzarella und Feta zerkleinern, mit dem restlichen Quark mischen und in die Mitte füllen.',
    'Auf dem Blech 12 Minuten backen. Ei in eine Mulde der Käsefüllung gleiten lassen und weitere 7 bis 8 Minuten backen, bis Eiweiß und Eigelb vollständig fest sind.',
    'Tomaten und Gurke als Salat dazu schneiden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene den Salat mit Salz, Pfeffer und etwas Öl würzen.'
  ],
  kidName:'Mini-Khachapuri',
  kid:'Ein kleines Schiffchen formen und das Ei vollständig durchbacken, bis kein Eigelb mehr fließt, dann in Streifen schneiden. Käse ist salzig, daher den Salat ungesalzen lassen und die Gurke schälen.',
  leftover:'Khachapuri-Toast · 5 Min. – Kalte Stücke im Ofen oder Toaster aufbacken und mit Tomate essen.',
  tipp:'Im Original werden Sulguni und Imeruli-Käse verwendet, Mozzarella mit etwas Feta kommt dem Geschmack am nächsten.'
},
{
  id:'ge-mtsvane-lobio', name:'Mtsvane Lobio · grüne Bohnen mit Ei, Tomaten und Koriander', cuisine:'Georgien', flag:'🇬🇪',
  protein:'ei', base:null, time:{a:8,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Grüne Bohnen','Zwiebel','Tomaten','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Grüne Bohnen',q:200,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Grüne Bohnen putzen, in 3 cm lange Stücke schneiden und in der Pfanne mit 100 ml Wasser zugedeckt 7 Minuten weich dünsten. Restliches Wasser abgießen.',
    'Zwiebel in Streifen schneiden, Tomate würfeln und mit Öl und gehacktem Knoblauch 3 Minuten mit den Bohnen braten.',
    'Eier verquirlen, darübergießen und unter gelegentlichem Rühren 3 bis 4 Minuten vollständig stocken lassen. Koriander darüberstreuen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch Chili würzen und mit Vollkornbrot servieren.'
  ],
  kidName:'Mini-Mtsvane-Lobio',
  kid:'Bohnen sehr weich garen und in kurze Stücke schneiden, Ei vollständig stocken lassen. Ohne Salz und Chili, Brot in weichen Streifen.',
  leftover:'Bohnen-Ei-Brot · 5 Min. – Kalte Reste mit Tomate auf Vollkornbrot als Abendbrot essen.',
  tipp:'TK-Bohnen sparen das Putzen und sind in 6 Minuten weich.'
},
{
  id:'ge-elarji', name:'Elarji · cremige Polenta mit Mozzarella und Knoblauch-Spinat', cuisine:'Georgien', flag:'🇬🇪',
  protein:'milch', base:'polenta', time:{a:10,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Babyspinat','Kirschtomaten','Kräuter'], season:[],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Mozzarella',q:60,u:'g',c:'kuehl'},
    {n:'Babyspinat',q:120,u:'g',c:'gemuese'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Milch mit 150 ml Wasser aufkochen, Polenta einrühren und bei kleiner Hitze unter Rühren 5 bis 8 Minuten weich und cremig garen.',
    'Mozzarella klein zupfen und unter die heiße Polenta rühren, bis er schmilzt und Fäden zieht.',
    'Spinat mit gehacktem Knoblauch in der Pfanne in Öl 2 bis 3 Minuten zusammenfallen lassen, Kirschtomaten halbieren und kurz mitschwenken.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Koriander würzen.'
  ],
  kidName:'Mini-Elarji',
  kid:'Polenta lauwarm und weich anbieten, den Käse gut unterrühren, damit keine zähen Fäden entstehen. Spinat fein hacken, Kirschtomaten vierteln, kein Salz.',
  leftover:'Elarji-Bällchen · 15 Min. – Kalte Polenta zu Bällchen formen und im Ofen bei 200 °C goldbraun backen.',
  tipp:'Im Original wird Sulguni verwendet, ein elastischer georgischer Käse, Mozzarella ist der nächste Ersatz.'
},
{
  id:'ge-tolma', name:'Tolma · gefüllte Paprika und Tomaten mit Reis, Linsen und Kräutern', cuisine:'Georgien', flag:'🇬🇪',
  protein:'huelsen', base:'reis', time:{a:20,c:40}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Paprika','Tomaten','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rundkornreis',q:35,u:'g',c:'vorrat'},
    {n:'Rote Linsen, trocken',q:50,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und im Topf in Öl 4 Minuten glasig dünsten. In einer Schüssel mit Reis, abgespülten Linsen, Koriander und 3 EL Wasser mischen.',
    'Paprika oben aufschneiden und entkernen, Tomate aushöhlen und das Innere hacken. Das Gemüse locker zu drei Vierteln füllen und die Deckel aufsetzen.',
    'Gefülltes Gemüse aufrecht in den Topf setzen, passierte Tomaten, Tomateninneres und so viel Wasser angießen, dass es zur Hälfte bedeckt ist. Zugedeckt 35 bis 40 Minuten sanft köcheln, bis Reis und Linsen weich sind.',
    'Kinderportion ungesalzen abnehmen. Joghurt für die Erwachsenen mit fein geriebenem Knoblauch und Salz verrühren und dazu servieren.'
  ],
  kidName:'Mini-Tolma',
  kid:'Füllung aus der Paprika lösen, die Paprikahaut entfernen und alles mit etwas Soße zerdrücken. Joghurt pur ohne Knoblauch und Salz dazugeben.',
  leftover:'Tolma-Reispfanne · 10 Min. – Reste klein schneiden und in der Pfanne mit Soße und einem Ei durchbraten.',
  tipp:'Klassisch wird Tolma in Weinblätter oder Kohl gewickelt, gefüllte Paprika und Tomaten sind im Sommer die schnellere Variante.'
},
{
  id:'ge-badrijani', name:'Badrijani nigvzit · Ofen-Auberginenröllchen mit Walnuss-Quark-Füllung und Fladenbrot', cuisine:'Georgien', flag:'🇬🇪',
  protein:'milch', base:null, time:{a:20,c:18}, devices:[['ofen','airfryer']], method:'Backofen oder Airfryer',
  allergens:['nuesse','milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Aubergine','Tomaten','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Aubergine',q:1,u:'Stk.',c:'gemuese'},
    {n:'Walnusskerne',q:20,u:'g',c:'vorrat'},
    {n:'Magerquark',q:100,u:'g',c:'kuehl'},
    {n:'Koriander, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Granatapfelkerne',q:2,u:'EL',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Chmeli-Suneli (Gewürzmischung)',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Aubergine längs in 5 mm dünne Scheiben schneiden, beidseitig dünn mit Öl bestreichen und auf dem Blech 15 bis 18 Minuten backen, bis sie weich und biegsam sind. Im Airfryer bei 190 °C 10 bis 12 Minuten.',
    'Walnüsse sehr fein mahlen und mit Quark, Koriander und Chmeli-Suneli zu einer cremigen Paste verrühren.',
    'Auberginenscheiben etwas abkühlen lassen, mit der Paste bestreichen und aufrollen. Tomate in Spalten schneiden und mit Fladenbrot dazu servieren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit fein geriebenem Knoblauch, Salz und Granatapfelkernen bestreuen.'
  ],
  kidName:'Mini-Auberginenröllchen',
  kid:'Aubergine sehr weich backen und in kleine Stücke schneiden, Walnüsse nur fein gemahlen in der Paste. Ohne Knoblauch, Salz und Granatapfelkerne, Fladenbrot zum Dippen.',
  leftover:'Auberginen-Fladenbrot · 5 Min. – Übrige Röllchen klein schneiden und mit Tomate in warmes Fladenbrot füllen.',
  tipp:'Aus dem Ofen statt aus der Pfanne nehmen die Auberginen nur wenig Öl auf, und Quark macht die Walnusspaste milder und eiweißreicher.'
}
);
