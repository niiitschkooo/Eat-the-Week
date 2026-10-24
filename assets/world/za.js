/* Grün geplant · Südafrika · Top 15 */
RECIPES.push(
{
  id:'za-bobotie', name:'Bobotie · Curry-Hackauflauf mit Eierguss und gelbem Vollkornreis', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'fleisch', base:'reis', time:{a:20,c:35}, devices:[['pfanne'],['ofen'],['topf']], method:'Pfanne + Backofen + Topf',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zwiebel','Karotten'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornbrot',q:0.5,u:'Scheiben',c:'brot'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Aprikosen, getrocknet',q:2,u:'Stk.',c:'vorrat'},
    {n:'Mildes Currypulver',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Reis mit Kurkuma in der doppelten Menge Wasser 30 Minuten garen.',
    'Brot in 3 EL der Milch einweichen. Zwiebel und Karotte fein würfeln und mit dem Hack ohne Öl in einer beschichteten Pfanne 6 Minuten krümelig braten.',
    'Currypulver, klein geschnittene Aprikosen, ausgedrücktes Brot und 3 EL Wasser untermischen, 3 Minuten köcheln und in eine kleine Auflaufform füllen.',
    'Ei mit der restlichen Milch verquirlen, über die Hackmasse gießen und 25 Minuten backen, bis der Eierguss vollständig gestockt und goldgelb ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene am Tisch nach Geschmack mit Salz würzen.'
  ],
  kidName:'Mini-Bobotie',
  kid:'Hackmasse mit dem vollständig gestockten Eierguss klein schneiden und mit dem gelben Reis mischen, Aprikosenstücke fein hacken. Ohne Salz.',
  leftover:'Bobotie-Wrap · 8 Min. – Reste vollständig erhitzen und mit Salat in ein Fladenbrot rollen.',
  tipp:'Klassisch kommen Rosinen und Fruchtchutney hinein, getrocknete Aprikosen geben die typische Süße ohne Zuckerzusatz.'
},
{
  id:'za-bredie', name:'Tomato Bredie · Lamm-Tomaten-Schmortopf mit Kartoffeln und grünen Bohnen', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:60}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slowcooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Tomaten','Grüne Bohnen','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Lammfleisch, mager, gewürfelt',q:110,u:'g',c:'fisch'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Grüne Bohnen',q:80,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Lammwürfel im Topf in Öl rundum 5 Minuten anbraten. Gewürfelte Zwiebel und Knoblauch 3 Minuten mitbraten.',
    'Tomaten, Zimt, Lorbeerblatt und 200 ml Wasser zugeben und zugedeckt bei kleiner Hitze 35 Minuten schmoren.',
    'Kartoffeln in 3 cm Würfel und Bohnen in Stücke schneiden, zugeben und weitere 20 Minuten garen, bis alles weich ist und die Soße eindickt.',
    'Lorbeerblatt entfernen. Kinderportion ohne Salz und Chili abnehmen, Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Lamm-Tomaten-Stampf',
  kid:'Lamm fein zerzupfen und Kartoffeln und Bohnen mit der Soße weich zerdrücken. Ohne Salz und Chili.',
  leftover:'Bredie-Teller · 8 Min. – Reste vollständig erhitzen und mit Vollkornbrot zum Tunken servieren.',
  tipp:'Im Slowcooker auf niedriger Stufe 6 Stunden garen, dann wird das Lamm besonders zart.'
},
{
  id:'za-sosaties', name:'Sosaties · Hähnchen-Aprikosen-Spieße mit Curry-Marinade, Mais und Fladenbrot', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'gefluegel', base:null, time:{a:12,c:12}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Zwiebel','Mais'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Aprikosen, getrocknet',q:3,u:'Stk.',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:80,u:'g',c:'vorrat'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Currypulver, Apfelessig und die Hälfte des Öls verrühren. Hähnchen in 3 cm Würfel, Paprika und Zwiebel in Stücke schneiden und mit der Marinade mischen.',
    'Hähnchen, Aprikosen, Paprika und Zwiebel abwechselnd auf Spieße stecken.',
    'Spieße im restlichen Öl in einer Grill- oder Bratpfanne bei mittlerer Hitze 10 bis 12 Minuten rundum braten, bis das Hähnchen durchgegart ist. Mais in den letzten 3 Minuten mit in die Pfanne geben und das Fladenbrot kurz erwärmen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Hähnchen-Aprikosen-Stückchen',
  kid:'Hähnchen und Aprikosen vom Spieß nehmen und klein schneiden, Maiskörner leicht andrücken. Ohne Salz und Chili.',
  leftover:'Sosatie-Wrap · 5 Min. – Restliches Hähnchen vollständig erhitzen und mit Salat in ein Fladenbrot rollen.',
  tipp:'Über Nacht mariniert werden die Spieße saftiger, auf dem Grill brauchen sie etwa 10 Minuten.'
},
{
  id:'za-cape-malay-curry', name:'Cape Malay Curry · mildes Hähnchen-Kartoffel-Curry mit Zimt und Vollkornreis', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:120,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:120,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Mildes Currypulver',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 30 Minuten garen.',
    'Zwiebel und Ingwer fein würfeln und in Öl 4 Minuten dünsten, Currypulver und Zimt 1 Minute mitrösten.',
    'Hähnchen in Stücke und Kartoffeln in 2 cm Würfel schneiden, mit Tomaten und 150 ml Wasser zugeben und zugedeckt 20 Minuten köcheln, bis die Kartoffeln weich sind und das Fleisch durchgegart ist.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit dem Reis servieren.'
  ],
  kidName:'Mildes Hähnchen-Curry',
  kid:'Hähnchen zerzupfen und die Kartoffeln mit der Soße zerdrücken, dann mit Reis mischen. Ohne Salz und Chili.',
  leftover:'Curry-Roti · 8 Min. – Reste vollständig erhitzen und in ein warmes Fladenbrot rollen.',
  tipp:'Kapmalaiische Currys sind eher mild und leicht süßlich, ein Stück Zimtstange im Topf reicht für viel Aroma.'
},
{
  id:'za-potjiekos', name:'Potjiekos · Schichteintopf mit Rind, Kartoffeln, Kürbis und grünen Bohnen', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:60}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slowcooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Kürbis','Karotten','Grüne Bohnen','Pilze','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Hokkaido-Kürbis',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Champignons',q:60,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch in einem schweren Topf in Öl rundum 5 Minuten anbraten, Zwiebel in Ringen 3 Minuten mitbraten und mit Paprikapulver bestäuben.',
    'Brühe angießen und zugedeckt bei kleiner Hitze 30 Minuten schmoren.',
    'Gemüse nicht unterrühren, sondern in Schichten auflegen: zuerst Kartoffeln und Karotten in dicken Scheiben, dann Kürbiswürfel, obenauf Bohnen und Champignons. Zugedeckt weitere 30 Minuten garen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene am Tisch mit Salz und Pfeffer würzen.'
  ],
  kidName:'Weicher Potjie-Teller',
  kid:'Rindfleisch fein zerzupfen, Gemüse und Kartoffeln weich zerdrücken und mit etwas Schmorsaft mischen. Ohne Salz.',
  tipp:'Im Slowcooker die Schichten auf niedriger Stufe 6 Stunden garen, dabei ebenfalls nicht umrühren.'
},
{
  id:'za-pap-en-wors', name:'Pap en Wors · Rinder-Bratwürstchen mit Koriander, Polenta und Tomaten-Zwiebel-Soße', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'fleisch', base:'polenta', time:{a:20,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika'], season:[7,8,9],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Hack mit Koriander und Muskat verkneten und mit nassen Händen zu fingerdicken, langen Würstchen formen.',
    'Würstchen in der Hälfte des Öls bei mittlerer Hitze 8 bis 10 Minuten rundum braten, bis sie vollständig durchgegart sind.',
    'Für die Soße (Sheba) Zwiebel, Paprika und Tomaten würfeln und im restlichen Öl 10 Minuten sämig schmoren. Parallel Polenta in 300 ml Wasser unter Rühren 5 Minuten zu einem festen Brei kochen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene Soße und Würstchen mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Mini-Würstchen mit Pap',
  kid:'Würstchen vollständig durchbraten, längs vierteln und klein schneiden statt in runden Scheiben. Polenta weich kochen, Soße ohne Salz und Chili.',
  tipp:'Echte Boerewors ist eine lange Spiralwurst vom Grill, die selbst geformte Hackvariante enthält deutlich weniger Fett.'
},
{
  id:'za-pickled-fish', name:'Pickled Fish · kapmalaiischer Curry-Zwiebel-Fisch mit Vollkornbrot', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'fisch', base:null, time:{a:15,c:25}, devices:[['pfanne']], method:'Pfanne',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Karotten'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Apfelessig',q:2,u:'EL',c:'gewuerz',p:true},
    {n:'Mildes Currypulver',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Fisch in große Stücke schneiden und in einer beschichteten Pfanne in der Hälfte des Öls je Seite 3 Minuten braten, bis er durchgegart ist, dann in eine Schale legen.',
    'Zwiebel in Ringe und Karotte in dünne Scheiben schneiden und im restlichen Öl 6 Minuten weich dünsten. Currypulver, Kurkuma und Lorbeerblatt 1 Minute mitrösten.',
    'Kinderportion Fisch und etwas Gemüse ohne Essig, Salz und Chili abnehmen. Für die Erwachsenen Essig und 100 ml Wasser zum Gemüse geben, 3 Minuten köcheln, mit Salz und nach Wunsch Chiliflocken würzen, über den Fisch gießen, 10 Minuten ziehen lassen und mit Brot servieren.'
  ],
  kidName:'Milder Curry-Fisch mit Brot',
  kid:'Fisch ohne Essigsud entgräten und zerpflücken, weiches Gemüse und Brotstreifen dazu. Ohne Salz und Chili.',
  leftover:'Fisch-Brot · 5 Min. – Restlichen Fisch kalt mit Salat auf Vollkornbrot essen.',
  tipp:'Am Kap isst man Pickled Fish zu Ostern kalt, nach einem Tag im Kühlschrank schmeckt er am besten.'
},
{
  id:'za-snoek', name:'Snoek-Braai-Art · Ofenlachs mit Aprikosen-Glasur, Süßkartoffel und grünen Bohnen', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'fisch', base:null, time:{a:10,c:25}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Süßkartoffel','Grüne Bohnen','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Süßkartoffel',q:250,u:'g',c:'gemuese'},
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Grüne Bohnen',q:100,u:'g',c:'gemuese'},
    {n:'Aprikosen, getrocknet',q:2,u:'Stk.',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Süßkartoffel in Spalten schneiden, mit der Hälfte des Öls mischen und auf dem Blech 12 Minuten backen.',
    'Aprikosen mit 2 EL heißem Wasser, Zitronensaft, Knoblauch und dem restlichen Öl fein pürieren.',
    'Bohnen und Fisch aufs Blech legen, den Fisch mit der Aprikosenpaste bestreichen und alles 12 bis 14 Minuten backen, bis der Fisch gerade durch ist.',
    'Kinderportion ohne Salz und Chili abnehmen und den Fisch entgräten. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Lachs mit Süßkartoffel-Spalten',
  kid:'Lachs entgräten und zerpflücken, Süßkartoffel und Bohnen weich backen und in kleine Stücke schneiden. Ohne Salz und Chili.',
  tipp:'Snoek ist ein fetter Raubfisch vom Westkap, Lachs oder Makrele kommen dem Geschmack am nächsten.'
},
{
  id:'za-hake-chips', name:'Hake and Chips · Ofenfisch in Maiskruste mit Kartoffelspalten und Krautsalat', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['fisch','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Weißkohl','Karotten','Zitrone'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Polenta (Maisgrieß)',q:15,u:'g',c:'vorrat'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls und dem Paprikapulver mischen und auf dem Blech 15 Minuten backen.',
    'Fisch trocken tupfen, dünn mit dem restlichen Öl bestreichen und in Maisgrieß wenden. Kartoffeln wenden, Fisch dazulegen und alles 12 bis 15 Minuten backen, bis der Fisch gerade durch und die Kruste goldbraun ist.',
    'Kohl und Karotte fein reiben und mit Joghurt und etwas Zitronensaft zu einem Krautsalat mischen.',
    'Kinderportion ohne Salz und Essig abnehmen und den Fisch entgräten. Erwachsene Kartoffeln mit Salz und Apfelessig, Fisch mit Zitrone würzen.'
  ],
  kidName:'Knusper-Fisch mit Kartoffelspalten',
  kid:'Fisch entgräten und in Streifen teilen, Kartoffeln weich backen und Krautsalat sehr fein gerieben in kleiner Menge dazu. Ohne Salz und Essig.',
  tipp:'In Südafrika gibt es Hake and Chips mit Essig an jeder Ecke, im Ofen wird die Maisgrieß-Kruste ohne Frittieren knusprig.'
},
{
  id:'za-bunny-chow', name:'Bunny Chow · mildes Bohnen-Curry im ausgehöhlten Vollkornbrötchen', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'huelsen', base:null, time:{a:10,c:14}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornbrötchen',q:1,u:'Stk.',c:'brot'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Mildes Currypulver',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel und Ingwer fein würfeln und in Öl 4 Minuten dünsten, Currypulver 1 Minute mitrösten.',
    'Tomaten, abgespülte Bohnen und 50 ml Wasser zugeben und 8 Minuten köcheln, dann den Spinat unterheben und zusammenfallen lassen.',
    'Vom Brötchen einen Deckel abschneiden und das Innere herauslösen, sodass eine Schale bleibt.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen, ins Brötchen füllen und mit dem Brotinneren zum Tunken servieren.'
  ],
  kidName:'Bohnen-Curry mit Brotstückchen',
  kid:'Bohnen zerdrücken und mit dem weichen Brotinneren mischen, statt sie im Brötchen zu servieren. Ohne Salz und Chili.',
  leftover:'Curry-Toast · 8 Min. – Restliches Bohnen-Curry vollständig erhitzen und auf geröstetem Vollkornbrot essen.',
  tipp:'Bunny Chow stammt aus Durban und wird traditionell in einem Viertel Kastenbrot serviert und mit den Händen gegessen.'
},
{
  id:'za-pap-chakalaka', name:'Pap und Chakalaka · Maisbrei mit würzigem Gemüse-Bohnen-Relish', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'huelsen', base:'polenta', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Rote Paprika','Weißkohl','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:50,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel und Paprika würfeln, Karotte grob reiben und Kohl fein schneiden. Alles in Öl 5 Minuten braten und das Currypulver 1 Minute mitrösten.',
    'Tomaten und abgespülte Bohnen zugeben und 8 Minuten köcheln, bis das Gemüse weich ist.',
    'Parallel 300 ml Wasser aufkochen, Polenta einrühren und unter Rühren 5 Minuten zu einem festen Brei garen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene Chakalaka mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Weicher Pap mit Bohnengemüse',
  kid:'Polenta weich kochen, Bohnen zerdrücken und das Gemüse sehr weich garen. Ohne Salz und Chili.',
  leftover:'Chakalaka-Toast · 5 Min. – Kalte Chakalaka auf geröstetem Vollkornbrot essen.',
  tipp:'Chakalaka entstand in den Townships rund um Johannesburg und schmeckt am nächsten Tag kalt ebenso gut.'
},
{
  id:'za-umngqusho', name:'Umngqusho · cremiger Mais-Bohnen-Eintopf mit Kürbis', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'huelsen', base:null, time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Mais','Kürbis','Zwiebel','Tomaten'], season:[9,10,11],
  ing:[
    {n:'Mais (Dose oder TK)',q:150,u:'g',c:'vorrat'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel würfeln und in Öl 4 Minuten dünsten. Kürbis in 2 cm Würfel und Tomate klein schneiden.',
    'Kürbis, Tomate, Mais, abgespülte Bohnen, Brühe und Lorbeerblatt zugeben und zugedeckt 18 Minuten köcheln, bis der Kürbis weich ist.',
    'Lorbeerblatt entfernen und etwa ein Drittel mit dem Kartoffelstampfer grob zerdrücken, damit der Eintopf cremig wird.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Cremiger Mais-Bohnen-Brei',
  kid:'Mais und Bohnen gründlich zerdrücken oder pürieren, denn ganze Maiskörner sind für Kleinkinder schwer zu kauen. Ohne Salz und Chili.',
  tipp:'Im Original wird Samp, also geschälter und gebrochener Mais, über Nacht eingeweicht, im Afroshop gibt es ihn getrocknet.'
},
{
  id:'za-breyani', name:'Cape Malay Breyani · Gewürzreis mit Linsen, Kartoffeln und Joghurt', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'huelsen', base:'reis', time:{a:15,c:40}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Tomaten','Zwiebel','Erbsen'], season:[],
  ing:[
    {n:'Vollkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Braune Linsen, trocken',q:40,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in Streifen schneiden und im Topf in Öl 6 Minuten goldbraun braten, Garam Masala und Kurkuma 1 Minute mitrösten.',
    'Kartoffeln in 2 cm Würfel schneiden und mit den Tomaten 3 Minuten mitschmoren.',
    'Gewaschenen Reis, abgespülte Linsen und 300 ml Wasser zugeben, aufkochen und zugedeckt bei kleiner Hitze 30 Minuten garen, bis Reis und Linsen weich sind. Erbsen in den letzten 5 Minuten unterheben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch etwas Chili würzen und mit einem Klecks Joghurt servieren.'
  ],
  kidName:'Linsen-Gewürzreis mit Joghurt',
  kid:'Linsen und Kartoffeln mit der Gabel zerdrücken und mit Joghurt cremig mischen. Ohne Salz und Chili.',
  leftover:'Breyani-Pfanne · 10 Min. – Reste mit einem Schuss Wasser in der Pfanne vollständig durcherhitzen.',
  tipp:'Zu Festtagen wird Breyani in Schichten mit Hähnchen oder Lamm gekocht, die Linsen gehören aber immer dazu.'
},
{
  id:'za-braaibroodjie', name:'Braaibroodjie · Käse-Tomaten-Toast aus der Pfanne mit Gurken-Joghurt-Salat', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'milch', base:null, time:{a:10,c:8}, devices:[['pfanne']], method:'Pfanne',
  allergens:['milch','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Zwiebel','Gurke','Babyspinat'], season:[7,8,9],
  ing:[
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Cheddar, gerieben',q:50,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:20,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Tomate in Scheiben und Zwiebel in sehr feine Ringe schneiden.',
    'Eine Brotscheibe mit Käse, Tomate, Spinat und Zwiebel belegen, mit der zweiten Scheibe abdecken und außen dünn mit Öl bestreichen.',
    'In einer Pfanne bei mittlerer Hitze, mit einem Deckel beschwert, je Seite 3 bis 4 Minuten rösten, bis der Käse geschmolzen ist.',
    'Gurke in Scheiben schneiden und mit Joghurt mischen. Kinderportion ungesalzen abnehmen, Erwachsene den Gurkensalat mit Salz und Pfeffer würzen.'
  ],
  kidName:'Käsetoast-Streifen',
  kid:'Toast für das Kind ohne Zwiebel belegen, etwas abkühlen lassen und in Streifen schneiden, Gurke in dünnen Stiften dazu. Ohne Salz.',
  tipp:'In Südafrika kommt der Toast zum Schluss auf den Grillrost, wenn die Kohlen nicht mehr ganz so heiß sind.'
},
{
  id:'za-morogo', name:'Morogo · Spinat-Tomaten-Pfanne mit Rührei und Pap', cuisine:'Südafrika', flag:'🇿🇦',
  protein:'ei', base:'polenta', time:{a:8,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Babyspinat','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Babyspinat',q:120,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel, Knoblauch und Tomate würfeln. Zwiebel und Knoblauch in Öl 3 Minuten dünsten, Tomate zugeben und 3 Minuten schmoren.',
    'Spinat grob hacken, zugeben und 3 Minuten zusammenfallen lassen. Eier verquirlen, unterrühren und 3 Minuten vollständig stocken lassen.',
    'Parallel 300 ml Wasser aufkochen, Polenta einrühren und unter Rühren 5 Minuten zu einem festen Brei garen.',
    'Kinderportion ohne Salz und Chili abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Spinat-Ei mit weichem Pap',
  kid:'Ei vollständig durchgaren und klein rühren, Spinat fein hacken und mit weicher Polenta mischen. Ohne Salz und Chili.',
  tipp:'Morogo ist der Sammelname für wildes Blattgemüse wie Amarant, als Ersatz passen Spinat oder junger Grünkohl.'
}
);
