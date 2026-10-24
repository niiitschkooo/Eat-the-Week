/* Grün geplant · Mexiko · Top 15 */
RECIPES.push(
{
  id:'mx-tinga-pollo', name:'Tinga de pollo · Hähnchen in Tomaten-Zwiebel-Sauce auf Ofen-Tostadas mit Bohnen und Avocado', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'gefluegel', base:null, time:{a:15,c:25}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Zwiebel','Salat','Avocado'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:120,u:'g',c:'fisch'},
    {n:'Maistortillas, klein',q:3,u:'Stk.',c:'brot'},
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:60,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Römersalat',q:30,u:'g',c:'gemuese'},
    {n:'Avocado',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in leicht siedendem Wasser 15 Minuten gar ziehen lassen und mit zwei Gabeln zerzupfen. Ofen auf 200 °C vorheizen.',
    'Zwiebel in feine Streifen schneiden, Knoblauch hacken und in der Hälfte des Öls 5 Minuten weich dünsten. Tomaten und Oregano zugeben, 5 Minuten köcheln und das Hähnchen untermischen.',
    'Tortillas dünn mit dem restlichen Öl bepinseln und auf einem Blech 6 bis 8 Minuten knusprig backen. Bohnen zerdrücken und erwärmen, Salat in Streifen und Avocado in Scheiben schneiden.',
    'Kinderportion abnehmen. Erwachsene Tinga mit Salz und gehackter Chipotle-Chili abschmecken und die Tostadas mit Bohnen, Tinga, Salat und Avocado belegen.'
  ],
  kidName:'Weiche Hähnchen-Tortilla',
  kid:'Hähnchen sehr fein zerzupfen, Bohnen und Avocado zerdrücken und auf einer weichen, nicht gebackenen Tortilla anbieten. Ohne Chipotle und Salz.',
  leftover:'Tinga-Bowl · 8 Min. – Reste erhitzen und mit Reis und Mais in einer Schüssel anrichten.',
  tipp:'Chipotle ist geräucherter Jalapeño, schon ein halbes Stück aus der Dose reicht für die Erwachsenenportionen.'
},
{
  id:'mx-fajitas', name:'Fajitas de res · Rindfleischstreifen mit Paprika und Zwiebeln in Vollkorntortillas', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'fleisch', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Paprika','Rote Zwiebel','Zucchini','Avocado','Limette'], season:[7,8,9],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Vollkorn-Weizentortillas',q:2,u:'Stk.',c:'brot'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Paprika und Zucchini in Streifen, Zwiebel in Spalten schneiden. Fleisch mit Kreuzkümmel und etwas Limettensaft mischen.',
    'Fleisch in heißem Öl 2 bis 3 Minuten scharf anbraten und herausnehmen. Gemüse in derselben Pfanne 5 Minuten bissfest braten und das Fleisch zurückgeben.',
    'Tortillas in der trockenen Pfanne oder in der Mikrowelle kurz erwärmen, Avocado zerdrücken.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Chili und Limette würzen und mit Joghurt und Avocado in die Tortillas wickeln.'
  ],
  kidName:'Mini-Fajita',
  kid:'Fleisch sehr fein schneiden, Paprika weich dünsten und klein schneiden, mit Avocado und Joghurt auf einer halben Tortilla anbieten. Ohne Chili und Salz.',
  leftover:'Fajita-Bowl · 8 Min. – Fleisch- und Gemüsereste mit Reis, Bohnen und Salat als Bowl anrichten.',
  tipp:'Fleisch kurz anfrieren, dann lässt es sich hauchdünn schneiden und wird in der Pfanne besonders zart.'
},
{
  id:'mx-tacos-al-pastor', name:'Tacos al pastor · gewürzte Schweinefilet-Streifen mit Ananas und Rotkohl in Maistortillas', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'fleisch', base:null, time:{a:15,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Ananas','Rotkohl','Rote Zwiebel','Limette','Kräuter'], season:[],
  ing:[
    {n:'Schweinefilet',q:110,u:'g',c:'fisch'},
    {n:'Maistortillas, klein',q:3,u:'Stk.',c:'brot'},
    {n:'Ananas',q:80,u:'g',c:'gemuese'},
    {n:'Rotkohl',q:80,u:'g',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Schweinefilet in dünne Streifen schneiden und mit Paprikapulver, Oregano und 1 EL fein geriebener Ananas mischen.',
    'Rotkohl sehr fein hobeln und mit Limettensaft mischen. Restliche Ananas und Zwiebel klein würfeln.',
    'Fleisch in heißem Öl 3 bis 4 Minuten braten, bis es durchgegart ist, Ananaswürfel 1 Minute mitbraten. Tortillas in der trockenen Pfanne erwärmen.',
    'Kinderportion abnehmen. Erwachsene Fleisch mit Salz und Chili würzen und mit Zwiebel, Koriander und Rotkohl in die Tortillas füllen.'
  ],
  kidName:'Ananas-Fleisch-Taco',
  kid:'Fleisch sehr fein schneiden, Ananas in kleine weiche Stücke teilen und mit einer weichen Tortilla anbieten. Rotkohl kurz weich dünsten, ohne Chili und Salz.',
  leftover:'Pastor-Reispfanne · 10 Min. – Fleisch- und Ananasreste mit Reis und Erbsen in der Pfanne durchbraten.',
  tipp:'Frische Ananas enthält ein Enzym, das Fleisch zart macht, deshalb reichen 10 Minuten Marinierzeit.'
},
{
  id:'mx-albondigas', name:'Albóndigas en caldillo · Hackbällchen mit Minze in Tomatensauce mit Gemüse und Vollkornreis', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'fleisch', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Zucchini','Karotten','Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Tomaten, passiert',q:200,u:'ml',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Petersilie oder Minze',q:1,u:'EL',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen.',
    'Zwiebel fein würfeln. Die Hälfte davon mit Hack, Ei, gehackter Minze und Kreuzkümmel verkneten und walnussgroße Bällchen formen.',
    'Restliche Zwiebel mit passierten Tomaten und Brühe aufkochen. Karotte und Zucchini würfeln, mit den Bällchen hineingeben und zugedeckt bei kleiner Hitze 20 Minuten garen, bis die Bällchen durchgegart sind.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Chiliflocken abschmecken und mit dem Reis servieren.'
  ],
  kidName:'Mini-Albóndigas',
  kid:'Bällchen vierteln oder zerdrücken, Gemüse weich garen und mit Reis und Sauce mischen. Ohne Chili und Salz.',
  leftover:'Albóndigas-Brötchen · 8 Min. – Bällchen in der Sauce erhitzen und in ein Vollkornbrötchen geben.',
  tipp:'Frische Minze in den Bällchen ist typisch für die mexikanische Hausküche und macht sie besonders frisch.'
},
{
  id:'mx-pozole', name:'Pozole rojo · Mais-Hähnchen-Eintopf mit Weißkohl, Radieschen und Limette', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'gefluegel', base:null, time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Mais','Weißkohl','Radieschen','Zwiebel','Limette'], season:[5,6,7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:120,u:'g',c:'fisch'},
    {n:'Mais (Dose oder TK)',q:100,u:'g',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:50,u:'g',c:'gemuese'},
    {n:'Radieschen',q:3,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Maistortillas, klein',q:2,u:'Stk.',c:'brot'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und mit Brühe, Paprikapulver und Oregano aufkochen. Hähnchen im Ganzen einlegen und bei kleiner Hitze 15 Minuten gar ziehen lassen.',
    'Hähnchen herausnehmen, zerzupfen und mit dem abgetropften Mais zurück in den Topf geben, weitere 8 Minuten köcheln.',
    'Weißkohl fein hobeln, Radieschen in dünne Scheiben schneiden. Tortillas in der trockenen Pfanne knusprig rösten.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Chili und Limettensaft würzen und mit Kohl, Radieschen und Tortillas servieren.'
  ],
  kidName:'Milder Hähnchen-Mais-Topf',
  kid:'Hähnchen sehr fein zupfen und den Mais zerdrücken oder pürieren, Radieschen weglassen und Tortilla in weiche Stücke brechen. Ohne Salz und Chili.',
  leftover:'Pozole-Tacos · 8 Min. – Hähnchen und Mais abtropfen lassen und mit Kohl in warme Tortillas füllen.',
  tipp:'Original-Pozole wird mit großen Maiskörnern aus dem Lateinamerika-Laden gekocht, Dosenmais funktioniert für den Alltag.'
},
{
  id:'mx-pescado-veracruzana', name:'Pescado a la veracruzana · Fisch in Tomatensauce mit Paprika und Oliven, dazu Reis', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'fisch', base:'reis', time:{a:12,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Rote Paprika','Zwiebel','Oliven'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Oliven, grün, entsteint',q:4,u:'Stk.',c:'vorrat'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 15 Minuten garen.',
    'Zwiebel, Knoblauch und Paprika in Streifen schneiden und in Öl 5 Minuten dünsten. Tomaten, Oregano und Lorbeer zugeben und 5 Minuten köcheln.',
    'Fischfilet in die Sauce legen und zugedeckt bei kleiner Hitze 8 bis 10 Minuten garen, bis er sich leicht zerteilen lässt.',
    'Kinderportion abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit halbierten Oliven, Salz und eingelegter Jalapeño servieren.'
  ],
  kidName:'Fisch in milder Tomatensauce',
  kid:'Fisch zerpflücken und gründlich auf Gräten prüfen, mit Sauce und Reis mischen. Oliven weglassen oder fein hacken, ohne Salz.',
  leftover:'Fisch-Reis-Pfanne · 8 Min. – Reste zusammen in der Pfanne erhitzen und mit frischen Kräutern bestreuen.',
  tipp:'Grüne Oliven sind salzig, deshalb die Sauce erst ganz zum Schluss nachsalzen.'
},
{
  id:'mx-tacos-pescado', name:'Tacos de pescado · Ofenfisch-Tacos mit Krautsalat, Avocado und Limettenjoghurt', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'fisch', base:null, time:{a:15,c:12}, devices:[['ofen','airfryer']], method:'Backofen oder Airfryer',
  allergens:['fisch','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Weißkohl','Karotten','Avocado','Limette'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Maistortillas, klein',q:3,u:'Stk.',c:'brot'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Fisch in fingerbreite Streifen schneiden, mit Öl, Paprikapulver und Kreuzkümmel mischen und auf einem Blech 10 bis 12 Minuten backen, bis er durchgegart ist.',
    'Weißkohl fein hobeln, Karotte raspeln und mit etwas Limettensaft mischen. Joghurt mit abgeriebener Limettenschale verrühren, Avocado in Scheiben schneiden.',
    'Tortillas in Alufolie gewickelt in den letzten 2 Minuten im Ofen erwärmen.',
    'Kinderportion abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz, Chili und Limette würzen und die Tacos mit Kohl, Avocado und Joghurt füllen.'
  ],
  kidName:'Fisch-Taco-Teller',
  kid:'Fisch zerpflücken und auf Gräten prüfen, Avocado zerdrücken und den Kohl kurz weich dünsten. Mit einer weichen Tortilla ohne Salz und Chili anbieten.',
  leftover:'Fisch-Bowl · 8 Min. – Fischreste mit Reis, Mais und Krautsalat als kalte Bowl anrichten.',
  tipp:'Im Original aus Baja California wird der Fisch frittiert, im heißen Ofen wird er mit wenig Fett ebenfalls aromatisch.'
},
{
  id:'mx-atun-mexicana', name:'Atún a la mexicana · Thunfisch mit Tomate, Paprika und Zucchini, dazu Reis und Avocado', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'fisch', base:'reis', time:{a:8,c:15}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Tomaten','Rote Paprika','Zucchini','Zwiebel','Avocado'], season:[7,8,9],
  ing:[
    {n:'Thunfisch im eigenen Saft (Dose)',q:100,u:'g',c:'vorrat',hint:'1 kleine Dose ≈ 110 g abgetropft'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 15 Minuten garen.',
    'Zwiebel, Paprika, Zucchini und Tomaten klein würfeln. Zwiebel und Paprika in Öl 4 Minuten dünsten, Zucchini und Tomaten zugeben und 5 Minuten schmoren.',
    'Thunfisch abtropfen lassen, zerpflücken und 2 Minuten im Gemüse erwärmen. Avocado würfeln.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Limettensaft und gehackter Jalapeño würzen und mit Reis und Avocado servieren.'
  ],
  kidName:'Milder Thunfisch-Reis',
  kid:'Thunfisch fein zerpflücken und mit Gemüse und Reis mischen, Avocado zerdrücken. Thunfisch als Raubfisch nur in kleiner Menge, ohne Salz und Chili.',
  leftover:'Thunfisch-Tostadas · 10 Min. – Reste auf im Ofen geröstete Maistortillas geben und mit Salat belegen.',
  tipp:'In Mexiko ist Atún a la mexicana ein schnelles Alltagsessen, das oft auch in warme Tortillas gerollt wird.'
},
{
  id:'mx-enchiladas', name:'Enchiladas rojas · gefüllte Maistortillas mit Bohnen und Süßkartoffel aus dem Ofen', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'huelsen', base:null, time:{a:20,c:25}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Süßkartoffel','Tomaten','Babyspinat','Zwiebel'], season:[],
  ing:[
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Süßkartoffel',q:120,u:'g',c:'gemuese'},
    {n:'Maistortillas, klein',q:3,u:'Stk.',c:'brot'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Mozzarella',q:30,u:'g',c:'kuehl'},
    {n:'Naturjoghurt',q:30,u:'g',c:'kuehl'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Süßkartoffel in kleine Würfel schneiden und mit gewürfelter Zwiebel in Öl zugedeckt 8 Minuten weich braten. Bohnen, Spinat und Kreuzkümmel zugeben und grob zerdrücken.',
    'Tortillas kurz in der trockenen Pfanne erwärmen, damit sie biegsam werden. Füllung darauf verteilen, aufrollen und dicht in eine Auflaufform legen.',
    'Passierte Tomaten darübergießen, mit zerzupftem Mozzarella belegen und 15 Minuten backen, bis der Käse geschmolzen ist.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Chiliflocken würzen und mit einem Klecks Joghurt servieren.'
  ],
  kidName:'Weiche Bohnen-Enchilada',
  kid:'Enchilada in kleine Stücke schneiden und die Füllung mit der Gabel noch feiner zerdrücken. Ohne Chili und Salz, mit Joghurt.',
  leftover:'Enchilada-Teller · 6 Min. – Reste in der Mikrowelle erhitzen und mit frischem Salat servieren.',
  tipp:'In Mexiko wird die rote Sauce aus getrockneten Chilis püriert, passierte Tomaten sind die milde Familienvariante.'
},
{
  id:'mx-huevos-rancheros', name:'Huevos rancheros · Spiegeleier auf Maistortillas mit Tomatensalsa und Bohnenmus', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'ei', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Tomaten','Rote Paprika','Zwiebel','Avocado'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Maistortillas, klein',q:2,u:'Stk.',c:'brot'},
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Paprika und Tomaten klein würfeln, in der Hälfte des Öls 6 Minuten zu einer dicken Salsa schmoren und herausnehmen.',
    'Bohnen mit Kreuzkümmel und 2 EL Wasser in der Pfanne erwärmen, grob zerdrücken und herausnehmen. Tortillas kurz in der Pfanne erwärmen.',
    'Restliches Öl erhitzen und die Eier zugedeckt 4 bis 5 Minuten braten, bis Eiweiß und Eigelb fest sind.',
    'Kinderportion abnehmen. Erwachsene Salsa mit Salz und Chili abschmecken und die Tortillas mit Bohnen, Ei, Salsa und Avocado belegen.'
  ],
  kidName:'Ei-Tortilla mit Bohnenmus',
  kid:'Ei vollständig durchbraten und klein schneiden, Bohnen fein zerdrücken und auf eine weiche Tortilla streichen, Avocado zerdrücken. Ohne Salz und Chili.',
  leftover:'Salsa-Rührei · 6 Min. – Restliche Salsa und Bohnen mit verquirlten Eiern in der Pfanne stocken lassen.',
  tipp:'Die Salsa lässt sich am Vortag schmoren, dann steht das Gericht in 10 Minuten auf dem Tisch.'
},
{
  id:'mx-quesadillas', name:'Quesadillas de champiñones · Vollkorntortillas mit Pilzen, Spinat, Mais und Käse', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'milch', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Pilze','Babyspinat','Mais','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Vollkorn-Weizentortillas',q:2,u:'Stk.',c:'brot'},
    {n:'Mozzarella',q:60,u:'g',c:'kuehl'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:40,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln, Champignons in Scheiben schneiden und in Öl 5 Minuten braten. Spinat und Mais zugeben, bis der Spinat zusammenfällt, dann herausnehmen.',
    'Tortillas zur Hälfte mit Gemüse und zerzupftem Mozzarella belegen und zuklappen.',
    'In der trockenen Pfanne bei mittlerer Hitze je Seite 2 bis 3 Minuten rösten, bis der Käse geschmolzen ist. Tomate würfeln und mit Limettensaft mischen.',
    'Kinderportion abnehmen. Erwachsene die Tomatensalsa mit Salz, Koriander und Chili würzen und zu den Quesadillas servieren.'
  ],
  kidName:'Käse-Tortilla-Ecken',
  kid:'Quesadilla in kleine Dreiecke schneiden, Pilze und Spinat dafür fein hacken und Tomate klein würfeln. Ohne Salz und Chili.',
  leftover:'Pilz-Rührei · 6 Min. – Übrige Füllung mit verquirlten Eiern in der Pfanne stocken lassen.',
  tipp:'In Mexiko-Stadt wird Oaxaca-Käse verwendet, Mozzarella schmilzt ähnlich mild und fadenziehend.'
},
{
  id:'mx-chiles-rellenos', name:'Chiles rellenos al horno · Ofen-Spitzpaprika mit Käse-Mais-Füllung in Tomatensauce, dazu Vollkornreis', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'milch', base:'reis', time:{a:15,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Mais','Zucchini','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Spitzpaprika',q:2,u:'Stk.',c:'gemuese'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Hüttenkäse',q:80,u:'g',c:'kuehl'},
    {n:'Mozzarella',q:30,u:'g',c:'kuehl'},
    {n:'Mais (Dose oder TK)',q:40,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen. Ofen auf 200 °C vorheizen.',
    'Spitzpaprika längs aufschneiden, entkernen, mit Öl bepinseln und 10 Minuten vorbacken.',
    'Zucchini fein würfeln und mit Mais, Hüttenkäse und der Hälfte des Mozzarellas mischen. Passierte Tomaten mit fein geriebener Zwiebel und Oregano in eine Form geben, gefüllte Paprika daraufsetzen, mit restlichem Käse belegen und 15 Minuten backen.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Chili würzen und mit Reis servieren.'
  ],
  kidName:'Paprika-Käse-Schiffchen',
  kid:'Paprikahaut nach dem Backen abziehen, das weiche Fruchtfleisch mit Füllung klein schneiden und den Mais zerdrücken. Ohne Salz und Chili mit Reis mischen.',
  leftover:'Chile-Reis-Pfanne · 8 Min. – Reste klein schneiden, mit Reis in der Pfanne erhitzen und ein Ei unterrühren.',
  tipp:'Im Original werden Poblano-Chilis im Eimantel frittiert, Spitzpaprika aus dem Ofen sind milder und leichter.'
},
{
  id:'mx-sopa-tortilla', name:'Sopa de tortilla · Tomatensuppe mit schwarzen Bohnen, gerösteten Tortillastreifen und Avocado', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'huelsen', base:null, time:{a:10,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zucchini','Zwiebel','Avocado'], season:[],
  ing:[
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Maistortillas, klein',q:2,u:'Stk.',c:'brot'},
    {n:'Tomaten, gehackt (Dose)',q:200,u:'g',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Feta',q:20,u:'g',c:'kuehl'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Zucchini würfeln und in der Hälfte des Öls 4 Minuten dünsten. Tomaten, Brühe und Kreuzkümmel zugeben, 10 Minuten köcheln und fein pürieren.',
    'Bohnen zugeben und 5 Minuten in der Suppe erwärmen.',
    'Tortillas in dünne Streifen schneiden und im restlichen Öl in der Pfanne 4 bis 5 Minuten knusprig rösten. Avocado würfeln.',
    'Kinderportion abnehmen. Erwachsene mit Salz und Chili abschmecken und mit Tortillastreifen, Avocado und zerbröseltem Feta servieren.'
  ],
  kidName:'Milde Bohnen-Tomaten-Suppe',
  kid:'Bohnen für das Kind mitpürieren, Avocado zerdrücken und weiche statt knusprige Tortillastücke anbieten. Ohne Feta, Salz und Chili.',
  leftover:'Bohnen-Tomaten-Sauce · 8 Min. – Reste einkochen und als Sauce über Reis oder Vollkornnudeln geben.',
  tipp:'Die Tortillastreifen erst am Tisch auf die Suppe geben, dann bleiben sie knusprig.'
},
{
  id:'mx-molletes', name:'Molletes · überbackene Vollkornbrötchen mit Bohnenmus, Käse und Pico de gallo', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'huelsen', base:null, time:{a:10,c:8}, devices:[['ofen','airfryer']], method:'Backofen oder Airfryer',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Zwiebel','Salat','Gurke'], season:[7,8,9],
  ing:[
    {n:'Vollkornbrötchen',q:1,u:'Stk.',c:'brot'},
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Mozzarella',q:30,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Bohnen mit Kreuzkümmel, Öl und 2 EL Wasser mit der Gabel zu einem Mus zerdrücken.',
    'Brötchen halbieren, mit Bohnenmus bestreichen, mit Mozzarella belegen und 7 bis 8 Minuten backen, bis der Käse geschmolzen ist.',
    'Tomate und Zwiebel fein würfeln und mit Limettensaft mischen. Salat und Gurke als Beilage schneiden.',
    'Kinderportion abnehmen. Erwachsene den Pico de gallo mit Salz und Chili würzen und auf die Molletes geben.'
  ],
  kidName:'Bohnen-Käse-Brötchen',
  kid:'Brötchenhälfte ohne harte Kruste in Streifen schneiden, Tomate klein würfeln und rohe Zwiebel weglassen. Ohne Salz und Chili.',
  leftover:'Bohnen-Dip · 3 Min. – Übriges Bohnenmus mit Joghurt verrühren und mit Gemüsesticks servieren.',
  tipp:'In Mexiko sind Molletes ein beliebtes Frühstück und ein schnelles Abendessen aus Vorräten.'
},
{
  id:'mx-burritos-frijoles', name:'Burritos de frijoles · Vollkorn-Burritos mit Bohnen, Reis, Paprika und Mais', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'huelsen', base:'reis', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Mais','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:40,u:'g',c:'vorrat'},
    {n:'Vollkorn-Weizentortillas',q:1.5,u:'Stk.',c:'brot'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Mais (Dose oder TK)',q:40,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser 30 Minuten garen.',
    'Zwiebel und Paprika würfeln und in Öl 5 Minuten dünsten. Bohnen, Mais und Kreuzkümmel zugeben, 5 Minuten erwärmen und die Bohnen grob zerdrücken.',
    'Tomate würfeln. Tortillas kurz in der trockenen Pfanne erwärmen, damit sie biegsam werden.',
    'Kinderportion von Füllung und Reis ungewürzt abnehmen. Erwachsene Füllung mit Salz und Chili würzen, mit Reis, Tomate und Joghurt in die Tortillas wickeln und je Seite 2 Minuten in der Pfanne rösten.'
  ],
  kidName:'Bohnen-Reis-Röllchen',
  kid:'Bohnen und Mais zerdrücken, mit Reis und Joghurt mischen, in eine kleine weiche Tortilla rollen und in Scheiben schneiden. Ohne Salz und Chili.',
  leftover:'Burrito-Bowl · 6 Min. – Übrige Füllung und Reis mit Salat und Avocado in einer Schüssel anrichten.',
  tipp:'Burritos lassen sich in Folie gewickelt einfrieren und in der Mikrowelle in 3 Minuten erwärmen.'
}
);
