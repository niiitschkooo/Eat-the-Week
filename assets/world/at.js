/* Grün geplant · Österreich · Top 15 */
RECIPES.push(
{
  id:'at-wiener-schnitzel', name:'Wiener Schnitzel aus dem Ofen · Putenschnitzel in Vollkornpanade mit Erdäpfel-Gurken-Salat', cuisine:'Österreich', flag:'🇦🇹',
  protein:'gefluegel', base:'kartoffeln', time:{a:20,c:22}, devices:[['ofen','airfryer'],['topf']], method:'Backofen + Topf',
  allergens:['gluten','ei'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Gurke','Zwiebel'], season:[],
  ing:[
    {n:'Putenschnitzel',q:130,u:'g',c:'fisch'},
    {n:'Vollkorn-Semmelbrösel',q:25,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Mehl',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:60,u:'ml',c:'vorrat'},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in der Schale 20 Minuten gar kochen, pellen, in dünne Scheiben schneiden und mit heißer Brühe, Essig und fein gewürfelter Zwiebel marinieren. Für das Kind einige Scheiben ohne Marinade beiseitelegen.',
    'Ofen auf 220 °C Umluft vorheizen. Schnitzel dünn klopfen und nacheinander in Mehl, verquirltem Ei und Bröseln wenden.',
    'Schnitzel auf ein Blech mit Backpapier legen, mit dem Öl beträufeln und 12 bis 14 Minuten backen, nach der Hälfte wenden, bis die Panade goldbraun und das Fleisch durchgegart ist. Gurke in dünne Scheiben hobeln und unter den Salat heben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Schnitzel und Salat mit Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Schnitzel',
  kid:'Schnitzel in schmale Streifen zum Greifen schneiden. Kartoffeln ohne Marinade und Gurke geschält in Stiften anbieten.',
  leftover:'Schnitzel-Wrap · 8 Min. – Schnitzelreste vollständig erhitzen, in Streifen schneiden und mit Salat in eine Vollkorn-Tortilla rollen.',
  tipp:'In der Heißluftfritteuse gelingt das Schnitzel bei 200 °C in 10 Minuten mit nur einem Teelöffel Öl.'
},
{
  id:'at-tafelspitz', name:'Tafelspitz · gekochtes Rindfleisch mit Wurzelgemüse, Apfelkren, Schnittlauchsoße und Erdäpfeln', cuisine:'Österreich', flag:'🇦🇹',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:150}, devices:[['topf','slowcooker']], method:'Großer Topf + Topf',
  allergens:['milch','sellerie'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Sellerie','Lauch','Apfel','Kartoffeln'], season:[1,2,3,10,11,12],
  ing:[
    {n:'Tafelspitz vom Rind',q:150,u:'g',c:'fisch'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:60,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.3,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Meerrettich (Kren)',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Schnittlauch, frisch oder TK',q:1,u:'EL',c:'gemuese'}
  ],
  steps:[
    'Fleisch kalt abspülen, in einem großen Topf mit Wasser bedecken, aufkochen und den Schaum abschöpfen. Halbierte Zwiebel zugeben und 2 Stunden leise sieden lassen.',
    'Karotten, Sellerie und Lauch in grobe Stücke schneiden und für die letzten 30 Minuten zum Fleisch geben. Kartoffeln separat 20 Minuten gar kochen.',
    'Apfel fein reiben, die Hälfte für das Kind beiseitestellen und den Rest mit Kren mischen. Joghurt mit fein geschnittenem Schnittlauch verrühren.',
    'Fleisch gegen die Faser in dünne Scheiben schneiden. Kinderportion ungesalzen und ohne Kren abnehmen, dann die Erwachsenen mit Salz, Pfeffer, Apfelkren und Schnittlauchsoße servieren.'
  ],
  kidName:'Mini-Tafelspitz',
  kid:'Fleisch hauchdünn gegen die Faser schneiden und mit etwas Brühe saftig halten. Gemüse weich zerdrücken, geriebenen Apfel ohne Kren dazugeben.',
  leftover:'Rindsuppe mit Nudeln · 15 Min. – Brühe mit Gemüse und Fleischresten aufkochen und mit kleinen Vollkornnudeln sättigend machen.',
  tipp:'Die Kochbrühe nicht wegschütten, sie ist eine aromatische Basis für Suppen und Soßen und lässt sich einfrieren.'
},
{
  id:'at-rindsgulasch', name:'Rindsgulasch · Wiener Saftgulasch mit viel Zwiebel, Paprika und Erdäpfeln', cuisine:'Österreich', flag:'🇦🇹',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:100}, devices:[['topf','slowcooker']], method:'Schmortopf + Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Kartoffeln'], season:[],
  ing:[
    {n:'Rindfleisch zum Schmoren, mager',q:120,u:'g',c:'fisch'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kümmel, ganz',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Majoran, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebeln fein würfeln und in Öl bei mittlerer Hitze 10 Minuten goldbraun schmoren. Fleisch in 3 cm große Würfel schneiden.',
    'Tomatenmark und Paprikapulver kurz unterrühren, sofort mit Essig und 300 ml Wasser ablöschen, dann Fleisch, Kümmel und Majoran zugeben.',
    'Zugedeckt 90 Minuten leise schmoren, Paprika in Streifen für die letzten 20 Minuten zugeben. Kartoffeln separat 20 Minuten gar kochen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer, wenig Salz und nach Wunsch scharfem Paprika abschmecken.'
  ],
  kidName:'Mini-Gulasch',
  kid:'Fleisch fein zerzupfen und mit dem sämigen Saft über zerdrückte Kartoffeln geben. Paprika weich geschmort in kleinen Stücken anbieten.',
  leftover:'Gulaschnudeln · 10 Min. – Gulaschreste mit etwas Wasser vollständig erhitzen und mit Vollkornnudeln mischen.',
  tipp:'Im Slowcooker nach dem Anschmoren der Zwiebeln 7 Stunden auf niedriger Stufe garen.'
},
{
  id:'at-tiroler-groestl', name:'Tiroler Gröstl · Erdäpfel-Rindfleisch-Pfanne mit Spiegelei und Krautsalat', cuisine:'Österreich', flag:'🇦🇹',
  protein:'fleisch', base:'kartoffeln', time:{a:8,c:16}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Weißkohl','Kräuter'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Rindfleisch, dünne Streifen',q:90,u:'g',c:'fisch'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kümmel, ganz',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Majoran, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 3 mm dünne Scheiben schneiden und in Öl zugedeckt 10 Minuten braten, dabei zweimal wenden. Zwiebel in Streifen nach 5 Minuten zugeben.',
    'Weißkohl fein hobeln, mit Essig, Kümmel und 1 EL Wasser verkneten und ziehen lassen.',
    'Fleischstreifen an den Pfannenrand geben, 3 Minuten durchbraten und mit Majoran mischen. Daneben das Ei braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer, wenig Salz und Petersilie würzen und mit dem Krautsalat servieren.'
  ],
  kidName:'Mini-Gröstl',
  kid:'Ei vollständig durchbraten und klein schneiden, Fleisch fein hacken und weiche Kartoffelstücke auswählen. Krautsalat weglassen, da roher Kohl schwer zu kauen ist.',
  leftover:'Gröstl-Fladen · 5 Min. – Reste vollständig erhitzen und mit Krautsalat in ein Vollkorn-Fladenbrot füllen.',
  tipp:'Mit gekochten Erdäpfeln und Tafelspitz vom Vortag ist das Gröstl ein klassisches Restegericht.'
},
{
  id:'at-paprikahendl', name:'Paprikahendl · Hähnchen in milder Paprika-Rahmsoße mit Vollkornnockerl', cuisine:'Österreich', flag:'🇦🇹',
  protein:'gefluegel', base:'nudeln', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkorn-Spätzle, getrocknet',q:80,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:120,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Speisestärke',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nockerl nach Packungsangabe etwa 12 Minuten garen und abgießen.',
    'Hähnchen in Streifen schneiden, in Öl 4 Minuten rundum anbraten, bis es durchgegart ist, und herausnehmen. Zwiebel würfeln, Paprika in Streifen schneiden und 5 Minuten im Bratfett dünsten.',
    'Tomatenmark und Paprikapulver kurz unterrühren, mit Brühe ablöschen und 3 Minuten köcheln. Saure Sahne mit Stärke verrühren, unterziehen, Fleisch zurückgeben und kurz erhitzen, ohne zu kochen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer, wenig Salz und nach Wunsch scharfem Paprika abschmecken.'
  ],
  kidName:'Mini-Paprikahendl',
  kid:'Hähnchen fein zerpflücken und mit der cremigen Soße und weichen Nockerln mischen. Paprika sehr weich dünsten und klein schneiden.',
  leftover:'Nockerlpfanne · 10 Min. – Nockerl und Soße mit etwas Wasser und Erbsen in der Pfanne vollständig erhitzen.',
  tipp:'Edelsüßes Paprikapulver nur kurz anrösten, sonst wird es bitter.'
},
{
  id:'at-fleischlaibchen', name:'Faschierte Laibchen · Fleischlaibchen aus dem Ofen mit Erdäpfelpüree und Karottengemüse', cuisine:'Österreich', flag:'🇦🇹',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:20}, devices:[['ofen','airfryer'],['topf']], method:'Backofen + Topf',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Kartoffeln','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:230,u:'g',c:'gemuese'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Karotten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Majoran, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Hack mit Haferflocken, Ei, fein geriebener Zwiebel, Majoran und Petersilie verkneten und zu flachen Laibchen formen.',
    'Laibchen auf ein Blech mit Backpapier legen, mit wenig Öl bestreichen und 18 bis 20 Minuten backen, bis sie innen nicht mehr rosa sind.',
    'Kartoffeln schälen, würfeln und 15 Minuten weich kochen, abgießen und mit warmer Milch stampfen. Karotten in Scheiben schneiden und mit wenig Wasser und dem restlichen Öl 10 Minuten weich dünsten.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Püree und Gemüse mit Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Laibchen',
  kid:'Laibchen vollständig durchgaren und in Streifen zum Greifen schneiden. Karotten sehr weich dünsten, Püree ungesalzen lassen.',
  leftover:'Laibchen-Semmel · 5 Min. – Laibchen vollständig erhitzen und mit Gurke in ein Vollkornbrötchen legen.',
  tipp:'Die doppelte Menge formen und roh einfrieren, gefroren brauchen die Laibchen etwa 25 Minuten im Ofen.'
},
{
  id:'at-saibling', name:'Gebratener Saibling · Saiblingsfilet mit Petersilerdäpfeln und Vogerlsalat mit Kernöl', cuisine:'Österreich', flag:'🇦🇹',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:16}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Salat','Karotten','Kräuter','Zitrone'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Saiblingsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Feldsalat',q:70,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Butter',q:5,u:'g',c:'kuehl'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kürbiskernöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kleine Kartoffeln waschen, halbieren und in Wasser 15 Minuten gar kochen, abgießen und in Butter mit gehackter Petersilie schwenken.',
    'Feldsalat waschen und Karotte fein raspeln. Essig mit Kürbiskernöl verrühren, aber erst beim Servieren unterheben.',
    'Saiblingsfilets trocken tupfen und in Öl auf der Hautseite 4 Minuten knusprig braten, wenden und 1 bis 2 Minuten fertig garen, bis das Fleisch nicht mehr glasig ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene den Fisch mit Zitronensaft, Pfeffer und wenig Salz würzen und den Salat mit dem Dressing anmachen.'
  ],
  kidName:'Mini-Saibling',
  kid:'Haut entfernen und den Fisch sorgfältig auf Gräten prüfen und zerpflücken. Statt Blattsalat die geraspelte Karotte kurz weich dünsten, Kartoffeln zerdrücken.',
  leftover:'Fischlaibchen · 15 Min. – Fisch- und Kartoffelreste zerdrücken, mit einem Ei formen und in der Pfanne vollständig durchbraten.',
  tipp:'Kürbiskernöl nie erhitzen, es verliert sonst Aroma und wird bitter.'
},
{
  id:'at-zander-wurzelgemuese', name:'Zander auf Wurzelgemüse · Zanderfilet vom Blech mit Erdäpfeln und milder Krensoße', cuisine:'Österreich', flag:'🇦🇹',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:35}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['fisch','milch','sellerie'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Sellerie','Pastinake','Lauch','Kartoffeln'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Zanderfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:50,u:'g',c:'gemuese'},
    {n:'Pastinake',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.3,u:'Stange',c:'gemuese'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Meerrettich (Kren)',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln, Karotten, Sellerie und Pastinake in 1 cm große Würfel schneiden, mit Öl und Thymian mischen und auf dem Blech 20 Minuten backen.',
    'Lauch in Ringe schneiden und unter das Gemüse mischen. Zander mit der Hautseite nach unten darauflegen und weitere 12 bis 15 Minuten backen, bis der Fisch gerade durchgegart ist.',
    'Saure Sahne glatt rühren und die Hälfte für das Kind ohne Kren beiseitestellen. Unter den Rest den Kren rühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer und wenig Salz würzen und mit der Krensoße servieren.'
  ],
  kidName:'Mini-Zanderteller',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Wurzelgemüse sehr weich backen und zerdrücken. Saure Sahne ohne Kren als milden Dip anbieten.',
  leftover:'Wurzelgemüse-Laibchen · 15 Min. – Gemüse- und Fischreste zerdrücken, mit Haferflocken und einem Ei formen und in der Pfanne vollständig durchbraten.',
  tipp:'Statt Zander passen auch Kabeljau oder Seelachs, die Garzeit bleibt gleich.'
},
{
  id:'at-kaspressknoedel', name:'Kaspressknödel · flache Vollkorn-Käseknödel aus der Pfanne mit Kümmel-Sauerkraut', cuisine:'Österreich', flag:'🇦🇹',
  protein:'milch', base:null, time:{a:15,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Zwiebel','Kräuter'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Bergkäse, gerieben',q:30,u:'g',c:'kuehl'},
    {n:'Quark',q:30,u:'g',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Schnittlauch, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Sauerkraut',q:150,u:'g',c:'vorrat'},
    {n:'Kümmel, ganz',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Brot in kleine Würfel schneiden, mit warmer Milch und verquirltem Ei übergießen und 10 Minuten ziehen lassen. Zwiebel sehr fein würfeln.',
    'Käse, Quark, Zwiebel und Schnittlauch untermischen und mit nassen Händen zu flachen Laibchen pressen.',
    'Knödel in Öl bei mittlerer Hitze je Seite 4 bis 5 Minuten goldbraun braten, bis sie innen heiß sind und das Ei gestockt ist. Sauerkraut mit Kümmel und 3 EL Wasser 10 Minuten im Topf erwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer würzen, Salz ist durch den Käse meist nicht nötig.'
  ],
  kidName:'Mini-Kaspressknödel',
  kid:'Knödel in Streifen schneiden und innen auf vollständig gestocktes Ei prüfen. Sauerkraut abspülen und nur in kleiner Menge anbieten, da es säuerlich und salzig ist.',
  leftover:'Knödel in der Suppe · 10 Min. – Übrige Knödel in heißer Gemüsebrühe mit Karottenscheiben vollständig erhitzen.',
  tipp:'Gebratene Kaspressknödel lassen sich einfrieren und im Ofen bei 180 °C in 15 Minuten aufbacken.'
},
{
  id:'at-kasnudeln', name:'Kärntner Kasnudeln · Vollkorn-Teigtaschen mit Topfen-Erdäpfel-Minze-Füllung und Tomatensalat', cuisine:'Österreich', flag:'🇦🇹',
  protein:'milch', base:'nudeln', time:{a:40,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Kirschtomaten','Salat','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:80,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, mehlig',q:100,u:'g',c:'gemuese'},
    {n:'Quark',q:80,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Minze, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Kirschtomaten',q:100,u:'g',c:'gemuese'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Butter',q:5,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl mit Ei und 1 bis 2 EL Wasser zu einem glatten Teig kneten, abdecken und 20 Minuten ruhen lassen. Kartoffeln schälen und 15 Minuten weich kochen.',
    'Kartoffeln zerdrücken und mit Quark, sehr fein gewürfelter Zwiebel und gehackter Minze mischen.',
    'Teig dünn ausrollen, Kreise von 8 cm ausstechen, je einen Teelöffel Füllung daraufgeben, zusammenklappen und den Rand fest zudrücken. In leicht siedendem Wasser 10 bis 12 Minuten garen, bis die Nudeln oben schwimmen.',
    'Kirschtomaten vierteln und mit Salat und Öl anmachen. Kinderportion ungesalzen abnehmen, dann die Kasnudeln für die Erwachsenen mit zerlassener Butter, Pfeffer und wenig Salz servieren.'
  ],
  kidName:'Mini-Kasnudeln',
  kid:'Kasnudeln halbieren, damit die weiche Füllung sichtbar wird, und in kleine Stücke schneiden. Kirschtomaten längs vierteln, Salat weglassen.',
  leftover:'Gebratene Kasnudeln · 8 Min. – Übrige Kasnudeln in wenig Öl von beiden Seiten goldbraun und vollständig heiß braten.',
  tipp:'Kasnudeln lassen sich roh auf einem Brett einfrieren und gefroren direkt ins Wasser geben.'
},
{
  id:'at-spinatstrudel', name:'Spinatstrudel · Strudel mit Blattspinat, Topfen und Feta aus dem Ofen', cuisine:'Österreich', flag:'🇦🇹',
  protein:'milch', base:null, time:{a:15,c:30}, devices:[['ofen']], method:'Backofen',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Spinat','Zwiebel','Kirschtomaten'], season:[],
  ing:[
    {n:'Strudelteig',q:50,u:'g',c:'kuehl'},
    {n:'Blattspinat, TK',q:150,u:'g',c:'tk'},
    {n:'Quark',q:100,u:'g',c:'kuehl'},
    {n:'Feta',q:20,u:'g',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kirschtomaten',q:100,u:'g',c:'gemuese'},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C Ober- und Unterhitze vorheizen. Spinat auftauen lassen und kräftig ausdrücken. Zwiebel und Knoblauch fein würfeln und in der Hälfte des Öls 2 Minuten dünsten.',
    'Spinat, Zwiebel, Quark, zerbröselten Feta, Ei und Muskat verrühren.',
    'Strudelblätter auf einem Tuch auslegen, mit dem restlichen Öl bestreichen, die Füllung auf das untere Drittel geben und einrollen. Mit der Naht nach unten 25 bis 30 Minuten goldbraun backen, bis die Füllung gestockt ist.',
    'Kinderportion ungesalzen abschneiden. Erwachsene mit Pfeffer würzen und mit geviertelten Kirschtomaten servieren.'
  ],
  kidName:'Mini-Strudel',
  kid:'Strudel in schmale Streifen schneiden und die harte Teigkante entfernen. Kirschtomaten längs vierteln.',
  leftover:'Strudel aufgebacken · 10 Min. – Reste bei 180 °C im Ofen vollständig durchwärmen und mit Joghurtdip servieren.',
  tipp:'Strudelteig trocknet schnell aus, daher die Blätter bis zur Verwendung unter einem feuchten Tuch lassen.'
},
{
  id:'at-kaeferbohnensalat', name:'Steirischer Käferbohnensalat · Bohnen mit Kürbiskernöl, Ei, roter Zwiebel und Vollkornbrot', cuisine:'Österreich', flag:'🇦🇹',
  protein:'huelsen', base:null, time:{a:12,c:10}, devices:[['topf']], method:'Topf für die Eier',
  allergens:['gluten','ei'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Rote Zwiebel','Salat','Kirschtomaten'], season:[],
  ing:[
    {n:'Käferbohnen oder Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Feldsalat',q:60,u:'g',c:'gemuese'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Kürbiskernöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Eier 10 Minuten hart kochen, kalt abschrecken und schälen.',
    'Bohnen abspülen und abtropfen lassen. Rote Zwiebel sehr fein würfeln, Kirschtomaten vierteln und Feldsalat waschen.',
    'Bohnen mit Zwiebel, Essig und Kürbiskernöl mischen und 5 Minuten ziehen lassen, dann Salat und Tomaten unterheben und mit Eivierteln belegen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer und wenig Salz würzen und mit Vollkornbrot servieren.'
  ],
  kidName:'Mini-Käferbohnen',
  kid:'Bohnen gründlich zerdrücken und mit etwas Kürbiskernöl mischen, Ei hart gekocht klein schneiden. Kirschtomaten längs vierteln, Zwiebel und Salat weglassen.',
  leftover:'Bohnenaufstrich · 5 Min. – Bohnenreste mit etwas Quark pürieren und auf Vollkornbrot streichen.',
  tipp:'Käferbohnen gibt es im Glas oder getrocknet, Kidneybohnen sind ein guter Ersatz.'
},
{
  id:'at-ritschert', name:'Ritschert · steirischer Graupen-Bohnen-Eintopf mit Wurzelgemüse', cuisine:'Österreich', flag:'🇦🇹',
  protein:'huelsen', base:null, time:{a:15,c:45}, devices:[['topf','slowcooker']], method:'Ein Topf',
  allergens:['gluten','sellerie'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Sellerie','Lauch','Zwiebel'], season:[1,2,3,10,11,12],
  ing:[
    {n:'Gerstengraupen',q:50,u:'g',c:'vorrat'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:50,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.3,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:450,u:'ml',c:'vorrat'},
    {n:'Majoran, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und in Öl im großen Topf glasig dünsten. Graupen in einem Sieb abspülen, zugeben und kurz mitrühren.',
    'Mit Brühe aufgießen, Lorbeerblatt zugeben und zugedeckt 25 Minuten leise köcheln.',
    'Karotten, Sellerie und Lauch würfeln, mit den abgespülten Bohnen und Majoran zugeben und weitere 20 Minuten garen, bis Graupen und Gemüse weich sind und der Eintopf sämig ist.',
    'Lorbeerblatt entfernen. Kinderportion ungesalzen abnehmen, dann für die Erwachsenen mit Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mini-Ritschert',
  kid:'Eintopf dick lassen und Bohnen und Gemüse mit der Gabel zerdrücken. Ohne Salz und lauwarm servieren.',
  leftover:'Graupen-Bratlinge · 15 Min. – Dicke Reste mit Haferflocken und einem Ei binden, zu Talern formen und in der Pfanne vollständig durchbraten.',
  tipp:'Für die Erwachsenen einen Löffel Kürbiskernöl über den Teller geben, das ist typisch steirisch.'
},
{
  id:'at-linsen-knoedel', name:'Linsen mit Knödel · Wiener Rahmlinsen mit Wurzelgemüse und Vollkorn-Semmelknödeln', cuisine:'Österreich', flag:'🇦🇹',
  protein:'huelsen', base:null, time:{a:25,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','ei','milch','sellerie'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Sellerie','Zwiebel'], season:[],
  ing:[
    {n:'Berglinsen oder Tellerlinsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Saure Sahne',q:30,u:'g',c:'kuehl'},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Brot in kleine Würfel schneiden, mit warmer Milch und verquirltem Ei mischen, 10 Minuten ziehen lassen und mit nassen Händen zu kleinen Knödeln formen.',
    'Zwiebel, Karotten und Sellerie fein würfeln, mit den abgespülten Linsen und der Brühe aufkochen und zugedeckt 25 Minuten weich köcheln.',
    'Knödel in leicht siedendem Wasser 15 Minuten gar ziehen lassen, bis sie innen fest sind.',
    'Saure Sahne unter die Linsen rühren. Kinderportion ohne Essig und Salz abnehmen, dann die Linsen für die Erwachsenen mit Essig, Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mini-Linsenknödel',
  kid:'Linsen grob zerdrücken und den Knödel in kleine, weiche Stücke teilen. Ohne Essig und Salz servieren.',
  leftover:'Geröstete Knödel · 10 Min. – Knödelreste in Scheiben schneiden, in der Pfanne mit einem Ei vollständig durchbraten und mit den Linsen servieren.',
  tipp:'Altbackenes Brot vom Vortag eignet sich am besten, frisches Brot macht die Knödel zu weich.'
},
{
  id:'at-eiernockerl', name:'Eiernockerl · Vollkornnockerl mit Ei, Erbsen und grünem Salat', cuisine:'Österreich', flag:'🇦🇹',
  protein:'ei', base:'nudeln', time:{a:7,c:17}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Erbsen','Salat','Kräuter'], season:[],
  ing:[
    {n:'Vollkorn-Spätzle, getrocknet',q:80,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Erbsen, TK',q:70,u:'g',c:'tk'},
    {n:'Römersalat',q:80,u:'g',c:'gemuese'},
    {n:'Schnittlauch, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nockerl nach Packungsangabe etwa 12 Minuten garen, Erbsen in den letzten 3 Minuten mitkochen und alles abgießen.',
    'Nockerl und Erbsen in zwei Dritteln des Öls in der Pfanne 2 Minuten anrösten.',
    'Eier verquirlen, darübergießen und unter Wenden 2 bis 3 Minuten braten, bis das Ei vollständig gestockt ist. Salat mit Essig und dem restlichen Öl anmachen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Muskat, Pfeffer, wenig Salz und Schnittlauch würzen.'
  ],
  kidName:'Mini-Eiernockerl',
  kid:'Ei vollständig stocken lassen und die Nockerl kurz schneiden. Erbsen leicht zerdrücken, Salat weglassen.',
  leftover:'Nockerl-Gemüse-Pfanne · 8 Min. – Reste mit Paprika und Zucchini in der Pfanne vollständig erhitzen.',
  tipp:'Mit Nockerln vom Vortag ist das Wiener Alltagsgericht in 10 Minuten fertig.'
}
);
