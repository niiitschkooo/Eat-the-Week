/* Grün geplant · Kolumbien · Top 15 */
RECIPES.push(
{
  id:'co-bandeja-paisa', name:'Bandeja Paisa · Bohnen, Vollkornreis, Hackfleisch, Ei, Kochbanane und Avocado auf einem Teller', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'fleisch', base:'reis', time:{a:20,c:35}, devices:[['topf'],['pfanne'],['ofen']], method:'Zwei Töpfe + Pfanne + Backofen',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:5,
  veg:['Kochbanane','Avocado','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Rinderhack, mager',q:70,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Kochbanane',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis nach Packung etwa 30 Minuten garen. Ofen auf 200 °C vorheizen, reife Kochbanane schälen, schräg in Scheiben schneiden, mit wenig Öl bestreichen und 20 Minuten weich backen.',
    'Für das Hogao Zwiebel und Tomate fein würfeln und in der Hälfte des Öls in der Pfanne 5 Minuten weich schmoren. Die Hälfte davon mit den Bohnen und 50 ml Wasser in einem kleinen Topf 10 Minuten köcheln und einen Teil zerdrücken.',
    'Hack mit Kreuzkümmel zum restlichen Hogao in die Pfanne geben und 6 Minuten krümelig braten. Danach im restlichen Öl ein Spiegelei braten, bis Eiweiß und Eigelb fest sind.',
    'Avocado in Scheiben schneiden und alles getrennt auf einem großen Teller anrichten.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Ají würzen.'
  ],
  kidName:'Mini-Bandeja',
  kid:'Alles als kleine getrennte Häufchen anbieten: Bohnen zerdrückt, Hack fein, Ei durchgebraten in Stücken. Kochbanane und Avocado als weiche Streifen zum Greifen.',
  leftover:'Bandeja-Wrap · 8 Min. – Reste vollständig erhitzen und mit Avocado in eine Tortilla rollen.',
  tipp:'Statt Chicharrón und Chorizo bringt mageres Hack genug Eiweiß, und die Bandeja bleibt trotzdem typisch.'
},
{
  id:'co-ajiaco', name:'Ajiaco Santafereño · Hähnchen-Kartoffel-Eintopf mit Mais und Avocado', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:40}, devices:[['topf','slowcooker']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Mais','Avocado','Frühlingszwiebel','Kräuter'], season:[8,9,10],
  ing:[
    {n:'Hähnchenbrust',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:150,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Maiskolben, vorgegart',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Naturjoghurt',q:30,u:'g',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Oregano, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen mit Brühe, Frühlingszwiebel und Oregano aufkochen und 15 Minuten leise köcheln, herausnehmen und in Fasern zupfen.',
    'Mehlige Kartoffeln in dünne Scheiben und festkochende in Würfel schneiden, mit dem Maiskolben in Stücken in die Brühe geben und 25 Minuten köcheln, bis die mehligen Kartoffeln zerfallen und der Eintopf sämig ist.',
    'Hähnchenfasern zurück in den Topf geben und 2 Minuten erwärmen. Avocado in Würfel schneiden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz würzen und mit Koriander, Joghurt und Avocado servieren.'
  ],
  kidName:'Mini-Ajiaco',
  kid:'Maiskörner vom Kolben schneiden, Kartoffeln zerdrücken und Hähnchen sehr klein zupfen. Avocado in weichen Würfeln dazugeben.',
  leftover:'Ajiaco-Reis · 10 Min. – Dicke Reste mit gekochtem Reis mischen und vollständig erhitzen.',
  tipp:'Das typische Kraut Guascas gibt es getrocknet im Lateinamerika-Laden, Oregano ist ein guter Ersatz.'
},
{
  id:'co-arroz-atollado', name:'Arroz Atollado · saftiger Reistopf mit Hähnchen, Kartoffeln und Gemüse', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Tomaten','Erbsen','Frühlingszwiebel','Kartoffeln'], season:[7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:120,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:80,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:40,u:'g',c:'tk'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in kleine Stücke schneiden und im Topf in Öl 5 Minuten anbraten. Frühlingszwiebel, Paprika und Tomate gewürfelt zugeben und 4 Minuten zu einem Hogao schmoren.',
    'Reis, Kurkuma und gewürfelte Kartoffeln einrühren, Brühe angießen und offen bei kleiner Hitze 20 Minuten köcheln, dabei öfter umrühren, damit der Reis cremig wird.',
    'Erbsen zugeben und weitere 5 Minuten garen, bis der Reis weich und sämig, aber nicht trocken ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und frischem Koriander oder Ají würzen.'
  ],
  kidName:'Mini-Atollado',
  kid:'Der weiche, sämige Reis ist ideal für Kleinkinder. Hähnchen noch kleiner zupfen und Erbsen zerdrücken.',
  leftover:'Reis-Taler · 12 Min. – Kalte Reste zu Talern formen und in der Pfanne goldbraun braten.',
  tipp:'Atollado heißt so viel wie festgefahren, der Reis soll saftig bleiben wie ein Risotto.'
},
{
  id:'co-carne-desmechada', name:'Carne Desmechada · gezupftes Rindfleisch in Hogao mit Vollkornreis', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'fleisch', base:'reis', time:{a:20,c:75}, devices:[['topf','slowcooker'],['pfanne']], method:'Topf oder Slow Cooker + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Frühlingszwiebel','Gurke'], season:[7,8,9],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch in großen Würfeln knapp mit Wasser bedeckt aufkochen und zugedeckt 60 Minuten weich köcheln, bis es sich mit zwei Gabeln zerfasern lässt. Im Slow Cooker 6 Stunden auf niedriger Stufe.',
    'Inzwischen den Vollkornreis nach Packung etwa 30 Minuten garen.',
    'Fleisch herausnehmen und zerzupfen. Für das Hogao Zwiebel, Knoblauch, Paprika, Frühlingszwiebel und Tomaten würfeln und in der Pfanne in Öl 8 Minuten weich schmoren, dann Kreuzkümmel, Fleisch und 100 ml Kochbrühe zugeben und 5 Minuten einköcheln.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen und mit Reis und Gurkenscheiben servieren.'
  ],
  kidName:'Mini-Desmechada',
  kid:'Das gezupfte Fleisch ist saftig und weich, für Kleinkinder noch feiner zerzupfen und mit Reis und Soße mischen. Gurke in dünne Stifte schneiden.',
  leftover:'Desmechada-Arepas · 15 Min. – Reste vollständig erhitzen und in aufgeschnittene Arepas oder Tortillas füllen.',
  tipp:'Gleich die doppelte Menge kochen, gezupftes Fleisch lässt sich gut einfrieren.'
},
{
  id:'co-empanadas', name:'Empanadas Colombianas al Horno · Maisteigtaschen mit Rindfleisch-Kartoffel-Füllung', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'fleisch', base:null, time:{a:30,c:25}, devices:[['topf'],['pfanne'],['ofen']], method:'Topf + Pfanne + Backofen',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Tomaten','Frühlingszwiebel','Salat','Limette'], season:[],
  ing:[
    {n:'Maismehl, vorgekocht',q:70,u:'g',c:'vorrat',hint:'z. B. Harina P.A.N., im Lateinamerika-Regal'},
    {n:'Rinderhack, mager',q:80,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:50,u:'g',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in kleine Würfel schneiden und 10 Minuten weich kochen. Maismehl mit Kurkuma und etwa 90 ml warmem Wasser zu einem weichen Teig kneten und 5 Minuten ruhen lassen.',
    'Frühlingszwiebel und Tomate fein würfeln und in der Hälfte des Öls 4 Minuten schmoren. Hack und Kreuzkümmel zugeben und 6 Minuten krümelig braten, Kartoffeln untermischen und leicht zerdrücken.',
    'Ofen auf 210 °C vorheizen. Teig portionsweise zwischen zwei Lagen Frischhaltefolie zu Kreisen von 10 cm drücken, mit Füllung belegen, zuklappen und die Ränder mit einer Gabel festdrücken.',
    'Empanadas mit dem restlichen Öl bestreichen und auf Backpapier 20 bis 25 Minuten goldbraun backen. Salat mit Limettensaft anmachen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und einer Ají-Soße aus Frühlingszwiebel, Koriander und Limette servieren.'
  ],
  kidName:'Mini-Maistaschen',
  kid:'Empanadas etwas abkühlen lassen und halbieren, damit das Kind an die weiche Füllung kommt. Ohne Salz und Ají.',
  leftover:'Empanada-Teller · 10 Min. – Reste im Ofen aufbacken und mit Salat und Avocado servieren.',
  tipp:'Maisteig reißt leicht, mit feuchten Händen und Folie gelingt das Formen sicher.'
},
{
  id:'co-bistec-caballo', name:'Bistec a Caballo · Rindersteak mit Tomaten-Zwiebel-Hogao, Spiegelei und Kartoffeln', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'fleisch', base:'kartoffeln', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Frühlingszwiebel','Kartoffeln'], season:[7,8,9],
  ing:[
    {n:'Rinderhüftsteak',q:110,u:'g',c:'fisch'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in kleine Würfel schneiden und in Wasser 12 bis 14 Minuten weich kochen.',
    'Steak dünn klopfen und in der heißen Pfanne in der Hälfte des Öls je Seite 2 bis 3 Minuten braten, herausnehmen und warm halten.',
    'Zwiebel, Frühlingszwiebel und Tomaten würfeln und mit Kreuzkümmel in der Pfanne 5 Minuten zu einem Hogao schmoren. Daneben im restlichen Öl ein Spiegelei braten, bis Eiweiß und Eigelb fest sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Steak mit Salz und Pfeffer würzen, mit Hogao und Ei belegen und mit Kartoffeln servieren.'
  ],
  kidName:'Mini-Caballo',
  kid:'Steak für das Kind gut durchbraten und sehr fein schneiden, mit Hogao und Kartoffeln zerdrücken. Das Ei ist ganz fest gebraten.',
  leftover:'Hogao-Kartoffel-Pfanne · 10 Min. – Reste in Würfel schneiden und mit etwas Hogao in der Pfanne vollständig durcherhitzen.',
  tipp:'Hogao ist die Grundsoße Kolumbiens und hält sich im Kühlschrank drei Tage.'
},
{
  id:'co-sancocho-pescado', name:'Sancocho de Pescado · Fischeintopf mit Kochbanane, Maniok, Mais und Koriander', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'fisch', base:null, time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kochbanane','Maniok','Mais','Tomaten','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Maniok, TK',q:120,u:'g',c:'tk',hint:'geschält im Afro- oder Asiashop, ersatzweise Kartoffeln'},
    {n:'Kochbanane',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Maiskolben, vorgegart',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Kokosmilch',q:60,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Tomate würfeln und im Topf in Öl 5 Minuten zu einem Hogao schmoren.',
    'Maniok und grüne Kochbanane in Stücke schneiden, mit dem Maiskolben in Scheiben und 500 ml Wasser zugeben und zugedeckt 20 Minuten köcheln, bis der Maniok ganz weich ist. Holzige Fasern aus dem Maniok entfernen.',
    'Kokosmilch einrühren, Fisch in großen Stücken einlegen und bei kleiner Hitze 8 Minuten gar ziehen lassen, bis er innen weiß ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Koriander und nach Wunsch Ají würzen.'
  ],
  kidName:'Mini-Sancocho',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, Maniok und Kochbanane weich zerdrücken. Maiskörner vom Kolben schneiden.',
  leftover:'Sancocho-Reis · 10 Min. – Reste mit gekochtem Reis vollständig erhitzen und mit Koriander servieren.',
  tipp:'Maniok immer vollständig weich kochen, roh ist er nicht genießbar.'
},
{
  id:'co-pescado-arroz-coco', name:'Pescado con Arroz de Coco · Ofenfisch mit Kokosreis, Patacones aus dem Ofen und Salat', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'fisch', base:'reis', time:{a:20,c:25}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kochbanane','Tomaten','Gurke','Rote Zwiebel','Limette'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:60,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:60,u:'ml',c:'vorrat'},
    {n:'Kochbanane',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Grüne Kochbanane schälen, in 3 cm dicke Stücke schneiden, mit einem Glas flach drücken, mit der Hälfte des Öls bestreichen und auf dem Blech 12 Minuten backen, dann wenden.',
    'Reis mit Kokosmilch und 70 ml Wasser aufkochen und zugedeckt bei kleiner Hitze 15 Minuten garen.',
    'Fisch mit geriebenem Knoblauch und dem restlichen Öl bestreichen, zu den Patacones auf das Blech legen und 12 bis 14 Minuten backen, bis er sich leicht zerteilen lässt.',
    'Tomate, Gurke und Zwiebel würfeln und mit Limettensaft mischen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Fisch und Patacones mit Salz und Limette würzen.'
  ],
  kidName:'Mini-Kokosfisch',
  kid:'Fisch sorgfältig auf Gräten prüfen, zerpflücken und mit dem weichen Kokosreis mischen. Nur weiche Patacones in schmalen Streifen zum Greifen anbieten.',
  leftover:'Kokosreis-Pfanne · 10 Min. – Reis- und Fischreste mit Erbsen in der Pfanne vollständig durcherhitzen.',
  tipp:'An der Karibikküste wird der ganze Fisch frittiert, aus dem Ofen bleibt er saftig und viel leichter.'
},
{
  id:'co-frijoles-antioquenos', name:'Frijoles Antioqueños · rote Bohnen mit Karotte und Kochbanane in Hogao, dazu Reis', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'huelsen', base:'reis', time:{a:10,c:14}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Kochbanane','Tomaten','Zwiebel','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kochbanane',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen.',
    'Für das Hogao Zwiebel, Frühlingszwiebel und Tomate fein würfeln und in Öl 4 Minuten schmoren, Kreuzkümmel kurz mitrösten.',
    'Karotte und grüne Kochbanane in kleine Würfel schneiden, mit den Bohnen und 200 ml Wasser zugeben und 12 Minuten köcheln, bis alles weich ist. Ein Viertel der Bohnen zerdrücken, damit es sämig wird.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Ají würzen und mit Reis servieren.'
  ],
  kidName:'Mini-Frijoles',
  kid:'Bohnen, Karotte und Kochbanane gut zerdrücken und mit Reis mischen. Ohne Salz und Ají servieren.',
  leftover:'Calentado · 10 Min. – Reis und Bohnen vom Vortag in der Pfanne mit einem Ei vollständig durchbraten.',
  tipp:'Mit getrockneten Bohnen, über Nacht eingeweicht und 90 Minuten gekocht, schmeckt es noch typischer.'
},
{
  id:'co-lentejas', name:'Lentejas Colombianas · Linsen in Hogao mit Kartoffeln und Vollkornreis', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'huelsen', base:'reis', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten','Kartoffeln','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Braune Linsen, trocken',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis nach Packung etwa 30 Minuten garen.',
    'Linsen abspülen und mit 400 ml Wasser 10 Minuten köcheln. Kartoffeln und Karotte würfeln, zugeben und weitere 15 bis 20 Minuten garen, bis alles weich ist.',
    'Für das Hogao Zwiebel, Frühlingszwiebel, Knoblauch und Tomaten würfeln und in der Pfanne in Öl mit Kreuzkümmel 6 Minuten schmoren, dann unter die Linsen rühren und 3 Minuten mitköcheln.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Koriander abschmecken und mit Reis servieren.'
  ],
  kidName:'Mini-Lentejas',
  kid:'Linsen und Kartoffeln mit der Gabel zerdrücken und mit Reis mischen. Ohne Salz servieren, das Hogao ist mild.',
  leftover:'Linsen-Arepas · 12 Min. – Dicke Linsenreste erhitzen und auf gerösteten Arepas oder Vollkornbrot servieren.',
  tipp:'Gleich die doppelte Menge kochen, die Linsen schmecken am zweiten Tag noch besser.'
},
{
  id:'co-arepas-pericos', name:'Arepas con Huevos Pericos · Maisfladen mit Tomaten-Frühlingszwiebel-Rührei und Avocado', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Tomaten','Frühlingszwiebel','Avocado','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Maismehl, vorgekocht',q:60,u:'g',c:'vorrat',hint:'z. B. Harina P.A.N., im Lateinamerika-Regal'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Avocado',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Maismehl mit etwa 80 ml warmem Wasser zu einem weichen Teig kneten, 3 Minuten quellen lassen und zu zwei fingerdicken Fladen formen.',
    'Arepas in der leicht geölten Pfanne bei mittlerer Hitze je Seite 5 Minuten braten, bis sie fest sind, dann an den Rand schieben.',
    'Frühlingszwiebel und Tomaten würfeln und im restlichen Öl 3 Minuten weich schmoren. Verquirlte Eier zugeben und unter Rühren vollständig stocken lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Koriander und Avocadoscheiben servieren.'
  ],
  kidName:'Mini-Arepa mit Ei',
  kid:'Arepa in schmale Streifen schneiden und das Rührei vollständig durchgaren. Avocado als weiche Stücke dazulegen.',
  leftover:'Arepa-Toast · 6 Min. – Übrige Arepas aufschneiden, mit Käse füllen und in der Pfanne erwärmen.',
  tipp:'Ungebratene Arepas lassen sich gut einfrieren und direkt aus dem Tiefkühler braten.'
},
{
  id:'co-mote-queso', name:'Mote de Queso · dicker Kartoffel-Käse-Eintopf mit Spinat aus der Karibikregion', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'milch', base:'kartoffeln', time:{a:12,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Spinat','Zwiebel','Frühlingszwiebel','Tomaten'], season:[4,5,9,10],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese',hint:'klassisch Yams (Ñame) aus dem Afroshop'},
    {n:'Halloumi',q:60,u:'g',c:'kuehl'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Frühlingszwiebel, Knoblauch und Tomate würfeln und im Topf in Öl 5 Minuten zu einem Hogao schmoren.',
    'Kartoffeln würfeln, mit 400 ml Wasser zugeben und 20 Minuten köcheln, bis sie weich sind. Ein Drittel der Kartoffeln im Topf zerdrücken, damit der Eintopf dick wird.',
    'Milch und Spinat einrühren, Halloumi in kleine Würfel schneiden und 3 Minuten mitziehen lassen, bis er weich wird.',
    'Kinderportion mit nur wenig Käse abnehmen, sie bleibt ungesalzen. Erwachsene mit Pfeffer und Zitronensaft abschmecken, Salz ist durch den Käse kaum nötig.'
  ],
  kidName:'Mini-Mote',
  kid:'Kartoffeln zerdrücken, der Spinat bleibt fein verteilt. Nur wenige, sehr kleine Halloumi-Würfel dazugeben, der Käse ist salzig.',
  leftover:'Mote-Gratin · 15 Min. – Dicke Reste in eine Form geben und im Ofen goldbraun überbacken.',
  tipp:'Im Original aus Córdoba und Sucre kommt Queso costeño hinein, Halloumi bleibt genauso bissfest.'
},
{
  id:'co-cuchuco', name:'Cuchuco de Trigo · herzhafter Weizengrütze-Eintopf mit Dicken Bohnen, Erbsen und Kohl', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'huelsen', base:'bulgur', time:{a:15,c:30}, devices:[['topf','slowcooker']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Weißkohl','Kartoffeln','Erbsen','Karotten','Frühlingszwiebel'], season:[10,11,12,1,2],
  ing:[
    {n:'Bulgur',q:60,u:'g',c:'vorrat'},
    {n:'Dicke Bohnen, TK',q:130,u:'g',c:'tk'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:400,u:'ml',c:'vorrat'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Frühlingszwiebel in Ringe schneiden und im Topf in Öl mit Kreuzkümmel 2 Minuten anschwitzen. Bulgur einrühren und 1 Minute mitrösten.',
    'Kartoffeln und Karotte würfeln, Kohl in feine Streifen schneiden und mit der Brühe zugeben. Zugedeckt 20 Minuten köcheln.',
    'Dicke Bohnen und Erbsen zugeben und weitere 8 Minuten garen, bis der Eintopf dick und alles weich ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und frischem Koriander abschmecken.'
  ],
  kidName:'Mini-Cuchuco',
  kid:'Dicke Bohnen aus der Haut drücken und zerdrücken, Kohl sehr weich garen. Der Eintopf ist dick und lässt sich gut löffeln.',
  leftover:'Cuchuco-Bratlinge · 15 Min. – Dicke Reste mit einem Ei binden, Taler formen und in der Pfanne durchbraten.',
  tipp:'In Boyacá kommen Schweinerippchen dazu, die vegetarische Variante wird durch Bohnen und Erbsen sättigend.'
},
{
  id:'co-papas-chorreadas', name:'Papas Chorreadas · Kartoffeln mit Tomaten-Käse-Soße und Brokkoli', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'milch', base:'kartoffeln', time:{a:10,c:22}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Tomaten','Frühlingszwiebel','Brokkoli'], season:[6,7,8,9,10],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Frischkäse, fettreduziert',q:30,u:'g',c:'kuehl'},
    {n:'Mozzarella',q:50,u:'g',c:'kuehl'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kleine Kartoffeln mit Schale 18 bis 20 Minuten weich kochen, die Brokkoliröschen in den letzten 5 Minuten mitgaren.',
    'Frühlingszwiebel und Tomaten würfeln und in Öl mit Kreuzkümmel 5 Minuten weich schmoren.',
    'Milch und Frischkäse einrühren, Mozzarella zerzupfen und bei kleiner Hitze schmelzen lassen, bis eine cremige Soße entsteht.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Kartoffeln halbieren, mit der Soße übergießen und mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Chorreadas',
  kid:'Kartoffeln pellen und mit der Käsesoße zerdrücken. Brokkoli weich in kleinen Röschen zum Greifen dazulegen.',
  leftover:'Kartoffel-Auflauf · 15 Min. – Reste in Scheiben in eine Form schichten, mit Soße begießen und im Ofen überbacken.',
  tipp:'In Kolumbien nimmt man die kleinen gelben Papas criollas, Drillinge sind ein guter Ersatz.'
},
{
  id:'co-arepas-choclo', name:'Arepas de Choclo · Maisfladen aus Zuckermais mit Käse, dazu Bohnensalat', cuisine:'Kolumbien', flag:'🇨🇴',
  protein:'milch', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Mais','Tomaten','Rote Zwiebel','Limette','Kräuter'], season:[8,9],
  ing:[
    {n:'Mais (Dose oder TK)',q:150,u:'g',c:'vorrat'},
    {n:'Maismehl, vorgekocht',q:30,u:'g',c:'vorrat',hint:'z. B. Harina P.A.N., im Lateinamerika-Regal'},
    {n:'Milch',q:30,u:'ml',c:'kuehl'},
    {n:'Mozzarella',q:50,u:'g',c:'kuehl'},
    {n:'Kidneybohnen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mais mit der Milch grob pürieren und mit dem Maismehl zu einem dicken, streichfähigen Teig verrühren, 5 Minuten quellen lassen.',
    'Für den Salat Bohnen abspülen, Tomate würfeln, Zwiebel fein hacken und mit Koriander, der Hälfte des Öls und Limettensaft mischen.',
    'Teig als kleine, flache Fladen in die Pfanne mit dem restlichen Öl geben und bei mittlerer Hitze je Seite 3 bis 4 Minuten goldbraun braten. Mozzarellascheiben auf die Hälfte legen, zuklappen und schmelzen lassen.',
    'Kinderportion ungesalzen und ohne Zwiebel abnehmen. Erwachsene den Salat mit Salz und Ají würzen.'
  ],
  kidName:'Mini-Choclo-Arepa',
  kid:'Arepa in Streifen schneiden und den Käse vorher etwas abkühlen lassen. Bohnen zerdrücken und Tomatenwürfel ohne Zwiebel dazugeben.',
  leftover:'Arepa-Frühstück · 6 Min. – Übrige Arepas in der Pfanne aufwärmen und mit Rührei servieren.',
  tipp:'Mit frischem Mais vom Kolben schmecken die Arepas am süßesten, ganz ohne Zucker.'
}
);
