/* Grün geplant · Australien · Top 15 */
RECIPES.push(
{
  id:'au-meat-pie', name:'Aussie Meat Pie · Rinderhack-Gemüse-Pie mit knuspriger Filohaube', cuisine:'Australien', flag:'🇦🇺',
  protein:'fleisch', base:null, time:{a:20,c:25}, devices:[['pfanne'],['ofen']], method:'Pfanne + Backofen',
  allergens:['gluten'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Pilze','Erbsen','Zwiebel'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Filoteig',q:2,u:'Stk.',c:'kuehl',hint:'Blätter, je etwa 20 g'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomatenmark',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Thymian, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Zwiebel, Karotte und Champignons fein würfeln und mit dem Hack in wenig Öl 8 Minuten braten, bis es durchgegart ist.',
    'Tomatenmark und Thymian kurz mitrösten, Brühe und Erbsen zugeben und 5 Minuten zu einer dicken Füllung einkochen.',
    'Füllung in eine kleine Auflaufform geben, Filoblätter locker zerknüllt darauflegen, mit dem restlichen Öl bestreichen und 12 bis 15 Minuten goldbraun backen.',
    'Kinderportion abnehmen, etwas abkühlen lassen und den knusprigen Teig in kleine Stücke brechen. Erwachsene am Tisch mit Salz und Pfeffer nachwürzen.'
  ],
  nutri:{p:['Rindfleisch'],f:['Karotten','Erbsen','Pilze'],i:['Rindfleisch','Erbsen'],fat:['Rapsöl']},
  kidName:'Mini-Pie',
  kid:'Füllung lauwarm servieren, Erbsen leicht zerdrücken und den Filoteig in kleine, weiche Stücke brechen. Nicht nachsalzen.',
  leftover:'Pie-Pasta · 10 Min. – Übrige Füllung vollständig erhitzen und mit Vollkornnudeln mischen.',
  extras:[], tipp:'Filoteig statt Blätterteig spart viel Fett und wird trotzdem schön knusprig.'
},
{
  id:'au-chicken-parmigiana', name:'Chicken Parmigiana · Ofen-Hähnchenschnitzel mit Tomatensoße, Käse und Kartoffelspalten', cuisine:'Australien', flag:'🇦🇺',
  protein:'gefluegel', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['gluten','milch','ei'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Tomaten','Salat'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Paniermehl',q:20,u:'g',c:'vorrat'},
    {n:'Tomaten, passiert',q:80,u:'ml',c:'vorrat'},
    {n:'Mozzarella',q:30,u:'g',c:'kuehl'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Oregano, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls mischen und auf dem Blech 10 Minuten vorbacken.',
    'Hähnchenbrust waagerecht halbieren und flach drücken, erst durch verquirltes Ei, dann durch Paniermehl ziehen und mit dem restlichen Öl beträufeln.',
    'Schnitzel auf das Blech legen und 12 Minuten backen, dann mit passierten Tomaten, Oregano und Mozzarella belegen und weitere 6 bis 8 Minuten backen, bis der Käse schmilzt und das Fleisch vollständig durchgegart ist.',
    'Kinderportion ungesalzen abnehmen und in Streifen schneiden. Erwachsene mit Salz und Pfeffer würzen und mit Salat servieren.'
  ],
  nutri:{p:['Hähnchen','Käse'],f:['Kartoffeln','Tomaten','Salat'],i:['Hähnchen'],fat:['Olivenöl','Käse']},
  kidName:'Mini-Parmi',
  kid:'Schnitzel in schmale Streifen schneiden und den Käse etwas abkühlen lassen. Kartoffelspalten weich, Salat durch Gurkensticks ersetzen, ohne Salz.',
  leftover:'Parmi-Sandwich · 8 Min. – Schnitzelreste im Ofen vollständig erhitzen und mit Salat zwischen Vollkornbrot legen.',
  extras:[], tipp:'In australischen Pubs heißt das Gericht kurz „Parmi“ und ist neben dem Meat Pie der Klassiker schlechthin.'
},
{
  id:'au-rissoles', name:'Rissoles · Rindfleisch-Karotten-Frikadellen mit Erbsen-Kartoffel-Stampf', cuisine:'Australien', flag:'🇦🇺',
  protein:'fleisch', base:'kartoffeln', time:{a:20,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Erbsen','Karotten','Zwiebel'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Kartoffeln, mehlig',q:250,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:80,u:'g',c:'tk'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Haferflocken, zart',q:15,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:50,u:'ml',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, würfeln und in 15 Minuten weich kochen, in den letzten 4 Minuten die Erbsen zugeben.',
    'Karotte fein raspeln, Zwiebel fein würfeln und mit Hack, Haferflocken und Ei verkneten. Zu kleinen flachen Frikadellen formen.',
    'Frikadellen in Öl bei mittlerer Hitze pro Seite 5 Minuten braten, bis sie innen vollständig durchgegart sind.',
    'Kartoffeln und Erbsen abgießen und mit warmer Milch stampfen. Kinderportion ungesalzen abnehmen, dann Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Rindfleisch','Ei'],f:['Kartoffeln','Erbsen','Karotten'],i:['Rindfleisch','Erbsen'],fat:['Rapsöl']},
  kidName:'Mini-Rissoles',
  kid:'Frikadellen klein formen, vollständig durchbraten und in Stücke schneiden. Den Stampf ohne Salz fein zerdrücken, damit keine ganzen Erbsen bleiben.',
  leftover:'Rissole-Burger · 8 Min. – Übrige Frikadellen in der Pfanne vollständig erhitzen und mit Salat in ein Vollkornbrötchen legen.',
  extras:[], tipp:'Geraspelte Karotte und Haferflocken machen die Frikadellen saftig und ersetzen das eingeweichte Brötchen.'
},
{
  id:'au-aussie-burger', name:'Aussie Burger · Rindfleisch-Burger mit Rote Bete, Ananas und Ei im Vollkornbrötchen', cuisine:'Australien', flag:'🇦🇺',
  protein:'fleisch', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['gluten','ei'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:4,
  veg:['Rote Bete','Ananas','Salat','Tomaten','Zwiebel'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornbrötchen',q:1,u:'Stk.',c:'brot'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Rote Bete, vorgegart',q:50,u:'g',c:'gemuese'},
    {n:'Ananas',q:60,u:'g',c:'gemuese',hint:'frisch oder aus der Dose im eigenen Saft'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:30,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hack zu einem flachen Patty formen und in wenig Öl pro Seite 4 bis 5 Minuten braten, bis es innen vollständig durchgegart ist.',
    'In derselben Pfanne Ananasscheibe und Zwiebelringe 2 Minuten anbraten und das Ei braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Brötchen aufschneiden und kurz in der Pfanne anrösten, Tomate und Rote Bete in Scheiben schneiden.',
    'Kinderportion ungesalzen abnehmen und in kleine Stücke schneiden. Für die Erwachsenen das Patty salzen und pfeffern und den Burger mit Salat, Tomate, Rote Bete, Ananas und Ei schichten.'
  ],
  nutri:{p:['Rindfleisch','Ei'],f:['Vollkornbrötchen','Rote Bete','Salat'],i:['Rindfleisch','Ei'],fat:['Rapsöl','Ei']},
  kidName:'Burger-Teller',
  kid:'Patty vollständig durchbraten und klein schneiden, Ei durchgegart. Brötchen, Rote Bete und Ananas getrennt in weichen Streifen anbieten, ohne Salz.',
  leftover:'Burger-Bowl · 8 Min. – Patty-Reste zerkrümeln, vollständig erhitzen und mit Salat und Reis als Bowl anrichten.',
  extras:[], tipp:'Rote Bete und Ananas gehören in Australien auf den Burger „with the lot“, auch wenn das zuerst ungewohnt klingt.'
},
{
  id:'au-roast-lamb', name:'Roast Lamb · Lammbraten mit Ofengemüse und Minz-Erbsen', cuisine:'Australien', flag:'🇦🇺',
  protein:'fleisch', base:'kartoffeln', time:{a:15,c:55}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:[], wholegrain:false, lowChop:false, oneVessel:true, baseCount:4,
  veg:['Kartoffeln','Süßkartoffel','Karotten','Erbsen','Rote Zwiebel'], season:[],
  ing:[
    {n:'Lammkeule ohne Knochen',q:120,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Süßkartoffel',q:100,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:60,u:'g',c:'tk'},
    {n:'Knoblauch',q:1,u:'Zehe',c:'gemuese'},
    {n:'Minze, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rosmarin, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Lamm mit gehacktem Knoblauch, Rosmarin und etwas Öl einreiben.',
    'Kartoffeln, Süßkartoffel und Karotten in große Stücke, Zwiebel in Spalten schneiden, mit dem restlichen Öl auf dem Blech mischen und das Lamm in die Mitte legen.',
    'Etwa 45 Minuten rösten, bis das Lamm eine Kerntemperatur von mindestens 70 °C hat und das Gemüse weich ist, Erbsen in den letzten 8 Minuten mit aufs Blech geben. Lamm 10 Minuten ruhen lassen und die Erbsen mit gehackter Minze mischen.',
    'Kinderportion ungesalzen abnehmen und das Lamm dafür in sehr dünne Scheiben schneiden. Erwachsene mit Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Lamm'],f:['Kartoffeln','Süßkartoffel','Erbsen'],i:['Lamm','Erbsen'],fat:['Olivenöl']},
  kidName:'Lamm mit Ofengemüse',
  kid:'Gut durchgegarte Stücke vom Lamm sehr fein schneiden, Kartoffeln und Süßkartoffel weich zerdrücken und Erbsen leicht quetschen. Ohne Salz.',
  leftover:'Lamm-Wrap · 8 Min. – Fleisch- und Gemüsereste vollständig erhitzen und mit Joghurt in eine Vollkorn-Tortilla rollen.',
  extras:['joghurt'], tipp:'Der Lammbraten mit Ofengemüse ist in Australien das typische Sonntagsessen der ganzen Familie.'
},
{
  id:'au-barramundi', name:'Barramundi · gebratenes Fischfilet mit Mango-Salsa, Reis und Zuckerschoten', cuisine:'Australien', flag:'🇦🇺',
  protein:'fisch', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['fisch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Mango','Zuckerschoten','Gurke','Limette'], season:[],
  ing:[
    {n:'Barramundi- oder Zanderfilet',q:140,u:'g',c:'fisch'},
    {n:'Jasminreis',q:75,u:'g',c:'vorrat'},
    {n:'Mango',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zuckerschoten',q:80,u:'g',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Limette',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Koriander, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Reis aufsetzen und in etwa 14 Minuten garen. Mango und Gurke klein würfeln und mit Koriander und Limettensaft zur Salsa mischen.',
    'Zuckerschoten in den letzten 3 Minuten zum Reis geben und mitgaren.',
    'Fisch trocken tupfen und in Öl auf der Hautseite 4 Minuten, dann auf der anderen Seite 2 bis 3 Minuten braten, bis er innen nicht mehr glasig ist.',
    'Kinderportion ungesalzen abnehmen und den Fisch zerpflücken. Erwachsene mit Salz würzen und nach Belieben Chiliflocken in die Salsa geben.'
  ],
  nutri:{p:['Fisch'],f:['Mango','Zuckerschoten','Reis'],i:['Zuckerschoten'],fat:['Rapsöl']},
  kidName:'Fisch mit Mango und Reis',
  kid:'Fisch entgräten und zerpflücken, Mango fein würfeln, Zuckerschoten weich garen und klein schneiden. Ohne Salz und Chili.',
  leftover:'Gebratener Fischreis · 8 Min. – Reis und Fisch mit Erbsen in der Pfanne vollständig durchbraten.',
  extras:[], tipp:'Barramundi gibt es tiefgekühlt im gut sortierten Handel; Zander oder Wolfsbarsch passen genauso.'
},
{
  id:'au-fish-and-chips', name:'Fish and Chips · Ofenfisch in Knusperkruste mit Kartoffelspalten und Krautsalat', cuisine:'Australien', flag:'🇦🇺',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:30}, devices:[['ofen','airfryer']], method:'Backofen oder Heißluftfritteuse',
  allergens:['fisch','gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Weißkohl','Karotten','Zitrone'], season:[],
  ing:[
    {n:'Seelachsfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Paniermehl',q:20,u:'g',c:'vorrat'},
    {n:'Weißkohl',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:40,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Spalten schneiden, mit der Hälfte des Öls und Paprikapulver mischen und 15 Minuten backen.',
    'Fisch in breite Streifen schneiden, durch verquirltes Ei ziehen, in Paniermehl wenden und mit dem restlichen Öl beträufeln.',
    'Fisch zu den Kartoffeln legen und 12 bis 15 Minuten backen, bis die Kruste goldbraun und der Fisch durchgegart ist. Inzwischen Kohl und Karotte fein raspeln und mit Joghurt und etwas Zitronensaft mischen.',
    'Kinderportion ungesalzen abnehmen und den Fisch auf Gräten prüfen. Erwachsene mit Salz, Pfeffer und Zitronenspalten würzen.'
  ],
  nutri:{p:['Seelachs','Ei'],f:['Kartoffeln','Weißkohl','Karotten'],i:[],fat:['Rapsöl']},
  kidName:'Fischstäbchen mit Kartoffelspalten',
  kid:'Fisch in fingerdicke Stäbchen schneiden, auf Gräten prüfen und lauwarm servieren. Krautsalat sehr fein raspeln oder durch weiche Karotten ersetzen, ohne Salz.',
  leftover:'Fisch-Wrap · 8 Min. – Fisch im Ofen vollständig erhitzen und mit Krautsalat in eine Vollkorn-Tortilla rollen.',
  extras:[], tipp:'In der Heißluftfritteuse werden Fisch und Kartoffeln bei 200 °C in etwa 20 Minuten knusprig.'
},
{
  id:'au-tuna-mornay', name:'Tuna Mornay · Thunfisch-Nudelauflauf mit Brokkoli, Erbsen und Käsesoße', cuisine:'Australien', flag:'🇦🇺',
  protein:'fisch', base:'nudeln', time:{a:15,c:25}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['fisch','gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:4,
  veg:['Brokkoli','Erbsen','Zwiebel'], season:[],
  ing:[
    {n:'Thunfisch im eigenen Saft (Dose)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 120 g abgetropft'},
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Brokkoli',q:120,u:'g',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:150,u:'ml',c:'kuehl'},
    {n:'Weizenvollkornmehl',q:1,u:'EL',c:'vorrat'},
    {n:'Parmesan oder Hartkäse',q:20,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Nudeln nach Packungsangabe garen, Brokkoliröschen und Erbsen in den letzten 4 Minuten mitkochen und alles abgießen.',
    'Zwiebel fein würfeln und in Öl glasig dünsten, Mehl kurz mitrühren, nach und nach die Milch einrühren und 3 Minuten zu einer sämigen Soße köcheln, die Hälfte des Käses unterrühren.',
    'Nudeln, Gemüse und abgetropften Thunfisch mit der Soße mischen, in eine Auflaufform geben, mit restlichem Käse bestreuen und 12 bis 15 Minuten goldbraun überbacken.',
    'Kinderportion abnehmen, etwas abkühlen lassen und die Nudeln klein schneiden. Erwachsene mit Pfeffer würzen, Salz ist dank Käse kaum nötig.'
  ],
  nutri:{p:['Thunfisch','Käse','Vollkornnudeln'],f:['Vollkornnudeln','Brokkoli','Erbsen'],i:['Brokkoli','Erbsen'],fat:['Käse','Rapsöl']},
  kidName:'Mini-Mornay',
  kid:'Nudeln und Brokkoli klein schneiden, Erbsen leicht zerdrücken und lauwarm servieren. Ohne zusätzliches Salz; Thunfisch für Kleinkinder nur gelegentlich.',
  leftover:'Mornay-Pfanne · 8 Min. – Auflaufreste mit einem Schuss Milch in der Pfanne vollständig durcherhitzen.',
  extras:[], tipp:'Mit Lachs aus der Dose statt Thunfisch wird daraus Salmon Mornay, ebenfalls ein australischer Klassiker.'
},
{
  id:'au-smashed-avo', name:'Smashed Avo · Vollkorntoast mit Avocado, Ei, Kirschtomaten und Feta', cuisine:'Australien', flag:'🇦🇺',
  protein:'ei', base:null, time:{a:10,c:10}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['ei','gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Avocado','Kirschtomaten','Babyspinat','Zitrone'], season:[],
  ing:[
    {n:'Vollkornbrot',q:2,u:'Scheiben',c:'brot'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Avocado',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Babyspinat',q:30,u:'g',c:'gemuese'},
    {n:'Feta',q:30,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Eier in kochendes Wasser legen und 9 Minuten garen, bis das Eigelb fest ist, dann kalt abschrecken.',
    'Brot in der Pfanne ohne Fett von beiden Seiten anrösten. Spinat danach mit dem Öl 1 Minute in der warmen Pfanne zusammenfallen lassen.',
    'Avocado mit der Gabel zerdrücken und mit etwas Zitronensaft mischen, Tomaten halbieren.',
    'Kinderportion ungesalzen abnehmen: Avocado auf weiche Brotstreifen, Ei klein geschnitten, Tomaten geviertelt. Erwachsene mit Feta, Salz, Pfeffer und nach Belieben Chiliflocken würzen.'
  ],
  nutri:{p:['Eier','Feta'],f:['Vollkornbrot','Avocado','Tomaten'],i:['Eier','Spinat'],fat:['Avocado','Olivenöl']},
  kidName:'Avocado-Brotstreifen',
  kid:'Brot in weiche Streifen ohne harte Kruste schneiden und mit Avocado bestreichen, Kirschtomaten vierteln und das Ei vollständig durchgaren. Ohne Feta und Salz.',
  leftover:'Avocado-Ei-Salat · 5 Min. – Übrige Eier mit Avocado und Tomaten zu einem Brotaufstrich zerdrücken.',
  extras:['kichererbsen'], tipp:'Smashed Avo stammt aus den Cafés von Melbourne und Sydney und wird dort zu jeder Tageszeit gegessen.'
},
{
  id:'au-zucchini-slice', name:'Zucchini Slice · Zucchini-Karotten-Schnitte aus dem Ofen mit Käse', cuisine:'Australien', flag:'🇦🇺',
  protein:'ei', base:null, time:{a:15,c:30}, devices:[['ofen']], method:'Backofen, eine Form',
  allergens:['ei','milch','gluten'], wholegrain:true, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Zucchini','Karotten','Zwiebel','Salat'], season:[6,7,8,9],
  ing:[
    {n:'Zucchini',q:1,u:'Stk.',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Weizenvollkornmehl',q:30,u:'g',c:'vorrat'},
    {n:'Parmesan oder Hartkäse',q:20,u:'g',c:'kuehl'},
    {n:'Römersalat',q:40,u:'g',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 180 °C vorheizen. Zucchini und Karotte grob raspeln, Zwiebel fein würfeln.',
    'Eier mit Mehl, Öl und der Hälfte des Käses verquirlen und das Gemüse unterheben.',
    'In eine mit Backpapier ausgelegte Form füllen, mit restlichem Käse bestreuen und 30 Minuten backen, bis die Masse fest und goldbraun und das Ei vollständig gestockt ist.',
    'Kinderportion abnehmen, etwas abkühlen lassen und in Fingerstreifen schneiden. Erwachsene mit Pfeffer würzen und mit Salat servieren, Salz ist dank Käse kaum nötig.'
  ],
  nutri:{p:['Eier','Käse'],f:['Zucchini','Karotten','Vollkornmehl'],i:['Eier'],fat:['Rapsöl','Käse']},
  kidName:'Zucchini-Fingerschnitten',
  kid:'In fingerlange Streifen schneiden, die das Kind selbst greifen kann; das Ei ist vollständig durchgebacken. Nicht nachsalzen.',
  leftover:'Slice-Brotdose · 2 Min. – Kalte Stücke mit Gurke und Tomaten als Brotzeit einpacken.',
  extras:[], tipp:'Zucchini Slice gehört in Australien in jede Brotdose und lässt sich gut einfrieren.'
},
{
  id:'au-corn-fritters', name:'Corn Fritters · Maispuffer mit Tomaten-Spinat-Salat und Joghurt', cuisine:'Australien', flag:'🇦🇺',
  protein:'ei', base:null, time:{a:12,c:10}, devices:[['pfanne']], method:'Eine Pfanne',
  allergens:['ei','gluten','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Mais','Frühlingszwiebel','Tomaten','Babyspinat'], season:[7,8,9],
  ing:[
    {n:'Mais (Dose oder TK)',q:150,u:'g',c:'vorrat'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Weizenvollkornmehl',q:40,u:'g',c:'vorrat'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Chiliflocken',q:0.25,u:'TL',c:'gewuerz',p:true,hint:'optional, nur für Erwachsene'}
  ],
  steps:[
    'Ein Drittel des Maises grob pürieren. Eier mit Mehl und Paprikapulver glatt verrühren, gesamten Mais und Frühlingszwiebel in Ringen unterheben.',
    'Öl in der Pfanne erhitzen, pro Puffer 2 EL Teig hineingeben, flach drücken und bei mittlerer Hitze pro Seite 3 bis 4 Minuten goldbraun und vollständig durchbraten.',
    'Tomaten würfeln und mit dem Spinat als Salat anrichten, Joghurt dazustellen.',
    'Kinderportion ungesalzen abnehmen und die Puffer in Stücke schneiden. Erwachsene mit Salz würzen und nach Belieben Chiliflocken in den Joghurt rühren.'
  ],
  nutri:{p:['Eier','Joghurt'],f:['Mais','Vollkornmehl','Spinat'],i:['Eier','Spinat'],fat:['Rapsöl']},
  kidName:'Kleine Maispuffer',
  kid:'Puffer klein und dünn backen, damit sie innen durchgaren, und in Streifen schneiden. Tomaten fein würfeln, Joghurt als milden Dip, ohne Salz.',
  leftover:'Puffer-Toast · 5 Min. – Kalte Puffer in der Pfanne aufbacken und mit Tomate belegen.',
  extras:['huettenkaese'], tipp:'Corn Fritters sind ein Klassiker des australischen Café-Frühstücks und schmecken genauso gut als Abendessen.'
},
{
  id:'au-pumpkin-soup', name:'Pumpkin Soup · Kürbissuppe mit roten Linsen und Vollkorn-Damper', cuisine:'Australien', flag:'🇦🇺',
  protein:'huelsen', base:null, time:{a:15,c:25}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['gluten','milch'], wholegrain:true, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kürbis','Karotten','Zwiebel'], season:[9,10,11,12],
  ing:[
    {n:'Hokkaido-Kürbis',q:250,u:'g',c:'gemuese'},
    {n:'Rote Linsen, trocken',q:50,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:350,u:'ml',c:'vorrat'},
    {n:'Weizenvollkornmehl',q:50,u:'g',c:'vorrat'},
    {n:'Naturjoghurt',q:50,u:'g',c:'kuehl'},
    {n:'Backpulver',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Mehl, Backpulver und Joghurt zu einem weichen Teig verkneten, zu einem flachen Laib formen, kreuzweise einschneiden und 20 bis 25 Minuten backen.',
    'Zwiebel, Kürbis und Karotte würfeln und in Öl 3 Minuten andünsten.',
    'Linsen abspülen, mit Brühe und Muskat zugeben und 18 Minuten köcheln, bis alles weich ist, dann fein pürieren.',
    'Kinderportion ungesalzen abnehmen und etwas abkühlen lassen. Erwachsene mit Salz und Pfeffer würzen und mit warmem Damper servieren.'
  ],
  nutri:{p:['Rote Linsen','Vollkornmehl'],f:['Kürbis','Linsen','Vollkornmehl'],i:['Linsen'],fat:['Rapsöl']},
  kidName:'Kürbis-Linsen-Suppe mit Brot',
  kid:'Suppe lauwarm und dicklich servieren, zum Tunken weiche Damper-Stücke ohne harte Kruste anbieten. Ohne Salz.',
  leftover:'Kürbis-Pasta · 12 Min. – Übrige Suppe dick einkochen und als Soße über Vollkornnudeln geben.',
  extras:['kichererbsen','joghurt'], tipp:'Damper ist das traditionelle Lagerfeuerbrot des Outbacks und kommt ganz ohne Hefe aus.'
},
{
  id:'au-roast-pumpkin-salad', name:'Roast Pumpkin Salad · warmer Ofenkürbis mit Quinoa, Kichererbsen, Spinat und Feta', cuisine:'Australien', flag:'🇦🇺',
  protein:'huelsen', base:'quinoa', time:{a:10,c:25}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kürbis','Babyspinat','Rote Zwiebel','Zitrone'], season:[9,10,11,12],
  ing:[
    {n:'Hokkaido-Kürbis',q:200,u:'g',c:'gemuese'},
    {n:'Kichererbsen (Dose, abgetropft)',q:100,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Quinoa',q:60,u:'g',c:'vorrat'},
    {n:'Babyspinat',q:40,u:'g',c:'gemuese'},
    {n:'Rote Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Feta',q:30,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Kürbiskerne',q:1,u:'EL',c:'vorrat'},
    {n:'Kreuzkümmel, gemahlen',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Kürbis mit Schale in Würfel und Zwiebel in Spalten schneiden, mit Kichererbsen, Kreuzkümmel und Öl mischen und 25 Minuten rösten, Kürbiskerne in den letzten 3 Minuten mit aufs Blech geben.',
    'Quinoa gründlich spülen und in der doppelten Menge Wasser etwa 15 Minuten garen.',
    'Quinoa mit Spinat und dem warmen Ofengemüse mischen, damit der Spinat leicht zusammenfällt.',
    'Kinderportion abnehmen, Kichererbsen zerdrücken und den Kürbis weich lassen. Erwachsene mit Feta, Kürbiskernen, Zitronensaft, Salz und Pfeffer würzen.'
  ],
  nutri:{p:['Kichererbsen','Quinoa','Feta'],f:['Kürbis','Kichererbsen','Quinoa'],i:['Kichererbsen','Spinat','Kürbiskerne'],fat:['Olivenöl','Kürbiskerne']},
  kidName:'Kürbis-Quinoa-Teller',
  kid:'Kichererbsen zerdrücken, Kürbis weich servieren und Spinat fein hacken. Kürbiskerne weglassen oder fein mahlen, ohne Feta und Salz.',
  leftover:'Kürbis-Quinoa-Bratlinge · 15 Min. – Reste mit einem Ei zerdrücken, zu Talern formen und in der Pfanne durchbraten.',
  extras:['ei'], tipp:'Hokkaido muss nicht geschält werden, die Schale wird im Ofen weich.'
},
{
  id:'au-spinach-ricotta-rolls', name:'Spinach and Ricotta Rolls · Filo-Röllchen mit Spinat und Ricotta, dazu Tomatensalat', cuisine:'Australien', flag:'🇦🇺',
  protein:'milch', base:null, time:{a:15,c:25}, devices:[['ofen']], method:'Backofen, ein Blech',
  allergens:['milch','gluten'], wholegrain:false, lowChop:true, oneVessel:true, baseCount:3,
  veg:['Spinat','Tomaten','Gurke','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Ricotta',q:125,u:'g',c:'kuehl'},
    {n:'Blattspinat, TK',q:150,u:'g',c:'tk'},
    {n:'Filoteig',q:2,u:'Stk.',c:'kuehl',hint:'Blätter, je etwa 20 g'},
    {n:'Parmesan oder Hartkäse',q:15,u:'g',c:'kuehl'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Tomaten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Gurke',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Spinat auftauen lassen und kräftig ausdrücken, Frühlingszwiebel fein schneiden.',
    'Spinat, Ricotta, Parmesan, Frühlingszwiebel und Muskat verrühren.',
    'Filoblätter mit etwas Öl bestreichen und übereinanderlegen, die Füllung als Strang an einem Rand verteilen, aufrollen, in Stücke schneiden und 20 bis 25 Minuten goldbraun backen.',
    'Kinderportion abnehmen und lauwarm in kleine Stücke schneiden. Tomaten und Gurke würfeln und für die Erwachsenen mit Salz, Pfeffer und dem restlichen Öl als Salat anmachen.'
  ],
  nutri:{p:['Ricotta','Käse'],f:['Spinat','Tomaten'],i:['Spinat'],fat:['Olivenöl','Käse']},
  kidName:'Spinat-Röllchen',
  kid:'Röllchen lauwarm in kleine Stücke schneiden, harte Teigränder entfernen. Gurke als Sticks, Tomaten fein gewürfelt, ohne Salz.',
  leftover:'Röllchen-Brotdose · 8 Min. – Übrige Röllchen im Ofen aufbacken und mit Gemüsesticks einpacken.',
  extras:['ei'], tipp:'Die Röllchen gibt es in jeder australischen Bäckerei; mit Filoteig sind sie deutlich fettärmer als mit Blätterteig.'
},
{
  id:'au-sang-choy-bow', name:'Sang Choy Bow · Salatschiffchen mit Tofu, Pilzen und Karotten, dazu Reis', cuisine:'Australien', flag:'🇦🇺',
  protein:'tofu', base:'reis', time:{a:12,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['soja','sesam'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Salat','Pilze','Karotten','Frühlingszwiebel'], season:[],
  ing:[
    {n:'Tofu, natur',q:125,u:'g',c:'kuehl'},
    {n:'Jasminreis',q:70,u:'g',c:'vorrat'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Frühlingszwiebel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Ingwer',q:5,u:'g',c:'gemuese'},
    {n:'Sojasauce, salzreduziert',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Sesamöl',q:0.5,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis aufsetzen und in etwa 12 Minuten garen. Tofu mit den Händen fein zerbröseln, Champignons und Karotte sehr klein würfeln, Ingwer reiben.',
    'Tofu in Öl 5 Minuten krümelig und goldbraun braten, Ingwer, Pilze und Karotte zugeben und 5 Minuten weiterbraten.',
    'Salatblätter vom Kopf lösen, waschen und trocken tupfen, Frühlingszwiebel in feine Ringe schneiden.',
    'Kinderportion ohne Sojasauce abnehmen. Erwachsene mit Sojasauce und Sesamöl würzen, die Füllung in die Salatblätter löffeln und mit Frühlingszwiebel bestreuen.'
  ],
  nutri:{p:['Tofu'],f:['Pilze','Karotten','Salat'],i:['Tofu'],fat:['Rapsöl','Sesamöl']},
  kidName:'Tofu-Krümel mit Reis',
  kid:'Tofu-Gemüse-Krümel ohne Sojasauce mit Reis mischen, Salatblatt in schmale Streifen schneiden und Karotte weich braten.',
  leftover:'Gebratener Reis · 10 Min. – Reis und Füllung mit einem Ei in der Pfanne vollständig durchbraten.',
  extras:['ei','edamame'], tipp:'Sang Choy Bow ist eines der beliebtesten Familiengerichte Australiens; klassisch mit Schweinehack, hier mit Tofu.'
}
);
