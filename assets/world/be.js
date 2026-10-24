/* Grün geplant · Belgien · Top 15 */
RECIPES.push(
{
  id:'be-moules-frites', name:'Moules-frites · Miesmuscheln im Gemüsesud mit Ofenpommes', cuisine:'Belgien', flag:'🇧🇪',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:30}, devices:[['ofen'],['topf']], method:'Backofen + großer Topf',
  allergens:['fisch','sellerie','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Sellerie','Zwiebel','Lauch','Kräuter'], season:[],
  ing:[
    {n:'Miesmuscheln, frisch (mit Schale)',q:500,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Staudensellerie',q:1,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Petersilie, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Stifte schneiden, mit der Hälfte des Öls mischen und 25 bis 30 Minuten goldbraun backen, einmal wenden.',
    'Muscheln unter kaltem Wasser abbürsten und die Bärte entfernen. Offene Muscheln, die sich beim Klopfen nicht schließen, aussortieren.',
    'Zwiebel, Sellerie und Lauch fein schneiden und im großen Topf im restlichen Öl 4 Minuten dünsten. Brühe und Muscheln zugeben und zugedeckt 6 bis 8 Minuten garen, bis sich alle Muscheln geöffnet haben, dabei einmal schütteln. Geschlossene Muscheln wegwerfen.',
    'Petersilie unterheben und Joghurt als Dip zu den Pommes reichen.',
    'Kinderportion ungesalzen abnehmen und die Muscheln dafür auslösen. Erwachsene mit Pfeffer und Zitrone würzen, der Sud ist von Natur aus salzig.'
  ],
  kidName:'Mini-Moules-frites',
  kid:'Muscheln vollständig garen, aus der Schale lösen und klein schneiden, da sie zäh sein können. Pommes weich ohne harte Ecken, Joghurt als milder Dip.',
  leftover:'Muschelsud-Suppe · 10 Min. – Übrigen Sud mit Kartoffelwürfeln und Gemüse zu einer Suppe kochen.',
  tipp:'Muscheln am Einkaufstag zubereiten und bedenken, dass sie als Weichtiere ein eigenes Allergen sind, das hier unter Fisch mitgeführt wird.'
},
{
  id:'be-kabeljauw-mosterdsaus', name:'Kabeljauw met mosterdsaus · Kabeljau in Lauch-Senf-Soße mit Kartoffeln', cuisine:'Belgien', flag:'🇧🇪',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Lauch','Kräuter'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in kleine Stücke schneiden und in 15 Minuten weich kochen.',
    'Lauch in feine Ringe schneiden und in der Pfanne in Öl 4 Minuten dünsten. Milch mit der Stärke verrühren, zugießen und 1 Minute aufkochen.',
    'Fisch in die Soße legen und zugedeckt bei kleiner Hitze 6 bis 8 Minuten ziehen lassen, bis er sich leicht zerpflücken lässt. Petersilie darüberstreuen.',
    'Kinderportion ohne Senf und Salz abnehmen und Fisch auf Gräten prüfen. Senf in die restliche Soße rühren und Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Kabeljau',
  kid:'Fisch vollständig garen, auf Gräten prüfen und zerpflücken. Kartoffeln mit der milden Lauchsoße ohne Senf zerdrücken.',
  leftover:'Fisch-Kartoffel-Auflauf · 20 Min. – Reste in eine Form schichten, mit Käse bestreuen und im Ofen vollständig durcherhitzen.',
  tipp:'Ein grober, milder Senf bringt viel Aroma ohne große Schärfe.'
},
{
  id:'be-truite-amandes', name:'Truite aux amandes · Forellenfilet mit Mandeln, grünen Bohnen und Kartoffeln', cuisine:'Belgien', flag:'🇧🇪',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','nuesse'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Grüne Bohnen','Zitrone','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Forellenfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:150,u:'g',c:'gemuese'},
    {n:'Mandelblättchen',q:10,u:'g',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in kleine Stücke schneiden und in 15 Minuten weich kochen. Grüne Bohnen putzen und für die letzten 8 Minuten mit in den Topf geben.',
    'Mandelblättchen in der trockenen Pfanne 2 Minuten goldgelb rösten und herausnehmen.',
    'Forellenfilets in Öl auf der Hautseite 3 Minuten braten, wenden und 2 Minuten fertig garen, bis sie innen nicht mehr glasig sind.',
    'Kinderportion ungesalzen und ohne Mandeln abnehmen. Erwachsene mit Mandeln, Zitrone, Petersilie und Salz servieren.'
  ],
  kidName:'Mini-Forelle',
  kid:'Forelle sorgfältig entgräten und zerpflücken, Bohnen sehr weich garen und in kurze Stücke schneiden. Mandelblättchen weglassen, höchstens fein gemahlen untermischen.',
  leftover:'Forellen-Kartoffelsalat · 8 Min. – Reste kalt mit Joghurt, Gurke und Dill zu einem Salat mischen.',
  tipp:'Grüne Bohnen gibt es außerhalb der Saison gut als TK-Ware, sie sind in 6 Minuten weich.'
},
{
  id:'be-stoofvlees', name:'Stoofvlees · flämischer Rindfleischschmortopf mit Senfbrot und Kartoffeln', cuisine:'Belgien', flag:'🇧🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:100}, devices:[['topf','slowcooker'],['topf']], method:'Schmortopf oder Slow Cooker + Topf',
  allergens:['gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Karotten','Apfel','Kartoffeln'], season:[9,10,11,12],
  ing:[
    {n:'Rindergulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Rindfleisch trocken tupfen und portionsweise im Schmortopf in Öl kräftig anbraten, dann herausnehmen. Zwiebeln in Streifen schneiden und im Bratfett 8 Minuten goldbraun schmoren.',
    'Fleisch zurückgeben, Karotten in Scheiben, geriebenen Apfel, Thymian und Brühe zugeben. Brotscheibe mit Senf bestreichen und mit der Senfseite nach unten auf das Fleisch legen.',
    'Zugedeckt bei kleiner Hitze 90 Minuten schmoren und gelegentlich umrühren, bis das Brot zerfallen ist, die Soße bindet und das Fleisch zart ist.',
    'Kartoffeln in den letzten 20 Minuten in einem zweiten Topf weich kochen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und einem Spritzer Apfelessig würzen.'
  ],
  kidName:'Mini-Stoofvlees',
  kid:'Rindfleisch fein zerzupfen und mit Soße und zerdrückten Kartoffeln mischen. Die Soße ist durch Apfel und Zwiebeln mild-süßlich, kein Salz dazu.',
  leftover:'Stoofvlees-Ragout · 10 Min. – Reste erhitzen und mit Vollkornnudeln zu einem Ragout mischen.',
  tipp:'Im Slow Cooker auf niedriger Stufe 7 bis 8 Stunden garen, die Bindung mit Senfbrot funktioniert dort genauso.'
},
{
  id:'be-waterzooi', name:'Gentse Waterzooi · cremiger Hähnchen-Gemüse-Topf mit Vollkornbrot', cuisine:'Belgien', flag:'🇧🇪',
  protein:'gefluegel', base:null, time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['milch','sellerie','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Lauch','Sellerie','Kräuter'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Staudensellerie',q:1,u:'Stange',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Karotten, Lauch und Sellerie in feine Streifen schneiden. Brühe mit Lorbeer aufkochen, Gemüse zugeben und 8 Minuten köcheln.',
    'Hähnchen in mundgerechte Stücke schneiden, in die Brühe legen und bei kleiner Hitze 10 bis 12 Minuten gar ziehen lassen, bis es innen nicht mehr rosa ist.',
    'Milch mit Stärke verrühren, einrühren und 2 Minuten sanft köcheln, bis die Brühe leicht cremig ist. Lorbeer entfernen, Petersilie unterrühren und mit Vollkornbrot servieren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Mini-Waterzooi',
  kid:'Hähnchen und Gemüse mit wenig Brühe herausnehmen und klein schneiden oder zerdrücken, damit es löffelbar ist. Brot ohne Kruste zum Eintunken, kein Salz.',
  leftover:'Waterzooi-Reis · 10 Min. – Reste mit gekochtem Reis dick einkochen und als Ragout essen.',
  tipp:'Ursprünglich wurde Waterzooi in Gent mit Flussfisch gekocht, mit Seelachs gelingt die Fischvariante genauso.'
},
{
  id:'be-chicons-gratin', name:'Chicons au gratin · Chicorée im Schinkenmantel mit Käsesoße und Kartoffelpüree', cuisine:'Belgien', flag:'🇧🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:35}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Chicorée','Kartoffeln','Zitrone'], season:[11,12,1,2,3],
  ing:[
    {n:'Chicorée',q:2,u:'Stk.',c:'gemuese'},
    {n:'Kochschinken, mager',q:2,u:'Scheiben',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Milch',q:200,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:2,u:'TL',c:'vorrat',p:true},
    {n:'Emmentaler oder Gouda',q:30,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln schälen, würfeln und in 15 bis 18 Minuten weich kochen.',
    'Chicorée halbieren und den bitteren Strunk keilförmig herausschneiden. In einem zweiten Topf mit Öl, einem Spritzer Zitrone und 3 EL Wasser zugedeckt 8 Minuten weich dünsten und gut abtropfen lassen.',
    '150 ml Milch mit der Stärke verrühren, unter Rühren aufkochen und zwei Drittel des Käses einrühren. Chicorée in Schinken wickeln, in eine Form legen, mit der Soße übergießen, mit restlichem Käse bestreuen und 15 Minuten goldbraun backen.',
    'Kartoffeln mit der restlichen warmen Milch zu Püree stampfen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer und Muskat würzen, Schinken und Käse bringen schon Salz mit.'
  ],
  kidName:'Mini-Chicorée-Gratin',
  kid:'Chicorée sehr weich garen, mit Schinken klein schneiden und unter das Püree mischen, so wird die leichte Bitterkeit milder. Schinken ist salzig, daher nur eine kleine Menge.',
  leftover:'Chicorée-Nudeln · 10 Min. – Reste klein schneiden, mit der Käsesoße erhitzen und mit Vollkornnudeln mischen.',
  tipp:'Den Strunk großzügig herausschneiden und den Chicorée gut ausdrücken, dann wird das Gratin weniger bitter und nicht wässrig.'
},
{
  id:'be-boulets-liegeois', name:'Boulets à la liégeoise · Hackbällchen in Zwiebel-Apfel-Soße mit Ofenkartoffeln', cuisine:'Belgien', flag:'🇧🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:30}, devices:[['ofen'],['pfanne']], method:'Backofen + Pfanne',
  allergens:['gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Apfel','Erbsen'], season:[9,10,11],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Apfelkraut',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls mischen und 25 bis 30 Minuten backen.',
    'Hack mit Haferflocken, 2 EL Wasser und der Hälfte des Thymians verkneten und zu 4 bis 5 Bällchen formen. In der Pfanne im restlichen Öl rundum 6 Minuten anbraten.',
    'Zwiebel in Streifen schneiden, Apfel würfeln und neben den Bällchen 5 Minuten anschwitzen. Brühe, Apfelkraut und restlichen Thymian zugeben und zugedeckt 12 Minuten schmoren, bis die Bällchen durch sind. Erbsen in den letzten 4 Minuten mitgaren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und einem Spritzer Essig abschmecken.'
  ],
  kidName:'Mini-Boulets',
  kid:'Bällchen vollständig durchgaren, halbieren und klein schneiden. Mit der milden Apfel-Zwiebel-Soße und zerdrückten Erbsen anbieten, ohne Salz.',
  leftover:'Boulet-Brötchen · 8 Min. – Bällchen in der Soße erhitzen und in einem Vollkornbrötchen servieren.',
  tipp:'Die Lütticher Soße wird sonst mit viel Sirup gekocht, ein Teelöffel Apfelkraut plus frischer Apfel reicht für die typische süß-saure Note.'
},
{
  id:'be-kip-appelmoes', name:'Kip met appelmoes · Hähnchen mit Apfelmus, Ofenpommes und Erbsen-Möhren', cuisine:'Belgien', flag:'🇧🇪',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen'],['pfanne'],['topf']], method:'Backofen + Pfanne + Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Apfel','Erbsen','Karotten'], season:[9,10,11,12],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Apfel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Stifte schneiden, mit der Hälfte des Öls mischen und 25 bis 30 Minuten knusprig backen, einmal wenden.',
    'Apfel schälen, würfeln und mit 3 EL Wasser und einer Prise Zimt 8 Minuten weich köcheln, dann zu Mus zerdrücken. Karotten in Scheiben schneiden und mit den Erbsen in einem zweiten Topf in wenig Wasser 8 Minuten garen.',
    'Hähnchen mit Paprikapulver einreiben und in der Pfanne im restlichen Öl je Seite 5 bis 6 Minuten braten, bis es innen nicht mehr rosa ist. 2 Minuten ruhen lassen und in Scheiben schneiden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen und nach Wunsch Senf dazu reichen.'
  ],
  kidName:'Mini-Kip met appelmoes',
  kid:'Hähnchen in dünne Streifen schneiden oder zerzupfen und zum Dippen ins Apfelmus geben. Pommes weich ohne harte Ecken, Erbsen leicht zerdrücken.',
  leftover:'Hähnchen-Apfel-Wrap · 5 Min. – Hähnchenreste mit Apfelmus und Salat in eine Vollkorntortilla rollen.',
  tipp:'Selbst gekochtes Apfelmus braucht keinen Zucker, wenn ein süßer Apfel wie Elstar oder Gala verwendet wird.'
},
{
  id:'be-vol-au-vent', name:'Vol-au-vent · Hähnchenragout mit Champignons und Vollkornreis', cuisine:'Belgien', flag:'🇧🇪',
  protein:'gefluegel', base:'reis', time:{a:15,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Pilze','Erbsen','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Champignons',q:120,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:80,u:'ml',c:'vorrat'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 25 bis 30 Minuten garen.',
    'Hähnchen in kleine Würfel schneiden und in Öl 4 Minuten anbraten. Pilze in Scheiben schneiden, zugeben und 5 Minuten braten.',
    'Brühe und die mit Stärke verrührte Milch zugießen, Erbsen zugeben und 5 Minuten sanft köcheln, bis das Hähnchen durch und die Soße cremig ist. Petersilie unterrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Zitronensaft würzen.'
  ],
  kidName:'Mini-Vol-au-vent',
  kid:'Hähnchen und Pilze sehr klein schneiden und mit Soße unter weichen Reis mischen. Erbsen leicht zerdrücken, ohne Zitrone und Salz.',
  leftover:'Ragout-Auflauf · 20 Min. – Reste mit Reis in eine Form geben, mit Käse bestreuen und überbacken.',
  tipp:'Für den festlichen Klassiker das Ragout in Blätterteigpasteten füllen, mit Reis ist es leichter und alltagstauglich.'
},
{
  id:'be-stoemp', name:'Stoemp · Brüsseler Karotten-Lauch-Kartoffelstampf mit Spiegelei', cuisine:'Belgien', flag:'🇧🇪',
  protein:'ei', base:'kartoffeln', time:{a:10,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Lauch'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln und Karotten schälen, würfeln und zusammen in 15 bis 18 Minuten weich kochen.',
    'Lauch in feine Ringe schneiden und in der Pfanne in der Hälfte des Öls 5 Minuten weich dünsten, dann herausnehmen.',
    'Eier im restlichen Öl bei mittlerer Hitze zugedeckt 5 Minuten braten, bis Eiweiß und Eigelb fest sind.',
    'Kartoffeln und Karotten abgießen, mit warmer Milch grob stampfen und den Lauch unterheben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Muskat würzen.'
  ],
  kidName:'Mini-Stoemp',
  kid:'Ei vollständig fest braten und in kleine Stücke schneiden. Stampf weich und ohne Salz, Lauch sehr fein schneiden, damit keine Fäden entstehen.',
  leftover:'Stoemp-Auflauf · 20 Min. – Reste in eine Form streichen, mit Käse bestreuen und im Ofen überbacken.',
  tipp:'Stoemp gelingt mit fast jedem Gemüse, im Winter mit Rosenkohl oder Wirsing und im Frühling mit Spinat.'
},
{
  id:'be-asperges-flamande', name:'Asperges à la flamande · weißer Spargel mit Ei-Petersilien-Soße und Kartoffeln', cuisine:'Belgien', flag:'🇧🇪',
  protein:'ei', base:'kartoffeln', time:{a:12,c:15}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Spargel','Kartoffeln','Kräuter'], season:[4,5,6],
  ing:[
    {n:'Spargel, weiß',q:300,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Butter',q:10,u:'g',c:'kuehl'},
    {n:'Petersilie, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in kleine Stücke schneiden und in 15 Minuten weich kochen. Eier im selben Topf in den ersten 10 Minuten mitkochen, herausnehmen und abschrecken.',
    'Spargel schälen, die holzigen Enden abschneiden und in einem zweiten Topf in leicht siedendem Wasser 12 bis 15 Minuten weich garen.',
    'Eier pellen und fein hacken. Butter schmelzen und mit Eiern, Petersilie und 2 EL Spargelwasser zu einer stückigen Soße verrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer, Muskat und Zitronensaft würzen.'
  ],
  kidName:'Mini-Spargel flämisch',
  kid:'Spargel sehr weich garen, holzige Teile entfernen und in kurze Stücke schneiden. Ei hart gekocht klein hacken und mit den Kartoffeln zerdrücken.',
  leftover:'Spargel-Omelett · 10 Min. – Übrigen Spargel klein schneiden und mit zwei Eiern in der Pfanne vollständig stocken lassen.',
  tipp:'Außerhalb der Spargelzeit passt die Ei-Petersilien-Soße auch zu Lauch oder Blumenkohl.'
},
{
  id:'be-salade-liegeoise', name:'Salade liégeoise · warmer Bohnen-Kartoffel-Salat mit Ei', cuisine:'Belgien', flag:'🇧🇪',
  protein:'ei', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Grüne Bohnen','Zwiebel','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:150,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in mundgerechte Stücke schneiden und in 15 Minuten weich kochen. Grüne Bohnen putzen, halbieren und für die letzten 8 Minuten in den Topf geben. Eier parallel in 10 Minuten hart kochen.',
    'Zwiebel in feine Streifen schneiden und in der Pfanne in Öl 4 Minuten glasig dünsten.',
    'Kartoffeln und Bohnen abgießen und in der Pfanne mit den Zwiebeln schwenken. Eier pellen und vierteln.',
    'Kinderportion ohne Essig und Salz abnehmen. Erwachsene mit Essig, Senf, Salz, Pfeffer und Petersilie abschmecken.'
  ],
  kidName:'Mini-Liégeoise',
  kid:'Ei hart kochen und klein schneiden, Bohnen sehr weich garen und in kurze Stücke schneiden. Kartoffeln leicht zerdrücken, ohne Essig und Salz.',
  leftover:'Bohnen-Kartoffel-Pfanne · 10 Min. – Reste in der Pfanne anbraten und mit einem Ei vollständig stocken lassen.',
  tipp:'Im Original kommen Speckwürfel dazu, Räuchertofu oder etwas Kochschinken geben ein ähnliches Aroma.'
},
{
  id:'be-flamiche', name:'Flamiche aux poireaux · Lauchtarte mit Vollkornboden und Käse', cuisine:'Belgien', flag:'🇧🇪',
  protein:'milch', base:null, time:{a:20,c:40}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Lauch'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Weizenvollkornmehl',q:60,u:'g',c:'vorrat'},
    {n:'Magerquark',q:80,u:'g',c:'kuehl'},
    {n:'Lauch',q:1,u:'Stange',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Emmentaler oder Gouda',q:25,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Mehl, 30 g Quark, Öl und 1 bis 2 EL Wasser zu einem glatten Teig kneten, dünn ausrollen und in eine kleine Tarteform legen.',
    'Lauch längs halbieren, waschen, in feine Ringe schneiden und in der Pfanne mit 3 EL Wasser zugedeckt 6 Minuten weich dünsten.',
    'Restlichen Quark mit Ei, Milch und der Hälfte des Käses verrühren, den Lauch unterheben und auf den Teig geben. Mit restlichem Käse bestreuen.',
    'Im unteren Drittel des Ofens 30 bis 35 Minuten backen, bis die Füllung fest und goldbraun ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer, Muskat und wenig Salz würzen.'
  ],
  kidName:'Mini-Lauchtarte',
  kid:'Tarte vollständig durchbacken, bis die Eimasse fest ist, und in kleine, weiche Stücke ohne harten Rand schneiden. Lauch fein geschnitten, kein Salz.',
  leftover:'Tarte-Abendbrot · 5 Min. – Kalte Stücke mit Gurke und Tomate als Abendbrot oder Lunch essen.',
  tipp:'Lauch gründlich waschen, zwischen den Schichten sitzt oft Erde.'
},
{
  id:'be-witte-bonen', name:'Witte bonen in tomatensaus · weiße Bohnen in Tomaten-Möhren-Soße mit Vollkornbrot', cuisine:'Belgien', flag:'🇧🇪',
  protein:'huelsen', base:null, time:{a:5,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Karotte sehr fein würfeln und in Öl 4 Minuten dünsten.',
    'Gehackte Tomaten, Thymian und Lorbeer zugeben und 6 Minuten köcheln. Abgespülte Bohnen zugeben und weitere 5 Minuten sämig einkochen.',
    'Lorbeer entfernen und mit Vollkornbrot servieren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und etwas Senf würzen.'
  ],
  kidName:'Mini-Bohnentopf',
  kid:'Bohnen grob zerdrücken und mit der Tomatensoße mischen, Lorbeer sicher entfernen. Brot ohne harte Kruste in Streifen zum Dippen, kein Salz.',
  leftover:'Bohnen-Shakshuka · 12 Min. – Reste in der Pfanne erhitzen, zwei Eier hineinschlagen und vollständig stocken lassen.',
  tipp:'In Belgien kommen oft Würstchen oder Hackbällchen dazu, für eine Fleischvariante passen magere Geflügelbällchen.'
},
{
  id:'be-bloemkool-kaassaus', name:'Bloemkool met kaassaus · Blumenkohl in Käsesoße mit Kartoffeln und Ei', cuisine:'Belgien', flag:'🇧🇪',
  protein:'milch', base:'kartoffeln', time:{a:10,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['milch','ei'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Blumenkohl','Kartoffeln','Kräuter'], season:[6,7,8,9,10],
  ing:[
    {n:'Blumenkohl',q:250,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Milch',q:200,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:2,u:'TL',c:'vorrat',p:true},
    {n:'Emmentaler oder Gouda',q:30,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in Stücke schneiden und in 15 bis 18 Minuten weich kochen, das Ei in den letzten 10 Minuten mitkochen. Blumenkohl in Röschen teilen und in einem zweiten Topf in wenig Wasser 10 bis 12 Minuten weich garen.',
    'Blumenkohl abgießen und warm stellen. Im selben Topf Milch mit Stärke unter Rühren aufkochen, 2 Minuten köcheln und den Käse darin schmelzen.',
    'Blumenkohl in die Soße geben, Ei pellen, hacken und mit Petersilie darüberstreuen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Muskat würzen.'
  ],
  kidName:'Mini-Blumenkohl mit Käsesoße',
  kid:'Blumenkohl sehr weich garen und mit Kartoffeln und Soße zerdrücken. Ei hart gekocht klein hacken, ohne Salz und Muskat, der Käse bringt genug Würze.',
  leftover:'Blumenkohl-Gratin · 15 Min. – Reste in eine Form geben, mit etwas Käse bestreuen und im Ofen überbacken.',
  tipp:'Wer mag, überbackt alles noch 10 Minuten im Ofen, dann wird daraus ein goldbraunes Gratin.'
}
);
