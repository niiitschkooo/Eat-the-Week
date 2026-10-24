/* Grün geplant · Niederlande · Top 15 */
RECIPES.push(
{
  id:'nl-erwtensoep', name:'Erwtensoep · dicke Snert mit Schälerbsen, Wurzelgemüse und Roggenbrot', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'huelsen', base:'kartoffeln', time:{a:15,c:60}, devices:[['topf','slowcooker']], method:'Ein Topf',
  allergens:['gluten','sellerie'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Sellerie','Lauch','Karotten','Kartoffeln','Zwiebel'], season:[1,2,3,10,11,12],
  ing:[
    {n:'Schälerbsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Knollensellerie',q:60,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.3,u:'Stange',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:100,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:450,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Schälerbsen abspülen, mit Brühe und Lorbeerblatt aufkochen, den Schaum abschöpfen und zugedeckt 40 Minuten leise köcheln.',
    'Sellerie, Karotten, Kartoffeln, Zwiebel und Lauch klein würfeln, mit Thymian zugeben und weitere 20 Minuten garen, bis die Erbsen zerfallen.',
    'Lorbeerblatt entfernen und die Suppe kräftig umrühren oder grob pürieren, sie soll so dick sein, dass ein Löffel fast darin steht.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer und wenig Salz abschmecken und mit Roggenvollkornbrot servieren.'
  ],
  kidName:'Mini-Snert',
  kid:'Snert dick und lauwarm servieren, Gemüsestücke zerdrücken. Brot in weiche, schmale Streifen schneiden.',
  leftover:'Snert am zweiten Tag · 8 Min. – Die über Nacht fest gewordene Suppe mit etwas Wasser vollständig erhitzen und mit Brot servieren.',
  tipp:'In den Niederlanden gilt Snert als besonders gelungen, wenn sie am zweiten Tag aufgewärmt wird.'
},
{
  id:'nl-bruine-bonen', name:'Bruine bonen met rijst · braune Bohnen mit Zwiebeln, Paprika, Apfel und Vollkornreis', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'huelsen', base:'reis', time:{a:10,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Tomaten','Apfel'], season:[],
  ing:[
    {n:'Braune Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:100,u:'g',c:'vorrat'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser zugedeckt 25 Minuten garen.',
    'Zwiebel in Ringe und Paprika in Streifen schneiden, in Öl 5 Minuten weich braten und das Paprikapulver kurz mitrösten.',
    'Gehackte Tomaten, Thymian und die abgespülten Bohnen zugeben und 10 Minuten sämig köcheln. Apfel klein würfeln und in den letzten 3 Minuten mitwärmen.',
    'Kinderportion ungesalzen abnehmen und die Bohnen zerdrücken. Erwachsene mit Pfeffer und wenig Salz abschmecken und mit dem Reis servieren.'
  ],
  kidName:'Mini-Bruine-Bonen',
  kid:'Bohnen gründlich zerdrücken und mit weichem Reis mischen. Apfelwürfel weich dünsten und ohne Salz servieren.',
  leftover:'Bohnen-Wrap · 8 Min. – Bohnenreste vollständig erhitzen und mit Reis und Gurke in eine Vollkorn-Tortilla rollen.',
  tipp:'Braune Bohnen gibt es im Glas, Kidneybohnen sind ein guter Ersatz.'
},
{
  id:'nl-boerenkool-stamppot', name:'Boerenkool stamppot · Grünkohl-Kartoffel-Stampf mit gebratenem Räuchertofu und Senf', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'tofu', base:'kartoffeln', time:{a:12,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Grünkohl','Kartoffeln','Zwiebel'], season:[11,12,1,2],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Grünkohl, frisch oder TK',q:150,u:'g',c:'gemuese'},
    {n:'Räuchertofu',q:100,u:'g',c:'kuehl'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, grob würfeln und mit dem Grünkohl obenauf in wenig Wasser zugedeckt 20 Minuten weich kochen.',
    'Räuchertofu in kleine Würfel schneiden und mit der fein gewürfelten Zwiebel in Öl 6 bis 8 Minuten knusprig braten.',
    'Kartoffeln und Grünkohl abgießen und mit warmer Milch grob stampfen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Muskat, Pfeffer und wenig Salz würzen und mit Tofu und Senf servieren.'
  ],
  kidName:'Mini-Stamppot',
  kid:'Grünkohl sehr fein hacken und vollständig unter den Stampf mischen. Räuchertofu ist salzig, für das Kind nur wenige Würfel zerbröselt anbieten.',
  leftover:'Stamppot-Taler · 12 Min. – Kalten Stampf zu Talern formen und in der Pfanne von beiden Seiten vollständig durchbraten.',
  tipp:'Traditionell gehört eine Rauchwurst dazu, Räuchertofu bringt das rauchige Aroma mit deutlich weniger Fett.'
},
{
  id:'nl-hutspot-gehaktballen', name:'Hutspot met gehaktballen · Möhren-Zwiebel-Kartoffel-Stampf mit Hackbällchen', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Zwiebel','Kartoffeln'], season:[],
  ing:[
    {n:'Kartoffeln, mehlig',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.75,u:'Stk.',c:'gemuese'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:10,u:'g',c:'vorrat'},
    {n:'Eier',q:0.25,u:'Stk.',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:80,u:'ml',c:'vorrat'},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ein Viertel der Zwiebel fein reiben und beiseitelegen. Kartoffeln, Karotten und restliche Zwiebel schälen, grob würfeln und in wenig Wasser zugedeckt 20 Minuten weich kochen.',
    'Hack mit Haferflocken, Ei, der geriebenen Zwiebel und Muskat verkneten und zu 3 bis 4 Bällchen formen.',
    'Bällchen in Öl rundum 3 Minuten anbraten, mit Brühe ablöschen und zugedeckt 12 Minuten bei kleiner Hitze garen, bis sie innen nicht mehr rosa sind.',
    'Gemüse abgießen und grob stampfen, bei Bedarf etwas Bratensaft zugeben. Kinderportion ungesalzen abnehmen, dann für die Erwachsenen mit Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Hutspot',
  kid:'Gehaktbal vollständig durchgaren, halbieren und klein zerdrücken. Hutspot weich und mit etwas Bratensaft saftig anbieten.',
  leftover:'Hutspot-Auflauf · 20 Min. – Stampf in eine Form streichen, mit wenig Käse bestreuen und bei 200 °C vollständig durchbacken.',
  tipp:'In Leiden wird Hutspot am 3. Oktober zur Erinnerung an das Ende der Belagerung von 1574 gegessen.'
},
{
  id:'nl-hachee', name:'Hachee · Rindfleisch-Zwiebel-Schmortopf mit Lorbeer und Nelke, dazu Rotkohl und Kartoffeln', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:120}, devices:[['topf','slowcooker']], method:'Schmortopf + zwei Töpfe',
  allergens:['gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Rotkohl','Apfel','Kartoffeln'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Rindfleisch zum Schmoren, mager',q:120,u:'g',c:'fisch'},
    {n:'Zwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rotkohl',q:150,u:'g',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Mehl',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Gewürznelke',q:1,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in 3 cm große Würfel schneiden, leicht mit Mehl bestäuben und in Öl im Schmortopf rundum 5 Minuten anbraten.',
    'Zwiebeln in Ringe schneiden und 5 Minuten mitschmoren. Mit 300 ml Wasser und dem Essig ablöschen, Lorbeer und Nelke zugeben und zugedeckt 2 Stunden leise schmoren, bis das Fleisch zerfällt.',
    'Rotkohl fein schneiden und mit Apfelstücken und 100 ml Wasser zugedeckt 40 Minuten weich dünsten. Kartoffeln in den letzten 20 Minuten gar kochen.',
    'Lorbeer und Nelke entfernen. Kinderportion ungesalzen abnehmen, dann für die Erwachsenen mit Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mini-Hachee',
  kid:'Fleisch fein zerzupfen und mit der Zwiebelsoße über zerdrückte Kartoffeln geben. Rotkohl weich und kurz geschnitten anbieten.',
  leftover:'Hachee-Stamppot · 10 Min. – Fleisch und Soße vollständig erhitzen und mit gestampften Kartoffeln und Rotkohl mischen.',
  tipp:'Im Slowcooker nach dem Anbraten 7 Stunden auf niedriger Stufe garen.'
},
{
  id:'nl-macaroni', name:'Hollandse macaroni · Vollkornmakkaroni mit Hack, Paprika, Tomatensoße und Gouda', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'fleisch', base:'nudeln', time:{a:9,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Gouda',q:20,u:'g',c:'kuehl'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Makkaroni nach Packungsangabe etwa 10 Minuten garen.',
    'Zwiebel und Paprika würfeln. Hack in Öl krümelig und vollständig durchbraten, Gemüse zugeben und 4 Minuten mitbraten.',
    'Tomatenmark kurz mitrösten, passierte Tomaten und Oregano zugeben und 5 Minuten köcheln. Makkaroni untermischen, Gouda darüberreiben und zugedeckt 1 Minute schmelzen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Paprikapulver, Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Macaroni',
  kid:'Makkaroni kurz schneiden, Hack fein krümeln und alles mit der milden Tomatensoße mischen. Nur wenig Gouda verwenden.',
  leftover:'Macaroni-Ovenschotel · 20 Min. – Reste in eine Form geben, mit etwas Gouda bestreuen und bei 200 °C vollständig durchbacken.',
  tipp:'In den Niederlanden kommt oft Ketchup dazu, die selbst gekochte Tomatensoße ist die zuckerarme Alternative.'
},
{
  id:'nl-sate-ajam', name:'Saté ajam · Hähnchenspieße aus der Pfanne mit Erdnusssoße, Gurken-Acar und Reis', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'gefluegel', base:'reis', time:{a:12,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['nuesse','soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Gurke','Karotten','Limette'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Jasminreis',q:70,u:'g',c:'vorrat'},
    {n:'Erdnussmus (ohne Zucker und Salz)',q:1,u:'EL',c:'vorrat'},
    {n:'Kokosmilch',q:40,u:'ml',c:'vorrat'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser zugedeckt 12 Minuten garen. Hähnchen in 2 cm große Würfel schneiden und auf Spieße stecken.',
    'Gurke und Karotte in feine Stifte schneiden und mit Essig und 1 EL Wasser mischen.',
    'Spieße in Öl rundum 8 bis 10 Minuten braten, bis das Fleisch vollständig durchgegart ist. Erdnussmus mit Kokosmilch und 2 EL Wasser im kleinen Topf glatt rühren und kurz erwärmen.',
    'Kinderportion ohne Sojasauce und Limette abnehmen. Erwachsene Soße mit Sojasauce, Limettensaft und nach Wunsch Chili abschmecken.'
  ],
  kidName:'Mini-Saté',
  kid:'Fleisch vom Spieß nehmen und klein schneiden, mit wenig Erdnusssoße ohne Sojasauce mischen. Gurke geschält und Karotte weich gedünstet in Stiften anbieten.',
  leftover:'Saté-Reispfanne · 10 Min. – Reis, Fleisch und Gemüsereste mit der restlichen Soße in der Pfanne vollständig erhitzen.',
  tipp:'Erdnussmus ohne Zucker und Salz eignet sich für Kinder, ganze Erdnüsse wegen Verschluckungsgefahr dagegen nicht.'
},
{
  id:'nl-nasi-goreng', name:'Nasi goreng · gebratener Vollkornreis mit Hähnchen, Gemüse und Spiegelei', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'gefluegel', base:'reis', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Lauch','Karotten','Weißkohl'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Hähnchenbrust',q:100,u:'g',c:'fisch'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Lauch',q:0.3,u:'Stange',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Weißkohl',q:60,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Koriander, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 25 Minuten garen und ausdampfen lassen, am besten schon am Vortag.',
    'Hähnchen in kleine Würfel schneiden und in Öl 4 Minuten braten, bis es durchgegart ist. Gehackten Knoblauch, Lauch in Ringen, Karotten in Stiften und Kohl in Streifen zugeben und 5 Minuten braten.',
    'Reis und Koriander zugeben und 4 Minuten unter Wenden braten. Das Ei in einer zweiten Pfanne als Spiegelei braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ohne Sojasauce abnehmen. Erwachsene mit Sojasauce und nach Wunsch Sambal abschmecken und mit dem Spiegelei servieren.'
  ],
  kidName:'Mini-Nasi',
  kid:'Ei vollständig durchbraten und klein schneiden, Hähnchen fein hacken und Gemüse weich braten. Ohne Sojasauce und Sambal servieren.',
  leftover:'Nasi-Omelett · 8 Min. – Reisreste mit verquirltem Ei in der Pfanne vollständig stocken lassen.',
  tipp:'Kalter Reis vom Vortag wird beim Braten körnig statt klebrig.'
},
{
  id:'nl-bami-goreng', name:'Bami goreng · gebratene Vollkornnudeln mit Chinakohl, Möhren und Eistreifen', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'ei', base:'nudeln', time:{a:12,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','ei','soja'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Chinakohl','Karotten','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Pak Choi oder Chinakohl',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln nach Packungsangabe etwa 8 Minuten garen und abgießen.',
    'Eier verquirlen und in der Hälfte des Öls als dünnes Omelett 2 bis 3 Minuten vollständig stocken lassen, herausnehmen und in Streifen schneiden.',
    'Knoblauch und Ingwer fein hacken, Karotten in Stifte und Kohl in Streifen schneiden und im restlichen Öl 4 Minuten braten. Nudeln und Frühlingszwiebel in Ringen zugeben und 2 Minuten mitbraten.',
    'Kinderportion ohne Sojasauce abnehmen. Erwachsene mit Sojasauce und nach Wunsch Sambal abschmecken und die Eistreifen darüber verteilen.'
  ],
  kidName:'Mini-Bami',
  kid:'Nudeln kurz schneiden, Gemüse weich braten und das vollständig gestockte Omelett in kleine Streifen schneiden. Ohne Sojasauce und Sambal servieren.',
  leftover:'Bami-Suppe · 8 Min. – Nudelreste in heißer Gemüsebrühe mit Erbsen vollständig erhitzen.',
  tipp:'Bami und Nasi kamen mit der indonesischen Küche in die Niederlande und gehören dort zum Alltag.'
},
{
  id:'nl-uitsmijter', name:'Uitsmijter · Spiegeleier auf Vollkornbrot mit Gouda, Tomaten und Gurke', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'ei', base:null, time:{a:8,c:6}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Gurke','Salat','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Gouda',q:20,u:'g',c:'kuehl'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.3,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Schnittlauch, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Brot nach Wunsch kurz toasten und mit dünnen Goudascheiben belegen.',
    'Eier in Öl bei mittlerer Hitze zugedeckt 4 bis 5 Minuten braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Tomaten in Scheiben und Gurke in Stifte schneiden und mit dem Salat neben dem Brot anrichten. Spiegeleier auf die Brote legen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer, wenig Salz und Schnittlauch würzen.'
  ],
  kidName:'Mini-Uitsmijter',
  kid:'Ei vollständig durchbraten und mit dem Brot ohne harte Kruste in kleine Stücke schneiden. Tomate und Gurke in weichen Stiften anbieten, Salat weglassen.',
  leftover:'Uitsmijter-Wrap · 5 Min. – Übriges Gemüse mit einem frisch gebratenen Ei in eine Vollkorn-Tortilla rollen.',
  tipp:'Der Name bedeutet Rausschmeißer, weil das Gericht früher als Letztes vor dem Heimweg serviert wurde.'
},
{
  id:'nl-pannenkoek', name:'Hartige pannenkoek · Vollkorn-Pfannkuchen mit Spinat, Champignons und Gouda', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'ei', base:null, time:{a:8,c:15}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Babyspinat','Pilze'], season:[],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:60,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:130,u:'ml',c:'kuehl'},
    {n:'Babyspinat',q:80,u:'g',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Gouda',q:20,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl, Ei und Milch zu einem glatten, dünnflüssigen Teig verrühren und kurz quellen lassen.',
    'Champignons in dünne Scheiben schneiden und in wenig Öl 3 Minuten braten, Spinat zugeben, zusammenfallen lassen und herausnehmen.',
    'Pro Pfannkuchen eine dünne Schicht Teig in wenig Öl geben, Gemüse und geriebenen Gouda darauf verteilen und bei mittlerer Hitze je Seite 2 bis 3 Minuten backen, bis der Teig vollständig gar ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Muskat und Pfeffer würzen.'
  ],
  kidName:'Mini-Pannenkoek',
  kid:'Pfannkuchen in schmale Streifen oder kleine Quadrate schneiden, Spinat fein gehackt einbacken. Nur wenig Gouda verwenden.',
  leftover:'Pfannkuchen-Röllchen · 5 Min. – Kalte Pfannkuchen mit Quark und Gurkenstiften aufrollen und in Scheiben schneiden.',
  tipp:'In den Niederlanden gibt es eigene Pfannkuchenhäuser, herzhafte Varianten sind dort genauso beliebt wie süße.'
},
{
  id:'nl-andijviestamppot', name:'Andijviestamppot · Kartoffelstampf mit frischer Endivie und Gouda-Würfeln', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'milch', base:'kartoffeln', time:{a:7,c:17}, devices:[['topf']], method:'Topf',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Salat','Kartoffeln','Frühlingszwiebel'], season:[8,9,10,11],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Endiviensalat',q:150,u:'g',c:'gemuese'},
    {n:'Gouda',q:35,u:'g',c:'kuehl'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in kleine Würfel schneiden und 15 bis 17 Minuten weich kochen.',
    'Endivie waschen und in sehr feine Streifen schneiden, Frühlingszwiebel in Ringe und Gouda in kleine Würfel schneiden.',
    'Kartoffeln abgießen und mit warmer Milch und Öl grob stampfen. Endivie, Frühlingszwiebel und Gouda unterheben, sodass das Grün im heißen Stampf leicht zusammenfällt.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Senf, Muskat, Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Andijviestamppot',
  kid:'Endivie für das Kind sehr fein schneiden oder kurz mitkochen, damit sie weich ist. Gouda ist salzig, nur wenige kleine Würfel unterheben.',
  leftover:'Stampf-Puffer · 12 Min. – Kalten Stampf zu Talern formen und in der Pfanne von beiden Seiten vollständig durchbraten.',
  tipp:'Die Endivie erst ganz zum Schluss unterheben, so bleibt sie frisch und angenehm herb.'
},
{
  id:'nl-bloemkool-kaassaus', name:'Bloemkool met kaassaus · Blumenkohl in Goudasoße mit Kartoffeln und Ei', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'milch', base:'kartoffeln', time:{a:10,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['milch','ei'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Blumenkohl','Kartoffeln','Kräuter'], season:[6,7,8,9,10],
  ing:[
    {n:'Blumenkohl',q:200,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Gouda',q:30,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, halbieren und 20 Minuten gar kochen, die Eier in den ersten 10 Minuten im selben Topf hart mitkochen.',
    'Blumenkohl in Röschen teilen und in wenig Wasser zugedeckt 10 bis 12 Minuten weich dünsten.',
    'Stärke mit der kalten Milch verrühren, unter Rühren aufkochen, bis die Soße bindet, und den geriebenen Gouda darin schmelzen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Soße mit Muskat und Pfeffer würzen und mit Petersilie über Blumenkohl, Kartoffeln und Eihälften geben.'
  ],
  kidName:'Mini-Bloemkool',
  kid:'Blumenkohl sehr weich garen und mit etwas Käsesoße zerdrücken. Ei hart gekocht klein schneiden, Kartoffeln zerdrücken.',
  leftover:'Blumenkohl-Gratin · 20 Min. – Reste in eine Form geben und bei 200 °C vollständig durchbacken.',
  tipp:'Etwas Kochwasser vom Blumenkohl in der Soße bringt mehr Geschmack ohne zusätzliches Salz.'
},
{
  id:'nl-kibbeling', name:'Kibbeling · gewürzte Fischstücke aus der Pfanne mit Ofenkartoffeln, Krautsalat und Knoblauchsoße', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['ofen','airfryer'],['pfanne']], method:'Backofen + Pfanne',
  allergens:['fisch','gluten','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Weißkohl','Karotten','Zitrone'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Mehl',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls mischen und auf dem Blech 25 Minuten backen, nach der Hälfte wenden.',
    'Weißkohl fein hobeln, Karotte raspeln und mit Zitronensaft verkneten. Etwas Joghurt für das Kind beiseitestellen, den Rest mit fein geriebenem Knoblauch verrühren.',
    'Fisch in 3 cm große Stücke schneiden, in Mehl mit Paprikapulver wenden und im restlichen Öl rundum 5 bis 6 Minuten goldbraun braten, bis er durchgegart ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer und wenig Salz würzen und mit Knoblauchsoße und Krautsalat servieren.'
  ],
  kidName:'Mini-Kibbeling',
  kid:'Fischstücke auf Gräten prüfen und halbieren, sie sind ideal zum Greifen. Joghurt ohne Knoblauch als Dip anbieten und den Krautsalat durch weich gedünstete Karotte ersetzen.',
  leftover:'Fisch-Taco · 8 Min. – Fischreste vollständig erhitzen und mit Krautsalat und Joghurtsoße in kleine Maistortillas füllen.',
  tipp:'Auf niederländischen Märkten wird Kibbeling frittiert, aus der Pfanne bleibt er saftig und braucht nur wenig Öl.'
},
{
  id:'nl-vispannetje', name:'Hollands vispannetje · Fischauflauf mit Lauch, Erbsen und Kartoffelpüree-Haube', cuisine:'Niederlande', flag:'🇳🇱',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:25}, devices:[['ofen'],['topf']], method:'Topf + Backofen',
  allergens:['fisch','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Lauch','Erbsen','Kartoffeln','Kräuter'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:220,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Gouda',q:15,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln schälen, würfeln und 15 Minuten weich kochen, dann mit 70 ml warmer Milch stampfen.',
    'Lauch in feine Ringe schneiden und in Öl 4 Minuten dünsten. Restliche Milch mit der Stärke verrühren, zugeben und aufkochen, bis die Soße bindet, dann Erbsen und Dill unterrühren.',
    'Fisch würfeln und in eine Auflaufform legen, die Lauchsoße darübergeben und mit dem Püree bedecken. Gouda darüberreiben und 20 bis 25 Minuten backen, bis der Fisch durchgegart und die Haube goldbraun ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Muskat, Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Vispannetje',
  kid:'Fisch auf Gräten prüfen und mit Püree und Soße zerdrücken. Erbsen leicht zerdrücken und die Kruste weglassen.',
  leftover:'Fischauflauf-Taler · 12 Min. – Reste zu Talern formen und in der Pfanne von beiden Seiten vollständig durchbraten.',
  tipp:'Einige Nordseekrabben in der Soße machen den Auflauf festlicher, für Kinder wegen des Salzes aber sparsam verwenden.'
}
);
