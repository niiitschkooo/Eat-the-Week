/* Grün geplant · Libanon · Top 15 */
RECIPES.push(
{
  id:'lb-tabbouleh', name:'Tabbouleh · Petersilien-Bulgur-Salat mit Kichererbsen', cuisine:'Libanon', flag:'🇱🇧',
  protein:'huelsen', base:'bulgur', time:{a:12,c:10}, devices:[['topf']], method:'Topf + Schüssel',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Tomaten','Gurke','Frühlingszwiebel','Kräuter','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Bulgur',q:70,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Petersilie, glatt',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Minze, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Bulgur mit der gleichen Menge kochendem Wasser übergießen und 10 Minuten zugedeckt quellen lassen.',
    'Petersilie und Minze sehr fein hacken, Tomaten und Gurke klein würfeln, Frühlingszwiebel in feine Ringe schneiden.',
    'Kichererbsen abspülen und mit Bulgur, Kräutern, Gemüse, Olivenöl und dem Saft der Zitrone mischen.',
    'Kinderportion ungesalzen abnehmen. Für die Erwachsenen mit Salz, Pfeffer und mehr Zitrone abschmecken.'
  ],
  kidName:'Mini-Tabbouleh',
  kid:'Kichererbsen für das Kind zerdrücken, Kräuter sehr fein hacken und Gurke in kleine Würfel schneiden. Ohne Salz und mit wenig Zitrone servieren.',
  leftover:'Tabbouleh-Wrap · 5 Min. – Reste mit Hummus in ein Fladenbrot rollen.',
  tipp:'Petersilie gründlich trocken schleudern, sonst wird der Salat wässrig.'
},
{
  id:'lb-fattoush', name:'Fattoush · Brotsalat mit Ofenbrot-Chips und Zitronen-Hähnchen', cuisine:'Libanon', flag:'🇱🇧',
  protein:'gefluegel', base:null, time:{a:12,c:10}, devices:[['ofen','airfryer'],['pfanne']], method:'Pfanne + Backofen oder Airfryer',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Salat','Tomaten','Gurke','Radieschen','Kräuter'], season:[5,6,7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Radieschen',q:4,u:'Stk.',c:'gemuese'},
    {n:'Minze, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Sumach',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Fladenbrot in kleine Stücke reißen und 8 bis 10 Minuten knusprig backen, im Airfryer 5 Minuten bei 180 °C.',
    'Hähnchen in dünne Streifen schneiden und in wenig Öl 6 bis 8 Minuten durchbraten, mit etwas Zitronensaft beträufeln.',
    'Salat, Tomaten, Gurke und Radieschen klein schneiden, mit restlichem Öl, Zitronensaft und gehackter Minze mischen und die Brotchips unterheben.',
    'Kinderportion ohne Salz und Sumach abnehmen. Erwachsene mit Sumach, Salz und Pfeffer würzen.'
  ],
  kidName:'Kinder-Fattoush',
  kid:'Hähnchen fein zerzupfen, Radieschen und Gurke in dünne Stifte schneiden und die harten Brotchips durch weiches Fladenbrot ersetzen. Ohne Salz und Sumach.',
  leftover:'Fattoush-Pita · 5 Min. – Salat und Hähnchen ohne Brotchips in ein Fladenbrot füllen.',
  tipp:'Brotchips erst kurz vor dem Essen unterheben, damit sie knusprig bleiben.'
},
{
  id:'lb-mujaddara', name:'Mujaddara · Linsen-Reis mit Schmorzwiebeln und Gurkenjoghurt', cuisine:'Libanon', flag:'🇱🇧',
  protein:'huelsen', base:'reis', time:{a:15,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Gurke','Salat'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Naturjoghurt',q:100,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen und Vollkornreis mit Kreuzkümmel in der 2,5-fachen Menge Wasser aufkochen und zugedeckt 30 bis 35 Minuten weich garen.',
    'Inzwischen Zwiebeln in feine Halbringe schneiden und in Öl bei mittlerer Hitze 15 bis 20 Minuten goldbraun schmoren.',
    'Gurke fein würfeln und unter den Joghurt rühren, Salat waschen und zerpflücken.',
    'Die Hälfte der Zwiebeln unter den Linsenreis heben. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz, Pfeffer und Zimt würzen und mit restlichen Zwiebeln und Gurkenjoghurt servieren.'
  ],
  kidName:'Mini-Mujaddara',
  kid:'Linsenreis etwas weicher kochen und leicht zerdrücken, Zwiebeln sehr weich und klein geschnitten unterheben. Mit Gurkenjoghurt und ohne Salz servieren.',
  leftover:'Mujaddara-Taler · 12 Min. – Reste mit einem Ei verkneten, zu Talern formen und in der Pfanne durchbraten.',
  tipp:'Die Zwiebeln langsam schmoren statt frittieren, so werden sie süß und braun mit wenig Öl.'
},
{
  id:'lb-kibbeh', name:'Kibbeh bil sanieh · Bulgur-Hack-Auflauf mit Joghurt und Salat', cuisine:'Libanon', flag:'🇱🇧',
  protein:'fleisch', base:'bulgur', time:{a:25,c:35}, devices:[['ofen'],['pfanne']], method:'Pfanne + Backofen',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Gurke','Tomaten','Kräuter'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Bulgur',q:60,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Minze, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Bulgur 10 Minuten in warmem Wasser einweichen und kräftig ausdrücken. Ofen auf 190 °C vorheizen.',
    'Zwei Drittel des Hacks mit Bulgur, einem Teil der fein geriebenen Zwiebel und Baharat zu einem glatten Teig kneten.',
    'Für die Füllung die übrige Zwiebel würfeln und mit dem restlichen Hack in der Pfanne 6 Minuten krümelig braten.',
    'Die Hälfte des Teigs in eine geölte Form drücken, Füllung verteilen, restlichen Teig darauf glatt streichen, in Rauten schneiden, mit Öl bestreichen und 30 bis 35 Minuten backen, bis das Fleisch durchgegart ist.',
    'Gurke und Tomaten würfeln. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz und gehackter Minze würzen und mit Joghurt und Salat servieren.'
  ],
  kidName:'Kibbeh-Würfel',
  kid:'Kibbeh in kleine, weiche Würfel schneiden und mit Joghurt zum Tunken anbieten. Tomaten und Gurke klein würfeln, kein Salz.',
  leftover:'Kibbeh-Pita · 5 Min. – Kibbeh-Stücke kurz erwärmen und mit Joghurt und Salat ins Fladenbrot füllen.',
  tipp:'Feiner Bulgur bindet den Teig am besten, grober Bulgur zerfällt leichter.'
},
{
  id:'lb-kafta', name:'Kafta bil sanieh · Hackfleisch-Taler mit Kartoffeln in Tomatensoße', cuisine:'Libanon', flag:'🇱🇧',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:40}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Tomaten','Rote Paprika','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in 0,5 cm dünne Scheiben schneiden, mit Öl mischen und in einer Auflaufform 15 Minuten vorbacken.',
    'Hack mit fein gehackter Zwiebel, Petersilie und Baharat verkneten und zu flachen Talern formen. Tomaten und Paprika in Scheiben schneiden.',
    'Taler, Tomaten und Paprika zwischen die Kartoffeln legen, passierte Tomaten mit 50 ml Wasser darübergießen und 25 Minuten backen, bis das Fleisch durchgegart ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Kafta-Taler mit Kartoffeln',
  kid:'Taler in kleine Stücke teilen und die Kartoffeln mit der Tomatensoße leicht zerdrücken. Ohne Salz servieren.',
  leftover:'Kafta-Sandwich · 5 Min. – Taler aufwärmen und mit Tomatensoße ins Fladenbrot legen.',
  tipp:'Mit angefeuchteten Händen lassen sich die Taler leicht formen.'
},
{
  id:'lb-shish-taouk', name:'Shish Taouk · Joghurt-Zitronen-Hähnchen vom Blech mit Ofenkartoffeln und Knoblauchdip', cuisine:'Libanon', flag:'🇱🇧',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Paprika','Rote Zwiebel','Kartoffeln','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen würfeln und mit 2 EL Joghurt, dem halben Zitronensaft, der Hälfte des Knoblauchs und Paprikapulver mindestens 10 Minuten marinieren. Ofen auf 220 °C vorheizen.',
    'Kartoffeln in Spalten schneiden, mit Öl mischen und 10 Minuten vorbacken.',
    'Hähnchen mit Paprika- und Zwiebelstücken auf Spieße stecken oder lose zu den Kartoffeln legen und 18 bis 20 Minuten mitbacken, bis das Fleisch innen nicht mehr rosa ist.',
    'Restlichen Joghurt mit fein geriebenem Knoblauch und etwas Zitronensaft verrühren. Kinderportion ungesalzen und mit Naturjoghurt abnehmen, dann Erwachsene salzen und mit Knoblauchdip servieren.'
  ],
  kidName:'Hähnchen-Happen',
  kid:'Spieße entfernen, Hähnchen in kleine Stücke schneiden und mit Naturjoghurt ohne Knoblauch servieren. Kartoffelspalten längs halbieren.',
  leftover:'Taouk-Wrap · 5 Min. – Reste mit Salat und Knoblauchjoghurt in ein Fladenbrot rollen.',
  tipp:'Die Marinade lässt sich morgens ansetzen, dann wird das Hähnchen besonders zart.'
},
{
  id:'lb-manakish', name:'Manakish · Za\'atar- und Käsefladen mit Labneh, Gurke und Tomaten', cuisine:'Libanon', flag:'🇱🇧',
  protein:'milch', base:null, time:{a:8,c:10}, devices:[['ofen','airfryer']], method:'Backofen oder Airfryer',
  allergens:['gluten','milch','sesam'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke','Oliven','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Mozzarella',q:60,u:'g',c:'kuehl'},
    {n:'Labneh oder Griechischer Joghurt',q:80,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Oliven, schwarz, entsteint',q:4,u:'Stk.',c:'vorrat'},
    {n:'Minze, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Za\'atar oder Thymian',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Za\'atar mit Olivenöl zu einer Paste verrühren.',
    'Fladenbrot zur Hälfte mit der Za\'atar-Paste bestreichen, die andere Hälfte mit zerzupftem Mozzarella belegen und 8 bis 10 Minuten backen, im Airfryer 5 bis 6 Minuten bei 190 °C.',
    'Tomaten und Gurke in Spalten schneiden, Oliven halbieren und Minze zupfen.',
    'Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz, Pfeffer und Minze würzen und alles mit Labneh servieren.'
  ],
  kidName:'Käse-Fladenstreifen',
  kid:'Die Käsehälfte in schmale Streifen schneiden und lauwarm mit Labneh anbieten. Oliven längs vierteln, Tomaten klein schneiden und Za\'atar nur sparsam verwenden.',
  leftover:'Manakish-Toast · 5 Min. – Reste mit Tomatenscheiben kurz im Ofen aufbacken.',
  tipp:'Za\'atar enthält meist Sesam, bei Allergie getrockneten Thymian nehmen.'
},
{
  id:'lb-samke-harra', name:'Samke harra · Ofenfisch in Tomaten-Koriander-Soße mit Fladenbrot', cuisine:'Libanon', flag:'🇱🇧',
  protein:'fisch', base:null, time:{a:15,c:25}, devices:[['ofen'],['pfanne']], method:'Pfanne + Backofen',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Paprika','Zwiebel','Kräuter','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Zwiebel, Paprika und Knoblauch fein würfeln und in Öl 5 Minuten weich dünsten.',
    'Tomaten und die Hälfte des gehackten Korianders zugeben und 5 Minuten köcheln.',
    'Fisch in eine Auflaufform legen, mit Zitronensaft beträufeln, die Soße darübergeben und 15 bis 18 Minuten backen, bis sich der Fisch leicht zerpflücken lässt.',
    'Kinderportion ohne Chili und Salz abnehmen. Erwachsene mit Chiliflocken, Salz und restlichem Koriander würzen und mit warmem Fladenbrot servieren.'
  ],
  kidName:'Milder Tomatenfisch',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, mit der milden Soße und weichem Fladenbrot ohne Kruste servieren.',
  leftover:'Fisch-Tomaten-Reis · 8 Min. – Reste mit gekochtem Reis vollständig erhitzen.',
  tipp:'In Tripoli kommt eine Tahinisoße darüber: 1 EL Tahini mit Zitrone verrührt auf die Erwachsenenportion geben.'
},
{
  id:'lb-sayadieh', name:'Sayadieh · Fisch auf Zwiebel-Kreuzkümmel-Reis', cuisine:'Libanon', flag:'🇱🇧',
  protein:'fisch', base:'reis', time:{a:15,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Tomaten','Gurke','Zitrone'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:180,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebeln in Halbringe schneiden und in Öl bei mittlerer Hitze 15 Minuten tief goldbraun schmoren.',
    'Die Hälfte der Zwiebeln mit Reis, Kreuzkümmel und Brühe in einen Topf geben, aufkochen und zugedeckt 12 Minuten garen.',
    'Fisch in Stücke schneiden, auf den Reis legen und zugedeckt weitere 8 bis 10 Minuten garen, bis er durch ist. Tomaten und Gurke zu einem Salat würfeln.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Zitrone würzen und mit den übrigen Zwiebeln und dem Salat servieren.'
  ],
  kidName:'Fischreis',
  kid:'Fisch sorgfältig entgräten, zerpflücken und unter den weichen Reis mischen. Zwiebeln klein schneiden, ohne Salz servieren.',
  leftover:'Fisch-Reis-Bratlinge · 12 Min. – Reste mit einem Ei verkneten, flache Taler formen und durchbraten.',
  tipp:'Die Zwiebeln dürfen richtig dunkel werden, sie geben dem Reis Farbe und Aroma.'
},
{
  id:'lb-fasolia', name:'Fasolia · Weiße Bohnen in Tomaten-Koriander-Soße mit Reis', cuisine:'Libanon', flag:'🇱🇧',
  protein:'huelsen', base:'reis', time:{a:8,c:15}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufkochen und zugedeckt 15 Minuten garen.',
    'Zwiebel und Knoblauch fein würfeln und in Öl 3 Minuten dünsten, passierte Tomaten, Baharat und abgespülte Bohnen zugeben und 10 Minuten köcheln.',
    'Koriander hacken und die Hälfte unterrühren, Gurke in Scheiben schneiden.',
    'Kinderportion ungesalzen abnehmen und die Bohnen leicht zerdrücken. Erwachsene mit Salz, Pfeffer und restlichem Koriander würzen.'
  ],
  kidName:'Bohnen-Reis',
  kid:'Bohnen für das Kind mit der Gabel zerdrücken und unter den Reis mischen, Gurke in dünne Stifte schneiden. Ohne Salz.',
  leftover:'Bohnen-Toast · 5 Min. – Reste erhitzen und auf geröstetem Vollkornbrot servieren.',
  tipp:'Traditionell wird Fasolia mit Lammfleisch gekocht, die Bohnenvariante ist schneller und günstiger.'
},
{
  id:'lb-adas-bi-hamod', name:'Adas bi hamod · Zitronen-Linsen mit Mangold und Kartoffeln', cuisine:'Libanon', flag:'🇱🇧',
  protein:'huelsen', base:'kartoffeln', time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Mangold','Kartoffeln','Zwiebel','Zitrone','Kräuter'], season:[6,7,8,9,10],
  ing:[
    {n:'Braune Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Mangold',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Koriandergrün',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch würfeln und im Topf in Öl mit Kreuzkümmel 4 Minuten dünsten. Linsen und Brühe zugeben und 10 Minuten köcheln.',
    'Kartoffeln in kleine Würfel schneiden, zugeben und weitere 12 Minuten garen.',
    'Mangold in Streifen schneiden, mit gehacktem Koriander unterrühren und 5 Minuten mitgaren, bis alles weich und sämig ist.',
    'Kinderportion ohne Zitrone und Salz abnehmen. Erwachsene kräftig mit Zitronensaft, Salz und Pfeffer abschmecken.'
  ],
  kidName:'Linsen-Kartoffel-Topf',
  kid:'Kartoffeln und Linsen für das Kind leicht zerdrücken und den Mangold klein schneiden. Ohne Zitrone und Salz servieren.',
  leftover:'Linsen-Wrap · 5 Min. – Reste dick eingekocht mit Joghurt ins Fladenbrot füllen.',
  tipp:'Mangoldstiele fein würfeln und gleich mit den Zwiebeln andünsten.'
},
{
  id:'lb-warak-enab', name:'Warak enab · gefüllte Weinblätter mit Reis, Kichererbsen und Kräutern', cuisine:'Libanon', flag:'🇱🇧',
  protein:'huelsen', base:'reis', time:{a:40,c:45}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Kräuter','Zitrone','Kartoffeln'], season:[7,8,9],
  ing:[
    {n:'Weinblätter, eingelegt (Glas)',q:10,u:'Stk.',c:'vorrat'},
    {n:'Rundkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.5,u:'Bund',c:'gemuese'},
    {n:'Minze, frisch',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:100,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Weinblätter 10 Minuten in warmem Wasser einweichen und abspülen, damit sie weniger salzig sind.',
    'Reis waschen, Kichererbsen grob zerdrücken und mit einer fein gewürfelten Tomate, gehackten Kräutern, Öl und der Hälfte des Zitronensafts mischen.',
    'Je einen Teelöffel Füllung auf ein Blatt geben, Seiten einschlagen und fest aufrollen. Den Topfboden mit Kartoffel- und Tomatenscheiben auslegen und die Röllchen dicht daraufschichten.',
    'Mit Wasser knapp bedecken, restlichen Zitronensaft zugeben, einen Teller zum Beschweren auflegen und zugedeckt 40 bis 45 Minuten leise köcheln, bis der Reis weich ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Joghurt servieren.'
  ],
  kidName:'Mini-Röllchen',
  kid:'Röllchen für das Kind quer in Scheiben schneiden, damit die Blätter gut kaubar sind, und mit Joghurt servieren. Die Kichererbsen für die Füllung fein zerdrücken.',
  leftover:'Weinblatt-Lunchbox · 2 Min. – Reste kalt mit Joghurt und Gurke einpacken.',
  tipp:'Kinder rollen gern mit, kleine Blätter sind dafür am einfachsten.'
},
{
  id:'lb-fatayer', name:'Fatayer bi sabanekh · Spinat-Feta-Taschen aus Vollkornteig mit Gurkenjoghurt', cuisine:'Libanon', flag:'🇱🇧',
  protein:'milch', base:null, time:{a:25,c:18}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Spinat','Zwiebel','Gurke','Zitrone'], season:[3,4,5,9,10],
  ing:[
    {n:'Weizenvollkornmehl',q:80,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:120,u:'g',c:'kuehl'},
    {n:'Babyspinat',q:120,u:'g',c:'gemuese'},
    {n:'Feta',q:50,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Backpulver',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Sumach',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Mehl, Backpulver, 60 g Joghurt, die Hälfte des Öls und 2 bis 3 EL Wasser zu einem glatten Teig kneten.',
    'Spinat grob hacken, Zwiebel fein würfeln und mit zerbröseltem Feta, Sumach und Zitronensaft mischen, die Flüssigkeit gut ausdrücken.',
    'Teig dünn ausrollen, Kreise von 10 cm ausstechen, je einen Löffel Füllung daraufgeben und zu Dreiecken zusammendrücken.',
    'Mit restlichem Öl bestreichen und 15 bis 18 Minuten goldbraun backen. Gurke fein würfeln und unter den restlichen Joghurt rühren.',
    'Kinderportion abnehmen und mit Gurkenjoghurt servieren. Erwachsene mit Pfeffer und mehr Sumach würzen, Salz ist durch den Feta kaum nötig.'
  ],
  kidName:'Mini-Spinattaschen',
  kid:'Zwei Taschen für das Kind nur mit wenig Feta füllen, da er salzig ist. Lauwarm in Stücken mit Gurkenjoghurt servieren.',
  leftover:'Fatayer-Lunchbox · 2 Min. – Kalte Taschen mit Gurke und Joghurt einpacken.',
  tipp:'Die Taschen lassen sich ungebacken einfrieren und direkt aus dem Froster backen.'
},
{
  id:'lb-moghrabieh', name:'Moghrabieh · Perlcouscous mit Hähnchen, Kichererbsen und Karotten', cuisine:'Libanon', flag:'🇱🇧',
  protein:'gefluegel', base:'couscous', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Zwiebel','Karotten','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:110,u:'g',c:'fisch'},
    {n:'Perlcouscous',q:70,u:'g',c:'vorrat'},
    {n:'Kichererbsen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in mundgerechte Würfel schneiden und im Topf in Öl 5 Minuten rundum anbraten.',
    'Zwiebel in Spalten und Karotten in Scheiben zugeben, Kümmel und Zimt 1 Minute mitrösten.',
    'Perlcouscous, Kichererbsen und Brühe zugeben und zugedeckt 12 bis 15 Minuten köcheln, bis der Couscous weich, die Flüssigkeit aufgenommen und das Hähnchen durchgegart ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und gehackter Petersilie würzen.'
  ],
  kidName:'Perlcouscous mit Hähnchen',
  kid:'Hähnchen klein schneiden, Kichererbsen zerdrücken und Karotten weich garen. Ohne Salz servieren.',
  leftover:'Couscous-Salat · 5 Min. – Reste kalt mit Gurke, Zitrone und Petersilie mischen.',
  tipp:'Perlcouscous gibt es auch als Vollkornvariante, die Garzeit verlängert sich dann um einige Minuten.'
},
{
  id:'lb-hummus-lahmeh', name:'Hummus bil lahmeh · Hummus mit gebratenem Hack, Salat und Fladenbrot', cuisine:'Libanon', flag:'🇱🇧',
  protein:'fleisch', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['sesam','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Hummus',q:80,u:'g',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, glatt',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Baharat (Siebengewürz)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und mit dem Hack in Öl 6 bis 8 Minuten krümelig braten, bis kein rosa Fleisch mehr zu sehen ist, Baharat 1 Minute mitrösten.',
    'Hummus auf Teller streichen, eine Mulde formen und das heiße Hack hineingeben.',
    'Tomaten und Gurke würfeln und mit Petersilie und Zitronensaft mischen, Fladenbrot kurz erwärmen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und einem Spritzer Olivenöl würzen.'
  ],
  kidName:'Hummus mit Hack',
  kid:'Hack für das Kind fein krümelig und ohne Salz braten, mit Hummus und weichen Brotstreifen zum Tunken anbieten.',
  leftover:'Hack-Pita · 5 Min. – Hack und Hummus mit Salat in ein Fladenbrot füllen.',
  tipp:'Selbst gemachter Hummus ist weniger salzig: Kichererbsen, Tahini, Zitrone und etwas Wasser pürieren.'
}
);
