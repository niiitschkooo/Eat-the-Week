/* Grün geplant · Spanien · Top 15 */
RECIPES.push(
{
  id:'es-paella-valenciana', name:'Paella valenciana · Pfannenreis mit Hähnchen, grünen und weißen Bohnen', cuisine:'Spanien', flag:'🇪🇸',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['pfanne']], method:'Große Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Grüne Bohnen','Tomaten','Rote Paprika'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:120,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Grüne Bohnen',q:80,u:'g',c:'gemuese'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:50,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in Stücke schneiden und in der großen Pfanne in Öl 6 Minuten rundum goldbraun braten. Grüne Bohnen in Stücke und Paprika in Streifen schneiden und 3 Minuten mitbraten.',
    'Tomate reiben oder fein würfeln, mit Paprikapulver und Kurkuma zugeben und 2 Minuten einkochen.',
    'Reis gleichmäßig einstreuen, heiße Brühe angießen und die abgespülten weißen Bohnen verteilen. Ohne Rühren 18 bis 20 Minuten bei mittlerer Hitze garen, bis der Reis weich und die Flüssigkeit aufgesogen ist.',
    'Vom Herd nehmen und 5 Minuten mit einem Tuch bedeckt ruhen lassen.',
    'Kinderportion ohne Salz abnehmen und das Hähnchen klein zupfen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Hähnchen','Weiße Bohnen'],f:['Grüne Bohnen','Weiße Bohnen','Paprika'],i:['Hähnchen','Weiße Bohnen'],fat:['Olivenöl']},
  kidName:'Mini-Paella',
  kid:'Hähnchen fein zerzupfen, grüne Bohnen klein schneiden und weiße Bohnen zerdrücken. Der weiche Reis passt ohne Salz gut für das Kind.',
  leftover:'Paella-Pfanne · 8 Min. – Reste mit einem Schluck Wasser in der Pfanne erhitzen, bis unten eine leichte Kruste entsteht.',
  extras:[], tipp:'Eine Prise Safran statt Kurkuma ergibt die klassische Farbe und das typische Aroma.'
},
{
  id:'es-albondigas', name:'Albóndigas en salsa · Hackbällchen in Tomaten-Paprika-Soße mit Vollkornreis', cuisine:'Spanien', flag:'🇪🇸',
  protein:'fleisch', base:'reis', time:{a:20,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Tomaten','Erbsen','Zwiebel'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und zugedeckt 30 Minuten weich garen.',
    'Hackfleisch mit Haferflocken, Ei und der Hälfte der fein geriebenen Zwiebel verkneten, zu kleinen Bällchen formen und in Öl rundum 5 Minuten anbraten.',
    'Restliche Zwiebel und Paprika fein würfeln und 3 Minuten mitbraten. Passierte Tomaten, Paprikapulver und Erbsen zugeben und zugedeckt 12 Minuten köcheln, bis die Bällchen durchgegart sind.',
    'Kinderportion ohne Salz abnehmen und die Bällchen zerdrücken. Erwachsene mit Salz, Pfeffer und nach Wunsch etwas Chili würzen.'
  ],
  nutri:{p:['Rinderhack','Ei'],f:['Vollkornreis','Paprika','Erbsen'],i:['Rinderhack','Erbsen'],fat:['Olivenöl']},
  kidName:'Mini-Albóndigas',
  kid:'Bällchen klein formen, vollständig durchgaren und für das Kind halbieren oder zerdrücken, Erbsen ebenfalls zerdrücken. Ohne Salz und Chili.',
  leftover:'Albóndigas-Bocadillo · 8 Min. – Reste erhitzen und in ein Vollkornbrötchen füllen.',
  extras:['linsen'], tipp:'Die Bällchen lassen sich ungegart einfrieren und direkt in der Soße garen.'
},
{
  id:'es-pollo-al-ajillo', name:'Pollo al ajillo · Knoblauch-Hähnchen mit Paprika, Zucchini und Vollkornbrot', cuisine:'Spanien', flag:'🇪🇸',
  protein:'gefluegel', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Zucchini','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:2,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:60,u:'ml',c:'vorrat'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in 2 cm große Würfel, Paprika und Zucchini in Stücke und Knoblauch in dünne Scheiben schneiden.',
    'Hähnchen in Öl 5 Minuten rundum goldbraun braten. Gemüse und Knoblauch zugeben und 4 Minuten mitbraten, ohne dass der Knoblauch dunkel wird.',
    'Brühe und Paprikapulver zugeben und 4 Minuten einkochen lassen, bis das Fleisch durchgegart ist.',
    'Kinderportion ohne Salz abnehmen und das Fleisch fein schneiden. Erwachsene mit gehackter Petersilie, Salz und Pfeffer würzen und mit Brot zum Tunken servieren.'
  ],
  nutri:{p:['Hähnchen','Vollkornbrot'],f:['Vollkornbrot','Paprika','Zucchini'],i:['Hähnchen'],fat:['Olivenöl']},
  kidName:'Knoblauch-Hähnchen mild',
  kid:'Hähnchen sehr fein schneiden und mit etwas Soße befeuchten, Gemüse weich braten. Knoblauchscheiben für das Kind herauslesen.',
  leftover:'Hähnchen-Bocadillo · 5 Min. – Reste mit Salat in ein Vollkornbrötchen füllen.',
  extras:['kichererbsen'], tipp:'Knoblauch erst nach dem Fleisch zugeben, sonst wird er bitter.'
},
{
  id:'es-cocido-madrileno', name:'Cocido madrileño · Kichererbsen-Eintopf mit Hähnchen, Kohl und Kartoffeln', cuisine:'Spanien', flag:'🇪🇸',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:40}, devices:[['topf','slowcooker']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Weißkohl','Karotten','Kartoffeln','Lauch'], season:[10,11,12,1,2],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:110,u:'g',c:'fisch'},
    {n:'Kichererbsen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kartoffeln, festkochend',q:180,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen mit Brühe, Lorbeer und der in Stücke geschnittenen Karotte aufkochen und zugedeckt 20 Minuten leise köcheln.',
    'Kartoffeln in große Würfel und Lauch in Ringe schneiden, mit den abgespülten Kichererbsen zugeben und 15 Minuten garen. Nach 5 Minuten den in Streifen geschnittenen Kohl dazugeben.',
    'Hähnchen herausnehmen, zerzupfen und zurückgeben. Öl und Paprikapulver unterrühren.',
    'Kinderportion ohne Salz abnehmen und die Kichererbsen zerdrücken. Erwachsene mit Salz und Pfeffer würzen und wie in Madrid zuerst die Brühe, dann Fleisch und Gemüse essen.'
  ],
  nutri:{p:['Hähnchen','Kichererbsen'],f:['Kichererbsen','Weißkohl','Kartoffeln','Karotten'],i:['Kichererbsen','Hähnchen'],fat:['Olivenöl']},
  kidName:'Mini-Cocido',
  kid:'Hähnchen fein zerzupfen, Kichererbsen und Kartoffeln mit etwas Brühe zerdrücken. Kohl sehr weich garen und klein schneiden, ohne Salz.',
  leftover:'Ropa vieja · 10 Min. – Fleisch, Kichererbsen und Gemüse ohne Brühe in der Pfanne mit etwas Öl anbraten.',
  extras:[], tipp:'Die übrige Brühe mit kleinen Nudeln als Vorsuppe servieren, wie es in Madrid üblich ist.'
},
{
  id:'es-pinchos-morunos', name:'Pinchos morunos · Gewürzte Schweinefleischspieße mit Paprika und Vollkorn-Fladenbrot', cuisine:'Spanien', flag:'🇪🇸',
  protein:'fleisch', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Rote Zwiebel','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Schweinefilet',q:120,u:'g',c:'fisch'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Schweinefilet in 2,5 cm große Würfel schneiden und mit der Hälfte des Öls, Kreuzkümmel und Paprikapulver mischen. Paprika und Zwiebel in Stücke schneiden.',
    'Fleisch und Gemüse abwechselnd auf Spieße stecken und in der heißen Pfanne mit restlichem Öl rundum 8 bis 10 Minuten braten, bis das Fleisch durchgegart ist.',
    'Fladenbrot kurz in der Pfanne erwärmen und die Tomate würfeln.',
    'Kinderportion vom Spieß nehmen, das Fleisch sehr fein schneiden und mit Joghurt anbieten. Erwachsene Spieße mit Salz und Pfeffer würzen und mit Joghurt, Tomate und Fladenbrot servieren.'
  ],
  nutri:{p:['Schweinefilet','Naturjoghurt'],f:['Vollkorn-Fladenbrot','Paprika'],i:['Schweinefleisch'],fat:['Olivenöl']},
  kidName:'Spießfleisch mild',
  kid:'Fleisch und Gemüse vom Spieß nehmen, Fleisch sehr fein schneiden und mit Joghurt befeuchten. Fladenbrot in weichen Streifen, Tomate fein gewürfelt.',
  leftover:'Fladenbrot-Taschen · 5 Min. – Reste mit Joghurt und Gurke ins aufgeschnittene Fladenbrot füllen.',
  extras:['kichererbsen'], tipp:'Das Fleisch lässt sich morgens marinieren, dann ist es abends besonders zart.'
},
{
  id:'es-marmitako', name:'Marmitako · Baskischer Thunfisch-Kartoffel-Topf mit Paprika', cuisine:'Spanien', flag:'🇪🇸',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Thunfisch (Dose, im eigenen Saft)',q:110,u:'g',c:'vorrat',hint:'1 Dose ≈ 140 g abgetropft'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Paprika klein würfeln und in Öl 5 Minuten weich dünsten, Paprikapulver kurz mitrösten.',
    'Kartoffeln schälen und in unregelmäßige Stücke brechen, mit Tomaten und Brühe zugeben und zugedeckt 20 Minuten köcheln, bis die Kartoffeln weich sind und die Soße bindet.',
    'Thunfisch abtropfen, in grobe Stücke zupfen und 2 Minuten in der heißen Soße ziehen lassen.',
    'Kinderportion ohne Salz abnehmen und die Kartoffeln zerdrücken. Erwachsene mit Salz, Pfeffer und etwas Chili abschmecken.'
  ],
  nutri:{p:['Thunfisch'],f:['Kartoffeln','Paprika','Tomaten'],i:['Thunfisch'],fat:['Olivenöl']},
  kidName:'Thunfisch-Kartoffel-Topf mild',
  kid:'Thunfisch fein zerpflücken und mit den weichen Kartoffeln zerdrücken, ohne Salz und Chili. Thunfisch für Kleinkinder nur gelegentlich anbieten.',
  leftover:'Thunfisch-Kartoffel-Pfanne · 8 Min. – Eingedickte Reste in der Pfanne mit einem Ei verrühren und vollständig durchgaren.',
  extras:['ei'], tipp:'Gebrochene statt geschnittene Kartoffeln geben mehr Stärke ab und machen die Soße sämig.'
},
{
  id:'es-merluza-salsa-verde', name:'Merluza en salsa verde · Weißer Fisch in Petersiliensoße mit Erbsen und Kartoffeln', cuisine:'Spanien', flag:'🇪🇸',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:22}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Erbsen','Kräuter','Zwiebel'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:120,u:'ml',c:'vorrat'},
    {n:'Speisestärke',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in Scheiben schneiden und in Wasser 15 Minuten weich kochen.',
    'Zwiebel und Knoblauch sehr fein hacken und in Öl in der Pfanne 3 Minuten glasig dünsten. Stärke mit Brühe verrühren, zugeben und aufkochen.',
    'Fisch in Stücke schneiden und mit Erbsen und der Hälfte der gehackten Petersilie in die Soße legen. Zugedeckt bei kleiner Hitze 6 bis 8 Minuten gar ziehen lassen und die Pfanne dabei ab und zu schwenken.',
    'Kinderportion abnehmen, den Fisch auf Gräten prüfen und zerpflücken. Erwachsene mit restlicher Petersilie, Salz und Pfeffer würzen und mit den Kartoffeln servieren.'
  ],
  nutri:{p:['Seelachs oder Kabeljau','Erbsen'],f:['Kartoffeln','Erbsen'],i:['Erbsen','Petersilie'],fat:['Olivenöl']},
  kidName:'Fisch in grüner Soße mild',
  kid:'Fisch sorgfältig entgräten und zerpflücken, Erbsen und Kartoffeln mit etwas Soße zerdrücken. Ohne Salz.',
  leftover:'Fisch-Kartoffel-Taler · 15 Min. – Fisch und Kartoffeln zerdrücken, mit einem Ei zu Talern formen und in der Pfanne durchbraten.',
  extras:['ei'], tipp:'Die Pfanne schwenken statt rühren, dann bleiben die Fischstücke ganz.'
},
{
  id:'es-fideua', name:'Fideuà · Valencianische Nudelpfanne mit Fisch, Erbsen und Paprika', cuisine:'Spanien', flag:'🇪🇸',
  protein:'fisch', base:'nudeln', time:{a:8,c:15}, devices:[['pfanne']], method:'Große Pfanne',
  allergens:['gluten','fisch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Erbsen','Tomaten'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Seelachsfilet',q:120,u:'g',c:'fisch'},
    {n:'Erbsen, TK',q:70,u:'g',c:'tk'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:60,u:'ml',c:'vorrat'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Dünne Vollkornspaghetti in 2 cm lange Stücke brechen und in Öl in der großen Pfanne 2 Minuten anrösten.',
    'Paprika würfeln und mit gehacktem Knoblauch, passierten Tomaten, Paprikapulver und Kurkuma 1 Minute mitrühren. Heiße Brühe angießen und 6 Minuten köcheln.',
    'Fisch in Würfel schneiden, mit den Erbsen auf den Nudeln verteilen und weitere 6 bis 7 Minuten garen, bis die Nudeln weich sind, die Brühe aufgesogen ist und der Fisch durch ist.',
    'Kinderportion ohne Salz abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Seelachs','Vollkornnudeln','Erbsen'],f:['Vollkornnudeln','Erbsen','Paprika'],i:['Erbsen'],fat:['Olivenöl']},
  kidName:'Mini-Fideuà',
  kid:'Kurze Nudeln weich garen, Fisch auf Gräten prüfen und zerpflücken, Erbsen leicht zerdrücken. Ohne Salz.',
  leftover:'Fideuà-Tortilla · 12 Min. – Reste mit 2 verquirlten Eiern in der Pfanne zugedeckt vollständig stocken lassen.',
  extras:[], tipp:'Klassisch gehört Alioli dazu, für Erwachsene passt auch ein Klecks Joghurt mit etwas Knoblauch.'
},
{
  id:'es-bacalao-vizcaina', name:'Bacalao a la vizcaína · Kabeljau in milder Paprikasoße mit Reis', cuisine:'Spanien', flag:'🇪🇸',
  protein:'fisch', base:'reis', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Zwiebel','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und zugedeckt 15 Minuten garen.',
    'Zwiebel, Knoblauch und Paprika klein schneiden und in Öl 10 Minuten bei mittlerer Hitze weich schmoren. Paprikapulver und passierte Tomaten zugeben, 3 Minuten köcheln und fein pürieren.',
    'Kabeljau in Stücke schneiden, in die Soße legen und zugedeckt 7 bis 8 Minuten gar ziehen lassen, bis er innen weiß ist.',
    'Kinderportion abnehmen, den Fisch auf Gräten prüfen und zerpflücken. Erwachsene mit Salz, Pfeffer und etwas Chili würzen.'
  ],
  nutri:{p:['Kabeljau'],f:['Paprika','Tomaten'],i:['Kabeljau'],fat:['Olivenöl']},
  kidName:'Fisch in Paprikasoße',
  kid:'Fisch auf Gräten prüfen und zerpflücken, mit der glatt pürierten Soße und dem weichen Reis vermischen. Ohne Salz und Chili.',
  leftover:'Paprika-Fisch-Reis · 8 Min. – Reste mit etwas Wasser in der Pfanne erhitzen und Erbsen untermischen.',
  extras:['kichererbsen'], tipp:'Klassisch wird gesalzener Stockfisch verwendet, frischer Kabeljau spart das Wässern und viel Salz.'
},
{
  id:'es-espinacas-garbanzos', name:'Espinacas con garbanzos · Sevillanischer Spinat-Kichererbsen-Topf mit Vollkornbrot', cuisine:'Spanien', flag:'🇪🇸',
  protein:'huelsen', base:null, time:{a:10,c:12}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Spinat','Tomaten','Zwiebel'], season:[3,4,5,6],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Babyspinat',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Eine halbe Brotscheibe würfeln und mit dem Knoblauch in Öl 2 Minuten rösten. Mit Kreuzkümmel, Paprikapulver und 2 EL Wasser fein zerdrücken oder pürieren.',
    'Zwiebel fein würfeln und in der Pfanne 3 Minuten dünsten. Spinat zugeben und zusammenfallen lassen.',
    'Kichererbsen abspülen und mit passierten Tomaten und der Brot-Gewürz-Paste zugeben. 5 Minuten sämig köcheln.',
    'Kinderportion ohne Salz abnehmen und die Kichererbsen zerdrücken. Erwachsene mit Salz und Pfeffer abschmecken, dazu das restliche Brot.'
  ],
  nutri:{p:['Kichererbsen','Vollkornbrot'],f:['Kichererbsen','Spinat','Vollkornbrot'],i:['Kichererbsen','Spinat'],fat:['Olivenöl']},
  kidName:'Spinat-Kichererbsen-Mus',
  kid:'Kichererbsen gründlich zerdrücken und mit dem weichen Spinat verrühren. Brot in weichen Streifen zum Dippen, ohne Salz.',
  leftover:'Garbanzos-Wrap · 5 Min. – Reste erhitzen und in eine Vollkorn-Tortilla rollen.',
  extras:['ei','feta'], tipp:'Das geröstete Brot bindet die Soße wie in Sevilla, ganz ohne Sahne.'
},
{
  id:'es-lentejas', name:'Lentejas estofadas · Spanischer Linseneintopf mit Kartoffeln, Karotten und Paprika', cuisine:'Spanien', flag:'🇪🇸',
  protein:'huelsen', base:'kartoffeln', time:{a:10,c:30}, devices:[['topf','slowcooker']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Rote Paprika','Kartoffeln','Zwiebel'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:65,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, geräuchert',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch, Karotte und Paprika klein würfeln und in Öl 5 Minuten andünsten, Paprikapulver kurz mitrösten.',
    'Linsen abspülen, mit passierten Tomaten und Brühe zugeben und zugedeckt 15 Minuten köcheln.',
    'Kartoffeln in kleine Würfel schneiden, zugeben und weitere 15 Minuten garen, bis Linsen und Kartoffeln weich sind.',
    'Kinderportion ohne Salz abnehmen und grob zerdrücken. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  nutri:{p:['Braune Linsen'],f:['Linsen','Kartoffeln','Karotten'],i:['Linsen'],fat:['Olivenöl']},
  kidName:'Linsen-Kartoffel-Brei',
  kid:'Linsen und Kartoffeln weich kochen und grob zerdrücken, Gemüse in kleinen weichen Würfeln. Ohne Salz.',
  leftover:'Linsen-Bratlinge · 15 Min. – Eingedickte Reste mit Haferflocken verkneten, zu Talern formen und in der Pfanne braten.',
  extras:['ei'], tipp:'Geräuchertes Paprikapulver ersetzt die Chorizo und gibt den typischen rauchigen Geschmack.'
},
{
  id:'es-fabada', name:'Fabada asturiana · Weiße-Bohnen-Eintopf mit Lauch, Paprika und Wirsing', cuisine:'Spanien', flag:'🇪🇸',
  protein:'huelsen', base:null, time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Lauch','Rote Paprika','Wirsing','Karotten'], season:[11,12,1,2],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Wirsing',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, geräuchert',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Lauch in Ringe, Paprika und Karotte in Würfel und Wirsing in feine Streifen schneiden. Lauch, Paprika und Karotte in Öl 5 Minuten andünsten, Paprikapulver kurz mitrösten.',
    'Brühe, Lorbeer und Wirsing zugeben und 12 Minuten köcheln.',
    'Bohnen abspülen, zugeben und 8 Minuten sanft mitköcheln. Ein Viertel der Bohnen am Topfrand zerdrücken, damit der Eintopf sämig wird.',
    'Kinderportion ohne Salz abnehmen und die Bohnen zerdrücken. Erwachsene mit Salz und Pfeffer abschmecken, dazu Vollkornbrot.'
  ],
  nutri:{p:['Weiße Bohnen','Vollkornbrot'],f:['Weiße Bohnen','Wirsing','Vollkornbrot'],i:['Weiße Bohnen'],fat:['Olivenöl']},
  kidName:'Bohnen-Gemüse-Topf mild',
  kid:'Bohnen mit der Gabel zerdrücken, Wirsing sehr weich garen und fein schneiden. Ohne Salz, Brot in weichen Streifen dazu.',
  leftover:'Bohnencreme-Brot · 5 Min. – Reste fein pürieren und warm auf Vollkornbrot streichen.',
  extras:['ei','feta'], tipp:'Klassisch gehören Chorizo und Blutwurst hinein, geräuchertes Paprikapulver bringt das Raucharoma ohne Wurst.'
},
{
  id:'es-arroz-al-horno', name:'Arroz al horno · Valencianischer Ofenreis mit Kichererbsen, Kartoffeln und Tomaten', cuisine:'Spanien', flag:'🇪🇸',
  protein:'huelsen', base:'reis', time:{a:15,c:40}, devices:[['pfanne'],['ofen']], method:'Ofenfeste Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Kartoffeln','Rote Paprika'], season:[7,8,9],
  ing:[
    {n:'Rundkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in dünne Scheiben und Paprika in Würfel schneiden und in einer ofenfesten Pfanne in Öl 5 Minuten anbraten.',
    'Eine Tomate würfeln und mit gehacktem Knoblauch, Paprikapulver und Kurkuma 2 Minuten mitdünsten. Reis und abgespülte Kichererbsen unterrühren und mit heißer Brühe aufgießen.',
    'Die halbe Tomate mit der Schnittfläche nach oben in die Mitte setzen. Im Ofen 25 bis 30 Minuten backen, bis der Reis weich und die Flüssigkeit aufgesogen ist.',
    'Kinderportion ohne Salz abnehmen und die Kichererbsen zerdrücken. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Kichererbsen','Reis'],f:['Kichererbsen','Kartoffeln','Tomaten'],i:['Kichererbsen'],fat:['Olivenöl']},
  kidName:'Mini-Ofenreis',
  kid:'Kichererbsen gründlich zerdrücken, weich gebackene Kartoffeln und gehäutete Tomate untermischen. Ohne Salz.',
  leftover:'Reis-Bratlinge · 15 Min. – Kalte Reste mit einem Ei verkneten, zu Talern formen und in der Pfanne durchbraten.',
  extras:['ei','feta','haehnchen'], tipp:'In Valencia kommen Schweinerippchen und Blutwurst dazu, mit Kichererbsen allein wird der Ofenreis leichter und vegetarisch.'
},
{
  id:'es-pisto-manchego', name:'Pisto manchego · Spanisches Schmorgemüse mit Ei und Vollkornbrot', cuisine:'Spanien', flag:'🇪🇸',
  protein:'ei', base:null, time:{a:15,c:25}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Rote Paprika','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Paprika und Zucchini in kleine Würfel schneiden, Tomaten fein würfeln.',
    'Zwiebel und Paprika in Öl 8 Minuten bei mittlerer Hitze weich dünsten, Zucchini zugeben und 5 Minuten mitgaren. Tomaten und Oregano zugeben und 8 Minuten einkochen.',
    'Zwei Mulden in das Gemüse drücken, die Eier hineinschlagen und zugedeckt 6 bis 7 Minuten garen, bis Eiweiß und Eigelb fest sind.',
    'Kinderportion ohne Salz abnehmen und das Ei klein schneiden. Erwachsene mit Salz und Pfeffer würzen, dazu Vollkornbrot.'
  ],
  nutri:{p:['Eier'],f:['Vollkornbrot','Zucchini','Paprika'],i:['Eier'],fat:['Eier','Olivenöl']},
  kidName:'Mini-Pisto',
  kid:'Gemüse sehr weich schmoren und Tomatenhaut entfernen, das vollständig gestockte Ei klein schneiden. Brot in weichen Streifen, ohne Salz.',
  leftover:'Pisto-Toast · 5 Min. – Übriges Schmorgemüse warm auf geröstetes Vollkornbrot geben.',
  extras:['feta','kichererbsen'], tipp:'Pisto lässt sich gut vorkochen, die Eier dann erst beim Aufwärmen hineinsetzen.'
},
{
  id:'es-revuelto-setas', name:'Revuelto de setas · Spanisches Rührei mit Pilzen, grünem Spargel und Vollkornbrot', cuisine:'Spanien', flag:'🇪🇸',
  protein:'ei', base:null, time:{a:8,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Pilze','Spargel','Frühlingszwiebel','Kräuter'], season:[4,5,6],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Champignons',q:120,u:'g',c:'gemuese'},
    {n:'Grüner Spargel',q:100,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Pilze in Scheiben, Spargel in 3 cm lange Stücke und Frühlingszwiebel in Ringe schneiden, Knoblauch fein hacken.',
    'Spargel und Pilze in Öl 5 Minuten braten, bis der Spargel weich ist. Frühlingszwiebel und Knoblauch 1 Minute mitbraten.',
    'Verquirlte Eier zugeben und bei milder Hitze 3 bis 4 Minuten rühren, bis sie vollständig gestockt sind.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit gehackter Petersilie, Salz und Pfeffer würzen, dazu geröstetes Vollkornbrot.'
  ],
  nutri:{p:['Eier','Vollkornbrot'],f:['Vollkornbrot','Spargel','Pilze'],i:['Eier'],fat:['Eier','Olivenöl']},
  kidName:'Pilz-Rührei',
  kid:'Rührei vollständig durchgaren, Pilze und Spargel klein schneiden und weich braten. Brot in weichen Streifen, ohne Salz.',
  leftover:'Revuelto-Bocadillo · 5 Min. – Kalte Reste mit Tomatenscheiben in ein Vollkornbrötchen füllen.',
  extras:['feta','kichererbsen'], tipp:'Außerhalb der Spargelzeit passen Zucchini oder Babyspinat.'
}
);
