/* Grün geplant · Kroatien · Top 15 */
RECIPES.push(
{
  id:'hr-pasticada', name:'Pašticada · geschmortes Rindfleisch in Pflaumen-Gemüse-Soße mit Vollkornnudeln', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'fleisch', base:'nudeln', time:{a:25,c:120}, devices:[['topf','slowcooker']], method:'Schmortopf oder Slowcooker',
  allergens:['gluten','sellerie'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Sellerie','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Rinderschulter zum Schmoren',q:120,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Trockenpflaumen',q:2,u:'Stk.',c:'vorrat'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in 3 cm große Stücke schneiden und im Öl rundum kräftig anbraten. Zwiebel, Karotten, Sellerie und Knoblauch würfeln, zugeben und 5 Minuten mitrösten.',
    'Tomatenmark kurz mitrösten, gehackte Pflaumen, Lorbeer und 400 ml Wasser zugeben und zugedeckt bei kleiner Hitze 1 Stunde 45 Minuten schmoren, bis das Fleisch weich ist.',
    'Lorbeer entfernen und das Gemüse mit einem Teil der Soße fein pürieren, sodass eine sämige, dunkle Soße entsteht. Nudeln in der Zwischenzeit weich kochen.',
    'Kinderportion ungesalzen abnehmen und das Fleisch fein zerzupfen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Zartes Rind mit Nudeln',
  kid:'Rindfleisch nach dem Schmoren mit zwei Gabeln fein zerzupfen und mit Nudeln und pürierter Soße mischen. Ohne Salz, die Pflaumen machen die Soße mild.',
  leftover:'Pašticada mit Gnocchi · 10 Min. – Fleisch und Soße vollständig erhitzen und mit gekochten Gnocchi servieren.',
  tipp:'Im Slowcooker 7 Stunden auf niedriger Stufe garen, traditionell wird das Fleisch vorher über Nacht in Essig mariniert.'
},
{
  id:'hr-sarma', name:'Sarma · Kohlrouladen mit Hack und Reis in Tomatensoße, dazu Kartoffelpüree', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'fleisch', base:'kartoffeln', time:{a:35,c:65}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Weißkohl','Zwiebel','Tomaten','Kartoffeln'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Weißkohl',q:200,u:'g',c:'gemuese'},
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Rundkornreis',q:25,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:200,u:'g',c:'gemuese'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Strunk aus dem Kohl schneiden, den Kopf 5 Minuten in kochendes Wasser legen und die weichen Blätter ablösen. Dicke Blattrippen flach schneiden.',
    'Zwiebel fein würfeln und in Öl glasig dünsten. Mit Hack, rohem Reis und Paprikapulver verkneten, auf die Blätter verteilen und fest aufrollen.',
    'Rouladen dicht in einen Topf legen, Kohlreste dazwischen stecken, passierte Tomaten, Lorbeer und Wasser bis knapp unter die Oberfläche angießen und zugedeckt 60 Minuten leise köcheln, bis Reis und Fleisch vollständig gar sind.',
    'Inzwischen Kartoffeln schälen, 20 Minuten weich kochen und mit warmer Milch stampfen.',
    'Kinderportion ungesalzen abnehmen und die Roulade in kleine Stücke schneiden. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Kleine Kohlrouladen-Stücke',
  kid:'Roulade in kleine Stücke schneiden, den sehr weichen Kohl fein hacken und mit Püree und Tomatensoße mischen. Ohne Salz.',
  leftover:'Sarma aus dem Ofen · 20 Min. – Rouladen halbieren, mit Soße in eine Form legen und bei 180 °C vollständig durcherhitzen.',
  tipp:'Traditionell werden sauer eingelegte Kohlblätter verwendet, frischer Weißkohl ist deutlich salzärmer.'
},
{
  id:'hr-cevapi', name:'Ćevapi · Hackröllchen mit Ajvar, Zwiebeln und Vollkorn-Fladenbrot', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'fleisch', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Rote Zwiebel','Gurke','Tomaten'], season:[7,8,9],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkorn-Fladenbrot',q:0.5,u:'Stk.',c:'brot'},
    {n:'Ajvar, mild',q:2,u:'EL',c:'vorrat'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hack mit gepresstem Knoblauch, Paprikapulver und 1 EL Wasser kräftig verkneten und zu fingerlangen Röllchen formen.',
    'Röllchen in Öl bei mittlerer Hitze rundum 8 bis 10 Minuten braten, bis sie innen vollständig durchgegart sind. Fladenbrot danach kurz in der Pfanne wärmen.',
    'Zwiebel fein würfeln, Gurke und Tomaten in Scheiben schneiden.',
    'Kinderportion ungesalzen abnehmen und die Röllchen in Scheiben schneiden. Erwachsene mit Salz würzen und mit Ajvar, Joghurt, Zwiebeln und Brot servieren.'
  ],
  kidName:'Ćevapi-Scheiben mit Gemüse',
  kid:'Röllchen in dünne Scheiben schneiden und mit Brot, Gurke und klein geschnittener Tomate als Fingerfood anbieten. Milden Ajvar nur dünn verstreichen, rohe Zwiebel weglassen.',
  leftover:'Ćevapi-Reis-Pfanne · 10 Min. – Röllchen in Scheiben schneiden und mit Reis und Paprika in der Pfanne vollständig erhitzen.',
  tipp:'Ein Schuss Mineralwasser im Hack macht die Röllchen besonders locker.'
},
{
  id:'hr-peka', name:'Peka-Art · Hähnchen mit Kartoffeln und Gemüse aus dem geschlossenen Bräter', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:60}, devices:[['ofen']], method:'Bräter im Backofen',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Rote Paprika','Zwiebel'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Rosmarin, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln halbieren, Karotten und Paprika in grobe Stücke und Zwiebel in Spalten schneiden.',
    'Gemüse, Hähnchen, angedrückten Knoblauch, Rosmarin und Öl im Bräter mischen und 100 ml Wasser angießen.',
    'Zugedeckt 40 Minuten garen, dann ohne Deckel weitere 20 Minuten bräunen, bis die Kartoffeln weich sind und das Hähnchen innen vollständig durchgegart ist.',
    'Kinderportion ungesalzen abnehmen und das Hähnchen klein zupfen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Hähnchen-Kartoffel-Teller',
  kid:'Hähnchen in kleine Fasern zupfen, die weich geschmorten Kartoffeln und Karotten mit der Gabel andrücken. Ohne Salz.',
  leftover:'Peka-Gröstl · 10 Min. – Reste würfeln und mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Original gart die Peka unter einer Eisenglocke in der Glut, ein geschlossener Bräter im Ofen kommt dem nahe.'
},
{
  id:'hr-pileci-paprikas', name:'Pileći paprikaš · slawonisches Paprikahähnchen mit Vollkornnudeln', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'gefluegel', base:'nudeln', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Zwiebel','Tomaten','Karotten'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel fein würfeln und in Öl 5 Minuten weich dünsten. Hähnchen in mundgerechte Stücke, Paprika in Streifen und Karotte in dünne Scheiben schneiden.',
    'Hähnchen kurz mitbraten, Paprikapulver unterrühren und sofort passierte Tomaten, Gemüse und 150 ml Wasser zugeben.',
    'Zugedeckt 15 Minuten köcheln, bis das Hähnchen durchgegart und das Gemüse weich ist. Nudeln parallel weich kochen. Topf vom Herd nehmen und den Joghurt unterrühren.',
    'Kinderportion ungesalzen abnehmen und das Hähnchen klein schneiden. Erwachsene mit Salz und scharfem Paprikapulver würzen.'
  ],
  kidName:'Mildes Paprikahähnchen',
  kid:'Hähnchen klein schneiden, Paprika sehr weich schmoren und mit Nudeln und der cremigen Soße mischen. Nur edelsüßes Paprikapulver, ohne Salz.',
  leftover:'Paprikaš-Auflauf · 20 Min. – Reste mit den Nudeln in eine Form geben, mit Käse bestreuen und vollständig durchbacken.',
  tipp:'Paprikapulver nie in heißem Fett anbrennen lassen, sonst wird es bitter.'
},
{
  id:'hr-brudet', name:'Brudet · dalmatinischer Fischeintopf mit Tomaten und Polenta', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'fisch', base:'polenta', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Rote Paprika','Kräuter'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Tomaten, gehackt (Dose)',q:200,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel in Streifen schneiden, Paprika und Knoblauch würfeln und in Öl 5 Minuten weich dünsten.',
    'Tomaten, Lorbeer und 150 ml Wasser zugeben und 10 Minuten zu einer dicken Soße köcheln. Fisch in große Stücke schneiden, in die Soße legen und zugedeckt bei kleiner Hitze 8 Minuten gar ziehen lassen, ohne zu rühren. Lorbeer entfernen.',
    'Inzwischen 300 ml Wasser aufkochen, Polenta einrühren und unter Rühren 5 Minuten zu einem weichen Brei garen.',
    'Kinderportion ungesalzen abnehmen, den Fisch auf Gräten prüfen und zerpflücken. Erwachsene mit Salz, Pfeffer und gehackter Petersilie würzen.'
  ],
  kidName:'Tomatenfisch mit weicher Polenta',
  kid:'Fisch sorgfältig auf Gräten prüfen, zerpflücken und mit weicher Polenta und Tomatensoße mischen. Ohne Salz.',
  leftover:'Polenta-Schnitten mit Fischsoße · 12 Min. – Polenta in Scheiben in der Pfanne braten und die vollständig erhitzte Fischsoße darübergeben.',
  tipp:'Brudet wird nicht umgerührt, nur der Topf geschwenkt, damit der Fisch nicht zerfällt.'
},
{
  id:'hr-riba-blitva', name:'Riba s blitvom · Fischfilet aus der Pfanne mit Mangold-Kartoffeln', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:16}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Mangold','Kartoffeln','Zitrone','Kräuter'], season:[5,6,7,8,9],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Mangold',q:200,u:'g',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in Wasser 10 Minuten kochen. Mangoldstiele klein schneiden, Blätter grob hacken, zu den Kartoffeln geben und 5 Minuten mitkochen.',
    'Inzwischen den Fisch trocken tupfen und in der Hälfte des Öls bei mittlerer Hitze 3 bis 4 Minuten je Seite braten, bis er sich leicht zerpflücken lässt.',
    'Kartoffeln und Mangold abgießen und mit dem restlichen Öl grob zerdrücken.',
    'Kinderportion ungesalzen abnehmen, den Fisch auf Gräten prüfen und zerpflücken. Erwachsene rühren gepressten Knoblauch und Salz unter die Blitva und würzen den Fisch mit Zitrone und gehackter Petersilie.'
  ],
  kidName:'Fisch mit grünem Kartoffelstampf',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Mangold sehr weich kochen und fein hacken, sodass keine langen Fasern bleiben. Ohne Knoblauch und Salz.',
  leftover:'Blitva-Taler · 15 Min. – Kartoffel-Mangold-Reste mit einem Ei verkneten und als Taler in der Pfanne durchbraten.',
  tipp:'Blitva gelingt auch mit Spinat, der dann nur 1 Minute mitkocht.'
},
{
  id:'hr-bakalar', name:'Bakalar na bijelo · Kabeljau-Kartoffel-Topf mit Knoblauch und Petersilie', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Zwiebel','Weißkohl','Kräuter'], season:[10,11,12,1,2],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in dicke Scheiben schneiden, Zwiebel fein würfeln und beides mit Lorbeer und 300 ml Wasser 15 Minuten köcheln.',
    'Fisch in Stücke schneiden, auf die Kartoffeln legen und zugedeckt 8 Minuten gar ziehen lassen. Lorbeer entfernen und Petersilie hacken.',
    'Kohl sehr fein hobeln und mit etwas Zitronensaft und einem Teil des Öls mischen.',
    'Kinderportion ungesalzen abnehmen und Fisch und Kartoffeln mit etwas Kochflüssigkeit zerdrücken. Erwachsene mit gehacktem Knoblauch, Petersilie, restlichem Öl, Salz und Pfeffer würzen und vorsichtig durchschwenken.'
  ],
  kidName:'Fisch-Kartoffel-Mus',
  kid:'Fisch auf Gräten prüfen und mit Kartoffeln und etwas Kochflüssigkeit zu einem cremigen Mus zerdrücken. Den rohen Kohlsalat beim Kind weglassen.',
  leftover:'Fisch-Kartoffel-Taler · 15 Min. – Reste zerdrücken, mit einem Ei verkneten und in der Pfanne beidseitig durchbraten.',
  tipp:'Original wird getrockneter Stockfisch tagelang gewässert, frischer Kabeljau spart Zeit und Salz.'
},
{
  id:'hr-manestra', name:'Istarska maneštra · Bohnen-Mais-Eintopf mit Kartoffeln und Gemüse', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'huelsen', base:'kartoffeln', time:{a:15,c:30}, devices:[['topf']], method:'Ein Topf',
  allergens:['sellerie','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Mais','Kartoffeln','Karotten','Sellerie','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Kidneybohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Mais (Dose oder TK)',q:60,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Staudensellerie',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotten und Sellerie würfeln und in Öl 5 Minuten andünsten. Kartoffeln in Würfel schneiden.',
    'Kartoffeln, passierte Tomaten, Lorbeer und 500 ml Wasser zugeben und 20 Minuten köcheln.',
    'Bohnen und Mais zugeben und 5 Minuten mitkochen. Ein Viertel des Eintopfs pürieren und wieder unterrühren, damit er sämig wird. Lorbeer entfernen.',
    'Kinderportion ungesalzen abnehmen und die Bohnen zerdrücken. Erwachsene mit Salz und Pfeffer würzen und mit Brot servieren.'
  ],
  kidName:'Dicker Bohnen-Mais-Eintopf',
  kid:'Eintopf dick lassen und Bohnen und Mais gründlich zerdrücken, damit keine ganzen Körner bleiben. Ohne Salz servieren.',
  leftover:'Maneštra mit Nudeln · 10 Min. – Reste mit gekochten kleinen Nudeln vollständig erhitzen.',
  tipp:'Im Spätsommer kommt in Istrien frischer Mais direkt vom Kolben in den Topf.'
},
{
  id:'hr-pasta-fazol', name:'Pašta fažol · Vollkornnudeln mit Bohnen in Tomatensoße', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'huelsen', base:'nudeln', time:{a:10,c:22}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Tomaten','Zwiebel','Karotten','Kräuter'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Kleine Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Parmesan oder Hartkäse',q:10,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Rosmarin, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Karotten und Knoblauch fein würfeln und in Öl 5 Minuten weich dünsten.',
    'Passierte Tomaten, Rosmarin, Bohnen und 400 ml Wasser zugeben, ein Drittel der Bohnen im Topf zerdrücken und 5 Minuten köcheln.',
    'Nudeln direkt in die Soße geben und unter gelegentlichem Rühren 10 bis 12 Minuten weich garen, bei Bedarf Wasser nachgießen. Gehackte Petersilie unterheben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und geriebenem Käse würzen.'
  ],
  kidName:'Bohnen-Nudel-Topf',
  kid:'Bohnen gründlich zerdrücken und die kleinen Nudeln sehr weich garen. Ohne Salz, Käse nur als kleine Prise.',
  leftover:'Nudel-Bohnen-Auflauf · 20 Min. – Reste in eine Form geben, mit Käse bestreuen und bei 200 °C vollständig durchbacken.',
  tipp:'Pašta fažol soll dick sein wie ein Eintopf, nicht dünn wie eine Suppe.'
},
{
  id:'hr-strukli', name:'Zagorski štrukli · gebackene Käse-Spinat-Strudelstücke mit Joghurtguss', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'milch', base:null, time:{a:25,c:35}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['gluten','milch','ei'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Spinat','Salat','Gurke'], season:[3,4,5,6],
  ing:[
    {n:'Filoteig',q:50,u:'g',c:'kuehl'},
    {n:'Hüttenkäse',q:120,u:'g',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Babyspinat',q:80,u:'g',c:'gemuese'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 190 °C vorheizen. Spinat fein hacken und mit Hüttenkäse, der Hälfte des verquirlten Eis und Muskat verrühren.',
    'Filoblätter dünn mit Öl bestreichen, die Füllung als Streifen an die lange Seite setzen, aufrollen und in 5 cm lange Stücke schneiden.',
    'Stücke in eine Form legen, Joghurt mit dem restlichen Ei verrühren, darübergießen und 30 bis 35 Minuten backen, bis die Oberfläche goldbraun und die Füllung fest ist. Salat und Gurke klein schneiden.',
    'Kinderportion ungesalzen abnehmen und in kleine Stücke schneiden. Erwachsene mit Salz und Pfeffer würzen und mit Salat servieren.'
  ],
  kidName:'Kleine Käse-Strudelstücke',
  kid:'Strudel in kleine Stücke schneiden, die Füllung ist vollständig gestockt und mild. Gurke in weichen Stiften statt Blattsalat anbieten.',
  leftover:'Štrukli aufgebacken · 8 Min. – Reste bei 180 °C im Ofen vollständig durchwärmen.',
  tipp:'Original wird der Teig hauchdünn selbst ausgezogen und mit Sahne überbacken, Filoteig und Joghurt sparen Zeit und Fett.'
},
{
  id:'hr-fritaja', name:'Fritaja sa šparogama · Spargel-Frittata mit Vollkornbrot', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'ei', base:null, time:{a:8,c:12}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Spargel','Frühlingszwiebel','Kirschtomaten','Kräuter'], season:[4,5,6],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Spargel, grün',q:150,u:'g',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Holzige Enden vom Spargel abbrechen, Stangen in 2 cm lange Stücke und Frühlingszwiebeln in Ringe schneiden.',
    'Beides in Öl bei mittlerer Hitze 5 Minuten braten, bis der Spargel weich ist.',
    'Verquirlte Eier mit gehackter Petersilie darübergießen und zugedeckt bei kleiner Hitze 6 bis 7 Minuten stocken lassen, bis die Oberfläche fest ist.',
    'Kinderportion ungesalzen abnehmen und in Streifen schneiden. Erwachsene mit Salz und Pfeffer würzen und mit Brot und Kirschtomaten servieren.'
  ],
  kidName:'Spargel-Omelett-Streifen',
  kid:'Frittata vollständig durchstocken lassen und in greifbare Streifen schneiden, die Spargelspitzen sind besonders zart. Kirschtomaten vierteln, ohne Salz.',
  leftover:'Frittata-Brot · 5 Min. – Reste in der Pfanne vollständig erhitzen und auf Vollkornbrot legen.',
  tipp:'In Istrien wird im Frühling wilder Spargel verwendet, grüner Spargel aus dem Handel funktioniert genauso.'
},
{
  id:'hr-sataras', name:'Sataraš · Paprika-Tomaten-Schmorgemüse mit Ei und Vollkornreis', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'ei', base:'reis', time:{a:10,c:30}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Vollkornreis in der doppelten Menge Wasser aufsetzen und in 30 Minuten weich garen.',
    'Zwiebel in Streifen und Paprika in Stücke schneiden und in Öl 8 Minuten weich schmoren. Tomaten würfeln, mit Paprikapulver zugeben und 10 Minuten einköcheln.',
    'Eier verquirlen, unter das Gemüse rühren und bei kleiner Hitze 3 bis 4 Minuten stocken lassen, bis kein flüssiges Ei mehr zu sehen ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, Pfeffer und etwas Chili würzen und mit Reis servieren.'
  ],
  kidName:'Paprika-Ei-Reis',
  kid:'Paprika sehr weich schmoren und fein schneiden, mit vollständig gestocktem Ei und Reis mischen. Ohne Salz und Chili.',
  leftover:'Sataraš-Reispfanne · 8 Min. – Reste mit etwas Wasser in der Pfanne vollständig erhitzen.',
  tipp:'Ohne Ei ist Sataraš auch eine beliebte Beilage zu Ćevapi oder gebratenem Fisch.'
},
{
  id:'hr-palenta-sir', name:'Palenta sa sirom · cremige Polenta mit Hüttenkäse, Joghurt und Pilz-Spinat-Pfanne', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'milch', base:'polenta', time:{a:7,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Pilze','Spinat','Zwiebel'], season:[9,10],
  ing:[
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Hüttenkäse',q:120,u:'g',c:'kuehl'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Champignons',q:100,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:80,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    '200 ml Wasser mit der Milch aufkochen, Polenta einrühren und unter Rühren 5 Minuten zu einem cremigen Brei garen.',
    'Champignons in Scheiben schneiden, Zwiebel würfeln und beides in Öl 5 Minuten braten, Spinat zugeben und zusammenfallen lassen.',
    'Polenta in Teller geben, Hüttenkäse und Joghurt darauf verteilen und das Gemüse daneben anrichten.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Milchpolenta mit Käse',
  kid:'Polenta weich und lauwarm mit Hüttenkäse verrühren, Pilze und Spinat sehr fein hacken. Ohne Salz.',
  leftover:'Polenta-Schnitten · 12 Min. – Kalte Polenta in Scheiben schneiden und in der Pfanne beidseitig goldbraun braten.',
  tipp:'Im Norden Kroatiens gehören Frischkäse und Sauerrahm zur Polenta, Hüttenkäse und Joghurt sind die leichtere Variante.'
},
{
  id:'hr-fuzi', name:'Fuži s gljivama · istrische Vollkornnudeln mit Pilzen und Ricotta', cuisine:'Kroatien', flag:'🇭🇷',
  protein:'milch', base:'nudeln', time:{a:10,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Pilze','Zwiebel','Kräuter'], season:[9,10],
  ing:[
    {n:'Vollkornnudeln',q:90,u:'g',c:'vorrat'},
    {n:'Champignons',q:150,u:'g',c:'gemuese'},
    {n:'Ricotta',q:60,u:'g',c:'kuehl'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Petersilie',q:0.25,u:'Bund',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln nach Packungsangabe in Wasser weich kochen und dabei 100 ml Kochwasser auffangen.',
    'Pilze in Scheiben schneiden, Zwiebel und Knoblauch fein würfeln und in Öl bei starker Hitze 6 Minuten braten, bis die Pilze gebräunt sind. Thymian unterrühren.',
    'Nudeln, Ricotta und so viel Kochwasser zugeben, bis eine cremige Soße entsteht. Gehackte Petersilie unterheben.',
    'Kinderportion ungesalzen abnehmen und die Pilze klein schneiden. Erwachsene mit Salz, Pfeffer und geriebenem Käse würzen.'
  ],
  kidName:'Cremige Pilznudeln',
  kid:'Pilze für das Kind fein hacken und unter die cremigen Nudeln mischen. Ohne Salz, Käse nur als kleine Prise.',
  leftover:'Pilznudel-Frittata · 10 Min. – Reste mit 2 verquirlten Eiern in der Pfanne vollständig stocken lassen.',
  tipp:'In Istrien kommen im Herbst Steinpilze an die Fuži, Champignons sind die alltagstaugliche Variante.'
}
);
