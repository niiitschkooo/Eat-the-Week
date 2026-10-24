/* Grün geplant · Polen · Top 15 */
RECIPES.push(
{
  id:'pl-pierogi-ruskie', name:'Pierogi ruskie · Teigtaschen mit Kartoffel-Quark-Füllung und Gurkensalat', cuisine:'Polen', flag:'🇵🇱',
  protein:'milch', base:null, time:{a:40,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Zwiebel','Gurke','Kräuter'], season:[],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:90,u:'g',c:'vorrat'},
    {n:'Kartoffeln, mehlig',q:150,u:'g',c:'gemuese'},
    {n:'Magerquark',q:80,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.33,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in Wasser 15 Minuten weich kochen. Mehl mit 50 ml warmem Wasser und 1 TL Öl zu einem glatten Teig kneten und abgedeckt ruhen lassen.',
    'Zwiebel fein würfeln und im restlichen Öl 5 Minuten goldgelb dünsten. Kartoffeln zerstampfen und mit Quark und der Hälfte der Zwiebeln mischen.',
    'Teig dünn ausrollen, Kreise von 8 cm ausstechen, je 1 TL Füllung daraufsetzen, zuklappen und die Ränder fest andrücken.',
    'Pierogi portionsweise in siedendem Wasser garen, bis sie 2 Minuten oben schwimmen. Gurke in dünne Scheiben schneiden und mit Joghurt und Dill mischen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit den restlichen Zwiebeln, Pfeffer und etwas Salz servieren.'
  ],
  kidName:'Mini-Pierogi',
  kid:'Pierogi in kleine Stücke schneiden und lauwarm anbieten, die Füllung bleibt ungesalzen. Gurkenscheiben halbieren und mit Joghurt ohne Salz dazugeben.',
  leftover:'Gebratene Pierogi · 8 Min. – Reste in wenig Öl von beiden Seiten goldbraun anbraten.',
  tipp:'Pierogi lassen sich roh auf einem Brett einfrieren und direkt aus dem Gefrierfach kochen.'
},
{
  id:'pl-bigos', name:'Bigos · Krauteintopf mit Sauerkraut, Weißkohl, Pilzen und magerem Schweinefleisch', cuisine:'Polen', flag:'🇵🇱',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:50}, devices:[['topf','slowcooker']], method:'Topf oder Slowcooker',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Weißkohl','Pilze','Zwiebel','Kartoffeln'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Schweinegulasch, mager',q:110,u:'g',c:'fisch'},
    {n:'Sauerkraut',q:150,u:'g',c:'vorrat'},
    {n:'Weißkohl',q:100,u:'g',c:'gemuese'},
    {n:'Champignons',q:60,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Trockenpflaumen',q:2,u:'Stk.',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in 2 cm große Würfel schneiden und in Öl 4 Minuten rundum anbraten. Zwiebel und Pilze klein schneiden, zugeben und 3 Minuten mitbraten.',
    'Sauerkraut abspülen, ausdrücken und grob hacken, Weißkohl in feine Streifen schneiden. Mit Tomatenmark, klein geschnittenen Pflaumen, Lorbeer und 150 ml Wasser in den Topf geben.',
    'Zugedeckt bei kleiner Hitze 45 Minuten schmoren, gelegentlich umrühren und bei Bedarf Wasser nachgießen. Im Slowcooker 5 Stunden auf niedriger Stufe garen.',
    'Kartoffeln schälen und in den letzten 20 Minuten in Wasser weich kochen. Lorbeerblatt entfernen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mildes Kraut mit Kartoffeln',
  kid:'Fleisch und Kohl sehr klein schneiden und mit zerdrückten Kartoffeln mischen. Lorbeerblatt sicher entfernen und ohne Salz servieren.',
  leftover:'Bigos vom Vortag · 10 Min. – Reste im Topf vollständig erhitzen, aufgewärmt schmeckt Bigos noch kräftiger.',
  tipp:'Gleich die doppelte Menge kochen, Bigos lässt sich gut einfrieren.'
},
{
  id:'pl-zurek', name:'Żurek · saure Roggensuppe mit Kartoffeln, Ei und Majoran', cuisine:'Polen', flag:'🇵🇱',
  protein:'ei', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','ei'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Żurek-Sauerteig (Glas)',q:150,u:'ml',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Majoran, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel und Karotte würfeln, Kartoffeln in 1,5 cm große Würfel schneiden. Mit der Brühe aufkochen und 15 Minuten köcheln, bis die Kartoffeln weich sind.',
    'Eier in einem kleinen Topf 10 Minuten hart kochen, abschrecken, pellen und halbieren.',
    'Sauerteig gut aufschütteln, unter Rühren in die Suppe gießen und mit gehacktem Knoblauch und Majoran 5 Minuten leise köcheln lassen.',
    'Kinderportion abnehmen, bevor Salz und Pfeffer dazukommen. Erwachsene nach Geschmack würzen, die Eier in die Teller legen und mit Brot servieren.'
  ],
  kidName:'Milde Kartoffelsuppe mit Ei',
  kid:'Für das Kind mehr Kartoffeln und Karotten als Flüssigkeit auf den Teller geben und leicht zerdrücken. Das hart gekochte Ei klein schneiden, kein zusätzliches Salz.',
  leftover:'Żurek mit frischem Ei · 10 Min. – Suppe vollständig erhitzen und mit einem frisch hart gekochten Ei servieren.',
  tipp:'Żurek-Sauerteig gibt es im Osteuropa-Regal vieler Supermärkte, er ist bereits gesalzen und braucht kaum Nachwürzen.'
},
{
  id:'pl-golabki', name:'Gołąbki · Kohlrouladen mit Hack-Reis-Füllung in Tomatensoße', cuisine:'Polen', flag:'🇵🇱',
  protein:'fleisch', base:'reis', time:{a:30,c:60}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Weißkohl','Tomaten','Zwiebel','Karotten'], season:[9,10,11,12,1,2],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:50,u:'g',c:'vorrat'},
    {n:'Weißkohl',q:200,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:150,u:'ml',c:'vorrat'},
    {n:'Majoran, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in 20 Minuten bissfest vorkochen. Strunk aus dem Kohl schneiden, den Kopf 5 Minuten in kochendes Wasser legen, die weichen Blätter ablösen und dicke Blattrippen flach schneiden.',
    'Zwiebel und Karotte fein reiben, in Öl 3 Minuten dünsten und mit Hack, Reis und Majoran verkneten.',
    'Ofen auf 180 °C vorheizen. Je 2 bis 3 EL Füllung auf ein Kohlblatt setzen, Seiten einschlagen, aufrollen und dicht nebeneinander in eine Auflaufform legen.',
    'Passierte Tomaten mit 50 ml Wasser und Paprikapulver verrühren, über die Rouladen gießen und abgedeckt 45 Minuten backen, bis die Füllung vollständig durchgegart ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene am Tisch mit Pfeffer und etwas Salz würzen.'
  ],
  kidName:'Kohlröllchen mit Tomatensoße',
  kid:'Roulade aufschneiden, das Kohlblatt sehr klein schneiden und mit Füllung und Tomatensoße vermischen. Ohne Salz servieren.',
  leftover:'Gołąbki-Auflauf · 20 Min. – Reste in Stücke schneiden, mit etwas Soße in eine Form geben und im Ofen vollständig erhitzen.',
  tipp:'Den Kohlkopf über Nacht einfrieren und auftauen lassen, dann lösen sich die Blätter ohne Kochen.'
},
{
  id:'pl-kotlet-schabowy', name:'Kotlet schabowy · Schweineschnitzel in Vollkornpanade mit Kartoffeln und Mizeria', cuisine:'Polen', flag:'🇵🇱',
  protein:'fleisch', base:'kartoffeln', time:{a:12,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Gurke','Kräuter'], season:[6,7,8,9],
  ing:[
    {n:'Schweineschnitzel, mager',q:120,u:'g',c:'fisch'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Vollkorn-Semmelbrösel',q:20,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in 2 cm große Würfel schneiden und in Wasser 12 Minuten weich kochen.',
    'Schnitzel zwischen Frischhaltefolie dünn klopfen, durch das verquirlte Ei ziehen, in den Bröseln wenden und andrücken.',
    'Öl in einer beschichteten Pfanne erhitzen und die Schnitzel bei mittlerer Hitze je Seite 3 bis 4 Minuten goldbraun braten, bis sie innen nicht mehr rosa sind.',
    'Gurke in dünne Scheiben hobeln und mit Joghurt und Dill zu Mizeria mischen.',
    'Kinderportion abnehmen, bevor gesalzen wird. Erwachsene Schnitzel und Mizeria mit Salz und Pfeffer würzen.'
  ],
  kidName:'Schnitzelstreifen mit Gurkenjoghurt',
  kid:'Schnitzel in schmale Streifen schneiden, die gut in der Hand liegen, und die Gurke fein raspeln statt in Scheiben. Kartoffeln leicht zerdrücken, alles ohne Salz.',
  leftover:'Schnitzelbrot · 5 Min. – Kaltes Schnitzel in Scheiben mit Gurke auf Vollkornbrot legen.',
  tipp:'In einer guten beschichteten Pfanne wird die Panade mit 1 EL Öl knusprig, ohne im Fett zu schwimmen.'
},
{
  id:'pl-placki', name:'Placki ziemniaczane · Kartoffelpuffer vom Blech mit Kräuterquark und Rote-Bete-Salat', cuisine:'Polen', flag:'🇵🇱',
  protein:'ei', base:null, time:{a:20,c:25}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['ei','gluten','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Rote Bete','Apfel','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dinkel-Vollkornmehl',q:15,u:'g',c:'vorrat'},
    {n:'Magerquark',q:80,u:'g',c:'kuehl'},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'},
    {n:'Rote Bete, vorgegart',q:100,u:'g',c:'gemuese'},
    {n:'Apfel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen, ein Blech mit Backpapier belegen und mit der Hälfte des Öls bestreichen.',
    'Kartoffeln und Zwiebel fein reiben, in einem Tuch kräftig ausdrücken und mit Ei und Mehl verrühren.',
    'Teig in flachen Häufchen auf das Blech setzen, mit dem restlichen Öl bepinseln und 12 Minuten backen, wenden und weitere 10 Minuten knusprig backen.',
    'Inzwischen Quark mit 2 EL Wasser und Schnittlauch glatt rühren. Rote Bete und Apfel grob raspeln und mischen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene Puffer und Quark mit Salz und Pfeffer würzen.'
  ],
  kidName:'Kleine Ofenpuffer',
  kid:'Puffer etwas abkühlen lassen und in Streifen schneiden, Rote Bete und Apfel sehr fein raspeln. Quark ohne Salz zum Dippen anbieten.',
  leftover:'Puffer-Toast · 8 Min. – Reste bei 200 °C im Ofen wieder knusprig backen und mit Quark essen.',
  tipp:'Die Kartoffelmasse direkt nach dem Reiben verarbeiten, dann wird sie nicht grau.'
},
{
  id:'pl-fasolka', name:'Fasolka po bretońsku · Weiße Bohnen in Tomatensoße mit Paprika und Vollkornbrot', cuisine:'Polen', flag:'🇵🇱',
  protein:'huelsen', base:null, time:{a:8,c:12}, devices:[['topf']], method:'Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Zwiebel','Rote Paprika','Karotten','Tomaten'], season:[],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:150,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:0.5,u:'EL',c:'vorrat'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Paprikapulver, geräuchert',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Majoran, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Paprika und Karotte klein würfeln und in Öl 4 Minuten dünsten.',
    'Tomatenmark und geräuchertes Paprikapulver kurz mitrösten, gehackte Tomaten und 50 ml Wasser zugeben und 5 Minuten köcheln.',
    'Bohnen abspülen, mit Majoran zugeben und 3 Minuten durchwärmen, bis die Soße sämig ist.',
    'Kinderportion abnehmen und die Bohnen leicht zerdrücken. Erwachsene mit Salz und Pfeffer abschmecken und mit Brot servieren.'
  ],
  kidName:'Bohnen-Tomaten-Mus mit Brotstreifen',
  kid:'Bohnen mit einer Gabel grob zerdrücken, damit sie nicht im Ganzen verschluckt werden. Brot in schmale Streifen zum Eintunken schneiden, ohne Salz.',
  leftover:'Bohnen-Toast · 6 Min. – Reste erhitzen und auf geröstetes Vollkornbrot geben.',
  tipp:'Geräuchertes Paprikapulver bringt den rauchigen Geschmack der klassischen Wurst ohne zusätzliches Salz.'
},
{
  id:'pl-rosol', name:'Rosół · Hühnersuppe mit Wurzelgemüse und Vollkornnudeln', cuisine:'Polen', flag:'🇵🇱',
  protein:'gefluegel', base:'nudeln', time:{a:15,c:40}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','sellerie'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Sellerie','Pastinake','Lauch','Zwiebel'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:150,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:50,u:'g',c:'gemuese'},
    {n:'Petersilienwurzel oder Pastinake',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Petersilie',q:1,u:'EL',c:'gemuese'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen mit halbierter Zwiebel, Lorbeer und 500 ml kaltem Wasser aufsetzen, langsam aufkochen und den Schaum abschöpfen.',
    'Karotte, Sellerie, Wurzel und Lauch putzen, in grobe Stücke schneiden, zugeben und alles 35 bis 40 Minuten leise köcheln.',
    'Nudeln in einem zweiten Topf nach Packung garen. Fleisch herausnehmen, zerzupfen und mit dem in Scheiben geschnittenen Gemüse zurück in die Brühe geben, Zwiebel und Lorbeer entfernen.',
    'Kinderportion abnehmen, bevor gesalzen wird. Erwachsene mit Salz, Pfeffer und Petersilie würzen und die Suppe über die Nudeln schöpfen.'
  ],
  kidName:'Hühnersuppe mit Nudeln',
  kid:'Fleisch fein zerzupfen, das weiche Gemüse klein schneiden und mit wenig Brühe und den Nudeln mischen, damit es gut löffelbar ist. Ohne Salz.',
  leftover:'Nudeln mit Huhn · 8 Min. – Fleisch, Gemüse und Nudeln mit wenig Brühe in der Pfanne vollständig erhitzen.',
  tipp:'Übrige Brühe einfrieren, sie ist eine gute Grundlage für Soßen und Eintöpfe.'
},
{
  id:'pl-pulpety', name:'Pulpety w sosie koperkowym · Putenbällchen in Dillsoße mit Buchweizen', cuisine:'Polen', flag:'🇵🇱',
  protein:'gefluegel', base:null, time:{a:20,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Erbsen','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Putenhack',q:110,u:'g',c:'fisch'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Buchweizen',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Dinkel-Vollkornmehl',q:10,u:'g',c:'vorrat'},
    {n:'Dill, frisch oder TK',q:2,u:'EL',c:'gemuese'}
  ],
  steps:[
    'Buchweizen in 150 ml Wasser aufkochen und zugedeckt 15 Minuten bei kleiner Hitze quellen lassen.',
    'Zwiebel fein reiben, mit Hack und Haferflocken verkneten und mit nassen Händen walnussgroße Bällchen formen.',
    'Brühe mit gewürfelten Karotten aufkochen, Bällchen einlegen und 12 Minuten leise sieden lassen, bis sie innen durchgegart sind. Erbsen in den letzten 3 Minuten zugeben.',
    'Mehl mit Milch glatt rühren, in die Brühe rühren und 2 Minuten zu einer sämigen Soße köcheln. Dill unterrühren.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Dill-Bällchen mit Buchweizen',
  kid:'Bällchen vierteln, damit sie gut zu kauen sind, und mit Buchweizen und Soße vermischen. Erbsen leicht zerdrücken, ohne Salz.',
  leftover:'Buchweizen-Pfanne · 8 Min. – Restlichen Buchweizen mit Gemüse und einem Ei in der Pfanne braten.',
  tipp:'Buchweizen vor dem Kochen 2 Minuten in der trockenen Pfanne rösten, dann schmeckt er nussiger.'
},
{
  id:'pl-ryba-po-grecku', name:'Ryba po grecku · Seelachs aus dem Ofen unter Möhren-Tomaten-Gemüse mit Kartoffelspalten', cuisine:'Polen', flag:'🇵🇱',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['fisch','sellerie'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Sellerie','Zwiebel','Tomaten','Kartoffeln'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:50,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:100,u:'ml',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls mischen und auf dem Blech 10 Minuten vorbacken.',
    'Karotte und Sellerie grob raspeln, Zwiebel in feine Streifen schneiden und im restlichen Öl 5 Minuten dünsten. Passierte Tomaten, Paprikapulver und Lorbeer zugeben und 5 Minuten köcheln.',
    'Lorbeerblatt entfernen. Fisch zu den Kartoffeln auf das Blech legen, das Gemüse darauf verteilen und 12 bis 15 Minuten backen, bis der Fisch sich leicht zerteilen lässt.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  kidName:'Fisch unter Möhrendecke',
  kid:'Fisch sorgfältig auf Gräten prüfen und zerpflücken, dann mit dem weichen Gemüse mischen. Kartoffeln zerdrücken, alles ohne Salz.',
  leftover:'Kalte Ryba po grecku · 5 Min. – Gekühlte Reste mit Vollkornbrot essen, so wird das Gericht in Polen oft serviert.',
  tipp:'In Polen wird das Gericht gern kalt gegessen und lässt sich deshalb gut am Vortag vorbereiten.'
},
{
  id:'pl-dorsz', name:'Dorsz z patelni · Kabeljau aus der Pfanne mit Dillkartoffeln und Möhren-Apfel-Rohkost', cuisine:'Polen', flag:'🇵🇱',
  protein:'fisch', base:'kartoffeln', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Apfel','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, in 2 cm große Würfel schneiden und in Wasser 12 bis 14 Minuten weich kochen.',
    'Karotte und Apfel fein raspeln und mit etwas Zitronensaft und 1 TL Öl mischen.',
    'Fisch trocken tupfen und im restlichen Öl bei mittlerer Hitze je Seite 3 bis 4 Minuten braten, bis er innen weiß ist und sich leicht zerteilen lässt.',
    'Kartoffeln mit Dill mischen. Kinderportion ohne Salz abnehmen, Erwachsene Fisch und Kartoffeln mit Salz, Pfeffer und Zitrone würzen.'
  ],
  kidName:'Fischflocken mit Dillkartoffeln',
  kid:'Fisch auf Gräten prüfen und in Flocken zerteilen, Kartoffeln zerdrücken. Möhre und Apfel sehr fein raspeln, damit keine harten Stücke bleiben.',
  leftover:'Kartoffel-Rohkost-Salat · 5 Min. – Übrige Kartoffeln und Rohkost mit Joghurt und Dill zu einem Salat mischen.',
  tipp:'Die Möhren-Apfel-Rohkost heißt in Polen Surówka und passt zu fast jedem Gericht.'
},
{
  id:'pl-kotlety-rybne', name:'Kotlety rybne · Fischfrikadellen mit Kartoffeln und warmem Rote-Bete-Gemüse', cuisine:'Polen', flag:'🇵🇱',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:15}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch','ei','gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Bete','Kartoffeln','Zwiebel','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Haferflocken, zart',q:20,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Rote Bete, vorgegart',q:120,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in Wasser 15 Minuten weich kochen.',
    'Fisch sehr fein hacken oder kurz im Zerkleinerer zerkleinern. Mit Ei, Haferflocken, fein geriebener Zwiebel und Dill zu einer formbaren Masse mischen und 5 Minuten ruhen lassen.',
    'Flache Frikadellen formen und im Öl bei mittlerer Hitze je Seite 4 Minuten braten, bis sie durchgegart sind.',
    'Rote Bete grob raspeln und in einem kleinen Topf mit 1 EL Wasser 3 Minuten erwärmen.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und etwas Zitronensaft würzen.'
  ],
  kidName:'Weiche Fischtaler',
  kid:'Fischtaler in kleine Stücke teilen und lauwarm anbieten, Kartoffeln zerdrücken. Rote Bete fein geraspelt ohne Zitrone und Salz dazugeben.',
  leftover:'Fischtaler-Brot · 5 Min. – Kalte Taler mit Roter Bete auf Vollkornbrot legen.',
  tipp:'Mit feuchten Händen lassen sich die Frikadellen leichter formen.'
},
{
  id:'pl-potrawka', name:'Potrawka z kurczaka · Hühnerfrikassee mit Karotten, Pilzen und Erbsen auf Vollkornreis', cuisine:'Polen', flag:'🇵🇱',
  protein:'gefluegel', base:'reis', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Karotten','Erbsen','Pilze','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Champignons',q:60,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:200,u:'ml',c:'vorrat'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Dinkel-Vollkornmehl',q:10,u:'g',c:'vorrat'},
    {n:'Petersilie',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser 25 Minuten garen.',
    'Hähnchen in 2 cm große Würfel schneiden, Karotten in Scheiben und Pilze in Viertel schneiden.',
    'Pilze in Öl 3 Minuten anbraten, Brühe, Karotten und Hähnchen zugeben und 12 Minuten leise köcheln, bis das Fleisch durchgegart ist. Erbsen in den letzten 3 Minuten zugeben.',
    'Mehl mit Milch glatt rühren, einrühren und 2 Minuten zu einer cremigen Soße köcheln. Petersilie unterheben.',
    'Kinderportion abnehmen, bevor gewürzt wird. Erwachsene mit Salz und Pfeffer abschmecken.'
  ],
  kidName:'Hühnchen-Rahm-Reis',
  kid:'Hähnchen fein zerzupfen oder klein schneiden und mit Reis, weichen Karotten und Soße mischen. Erbsen leicht zerdrücken, ohne Salz.',
  leftover:'Frikassee-Auflauf · 20 Min. – Reste mit Reis in eine Form geben, mit etwas Käse bestreuen und im Ofen vollständig erhitzen.',
  tipp:'Mit Resten von einem Brathähnchen verkürzt sich die Garzeit auf wenige Minuten.'
},
{
  id:'pl-zapiekanka', name:'Zapiekanka · überbackenes Vollkornbaguette mit Pilzen, Paprika und Käse', cuisine:'Polen', flag:'🇵🇱',
  protein:'milch', base:null, time:{a:8,c:14}, devices:[['ofen','airfryer']], method:'Pfanne + Backofen',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Rote Paprika','Zwiebel','Kirschtomaten','Salat'], season:[],
  ing:[
    {n:'Vollkornbaguette',q:0.5,u:'Stk.',c:'brot'},
    {n:'Champignons',q:150,u:'g',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gouda, gerieben',q:45,u:'g',c:'kuehl'},
    {n:'Tomaten, passiert',q:40,u:'ml',c:'vorrat'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Schnittlauch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Pilze, Paprika und Zwiebel klein würfeln und in Öl 6 Minuten braten, bis die Flüssigkeit verdampft ist.',
    'Baguette längs halbieren, dünn mit passierten Tomaten bestreichen, Gemüse darauf verteilen und mit Käse bestreuen.',
    'Auf dem Rost 8 Minuten backen, bis der Käse geschmolzen und leicht gebräunt ist. Inzwischen Salat und halbierte Kirschtomaten anrichten.',
    'Kinderportion abnehmen. Erwachsene mit Pfeffer und Schnittlauch bestreuen, Salz ist durch den Käse nicht nötig.'
  ],
  kidName:'Mini-Zapiekanka',
  kid:'Baguette in kleine Streifen schneiden und etwas abkühlen lassen, damit der Käse nicht zu heiß ist. Kirschtomaten vierteln.',
  leftover:'Zapiekanka-Toast · 5 Min. – Übrige Hälften im Ofen oder Airfryer kurz wieder aufbacken.',
  tipp:'Im Airfryer bei 190 °C sind die Brote in 6 Minuten fertig.'
},
{
  id:'pl-nalesniki', name:'Naleśniki ze szpinakiem · herzhafte Vollkorn-Pfannkuchen mit Spinat, Quark und Feta', cuisine:'Polen', flag:'🇵🇱',
  protein:'milch', base:null, time:{a:25,c:15}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','milch','ei'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Spinat','Zwiebel','Tomaten'], season:[3,4,5,9,10],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:60,u:'g',c:'vorrat'},
    {n:'Milch',q:125,u:'ml',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Babyspinat',q:150,u:'g',c:'gemuese'},
    {n:'Magerquark',q:80,u:'g',c:'kuehl'},
    {n:'Feta',q:25,u:'g',c:'kuehl'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl, Milch, Ei und 50 ml Wasser glatt verquirlen und 10 Minuten quellen lassen.',
    'Zwiebel und Knoblauch fein hacken, in wenig Öl 2 Minuten dünsten, Spinat zugeben und zusammenfallen lassen. Abtropfen lassen und mit dem Quark mischen, etwas Füllung für das Kind beiseitestellen und unter den Rest den zerbröselten Feta heben.',
    'Pfanne dünn mit Öl auspinseln und aus dem Teig nacheinander dünne Pfannkuchen backen, je Seite etwa 1 Minute.',
    'Pfannkuchen mit der Füllung bestreichen, zu Dreiecken falten und in der Pfanne je Seite 2 Minuten erwärmen. Tomate in Spalten dazu reichen.',
    'Kinderportion mit der Füllung ohne Feta abnehmen. Erwachsene mit Pfeffer würzen, Salz ist durch den Feta kaum nötig.'
  ],
  kidName:'Spinat-Pfannkuchenröllchen',
  kid:'Pfannkuchen mit Spinat-Quark ohne Feta füllen, aufrollen und in fingerbreite Stücke schneiden. Tomate entkernen und klein würfeln.',
  leftover:'Überbackene Röllchen · 15 Min. – Reste in eine Form legen, mit etwas Tomatensoße begießen und im Ofen vollständig erhitzen.',
  tipp:'Übrige Pfannkuchen zwischen Backpapier gestapelt einfrieren, dann lassen sie sich einzeln entnehmen.'
}
);
