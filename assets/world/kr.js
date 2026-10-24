/* Grün geplant · Korea · Top 15 */
RECIPES.push(
{
  id:'kr-bibimbap', name:'Bibimbap · bunte Reisschale mit Gemüse und Ei', cuisine:'Korea', flag:'🇰🇷',
  protein:'ei', base:'reis', time:{a:20,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','soja','gluten','sesam'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:5,
  veg:['Karotten','Zucchini','Spinat','Pilze','Sprossen'], season:[6,7,8,9],
  ing:[
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:50,u:'g',c:'gemuese'},
    {n:'Mungobohnensprossen',q:50,u:'g',c:'gemuese'},
    {n:'Gochujang',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser etwa 30 Minuten garen.',
    'Karotte und Zucchini in feine Stifte und Pilze in Scheiben schneiden. Gemüse nacheinander in wenig Öl je 2 bis 3 Minuten weich braten und getrennt beiseitestellen.',
    'Spinat und Sprossen mit 2 EL Wasser 3 Minuten dünsten, bis die Sprossen durchgegart sind, und mit Sesamöl mischen.',
    'Eier im restlichen Öl als Spiegeleier braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ohne Gochujang abnehmen. Für die Erwachsenen Reis mit Gemüse und Ei anrichten, Gochujang mit 1 EL Wasser verrühren und untermischen.'
  ],
  kidName:'Mini-Bibimbap',
  kid:'Ei vollständig durchgaren und klein schneiden, Gemüse weich dünsten, ohne Gochujang und Salz als kleine getrennte Häufchen anbieten.',
  leftover:'Bibimbap-Reispfanne · 8 Min. – Reste in einer heißen Pfanne anbraten, bis sich eine knusprige Reiskruste bildet.',
  tipp:'In der heißen Steinschale heißt das Gericht Dolsot Bibimbap, eine gusseiserne Pfanne erzeugt die gleiche Kruste.'
},
{
  id:'kr-bulgogi', name:'Bulgogi · Rindfleisch in Birnenmarinade mit Reis und Salatblättern', cuisine:'Korea', flag:'🇰🇷',
  protein:'fleisch', base:'reis', time:{a:15,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja','gluten','sesam'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Zwiebel','Karotten','Salat'], season:[],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Birne',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:50,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen, mit der 1,25-fachen Menge Wasser aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen.',
    'Birne und Knoblauch fein reiben, mit Sesamöl unter das Fleisch mischen und 10 Minuten ziehen lassen. Zwiebel in Streifen und Karotte in feine Stifte schneiden.',
    'Fleisch in Öl in einer sehr heißen Pfanne 2 bis 3 Minuten braten, Zwiebel und Karotte zugeben und 3 Minuten mitbraten.',
    'Kinderportion ohne Sojasauce abnehmen. Sojasauce in den Rest rühren, 1 Minute schwenken und mit Reis und Salatblättern zum Einwickeln servieren.'
  ],
  kidName:'Zartes Birnen-Rind',
  kid:'Rindfleisch sehr fein schneiden und mit Reis mischen, die Birne macht es mild und zart. Karotte weich garen, Salat in kleinen Stücken.',
  leftover:'Bulgogi-Kimbap · 15 Min. – Reis und Fleischreste mit Gurke in Nori-Blätter rollen.',
  tipp:'Die geriebene Birne macht das Fleisch zart und ersetzt Zucker in der Marinade.'
},
{
  id:'kr-dakgalbi', name:'Dakgalbi · Hähnchen-Pfanne mit Kohl und Süßkartoffel', cuisine:'Korea', flag:'🇰🇷',
  protein:'gefluegel', base:null, time:{a:15,c:20}, devices:[['pfanne']], method:'Pfanne mit Deckel',
  allergens:['soja','gluten','sesam'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Weißkohl','Süßkartoffel','Zwiebel','Frühlingszwiebel'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Süßkartoffel',q:200,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Gochujang',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Süßkartoffel schälen und in 1 cm dicke Scheiben, Kohl in breite Streifen und Zwiebel in Spalten schneiden. Hähnchen in mundgerechte Stücke schneiden und Knoblauch fein reiben.',
    'Hähnchen in Öl 5 Minuten anbraten. Süßkartoffel, Zwiebel, Knoblauch und 100 ml Wasser zugeben und zugedeckt 8 Minuten garen.',
    'Kohl zugeben und weitere 6 Minuten zugedeckt garen, bis die Süßkartoffel weich und das Hähnchen durchgegart ist.',
    'Kinderportion ungewürzt abnehmen. Gochujang mit Sojasauce und 2 EL Wasser verrühren, unter den Rest mischen und mit Frühlingszwiebel und Sesam bestreuen.'
  ],
  kidName:'Hähnchen mit Süßkartoffel',
  kid:'Süßkartoffel zerdrücken, Hähnchen fein zupfen und Kohl weich und klein schneiden. Ohne Gochujang, denn die Paste ist scharf.',
  leftover:'Dakgalbi-Bokkeumbap · 10 Min. – Reste klein hacken und mit gekochtem Reis in der Pfanne braten, wie es im Restaurant am Ende üblich ist.',
  tipp:'Wer es schärfer mag, rührt bei den Erwachsenen eine Prise Chiliflocken in die Soße.'
},
{
  id:'kr-samgyetang', name:'Samgyetang · Hähnchen-Reis-Suppe mit Ingwer und Knoblauch', cuisine:'Korea', flag:'🇰🇷',
  protein:'gefluegel', base:'reis', time:{a:10,c:45}, devices:[['topf','slowcooker']], method:'Topf oder Slow Cooker',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Lauch','Karotten','Zucchini','Frühlingszwiebel'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:150,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:2,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:10,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'}
  ],
  steps:[
    'Reis waschen. Hähnchen mit ganzen Knoblauchzehen, Ingwerscheiben und 500 ml Wasser aufkochen und den Schaum abschöpfen.',
    'Reis zugeben und zugedeckt bei kleiner Hitze 30 Minuten köcheln (Slow Cooker: 4 Stunden niedrig).',
    'Lauch in Ringe, Karotte und Zucchini in Würfel schneiden, zugeben und 10 Minuten mitkochen. Hähnchen herausnehmen, ausgelöst zerzupfen und zurückgeben.',
    'Kinderportion ungesalzen abnehmen und Ingwer entfernen. Erwachsene am Tisch mit Salz, Pfeffer und Frühlingszwiebel würzen.'
  ],
  kidName:'Hühner-Reis-Suppe',
  kid:'Hähnchen fein zupfen, weich gekochte Knoblauchzehen und Gemüse zerdrücken. Dick mit viel Reis und wenig Brühe anbieten.',
  leftover:'Hühner-Reisbrei · 8 Min. – Reste mit wenig Wasser zu einem dicken Brei einkochen.',
  tipp:'In Korea isst man Samgyetang gerade an den heißesten Sommertagen, nach dem Motto Hitze mit Hitze bekämpfen.'
},
{
  id:'kr-jeyuk-bokkeum', name:'Jeyuk Bokkeum · Schweinefleisch-Gemüse-Pfanne mit Reis', cuisine:'Korea', flag:'🇰🇷',
  protein:'fleisch', base:'reis', time:{a:12,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja','gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zwiebel','Karotten','Zucchini','Weißkohl'], season:[6,7,8,9],
  ing:[
    {n:'Schweinefilet',q:120,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gochujang',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Jasminreis mit der 1,5-fachen Menge Wasser aufkochen und zugedeckt 12 Minuten bei kleiner Hitze quellen lassen.',
    'Schweinefilet in dünne Scheiben schneiden. Zwiebel in Streifen, Karotte in Scheiben, Zucchini in Halbmonde und Kohl in Streifen schneiden.',
    'Fleisch in Öl 3 Minuten scharf anbraten, Gemüse und Knoblauch zugeben und 5 Minuten braten, bis das Gemüse weich und das Fleisch durchgegart ist.',
    'Kinderportion ungewürzt abnehmen. Gochujang mit Sojasauce und 2 EL Wasser verrühren und 1 Minute unter den Rest schwenken.'
  ],
  kidName:'Mildes Schwein mit Gemüse',
  kid:'Fleisch sehr fein schneiden und Gemüse weich und klein anbieten. Ohne Gochujang, dafür mit etwas Reis und Bratflüssigkeit mischen.',
  leftover:'Jeyuk-Reisbowl · 8 Min. – Reste vollständig erhitzen und mit Gurke und einem hart gekochten Ei auf Reis servieren.',
  tipp:'Mit Salatblättern und Reis zum Einwickeln wird daraus ein Ssam-Abend.'
},
{
  id:'kr-mandu', name:'Mandu · Teigtaschen mit Schweinehack, Tofu und Chinakohl', cuisine:'Korea', flag:'🇰🇷',
  protein:'fleisch', base:null, time:{a:30,c:12}, devices:[['topf']], method:'Topf',
  allergens:['gluten','soja','sesam'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Chinakohl','Pilze','Frühlingszwiebel'], season:[9,10,11,12],
  ing:[
    {n:'Teigblätter für Teigtaschen (TK)',q:12,u:'Stk.',c:'tk'},
    {n:'Schweinehack, mager',q:60,u:'g',c:'fisch'},
    {n:'Tofu, natur',q:60,u:'g',c:'kuehl'},
    {n:'Chinakohl',q:120,u:'g',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:40,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Reisessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Chinakohl sehr fein hacken und kurz mit den Händen ausdrücken. Pilze, Frühlingszwiebel und Knoblauch fein hacken, Tofu zerdrücken.',
    'Alles mit dem Hack und Sesamöl verkneten. Je 1 TL Füllung auf ein Teigblatt geben, den Rand befeuchten und zu Halbmonden fest zusammendrücken.',
    'Mandu in reichlich siedendem Wasser 6 bis 7 Minuten garen, bis sie oben schwimmen und die Füllung vollständig durchgegart ist.',
    'Kinderportion ohne Dip abnehmen. Für die Erwachsenen Sojasauce und Reisessig mit einer Prise Chiliflocken als Dip verrühren.'
  ],
  kidName:'Mini-Mandu',
  kid:'Mandu halbieren und prüfen, dass das Fleisch innen vollständig durchgegart ist. Etwas abkühlen lassen und ohne Dip anbieten.',
  leftover:'Manduguk · 10 Min. – Übrige Mandu in heißem Wasser mit verquirltem Ei und Frühlingszwiebel 5 Minuten ziehen lassen.',
  tipp:'Zum koreanischen Neujahr kommen Mandu oft zusammen mit Reiskuchen in die Suppe Tteok-Manduguk.'
},
{
  id:'kr-godeungeo-gui', name:'Godeungeo Gui · Ofenmakrele mit Vollkornreis und Spinat-Namul', cuisine:'Korea', flag:'🇰🇷',
  protein:'fisch', base:'reis', time:{a:10,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch','soja','gluten','sesam'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Spinat','Gurke','Zitrone'], season:[4,5,9,10],
  ing:[
    {n:'Makrelenfilet',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Babyspinat',q:100,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser etwa 30 Minuten garen. Ofen auf 220 °C vorheizen.',
    'Makrelenfilets mit der Hautseite nach oben auf ein geöltes Blech legen und 12 bis 14 Minuten backen, bis die Haut knusprig ist und sich der Fisch leicht zerpflücken lässt.',
    'Spinat mit 2 EL Wasser 2 Minuten im Topf zusammenfallen lassen, ausdrücken und mit fein geriebenem Knoblauch und Sesamöl mischen. Gurke in dünne Scheiben schneiden.',
    'Kinderportion Fisch, Spinat und Reis ungesalzen abnehmen. Erwachsenen-Spinat mit Sojasauce und Sesam würzen und die Makrele mit Zitrone servieren.'
  ],
  kidName:'Makrele mit Spinat und Reis',
  kid:'Makrele ohne Haut sorgfältig entgräten und zerpflücken, Spinat fein hacken. Gurke geschält in dünnen Stiften, ohne Sojasauce.',
  leftover:'Makrelen-Kimchi-Reis · 10 Min. – Reis und zerpflückte Makrele mit etwas Kimchi in der Pfanne vollständig heiß braten.',
  tipp:'Gegrillte Makrele ist in Korea ein Alltagsgericht, Mehrkornreis mit Vollkornreis und Gerste gehört oft dazu.'
},
{
  id:'kr-daegu-jorim', name:'Daegu Jorim · geschmorter Kabeljau mit Rettich und Zucchini', cuisine:'Korea', flag:'🇰🇷',
  protein:'fisch', base:'reis', time:{a:10,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne mit Deckel',
  allergens:['fisch','soja','gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Rettich','Zucchini','Zwiebel','Frühlingszwiebel'], season:[5,6,7,8,9,10],
  ing:[
    {n:'Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Rettich',q:150,u:'g',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen, mit der 1,25-fachen Menge Wasser aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen.',
    'Rettich schälen und in 1 cm dicke Scheiben, Zucchini in Halbmonde und Zwiebel in Streifen schneiden.',
    'Rettich mit Zwiebel, Knoblauch und 250 ml Wasser in einer Pfanne zugedeckt 12 Minuten köcheln, bis er weich ist.',
    'Zucchini zugeben, Fisch obenauf legen und zugedeckt 6 bis 8 Minuten garen, bis er sich zerpflücken lässt.',
    'Kinderportion ungewürzt abnehmen. Sojasauce und Chiliflocken in den Sud rühren, über Fisch und Rettich löffeln und mit Frühlingszwiebel bestreuen.'
  ],
  kidName:'Weicher Fisch mit Rettich',
  kid:'Fisch sorgfältig entgräten und zerpflücken, Rettich weich geschmort zerdrücken. Ohne Chili und Sojasauce.',
  leftover:'Fisch-Rettich-Suppe · 8 Min. – Reste mit Wasser und Spinat aufkochen und mit Reis servieren.',
  tipp:'Der Rettich saugt den Sud auf und wird beim Schmoren mild und leicht süßlich.'
},
{
  id:'kr-saengseon-jeon', name:'Saengseon Jeon · Fisch und Zucchini im Eimantel mit Reis', cuisine:'Korea', flag:'🇰🇷',
  protein:'fisch', base:'reis', time:{a:12,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','ei','gluten','soja'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zucchini','Frühlingszwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Weizenvollkornmehl',q:2,u:'EL',c:'vorrat'},
    {n:'Zucchini',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Reisessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Jasminreis mit der 1,5-fachen Menge Wasser aufkochen und zugedeckt 12 Minuten bei kleiner Hitze quellen lassen.',
    'Fisch in 1 cm dicke Scheiben und Zucchini in 0,5 cm dicke Scheiben schneiden. Ei verquirlen.',
    'Fisch und Zucchini dünn in Mehl wenden, durch das Ei ziehen und in Öl bei mittlerer Hitze je Seite 2 bis 3 Minuten goldgelb braten, bis Fisch und Ei durchgegart sind.',
    'Kinderportion ohne Dip abnehmen. Für die Erwachsenen Sojasauce, Reisessig und fein geschnittene Frühlingszwiebel als Dip verrühren.'
  ],
  kidName:'Fisch-Taler im Eimantel',
  kid:'Fisch auf Gräten prüfen, in kleine Stücke teilen und prüfen, dass das Ei vollständig gestockt ist. Zucchinischeiben weich, ohne Dip.',
  leftover:'Jeon-Reisschale · 8 Min. – Übrige Taler in Stücke schneiden und mit Reis und Gemüse vollständig erhitzen.',
  tipp:'Jeon gehören in Korea zu jedem Feiertag, in wenig Öl gebraten bleiben sie leicht.'
},
{
  id:'kr-japchae', name:'Japchae · Glasnudeln mit buntem Gemüse und Tofu', cuisine:'Korea', flag:'🇰🇷',
  protein:'tofu', base:'nudeln', time:{a:15,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja','gluten','sesam'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Spinat','Karotten','Rote Paprika','Pilze','Zwiebel'], season:[],
  ing:[
    {n:'Glasnudeln',q:60,u:'g',c:'vorrat'},
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesamöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Glasnudeln nach Packungsangabe 6 bis 7 Minuten kochen, abgießen, kalt abspülen und mit der Schere zweimal durchschneiden.',
    'Tofu in Streifen, Karotte, Paprika und Zwiebel in feine Streifen und Pilze in Scheiben schneiden.',
    'Tofu in der Hälfte des Rapsöls 5 Minuten goldbraun braten und herausnehmen. Gemüse im restlichen Öl nacheinander 2 bis 3 Minuten braten und den Spinat zuletzt zusammenfallen lassen.',
    'Nudeln, Tofu und Sesamöl zugeben und alles 2 Minuten mischen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Sojasauce abschmecken.'
  ],
  kidName:'Kurze Glasnudeln mit Gemüse',
  kid:'Glasnudeln sehr kurz schneiden, da sie glatt und lang sind. Gemüse weich und fein, Tofu klein gewürfelt, ohne Sojasauce.',
  leftover:'Japchae-Omelett · 10 Min. – Nudelreste mit 2 verquirlten Eiern in der Pfanne vollständig stocken lassen.',
  tipp:'Koreanische Glasnudeln aus Süßkartoffelstärke bleiben beim Aufwärmen elastisch, Mungbohnen-Glasnudeln gehen auch.'
},
{
  id:'kr-doenjang-jjigae', name:'Doenjang Jjigae · Sojabohnenpasten-Eintopf mit Tofu, Zucchini und Kartoffel', cuisine:'Korea', flag:'🇰🇷',
  protein:'tofu', base:'reis', time:{a:12,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['soja','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Zucchini','Kartoffeln','Pilze','Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Doenjang (koreanische Sojabohnenpaste)',q:1,u:'EL',c:'vorrat',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser etwa 30 Minuten garen.',
    'Kartoffel und Zucchini in 1,5 cm große Würfel, Zwiebel in Streifen, Pilze in Scheiben und Tofu in Würfel schneiden.',
    'Kartoffel, Zwiebel und Knoblauch mit 400 ml Wasser aufkochen und 8 Minuten köcheln.',
    'Zucchini, Pilze und Tofu zugeben und 6 Minuten köcheln, bis alles weich ist.',
    'Kinderportion ungewürzt abnehmen. Doenjang mit etwas Brühe glatt rühren, in den Rest rühren, 2 Minuten ziehen lassen und mit Frühlingszwiebel servieren.'
  ],
  kidName:'Milder Tofu-Gemüse-Topf',
  kid:'Kartoffel und Zucchini zerdrücken, Tofu klein würfeln und mit Reis und wenig Brühe dick anbieten. Doenjang erst nach der Kinderportion, die Paste ist salzig.',
  leftover:'Doenjang-Reistopf · 8 Min. – Reste mit Reis zu einem dicken Eintopf einkochen.',
  tipp:'Doenjang ist kräftiger als helles Miso, ein Esslöffel reicht für eine ganze Erwachsenenportion.'
},
{
  id:'kr-sundubu-jjigae', name:'Sundubu Jjigae · Seidentofu-Eintopf mit Ei und Gemüse', cuisine:'Korea', flag:'🇰🇷',
  protein:'tofu', base:'reis', time:{a:8,c:15}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['soja','ei','gluten','sesam'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zucchini','Pilze','Zwiebel','Frühlingszwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Seidentofu',q:175,u:'g',c:'kuehl'},
    {n:'Rundkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Champignons oder Shiitake',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Chiliflocken',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen, mit der 1,25-fachen Menge Wasser aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen.',
    'Zwiebel und Pilze in Streifen und Zucchini in Halbmonde schneiden und in Sesamöl 3 Minuten andünsten. 300 ml Wasser angießen und 5 Minuten köcheln.',
    'Seidentofu mit einem Löffel in großen Stücken in den Topf geben und 3 Minuten erhitzen. Ei verquirlen, unter Rühren einlaufen lassen und 2 Minuten köcheln, bis es vollständig gestockt ist.',
    'Kinderportion ungewürzt abnehmen. Chiliflocken und Sojasauce in den Rest rühren, 1 Minute köcheln und mit Frühlingszwiebel servieren.'
  ],
  kidName:'Weicher Tofu-Topf',
  kid:'Seidentofu ist von Natur aus weich und löffelbar, das Ei vollständig gestockt. Ohne Chili mit Reis und wenig Brühe anbieten.',
  leftover:'Tofu-Reisschale · 6 Min. – Reste vollständig erhitzen und dick über Reis geben.',
  tipp:'Im Original wird der Eintopf sehr scharf gegessen, mit Chiliflocken lässt sich die Schärfe bei Erwachsenen einzeln dosieren.'
},
{
  id:'kr-kimchi-bokkeumbap', name:'Kimchi Bokkeumbap · gebratener Kimchi-Reis mit Ei und Erbsen', cuisine:'Korea', flag:'🇰🇷',
  protein:'ei', base:'reis', time:{a:10,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','sesam'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Chinakohl','Erbsen','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kimchi (vegan)',q:80,u:'g',c:'kuehl'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Sesam',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser etwa 30 Minuten garen und auf einem Teller abkühlen lassen.',
    'Zwiebel und Karotte fein würfeln, Kimchi klein schneiden und Frühlingszwiebel in Ringe schneiden.',
    'Zwiebel und Karotte in Öl 3 Minuten braten, Erbsen und Reis zugeben und 4 Minuten unter Wenden braten.',
    'Eier als Spiegeleier braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ohne Kimchi abnehmen. Kimchi unter den restlichen Reis mischen, 2 Minuten mitbraten und mit Ei, Frühlingszwiebel und Sesam servieren.'
  ],
  kidName:'Gemüsereis mit Ei',
  kid:'Reis ohne Kimchi anbieten, Ei vollständig durchgaren und klein schneiden. Erbsen leicht zerdrücken.',
  leftover:'Kimchi-Reis-Wrap · 5 Min. – Reste vollständig erhitzen und in eine Vollkorn-Tortilla wickeln.',
  tipp:'Gut gereifter, säuerlicher Kimchi bringt den meisten Geschmack, ein Löffel Kimchisaft macht den Reis saftiger.'
},
{
  id:'kr-kimbap', name:'Kimbap · Reisrollen mit Tofu, Ei, Spinat und Karotte', cuisine:'Korea', flag:'🇰🇷',
  protein:'tofu', base:'reis', time:{a:30,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','soja','gluten','sesam'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:5,
  veg:['Spinat','Karotten','Gurke'], season:[],
  ing:[
    {n:'Rundkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Nori-Blätter',q:2,u:'Stk.',c:'vorrat'},
    {n:'Tofu, natur',q:100,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Sesamöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis waschen, mit der 1,25-fachen Menge Wasser aufkochen, zugedeckt bei kleiner Hitze 15 Minuten garen und mit der Hälfte des Sesamöls mischen.',
    'Tofu in lange Streifen schneiden und in Öl 5 Minuten braten. Ei zu einem dünnen Omelett vollständig stocken lassen und in Streifen schneiden.',
    'Karotte in Stifte schneiden und 3 Minuten braten, Spinat kurz zusammenfallen lassen und ausdrücken. Gurke in lange Stifte schneiden.',
    'Nori-Blatt mit der glänzenden Seite nach unten auslegen, dünn mit Reis bestreichen, Füllung in eine Reihe legen und fest aufrollen. Mit einem nassen Messer in Scheiben schneiden.',
    'Kinderportion ohne Dip abnehmen. Erwachsene mit dem restlichen Sesamöl bestreichen und mit Sojasauce zum Dippen servieren.'
  ],
  kidName:'Mini-Kimbap',
  kid:'Kimbap in dünne Scheiben schneiden und bei Kleinkindern das Nori in kleine Stücke reißen, da es zäh sein kann. Ei vollständig durchgaren, ohne Sojasauce.',
  leftover:'Kimbap-Jeon · 8 Min. – Übrige Scheiben durch verquirltes Ei ziehen und in der Pfanne braten, bis das Ei vollständig gestockt ist.',
  tipp:'Kimbap ist das klassische Picknick-Essen in Korea, anders als bei Sushi kommt nur gegarte Füllung hinein.'
},
{
  id:'kr-yachae-pajeon', name:'Yachae Pajeon · Frühlingszwiebel-Gemüse-Pfannkuchen', cuisine:'Korea', flag:'🇰🇷',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten','soja'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Frühlingszwiebel','Zucchini','Karotten'], season:[5,6,7,8,9],
  ing:[
    {n:'Weizenvollkornmehl',q:60,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Frühlingszwiebel',q:3,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Reisessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Frühlingszwiebeln in 6 cm lange Stücke, Zucchini und Karotte in feine Stifte schneiden.',
    'Mehl mit Eiern und 80 ml eiskaltem Wasser glatt rühren und das Gemüse untermischen.',
    'Öl in der Pfanne erhitzen, Teig flach verteilen und bei mittlerer Hitze je Seite 4 bis 5 Minuten backen, bis er goldbraun und in der Mitte vollständig gestockt ist.',
    'Kinderportion ohne Dip in Streifen schneiden. Für die Erwachsenen Sojasauce und Reisessig als Dip verrühren.'
  ],
  kidName:'Gemüse-Pfannkuchen-Streifen',
  kid:'Pfannkuchen vollständig durchbacken und in fingergroße Streifen schneiden, lange Frühlingszwiebelstücke für Kleinkinder klein schneiden. Ohne Dip.',
  leftover:'Pajeon-Wrap · 5 Min. – Übrige Pfannkuchen erwärmen und mit Salat und Gemüseresten aufrollen.',
  tipp:'Eiskaltes Wasser im Teig macht den Pfannkuchen besonders knusprig.'
}
);
