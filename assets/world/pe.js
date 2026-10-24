/* Grün geplant · Peru · Top 15 */
RECIPES.push(
{
  id:'pe-lomo-saltado', name:'Lomo Saltado · Rindfleisch-Pfanne mit Tomaten, Zwiebeln und Ofenkartoffeln', cuisine:'Peru', flag:'🇵🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen','airfryer'],['pfanne']], method:'Backofen + Pfanne',
  allergens:['soja'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Zwiebel','Rote Paprika','Kartoffeln','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Rindfleisch, dünne Streifen',q:110,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Stifte schneiden, mit der Hälfte des Öls mischen und auf dem Blech 25 bis 30 Minuten knusprig backen, einmal wenden.',
    'Zwiebel in Spalten, Paprika in Streifen und Tomaten in Achtel schneiden, Knoblauch fein hacken.',
    'Fleisch im restlichen Öl in der sehr heißen Pfanne 2 Minuten scharf anbraten. Knoblauch, Zwiebel und Paprika zugeben und 2 Minuten mitbraten, Tomaten nur 1 Minute mitschwenken.',
    'Kinderportion ohne Sojasauce abnehmen. Erwachsene mit Sojasauce und Essig ablöschen, mit Koriander bestreuen und mit den Ofenkartoffeln mischen.'
  ],
  kidName:'Mini-Lomo',
  kid:'Fleisch für das Kind etwas länger braten und sehr fein schneiden, Kartoffelstifte weich und lauwarm anbieten. Tomate ohne Haut, ohne Sojasauce.',
  leftover:'Saltado-Wrap · 5 Min. – Reste vollständig erhitzen und in eine Tortilla rollen.',
  tipp:'In Peru gibt es zusätzlich Reis dazu, mit den Ofenkartoffeln reicht eine Beilage.'
},
{
  id:'pe-aji-gallina', name:'Ají de Gallina · Hähnchen in milder gelber Walnuss-Soße mit Vollkornreis', cuisine:'Peru', flag:'🇵🇪',
  protein:'gefluegel', base:'reis', time:{a:20,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch','nuesse'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Gelbe Paprika','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Gelbe Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Vollkornbrot',q:0.5,u:'Scheiben',c:'brot'},
    {n:'Walnüsse',q:10,u:'g',c:'vorrat'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis nach Packung etwa 30 Minuten garen. Hähnchen in wenig Wasser 15 Minuten gar ziehen lassen, herausnehmen, in feine Fasern zupfen und 100 ml Kochwasser aufheben.',
    'Zwiebel, Knoblauch und Paprika würfeln und in Öl 8 Minuten weich dünsten, Kurkuma kurz mitrösten. Brot in der Milch einweichen.',
    'Gemüse mit Milch, Brot und Walnüssen sehr fein pürieren, zurück in die Pfanne geben und mit dem Kochwasser 5 Minuten sämig köcheln. Hähnchenfasern unterheben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und Ají-Amarillo-Paste oder Chili würzen und mit Reis servieren.'
  ],
  kidName:'Mini-Ají ohne Schärfe',
  kid:'Die Soße ist ohne Ají mild und cremig, Hähnchenfasern noch etwas kleiner zupfen. Walnüsse nur fein püriert, nie als ganze Stücke.',
  leftover:'Ají-Empanadas · 25 Min. – Reste als Füllung in Teigkreise geben und im Ofen goldbraun backen.',
  tipp:'Klassisch kommen ein halbes hart gekochtes Ei und eine schwarze Olive auf jeden Teller.'
},
{
  id:'pe-arroz-con-pollo', name:'Arroz con Pollo · grüner Koriander-Reis mit Hähnchen, Erbsen und Paprika', cuisine:'Peru', flag:'🇵🇪',
  protein:'gefluegel', base:'reis', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Spinat','Erbsen','Karotten','Rote Paprika','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Koriander, frisch',q:3,u:'EL',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in Stücke schneiden und im Topf in Öl 5 Minuten rundum anbraten. Gewürfelte Zwiebel zugeben und 2 Minuten mitbraten.',
    'Koriander und Spinat mit 50 ml Brühe fein pürieren. Mit der restlichen Brühe, dem Reis und der gewürfelten Karotte in den Topf geben und zugedeckt 15 Minuten garen.',
    'Erbsen und Paprikawürfel unterheben und zugedeckt weitere 5 Minuten garen, bis der Reis weich und die Flüssigkeit aufgesogen ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und etwas Limette oder Chili würzen.'
  ],
  kidName:'Mini-Arroz con Pollo',
  kid:'Hähnchen klein zupfen, Erbsen leicht zerdrücken und alles mit dem weichen Reis mischen. Ohne Salz und Chili servieren.',
  leftover:'Grüne Reisbällchen · 20 Min. – Reste mit einem Ei verkneten, zu Bällchen formen und im Ofen durchbacken.',
  tipp:'Spinat im Koriander-Püree macht den Reis kräftig grün und für Kinder milder.'
},
{
  id:'pe-pollo-brasa', name:'Pollo a la Brasa · Ofenhähnchen mit Kreuzkümmel-Marinade, Kartoffelspalten und Salat', cuisine:'Peru', flag:'🇵🇪',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:35}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Salat','Gurke','Limette'], season:[6,7,8,9],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Knoblauch fein reiben und mit Kreuzkümmel, Paprikapulver, Oregano und der Hälfte des Öls verrühren, das Hähnchen damit rundum einreiben.',
    'Kartoffeln in Spalten schneiden, mit dem restlichen Öl mischen und mit dem Hähnchen auf ein Blech legen. 30 bis 35 Minuten backen, bis das Hähnchen innen keine rosa Stellen mehr hat.',
    'Salat zupfen, Gurke in Scheiben schneiden und mit etwas Limettensaft anmachen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Limette und nach Wunsch scharfer Ají-Soße servieren.'
  ],
  kidName:'Mini-Pollo',
  kid:'Hähnchen in feine Fasern zupfen und die Kartoffelspalten zerdrücken. Gurke in dünne Stifte schneiden.',
  leftover:'Hähnchen-Wrap · 5 Min. – Fleischreste zupfen und mit Salat und Gurke in eine Tortilla rollen.',
  tipp:'Über Nacht mariniert wird das Hähnchen besonders aromatisch.'
},
{
  id:'pe-anticuchos', name:'Anticuchos · Rinderspieße mit Paprika-Marinade, Kartoffeln, Mais und Zwiebel-Limetten-Salsa', cuisine:'Peru', flag:'🇵🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Mais','Rote Zwiebel','Limette'], season:[8,9],
  ing:[
    {n:'Rinderhüftsteak',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Maiskolben, vorgegart',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in Spalten schneiden und in Wasser 15 bis 18 Minuten weich kochen, den Maiskolben in Stücken in den letzten 5 Minuten mitgaren.',
    'Knoblauch fein reiben und mit Paprikapulver, Kreuzkümmel, Essig und der Hälfte des Öls verrühren. Fleisch in 3 cm große Würfel schneiden, damit mischen und auf Spieße stecken.',
    'Spieße in der heißen Grillpfanne im restlichen Öl rundum 6 bis 8 Minuten braten. Zwiebel in hauchdünne Streifen schneiden und mit Limettensaft mischen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene Spieße mit Salz und Chili würzen und mit der Zwiebel-Limetten-Salsa servieren.'
  ],
  kidName:'Mini-Anticuchos',
  kid:'Fleisch vom Spieß nehmen, gut durchbraten und sehr fein schneiden. Maiskörner vom Kolben schneiden und leicht zerdrücken, Kartoffeln weich anbieten.',
  leftover:'Anticucho-Bowl · 8 Min. – Fleischreste mit Kartoffeln und Mais in der Pfanne vollständig durcherhitzen.',
  tipp:'Holzspieße 20 Minuten in Wasser einweichen, dann verbrennen sie nicht.'
},
{
  id:'pe-rocoto-relleno', name:'Rocoto Relleno · gefüllte Paprika mit Hackfleisch, Ei und Käse aus dem Ofen', cuisine:'Peru', flag:'🇵🇪',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:30}, devices:[['ofen'],['pfanne']], method:'Pfanne + Backofen',
  allergens:['ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Zwiebel','Kartoffeln','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Rote Paprika',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Rosinen',q:10,u:'g',c:'vorrat'},
    {n:'Mozzarella',q:30,u:'g',c:'kuehl'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen und das Ei 10 Minuten hart kochen. Kartoffeln in dünne Scheiben schneiden, mit etwas Öl auf ein Blech legen und 10 Minuten vorbacken.',
    'Zwiebel und Tomate würfeln und im restlichen Öl 3 Minuten dünsten. Hack zugeben und 6 Minuten krümelig braten, mit Kreuzkümmel würzen, Rosinen und das gehackte Ei unterheben.',
    'Paprika halbieren, entkernen, mit der Füllung belegen und mit Käse bestreuen. Zu den Kartoffeln auf das Blech setzen und 20 Minuten backen, bis die Paprika weich ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch mit Chili oder Rocoto-Paste würzen.'
  ],
  kidName:'Mini-Rocoto mild',
  kid:'Paprikahaut abziehen und Paprika samt Füllung klein schneiden. Rosinen für Kleinkinder vorher fein hacken.',
  leftover:'Hack-Kartoffel-Pfanne · 10 Min. – Reste klein schneiden und in der Pfanne vollständig durcherhitzen.',
  tipp:'Echte Rocotos sind sehr scharf, mit roter Paprika wird das Gericht aus Arequipa familientauglich.'
},
{
  id:'pe-sudado', name:'Sudado de Pescado · gedämpfter Fisch in Tomaten-Zwiebel-Sud mit Reis', cuisine:'Peru', flag:'🇵🇪',
  protein:'fisch', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Rote Zwiebel','Rote Paprika','Limette','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen.',
    'Zwiebel und Paprika in Streifen schneiden und mit dem gehackten Knoblauch in Öl 3 Minuten dünsten. Tomaten in Spalten schneiden und darauflegen.',
    'Fisch in Stücke schneiden, auf das Gemüse legen, Brühe angießen und zugedeckt bei kleiner Hitze 8 bis 10 Minuten dämpfen, bis der Fisch innen weiß ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Limettensaft, Koriander und nach Wunsch Ají würzen.'
  ],
  kidName:'Mini-Sudado',
  kid:'Fisch sorgfältig auf Gräten prüfen, zerpflücken und mit Reis und etwas Sud mischen. Tomatenhaut entfernen.',
  leftover:'Sudado-Reis · 8 Min. – Reste mit dem Sud in einem Topf vollständig erhitzen und mit Koriander servieren.',
  tipp:'Der Sud ist das Beste am Gericht, darum reichlich Reis zum Auftunken dazugeben.'
},
{
  id:'pe-causa', name:'Causa Limeña · Kartoffel-Schichtterrine mit Thunfisch, Avocado und Ei', cuisine:'Peru', flag:'🇵🇪',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:20}, devices:[['topf']], method:'Topf',
  allergens:['fisch','ei','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Avocado','Mais','Kirschtomaten','Limette'], season:[],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Thunfisch (Dose, im eigenen Saft)',q:80,u:'g',c:'vorrat',hint:'1 Dose ≈ 140 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Avocado',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Mais (Dose oder TK)',q:40,u:'g',c:'vorrat'},
    {n:'Kirschtomaten',q:60,u:'g',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und 15 bis 18 Minuten weich kochen, das Ei in den letzten 10 Minuten mitkochen. Kartoffeln abgießen und ausdampfen lassen.',
    'Kartoffeln fein stampfen und mit Öl, Kurkuma und dem Saft einer halben Limette zu einer glatten, gelben Masse verrühren und abkühlen lassen.',
    'Thunfisch zerpflücken und mit Joghurt und Mais mischen. Avocado in Scheiben schneiden, Ei schälen und in Scheiben schneiden.',
    'Eine Schicht Kartoffelmasse in ein Glas oder einen Ring drücken, Thunfisch und Avocado darauf verteilen, mit Kartoffelmasse abschließen und mit Ei und halbierten Kirschtomaten belegen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene am Tisch mit Salz, Pfeffer und nach Wunsch Ají-Amarillo-Paste würzen.'
  ],
  kidName:'Mini-Causa',
  kid:'Kartoffelmasse, zerdrückte Avocado und Thunfisch als getrennte Häufchen anbieten, Ei klein schneiden. Kirschtomaten vierteln.',
  leftover:'Causa-Taler · 12 Min. – Reste der Kartoffelmasse zu Talern formen und in der Pfanne goldbraun braten.',
  tipp:'Statt Thunfisch passt gezupftes Hähnchen, dann heißt sie Causa de Pollo.'
},
{
  id:'pe-papa-huancaina', name:'Papa a la Huancaína · Kartoffeln mit milder gelber Käsesoße, Ei und Salat', cuisine:'Peru', flag:'🇵🇪',
  protein:'milch', base:'kartoffeln', time:{a:15,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch','ei','gluten'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Gelbe Paprika','Salat','Oliven'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Hüttenkäse',q:80,u:'g',c:'kuehl'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Gelbe Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Vollkornbrot',q:0.5,u:'Scheiben',c:'brot'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Oliven, schwarz',q:10,u:'g',c:'vorrat'},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in Spalten schneiden und 15 bis 18 Minuten weich kochen, das Ei in den letzten 10 Minuten mitkochen.',
    'Paprika würfeln und in Öl 5 Minuten weich dünsten, Kurkuma kurz mitrösten. Mit Hüttenkäse, Milch und Brot glatt pürieren, bis eine dicke, gelbe Soße entsteht.',
    'Salat auf Teller verteilen, Kartoffeln darauflegen, mit Soße begießen und mit Eivierteln belegen.',
    'Kinderportion ohne Oliven und Salz abnehmen. Erwachsene mit Oliven, Salz und nach Wunsch Ají-Amarillo-Paste würzen.'
  ],
  kidName:'Mini-Huancaína',
  kid:'Kartoffeln zerdrücken und mit wenig Soße mischen, Ei klein schneiden. Salat für Kleinkinder weglassen oder sehr fein schneiden.',
  leftover:'Huancaína-Nudeln · 12 Min. – Restliche Soße mit Vollkornnudeln und Spinat zu einer cremigen Pasta mischen.',
  tipp:'Die Soße hält sich zwei Tage im Kühlschrank und passt auch als Dip zu Gemüsesticks.'
},
{
  id:'pe-solterito', name:'Solterito de Quinua · lauwarmer Quinoa-Salat mit Dicken Bohnen, Mais und Käse', cuisine:'Peru', flag:'🇵🇪',
  protein:'huelsen', base:'quinoa', time:{a:12,c:12}, devices:[['topf']], method:'Topf',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Tomaten','Mais','Rote Zwiebel','Oliven','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Quinoa',q:70,u:'g',c:'vorrat'},
    {n:'Dicke Bohnen, TK',q:120,u:'g',c:'tk'},
    {n:'Mais (Dose oder TK)',q:60,u:'g',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Feta',q:40,u:'g',c:'kuehl'},
    {n:'Oliven, schwarz',q:10,u:'g',c:'vorrat'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Quinoa gründlich spülen und in der 1,5-fachen Menge Wasser 12 Minuten garen, Dicke Bohnen und Mais in den letzten 5 Minuten zugeben.',
    'Tomaten würfeln, Zwiebel sehr fein hacken, Oliven in Ringe schneiden und Feta zerbröseln.',
    'Quinoa mit Bohnen und Mais etwas abkühlen lassen und mit Tomaten, Petersilie, Öl und Limettensaft mischen.',
    'Kinderportion ohne Zwiebel, Oliven und Feta abnehmen. Erwachsene mit Zwiebel, Oliven, Feta, Salz und nach Wunsch etwas Chili würzen.'
  ],
  kidName:'Mini-Solterito',
  kid:'Dicke Bohnen aus der Haut drücken und zerdrücken, Quinoa mit Mais und Tomatenwürfeln mischen. Feta nur ein paar Krümel, er ist salzig.',
  leftover:'Quinoa-Bratlinge · 15 Min. – Reste mit einem Ei verkneten, Taler formen und in der Pfanne durchbraten.',
  tipp:'Das Original aus Arequipa kommt ohne Quinoa aus, mit ihr wird der Salat zur sättigenden Hauptmahlzeit.'
},
{
  id:'pe-tacu-tacu', name:'Tacu Tacu · knuspriger Reis-Bohnen-Taler mit Spiegelei und Salsa Criolla', cuisine:'Peru', flag:'🇵🇪',
  protein:'huelsen', base:'reis', time:{a:15,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Zwiebel','Rote Zwiebel','Tomaten','Limette','Kräuter'], season:[7,8,9],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:60,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis etwa 30 Minuten garen oder Reis vom Vortag verwenden. Zwiebel und Knoblauch fein würfeln und in der Hälfte des Öls glasig dünsten.',
    'Bohnen mit der Gabel grob zerdrücken, mit Reis und Zwiebel gut vermengen und zu einem flachen, ovalen Taler formen.',
    'Taler im restlichen Öl in der Pfanne je Seite 4 bis 5 Minuten braten, bis er eine goldene Kruste hat. Daneben ein Spiegelei braten, bis Eiweiß und Eigelb fest sind.',
    'Für die Salsa rote Zwiebel in feine Streifen schneiden, Tomaten würfeln und mit Koriander und Limettensaft mischen.',
    'Kinderportion ungesalzen und ohne Salsa abnehmen. Erwachsene mit Salz, Salsa und nach Wunsch Ají würzen.'
  ],
  kidName:'Mini-Tacu-Tacu',
  kid:'Taler in kleine, weiche Stücke teilen und das vollständig durchgebratene Ei klein schneiden. Statt Salsa ein paar Tomatenwürfel ohne Zwiebel.',
  leftover:'Tacu-Tacu-Bowl · 8 Min. – Reste in der Pfanne erhitzen und mit Avocado und Tomaten anrichten.',
  tipp:'Tacu Tacu ist ein klassisches Restegericht, mit Reis und Bohnen vom Vortag in 15 Minuten fertig.'
},
{
  id:'pe-chaufa', name:'Arroz Chaufa · gebratener Vollkornreis mit Ei, Gemüse und Frühlingszwiebel', cuisine:'Peru', flag:'🇵🇪',
  protein:'ei', base:'reis', time:{a:12,c:35}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','soja','sesam'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Karotten','Erbsen','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Frühlingszwiebel',q:2,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis etwa 30 Minuten garen, auf einem Teller ausbreiten und abkühlen lassen.',
    'Eier verquirlen und in etwas Öl in der Pfanne als dünnes Omelett vollständig stocken lassen, herausnehmen und in Streifen schneiden.',
    'Karotte und Paprika fein würfeln und mit geriebenem Ingwer und dem Weißen der Frühlingszwiebeln im restlichen Öl 4 Minuten scharf braten. Erbsen und Reis zugeben, 4 Minuten unter Wenden braten und die Eistreifen unterheben.',
    'Kinderportion ohne Sojasauce abnehmen. Erwachsene mit Sojasauce, Sesamöl und dem Grün der Frühlingszwiebeln würzen.'
  ],
  kidName:'Mini-Chaufa',
  kid:'Das Ei ist vollständig gestockt, in kleine Stücke schneiden. Erbsen leicht zerdrücken und ohne Sojasauce servieren.',
  leftover:'Chaufa-Omelett · 8 Min. – Reste mit zwei verquirlten Eiern übergießen und vollständig stocken lassen.',
  tipp:'Mit Reis vom Vortag ist der Chaufa in 15 Minuten fertig und wird besonders körnig.'
},
{
  id:'pe-tallarines-verdes', name:'Tallarines Verdes · Vollkornnudeln mit Spinat-Basilikum-Käse-Soße', cuisine:'Peru', flag:'🇵🇪',
  protein:'milch', base:'nudeln', time:{a:10,c:12}, devices:[['topf']], method:'Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Spinat','Kräuter','Zwiebel'], season:[4,5,9,10],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Babyspinat',q:120,u:'g',c:'gemuese'},
    {n:'Basilikum, frisch',q:2,u:'EL',c:'gemuese'},
    {n:'Ricotta',q:60,u:'g',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln in ungesalzenem Wasser nach Packung garen. Den Spinat in den letzten 30 Sekunden mitgaren und mit einer Schaumkelle herausheben.',
    'Zwiebel und Knoblauch fein würfeln und in Öl 3 Minuten weich dünsten. Mit Spinat, Basilikum, Ricotta, Parmesan und Milch glatt pürieren.',
    'Nudeln abgießen und mit der grünen Soße mischen, bei Bedarf mit etwas Nudelwasser verdünnen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und etwas mehr Käse würzen.'
  ],
  kidName:'Mini-Tallarines',
  kid:'Nudeln klein schneiden und mit der milden grünen Soße mischen. Salz weglassen, der Käse gibt genug Geschmack.',
  leftover:'Grüner Nudelauflauf · 15 Min. – Reste in eine Form geben, mit Käse bestreuen und im Ofen vollständig erhitzen.',
  tipp:'Italienische Einwanderer brachten das Pesto nach Peru, dort kommen Spinat und Frischkäse hinein.'
},
{
  id:'pe-locro-zapallo', name:'Locro de Zapallo · Kürbis-Kartoffel-Eintopf mit Mais, Erbsen und Käse, dazu Reis', cuisine:'Peru', flag:'🇵🇪',
  protein:'milch', base:'reis', time:{a:15,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['milch','ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kürbis','Kartoffeln','Mais','Erbsen','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Hokkaido-Kürbis',q:200,u:'g',c:'gemuese'},
    {n:'Kartoffeln, mehlig',q:100,u:'g',c:'gemuese'},
    {n:'Reis',q:60,u:'g',c:'vorrat'},
    {n:'Mais (Dose oder TK)',q:50,u:'g',c:'vorrat'},
    {n:'Erbsen, TK',q:40,u:'g',c:'tk'},
    {n:'Feta',q:40,u:'g',c:'kuehl'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen.',
    'Zwiebel würfeln und in Öl glasig dünsten. Kürbis und Kartoffeln würfeln, zugeben, mit 200 ml Wasser aufgießen und zugedeckt 15 Minuten köcheln, bis der Kürbis zerfällt.',
    'Mais, Erbsen und Milch zugeben und 3 Minuten erhitzen. Ei verquirlen, unter Rühren einlaufen lassen und 2 Minuten vollständig stocken lassen.',
    'Kinderportion ungesalzen mit nur wenig Feta abnehmen. Erwachsene mit dem restlichen zerbröselten Feta, Salz, Pfeffer und nach Wunsch Ají würzen und mit Reis servieren.'
  ],
  kidName:'Mini-Kürbis-Locro',
  kid:'Kürbis und Kartoffeln sind weich und lassen sich gut zerdrücken, das Ei ist durchgegart. Nur wenige Krümel Feta, Erbsen leicht zerdrücken.',
  leftover:'Kürbis-Reis-Auflauf · 15 Min. – Reste mit Reis mischen, mit Käse bestreuen und im Ofen überbacken.',
  tipp:'Der Kürbis darf richtig zerfallen, so wird der Locro ohne Sahne cremig.'
},
{
  id:'pe-tortilla-verduras', name:'Tortilla de Verduras · Gemüse-Omelett mit Spinat und Paprika, dazu Reis', cuisine:'Peru', flag:'🇵🇪',
  protein:'ei', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Spinat','Rote Paprika','Frühlingszwiebel','Tomaten'], season:[4,5,9,10],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 12 bis 14 Minuten garen.',
    'Paprika fein würfeln, Frühlingszwiebel in Ringe schneiden und beides in Öl 3 Minuten dünsten. Spinat zugeben und zusammenfallen lassen.',
    'Eier mit Oregano verquirlen, über das Gemüse gießen und zugedeckt bei mittlerer Hitze 6 bis 8 Minuten vollständig stocken lassen, dann mit Hilfe eines Tellers wenden. Tomate in Scheiben schneiden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und nach Wunsch Ají würzen.'
  ],
  kidName:'Mini-Tortilla',
  kid:'Tortilla vollständig durchgaren und in kleine Würfel oder Streifen schneiden. Tomate ohne Haut klein würfeln.',
  leftover:'Tortilla-Brot · 3 Min. – Kalte Reste zwischen Vollkornbrot legen und als Pausenbrot mitnehmen.',
  tipp:'In Peru isst man die Tortilla gern mit Reis und einem Löffel Salsa Criolla.'
}
);
