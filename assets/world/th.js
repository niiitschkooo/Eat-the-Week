/* Grün geplant · Thailand · Top 15 */
RECIPES.push(
{
  id:'th-pad-thai', name:'Pad Thai · gebratene Reisnudeln mit Tofu, Ei, Sprossen und Erdnüssen', cuisine:'Thailand', flag:'🇹🇭',
  protein:'tofu', base:'nudeln', time:{a:15,c:8}, devices:[['pfanne']], method:'Pfanne',
  allergens:['soja','ei','nuesse'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Reisnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Tofu, natur',q:100,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Mungbohnensprossen',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:2,u:'Stk.',c:'gemuese'},
    {n:'Erdnüsse, geröstet, ungesalzen',q:1,u:'EL',c:'vorrat'},
    {n:'Tamarindenpaste',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reisnudeln 8 Minuten in heißem Wasser einweichen, bis sie biegsam sind, und abtropfen lassen. Tamarindenpaste mit 3 EL Wasser verrühren.',
    'Tofu würfeln und in Öl 5 Minuten goldbraun braten. Karotte in feinen Streifen und das Weiße der Frühlingszwiebeln 2 Minuten mitbraten.',
    'Alles an den Rand schieben, das Ei in die Mitte geben und unter Rühren vollständig stocken lassen. Nudeln, Tamarindenwasser und Sprossen zugeben und 3 Minuten schwenken.',
    'Kinderportion ohne Sojasauce und Nüsse abnehmen. Erwachsene mit Sojasauce, gehackten Erdnüssen, Frühlingszwiebelgrün und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Mini-Pad-Thai',
  kid:'Nudeln kurz schneiden, Ei und Tofu klein zerteilen und die Sprossen weglassen oder sehr weich mitgaren. Keine ganzen Erdnüsse, höchstens fein gemahlen.',
  leftover:'Pad-Thai-Omelett · 8 Min. – Reste mit verquirltem Ei in der Pfanne vollständig stocken lassen.',
  tipp:'Alle Zutaten vor dem Braten bereitstellen, danach geht es in der Pfanne sehr schnell.'
},
{
  id:'th-gaeng-khiao-wan', name:'Gaeng Khiao Wan Gai · mildes grünes Curry mit Hähnchen, Bohnen und Zucchini', cuisine:'Thailand', flag:'🇹🇭',
  protein:'gefluegel', base:'reis', time:{a:15,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zucchini','Grüne Bohnen','Aubergine','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Grüne Bohnen',q:80,u:'g',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Aubergine',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Thai-Basilikum',q:1,u:'EL',c:'gemuese'},
    {n:'Kaffirlimettenblätter',q:2,u:'Stk.',c:'gewuerz',p:true},
    {n:'Grüne Currypaste',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Fischsauce',q:0.5,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen. Hähnchen in dünne Streifen, Zucchini und Aubergine in Würfel und Bohnen in 3 cm lange Stücke schneiden.',
    'Den dicken Teil der Kokosmilch im Topf 2 Minuten erhitzen und das Hähnchen darin 4 Minuten anbraten.',
    'Restliche Kokosmilch, 150 ml Wasser, Kaffirlimettenblätter, Bohnen und Aubergine zugeben und 8 Minuten köcheln. Zucchini die letzten 4 Minuten mitgaren.',
    'Kaffirlimettenblätter entfernen und die Kinderportion ohne Currypaste abnehmen. Für die Erwachsenen Currypaste und Fischsauce einrühren, 1 Minute köcheln und mit Thai-Basilikum bestreuen.'
  ],
  kidName:'Mildes Kokos-Hähnchen',
  kid:'Hähnchen klein schneiden, Bohnen und Aubergine sehr weich garen und mit Reis und Kokossoße mischen. Ohne Currypaste und Fischsauce.',
  leftover:'Curry-Nudeln · 8 Min. – Reste vollständig erhitzen und mit gegarten Reisnudeln mischen.',
  tipp:'Grüne Currypaste ist je nach Marke sehr scharf, deshalb mit wenig beginnen.'
},
{
  id:'th-massaman', name:'Gaeng Massaman · mildes Massaman-Curry mit Rind, Kartoffeln und Erdnüssen', cuisine:'Thailand', flag:'🇹🇭',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:75}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slowcooker',
  allergens:['nuesse'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Zwiebel'], season:[10,11],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Erdnüsse, geröstet, ungesalzen',q:1,u:'EL',c:'vorrat'},
    {n:'Massaman-Currypaste',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Tamarindenpaste',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch trocken tupfen und im Topf in Öl rundum anbraten. Zwiebelspalten und Zimt 2 Minuten mitbraten.',
    'Kokosmilch, Tamarindenpaste und 300 ml Wasser zugeben und zugedeckt 50 Minuten leise schmoren (Slowcooker 6 Stunden auf niedriger Stufe).',
    'Kartoffeln und Karotte in große Würfel schneiden, zugeben und weitere 20 Minuten garen, bis alles weich ist.',
    'Kinderportion abnehmen. In den Rest die Currypaste einrühren, 5 Minuten köcheln und mit gehackten Erdnüssen bestreuen.'
  ],
  kidName:'Milder Rinder-Kartoffel-Topf',
  kid:'Fleisch fein zerzupfen, Kartoffeln und Karotten mit der Soße zerdrücken. Ohne Currypaste und ohne ganze Erdnüsse.',
  leftover:'Massaman-Reisschale · 8 Min. – Reste vollständig erhitzen und über Reis vom Vortag geben.',
  tipp:'Das Curry lässt sich gut am Vortag schmoren und wird dabei noch zarter.'
},
{
  id:'th-tom-kha-gai', name:'Tom Kha Gai · Kokos-Hähnchen-Suppe mit Pilzen, Tomaten und Jasminreis', cuisine:'Thailand', flag:'🇹🇭',
  protein:'gefluegel', base:'reis', time:{a:12,c:18}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Pilze','Kirschtomaten','Limette'], season:[9,10],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Jasminreis',q:70,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Champignons',q:100,u:'g',c:'gemuese'},
    {n:'Kirschtomaten',q:60,u:'g',c:'gemuese'},
    {n:'Zitronengras',q:1,u:'Stange',c:'gemuese'},
    {n:'Galgant oder Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Fischsauce',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen. Zitronengras in Stücke schneiden und andrücken, Galgant in Scheiben schneiden.',
    'Brühe und Kokosmilch mit Zitronengras und Galgant aufkochen und 5 Minuten ziehen lassen.',
    'Hähnchen in dünnen Streifen und Pilze in Scheiben zugeben und 8 Minuten leise köcheln, bis das Fleisch durch ist. Halbierte Kirschtomaten 1 Minute mitwärmen.',
    'Zitronengras und Galgant entfernen und die Kinderschale ohne Fischsauce abnehmen. Erwachsene mit Fischsauce, Limettensaft und nach Wunsch Chili würzen und mit Reis essen.'
  ],
  kidName:'Milde Kokos-Hähnchen-Suppe',
  kid:'Hähnchen und Pilze klein schneiden, Kirschtomaten vierteln und mit Reis und wenig Suppe zu einem dicken Brei mischen. Ohne Fischsauce und Limette.',
  leftover:'Kokos-Reispfanne · 8 Min. – Reste mit dem Reis einkochen lassen, bis eine sämige Reispfanne entsteht.',
  tipp:'Galgant gibt es frisch oder tiefgekühlt im Asialaden, Ingwer schmeckt etwas schärfer, passt aber auch.'
},
{
  id:'th-pad-kra-pao', name:'Pad Kra Pao Moo · Schweinehack mit Thai-Basilikum, Bohnen und Spiegelei', cuisine:'Thailand', flag:'🇹🇭',
  protein:'fleisch', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei','soja','fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Grüne Bohnen','Rote Paprika','Kräuter'], season:[7,8],
  ing:[
    {n:'Schweinehack, mager',q:100,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Grüne Bohnen',q:100,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Thai-Basilikum',q:2,u:'EL',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Fischsauce',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen. Bohnen in 1 cm lange Stücke und Paprika in Würfel schneiden.',
    'Hack in Öl krümelig braten, bis es durchgegart ist. Knoblauch, Bohnen und Paprika mit 3 EL Wasser zugeben und 5 Minuten braten.',
    'Hack an den Rand schieben und die Eier als Spiegeleier von beiden Seiten braten, bis das Eigelb fest ist.',
    'Kinderportion abnehmen. Erwachsene mit Sojasauce, Fischsauce, Thai-Basilikum und nach Wunsch frischer Chili würzen.'
  ],
  kidName:'Mildes Basilikum-Hack mit Reis',
  kid:'Bohnen sehr weich garen und klein schneiden, Hack mit Reis mischen. Ei fest gebraten in Streifen dazu, ohne Saucen und Chili.',
  leftover:'Hack-Reis-Pfanne · 8 Min. – Reste mit dem Reis und etwas Gemüse in der Pfanne vollständig durchbraten.',
  tipp:'Thai-Basilikum schmeckt leicht nach Anis, ersatzweise normales Basilikum nehmen.'
},
{
  id:'th-gai-pad-med-mamuang', name:'Gai Pad Med Mamuang · Cashew-Hähnchen mit Paprika und Zuckerschoten', cuisine:'Thailand', flag:'🇹🇭',
  protein:'gefluegel', base:'reis', time:{a:12,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['nuesse','soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Zuckerschoten','Zwiebel','Frühlingszwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Cashewkerne',q:15,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zuckerschoten',q:60,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen. Cashewkerne in der trockenen Pfanne 3 Minuten goldbraun rösten und beiseitestellen.',
    'Hähnchen in mundgerechte Stücke schneiden und in Öl 5 Minuten braten, bis es durchgegart ist.',
    'Zwiebel und Paprika in Stücken, Zuckerschoten und Knoblauch zugeben und 4 Minuten mitbraten. Frühlingszwiebel in Stücken 1 Minute mitschwenken.',
    'Kinderportion ohne Sojasauce und Nüsse abnehmen. Erwachsene mit Sojasauce würzen und die Cashewkerne darüberstreuen.'
  ],
  kidName:'Mildes Hähnchen mit Paprika',
  kid:'Hähnchen klein schneiden, Paprika und Zuckerschoten weich braten und in kleine Stücke teilen. Cashews nur fein gemahlen darüberstreuen, nie ganz.',
  leftover:'Hähnchen-Wrap · 5 Min. – Reste vollständig erhitzen und mit Salat in eine weiche Tortilla rollen.',
  tipp:'Die Cashews erst am Tisch darüberstreuen, dann bleiben sie knusprig.'
},
{
  id:'th-pad-see-ew', name:'Pad See Ew · breite Reisnudeln mit Rind, Brokkoli und Ei', cuisine:'Thailand', flag:'🇹🇭',
  protein:'fleisch', base:'nudeln', time:{a:12,c:10}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei','soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Brokkoli','Karotten'], season:[6,7,8,9,10],
  ing:[
    {n:'Breite Reisnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Rindfleisch, dünne Streifen',q:100,u:'g',c:'fisch'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Brokkoli',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reisnudeln nach Packung garen oder einweichen und abtropfen lassen. Brokkoli in kleine Röschen teilen, den Strunk in dünne Scheiben schneiden.',
    'Rindfleisch in Öl 2 Minuten scharf anbraten und herausnehmen. Brokkoli, Karottenscheiben und Knoblauch mit 3 EL Wasser zugedeckt 4 Minuten garen.',
    'Ei in die Pfanne geben und unter Rühren vollständig stocken lassen. Nudeln und Fleisch zugeben und 2 Minuten schwenken, bis die Nudeln leicht Farbe nehmen.',
    'Kinderportion ungewürzt abnehmen. Erwachsene mit Sojasauce und nach Wunsch Chiliflocken würzen.'
  ],
  kidName:'Weiche Nudeln mit Rind und Brokkoli',
  kid:'Rindfleisch für das Kind vollständig durchbraten und sehr klein schneiden, Nudeln kurz schneiden und Brokkoli weich garen. Ohne Sojasauce servieren.',
  leftover:'Nudel-Gemüse-Suppe · 10 Min. – Reste in heißer salzarmer Brühe vollständig erhitzen.',
  tipp:'Breite Reisnudeln kleben weniger, wenn sie nach dem Garen mit wenig Öl vermischt werden.'
},
{
  id:'th-tom-yam-pla', name:'Tom Yam Pla · säuerliche Zitronengras-Suppe mit Fisch, Pilzen und Reisnudeln', cuisine:'Thailand', flag:'🇹🇭',
  protein:'fisch', base:'nudeln', time:{a:12,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Pilze','Kirschtomaten','Pak Choi','Limette'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Reisnudeln',q:70,u:'g',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Pak Choi',q:60,u:'g',c:'gemuese'},
    {n:'Zitronengras',q:1,u:'Stange',c:'gemuese'},
    {n:'Galgant oder Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Fischsauce',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Brühe mit angedrücktem Zitronengras und Galgantscheiben aufkochen und 5 Minuten ziehen lassen.',
    'Pilze in Scheiben und Reisnudeln zugeben und 3 Minuten köcheln. Fisch in Stücken, halbierte Kirschtomaten und Pak Choi in Streifen zugeben und bei kleiner Hitze 5 Minuten gar ziehen lassen.',
    'Zitronengras und Galgant herausnehmen.',
    'Kinderschale ohne Fischsauce und Limette abnehmen. Erwachsene mit Fischsauce, Limettensaft und nach Wunsch Chilipaste würzen.'
  ],
  kidName:'Milde Fisch-Nudelsuppe',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Nudeln kurz schneiden und Kirschtomaten vierteln. Mit wenig lauwarmer Brühe anbieten.',
  leftover:'Fisch-Nudel-Pfanne · 8 Min. – Nudeln, Fisch und Gemüse abtropfen und in der Pfanne vollständig erhitzen.',
  tipp:'Die Schärfe kommt in Thailand aus Chilipaste, die hier erst in die Erwachsenenschale kommt.'
},
{
  id:'th-pla-nueng-manao', name:'Pla Nueng Manao · Limetten-Knoblauch-Fisch aus dem Ofen mit Pak Choi und Vollkornreis', cuisine:'Thailand', flag:'🇹🇭',
  protein:'fisch', base:'reis', time:{a:10,c:30}, devices:[['ofen'],['topf']], method:'Ofen + Topf',
  allergens:['fisch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Pak Choi','Limette','Kräuter'], season:[],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Pak Choi',q:150,u:'g',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:50,u:'ml',c:'vorrat'},
    {n:'Fischsauce',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser etwa 30 Minuten garen. Ofen auf 200 °C vorheizen.',
    'Pak Choi längs halbieren und in eine Auflaufform legen, den Fisch darauflegen, mit Brühe und Öl beträufeln und mit Alufolie abgedeckt 15 bis 18 Minuten garen, bis er gerade durch ist.',
    'Für die Soße Limettensaft mit fein gehacktem Knoblauch und Koriander verrühren.',
    'Kinderportion ohne Soße abnehmen. Erwachsene mischen Fischsauce und nach Wunsch Chili in die Soße und beträufeln damit ihren Fisch.'
  ],
  kidName:'Zarter Ofenfisch mit Reis',
  kid:'Fisch sorgfältig entgräten und zerpflücken, Pak Choi weich gegart klein schneiden und mit Reis und etwas Garsud mischen.',
  leftover:'Fisch-Reis-Pfanne · 8 Min. – Reste mit dem Reis und einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'In Thailand wird ein ganzer Fisch gedämpft, unter Folie im Ofen bleibt Filet genauso saftig.'
},
{
  id:'th-tod-mun-pla', name:'Tod Mun Pla · Fischküchlein aus dem Ofen mit Gurkensalat und Vollkornreis', cuisine:'Thailand', flag:'🇹🇭',
  protein:'fisch', base:'reis', time:{a:20,c:30}, devices:[['ofen','airfryer'],['topf']], method:'Ofen oder Airfryer + Topf',
  allergens:['fisch','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Grüne Bohnen','Gurke','Rote Zwiebel'], season:[7,8],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kaffirlimettenblätter',q:1,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rote Currypaste',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Reisessig',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser etwa 30 Minuten garen. Ofen auf 220 °C vorheizen (Airfryer 200 °C).',
    'Fisch mit dem Ei im Zerkleinerer oder mit dem Messer fein hacken. Bohnen in dünne Ringe schneiden und untermischen.',
    'Ein Viertel der Masse für das Kind abnehmen, in den Rest Currypaste und fein geschnittene Kaffirlimettenblätter rühren. Kleine flache Küchlein formen, mit Öl bepinseln und 12 bis 15 Minuten backen, bis sie durchgegart sind.',
    'Gurke in dünne Scheiben und Zwiebel in feine Ringe schneiden und mit Reisessig und 1 EL Wasser mischen.',
    'Kinderportion mit milden Küchlein, Reis und geschälter Gurke anrichten. Erwachsene essen die würzigen Küchlein mit Gurkensalat und nach Wunsch Chilisauce.'
  ],
  kidName:'Milde Fischküchlein',
  kid:'Kinderküchlein ohne Currypaste formen, vollständig durchgaren und in Streifen schneiden. Gurke geschält in dünnen Scheiben dazu.',
  leftover:'Fischküchlein-Bowl · 8 Min. – Küchlein im Ofen vollständig erhitzen und mit Reis und Gurke als Bowl anrichten.',
  tipp:'Mit feuchten Händen lassen sich die Küchlein leicht formen.'
},
{
  id:'th-khao-pad-sapparot', name:'Khao Pad Sapparot · gebratener Vollkornreis mit Ananas, Ei und Cashews', cuisine:'Thailand', flag:'🇹🇭',
  protein:'ei', base:'reis', time:{a:12,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','nuesse','soja'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Ananas','Erbsen','Rote Paprika','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Ananas',q:80,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Cashewkerne',q:10,u:'g',c:'vorrat'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser etwa 30 Minuten garen und ausdampfen lassen (oder Reis vom Vortag verwenden).',
    'Paprika würfeln und in Öl 3 Minuten braten, Erbsen und Ananaswürfel 2 Minuten mitbraten.',
    'Gemüse an den Rand schieben, die Eier in die Mitte geben und unter Rühren vollständig stocken lassen. Reis und Currypulver zugeben und 3 Minuten durchbraten.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Sojasauce, Frühlingszwiebelringen und gerösteten Cashewkernen würzen.'
  ],
  kidName:'Ananas-Eier-Reis',
  kid:'Ei vollständig durchgaren und klein zerteilen, Ananas und Paprika klein schneiden und Erbsen leicht andrücken. Ohne Sojasauce und ohne ganze Nüsse.',
  leftover:'Gefüllte Paprika · 25 Min. – Reste in halbierte Paprika füllen und im Ofen bei 200 °C vollständig erhitzen.',
  tipp:'Frische Ananas bringt mehr Aroma als Dosenware und kommt ohne Zuckersirup aus.'
},
{
  id:'th-kai-jeow', name:'Kai Jeow · lockeres Thai-Omelett mit Tomaten, Jasminreis und Gurke', cuisine:'Thailand', flag:'🇹🇭',
  protein:'ei', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei','soja'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kirschtomaten','Gurke','Frühlingszwiebel','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen. Kirschtomaten vierteln, Frühlingszwiebel in Ringe und Gurke in Scheiben schneiden.',
    'Eier mit 1 EL Wasser kräftig schaumig schlagen und Tomaten und Frühlingszwiebel unterrühren.',
    'Öl in der Pfanne erhitzen, die Eimasse hineingießen und bei mittlerer Hitze 3 Minuten stocken lassen. Wenden und weitere 2 Minuten braten, bis das Omelett vollständig gar ist.',
    'Kinderportion ohne Sojasauce abnehmen. Erwachsene beträufeln ihr Omelett mit Sojasauce, streuen Koriander darüber und essen es mit Reis, Gurke und nach Wunsch Chilisauce.'
  ],
  kidName:'Fluffiges Omelett mit Reis',
  kid:'Omelett vollständig durchgaren und in Streifen schneiden, Gurke schälen und in dünne Scheiben schneiden. Ohne Sojasauce mit Reis anbieten.',
  leftover:'Omelett-Reis-Pfanne · 8 Min. – Reis und Omelettstreifen mit Gemüse in der Pfanne vollständig durchbraten.',
  tipp:'In Thailand wird das Omelett in viel Öl ausgebacken, bei mittlerer Hitze reicht hier 1 EL.'
},
{
  id:'th-khai-palo', name:'Khai Palo · Schmor-Eier mit Sternanis, Tofu, Pilzen und Vollkornreis', cuisine:'Thailand', flag:'🇹🇭',
  protein:'ei', base:'reis', time:{a:15,c:35}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei','soja'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Pilze','Pak Choi','Kräuter'], season:[9,10],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tofu, natur',q:80,u:'g',c:'kuehl'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Champignons oder Shiitake',q:80,u:'g',c:'gemuese'},
    {n:'Pak Choi',q:120,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Sternanis',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser etwa 30 Minuten garen. Eier 9 Minuten hart kochen, abschrecken und pellen.',
    'Angedrückten Knoblauch mit Sternanis und Zimt in 400 ml Wasser aufkochen. Eier, Tofuwürfel und Pilze zugeben und zugedeckt 20 Minuten leise köcheln.',
    'Pak Choi in Stücken die letzten 4 Minuten mitgaren und den Sternanis herausnehmen.',
    'Kinderportion abnehmen, bevor die Sojasauce dazukommt. In den Rest die Sojasauce rühren, 5 Minuten ziehen lassen und mit Koriander bestreuen.'
  ],
  kidName:'Milde Schmor-Eier mit Reis',
  kid:'Hart gekochte Eier in kleine Stücke schneiden, Tofu und Pilze klein schneiden und mit Reis und etwas Sud mischen.',
  leftover:'Eier-Reis-Pfanne · 8 Min. – Eier, Tofu und Reis klein schneiden und in der Pfanne vollständig durchbraten.',
  tipp:'Je länger die Eier im Sud ziehen, desto dunkler und aromatischer werden sie.'
},
{
  id:'th-gaeng-phed-fak-thong', name:'Gaeng Phed Fak Thong · rotes Kürbis-Curry mit Tofu und Vollkornreis', cuisine:'Thailand', flag:'🇹🇭',
  protein:'tofu', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kürbis','Babyspinat','Kräuter'], season:[9,10,11],
  ing:[
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:150,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Thai-Basilikum',q:1,u:'EL',c:'gemuese'},
    {n:'Kaffirlimettenblätter',q:2,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rote Currypaste',q:1,u:'TL',c:'vorrat',p:true,hint:'vegetarische Sorte ohne Garnelenpaste wählen'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser etwa 30 Minuten garen. Kürbis entkernen und mit Schale in 2 cm große Würfel schneiden, Tofu würfeln.',
    'Kokosmilch mit 150 ml Wasser und den Kaffirlimettenblättern aufkochen. Kürbis zugeben und 12 Minuten köcheln, bis er weich ist.',
    'Tofu und Spinat zugeben und 3 Minuten mitziehen lassen, dann die Kaffirlimettenblätter entfernen.',
    'Kinderportion ohne Currypaste abnehmen. In den Rest Currypaste und Sojasauce einrühren, 2 Minuten köcheln und mit Thai-Basilikum bestreuen.'
  ],
  kidName:'Mildes Kokos-Kürbis-Curry',
  kid:'Kürbis mit der Gabel zerdrücken, Tofu zerbröseln und mit Reis und Kokossoße mischen. Ohne Currypaste und Sojasauce.',
  leftover:'Kürbis-Curry-Suppe · 8 Min. – Reste mit etwas Brühe aufkochen und fein pürieren.',
  tipp:'Hokkaido muss nicht geschält werden, die Schale wird beim Kochen weich.'
},
{
  id:'th-khao-soi', name:'Khao Soi · nordthailändische Kokos-Curry-Nudelsuppe mit Tofu und Pak Choi', cuisine:'Thailand', flag:'🇹🇭',
  protein:'tofu', base:'nudeln', time:{a:15,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','ei','soja'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Pak Choi','Rote Zwiebel','Limette'], season:[],
  ing:[
    {n:'Mie-Nudeln',q:80,u:'g',c:'vorrat'},
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Kokosmilch',q:120,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Pak Choi',q:150,u:'g',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Mildes Currypulver',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Currypulver und Kurkuma in 2 EL Kokosmilch im Topf 1 Minute anrösten, dann restliche Kokosmilch und Brühe zugeben und aufkochen.',
    'Tofu würfeln und 5 Minuten in der Suppe ziehen lassen. Pak Choi in Streifen die letzten 3 Minuten mitgaren.',
    'Mie-Nudeln nach Packung garen. Eine kleine Handvoll gegarte Nudeln in der trockenen Pfanne 4 Minuten knusprig rösten.',
    'Nudeln auf Schalen verteilen und mit der Currysuppe übergießen.',
    'Kinderschale ohne Sojasauce abnehmen. Erwachsene mit Sojasauce, Limettensaft, roten Zwiebelstreifen, den knusprigen Nudeln und nach Wunsch Chiliöl würzen.'
  ],
  kidName:'Milde Kokos-Nudelsuppe',
  kid:'Nudeln kurz schneiden, Tofu und Pak Choi klein schneiden und mit wenig lauwarmer Suppe anbieten. Knusprige Nudeln und Zwiebeln weglassen.',
  leftover:'Curry-Nudelpfanne · 8 Min. – Nudeln, Tofu und Gemüse abtropfen und mit etwas Suppe in der Pfanne einkochen.',
  tipp:'Klassisch kommt Hähnchenkeule hinein, mit Tofu bleibt das Gericht vegetarisch und geht schneller.'
}
);
