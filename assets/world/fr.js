/* Grün geplant · Frankreich · Top 15 */
RECIPES.push(
{
  id:'fr-ratatouille', name:'Ratatouille · Provenzalisches Schmorgemüse mit weißen Bohnen und Vollkornreis', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'huelsen', base:'reis', time:{a:20,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Aubergine','Zucchini','Rote Paprika','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Aubergine',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kräuter der Provence',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und zugedeckt 30 Minuten weich garen.',
    'Aubergine, Zucchini, Paprika und Tomate in 1,5 cm große Würfel schneiden, Zwiebel und Knoblauch fein hacken.',
    'Zwiebel, Knoblauch, Aubergine und Paprika in Öl 5 Minuten anbraten. Zucchini, Tomate und Kräuter zugeben und zugedeckt 20 Minuten schmoren, bis alles weich ist, die abgespülten Bohnen die letzten 5 Minuten mitschmoren.',
    'Kinderportion abnehmen und die Bohnen zerdrücken. Erwachsene mit Salz und Pfeffer abschmecken und mit Reis servieren.'
  ],
  nutri:{p:['Weiße Bohnen','Vollkornreis'],f:['Vollkornreis','Weiße Bohnen','Aubergine','Paprika'],i:['Weiße Bohnen'],fat:['Olivenöl']},
  kidName:'Mini-Ratatouille',
  kid:'Gemüse sehr weich schmoren und Tomatenhaut entfernen, Bohnen zerdrücken und alles mit dem Reis vermischen. Ohne Salz.',
  leftover:'Ratatouille-Gratin · 15 Min. – Reste mit etwas geriebenem Käse im Ofen bei 200 °C überbacken.',
  extras:['feta','ei','haehnchen'], tipp:'Ratatouille schmeckt am nächsten Tag noch besser, deshalb lohnt sich die doppelte Menge.'
},
{
  id:'fr-quiche-poireaux', name:'Quiche aux poireaux · Lauch-Quiche mit Vollkornboden und Salat', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'ei', base:null, time:{a:20,c:35}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Lauch','Salat'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Magerquark',q:30,u:'g',c:'kuehl'},
    {n:'Eier',q:1.5,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Emmentaler, gerieben',q:20,u:'g',c:'kuehl'},
    {n:'Blattsalat',q:50,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Mehl, Quark, die Hälfte des Öls und 1 EL Wasser zu einem glatten Teig kneten, dünn ausrollen und eine gefettete Form damit auslegen.',
    'Lauch in feine Ringe schneiden, gründlich waschen und im restlichen Öl 6 Minuten weich dünsten.',
    'Eier mit Milch, Käse und Muskat verquirlen. Lauch auf dem Teig verteilen, die Eiermilch darübergießen und 30 bis 35 Minuten backen, bis die Füllung auch in der Mitte fest ist.',
    'Kinderstück ohne Salz abschneiden und etwas abkühlen lassen. Erwachsene mit Pfeffer und etwas Salz würzen, dazu Salat.'
  ],
  nutri:{p:['Eier','Magerquark','Emmentaler'],f:['Dinkel-Vollkornmehl','Lauch'],i:['Eier','Vollkornmehl'],fat:['Rapsöl','Eier']},
  kidName:'Lauch-Quiche mini',
  kid:'Quiche vollständig durchbacken und in kleine Stücke oder Streifen schneiden, der Lauch ist weich gedünstet. Salat für das Kind weglassen oder sehr fein schneiden.',
  leftover:'Quiche für unterwegs · 5 Min. – Kalte Stücke in die Brotdose packen, sie schmecken auch kalt.',
  extras:['huettenkaese'], tipp:'Der Quark-Öl-Teig braucht keine Ruhezeit und ist leichter als Mürbeteig mit Butter.'
},
{
  id:'fr-galette-complete', name:'Galette complète · Buchweizen-Galette mit Ei, Spinat und Käse', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'ei', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','milch'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Babyspinat','Pilze','Tomaten'], season:[],
  ing:[
    {n:'Buchweizenmehl',q:60,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Emmentaler, gerieben',q:20,u:'g',c:'kuehl'},
    {n:'Babyspinat',q:60,u:'g',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Buchweizenmehl mit 120 ml Wasser glatt rühren und 5 Minuten quellen lassen. Pilze in Scheiben schneiden, in etwas Öl 4 Minuten braten, Spinat darin zusammenfallen lassen und herausnehmen.',
    'Pfanne dünn ausölen, die Hälfte des Teigs dünn verstreichen und 2 Minuten backen, bis sich der Rand löst. Wenden.',
    'Ein Ei in die Mitte schlagen, Käse, Pilze und Spinat rundherum verteilen, die Ränder einklappen und zugedeckt 4 Minuten garen, bis Eiweiß und Eigelb fest sind. Zweite Galette ebenso backen.',
    'Kindergalette ohne Salz abnehmen und in Streifen schneiden. Erwachsene mit Pfeffer, etwas Salz und Tomatenwürfeln servieren.'
  ],
  nutri:{p:['Eier','Emmentaler','Buchweizen'],f:['Buchweizen','Pilze','Spinat'],i:['Buchweizen','Eier','Spinat'],fat:['Eier','Rapsöl']},
  kidName:'Mini-Galette',
  kid:'Ei vollständig durchgaren, bis das Eigelb fest ist, und die Galette in schmale Streifen schneiden. Tomate gehäutet und fein gewürfelt dazugeben.',
  leftover:'Galette-Rolle · 6 Min. – Übrige Galettes mit Gemüse und Käse füllen, aufrollen und in der Pfanne erwärmen.',
  extras:['huettenkaese'], tipp:'Buchweizen ist glutenfrei und gibt der Galette ihren typisch kräftigen Geschmack.'
},
{
  id:'fr-lentilles-du-puy', name:'Lentilles du Puy · Berglinsen mit Wurzelgemüse und Senf-Vinaigrette', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'huelsen', base:null, time:{a:10,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten','sellerie'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Lauch','Sellerie','Zwiebel'], season:[10,11],
  ing:[
    {n:'Berglinsen oder Tellerlinsen, trocken',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Staudensellerie',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Apfelessig',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Linsen abspülen, mit der Brühe aufkochen und zugedeckt 10 Minuten köcheln.',
    'Karotte, Sellerie, Lauch und Zwiebel klein würfeln, zu den Linsen geben und weitere 15 Minuten garen, bis Linsen und Gemüse weich sind. Restliche Flüssigkeit abgießen.',
    'Senf, Essig und Öl zu einer Vinaigrette verrühren.',
    'Kinderportion abnehmen, mit einem Teelöffel Öl mischen und die Linsen leicht zerdrücken. Erwachsene Linsen mit Vinaigrette, Salz und Pfeffer mischen, dazu Vollkornbrot.'
  ],
  nutri:{p:['Berglinsen','Vollkornbrot'],f:['Linsen','Vollkornbrot','Karotten'],i:['Linsen'],fat:['Olivenöl']},
  kidName:'Linsen-Gemüse mild',
  kid:'Linsen sehr weich garen und leicht zerdrücken, Gemüse in kleinen weichen Würfeln. Nur mit etwas Öl statt Senf-Vinaigrette und ohne Salz.',
  leftover:'Linsensalat · 5 Min. – Kalte Reste mit Gurkenwürfeln und frischen Kräutern als Salat servieren.',
  extras:['ei','feta'], tipp:'Berglinsen behalten beim Kochen ihre Form und müssen nicht eingeweicht werden.'
},
{
  id:'fr-tarte-flambee', name:'Tarte flambée · Flammkuchen mit Vollkornboden, Lauch und Pilzen', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'milch', base:null, time:{a:12,c:12}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Lauch','Rote Zwiebel','Pilze'], season:[9,10,11,12,1,2,3],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:80,u:'g',c:'vorrat'},
    {n:'Magerquark',q:80,u:'g',c:'kuehl'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:60,u:'g',c:'gemuese'},
    {n:'Emmentaler, gerieben',q:15,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen mit Blech auf 250 °C vorheizen. Mehl, 45 ml Wasser und die Hälfte des Öls 3 Minuten verkneten und auf Backpapier sehr dünn ausrollen.',
    'Quark mit Joghurt und Muskat glatt rühren und dünn auf den Teig streichen.',
    'Lauch und Zwiebel in feine Ringe, Pilze in dünne Scheiben schneiden, darauf verteilen, mit Käse bestreuen und mit dem restlichen Öl beträufeln.',
    'Auf dem heißen Blech 10 bis 12 Minuten backen, bis der Rand knusprig ist.',
    'Kinderstück ohne Salz abschneiden und in Streifen teilen. Erwachsene mit Pfeffer und etwas Salz würzen.'
  ],
  nutri:{p:['Magerquark','Dinkel-Vollkornmehl','Emmentaler'],f:['Dinkel-Vollkornmehl','Lauch','Pilze'],i:['Vollkornmehl'],fat:['Olivenöl','Emmentaler']},
  kidName:'Flammkuchen-Streifen',
  kid:'In schmale Streifen schneiden und harte Randstücke entfernen. Zwiebeln und Lauch sind dünn geschnitten und weich gebacken.',
  leftover:'Flammkuchen-Snack · 5 Min. – Kalte Streifen in der Pfanne ohne Fett kurz aufknuspern.',
  extras:['haehnchen','ei'], tipp:'Der Teig ohne Hefe ist in 3 Minuten fertig und wird hauchdünn besonders knusprig.'
},
{
  id:'fr-socca', name:'Socca · Kichererbsen-Pfannkuchen aus Nizza mit Zucchini und Tomaten', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'huelsen', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Pfanne',
  allergens:['milch'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Zucchini','Kirschtomaten','Rote Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Kichererbsenmehl',q:70,u:'g',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kirschtomaten',q:100,u:'g',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:80,u:'g',c:'kuehl'},
    {n:'Olivenöl',q:1.5,u:'EL',c:'gewuerz',p:true},
    {n:'Rosmarin, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kichererbsenmehl mit 140 ml Wasser und 1 TL Öl glatt rühren und 5 Minuten quellen lassen.',
    'Zucchini in dünne Scheiben, Zwiebel in Streifen schneiden, Kirschtomaten halbieren. In etwas Öl 5 Minuten braten und herausnehmen.',
    'Pfanne dünn ausölen, die Hälfte des Teigs eingießen und bei mittlerer Hitze je Seite 3 Minuten goldbraun backen. Den zweiten Fladen ebenso backen.',
    'Kinderportion ohne Salz abnehmen und in Streifen schneiden. Erwachsene Socca mit Pfeffer, Rosmarin und Salz bestreuen und mit Gemüse und Joghurt servieren.'
  ],
  nutri:{p:['Kichererbsenmehl','Naturjoghurt'],f:['Kichererbsenmehl','Zucchini','Tomaten'],i:['Kichererbsenmehl'],fat:['Olivenöl']},
  kidName:'Socca-Streifen',
  kid:'Fladen in weiche Streifen schneiden und mit Joghurt zum Dippen anbieten. Kirschtomaten vierteln, Zucchini weich braten, kein Salz.',
  leftover:'Socca-Wrap · 5 Min. – Kalte Fladen mit Gemüseresten und Joghurt füllen und aufrollen.',
  extras:['feta','ei'], tipp:'Kichererbsenmehl ist glutenfrei und liefert viel pflanzliches Eiweiß.'
},
{
  id:'fr-piperade', name:'Piperade · Baskisches Paprikagemüse mit Rührei und Vollkornbrot', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'ei', base:null, time:{a:10,c:14}, devices:[['pfanne']], method:'Pfanne',
  allergens:['ei','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Rote Paprika','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Paprika in Streifen schneiden, Zwiebel und Knoblauch fein hacken, Tomaten würfeln.',
    'Zwiebel und Paprika in Öl 6 Minuten weich dünsten. Knoblauch, Tomaten und Paprikapulver zugeben und 4 Minuten einkochen.',
    'Verquirlte Eier unterrühren und bei milder Hitze 3 bis 4 Minuten stocken lassen, bis kein flüssiges Ei mehr zu sehen ist.',
    'Kinderportion ohne Salz abnehmen. Erwachsene mit Salz, Pfeffer und etwas Piment d\'Espelette oder Chili würzen, dazu Vollkornbrot.'
  ],
  nutri:{p:['Eier'],f:['Vollkornbrot','Paprika','Tomaten'],i:['Eier'],fat:['Eier','Olivenöl']},
  kidName:'Paprika-Rührei',
  kid:'Rührei vollständig durchgaren, Paprika sehr weich dünsten und klein schneiden, Brot in Streifen dazu. Ohne Chili und Salz.',
  leftover:'Piperade-Toast · 5 Min. – Reste warm auf geröstetes Vollkornbrot geben.',
  extras:['feta','kichererbsen'], tipp:'Paprika langsam weich dünsten, dann wird sie süß und mild.'
},
{
  id:'fr-saumon-papillote', name:'Saumon en papillote · Lachs im Päckchen mit Lauch, Karotten und Vollkornreis', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'fisch', base:'reis', time:{a:10,c:30}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['fisch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Lauch','Karotten','Zitrone','Kräuter'], season:[10,11],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Olivenöl',q:0.5,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und zugedeckt 30 Minuten weich garen. Ofen auf 200 °C vorheizen.',
    'Lauch und Karotten in feine, lange Streifen schneiden und auf Backpapier verteilen. Lachs darauflegen, mit Zitronenscheiben belegen, mit Öl beträufeln und das Papier zu einem Päckchen falten.',
    'Auf einem Blech 15 bis 18 Minuten garen, bis sich der Lachs leicht zerpflücken lässt.',
    'Kinderportion abnehmen, den Lachs auf Gräten prüfen und zerpflücken. Erwachsene mit Dill, Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Lachs','Vollkornreis'],f:['Vollkornreis','Lauch','Karotten'],i:['Lachs'],fat:['Lachs (Omega-3)','Olivenöl']},
  kidName:'Lachs-Reis mild',
  kid:'Lachs sorgfältig entgräten und zerpflücken, Gemüsestreifen klein schneiden und mit dem weichen Reis mischen. Ohne Salz und Zitrone.',
  leftover:'Lachs-Reis-Pfanne · 8 Min. – Reis, Gemüse und zerpflückten Lachs mit einem Ei in der Pfanne durchbraten.',
  extras:['joghurt'], tipp:'Die Päckchen lassen sich vorbereiten und bis zum Backen im Kühlschrank lagern.'
},
{
  id:'fr-salade-nicoise', name:'Salade niçoise · Warmer Kartoffelsalat mit Thunfisch, Ei und grünen Bohnen', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:15}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch','ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Grüne Bohnen','Tomaten','Salat','Oliven'], season:[7,8],
  ing:[
    {n:'Thunfisch (Dose, im eigenen Saft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 140 g abgetropft'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Grüne Bohnen',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Blattsalat',q:40,u:'g',c:'gemuese'},
    {n:'Oliven, schwarz',q:15,u:'g',c:'vorrat'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Senf, mittelscharf',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 2 cm große Würfel schneiden und in Wasser 15 Minuten weich kochen. Nach 5 Minuten das Ei und nach 9 Minuten die geputzten Bohnen in Stücken mit in den Topf geben.',
    'Abgießen, das Ei kalt abschrecken, schälen und vierteln. Tomate in Spalten schneiden, Thunfisch abtropfen und zerpflücken.',
    'Kinderportion ohne Dressing abnehmen und alles klein schneiden. Für die Erwachsenen Senf, Zitronensaft, Öl, Salz und Pfeffer verrühren, die warmen Kartoffeln und Bohnen damit mischen und mit Salat, Tomate, Ei, Thunfisch und Oliven anrichten.'
  ],
  nutri:{p:['Thunfisch','Ei'],f:['Kartoffeln','Grüne Bohnen','Tomaten'],i:['Thunfisch','Ei','Grüne Bohnen'],fat:['Olivenöl','Oliven']},
  kidName:'Mini-Niçoise',
  kid:'Ei vollständig hart kochen und klein schneiden, Thunfisch zerpflücken, Kartoffeln und Bohnen weich garen. Tomate häuten und würfeln, keine Oliven.',
  leftover:'Niçoise zum Mitnehmen · 5 Min. – Reste kalt in eine Dose füllen und die Salatblätter erst kurz vor dem Essen dazugeben.',
  extras:['kichererbsen'], tipp:'Kartoffeln, Ei und Bohnen garen nacheinander im selben Topf.'
},
{
  id:'fr-bouillabaisse', name:'Bouillabaisse · Provenzalischer Fischtopf mit Fenchel, Kartoffeln und Vollkornbrot', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:25}, devices:[['topf']], method:'Ein Topf',
  allergens:['fisch','gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Fenchel','Tomaten','Kartoffeln','Zwiebel'], season:[6,7,8],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:180,u:'g',c:'gemuese'},
    {n:'Fenchel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:300,u:'ml',c:'vorrat'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Zwiebel, Knoblauch und Fenchel klein schneiden, Kartoffeln in 1,5 cm große Würfel. Alles in Öl mit Kurkuma 4 Minuten andünsten.',
    'Tomaten und Brühe zugeben und 15 Minuten köcheln, bis die Kartoffeln fast weich sind.',
    'Fisch in große Stücke schneiden, in den Sud legen und bei kleiner Hitze 6 bis 8 Minuten gar ziehen lassen, bis er innen weiß ist.',
    'Kinderportion abnehmen, den Fisch auf Gräten prüfen und zerpflücken. Erwachsene mit Salz, Pfeffer und etwas Chili abschmecken, dazu geröstetes Vollkornbrot.'
  ],
  nutri:{p:['Seelachs oder Kabeljau'],f:['Kartoffeln','Fenchel','Vollkornbrot'],i:['Fisch'],fat:['Olivenöl']},
  kidName:'Fisch-Kartoffel-Topf',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Kartoffeln und Fenchel zerdrücken. Mit wenig Sud als dicken Brei und ohne Salz anbieten.',
  leftover:'Fisch-Gratin · 15 Min. – Reste abtropfen lassen, in eine Form geben, mit Käse bestreuen und bei 200 °C überbacken.',
  extras:['kichererbsen'], tipp:'Mit einer Prise Safran statt Kurkuma schmeckt der Sud wie in Marseille.'
},
{
  id:'fr-poulet-roti', name:'Poulet rôti aux légumes · Ofenhähnchen mit Kartoffeln, Karotten und Pastinaken', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:40}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Pastinake','Rote Zwiebel'], season:[10,11,12,1],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:150,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:220,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Pastinake',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kartoffeln, Karotten und Pastinake in grobe Stücke, Zwiebel in Spalten schneiden und mit Öl und Thymian auf dem Blech mischen.',
    'Hähnchen mit Zitronenscheiben und angedrückten Knoblauchzehen zwischen das Gemüse legen.',
    'Etwa 40 Minuten backen und einmal wenden, bis das Gemüse weich ist und das Hähnchen innen keinen rosa Saft mehr zeigt.',
    'Kinderportion abnehmen und das Fleisch fein zerzupfen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Hähnchen'],f:['Kartoffeln','Karotten','Pastinake'],i:['Hähnchen'],fat:['Olivenöl']},
  kidName:'Mini-Brathähnchen',
  kid:'Hähnchen fein zerzupfen und mit etwas Bratensaft befeuchten. Weich gebackenes Gemüse in Fingerstücken und ohne Salz anbieten.',
  leftover:'Hähnchen-Wrap · 5 Min. – Zerzupftes Fleisch und Ofengemüse in Vollkorn-Tortillas rollen.',
  extras:['joghurt'], tipp:'Hähnchenbrust erst nach 20 Minuten aufs Blech legen, dann bleibt sie saftig.'
},
{
  id:'fr-hachis-parmentier', name:'Hachis parmentier · Hackfleisch-Gemüse-Auflauf mit Kartoffelpüree', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:30}, devices:[['topf'],['pfanne'],['ofen']], method:'Topf + Pfanne + Backofen',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Erbsen','Zwiebel'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, passiert',q:60,u:'ml',c:'vorrat'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Emmentaler, gerieben',q:15,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in Wasser 15 Minuten weich kochen. Ofen auf 200 °C vorheizen.',
    'Zwiebel und Karotte fein würfeln und mit dem Hackfleisch in Öl 6 Minuten krümelig braten. Erbsen und passierte Tomaten zugeben und 3 Minuten köcheln.',
    'Kartoffeln abgießen und mit warmer Milch und Muskat zu Püree stampfen. Hackfleisch in eine Form geben, das Püree darauf verstreichen und mit Käse bestreuen.',
    'Im Ofen 15 Minuten backen, bis die Oberfläche goldbraun ist.',
    'Kinderportion abnehmen und etwas abkühlen lassen. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Rinderhack','Milch','Emmentaler'],f:['Kartoffeln','Karotten','Erbsen'],i:['Rinderhack','Erbsen'],fat:['Rapsöl','Emmentaler']},
  kidName:'Mini-Parmentier',
  kid:'Püree und Hackfleisch für das Kind vermischen und die Erbsen dabei zerdrücken. Ohne Salz und gut abgekühlt servieren.',
  leftover:'Parmentier-Taler · 12 Min. – Kalte Reste zu Talern formen und in der Pfanne goldbraun braten.',
  extras:['linsen'], tipp:'Ein Teil des Hackfleischs lässt sich durch rote Linsen ersetzen, die in der Soße mitkochen.'
},
{
  id:'fr-pot-au-feu', name:'Pot-au-feu · Rindfleisch-Gemüse-Topf mit Lauch, Karotten und Kartoffeln', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:120}, devices:[['topf','slowcooker']], method:'Ein Topf oder Slowcooker',
  allergens:['sellerie'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Lauch','Karotten','Sellerie','Kartoffeln','Weißkohl'], season:[10,11,12,1,2],
  ing:[
    {n:'Rindfleisch zum Schmoren, mager',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:200,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Knollensellerie',q:60,u:'g',c:'gemuese'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true},
    {n:'Senf, mittelscharf',q:1,u:'TL',c:'vorrat',p:true}
  ],
  steps:[
    'Rindfleisch im Stück mit halbierter Zwiebel und Lorbeer in einen Topf legen, knapp mit kaltem Wasser bedecken, aufkochen, Schaum abschöpfen und zugedeckt 90 Minuten leise köcheln.',
    'Karotten, Sellerie und Kartoffeln in grobe Stücke, Lauch in 4 cm lange Stücke und Kohl in Spalten schneiden.',
    'Gemüse und Kartoffeln zum Fleisch geben und weitere 30 Minuten garen, bis alles weich ist. Im Slowcooker alles zusammen 7 Stunden auf niedriger Stufe garen.',
    'Fleisch in Scheiben schneiden. Kinderportion ohne Salz abnehmen, Erwachsene Fleisch und Gemüse mit Salz, Pfeffer und Senf essen und die Brühe als Suppe dazu reichen.'
  ],
  nutri:{p:['Rindfleisch'],f:['Kartoffeln','Karotten','Lauch','Weißkohl'],i:['Rindfleisch'],fat:['Rindfleisch']},
  kidName:'Mini-Pot-au-feu',
  kid:'Rindfleisch sehr fein zerzupfen, Gemüse und Kartoffeln mit etwas Brühe zerdrücken. Ohne Salz und Senf.',
  leftover:'Rindfleisch-Nudelsuppe · 10 Min. – Übrige Brühe mit klein geschnittenem Fleisch, Gemüse und kleinen Nudeln aufkochen.',
  extras:[], tipp:'Die Brühe über Nacht im Kühlschrank erkalten lassen und das Fett abheben.'
},
{
  id:'fr-cassoulet', name:'Cassoulet · Weiße-Bohnen-Topf mit Hähnchen, Karotten und Tomaten', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'gefluegel', base:null, time:{a:15,c:35}, devices:[['topf']], method:'Ein Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Tomaten','Lauch','Zwiebel'], season:[],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:120,u:'g',c:'fisch'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Thymian, getrocknet',q:0.5,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Brot in kleine Würfel schneiden, im Schmortopf ohne Fett 3 Minuten knusprig rösten und herausnehmen.',
    'Hähnchen würfeln und in Öl 5 Minuten anbraten. Zwiebel, Knoblauch, Karotte und Lauch klein schneiden und 4 Minuten mitdünsten.',
    'Tomaten, Thymian und 100 ml Wasser zugeben, die abgespülten Bohnen unterrühren und zugedeckt 25 Minuten leise schmoren, bis das Fleisch zart ist.',
    'Kinderportion ohne Salz abnehmen, Bohnen und Fleisch zerdrücken. Erwachsene mit Salz und Pfeffer abschmecken und die Brotwürfel darüberstreuen.'
  ],
  nutri:{p:['Hähnchen','Weiße Bohnen'],f:['Weiße Bohnen','Karotten','Vollkornbrot'],i:['Weiße Bohnen','Hähnchen'],fat:['Olivenöl']},
  kidName:'Bohnen-Hähnchen-Topf',
  kid:'Hähnchen fein zerzupfen, Bohnen mit der Gabel zerdrücken und Karotten weich garen. Ohne Salz und ohne harte Brotwürfel.',
  leftover:'Cassoulet-Auflauf · 20 Min. – Reste in eine Form geben, mit Brotbröseln bestreuen und bei 200 °C überbacken.',
  extras:[], tipp:'Klassisch kommen Wurst und Entenkeule hinein, mit Hähnchen und Bohnen bleibt der Topf leichter und trotzdem herzhaft.'
},
{
  id:'fr-blanquette', name:'Blanquette de veau · Kalbsragout in heller Soße mit Champignons, Karotten und Reis', cuisine:'Frankreich', flag:'🇫🇷',
  protein:'fleisch', base:'reis', time:{a:15,c:60}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Pilze','Zwiebel','Zitrone'], season:[9,10],
  ing:[
    {n:'Kalbfleisch (Ragout), mager',q:120,u:'g',c:'fisch'},
    {n:'Reis',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:250,u:'ml',c:'vorrat'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Lorbeerblatt',q:0.5,u:'Stk.',c:'gewuerz',p:true}
  ],
  steps:[
    'Kalbfleisch in 3 cm große Würfel schneiden, mit Brühe, Zwiebel und Lorbeer aufkochen, Schaum abschöpfen und zugedeckt 45 Minuten leise köcheln.',
    'Karotten in Scheiben und Pilze in Viertel schneiden, zugeben und weitere 15 Minuten garen. Reis inzwischen in der doppelten Menge Wasser 15 Minuten garen.',
    'Lorbeer entfernen. Milch mit Stärke verrühren, einrühren und 2 Minuten sämig köcheln.',
    'Kinderportion abnehmen und das Fleisch sehr fein schneiden. Erwachsene mit Zitronensaft, Salz und Pfeffer abschmecken.'
  ],
  nutri:{p:['Kalbfleisch'],f:['Karotten','Pilze'],i:['Kalbfleisch'],fat:['Milch']},
  kidName:'Mildes Kalbsragout',
  kid:'Kalbfleisch sehr fein schneiden oder zerzupfen, Karotten und Pilze klein schneiden und mit Reis und heller Soße mischen. Ohne Salz und Zitrone.',
  leftover:'Ragout-Reispfanne · 10 Min. – Reis und Ragout mit etwas Wasser zusammen in der Pfanne erhitzen.',
  extras:['ei'], tipp:'Klassisch wird die Soße mit Sahne und Eigelb gebunden, mit Milch und Stärke bleibt sie leicht.'
}
);
