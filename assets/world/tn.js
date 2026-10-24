/* Grün geplant · Tunesien · Top 15 */
RECIPES.push(
{
  id:'tn-kousksi-hout', name:'Kousksi bil Hout · Fisch-Couscous mit Kürbis, Karotten und Kichererbsen', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'fisch', base:'couscous', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf + Schüssel',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kürbis','Karotten','Zucchini','Tomaten','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkorn-Couscous',q:70,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kichererbsen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und im Öl 3 Minuten anschwitzen, Paprikapulver und passierte Tomaten zugeben und 2 Minuten köcheln.',
    'Karotten und Kürbis in große Stücke schneiden, mit 500 ml Wasser zugeben und 12 Minuten köcheln, dann Zucchini und Kichererbsen zugeben und 5 Minuten weitergaren.',
    'Fisch in große Stücke teilen, in die Brühe legen und bei kleiner Hitze 6 bis 8 Minuten garziehen lassen, bis er nicht mehr glasig ist.',
    'Couscous in einer Schüssel mit 100 ml heißer Brühe aus dem Topf übergießen, 5 Minuten quellen lassen und mit einer Gabel auflockern.',
    'Kinderportion abnehmen, Fisch entgräten, Gemüse und Kichererbsen zerdrücken. Erwachsene salzen und die Brühe mit Harissa schärfen.'
  ],
  kidName:'Weicher Fisch-Couscous',
  kid:'Fisch sorgfältig entgräten und zerpflücken, Kürbis, Karotten und Kichererbsen weich zerdrücken und mit etwas Brühe unter den Couscous mischen. Ohne Salz und Harissa.',
  leftover:'Couscous-Pfanne · 8 Min. – Couscous, Gemüse und Fisch mit etwas Brühe in der Pfanne vollständig durcherhitzen.',
  tipp:'In Sfax wird Couscous mit Fisch und viel Gemüse gekocht, der Kürbis gibt der Brühe eine milde Süße.'
},
{
  id:'tn-kousksi-khodra', name:'Kousksi bil Khodra · Gemüse-Couscous mit Kichererbsen, Kohlrabi und Weißkohl', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'huelsen', base:'couscous', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf + Schüssel',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Karotten','Kohlrabi','Weißkohl','Rote Paprika','Zwiebel'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:140,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkorn-Couscous',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kohlrabi',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:2,u:'TL',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und im Öl 3 Minuten anschwitzen, Tomatenmark und Koriander 1 Minute mitrösten.',
    'Karotten und Kohlrabi in Stifte, Weißkohl in breite Streifen und Paprika in Stücke schneiden, mit 500 ml Wasser zugeben und 15 Minuten köcheln.',
    'Kichererbsen zugeben und 5 Minuten mitwärmen, bis das Gemüse weich ist.',
    'Couscous in einer Schüssel mit 100 ml heißer Brühe aus dem Topf übergießen, 5 Minuten quellen lassen und auflockern.',
    'Kinderportion abnehmen und die Kichererbsen zerdrücken. Erwachsene salzen und die Brühe mit Harissa schärfen.'
  ],
  kidName:'Gemüse-Couscous mit Kichererbsenmus',
  kid:'Kichererbsen zerdrücken, das weich gekochte Gemüse klein schneiden und mit Brühe unter den Couscous mischen. Ohne Salz und Harissa.',
  leftover:'Couscous-Taler · 15 Min. – Reste mit einem Ei verkneten, zu Talern formen und in der Pfanne durchbraten.',
  tipp:'Das Gemüse richtet sich in Tunesien nach dem Markt, Kürbis, weiße Rübchen und Kartoffeln passen ebenso.'
},
{
  id:'tn-lablabi', name:'Lablabi · Kichererbsen-Kreuzkümmel-Suppe über Vollkornbrot mit Ei', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'huelsen', base:null, time:{a:8,c:12}, devices:[['topf']], method:'Zwei kleine Töpfe',
  allergens:['gluten','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kichererbsen abspülen und mit Brühe, gehacktem Knoblauch und Kreuzkümmel 12 Minuten köcheln. Ei parallel in 10 Minuten hart kochen.',
    'Brot in Würfel schneiden und in tiefe Teller verteilen, Tomate und Petersilie fein hacken.',
    'Heiße Kichererbsen mit der Brühe über das Brot schöpfen, das Ei klein schneiden, darauf verteilen und mit Öl beträufeln.',
    'Kinderportion abnehmen und die Kichererbsen zerdrücken. Erwachsene mit Salz, Zitrone, Harissa, Tomaten und Petersilie würzen.'
  ],
  kidName:'Kichererbsen-Brot-Schale',
  kid:'Kichererbsen gründlich zerdrücken, Brot vollständig einweichen lassen und das hart gekochte Ei klein hacken. Ohne Salz und Harissa.',
  leftover:'Kichererbsen-Dip · 5 Min. – Restliche Kichererbsen mit Zitrone und Öl zu einem groben Mus pürieren.',
  tipp:'Lablabi ist in Tunis ein Frühstück für kalte Tage, altbackenes Brot eignet sich dafür am besten.'
},
{
  id:'tn-brik', name:'Brik · Ofen-Teigtaschen mit Ei, Kartoffel und Petersilie', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'ei', base:null, time:{a:15,c:28}, devices:[['topf'],['ofen','airfryer']], method:'Topf + Ofen oder Airfryer',
  allergens:['ei','gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Kräuter','Tomaten','Gurke'], season:[7,8,9],
  ing:[
    {n:'Filoteig',q:80,u:'g',c:'kuehl',hint:'1 Blatt ≈ 20 g'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, mehlig',q:120,u:'g',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln klein würfeln, in 10 Minuten weich kochen, abgießen und mit gehackter Petersilie grob zerdrücken. Ofen auf 200 °C vorheizen.',
    'Je zwei Teigblätter aufeinanderlegen und mit Öl bestreichen, die Hälfte der Kartoffelmasse mit einer Mulde daraufgeben, ein Ei hineinschlagen und das Eigelb mit einer Gabel anstechen.',
    'Teig zu einem Dreieck falten, Ränder fest andrücken, außen mit Öl bestreichen und auf dem Blech 18 Minuten backen, bis der Teig goldbraun und das Ei vollständig fest ist, im Airfryer 14 Minuten bei 180 °C.',
    'Tomaten und Gurke für den Salat würfeln. Kinderportion abnehmen und das Brik in Streifen schneiden. Erwachsene salzen und mit Zitrone und Harissa essen.'
  ],
  kidName:'Brik-Streifen',
  kid:'Brik erst servieren, wenn das Ei vollständig fest ist, und in schmale Streifen schneiden. Harte Teigecken abbrechen, ohne Salz.',
  leftover:'Brik-Snack · 6 Min. – Reste im Ofen oder Airfryer kurz aufbacken, bis sie innen heiß sind.',
  tipp:'In Tunesien wird Brik frittiert und mit flüssigem Eigelb gegessen, im Ofen gebacken und durchgegart passt es auch für Kinder.'
},
{
  id:'tn-kafteji', name:'Kafteji · Pfannengemüse mit Paprika, Kürbis, Kartoffel und Ei', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'ei', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Kürbis','Kartoffeln','Tomaten','Zwiebel'], season:[9,10],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:120,u:'g',c:'gemuese'},
    {n:'Hokkaido-Kürbis',q:100,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln, Kürbis, Paprika und Zwiebel in kleine Würfel schneiden und im Öl mit Deckel 10 Minuten unter gelegentlichem Wenden weich braten.',
    'Gewürfelte Tomate und Koriander zugeben, 2 Minuten mitgaren und alles in der Pfanne mit dem Pfannenwender grob zerdrücken.',
    'Eier verquirlen, unter das Gemüse rühren und 2 bis 3 Minuten garen, bis kein flüssiges Ei mehr zu sehen ist.',
    'Kinderportion abnehmen und mit weichem Brot anbieten. Erwachsene salzen, mit Harissa würzen und mit Brot essen.'
  ],
  kidName:'Gemüse-Rührei-Mus',
  kid:'Gemüse weich garen und mit dem vollständig gestockten Ei grob zerdrücken, dazu weiches Brot. Ohne Salz und Harissa.',
  leftover:'Kafteji-Sandwich · 5 Min. – Reste vollständig erhitzen und in ein halbes Vollkornbrötchen füllen.',
  tipp:'Kafteji ist das typische Imbissgericht von Tunis, in der Pfanne statt in der Fritteuse bleibt das Gemüse leicht.'
},
{
  id:'tn-tajine', name:'Tajine Tunsi · Ofen-Eierkuchen mit Spinat, Kartoffeln und Käse', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'ei', base:'kartoffeln', time:{a:15,c:33}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Babyspinat','Kartoffeln','Zwiebel','Kräuter'], season:[3,4,5,6],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:80,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:20,u:'g',c:'kuehl'},
    {n:'Milch',q:30,u:'ml',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Kartoffeln in kleine Würfel schneiden und 8 Minuten in Wasser vorkochen, abgießen.',
    'Spinat grob hacken, Zwiebel und Petersilie fein hacken. Eier mit Milch, Kurkuma und der Hälfte des Käses verquirlen und alles untermischen.',
    'Masse in eine mit dem Öl ausgestrichene kleine Form füllen, mit dem restlichen Käse bestreuen und 25 Minuten backen, bis die Mitte fest ist und sich ein Messer sauber herausziehen lässt.',
    'Kinderportion abnehmen und in kleine Würfel schneiden. Erwachsene nach Geschmack salzen und mit Harissa und Salat essen.'
  ],
  kidName:'Spinat-Ei-Würfel',
  kid:'Tajine vollständig durchbacken, etwas abkühlen lassen und in kleine Würfel zum Selberessen schneiden. Ohne zusätzliches Salz.',
  leftover:'Tajine-Brot · 5 Min. – Kalte Tajine-Stücke mit Tomaten auf Vollkornbrot essen.',
  tipp:'Die tunesische Tajine hat mit dem marokkanischen Schmortopf nichts zu tun, sie ähnelt einer festen Frittata.'
},
{
  id:'tn-loubia', name:'Loubia · weiße Bohnen in Tomaten-Kümmel-Soße mit Vollkornbrot', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'huelsen', base:null, time:{a:8,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Kräuter'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Paprika und Knoblauch würfeln und im Öl 5 Minuten dünsten, Tomatenmark und Kümmel 1 Minute mitrösten.',
    'Passierte Tomaten, 150 ml Wasser und die abgespülten Bohnen zugeben und 10 Minuten sämig köcheln.',
    'Petersilie hacken und unterrühren, Brot in Scheiben dazu reichen.',
    'Kinderportion abnehmen und die Bohnen zerdrücken. Erwachsene salzen, mit Harissa schärfen und mit einem Schuss Olivenöl und Brot essen.'
  ],
  kidName:'Bohnen-Tomaten-Mus',
  kid:'Bohnen gründlich zerdrücken und mit der milden Tomatensoße mischen, Brot in weichen Streifen dazu. Ohne Salz und Harissa.',
  leftover:'Bohnen-Couscous · 8 Min. – Reste erhitzen und über schnell gequollenen Vollkorn-Couscous geben.',
  tipp:'Gemahlener Kümmel, in Tunesien Karwiya genannt, macht Bohnen bekömmlicher und gehört in viele tunesische Eintöpfe.'
},
{
  id:'tn-mechouia', name:'Slata Mechouia · Salat aus gerösteten Paprika und Tomaten mit Thunfisch, Ei und Brot', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'fisch', base:null, time:{a:12,c:12}, devices:[['ofen'],['topf']], method:'Backofengrill + Topf',
  allergens:['fisch','ei','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Tomaten','Zitrone','Oliven'], season:[7,8,9],
  ing:[
    {n:'Thunfisch (Dose, im eigenen Saft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 150 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Rote Paprika',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Oliven, schwarz',q:15,u:'g',c:'vorrat'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Backofengrill auf höchster Stufe vorheizen. Paprika vierteln, mit den halbierten Tomaten und der ungeschälten Knoblauchzehe auf ein Blech legen und 10 bis 12 Minuten grillen, bis die Haut schwarze Blasen wirft.',
    'Ei parallel in 10 Minuten hart kochen und vierteln. Paprika und Tomaten kurz abgedeckt ruhen lassen und die Haut abziehen.',
    'Gemüse und geschälten Knoblauch fein hacken und mit Öl, Kümmel und Zitronensaft verrühren.',
    'Kinderportion abnehmen und mit zerpflücktem Thunfisch, gehacktem Ei und weichem Brot anbieten. Erwachsene salzen, mit Harissa schärfen und mit Thunfisch, Ei und Oliven belegen.'
  ],
  kidName:'Paprika-Mus mit Thunfisch',
  kid:'Gegrilltes Gemüse ohne Haut fein hacken, Thunfisch zerpflücken und das hart gekochte Ei klein schneiden. Keine ganzen Oliven, ohne Salz und Harissa.',
  leftover:'Mechouia-Nudeln · 12 Min. – Restliches Paprika-Mus erhitzen und als Soße unter Vollkornnudeln mischen.',
  tipp:'Traditionell werden Paprika und Tomaten über Holzkohle geröstet, der Backofengrill gibt ein ähnliches Röstaroma.'
},
{
  id:'tn-kefta-hout', name:'Kefta Hout · Fischbällchen in Tomaten-Paprika-Soße mit Kartoffeln', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','ei','gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Kartoffeln','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in Stücke schneiden und in 20 Minuten weich kochen.',
    'Fischfilet fein hacken oder kurz im Mixer zerkleinern, mit Ei, Haferflocken, der Hälfte der gehackten Petersilie und Kreuzkümmel verkneten und zu walnussgroßen Bällchen formen.',
    'Zwiebel und Paprika würfeln und im Öl 5 Minuten dünsten, passierte Tomaten und 50 ml Wasser zugeben und 3 Minuten köcheln.',
    'Bällchen in die Soße legen und zugedeckt 10 bis 12 Minuten garziehen lassen, bis sie innen fest und durchgegart sind.',
    'Kinderportion abnehmen und die Bällchen zerteilen. Erwachsene salzen, mit Harissa schärfen und mit restlicher Petersilie und den Kartoffeln servieren.'
  ],
  kidName:'Mini-Fischbällchen mit Kartoffeln',
  kid:'Fischbällchen in kleine Stücke teilen und auf Gräten prüfen, Kartoffeln mit der Tomatensoße zerdrücken. Ohne Salz und Harissa.',
  leftover:'Fischbällchen-Wrap · 8 Min. – Bällchen in der Soße vollständig erhitzen und mit Gurke ins Fladenbrot rollen.',
  tipp:'An der tunesischen Küste sind Fischbällchen ein Alltagsgericht, mit festem Seelachs halten sie gut zusammen.'
},
{
  id:'tn-hout-mechoui', name:'Hout Mechoui · Ofenfisch mit Zitrone, Kartoffelspalten und Salata Tounsia', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'fisch', base:'kartoffeln', time:{a:12,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Tomaten','Gurke','Rote Zwiebel','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Doraden- oder Wolfsbarschfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls mischen und auf dem Blech 20 Minuten backen.',
    'Fischfilets mit Kreuzkümmel, etwas Zitronensaft und dem restlichen Öl einreiben, zu den Kartoffeln legen und 10 bis 12 Minuten backen, bis sie sich leicht zerpflücken lassen.',
    'Für die Salata Tounsia Tomaten, Gurke und rote Zwiebel sehr fein würfeln und mit gehackter Petersilie und Zitronensaft mischen.',
    'Kinderportion abnehmen, Fisch entgräten und zerpflücken, Kartoffeln zerdrücken. Erwachsene salzen und mit Salat und Harissa essen.'
  ],
  kidName:'Fisch mit Kartoffelspalten',
  kid:'Fisch sorgfältig entgräten und zerpflücken, Kartoffeln weich und lauwarm, Gurke in Stiften statt Salat mit roher Zwiebel. Ohne Salz.',
  leftover:'Fisch-Kartoffel-Pfanne · 8 Min. – Reste mit Paprika in der Pfanne vollständig durchbraten.',
  tipp:'An der Küste wird Dorade ganz über Holzkohle gegrillt, Filets aus dem Ofen sind grätenärmer und schneller fertig.'
},
{
  id:'tn-chorba-frik', name:'Chorba Frik · sämige Tomatensuppe mit Weizenschrot, Lamm und Kichererbsen', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'fleisch', base:'bulgur', time:{a:15,c:45}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten','Kräuter','Zitrone'], season:[],
  ing:[
    {n:'Lammfleisch, mager, gewürfelt',q:90,u:'g',c:'fisch'},
    {n:'Bulgur',q:50,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomatenmark',q:2,u:'TL',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lammfleisch in kleine Würfel schneiden und mit der gewürfelten Zwiebel im Öl anbraten, Tomatenmark und Paprikapulver 1 Minute mitrösten.',
    'Mit 700 ml Wasser auffüllen, Karotten in kleinen Würfeln zugeben und zugedeckt 30 Minuten leise köcheln.',
    'Bulgur und Kichererbsen zugeben und weitere 15 Minuten köcheln, bis der Bulgur weich und die Suppe sämig ist.',
    'Kinderportion abnehmen, Fleisch fein zerzupfen und Kichererbsen zerdrücken. Erwachsene salzen und mit Zitrone, Petersilie und Harissa würzen.'
  ],
  kidName:'Sämiger Bulgur-Lamm-Topf',
  kid:'Fleisch fein zerzupfen, Kichererbsen zerdrücken und die Suppe etwas dicker lassen, damit sie gut löffelbar ist. Ohne Salz und Harissa.',
  leftover:'Chorba-Bulgur · 8 Min. – Dicke Reste ohne zusätzliche Brühe erhitzen und als Bulgur-Pfanne mit Joghurt essen.',
  tipp:'Echtes Frik ist geröstetes grünes Weizenschrot aus dem arabischen Laden, grober Bulgur ist ein guter Ersatz.'
},
{
  id:'tn-kamounia', name:'Kamounia · Kreuzkümmel-Rindfleisch-Eintopf mit Petersilie und Vollkornbrot', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'fleisch', base:null, time:{a:15,c:60}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slowcooker',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Tomaten','Rote Paprika','Kräuter'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:2,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Paprika würfeln und mit dem Fleisch im Öl rundum anbraten.',
    'Gepressten Knoblauch, Tomatenmark und Kreuzkümmel 1 Minute mitrösten, passierte Tomaten und 300 ml Wasser zugeben.',
    'Zugedeckt 60 Minuten leise schmoren, im Slowcooker 6 Stunden auf niedriger Stufe, bis das Fleisch sehr zart und die Soße dick ist. Gehackte Petersilie unterrühren.',
    'Kinderportion abnehmen und das Fleisch fein zerzupfen. Erwachsene salzen, mit Harissa würzen und mit Brot essen.'
  ],
  kidName:'Zartes Kreuzkümmel-Fleisch',
  kid:'Fleisch sehr fein zerzupfen und mit der Soße und weichem Brot ohne Kruste anbieten. Ohne Salz und Harissa.',
  leftover:'Kamounia-Reis · 10 Min. – Reste vollständig erhitzen und über Reis oder Couscous geben.',
  tipp:'Der Name kommt von Kamoun, dem arabischen Wort für Kreuzkümmel, frisch gemahlen schmeckt er am intensivsten.'
},
{
  id:'tn-jelbana', name:'Marqa Jelbana · Erbsen-Kartoffel-Eintopf mit Hähnchen und Karotten', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Erbsen','Kartoffeln','Karotten','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Erbsen, TK',q:120,u:'g',c:'tk'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:2,u:'TL',c:'vorrat'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und mit dem Hähnchen im Öl anbraten, Knoblauch, Tomatenmark, Paprikapulver und Kümmel 1 Minute mitrösten.',
    'Mit 400 ml Wasser ablöschen und zugedeckt 10 Minuten köcheln.',
    'Kartoffeln und Karotten würfeln, zugeben und 15 Minuten garen, dann die Erbsen zugeben und weitere 5 Minuten köcheln, bis alles weich ist.',
    'Kinderportion abnehmen, Hähnchen fein zerzupfen und Erbsen zerdrücken. Erwachsene salzen und mit Harissa und Brot essen.'
  ],
  kidName:'Erbsen-Kartoffel-Topf mit Hähnchen',
  kid:'Hähnchen fein zerzupfen, Kartoffeln und Erbsen mit der Gabel zerdrücken, damit keine runden Erbsen ganz bleiben. Ohne Salz und Harissa.',
  leftover:'Erbsen-Hähnchen-Couscous · 8 Min. – Reste vollständig erhitzen und über schnell gequollenen Couscous geben.',
  tipp:'Jelbana ist ein Frühlingsgericht, mit frischen Erbsen und Artischockenherzen wird es besonders typisch.'
},
{
  id:'tn-makrouna', name:'Makrouna bil Salsa · Vollkornnudeln in Tomaten-Paprika-Soße mit Hähnchen', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'gefluegel', base:'nudeln', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zucchini','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Hähnchenbrust',q:120,u:'g',c:'fisch'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln nach Packungsangabe in etwa 10 Minuten bissfest kochen.',
    'Hähnchen in kleine Würfel schneiden und im Öl 4 Minuten rundum anbraten, Zwiebel, Paprika, Zucchini und Knoblauch gewürfelt zugeben und 3 Minuten mitbraten.',
    'Tomatenmark und Paprikapulver kurz mitrösten, passierte Tomaten zugeben und 6 Minuten köcheln, bis das Hähnchen durchgegart ist. Nudeln untermischen.',
    'Kinderportion abnehmen und das Hähnchen klein schneiden. Erwachsene salzen und mit Harissa schärfen.'
  ],
  kidName:'Tomaten-Nudeln mit Hähnchen',
  kid:'Hähnchen sehr klein schneiden, Nudeln weich kochen und mit der milden Soße mischen. Ohne Salz und Harissa.',
  leftover:'Nudel-Auflauf · 20 Min. – Reste mit etwas Käse in einer Form bei 200 °C vollständig durchbacken.',
  tipp:'Tunesien zählt zu den Ländern mit dem höchsten Nudelverbrauch, Makrouna steht dort fast jede Woche auf dem Tisch.'
},
{
  id:'tn-rouz-jerbi', name:'Rouz Jerbi · Djerba-Kräuterreis mit Hähnchen, Spinat und Kichererbsen', cuisine:'Tunesien', flag:'🇹🇳',
  protein:'gefluegel', base:'reis', time:{a:15,c:28}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Babyspinat','Kräuter','Zwiebel'], season:[3,4,5,6],
  ing:[
    {n:'Hähnchenbrust',q:110,u:'g',c:'fisch'},
    {n:'Reis',q:65,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:50,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in kleine Würfel schneiden, Zwiebel würfeln, Spinat, Petersilie und Dill grob hacken.',
    'Zwiebel und Hähnchen im Öl 4 Minuten anbraten, Tomatenmark und Kurkuma 1 Minute mitrösten.',
    'Reis, Kichererbsen und die Hälfte der Kräuter unterheben, mit 150 ml Wasser aufgießen und zugedeckt bei kleiner Hitze 18 Minuten garen.',
    'Spinat und restliche Kräuter unterheben und zugedeckt 5 Minuten ziehen lassen, bis der Spinat zusammenfällt.',
    'Kinderportion abnehmen, Kichererbsen zerdrücken und das Hähnchen klein schneiden. Erwachsene salzen und mit Harissa essen.'
  ],
  kidName:'Grüner Hähnchenreis',
  kid:'Hähnchen klein schneiden, Kichererbsen zerdrücken und den weichen Kräuterreis lauwarm anbieten. Ohne Salz und Harissa.',
  leftover:'Kräuterreis-Pfanne · 8 Min. – Reste mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Auf Djerba wird der Reis in einem Siebeinsatz über Brühe gedämpft, im geschlossenen Topf gelingt er ebenso saftig.'
}
);
