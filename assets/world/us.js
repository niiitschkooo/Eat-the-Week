/* Grün geplant · USA · Top 15 */
RECIPES.push(
{
  id:'us-chili', name:'Chili con Carne · mageres Rinderhack mit Bohnen, Paprika und Vollkornreis', cuisine:'USA', flag:'🇺🇸',
  protein:'fleisch', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Tomaten','Mais','Karotten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:75,u:'g',c:'fisch'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:50,u:'g',c:'vorrat'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser etwa 30 Minuten garen.',
    'Zwiebel, Karotte und Paprika fein würfeln. Hack in Öl krümelig braten, Gemüse zugeben und 5 Minuten mitdünsten.',
    'Kreuzkümmel kurz mitrösten, gehackte Tomaten, Bohnen und Mais zugeben und offen 20 Minuten sämig köcheln.',
    'Kinderportion ungewürzt abnehmen und die Bohnen zerdrücken. Erwachsene mit Salz und Chiliflocken abschmecken.'
  ],
  kidName:'Mildes Mini-Chili',
  kid:'Ohne Chili und Salz abnehmen, Bohnen und Mais zerdrücken und mit weichem Reis mischen.',
  leftover:'Chili-Ofenkartoffel · 10 Min. – Reste erhitzen und über eine in der Mikrowelle gegarte Kartoffel geben.',
  tipp:'Die doppelte Menge kochen und portionsweise einfrieren, Chili schmeckt aufgewärmt noch runder.'
},
{
  id:'us-mac-cheese', name:'Mac and Cheese · Vollkornmakkaroni in Käsesauce mit Blumenkohl und Brokkoli', cuisine:'USA', flag:'🇺🇸',
  protein:'milch', base:'nudeln', time:{a:10,c:12}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Blumenkohl','Brokkoli','Erbsen'], season:[6,7,8,9,10],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Blumenkohl',q:100,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:80,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:40,u:'g',c:'tk'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Cheddar, gerieben',q:35,u:'g',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln nach Packungsangabe etwa 10 Minuten kochen. Blumenkohl in kleinen Röschen von Anfang an, Brokkoli und Erbsen für die letzten 4 Minuten mitgaren.',
    'Alles abgießen. Milch mit der Stärke im Topf verrühren und unter Rühren aufkochen, bis sie andickt.',
    'Herd ausschalten, Käse einrühren und schmelzen lassen, Nudeln und Gemüse untermischen. Blumenkohl dabei leicht zerdrücken, er macht die Sauce sämig.',
    'Kinderportion ohne Senf abnehmen. Erwachsene mit Senf, Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mini-Mac mit Gemüse',
  kid:'Brokkoli und Blumenkohl sehr weich garen und klein drücken, Erbsen leicht zerquetschen. Ohne Senf und Salz lauwarm servieren.',
  leftover:'Mac-and-Cheese-Auflauf · 15 Min. – Reste in eine Form geben, mit wenig Käse bestreuen und bei 200 °C überbacken.',
  tipp:'Cheddar ist kräftig im Geschmack, schon eine kleine Menge reicht für eine cremige Sauce.'
},
{
  id:'us-baked-beans', name:'Baked Beans · weiße Bohnen in Tomatensauce mit Ofenkartoffeln und Brokkoli', cuisine:'USA', flag:'🇺🇸',
  protein:'huelsen', base:'kartoffeln', time:{a:10,c:40}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Tomaten','Brokkoli','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln halbieren, mit der Hälfte des Öls einreiben und mit der Schnittfläche nach unten 40 Minuten backen. Brokkoliröschen für die letzten 15 Minuten aufs Blech legen.',
    'Zwiebel und Karotte fein würfeln und im restlichen Öl 5 Minuten weich dünsten.',
    'Passierte Tomaten, Paprikapulver und Bohnen zugeben und zugedeckt 15 Minuten sanft köcheln, bis die Sauce dicklich ist.',
    'Kinderportion ohne Senf und Salz abnehmen. Erwachsene mit Senf, Pfeffer und wenig Salz abschmecken und über die aufgebrochenen Kartoffeln geben.'
  ],
  kidName:'Bohnen-Kartoffel-Mus',
  kid:'Bohnen mit der Gabel zerdrücken und mit dem weichen Kartoffelinneren mischen, Brokkoli in kleine weiche Stücke teilen. Ohne Senf und Salz.',
  leftover:'Bohnen-Toast · 5 Min. – Reste erhitzen und auf geröstetem Vollkornbrot servieren.',
  tipp:'Baked Beans aus der Dose enthalten viel Zucker und Salz, selbst gekocht sind sie in 20 Minuten fertig.'
},
{
  id:'us-sheet-pan-chicken', name:'Sheet-Pan Chicken · Hähnchen mit Süßkartoffel, Brokkoli und Paprika vom Blech', cuisine:'USA', flag:'🇺🇸',
  protein:'gefluegel', base:'kartoffeln', time:{a:10,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Süßkartoffel','Brokkoli','Rote Paprika','Rote Zwiebel'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Süßkartoffel',q:200,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 210 °C vorheizen. Süßkartoffel in 2 cm große Würfel schneiden, mit der Hälfte des Öls mischen und 12 Minuten backen.',
    'Hähnchen in mundgerechte Stücke, Paprika in Streifen und Zwiebel in Spalten schneiden. Mit Brokkoliröschen, restlichem Öl und Paprikapulver mischen.',
    'Alles zu den Süßkartoffeln aufs Blech geben und weitere 15 bis 18 Minuten backen, bis das Hähnchen innen nicht mehr rosa ist. Inzwischen etwas Joghurt für das Kind beiseitestellen und den Rest mit fein geriebenem Knoblauch verrühren.',
    'Kinderportion ohne Knoblauchdip und Salz abnehmen. Erwachsene salzen und mit dem Dip servieren.'
  ],
  kidName:'Blech-Häppchen',
  kid:'Hähnchen fein zerzupfen, Süßkartoffel und Brokkoli weich zerdrücken. Mit etwas Naturjoghurt ohne Knoblauch und ohne Salz anbieten.',
  leftover:'Hähnchen-Wrap · 6 Min. – Reste erwärmen und mit Salat in eine Vollkorn-Weizentortilla rollen.',
  tipp:'Das Blech nicht zu voll legen, sonst dünstet das Gemüse, statt zu rösten.'
},
{
  id:'us-jambalaya', name:'Jambalaya · kreolischer Reistopf mit Hähnchen, Paprika und Sellerie', cuisine:'USA', flag:'🇺🇸',
  protein:'gefluegel', base:'reis', time:{a:15,c:35}, devices:[['topf']], method:'Ein Topf',
  allergens:['sellerie'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Paprika','Sellerie','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:120,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Staudensellerie',q:1,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in Würfel schneiden, in Öl 4 Minuten rundum anbraten und herausnehmen.',
    'Zwiebel, Paprika, Sellerie und Knoblauch klein würfeln und im selben Topf 5 Minuten dünsten. Paprikapulver und Reis kurz mitrösten.',
    'Gehackte Tomaten und Brühe zugeben und zugedeckt bei kleiner Hitze 30 Minuten garen. Hähnchen für die letzten 10 Minuten zurück in den Topf geben.',
    'Kinderportion abnehmen. Erwachsene mit Cayennepfeffer, Thymian und wenig Salz abschmecken.'
  ],
  kidName:'Milde Hähnchen-Reispfanne',
  kid:'Ohne Cayennepfeffer und Salz abnehmen, Hähnchen sehr klein zupfen und Selleriestücke weich garen oder zerdrücken.',
  leftover:'Jambalaya-Paprika · 25 Min. – Reste in halbierte Paprika füllen und bei 200 °C im Ofen durcherhitzen.',
  tipp:'Im Original kommt Räucherwurst hinein, geräuchertes Paprikapulver bringt das Aroma auch ohne.'
},
{
  id:'us-fish-chowder', name:'Fish Chowder · sämiger Kartoffel-Mais-Eintopf mit Kabeljau', cuisine:'USA', flag:'🇺🇸',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:20}, devices:[['topf']], method:'Topf',
  allergens:['fisch','milch','sellerie'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Mais','Lauch','Karotten','Sellerie'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:60,u:'g',c:'vorrat'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Staudensellerie',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lauch in Ringe, Karotte und Sellerie in kleine Würfel schneiden und in Öl 4 Minuten dünsten.',
    'Kartoffeln in 1 cm große Würfel schneiden, mit Brühe und Thymian zugeben und zugedeckt 12 Minuten köcheln.',
    'Milch und Mais zugeben und ein Drittel der Kartoffeln im Topf zerdrücken. Fisch in großen Stücken einlegen und bei kleiner Hitze 5 bis 6 Minuten ziehen lassen, bis er vollständig gar ist.',
    'Kinderportion abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz, Pfeffer und frischer Petersilie würzen.'
  ],
  kidName:'Mini-Chowder',
  kid:'Fisch gründlich auf Gräten prüfen und zerpflücken, Kartoffeln und Gemüse weich zerdrücken. Ungesalzen und lauwarm servieren.',
  leftover:'Chowder mit Brot · 6 Min. – Reste langsam erhitzen, nicht kochen lassen, und mit Vollkornbrot servieren.',
  tipp:'Im Original gehören Muscheln dazu, mit festem weißem Fisch wird der Eintopf milder und kindgerechter.'
},
{
  id:'us-salmon-cakes', name:'Salmon Cakes · Lachs-Kartoffel-Küchlein aus dem Ofen mit Joghurt-Krautsalat', cuisine:'USA', flag:'🇺🇸',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:30}, devices:[['topf'],['ofen','airfryer']], method:'Topf + Backofen oder Airfryer',
  allergens:['fisch','ei','gluten','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Weißkohl','Karotten','Zitrone'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Lachsfilet',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:150,u:'g',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in 12 Minuten weich kochen, abgießen und zerstampfen. Ofen auf 200 °C vorheizen.',
    'Lachs entgräten, sehr fein würfeln und mit Kartoffeln, Ei, Haferflocken und Dill zu einer formbaren Masse mischen. Kleine flache Küchlein formen.',
    'Küchlein auf ein Blech mit Backpapier legen, mit Öl bepinseln und 18 bis 20 Minuten backen, nach der Hälfte wenden, bis sie goldbraun und innen durchgegart sind.',
    'Kohl und Karotte fein raspeln und mit Joghurt und etwas Zitronensaft mischen.',
    'Kinderportion abnehmen. Erwachsene Küchlein und Krautsalat mit Salz, Pfeffer und Zitrone würzen.'
  ],
  kidName:'Lachs-Taler',
  kid:'Küchlein vollständig durchbacken und in Streifen schneiden. Krautsalat für das Kind 3 Minuten weich dünsten, ohne Salz und Zitrone.',
  leftover:'Lachs-Taler-Brot · 5 Min. – Kalte Küchlein mit Gurkenscheiben auf Vollkornbrot legen.',
  tipp:'Mit Lachs aus der Dose geht es schneller, dann Haut und Gräten gründlich entfernen.'
},
{
  id:'us-tuna-casserole', name:'Tuna Noodle Casserole · Vollkornnudel-Auflauf mit Thunfisch, Erbsen und Champignons', cuisine:'USA', flag:'🇺🇸',
  protein:'fisch', base:'nudeln', time:{a:15,c:25}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['fisch','gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Erbsen','Pilze','Babyspinat','Zwiebel'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Thunfisch im eigenen Saft (Dose)',q:80,u:'g',c:'vorrat',hint:'1 kleine Dose ≈ 110 g abgetropft'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Babyspinat',q:30,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Cheddar, gerieben',q:20,u:'g',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Nudeln 2 Minuten kürzer als angegeben kochen, Erbsen in der letzten Minute mitgaren und abgießen.',
    'Zwiebel würfeln, Champignons in Scheiben schneiden und im Nudeltopf in Öl 5 Minuten braten. Milch mit Stärke verrühren, zugießen und unter Rühren aufkochen, bis die Sauce andickt.',
    'Spinat, Nudeln, Erbsen und abgetropften Thunfisch untermischen, in eine Auflaufform geben, mit Käse bestreuen und 15 Minuten goldbraun überbacken.',
    'Kinderportion abnehmen. Erwachsene mit Pfeffer, Zitronenschale und wenig Salz würzen.'
  ],
  kidName:'Mini-Nudelauflauf',
  kid:'Nudeln und Pilze klein schneiden, Erbsen leicht zerdrücken und ohne Salz servieren. Thunfisch als Raubfisch für das Kind nur in kleiner Menge.',
  leftover:'Auflauf-Pfanne · 8 Min. – Reste mit einem Schuss Milch in der Pfanne erhitzen und mit frischem Spinat ergänzen.',
  tipp:'Thunfisch im eigenen Saft hat deutlich weniger Fett und Salz als Thunfisch in Öl.'
},
{
  id:'us-meatloaf', name:'Meatloaf · Hackbraten mit Gemüse, Kartoffelpüree und grünen Bohnen', cuisine:'USA', flag:'🇺🇸',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:40}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['ei','gluten','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Zucchini','Zwiebel','Grüne Bohnen','Kartoffeln'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen, TK',q:100,u:'g',c:'tk'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat',p:true}
  ],
  steps:[
    'Ofen auf 190 °C vorheizen. Karotte, Zucchini und Zwiebel fein reiben und mit Hack, Haferflocken und Ei gründlich verkneten.',
    'Masse in eine kleine Kastenform drücken oder als Laib aufs Blech setzen, mit Tomatenmark bestreichen und 35 bis 40 Minuten backen, bis der Braten innen vollständig durchgegart ist.',
    'Kartoffeln schälen, würfeln und 15 Minuten weich kochen, die Bohnen für die letzten 8 Minuten mitgaren. Kartoffeln mit warmer Milch zu Püree stampfen und den Hackbraten in Scheiben schneiden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Püree und Fleisch am Teller mit Salz, Pfeffer und Muskat würzen.'
  ],
  kidName:'Mini-Hackbraten mit Püree',
  kid:'Hackbraten in kleine weiche Stücke teilen, Bohnen sehr weich kochen und in kurze Stücke schneiden. Püree ungesalzen lassen.',
  leftover:'Hackbraten-Sandwich · 5 Min. – Kalte Scheiben mit Salat und Tomate zwischen zwei Scheiben Vollkornbrot legen.',
  tipp:'Das fein geriebene Gemüse hält den Braten saftig und fällt kaum auf.'
},
{
  id:'us-pot-roast', name:'Pot Roast · geschmortes Rindfleisch mit Karotten, Kartoffeln und Pilzen', cuisine:'USA', flag:'🇺🇸',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:140}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slowcooker',
  allergens:['sellerie'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Karotten','Kartoffeln','Zwiebel','Sellerie','Pilze'], season:[],
  ing:[
    {n:'Rinderschulter zum Schmoren',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Staudensellerie',q:1,u:'Stange',c:'gemuese'},
    {n:'Champignons',q:60,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch trocken tupfen und im Schmortopf in Öl rundum 6 Minuten kräftig anbraten. Tomatenmark kurz mitrösten.',
    'Zwiebel in Spalten, Karotten und Sellerie in grobe Stücke schneiden und mit Thymian und Brühe zugeben. Zugedeckt bei kleiner Hitze 90 Minuten schmoren, im Slowcooker 6 bis 7 Stunden auf niedriger Stufe.',
    'Kartoffeln halbieren, mit den Champignons zugeben und weitere 40 Minuten schmoren, bis Fleisch und Kartoffeln sehr weich sind. Fleisch mit zwei Gabeln zerzupfen.',
    'Kinderportion ungewürzt abnehmen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Zartes Schmorfleisch',
  kid:'Fleisch sehr fein zerzupfen und mit weichen Kartoffeln und Karotten im Schmorsaft zerdrücken. Ohne Salz.',
  leftover:'Pot-Roast-Brötchen · 8 Min. – Zerzupftes Fleisch im Schmorsaft erhitzen und in ein Vollkornbrötchen geben.',
  tipp:'Am Wochenende schmoren und unter der Woche aufwärmen, dann steht das Essen in 10 Minuten auf dem Tisch.'
},
{
  id:'us-black-bean-burger', name:'Black Bean Burger · Bohnen-Bratlinge im Vollkornbrötchen mit Salat und Tomate', cuisine:'USA', flag:'🇺🇸',
  protein:'huelsen', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','ei'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Mais','Rote Zwiebel','Tomaten','Salat'], season:[7,8,9],
  ing:[
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Haferflocken, zart',q:20,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Mais (Dose oder TK)',q:30,u:'g',c:'vorrat'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrötchen',q:1,u:'Stk.',c:'brot'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:30,u:'g',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Bohnen abspülen, gut abtropfen lassen und mit der Gabel grob zerdrücken. Zwiebel sehr fein würfeln und mit Mais, Haferflocken, Ei und Kreuzkümmel untermischen, 5 Minuten quellen lassen.',
    'Aus der Masse flache Bratlinge formen und in Öl bei mittlerer Hitze je Seite 4 bis 5 Minuten braten, bis sie fest und durchgegart sind.',
    'Brötchen halbieren und kurz in der Pfanne rösten. Tomate in Scheiben schneiden, Salat waschen.',
    'Kinderportion abnehmen. Erwachsene Bratlinge leicht salzen und mit Tomate, Salat und nach Wunsch Senf ins Brötchen legen.'
  ],
  kidName:'Bohnen-Taler',
  kid:'Bratling in Streifen schneiden, Brötchen ohne harte Kruste in kleine Stücke teilen und Tomate klein würfeln. Ohne Salz und Senf.',
  leftover:'Bohnen-Bowl · 8 Min. – Bratlinge zerbröseln und mit Reis, Salat und Joghurt als Bowl anrichten.',
  tipp:'Die Bohnen nach dem Abspülen auf Küchenpapier trocknen, dann halten die Bratlinge besser zusammen.'
},
{
  id:'us-sloppy-joes', name:'Sloppy Joes · Linsen-Gemüse-Füllung im Vollkornbrötchen', cuisine:'USA', flag:'🇺🇸',
  protein:'huelsen', base:null, time:{a:8,c:15}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Karotten','Zwiebel','Tomaten','Gurke'], season:[],
  ing:[
    {n:'Rote Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrötchen',q:1,u:'Stk.',c:'brot'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Paprika und Karotte sehr fein würfeln und in Öl 4 Minuten dünsten. Paprikapulver kurz mitrösten.',
    'Linsen abspülen, mit passierten Tomaten und 150 ml Wasser zugeben und 12 bis 14 Minuten köcheln, bis sie zerfallen und die Masse dick ist.',
    'Brötchen halbieren und kurz rösten, Gurke in Scheiben schneiden.',
    'Kinderportion abnehmen. Erwachsene mit Senf, einem Spritzer Essig und wenig Salz abschmecken und die Füllung auf die Brötchen häufen.'
  ],
  kidName:'Linsen-Brötchen',
  kid:'Linsenfüllung ohne Senf und Salz auf eine weiche Brötchenhälfte streichen und in Streifen schneiden, Gurke in dünne Stifte.',
  leftover:'Linsen-Nudeln · 10 Min. – Reste mit etwas Wasser verdünnen und als Sauce über Vollkornnudeln geben.',
  tipp:'Rote Linsen zerfallen schnell und erinnern in der Konsistenz an Hackfleischsauce.'
},
{
  id:'us-grilled-cheese', name:'Grilled Cheese mit Tomatensuppe · Käsetoast aus Vollkornbrot und Tomaten-Bohnen-Suppe', cuisine:'USA', flag:'🇺🇸',
  protein:'milch', base:null, time:{a:10,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Cheddar, gerieben',q:30,u:'g',c:'kuehl'},
    {n:'Babyspinat',q:30,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:200,u:'g',c:'vorrat'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Paprika würfeln und in der Hälfte des Öls 4 Minuten dünsten. Tomaten, Brühe und Bohnen zugeben, 8 Minuten köcheln und fein pürieren.',
    'Brotscheiben mit Käse und Spinat belegen, zuklappen und außen dünn mit dem restlichen Öl bestreichen.',
    'Toast in der Pfanne bei mittlerer Hitze je Seite 3 bis 4 Minuten rösten, bis der Käse geschmolzen ist.',
    'Kinderportion Suppe ungesalzen abnehmen. Erwachsene die Suppe mit Salz, Pfeffer und Oregano abschmecken.'
  ],
  kidName:'Käsetoast-Streifen mit Suppe',
  kid:'Toast in schmale Streifen zum Eintunken schneiden, Suppe lauwarm und ungesalzen anbieten. Die pürierten Bohnen machen die Suppe sättigend.',
  leftover:'Tomatensauce · 5 Min. – Restliche Suppe einkochen und als Sauce über Vollkornnudeln geben.',
  tipp:'Ein Topf als Gewicht auf dem Toast drückt ihn flach und lässt den Käse schneller schmelzen.'
},
{
  id:'us-sweet-potato-hash', name:'Sweet Potato Hash · Süßkartoffel-Gemüse-Pfanne mit Spiegelei und Bohnen', cuisine:'USA', flag:'🇺🇸',
  protein:'ei', base:'kartoffeln', time:{a:10,c:20}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Süßkartoffel','Rote Paprika','Zwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Süßkartoffel',q:220,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Süßkartoffel in 1 cm große Würfel schneiden und in Öl zugedeckt bei mittlerer Hitze 10 Minuten braten, dabei gelegentlich wenden.',
    'Zwiebel und Paprika würfeln, mit Paprikapulver zugeben und offen 5 Minuten weiterbraten, bis die Süßkartoffel weich und leicht gebräunt ist. Bohnen und Spinat unterheben.',
    'Je Portion zwei Mulden formen, Eier hineinschlagen und zugedeckt 5 bis 6 Minuten garen, bis Eiweiß und Eigelb fest sind.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Süßkartoffel-Ei-Pfanne',
  kid:'Ei vollständig durchgaren und klein schneiden, Süßkartoffel weich zerdrücken und Bohnen zerquetschen. Ohne Salz und Chili.',
  leftover:'Hash-Wrap · 5 Min. – Reste erwärmen und mit Joghurt in eine Vollkorn-Weizentortilla rollen.',
  tipp:'Süßkartoffelwürfel 3 Minuten in der Mikrowelle vorgaren, dann ist die Pfanne in 15 Minuten fertig.'
},
{
  id:'us-stuffed-peppers', name:'Stuffed Peppers · gefüllte Paprika mit Vollkornreis, Bohnen und Käse', cuisine:'USA', flag:'🇺🇸',
  protein:'huelsen', base:'reis', time:{a:15,c:45}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Tomaten','Mais','Zucchini','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Mais (Dose oder TK)',q:40,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Cheddar, gerieben',q:25,u:'g',c:'kuehl'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 25 Minuten garen. Ofen auf 200 °C vorheizen.',
    'Zwiebel und Zucchini fein würfeln und in Öl 5 Minuten dünsten. Mit Reis, Bohnen, Mais, Kreuzkümmel und der Hälfte der passierten Tomaten mischen.',
    'Paprika längs halbieren, entkernen, füllen und in eine Form mit den restlichen passierten Tomaten setzen. Mit Käse bestreuen und 20 Minuten backen, bis die Paprika weich ist.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und Chili würzen.'
  ],
  kidName:'Paprika-Reis-Schiffchen',
  kid:'Paprika sehr weich backen und klein schneiden, Bohnen in der Füllung zerdrücken. Ohne Salz und Chili.',
  leftover:'Burrito-Bowl · 8 Min. – Füllung und gewürfelte Paprika erwärmen und mit Salat und Joghurt als Bowl servieren.',
  tipp:'Mit Reis vom Vortag sind die gefüllten Paprika in 35 Minuten fertig.'
}
);
