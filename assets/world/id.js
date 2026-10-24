/* Grün geplant · Indonesien · Top 15 */
RECIPES.push(
{
  id:'id-nasi-goreng', name:'Nasi Goreng · gebratener Vollkornreis mit Gemüse und Spiegelei', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'ei', base:'reis', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Erbsen','Weißkohl','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Weißkohl',q:60,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kecap Manis (süße Sojasauce)',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen und offen ausdampfen lassen, am besten schon am Vortag.',
    'Karotten fein würfeln, Kohl in feine Streifen schneiden und Knoblauch hacken. Alles in Öl 5 Minuten bei mittlerer Hitze braten, Erbsen 2 Minuten mitgaren.',
    'Reis zugeben und 4 Minuten unter Wenden braten. Daneben die Eier als Spiegeleier braten, bis Eiweiß und Eigelb fest sind.',
    'Kinderportion ohne Kecap Manis abnehmen. Rest mit Kecap Manis und Frühlingszwiebelringen mischen, Erwachsene nach Wunsch mit Sambal und Salz nachwürzen.'
  ],
  kidName:'Mini-Nasi-Goreng',
  kid:'Spiegelei vollständig durchbraten und klein schneiden, Erbsen leicht zerdrücken. Reis ohne Kecap Manis und Sambal servieren.',
  leftover:'Reis-Omelett · 10 Min. – Reste in verquirlte Eier geben und in der Pfanne vollständig stocken lassen.',
  tipp:'Reis vom Vortag klebt nicht und wird in der Pfanne schön locker.'
},
{
  id:'id-mie-goreng', name:'Mie Goreng · gebratene Vollkornnudeln mit Hähnchen und Pak Choi', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'gefluegel', base:'nudeln', time:{a:12,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Pak Choi','Karotten','Weißkohl'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Pak Choi',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:50,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kecap Manis (süße Sojasauce)',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornnudeln nach Packungsangabe etwa 9 Minuten bissfest kochen und abgießen.',
    'Hähnchen in dünne Streifen schneiden und in Öl 4 Minuten rundum braten, bis es innen nicht mehr rosa ist.',
    'Karotten in feine Stifte, Kohl und Pak Choi in Streifen schneiden und mit dem Knoblauch 4 Minuten mitbraten. Nudeln untermischen.',
    'Kinderportion ohne Sauce abnehmen. Rest mit Kecap Manis und Sojasauce schwenken, Erwachsene nach Wunsch mit Chili würzen.'
  ],
  kidName:'Kinder-Mie',
  kid:'Nudeln in kurze Stücke schneiden, Hähnchen fein zerzupfen und Pak Choi weich garen. Ohne Sojasauce und Chili servieren.',
  leftover:'Nudel-Omelett · 10 Min. – Reste mit zwei verquirlten Eiern in der Pfanne vollständig stocken lassen.',
  tipp:'Gemüse vorab in feine Streifen schneiden, dann ist die Pfanne in wenigen Minuten fertig.'
},
{
  id:'id-gado-gado', name:'Gado-Gado · warmes Gemüse mit Tofu, Ei und dünner Erdnusssoße', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'tofu', base:'kartoffeln', time:{a:20,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja','ei','nuesse'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Grüne Bohnen','Karotten','Weißkohl','Gurke'], season:[7,8,9],
  ing:[
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Tofu, natur',q:100,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:40,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Erdnussmus, ungesüßt',q:1,u:'EL',c:'vorrat'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln würfeln und in Wasser 15 Minuten weich kochen. Das Ei 9 Minuten mitkochen, bis es hart ist.',
    'Nach 8 Minuten Bohnenstücke, Karottenscheiben und Kohlstreifen zu den Kartoffeln geben und alles zusammen weich garen.',
    'Tofu würfeln und in Öl 6 bis 8 Minuten goldbraun braten. Erdnussmus mit 3 EL heißem Wasser und etwas Limettensaft zu einer dünnen, flüssigen Soße rühren.',
    'Gemüse, Kartoffeln, Tofu, Eihälften und Gurkenscheiben anrichten. Kinderportion ungesalzen abnehmen, Erwachsene die Soße nach Wunsch mit Chili und Salz würzen.'
  ],
  kidName:'Gado-Gado-Teller',
  kid:'Ei hart gekocht klein schneiden, Kartoffeln und Gemüse weich garen, Gurke in dünne Stifte schneiden. Erdnusssoße nur dünn als Dip, nie ganze Erdnüsse.',
  leftover:'Gado-Gado-Pfanne · 10 Min. – Kartoffel- und Gemüsereste mit Tofu in der Pfanne vollständig durchbraten und mit restlicher Soße beträufeln.',
  tipp:'Mit etwas mehr heißem Wasser wird die Soße glatt und dünnflüssig.'
},
{
  id:'id-sate-ayam', name:'Sate Ayam · Hähnchenspieße aus dem Ofen mit dünner Erdnusssoße', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'gefluegel', base:'reis', time:{a:20,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['soja','nuesse'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Gurke','Karotten','Rote Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Erdnussmus, ungesüßt',q:1,u:'EL',c:'vorrat'},
    {n:'Kecap Manis (süße Sojasauce)',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Hähnchen in 2 cm große Würfel schneiden, mit Öl, Kurkuma und Koriander mischen und auf Holzspieße stecken.',
    'Spieße auf einem Blech bei 220 °C 12 bis 15 Minuten backen und nach der Hälfte wenden, bis das Fleisch innen nicht mehr rosa ist.',
    'Erdnussmus mit 3 EL heißem Wasser glatt und dünnflüssig rühren. Gurke und Karotten in Stifte, Zwiebel in feine Ringe schneiden.',
    'Kinderportion abnehmen, bevor die Spieße glasiert werden. Erwachsene Spieße mit Kecap Manis bestreichen und nach Wunsch mit Chili und Salz würzen.'
  ],
  kidName:'Hähnchen-Sticks mit Dip',
  kid:'Fleisch vom Spieß nehmen und in kleine, weiche Stücke schneiden, Karotten kurz weich dämpfen. Erdnusssoße nur dünn als Dip, keine ganzen Erdnüsse.',
  leftover:'Sate-Reisbowl · 8 Min. – Fleisch- und Reisreste in der Pfanne vollständig erhitzen und mit Gurke und restlicher Soße anrichten.',
  tipp:'Holzspieße vorher 10 Minuten in Wasser legen, dann verbrennen sie im Ofen nicht.'
},
{
  id:'id-rendang', name:'Rendang · mildes Rindfleisch-Schmorgericht in Kokossoße', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'fleisch', base:'reis', time:{a:20,c:90}, devices:[['topf']], method:'Schmortopf + Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Grüne Bohnen','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Rindergulasch, mager',q:120,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Grüne Bohnen',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitronengras',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Ingwer fein reiben. Fleisch in 2 cm große Würfel schneiden, in Öl 5 Minuten rundum anbraten, dann Zwiebelpaste und Kurkuma 2 Minuten mitrösten.',
    'Kokosmilch, 100 ml Wasser und das angedrückte Zitronengras zugeben und zugedeckt bei kleiner Hitze 80 bis 90 Minuten schmoren, bis das Fleisch zart ist und die Soße eindickt.',
    'In den letzten 30 Minuten Vollkornreis in der doppelten Menge Wasser garen. Bohnen halbieren und 8 Minuten in Wasser weich kochen.',
    'Zitronengras entfernen. Kinderportion ungesalzen abnehmen, Erwachsene mit Salz und nach Wunsch mit Chili würzen.'
  ],
  kidName:'Kinder-Rendang',
  kid:'Das zarte Fleisch mit der Gabel fein zerzupfen und mit Soße unter den Reis mischen. Bohnen sehr weich garen und in kurze Stücke schneiden.',
  leftover:'Rendang-Wrap · 8 Min. – Fleischreste vollständig erhitzen und mit Gurkenstiften in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Im Slow Cooker 6 Stunden auf niedriger Stufe schmoren, dann ist abends nur noch der Reis zu kochen.'
},
{
  id:'id-soto-ayam', name:'Soto Ayam · gelbe Hühnersuppe mit Reisnudeln, Ei und Gemüse', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'gefluegel', base:'nudeln', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Chinakohl','Karotten','Frühlingszwiebel'], season:[9,10,11],
  ing:[
    {n:'Hähnchenbrust',q:120,u:'g',c:'fisch'},
    {n:'Reisnudeln',q:60,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Chinakohl',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Brühe mit geriebenem Ingwer und Kurkuma aufkochen. Hähnchen darin bei kleiner Hitze 15 Minuten gar ziehen lassen, herausnehmen und zerzupfen.',
    'Karottenscheiben und Chinakohlstreifen in die Brühe geben und 6 Minuten weich köcheln. Das Ei in einem zweiten Topf 9 Minuten hart kochen.',
    'Reisnudeln nach Packungsangabe in heißem Wasser einweichen, abtropfen lassen und in Schalen verteilen. Hähnchen und Gemüse darauf geben und mit Brühe übergießen.',
    'Kinderportion ungesalzen abnehmen und etwas abkühlen lassen. Erwachsene mit Frühlingszwiebel, Limette, Salz und nach Wunsch Sambal würzen.'
  ],
  kidName:'Kinder-Soto',
  kid:'Nudeln kurz schneiden, Hähnchen fein zerzupfen und das hart gekochte Ei klein würfeln. Mit wenig Brühe als feuchte Schüssel statt als Suppe servieren.',
  leftover:'Soto-Nudelpfanne · 10 Min. – Nudel- und Hähnchenreste abtropfen lassen und mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Die Brühe mit dem Hähnchen lässt sich am Vortag kochen, dann sind abends nur Nudeln und Gemüse zu garen.'
},
{
  id:'id-opor-ayam', name:'Opor Ayam · Hähnchen in milder Kokos-Kurkuma-Soße', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Zucchini','Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitronengras',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Zwiebel fein würfeln und in Öl 3 Minuten glasig dünsten, Kurkuma und Koriander 1 Minute mitrösten.',
    'Hähnchen in mundgerechte Stücke schneiden und 4 Minuten mitbraten. Kokosmilch, 100 ml Wasser und das angedrückte Zitronengras zugeben.',
    'Karottenscheiben und Zucchiniwürfel einrühren und alles zugedeckt 20 Minuten sanft köcheln, bis das Hähnchen durchgegart und das Gemüse weich ist.',
    'Zitronengras entfernen. Kinderportion ungesalzen abnehmen, Erwachsene mit Salz und nach Wunsch mit Chili abschmecken.'
  ],
  kidName:'Mildes Kokos-Hähnchen',
  kid:'Hähnchen fein zerzupfen und mit der milden Soße unter den Reis mischen. Karotten und Zucchini mit der Gabel zerdrücken.',
  leftover:'Opor-Nudeln · 12 Min. – Reste vollständig erhitzen und mit frisch eingeweichten Reisnudeln mischen.',
  tipp:'Mit Hähnchenschenkeln bleibt das Fleisch beim Köcheln besonders saftig.'
},
{
  id:'id-bakso', name:'Bakso · Rindfleischbällchen in klarer Brühe mit Reisnudeln und Pak Choi', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'fleisch', base:'nudeln', time:{a:20,c:20}, devices:[['topf']], method:'Topf',
  allergens:['soja'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Pak Choi','Karotten','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Reisnudeln',q:60,u:'g',c:'vorrat'},
    {n:'Pak Choi',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Hack mit fein geriebenem Knoblauch, Stärke und 1 EL kaltem Wasser glatt verkneten und mit nassen Händen zu Bällchen von 2 cm formen.',
    'Brühe aufkochen, Bällchen hineingeben und bei kleiner Hitze 10 Minuten gar ziehen lassen, bis sie innen nicht mehr rosa sind.',
    'Karottenscheiben 5 Minuten mitkochen, dann Pak Choi in Streifen und Reisnudeln zugeben und 4 Minuten ziehen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Sojasauce, Frühlingszwiebel und nach Wunsch Chili würzen.'
  ],
  kidName:'Mini-Bakso',
  kid:'Bällchen vierteln und prüfen, dass sie innen durchgegart sind, Nudeln kurz schneiden. Mit wenig Brühe servieren, damit das Kind gut greifen kann.',
  leftover:'Bällchen-Nudelpfanne · 12 Min. – Bällchen- und Nudelreste abtropfen lassen und mit Gemüse in der Pfanne vollständig erhitzen.',
  tipp:'Mit nassen Händen lassen sich die Bällchen schnell und gleichmäßig formen.'
},
{
  id:'id-ikan-bakar', name:'Ikan Bakar · Ofenfisch mit Kecap-Glasur, Vollkornreis und Gurke', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'fisch', base:'reis', time:{a:10,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch','soja'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Gurke','Tomaten','Limette'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kecap Manis (süße Sojasauce)',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Ofen auf 220 °C mit Grillfunktion vorheizen.',
    'Fisch mit Öl, Kurkuma und geriebenem Knoblauch einreiben, auf ein Blech mit Backpapier legen und 10 bis 12 Minuten garen, bis er sich leicht zerpflücken lässt.',
    'Gurke und Tomaten würfeln und mit etwas Limettensaft mischen.',
    'Kinderportion Fisch abnehmen. Erwachsene Portion mit Kecap Manis bestreichen, 2 Minuten weitergrillen und nach Wunsch mit Sambal und Salz würzen.'
  ],
  kidName:'Zarter Ofenfisch',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, Tomaten und Gurke klein würfeln. Ohne Glasur und Sambal servieren.',
  leftover:'Fisch-Reis-Pfanne · 8 Min. – Reis- und Fischreste mit dem Gemüse in der Pfanne vollständig erhitzen.',
  tipp:'Statt Seelachs eignet sich jedes feste weiße Fischfilet.'
},
{
  id:'id-pepes-ikan', name:'Pepes Ikan · Lachs im Päckchen mit Kurkuma, Tomaten und Zitronengras', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'fisch', base:'reis', time:{a:15,c:20}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Pak Choi','Limette'], season:[],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Pak Choi',q:100,u:'g',c:'gemuese'},
    {n:'Zitronengras',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Ingwer und Knoblauch fein reiben, mit Kurkuma, Öl und etwas Limettensaft zu einer Paste rühren und den Fisch damit bestreichen.',
    'Fisch mit Tomatenscheiben und dem in Stücke geschnittenen Zitronengras auf Backpapier legen, zu einem Päckchen falten und 18 bis 20 Minuten garen.',
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen. Pak Choi in Streifen schneiden und in den letzten 3 Minuten auf dem Reis dämpfen.',
    'Zitronengras entfernen. Kinderportion ungesalzen abnehmen, Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  kidName:'Fisch-Päckchen',
  kid:'Lachs auf Gräten prüfen und zerpflücken, Tomaten ohne Haut klein schneiden. Mit dem weichen Pak Choi unter den Reis mischen.',
  leftover:'Fisch-Reis-Taler · 15 Min. – Reis- und Fischreste mit einem Ei vermengen, zu Talern formen und in der Pfanne beidseitig durchbraten.',
  tipp:'Statt Backpapier eignen sich Bananenblätter aus dem Asialaden für das typische Aroma.'
},
{
  id:'id-ikan-asam-manis', name:'Ikan Asam Manis · Fisch in süß-saurer Gemüsesoße mit Ananas', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'fisch', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Ananas','Zwiebel','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ananas',q:80,u:'g',c:'gemuese',hint:'frisch oder aus der Dose im eigenen Saft'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen. Fisch in 3 cm große Stücke schneiden und dünn mit Stärke bestäuben.',
    'Fisch in Öl bei mittlerer Hitze 2 Minuten je Seite braten, bis er gerade durch ist, und herausnehmen.',
    'Paprika, Zwiebel und Ananas würfeln und 4 Minuten in der Pfanne braten. Passierte Tomaten, Essig und 3 EL Wasser zugeben, 2 Minuten köcheln und den Fisch vorsichtig darin wenden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch mit Chili würzen.'
  ],
  kidName:'Süß-saurer Fisch',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Ananas und Paprika klein schneiden und weich garen. Ohne Salz und Chili servieren.',
  leftover:'Süß-saurer Reis · 8 Min. – Reis- und Soßenreste zusammen in der Pfanne vollständig erhitzen.',
  tipp:'Ananas aus der Dose im eigenen Saft spart Zeit, ein Schuss Saft rundet die Soße ohne Zucker ab.'
},
{
  id:'id-tempe-orek', name:'Tempe Orek · Tempeh-Pfanne mit grünen Bohnen und Jasminreis', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'tofu', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Grüne Bohnen','Karotten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Tempeh',q:120,u:'g',c:'kuehl'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Grüne Bohnen',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kecap Manis (süße Sojasauce)',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen. Tempeh in dünne Stifte, Bohnen in 2 cm lange Stücke und Karotten in Stifte schneiden.',
    'Tempeh in Öl 5 Minuten goldbraun braten. Zwiebel, Knoblauch, Bohnen und Karotten zugeben und mit 3 EL Wasser zugedeckt 6 Minuten weich dünsten.',
    'Kinderportion abnehmen. Rest mit Kecap Manis 1 Minute glasieren, Erwachsene nach Wunsch mit Chili und Salz würzen.'
  ],
  kidName:'Tempeh-Stäbchen',
  kid:'Tempeh in kleine, weiche Stückchen schneiden oder zerbröseln, Bohnen sehr weich dünsten und klein schneiden. Ohne Kecap Manis und Chili servieren.',
  leftover:'Tempeh-Wrap · 5 Min. – Reste vollständig erwärmen und mit Gurke in ein Vollkorn-Fladenbrot rollen.',
  tipp:'Tempeh gibt es gekühlt im Bioladen oder Asiamarkt, alternativ eignet sich fester Tofu.'
},
{
  id:'id-sayur-lodeh', name:'Sayur Lodeh · Gemüse-Kokos-Eintopf mit Tofu und Kürbis', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'tofu', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kürbis','Grüne Bohnen','Weißkohl'], season:[9,10,11],
  ing:[
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:50,u:'g',c:'gemuese'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Kürbis in 2 cm große Würfel, Bohnen in Stücke und Kohl in Streifen schneiden.',
    'Brühe und Kokosmilch mit geriebenem Knoblauch, Kurkuma und Lorbeerblatt aufkochen. Kürbis und Bohnen darin 10 Minuten köcheln.',
    'Kohl und gewürfelten Tofu zugeben und weitere 8 Minuten sanft köcheln, bis alles weich ist.',
    'Lorbeerblatt entfernen. Kinderportion ungesalzen abnehmen, Erwachsene mit Salz und nach Wunsch Sambal würzen.'
  ],
  kidName:'Kürbis-Kokos-Topf',
  kid:'Kürbis und Tofu mit der Gabel zerdrücken, Bohnen klein schneiden. Mit wenig Flüssigkeit über den Reis geben, damit es nicht zu suppig ist.',
  leftover:'Lodeh-Curryreis · 8 Min. – Reste mit Reis in einem Topf vollständig erhitzen und dick einkochen lassen.',
  tipp:'Hokkaido muss nicht geschält werden und macht die Soße sämig.'
},
{
  id:'id-telur-balado', name:'Telur Balado · Eier in milder Paprika-Tomaten-Soße', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'ei', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Tomaten','Rote Zwiebel','Babyspinat'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen. Eier in einem zweiten Topf 9 Minuten hart kochen, abschrecken und schälen.',
    'Paprika, Tomaten, Zwiebel und Knoblauch fein würfeln und in Öl 6 Minuten zu einer weichen Soße schmoren, Paprikapulver 1 Minute mitrösten.',
    'Spinat unterheben und zusammenfallen lassen. Eier halbieren und in der Soße 2 Minuten erwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch mit frischer Chili würzen.'
  ],
  kidName:'Mildes Tomaten-Ei',
  kid:'Hart gekochte Eier in kleine Stücke schneiden und mit Soße und Reis mischen. Paprika sehr weich schmoren.',
  leftover:'Balado-Brot · 5 Min. – Soßen- und Eierreste vollständig erwärmen und auf Vollkornbrot geben.',
  tipp:'Die Soße lässt sich in doppelter Menge kochen und hält gekühlt zwei Tage.'
},
{
  id:'id-cap-cay', name:'Cap Cay · bunte Gemüsepfanne mit Ei und Jasminreis', cuisine:'Indonesien', flag:'🇮🇩',
  protein:'ei', base:'reis', time:{a:12,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Brokkoli','Karotten','Chinakohl','Pilze'], season:[6,7,8,9,10],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Brokkoli',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Chinakohl',q:60,u:'g',c:'gemuese'},
    {n:'Champignons',q:50,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Speisestärke',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Jasminreis in der 1,5-fachen Menge Wasser 12 Minuten garen. Eier verquirlen, in wenig Öl zu einem festen Omelett braten, in Streifen schneiden und herausnehmen.',
    'Brokkoli in kleine Röschen, Karotten in Scheiben, Pilze und Chinakohl in Streifen schneiden und mit dem Knoblauch im restlichen Öl 5 Minuten braten.',
    'Stärke in 80 ml Wasser verrühren, zugießen und 2 Minuten köcheln, bis die Soße leicht bindet. Eierstreifen unterheben.',
    'Kinderportion ohne Sojasauce abnehmen. Rest mit Sojasauce abschmecken, Erwachsene nach Wunsch mit Chili würzen.'
  ],
  kidName:'Gemüse-Ei-Pfanne',
  kid:'Omelett vollständig durchgaren und in kleine Stücke schneiden, Brokkoli und Karotten weich dünsten. Ohne Sojasauce servieren.',
  leftover:'Cap-Cay-Nudeln · 10 Min. – Gemüsereste mit eingeweichten Reisnudeln in der Pfanne vollständig erhitzen.',
  tipp:'Gemüse in gleich große Stücke schneiden, dann gart alles gleichzeitig.'
}
);
