/* Grün geplant · Indien · Top 15 */
RECIPES.push(
{
  id:'in-palak-paneer', name:'Palak Paneer · cremiger Spinat mit Paneer und Vollkornreis', cuisine:'Indien', flag:'🇮🇳',
  protein:'milch', base:'reis', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Spinat','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Paneer',q:100,u:'g',c:'kuehl'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Blattspinat, TK',q:200,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und 25 Minuten garen.',
    'Zwiebel, Knoblauch und Ingwer fein hacken und in Öl 4 Minuten glasig dünsten. Tomate würfeln und 3 Minuten mitgaren.',
    'Spinat zugeben, zugedeckt 8 Minuten garen und mit dem Pürierstab grob pürieren.',
    'Paneer würfeln, in einer Pfanne ohne Fett 4 Minuten goldbraun rösten und mit dem Joghurt unter den Spinat heben. Nicht mehr kochen, damit der Joghurt nicht ausflockt.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Garam Masala, Salz und nach Wunsch etwas Chili würzen und mit Reis servieren.'
  ],
  nutri:{p:['Paneer','Joghurt'],f:['Spinat','Vollkornreis'],i:['Spinat'],fat:['Paneer','Rapsöl']},
  kidName:'Mini-Palak mit Paneer',
  kid:'Spinat fein pürieren, Paneer in kleine weiche Würfel schneiden oder zerdrücken und mit weichem Reis mischen. Ohne Salz und Chili.',
  leftover:'Palak-Wrap · 8 Min. – Reste vollständig erhitzen und mit etwas Reis in ein Vollkorn-Fladenbrot rollen.',
  extras:['kichererbsen','tofu'], tipp:'Statt Paneer passt gebratener fester Tofu, die Soße bleibt genauso cremig.'
},
{
  id:'in-chana-masala', name:'Chana Masala · Kichererbsen in Tomaten-Zwiebel-Soße mit Basmatireis', cuisine:'Indien', flag:'🇮🇳',
  protein:'huelsen', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Koriander, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Garam Masala',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen und in der 1,5-fachen Menge Wasser 12 Minuten garen, dann zugedeckt ziehen lassen.',
    'Zwiebel und Ingwer fein hacken und in Öl 4 Minuten weich dünsten, Koriander 30 Sekunden mitrösten.',
    'Tomaten und abgespülte Kichererbsen zugeben und 8 Minuten sämig köcheln, dabei einige Kichererbsen am Pfannenrand zerdrücken. Spinat unterrühren, bis er zusammenfällt.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Garam Masala, Salz und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Kichererbsen'],f:['Kichererbsen','Tomaten'],i:['Kichererbsen','Spinat'],fat:['Rapsöl']},
  kidName:'Mini-Chana',
  kid:'Kichererbsen gründlich zerdrücken, damit sie nicht in den Hals rutschen, und mit weichem Reis mischen. Ohne Salz, Garam Masala erst danach.',
  leftover:'Chana-Toast · 8 Min. – Reste erhitzen, leicht zerdrücken und auf geröstetem Vollkornbrot servieren.',
  extras:['joghurt','ei'], tipp:'Ein Löffel Joghurt pro Teller macht die Soße für Kinder noch milder.'
},
{
  id:'in-rajma-chawal', name:'Rajma Chawal · Kidneybohnen-Curry mit Vollkornreis', cuisine:'Indien', flag:'🇮🇳',
  protein:'huelsen', base:'reis', time:{a:10,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten'], season:[],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Garam Masala',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und 25 Minuten garen.',
    'Zwiebel, Knoblauch und Ingwer fein hacken, Karotte fein reiben. Alles in Öl 5 Minuten dünsten, Kreuzkümmel kurz mitrösten.',
    'Passierte Tomaten und abgespülte Bohnen zugeben und 15 Minuten leise köcheln, bis die Soße dick ist. Ein Viertel der Bohnen mit dem Löffel zerdrücken, das bindet.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Garam Masala, Salz und nach Wunsch Chili abschmecken.'
  ],
  nutri:{p:['Kidneybohnen','Vollkornreis'],f:['Kidneybohnen','Vollkornreis','Karotten'],i:['Kidneybohnen'],fat:['Rapsöl']},
  kidName:'Mini-Rajma',
  kid:'Bohnenhaut ist schwer zu kauen: Bohnen gründlich zerdrücken oder pürieren und mit weichem Reis vermengen. Ohne Salz und Chili.',
  leftover:'Rajma-Wrap · 6 Min. – Reste vollständig erhitzen und mit Gurke in eine Tortilla rollen.',
  extras:['joghurt','ei'], tipp:'Rajma schmeckt am nächsten Tag noch runder und lässt sich gut einfrieren.'
},
{
  id:'in-aloo-gobi', name:'Aloo Gobi · Ofen-Blumenkohl mit Kartoffeln, Kichererbsen und Gurken-Raita', cuisine:'Indien', flag:'🇮🇳',
  protein:'huelsen', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Blumenkohl','Kartoffeln','Rote Zwiebel','Gurke'], season:[6,7,8,9,10],
  ing:[
    {n:'Blumenkohl',q:200,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:100,u:'g',c:'kuehl'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in 2 cm große Würfel schneiden, Blumenkohl in kleine Röschen teilen, Zwiebel in Spalten schneiden.',
    'Alles mit Öl, Kurkuma und Kreuzkümmel mischen, auf einem Blech verteilen und 15 Minuten backen.',
    'Kichererbsen abspülen, trocken tupfen, aufs Blech geben und weitere 15 Minuten backen, bis die Kartoffeln weich und goldbraun sind.',
    'Für das Raita Gurke fein reiben und unter den Joghurt rühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken bestreuen und mit Raita servieren.'
  ],
  nutri:{p:['Kichererbsen','Joghurt'],f:['Blumenkohl','Kichererbsen','Kartoffeln'],i:['Kichererbsen'],fat:['Rapsöl']},
  kidName:'Mini-Aloo-Gobi',
  kid:'Kartoffeln und Blumenkohl weich backen und zerdrücken, Kichererbsen ebenfalls zerdrücken. Raita als milder Dip, ohne Salz und Chili.',
  leftover:'Aloo-Gobi-Omelett · 10 Min. – Reste klein schneiden und mit zwei Eiern in der Pfanne vollständig stocken lassen.',
  extras:['ei','feta'], tipp:'Röschen gleich groß schneiden, dann garen sie gleichmäßig und werden nicht trocken.'
},
{
  id:'in-khichdi', name:'Khichdi · Reis-Mungbohnen-Topf mit Karotten, Erbsen und Spinat', cuisine:'Indien', flag:'🇮🇳',
  protein:'huelsen', base:'reis', time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Karotten','Erbsen','Babyspinat'], season:[],
  ing:[
    {n:'Gelbe Mungbohnen (Moong Dal), trocken',q:50,u:'g',c:'vorrat'},
    {n:'Basmatireis',q:50,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, ganz',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mungbohnen und Reis in einem Sieb waschen, bis das Wasser klar bleibt.',
    'Kreuzkümmel in Öl 30 Sekunden anrösten, geriebenen Ingwer und Karottenwürfel 2 Minuten mitdünsten.',
    'Reis, Mungbohnen, Kurkuma und 400 ml Wasser zugeben, aufkochen und zugedeckt 20 Minuten leise köcheln, bis alles weich und breiig ist. Erbsen und Spinat für die letzten 5 Minuten zugeben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili oder Garam Masala würzen.'
  ],
  nutri:{p:['Mungbohnen','Reis'],f:['Mungbohnen','Karotten','Erbsen'],i:['Mungbohnen','Spinat'],fat:['Rapsöl']},
  kidName:'Mini-Khichdi',
  kid:'Khichdi ist von Natur aus weich: für Kleinkinder etwas dicker lassen und die Erbsen zerdrücken. Ganz ohne Salz und Chili servieren.',
  leftover:'Khichdi-Puffer · 12 Min. – Reste mit einem Ei verrühren und als kleine Puffer in der Pfanne durchbraten.',
  extras:['joghurt','ei'], tipp:'Gelbe Mungbohnen gibt es im Asialaden, rote Linsen funktionieren genauso.'
},
{
  id:'in-sambar', name:'Sambar · südindischer Linsen-Gemüse-Eintopf mit Tamarinde und Reis', cuisine:'Indien', flag:'🇮🇳',
  protein:'huelsen', base:'reis', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Aubergine','Karotten','Grüne Bohnen','Tomaten'], season:[7,8],
  ing:[
    {n:'Rote Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Basmatireis',q:70,u:'g',c:'vorrat'},
    {n:'Aubergine',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Grüne Bohnen',q:60,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tamarindenpaste',q:1,u:'TL',c:'vorrat'},
    {n:'Senfsamen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen. Linsen gründlich waschen.',
    'Senfsamen in Öl im zweiten Topf erhitzen, bis sie springen. Linsen, Kurkuma und 400 ml Wasser zugeben und 12 Minuten köcheln.',
    'Aubergine, Karotte, Bohnen und Tomate klein schneiden, zugeben und 12 Minuten weiterköcheln, bis Gemüse und Linsen weich sind. Tamarindenpaste einrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch etwas Chili oder Sambar-Pulver abschmecken.'
  ],
  nutri:{p:['Linsen','Reis'],f:['Linsen','Aubergine','Bohnen'],i:['Linsen'],fat:['Rapsöl']},
  kidName:'Mini-Sambar',
  kid:'Gemüse sehr weich kochen und mit den Linsen grob zerdrücken, dick statt suppig auf weichem Reis servieren. Ohne Salz und Schärfe.',
  leftover:'Sambar-Reis · 6 Min. – Reste mit Reis vermischen und als dicken Brei vollständig erhitzen.',
  extras:['joghurt','ei'], tipp:'Tamarinde macht das Sambar leicht säuerlich, ersatzweise einen Spritzer Zitrone verwenden.'
},
{
  id:'in-paneer-bhurji', name:'Paneer Bhurji · gewürzter Paneer mit Paprika und Erbsen im Fladenbrot', cuisine:'Indien', flag:'🇮🇳',
  protein:'milch', base:null, time:{a:12,c:8}, devices:[['pfanne']], method:'Pfanne',
  allergens:['milch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Tomaten','Erbsen','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Paneer',q:100,u:'g',c:'kuehl'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Paprika und Tomate fein würfeln. Zwiebel und Paprika in Öl 4 Minuten dünsten.',
    'Tomate, Erbsen, Kurkuma und Kreuzkümmel zugeben und 3 Minuten garen, bis die Tomate zerfällt.',
    'Paneer mit den Fingern grob zerbröseln, unterrühren und 2 Minuten erhitzen. Fladenbrot kurz in der Pfanne oder im Ofen aufwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Koriander und nach Wunsch Chili würzen und mit Fladenbrot servieren.'
  ],
  nutri:{p:['Paneer'],f:['Vollkorn-Fladenbrot','Erbsen','Paprika'],i:['Erbsen'],fat:['Paneer','Rapsöl']},
  kidName:'Mini-Bhurji',
  kid:'Paneer fein zerbröseln, Erbsen zerdrücken und das Fladenbrot in schmale Streifen zum Dippen schneiden. Ohne Salz und Chili.',
  leftover:'Bhurji-Toast · 6 Min. – Reste auf Vollkorntoast verteilen und im Ofen vollständig erhitzen.',
  extras:['kichererbsen','ei'], tipp:'Mit Eiern statt Paneer wird daraus Anda Bhurji, das indische Rührei.'
},
{
  id:'in-masala-omelett', name:'Masala-Omelett · Gemüse-Omelett mit Tomate und Koriander auf Vollkorntoast', cuisine:'Indien', flag:'🇮🇳',
  protein:'ei', base:null, time:{a:10,c:8}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Rote Paprika','Babyspinat','Gurke'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:30,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Tomate, Paprika und Frühlingszwiebel sehr fein würfeln, Spinat grob hacken.',
    'Eier mit Kurkuma und 1 EL Wasser verquirlen, Gemüse und Koriander unterrühren.',
    'Öl in der Pfanne erhitzen, die Eimasse hineingießen und bei mittlerer Hitze 4 Minuten stocken lassen, dann wenden und 2 bis 3 Minuten fertig garen, bis kein flüssiges Ei mehr zu sehen ist. Brot toasten.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch grüner Chili würzen und mit Toast und Gurkenscheiben servieren.'
  ],
  nutri:{p:['Eier','Vollkornbrot'],f:['Vollkornbrot','Paprika','Spinat'],i:['Eier','Spinat'],fat:['Eigelb','Rapsöl']},
  kidName:'Mini-Masala-Omelett',
  kid:'Omelett vollständig durchgaren und in kleine Streifen schneiden, Toast in Fingerstreifen. Gurke in dünne Stifte, ohne Salz und Chili.',
  leftover:'Omelett-Wrap · 5 Min. – Omelettstreifen in der Pfanne erhitzen und mit Gurke und Joghurt in ein Fladenbrot rollen.',
  extras:['kichererbsen','huettenkaese'], tipp:'Für die Straßenvariante Bread Omelette das Brot direkt auf die noch weiche Eimasse legen und mitbraten.'
},
{
  id:'in-butter-chicken', name:'Murgh Makhani · leichtes Butter Chicken mit Joghurt und Erbsen-Basmatireis', cuisine:'Indien', flag:'🇮🇳',
  protein:'gefluegel', base:'reis', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Erbsen'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Butter',q:1,u:'TL',c:'kuehl'},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in 2 cm große Würfel schneiden, mit 2 EL Joghurt und der Hälfte des Garam Masala mischen und 10 Minuten ziehen lassen. Reis in der 1,5-fachen Menge Wasser 12 Minuten garen, Erbsen für die letzten 3 Minuten zugeben.',
    'Hähnchen in Öl 5 Minuten rundum anbraten, bis es durchgegart ist, dann herausnehmen.',
    'Zwiebel und Ingwer fein reiben und in der Pfanne 4 Minuten dünsten. Passierte Tomaten zugeben und 8 Minuten sämig köcheln.',
    'Hitze reduzieren, Butter und restlichen Joghurt einrühren, Hähnchen zurückgeben und 2 Minuten erwärmen, nicht mehr kochen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit restlichem Garam Masala, Salz und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Hähnchen','Joghurt'],f:['Erbsen','Tomaten'],i:['Hähnchen','Erbsen'],fat:['Butter','Rapsöl']},
  kidName:'Mildes Mini-Butter-Chicken',
  kid:'Hähnchen sehr klein schneiden oder zerzupfen und mit reichlich Soße und Erbsenreis mischen. Erbsen leicht zerdrücken, kein Salz.',
  leftover:'Butter-Chicken-Wrap · 6 Min. – Reste vollständig erhitzen und mit Gurke in ein Fladenbrot rollen.',
  extras:['kichererbsen'], tipp:'Joghurt erst bei kleiner Hitze einrühren, dann bleibt die Soße glatt.'
},
{
  id:'in-tandoori-chicken', name:'Tandoori Chicken · Joghurt-Hähnchen aus dem Ofen mit Gurken-Raita und Fladenbrot', cuisine:'Indien', flag:'🇮🇳',
  protein:'gefluegel', base:null, time:{a:15,c:25}, devices:[['ofen','airfryer']], method:'Backofen oder Heißluftfritteuse',
  allergens:['milch','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Rote Zwiebel','Gurke','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Naturjoghurt',q:120,u:'g',c:'kuehl'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Die Hälfte des Joghurts mit Paprikapulver, Garam Masala und Zitronensaft verrühren. Hähnchen in breite Streifen schneiden, darin wenden und mindestens 10 Minuten marinieren.',
    'Ofen auf 220 °C vorheizen. Paprika und Zwiebel in Streifen schneiden, mit Öl mischen und mit dem Hähnchen auf ein Blech legen.',
    'Etwa 20 Minuten backen, bis das Hähnchen innen nicht mehr rosa ist (Heißluftfritteuse: 14 Minuten bei 200 °C). Fladenbrot die letzten 3 Minuten mit aufbacken.',
    'Für das Raita Gurke fein reiben und unter den restlichen Joghurt rühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen und mit Raita und Fladenbrot servieren.'
  ],
  nutri:{p:['Hähnchen','Joghurt'],f:['Vollkorn-Fladenbrot','Paprika'],i:['Hähnchen'],fat:['Rapsöl']},
  kidName:'Mini-Tandoori-Teller',
  kid:'Hähnchen in dünne Streifen schneiden oder zerzupfen, Paprika weich backen und fein schneiden. Raita als Dip, ohne Salz und Chili.',
  leftover:'Tandoori-Salat · 8 Min. – Kalte Hähnchenstreifen mit Gurke, Tomate und Raita mischen und mit Fladenbrot essen.',
  extras:['kichererbsen'], tipp:'Über Nacht im Kühlschrank mariniert wird das Hähnchen besonders zart.'
},
{
  id:'in-chicken-biryani', name:'Chicken Biryani · Hähnchen-Reis-Topf mit Karotten, Erbsen und Joghurt', cuisine:'Indien', flag:'🇮🇳',
  protein:'gefluegel', base:'reis', time:{a:20,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Karotten','Erbsen','Tomaten'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen würfeln und mit Joghurt und Garam Masala mischen. Reis waschen und 15 Minuten in kaltem Wasser einweichen.',
    'Zwiebel in dünne Streifen schneiden und in Öl 8 Minuten goldbraun schmoren. Hähnchen, Karottenwürfel und gewürfelte Tomate zugeben und 5 Minuten anbraten.',
    'Abgetropften Reis, Kurkuma und 150 ml Wasser zugeben, aufkochen und zugedeckt bei kleinster Hitze 15 Minuten garen. Erbsen obenauf legen und weitere 5 Minuten ziehen lassen.',
    'Mit einer Gabel auflockern. Kinderportion ungesalzen abnehmen, Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Hähnchen','Joghurt'],f:['Karotten','Erbsen'],i:['Hähnchen','Erbsen'],fat:['Rapsöl']},
  kidName:'Mini-Biryani',
  kid:'Hähnchen fein zerzupfen und mit dem weichen Reis mischen, Erbsen leicht zerdrücken. Ohne Salz und Chili.',
  leftover:'Biryani-Pfanne · 10 Min. – Reste mit einem Ei in der Pfanne durchbraten, bis alles heiß ist.',
  extras:['joghurt','ei'], tipp:'Ein Raita aus Joghurt und geriebener Gurke macht das Gericht für Kinder noch milder.'
},
{
  id:'in-rogan-josh', name:'Rogan Josh · geschmortes Lamm in Joghurt-Tomaten-Soße mit Vollkornreis', cuisine:'Indien', flag:'🇮🇳',
  protein:'fleisch', base:'reis', time:{a:20,c:60}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slow Cooker',
  allergens:['milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Tomaten','Karotten'], season:[],
  ing:[
    {n:'Lammfleisch, mager (Keule)',q:120,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lamm in 2 cm große Würfel schneiden und in Öl portionsweise 5 Minuten kräftig anbraten.',
    'Fein gehackte Zwiebel und geriebenen Ingwer 3 Minuten mitdünsten, Paprikapulver und Garam Masala kurz mitrösten.',
    'Tomaten, Karottenscheiben und 150 ml Wasser zugeben und zugedeckt 50 Minuten leise schmoren, bis das Fleisch zart ist (Slow Cooker: 6 Stunden auf niedrig). Reis in der doppelten Menge Wasser 25 Minuten garen.',
    'Topf vom Herd nehmen und den Joghurt einrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen und mit Reis servieren.'
  ],
  nutri:{p:['Lamm','Joghurt'],f:['Vollkornreis','Karotten'],i:['Lamm'],fat:['Rapsöl']},
  kidName:'Mini-Rogan-Josh',
  kid:'Lamm butterweich schmoren, fein zerzupfen und mit Soße und Reis vermengen. Karotten zerdrücken, ohne Salz und Chili.',
  leftover:'Lamm-Pita · 8 Min. – Reste vollständig erhitzen und mit Gurke in Vollkorn-Fladenbrot füllen.',
  extras:['joghurt'], tipp:'Das Original aus Kaschmir bekommt seine Farbe von mildem Chili, edelsüßes Paprikapulver färbt genauso ohne Schärfe.'
},
{
  id:'in-kathi-roll', name:'Kathi Roll · Hähnchen-Wrap mit Paprika, Zwiebel und Minz-Joghurt', cuisine:'Indien', flag:'🇮🇳',
  protein:'gefluegel', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Rote Zwiebel','Karotten','Gurke'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:120,u:'g',c:'fisch'},
    {n:'Vollkorn-Weizentortillas',q:2,u:'Stk.',c:'brot'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Minze, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in dünne Streifen schneiden und mit Garam Masala mischen. Paprika und Zwiebel in Streifen schneiden, Karotte grob raspeln, Gurke in Stifte schneiden.',
    'Hähnchen in Öl 4 Minuten scharf anbraten, Paprika und Zwiebel zugeben und 4 Minuten weiterbraten, bis das Fleisch durchgegart ist.',
    'Minze fein hacken und unter den Joghurt rühren. Tortillas in der heißen Pfanne je Seite 30 Sekunden erwärmen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen, alles mit Karotte, Gurke und Minz-Joghurt in die Tortillas füllen und fest aufrollen.'
  ],
  nutri:{p:['Hähnchen','Joghurt'],f:['Vollkorn-Tortillas','Paprika','Karotten'],i:['Hähnchen'],fat:['Rapsöl']},
  kidName:'Mini-Kathi-Roll',
  kid:'Hähnchen in kleine Stücke schneiden, mit Joghurt in eine halbe Tortilla rollen und in Scheiben schneiden. Paprika weich garen, ohne Salz und Chili.',
  leftover:'Kathi-Bowl · 8 Min. – Reste vollständig erhitzen und mit Reis und Joghurt als Bowl anrichten.',
  extras:['ei','kichererbsen'], tipp:'Mit einem verquirlten Ei auf der Tortilla gebraten wird daraus die Egg Roll aus Kolkata.'
},
{
  id:'in-meen-curry', name:'Meen Curry · Kerala-Fischcurry mit Kokosmilch, Tomate und Vollkornreis', cuisine:'Indien', flag:'🇮🇳',
  protein:'fisch', base:'reis', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Grüne Bohnen'], season:[7,8],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Grüne Bohnen',q:80,u:'g',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und 25 Minuten garen.',
    'Zwiebel in Streifen schneiden, Ingwer reiben und beides mit den Curryblättern in Öl 4 Minuten dünsten. Kurkuma und gewürfelte Tomaten zugeben und 5 Minuten zerfallen lassen.',
    'Bohnen in 3 cm lange Stücke schneiden, mit der Kokosmilch zugeben und 8 Minuten köcheln.',
    'Fisch in große Stücke schneiden, in die Soße legen und zugedeckt bei kleiner Hitze 6 bis 8 Minuten gar ziehen lassen, bis er sich leicht zerteilen lässt.',
    'Kinderportion ungesalzen abnehmen und die Curryblätter entfernen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Seelachs','Vollkornreis'],f:['Vollkornreis','Bohnen','Tomaten'],i:['Bohnen'],fat:['Kokosmilch','Rapsöl']},
  kidName:'Mini-Meen-Curry',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Bohnen sehr weich garen und klein schneiden, alles mit Reis und Soße mischen. Ohne Salz und Chili.',
  leftover:'Fisch-Reis-Pfanne · 8 Min. – Reste mit etwas Wasser in der Pfanne vollständig erhitzen.',
  extras:['kichererbsen'], tipp:'Curryblätter gibt es getrocknet im Asialaden, sie halten lange und duften leicht nach Zitrus.'
},
{
  id:'in-machher-jhol', name:'Machher Jhol · bengalischer Fisch-Kartoffel-Eintopf mit Tomate und Zucchini', cuisine:'Indien', flag:'🇮🇳',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:22}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Tomaten','Zucchini','Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fisch in große Stücke schneiden und mit der Hälfte des Kurkumas einreiben. Kartoffeln in Spalten, Zucchini in dicke Halbmonde schneiden.',
    'Zwiebel und Ingwer fein hacken und in Öl 3 Minuten dünsten. Kartoffeln, restliches Kurkuma, Kreuzkümmel und gewürfelte Tomate zugeben und 2 Minuten anrösten.',
    'Mit 350 ml Wasser auffüllen und 12 Minuten köcheln, bis die Kartoffeln fast weich sind, dann die Zucchini zugeben.',
    'Fischstücke einlegen und zugedeckt bei kleiner Hitze 6 Minuten gar ziehen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Koriander und nach Wunsch grüner Chili würzen.'
  ],
  nutri:{p:['Seelachs','Kartoffeln'],f:['Kartoffeln','Zucchini'],i:['Fisch'],fat:['Rapsöl']},
  kidName:'Mini-Fischtopf',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, Kartoffeln und Zucchini mit etwas Brühe zerdrücken. Ohne Salz und Chili.',
  leftover:'Fisch-Kartoffel-Taler · 15 Min. – Reste zerdrücken, zu Talern formen und in wenig Öl goldbraun und durch braten.',
  extras:['ei'], tipp:'In Bengalen wird Senföl verwendet, ein halber Teelöffel Senfsamen im heißen Öl bringt ein ähnliches Aroma.'
}
);
