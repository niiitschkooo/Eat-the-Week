/* Grün geplant · Deutschland · Top 15 */
RECIPES.push(
{
  id:'de-kaesespaetzle', name:'Käsespätzle · Vollkornspätzle mit Bergkäse, Lauch und geschmorten Zwiebeln', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'milch', base:'nudeln', time:{a:10,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Lauch','Zwiebel','Salat'], season:[1,2,3,9,10,11,12],
  ing:[
    {n:'Vollkorn-Spätzle, getrocknet',q:90,u:'g',c:'vorrat'},
    {n:'Bergkäse, gerieben',q:35,u:'g',c:'kuehl'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Spätzle in reichlich Wasser nach Packungsangabe etwa 12 Minuten garen, dabei eine halbe Tasse Kochwasser auffangen.',
    'Zwiebel in feine Ringe, Lauch in dünne Ringe schneiden und in Öl bei mittlerer Hitze 8 bis 10 Minuten goldbraun schmoren.',
    'Spätzle abgießen, mit Milch, etwas Kochwasser und dem Käse in die Pfanne geben und rühren, bis der Käse geschmolzen und alles cremig ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Muskat, Pfeffer und wenig Salz würzen und mit dem Salat servieren.'
  ],
  kidName:'Mini-Käsespätzle',
  kid:'Spätzle kurz schneiden und mit nur wenig Käse mischen, da Bergkäse salzig ist. Lauch sehr weich schmoren, Salat für das Kind weglassen.',
  leftover:'Spätzle-Auflauf · 20 Min. – Reste mit etwas Milch und Brokkoli in eine Form geben und bei 180 °C vollständig durchbacken.',
  tipp:'Ein kräftiger Bergkäse bringt schon in kleiner Menge viel Geschmack, das spart Fett und Salz.'
},
{
  id:'de-linsen-spaetzle', name:'Linsen mit Spätzle · schwäbische Linsen mit Wurzelgemüse und Vollkornspätzle', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'huelsen', base:'nudeln', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','ei','sellerie'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Sellerie','Zwiebel'], season:[],
  ing:[
    {n:'Berglinsen oder Tellerlinsen, trocken',q:65,u:'g',c:'vorrat'},
    {n:'Vollkorn-Spätzle, getrocknet',q:75,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotten und Sellerie fein würfeln und in Öl 3 Minuten andünsten.',
    'Linsen abspülen, mit Brühe und Lorbeerblatt zugeben und zugedeckt 25 bis 30 Minuten köcheln, bis die Linsen weich und sämig sind.',
    'Parallel die Spätzle nach Packungsangabe etwa 12 Minuten garen und abgießen.',
    'Lorbeerblatt entfernen. Kinderportion ungesalzen abnehmen, dann die Linsen für die Erwachsenen mit Essig, Pfeffer und wenig Salz abschmecken und mit den Spätzle servieren.'
  ],
  kidName:'Mini-Linsen mit Spätzle',
  kid:'Linsen grob zerdrücken, damit sie cremig werden, und Spätzle kurz schneiden. Ohne Essig und Salz servieren.',
  leftover:'Linsen-Bratlinge · 15 Min. – Linsenreste mit Haferflocken und einem Ei verkneten, zu Talern formen und in der Pfanne durchbraten.',
  tipp:'Die Linsen lassen sich gut in doppelter Menge kochen und portionsweise einfrieren.'
},
{
  id:'de-erbseneintopf', name:'Erbseneintopf · dicker Eintopf aus Schälerbsen mit Kartoffeln und Möhren', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'huelsen', base:'kartoffeln', time:{a:15,c:50}, devices:[['topf','slowcooker']], method:'Ein Topf',
  allergens:['sellerie'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Lauch','Sellerie'], season:[],
  ing:[
    {n:'Schälerbsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.3,u:'Stange',c:'gemuese'},
    {n:'Knollensellerie',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Majoran, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Schälerbsen in einem Sieb abspülen. Zwiebel würfeln und in Öl im großen Topf glasig dünsten.',
    'Erbsen mit der Brühe zugeben und zugedeckt 30 Minuten köcheln.',
    'Kartoffeln, Karotten, Sellerie und Lauch würfeln, mit Majoran zugeben und weitere 20 Minuten garen, bis die Erbsen zerfallen und der Eintopf sämig ist.',
    'Kinderportion ungesalzen abnehmen und grob zerdrücken. Erwachsene mit Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mini-Erbseneintopf',
  kid:'Eintopf für das Kind dick lassen und die Gemüsestücke mit der Gabel zerdrücken. Ohne Salz und lauwarm servieren.',
  leftover:'Erbsen-Nudeln · 12 Min. – Reste mit etwas Wasser vollständig erhitzen und als dicke Soße über Vollkornnudeln geben.',
  tipp:'Im Slowcooker auf niedriger Stufe 6 Stunden garen, dann zerfallen die Erbsen ohne Rühren.'
},
{
  id:'de-bauernfruehstueck', name:'Bauernfrühstück · Kartoffel-Ei-Pfanne mit Paprika und Erbsen', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'ei', base:'kartoffeln', time:{a:7,c:17}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Erbsen','Zwiebel'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Schnittlauch, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln waschen, in 3 mm dünne Scheiben schneiden und in Öl zugedeckt 10 Minuten bei mittlerer Hitze braten, dabei zweimal wenden.',
    'Zwiebel und Paprika würfeln, mit den Erbsen zugeben und 3 Minuten mitbraten.',
    'Eier verquirlen, darübergießen und bei kleiner Hitze 3 bis 4 Minuten stocken lassen, bis das Ei vollständig fest ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Paprikapulver, Schnittlauch, Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Bauernfrühstück',
  kid:'Ei vollständig stocken lassen und alles in kleine, weiche Stücke schneiden. Erbsen leicht zerdrücken und ohne Salz servieren.',
  leftover:'Bauernfrühstück-Wrap · 5 Min. – Reste vollständig erhitzen und mit Gurkenstreifen in eine Vollkorn-Tortilla rollen.',
  tipp:'Mit gekochten Kartoffeln vom Vortag ist die Pfanne in 10 Minuten fertig.'
},
{
  id:'de-spargel-kartoffeln', name:'Spargel mit Kartoffeln · weißer Spargel mit Rührei und Kräuter-Joghurt-Soße', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'ei', base:'kartoffeln', time:{a:15,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Spargel','Kartoffeln','Kräuter','Zitrone'], season:[4,5,6],
  ing:[
    {n:'Weißer Spargel',q:300,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Schnittlauch, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln waschen und in Wasser 20 Minuten gar kochen.',
    'Spargel schälen, holzige Enden abschneiden und in leicht köchelndem Wasser mit einem Spritzer Zitrone 12 bis 15 Minuten weich garen.',
    'Joghurt mit den fein geschnittenen Kräutern verrühren. Eier verquirlen und in Öl bei kleiner Hitze unter Rühren 3 bis 4 Minuten vollständig stocken lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Spargel und Rührei mit Zitronensaft, Pfeffer und wenig Salz würzen und mit der Kräutersoße servieren.'
  ],
  kidName:'Mini-Spargelteller',
  kid:'Spargel sehr weich garen und nur die zarten Spitzen in fingerlangen Stücken anbieten. Rührei vollständig durchgaren, Kartoffeln zerdrücken.',
  leftover:'Spargelpfanne · 10 Min. – Spargel- und Kartoffelreste in Stücke schneiden und mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Schalen und Enden 15 Minuten in Wasser auskochen, das ergibt einen Fond für Suppe oder Risotto.'
},
{
  id:'de-flammkuchen', name:'Flammkuchen · dünner Vollkornboden mit Quarkcreme, Lauch, Zwiebeln und Champignons', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'milch', base:null, time:{a:12,c:12}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Lauch','Zwiebel','Pilze'], season:[1,2,3,9,10,11,12],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:80,u:'g',c:'vorrat'},
    {n:'Quark',q:70,u:'g',c:'kuehl'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen mit dem Blech auf 250 °C Ober- und Unterhitze vorheizen. Mehl mit 45 ml Wasser und dem Öl zu einem glatten Teig kneten und auf Backpapier hauchdünn ausrollen.',
    'Quark und saure Sahne verrühren und dünn auf den Teig streichen. Lauch und Zwiebel in feine Ringe, Champignons in dünne Scheiben schneiden und darauf verteilen.',
    'Flammkuchen auf dem heißen Blech 10 bis 12 Minuten backen, bis der Rand knusprig und das Gemüse weich ist.',
    'Kinderportion ungewürzt abschneiden. Erwachsene mit Muskat, Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Flammkuchen',
  kid:'In schmale Streifen schneiden und den harten Rand entfernen. Lauch und Zwiebel für das Kindstück besonders fein schneiden, damit sie weich backen.',
  leftover:'Flammkuchen-Snack · 5 Min. – Reste in der Pfanne ohne Fett kurz aufknuspern und mit Gurkensticks servieren.',
  tipp:'Den Teig in doppelter Menge kneten und ausgerollt zwischen Backpapier einfrieren.'
},
{
  id:'de-pellkartoffeln-quark', name:'Pellkartoffeln mit Quark · Kräuterquark mit Leinöl, Gurke und Radieschen', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'milch', base:'kartoffeln', time:{a:6,c:18}, devices:[['topf']], method:'Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Gurke','Radieschen','Kräuter'], season:[5,6,7,8,9],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Quark',q:150,u:'g',c:'kuehl'},
    {n:'Milch',q:30,u:'ml',c:'kuehl'},
    {n:'Gurke',q:0.3,u:'Stk.',c:'gemuese'},
    {n:'Radieschen',q:4,u:'Stk.',c:'gemuese'},
    {n:'Schnittlauch, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Leinöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kümmel, ganz',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kleine Kartoffeln waschen und mit Kümmel in Wasser zugedeckt 18 Minuten gar kochen.',
    'Quark mit Milch glatt rühren. Gurke würfeln, Radieschen fein schneiden, Schnittlauch hacken und alles unterrühren.',
    'Kartoffeln abgießen, kurz ausdampfen lassen und nach Wunsch pellen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene den Quark mit Pfeffer und wenig Salz würzen und mit Leinöl beträufeln.'
  ],
  kidName:'Mini-Quarkkartoffeln',
  kid:'Kartoffeln pellen und zerdrücken, Quark ohne Radieschen und Salz dazugeben. Gurke schälen und in kleine Würfel schneiden.',
  leftover:'Kartoffel-Quark-Taler · 15 Min. – Kartoffelreste zerdrücken, mit etwas Quark und einem Ei formen und in der Pfanne durchbraten.',
  tipp:'Leinöl im Kühlschrank lagern und rasch verbrauchen, sonst wird es bitter.'
},
{
  id:'de-pannfisch', name:'Hamburger Pannfisch · Seelachs mit Bratkartoffeln, Senfsoße und Gurkensalat', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + kleiner Topf',
  allergens:['fisch','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Gurke'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 3 mm dünne Scheiben schneiden und in Öl zugedeckt 12 Minuten braten, dabei mehrmals wenden. Nach 6 Minuten die Zwiebel in Streifen zugeben.',
    'Fisch in große Stücke schneiden, nach 8 Minuten an den Pfannenrand setzen und 5 bis 6 Minuten braten, bis er innen nicht mehr glasig ist.',
    'Milch mit Stärke im kleinen Topf unter Rühren aufkochen, bis die Soße bindet. Gurke in feine Scheiben hobeln und mit Dill mischen.',
    'Kinderportion ohne Senf und Salz abnehmen. Dann den Senf in die Soße rühren und für die Erwachsenen mit Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mini-Pannfisch',
  kid:'Fisch auf Gräten prüfen und zerpflücken, weiche statt knusprige Kartoffeln auswählen. Gurke schälen und in kleine Stifte schneiden.',
  leftover:'Kartoffelpfanne mit Ei · 10 Min. – Kartoffelreste mit Paprika und einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Traditionell kommen Pellkartoffeln vom Vortag in die Pfanne, dann ist das Gericht noch schneller fertig.'
},
{
  id:'de-forelle-muellerin', name:'Forelle Müllerin Art · Forellenfilet mit Petersilienkartoffeln und grünen Bohnen', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','gluten','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Grüne Bohnen','Zitrone','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Forellenfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:150,u:'g',c:'gemuese'},
    {n:'Mehl',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Butter',q:5,u:'g',c:'kuehl'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Bohnenkraut, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, halbieren und 20 Minuten in Wasser gar kochen. Bohnen putzen und in einem zweiten Topf mit Bohnenkraut 10 Minuten weich garen.',
    'Forellenfilets trocken tupfen, die Fleischseite leicht in Mehl wenden und in Öl 3 Minuten auf der Hautseite und 2 Minuten auf der anderen Seite braten, bis das Fleisch nicht mehr glasig ist.',
    'Butter in der Pfanne kurz aufschäumen lassen, Zitronensaft und gehackte Petersilie zugeben und über Fisch und Kartoffeln geben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Forellenteller',
  kid:'Haut entfernen und den Fisch sorgfältig auf Gräten prüfen und zerpflücken. Bohnen sehr weich garen und in kurze Stücke schneiden, Kartoffeln zerdrücken.',
  leftover:'Forellen-Kartoffel-Pfanne · 10 Min. – Kartoffel- und Bohnenreste anbraten, zerpflückte Forelle zugeben und vollständig erhitzen.',
  tipp:'Forellenfilets aus heimischer Zucht sind eine nachhaltige Wahl und haben kaum Gräten.'
},
{
  id:'de-scholle-finkenwerder', name:'Scholle Finkenwerder Art · Schollenfilet mit Krabben und lauwarmem Kartoffel-Gurken-Salat', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Gurke','Zwiebel','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Schollenfilet',q:140,u:'g',c:'fisch'},
    {n:'Nordseekrabben, gekocht',q:30,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:60,u:'ml',c:'vorrat'},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Mehl',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in der Schale 20 Minuten gar kochen, kurz ausdampfen lassen, pellen und in Scheiben schneiden. Für das Kind einige Scheiben ohne Marinade beiseitelegen.',
    'Zwiebel fein würfeln und in der heißen Brühe 2 Minuten ziehen lassen. Mit Essig und der Hälfte des Öls über die warmen Kartoffeln geben, Gurke in dünne Scheiben hobeln und mit Dill unterheben.',
    'Schollenfilets in Mehl wenden und im restlichen Öl je Seite 2 bis 3 Minuten braten, bis sie durchgegart sind. Krabben 1 Minute in der Pfanne mitwärmen und über den Fisch geben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Fisch und Salat mit Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Scholle',
  kid:'Scholle auf Gräten prüfen und zerpflücken, Krabben weglassen, da sie stark gesalzen sind. Kartoffeln ohne Marinade und Gurke geschält in Stiften anbieten.',
  leftover:'Kartoffelsalat-Bowl · 5 Min. – Restlichen Kartoffelsalat mit einem hart gekochten Ei, Radieschen und Kräutern als Bowl anrichten.',
  tipp:'Schollenfilets sind dünn und garen sehr schnell, daher erst braten, wenn der Salat fertig ist.'
},
{
  id:'de-rinderrouladen', name:'Rinderrouladen · mager gefüllt mit Möhren und Gurke, dazu Apfel-Rotkohl und Kartoffeln', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:25,c:90}, devices:[['topf','slowcooker']], method:'Schmortopf + zwei Töpfe',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rotkohl','Karotten','Apfel','Zwiebel'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Rinderrouladen (Oberschale)',q:120,u:'g',c:'fisch'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gewürzgurke',q:0.5,u:'Stk.',c:'vorrat'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rotkohl',q:150,u:'g',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rouladen flach klopfen, dünn mit Senf bestreichen, mit Karotten- und Gurkenstiften belegen, aufrollen und mit Küchengarn oder Rouladennadeln fixieren.',
    'Rouladen in Öl im Schmortopf rundum 5 Minuten anbraten, Zwiebelwürfel kurz mitrösten, mit Brühe ablöschen und zugedeckt 80 bis 90 Minuten sanft schmoren.',
    'Rotkohl fein schneiden und mit Apfelstücken und 100 ml Wasser zugedeckt 40 Minuten weich dünsten. Kartoffeln in den letzten 20 Minuten gar kochen.',
    'Kinderportion ungesalzen abnehmen. Schmorsoße für die Erwachsenen mit Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mini-Roulade',
  kid:'Fleisch quer zur Faser in sehr feine Streifen schneiden oder zerzupfen und mit Soße mischen. Gurke aus der Füllung entfernen, Rotkohl weich und kurz geschnitten anbieten.',
  leftover:'Rouladen-Ragout · 10 Min. – Fleischreste klein schneiden, in der Soße vollständig erhitzen und mit Vollkornnudeln servieren.',
  tipp:'Im Slowcooker auf niedriger Stufe 6 Stunden schmoren, dann wird das Fleisch besonders zart.'
},
{
  id:'de-koenigsberger-klopse', name:'Königsberger Klopse · Fleischklößchen in heller Kapernsoße mit Kartoffeln und Roter Bete', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Rote Bete','Kartoffeln','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:10,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:230,u:'g',c:'gemuese'},
    {n:'Rote Bete, vorgegart',q:150,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Kapern',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Kartoffeln schälen und 20 Minuten gar kochen. Hack mit Haferflocken, Ei und fein geriebener Zwiebel verkneten und zu walnussgroßen Klößchen formen.',
    'Brühe aufkochen, Klopse hineingeben und bei kleiner Hitze 12 Minuten gar ziehen lassen, bis sie innen nicht mehr rosa sind, dann herausheben.',
    'Stärke mit der Milch verrühren, in die Brühe geben und unter Rühren aufkochen, bis die Soße bindet. Klopse zurückgeben und die gewürfelte Rote Bete separat erwärmen.',
    'Kinderportion ohne Kapern und Salz abnehmen. Dann die Kapern in die Soße geben und für die Erwachsenen mit Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mini-Klopse',
  kid:'Klopse vollständig durchgaren, halbieren und in der milden Soße zerdrücken. Rote Bete sehr weich in kleinen Würfeln anbieten.',
  leftover:'Klopse mit Reis · 10 Min. – Klopse und Soße vollständig erhitzen und mit Vollkornreis und Erbsen servieren.',
  tipp:'Kapern sind salzig, eine kleine Menge reicht für den typischen Geschmack.'
},
{
  id:'de-kohlrouladen', name:'Kohlrouladen · Weißkohl mit magerer Hackfüllung, geschmort, mit Salzkartoffeln', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:25,c:45}, devices:[['topf']], method:'Schmortopf + Topf',
  allergens:['gluten','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Zwiebel','Kartoffeln'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Weißkohl',q:200,u:'g',c:'gemuese'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:10,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Kümmel, ganz',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Pro Person 2 bis 3 große Kohlblätter lösen, 3 Minuten in kochendem Wasser blanchieren und die dicke Mittelrippe flach schneiden. Restlichen Kohl fein schneiden.',
    'Hack mit Haferflocken, Ei, der Hälfte der fein gewürfelten Zwiebel und Kümmel verkneten, auf die Blätter verteilen und zu Päckchen einrollen.',
    'Rouladen in Öl rundum 5 Minuten anbraten, restliche Zwiebel, geschnittenen Kohl und Tomatenmark zugeben, mit Brühe ablöschen und zugedeckt 40 Minuten schmoren. Kartoffeln in den letzten 20 Minuten gar kochen.',
    'Kinderportion ungesalzen abnehmen. Schmorsoße für die Erwachsenen mit Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mini-Kohlroulade',
  kid:'Roulade aufschneiden, die Füllung zerdrücken und den weichen Kohl fein hacken. Mit Soße und zerdrückten Kartoffeln mischen.',
  leftover:'Kohl-Hack-Pfanne · 10 Min. – Rouladenreste klein schneiden und mit den Kartoffeln in der Pfanne vollständig erhitzen.',
  tipp:'Den ganzen Kohlkopf über Nacht einfrieren und auftauen lassen, dann lösen sich die Blätter ohne Blanchieren.'
},
{
  id:'de-jaegerschnitzel', name:'Jägerschnitzel · Schnitzel natur mit Champignonsoße und Vollkornnudeln', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'fleisch', base:'nudeln', time:{a:15,c:15}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Zwiebel','Kräuter'], season:[9,10],
  ing:[
    {n:'Schweineschnitzel, mager',q:120,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Champignons',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.3,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln in reichlich Wasser nach Packungsangabe etwa 10 Minuten garen.',
    'Schnitzel flach klopfen und in Öl je Seite 2 bis 3 Minuten braten, bis sie durchgegart sind, dann herausnehmen und warm halten.',
    'Zwiebel würfeln, Champignons in Scheiben schneiden und im Bratfett 5 Minuten braten. Tomatenmark kurz mitrösten, Milch mit Stärke verrühren, angießen und 2 Minuten köcheln, bis die Soße bindet.',
    'Kinderportion ungewürzt abnehmen. Soße für die Erwachsenen mit Paprikapulver, Pfeffer und wenig Salz abschmecken und mit Petersilie über Schnitzel und Nudeln geben.'
  ],
  kidName:'Mini-Jägerschnitzel',
  kid:'Schnitzel in sehr feine, kurze Streifen schneiden und in der milden Soße saftig halten. Champignons klein hacken, Nudeln kürzen.',
  leftover:'Pilz-Nudel-Pfanne · 10 Min. – Nudeln, Soße und Fleischreste mit Erbsen in der Pfanne vollständig erhitzen.',
  tipp:'Mageres Schnitzel aus der Oberschale bleibt saftig, wenn es nur kurz und bei mittlerer Hitze gebraten wird.'
},
{
  id:'de-huehnerfrikassee', name:'Hühnerfrikassee · Hähnchen in heller Soße mit Champignons, Erbsen und Vollkornreis', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'gefluegel', base:'reis', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Erbsen','Karotten','Zitrone'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser zugedeckt 25 Minuten garen.',
    'Hähnchen in mundgerechte Würfel, Karotten in Scheiben schneiden und beides in der Brühe 10 Minuten leise köcheln, bis das Fleisch durchgegart ist.',
    'Champignons in Scheiben und Erbsen zugeben und 4 Minuten mitgaren. Stärke mit der Milch verrühren, einrühren und 1 Minute köcheln, bis die Soße sämig ist.',
    'Kinderportion ohne Zitrone und Salz abnehmen. Erwachsene mit Zitronensaft, Pfeffer und wenig Salz abschmecken und mit Petersilie bestreuen.'
  ],
  kidName:'Mini-Frikassee',
  kid:'Hähnchen zerpflücken statt würfeln und mit viel Soße und weichem Reis mischen. Erbsen leicht zerdrücken, Champignons fein hacken.',
  leftover:'Frikassee-Auflauf · 20 Min. – Reis und Frikassee in eine Form geben, mit wenig Käse bestreuen und bei 200 °C vollständig durchbacken.',
  tipp:'Mit dem Fleisch eines gekochten Suppenhuhns wird das Frikassee besonders aromatisch.'
}
);
