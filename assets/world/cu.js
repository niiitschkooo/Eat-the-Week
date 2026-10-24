/* Grün geplant · Kuba · Top 15 */
RECIPES.push(
{
  id:'cu-ropa-vieja', name:'Ropa vieja · zerzupftes Rindfleisch in Paprika-Tomaten-Sauce mit Vollkornreis', cuisine:'Kuba', flag:'🇨🇺',
  protein:'fleisch', base:'reis', time:{a:20,c:105}, devices:[['topf','slowcooker']], method:'Topf oder Slowcooker',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Zwiebel','Tomaten','Oliven'], season:[7,8,9],
  ing:[
    {n:'Rinderschulter zum Schmoren',q:120,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Oliven, grün, entsteint',q:3,u:'Stk.',c:'vorrat'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch im Ganzen knapp mit Wasser bedeckt und zugedeckt 75 bis 90 Minuten weich köcheln, im Slowcooker 6 Stunden auf niedriger Stufe. Etwas abkühlen lassen und mit zwei Gabeln in feine Fasern zerzupfen.',
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen.',
    'Zwiebel und Paprika in Streifen schneiden, Knoblauch hacken und in Öl 6 Minuten dünsten. Kreuzkümmel und Oregano kurz mitrösten, passierte Tomaten und 100 ml Kochbrühe zugeben.',
    'Fleisch untermischen und 10 Minuten sämig köcheln.',
    'Kinderportion abnehmen. Erwachsene mit halbierten Oliven, Salz und Pfeffer abschmecken.'
  ],
  kidName:'Zartes Zupffleisch mit Reis',
  kid:'Fleisch besonders fein zerzupfen und mit Sauce und weichem Reis mischen. Ohne Oliven und Salz.',
  leftover:'Ropa-vieja-Tacos · 8 Min. – Fleischreste erhitzen und mit Salat in warme Maistortillas füllen.',
  tipp:'Ropa vieja heißt alte Kleidung, weil das zerzupfte Fleisch an Stofffetzen erinnert, am Vortag gekocht schmeckt es am besten.'
},
{
  id:'cu-picadillo', name:'Picadillo a la cubana · Rinderhack mit Paprika, Tomaten, Rosinen und Oliven, dazu Reis', cuisine:'Kuba', flag:'🇨🇺',
  protein:'fleisch', base:'reis', time:{a:8,c:16}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Tomaten','Zwiebel','Oliven'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, passiert',q:120,u:'ml',c:'vorrat'},
    {n:'Rosinen',q:1,u:'EL',c:'vorrat'},
    {n:'Oliven, grün, entsteint',q:3,u:'Stk.',c:'vorrat'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 15 Minuten garen.',
    'Zwiebel, Knoblauch und Paprika fein würfeln. Hack in Öl krümelig braten, Gemüse zugeben, 4 Minuten mitbraten und Kreuzkümmel kurz mitrösten.',
    'Passierte Tomaten und Rosinen zugeben und offen 8 Minuten köcheln, bis die Sauce dicklich ist.',
    'Kinderportion abnehmen. Erwachsene mit halbierten Oliven, Salz und Pfeffer abschmecken und mit Reis servieren.'
  ],
  kidName:'Mildes Hack mit Reis',
  kid:'Hack fein krümeln und mit Reis mischen, Rosinen klein schneiden und Oliven weglassen. Ohne Salz.',
  leftover:'Picadillo-Paprika · 25 Min. – Reste mit Reis in halbierte Paprika füllen und bei 200 °C im Ofen backen.',
  tipp:'Süße Rosinen und salzige Oliven sind typisch für Kuba, für Kinder reichen ein paar klein geschnittene Rosinen.'
},
{
  id:'cu-arroz-con-pollo', name:'Arroz con pollo · gelber Reistopf mit Hähnchen, Paprika und Erbsen', cuisine:'Kuba', flag:'🇨🇺',
  protein:'gefluegel', base:'reis', time:{a:15,c:35}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Paprika','Erbsen','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in mundgerechte Stücke schneiden und in Öl 4 Minuten rundum anbraten.',
    'Zwiebel, Knoblauch und Paprika würfeln und 4 Minuten mitdünsten. Reis und Kurkuma kurz unterrühren.',
    'Passierte Tomaten und Brühe zugeben und zugedeckt bei kleiner Hitze 30 Minuten garen, bis der Reis weich ist. Erbsen für die letzten 5 Minuten darauf verteilen.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und etwas Limettensaft abschmecken.'
  ],
  kidName:'Gelber Hähnchenreis',
  kid:'Hähnchen sehr fein zerzupfen, Erbsen leicht zerdrücken und alles mit dem weichen Reis mischen. Ohne Salz.',
  leftover:'Reis-Taler · 15 Min. – Reste mit einem Ei vermengen, zu Talern formen und in der Pfanne braten.',
  tipp:'Kurkuma ersetzt das in Kuba übliche Färbepulver Bijol und färbt den Reis kräftig gelb.'
},
{
  id:'cu-cerdo-mojo', name:'Cerdo asado con mojo · Schweinefilet mit Zitrus-Knoblauch-Mojo, Maniok und grünen Bohnen', cuisine:'Kuba', flag:'🇨🇺',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Maniok','Grüne Bohnen','Zwiebel','Limette'], season:[],
  ing:[
    {n:'Schweinefilet',q:120,u:'g',c:'fisch'},
    {n:'Maniok, TK',q:200,u:'g',c:'tk'},
    {n:'Grüne Bohnen, TK',q:100,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Orange',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Knoblauch fein reiben und mit Orangen- und Limettensaft, Kreuzkümmel, Oregano und der Hälfte des Öls zu Mojo verrühren. Das Filet mit einem Drittel davon einreiben. Ofen auf 200 °C vorheizen.',
    'Maniok in reichlich Wasser 20 bis 25 Minuten kochen, bis er ganz weich ist, und den holzigen Strang entfernen. Grüne Bohnen für die letzten 8 Minuten mitgaren.',
    'Filet in einer ofenfesten Pfanne im restlichen Öl rundum anbraten und im Ofen 12 bis 15 Minuten garen, bis es innen durchgegart ist, dann 5 Minuten ruhen lassen.',
    'Zwiebel in feine Ringe schneiden und mit dem restlichen Mojo 2 Minuten in der Pfanne erwärmen.',
    'Kinderportion abnehmen. Erwachsene Fleisch und Maniok mit Salz würzen und mit dem warmen Zwiebel-Mojo beträufeln.'
  ],
  kidName:'Zartes Filet mit Maniokbrei',
  kid:'Fleisch sehr dünn schneiden und klein zupfen, Maniok mit etwas Kochwasser zu Brei stampfen und Bohnen weich garen und klein schneiden. Ohne Mojo und Salz.',
  leftover:'Maniok-Pfanne · 10 Min. – Maniok- und Fleischreste würfeln und in der Pfanne mit etwas Öl knusprig braten.',
  tipp:'Maniok immer vollständig weich kochen, roh ist er ungenießbar. TK-Maniok ist bereits geschält und spart viel Arbeit.'
},
{
  id:'cu-ajiaco', name:'Ajiaco criollo · kubanischer Eintopf mit Hähnchen, Mais, Kürbis, Maniok und Kochbanane', cuisine:'Kuba', flag:'🇨🇺',
  protein:'gefluegel', base:'kartoffeln', time:{a:20,c:40}, devices:[['topf','slowcooker']], method:'Topf oder Slowcooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Mais','Kürbis','Maniok','Kochbanane','Kartoffeln','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Maiskolben',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Hokkaido-Kürbis',q:100,u:'g',c:'gemuese'},
    {n:'Maniok, TK',q:80,u:'g',c:'tk'},
    {n:'Kochbanane',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:80,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'}
  ],
  steps:[
    'Hähnchen mit Brühe, gewürfelter Zwiebel und Knoblauch aufkochen und zugedeckt 15 Minuten köcheln.',
    'Maniok in Stücke, Kochbanane geschält in Scheiben und Maiskolben in 3 cm dicke Räder schneiden, zugeben und 10 Minuten garen.',
    'Kürbis und Kartoffeln würfeln, zugeben und weitere 15 Minuten köcheln, bis alles sehr weich ist. Hähnchen herausnehmen, zerzupfen und zurückgeben, einige Kürbisstücke zerdrücken, damit der Eintopf bindet.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und Limettensaft abschmecken.'
  ],
  kidName:'Milder Wurzelgemüse-Topf',
  kid:'Hähnchen fein zupfen, Maiskörner vom Kolben schneiden und zerdrücken, Maniok und Kochbanane gründlich stampfen. Ohne Salz.',
  leftover:'Ajiaco-Rösti · 12 Min. – Reste abtropfen lassen, grob stampfen und in der Pfanne flach knusprig braten.',
  tipp:'Ajiaco gilt als Nationalgericht Kubas, je mehr verschiedene Wurzelgemüse hineinkommen, desto typischer.'
},
{
  id:'cu-pescado-mojo', name:'Pescado al mojo · Ofenfisch mit Zitrus-Knoblauch-Mojo, Süßkartoffel und Avocado-Tomaten-Salat', cuisine:'Kuba', flag:'🇨🇺',
  protein:'fisch', base:'kartoffeln', time:{a:12,c:25}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Süßkartoffel','Avocado','Tomaten','Rote Zwiebel','Limette'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Süßkartoffel',q:220,u:'g',c:'gemuese'},
    {n:'Avocado',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Orange',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Süßkartoffel in Spalten schneiden, mit der Hälfte des Öls mischen und 15 Minuten backen.',
    'Knoblauch fein reiben und mit Orangen- und Limettensaft, Kreuzkümmel und restlichem Öl zu Mojo verrühren.',
    'Fisch zu den Süßkartoffeln aufs Blech legen, nur die Erwachsenenstücke mit der Hälfte des Mojos beträufeln und alles 10 bis 12 Minuten backen, bis der Fisch sich leicht zerteilen lässt.',
    'Avocado und Tomate würfeln, Zwiebel in feine Ringe schneiden und mit etwas Limettensaft mischen.',
    'Kinderportion abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz und dem restlichen Mojo servieren.'
  ],
  kidName:'Fisch mit Süßkartoffelbrei',
  kid:'Fisch ohne Mojo backen, sorgfältig entgräten und zerpflücken. Süßkartoffel und Avocado zerdrücken, Tomate klein würfeln, ohne Salz.',
  leftover:'Fisch-Süßkartoffel-Bowl · 6 Min. – Reste mit Reis und Salat in einer Schüssel anrichten.',
  tipp:'Mojo aus Zitrussaft, Knoblauch und Kreuzkümmel ist die wichtigste Würzsauce Kubas und passt zu Fisch wie zu Fleisch.'
},
{
  id:'cu-pescado-congri', name:'Pescado empanizado con congrí · Fisch in Brotkruste aus dem Ofen mit Reis und roten Bohnen', cuisine:'Kuba', flag:'🇨🇺',
  protein:'fisch', base:'reis', time:{a:15,c:30}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['fisch','gluten','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Zwiebel','Gurke','Limette'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkorn-Paniermehl',q:15,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Ofen auf 220 °C vorheizen.',
    'Fisch in Stücke schneiden, durch verquirltes Ei ziehen und in Paniermehl wenden. Auf ein Blech mit Backpapier legen, mit der Hälfte des Öls beträufeln und 12 bis 15 Minuten backen, bis er goldbraun und durchgegart ist.',
    'Zwiebel und Paprika fein würfeln und im restlichen Öl 5 Minuten dünsten. Bohnen und Reis untermischen und 3 Minuten erhitzen. Gurke in Scheiben schneiden.',
    'Kinderportion abnehmen und den Fisch auf Gräten prüfen. Erwachsene den Congrí mit Salz und Kreuzkümmel würzen und mit Limette servieren.'
  ],
  kidName:'Knusperfisch mit Bohnenreis',
  kid:'Fisch zerpflücken und auf Gräten prüfen, Bohnen im Reis zerdrücken und Gurke in dünne Stifte schneiden. Ohne Salz.',
  leftover:'Congrí-Pfanne · 8 Min. – Bohnenreis mit einem Ei in der Pfanne durchbraten.',
  tipp:'Congrí stammt aus dem Osten Kubas, dort werden Reis und rote Bohnen zusammen gegart.'
},
{
  id:'cu-pescado-coco', name:'Pescado con leche de coco · Fisch in Kokos-Tomaten-Sauce nach Baracoa-Art mit Reis', cuisine:'Kuba', flag:'🇨🇺',
  protein:'fisch', base:'reis', time:{a:8,c:15}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Tomaten','Zwiebel','Babyspinat'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 15 Minuten garen.',
    'Zwiebel, Knoblauch, Paprika und Tomate klein würfeln und in Öl 5 Minuten dünsten.',
    'Kokosmilch zugießen, Fisch in Stücken einlegen und zugedeckt bei kleiner Hitze 7 bis 8 Minuten garen, bis er durchgegart ist. Spinat in der letzten Minute unterheben.',
    'Kinderportion abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz, Limettensaft und etwas Chili abschmecken.'
  ],
  kidName:'Kokosfisch mit Reis',
  kid:'Fisch gründlich auf Gräten prüfen und zerpflücken, Spinat fein hacken und alles mit Reis und Sauce mischen. Ohne Salz und Chili.',
  leftover:'Kokos-Reis-Pfanne · 8 Min. – Reis- und Saucenreste mit Erbsen in der Pfanne vollständig erhitzen.',
  tipp:'In Baracoa im Osten Kubas wachsen Kokospalmen, deshalb wird Fisch dort in Kokosmilch geschmort.'
},
{
  id:'cu-moros-cristianos', name:'Moros y cristianos · schwarze Bohnen mit Vollkornreis und Sofrito, dazu Ofen-Kochbanane', cuisine:'Kuba', flag:'🇨🇺',
  protein:'huelsen', base:'reis', time:{a:12,c:35}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Zwiebel','Kochbanane','Tomaten'], season:[],
  ing:[
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Kochbanane',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Paprika und Knoblauch fein würfeln und in der Hälfte des Öls 5 Minuten zu einem Sofrito dünsten. Kreuzkümmel kurz mitrösten.',
    'Reis, Bohnen und Brühe zugeben und zugedeckt bei kleiner Hitze 30 bis 35 Minuten garen, bis der Reis weich ist und die Flüssigkeit aufgesogen hat.',
    'Ofen auf 200 °C vorheizen. Reife Kochbanane schälen, schräg in Scheiben schneiden, mit restlichem Öl bepinseln und 20 Minuten backen, nach der Hälfte wenden. Tomate in Scheiben schneiden.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und einem Spritzer Essig abschmecken.'
  ],
  kidName:'Bohnenreis mit süßer Kochbanane',
  kid:'Bohnen im Reis gründlich zerdrücken, Kochbanane weich backen und in kleine Stücke schneiden. Ohne Salz.',
  leftover:'Moros-Bratlinge · 15 Min. – Reste mit einem Ei vermengen, zu flachen Talern formen und in der Pfanne braten.',
  tipp:'Für die Ofen-Kochbanane sollte die Schale schon fast schwarz sein, dann ist das Fruchtfleisch süß und weich.'
},
{
  id:'cu-potaje-garbanzos', name:'Potaje de garbanzos · Kichererbsen-Eintopf mit Kürbis, Kartoffeln und Paprika', cuisine:'Kuba', flag:'🇨🇺',
  protein:'huelsen', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kürbis','Kartoffeln','Rote Paprika','Tomaten','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Paprika würfeln und in Öl 5 Minuten dünsten, Paprikapulver kurz mitrösten.',
    'Kartoffeln und Kürbis in 2 cm große Würfel schneiden, mit passierten Tomaten und Brühe zugeben und zugedeckt 15 Minuten köcheln.',
    'Kichererbsen zugeben und 5 Minuten mitgaren. Einige Kartoffel- und Kürbisstücke zerdrücken, damit der Eintopf sämig wird.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und Kreuzkümmel abschmecken.'
  ],
  kidName:'Kichererbsen-Kürbis-Brei',
  kid:'Kichererbsen, Kartoffeln und Kürbis gründlich zerdrücken und lauwarm anbieten. Ohne Salz.',
  leftover:'Kichererbsen-Bowl · 6 Min. – Eingedickte Reste erhitzen und mit Reis und Avocado anrichten.',
  tipp:'In Kuba kommt oft Chorizo hinein, Paprikapulver bringt ein ähnliches Aroma ohne Wurst.'
},
{
  id:'cu-potaje-lentejas', name:'Potaje de lentejas · Linseneintopf mit Süßkartoffel, Karotten und Sofrito, dazu Vollkornreis', cuisine:'Kuba', flag:'🇨🇺',
  protein:'huelsen', base:'reis', time:{a:12,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Süßkartoffel','Karotten','Rote Paprika','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Süßkartoffel',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen.',
    'Zwiebel, Paprika und Knoblauch fein würfeln und in Öl 5 Minuten zu einem Sofrito dünsten.',
    'Linsen abspülen und mit Brühe und passierten Tomaten zugeben. Süßkartoffel und Karotte würfeln, ebenfalls zugeben und zugedeckt 25 Minuten köcheln, bis die Linsen weich sind.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und einem Spritzer Essig abschmecken und mit Reis servieren.'
  ],
  kidName:'Linsen-Süßkartoffel-Brei',
  kid:'Linsen und Gemüse gründlich zerdrücken und mit weichem Reis mischen. Ohne Salz und lauwarm servieren.',
  leftover:'Linsen-Reis-Pfanne · 10 Min. – Eingedickte Reste mit dem Reis in der Pfanne erhitzen und ein Spiegelei dazu braten.',
  tipp:'Einen Teil des Eintopfs mit dem Stabmixer pürieren, dann wird er besonders sämig.'
},
{
  id:'cu-tortilla-platano', name:'Tortilla de plátano · Omelett mit reifer Kochbanane und Paprika, dazu Tomatensalat und Vollkornbrot', cuisine:'Kuba', flag:'🇨🇺',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kochbanane','Rote Paprika','Zwiebel','Tomaten','Gurke'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kochbanane',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reife Kochbanane schälen und in dünne Scheiben schneiden. In der Hälfte des Öls bei mittlerer Hitze 6 Minuten goldbraun und weich braten.',
    'Zwiebel und Paprika fein würfeln, zugeben und 3 Minuten mitbraten. Restliches Öl zugeben, verquirlte Eier darübergießen und zugedeckt bei kleiner Hitze 5 Minuten stocken lassen.',
    'Tortilla mithilfe eines Tellers wenden und 1 bis 2 Minuten fertig garen, bis das Ei ganz fest ist. Tomate und Gurke in Scheiben schneiden.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Tomatensalat und Brot servieren.'
  ],
  kidName:'Kochbananen-Omelett-Streifen',
  kid:'Omelett vollständig durchgaren und in Streifen schneiden, Kochbanane dabei leicht zerdrücken und Tomate klein würfeln. Ohne Salz.',
  leftover:'Omelett-Brot · 3 Min. – Kalte Tortilla-Stücke mit Gurke auf Vollkornbrot legen.',
  tipp:'Reife Kochbananen mit fast schwarzer Schale sind süß und weich, grüne bleiben beim Braten fest und mehlig.'
},
{
  id:'cu-huevos-habanera', name:'Huevos a la habanera · Eier im Sofrito aus dem Ofen mit Erbsen, Spargel und Vollkornbrot', cuisine:'Kuba', flag:'🇨🇺',
  protein:'ei', base:null, time:{a:6,c:18}, devices:[['pfanne'],['ofen']], method:'Ofenfeste Pfanne + Backofen',
  allergens:['ei','gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Erbsen','Spargel'], season:[],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Erbsen, TK',q:40,u:'g',c:'tk'},
    {n:'Grüner Spargel',q:60,u:'g',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Zwiebel, Knoblauch und Paprika fein würfeln und in einer ofenfesten Pfanne in Öl 5 Minuten dünsten.',
    'Tomaten zugeben und 4 Minuten einkochen. Spargel in 3 cm lange Stücke schneiden und mit den Erbsen unterrühren.',
    'Pro Portion zwei Mulden formen, Eier hineinschlagen, mit Käse bestreuen und im Ofen 8 bis 10 Minuten backen, bis Eiweiß und Eigelb fest sind.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit geröstetem Vollkornbrot servieren.'
  ],
  kidName:'Ei im Tomatenbett',
  kid:'Ei vollständig durchbacken und klein schneiden, Erbsen zerdrücken und Spargel sehr weich in kleinen Stücken anbieten. Ohne Salz.',
  leftover:'Sofrito-Nudeln · 10 Min. – Restliche Tomatensauce mit Gemüse erhitzen und über Vollkornnudeln geben.',
  tipp:'Erbsen und Spargel gehören zum Original aus Havanna, Spargel aus dem Glas funktioniert ebenfalls.'
},
{
  id:'cu-arroz-cubana', name:'Arroz a la cubana · Reis mit Tomaten-Spinat-Sauce, Spiegelei und gebratener Kochbanane', cuisine:'Kuba', flag:'🇨🇺',
  protein:'ei', base:'reis', time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Tomaten','Kochbanane','Babyspinat','Zwiebel'], season:[],
  ing:[
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kochbanane',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 15 Minuten garen.',
    'Zwiebel und Knoblauch fein würfeln und in einem kleinen Topf in der Hälfte des Öls 3 Minuten dünsten. Passierte Tomaten und Oregano zugeben, 8 Minuten köcheln und den Spinat unterrühren.',
    'Reife Kochbanane schräg in Scheiben schneiden, im restlichen Öl in der Pfanne je Seite 3 Minuten braten und herausnehmen. Eier in derselben Pfanne zugedeckt 4 bis 5 Minuten braten, bis Eiweiß und Eigelb fest sind.',
    'Kinderportion abnehmen. Erwachsene die Tomatensauce mit Salz und Pfeffer abschmecken und alles auf dem Reis anrichten.'
  ],
  kidName:'Reis mit Ei und Kochbanane',
  kid:'Ei vollständig durchbraten und klein schneiden, Kochbanane zerdrücken und den Reis mit milder Tomatensauce mischen. Ohne Salz.',
  leftover:'Tomaten-Reis-Pfanne · 8 Min. – Reis und Sauce mit Erbsen in der Pfanne vollständig erhitzen.',
  tipp:'Mit Reis vom Vortag steht das Gericht in 12 Minuten auf dem Tisch.'
},
{
  id:'cu-tamal-cazuela', name:'Tamal en cazuela · cremige Maispolenta mit Sofrito, Kürbis und Käse', cuisine:'Kuba', flag:'🇨🇺',
  protein:'milch', base:'polenta', time:{a:12,c:20}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kürbis','Rote Paprika','Tomaten','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten, passiert',q:60,u:'ml',c:'vorrat'},
    {n:'Mozzarella',q:40,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Paprika fein würfeln, Kürbis in kleine Würfel schneiden. Alles im Topf in Öl 6 Minuten dünsten und die passierten Tomaten zugeben.',
    'Brühe und Milch zugießen und aufkochen. Polenta unter ständigem Rühren einrieseln lassen.',
    'Bei kleiner Hitze 10 bis 12 Minuten unter häufigem Rühren garen, bis die Masse cremig und der Kürbis weich ist. Mozzarella in Stücken unterziehen.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und etwas Chili abschmecken.'
  ],
  kidName:'Mais-Kürbis-Brei',
  kid:'Brei etwas abkühlen lassen und die Kürbisstücke zerdrücken. Ohne Salz und Chili, dazu passen weich gegarte Erbsen.',
  leftover:'Polenta-Schnitten · 12 Min. – Kalte, fest gewordene Reste in Scheiben schneiden und in der Pfanne von beiden Seiten braten.',
  tipp:'Im Original kommt Schweinefleisch hinein, mit Kürbis und Käse wird der Maistopf vegetarisch und kindgerecht.'
}
);
