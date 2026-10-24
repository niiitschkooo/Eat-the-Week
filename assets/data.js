/* Grün geplant · Rezeptdaten
   Alle Mengen gelten für EINE Erwachsenenportion und werden in der App skaliert.
   Kategorien (c): gemuese · vorrat · kuehl · fisch · tk · brot · gewuerz
   p:true = Vorratsartikel (Öl, Gewürze), wird in der Einkaufsliste separat geführt.
   Geräte: topf, pfanne (immer da) · ofen · airfryer · mikrowelle · maschine · slowcooker
   devices: Liste von Gruppen, je Gruppe muss EIN Gerät vorhanden sein. */

const RECIPES = [
{
  id:'quinoa-bowl', name:'Bunte Quinoa-Bowl mit Kichererbsen', cuisine:'Weltküche', flag:'🥗',
  protein:'huelsen', base:'quinoa', time:{a:10,c:18}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Tomaten','Mais','Babyspinat'], season:[6,7,8,9],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Quinoa',q:80,u:'g',c:'vorrat'},
    {n:'Mais (Dose oder TK)',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Quinoa gründlich spülen und in der 1,5-fachen Menge Wasser etwa 15 Minuten weich garen.',
    'Paprika und Tomaten würfeln. Mit Mais und Spinat in etwas Öl kurz dünsten, bis der Spinat zusammenfällt.',
    'Kichererbsen abspülen und nur so lange mitwärmen, bis sie cremig-warm sind.',
    'Kinderportion mild abnehmen. Für die Erwachsenen Limettensaft, Kreuzkümmel und Salz dazugeben.'
  ],
  nutri:{p:['Kichererbsen','Quinoa'],f:['Quinoa','Paprika','Tomaten','Mais'],i:['Spinat','Kichererbsen'],fat:['Olivenöl']},
  kid:'Kichererbsen für das Kind gründlich zerdrücken, Mais ebenfalls. Ohne Limette und Kreuzkümmel servieren.',
  leftover:'Warme Restebowl · 8 Min. – Reste vollständig erhitzen, als Bowl neu anrichten, Erwachsene erst am Tisch würzen.',
  extras:['feta','ei','tofu','joghurt'], tipp:'Die doppelte Menge Quinoa kochen und morgen als Pfanne weiterverwenden.'
},
{
  id:'rind-quinoa-pfanne', name:'Quinoa-Gemüse-Pfanne mit Rindfleischstreifen', cuisine:'Alltag', flag:'🍳',
  protein:'fleisch', base:'quinoa', time:{a:15,c:15}, devices:[['pfanne']], method:'Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Zucchini','Rote Paprika','Babyspinat','Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Quinoa',q:70,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Quinoa spülen und garen (oder die Basis vom Vortag verwenden).',
    'Zwiebel, Zucchini und Paprika klein würfeln. Fleisch in Öl scharf anbraten, dann herausnehmen.',
    'Gemüse in der Pfanne weich dünsten, Spinat zugeben, Quinoa und Fleisch untermischen.',
    'Kinderportion abnehmen, Fleisch dafür sehr fein schneiden. Erwachsene mit Paprika und Salz würzen.'
  ],
  nutri:{p:['Rindfleisch','Quinoa'],f:['Quinoa','Zucchini','Paprika'],i:['Rindfleisch','Spinat'],fat:['Rapsöl']},
  kid:'Rindfleisch sehr fein schneiden oder zerzupfen und mit Gemüse mischen, damit es saftig bleibt.',
  leftover:'Gefüllte Paprika · 25 Min. – Pfannenreste in halbierte Paprika füllen und im Ofen durcherhitzen.',
  extras:['feta','ei'], tipp:'Fleisch 10 Minuten anfrieren, dann lässt es sich hauchdünn schneiden.'
},
{
  id:'tofu-pfanne', name:'Goldbraune Tofu-Pfanne mit Spinat und Paprika', cuisine:'China', flag:'🇨🇳',
  protein:'tofu', base:'reis', time:{a:15,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['soja','sesam'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Babyspinat','Rote Paprika','Brokkoli','Zwiebel'], season:[],
  ing:[
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen. Tofu trocken tupfen, würfeln und in Öl goldbraun braten.',
    'Zwiebel, Paprika und Brokkoliröschen zugeben und 6 bis 8 Minuten dünsten, bis der Brokkoli weich ist.',
    'Spinat unterheben. Kinderportion ohne Sojasauce abnehmen.',
    'Rest mit Sojasauce und einem Hauch Sesamöl abschmecken und mit Reis servieren.'
  ],
  nutri:{p:['Tofu','Vollkornreis'],f:['Vollkornreis','Brokkoli','Paprika'],i:['Tofu','Spinat'],fat:['Rapsöl','Sesamöl']},
  kid:'Tofu für das Kind zerbröseln, Brokkoli sehr weich garen. Sojasauce erst nach der Kinderportion zugeben.',
  leftover:'Gebratener Reis · 10 Min. – Reis mit Gemüse und einem Ei in der Pfanne durchbraten.',
  extras:['ei','edamame'], tipp:'Tofu vorher in ein Küchentuch wickeln und ausdrücken, dann wird er knuspriger.'
},
{
  id:'lachs-ofen', name:'Ofenlachs mit Kartoffeln und Brokkoli', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:25}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Brokkoli','Kartoffeln','Zitrone'], season:[],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:150,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in dünne Scheiben schneiden, mit Öl mischen und 12 Minuten vorbacken.',
    'Brokkoliröschen und Lachs auf das Blech legen, weitere 12 bis 14 Minuten backen, bis der Fisch gerade durch ist.',
    'Kinderportion mit Lachs nochmals auf Gräten prüfen und zerpflücken.',
    'Erwachsene mit Zitrone, Dill und Salz servieren.'
  ],
  nutri:{p:['Lachs'],f:['Kartoffeln','Brokkoli'],i:['Brokkoli'],fat:['Lachs (Omega-3)','Olivenöl']},
  kid:'Lachs sorgfältig entgräten und zerpflücken. Kartoffeln weich, Brokkoli weich, alles lauwarm.',
  leftover:'Lachs-Kartoffel-Salat · 8 Min. – Reste kalt mit Joghurt, Gurke und Dill zu einem Salat mischen.',
  extras:['joghurt'], tipp:'Ohne Backofen klappt es als Pfannengericht: Kartoffeln kochen, Lachs in der Pfanne garen.'
},
{
  id:'kichererbsen-curry', name:'Mildes Kichererbsen-Curry mit Blumenkohl', cuisine:'Indien', flag:'🇮🇳',
  protein:'huelsen', base:'reis', time:{a:15,c:20}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Blumenkohl','Tomaten','Spinat','Zwiebel'], season:[6,7,8,9,10],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Blumenkohl',q:150,u:'g',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kokosmilch',q:60,u:'ml',c:'vorrat'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen. Zwiebel würfeln und in Öl glasig dünsten, Currypulver kurz mitrösten.',
    'Blumenkohl in kleine Röschen teilen, mit passierten Tomaten und Kokosmilch 12 Minuten weich köcheln.',
    'Kichererbsen und Spinat zugeben und 3 Minuten durchwärmen.',
    'Kinderportion abnehmen und Kichererbsen zerdrücken. Erwachsene mit Salz und etwas Chili abschmecken.'
  ],
  nutri:{p:['Kichererbsen','Vollkornreis'],f:['Blumenkohl','Kichererbsen','Reis'],i:['Kichererbsen','Spinat'],fat:['Kokosmilch','Rapsöl']},
  kid:'Blumenkohl sehr weich garen, Kichererbsen zerdrücken. Curry ist mild, Chili erst später.',
  leftover:'Curry-Wrap · 5 Min. – Reste erhitzen, in eine weiche Tortilla rollen.',
  extras:['joghurt','tofu','linsen'], tipp:'Blumenkohl mit der Küchenmaschine grob häckseln spart Schneidezeit.'
},
{
  id:'linsen-bolognese', name:'Linsen-Bolognese mit Vollkornnudeln', cuisine:'Italien', flag:'🇮🇹',
  protein:'huelsen', base:'nudeln', time:{a:10,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Tomaten','Zucchini','Zwiebel'], season:[],
  ing:[
    {n:'Rote Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotte und Zucchini fein würfeln oder reiben. In Öl 5 Minuten anschwitzen.',
    'Linsen, passierte Tomaten, Oregano und 200 ml Wasser zugeben, 20 Minuten sanft köcheln.',
    'Nudeln nach Packung kochen, für das Kind etwas länger.',
    'Kinderportion mild abnehmen, Erwachsene salzen und mit Pfeffer abschmecken.'
  ],
  nutri:{p:['Rote Linsen','Vollkornnudeln'],f:['Linsen','Vollkornnudeln','Karotten'],i:['Linsen'],fat:['Olivenöl']},
  kid:'Nudeln weich kochen und kürzen. Soße ist von Natur aus weich und mild.',
  leftover:'Ofennudeln · 20 Min. – Reste mit etwas Käse überbacken.',
  extras:['feta','huettenkaese'], tipp:'Gemüse mit der Reibe statt dem Messer zerkleinern, dann ist es in 3 Minuten fertig.'
},
{
  id:'ofengemuese-feta', name:'Ofengemüse-Blech mit Feta und Kichererbsen', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'huelsen', base:'kartoffeln', time:{a:10,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kürbis','Zucchini','Rote Paprika','Rote Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:120,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Feta',q:50,u:'g',c:'kuehl'},
    {n:'Hokkaido-Kürbis',q:150,u:'g',c:'gemuese'},
    {n:'Kartoffeln',q:150,u:'g',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1.5,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 210 °C vorheizen. Kürbis, Kartoffeln, Zucchini, Paprika und Zwiebel in gleichgroße Stücke schneiden.',
    'Mit Öl und Paprikapulver mischen, auf dem Blech verteilen, 20 Minuten backen.',
    'Kichererbsen darüberstreuen, Feta zerbröseln, weitere 8 bis 10 Minuten backen.',
    'Für das Kind Gemüse ohne Feta-Kruste und ohne Salz abnehmen, Kichererbsen zerdrücken.'
  ],
  nutri:{p:['Kichererbsen','Feta'],f:['Kürbis','Kartoffeln','Paprika'],i:['Kichererbsen'],fat:['Olivenöl','Feta']},
  kid:'Weiche Gemüsestücke ohne Kruste wählen, Kichererbsen zerdrücken. Feta ist salzig, für das Kind nur sehr wenig.',
  leftover:'Ofengemüse-Pfanne · 8 Min. – Reste mit einem Ei in der Pfanne durchbraten.',
  extras:['ei','joghurt'], tipp:'Hokkaido muss nicht geschält werden, die Schale wird weich.'
},
{
  id:'fisch-taler', name:'Fisch-Kartoffel-Taler mit Erbsenstampf', cuisine:'Norwegen', flag:'🇳🇴',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','ei'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Zucchini','Erbsen'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:200,u:'g',c:'gemuese'},
    {n:'Zucchini',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:120,u:'g',c:'tk'},
    {n:'Ei',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln kochen, abgießen und stampfen. Fisch in wenig Wasser 8 Minuten vollständig garen, sorgfältig entgräten und zerpflücken.',
    'Zucchini fein reiben und ausdrücken. Mit Kartoffeln, Fisch, Ei und Haferflocken zu einer formbaren Masse mischen.',
    'Kleine Taler formen und in Öl bei mittlerer Hitze von jeder Seite 4 Minuten goldbraun braten.',
    'Erbsen weich kochen und grob zerdrücken. Kinderportion ohne Salz anrichten.'
  ],
  nutri:{p:['Fisch','Ei','Erbsen'],f:['Kartoffeln','Erbsen','Haferflocken'],i:['Erbsen'],fat:['Rapsöl']},
  kid:'Einen Taler halbieren, damit die weiche Mitte sichtbar ist. Fisch nochmals auf Gräten prüfen.',
  leftover:'Taler-Brot · 5 Min. – Kalte Taler auf Brot mit Gurke als Abendbrot.',
  extras:['joghurt'], tipp:'Taler lassen sich am Vortag formen und im Kühlschrank aufbewahren.'
},
{
  id:'shakshuka', name:'Gemüse-Shakshuka mit Brot', cuisine:'Nahost', flag:'🇹🇳',
  protein:'ei', base:null, time:{a:10,c:20}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Tomaten','Zwiebel','Babyspinat'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten, gehackt (Dose)',q:200,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:30,u:'g',c:'gemuese'},
    {n:'Vollkornbrot oder Fladenbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Paprika würfeln, in Öl 6 Minuten weich dünsten, Gewürze kurz mitrösten.',
    'Tomaten zugeben und 8 Minuten einkochen, Spinat unterheben.',
    'Mulden formen, Eier hineingeben, Deckel auflegen und 6 bis 8 Minuten garen, bis das Eigelb fest ist.',
    'Für das Kind ein vollständig durchgegartes Ei mit Soße und weichem Brot anbieten. Erwachsene salzen.'
  ],
  nutri:{p:['Eier'],f:['Vollkornbrot','Paprika','Tomaten'],i:['Eier','Spinat'],fat:['Olivenöl','Eier']},
  kid:'Ei vollständig durchgaren und klein schneiden. Brot in weiche Streifen ohne harte Kruste.',
  leftover:'Shakshuka-Toast · 5 Min. – Soße auf Brot erwärmen.',
  extras:['feta','kichererbsen'], tipp:'Ein Teelöffel Honig in der Soße rundet die Säure ab (nicht für Kinder unter 1 Jahr).'
},
{
  id:'haehnchen-reis', name:'Hähnchen-Gemüse-Reis aus einem Topf', cuisine:'Alltag', flag:'🍲',
  protein:'gefluegel', base:'reis', time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Karotten','Erbsen','Rote Paprika'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen würfeln und in Öl anbraten. Karotten und Paprika würfeln und 3 Minuten mitdünsten.',
    'Reis und Kurkuma zugeben, Brühe angießen, Deckel auflegen und 20 Minuten leise garen.',
    'Erbsen unterrühren, 5 Minuten ziehen lassen.',
    'Kinderportion abnehmen, Hähnchen dafür fein zerpflücken. Rest salzen.'
  ],
  nutri:{p:['Hähnchen','Erbsen'],f:['Vollkornreis','Karotten','Erbsen'],i:['Hähnchen','Erbsen'],fat:['Rapsöl']},
  kid:'Hähnchen zerpflücken statt würfeln, Erbsen zerdrücken, Reis weich und feucht.',
  leftover:'Reis-Puffer · 10 Min. – Reste mit einem Ei vermengen und als kleine Puffer braten.',
  extras:['joghurt'], tipp:'Mit Slow Cooker: alles bis auf Erbsen 3 Stunden auf niedrig, Erbsen zum Schluss.'
},
{
  id:'dal', name:'Gelbes Linsen-Dal mit Kürbis und Spinat', cuisine:'Indien', flag:'🇮🇳',
  protein:'huelsen', base:'reis', time:{a:10,c:25}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kürbis','Spinat','Tomaten'], season:[9,10,11,12],
  ing:[
    {n:'Gelbe Linsen oder rote Linsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:150,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kokosmilch',q:50,u:'ml',c:'vorrat'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen spülen. Mit Kürbiswürfeln, Kurkuma und 300 ml Wasser 20 Minuten weich köcheln.',
    'Reis parallel garen.',
    'Tomate würfeln, mit Kokosmilch und Spinat ins Dal rühren, 3 Minuten ziehen lassen.',
    'Kinderportion abnehmen. Erwachsene mit Kreuzkümmel, Salz und Zitrone abschmecken.'
  ],
  nutri:{p:['Linsen','Reis'],f:['Linsen','Kürbis','Reis'],i:['Linsen','Spinat'],fat:['Kokosmilch','Rapsöl']},
  kid:'Dal ist von Natur aus weich und cremig. Dick statt suppig servieren.',
  leftover:'Dal-Suppe · 5 Min. – Mit etwas Wasser verlängern und als Suppe mit Brot essen.',
  extras:['joghurt','tofu'], tipp:'Dal schmeckt am zweiten Tag noch besser und lässt sich gut einfrieren.'
},
{
  id:'bohnen-tacos', name:'Weiche Bohnen-Tacos mit Mais und Avocado', cuisine:'Mexiko', flag:'🇲🇽',
  protein:'huelsen', base:null, time:{a:15,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Mais','Rote Paprika','Avocado','Tomaten','Salat'], season:[7,8,9],
  ing:[
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Maistortillas, klein',q:3,u:'Stk.',c:'brot'},
    {n:'Mais (Dose oder TK)',q:60,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Paprika würfeln und in Öl 5 Minuten dünsten. Bohnen und Mais zugeben, erhitzen und einen Teil grob zerdrücken.',
    'Avocado zerdrücken, Tomate würfeln, Salat in Streifen schneiden.',
    'Tortillas in der trockenen Pfanne kurz erwärmen.',
    'Kinderteller: Bohnenmus, weiche Tortilla-Streifen, Avocado. Erwachsene füllen mit allem und würzen mit Limette und Kreuzkümmel.'
  ],
  nutri:{p:['Schwarze Bohnen','Mais'],f:['Bohnen','Mais','Tortilla'],i:['Bohnen'],fat:['Avocado','Rapsöl']},
  kid:'Bohnen und Mais vollständig zerdrücken, Tortilla in kurze weiche Streifen. Ohne Chili.',
  leftover:'Bohnen-Quesadilla · 8 Min. – Reste zwischen zwei Tortillas in der Pfanne erhitzen.',
  extras:['feta','ei','huettenkaese'], tipp:'Mit Weizentortillas wird das Gericht glutenhaltig, mit Maistortillas nicht.'
},
{
  id:'donburi', name:'Japanische Gemüse-Donburi mit knusprigen Kichererbsen', cuisine:'Japan', flag:'🇯🇵',
  protein:'huelsen', base:'reis', time:{a:15,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:5,
  veg:['Brokkoli','Karotten','Pilze','Gurke'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Rundkornreis oder Sushireis',q:75,u:'g',c:'vorrat'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:60,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen und garen. Kichererbsen trocken tupfen und in Öl 8 Minuten knusprig braten.',
    'Karotte in Stifte, Brokkoli in Röschen, Pilze in Scheiben. Nacheinander in der Pfanne garen, Brokkoli weich.',
    'Gurke in feine Scheiben schneiden.',
    'Alles in Schalen auf dem Reis anrichten, Komponenten klar getrennt. Erwachsene mit Sojasauce und Sesam, Kind ohne.'
  ],
  nutri:{p:['Kichererbsen'],f:['Brokkoli','Karotten','Kichererbsen'],i:['Kichererbsen','Brokkoli'],fat:['Rapsöl','Sesam']},
  kid:'Kichererbsen für das Kind weich statt knusprig und zerdrückt. Ohne Sojasauce, ohne ganzen Sesam.',
  leftover:'Onigiri-Reste · 10 Min. – Reis mit Gemüse zu kleinen Bällchen formen.',
  extras:['ei','tofu','edamame'], tipp:'Von Washoku inspiriert: Reis, Hauptkomponente und Gemüse bleiben erkennbar.'
},
{
  id:'kuerbis-couscous', name:'Kürbis-Kichererbsen-Couscous mit Kräuterjoghurt', cuisine:'Marokko', flag:'🇲🇦',
  protein:'huelsen', base:'couscous', time:{a:10,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kürbis','Karotten','Zucchini'], season:[9,10,11,12],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkorn-Couscous',q:70,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Petersilie oder Minze',q:1,u:'EL',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kürbis, Karotte und Zucchini würfeln. In Öl mit Zimt und Kreuzkümmel 12 Minuten weich dünsten.',
    'Couscous mit der gleichen Menge heißem Wasser übergießen und 5 Minuten quellen lassen.',
    'Kichererbsen zum Gemüse geben und erhitzen. Joghurt mit gehackten Kräutern verrühren.',
    'Kinderportion: Couscous, weiches Gemüse, zerdrückte Kichererbsen, ein Klecks Joghurt. Erwachsene salzen, nach Wunsch Harissa.'
  ],
  nutri:{p:['Kichererbsen','Joghurt'],f:['Couscous','Kürbis','Karotten'],i:['Kichererbsen'],fat:['Olivenöl','Joghurt']},
  kid:'Kichererbsen gründlich zerdrücken, Gemüse butterweich. Zimt ist eine gute, milde Gewürzbrücke.',
  leftover:'Couscous-Salat · 5 Min. – Reste kalt mit Tomate und Zitrone als Salat.',
  extras:['feta','ei'], tipp:'Couscous braucht keinen Topf: heißes Wasser aus dem Kocher reicht.'
},
{
  id:'reis-bohnen-brasil', name:'Brasilianischer Reis-Bohnen-Teller mit Kürbis und Avocado', cuisine:'Brasilien', flag:'🇧🇷',
  protein:'huelsen', base:'reis', time:{a:10,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Kürbis','Avocado','Tomaten','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:120,u:'g',c:'gemuese'},
    {n:'Avocado',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis garen. Kürbis würfeln und in wenig Wasser 10 Minuten weich dämpfen.',
    'Zwiebel und Knoblauch in Öl anschwitzen, Bohnen mit etwas Wasser und Lorbeer 10 Minuten köcheln, einen Teil zerdrücken.',
    'Tomate würfeln, Avocado in Stücke schneiden.',
    'Als Baukastenteller anrichten. Kinderportion: Bohnen zerdrückt und cremig, Avocado weich, ohne Salz.'
  ],
  nutri:{p:['Schwarze Bohnen','Reis'],f:['Bohnen','Reis','Kürbis'],i:['Bohnen'],fat:['Avocado','Rapsöl']},
  kid:'Bohnen mit etwas Kochwasser cremig zerdrücken. Avocado frisch danebenlegen.',
  leftover:'Bohnen-Reis-Bällchen · 10 Min. – Reste mischen, Bällchen formen und in der Pfanne braten.',
  extras:['ei','feta'], tipp:'Feijoada-Prinzip ohne Fleisch: Bohnen tragen das Gericht.'
},
{
  id:'polenta-brokkoli', name:'Blitz-Polenta mit Brokkoli und knusprigen Kichererbsen', cuisine:'Alltag', flag:'⚡',
  protein:'huelsen', base:'polenta', time:{a:5,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Brokkoli'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Brokkoli, TK',q:150,u:'g',c:'tk'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kichererbsen trocken tupfen, in Öl mit Paprikapulver 8 Minuten knusprig braten.',
    'Polenta in 300 ml Wasser oder Milch unter Rühren 5 bis 8 Minuten cremig kochen, Käse unterrühren.',
    'Brokkoli in wenig Wasser 6 Minuten weich garen.',
    'Kinderportion: weiche Polenta, zerdrückte (nicht knusprige) Kichererbsen, weicher Brokkoli, ohne Salz.'
  ],
  nutri:{p:['Kichererbsen','Käse'],f:['Brokkoli','Kichererbsen'],i:['Kichererbsen','Brokkoli'],fat:['Olivenöl','Käse']},
  kid:'Polenta weich statt schnittfest. Einen Teil der Kichererbsen vor dem Knusprigbraten für das Kind zerdrücken.',
  leftover:'Polenta-Schnitten · 10 Min. – Kalte Polenta in Scheiben schneiden und in der Pfanne anbraten.',
  extras:['ei','huettenkaese'], tipp:'Ein echtes Notfallgericht: alles aus Vorrat und Tiefkühler.'
},
{
  id:'omelett', name:'Gemüse-Omelett mit Ofentomaten und Brot', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'ei', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zucchini','Babyspinat','Tomaten'], season:[6,7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:30,u:'ml',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kräuter, getrocknet (Thymian, Oregano)',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Tomaten halbieren, mit Kräutern in der Pfanne oder im Ofen 10 Minuten weich schmoren.',
    'Zucchini fein reiben und ausdrücken, Spinat klein schneiden. Eier mit Milch verquirlen, Gemüse untermischen.',
    'In Öl bei milder Hitze 6 bis 8 Minuten stocken lassen, wenden oder mit Deckel fertig garen, bis alles fest ist.',
    'Für das Kind in kurze Streifen schneiden und mit gehäuteter Tomate anbieten. Erwachsene salzen.'
  ],
  nutri:{p:['Eier','Milch'],f:['Vollkornbrot','Zucchini','Tomaten'],i:['Eier','Spinat'],fat:['Eier','Rapsöl']},
  kid:'Omelett vollständig durchgaren und in weiche Streifen schneiden. Tomate häuten und weich dünsten.',
  leftover:'Omelett-Sandwich · 5 Min. – Kalte Streifen aufs Brot.',
  extras:['feta','huettenkaese'], tipp:'Omelett bei niedriger Hitze bleibt zart statt gummiartig.'
},
{
  id:'bulgur-topf', name:'Türkischer Bulgur-Gemüse-Topf mit Rinderhack', cuisine:'Türkei', flag:'🇹🇷',
  protein:'fleisch', base:'bulgur', time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Paprika','Zucchini','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Bulgur',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:120,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und mit dem Hack in Öl krümelig und vollständig durchbraten.',
    'Paprika und Zucchini fein würfeln, kurz mitdünsten, Bulgur, passierte Tomaten und 250 ml Wasser zugeben.',
    'Deckel auf, 15 Minuten leise garen, 5 Minuten ziehen lassen.',
    'Kinderportion vor dem Salzen abnehmen. Erwachsene mit Paprikapulver, Salz und einem Klecks Joghurt.'
  ],
  nutri:{p:['Rinderhack','Bulgur'],f:['Bulgur','Paprika','Zucchini'],i:['Rinderhack'],fat:['Olivenöl','Joghurt']},
  kid:'Kleine Anfangsportion in die Mitte, etwas Gemüse sichtbar an den Rand. Hack vollständig durchgegart.',
  leftover:'Gefüllte Zucchini · 25 Min. – Reste in ausgehöhlte Zucchini füllen und im Ofen garen.',
  extras:['feta','joghurt'], tipp:'Mit Rinderhack vom Metzger und ohne Fertigbrühe bleibt der Salzgehalt niedrig.'
},
{
  id:'stampf-ei', name:'Kartoffel-Möhren-Stampf mit Spiegelei und Brokkoli', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'ei', base:'kartoffeln', time:{a:10,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Brokkoli'], season:[],
  ing:[
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln und Karotten schälen, grob würfeln und 20 Minuten weich kochen.',
    'Brokkoli in den letzten 7 Minuten mitgaren oder separat dämpfen.',
    'Kartoffeln und Karotten mit warmer Milch und Öl grob stampfen.',
    'Spiegeleier braten, für das Kind vollständig durchgaren und klein schneiden. Erwachsene salzen und mit Muskat würzen.'
  ],
  nutri:{p:['Eier','Milch'],f:['Kartoffeln','Karotten','Brokkoli'],i:['Eier','Brokkoli'],fat:['Rapsöl','Eier']},
  kid:'Nur einen Teil von Möhre und Brokkoli unterstampfen, den Rest sichtbar daneben anbieten. Ei vollständig durchgaren.',
  leftover:'Stampf-Puffer · 10 Min. – Kalten Stampf zu Talern formen und braten.',
  extras:['huettenkaese','kichererbsen'], tipp:'Mit der Küchenmaschine wird der Stampf klebrig, lieber mit dem Stampfer arbeiten.'
},
{
  id:'gemuese-bohnen-suppe', name:'Dicke Gemüse-Bohnen-Suppe mit Vollkornbrot', cuisine:'Alltag', flag:'🥣',
  protein:'huelsen', base:null, time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Karotten','Zucchini','Lauch'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kartoffeln',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Lauch in Ringe, Karotte, Kartoffeln und Zucchini in kleine Würfel schneiden. In Öl 5 Minuten anschwitzen.',
    'Mit passierten Tomaten, Thymian und 300 ml Wasser auffüllen, 15 Minuten weich köcheln.',
    'Bohnen zugeben, 5 Minuten erhitzen. Einen Teil mit dem Stampfer zerdrücken, damit die Suppe dick wird.',
    'Kinderportion dick und ohne Salz, mit weichem Brot. Erwachsene salzen und pfeffern.'
  ],
  nutri:{p:['Weiße Bohnen','Vollkornbrot'],f:['Bohnen','Kartoffeln','Vollkornbrot'],i:['Bohnen'],fat:['Olivenöl']},
  kid:'Nur einen Teil pürieren, damit einzelne weiche Gemüseformen erkennbar bleiben. Einen vorgeladenen Löffel anbieten.',
  leftover:'Eintopf Tag 2 · 5 Min. – Dicker einkochen und mit Nudeln verlängern.',
  extras:['feta','ei'], tipp:'Doppelte Menge kochen und die Hälfte einfrieren.'
},
{
  id:'ugali-sukuma', name:'Weiche Polenta mit Bohnen und Blattgemüse (Sukuma Wiki)', cuisine:'Kenia', flag:'🇰🇪',
  protein:'huelsen', base:'polenta', time:{a:10,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Grünkohl','Tomaten','Zwiebel'], season:[10,11,12,1,2],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Grünkohl oder Spinat',q:120,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Polenta in 300 ml Wasser unter Rühren weich kochen (Ugali-Art, aber löffelbar).',
    'Zwiebel in Öl dünsten, Grünkohl fein schneiden und mit gewürfelter Tomate 10 Minuten weich garen.',
    'Bohnen zugeben und erhitzen, einen Teil zerdrücken.',
    'Als drei Komponenten anrichten. Kinderportion ohne Salz, Bohnen zerdrückt, Blattgemüse sehr fein.'
  ],
  nutri:{p:['Kidneybohnen','Polenta'],f:['Bohnen','Grünkohl','Polenta'],i:['Bohnen','Grünkohl'],fat:['Rapsöl']},
  kid:'Polenta weich statt schnittfest kochen. Bohnen zerdrücken und Blattgemüse sehr fein und weich anbieten.',
  leftover:'Polenta-Ecken · 10 Min. – Kalte Polenta anbraten, Gemüse darauf.',
  extras:['ei','tofu'], tipp:'Von Ugali und Sukuma Wiki inspiriert: Maisbeilage mit Blattgemüse.'
},
{
  id:'thai-curry', name:'Mildes Kokos-Gemüse-Curry mit Tofu', cuisine:'Thailand', flag:'🇹🇭',
  protein:'tofu', base:'reis', time:{a:15,c:20}, devices:[['topf']], method:'Topf',
  allergens:['soja'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:5,
  veg:['Brokkoli','Rote Paprika','Zuckerschoten','Karotten'], season:[],
  ing:[
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:120,u:'ml',c:'vorrat'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zuckerschoten',q:50,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gelbe Currypaste, mild',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis garen. Tofu würfeln und in Öl anbraten.',
    'Karotte, Paprika und Brokkoli klein schneiden, mit Kokosmilch und 100 ml Wasser 10 Minuten weich köcheln. Zuckerschoten zum Schluss.',
    'Kinderportion mit Tofu und Gemüse abnehmen, Tofu zerbröseln.',
    'Für Erwachsene Currypaste einrühren, mit Limette und etwas Salz abschmecken.'
  ],
  nutri:{p:['Tofu'],f:['Brokkoli','Paprika','Karotten'],i:['Tofu','Brokkoli'],fat:['Kokosmilch','Rapsöl']},
  kid:'Kokosmilch ist eine milde, cremige Gewürzbrücke. Currypaste erst nach der Kinderportion einrühren.',
  leftover:'Curry-Nudeln · 8 Min. – Reste mit Reisnudeln verlängern.',
  extras:['edamame','ei'], tipp:'Zuckerschoten erst in den letzten 2 Minuten, dann bleiben sie knackig und grün.'
},
{
  id:'nudelsuppe', name:'Schnelle Gemüse-Nudelsuppe mit Ei', cuisine:'Vietnam', flag:'🇻🇳',
  protein:'ei', base:null, time:{a:10,c:20}, devices:[['topf']], method:'Ein Topf',
  allergens:['ei','soja'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Pak Choi','Karotten','Pilze','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Reisnudeln',q:70,u:'g',c:'vorrat'},
    {n:'Pak Choi oder Chinakohl',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:60,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true}
  ],
  steps:[
    'Brühe mit Ingwerscheiben aufkochen. Karotte in feine Stifte, Pilze in Scheiben, 8 Minuten köcheln.',
    'Eier 9 Minuten hart kochen, pellen und halbieren.',
    'Reisnudeln und Pak Choi in die Suppe geben, 3 bis 4 Minuten garen.',
    'Kinderschale: Nudeln gekürzt, weiches Gemüse, Ei klein geschnitten, wenig Brühe. Erwachsene mit Sojasauce und Frühlingszwiebel.'
  ],
  nutri:{p:['Eier'],f:['Pak Choi','Karotten','Pilze'],i:['Eier','Pak Choi'],fat:['Eier']},
  kid:'Nudeln kurz schneiden und nur mit wenig Brühe anbieten, damit nichts verschluckt wird. Ei hart und klein.',
  leftover:'Nudelpfanne · 8 Min. – Nudeln und Gemüse abtropfen und anbraten.',
  extras:['tofu','edamame'], tipp:'Ohne Sojasauce ist das Gericht sojafrei.'
},
{
  id:'tortilla-espanola', name:'Spanische Gemüse-Tortilla mit Tomatensalat', cuisine:'Spanien', flag:'🇪🇸',
  protein:'ei', base:'kartoffeln', time:{a:15,c:25}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Zucchini','Rote Paprika','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln',q:180,u:'g',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in dünne Scheiben, Zwiebel, Zucchini und Paprika klein schneiden. In Öl mit Deckel 15 Minuten weich dünsten.',
    'Eier verquirlen, über das Gemüse gießen und bei milder Hitze mit Deckel 8 bis 10 Minuten stocken lassen, bis alles fest ist.',
    'Tomaten würfeln, für Erwachsene mit Öl, Salz und Essig anmachen.',
    'Tortilla in Stücke schneiden. Kinderportion in kurze Streifen, Tomate gehäutet und weich.'
  ],
  nutri:{p:['Eier'],f:['Kartoffeln','Paprika','Zucchini'],i:['Eier'],fat:['Olivenöl','Eier']},
  kid:'Tortilla vollständig durchgaren. Für das Kind in Streifen schneiden, Tomate weich dünsten statt roh.',
  leftover:'Tortilla-Brot · 5 Min. – Kalte Tortilla aufs Brot, klassisch spanisch.',
  extras:['kichererbsen','feta'], tipp:'Ein Deckel ersetzt das Wenden: die Tortilla gart von oben mit.'
},
{
  id:'fakes', name:'Griechische Linsensuppe mit Kartoffeln und Joghurt', cuisine:'Griechenland', flag:'🇬🇷',
  protein:'huelsen', base:null, time:{a:10,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Karotten','Kartoffeln','Tomaten','Zwiebel'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Berglinsen oder Tellerlinsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen spülen. Zwiebel und Knoblauch in Öl anschwitzen.',
    'Linsen, Kartoffel- und Karottenwürfel, passierte Tomaten, Lorbeer, Oregano und 350 ml Wasser zugeben, 25 Minuten weich köcheln.',
    'Lorbeer entfernen, einen Teil zerdrücken, bis die Suppe dick ist.',
    'Kinderportion dick und ohne Salz mit einem Klecks Joghurt. Erwachsene mit Salz, Essig und Öl abschmecken.'
  ],
  nutri:{p:['Linsen','Joghurt'],f:['Linsen','Kartoffeln','Karotten'],i:['Linsen'],fat:['Olivenöl','Joghurt']},
  kid:'Linsen weich und dick, Joghurt bringt Milde. Ein Spritzer Zitrone hilft bei der Eisenaufnahme.',
  leftover:'Linsen-Brotaufstrich · 5 Min. – Reste pürieren und aufs Brot.',
  extras:['feta','ei'], tipp:'Fakes wird in Griechenland traditionell mit einem Schuss Essig serviert.'
},
{
  id:'seelachs-pfanne', name:'Seelachs-Gemüse-Pfanne mit Kartoffeln und Dill', cuisine:'Alltag', flag:'🐟',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zucchini','Karotten','Lauch','Kartoffeln'], season:[],
  ing:[
    {n:'Seelachsfilet',q:150,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in Würfeln 15 Minuten kochen.',
    'Lauch, Karotte und Zucchini klein schneiden, in Öl 8 Minuten weich dünsten.',
    'Fisch in Stücken auf das Gemüse legen, Deckel auf, 8 Minuten gar ziehen lassen. Gräten prüfen.',
    'Kinderportion zerpflückt und ohne Salz. Erwachsene mit Dill, Zitrone und Salz.'
  ],
  nutri:{p:['Seelachs'],f:['Kartoffeln','Karotten','Zucchini'],i:['Lauch'],fat:['Rapsöl']},
  kid:'Fisch vollständig garen, sorgfältig entgräten und zerpflücken. Gemüse weich.',
  leftover:'Fisch-Kartoffel-Puffer · 10 Min. – Reste zerdrücken, Taler formen und braten.',
  extras:['joghurt'], tipp:'Tiefgekühlter Seelachs ist günstig und lässt sich direkt aus dem Froster garen.'
},
{
  id:'airfryer-halloumi', name:'Knuspriges Ofen- oder Airfryer-Gemüse mit Halloumi und Hummus', cuisine:'Libanon', flag:'🇱🇧',
  protein:'milch', base:null, time:{a:10,c:15}, devices:[['airfryer','ofen']], method:'Airfryer oder Backofen',
  allergens:['milch','sesam','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Zucchini','Rote Paprika','Kirschtomaten','Gurke'], season:[6,7,8,9],
  ing:[
    {n:'Halloumi',q:80,u:'g',c:'kuehl'},
    {n:'Hummus',q:60,u:'g',c:'kuehl'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Vollkorn-Fladenbrot',q:1,u:'Stk.',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Za\'atar oder Thymian',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zucchini und Paprika in Stücke, mit Öl und Kräutern mischen. Im Airfryer 12 Minuten bei 190 °C oder im Ofen 18 Minuten bei 210 °C garen.',
    'Halloumi in Scheiben in den letzten 6 Minuten dazulegen.',
    'Gurke in Scheiben, Kirschtomaten längs vierteln, Brot kurz erwärmen.',
    'Mit Hummus als Dip anrichten. Kind: weiches Gemüse, Hummus, Brotstreifen; Halloumi nur wenig, da salzig.'
  ],
  nutri:{p:['Halloumi','Hummus'],f:['Fladenbrot','Paprika','Zucchini'],i:['Hummus'],fat:['Olivenöl','Halloumi']},
  kid:'Kirschtomaten längs vierteln. Halloumi ist sehr salzig, für das Kind nur ein kleines Stück oder Hummus als Eiweißquelle.',
  leftover:'Gemüse-Wrap · 5 Min. – Reste mit Hummus ins Fladenbrot rollen.',
  extras:['kichererbsen','ei'], tipp:'Ohne Airfryer funktioniert das Gericht genauso im Backofen.'
},
{
  id:'haehnchen-blech', name:'Hähnchen-Ofenblech mit Süßkartoffel und Brokkoli', cuisine:'Alltag', flag:'🍗',
  protein:'gefluegel', base:null, time:{a:10,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Süßkartoffel','Brokkoli','Rote Paprika'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Süßkartoffel',q:200,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Süßkartoffel in 2 cm Würfel, Paprika in Streifen, mit Öl und Gewürzen mischen.',
    'Hähnchen auf das Blech legen, 15 Minuten backen.',
    'Brokkoliröschen zugeben, weitere 12 bis 15 Minuten, bis das Fleisch durch ist (kein rosa Saft).',
    'Kinderportion: Hähnchen fein zerpflücken, Süßkartoffel und Brokkoli weich. Erwachsene salzen.'
  ],
  nutri:{p:['Hähnchen'],f:['Süßkartoffel','Brokkoli','Paprika'],i:['Hähnchen','Brokkoli'],fat:['Olivenöl']},
  kid:'Fleisch zerpflücken und in Soße oder mit weicher Süßkartoffel mischen, damit es nicht trocken ist.',
  leftover:'Hähnchen-Wrap · 5 Min. – Reste kalt mit Joghurt in eine Tortilla.',
  extras:['joghurt'], tipp:'Süßkartoffel wird im Airfryer in 15 Minuten knusprig.'
},
{
  id:'congee', name:'Gemüse-Congee mit weichem Ei (Reisbrei)', cuisine:'China', flag:'🇨🇳',
  protein:'ei', base:'reis', time:{a:5,c:35}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:['ei','soja'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Karotten','Pilze','Pak Choi'], season:[],
  ing:[
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Rundkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:60,u:'g',c:'gemuese'},
    {n:'Pak Choi',q:80,u:'g',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis mit der 6-fachen Menge Wasser und Ingwer aufkochen, dann 30 Minuten leise köcheln, bis ein cremiger Brei entsteht (Slow Cooker: 3 Stunden niedrig).',
    'Karotte fein würfeln, Pilze in Scheiben, nach 15 Minuten zugeben. Pak Choi in den letzten 5 Minuten.',
    'Eier 9 Minuten hart kochen und klein schneiden.',
    'Kinderportion pur. Erwachsene mit Sojasauce und Sesamöl abschmecken.'
  ],
  nutri:{p:['Eier'],f:['Karotten','Pak Choi','Pilze'],i:['Eier','Pak Choi'],fat:['Eier','Sesamöl']},
  kid:'Congee ist ein klassisches Kinderessen in China: löffelbar, warm, mild.',
  leftover:'Congee Tag 2 · 5 Min. – Mit etwas Wasser erwärmen, anderes Gemüse dazu.',
  extras:['tofu','edamame'], tipp:'Fast keine Arbeit: der Topf macht alles allein.'
},
{
  id:'koshari', name:'Ägyptisches Koshari: Reis, Linsen und Nudeln mit Tomatensoße', cuisine:'Ägypten', flag:'🇪🇬',
  protein:'huelsen', base:'reis', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:5,
  veg:['Tomaten','Zwiebel','Karotten'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:50,u:'g',c:'vorrat'},
    {n:'Reis',q:50,u:'g',c:'vorrat'},
    {n:'Kleine Nudeln (Suppennudeln)',q:30,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1.5,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen 20 Minuten weich kochen. Reis und Nudeln getrennt garen.',
    'Zwiebel in Ringen in Öl goldbraun rösten. Knoblauch, geriebene Karotte, passierte Tomaten und Kreuzkümmel 10 Minuten einkochen.',
    'Reis, Linsen und Nudeln mischen oder getrennt anrichten, Soße darüber, Röstzwiebeln obenauf.',
    'Kinderportion: weiche Mischung mit Soße, Linsen zerdrückt, ohne Röstzwiebeln und Salz.'
  ],
  nutri:{p:['Linsen','Reis','Nudeln'],f:['Linsen','Karotten','Tomaten'],i:['Linsen'],fat:['Rapsöl']},
  kid:'Linsen zerdrücken, Nudeln weich. Die Soße ist mild und säuerlich, Kinder mögen sie meist.',
  leftover:'Koshari-Pfanne · 8 Min. – Alles zusammen anbraten.',
  extras:['kichererbsen','joghurt'], tipp:'Streetfood aus Kairo: günstig, sättigend, drei Kohlenhydratquellen in einem Teller.'
},
{
  id:'erbsen-pasta', name:'Erbsen-Spinat-Pasta mit Ricotta', cuisine:'Italien', flag:'🇮🇹',
  protein:'milch', base:'nudeln', time:{a:10,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Erbsen','Babyspinat','Zucchini'], season:[5,6,7],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Ricotta',q:60,u:'g',c:'kuehl'},
    {n:'Erbsen, TK',q:100,u:'g',c:'tk'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln kochen. 4 Minuten vor Ende Erbsen und geriebene Zucchini ins Nudelwasser geben.',
    'Abgießen, etwas Kochwasser auffangen. Spinat, Ricotta und Kochwasser unterrühren, bis eine cremige Soße entsteht.',
    'Kinderportion abnehmen, Erbsen dafür zerdrücken, Nudeln kürzen.',
    'Erwachsene mit Zitronenabrieb, Parmesan, Salz und Pfeffer abschmecken.'
  ],
  nutri:{p:['Ricotta','Erbsen','Vollkornnudeln'],f:['Vollkornnudeln','Erbsen'],i:['Erbsen','Spinat'],fat:['Ricotta','Olivenöl']},
  kid:'Erbsen zerdrücken, Nudeln weich und gekürzt. Ricotta macht alles mild und cremig.',
  leftover:'Nudelauflauf · 15 Min. – Reste mit Käse im Ofen überbacken.',
  extras:['ei','kichererbsen'], tipp:'Alles in einem Topf: Gemüse gart im Nudelwasser mit.'
},
{
  id:'rote-bete-risotto', name:'Rote-Bete-Risotto mit Linsen und Apfel', cuisine:'Deutschland', flag:'🇩🇪',
  protein:'huelsen', base:'reis', time:{a:10,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Rote Bete','Apfel','Zwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Risottoreis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Linsen, trocken',q:40,u:'g',c:'vorrat'},
    {n:'Rote Bete, vorgegart',q:120,u:'g',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und in Öl glasig dünsten, Reis und Linsen 1 Minute mitrösten.',
    'Nach und nach Brühe angießen und unter Rühren 22 Minuten garen.',
    'Rote Bete fein würfeln oder reiben, Apfel reiben, in den letzten 5 Minuten einrühren.',
    'Kinderportion ohne Salz. Erwachsene mit Käse, Salz und Pfeffer vollenden.'
  ],
  nutri:{p:['Linsen','Käse'],f:['Rote Bete','Apfel','Linsen'],i:['Linsen','Rote Bete'],fat:['Olivenöl','Käse']},
  kid:'Pink gefärbter Reis macht Kindern oft Spaß. Linsen sind weich, Apfel bringt Süße.',
  leftover:'Risotto-Bällchen · 15 Min. – Reste zu Bällchen formen und im Ofen oder in der Pfanne garen.',
  extras:['feta','ei'], tipp:'Vorgegarte Rote Bete aus dem Kühlregal spart 45 Minuten.'
}
];

/* Optionale Extra-Eiweißquellen, Mengen je ZWEI Erwachsene (wie im Original). */
const EXTRAS = {
  feta:{n:'Feta',q:100,u:'g',c:'kuehl',prot:17,allergens:['milch'],diet:'vegetarisch',note:'Zerbröselt obenauf, salzig: nur für Erwachsene.'},
  tofu:{n:'Räuchertofu',q:200,u:'g',c:'kuehl',prot:34,allergens:['soja'],diet:'vegan',note:'In Würfeln knusprig braten.'},
  ei:{n:'Eier',q:2,u:'Stk.',c:'kuehl',prot:14,allergens:['ei'],diet:'vegetarisch',note:'Hart gekocht oder als Spiegelei obenauf.'},
  kichererbsen:{n:'Kichererbsen (Dose, abgetropft)',q:240,u:'g',c:'vorrat',prot:17,allergens:[],diet:'vegan',note:'Knusprig geröstet oder warm dazu.'},
  huettenkaese:{n:'Hüttenkäse',q:200,u:'g',c:'kuehl',prot:24,allergens:['milch'],diet:'vegetarisch',note:'Kalt dazu, mild und frisch.'},
  linsen:{n:'Rote Linsen, trocken',q:100,u:'g',c:'vorrat',prot:25,allergens:[],diet:'vegan',note:'In 12 Minuten weich, in Soße oder Suppe.'},
  joghurt:{n:'Griechischer Joghurt',q:200,u:'g',c:'kuehl',prot:16,allergens:['milch'],diet:'vegetarisch',note:'Als Dip oder Klecks.'},
  edamame:{n:'Edamame, TK',q:150,u:'g',c:'tk',prot:17,allergens:['soja'],diet:'vegan',note:'Kurz kochen, Erwachsene ganz, Kind zerdrückt.'},
  haehnchen:{n:'Hähnchenbrust',q:200,u:'g',c:'fisch',prot:44,allergens:[],diet:'alles',note:'In Streifen anbraten.'}
};

/* Notfallgerichte aus Vorrat und Tiefkühler */
const EMERGENCY = [
  {n:'Blitz-Polenta mit knusprigen Kichererbsen',min:15,base:3,parts:['Polenta','grüner TK-Gemüsemix','Kichererbsen (Dose)']},
  {n:'Kartoffel-Brokkoli-Blech mit Kichererbsen',min:30,base:3,parts:['Kartoffeln','Brokkoli (TK)','Kichererbsen (Dose)']},
  {n:'Nudeln mit roter Linsen-Tomatensoße',min:20,base:3,parts:['Nudeln','passierte Tomaten','rote Linsen']},
  {n:'Reis-Erbsen-Pfanne mit Ei',min:15,base:3,parts:['Reis','Erbsen (TK)','Eier']}
];

const PANTRY_CHECK = ['Nudeln (Vollkorn)','Reis','Polenta','Rote Linsen','Kichererbsen (Dose)','Weiße Bohnen (Dose)','Passierte Tomaten','Kokosmilch','TK-Erbsen','TK-Brokkoli','TK-Gemüsemix','Haferflocken','Olivenöl','Rapsöl','Milde Gewürze (Paprika, Kreuzkümmel, Kurkuma, Zimt)'];

/* Saisonkalender (Freiland und Lagerware, Deutschland), Monat 1 = Januar */
const SEASON = {
  1:['Grünkohl','Lauch','Rosenkohl','Wirsing','Pastinake','Rote Bete','Karotten (Lager)','Kartoffeln (Lager)','Kürbis (Lager)','Feldsalat','Chicorée','Schwarzwurzel'],
  2:['Grünkohl','Lauch','Rosenkohl','Wirsing','Pastinake','Rote Bete','Karotten (Lager)','Kartoffeln (Lager)','Feldsalat','Chicorée','Champignons','Topinambur'],
  3:['Lauch','Spinat','Rote Bete','Karotten (Lager)','Kartoffeln (Lager)','Feldsalat','Chicorée','Champignons','Bärlauch','Rhabarber (Ende)'],
  4:['Spinat','Spargel','Radieschen','Rhabarber','Bärlauch','Lauch','Kohlrabi','Champignons','Blattsalate','Frühlingszwiebeln'],
  5:['Spargel','Spinat','Radieschen','Kohlrabi','Blattsalate','Erbsen (Ende)','Rhabarber','Erdbeeren','Mangold','Frühlingszwiebeln','Blumenkohl'],
  6:['Erbsen','Zucchini','Blumenkohl','Brokkoli','Kohlrabi','Spinat','Mangold','Erdbeeren','Kirschen','Salatgurke','Fenchel','Dicke Bohnen'],
  7:['Zucchini','Tomaten','Paprika','Brokkoli','Blumenkohl','Gurke','Erbsen','Grüne Bohnen','Mais','Beeren','Fenchel','Aubergine'],
  8:['Tomaten','Paprika','Zucchini','Mais','Gurke','Grüne Bohnen','Brokkoli','Aubergine','Pflaumen','Mangold','Fenchel','Kürbis (Anfang)'],
  9:['Kürbis','Tomaten','Paprika','Mais','Zucchini','Brokkoli','Rote Bete','Lauch','Äpfel','Pflaumen','Trauben','Pilze'],
  10:['Kürbis','Rote Bete','Lauch','Karotten','Kartoffeln','Brokkoli','Blumenkohl','Rosenkohl','Äpfel','Birnen','Pilze','Grünkohl (Anfang)'],
  11:['Kürbis','Grünkohl','Rosenkohl','Lauch','Wirsing','Rote Bete','Karotten','Kartoffeln','Pastinake','Äpfel','Birnen','Feldsalat'],
  12:['Grünkohl','Rosenkohl','Lauch','Wirsing','Rote Bete','Karotten (Lager)','Kartoffeln (Lager)','Kürbis (Lager)','Pastinake','Feldsalat','Chicorée','Äpfel (Lager)']
};

/* Farben für die Teller-Illustration, nach Zutat */
const VEG_COLORS = {
  'Rote Paprika':'#D9472B','Tomaten':'#D33A2C','Kirschtomaten':'#D33A2C','Mais':'#E9C13B','Babyspinat':'#2F7A3E','Spinat':'#2F7A3E',
  'Brokkoli':'#3C8A49','Karotten':'#E67E22','Kürbis':'#E0862B','Zucchini':'#7CB342','Erbsen':'#6DBE45','Kartoffeln':'#E3C891',
  'Süßkartoffel':'#D97B36','Avocado':'#8DB255','Pilze':'#B8A08A','Gurke':'#88C36B','Blumenkohl':'#EFE6D2','Lauch':'#A4C86A',
  'Grünkohl':'#2E6B3F','Pak Choi':'#A8D08D','Zwiebel':'#E8D3B7','Rote Zwiebel':'#9C4F96','Zuckerschoten':'#8BC34A','Salat':'#9ACD5A',
  'Frühlingszwiebel':'#7FB95C','Rote Bete':'#8E2A4F','Apfel':'#C8D94A','Zitrone':'#F2D33D','Limette':'#B5D334'
};
const PROTEIN_COLORS = {fisch:'#F2A48C',fleisch:'#8C5A3C',gefluegel:'#E8C9A0',huelsen:'#C9A567',tofu:'#F3EBD3',ei:'#F4C542',milch:'#F7F2E4'};
const PROTEIN_LABEL = {fisch:'Fisch',fleisch:'Fleisch',gefluegel:'Geflügel',huelsen:'Hülsenfrüchte',tofu:'Tofu',ei:'Ei',milch:'Milchprodukt'};
const ALLERGEN_LABEL = {gluten:'Gluten',milch:'Milch',ei:'Ei',soja:'Soja',nuesse:'Nüsse',fisch:'Fisch',sesam:'Sesam',sellerie:'Sellerie'};
const CATEGORY_LABEL = {gemuese:'Gemüse & Obst',kuehl:'Kühlregal',fisch:'Fisch & Fleisch',vorrat:'Vorrat & Trockenes',tk:'Tiefkühl',brot:'Brot & Backwaren',gewuerz:'Öl & Gewürze (Vorrat)'};
const CATEGORY_ORDER = ['gemuese','kuehl','fisch','tk','brot','vorrat','gewuerz'];
const DEVICE_LABEL = {ofen:'Backofen',airfryer:'Airfryer',mikrowelle:'Mikrowelle',maschine:'Küchenmaschine',slowcooker:'Slow Cooker'};
