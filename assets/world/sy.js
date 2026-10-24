/* Grün geplant · Syrien · Top 15 */
RECIPES.push(
{
  id:'sy-kabab-halabi', name:'Kabab halabi · Aleppo-Hackspieße mit Ofentomaten, Paprika und Fladenbrot', cuisine:'Syrien', flag:'🇸🇾',
  protein:'fleisch', base:null, time:{a:15,c:20}, devices:[['ofen','airfryer']], method:'Backofen oder Airfryer',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Hack mit fein geriebener Zwiebel, gehackter Petersilie, Paprikapulver und Kreuzkümmel verkneten und zu länglichen Röllchen formen.',
    'Tomaten halbieren, Paprika in breite Streifen schneiden und mit Öl auf ein Blech legen, die Röllchen dazulegen.',
    'Alles 15 bis 20 Minuten backen, bis das Fleisch innen durchgegart ist, im Airfryer 12 bis 14 Minuten bei 200 °C. Fladenbrot in den letzten 2 Minuten kurz mitwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen, Kabab und Gemüse auf das Fladenbrot legen und mit Joghurt servieren.'
  ],
  kidName:'Mini-Kabab',
  kid:'Hackröllchen in Scheiben schneiden und mit gehäuteten Ofentomaten und Joghurt anbieten. Ohne Salz.',
  leftover:'Kabab-Pfanne · 10 Min. – Reste klein schneiden und mit Bulgur und Tomaten in der Pfanne vollständig erhitzen.',
  tipp:'Klassisch kommt Aleppo-Pfeffer in den Kabab, edelsüßes Paprikapulver mit einer Prise Chili kommt dem nahe.'
},
{
  id:'sy-dawood-basha', name:'Dawood Basha · Hackbällchen in Tomaten-Zwiebel-Soße mit Vollkornreis', cuisine:'Syrien', flag:'🇸🇾',
  protein:'fleisch', base:'reis', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Pfanne + Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Kräuter'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser aufsetzen und zugedeckt etwa 30 Minuten garen.',
    'Hack mit Baharat und der Hälfte der gehackten Petersilie verkneten, zu walnussgroßen Bällchen formen und in Öl rundum 5 Minuten anbraten.',
    'Zwiebel in Spalten, Paprika in Streifen und Knoblauch in Scheiben zugeben und 3 Minuten mitbraten. Passierte Tomaten und 100 ml Wasser angießen und 15 Minuten köcheln, bis die Bällchen durchgegart sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer abschmecken, mit restlicher Petersilie bestreuen und mit Reis servieren.'
  ],
  kidName:'Bällchen in Tomatensoße',
  kid:'Bällchen für das Kind vierteln, damit sie gut zu kauen sind, und mit weichem Reis und Soße mischen. Ohne Salz.',
  leftover:'Bällchen-Sandwich · 5 Min. – Reste erhitzen und in ein Fladenbrot füllen.',
  tipp:'Die Bällchen lassen sich roh einfrieren und direkt in der Soße garen.'
},
{
  id:'sy-kousa-mahshi', name:'Kousa mahshi · gefüllte Zucchini mit Reis und Hack in Tomatensoße', cuisine:'Syrien', flag:'🇸🇾',
  protein:'fleisch', base:'reis', time:{a:25,c:40}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Tomaten','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Zucchini',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:200,u:'ml',c:'vorrat'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Minze, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zucchini quer halbieren, mit einem Teelöffel aushöhlen und das Fruchtfleisch fein hacken. Reis waschen.',
    'Hack, rohen Reis, Baharat, gehacktes Zucchinifleisch und die Hälfte der gehackten Minze verkneten und locker in die Zucchini füllen, da der Reis aufquillt.',
    'Passierte Tomaten mit 150 ml Wasser, zerdrücktem Knoblauch und Öl in einem breiten Topf aufkochen, Zucchini hineinlegen und zugedeckt 35 bis 40 Minuten leise köcheln, bis Reis und Fleisch gar sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, restlicher Minze und Joghurt servieren.'
  ],
  kidName:'Zucchini-Schiffchen',
  kid:'Gefüllte Zucchini in kleine Stücke schneiden, die Füllung leicht zerdrücken und mit Joghurt mischen. Ohne Salz.',
  leftover:'Mahshi-Reispfanne · 8 Min. – Reste klein schneiden und mit der Soße vollständig erhitzen.',
  tipp:'Kurze, dicke Zucchini lassen sich am leichtesten aushöhlen.'
},
{
  id:'sy-shawarma', name:'Shawarma djaj · Hähnchen-Shawarma aus der Pfanne mit Knoblauchjoghurt im Fladenbrot', cuisine:'Syrien', flag:'🇸🇾',
  protein:'gefluegel', base:null, time:{a:12,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Tomaten','Gurke','Salat'], season:[6,7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in sehr dünne Streifen schneiden und mit Öl, Baharat, Kurkuma und der Hälfte des fein geriebenen Knoblauchs mischen.',
    'In einer heißen Pfanne in zwei Portionen je 5 bis 6 Minuten kräftig anbraten, bis das Fleisch durchgegart und leicht gebräunt ist.',
    'Joghurt mit restlichem Knoblauch verrühren, Tomaten und Gurke in Scheiben und Salat in Streifen schneiden, Fladenbrot erwärmen.',
    'Kinderportion ohne Salz und ohne Knoblauchjoghurt abnehmen. Erwachsene salzen und alles mit Knoblauchjoghurt ins Fladenbrot füllen.'
  ],
  kidName:'Hähnchen-Pita',
  kid:'Hähnchen fein schneiden und mit Naturjoghurt, Gurkenstiften und weichem Fladenbrot getrennt auf dem Teller anbieten.',
  leftover:'Shawarma-Bowl · 8 Min. – Reste mit Reis oder Bulgur, Salat und Joghurt als Schale anrichten.',
  tipp:'Hähnchenschenkel bleiben saftiger als Brust und vertragen die starke Hitze besser.'
},
{
  id:'sy-freekeh-djaj', name:'Freekeh bi djaj · Hähnchen mit geröstetem grünem Weizen, Karotten und Erbsen', cuisine:'Syrien', flag:'🇸🇾',
  protein:'gefluegel', base:'bulgur', time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Karotten','Zwiebel','Erbsen'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Freekeh oder Bulgur',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Freekeh in einem Sieb gründlich spülen. Hähnchen würfeln und im Topf in Öl 5 Minuten anbraten.',
    'Zwiebel und Karotten würfeln, zugeben und 3 Minuten mitdünsten, Zimt und Baharat kurz mitrösten.',
    'Freekeh und Brühe zugeben und zugedeckt 20 bis 25 Minuten garen, mit Bulgur nur 12 Minuten. In den letzten 5 Minuten die Erbsen untermischen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Joghurt servieren.'
  ],
  kidName:'Weizen-Hähnchen-Topf',
  kid:'Hähnchen klein zerzupfen, Karotten und Erbsen weich garen und die Erbsen leicht zerdrücken. Mit Joghurt und ohne Salz.',
  leftover:'Freekeh-Salat · 5 Min. – Reste kalt mit Gurke, Petersilie und Zitrone mischen.',
  tipp:'Freekeh gibt es im arabischen Supermarkt, Bulgur ist ein guter Ersatz.'
},
{
  id:'sy-lahm-bi-ajeen', name:'Lahm bi ajeen · Vollkornfladen mit Hack, Tomaten und Paprika', cuisine:'Syrien', flag:'🇸🇾',
  protein:'fleisch', base:null, time:{a:10,c:12}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Gurke'], season:[7,8,9],
  ing:[
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Tomate, Paprika und Zwiebel sehr fein würfeln.',
    'Mit dem rohen Hack, Tomatenmark, Paprikapulver und Öl zu einer streichfähigen Masse verrühren.',
    'Masse dünn bis zum Rand auf das Fladenbrot streichen und 10 bis 12 Minuten backen, bis das Fleisch vollständig durchgegart ist.',
    'Kinderportion ungesalzen abnehmen und in Streifen schneiden. Erwachsene salzen und mit Joghurt und Gurke servieren.'
  ],
  kidName:'Fleischfladen-Streifen',
  kid:'Fladen in schmale Streifen schneiden, die das Kind gut greifen kann, und mit Joghurt und Gurkenstiften anbieten. Ohne Salz.',
  leftover:'Fladen-Pausenbrot · 2 Min. – Kalte Stücke mit Gurke und Joghurt einpacken.',
  tipp:'Ein Teelöffel Granatapfelsirup in der Masse gibt die typische säuerliche Note.'
},
{
  id:'sy-kibbeh-samak', name:'Kibbet samak · Fisch-Bulgur-Auflauf mit Schmorzwiebeln und Koriander', cuisine:'Syrien', flag:'🇸🇾',
  protein:'fisch', base:'bulgur', time:{a:20,c:30}, devices:[['ofen'],['pfanne']], method:'Pfanne + Backofen',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Kräuter','Zitrone','Tomaten','Gurke'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Bulgur',q:60,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Bulgur 10 Minuten in warmem Wasser einweichen und gut ausdrücken. Ofen auf 190 °C vorheizen.',
    'Fisch sehr fein hacken und mit Bulgur, Kreuzkümmel, Kurkuma, abgeriebener Zitronenschale und der Hälfte des gehackten Korianders zu einem formbaren Teig verkneten.',
    'Zwiebeln in Halbringe schneiden und in der Hälfte des Öls 10 Minuten goldbraun schmoren. Die Hälfte des Teigs in eine geölte Form drücken, Zwiebeln darauf verteilen und mit dem restlichen Teig bedecken.',
    'In Rauten schneiden, mit restlichem Öl bestreichen und 25 bis 30 Minuten backen, bis die Oberfläche goldbraun und der Fisch durchgegart ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Zitronensaft würzen und mit Tomaten-Gurken-Salat servieren.'
  ],
  kidName:'Fisch-Kibbeh-Würfel',
  kid:'Fisch vor dem Hacken gründlich auf Gräten prüfen. Kibbeh in kleine Würfel schneiden und mit Gurkenstiften servieren, ohne Salz.',
  leftover:'Fisch-Kibbeh-Pita · 5 Min. – Reste kurz erwärmen und mit Salat und Joghurt ins Fladenbrot legen.',
  tipp:'Tiefgekühltes Fischfilet gut auftauen und trocken tupfen, sonst wird der Teig zu weich.'
},
{
  id:'sy-samak-bil-furn', name:'Samak bil furn · Ofenfisch mit Kartoffeln, Paprika und Knoblauch-Koriander', cuisine:'Syrien', flag:'🇸🇾',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:35}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Zwiebel','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in dünne Scheiben, Paprika in Streifen und Zwiebel in Ringe schneiden, mit der Hälfte des Öls mischen und 20 Minuten backen.',
    'Knoblauch fein hacken und mit gehacktem Koriander, Zitronensaft, Kreuzkümmel und restlichem Öl verrühren.',
    'Fisch auf das Gemüse legen, mit der Hälfte der Kräutermischung bestreichen und 12 bis 15 Minuten backen, bis er sich leicht zerpflücken lässt.',
    'Kinderportion ohne Chili und Salz abnehmen. Erwachsene mit restlicher Kräutermischung, Chiliflocken und Salz würzen.'
  ],
  kidName:'Ofenfisch mit Kartoffeln',
  kid:'Fisch sorgfältig entgräten und zerpflücken, Kartoffeln weich backen und leicht zerdrücken. Ohne Chili und Salz.',
  leftover:'Fisch-Kartoffel-Salat · 8 Min. – Reste kalt mit Gurke, Zitrone und Joghurt mischen.',
  tipp:'Wer den Fisch im Ganzen backen möchte, nimmt eine Dorade und verlängert die Garzeit um 10 Minuten.'
},
{
  id:'sy-fatteh', name:'Fattet hummus · warme Kichererbsen mit Joghurt-Tahini auf geröstetem Brot', cuisine:'Syrien', flag:'🇸🇾',
  protein:'huelsen', base:null, time:{a:10,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch','sesam'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Gurke','Tomaten','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Naturjoghurt',q:120,u:'g',c:'kuehl'},
    {n:'Tahini (Sesammus)',q:1,u:'EL',c:'vorrat'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fladenbrot in kleine Stücke reißen und in einer trockenen Pfanne 5 bis 6 Minuten knusprig rösten.',
    'Kichererbsen mit etwas Wasser und Kreuzkümmel im Topf 5 Minuten erhitzen. Joghurt mit Tahini, Zitronensaft und fein geriebenem Knoblauch glatt rühren.',
    'Brot in Schalen geben, mit 2 EL Kochwasser beträufeln, Kichererbsen darauf verteilen und mit der Joghurtsoße bedecken. Gurke und Tomaten würfeln und mit Petersilie dazureichen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und etwas Kreuzkümmel würzen.'
  ],
  kidName:'Kichererbsen-Joghurt-Schale',
  kid:'Kichererbsen für das Kind zerdrücken und das Brot in der Soße weich werden lassen. Tomaten und Gurke klein würfeln.',
  tipp:'Brot und Kichererbsen erst kurz vor dem Essen schichten, damit das Brot nicht ganz durchweicht.'
},
{
  id:'sy-harak-osbao', name:'Harak osbao · Linsen mit Vollkornnudeln, Granatapfelsirup und Röstzwiebeln', cuisine:'Syrien', flag:'🇸🇾',
  protein:'huelsen', base:'nudeln', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Kräuter','Tomaten','Zitrone'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornnudeln',q:50,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Granatapfelsirup',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen in reichlich Wasser 20 Minuten köcheln, dann kleine Vollkornnudeln zugeben und 8 bis 10 Minuten weich garen, bis eine sämige Konsistenz entsteht. Überschüssiges Wasser abgießen.',
    'Inzwischen Zwiebel in Halbringe schneiden und in Öl 12 bis 15 Minuten goldbraun schmoren, in den letzten 2 Minuten Knoblauch und die Hälfte des gehackten Korianders zugeben.',
    'Die Hälfte der Zwiebeln, Kreuzkümmel, Granatapfelsirup und Zitronensaft unter die Linsennudeln rühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene salzen, mit restlichen Zwiebeln und Koriander bestreuen und mit Tomatenwürfeln servieren.'
  ],
  kidName:'Linsen-Nudeln',
  kid:'Nudeln und Linsen für das Kind gut weich kochen, Zwiebeln klein schneiden und den säuerlichen Sirup sparsam dosieren. Ohne Salz.',
  leftover:'Linsen-Nudel-Salat · 5 Min. – Reste lauwarm mit Petersilie, Tomaten und Zitrone servieren.',
  tipp:'Harak osbao schmeckt lauwarm am besten, die Säure kommt dann besser heraus.'
},
{
  id:'sy-ijjeh', name:'Ijjeh · Kräuter-Zucchini-Omelett mit Fladenbrot und Tomaten', cuisine:'Syrien', flag:'🇸🇾',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Frühlingszwiebel','Kräuter','Tomaten'], season:[6,7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Minze, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Weizenvollkornmehl',q:10,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zucchini grob raspeln und leicht ausdrücken, Frühlingszwiebel in Ringe schneiden und die Kräuter fein hacken.',
    'Eier mit Mehl und Baharat verquirlen und Gemüse und Kräuter unterheben.',
    'Öl in der Pfanne erhitzen, die Masse als kleine Fladen hineingeben und bei mittlerer Hitze pro Seite 4 bis 5 Minuten braten, bis das Ei vollständig gestockt ist.',
    'Tomaten in Spalten schneiden und Fladenbrot erwärmen. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Kräuter-Omelett-Streifen',
  kid:'Omelett vollständig durchgaren und in Streifen schneiden, die das Kind gut greifen kann. Tomaten in kleine Stücke schneiden, ohne Salz.',
  leftover:'Ijjeh-Sandwich · 3 Min. – Kalte Omelett-Fladen mit Tomate ins Fladenbrot legen.',
  tipp:'Kleine Fladen lassen sich leichter wenden als ein großes Omelett.'
},
{
  id:'sy-makhlouta', name:'Makhlouta · Linsen-Bohnen-Eintopf mit Reis, Karotten und Spinat', cuisine:'Syrien', flag:'🇸🇾',
  protein:'huelsen', base:'reis', time:{a:12,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Zwiebel','Karotten','Spinat'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:40,u:'g',c:'vorrat'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:70,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kichererbsen (Dose, abgetropft)',q:70,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Reis',q:40,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotten würfeln und im Topf in Öl mit Kreuzkümmel 5 Minuten dünsten.',
    'Linsen, Reis und Brühe zugeben und zugedeckt 20 Minuten köcheln, bis die Linsen weich sind.',
    'Abgespülte Bohnen, Kichererbsen und Spinat zugeben und 5 Minuten mitkochen, bis der Eintopf dick und sämig ist, bei Bedarf etwas Wasser angießen.',
    'Kinderportion ungesalzen abnehmen und die Hülsenfrüchte zerdrücken. Erwachsene mit Salz, Pfeffer und etwas Kreuzkümmel würzen.'
  ],
  kidName:'Hülsenfrüchte-Topf',
  kid:'Bohnen und Kichererbsen für das Kind mit der Gabel zerdrücken und den Spinat fein schneiden. Lauwarm und ohne Salz servieren.',
  leftover:'Makhlouta vom Vortag · 5 Min. – Reste mit etwas Wasser vollständig aufkochen, der Eintopf schmeckt am zweiten Tag noch besser.',
  tipp:'Der Eintopf lässt sich gut in Portionen einfrieren.'
},
{
  id:'sy-burghul-banadoura', name:'Burghul bi banadoura · Tomaten-Bulgur mit Kichererbsen, Paprika und Joghurt', cuisine:'Syrien', flag:'🇸🇾',
  protein:'huelsen', base:'bulgur', time:{a:8,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Tomaten','Rote Paprika','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Bulgur',q:70,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:120,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Paprika würfeln und im Topf in Öl 4 Minuten dünsten, Tomatenmark und Paprikapulver 1 Minute mitrösten.',
    'Tomaten würfeln und mit Bulgur, abgespülten Kichererbsen und Brühe zugeben, aufkochen und zugedeckt bei kleiner Hitze 12 Minuten quellen lassen.',
    'Vom Herd nehmen, 3 Minuten ruhen lassen und mit der Gabel auflockern.',
    'Kinderportion ungesalzen abnehmen und die Kichererbsen zerdrücken. Erwachsene mit Salz und Pfeffer würzen und mit Joghurt servieren.'
  ],
  kidName:'Tomaten-Bulgur',
  kid:'Kichererbsen für das Kind zerdrücken und den Bulgur mit einem Klecks Joghurt cremiger machen. Ohne Salz.',
  leftover:'Gefüllte Paprika · 25 Min. – Reste in halbierte Paprika füllen und im Ofen 20 Minuten backen.',
  tipp:'Feiner Bulgur wird weicher und eignet sich besser für kleine Kinder, grober bleibt körniger.'
},
{
  id:'sy-kibbet-laqteen', name:'Kibbet laqteen · Kürbis-Bulgur-Kibbeh mit Spinat-Kichererbsen-Füllung', cuisine:'Syrien', flag:'🇸🇾',
  protein:'huelsen', base:'bulgur', time:{a:25,c:35}, devices:[['ofen'],['topf','mikrowelle']], method:'Topf + Pfanne + Backofen',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kürbis','Spinat','Zwiebel','Zitrone'], season:[9,10,11],
  ing:[
    {n:'Hokkaido-Kürbis',q:200,u:'g',c:'gemuese'},
    {n:'Bulgur',q:60,u:'g',c:'vorrat'},
    {n:'Weizenvollkornmehl',q:15,u:'g',c:'vorrat'},
    {n:'Babyspinat',q:80,u:'g',c:'gemuese'},
    {n:'Kichererbsen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Sumach',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kürbis würfeln und in wenig Wasser 12 Minuten weich kochen oder in der Mikrowelle 6 Minuten garen, abgießen und zerdrücken. Bulgur unterrühren, 10 Minuten quellen lassen, dann mit Mehl und Baharat verkneten. Ofen auf 190 °C vorheizen.',
    'Zwiebel würfeln und in der Pfanne in der Hälfte des Öls 5 Minuten dünsten, Spinat und grob zerdrückte Kichererbsen zugeben, bis der Spinat zusammenfällt, mit Sumach und Zitronensaft würzen.',
    'Die Hälfte des Kürbisteigs in eine geölte Form streichen, die Füllung verteilen, restlichen Teig darauf glatt streichen und in Rauten schneiden.',
    'Mit restlichem Öl bestreichen und 30 bis 35 Minuten backen, bis die Oberfläche fest und goldbraun ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz würzen und mit einem Salat servieren.'
  ],
  kidName:'Kürbis-Kibbeh-Würfel',
  kid:'Kibbeh in kleine, weiche Würfel schneiden und die Kichererbsen für die Füllung vorher gut zerdrücken. Ohne Salz.',
  leftover:'Kibbeh-Lunchbox · 2 Min. – Kalte Rauten mit Gurke und Joghurt einpacken.',
  tipp:'Ist der Teig zu weich, einen weiteren Esslöffel Mehl oder Bulgur einarbeiten.'
},
{
  id:'sy-mnazaleh', name:'Mnazaleh · Auberginen-Kichererbsen-Schmortopf mit Tomaten und Vollkornreis', cuisine:'Syrien', flag:'🇸🇾',
  protein:'huelsen', base:'reis', time:{a:15,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Aubergine','Tomaten','Zwiebel','Rote Paprika','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Aubergine',q:0.75,u:'Stk.',c:'gemuese'},
    {n:'Kichererbsen (Dose, abgetropft)',q:120,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:200,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis aufsetzen und etwa 30 Minuten garen. Ofen auf 220 °C vorheizen.',
    'Aubergine in 2 cm große Würfel schneiden, mit der Hälfte des Öls mischen und auf dem Blech 20 Minuten rösten, bis sie weich und gebräunt ist.',
    'Zwiebel, Paprika und Knoblauch würfeln und im Topf im restlichen Öl 5 Minuten dünsten. Tomaten, Baharat und Kichererbsen zugeben, 10 Minuten köcheln und die Aubergine unterheben.',
    'Kinderportion ungesalzen abnehmen und die Kichererbsen zerdrücken. Erwachsene mit Salz, Pfeffer und gehackter Petersilie würzen und mit Reis servieren.'
  ],
  kidName:'Auberginen-Tomaten-Reis',
  kid:'Aubergine sehr weich garen und mit den Kichererbsen leicht zerdrücken, dann unter den Reis mischen. Ohne Salz.',
  leftover:'Mnazaleh-Toast · 5 Min. – Reste erhitzen und mit Joghurt auf geröstetem Vollkornbrot servieren.',
  tipp:'Statt frittiert werden die Auberginen im Ofen geröstet, das spart viel Öl.'
}
);
