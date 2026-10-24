/* Grün geplant · Marokko · Top 15 */
RECIPES.push(
{
  id:'ma-djaj-mqualli', name:'Djaj Mqualli · Hähnchen-Tajine mit Zitrone, Oliven und Vollkorn-Couscous', cuisine:'Marokko', flag:'🇲🇦',
  protein:'gefluegel', base:'couscous', time:{a:15,c:35}, devices:[['topf']], method:'Topf (oder Tajine) + Schüssel',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Karotten','Zucchini','Oliven','Zitrone'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Vollkorn-Couscous',q:70,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Oliven, grün, entsteint',q:20,u:'g',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln, Ingwer reiben. Hähnchen in große Stücke schneiden und mit der Zwiebel in Öl 5 Minuten anbraten, Kurkuma kurz mitrösten.',
    'Karotten in Stifte schneiden, mit 200 ml Wasser und etwas abgeriebener Zitronenschale zugeben und zugedeckt 20 Minuten schmoren.',
    'Zucchini in Stücke schneiden und 10 Minuten mitgaren, bis das Hähnchen durchgegart und das Gemüse weich ist. Couscous mit der gleichen Menge heißem Wasser übergießen und 5 Minuten quellen lassen.',
    'Kinderportion ohne Oliven und Salz abnehmen. Erwachsene mit Oliven, Zitronensaft, Salz und Pfeffer abschmecken.'
  ],
  kidName:'Mini-Zitronenhähnchen mit Couscous',
  kid:'Hähnchen fein zerzupfen und mit weichen Karotten und Couscous mischen. Oliven weglassen, sie sind sehr salzig, und kein Salz zugeben.',
  leftover:'Hähnchen-Fladen · 8 Min. – Reste vollständig erhitzen und mit Joghurt in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Eingelegte Salzzitrone ist original, aber sehr salzig: frische Zitronenschale ist für Familien die bessere Wahl.'
},
{
  id:'ma-pastilla', name:'Pastilla · Hähnchen-Filo-Pastete aus dem Ofen mit Ei und Mandeln', cuisine:'Marokko', flag:'🇲🇦',
  protein:'gefluegel', base:null, time:{a:25,c:25}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten','ei','nuesse'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Tomaten','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Filoteig',q:50,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Mandeln, gemahlen',q:15,u:'g',c:'vorrat'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 190 °C vorheizen. Zwiebel fein würfeln und in der Hälfte des Öls weich dünsten. Hähnchen in kleine Würfel schneiden und 6 bis 8 Minuten mitbraten, bis es durchgegart ist, Zimt und gehackte Petersilie unterrühren.',
    'Ei verquirlen und unter Rühren in die Pfanne geben, bis es vollständig gestockt ist. Gemahlene Mandeln untermischen.',
    'Eine kleine Form mit Filoblättern auslegen und jedes Blatt dünn mit Öl bestreichen. Füllung einfüllen, Blätter darüber schlagen und 20 bis 25 Minuten goldbraun backen. Inzwischen Tomaten und Gurke zu einem Salat würfeln.',
    'Kinderportion ohne Salz abschneiden und etwas abkühlen lassen. Erwachsene salzen den Salat und pfeffern die Pastilla nach Wunsch.'
  ],
  kidName:'Mini-Pastilla-Streifen',
  kid:'Pastilla in schmale Streifen schneiden und harte Teigränder entfernen. Mandeln nur gemahlen verwenden, nie ganz, Gurke und Tomate klein würfeln.',
  leftover:'Knusprige Pastilla · 10 Min. – Reste im Ofen bei 180 °C wieder knusprig und vollständig heiß backen.',
  tipp:'Die klassische Puderzucker-Zimt-Schicht lassen wir weg, ein Hauch Zimt in der Füllung reicht für das typische Aroma.'
},
{
  id:'ma-rfissa', name:'Rfissa · Hähnchen mit Linsen und Bockshornklee auf Vollkorn-Fladenbrot', cuisine:'Marokko', flag:'🇲🇦',
  protein:'gefluegel', base:null, time:{a:15,c:30}, devices:[['topf']], method:'Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Spinat','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Braune Linsen, trocken',q:40,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Bockshornklee, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in feine Streifen schneiden, Ingwer reiben. Beides in Öl 5 Minuten weich dünsten, Kurkuma und Bockshornklee kurz mitrösten.',
    'Hähnchen in Stücke schneiden, mit den Linsen und 350 ml Wasser zugeben und zugedeckt 25 Minuten köcheln, bis die Linsen weich sind und das Hähnchen durchgegart ist.',
    'Hähnchen herausnehmen und zerzupfen. Spinat in der Soße zusammenfallen lassen, Koriander hacken. Fladenbrot in Stücke reißen, auf Teller legen und Linsensoße und Hähnchen darauf geben.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen und mit Koriander bestreuen.'
  ],
  kidName:'Weiche Linsen-Hähnchen-Brotstücke',
  kid:'Linsen etwas zerdrücken und Hähnchen fein zerzupfen. Brot in kleine Stücke reißen und in der Soße weich werden lassen, ohne Salz.',
  leftover:'Linsen-Hähnchen-Topf · 8 Min. – Reste mit etwas Wasser vollständig erhitzen und mit Reis oder Brot servieren.',
  tipp:'Original wird Rfissa auf Msemen-Fladen serviert; Vollkorn-Fladenbrot ist schneller und ballaststoffreicher.'
},
{
  id:'ma-kefta-tajine', name:'Kefta-Tajine · Rinderhackbällchen in Tomatensoße mit Ei', cuisine:'Marokko', flag:'🇲🇦',
  protein:'fleisch', base:null, time:{a:20,c:20}, devices:[['pfanne']], method:'Pfanne mit Deckel',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Tomaten, gehackt (Dose)',q:200,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hack mit der Hälfte der fein gehackten Zwiebel, gehackter Petersilie und Kreuzkümmel verkneten und zu walnussgroßen Bällchen formen.',
    'Restliche Zwiebel und Paprika würfeln und in Öl 5 Minuten dünsten. Paprikapulver und Tomaten zugeben und 5 Minuten köcheln.',
    'Bällchen in die Soße setzen und zugedeckt 10 Minuten garen. Ei in eine Mulde schlagen und zugedeckt 6 bis 8 Minuten garen, bis Eiweiß und Eigelb fest sind.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen, nach Wunsch mit Chili schärfen und mit Fladenbrot zum Tunken essen.'
  ],
  kidName:'Mini-Kefta mit Tomatensoße',
  kid:'Ei vollständig durchgaren und klein schneiden. Hackbällchen zerteilen oder zerdrücken und mit Soße und weichem Brot ohne Salz anbieten.',
  leftover:'Kefta-Fladenbrot · 8 Min. – Reste vollständig erhitzen und mit Gurke in Fladenbrot füllen.',
  tipp:'Im Original bleibt das Eigelb flüssig; für Familien lieber ein paar Minuten länger garen, bis es fest ist.'
},
{
  id:'ma-tanjia', name:'Tanjia · langsam geschmortes Rindfleisch mit Kreuzkümmel, Zitrone und Kartoffeln', cuisine:'Marokko', flag:'🇲🇦',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:150}, devices:[['ofen','slowcooker']], method:'Backofen oder Slowcooker, ein Bräter',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Zwiebel','Zitrone'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 150 °C vorheizen. Rindfleisch mit Öl, Kreuzkümmel, Kurkuma, gehacktem Knoblauch und Zwiebelstreifen in einem Bräter mischen.',
    'Kartoffeln und Karotten in große Stücke schneiden und mit zwei Zitronenscheiben und 150 ml Wasser dazugeben.',
    'Zugedeckt 2,5 Stunden schmoren, bis das Fleisch zerfällt. Im Slowcooker 6 bis 7 Stunden auf niedriger Stufe garen. Zitronenscheiben entfernen.',
    'Kinderportion ohne Salz abnehmen und das Fleisch fein zerzupfen. Erwachsene mit Salz und frischem Zitronensaft abschmecken.'
  ],
  kidName:'Zartes Schmorfleisch mit Kartoffelstampf',
  kid:'Fleisch mit zwei Gabeln fein zerzupfen, Kartoffeln und Karotten mit etwas Schmorsaft zerdrücken. Kein Salz, Zitrone erst bei den Erwachsenen.',
  leftover:'Tanjia-Fladenbrot · 10 Min. – Fleischreste zerzupfen, vollständig erhitzen und mit Tomaten in Fladenbrot füllen.',
  tipp:'Gut zum Vorbereiten: morgens in den Slowcooker, abends ist das Essen fertig.'
},
{
  id:'ma-tajine-fisch', name:'Tajine de poisson · Fisch mit Chermoula, Kartoffeln und Paprika aus dem Ofen', cuisine:'Marokko', flag:'🇲🇦',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:35}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Tomaten','Zitrone','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Für die Chermoula Koriander und Knoblauch fein hacken und mit Öl, Kreuzkümmel, Paprikapulver und Zitronensaft verrühren.',
    'Kartoffeln in dünne Scheiben schneiden, mit der Hälfte der Chermoula mischen, in eine Form legen und 15 Minuten vorbacken.',
    'Paprika in Streifen und Tomaten in Scheiben darauf verteilen, Fisch auflegen und mit der restlichen Chermoula bestreichen. Weitere 15 bis 20 Minuten backen, bis sich der Fisch leicht zerteilen lässt.',
    'Kinderportion ohne Salz abnehmen und den Fisch auf Gräten prüfen. Erwachsene salzen und nach Wunsch mit Chili nachwürzen.'
  ],
  kidName:'Mini-Fischtajine',
  kid:'Fisch vollständig durchgaren, sorgfältig entgräten und zerpflücken. Kartoffeln und Paprika weich und klein geschnitten, ohne Salz und Chili.',
  leftover:'Fisch-Kartoffel-Pfanne · 8 Min. – Reste in der Pfanne vollständig erhitzen und mit einem Klecks Joghurt servieren.',
  tipp:'Chermoula lässt sich gut doppelt anrühren und hält im Kühlschrank zwei Tage.'
},
{
  id:'ma-kefta-fisch', name:'Kefta de poisson · Fischbällchen in Tomatensoße mit Vollkorn-Couscous', cuisine:'Marokko', flag:'🇲🇦',
  protein:'fisch', base:'couscous', time:{a:14,c:10}, devices:[['pfanne']], method:'Pfanne + Schüssel',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zucchini','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkorn-Couscous',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:200,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fisch mit Petersilie, der Hälfte des Knoblauchs und Kreuzkümmel sehr fein hacken oder im Zerkleinerer kurz pürieren und zu kleinen Bällchen formen.',
    'Zwiebel, restlichen Knoblauch und Zucchini klein würfeln und in Öl 3 Minuten dünsten. Paprikapulver und Tomaten zugeben und aufkochen.',
    'Fischbällchen hineinsetzen und zugedeckt 7 bis 8 Minuten sanft garen, bis sie innen nicht mehr glasig sind. Couscous mit der gleichen Menge heißem Wasser übergießen und 5 Minuten quellen lassen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen und nach Wunsch mit Harissa oder Chili nachwürzen.'
  ],
  kidName:'Weiche Fischbällchen mit Couscous',
  kid:'Fischbällchen vollständig durchgaren und für das Kind zerdrücken oder halbieren. Mit Tomatensoße und Couscous ohne Salz und Chili anbieten.',
  leftover:'Fischbällchen-Brot · 8 Min. – Reste vollständig erhitzen und in Vollkorn-Fladenbrot füllen.',
  tipp:'In Marokko werden dafür oft Sardinen genommen; Seelachs ist grätenfrei und mild.'
},
{
  id:'ma-harira', name:'Harira · Tomaten-Linsen-Eintopf mit Kichererbsen und Vollkornbrot', cuisine:'Marokko', flag:'🇲🇦',
  protein:'huelsen', base:null, time:{a:15,c:30}, devices:[['topf']], method:'Topf',
  allergens:['gluten','sellerie'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Sellerie','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:35,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, passiert',q:200,u:'ml',c:'vorrat'},
    {n:'Staudensellerie',q:1,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Sellerie fein würfeln und in Öl 5 Minuten dünsten. Zimt und Kurkuma kurz mitrösten.',
    'Linsen, passierte Tomaten und 400 ml Wasser zugeben und 25 Minuten köcheln, bis die Linsen weich sind.',
    'Kichererbsen zugeben und 5 Minuten mitwärmen. Mit etwas Wasser auf eine dicke, sämige Konsistenz bringen und gehackten Koriander unterrühren.',
    'Kinderportion ohne Salz abnehmen und Kichererbsen zerdrücken. Erwachsene salzen, pfeffern und Brot dazu reichen.'
  ],
  kidName:'Dicke Mini-Harira',
  kid:'Harira etwas dicker lassen und Kichererbsen gründlich zerdrücken. Weiches Brot ohne Rinde in kleinen Stücken zum Tunken, ohne Salz.',
  leftover:'Harira-Bowl · 8 Min. – Reste mit wenig Wasser vollständig erhitzen und über Vollkorn-Couscous geben.',
  tipp:'Im Ramadan wird Harira zum Fastenbrechen gegessen; mit Hülsenfrüchten und Brot ist sie eine vollständige Mahlzeit.'
},
{
  id:'ma-couscous-gemuese', name:'Couscous aux sept légumes · Siebengemüse-Couscous mit Kichererbsen', cuisine:'Marokko', flag:'🇲🇦',
  protein:'huelsen', base:'couscous', time:{a:20,c:30}, devices:[['topf']], method:'Topf + Schüssel',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Zucchini','Kürbis','Weißkohl','Tomaten','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkorn-Couscous',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Hokkaido-Kürbis',q:60,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:50,u:'g',c:'gemuese'},
    {n:'Tomaten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Ras el-Hanout, mild',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Tomate würfeln und in Öl mit Ras el-Hanout 3 Minuten andünsten. 400 ml Wasser angießen.',
    'Karotten und Kohl in grobe Stücke schneiden und 10 Minuten köcheln. Kürbis und Zucchini in große Würfel schneiden und weitere 12 Minuten mitgaren.',
    'Kichererbsen zugeben und 5 Minuten mitwärmen. Couscous mit der gleichen Menge heißer Brühe aus dem Topf übergießen, 5 Minuten quellen lassen, mit einer Gabel auflockern und auf Teller häufen, Gemüse und Brühe darüber geben.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen und nach Wunsch Harissa dazu nehmen.'
  ],
  kidName:'Weiches Gemüse-Couscous',
  kid:'Gemüse butterweich garen und klein schneiden, Kichererbsen zerdrücken. Couscous mit etwas Brühe anfeuchten, ohne Salz und Harissa.',
  leftover:'Couscous-Pfanne · 10 Min. – Reste mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Sieben ist eine Richtgröße: In Marokko kommt in den Topf, was der Markt gerade hergibt.'
},
{
  id:'ma-loubia', name:'Loubia · weiße Bohnen in Tomaten-Kreuzkümmel-Soße mit Vollkornbrot', cuisine:'Marokko', flag:'🇲🇦',
  protein:'huelsen', base:null, time:{a:10,c:12}, devices:[['topf']], method:'Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Karotten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Karotte fein würfeln und in Öl 4 Minuten dünsten. Kreuzkümmel und Paprikapulver kurz mitrösten.',
    'Passierte Tomaten und 100 ml Wasser zugeben, Bohnen abspülen und dazugeben. 8 Minuten köcheln, bis die Karotten weich sind und die Soße eindickt.',
    'Petersilie hacken und unterrühren.',
    'Kinderportion ohne Salz abnehmen und Bohnen zerdrücken. Erwachsene salzen, nach Wunsch mit etwas Chili schärfen und Brot dazu reichen.'
  ],
  kidName:'Bohnenmus mit Tomate',
  kid:'Bohnen gründlich zerdrücken und mit der Soße zu einem weichen Mus mischen. Brot ohne harte Rinde in Streifen dazu, kein Salz.',
  leftover:'Bohnen-Shakshuka · 12 Min. – Reste erhitzen, Eier hineinschlagen und zugedeckt vollständig stocken lassen.',
  tipp:'Loubia ist in Marokko ein Alltagsgericht aus der Garküche und schmeckt am nächsten Tag noch besser.'
},
{
  id:'ma-bissara', name:'Bissara · cremiges Dicke-Bohnen-Püree mit Olivenöl und Vollkorn-Fladenbrot', cuisine:'Marokko', flag:'🇲🇦',
  protein:'huelsen', base:null, time:{a:8,c:15}, devices:[['topf']], method:'Topf + Pürierstab',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Tomaten','Gurke'], season:[],
  ing:[
    {n:'Dicke Bohnen, TK',q:200,u:'g',c:'tk'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch grob würfeln und mit den Bohnen und 250 ml Wasser 12 bis 15 Minuten weich kochen.',
    'Alles mit dem Pürierstab fein pürieren, bis ein dickes, cremiges Püree entsteht; nach Bedarf etwas Wasser zugeben.',
    'Tomaten und Gurke klein würfeln. Bissara in Schalen füllen, mit Öl beträufeln und mit Kreuzkümmel und Paprikapulver bestreuen.',
    'Kinderportion ohne Salz abnehmen und lauwarm mit weichen Brotstücken anbieten. Erwachsene salzen und nach Wunsch Chili darüber geben.'
  ],
  kidName:'Bohnencreme zum Tunken',
  kid:'Bissara fein pürieren, etwas dicker lassen und lauwarm mit weichen Fladenbrotstücken anbieten. Gurke und Tomate klein gewürfelt, ohne Salz.',
  leftover:'Bissara-Aufstrich · 5 Min. – Kalte Reste als Aufstrich auf Vollkornbrot mit Gurke.',
  tipp:'Original mit getrockneten, geschälten Saubohnen; TK-Dicke-Bohnen sind schneller, ihre Häutchen werden beim Pürieren ganz fein.'
},
{
  id:'ma-zaalouk', name:'Zaalouk mit Ei · warmes Auberginen-Tomaten-Gemüse mit Eiern und Fladenbrot', cuisine:'Marokko', flag:'🇲🇦',
  protein:'ei', base:null, time:{a:8,c:16}, devices:[['pfanne']], method:'Pfanne mit Deckel',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Aubergine','Tomaten','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Aubergine',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Aubergine in kleine Würfel schneiden, Tomaten grob hacken, Knoblauch fein hacken.',
    'Aubergine in Öl 3 Minuten anbraten. Tomaten, Knoblauch und Gewürze zugeben und zugedeckt 7 Minuten weich schmoren, dabei grob zerdrücken.',
    'Für jedes Ei eine Mulde formen, Eier hineinschlagen und zugedeckt 6 Minuten garen, bis Eiweiß und Eigelb fest sind. Gehackten Koriander darüber streuen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen und mit warmem Fladenbrot essen.'
  ],
  kidName:'Mildes Auberginenmus mit Ei',
  kid:'Eier vollständig durchgaren und klein schneiden. Auberginen-Tomaten-Mus weich zerdrücken und mit weichen Brotstücken ohne Salz anbieten.',
  leftover:'Zaalouk-Brot · 5 Min. – Kalte Gemüsereste als Aufstrich auf geröstetes Vollkornbrot.',
  tipp:'Klassisch wird die Aubergine im Ganzen gekocht; klein gewürfelt in der Pfanne geht es deutlich schneller.'
},
{
  id:'ma-maakouda', name:'Maakouda · Kartoffel-Kräuter-Küchlein aus dem Ofen mit Taktouka', cuisine:'Marokko', flag:'🇲🇦',
  protein:'ei', base:'kartoffeln', time:{a:20,c:35}, devices:[['topf'],['ofen','airfryer'],['pfanne']], method:'Topf + Backofen + Pfanne',
  allergens:['ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Tomaten','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Petersilie, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in Stücke schneiden und in 15 Minuten weich kochen. Ofen auf 210 °C vorheizen.',
    'Kartoffeln abgießen, ausdampfen lassen und zerstampfen. Mit Eiern, gehackter Petersilie, Kreuzkümmel und Kurkuma verrühren, auf einem Blech mit Backpapier zu flachen Küchlein formen und dünn mit Öl bestreichen.',
    'Küchlein 20 Minuten backen und nach 12 Minuten wenden, bis sie goldbraun und innen fest sind. Für die Taktouka Paprika und Tomaten würfeln und mit Knoblauch in wenig Öl 10 Minuten weich schmoren.',
    'Kinderportion ohne Salz abnehmen und mit Joghurt servieren. Erwachsene salzen die Taktouka und würzen nach Wunsch mit Chili.'
  ],
  kidName:'Weiche Kartoffel-Küchlein',
  kid:'Küchlein vollständig durchbacken, damit das Ei gar ist, und in Streifen schneiden. Taktouka weich schmoren und mild mit Joghurt mischen, ohne Salz.',
  leftover:'Maakouda-Sandwich · 5 Min. – Küchlein erhitzen und mit Taktouka in Fladenbrot füllen, wie an marokkanischen Imbissständen.',
  tipp:'Original werden Maakouda frittiert; im Ofen werden sie genauso goldbraun, mit einem Bruchteil des Fetts.'
},
{
  id:'ma-adass', name:'Adass · marokkanische Linsen mit Tomate, Karotte und Kreuzkümmel', cuisine:'Marokko', flag:'🇲🇦',
  protein:'huelsen', base:null, time:{a:10,c:30}, devices:[['topf']], method:'Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Karotten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Karotte würfeln und in Öl 4 Minuten dünsten. Kreuzkümmel und Paprikapulver kurz mitrösten.',
    'Linsen abspülen, mit Tomaten und 350 ml Wasser zugeben und 25 bis 30 Minuten köcheln, bis sie weich sind und die Soße dick ist.',
    'Koriander hacken und unterrühren.',
    'Kinderportion ohne Salz abnehmen und Linsen leicht zerdrücken. Erwachsene salzen und mit einem Schuss Olivenöl und Brot servieren.'
  ],
  kidName:'Weiche Tomatenlinsen',
  kid:'Linsen sehr weich kochen und leicht zerdrücken, Karotten fein gewürfelt. Mit weichem Brot ohne Rinde und ohne Salz anbieten.',
  leftover:'Linsen-Ei-Pfanne · 10 Min. – Reste erhitzen, ein Ei hineinschlagen und zugedeckt vollständig stocken lassen.',
  tipp:'Braune Linsen müssen nicht eingeweicht werden; ein Lorbeerblatt im Topf macht sie besonders aromatisch.'
},
{
  id:'ma-jelbana', name:'Jelbana · Erbsen-Kartoffel-Tajine mit Artischocken und Ei', cuisine:'Marokko', flag:'🇲🇦',
  protein:'ei', base:'kartoffeln', time:{a:12,c:25}, devices:[['topf']], method:'Topf mit Deckel',
  allergens:['ei'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Erbsen','Kartoffeln','Artischocke','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Erbsen, TK',q:120,u:'g',c:'tk'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Artischockenherzen (Glas oder Dose)',q:60,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln, Ingwer reiben und beides in Öl 3 Minuten dünsten. Kurkuma kurz mitrösten.',
    'Kartoffeln in kleine Würfel schneiden, mit 200 ml Wasser zugeben und zugedeckt 12 Minuten köcheln.',
    'Erbsen und abgespülte, geviertelte Artischockenherzen zugeben und 5 Minuten garen. Eier hineinschlagen und zugedeckt 7 bis 8 Minuten garen, bis Eiweiß und Eigelb fest sind, dann Koriander darüber streuen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen und pfeffern.'
  ],
  kidName:'Erbsen-Kartoffel-Stampf mit Ei',
  kid:'Eier vollständig durchgaren und klein schneiden. Erbsen und Kartoffeln mit etwas Soße grob zerstampfen, Artischocke fein hacken, ohne Salz.',
  leftover:'Erbsen-Kartoffel-Tortilla · 12 Min. – Reste mit zwei verquirlten Eiern in der Pfanne zugedeckt vollständig stocken lassen.',
  tipp:'Jelbana wird in Marokko oft mit Lamm gekocht; mit Ei ist sie schneller fertig und vegetarisch.'
}
);
