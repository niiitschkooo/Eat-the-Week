/* Grün geplant · Finnland · Top 15 */
RECIPES.push(
{
  id:'fi-lohikeitto', name:'Lohikeitto · finnische Lachssuppe mit Kartoffeln, Lauch und Dill', cuisine:'Finnland', flag:'🇫🇮',
  protein:'fisch', base:'kartoffeln', time:{a:12,c:20}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch','milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Lauch'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Lachsfilet',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Pimentkörner',q:2,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln und Karotten würfeln, Lauch in Ringe schneiden und mit Brühe und Pimentkörnern im Teesieb 12 Minuten weich köcheln.',
    'Milch zugießen. Lachs würfeln, auf Gräten prüfen und in die nicht mehr kochende Suppe geben.',
    'Bei kleiner Hitze 5 bis 6 Minuten gar ziehen lassen, bis der Lachs vollständig durchgegart ist, dann das Teesieb herausnehmen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und reichlich Dill abschmecken und mit Roggenvollkornbrot servieren.'
  ],
  kidName:'Lachs-Kartoffel-Topf',
  kid:'Lachs und Gemüse herausnehmen, nochmals auf Gräten prüfen und mit wenig Suppe zu einem dicken Mus zerdrücken. Pimentkörner sicher entfernen, ohne Salz.',
  leftover:'Lachs-Kartoffel-Auflauf · 20 Min. – Lachs und Gemüse mit wenig Suppe in eine Form geben, mit Käse bestreuen und im Ofen überbacken.',
  tipp:'Pimentkörner in ein Teesieb geben, dann lassen sie sich vor dem Servieren leicht entfernen.'
},
{
  id:'fi-silakkapihvit', name:'Silakkapihvit · Heringsfilet-Päckchen mit Dill in Roggenmehl, Kartoffelstampf und Gurke', cuisine:'Finnland', flag:'🇫🇮',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','gluten','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Gurke','Zitrone'], season:[],
  ing:[
    {n:'Heringsfilets, frisch',q:140,u:'g',c:'fisch'},
    {n:'Dill, frisch oder TK',q:2,u:'EL',c:'gemuese'},
    {n:'Roggenvollkornmehl',q:15,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:30,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in 12 bis 14 Minuten weich kochen, dann mit warmer Milch stampfen.',
    'Heringsfilets trocken tupfen, die Hälfte mit der Hautseite nach unten auslegen, mit Dill bestreuen und mit einem zweiten Filet bedecken. Die Päckchen in Roggenmehl wenden.',
    'In Öl bei mittlerer Hitze von jeder Seite 3 bis 4 Minuten braten, bis der Fisch innen nicht mehr glasig ist.',
    'Gurke in Scheiben schneiden und mit Joghurt mischen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz, Pfeffer und Zitrone servieren.'
  ],
  kidName:'Hering mit Kartoffelstampf',
  kid:'Fisch sorgfältig auf feine Gräten prüfen, zerpflücken und unter den Stampf mischen. Gurke in Stifte schneiden, ohne Salz und Zitrone.',
  leftover:'Hering-Brot · 5 Min. – Kalte Päckchen auf Roggenvollkornbrot mit Gurke und Dill legen.',
  tipp:'Silakka ist der kleine Ostseehering, an deutschen Fischtheken sind frische Heringsfilets der beste Ersatz.'
},
{
  id:'fi-kuha', name:'Paistettu kuha · gebratener Zander mit Kartoffeln, Karotten und Meerrettich-Joghurt', cuisine:'Finnland', flag:'🇫🇮',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Zitrone'], season:[],
  ing:[
    {n:'Zanderfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Meerrettich (Glas)',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln halbieren und mit Karotten in Stücken in 15 Minuten weich kochen.',
    'Zanderfilet trocken tupfen und mit der Hautseite nach unten in Öl 4 Minuten braten, wenden und 2 Minuten weiterbraten, bis der Fisch durchgegart ist.',
    'Joghurt mit Dill verrühren, eine kleine Portion für das Kind abnehmen und unter den Rest den Meerrettich rühren.',
    'Kinderportion ohne Salz anrichten. Erwachsene mit Salz, Pfeffer und Zitrone servieren.'
  ],
  kidName:'Zander mit Karottenkartoffeln',
  kid:'Haut entfernen, Fisch auf Gräten prüfen und zerpflücken, Kartoffeln und Karotten zerdrücken. Dill-Joghurt ohne Meerrettich und Salz.',
  leftover:'Fisch-Kartoffel-Pfanne · 8 Min. – Reste würfeln und in der Pfanne mit Frühlingszwiebeln vorsichtig erhitzen.',
  tipp:'Zander aus finnischen Seen gilt als Delikatesse, TK-Filets aus nachhaltiger Fischerei sind eine günstige Alternative.'
},
{
  id:'fi-karjalanpaisti', name:'Karjalanpaisti · Karelischer Ofenschmortopf mit Rind, Piment, Wurzelgemüse und Kartoffelstampf', cuisine:'Finnland', flag:'🇫🇮',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:150}, devices:[['ofen','slowcooker']], method:'Backofen oder Slow Cooker',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Karotten','Steckrübe','Zwiebel','Kartoffeln'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Rindergulasch, mager',q:120,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Steckrübe',q:80,u:'g',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Preiselbeeren (Glas)',q:1,u:'EL',c:'vorrat'},
    {n:'Pimentkörner',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:1,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 160 °C vorheizen. Fleisch in große Würfel und Zwiebel in Spalten schneiden, mit Piment und Lorbeer in einen Bräter schichten.',
    'So viel Wasser angießen, dass das Fleisch knapp bedeckt ist, und zugedeckt 90 Minuten schmoren (Slow Cooker: alles zusammen 8 Stunden auf niedriger Stufe).',
    'Karotten und Steckrübe in grobe Stücke schneiden, zugeben und weitere 60 Minuten schmoren, bis alles sehr weich ist. Kartoffeln in den letzten 20 Minuten kochen und mit warmer Milch stampfen.',
    'Pimentkörner und Lorbeer entfernen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz abschmecken und mit Preiselbeeren servieren.'
  ],
  kidName:'Karelischer Fleischtopf mild',
  kid:'Fleisch in feine Fasern zupfen und mit Gemüse und Kartoffelstampf mischen. Pimentkörner vorher sicher entfernen, ohne Salz, Preiselbeeren nur als kleiner Klecks.',
  leftover:'Schmortopf-Suppe · 10 Min. – Reste mit Brühe auffüllen, Gemüse klein schneiden und als kräftige Suppe erhitzen.',
  tipp:'Klassisch werden Rind und Schwein gemischt, mit magerem Rindfleisch und mehr Wurzelgemüse wird der Topf leichter.'
},
{
  id:'fi-poronkaristys', name:'Poronkäristys · Rentier- oder Rindergeschnetzeltes mit Kartoffelstampf, Gurke und Preiselbeeren', cuisine:'Finnland', flag:'🇫🇮',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Pilze','Gurke','Kartoffeln'], season:[],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Preiselbeeren (Glas)',q:1,u:'EL',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in 15 Minuten weich kochen, dann mit warmer Milch stampfen.',
    'Fleisch in Öl portionsweise kräftig anbraten, Zwiebel- und Pilzstreifen zugeben und 3 Minuten mitbraten.',
    'Brühe angießen und zugedeckt 20 Minuten leise schmoren, bis das Fleisch zart ist.',
    'Gurke in Scheiben schneiden. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer würzen und mit Preiselbeeren servieren.'
  ],
  kidName:'Geschnetzeltes mit Stampf',
  kid:'Fleisch sehr fein schneiden und unter den Kartoffelstampf mischen, damit es saftig bleibt. Ohne Salz, Preiselbeeren nur als kleiner Klecks.',
  leftover:'Geschnetzeltes-Wrap · 6 Min. – Reste erhitzen und mit Gurke und Salat in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Rentierfleisch gibt es tiefgekühlt in gut sortierten Feinkostläden, dünn geschnittenes Rindfleisch aus der Hüfte ist ein guter Ersatz.'
},
{
  id:'fi-makaronilaatikko', name:'Makaronilaatikko · Vollkorn-Makkaroni-Auflauf mit Hackfleisch, Karotten und Zucchini', cuisine:'Finnland', flag:'🇫🇮',
  protein:'fleisch', base:'nudeln', time:{a:15,c:50}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Zucchini','Zwiebel','Kirschtomaten'], season:[6,7,8,9],
  ing:[
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Nudeln 3 Minuten kürzer als angegeben kochen und abgießen.',
    'Hackfleisch in Öl krümelig braten, Zwiebel, geriebene Karotte und Zucchini zugeben und 5 Minuten mitbraten, bis das Fleisch durchgegart ist.',
    'Nudeln und Hackmischung in einer Auflaufform mischen. Eier mit Milch verquirlen, darübergießen, mit Käse bestreuen und 40 bis 45 Minuten backen, bis die Eiermilch vollständig gestockt ist.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Pfeffer würzen und Kirschtomaten dazu servieren.'
  ],
  kidName:'Makkaroni-Auflauf mild',
  kid:'Ein Stück aus der Mitte nehmen, wo das Ei sicher gestockt ist, und klein schneiden. Kirschtomaten vierteln, ohne Salz.',
  leftover:'Makkaroni-Muffins · 15 Min. – Reste klein schneiden, in Muffinförmchen füllen und im Ofen aufbacken.',
  tipp:'In Finnland gehört Makaronilaatikko zu den beliebtesten Familienessen, geriebenes Gemüse in der Hackmischung fällt kaum auf.'
},
{
  id:'fi-kaalilaatikko', name:'Kaalilaatikko · Weißkohl-Auflauf mit Putenhack, Majoran und Vollkornreis', cuisine:'Finnland', flag:'🇫🇮',
  protein:'gefluegel', base:'reis', time:{a:20,c:75}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Karotten','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Weißkohl',q:250,u:'g',c:'gemuese'},
    {n:'Putenhack',q:100,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Preiselbeeren (Glas)',q:1,u:'EL',c:'vorrat'},
    {n:'Majoran, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Reis in Wasser 15 Minuten vorgaren und abgießen.',
    'Kohl in feine Streifen schneiden und in Öl 8 Minuten anbraten, bis er leicht gebräunt ist. Hackfleisch, Zwiebelwürfel und geriebene Karotte zugeben und 4 Minuten mitbraten.',
    'Reis, Majoran und Brühe untermischen, alles in eine Auflaufform geben, zugedeckt 50 Minuten backen und dann offen 10 Minuten bräunen lassen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Preiselbeeren servieren.'
  ],
  kidName:'Kohl-Reis-Auflauf',
  kid:'Kohl sehr weich backen und klein schneiden, mit Reis und Hackfleisch locker mischen. Ohne Salz, Preiselbeeren nur als kleiner Klecks.',
  leftover:'Kohl-Reis-Pfanne · 10 Min. – Reste mit einem Ei in der Pfanne durchbraten, bis Ei und Reis vollständig heiß sind.',
  tipp:'Klassisch wird der Kohl mit Sirup karamellisiert, kräftiges Anbraten bringt genug Röstaroma ohne Zucker.'
},
{
  id:'fi-jauhelihakastike', name:'Jauhelihakastike · finnische Hackfleischsauce mit Karotten, Erbsen und Pellkartoffeln', cuisine:'Finnland', flag:'🇫🇮',
  protein:'fleisch', base:'kartoffeln', time:{a:10,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Erbsen','Zwiebel','Gurke'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Dinkel-Vollkornmehl',q:8,u:'g',c:'vorrat'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln ungeschält in 18 bis 20 Minuten weich kochen.',
    'Hackfleisch in Öl krümelig braten, Zwiebel und fein gewürfelte Karotten zugeben und 5 Minuten mitbraten.',
    'Mehl darüberstäuben und kurz anschwitzen, dann Brühe und Milch einrühren und 8 Minuten sämig köcheln, Erbsen in den letzten 3 Minuten zugeben.',
    'Gurke in Scheiben schneiden. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Hacksauce mit Kartoffeln',
  kid:'Kartoffeln pellen und mit der Sauce zu einem weichen Mus zerdrücken, Erbsen leicht anquetschen. Ohne Salz.',
  leftover:'Hack-Nudeln · 10 Min. – Übrige Sauce erhitzen und mit gekochten Vollkornnudeln mischen.',
  tipp:'Jauhelihakastike ist in Finnland eines der häufigsten Alltagsgerichte und gelingt auch mit Putenhack.'
},
{
  id:'fi-karjalanpiirakka', name:'Karjalanpiirakka · Karelische Roggenpiroggen mit Milchreisfüllung, Ei-Topping und Rohkost', cuisine:'Finnland', flag:'🇫🇮',
  protein:'milch', base:'reis', time:{a:30,c:50}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Karotten','Gurke'], season:[],
  ing:[
    {n:'Rundkornreis',q:40,u:'g',c:'vorrat'},
    {n:'Milch',q:200,u:'ml',c:'kuehl'},
    {n:'Roggenvollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Butter',q:5,u:'g',c:'kuehl'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis mit 100 ml Wasser 5 Minuten köcheln, dann die Milch zugeben und bei kleiner Hitze unter häufigem Rühren 30 Minuten zu einem dicken Brei garen.',
    'Ofen auf 250 °C vorheizen. Roggenmehl mit Öl und etwa 4 EL Wasser zu einem festen Teig kneten, in kleine Kugeln teilen und hauchdünn zu Ovalen ausrollen.',
    'Reisbrei mittig auf die Ovale streichen, die Ränder nach innen falten und zusammenkneifen. 12 bis 15 Minuten backen, bis die Ränder leicht gebräunt sind.',
    'Ei 10 Minuten hart kochen, fein hacken und mit der weichen Butter verrühren. Kinderportion abnehmen, Erwachsene das Ei-Topping leicht salzen und mit Karotten- und Gurkenrohkost servieren.'
  ],
  kidName:'Mini-Piirakka',
  kid:'Piroggen etwas abkühlen lassen und in Streifen schneiden, den harten Rand bei Bedarf entfernen. Ei-Topping ohne Salz, Rohkost fein raspeln.',
  leftover:'Piirakka-Frühstück · 5 Min. – Übrige Piroggen im Ofen oder Toaster aufwärmen und mit Ei-Topping essen.',
  tipp:'Karjalanpiirakat lassen sich gut auf Vorrat backen und einfrieren, aufgebacken schmecken sie wie frisch.'
},
{
  id:'fi-hernekeitto', name:'Hernekeitto · finnische Erbsensuppe mit Räuchertofu, Senf und Roggenvollkornbrot', cuisine:'Finnland', flag:'🇫🇮',
  protein:'huelsen', base:null, time:{a:15,c:60}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:['gluten','soja'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:2,
  veg:['Karotten','Zwiebel','Kartoffeln'], season:[],
  ing:[
    {n:'Gelbe Schälerbsen, trocken',q:80,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:80,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:450,u:'ml',c:'vorrat'},
    {n:'Räuchertofu',q:50,u:'g',c:'kuehl'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Majoran, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Erbsen in einem Sieb gründlich spülen, mit Brühe und Majoran aufkochen, abschäumen und zugedeckt 30 Minuten köcheln.',
    'Zwiebel, Karotten und Kartoffeln würfeln, zugeben und weitere 30 Minuten köcheln, bis die Erbsen zerfallen (Slow Cooker: alles zusammen 7 Stunden auf niedriger Stufe).',
    'Räuchertofu fein würfeln, in einer Pfanne ohne Fett 4 Minuten knusprig rösten und in die Suppe geben.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer abschmecken und mit Senf und Roggenvollkornbrot servieren.'
  ],
  kidName:'Dicke Erbsensuppe',
  kid:'Kinderportion fein pürieren und dick servieren, Tofuwürfel zerbröseln und Brot in weiche Streifen schneiden. Ohne Salz und Senf.',
  leftover:'Erbsen-Bratlinge · 12 Min. – Dicke Reste mit Haferflocken binden, zu Talern formen und in der Pfanne braten.',
  tipp:'In Finnland gibt es Erbsensuppe traditionell donnerstags, Räuchertofu ersetzt hier den sonst üblichen Schinken.'
},
{
  id:'fi-pinaattiohukaiset', name:'Pinaattiohukaiset · Vollkorn-Spinatpfannkuchen mit Hüttenkäse, Preiselbeeren und Rohkost', cuisine:'Finnland', flag:'🇫🇮',
  protein:'ei', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Spinat','Gurke','Karotten'], season:[],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Blattspinat, TK',q:80,u:'g',c:'tk'},
    {n:'Hüttenkäse',q:80,u:'g',c:'kuehl'},
    {n:'Preiselbeeren (Glas)',q:1,u:'EL',c:'vorrat'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Muskat',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Spinat auftauen lassen, gut ausdrücken und fein hacken. Mehl, Milch, Ei und Muskat glatt verrühren und den Spinat unterheben.',
    'Eine beschichtete Pfanne dünn mit Öl auspinseln, je 2 EL Teig zu kleinen Pfannkuchen ausstreichen und von jeder Seite 2 Minuten braten, bis sie durchgegart sind.',
    'Gurke würfeln und Karotte fein raspeln.',
    'Kinderportion abnehmen. Pfannkuchen mit Hüttenkäse, Rohkost und einem Löffel Preiselbeeren servieren, Erwachsene nach Geschmack salzen.'
  ],
  kidName:'Grüne Mini-Pfannkuchen',
  kid:'Kleine Pfannkuchen in Streifen schneiden und mit Hüttenkäse zum Dippen anbieten, Karotte sehr fein raspeln. Ohne Salz, Preiselbeeren nur als kleiner Klecks.',
  leftover:'Pfannkuchen-Röllchen · 3 Min. – Kalte Pfannkuchen mit Hüttenkäse bestreichen, aufrollen und in Scheiben schneiden.',
  tipp:'Selbst gemacht mit Vollkornmehl sättigen die Spinatpfannkuchen länger als die fertigen aus dem Kühlregal.'
},
{
  id:'fi-kesakeitto', name:'Kesäkeitto · finnische Sommer-Gemüsesuppe mit Milch, Erbsen und Roggenbrot', cuisine:'Finnland', flag:'🇫🇮',
  protein:'milch', base:null, time:{a:15,c:20}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Blumenkohl','Erbsen','Zuckerschoten','Babyspinat'], season:[6,7,8],
  ing:[
    {n:'Kartoffeln, festkochend',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Blumenkohl',q:100,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Zuckerschoten',q:40,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:30,u:'g',c:'gemuese'},
    {n:'Milch',q:250,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'}
  ],
  steps:[
    'Kartoffeln und Karotten würfeln, Blumenkohl in kleine Röschen teilen und in 300 ml Wasser 12 Minuten weich köcheln.',
    'Erbsen und Zuckerschoten zugeben und 3 Minuten mitgaren.',
    'Milch mit Speisestärke verrühren, einrühren und vorsichtig erhitzen, bis die Suppe leicht bindet, dann Spinat und Dill unterheben.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer abschmecken und mit Roggenvollkornbrot servieren.'
  ],
  kidName:'Sommersuppe mit Gemüsestückchen',
  kid:'Gemüse weich garen, mit der Gabel zerdrücken oder grob pürieren und Zuckerschoten klein schneiden. Brot in weiche Streifen, ohne Salz.',
  leftover:'Gemüse-Nudeln · 10 Min. – Gemüsereste aus der Suppe mit Vollkornnudeln und etwas Käse mischen.',
  tipp:'Kesäkeitto schmeckt am besten im Juni und Juli mit jungem Gemüse, außerhalb der Saison passt TK-Gemüse.'
},
{
  id:'fi-sienikastike', name:'Sienikastike · finnische Pilzrahmsauce mit Pellkartoffeln, Ei und Gurke', cuisine:'Finnland', flag:'🇫🇮',
  protein:'ei', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Zwiebel','Gurke','Kartoffeln'], season:[8,9,10,11],
  ing:[
    {n:'Champignons',q:200,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln halbieren und in 15 Minuten weich kochen, Ei gleichzeitig 10 Minuten hart kochen und abschrecken.',
    'Zwiebel fein würfeln, Pilze in Scheiben schneiden und beides in Öl bei starker Hitze 6 bis 8 Minuten braten, bis die Flüssigkeit verdampft ist.',
    'Milch mit Speisestärke verrühren, zugießen und 2 Minuten sämig köcheln, dann saure Sahne und Dill einrühren.',
    'Gurke in Scheiben schneiden. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer würzen und mit Kartoffeln und Eihälften servieren.'
  ],
  kidName:'Pilzsauce mit Kartoffeln',
  kid:'Pilze sehr klein hacken oder grob pürieren und mit Kartoffeln zu einem weichen Mus mischen, das hart gekochte Ei fein hacken. Ohne Salz.',
  leftover:'Pilz-Toast · 6 Min. – Übrige Sauce erhitzen und auf geröstetem Roggenvollkornbrot servieren.',
  tipp:'In Finnland kommen im Spätsommer Pfifferlinge oder Steinpilze hinein, Champignons gibt es das ganze Jahr.'
},
{
  id:'fi-porkkanapihvit', name:'Porkkanapihvit · Karotten-Reis-Bratlinge aus dem Ofen mit Joghurt-Dip und Gurke', cuisine:'Finnland', flag:'🇫🇮',
  protein:'ei', base:'reis', time:{a:20,c:50}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Gurke','Zwiebel'], season:[],
  ing:[
    {n:'Karotten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Haferflocken, zart',q:20,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Majoran, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in 25 Minuten weich kochen und etwas abkühlen lassen. Ofen auf 200 °C vorheizen.',
    'Karotten und Zwiebel fein reiben und mit Reis, Haferflocken, Ei, geriebenem Käse und Majoran zu einer formbaren Masse verkneten, 5 Minuten quellen lassen.',
    'Flache Bratlinge formen, auf ein geöltes Blech legen, dünn mit Öl bepinseln und 20 bis 25 Minuten backen, nach der Hälfte wenden, bis sie goldbraun und fest sind.',
    'Gurke würfeln. Kinderportion abnehmen, Erwachsene mit Salz und Pfeffer würzen und mit Joghurt-Dip und Gurke servieren.'
  ],
  kidName:'Karotten-Taler',
  kid:'Bratlinge in Streifen schneiden, sie sind innen weich und gut zu greifen. Mit Joghurt zum Dippen, ohne Salz.',
  leftover:'Bratling-Brot · 5 Min. – Kalte Bratlinge auf Roggenvollkornbrot mit Gurke legen.',
  tipp:'Karottenbratlinge sind in Finnland ein Klassiker in Kita und Schule, mit Reis vom Vortag gehen sie besonders schnell.'
},
{
  id:'fi-rosolli', name:'Rosolli · Rote-Bete-Kartoffel-Salat mit Apfel, Ei und Joghurt-Dressing', cuisine:'Finnland', flag:'🇫🇮',
  protein:'ei', base:'kartoffeln', time:{a:15,c:20}, devices:[['topf']], method:'Ein Topf',
  allergens:['ei','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Bete','Kartoffeln','Karotten','Apfel','Gurke'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Rote Bete, vorgegart',q:120,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Kartoffeln und Karotten ungeschält in 20 Minuten weich kochen, Eier im selben Topf 10 Minuten hart kochen. Alles abkühlen lassen und pellen.',
    'Kartoffeln, Karotten, Rote Bete, Apfel und Gurke in kleine gleichmäßige Würfel schneiden, Zwiebel sehr fein hacken.',
    'Joghurt mit etwas Rote-Bete-Saft, Essig und Dill zu einem rosa Dressing verrühren.',
    'Kinderportion ohne Zwiebel und Salz abnehmen. Für die Erwachsenen Zwiebel untermischen, mit Salz und Pfeffer würzen und mit Eivierteln und Dressing servieren.'
  ],
  kidName:'Bunter Rote-Bete-Teller',
  kid:'Gemüse weich gekocht in kleinen Würfeln getrennt anbieten, Apfel fein reiben und das hart gekochte Ei klein schneiden. Ohne Zwiebel und Salz.',
  leftover:'Rosolli-Brot · 5 Min. – Übrigen Salat mit etwas Joghurt auf Roggenvollkornbrot verteilen.',
  tipp:'Rosolli gehört in Finnland auf jede Weihnachtstafel, mit Ei wird daraus an warmen Tagen ein leichtes Abendessen.'
}
);
