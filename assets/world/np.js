/* Grün geplant · Nepal · Top 15 */
RECIPES.push(
{
  id:'np-dal-bhat', name:'Dal Bhat Tarkari · Linsen, Vollkornreis und Kartoffel-Blumenkohl-Gemüse', cuisine:'Nepal', flag:'🇳🇵',
  protein:'huelsen', base:'reis', time:{a:20,c:25}, devices:[['topf']], method:'Drei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Blumenkohl','Kartoffeln','Babyspinat','Tomaten'], season:[6,7,8,9,10],
  ing:[
    {n:'Rote Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Blumenkohl',q:120,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, ganz',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und 25 Minuten garen. Linsen waschen und mit gehacktem Knoblauch, der Hälfte des Kurkumas und 300 ml Wasser 15 Minuten weich kochen.',
    'Für das Tarkari Kreuzkümmel in Öl 30 Sekunden anrösten, Kartoffelwürfel, kleine Blumenkohlröschen und restliches Kurkuma zugeben und 3 Minuten anbraten. Gewürfelte Tomate und 50 ml Wasser zugeben und zugedeckt 12 Minuten weich garen.',
    'Spinat unter das Dal rühren und 2 Minuten ziehen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch etwas Chili oder Timur-Pfeffer würzen.'
  ],
  nutri:{p:['Linsen','Vollkornreis'],f:['Linsen','Blumenkohl','Vollkornreis'],i:['Linsen','Spinat'],fat:['Rapsöl']},
  kidName:'Mini-Dal-Bhat',
  kid:'Dal dick mit Reis vermengen, Kartoffeln und Blumenkohl weich garen und zerdrücken. Ohne Salz und Chili als kleine Häufchen anbieten.',
  leftover:'Dal-Reis-Puffer · 12 Min. – Reste mit einem Ei verrühren und als kleine Puffer in der Pfanne durchbraten.',
  extras:['ei','joghurt'], tipp:'In Nepal wird Dal Bhat zweimal täglich gegessen und Nachschlag gehört dazu, daher ruhig großzügig kochen.'
},
{
  id:'np-kukhura-momo', name:'Kukhura Momo · gedämpfte Hähnchen-Teigtaschen mit Tomaten-Sesam-Achar', cuisine:'Nepal', flag:'🇳🇵',
  protein:'gefluegel', base:null, time:{a:45,c:15}, devices:[['topf']], method:'Topf mit Dämpfeinsatz',
  allergens:['gluten','sesam'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Frühlingszwiebel','Tomaten'], season:[],
  ing:[
    {n:'Mehl',q:80,u:'g',c:'vorrat'},
    {n:'Hähnchenbrust',q:110,u:'g',c:'fisch'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl mit etwa 45 ml Wasser zu einem glatten, festen Teig kneten und abgedeckt 15 Minuten ruhen lassen.',
    'Hähnchen sehr fein hacken oder im Blitzhacker zerkleinern. Kohl, Frühlingszwiebel, Ingwer und Knoblauch fein hacken und mit Fleisch und Öl verkneten.',
    'Teig zu einer Rolle formen, in walnussgroße Stücke teilen, jedes dünn rund ausrollen, mit einem Teelöffel Füllung belegen und zu Säckchen falten. Im Dämpfeinsatz über kochendem Wasser 12 bis 15 Minuten garen, bis die Füllung vollständig durchgegart ist.',
    'Für das Achar Tomaten 5 Minuten in Wasser kochen und häuten, Sesam in einer trockenen Pfanne 2 Minuten rösten und beides mit dem Koriander fein pürieren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene salzen das Achar und schärfen es nach Wunsch mit Chili.'
  ],
  nutri:{p:['Hähnchen'],f:['Kohl','Tomaten'],i:['Hähnchen'],fat:['Sesam','Rapsöl']},
  kidName:'Mini-Momos',
  kid:'Momos halbieren und abkühlen lassen, da die Füllung lange heiß bleibt. Achar ungesalzen und ohne Chili als Dip, Sesam darin fein pürieren.',
  leftover:'Gebratene Momos · 8 Min. – Reste in wenig Öl in der Pfanne rundum knusprig und vollständig heiß braten.',
  extras:['tofu','edamame'], tipp:'Momos lassen sich roh auf einem Blech einfrieren und dann gefroren in 18 Minuten dämpfen.'
},
{
  id:'np-thukpa', name:'Thukpa · Nudeltopf mit Hähnchen, Pak Choi und Vollkornnudeln', cuisine:'Nepal', flag:'🇳🇵',
  protein:'gefluegel', base:'nudeln', time:{a:12,c:12}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Pak Choi','Tomaten','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:110,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Pak Choi',q:80,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Brühe mit geriebenem Ingwer, gehacktem Knoblauch und Kreuzkümmel aufkochen. Hähnchen in dünne Streifen, Karotte in Stifte und Tomate in Würfel schneiden.',
    'Hähnchen, Karotte und Tomate in die Brühe geben und 3 Minuten köcheln. Gebrochene Vollkornnudeln zugeben und 8 bis 9 Minuten garen.',
    'Pak Choi in Streifen schneiden und für die letzten 2 Minuten zugeben. Frühlingszwiebel in Ringen darüberstreuen.',
    'Kinderportion ungesalzen abnehmen und mit etwas Wasser verdünnen. Erwachsene mit Salz und nach Wunsch Chili-Achar würzen.'
  ],
  nutri:{p:['Hähnchen','Vollkornnudeln'],f:['Vollkornnudeln','Karotten','Pak Choi'],i:['Hähnchen'],fat:[]},
  kidName:'Mini-Thukpa',
  kid:'Nudeln und Hähnchen klein schneiden und mit wenig Brühe als dicken Nudelteller servieren. Ohne Salz und Chili.',
  leftover:'Thukpa-Pfanne · 8 Min. – Nudeln und Einlage abgießen und mit einem Ei in der Pfanne vollständig erhitzen.',
  extras:['ei','tofu'], tipp:'Thukpa stammt aus der tibetischen Küche und ist in den Bergen Nepals das wärmende Abendessen.'
},
{
  id:'np-kukhura-sekuwa', name:'Kukhura Sekuwa · gewürzte Hähnchenspieße aus dem Ofen mit Aloo Sadeko', cuisine:'Nepal', flag:'🇳🇵',
  protein:'gefluegel', base:'kartoffeln', time:{a:20,c:25}, devices:[['ofen','airfryer']], method:'Topf + Backofen oder Heißluftfritteuse',
  allergens:['milch','sesam'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Gurke','Zitrone'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in 3 cm große Würfel schneiden und mit Joghurt, Kreuzkümmel und der Hälfte des Kurkumas mindestens 10 Minuten marinieren. Kartoffelwürfel in Wasser 15 Minuten weich kochen.',
    'Ofen auf 220 °C vorheizen. Hähnchen und Paprikastücke abwechselnd auf Spieße stecken und auf einem Blech mit Backpapier 15 bis 18 Minuten backen, nach der Hälfte wenden, bis das Fleisch durchgegart ist (Heißluftfritteuse: 12 Minuten bei 200 °C).',
    'Für das Aloo Sadeko Sesam in einer trockenen Pfanne 2 Minuten rösten und fein mahlen. Kartoffeln abgießen und mit Sesam, Öl, restlichem Kurkuma, Zitronensaft und Gurkenwürfeln mischen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili oder Timur-Pfeffer würzen.'
  ],
  nutri:{p:['Hähnchen','Joghurt'],f:['Kartoffeln','Paprika'],i:['Hähnchen'],fat:['Sesam','Rapsöl']},
  kidName:'Mini-Sekuwa',
  kid:'Hähnchen vom Spieß nehmen und in kleine Stücke schneiden, Kartoffeln leicht zerdrücken. Spieße nicht in Kinderhände geben, ohne Salz und Chili.',
  leftover:'Sekuwa-Wrap · 6 Min. – Hähnchen vollständig erhitzen und mit Aloo Sadeko in ein Fladenbrot rollen.',
  extras:['kichererbsen'], tipp:'Holzspieße 10 Minuten wässern, dann verbrennen sie im Ofen nicht.'
},
{
  id:'np-khasi-ko-masu', name:'Khasi ko Masu · nepalesisches Lamm-Curry mit Kartoffeln und Spinat', cuisine:'Nepal', flag:'🇳🇵',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:60}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slow Cooker',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Tomaten','Zwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Lammfleisch, mager (Keule)',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:120,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lamm in 2 cm große Würfel schneiden und in Öl portionsweise 5 Minuten kräftig anbraten.',
    'Gehackte Zwiebel, Knoblauch und Ingwer 4 Minuten mitbraten, Kurkuma und Kreuzkümmel kurz mitrösten. Tomaten und 200 ml Wasser zugeben und zugedeckt 35 Minuten leise schmoren (Slow Cooker: 6 Stunden auf niedrig).',
    'Kartoffeln in 2 cm große Würfel schneiden, zugeben und weitere 20 Minuten schmoren, bis Fleisch und Kartoffeln weich sind. Spinat unterheben, bis er zusammenfällt.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili oder Timur-Pfeffer würzen.'
  ],
  nutri:{p:['Lamm'],f:['Kartoffeln','Spinat'],i:['Lamm','Spinat'],fat:['Rapsöl']},
  kidName:'Mini-Lamm-Curry',
  kid:'Lamm sehr weich schmoren und fein zerzupfen, Kartoffeln mit der Soße zerdrücken. Ohne Salz und Chili.',
  leftover:'Lamm-Wrap · 8 Min. – Reste vollständig erhitzen, grob zerdrücken und in ein Fladenbrot rollen.',
  extras:['joghurt'], tipp:'Zum Dashain-Fest ist Khasi ko Masu das wichtigste Gericht, mit Ziegenfleisch schmeckt es noch ursprünglicher.'
},
{
  id:'np-chowmein', name:'Chowmein · nepalesische Vollkorn-Bratnudeln mit Rindfleisch und Gemüse', cuisine:'Nepal', flag:'🇳🇵',
  protein:'fleisch', base:'nudeln', time:{a:12,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Karotten','Rote Paprika','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:100,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:85,u:'g',c:'vorrat'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln nach Packungsangabe etwa 9 Minuten bissfest kochen und abgießen. Kohl, Karotte und Paprika in feine Streifen schneiden.',
    'Rindfleisch in Öl bei starker Hitze 2 Minuten anbraten, bis es durch ist, und herausnehmen. Knoblauch und Gemüse 4 Minuten unter Rühren braten.',
    'Nudeln, Fleisch und Kurkuma zugeben und 2 Minuten durchschwenken, Frühlingszwiebel in Ringen darübergeben.',
    'Kinderportion ohne Sojasauce abnehmen. Erwachsene mit Sojasauce und nach Wunsch Chilisoße würzen.'
  ],
  nutri:{p:['Rindfleisch','Vollkornnudeln'],f:['Vollkornnudeln','Kohl','Karotten'],i:['Rindfleisch'],fat:['Rapsöl']},
  kidName:'Mini-Chowmein',
  kid:'Nudeln in kurze Stücke schneiden, Rindfleisch sehr fein schneiden und Gemüse weich braten. Ohne Sojasauce und Chili.',
  leftover:'Chowmein-Omelett · 8 Min. – Reste mit zwei verquirlten Eiern in der Pfanne vollständig stocken lassen.',
  extras:['ei','tofu'], tipp:'In Nepal wird Chowmein oft mit Büffelfleisch gemacht, mageres Rindfleisch kommt dem am nächsten.'
},
{
  id:'np-machha-ko-jhol', name:'Machha ko Jhol · Fisch-Curry mit Tomate und Senfsamen, dazu Reis', cuisine:'Nepal', flag:'🇳🇵',
  protein:'fisch', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Babyspinat'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Senfsamen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen. Fisch in große Stücke schneiden und mit der Hälfte des Kurkumas einreiben.',
    'Senfsamen in Öl erhitzen, bis sie springen. Zwiebel, Ingwer und Knoblauch fein gehackt 3 Minuten dünsten, gewürfelte Tomaten, restliches Kurkuma und 100 ml Wasser zugeben und 4 Minuten köcheln.',
    'Fischstücke einlegen und zugedeckt bei kleiner Hitze 6 Minuten gar ziehen lassen, Spinat in der letzten Minute unterheben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch etwas Chili würzen.'
  ],
  nutri:{p:['Seelachs'],f:['Tomaten','Spinat'],i:['Spinat'],fat:['Rapsöl']},
  kidName:'Mini-Machha',
  kid:'Fisch auf Gräten prüfen und zerpflücken, mit Reis und der milden Tomatensoße vermengen, Spinat fein hacken. Ohne Salz und Chili.',
  leftover:'Fisch-Tomaten-Reis · 8 Min. – Reste mit etwas Wasser in der Pfanne vollständig erhitzen.',
  extras:['kichererbsen','linsen'], tipp:'In der Terai-Ebene wird für Machha ko Jhol Senföl verwendet, Senfsamen bringen das Aroma milder ins Gericht.'
},
{
  id:'np-machha-tareko', name:'Machha Tareko · Kurkuma-Lachs aus dem Ofen mit Kartoffeln und Spinat-Saag', cuisine:'Nepal', flag:'🇳🇵',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen']], method:'Backofen + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Babyspinat','Zitrone'], season:[],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:120,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Senfsamen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 210 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls und etwas Kurkuma mischen und 15 Minuten backen.',
    'Lachs mit restlichem Kurkuma, Kreuzkümmel und Zitronensaft einreiben, zu den Kartoffeln aufs Blech legen und 12 bis 14 Minuten backen, bis er sich leicht zerteilen lässt.',
    'Für das Saag Senfsamen im restlichen Öl in der Pfanne erhitzen, bis sie springen, gehackten Knoblauch und Spinat zugeben und 2 Minuten zusammenfallen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chiliflocken oder Timur-Pfeffer würzen.'
  ],
  nutri:{p:['Lachs'],f:['Kartoffeln','Spinat'],i:['Spinat'],fat:['Lachs (Omega-3)','Rapsöl']},
  kidName:'Mini-Ofenlachs',
  kid:'Lachs sorgfältig entgräten und zerpflücken, Kartoffeln zerdrücken und Spinat fein hacken. Ohne Salz und Chili.',
  leftover:'Lachs-Kartoffel-Pfanne · 10 Min. – Reste würfeln und mit einem Ei in der Pfanne vollständig erhitzen.',
  extras:['joghurt'], tipp:'Im Original wird der Fisch in Senföl frittiert, im heißen Ofen wird die Kurkuma-Kruste ähnlich würzig.'
},
{
  id:'np-aloo-tama', name:'Aloo Tama Bodi · Kartoffeln, Bambussprossen und Augenbohnen im säuerlichen Curry', cuisine:'Nepal', flag:'🇳🇵',
  protein:'huelsen', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Bambussprossen','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Augenbohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Bambussprossen (Dose, abgetropft)',q:80,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Ingwer fein hacken und in Öl 4 Minuten dünsten. Kurkuma und gewürfelte Tomaten zugeben und 3 Minuten einkochen.',
    'Kartoffeln in 2 cm große Würfel schneiden, Bambussprossen abspülen und in Streifen schneiden. Beides mit 300 ml Wasser zugeben und zugedeckt 15 Minuten köcheln.',
    'Abgespülte Augenbohnen zugeben und 5 Minuten mitziehen lassen, bis die Kartoffeln zerfallen und die Soße sämig ist. Mit Zitronensaft leicht säuerlich abschmecken.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili oder Timur-Pfeffer würzen.'
  ],
  nutri:{p:['Augenbohnen'],f:['Augenbohnen','Kartoffeln','Bambussprossen'],i:['Augenbohnen'],fat:['Rapsöl']},
  kidName:'Mini-Aloo-Tama',
  kid:'Kartoffeln und Bohnen zerdrücken, die faserigen Bambussprossen herausnehmen oder sehr fein hacken. Ohne Salz und Chili.',
  leftover:'Bohnen-Kartoffel-Pfanne · 10 Min. – Reste in der Pfanne einkochen und mit einem durchgebratenen Spiegelei servieren.',
  extras:['ei','joghurt'], tipp:'Im Original sorgen fermentierte Bambussprossen für die Säure, Bambus aus der Dose mit Zitrone kommt dem nahe.'
},
{
  id:'np-kwati', name:'Kwati · Eintopf aus Bohnen, Kichererbsen und Linsen mit Vollkornreis', cuisine:'Nepal', flag:'🇳🇵',
  protein:'huelsen', base:'reis', time:{a:10,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:70,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:70,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Rote Linsen, trocken',q:20,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Kreuzkümmel, ganz',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und 25 Minuten garen.',
    'Kreuzkümmel in Öl 30 Sekunden anrösten, gehackte Zwiebel, Ingwer und Karottenwürfel 4 Minuten dünsten. Gewürfelte Tomaten 3 Minuten mitgaren.',
    'Abgespülte Kichererbsen und Bohnen, gewaschene Linsen und 400 ml Wasser zugeben und 15 Minuten köcheln, bis die Linsen zerfallen und der Eintopf sämig ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili oder Timur-Pfeffer würzen.'
  ],
  nutri:{p:['Kichererbsen','Kidneybohnen','Linsen'],f:['Bohnen','Vollkornreis'],i:['Bohnen','Linsen'],fat:['Rapsöl']},
  kidName:'Mini-Kwati',
  kid:'Bohnen und Kichererbsen gründlich zerdrücken und dick mit Reis vermengen, wenig Flüssigkeit. Ohne Salz und Chili.',
  leftover:'Kwati-Bratlinge · 15 Min. – Reste abtropfen lassen, zerdrücken, mit etwas Mehl binden und in der Pfanne durchbraten.',
  extras:['joghurt','ei'], tipp:'Zum Fest Janai Purnima kommen neun Sorten gekeimter Bohnen in den Topf, für den Alltag reicht jede Mischung aus der Dose.'
},
{
  id:'np-bara', name:'Bara · Newari-Linsenpuffer mit Ei aus der Pfanne und Tomaten-Sesam-Achar', cuisine:'Nepal', flag:'🇳🇵',
  protein:'huelsen', base:null, time:{a:20,c:15}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','sesam'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Frühlingszwiebel','Gurke'], season:[7,8,9],
  ing:[
    {n:'Gelbe Mungbohnen (Moong Dal), trocken',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mungbohnen mindestens 2 Stunden in kaltem Wasser einweichen, abgießen und mit Ingwer und 2 bis 3 EL Wasser mit dem Pürierstab zu einem dicken, glatten Teig pürieren. Fein geschnittene Frühlingszwiebel, Kreuzkümmel und Kurkuma unterrühren.',
    'Sesam in der trockenen Pfanne 2 Minuten rösten und mit den Tomaten zu einem Achar pürieren. Gurke in Scheiben schneiden.',
    'Öl in der Pfanne erhitzen und je 2 EL Teig zu flachen Puffern von 10 cm verstreichen. Etwas verquirltes Ei auf die Oberseite streichen und die Puffer je Seite 3 bis 4 Minuten bei mittlerer Hitze braten, bis Teig und Ei vollständig gestockt sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene salzen Puffer und Achar und schärfen nach Wunsch mit Chili oder Timur-Pfeffer.'
  ],
  nutri:{p:['Mungbohnen','Ei'],f:['Mungbohnen','Tomaten'],i:['Mungbohnen','Ei'],fat:['Sesam','Rapsöl']},
  kidName:'Mini-Bara',
  kid:'Kleine, dünne Puffer braten, damit sie innen ganz durchgaren, und in Streifen schneiden. Tomaten-Achar ohne Salz und Chili zum Dippen.',
  leftover:'Bara-Sandwich · 5 Min. – Puffer in der Pfanne erhitzen und mit Gurke und Achar zwischen zwei Scheiben Vollkornbrot legen.',
  extras:['joghurt','huettenkaese'], tipp:'Die Mungbohnen morgens einweichen, dann ist der Teig abends in 5 Minuten fertig.'
},
{
  id:'np-chatamari', name:'Chatamari · dünner Newari-Reisfladen mit Ei, Erbsen und Tomate', cuisine:'Nepal', flag:'🇳🇵',
  protein:'ei', base:null, time:{a:12,c:12}, devices:[['pfanne']], method:'Pfanne mit Deckel',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Frühlingszwiebel','Erbsen','Rote Paprika'], season:[7,8,9],
  ing:[
    {n:'Reismehl',q:60,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reismehl mit etwa 90 ml Wasser zu einem dünnflüssigen Teig rühren und 10 Minuten quellen lassen. Tomate und Paprika fein würfeln, Frühlingszwiebel in Ringe schneiden.',
    'Eier mit Kurkuma, Kreuzkümmel und den Erbsen verquirlen.',
    'Pfanne mit wenig Öl auspinseln, die Hälfte des Teigs dünn hineingießen und bei mittlerer Hitze 2 Minuten backen. Die Hälfte der Eimasse und des Gemüses darauf verteilen, Deckel auflegen und 4 Minuten garen, bis das Ei vollständig gestockt ist. Mit dem Rest ebenso verfahren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Koriander und nach Wunsch Chiliflocken bestreuen.'
  ],
  nutri:{p:['Eier','Erbsen'],f:['Erbsen','Paprika'],i:['Eier','Erbsen'],fat:['Eigelb','Rapsöl']},
  kidName:'Mini-Chatamari',
  kid:'Fladen in kleine Dreiecke schneiden, Ei vollständig durchgaren und Erbsen leicht andrücken. Ohne Salz und Chili.',
  leftover:'Chatamari-Rolle · 5 Min. – Reste in der Pfanne erhitzen, mit Gurke füllen und aufrollen.',
  extras:['huettenkaese','kichererbsen','haehnchen'], tipp:'Reismehl ist von Natur aus glutenfrei, Chatamari eignet sich daher auch bei Glutenunverträglichkeit.'
},
{
  id:'np-samay-baji', name:'Samay Baji · Newar-Teller mit gerösteten Reisflocken, Edamame, Ei und Kartoffel-Achar', cuisine:'Nepal', flag:'🇳🇵',
  protein:'huelsen', base:null, time:{a:20,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','soja','sesam'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Gurke','Babyspinat','Zitrone'], season:[],
  ing:[
    {n:'Reisflocken (Chiura)',q:50,u:'g',c:'vorrat'},
    {n:'Edamame, TK',q:100,u:'g',c:'tk'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffelwürfel 12 Minuten weich kochen, das Ei für die letzten 10 Minuten und die Edamame für die letzten 4 Minuten mitkochen. Alles abgießen, Ei abschrecken und schälen.',
    'Für das Aloo Achar Sesam in der trockenen Pfanne 2 Minuten rösten und fein mahlen. Kartoffeln mit Sesam, Kurkuma, der Hälfte des Öls, Zitronensaft und Gurkenwürfeln mischen.',
    'Reisflocken in der Pfanne 2 Minuten trocken rösten, bis sie leicht knusprig sind, herausnehmen und den Spinat im restlichen Öl 2 Minuten zusammenfallen lassen.',
    'Alles mit dem halbierten Ei als Teller anrichten. Kinderportion ungesalzen abnehmen, Erwachsene salzen das Achar und schärfen es nach Wunsch mit Chili.'
  ],
  nutri:{p:['Edamame','Ei'],f:['Edamame','Kartoffeln','Spinat'],i:['Edamame','Spinat'],fat:['Sesam','Rapsöl']},
  kidName:'Mini-Samay-Baji',
  kid:'Reisflocken für das Kind nicht rösten, sondern kurz in warmem Wasser einweichen, Edamame zerdrücken und das Ei fein hacken. Ohne Salz und Chili.',
  leftover:'Reisflocken-Pfanne · 8 Min. – Reste mit etwas Wasser und Gemüse in der Pfanne vollständig erhitzen.',
  extras:['haehnchen','tofu'], tipp:'Reisflocken gibt es als Chiura oder Poha im Asialaden, sie müssen nicht gekocht werden.'
},
{
  id:'np-matar-paneer', name:'Matar Paneer · Paneer und Erbsen in Tomatensoße mit Basmatireis', cuisine:'Nepal', flag:'🇳🇵',
  protein:'milch', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Erbsen','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Paneer',q:90,u:'g',c:'kuehl'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Erbsen, TK',q:100,u:'g',c:'tk'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, ganz',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Garam Masala',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen. Paneer in 1,5 cm große Würfel schneiden.',
    'Kreuzkümmel in Öl 30 Sekunden anrösten, fein gehackte Zwiebel und Ingwer 3 Minuten dünsten. Kurkuma und passierte Tomaten zugeben und 4 Minuten köcheln.',
    'Erbsen und Paneer zugeben und 5 Minuten leise köcheln, bis die Erbsen gar sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Garam Masala, Salz und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Paneer','Erbsen'],f:['Erbsen','Tomaten'],i:['Erbsen'],fat:['Paneer','Rapsöl']},
  kidName:'Mini-Matar-Paneer',
  kid:'Paneer in kleine weiche Würfel schneiden oder zerdrücken, Erbsen leicht zerdrücken und alles mit Reis mischen. Ohne Salz und Chili.',
  leftover:'Paneer-Wrap · 6 Min. – Reste vollständig erhitzen und mit Gurke in ein Fladenbrot rollen.',
  extras:['kichererbsen','tofu'], tipp:'Paneer zerfällt beim Kochen nicht und lässt sich deshalb gut von kleinen Händen greifen.'
},
{
  id:'np-dhido', name:'Dhido mit Kalo Dal · Buchweizen-Brei mit schwarzen Linsen und Spinat-Saag', cuisine:'Nepal', flag:'🇳🇵',
  protein:'huelsen', base:null, time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Zwei Töpfe + Pfanne',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Babyspinat','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Buchweizenmehl',q:60,u:'g',c:'vorrat'},
    {n:'Belugalinsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Babyspinat',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, ganz',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen waschen und mit Kurkuma, Ingwer und 400 ml Wasser 25 Minuten weich kochen.',
    'Für das Dhido 250 ml Wasser aufkochen, Buchweizenmehl nach und nach einrieseln lassen und mit einem Holzlöffel kräftig rühren, bis ein glatter, fester Brei entsteht. Bei kleiner Hitze 8 Minuten unter Rühren quellen lassen.',
    'Kreuzkümmel in Öl in der Pfanne anrösten, gehackte Zwiebel, Knoblauch und Tomate 3 Minuten dünsten und die Hälfte unter die Linsen rühren. Den Spinat zum Rest in die Pfanne geben und 2 Minuten zusammenfallen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili oder Timur-Pfeffer würzen und den Dhido zum Dal reichen.'
  ],
  nutri:{p:['Linsen','Buchweizen'],f:['Buchweizen','Linsen','Spinat'],i:['Linsen','Buchweizen','Spinat'],fat:['Rapsöl']},
  kidName:'Mini-Dhido',
  kid:'Dhido mit etwas mehr Wasser weich und glatt rühren, Linsen zerdrücken und Spinat fein hacken. Ohne Salz und Chili.',
  leftover:'Dhido-Taler · 12 Min. – Abgekühlten Dhido in Scheiben schneiden, in wenig Öl goldbraun braten und mit Restdal servieren.',
  extras:['ei','joghurt'], tipp:'Buchweizen und Hirse waren in den Bergdörfern Nepals lange wichtiger als Reis, Dhido ist entsprechend sättigend.'
}
);
