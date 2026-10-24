/* Grün geplant · Sri Lanka · Top 15 */
RECIPES.push(
{
  id:'lk-parippu', name:'Parippu · Kokos-Linsen-Dal mit Vollkornreis und Kohl-Mallung', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'huelsen', base:'reis', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Zwei Töpfe + Pfanne',
  allergens:[], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Weißkohl','Karotten','Zwiebel'], season:[9,10,11],
  ing:[
    {n:'Rote Linsen, trocken',q:65,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:60,u:'ml',c:'vorrat'},
    {n:'Weißkohl',q:120,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kokosraspeln',q:8,u:'g',c:'vorrat'},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und 25 Minuten garen.',
    'Linsen waschen und mit Kurkuma, der Hälfte der Zwiebel und 250 ml Wasser 12 Minuten weich kochen. Kokosmilch einrühren und 3 Minuten weiterköcheln.',
    'Für das Mallung Kohl und Karotte sehr fein schneiden. Restliche Zwiebel und Curryblätter in Öl 2 Minuten anbraten, Gemüse zugeben und 6 Minuten unter Rühren weich dünsten, dann die Kokosraspeln untermischen.',
    'Kinderportion ungesalzen abnehmen und die Curryblätter entfernen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  nutri:{p:['Linsen','Vollkornreis'],f:['Linsen','Weißkohl','Vollkornreis'],i:['Linsen'],fat:['Kokosmilch','Rapsöl']},
  kidName:'Mini-Parippu',
  kid:'Dal ist weich und mild, für das Kind dick auf weichem Reis servieren. Kohl sehr weich dünsten und fein hacken, ohne Salz und Chili.',
  leftover:'Parippu-Suppe · 6 Min. – Reste mit etwas Wasser verlängern, vollständig erhitzen und mit Vollkornbrot essen.',
  extras:['ei','tofu'], tipp:'In Sri Lanka gehört roter Reis dazu, er ist ein Vollkornreis und gart genauso lange.'
},
{
  id:'lk-pol-roti', name:'Pol Roti mit Kadala Curry · Kokos-Fladen mit Kichererbsen-Curry', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'huelsen', base:null, time:{a:25,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Tomaten','Zwiebel','Babyspinat'], season:[],
  ing:[
    {n:'Kichererbsen (Dose, abgetropft)',q:130,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Weizenvollkornmehl',q:60,u:'g',c:'vorrat'},
    {n:'Kokosraspeln',q:20,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:50,u:'ml',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl mit Kokosraspeln, einem Viertel der Zwiebel sehr fein gehackt und etwa 45 ml Wasser zu einem weichen Teig kneten und 10 Minuten ruhen lassen.',
    'Restliche Zwiebel und Curryblätter in Öl 3 Minuten dünsten, Currypulver kurz mitrösten. Gewürfelte Tomate, abgespülte Kichererbsen und Kokosmilch zugeben und 10 Minuten köcheln, Spinat zum Schluss unterheben.',
    'Teig in 2 bis 3 Stücke teilen, mit feuchten Händen 5 mm dick flach drücken und in einer Pfanne ohne Fett je Seite 3 bis 4 Minuten backen, bis die Fladen fest und leicht gebräunt sind.',
    'Kinderportion ungesalzen abnehmen, Curryblätter entfernen und Kichererbsen zerdrücken. Erwachsene mit Salz und nach Wunsch grüner Chili würzen.'
  ],
  nutri:{p:['Kichererbsen','Vollkornmehl'],f:['Kichererbsen','Vollkornmehl','Kokos'],i:['Kichererbsen','Spinat'],fat:['Kokos','Rapsöl']},
  kidName:'Mini-Pol-Roti',
  kid:'Kichererbsen gründlich zerdrücken, Roti in kleine weiche Stücke reißen und in das Curry tunken. Ohne Salz und Chili.',
  leftover:'Kadala-Bowl · 6 Min. – Restcurry vollständig erhitzen und mit Reis und Gurke als Bowl essen.',
  extras:['ei','joghurt'], tipp:'Pol Roti lässt sich gut einfrieren und in der Pfanne in 2 Minuten aufbacken.'
},
{
  id:'lk-kaju-curry', name:'Kaju Maluwa · mildes Cashew-Erbsen-Curry mit Kokosmilch und Vollkornreis', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'huelsen', base:'reis', time:{a:10,c:30}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['nuesse'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Erbsen','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Cashewkerne, ungesalzen',q:40,u:'g',c:'vorrat'},
    {n:'Erbsen, TK',q:100,u:'g',c:'tk'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Cashewkerne 30 Minuten in heißem Wasser einweichen, damit sie weich werden. Reis in der doppelten Menge Wasser 25 Minuten garen.',
    'Zwiebel und Curryblätter in Öl 3 Minuten dünsten. Abgetropfte Cashews, Karottenwürfel, Kurkuma, Zimt und 100 ml Wasser zugeben und 12 Minuten köcheln, bis die Cashews weich sind.',
    'Kokosmilch und Erbsen zugeben und 5 Minuten weiterköcheln.',
    'Kinderportion ungesalzen abnehmen, Curryblätter entfernen und die Cashews zerdrücken. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Cashews','Erbsen'],f:['Erbsen','Vollkornreis','Karotten'],i:['Cashews','Erbsen'],fat:['Cashews','Kokosmilch']},
  kidName:'Mini-Kaju-Curry',
  kid:'Ganze Nüsse sind für Kleinkinder ein Erstickungsrisiko: Cashews und Erbsen fein zerdrücken oder pürieren und mit Reis mischen. Ohne Salz und Chili.',
  leftover:'Cashew-Reis-Pfanne · 8 Min. – Reste mit Spinat in der Pfanne vollständig erhitzen.',
  extras:['tofu','kichererbsen'], tipp:'In Sri Lanka werden frische Cashewkerne verwendet, eingeweichte getrocknete werden ebenso weich und cremig.'
},
{
  id:'lk-soya-curry', name:'Soya-Curry · Sojaschnetzel in Tomaten-Kokos-Soße mit Paprika und Reis', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'tofu', base:'reis', time:{a:15,c:20}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['soja'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Tomaten','Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Sojaschnetzel, fein',q:45,u:'g',c:'vorrat'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:120,u:'ml',c:'vorrat'},
    {n:'Kokosmilch',q:50,u:'ml',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Sojaschnetzel 10 Minuten in heißem Wasser einweichen, abgießen und kräftig ausdrücken. Reis in der 1,5-fachen Menge Wasser 12 Minuten garen.',
    'Zwiebel, Knoblauch und Curryblätter in Öl 3 Minuten dünsten. Sojaschnetzel zugeben und 4 Minuten anbraten, bis sie Farbe nehmen.',
    'Paprikastreifen, Currypulver, passierte Tomaten und Kokosmilch zugeben und 10 Minuten sämig köcheln.',
    'Kinderportion ungesalzen abnehmen und die Curryblätter entfernen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Sojaschnetzel'],f:['Sojaschnetzel','Paprika','Tomaten'],i:['Sojaschnetzel'],fat:['Kokosmilch','Rapsöl']},
  kidName:'Mini-Soya-Curry',
  kid:'Feine Sojaschnetzel sind weich und gut zu kauen, für Kleinkinder zusätzlich klein hacken und mit Reis und Soße mischen. Paprika weich garen, ohne Salz.',
  leftover:'Soya-Wrap · 6 Min. – Reste vollständig erhitzen und mit Gurke in eine Tortilla rollen.',
  extras:['ei','kichererbsen'], tipp:'Sojaschnetzel sind in Sri Lanka als Soya Meat ein Alltagsklassiker und halten sich im Vorratsschrank monatelang.'
},
{
  id:'lk-indi-appa', name:'Indi Appa mit Kiri Hodi · Reisnudel-Nester mit milder Kokos-Soße, Ei und Gemüse', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'ei', base:null, time:{a:10,c:12}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Babyspinat','Karotten','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Reisnudeln',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Babyspinat',q:50,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Eier 10 Minuten hart kochen, abschrecken und schälen. Reisnudeln nach Packungsangabe 4 bis 5 Minuten in heißem Wasser ziehen lassen und abgießen.',
    'Für das Kiri Hodi Zwiebel in Streifen, Tomate in Würfel und Karotte in feine Stifte schneiden. Mit Curryblättern, Kurkuma, Kokosmilch und 100 ml Wasser 8 Minuten sanft köcheln.',
    'Spinat und die halbierten Eier zugeben und 2 Minuten ziehen lassen. Nudeln zu kleinen Nestern drehen und die Soße darübergeben.',
    'Kinderportion ungesalzen abnehmen und die Curryblätter entfernen. Erwachsene mit Salz, Zitronensaft und nach Wunsch Chiliflocken würzen.'
  ],
  nutri:{p:['Eier'],f:['Spinat','Karotten'],i:['Eier','Spinat'],fat:['Kokosmilch','Eigelb']},
  kidName:'Mini-Indi-Appa',
  kid:'Reisnudeln in kurze Stücke schneiden, Ei fein hacken und alles mit der milden Kokos-Soße mischen. Karotten weich garen, ohne Salz.',
  leftover:'Kokos-Nudelpfanne · 8 Min. – Reste mit etwas Wasser in der Pfanne vollständig erhitzen.',
  extras:['kichererbsen','tofu','linsen'], tipp:'Echte Indi Appa werden aus Reismehlteig gepresst, dünne Reisnudeln sind ein schneller Alltagsersatz.'
},
{
  id:'lk-biththara-curry', name:'Biththara Curry · Eier-Curry in Kokosmilch mit Kürbis und Reis', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'ei', base:'reis', time:{a:10,c:20}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['ei'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kürbis','Zwiebel','Tomaten'], season:[9,10,11,12],
  ing:[
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Hokkaido-Kürbis',q:150,u:'g',c:'gemuese'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Eier 10 Minuten hart kochen, abschrecken und schälen. Reis in der 1,5-fachen Menge Wasser 12 Minuten garen.',
    'Zwiebel und Curryblätter in Öl 3 Minuten dünsten, Currypulver und Zimt kurz mitrösten. Kürbis in 2 cm große Würfel schneiden und mit gewürfelter Tomate, Kokosmilch und 80 ml Wasser 12 Minuten weich köcheln.',
    'Eier halbieren, in die Soße legen und 3 Minuten mitziehen lassen.',
    'Kinderportion ungesalzen abnehmen und die Curryblätter entfernen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Eier'],f:['Kürbis','Tomaten'],i:['Eier'],fat:['Kokosmilch','Rapsöl']},
  kidName:'Mini-Eier-Curry',
  kid:'Ei fein hacken, Kürbis mit der Gabel zerdrücken und beides mit Reis und Kokos-Soße vermengen. Ohne Salz und Chili.',
  leftover:'Kürbis-Ei-Reis · 8 Min. – Reste in der Pfanne mit Spinat vollständig erhitzen.',
  extras:['kichererbsen','linsen'], tipp:'Hokkaido muss nicht geschält werden, die Schale wird beim Köcheln weich.'
},
{
  id:'lk-mun-eta-curry', name:'Mun Eta Curry · grüne Mungbohnen in Kokosmilch mit Bohnen und Vollkornreis', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'huelsen', base:'reis', time:{a:10,c:40}, devices:[['topf'],['pfanne']], method:'Zwei Töpfe + kleine Pfanne',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Grüne Bohnen','Karotten','Zwiebel'], season:[7,8],
  ing:[
    {n:'Mungbohnen, getrocknet',q:60,u:'g',c:'vorrat'},
    {n:'Vollkornreis',q:70,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:70,u:'ml',c:'vorrat'},
    {n:'Grüne Bohnen',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Senfsamen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mungbohnen waschen und mit Kurkuma in 500 ml Wasser 30 Minuten weich kochen. Reis parallel in der doppelten Menge Wasser 25 Minuten garen.',
    'Bohnen und Karotte klein schneiden, zu den Mungbohnen geben und 8 Minuten mitkochen. Kokosmilch einrühren.',
    'Senfsamen in Öl in einer kleinen Pfanne erhitzen, bis sie springen, Zwiebel und Curryblätter 3 Minuten goldbraun braten und über das Curry geben.',
    'Kinderportion ungesalzen abnehmen, Curryblätter entfernen und die Mungbohnen leicht zerdrücken. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Mungbohnen','Vollkornreis'],f:['Mungbohnen','Bohnen','Vollkornreis'],i:['Mungbohnen'],fat:['Kokosmilch','Rapsöl']},
  kidName:'Mini-Mungbohnen-Curry',
  kid:'Mungbohnen und Gemüse sehr weich kochen, grob zerdrücken und dick mit Reis servieren. Ohne Salz und Chili.',
  leftover:'Mungbohnen-Puffer · 15 Min. – Reste zerdrücken, mit etwas Mehl binden und als Taler in wenig Öl durchbraten.',
  extras:['ei','tofu'], tipp:'Über Nacht eingeweicht sind die Mungbohnen schon nach 15 Minuten weich.'
},
{
  id:'lk-ambul-thiyal', name:'Ambul Thiyal · säuerlich geschmorter Fisch mit Tamarinde, Gurkensalat und Vollkornreis', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'fisch', base:'reis', time:{a:10,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:['fisch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Tomaten','Gurke','Rote Zwiebel'], season:[7,8,9],
  ing:[
    {n:'Lachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Tamarindenpaste',q:1,u:'TL',c:'vorrat'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Schwarzer Pfeffer, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und 25 Minuten garen.',
    'Fisch in 3 cm große Würfel schneiden. Tamarindenpaste mit 100 ml Wasser verrühren.',
    'Gehackten Knoblauch und Curryblätter in Öl 1 Minute anschwitzen, Fisch und Tamarindenwasser zugeben und zugedeckt bei kleiner Hitze 10 bis 12 Minuten schmoren, bis der Fisch vollständig durchgegart und die Flüssigkeit fast verkocht ist. Dabei einmal vorsichtig wenden.',
    'Tomate, Gurke und Zwiebel fein würfeln und als Salat anrichten.',
    'Kinderportion ungesalzen abnehmen und die Curryblätter entfernen. Erwachsene mit Salz und reichlich schwarzem Pfeffer würzen, nach Wunsch etwas Chili.'
  ],
  nutri:{p:['Lachs','Vollkornreis'],f:['Vollkornreis','Gurke'],i:['Lachs'],fat:['Lachs (Omega-3)','Rapsöl']},
  kidName:'Mini-Ambul-Thiyal',
  kid:'Fisch vollständig durchgaren, auf Gräten prüfen und zerpflücken, mit Reis und etwas Kochflüssigkeit mischen. Ohne Pfeffer und Salz, Gurke in Stiften.',
  leftover:'Fisch-Reis-Pfanne · 8 Min. – Reste mit Erbsen und einem Ei in der Pfanne vollständig erhitzen.',
  extras:['linsen'], tipp:'Im Original wird Thunfisch mit getrockneter Goraka-Frucht geschmort, Lachs und Tamarindenpaste sind der einfache Ersatz.'
},
{
  id:'lk-kiri-malu', name:'Kiri Malu · Fisch in milder Kokos-Kurkuma-Soße mit Zucchini und Reis', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'fisch', base:'reis', time:{a:10,c:14}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Zucchini','Tomaten','Zwiebel'], season:[6,7,8,9],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:100,u:'ml',c:'vorrat'},
    {n:'Zucchini',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Kurkuma',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen.',
    'Zwiebel in Streifen, Tomate und Zucchini in Würfel schneiden. Mit Curryblättern, Kurkuma, Zimt, Kokosmilch und 50 ml Wasser in der Pfanne 6 Minuten sanft köcheln.',
    'Fisch in große Stücke schneiden, in die Soße legen und zugedeckt bei kleiner Hitze 6 bis 7 Minuten gar ziehen lassen, ohne umzurühren.',
    'Kinderportion ungesalzen abnehmen und die Curryblätter entfernen. Erwachsene mit Salz, Limettensaft und nach Wunsch grüner Chili würzen.'
  ],
  nutri:{p:['Seelachs'],f:['Zucchini','Tomaten'],i:['Seelachs'],fat:['Kokosmilch']},
  kidName:'Mini-Kiri-Malu',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Zucchini zerdrücken und alles mit Reis und der milden Kokos-Soße mischen. Ohne Salz und Chili.',
  leftover:'Fisch-Kokos-Nudeln · 8 Min. – Reste mit Wasser und Reisnudeln verlängern und vollständig erhitzen.',
  extras:['kichererbsen','linsen'], tipp:'Weiße Currys ohne Chili sind in Sri Lanka das klassische Familienessen für Kinder.'
},
{
  id:'lk-malu-cutlets', name:'Malu Cutlets · Fisch-Kartoffel-Bällchen aus dem Ofen mit Tomaten-Gurken-Salat', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'fisch', base:'kartoffeln', time:{a:20,c:35}, devices:[['ofen','airfryer']], method:'Topf + Backofen oder Heißluftfritteuse',
  allergens:['fisch','ei','gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Tomaten','Gurke','Zwiebel'], season:[],
  ing:[
    {n:'Thunfisch (Dose, im eigenen Saft)',q:110,u:'g',c:'vorrat',hint:'1 Dose ≈ 130 g abgetropft'},
    {n:'Kartoffeln, mehlig',q:220,u:'g',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Semmelbrösel',q:20,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Curryblätter',q:3,u:'Stk.',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in Wasser 15 Minuten weich kochen, abgießen und fein zerstampfen. Ofen auf 210 °C vorheizen.',
    'Zwiebel und Curryblätter sehr fein hacken und in der Hälfte des Öls 3 Minuten dünsten. Mit dem abgetropften Thunfisch und einem Spritzer Limette unter die Kartoffeln mischen.',
    'Masse zu walnussgroßen Bällchen formen, erst im verquirlten Ei, dann in Semmelbröseln wälzen. Auf ein Blech mit Backpapier setzen, mit restlichem Öl beträufeln und 20 Minuten goldbraun backen (Heißluftfritteuse: 12 Minuten bei 200 °C).',
    'Tomate und Gurke würfeln und als Salat dazu reichen.',
    'Kinderportion ohne Würze abnehmen. Erwachsene salzen und pfeffern am Tisch und nehmen nach Wunsch einen Chili-Dip dazu.'
  ],
  nutri:{p:['Thunfisch','Ei'],f:['Kartoffeln','Gurke'],i:['Thunfisch'],fat:['Rapsöl']},
  kidName:'Mini-Fisch-Bällchen',
  kid:'Bällchen für das Kind flach drücken und halbieren, sie sind innen weich und gut zu kauen. Salat in dünnen Stiften, ohne Salz und Pfeffer.',
  leftover:'Cutlet-Wrap · 6 Min. – Bällchen im Ofen vollständig erhitzen und mit Salat in ein Fladenbrot rollen.',
  extras:['joghurt'], tipp:'Statt Thunfisch passt Makrele aus der Dose, sie ist in Sri Lanka die klassische Wahl.'
},
{
  id:'lk-kukul-mas-curry', name:'Kukul Mas Curry · Hähnchen-Kokos-Curry mit grünen Bohnen und Reis', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'gefluegel', base:'reis', time:{a:15,c:25}, devices:[['topf']], method:'Zwei Töpfe',
  allergens:[], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Grüne Bohnen','Tomaten','Zwiebel'], season:[7,8],
  ing:[
    {n:'Hähnchenschenkel ohne Haut oder Brust',q:130,u:'g',c:'fisch'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Kokosmilch',q:80,u:'ml',c:'vorrat'},
    {n:'Grüne Bohnen',q:100,u:'g',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Mildes Currypulver',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hähnchen in mundgerechte Stücke schneiden und mit Currypulver und Zimt mischen. Reis in der 1,5-fachen Menge Wasser 12 Minuten garen.',
    'Zwiebel und Ingwer fein hacken und in Öl 4 Minuten dünsten. Hähnchen zugeben und 5 Minuten rundum anbraten.',
    'Gewürfelte Tomate, Kokosmilch und 80 ml Wasser zugeben und 10 Minuten köcheln. Bohnen in 3 cm lange Stücke schneiden, zugeben und weitere 8 Minuten garen, bis Bohnen und Fleisch durch sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Hähnchen'],f:['Bohnen','Tomaten'],i:['Hähnchen','Bohnen'],fat:['Kokosmilch','Rapsöl']},
  kidName:'Mini-Kukul-Curry',
  kid:'Hähnchen klein zerzupfen, Bohnen sehr weich garen und klein schneiden, alles mit Reis und Kokossoße vermengen. Ohne Salz und Chili.',
  leftover:'Curry-Reis-Pfanne · 8 Min. – Reste mit etwas Wasser in der Pfanne vollständig erhitzen.',
  extras:['kichererbsen','linsen'], tipp:'Sri-lankisches Currypulver wird dunkel geröstet, normales Currypulver 1 Minute ohne Fett angeröstet kommt dem nahe.'
},
{
  id:'lk-devilled-chicken', name:'Devilled Chicken · Hähnchen-Paprika-Pfanne mit Zwiebeln und Tomate, dazu Reis', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'gefluegel', base:'reis', time:{a:12,c:12}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Rote Paprika','Zwiebel','Tomaten','Frühlingszwiebel'], season:[7,8,9],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der 1,5-fachen Menge Wasser 12 Minuten garen. Hähnchen in mundgerechte Stücke, Paprika und Zwiebel in grobe Würfel schneiden.',
    'Hähnchen in Öl bei starker Hitze 5 Minuten rundum anbraten, bis es durchgegart ist. Zwiebel, Knoblauch und Paprika zugeben und 4 Minuten weiterbraten.',
    'Tomatenmark, Paprikapulver, gewürfelte Tomate und 3 EL Wasser zugeben und 2 Minuten glänzend einkochen. Frühlingszwiebel in Ringen darüberstreuen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch reichlich Chiliflocken für die typische Schärfe würzen.'
  ],
  nutri:{p:['Hähnchen'],f:['Paprika','Tomaten'],i:['Hähnchen'],fat:['Rapsöl']},
  kidName:'Mini-Devilled-Chicken',
  kid:'Hähnchen in kleine Stücke schneiden, Paprika weich braten und fein hacken. Ganz ohne Chili und Salz, mit weichem Reis.',
  leftover:'Devilled-Wrap · 6 Min. – Reste vollständig erhitzen und mit Salat in eine Tortilla rollen.',
  extras:['kichererbsen','ei'], tipp:'Im Original kommen Ketchup und Chilisoße in die Pfanne, Tomatenmark und Paprika liefern denselben Glanz mit weniger Zucker.'
},
{
  id:'lk-kottu-roti', name:'Kottu Roti · geschnittenes Fladenbrot aus der Pfanne mit Hähnchen, Ei und Gemüse', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'gefluegel', base:null, time:{a:15,c:8}, devices:[['pfanne']], method:'Pfanne',
  allergens:['gluten','ei'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Weißkohl','Karotten','Lauch','Zwiebel'], season:[9,10,11,12],
  ing:[
    {n:'Hähnchenbrust',q:100,u:'g',c:'fisch'},
    {n:'Vollkorn-Weizentortillas',q:1.5,u:'Stk.',c:'brot'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Lauch',q:0.25,u:'Stange',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Curryblätter',q:4,u:'Stk.',c:'gewuerz',p:true},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Tortillas in 1 cm breite Streifen schneiden. Kohl, Karotte und Lauch in feine Streifen, Hähnchen in kleine Würfel schneiden.',
    'Hähnchen in Öl 4 Minuten anbraten, bis es durchgegart ist. Zwiebel, Curryblätter, Currypulver und Gemüse zugeben und 3 Minuten unter Rühren braten.',
    'Ei in die Pfanne schlagen und unter Rühren vollständig stocken lassen. Tortillastreifen und 2 EL Wasser untermischen und 1 Minute weiterbraten, dabei mit dem Pfannenwender klein hacken.',
    'Kinderportion ungesalzen abnehmen und die Curryblätter entfernen. Erwachsene mit Salz und nach Wunsch Chiliflocken würzen.'
  ],
  nutri:{p:['Hähnchen','Ei'],f:['Vollkorn-Tortillas','Kohl','Karotten'],i:['Hähnchen','Ei'],fat:['Rapsöl']},
  kidName:'Mini-Kottu',
  kid:'Tortillastreifen und Hähnchen für das Kind noch kleiner schneiden, Gemüse weich braten. Ei vollständig durchgaren, ohne Salz und Chili.',
  leftover:'Kottu-Omelett · 8 Min. – Reste mit einem verquirlten Ei in der Pfanne vollständig stocken lassen.',
  extras:['kichererbsen'], tipp:'Das typische Klappern der Straßenküchen entsteht durch das Hacken mit zwei Metallspateln direkt in der Pfanne.'
},
{
  id:'lk-lamprais', name:'Lamprais · Ofenpäckchen mit Gewürzreis, Rinderhack-Frikadellen, Ei und Aubergine', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'fleisch', base:'reis', time:{a:30,c:40}, devices:[['ofen']], method:'Topf + Pfanne + Backofen',
  allergens:['ei'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Aubergine','Zwiebel','Tomaten'], season:[7,8],
  ing:[
    {n:'Rinderhack, mager',q:90,u:'g',c:'fisch'},
    {n:'Basmatireis',q:75,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Aubergine',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Mildes Currypulver',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Zimt',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis mit Zimt und Brühe aufkochen und zugedeckt 12 Minuten garen. Ei parallel 10 Minuten hart kochen. Ofen auf 180 °C vorheizen.',
    'Aubergine würfeln und mit der Hälfte des Öls und der halben Zwiebel in der Pfanne 8 Minuten weich und goldbraun braten, gewürfelte Tomate 2 Minuten mitgaren.',
    'Hackfleisch mit der restlichen, fein gehackten Zwiebel und dem Currypulver verkneten, zu kleinen Bällchen formen und im restlichen Öl 6 Minuten rundum braten.',
    'Je Portion ein großes Stück Backpapier auslegen, Reis, Frikadellen, Auberginen und das halbierte Ei daraufgeben, zu einem Päckchen falten und 20 Minuten im Ofen garen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz und nach Wunsch Chili-Sambol würzen.'
  ],
  nutri:{p:['Rinderhack','Ei'],f:['Aubergine','Tomaten'],i:['Rinderhack','Ei'],fat:['Rapsöl']},
  kidName:'Mini-Lamprais',
  kid:'Frikadellen vollständig durchgaren und zerkleinern, Ei fein hacken, Aubergine zerdrücken und alles mit dem Reis mischen. Ohne Salz und Chili.',
  leftover:'Lamprais-Pfanne · 10 Min. – Päckcheninhalt mit etwas Wasser in der Pfanne vollständig erhitzen.',
  extras:['joghurt'], tipp:'Traditionell wird Lamprais in Bananenblätter gewickelt, die es tiefgekühlt im Asialaden gibt und die ein feines Aroma abgeben.'
},
{
  id:'lk-kalu-uru-mas', name:'Kalu Uru Mas · schwarzes Schweinefilet-Curry mit gerösteten Gewürzen, Spinat-Mallung und Vollkornreis', cuisine:'Sri Lanka', flag:'🇱🇰',
  protein:'fleisch', base:'reis', time:{a:15,c:25}, devices:[['topf'],['pfanne']], method:'Zwei Töpfe + Pfanne',
  allergens:[], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Babyspinat','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Schweinefilet',q:120,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:100,u:'g',c:'gemuese'},
    {n:'Kokosraspeln',q:8,u:'g',c:'vorrat'},
    {n:'Tamarindenpaste',q:1,u:'TL',c:'vorrat'},
    {n:'Koriander, gemahlen',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Kreuzkümmel, gemahlen',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser aufsetzen und 25 Minuten garen. Koriander und Kreuzkümmel in einer trockenen Pfanne 2 Minuten rösten, bis sie dunkel duften.',
    'Schweinefilet in 2 cm große Würfel schneiden, mit den gerösteten Gewürzen mischen und im Topf in Öl 4 Minuten anbraten. Gehackte Zwiebel und Tomate zugeben und 3 Minuten mitgaren.',
    'Tamarindenpaste mit 100 ml Wasser einrühren und zugedeckt 12 Minuten leise schmoren, bis das Fleisch durch und die Soße dunkel und dick ist.',
    'Für das Mallung Spinat grob hacken und mit den Kokosraspeln in der Pfanne 2 Minuten zusammenfallen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Salz, schwarzem Pfeffer und nach Wunsch Chili würzen.'
  ],
  nutri:{p:['Schweinefilet','Vollkornreis'],f:['Vollkornreis','Spinat'],i:['Schweinefleisch','Spinat'],fat:['Kokos','Rapsöl']},
  kidName:'Mini-Schweine-Curry',
  kid:'Schweinefleisch sehr klein schneiden oder zerzupfen und mit Soße und Reis mischen. Spinat fein hacken, ohne Salz, Pfeffer und Chili.',
  leftover:'Curry-Fladen · 8 Min. – Reste vollständig erhitzen und in ein Vollkorn-Fladenbrot füllen.',
  extras:['kichererbsen'], tipp:'Die schwarze Farbe kommt von dunkel gerösteten Gewürzen, nicht von Schärfe, deshalb gelingt das Curry auch mild.'
}
);
