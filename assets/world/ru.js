/* Grün geplant · Russland · Top 15 */
RECIPES.push(
{
  id:'ru-borschtsch', name:'Borschtsch · Rote-Bete-Eintopf mit Weißkohl und weißen Bohnen', cuisine:'Russland', flag:'🇷🇺',
  protein:'huelsen', base:null, time:{a:15,c:30}, devices:[['topf']], method:'Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Bete','Weißkohl','Karotten','Kartoffeln','Zwiebel'], season:[8,9,10,11,12,1,2,3],
  ing:[
    {n:'Rote Bete, vorgegart',q:150,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotte würfeln, Kohl in feine Streifen schneiden und alles in Öl 5 Minuten andünsten.',
    'Kartoffeln würfeln, mit der Brühe zugeben und 15 Minuten köcheln.',
    'Rote Bete würfeln, mit den abgespülten Bohnen zugeben und weitere 10 Minuten köcheln, bis alles weich ist.',
    'Kinderportion ungesalzen abnehmen und etwas abkühlen lassen. Erwachsene mit Salz und Pfeffer abschmecken und mit Joghurt und Brot servieren.'
  ],
  kidName:'Mini-Borschtsch',
  kid:'Gemüse sehr weich kochen und mit den Bohnen grob zerdrücken, ohne Salz und mit einem Klecks Joghurt lauwarm servieren. Rote Bete färbt stark, ein Lätzchen hilft.',
  leftover:'Borschtsch vom Vortag · 10 Min. – Eintopf vollständig erhitzen, aufgewärmt schmeckt er noch runder.',
  tipp:'Vorgegarte Rote Bete aus dem Kühlregal spart rund 40 Minuten Kochzeit.'
},
{
  id:'ru-schtschi', name:'Schtschi · Weißkohl-Eintopf mit Rindfleisch und Kartoffeln', cuisine:'Russland', flag:'🇷🇺',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:60}, devices:[['topf','slowcooker']], method:'Topf oder Slowcooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Weißkohl','Kartoffeln','Karotten','Tomaten','Zwiebel'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch in kleine Würfel schneiden, in Öl rundum anbraten, mit Wasser bedecken, Lorbeer zugeben und zugedeckt 35 Minuten leise köcheln.',
    'Kohl in Streifen und Kartoffeln in Würfel schneiden, Zwiebel und Karotte fein würfeln.',
    'Gemüse und Tomaten zugeben und weitere 25 Minuten köcheln, bis Fleisch und Kohl weich sind.',
    'Kinderportion ohne Salz abnehmen und das Lorbeerblatt entfernen. Erwachsene mit Salz, Pfeffer und Dill abschmecken.'
  ],
  kidName:'Kohl-Eintopf mild',
  kid:'Fleisch sehr fein zerzupfen, Kohl und Kartoffeln weich kochen und grob zerdrücken. Lorbeerblatt sicher entfernen und ohne Salz servieren.',
  leftover:'Schtschi vom Vortag · 10 Min. – Eintopf vollständig erhitzen, durchgezogen wird er noch aromatischer.',
  tipp:'Im Slowcooker auf niedriger Stufe 6 Stunden garen, dann wird das Fleisch besonders zart.'
},
{
  id:'ru-pelmeni', name:'Pelmeni · Teigtaschen mit Rinderfüllung und Dill-Joghurt', cuisine:'Russland', flag:'🇷🇺',
  protein:'fleisch', base:null, time:{a:45,c:10}, devices:[['topf']], method:'Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Weizenvollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Weizenmehl',q:40,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Beide Mehle mit lauwarmem Wasser und dem Öl zu einem glatten, festen Teig kneten und 15 Minuten abgedeckt ruhen lassen.',
    'Zwiebel sehr fein reiben und mit dem Hack und 1 EL Wasser zu einer saftigen Füllung mischen.',
    'Teig dünn ausrollen, Kreise von 6 cm ausstechen, je einen Teelöffel Füllung daraufgeben, zu Halbmonden falten und die Enden zusammendrücken.',
    'Pelmeni in siedendem Wasser garen, bis sie oben schwimmen, dann noch 4 Minuten ziehen lassen, damit die Füllung ganz durch ist.',
    'Kinderportion ohne Salz abnehmen und halbieren. Für die Erwachsenen Joghurt mit Dill und Salz verrühren und mit Gurkenscheiben dazu reichen.'
  ],
  kidName:'Mini-Pelmeni',
  kid:'Pelmeni halbieren und prüfen, dass die Füllung grau und durchgegart ist. Mit Joghurt ohne Salz und dünnen Gurkenstiften servieren.',
  leftover:'Gebratene Pelmeni · 10 Min. – übrige Pelmeni in wenig Öl von beiden Seiten goldbraun braten, bis sie vollständig heiß sind.',
  tipp:'Ungekochte Pelmeni auf einem bemehlten Brett einfrieren und später direkt aus dem Gefrierfach kochen.'
},
{
  id:'ru-bliny', name:'Bliny · Buchweizen-Pfannkuchen mit gebratenem Lachs und Dill-Joghurt', cuisine:'Russland', flag:'🇷🇺',
  protein:'fisch', base:null, time:{a:25,c:15}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','milch','ei','fisch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Gurke','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Buchweizenmehl',q:35,u:'g',c:'vorrat'},
    {n:'Weizenvollkornmehl',q:25,u:'g',c:'vorrat'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Lachsfilet',q:120,u:'g',c:'fisch'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Beide Mehle mit Milch und Ei glatt verrühren und 10 Minuten quellen lassen.',
    'Lachs in wenig Öl bei mittlerer Hitze je Seite 4 Minuten braten, bis er innen durchgehend hell und gar ist, dann zerpflücken.',
    'Pfanne dünn mit Öl auspinseln und aus dem Teig kleine Bliny von etwa 10 cm backen, je Seite 1 bis 2 Minuten.',
    'Joghurt mit Dill verrühren, Gurke in feine Scheiben schneiden.',
    'Kinderportion ohne Salz abnehmen und den Lachs nochmals auf Gräten prüfen. Erwachsene mit Zitrone, Salz und Pfeffer würzen und die Bliny mit Lachs, Joghurt und Gurke füllen.'
  ],
  kidName:'Mini-Bliny mit Lachs',
  kid:'Lachs vollständig durchgaren, sorgfältig entgräten und fein zerpflücken. Bliny in Streifen schneiden und mit ungewürztem Joghurt und Gurkenstiften anbieten.',
  leftover:'Bliny-Röllchen · 5 Min. – übrige Bliny mit Joghurt und Gemüse füllen, aufrollen und in der Pfanne kurz erwärmen.',
  tipp:'Der Teig lässt sich am Vorabend anrühren und hält abgedeckt im Kühlschrank bis zum nächsten Tag.'
},
{
  id:'ru-bef-stroganow', name:'Bef Stroganow · Rinderstreifen in Pilz-Joghurt-Sauce mit Buchweizen', cuisine:'Russland', flag:'🇷🇺',
  protein:'fleisch', base:null, time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Pilze','Zwiebel','Gurke'], season:[],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Buchweizen',q:70,u:'g',c:'vorrat'},
    {n:'Champignons',q:120,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:80,u:'ml',c:'vorrat'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Buchweizen abspülen und in der doppelten Menge Wasser zugedeckt 12 bis 14 Minuten weich garen.',
    'Zwiebel in Streifen und Pilze in Scheiben schneiden. Fleisch in heißem Öl 2 Minuten scharf anbraten und herausnehmen.',
    'Zwiebel und Pilze in der Pfanne 5 Minuten braten, mit Brühe ablöschen, Fleisch zurückgeben und 2 Minuten ziehen lassen.',
    'Pfanne vom Herd nehmen und den Joghurt unterrühren, damit er nicht ausflockt.',
    'Kinderportion ohne Senf und Salz abnehmen. Erwachsene mit Senf, Paprika, Salz und Pfeffer abschmecken und mit Buchweizen und Gurkenscheiben servieren.'
  ],
  kidName:'Mildes Stroganow',
  kid:'Rindfleisch sehr fein schneiden, Pilze klein hacken und mit Buchweizen und Sauce mischen. Ohne Senf und Salz servieren.',
  leftover:'Buchweizen-Pfanne · 8 Min. – Reste mit etwas Wasser in der Pfanne vollständig erhitzen und mit Gurke servieren.',
  tipp:'Gerösteten Buchweizen (Kascha) kaufen, er schmeckt nussiger und bleibt schön körnig.'
},
{
  id:'ru-kotlety', name:'Kotlety · Hähnchen-Frikadellen mit Kartoffelpüree und Gurkensalat', cuisine:'Russland', flag:'🇷🇺',
  protein:'gefluegel', base:'kartoffeln', time:{a:20,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Karotten','Gurke','Zwiebel'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in Wasser 15 bis 18 Minuten weich kochen.',
    'Hähnchen sehr fein hacken, mit fein geriebener Karotte und Zwiebel, Ei und Haferflocken mischen und zu kleinen, flachen Frikadellen formen.',
    'Frikadellen in wenig Öl bei mittlerer Hitze je Seite 5 bis 6 Minuten braten, bis sie innen nicht mehr rosa sind.',
    'Kartoffeln abgießen und mit warmer Milch zu Püree stampfen. Gurke in Scheiben schneiden und mit Dill mischen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene Püree und Gurkensalat mit Salz und Pfeffer würzen.'
  ],
  kidName:'Kleine Hähnchen-Kotlety',
  kid:'Frikadellen klein und flach formen, damit sie sicher durchgaren, und in Stücke teilen. Püree ungesalzen, Gurke in dünnen Stiften dazu.',
  leftover:'Kotlety-Brot · 5 Min. – übrige Frikadellen vollständig erhitzen und mit Gurke auf Vollkornbrot legen.',
  tipp:'Die Frikadellen gelingen auch im Ofen: bei 200 °C etwa 18 Minuten auf Backpapier backen.'
},
{
  id:'ru-golubzy', name:'Golubzy · Kohlrouladen mit Hack und Vollkornreis in Tomatensauce', cuisine:'Russland', flag:'🇷🇺',
  protein:'fleisch', base:'reis', time:{a:30,c:40}, devices:[['topf']], method:'Topf',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Weißkohl','Karotten','Zwiebel','Tomaten'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Weißkohl',q:200,u:'g',c:'gemuese'},
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis 15 Minuten vorkochen und abgießen. Große Kohlblätter im selben Topf in kochendem Wasser 3 bis 4 Minuten blanchieren, bis sie biegsam sind.',
    'Zwiebel und Karotte fein würfeln, die Hälfte in Öl andünsten und mit Hack und Reis mischen.',
    'Je einen Esslöffel Füllung in ein Kohlblatt wickeln, die Rouladen dicht in den Topf legen, restliches Gemüse und passierte Tomaten mit etwas Wasser darübergeben.',
    'Zugedeckt 35 bis 40 Minuten leise schmoren, bis der Kohl weich und die Füllung vollständig durchgegart ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene die Sauce mit Paprika, Salz und Pfeffer abschmecken und mit Joghurt servieren.'
  ],
  kidName:'Mini-Golubzy',
  kid:'Rouladen in kleine Stücke schneiden, harte Blattrippen entfernen und mit der Sauce etwas zerdrücken. Ohne Salz und mit einem Klecks Joghurt.',
  leftover:'Golubzy-Auflauf · 20 Min. – übrige Rouladen mit Sauce in eine Form legen und bei 180 °C im Ofen vollständig durcherhitzen.',
  tipp:'Für Lenivye Golubzy den Kohl fein schneiden und mit Hack und Reis zu Bällchen formen, das spart das Wickeln.'
},
{
  id:'ru-makarony-po-flotski', name:'Makarony po-flotski · Vollkornnudeln mit Hack, Zwiebeln und Karotten', cuisine:'Russland', flag:'🇷🇺',
  protein:'fleisch', base:'nudeln', time:{a:10,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Karotten','Erbsen'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln in ungesalzenem Wasser nach Packungsangabe bissfest kochen, die Erbsen in den letzten 3 Minuten mitgaren.',
    'Zwiebel fein würfeln, Karotte grob raspeln. Hack in Öl krümelig braten, bis es nicht mehr rosa ist, dann Zwiebel und Karotte 5 Minuten mitbraten.',
    'Nudeln und Erbsen abgießen, mit etwas Kochwasser in die Pfanne geben und gut vermischen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Paprika, Salz, Pfeffer und Dill würzen.'
  ],
  kidName:'Flotten-Nudeln mild',
  kid:'Hack sehr fein krümeln und vollständig durchbraten, Nudeln klein schneiden und Erbsen leicht andrücken. Ohne Salz servieren.',
  leftover:'Nudel-Ei-Pfanne · 8 Min. – Reste in der Pfanne erhitzen und ein verquirltes Ei darin stocken lassen, bis es ganz fest ist.',
  tipp:'Kurze Vollkorn-Röhrennudeln oder Hörnchen nehmen, daran bleibt das Hack gut hängen.'
},
{
  id:'ru-grechka-s-gribami', name:'Grechka s gribami · Buchweizen mit Pilzen, Zwiebeln und Ei', cuisine:'Russland', flag:'🇷🇺',
  protein:'ei', base:null, time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Zwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Buchweizen',q:70,u:'g',c:'vorrat'},
    {n:'Champignons',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Buchweizen abspülen und in der doppelten Menge Wasser zugedeckt 12 bis 15 Minuten garen, bis das Wasser aufgenommen ist. Eier parallel 10 Minuten hart kochen.',
    'Zwiebel würfeln, Pilze in Scheiben schneiden und in Öl 6 bis 8 Minuten goldbraun braten, zum Schluss den Spinat zusammenfallen lassen.',
    'Buchweizen unter die Pilze mischen, Eier pellen und vierteln.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Dill würzen.'
  ],
  kidName:'Buchweizen-Pilz-Teller',
  kid:'Pilze fein hacken, Ei vollständig hart kochen und klein schneiden, Buchweizen mit etwas Wasser weich halten. Ohne Salz servieren.',
  leftover:'Buchweizen-Bratlinge · 15 Min. – Reste mit einem Ei vermengen, flache Bratlinge formen und in wenig Öl vollständig durchbraten.',
  tipp:'Buchweizen vor dem Kochen 2 Minuten trocken im Topf rösten, dann wird er besonders aromatisch.'
},
{
  id:'ru-salat-olivier', name:'Salat Olivier · lauwarmer Kartoffel-Gemüse-Salat mit Ei und Joghurt-Dressing', cuisine:'Russland', flag:'🇷🇺',
  protein:'ei', base:'kartoffeln', time:{a:10,c:14}, devices:[['topf']], method:'Topf',
  allergens:['ei','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Erbsen','Gurke'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gewürzgurke',q:1,u:'Stk.',c:'vorrat'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln und Karotten schälen, in 1-cm-Würfel schneiden und mit den Eiern in Wasser 12 Minuten garen, die Erbsen in den letzten 2 Minuten zugeben.',
    'Abgießen, Eier kalt abschrecken, pellen und würfeln. Frische Gurke und Gewürzgurke getrennt klein würfeln.',
    'Joghurt mit Dill verrühren und mit Gemüse, Ei und frischer Gurke locker vermengen.',
    'Kinderportion ohne Gewürzgurke abnehmen. Für die Erwachsenen Gewürzgurke, Senf, Salz und Pfeffer untermischen.'
  ],
  kidName:'Mini-Olivier',
  kid:'Gemüse weich garen und die Erbsen leicht zerdrücken, das vollständig hart gekochte Ei klein schneiden. Ohne Gewürzgurke, Senf und Salz servieren.',
  leftover:'Olivier-Brot · 5 Min. – übrigen Salat gekühlt am nächsten Tag auf Vollkornbrot essen.',
  tipp:'Joghurt statt Mayonnaise spart viel Fett, ein halber Teelöffel Senf bringt den typischen Geschmack zurück.'
},
{
  id:'ru-gorochowyj-sup', name:'Gorochowyj sup · Erbseneintopf mit Kartoffeln und Karotten', cuisine:'Russland', flag:'🇷🇺',
  protein:'huelsen', base:null, time:{a:15,c:45}, devices:[['topf','slowcooker']], method:'Topf oder Slowcooker',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Lauch','Zwiebel'], season:[],
  ing:[
    {n:'Gelbe Schälerbsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Schälerbsen gründlich spülen und mit Brühe und Lorbeer 25 Minuten köcheln, aufsteigenden Schaum abschöpfen.',
    'Zwiebel, Karotte und Lauch würfeln und in Öl 5 Minuten andünsten. Kartoffeln würfeln.',
    'Gemüse und Kartoffeln zu den Erbsen geben und weitere 20 Minuten garen, bis die Erbsen zerfallen und der Eintopf sämig ist.',
    'Kinderportion ohne Salz abnehmen und das Lorbeerblatt entfernen. Erwachsene mit Paprika, Salz und Pfeffer abschmecken und mit Brot servieren.'
  ],
  kidName:'Erbsenbrei mild',
  kid:'Eintopf für das Kind fein pürieren oder gründlich zerdrücken, Lorbeerblatt entfernen und ohne Salz lauwarm servieren.',
  leftover:'Erbsen-Dip · 5 Min. – dick eingekochte Reste vollständig erhitzen, glatt pürieren und als warmen Aufstrich zu Brot essen.',
  tipp:'Über Nacht eingeweichte Schälerbsen garen etwa 10 Minuten schneller.'
},
{
  id:'ru-wareniki', name:'Wareniki · Teigtaschen mit Kartoffel-Quark-Füllung und Röstzwiebeln', cuisine:'Russland', flag:'🇷🇺',
  protein:'milch', base:'kartoffeln', time:{a:45,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Tomaten','Gurke'], season:[7,8,9],
  ing:[
    {n:'Weizenvollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Weizenmehl',q:40,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:150,u:'g',c:'gemuese'},
    {n:'Magerquark',q:80,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Beide Mehle mit lauwarmem Wasser und 1 TL Öl zu einem glatten Teig kneten und 20 Minuten abgedeckt ruhen lassen. Kartoffeln schälen und 15 Minuten weich kochen.',
    'Kartoffeln abgießen, zerstampfen und mit dem Quark verrühren. Zwiebel in Halbringe schneiden und im restlichen Öl 8 Minuten goldbraun braten.',
    'Teig dünn ausrollen, Kreise von 8 cm ausstechen, je einen Teelöffel Füllung daraufgeben, zu Halbmonden falten und die Ränder fest andrücken.',
    'Wareniki in siedendem Wasser 4 bis 5 Minuten garen, bis sie oben schwimmen. Tomaten und Gurke würfeln.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Röstzwiebeln, Dill-Joghurt, Salz und Pfeffer servieren und den Salat würzen.'
  ],
  kidName:'Mini-Wareniki',
  kid:'Wareniki halbieren und abkühlen lassen, die Füllung ist innen sehr heiß. Mit ungesalzenem Joghurt, fein gehackten Zwiebeln und Gurkenstiften anbieten.',
  leftover:'Gebratene Wareniki · 10 Min. – übrige Wareniki in wenig Öl von beiden Seiten anbraten, bis sie vollständig heiß sind.',
  tipp:'Eine doppelte Menge falten und ungekocht einfrieren, so ist ein zweites Abendessen schon vorbereitet.'
},
{
  id:'ru-ucha', name:'Ucha · klare Fischsuppe mit Kartoffeln, Karotten und Dill', cuisine:'Russland', flag:'🇷🇺',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:14}, devices:[['topf']], method:'Topf',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Lauch','Zwiebel'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in kleine Würfel, Karotte in dünne Scheiben, Zwiebel und Lauch in feine Ringe schneiden.',
    'Gemüse mit Brühe und Lorbeer aufkochen und 9 Minuten köcheln, bis die Kartoffeln fast weich sind.',
    'Fisch in mundgerechte Stücke schneiden, in die Suppe legen und bei kleiner Hitze 5 Minuten gar ziehen lassen, bis er innen weiß ist.',
    'Kinderportion ohne Salz abnehmen, Lorbeer entfernen und den Fisch auf Gräten prüfen. Erwachsene mit Salz, Pfeffer und reichlich Dill würzen und mit Brot servieren.'
  ],
  kidName:'Mini-Ucha',
  kid:'Fisch vollständig garen, sorgfältig entgräten und zerpflücken, Kartoffeln und Karotten mit der Gabel zerdrücken. Ohne Salz lauwarm servieren.',
  leftover:'Fisch-Kartoffel-Pfanne · 8 Min. – Fisch und Gemüse abtropfen lassen und in wenig Öl in der Pfanne vollständig erhitzen.',
  tipp:'Klassisch kommen zwei oder drei Fischsorten in den Topf, das macht die Brühe kräftiger.'
},
{
  id:'ru-ryba-po-moskowski', name:'Ryba po-moskowski · Ofenfisch mit Kartoffeln, Pilzen und Joghurt-Käse-Haube', cuisine:'Russland', flag:'🇷🇺',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:33}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['fisch','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Pilze','Brokkoli','Zwiebel'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Champignons',q:100,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in dünne Scheiben schneiden, mit der Hälfte des Öls in einer Form verteilen und 15 Minuten vorbacken.',
    'Zwiebel in Ringe und Pilze in Scheiben schneiden, Brokkoli in kleine Röschen teilen und alles mit dem restlichen Öl auf die Kartoffeln geben.',
    'Fisch obenauf legen, mit Joghurt bestreichen, Käse darüberreiben und 15 bis 18 Minuten backen, bis der Fisch innen weiß ist und sich leicht zerteilen lässt.',
    'Kinderportion ohne Salz abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz, Pfeffer und Dill würzen.'
  ],
  kidName:'Mini-Ofenfisch',
  kid:'Fisch vollständig durchgaren, entgräten und zerpflücken, Kartoffeln und Brokkoli weich backen und klein schneiden. Ohne Salz servieren.',
  leftover:'Fisch-Kartoffel-Auflauf · 15 Min. – Reste in einer kleinen Form bei 180 °C im Ofen vollständig durcherhitzen.',
  tipp:'Klassisch kommen noch Scheiben von hart gekochtem Ei dazu, sie liefern zusätzliches Eiweiß.'
},
{
  id:'ru-ryba-pod-marinadom', name:'Ryba pod marinadom · gebratener Fisch unter Karotten-Zwiebel-Gemüse', cuisine:'Russland', flag:'🇷🇺',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Zwiebel','Tomaten','Kartoffeln'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln halbieren und in Wasser 18 bis 20 Minuten weich kochen.',
    'Karotten grob raspeln, Zwiebel in Halbringe schneiden und in der Hälfte des Öls 8 Minuten weich dünsten. Tomatenmark, Lorbeer und 4 EL Wasser zugeben und 5 Minuten schmoren, dann herausnehmen.',
    'Fisch im restlichen Öl bei mittlerer Hitze je Seite 3 bis 4 Minuten braten, bis er innen weiß ist.',
    'Kinderportion ohne Essig und Salz abnehmen und das Lorbeerblatt entfernen. Für die Erwachsenen das Gemüse mit Essig, Salz und Pfeffer abschmecken, über den Fisch geben und mit Dill bestreuen.'
  ],
  kidName:'Fisch mit Möhrengemüse',
  kid:'Fisch vollständig garen, entgräten und zerpflücken, das Karottengemüse weich schmoren und mit den Kartoffeln zerdrücken. Ohne Essig und Salz.',
  leftover:'Kalter Marinade-Fisch · 2 Min. – Reste über Nacht im Kühlschrank durchziehen lassen und am nächsten Tag kalt mit Brot essen.',
  tipp:'In Russland wird das Gericht gern am Vortag gekocht und kalt gegessen, dann zieht das Gemüse richtig durch.'
}
);
