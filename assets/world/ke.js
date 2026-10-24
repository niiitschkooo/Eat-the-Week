/* Grün geplant · Kenia · Top 15 */
RECIPES.push(
{
  id:'ke-nyama-choma', name:'Nyama Choma · Ofen-Rindfleisch mit Kachumbari und Kartoffelspalten', cuisine:'Kenia', flag:'🇰🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Tomaten','Rote Zwiebel','Limette','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rinderhüftsteak',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls mischen und auf dem Blech 15 Minuten backen.',
    'Rindfleisch in große Würfel schneiden und mit restlichem Öl, gehacktem Knoblauch und Paprikapulver mischen. Zu den Kartoffeln legen und 12 bis 15 Minuten braten, bis es durchgegart ist, dabei einmal wenden.',
    'Für Kachumbari Tomaten und Zwiebel sehr fein würfeln und mit gehacktem Koriander und Limettensaft mischen.',
    'Kinderportion ohne Salz abnehmen, Kachumbari für das Kind ohne rohe Zwiebel. Erwachsene salzen Fleisch und Salat und nehmen nach Wunsch Chili dazu.'
  ],
  kidName:'Zartes Ofenfleisch mit Kartoffelspalten',
  kid:'Fleisch für das Kind sehr fein schneiden oder zerzupfen, Kartoffeln weich backen. Tomaten fein gewürfelt ohne rohe Zwiebel, ohne Salz und Chili.',
  leftover:'Nyama-Wrap · 8 Min. – Fleischreste in Streifen schneiden, vollständig erhitzen und mit Kachumbari in eine Tortilla rollen.',
  tipp:'In Kenia ist Nyama Choma meist Ziege vom Grill; mageres Rind aus der Hüfte ist im Ofen eine gute Alltagsvariante.'
},
{
  id:'ke-pilau', name:'Pilau · Gewürzreis mit Rindfleisch, Karotten und Erbsen', cuisine:'Kenia', flag:'🇰🇪',
  protein:'fleisch', base:'reis', time:{a:15,c:55}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Karotten','Erbsen'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in feine Streifen schneiden und in Öl 8 Minuten goldbraun braten. Gehackten Knoblauch, geriebenen Ingwer, Garam Masala und Kreuzkümmel 1 Minute mitrösten.',
    'Rindfleisch in kleine Würfel schneiden, zugeben und rundum anbraten. Mit 200 ml Wasser zugedeckt 20 Minuten schmoren.',
    'Reis waschen, mit gewürfelten Karotten und weiteren 150 ml Wasser zugeben und zugedeckt bei kleiner Hitze 25 Minuten garen. Erbsen darauf streuen und 5 Minuten mitdämpfen.',
    'Kinderportion ohne Salz abnehmen und das Fleisch fein schneiden. Erwachsene salzen und mit Kachumbari oder Chili servieren.'
  ],
  kidName:'Mildes Gewürzreis-Schälchen',
  kid:'Fleisch sehr fein schneiden und unter den weichen Reis mischen, Erbsen leicht zerdrücken. Die Gewürze sind mild, Salz erst nach der Kinderportion.',
  leftover:'Pilau-Pfanne · 10 Min. – Reste mit Spinat und einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Pilau ist das Festessen an Kenias Küste; der Gewürzmix heißt dort Pilau Masala und ähnelt Garam Masala.'
},
{
  id:'ke-samosa', name:'Samosa aus dem Ofen · Teigtaschen mit Rinderhack, Erbsen und Kachumbari', cuisine:'Kenia', flag:'🇰🇪',
  protein:'fleisch', base:null, time:{a:25,c:20}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Erbsen','Karotten','Zwiebel','Tomaten','Gurke'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkorn-Tortillas',q:1.5,u:'Stk.',c:'brot'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Garam Masala',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Zwiebel und Karotte fein würfeln und in der Hälfte des Öls 3 Minuten dünsten. Hack zugeben und krümelig braten, bis es nicht mehr rosa ist.',
    'Erbsen und Garam Masala zugeben und 3 Minuten mitgaren, gehackten Koriander unterrühren und die Füllung etwas abkühlen lassen.',
    'Tortillas halbieren, jede Hälfte zu einer Tüte falten, füllen und den Rand mit etwas Wasser verkleben. Dünn mit Öl bestreichen und 12 bis 15 Minuten goldbraun backen. Inzwischen Tomate und Gurke für Kachumbari klein würfeln.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen den Salat und nehmen nach Wunsch Chilisoße zum Tunken dazu.'
  ],
  kidName:'Mini-Samosa-Streifen',
  kid:'Samosa aufschneiden, harte Teigspitzen entfernen und die Füllung mit weichen Teigstücken anbieten. Erbsen leicht zerdrücken, kein Salz und keine Chili.',
  leftover:'Hack-Erbsen-Reis · 10 Min. – Übrige Füllung mit gekochtem Reis in der Pfanne vollständig erhitzen.',
  tipp:'Vollkorn-Tortillas ersetzen den Samosa-Teig: halbiert und zur Tüte gefaltet werden sie im Ofen knusprig, ganz ohne Frittieren.'
},
{
  id:'ke-kuku-paka', name:'Kuku Paka · Hähnchen in Kokos-Kurkuma-Soße mit Reis', cuisine:'Kenia', flag:'🇰🇪',
  protein:'gefluegel', base:'reis', time:{a:15,c:22}, devices:[['topf'],['pfanne']], method:'Pfanne + Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Tomaten','Rote Paprika'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen. Hähnchen in Würfel schneiden, in Öl rundum 4 Minuten anbraten und herausnehmen.',
    'Zwiebel, Paprika, Knoblauch und Ingwer fein würfeln und 4 Minuten dünsten, Kurkuma kurz mitrösten. Tomate würfeln und 3 Minuten einkochen.',
    'Kokosmilch und 50 ml Wasser angießen, Hähnchen zurückgeben und 10 Minuten sanft köcheln, bis es durchgegart ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen, nach Wunsch mit Chili schärfen und mit Reis servieren.'
  ],
  kidName:'Mildes Kokoshähnchen mit Reis',
  kid:'Hähnchen fein schneiden oder zerzupfen und mit Kokossoße und Reis mischen. Kokos und Kurkuma machen es mild, ohne Salz und Chili.',
  leftover:'Kokos-Reis-Pfanne · 10 Min. – Reste mit Erbsen in der Pfanne vollständig erhitzen.',
  tipp:'Original wird das Hähnchen vorher über Holzkohle gegrillt; wer mag, bräunt es kurz unter dem Ofengrill.'
},
{
  id:'ke-kuku-kienyeji', name:'Kuku wa Kienyeji · Hähnchen-Tomaten-Eintopf mit Kartoffeln und Karotten', cuisine:'Kenia', flag:'🇰🇪',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Kartoffeln','Karotten','Rote Paprika','Zwiebel'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Knoblauch würfeln und in Öl 4 Minuten dünsten. Hähnchen in Stücke schneiden, zugeben und rundum anbraten, Currypulver kurz mitrösten.',
    'Tomaten und Paprika würfeln, zugeben und 5 Minuten zu einer dicken Soße einkochen.',
    'Kartoffeln und Karotten in Stücke schneiden, mit 250 ml Wasser zugeben und zugedeckt 20 Minuten köcheln, bis alles weich und das Hähnchen durchgegart ist. Gehackten Koriander darüber streuen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen und nach Wunsch mit Chili schärfen.'
  ],
  kidName:'Hähnchen-Kartoffel-Topf mild',
  kid:'Hähnchen fein zerzupfen und mit weich zerdrückten Kartoffeln und Karotten mischen. Ohne Salz und Chili.',
  leftover:'Hähnchen-Chapati · 8 Min. – Reste vollständig erhitzen und in eine warme Vollkorn-Tortilla rollen.',
  tipp:'Kienyeji heißt eigentlich Freilandhuhn vom Hof; mit Hähnchenschenkeln wird der Eintopf ähnlich saftig.'
},
{
  id:'ke-samaki-wet-fry', name:'Samaki Wet Fry · Fisch in Tomaten-Zwiebel-Soße mit Ugali und Sukuma', cuisine:'Kenia', flag:'🇰🇪',
  protein:'fisch', base:'polenta', time:{a:15,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Grünkohl'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Grünkohl oder Spinat',q:100,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Polenta in 300 ml Wasser unter Rühren 10 Minuten zu festem, aber weichem Ugali kochen.',
    'Zwiebel, Paprika und Knoblauch würfeln und in Öl 4 Minuten dünsten. Tomaten würfeln und mit Kurkuma und dem fein geschnittenen Grünkohl zugeben, 6 Minuten einkochen.',
    'Fisch in große Stücke schneiden, in die Soße legen und zugedeckt 6 bis 8 Minuten sanft garen, bis er sich leicht zerteilen lässt. Gehackten Koriander darüber streuen.',
    'Kinderportion ohne Salz abnehmen und den Fisch auf Gräten prüfen. Erwachsene salzen, mit Chili nachwürzen und mit Ugali essen.'
  ],
  kidName:'Fisch-Tomaten-Soße mit Ugali',
  kid:'Fisch vollständig durchgaren, entgräten und zerpflücken. Mit Soße und weichem Ugali mischen, Grünkohl sehr fein und weich, ohne Salz.',
  leftover:'Ugali-Ecken · 10 Min. – Kaltes Ugali in Scheiben schneiden, in wenig Öl anbraten und mit der restlichen Soße vollständig erhitzt servieren.',
  tipp:'Am Viktoriasee wird dafür Tilapia genommen; Ugali wird klassisch mit der Hand zu Bällchen geformt und in die Soße getunkt.'
},
{
  id:'ke-samaki-kupaka', name:'Samaki wa Kupaka · Ofenfisch mit Kokos-Limetten-Soße und Vollkornreis', cuisine:'Kenia', flag:'🇰🇪',
  protein:'fisch', base:'reis', time:{a:15,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Paprika','Limette','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen und den Ofen auf 200 °C vorheizen. Knoblauch und Ingwer fein reiben und mit Kokosmilch, Kurkuma und Limettensaft verrühren.',
    'Tomaten und Paprika würfeln und in eine Auflaufform geben. Fisch darauf legen und mit der Kokossoße begießen.',
    'Im Ofen 18 bis 20 Minuten garen, bis sich der Fisch leicht zerteilen lässt, dann gehackten Koriander darüber streuen.',
    'Kinderportion ohne Salz abnehmen und den Fisch zerpflücken. Erwachsene salzen und nach Wunsch frische Chili dazu nehmen.'
  ],
  kidName:'Kokosfisch mit Reis',
  kid:'Fisch vollständig durchgaren, sorgfältig entgräten und mit Kokossoße unter den weichen Reis mischen. Ohne Salz und Chili.',
  leftover:'Kokos-Fisch-Reis · 8 Min. – Reste mit etwas Wasser in der Pfanne vollständig erhitzen und mit Spinat ergänzen.',
  tipp:'Kupaka heißt bestreichen: An der Küste wird der Fisch über Holzkohle gegrillt und immer wieder mit der Kokossoße bepinselt.'
},
{
  id:'ke-githeri', name:'Githeri · Mais-Bohnen-Eintopf mit Tomaten, Karotten und Spinat', cuisine:'Kenia', flag:'🇰🇪',
  protein:'huelsen', base:null, time:{a:8,c:16}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Mais','Tomaten','Karotten','Zwiebel','Spinat'], season:[],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Mais (Dose oder TK)',q:100,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Karotte klein würfeln und in Öl 4 Minuten dünsten, Currypulver kurz mitrösten.',
    'Tomaten würfeln, zugeben und 4 Minuten einkochen. Bohnen abspülen und mit dem Mais und 100 ml Wasser zugeben.',
    'Zugedeckt 8 Minuten köcheln, bis die Karotten weich sind, dann den Spinat unterheben.',
    'Kinderportion ohne Salz abnehmen, Bohnen und Mais gründlich zerdrücken. Erwachsene salzen und nach Wunsch mit Chili servieren.'
  ],
  kidName:'Bohnen-Mais-Mus',
  kid:'Mais und Bohnen gründlich zerdrücken, ganze Maiskörner sind für Kleinkinder ein Verschluckrisiko. Ohne Salz und Chili, Karotten weich.',
  leftover:'Githeri-Pfanne · 10 Min. – Reste mit gewürfelten Kartoffeln vom Vortag in der Pfanne vollständig durchbraten.',
  tipp:'Original mit getrocknetem Mais und Bohnen, die stundenlang kochen; mit Dosenware ist Githeri in 25 Minuten fertig.'
},
{
  id:'ke-mukimo', name:'Mukimo · Kartoffel-Erbsen-Stampf mit Mais, Spinat und weißen Bohnen', cuisine:'Kenia', flag:'🇰🇪',
  protein:'huelsen', base:'kartoffeln', time:{a:15,c:20}, devices:[['topf']], method:'Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Erbsen','Mais','Spinat','Avocado'], season:[],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Mais (Dose oder TK)',q:50,u:'g',c:'vorrat'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in Stücke schneiden und in 15 Minuten weich kochen. In den letzten 4 Minuten Erbsen und Mais mitkochen.',
    'Spinat fein schneiden und 1 Minute im Kochwasser zusammenfallen lassen, dann alles abgießen und etwas Kochwasser auffangen.',
    'Bohnen abspülen, mit Öl und fein geschnittener Frühlingszwiebel zugeben und alles mit etwas Kochwasser grob zu einem grünen Stampf zerdrücken.',
    'Kinderportion ohne Salz abnehmen und Avocado in Streifen dazulegen. Erwachsene salzen den Stampf und essen ihn mit Avocado und nach Wunsch Chili.'
  ],
  kidName:'Grüner Kartoffelstampf',
  kid:'Alles fein zerstampfen, Mais und Erbsen dürfen nicht ganz bleiben. Avocado in weichen Streifen dazu, ohne Salz.',
  leftover:'Mukimo-Taler · 15 Min. – Reste zu flachen Talern formen und in wenig Öl von beiden Seiten vollständig durchbraten.',
  tipp:'In Kenia färben Kürbisblätter den Mukimo grün; Spinat gibt dieselbe Farbe und ist leichter zu bekommen.'
},
{
  id:'ke-sukuma-mayai', name:'Sukuma Wiki na Mayai · Grünkohl-Tomaten-Pfanne mit Ei und Ugali', cuisine:'Kenia', flag:'🇰🇪',
  protein:'ei', base:'polenta', time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Grünkohl','Tomaten','Zwiebel'], season:[10,11,12,1,2],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Grünkohl oder Spinat',q:150,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Polenta in 300 ml Wasser unter Rühren 8 bis 10 Minuten zu weichem Ugali kochen.',
    'Zwiebel und Knoblauch würfeln und in Öl 3 Minuten dünsten. Grünkohl sehr fein schneiden, mit gewürfelter Tomate und Koriander zugeben und zugedeckt 7 Minuten weich dünsten.',
    'Eier verquirlen, über das Gemüse gießen und unter Rühren 2 bis 3 Minuten garen, bis sie vollständig gestockt sind.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen, pfeffern und nach Wunsch mit Chili würzen.'
  ],
  kidName:'Rührei mit weichem Grün und Ugali',
  kid:'Rührei vollständig stocken lassen, Grünkohl sehr fein schneiden und weich garen. Ugali weich lassen, ohne Salz.',
  leftover:'Grünkohl-Omelett · 10 Min. – Gemüsereste mit zwei verquirlten Eiern in der Pfanne zugedeckt vollständig stocken lassen.',
  tipp:'Sukuma Wiki heißt so viel wie die Woche strecken: günstiges Blattgemüse, das in Kenia fast täglich auf den Tisch kommt.'
},
{
  id:'ke-chapo-madondo', name:'Chapo Madondo · Bohneneintopf mit selbst gebackenem Vollkorn-Chapati', cuisine:'Kenia', flag:'🇰🇪',
  protein:'huelsen', base:null, time:{a:25,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten','Rote Paprika'], season:[],
  ing:[
    {n:'Borlottibohnen (Dose, abgetropft)',q:140,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Weizenvollkornmehl',q:60,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1.5,u:'EL',c:'gewuerz',p:true},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl mit 1 TL Öl und etwa 40 ml warmem Wasser zu einem weichen Teig kneten und 10 Minuten abgedeckt ruhen lassen.',
    'Zwiebel, Karotte und Paprika würfeln und in Öl 4 Minuten dünsten, Currypulver kurz mitrösten. Tomaten würfeln, zugeben und 4 Minuten einkochen. Bohnen abspülen, mit 100 ml Wasser zugeben und 10 Minuten köcheln.',
    'Teig zu dünnen Fladen ausrollen, mit wenig Öl bestreichen und in der heißen Pfanne je Seite 1 bis 2 Minuten backen, bis braune Flecken entstehen. Gehackten Koriander über die Bohnen streuen.',
    'Kinderportion ohne Salz abnehmen und Bohnen zerdrücken. Erwachsene salzen und nach Wunsch Chili dazu nehmen.'
  ],
  kidName:'Bohnenmus mit weichem Chapati',
  kid:'Bohnen gründlich zerdrücken und mit der Soße mischen. Chapati in schmale weiche Streifen reißen, ohne Salz und Chili.',
  leftover:'Bohnen-Chapati-Rolle · 5 Min. – Bohnenreste vollständig erhitzen und in übrige Chapati rollen.',
  tipp:'Madondo sind in Kenia meist Rosecoco-Bohnen, Borlotti kommen ihnen am nächsten; den Chapati-Teig kann man morgens kneten und abends nur noch backen.'
},
{
  id:'ke-ndengu', name:'Ndengu · Mungbohnen-Curry mit Tomate, Kokos und Vollkorn-Chapati', cuisine:'Kenia', flag:'🇰🇪',
  protein:'huelsen', base:null, time:{a:10,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Spinat'], season:[],
  ing:[
    {n:'Mungbohnen, trocken',q:65,u:'g',c:'vorrat'},
    {n:'Vollkorn-Tortillas',q:1,u:'Stk.',c:'brot'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Kokosmilch',q:50,u:'ml',c:'vorrat'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mungbohnen abspülen und in 400 ml Wasser 30 Minuten weich kochen.',
    'Zwiebel, Knoblauch und Ingwer fein würfeln und in der Pfanne in Öl 4 Minuten dünsten, Currypulver kurz mitrösten. Tomaten würfeln und 5 Minuten einkochen.',
    'Gekochte Mungbohnen mit etwas Kochwasser und der Kokosmilch zugeben, 5 Minuten köcheln und den Spinat unterheben. Tortillas kurz in einer trockenen Pfanne erwärmen.',
    'Kinderportion ohne Salz abnehmen und Bohnen zerdrücken. Erwachsene salzen, nach Wunsch Chili dazu nehmen und mit den Chapati-Tortillas essen.'
  ],
  kidName:'Mungbohnen-Mus mit Chapati-Streifen',
  kid:'Mungbohnen sehr weich kochen und zerdrücken, Spinat fein hacken. Tortilla in schmale weiche Streifen schneiden, ohne Salz und Chili.',
  leftover:'Ndengu-Reis · 8 Min. – Reste mit gekochtem Reis vollständig erhitzen.',
  tipp:'Über Nacht eingeweicht garen Mungbohnen in 15 Minuten; Vollkorn-Tortillas sind ein schneller Ersatz für frisches Chapati.'
},
{
  id:'ke-mayai-curry', name:'Mayai Curry · Eier in milder Tomaten-Kokos-Soße mit Erbsen und Reis', cuisine:'Kenia', flag:'🇰🇪',
  protein:'ei', base:'reis', time:{a:8,c:16}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Erbsen'], season:[],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kokosmilch',q:50,u:'ml',c:'vorrat'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen. Eier in 9 Minuten hart kochen, abschrecken und schälen.',
    'Zwiebel und Knoblauch fein würfeln und in Öl 4 Minuten dünsten, Currypulver kurz mitrösten.',
    'Tomaten, Kokosmilch und Erbsen zugeben und 8 Minuten köcheln. Eier halbieren und 2 Minuten in der Soße ziehen lassen.',
    'Kinderportion ohne Salz abnehmen und das Ei klein schneiden. Erwachsene salzen und nach Wunsch Chili und Koriander dazu nehmen.'
  ],
  kidName:'Eier-Erbsen-Soße mit Reis',
  kid:'Hart gekochtes Ei klein schneiden, Erbsen leicht zerdrücken und alles mit Reis und milder Soße mischen. Ohne Salz und Chili.',
  leftover:'Curry-Reis-Pfanne · 8 Min. – Reste in der Pfanne vollständig erhitzen und mit Spinat ergänzen.',
  tipp:'In Kenia ein günstiges Alltagsgericht, das mit Chapati genauso gut schmeckt wie mit Reis.'
},
{
  id:'ke-kamande', name:'Kamande · braune Linsen in Tomaten-Koriander-Soße mit Vollkornreis', cuisine:'Kenia', flag:'🇰🇪',
  protein:'huelsen', base:'reis', time:{a:10,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten','Rote Paprika','Kräuter'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen. Linsen abspülen, in 400 ml Wasser 25 Minuten weich kochen und abgießen.',
    'Im selben Topf Zwiebel, Knoblauch, Karotte und Paprika würfeln und in Öl 5 Minuten dünsten, Kreuzkümmel kurz mitrösten. Tomaten würfeln und 5 Minuten einkochen.',
    'Linsen untermischen, 5 Minuten mitköcheln und gehackten Koriander unterrühren.',
    'Kinderportion ohne Salz abnehmen und Linsen leicht zerdrücken. Erwachsene salzen, nach Wunsch frische Chili dazu nehmen und mit Reis servieren.'
  ],
  kidName:'Weiche Tomatenlinsen mit Reis',
  kid:'Linsen sehr weich kochen und leicht zerdrücken, Gemüse fein würfeln. Mit Reis mischen, ohne Salz und Chili.',
  leftover:'Linsen-Wrap · 5 Min. – Reste vollständig erhitzen und mit Avocado in eine Vollkorn-Tortilla rollen.',
  tipp:'Kamande ist das Kikuyu-Wort für Linsen; der Eintopf schmeckt auch mit Ugali oder Chapati.'
},
{
  id:'ke-njahi', name:'Njahi · schwarze Bohnen mit Kochbananen-Stampf und Spinat', cuisine:'Kenia', flag:'🇰🇪',
  protein:'huelsen', base:null, time:{a:8,c:16}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kochbanane','Tomaten','Zwiebel','Spinat'], season:[],
  ing:[
    {n:'Schwarze Bohnen (Dose, abgetropft)',q:140,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kochbanane',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kochbananen schälen, in kleine Stücke schneiden und in Wasser 15 Minuten weich kochen.',
    'Zwiebel und Knoblauch würfeln und in Öl 4 Minuten dünsten, Kreuzkümmel kurz mitrösten. Tomate würfeln und 3 Minuten mitgaren.',
    'Bohnen abspülen, mit 50 ml Wasser zugeben und 5 Minuten köcheln, dabei einen Teil zerdrücken. Spinat unterheben. Kochbananen abgießen und mit etwas Kochwasser stampfen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene salzen und nach Wunsch Chili dazu nehmen.'
  ],
  kidName:'Bohnen-Kochbananen-Mus',
  kid:'Bohnen gründlich zerdrücken und mit dem weichen Kochbananen-Stampf mischen, Spinat fein gehackt. Ohne Salz und Chili.',
  leftover:'Bohnen-Bananen-Taler · 15 Min. – Reste zu Talern formen und in wenig Öl von beiden Seiten vollständig durchbraten.',
  tipp:'Bei den Kikuyu gilt Njahi als stärkendes Essen für junge Mütter; klassisch wird es mit reifen Bananen gestampft.'
}
);
