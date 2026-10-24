/* Grün geplant · Jamaika · Top 15 */
RECIPES.push(
{
  id:'jm-jerk-chicken', name:'Jerk Chicken · mildes Ofenhähnchen mit Piment, Süßkartoffel und Paprika', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'gefluegel', base:null, time:{a:15,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Süßkartoffel','Rote Paprika','Frühlingszwiebel','Limette'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Süßkartoffel',q:250,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Piment, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Frühlingszwiebel und Knoblauch fein hacken, mit Piment, Thymian, Limettensaft und der Hälfte des Öls zu einer Paste verrühren und das Hähnchen damit einreiben.',
    'Süßkartoffel in Spalten und Paprika in Streifen schneiden, mit dem restlichen Öl auf dem Blech mischen und 10 Minuten vorbacken.',
    'Hähnchen dazulegen und 20 Minuten backen, bis es innen vollständig durchgegart ist und kein rosa Fleischsaft mehr austritt.',
    'Kinderportion ungesalzen abnehmen und das Fleisch klein schneiden. Erwachsene mit Salz und nach Belieben Chiliflocken würzen.'
  ],
  nutri:{p:['Hähnchen'],f:['Süßkartoffel','Paprika'],i:['Hähnchen'],fat:['Rapsöl']},
  kidName:'Mini-Jerk-Teller',
  kid:'Hähnchen fein schneiden oder zerzupfen, Süßkartoffel weich zerdrücken. Die Piment-Marinade ist mild, Chili und Salz kommen erst danach an die Erwachsenenportion.',
  leftover:'Jerk-Wrap · 8 Min. – Hähnchen und Gemüse vollständig erhitzen und mit Salat in eine Vollkorn-Tortilla rollen.',
  extras:['joghurt'], tipp:'Wer Zeit hat, lässt das Hähnchen über Nacht in der Marinade ziehen, dann wird es besonders aromatisch.'
},
{
  id:'jm-brown-stew-chicken', name:'Brown Stew Chicken · geschmortes Hähnchen mit Paprika, Karotten und Vollkornreis', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'gefluegel', base:'reis', time:{a:15,c:35}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Rote Paprika','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen und in etwa 30 Minuten garen. Hähnchen in große Stücke schneiden und in Öl rundum 5 Minuten kräftig anbräunen.',
    'Zwiebel, Knoblauch, Karotten und Paprika in Stücken zugeben, Tomatenmark unterrühren und 3 Minuten mitbraten.',
    'Gewürfelte Tomate, Thymian und 150 ml Wasser zugeben und zugedeckt 25 Minuten schmoren, bis das Fleisch zart und vollständig durchgegart ist.',
    'Kinderportion ungesalzen abnehmen und das Fleisch klein schneiden. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Hähnchen','Vollkornreis'],f:['Vollkornreis','Karotten','Paprika'],i:['Hähnchen'],fat:['Rapsöl']},
  kidName:'Mildes Schmorhähnchen',
  kid:'Hähnchen in kleine Stücke zupfen, Karotten und Paprika weich geschmort mit etwas Soße unter den Reis mischen. Ohne Salz.',
  leftover:'Hähnchen-Reis-Pfanne · 10 Min. – Reste mit etwas Wasser in der Pfanne vollständig durcherhitzen.',
  extras:[], tipp:'Das Hähnchen gut anbräunen lassen, das gibt der Soße die typische braune Farbe ganz ohne Würzsoße.'
},
{
  id:'jm-curry-goat', name:'Curry Goat · mildes Lamm-Curry mit Kartoffeln und Karotten', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:60}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slowcooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Lammkeule, mager, gewürfelt',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Mildes Currypulver',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Fleisch mit Currypulver, Thymian, fein gehacktem Knoblauch und Ingwer mischen. Zwiebel würfeln.',
    'Fleisch in Öl rundum 5 Minuten anbraten, Zwiebel 3 Minuten mitbraten, mit 300 ml Wasser ablöschen und zugedeckt 40 Minuten schmoren (im Slowcooker 6 Stunden auf niedriger Stufe).',
    'Kartoffeln und Karotten in Würfeln zugeben und weitere 20 Minuten schmoren, bis Fleisch und Kartoffeln weich sind und die Soße sämig ist.',
    'Kinderportion ungesalzen abnehmen und das Fleisch sehr fein schneiden. Erwachsene mit Salz und nach Belieben Chiliflocken würzen.'
  ],
  nutri:{p:['Lamm'],f:['Kartoffeln','Karotten'],i:['Lamm'],fat:['Rapsöl']},
  kidName:'Mildes Lamm-Curry',
  kid:'Lamm sehr fein schneiden oder zerzupfen, Kartoffeln und Karotten in der Soße zerdrücken. Ohne Salz und Chili, das Currypulver bleibt mild.',
  leftover:'Curry-Kartoffel-Pfanne · 10 Min. – Reste mit etwas Spinat in der Pfanne vollständig durcherhitzen.',
  extras:['joghurt'], tipp:'Mit Ziegenfleisch vom Metzger wird es wie auf Jamaika, die Schmorzeit verlängert sich dann um etwa 30 Minuten.'
},
{
  id:'jm-beef-patty', name:'Jamaican Patty · Ofen-Teigtaschen mit Rinderhack, Karotten und Erbsen', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'fleisch', base:null, time:{a:20,c:22}, devices:[['pfanne'],['ofen','airfryer']], method:'Pfanne + Backofen',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Erbsen','Zwiebel','Gurke'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkorn-Tortillas',q:2,u:'Stk.',c:'brot'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Zwiebel und Karotte fein würfeln und mit dem Hack in wenig Öl 8 Minuten krümelig braten, bis kein Rosa mehr zu sehen ist.',
    'Erbsen, Thymian und 3 EL Wasser zugeben und 3 Minuten köcheln, bis die Füllung saftig ist.',
    'Füllung auf je eine Hälfte der Tortillas geben, zuklappen und die Ränder fest andrücken. Restliches Öl mit Kurkuma verrühren, die Taschen damit bestreichen und 10 bis 12 Minuten goldgelb backen.',
    'Kinderportion abnehmen, etwas abkühlen lassen und in Streifen schneiden, Gurke als Sticks dazu. Erwachsene die Füllung am Tisch mit Salz und nach Belieben Chiliflocken würzen.'
  ],
  nutri:{p:['Rindfleisch'],f:['Vollkorn-Tortillas','Erbsen','Karotten'],i:['Rindfleisch','Erbsen'],fat:['Rapsöl']},
  kidName:'Mini-Patty',
  kid:'Patty lauwarm in schmale Streifen schneiden, Erbsen in der Füllung leicht zerdrücken. Ohne Salz und Chili, die Füllung ist ungewürzt mild.',
  leftover:'Patty-Pausenbrot · 8 Min. – Übrige Taschen im Ofen oder in der Pfanne vollständig aufbacken.',
  extras:[], tipp:'Echte Patties haben einen Mürbeteig mit Kurkuma; die Tortilla-Version spart viel Fett und Zeit.'
},
{
  id:'jm-oxtail', name:'Oxtail Stew · geschmortes Rind mit weißen Bohnen, Karotten und Vollkornreis', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'fleisch', base:'reis', time:{a:15,c:75}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slowcooker + Topf',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Zwiebel','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Piment, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in Öl rundum kräftig anbraten, gewürfelte Zwiebel und Tomatenmark zugeben und 2 Minuten mitrösten.',
    'Mit 400 ml Wasser ablöschen, Thymian und Piment zugeben und zugedeckt 60 Minuten schmoren (im Slowcooker 7 Stunden auf niedriger Stufe). Nach 45 Minuten den Reis aufsetzen.',
    'Karotten in Scheiben zugeben und 10 Minuten mitgaren, dann Bohnen und Frühlingszwiebel 5 Minuten mitziehen lassen, bis das Fleisch zart ist.',
    'Kinderportion ungesalzen abnehmen, Fleisch zerzupfen und Bohnen zerdrücken. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Rindfleisch','Weiße Bohnen'],f:['Weiße Bohnen','Vollkornreis','Karotten'],i:['Rindfleisch','Weiße Bohnen'],fat:['Rapsöl']},
  kidName:'Zartes Bohnen-Rind',
  kid:'Rindfleisch sehr fein zerzupfen, Bohnen und Karotten zerdrücken und mit Soße unter den Reis mischen. Ohne Salz.',
  leftover:'Rind-Bohnen-Wrap · 8 Min. – Reste vollständig erhitzen und in eine Vollkorn-Tortilla rollen.',
  extras:[], tipp:'Original wird Ochsenschwanz geschmort; magerer Gulasch hat deutlich weniger Fett und eine kürzere Garzeit.'
},
{
  id:'jm-ackee-saltfish', name:'Ackee and Saltfish · Fischpfanne mit Ackee, Paprika und Tomaten', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'fisch', base:null, time:{a:12,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Rote Paprika','Tomaten','Zwiebel','Frühlingszwiebel'], season:[7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Ackee (Dose, abgetropft)',q:80,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Fisch in Stücke schneiden. Zwiebel, Paprika und Frühlingszwiebel klein schneiden und in Öl 5 Minuten weich dünsten.',
    'Gewürfelte Tomate und Thymian zugeben, Fisch darauflegen und zugedeckt 6 bis 8 Minuten garen, bis er sich leicht zerpflücken lässt.',
    'Ackee vorsichtig unterheben und nur 2 Minuten mitwärmen, damit sie nicht zerfällt. Fisch dabei grob zerteilen.',
    'Kinderportion ungesalzen abnehmen und nochmals auf Gräten prüfen. Erwachsene mit Salz und nach Belieben Chiliflocken würzen und mit Vollkornbrot servieren.'
  ],
  nutri:{p:['Fisch'],f:['Vollkornbrot','Paprika','Ackee'],i:['Vollkornbrot'],fat:['Ackee','Rapsöl']},
  kidName:'Mini-Fischpfanne',
  kid:'Fisch gründlich entgräten und fein zerpflücken, Paprika weich dünsten. Brot in weiche Streifen ohne harte Kruste schneiden, ohne Salz und Chili.',
  leftover:'Fisch-Toast · 6 Min. – Reste vollständig erhitzen und auf geröstetem Vollkornbrot servieren.',
  extras:['ei'], tipp:'Frischer Fisch statt Salzfisch spart Salz und Einweichzeit; Ackee gibt es als Dose im Afro-Asia-Laden, ersatzweise passt Rührei.'
},
{
  id:'jm-escovitch-fish', name:'Escovitch Fish · gebratener Fisch mit Essig-Gemüse und Kochbanane', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'fisch', base:null, time:{a:15,c:20}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kochbanane','Karotten','Rote Paprika','Rote Zwiebel'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kochbanane',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Apfelessig',q:2,u:'EL',c:'vorrat',p:true},
    {n:'Piment, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Kochbanane schälen, schräg in Scheiben schneiden und in der Hälfte des Öls pro Seite 4 Minuten weich und goldbraun braten, dann warm stellen.',
    'Fisch trocken tupfen und im restlichen Öl pro Seite 3 bis 4 Minuten braten, bis er innen nicht mehr glasig ist, dann herausnehmen.',
    'Karotten, Paprika und Zwiebel in feine Streifen schneiden und in derselben Pfanne mit 3 EL Wasser 5 Minuten weich dünsten.',
    'Kinderportion mit Fisch, Kochbanane und etwas Gemüse ohne Essig abnehmen. Restliches Gemüse mit Essig und Piment 2 Minuten einkochen, über den Fisch geben und Erwachsene mit Salz und nach Belieben Chiliflocken würzen.'
  ],
  nutri:{p:['Seelachs'],f:['Kochbanane','Karotten','Paprika'],i:[],fat:['Rapsöl']},
  kidName:'Fisch mit Gemüsestreifen',
  kid:'Fisch entgräten und zerpflücken, Gemüse vor dem Essig abnehmen und weich gedünstet in kurzen Stücken servieren. Kochbanane zerdrücken, ohne Salz und Chili.',
  leftover:'Fisch-Wrap · 8 Min. – Fisch und Gemüse vollständig erhitzen und in eine Vollkorn-Tortilla rollen.',
  extras:[], tipp:'Das Essig-Gemüse schmeckt auch kalt und hält sich im Kühlschrank zwei Tage.'
},
{
  id:'jm-steamed-fish', name:'Steamed Fish · gedämpfter Fisch mit Okra, Karotten und Thymian, dazu Reis', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'fisch', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Okra','Karotten','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Okra',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Piment, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis aufsetzen und in etwa 14 Minuten garen. Karotten in feine Stifte, Okra in Scheiben, Zwiebel und Tomate in Streifen schneiden.',
    'Gemüse in Öl 3 Minuten andünsten, Thymian, Piment und 100 ml Wasser zugeben.',
    'Fisch auf das Gemüse legen, Deckel schließen und 8 bis 10 Minuten bei mittlerer Hitze dämpfen, bis er sich leicht zerteilen lässt.',
    'Kinderportion ungesalzen abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz und nach Belieben Chiliflocken würzen.'
  ],
  nutri:{p:['Fisch'],f:['Okra','Karotten','Tomaten'],i:[],fat:['Rapsöl']},
  kidName:'Weicher Dampffisch',
  kid:'Fisch entgräten und zerpflücken, Okra und Karotten weich gedämpft in kleine Stücke schneiden und mit Reis und Sud mischen. Ohne Salz und Chili.',
  leftover:'Fisch-Reis-Pfanne · 8 Min. – Reis, Fisch und Gemüse in der Pfanne vollständig durcherhitzen.',
  extras:[], tipp:'Okra gibt es frisch oder tiefgekühlt im Asia- oder Afroshop; ersatzweise grüne Bohnen nehmen.'
},
{
  id:'jm-run-down', name:'Run Down · Lachs in Kokos-Tomaten-Soße mit Kochbanane', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'fisch', base:null, time:{a:12,c:22}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kochbanane','Tomaten','Zwiebel','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kochbanane',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Kochbanane schälen und in 1 cm dicke Scheiben schneiden. Zwiebel, Knoblauch und Frühlingszwiebel klein schneiden und in Öl 3 Minuten andünsten.',
    'Gewürfelte Tomaten, Kokosmilch, Thymian und 50 ml Wasser zugeben, Kochbanane einlegen und zugedeckt 12 Minuten köcheln, bis sie weich ist.',
    'Lachs in große Stücke schneiden, in die Soße legen und zugedeckt 6 bis 8 Minuten gar ziehen lassen.',
    'Kinderportion ungesalzen abnehmen, Lachs entgräten und zerpflücken. Erwachsene mit Salz und nach Belieben Chiliflocken würzen.'
  ],
  nutri:{p:['Lachs'],f:['Kochbanane','Tomaten'],i:[],fat:['Lachs (Omega-3)','Kokosmilch']},
  kidName:'Kokos-Lachs mit Kochbanane',
  kid:'Lachs sorgfältig entgräten und zerpflücken, Kochbanane mit der Gabel zerdrücken und mit etwas Soße mischen. Ohne Salz und Chili.',
  leftover:'Kokos-Fisch-Reis · 10 Min. – Reste vollständig erhitzen und mit Reis vom Vortag servieren.',
  extras:[], tipp:'Grüne, feste Kochbananen schmecken herzhaft wie Kartoffeln, gelbe sind süßer und weicher.'
},
{
  id:'jm-rice-and-peas', name:'Rice and Peas · Kokosreis mit Kidneybohnen, Thymian und Callaloo-Spinat', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'huelsen', base:'reis', time:{a:10,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Babyspinat','Tomaten','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Babyspinat',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Piment, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis mit Kokosmilch, 150 ml Wasser, Thymian, Piment und der Hälfte der Frühlingszwiebel aufkochen und zugedeckt 30 Minuten bei kleiner Hitze garen.',
    'Bohnen abspülen und für die letzten 5 Minuten unter den Reis heben.',
    'Für das Callaloo Knoblauch und restliche Frühlingszwiebel in Öl andünsten, gewürfelte Tomate und Spinat zugeben und 3 Minuten zusammenfallen lassen.',
    'Kinderportion ungesalzen abnehmen und die Bohnen zerdrücken. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Kidneybohnen','Vollkornreis'],f:['Kidneybohnen','Vollkornreis','Spinat'],i:['Kidneybohnen','Spinat'],fat:['Kokosmilch','Rapsöl']},
  kidName:'Kleiner Kokosreis',
  kid:'Bohnen gründlich zerdrücken und unter den weichen Reis mischen, Spinat fein hacken. Ohne Salz servieren.',
  leftover:'Reis-Bohnen-Taler · 15 Min. – Reste mit einem Ei vermengen, zu Talern formen und in der Pfanne von beiden Seiten durchbraten.',
  extras:['ei','haehnchen'], tipp:'Auf Jamaika heißen Kidneybohnen „red peas“, daher der Name des Gerichts.'
},
{
  id:'jm-stew-peas', name:'Stew Peas · Kidneybohnen-Eintopf mit Kürbis und Vollkorn-Klößchen', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'huelsen', base:null, time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kürbis','Karotten','Frühlingszwiebel'], season:[9,10,11,12],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Weizenvollkornmehl',q:30,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Kokosmilch',q:60,u:'ml',c:'vorrat'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Piment, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kürbis und Karotten würfeln, Frühlingszwiebel in Ringe und Knoblauch fein schneiden. Alles mit 350 ml Wasser, Kokosmilch, Thymian und Piment aufkochen und 10 Minuten köcheln.',
    'Mehl mit etwa 2 EL Wasser zu einem festen Teig kneten und zu fingerlangen, dünnen Klößchen rollen.',
    'Bohnen und Klößchen zugeben und 12 bis 15 Minuten leise köcheln, bis die Klößchen gar sind und der Eintopf sämig eindickt.',
    'Kinderportion ungesalzen abnehmen und einen Teil der Bohnen zerdrücken. Erwachsene mit Salz, Pfeffer und nach Belieben etwas Chili würzen.'
  ],
  nutri:{p:['Kidneybohnen','Vollkornmehl'],f:['Kidneybohnen','Vollkornmehl','Kürbis'],i:['Kidneybohnen'],fat:['Kokosmilch']},
  kidName:'Bohnen-Eintopf mit Klößchen',
  kid:'Bohnen und Kürbis grob zerdrücken, Klößchen in kleine Stücke schneiden. Ohne Salz und Chili servieren.',
  leftover:'Bohnen-Reis · 8 Min. – Eintopfreste mit Reis vom Vortag vollständig erhitzen.',
  extras:[], tipp:'Die Klößchen heißen auf Jamaika „spinners“ und werden zwischen den Handflächen gerollt.'
},
{
  id:'jm-ital-stew', name:'Ital Stew · Rasta-Gemüseeintopf mit Kichererbsen, Süßkartoffel und Kokos', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'huelsen', base:null, time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Süßkartoffel','Karotten','Grüne Bohnen','Babyspinat'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Süßkartoffel',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Grüne Bohnen',q:80,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Piment, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel würfeln und in Öl glasig dünsten. Süßkartoffel und Karotten in Würfel schneiden und mit Thymian und Piment 2 Minuten mitdünsten.',
    'Kokosmilch und 250 ml Wasser angießen und 15 Minuten köcheln.',
    'Grüne Bohnen in Stücken und Kichererbsen zugeben und 8 Minuten weitergaren, zum Schluss den Spinat unterheben.',
    'Kinderportion abnehmen und die Kichererbsen zerdrücken. Erwachsene nach Belieben mit Pfeffer und Chili würzen, die Ital-Küche kommt traditionell ohne Salz aus.'
  ],
  nutri:{p:['Kichererbsen'],f:['Kichererbsen','Süßkartoffel','Grüne Bohnen'],i:['Kichererbsen','Spinat'],fat:['Kokosmilch']},
  kidName:'Kokos-Gemüse-Eintopf',
  kid:'Kichererbsen gründlich zerdrücken, Bohnen in kleine Stücke schneiden und das Gemüse weich garen. Kommt ohne Salz und Schärfe aus.',
  leftover:'Ital-Bowl · 8 Min. – Reste vollständig erhitzen und über Reis oder Quinoa geben.',
  extras:['tofu'], tipp:'Die Ital-Küche der Rastafari verzichtet auf Salz, Kräuter und Piment geben genug Geschmack.'
},
{
  id:'jm-callaloo', name:'Callaloo · Spinat-Tomaten-Pfanne mit Ei und Vollkornbrot', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Babyspinat','Tomaten','Zwiebel','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Babyspinat',q:150,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel, Frühlingszwiebel und Knoblauch fein schneiden und in Öl 3 Minuten andünsten.',
    'Gewürfelte Tomate und Thymian zugeben, Spinat portionsweise unterheben und 2 Minuten zusammenfallen lassen.',
    'Mulden formen, Eier hineinschlagen und zugedeckt 6 bis 8 Minuten garen, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und nach Belieben Chiliflocken würzen und mit Vollkornbrot servieren.'
  ],
  nutri:{p:['Eier'],f:['Vollkornbrot','Spinat','Tomaten'],i:['Eier','Spinat'],fat:['Rapsöl','Eier']},
  kidName:'Spinat-Ei mit Brotstreifen',
  kid:'Ei vollständig durchgaren und klein schneiden, Spinat fein hacken. Brot in weiche Streifen ohne harte Kruste schneiden, ohne Salz.',
  leftover:'Callaloo-Toast · 5 Min. – Gemüsereste erhitzen und auf geröstetem Vollkornbrot verteilen.',
  extras:['kichererbsen'], tipp:'Callaloo ist auf Jamaika ein Blattgemüse aus Amarant; Spinat oder Mangold sind der beste Ersatz.'
},
{
  id:'jm-jerk-tofu', name:'Jerk Tofu · gebratener Tofu mit Piment, Paprika und Ananas-Salsa', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'tofu', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Ananas','Rote Paprika','Frühlingszwiebel','Limette'], season:[],
  ing:[
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Ananas',q:80,u:'g',c:'gemuese',hint:'frisch oder aus der Dose im eigenen Saft'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Piment, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis aufsetzen und in etwa 14 Minuten garen. Tofu trocken tupfen, würfeln und mit Piment, Thymian und etwas Limettensaft mischen.',
    'Tofu in Öl rundum 8 Minuten goldbraun braten, Paprika in Streifen zugeben und 4 Minuten mitbraten.',
    'Ananas und Frühlingszwiebel klein würfeln und mit dem restlichen Limettensaft zu einer Salsa mischen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Belieben Chiliflocken würzen und mit Reis und Salsa servieren.'
  ],
  nutri:{p:['Tofu'],f:['Ananas','Paprika','Reis'],i:['Tofu'],fat:['Rapsöl']},
  kidName:'Tofu-Würfel mit Ananas',
  kid:'Tofu in kleine weiche Stücke schneiden oder zerbröseln, Ananas fein würfeln, Paprika weich braten. Ohne Salz und Chili.',
  leftover:'Jerk-Reis-Pfanne · 8 Min. – Reis und Tofu mit Erbsen in der Pfanne vollständig durchbraten.',
  extras:['edamame'], tipp:'Tofu vorher in ein Küchentuch wickeln und beschweren, dann nimmt er die Marinade besser auf.'
},
{
  id:'jm-turn-cornmeal', name:'Turn Cornmeal · cremige Kokos-Polenta mit Okra, Tomaten und weißen Bohnen', cuisine:'Jamaika', flag:'🇯🇲',
  protein:'huelsen', base:'polenta', time:{a:10,c:14}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Okra','Tomaten','Zwiebel','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Okra',q:80,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Zwiebel, Frühlingszwiebel und Tomate würfeln, Okra in Scheiben schneiden und alles in Öl 5 Minuten andünsten.',
    'Kokosmilch, 200 ml Wasser und Thymian zugeben und aufkochen. Polenta unter ständigem Rühren einrieseln lassen.',
    'Bohnen unterheben und 6 bis 8 Minuten bei kleiner Hitze unter Rühren garen, bis die Polenta cremig und dick ist.',
    'Kinderportion ungesalzen abnehmen und die Bohnen zerdrücken. Erwachsene mit Salz, Pfeffer und nach Belieben Chiliflocken würzen.'
  ],
  nutri:{p:['Weiße Bohnen'],f:['Weiße Bohnen','Okra','Tomaten'],i:['Weiße Bohnen'],fat:['Kokosmilch']},
  kidName:'Kokos-Polenta mit Bohnen',
  kid:'Polenta lauwarm und weich servieren, Bohnen zerdrücken und Okra klein schneiden. Ohne Salz und Chili.',
  leftover:'Polenta-Schnitten · 15 Min. – Kalte Polenta in Scheiben schneiden und in der Pfanne von beiden Seiten goldbraun braten.',
  extras:['ei'], tipp:'Statt Okra passen grüne Bohnen oder Zucchini genauso gut.'
}
);
