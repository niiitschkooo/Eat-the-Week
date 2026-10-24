/* Grün geplant · Laos · Top 15 */
RECIPES.push(
{
  id:'la-laap-sin', name:'Laap Sin · lauwarmer Rinderhack-Kräutersalat mit Röstreis und Jasminreis', cuisine:'Laos', flag:'🇱🇦',
  protein:'fleisch', base:'reis', time:{a:12,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Salat','Gurke','Grüne Bohnen','Rote Zwiebel','Kräuter'], season:[6,7,8],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Minze, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Fischsauce',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    '1 EL Reis in der trockenen Pfanne 4 Minuten goldbraun rösten und im Mörser fein mahlen. Den restlichen Reis in der 1,5-fachen Menge Wasser 12 Minuten garen.',
    'Bohnen in 4 cm lange Stücke schneiden und in der Pfanne mit 3 EL Wasser zugedeckt 5 Minuten dünsten, dann herausnehmen. Gurke in Scheiben schneiden und Salat zupfen.',
    'Hack in der Pfanne mit 3 EL Wasser krümelig garen, bis es vollständig durch ist, und vom Herd nehmen.',
    'Kinderportion ungewürzt abnehmen. In den Rest Limettensaft, Fischsauce, fein geschnittene rote Zwiebel, Kräuter, Röstreis und nach Wunsch Chiliflocken mischen und mit Salat, Gemüse und Reis essen.'
  ],
  kidName:'Mildes Kräuter-Hack mit Reis',
  kid:'Hack fein zerdrücken und mit Reis und etwas Röstreis mischen, Bohnen weich gedünstet klein schneiden und Gurke geschält dazu. Ohne Fischsauce, Limette und Chili.',
  leftover:'Laap-Wrap · 5 Min. – Hack vollständig erhitzen und mit Salat und Reis in eine weiche Tortilla rollen.',
  tipp:'In Laos isst man Laap mit Klebreis, der vorher mindestens 4 Stunden einweichen muss.'
},
{
  id:'la-or-lam', name:'Or Lam · Luang-Prabang-Schmortopf mit Rind, Aubergine, Bohnen und Dill', cuisine:'Laos', flag:'🇱🇦',
  protein:'fleisch', base:'reis', time:{a:20,c:60}, devices:[['topf']], method:'Topf + Dämpfsieb',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Aubergine','Grüne Bohnen','Pilze','Babyspinat','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Klebreis',q:70,u:'g',c:'vorrat'},
    {n:'Aubergine',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:50,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Zitronengras',q:1,u:'Stange',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Fischsauce',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Klebreis mindestens 4 Stunden einweichen, abtropfen und in einem Sieb über kochendem Wasser zugedeckt 25 Minuten dämpfen.',
    'Fleisch in kleinen Würfeln mit der Brühe und dem angedrückten Zitronengras aufkochen und zugedeckt 35 Minuten leise köcheln.',
    'Aubergine in Würfeln, Bohnen in Stücken und Pilze zugeben und 15 Minuten garen, bis die Aubergine zerfällt und den Eintopf bindet. Spinat und Dill die letzten 2 Minuten mitgaren.',
    'Zitronengras entfernen und die Kinderportion ohne Fischsauce abnehmen. Erwachsene mit Fischsauce und nach Wunsch Pfeffer und Chili würzen.'
  ],
  kidName:'Weicher Rinder-Auberginen-Topf',
  kid:'Fleisch fein zerzupfen und mit der zerfallenen Aubergine mischen, Bohnen weich gegart klein schneiden. Klebreis zu kleinen flachen Bällchen drücken, alles ohne Fischsauce.',
  leftover:'Or-Lam-Reistopf · 10 Min. – Reste mit gegartem Reis vollständig aufkochen und als dicken Eintopf essen.',
  tipp:'Ohne eingeweichten Klebreis passt Jasminreis, dann entfällt die Wartezeit.'
},
{
  id:'la-ping-gai', name:'Ping Gai · Zitronengras-Hähnchen aus dem Ofen mit Jeow Mak Len und Vollkornreis', cuisine:'Laos', flag:'🇱🇦',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['ofen','airfryer'],['topf']], method:'Ofen oder Airfryer + Topf',
  allergens:['fisch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Zitronengras',q:1,u:'Stange',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Schwarzer Pfeffer, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Fischsauce',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser etwa 30 Minuten garen. Ofen auf 220 °C vorheizen (Airfryer 200 °C).',
    'Zitronengras und die Hälfte des Knoblauchs fein hacken, mit Öl verrühren und das Hähnchen damit einreiben. Mit Tomaten, Zwiebel und dem restlichen Knoblauch auf ein Blech legen.',
    'Alles 18 bis 22 Minuten backen, bis das Hähnchen durchgegart ist und die Tomaten weich und leicht gebräunt sind.',
    'Tomaten, Zwiebel und Knoblauch mit der Gabel zu einer groben Salsa zerdrücken und den Koriander untermischen.',
    'Kinderportion mit Hähnchen, Reis und etwas Salsa ungesalzen abnehmen. Erwachsene würzen die Salsa mit Fischsauce, Pfeffer und nach Wunsch Chili.'
  ],
  kidName:'Ofenhähnchen mit Tomatensoße',
  kid:'Hähnchen in kleine Stücke schneiden und mit Reis und der milden Tomatensalsa mischen, grobe Tomatenhaut entfernen.',
  leftover:'Hähnchen-Reis-Salat · 8 Min. – Hähnchen und Reis vollständig erhitzen und mit Gurke, Kräutern und Salsa lauwarm anrichten.',
  tipp:'Jeow Mak Len ist die tägliche Tomatensalsa in Laos und passt auch zu Fisch und Gemüse.'
},
{
  id:'la-khao-piak-sen', name:'Khao Piak Sen · sämige Hähnchen-Nudelsuppe mit Ingwer und goldenem Knoblauch', cuisine:'Laos', flag:'🇱🇦',
  protein:'gefluegel', base:'nudeln', time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Karotten','Chinakohl','Frühlingszwiebel'], season:[9,10,11],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Breite Reisnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:450,u:'ml',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Chinakohl',q:80,u:'g',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Fischsauce',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Knoblauch fein hacken und im Topf in Öl 2 Minuten goldgelb braten, dann herausnehmen. Die Brühe mit Ingwerscheiben im selben Topf aufkochen.',
    'Hähnchen im Ganzen hineinlegen und bei kleiner Hitze 15 Minuten gar ziehen lassen, dann herausnehmen und zerzupfen.',
    'Karotte in Scheiben und die Reisnudeln in die Brühe geben und nach Packung garen, bis die Suppe leicht sämig wird. Chinakohl in Streifen die letzten 3 Minuten mitgaren.',
    'Hähnchen zurückgeben, Ingwer entfernen und die Kinderschale ungesalzen abnehmen. Erwachsene mit Fischsauce, goldenem Knoblauch, Frühlingszwiebel und nach Wunsch Chili würzen.'
  ],
  kidName:'Milde Hähnchen-Nudelsuppe',
  kid:'Nudeln kurz schneiden, Hähnchen fein zerzupfen und Karotten weich gegart zerdrücken. Mit wenig lauwarmer, dicker Brühe anbieten.',
  leftover:'Hähnchen-Nudelpfanne · 8 Min. – Nudeln, Hähnchen und Gemüse abtropfen und in der Pfanne vollständig durchbraten.',
  tipp:'Die Nudeln direkt in der Brühe zu garen macht die Suppe typisch sämig.'
},
{
  id:'la-khao-soi', name:'Khao Soi Luang Prabang · Reisnudelsuppe mit Tomaten-Hack-Soße und Pak Choi', cuisine:'Laos', flag:'🇱🇦',
  protein:'fleisch', base:'nudeln', time:{a:15,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Pak Choi','Rote Zwiebel','Limette'], season:[7,8,9],
  ing:[
    {n:'Schweinehack, mager',q:100,u:'g',c:'fisch'},
    {n:'Breite Reisnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Pak Choi',q:80,u:'g',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch fein hacken und in der Pfanne in Öl 3 Minuten anbraten. Hack zugeben und krümelig braten, bis es durchgegart ist.',
    'Tomaten würfeln, zugeben und 10 Minuten zu einer dicken Soße einkochen.',
    'Brühe im Topf aufkochen, die Reisnudeln darin nach Packung garen und den Pak Choi in Streifen die letzten 2 Minuten mitgaren.',
    'Nudeln und Brühe auf Schalen verteilen und die Hacksoße obenauf geben.',
    'Kinderschale ungesalzen abnehmen. Erwachsene würzen ihre Soße mit Sojasauce und essen die Suppe mit Limette und nach Wunsch Chili.'
  ],
  kidName:'Nudeln mit Tomaten-Hack',
  kid:'Nudeln kurz schneiden und mit der milden Tomaten-Hack-Soße und wenig Brühe mischen. Pak Choi weich gegart klein schneiden.',
  leftover:'Tomaten-Hack-Reis · 8 Min. – Übrige Soße vollständig erhitzen und über Reis geben.',
  tipp:'Die Hacksoße lässt sich gut vorkochen und hält sich gekühlt 2 Tage.'
},
{
  id:'la-mok-pa', name:'Mok Pa · Kräuterfisch im Päckchen mit Zucchini, Tomaten und Vollkornreis', cuisine:'Laos', flag:'🇱🇦',
  protein:'fisch', base:'reis', time:{a:15,c:30}, devices:[['ofen'],['topf']], method:'Ofen + Topf',
  allergens:['fisch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zucchini','Kirschtomaten','Frühlingszwiebel','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:2,u:'EL',c:'gemuese'},
    {n:'Zitronengras',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Fischsauce',q:0.5,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser etwa 30 Minuten garen. Ofen auf 200 °C vorheizen.',
    'Zitronengras, Knoblauch und Frühlingszwiebel sehr fein hacken und mit dem Dill mischen. Zucchini in dünne Scheiben schneiden.',
    'Je Portion Zucchini und halbierte Kirschtomaten auf Backpapier legen, den Fisch daraufsetzen, die Kräutermischung darübergeben und das Papier zu Päckchen falten.',
    'Päckchen 15 bis 18 Minuten backen, bis der Fisch gerade durch ist.',
    'Kinderpäckchen ohne Fischsauce öffnen. Erwachsene beträufeln ihren Fisch mit Fischsauce und essen ihn mit Reis und nach Wunsch Chili.'
  ],
  kidName:'Kräuterfisch aus dem Päckchen',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Zucchini weich und Kirschtomaten geviertelt anbieten. Mit Reis und etwas Garsaft mischen.',
  leftover:'Fisch-Reis-Pfanne · 8 Min. – Reste mit dem Reis und Frühlingszwiebel in der Pfanne vollständig erhitzen.',
  tipp:'In Laos wird Mok Pa in Bananenblättern gedämpft, Backpapier hält Saft und Aroma genauso im Päckchen.'
},
{
  id:'la-ping-pa', name:'Ping Pa · Zitronengras-Lachs aus dem Ofen mit gedämpftem Gemüse und Klebreis', cuisine:'Laos', flag:'🇱🇦',
  protein:'fisch', base:'reis', time:{a:15,c:25}, devices:[['ofen'],['topf']], method:'Ofen + Topf mit Dämpfsieb',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Brokkoli','Karotten','Limette'], season:[6,7,8,9,10],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Klebreis',q:70,u:'g',c:'vorrat'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitronengras',q:1,u:'Stange',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Fischsauce',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Klebreis mindestens 4 Stunden einweichen, abtropfen und in einem Sieb über kochendem Wasser zugedeckt 25 Minuten dämpfen. Ofen auf 220 °C vorheizen.',
    'Zitronengras halbieren und andrücken, Lachs mit Öl bepinseln und auf die Zitronengrasstücke in eine Form legen. 12 bis 15 Minuten backen, bis der Fisch gerade durch ist.',
    'Brokkoliröschen und Karottenscheiben die letzten 8 Minuten mit dem Klebreis im Sieb weich dämpfen.',
    'Für den Dip Limettensaft mit fein gehacktem Knoblauch und 1 EL Wasser verrühren.',
    'Kinderportion ohne Dip abnehmen. Erwachsene mischen Fischsauce und nach Wunsch Chili in den Dip und tunken Fisch, Gemüse und Klebreis hinein.'
  ],
  kidName:'Ofenlachs mit Klebreisbällchen',
  kid:'Lachs entgräten und zerpflücken, Klebreis zu kleinen flachen Bällchen drücken und das Gemüse weich gedämpft in Stücken anbieten.',
  leftover:'Lachs-Reis-Pfanne · 8 Min. – Reste mit dem Klebreis in der Pfanne vollständig erhitzen, bis der Reis leicht knusprig wird.',
  tipp:'Klebreis am Morgen in Wasser legen, dann ist er am Abend bereit zum Dämpfen.'
},
{
  id:'la-khao-poon-pa', name:'Khao Poon Pa · rote Fisch-Kokos-Nudelsuppe mit Weißkohl und Minze', cuisine:'Laos', flag:'🇱🇦',
  protein:'fisch', base:'nudeln', time:{a:15,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Weißkohl','Grüne Bohnen','Kräuter'], season:[7,8,9,10],
  ing:[
    {n:'Seelachsfilet',q:130,u:'g',c:'fisch'},
    {n:'Reisnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Zitronengras',q:1,u:'Stange',c:'gemuese'},
    {n:'Minze, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rote Currypaste',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Fischsauce',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Brühe und Kokosmilch mit dem angedrückten Zitronengras aufkochen. Fisch zugeben, bei kleiner Hitze 8 Minuten gar ziehen lassen, herausnehmen und zerpflücken.',
    'Bohnen in kurzen Stücken und Weißkohl in sehr feinen Streifen 5 Minuten in der Suppe garen und den Fisch zurückgeben. Reisnudeln nach Packung garen.',
    'Zitronengras entfernen und die Nudeln auf Schalen verteilen.',
    'Kinderschale ohne Currypaste und Fischsauce abnehmen. In den Rest Currypaste und Fischsauce rühren, 2 Minuten köcheln, über die Nudeln geben und mit Minze bestreuen.'
  ],
  kidName:'Milde Kokos-Fischsuppe mit Nudeln',
  kid:'Fisch auf Gräten prüfen, Nudeln kurz schneiden und Kohl und Bohnen weich gegart klein schneiden. Mit wenig lauwarmer Suppe anbieten.',
  leftover:'Kokos-Fisch-Reis · 8 Min. – Übrige Suppe sämig einkochen und über Reis geben.',
  tipp:'Khao Poon wird in Laos zu Festen gekocht, oft auch mit Hähnchen statt Fisch.'
},
{
  id:'la-nam-khao', name:'Nam Khao · knuspriger Ofen-Reissalat mit Tofu, Kräutern und Erdnüssen', cuisine:'Laos', flag:'🇱🇦',
  protein:'tofu', base:'reis', time:{a:20,c:30}, devices:[['ofen'],['topf']], method:'Ofen + Topf + Pfanne',
  allergens:['soja','nuesse'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Salat','Gurke','Frühlingszwiebel','Kräuter'], season:[6,7,8],
  ing:[
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Minze, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erdnüsse, geröstet, ungesalzen',q:1,u:'EL',c:'vorrat'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen und etwas abkühlen lassen. Ofen auf 220 °C vorheizen.',
    'Ein Drittel des Reises für das Kind beiseitestellen. Den Rest mit Currypulver und der Hälfte des Öls mischen, dünn auf einem Blech mit Backpapier verteilen und 20 bis 25 Minuten knusprig backen.',
    'Tofu in kleine Würfel schneiden und im restlichen Öl in der Pfanne 6 Minuten goldbraun braten. Salat in Streifen, Gurke in Scheiben und Frühlingszwiebel in Ringe schneiden.',
    'Knusperreis grob zerbrechen und mit Tofu, Frühlingszwiebel und Minze mischen.',
    'Kinderportion aus weichem Reis, Tofu und Gurke ungesalzen anrichten. Erwachsene würzen den Knusperreis mit Limettensaft, Salz, gehackten Erdnüssen und nach Wunsch Chili und essen ihn in Salatblättern.'
  ],
  kidName:'Weicher Tofu-Reis',
  kid:'Weichen Reis mit zerbröseltem Tofu und geschälter Gurke mischen. Harte Knusperstücke und ganze Erdnüsse weglassen.',
  leftover:'Knusperreis-Pfanne · 8 Min. – Übrigen Knusperreis mit Gemüse und einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Klassisch werden Reisbällchen frittiert, auf dem Blech wird der Reis mit einem Bruchteil des Öls knusprig.'
},
{
  id:'la-mok-het', name:'Mok Het · Pilz-Kräuter-Förmchen mit Ei aus dem Ofen und Klebreis', cuisine:'Laos', flag:'🇱🇦',
  protein:'ei', base:'reis', time:{a:15,c:25}, devices:[['ofen'],['topf']], method:'Ofen + Topf mit Dämpfsieb',
  allergens:['ei','soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Babyspinat','Frühlingszwiebel','Kräuter'], season:[9,10],
  ing:[
    {n:'Champignons oder Shiitake',q:150,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Klebreis',q:70,u:'g',c:'vorrat'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Zitronengras',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Klebreis mindestens 4 Stunden einweichen, abtropfen und in einem Sieb über kochendem Wasser zugedeckt 25 Minuten dämpfen. Ofen auf 200 °C vorheizen.',
    'Pilze in Scheiben schneiden, Zitronengras, Knoblauch und Frühlingszwiebel fein hacken und mit Spinat und Dill mischen.',
    'Eier verquirlen, unter die Pilzmischung rühren und in ofenfeste Förmchen füllen. Mit Backpapier abdecken und 20 bis 25 Minuten backen, bis das Ei vollständig gestockt ist.',
    'Kinderförmchen ohne Sojasauce servieren. Erwachsene beträufeln ihre Förmchen mit Sojasauce und essen sie mit Klebreis und nach Wunsch Chili.'
  ],
  kidName:'Pilz-Ei-Förmchen',
  kid:'Ei vollständig stocken lassen, Pilze klein schneiden und mit Klebreis in kleinen flachgedrückten Bällchen anbieten. Ohne Sojasauce.',
  leftover:'Pilz-Reis-Pfanne · 8 Min. – Reste mit dem Klebreis in der Pfanne vollständig durchbraten.',
  tipp:'Ohne eingeweichten Klebreis passt Jasminreis, der in 12 Minuten gar ist.'
},
{
  id:'la-jeow-mak-keua', name:'Jeow Mak Keua · rauchiger Auberginen-Dip mit Eiern, Gemüse und Vollkornreis', cuisine:'Laos', flag:'🇱🇦',
  protein:'ei', base:'reis', time:{a:15,c:30}, devices:[['ofen'],['topf']], method:'Ofen + Topf',
  allergens:['ei','soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Aubergine','Grüne Bohnen','Karotten','Frühlingszwiebel'], season:[7,8,9],
  ing:[
    {n:'Aubergine',q:0.75,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Grüne Bohnen',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser etwa 30 Minuten garen. Ofen auf 220 °C vorheizen, Aubergine mehrmals einstechen und mit der ungeschälten Knoblauchzehe 25 Minuten rösten, bis sie ganz weich ist.',
    'Eier 9 Minuten hart kochen, abschrecken und pellen. Bohnen und Karotte in Stifte schneiden und die letzten 6 Minuten im Eierwasser weich garen.',
    'Auberginenfleisch aus der Schale kratzen und mit dem ausgedrückten Knoblauch, Frühlingszwiebel und Koriander mit der Gabel zu einem groben Dip zerdrücken.',
    'Kinderportion abnehmen. Erwachsene würzen den Dip mit Sojasauce und nach Wunsch gerösteter Chili und tunken Gemüse, Ei und Reis hinein.'
  ],
  kidName:'Auberginenmus mit Ei',
  kid:'Auberginenmus mit Reis mischen, hart gekochtes Ei klein schneiden und die Gemüsestifte sehr weich garen. Ohne Sojasauce.',
  leftover:'Auberginen-Nudeln · 10 Min. – Übrigen Dip mit etwas Wasser erhitzen und unter gegarte Vollkornnudeln mischen.',
  tipp:'Je dunkler die Auberginenschale im Ofen wird, desto rauchiger schmeckt der Dip.'
},
{
  id:'la-khao-jee', name:'Khao Jee · Vollkorn-Baguette mit Zitronengras-Tofu, Gurke und Tomatensalsa', cuisine:'Laos', flag:'🇱🇦',
  protein:'tofu', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','soja'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke','Karotten','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Vollkorn-Baguette',q:100,u:'g',c:'brot'},
    {n:'Tofu, natur',q:100,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitronengras',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zitronengras sehr fein hacken. Tofu in Scheiben schneiden und mit dem Zitronengras in Öl pro Seite 3 Minuten goldbraun braten.',
    'Tomate fein würfeln und mit Koriander zu einer Salsa mischen. Karotte raspeln und Gurke in Scheiben schneiden.',
    'Baguette in der trockenen Pfanne 2 Minuten anrösten, aufschneiden und mit Tofu, Gemüse und Salsa füllen.',
    'Kinderportion ohne Sojasauce abnehmen. Erwachsene beträufeln ihren Tofu mit Sojasauce und geben nach Wunsch Chili zur Salsa.'
  ],
  kidName:'Tofu-Brot mit Tomate',
  kid:'Tofu in kleine Würfel schneiden, dazu weiche Baguettemitte ohne Kruste, geschälte Gurke und fein geraspelte Karotte. Ohne Sojasauce.',
  leftover:'Tofu-Salsa-Reis · 8 Min. – Übrigen Tofu in der Pfanne vollständig erhitzen und mit der Salsa über Reis geben.',
  tipp:'Khao Jee ist in Laos ein beliebtes Straßenfrühstück und wird mit allem belegt, was gerade da ist.'
},
{
  id:'la-sup-phak', name:'Sup Phak · gedämpftes Gemüse mit Sesam-Knoblauch-Würze, Eiern und Jasminreis', cuisine:'Laos', flag:'🇱🇦',
  protein:'ei', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','sesam','soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Brokkoli','Grüne Bohnen','Chinakohl','Pilze','Frühlingszwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Chinakohl',q:60,u:'g',c:'gemuese'},
    {n:'Champignons',q:50,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Sesam',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen. Eier in einem zweiten Topf 9 Minuten hart kochen, abschrecken und pellen.',
    'Sesam in der trockenen Pfanne 2 Minuten goldbraun rösten und mit dem Knoblauch im Mörser grob zerstoßen.',
    'Brokkoli in Röschen, Bohnen in Stücken, Chinakohl in Streifen und Pilze in Scheiben im Sieb über dem Eierwasser 6 bis 8 Minuten weich dämpfen.',
    'Kinderportion mit Gemüse, Ei und Reis ungewürzt abnehmen. Das übrige Gemüse mit Sesampaste, Sojasauce, Frühlingszwiebel und nach Wunsch Chili mischen.'
  ],
  kidName:'Gedämpftes Gemüse mit Ei',
  kid:'Gemüse sehr weich dämpfen und klein schneiden, hart gekochtes Ei in Stücken dazu. Sesam nur fein gemahlen, ohne Sojasauce.',
  leftover:'Gemüse-Reis-Pfanne · 8 Min. – Gemüse und Reis mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'In Luang Prabang ist Sup Phak eine klassische Beilage, mit Ei und Reis wird daraus eine volle Mahlzeit.'
},
{
  id:'la-khua-mee', name:'Khua Mee · gebratene Vollkorn-Reisnudeln mit Ei, Weißkohl und Kräutern', cuisine:'Laos', flag:'🇱🇦',
  protein:'ei', base:'nudeln', time:{a:12,c:8}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei','soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Karotten','Frühlingszwiebel','Kräuter'], season:[9,10,11],
  ing:[
    {n:'Vollkorn-Reisnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Mungbohnensprossen',q:50,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Koriandergrün',q:1,u:'EL',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reisnudeln nach Packung 5 bis 6 Minuten garen, abgießen und kalt abspülen. Weißkohl und Karotte in feine Streifen schneiden.',
    'Kohl und Karotte in Öl 4 Minuten braten und an den Rand schieben. Eier verquirlen, in die Mitte geben und unter Rühren vollständig stocken lassen.',
    'Nudeln und Sprossen zugeben und 2 Minuten mitbraten.',
    'Kinderportion ohne Sojasauce abnehmen. Erwachsene mit Sojasauce, Frühlingszwiebelringen, Koriander und nach Wunsch Chili würzen.'
  ],
  kidName:'Nudeln mit Rührei und Kohl',
  kid:'Nudeln kurz schneiden, Rührei fein zerteilen und den Kohl weich braten. Sprossen weglassen, ohne Sojasauce.',
  leftover:'Nudelsuppe · 10 Min. – Reste in heißer salzarmer Brühe vollständig erhitzen und mit Kräutern essen.',
  tipp:'In Laos wird Khua Mee leicht süß gewürzt, hier sorgt der gebratene Kohl für milde Süße.'
},
{
  id:'la-kaeng-no-mai', name:'Kaeng No Mai · Bambussprossen-Eintopf mit Kürbis, Pilzen, Tofu und Vollkornreis', cuisine:'Laos', flag:'🇱🇦',
  protein:'tofu', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Bambussprossen','Kürbis','Pilze','Babyspinat','Kräuter'], season:[9,10,11],
  ing:[
    {n:'Bambussprossen (Dose, abgetropft)',q:80,u:'g',c:'vorrat'},
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:100,u:'g',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:60,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Zitronengras',q:1,u:'Stange',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser etwa 30 Minuten garen. Bambussprossen kalt abspülen und in Streifen schneiden.',
    'Brühe mit dem angedrückten Zitronengras aufkochen. Kürbis in Würfeln, Bambus und Pilze zugeben und 12 Minuten köcheln, bis der Kürbis weich ist.',
    'Tofuwürfel und Spinat zugeben und 3 Minuten ziehen lassen, das Zitronengras entfernen und den Dill einrühren.',
    'Kinderportion abnehmen. Erwachsene mit Sojasauce und nach Wunsch Chili abschmecken und mit Reis essen.'
  ],
  kidName:'Milder Kürbis-Tofu-Eintopf',
  kid:'Kürbis zerdrücken, Tofu und Pilze klein schneiden und mit Reis und wenig Sud mischen. Bambusstreifen sehr fein hacken oder weglassen.',
  leftover:'Kürbis-Reis-Topf · 8 Min. – Reste mit dem Reis vollständig aufkochen und als dicken Eintopf essen.',
  tipp:'Bambussprossen aus der Dose vorher gut abspülen, dann verlieren sie den Dosengeschmack.'
}
);
