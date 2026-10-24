/* Grün geplant · Tschechien · Top 15 */
RECIPES.push(
{
  id:'cz-svickova', name:'Svíčková na smetaně · Rinderbraten in Wurzelgemüsesoße mit Vollkorn-Serviettenknödel', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'fleisch', base:null, time:{a:30,c:90}, devices:[['topf','slowcooker']], method:'Schmortopf + Topf',
  allergens:['gluten','milch','ei','sellerie'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Sellerie','Pastinake','Zwiebel'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Rinderbraten aus der Keule, mager',q:130,u:'g',c:'fisch'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:60,u:'g',c:'gemuese'},
    {n:'Petersilienwurzel oder Pastinake',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Vollkornbrötchen',q:1,u:'Stk.',c:'brot'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in Öl rundum 5 Minuten anbraten. Gemüse schälen, grob würfeln, zugeben und 5 Minuten mitrösten.',
    '400 ml Wasser angießen und zugedeckt bei kleiner Hitze 80 bis 90 Minuten schmoren, bis das Fleisch weich ist. Im Slowcooker 6 Stunden auf niedriger Stufe garen.',
    'Für den Knödel Brötchen würfeln, mit warmer Milch und Ei mischen und 10 Minuten ziehen lassen. In ein sauberes Küchentuch zu einer Rolle wickeln und 25 Minuten in siedendem Wasser garen.',
    'Fleisch herausnehmen, Gemüse mit dem Schmorfond fein pürieren und die saure Sahne unterrühren, nicht mehr kochen lassen.',
    'Kinderportion abnehmen. Erwachsene Soße mit Salz und Pfeffer abschmecken und Fleisch in Scheiben mit Knödel servieren.'
  ],
  kidName:'Rindfleisch mit Gemüsesoße',
  kid:'Rindfleisch sehr fein schneiden oder zerzupfen und mit reichlich Gemüsesoße und kleinen Knödelstücken mischen. Ohne Salz servieren.',
  leftover:'Gebratene Knödel · 10 Min. – Knödelscheiben in wenig Öl anbraten und mit der vollständig erhitzten Soße essen.',
  tipp:'Die Soße wird am Vortag gekocht noch aromatischer und lässt sich gut einfrieren.'
},
{
  id:'cz-vepro-knedlo-zelo', name:'Vepřo knedlo zelo · Kümmel-Schweinebraten mit Sauerkraut und Kartoffeln', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Zwiebel','Apfel','Kartoffeln'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Schweinefilet',q:130,u:'g',c:'fisch'},
    {n:'Sauerkraut',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Kümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Filet mit gepresstem Knoblauch, Kümmel und der Hälfte des Öls einreiben, in eine kleine Form legen und 25 Minuten garen, bis es innen hell und saftig ist.',
    'Kartoffeln schälen, halbieren und in Wasser 20 Minuten kochen.',
    'Zwiebel würfeln und im restlichen Öl glasig dünsten. Sauerkraut abspülen, mit geriebenem Apfel und 100 ml Wasser zugeben und zugedeckt 15 Minuten köcheln.',
    'Fleisch 5 Minuten ruhen lassen, in Scheiben schneiden und den Bratensaft über das Kraut geben.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Schweinefleisch mit mildem Kraut',
  kid:'Fleisch in sehr dünne, kleine Streifen schneiden, Kraut fein hacken und mit zerdrückten Kartoffeln mischen. Ohne Salz.',
  leftover:'Kraut-Kartoffel-Pfanne · 10 Min. – Kartoffeln, Kraut und Fleischreste in der Pfanne kräftig anbraten.',
  tipp:'Traditionell gibt es Böhmische Knödel dazu, Salzkartoffeln sind die schnellere Alternative.'
},
{
  id:'cz-gulas', name:'Hovězí guláš · böhmisches Rindergulasch mit viel Zwiebel und Vollkornbrot', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'fleisch', base:null, time:{a:20,c:90}, devices:[['topf','slowcooker']], method:'Topf oder Slowcooker',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Karotten'], season:[],
  ing:[
    {n:'Rindergulasch, mager',q:120,u:'g',c:'fisch'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Majoran, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebeln in feine Streifen schneiden und in Öl bei mittlerer Hitze 10 Minuten goldbraun dünsten.',
    'Fleisch zugeben und 5 Minuten rundum anbraten. Tomatenmark, Paprikapulver und Kümmel kurz mitrösten.',
    'Karotte fein reiben, mit 300 ml Wasser zugeben und zugedeckt 80 Minuten leise schmoren, bis das Fleisch zart ist. Im Slowcooker 6 Stunden auf niedriger Stufe garen.',
    'Paprika würfeln, mit Majoran zugeben und 10 Minuten mitgaren.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch Chili würzen und mit Brot servieren.'
  ],
  kidName:'Mildes Gulasch mit Brot',
  kid:'Fleisch sehr klein schneiden oder zerzupfen, mit reichlich Soße mischen und Brotstreifen zum Tunken dazugeben. Ohne Salz und Chili.',
  leftover:'Gulasch-Nudeln · 12 Min. – Reste vollständig erhitzen und mit frisch gekochten Vollkornnudeln mischen.',
  tipp:'Die geriebene Karotte bindet die Soße, so braucht das Gulasch kein Mehl.'
},
{
  id:'cz-rizek', name:'Kuřecí řízek · Hähnchenschnitzel aus dem Ofen mit Petersilienkartoffeln und Gurkensalat', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:20}, devices:[['ofen','airfryer'],['topf']], method:'Backofen + Topf',
  allergens:['gluten','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Gurke','Zitrone','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Semmelbrösel',q:20,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:1,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln schälen, halbieren und in Wasser 20 Minuten kochen.',
    'Hähnchenbrust waagerecht halbieren und flach klopfen. Durch verquirltes Ei ziehen, in den Bröseln wenden und auf ein Blech mit Backpapier legen.',
    'Schnitzel mit dem größten Teil des Öls beträufeln und 15 bis 18 Minuten backen, nach der Hälfte wenden, bis sie goldbraun und innen vollständig durchgegart sind.',
    'Gurke in dünne Scheiben hobeln und mit Zitronensaft und 2 EL Wasser mischen. Kartoffeln mit Petersilie und dem restlichen Öl schwenken.',
    'Kinderportion ohne Salz abnehmen. Erwachsene Schnitzel, Kartoffeln und Gurkensalat mit Salz und Pfeffer würzen.'
  ],
  kidName:'Ofen-Schnitzelstreifen',
  kid:'Schnitzel in schmale Streifen schneiden und die Kartoffeln mit einer Gabel zerdrücken. Gurke schälen und fein raspeln, ohne Zitrone und Salz.',
  leftover:'Schnitzel-Wrap · 5 Min. – Kalte Schnitzelstreifen mit Gurke und Joghurt in eine Tortilla rollen.',
  tipp:'Im Airfryer bei 200 °C werden die Schnitzel in 12 Minuten knusprig.'
},
{
  id:'cz-spanelsky-ptacek', name:'Španělský ptáček · Rinderrouladen mit Ei und Gurke auf Vollkornreis', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'fleisch', base:'reis', time:{a:25,c:70}, devices:[['topf','slowcooker']], method:'Schmortopf + Topf',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Zwiebel','Gurke'], season:[],
  ing:[
    {n:'Rinderroulade, dünn',q:120,u:'g',c:'fisch'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Gewürzgurke',q:0.5,u:'Stk.',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Tomatenmark',q:0.5,u:'EL',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ei 10 Minuten hart kochen, pellen und vierteln. Karotte in Stifte und Gurke in Streifen schneiden.',
    'Rouladen flach auslegen, mit Paprikapulver bestreuen, mit Ei, Gurke und der Hälfte der Karottenstifte belegen, aufrollen und mit Zahnstochern feststecken.',
    'Rouladen in Öl rundum 5 Minuten anbraten, gewürfelte Zwiebel, restliche Karotte und Tomatenmark kurz mitrösten, 300 ml Wasser angießen und zugedeckt 60 bis 70 Minuten schmoren.',
    'Reis in der doppelten Menge Wasser 25 Minuten garen. Soße nach Wunsch fein pürieren.',
    'Zahnstocher entfernen. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Rouladenstückchen mit Reis',
  kid:'Roulade in dünne Scheiben und dann klein schneiden, die salzige Gurke herauslösen. Mit Reis und Soße mischen.',
  leftover:'Rouladen-Reispfanne · 10 Min. – Reste klein schneiden und mit Reis und Soße in der Pfanne vollständig erhitzen.',
  tipp:'Zahnstocher vor dem Servieren zählen, damit keiner in einer Kinderportion landet.'
},
{
  id:'cz-sekana', name:'Sekaná · Hackbraten mit Kartoffelpüree und Möhrengemüse', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:45}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Karotten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Karotten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:1,u:'EL',c:'gemuese'},
    {n:'Majoran, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Zwiebel fein reiben und mit Hack, Haferflocken, Ei und Majoran verkneten, zu einem Laib formen und in eine leicht geölte Form legen.',
    'Hackbraten 40 bis 45 Minuten backen, bis er innen vollständig durchgegart ist und klarer Saft austritt.',
    'Kartoffeln schälen, würfeln und in Wasser 20 Minuten weich kochen. Abgießen und mit warmer Milch zu Püree stampfen.',
    'Karotten in Scheiben schneiden, mit 3 EL Wasser und dem restlichen Öl zugedeckt 10 Minuten dünsten und mit Petersilie bestreuen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene Püree und Gemüse mit Salz und Pfeffer würzen.'
  ],
  kidName:'Hackbraten mit Püree',
  kid:'Hackbraten in kleine Würfel schneiden und mit Püree mischen, die weichen Karotten mit der Gabel zerdrücken. Ohne Salz.',
  leftover:'Hackbraten-Brot · 5 Min. – Kalte Scheiben mit Gurke auf Vollkornbrot legen.',
  tipp:'Ein hart gekochtes Ei in der Mitte des Laibs ist in Tschechien ein beliebter Klassiker.'
},
{
  id:'cz-pstruh', name:'Pstruh na másle · Forelle in Butter mit Petersilienkartoffeln und grünem Salat', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Salat','Gurke','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Forellenfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Butter',q:5,u:'g',c:'kuehl'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in 2 cm große Würfel schneiden und in Wasser 12 bis 15 Minuten weich kochen.',
    'Salat und Gurke klein schneiden und mit Zitronensaft und 1 TL Öl mischen.',
    'Forelle trocken tupfen und im restlichen Öl auf der Hautseite 4 Minuten braten, wenden, Butter zugeben und 2 Minuten fertig garen, bis sich das Fleisch leicht von der Haut löst.',
    'Kartoffeln in der Bratbutter mit Petersilie schwenken. Kinderportion ohne Salz abnehmen, Erwachsene mit Salz, Pfeffer und Zitrone würzen.'
  ],
  kidName:'Forellenflocken mit Kartoffeln',
  kid:'Haut entfernen, Forelle sorgfältig auf Gräten prüfen und zerpflücken, Kartoffeln zerdrücken. Statt Salat fein geraspelte Gurke anbieten, ohne Salz.',
  leftover:'Forellen-Aufstrich · 5 Min. – Kalte Forellenreste mit Joghurt und Zitrone zerdrücken und auf Vollkornbrot streichen.',
  tipp:'Gräten lassen sich vor dem Braten mit einer sauberen Pinzette ziehen.'
},
{
  id:'cz-kapr', name:'Kapr s bramborovým salátem · Karpfen aus dem Ofen mit leichtem Kartoffelsalat', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:30}, devices:[['ofen'],['topf']], method:'Topf + Backofen',
  allergens:['fisch','milch','ei','sellerie'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Karotten','Sellerie','Erbsen','Gurke'], season:[],
  ing:[
    {n:'Karpfen- oder Zanderfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:40,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Gewürzgurke',q:0.5,u:'Stk.',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln mit Schale, Karotte und Sellerie im Ganzen 20 Minuten weich kochen, Erbsen in den letzten 2 Minuten zugeben. Ei 10 Minuten hart kochen.',
    'Ofen auf 200 °C vorheizen. Kartoffeln pellen, mit Gemüse und Ei klein würfeln und mit Joghurt und 1 TL Öl vermengen.',
    'Fisch auf ein Blech mit Backpapier legen, mit dem restlichen Öl beträufeln und 12 bis 15 Minuten backen, bis er sich leicht zerteilen lässt.',
    'Kinderportion von Fisch und Salat ohne Salz abnehmen. Danach die gewürfelte Gewürzgurke unter den restlichen Salat heben und Erwachsene mit Salz, Pfeffer und Zitronensaft würzen.'
  ],
  kidName:'Fisch mit mildem Kartoffelsalat',
  kid:'Karpfen besonders sorgfältig entgräten, da er viele feine Gräten hat, und zerpflücken. Kartoffelsalat ohne Gewürzgurke und Salz, das Ei klein gehackt.',
  leftover:'Kartoffelsalat-Brot · 5 Min. – Übrigen Salat auf Vollkornbrot geben, durchgezogen schmeckt er besonders gut.',
  tipp:'In Tschechien gehört das Gericht an Heiligabend auf den Tisch, Zander ist die grätenärmere Alternative.'
},
{
  id:'cz-cocka-na-kyselo', name:'Čočka na kyselo · saure Linsen mit Spiegelei und Vollkornbrot', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'huelsen', base:null, time:{a:10,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Karotten','Gurke'], season:[],
  ing:[
    {n:'Linsen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gewürzgurke',q:0.5,u:'Stk.',c:'vorrat'},
    {n:'Dinkel-Vollkornmehl',q:10,u:'g',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln, Karotte fein reiben und in der Hälfte des Öls 4 Minuten dünsten. Mehl darüberstäuben und 1 Minute anschwitzen.',
    'Mit 150 ml Wasser ablöschen, glatt rühren, abgespülte Linsen zugeben und 5 Minuten sämig köcheln.',
    'Inzwischen im restlichen Öl ein Spiegelei braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion abnehmen. Erwachsene Linsen mit Essig, Salz und Pfeffer säuerlich abschmecken und mit Ei, Gurkenscheiben und Brot servieren.'
  ],
  kidName:'Linsenmus mit Ei',
  kid:'Linsen mit der Gabel grob zerdrücken und ohne Essig und Salz servieren. Ei vollständig durchgebraten klein schneiden, Gewürzgurke weglassen.',
  leftover:'Linsensalat · 5 Min. – Kalte Reste mit Tomaten, Gurke und etwas Öl zu einem Salat mischen.',
  tipp:'Mit trockenen Tellerlinsen statt Dose verlängert sich die Garzeit auf etwa 30 Minuten.'
},
{
  id:'cz-fazolovy-gulas', name:'Fazolový guláš · Bohnengulasch mit Paprika, Kümmel und Vollkornbrot', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'huelsen', base:null, time:{a:10,c:12}, devices:[['topf']], method:'Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Zwiebel','Karotten','Tomaten'], season:[6,7,8,9],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Majoran, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Paprika und Karotte klein würfeln und in Öl 4 Minuten dünsten.',
    'Paprikapulver und Kümmel kurz einrühren, gehackte Tomaten und 80 ml Wasser zugeben und 5 Minuten köcheln.',
    'Bohnen abspülen, mit Majoran zugeben und 3 Minuten durchwärmen. Ein Viertel der Bohnen mit dem Löffel am Topfrand zerdrücken, damit das Gulasch sämig wird.',
    'Kinderportion abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch Chili würzen und mit Brot servieren.'
  ],
  kidName:'Bohnengulasch-Mus mit Brot',
  kid:'Bohnen für das Kind gründlich zerdrücken, damit keine ganzen Bohnen verschluckt werden. Brot in Streifen zum Tunken, ohne Salz und Chili.',
  leftover:'Bohnen-Wrap · 5 Min. – Reste erhitzen und mit Joghurt in eine Tortilla rollen.',
  tipp:'Fazolový guláš ist die fleischlose Kantinenversion des Gulaschs und schmeckt aufgewärmt noch besser.'
},
{
  id:'cz-hrachova-kase', name:'Hrachová kaše · Erbsenpüree mit Röstzwiebeln, Ei und Gewürzgurke', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'huelsen', base:null, time:{a:10,c:45}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','ei'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Erbsen','Karotten','Zwiebel','Tomaten','Gurke'], season:[],
  ing:[
    {n:'Gelbe Schälerbsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Gewürzgurke',q:0.5,u:'Stk.',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Majoran, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Schälerbsen gründlich spülen und mit der Karotte in Stücken, Lorbeer und 350 ml Wasser aufkochen. Zugedeckt 40 bis 45 Minuten weich köcheln.',
    'Lorbeer entfernen, Erbsen mit Karotte und Majoran zu einem dicken Püree stampfen, bei Bedarf etwas Kochwasser zugeben.',
    'Zwiebel in Ringe schneiden und in der Hälfte des Öls 8 Minuten goldbraun braten. Im restlichen Öl ein Spiegelei braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Röstzwiebeln, Ei, Gurke, Tomate und Brot servieren.'
  ],
  kidName:'Erbsenpüree mit Ei',
  kid:'Püree ohne Salz und Röstzwiebeln servieren, das durchgebratene Ei klein schneiden. Tomate entkernen und würfeln, Gewürzgurke weglassen.',
  leftover:'Erbsensuppe · 8 Min. – Püree mit Gemüsebrühe verdünnen und vollständig erhitzen.',
  tipp:'Schälerbsen müssen nicht eingeweicht werden, über Nacht eingeweicht garen sie aber schneller.'
},
{
  id:'cz-smazeny-syr', name:'Smažený sýr · Ofen-Käse in Vollkornpanade mit Kartoffeln und Krautsalat', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'milch', base:'kartoffeln', time:{a:15,c:25}, devices:[['ofen','airfryer'],['topf']], method:'Backofen + Topf',
  allergens:['milch','ei','gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Weißkohl','Karotten','Kräuter'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Edamer, am Stück',q:70,u:'g',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Semmelbrösel',q:25,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Käse in 1,5 cm dicke Scheiben schneiden, durch verquirltes Ei ziehen, in den Bröseln wenden, das Panieren einmal wiederholen und 15 Minuten ins Gefrierfach legen.',
    'Ofen auf 220 °C vorheizen. Kartoffeln schälen, würfeln und in Wasser 15 Minuten kochen. Weißkohl und Karotte fein hobeln und mit 1 TL Öl und 1 EL Joghurt kräftig durchkneten.',
    'Käsescheiben auf ein Blech mit Backpapier legen, mit dem restlichen Öl beträufeln und 8 bis 10 Minuten backen, bis die Panade goldbraun ist und der Käse gerade weich wird.',
    'Übrigen Joghurt mit Schnittlauch verrühren. Kinderportion ohne Salz abnehmen, Erwachsene Kartoffeln und Salat mit Salz und Pfeffer würzen.'
  ],
  kidName:'Käsestreifen mit Kartoffeln',
  kid:'Käse etwas abkühlen lassen, damit er nicht zu heiß ist, und in schmale Streifen schneiden. Krautsalat sehr fein hobeln oder durch weich gedünstete Karotten ersetzen.',
  tipp:'Das kurze Anfrieren verhindert, dass der Käse im Ofen ausläuft.'
},
{
  id:'cz-kulajda', name:'Kulajda · Dill-Pilz-Suppe mit Kartoffeln und pochiertem Ei', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'ei', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Topf',
  allergens:['milch','ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Pilze','Kräuter'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Champignons',q:100,u:'g',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Saure Sahne',q:40,u:'g',c:'kuehl'},
    {n:'Dinkel-Vollkornmehl',q:10,u:'g',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:2,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Kümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 1,5 cm große Würfel schneiden und mit Kümmel in 400 ml Wasser 12 Minuten köcheln. Pilze in Scheiben schneiden, zugeben und 5 Minuten mitgaren.',
    'Mehl mit saurer Sahne und Milch glatt rühren, unter Rühren in die Suppe gießen und 3 Minuten leise köcheln, bis sie sämig ist.',
    'Eier einzeln in eine Tasse aufschlagen, in die siedende Suppe gleiten lassen und 6 Minuten pochieren, bis Eiweiß und Eigelb fest sind.',
    'Dill unterziehen. Kinderportion abnehmen, Erwachsene mit Essig, Salz und Pfeffer säuerlich abschmecken und mit Brot servieren.'
  ],
  kidName:'Milde Kartoffel-Pilz-Suppe',
  kid:'Kartoffeln und Pilze klein schneiden und mit wenig Flüssigkeit leicht zerdrücken, damit es gut löffelbar ist. Das fest gestockte Ei klein schneiden, ohne Essig und Salz.',
  leftover:'Kulajda mit frischem Ei · 10 Min. – Reste aufkochen und ein neues Ei darin vollständig fest pochieren.',
  tipp:'Mit ein paar getrockneten Steinpilzen, 10 Minuten eingeweicht und mitgekocht, wird die Suppe aromatischer.'
},
{
  id:'cz-spenat-s-vejcem', name:'Špenát s vejcem · cremiger Spinat mit Ei und Kartoffeln', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'ei', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei','milch','gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Spinat','Kartoffeln','Zwiebel'], season:[3,4,5,9,10],
  ing:[
    {n:'Blattspinat, TK',q:200,u:'g',c:'tk'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Dinkel-Vollkornmehl',q:10,u:'g',c:'vorrat'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in 2 cm große Stücke schneiden und in Wasser aufsetzen. Eier nach 3 Minuten dazulegen und alles 10 bis 12 Minuten kochen, bis die Kartoffeln weich und die Eier hart sind.',
    'Zwiebel und Knoblauch fein hacken und in Öl 2 Minuten dünsten. Spinat zugeben und zugedeckt 8 Minuten auftauen und garen.',
    'Mehl mit Milch glatt rühren, unterrühren und 2 Minuten cremig köcheln. Nach Wunsch mit dem Stabmixer fein pürieren.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Muskat würzen und mit Kartoffeln und halbierten Eiern servieren.'
  ],
  kidName:'Spinat-Kartoffel-Mus mit Ei',
  kid:'Spinat fein pürieren und mit zerdrückten Kartoffeln mischen. Das hart gekochte Ei in kleine Stücke schneiden, ohne Salz und Muskat.',
  leftover:'Spinat-Omelett · 8 Min. – Restlichen Spinat mit verquirlten Eiern in der Pfanne vollständig stocken lassen.',
  tipp:'Mit frischem Babyspinat geht es noch schneller, er fällt in 2 Minuten zusammen.'
},
{
  id:'cz-houbova-smazenice', name:'Houbová smaženice · Pilzpfanne mit Ei, Zwiebel und Vollkornbrot', cuisine:'Tschechien', flag:'🇨🇿',
  protein:'ei', base:null, time:{a:10,c:10}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Pilze','Zwiebel','Tomaten','Gurke'], season:[8,9,10],
  ing:[
    {n:'Champignons',q:200,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'},
    {n:'Kümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und Pilze in Scheiben schneiden. Zwiebel in Öl 2 Minuten dünsten, Pilze zugeben und bei starker Hitze 6 Minuten braten, bis die Flüssigkeit verdampft ist.',
    'Eier mit Kümmel verquirlen, über die Pilze gießen und unter Rühren 2 bis 3 Minuten stocken lassen, bis kein flüssiges Ei mehr zu sehen ist.',
    'Tomate und Gurke in Scheiben schneiden und mit dem Brot anrichten.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und Schnittlauch bestreuen.'
  ],
  kidName:'Pilz-Rührei mit Brotstreifen',
  kid:'Pilze für das Kind klein hacken und das Rührei vollständig durchgaren. Brot in Streifen schneiden, Tomate entkernen und klein würfeln.',
  tipp:'Im Spätsommer mit frischen Waldpilzen vom Markt zubereiten, so wird das Gericht in Tschechien am liebsten gegessen.'
}
);
