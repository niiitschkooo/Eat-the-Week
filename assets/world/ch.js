/* Grün geplant · Schweiz · Top 15 */
RECIPES.push(
{
  id:'ch-roesti-spiegelei', name:'Rösti mit Spiegelei · Berner Rösti aus der Pfanne mit Spiegelei und Spinat', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'ei', base:'kartoffeln', time:{a:12,c:20}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['ei'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Babyspinat','Zwiebel','Kräuter'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Eier',q:2,u:'Stk.',c:'kuehl'},
    {n:'Babyspinat',q:120,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Schnittlauch, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln schälen, grob raspeln und in einem Tuch kräftig ausdrücken. Zwiebel fein würfeln und untermischen.',
    'Die Hälfte des Öls in einer beschichteten Pfanne erhitzen, die Masse flach hineindrücken und bei mittlerer Hitze 8 bis 10 Minuten goldbraun braten. Mit Hilfe eines Tellers wenden und im restlichen Öl weitere 8 Minuten braten.',
    'Inzwischen den Spinat mit dem gehackten Knoblauch im Topf zusammenfallen lassen. Eier als Spiegelei braten, bis Eiweiß und Eigelb vollständig fest sind.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Muskat, Pfeffer, wenig Salz und Schnittlauch würzen.'
  ],
  kidName:'Mini-Rösti',
  kid:'Weiche Röstistücke aus der Mitte statt der harten Kruste anbieten, Ei vollständig durchbraten und klein schneiden. Spinat fein hacken.',
  leftover:'Rösti-Auflauf · 15 Min. – Röstireste mit Gemüse und etwas Käse in eine Form geben und bei 200 °C vollständig durchbacken.',
  tipp:'Pellkartoffeln vom Vortag ergeben die klassische Berner Rösti und brauchen nur halb so lange in der Pfanne.'
},
{
  id:'ch-aelplermagronen', name:'Älplermagronen · Vollkorn-Hörnli mit Kartoffeln, Bergkäse und Zwiebeln, dazu Apfelmus', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'milch', base:'nudeln', time:{a:9,c:15}, devices:[['topf'],['pfanne']], method:'Zwei Töpfe + Pfanne',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Zwiebel','Apfel','Salat'], season:[],
  ing:[
    {n:'Vollkornnudeln',q:70,u:'g',c:'vorrat'},
    {n:'Kartoffeln, festkochend',q:120,u:'g',c:'gemuese'},
    {n:'Bergkäse, gerieben',q:30,u:'g',c:'kuehl'},
    {n:'Milch',q:80,u:'ml',c:'kuehl'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Apfel',q:1,u:'Stk.',c:'gemuese'},
    {n:'Römersalat',q:60,u:'g',c:'gemuese'},
    {n:'Zimt',q:0.1,u:'TL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kartoffeln in 1 cm große Würfel schneiden und 4 Minuten in Wasser kochen, dann die Hörnli zugeben und nach Packungsangabe etwa 10 Minuten mitgaren.',
    'Apfel schälen, würfeln und mit Zimt und 2 EL Wasser zugedeckt 10 Minuten zu Mus kochen. Zwiebel in Ringe schneiden und in Öl 10 Minuten goldbraun schmoren.',
    'Hörnli und Kartoffeln abgießen, mit warmer Milch und Käse mischen, bis alles cremig ist, und die Zwiebeln darüber verteilen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Muskat, Pfeffer und wenig Salz würzen und mit Apfelmus und Salat servieren.'
  ],
  kidName:'Mini-Älplermagronen',
  kid:'Hörnli und Kartoffeln mit wenig Käse und etwas mehr Milch weich und cremig mischen, Zwiebeln fein hacken. Apfelmus ist eine milde Beilage, Salat weglassen.',
  leftover:'Magronen-Gratin · 20 Min. – Reste mit etwas Milch in eine Form geben und bei 200 °C vollständig durchbacken.',
  tipp:'Das Apfelmus ohne Zucker kochen, ein säuerlicher Apfel wie Boskop wird beim Kochen von allein mild.'
},
{
  id:'ch-raclette', name:'Raclette · Gschwellti mit geschmolzenem Raclettekäse, Ofengemüse und Essiggurken', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'milch', base:'kartoffeln', time:{a:6,c:18}, devices:[['topf'],['ofen']], method:'Topf + Backofen',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Rote Paprika','Pilze','Brokkoli'], season:[],
  ing:[
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Raclettekäse',q:60,u:'g',c:'kuehl'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Champignons',q:80,u:'g',c:'gemuese'},
    {n:'Brokkoli',q:80,u:'g',c:'gemuese'},
    {n:'Gewürzgurke',q:1,u:'Stk.',c:'vorrat'},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kleine Kartoffeln waschen und in der Schale 18 Minuten gar kochen. Ofen auf 220 °C mit Grillfunktion vorheizen.',
    'Paprika in Streifen und Champignons in Scheiben schneiden, Brokkoli in kleine Röschen teilen, mit Öl mischen und auf dem Blech 10 Minuten rösten.',
    'Kartoffeln halbieren, zum Gemüse legen, mit Käsescheiben belegen und 3 bis 4 Minuten überbacken, bis der Käse geschmolzen ist.',
    'Kinderportion ungewürzt abnehmen. Erwachsene mit Paprikapulver und Pfeffer würzen und mit Gewürzgurken servieren, Salz ist durch den Käse nicht nötig.'
  ],
  kidName:'Mini-Raclette',
  kid:'Raclettekäse ist salzig, für das Kind nur eine dünne Schicht verwenden. Kartoffeln und weiches Gemüse in Stücke zum Greifen schneiden, Gewürzgurken weglassen.',
  leftover:'Raclette-Pfanne · 12 Min. – Kartoffel- und Gemüsereste würfeln und mit Käseresten in der Pfanne vollständig durchbraten.',
  tipp:'Mit einem Raclettegerät am Tisch überbacken alle ihr Gemüse selbst, das macht Kindern Spaß.'
},
{
  id:'ch-pizokel', name:'Pizokel · Bündner Buchweizen-Spätzli mit Wirsing, Kartoffeln und Bergkäse', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'milch', base:'nudeln', time:{a:20,c:15}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Wirsing','Kartoffeln','Zwiebel'], season:[10,11,12,1,2,3],
  ing:[
    {n:'Buchweizenmehl',q:40,u:'g',c:'vorrat'},
    {n:'Dinkel-Vollkornmehl',q:40,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Wirsing',q:150,u:'g',c:'gemuese'},
    {n:'Kartoffeln, festkochend',q:100,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Bergkäse, gerieben',q:25,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Beide Mehle mit Ei, Milch und 40 ml Wasser zu einem zähen Teig rühren und 10 Minuten quellen lassen.',
    'Kartoffeln in kleine Würfel und Wirsing in Streifen schneiden. Kartoffeln 5 Minuten in Wasser kochen, Wirsing zugeben und den Teig mit einem Messer in kleinen Stücken vom Brett ins Wasser schaben. Alles 5 Minuten garen, bis die Pizokel oben schwimmen.',
    'Zwiebel und Knoblauch fein würfeln und in Öl 3 Minuten dünsten. Abgetropfte Pizokel mit Gemüse zugeben, Käse unterheben und kurz schmelzen lassen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Pizokel',
  kid:'Pizokel und Wirsing klein schneiden, den Wirsing sehr weich garen. Mit wenig Käse und ohne Salz servieren.',
  leftover:'Pizokel-Pfanne mit Ei · 10 Min. – Reste mit einem Ei in der Pfanne vollständig durchbraten.',
  tipp:'Buchweizen bringt den nussigen Geschmack, das Dinkelmehl sorgt dafür, dass der Teig zusammenhält.'
},
{
  id:'ch-capuns', name:'Capuns · Bündner Mangoldwickel mit Kräuter-Spätzliteig in Milchbrühe', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'ei', base:null, time:{a:35,c:20}, devices:[['topf']], method:'Breiter Topf',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Mangold','Zwiebel','Kräuter'], season:[6,7,8,9,10],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:70,u:'g',c:'vorrat'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:120,u:'ml',c:'kuehl'},
    {n:'Mangold',q:150,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Bergkäse, gerieben',q:20,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Mehl, Ei und 40 ml Milch zu einem dickflüssigen Spätzliteig rühren. Zwiebel und Petersilie sehr fein hacken, unterrühren und 10 Minuten quellen lassen.',
    'Mangoldblätter vom Stiel lösen, 30 Sekunden im Topf blanchieren und kalt abschrecken. Stiele fein würfeln.',
    'Je einen Esslöffel Teig auf ein Blatt geben und zu Päckchen einwickeln. Topf mit Öl auspinseln, Capuns dicht hineinlegen, Stiele, Brühe und restliche Milch zugeben und zugedeckt 15 Minuten leise köcheln, bis der Teig fest ist.',
    'Käse darüberstreuen und zugedeckt 2 Minuten schmelzen lassen. Kinderportion ungesalzen abnehmen, dann die Erwachsenen mit Muskat, Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Capuns',
  kid:'Capuns halbieren, damit der weiche Teig sichtbar ist, und in kleine Stücke schneiden. Mangold sehr weich garen, mit wenig Käse und ohne Salz servieren.',
  leftover:'Capuns überbacken · 15 Min. – Reste mit der Soße in eine Form geben und bei 200 °C vollständig durchbacken.',
  tipp:'Mit einem nassen Esslöffel lässt sich der zähe Teig leichter auf die Blätter setzen.'
},
{
  id:'ch-gemuesewaehe', name:'Gemüsewähe · Vollkornwähe mit Lauch, Rüebli und Eier-Milch-Guss', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'ei', base:null, time:{a:20,c:35}, devices:[['ofen']], method:'Backofen',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Lauch','Karotten'], season:[1,2,3,9,10,11,12],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:70,u:'g',c:'vorrat'},
    {n:'Quark',q:60,u:'g',c:'kuehl'},
    {n:'Eier',q:1,u:'Stk.',c:'kuehl'},
    {n:'Milch',q:60,u:'ml',c:'kuehl'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Bergkäse, gerieben',q:15,u:'g',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C Ober- und Unterhitze vorheizen. Mehl mit Quark, Öl und 1 EL Wasser zu einem glatten Teig kneten, dünn ausrollen und eine mit Backpapier ausgelegte Form damit auslegen.',
    'Lauch in feine Ringe schneiden, Karotten grob raspeln und auf dem Teig verteilen.',
    'Eier mit Milch und Käse verquirlen, über das Gemüse gießen und die Wähe 30 bis 35 Minuten backen, bis der Guss vollständig gestockt ist.',
    'Kinderportion ungewürzt abschneiden. Erwachsene mit Muskat, Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Wähe',
  kid:'In schmale Streifen schneiden und den harten Rand entfernen. Darauf achten, dass der Guss vollständig gestockt ist.',
  leftover:'Wähe für die Brotdose · 5 Min. – Kalte Wähestücke mit Gurkensticks einpacken oder bei 180 °C vollständig erwärmen.',
  tipp:'Im Sommer passen Zucchini und Tomaten, im Winter Lauch, Kürbis oder Spinat auf die Wähe.'
},
{
  id:'ch-gerstensuppe', name:'Bündner Gerstensuppe · sämige Graupensuppe mit Wurzelgemüse, Wirsing und weißen Bohnen', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'huelsen', base:null, time:{a:15,c:45}, devices:[['topf','slowcooker']], method:'Ein Topf',
  allergens:['gluten','milch','sellerie'], wholegrain:true, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Karotten','Sellerie','Lauch','Wirsing'], season:[1,2,3,10,11,12],
  ing:[
    {n:'Gerstengraupen',q:40,u:'g',c:'vorrat'},
    {n:'Weiße Bohnen (Dose, abgetropft)',q:120,u:'g',c:'vorrat',hint:'1 Dose ≈ 240 g abgetropft'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:40,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.3,u:'Stange',c:'gemuese'},
    {n:'Wirsing',q:60,u:'g',c:'gemuese'},
    {n:'Gemüsebrühe, salzarm',q:450,u:'ml',c:'vorrat'},
    {n:'Milch',q:40,u:'ml',c:'kuehl'},
    {n:'Vollkornbrot',q:1,u:'Scheiben',c:'brot'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Graupen abspülen. Karotten, Sellerie und Lauch fein würfeln und in Öl 3 Minuten andünsten, Graupen kurz mitrühren.',
    'Brühe angießen und zugedeckt 30 Minuten leise köcheln.',
    'Wirsing in feine Streifen schneiden, mit den abgespülten Bohnen zugeben und weitere 15 Minuten garen, bis die Graupen weich sind und die Suppe sämig ist. Milch einrühren.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer und wenig Salz abschmecken und mit Vollkornbrot servieren.'
  ],
  kidName:'Mini-Gerstensuppe',
  kid:'Suppe dick mit wenig Flüssigkeit anbieten, Bohnen und Gemüse zerdrücken. Brot in weiche Streifen ohne harte Kruste schneiden.',
  leftover:'Graupen-Pfanne · 10 Min. – Dicke Reste mit etwas geriebenem Käse in der Pfanne vollständig erhitzen.',
  tipp:'Die Suppe wird über Nacht dicker und schmeckt aufgewärmt mit einem Schuss Wasser noch besser.'
},
{
  id:'ch-cholera', name:'Cholera · Walliser Gemüsekuchen mit Kartoffeln, Lauch, Apfel und Käse im Vollkornteig', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'milch', base:'kartoffeln', time:{a:25,c:45}, devices:[['ofen'],['topf']], method:'Topf + Backofen',
  allergens:['gluten','ei','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Kartoffeln','Lauch','Apfel','Zwiebel'], season:[1,2,3,9,10,11,12],
  ing:[
    {n:'Dinkel-Vollkornmehl',q:70,u:'g',c:'vorrat'},
    {n:'Quark',q:50,u:'g',c:'kuehl'},
    {n:'Kartoffeln, festkochend',q:150,u:'g',c:'gemuese'},
    {n:'Lauch',q:0.5,u:'Stange',c:'gemuese'},
    {n:'Apfel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Raclettekäse',q:40,u:'g',c:'kuehl'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true},
    {n:'Muskat',q:0.1,u:'TL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 200 °C vorheizen. Mehl mit Quark, Öl und 2 EL Wasser zu einem glatten Teig kneten. Zwei Drittel dünn ausrollen und eine mit Backpapier ausgelegte Form damit auslegen.',
    'Kartoffeln in Scheiben schneiden und 8 Minuten in Wasser vorgaren. Lauch und Zwiebel in Ringe schneiden, die letzten 2 Minuten mitgaren und alles gut abtropfen lassen.',
    'Kartoffeln, Lauch, Zwiebel, Apfelscheiben und Käse auf dem Teig schichten, mit Muskat bestreuen und mit dem restlichen ausgerollten Teig abdecken. Ränder andrücken, mit verquirltem Ei bestreichen und 35 bis 40 Minuten goldbraun backen.',
    'Kinderportion ungewürzt abschneiden. Erwachsene am Tisch mit Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Cholera',
  kid:'Füllung aus dem Teig lösen und Kartoffeln, Lauch und Apfel zerdrücken. Der Käse ist salzig, für das Kind nur wenig davon.',
  leftover:'Cholera kalt · 5 Min. – Reste mit Gurke und Joghurtdip als Abendbrot servieren oder bei 180 °C vollständig erwärmen.',
  tipp:'Ein säuerlicher Apfel bringt Frische und gleicht den kräftigen Käse aus.'
},
{
  id:'ch-eglifilets', name:'Eglifilets · Barschfilets nach Müllerinnenart mit Petersilienkartoffeln und Rüebli', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'fisch', base:'kartoffeln', time:{a:8,c:16}, devices:[['topf'],['pfanne']], method:'Topf + Pfanne',
  allergens:['fisch','gluten','milch'], wholegrain:false, lowChop:true, oneVessel:false, baseCount:3,
  veg:['Kartoffeln','Karotten','Zitrone','Kräuter'], season:[],
  ing:[
    {n:'Egli- oder Barschfilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Karotten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Mehl',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Butter',q:5,u:'g',c:'kuehl'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Kleine Kartoffeln halbieren und 15 Minuten in Wasser gar kochen. Karotten in Scheiben schneiden und im zweiten Topf mit wenig Wasser 10 Minuten weich dünsten.',
    'Fischfilets trocken tupfen, leicht in Mehl wenden und in Öl je Seite 2 Minuten braten, bis sie durchgegart sind.',
    'Butter in der Pfanne aufschäumen lassen, Petersilie und Zitronensaft zugeben und über Fisch und Kartoffeln geben.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Eglifilet',
  kid:'Fisch auf Gräten prüfen und zerpflücken, Karotten sehr weich garen und in Stifte schneiden. Kartoffeln zerdrücken.',
  leftover:'Fisch-Wrap · 8 Min. – Fisch- und Karottenreste vollständig erhitzen und mit Salat und Joghurt in eine Vollkorn-Tortilla rollen.',
  tipp:'Egli aus Schweizer Seen sind selten und teuer, Barsch aus Zucht oder Zander sind gute Alternativen.'
},
{
  id:'ch-felchen-ofen', name:'Felchen aus dem Ofen · Seefischfilet auf Fenchel und Kirschtomaten mit Vollkornreis', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'fisch', base:'reis', time:{a:12,c:25}, devices:[['ofen'],['topf']], method:'Backofen + Topf',
  allergens:['fisch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Fenchel','Kirschtomaten','Zitrone','Kräuter'], season:[6,7,8,9,10],
  ing:[
    {n:'Felchen- oder Forellenfilet',q:140,u:'g',c:'fisch'},
    {n:'Vollkornreis',q:75,u:'g',c:'vorrat'},
    {n:'Fenchel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Kirschtomaten',q:80,u:'g',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Knoblauch',q:0.5,u:'Zehe',c:'gemuese'},
    {n:'Dill, frisch oder TK',q:1,u:'EL',c:'gemuese'},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser zugedeckt 25 Minuten garen. Ofen auf 200 °C vorheizen.',
    'Fenchel in feine Streifen schneiden, mit gehacktem Knoblauch und Öl in einer Form mischen und 10 Minuten backen.',
    'Halbierte Kirschtomaten zugeben, den Fisch mit der Hautseite nach unten darauflegen, mit Zitronenscheiben belegen und 10 bis 12 Minuten backen, bis der Fisch gerade durch ist.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Dill, Pfeffer und wenig Salz würzen.'
  ],
  kidName:'Mini-Felchenteller',
  kid:'Haut entfernen und den Fisch sorgfältig entgräten und zerpflücken. Fenchel sehr weich garen und fein hacken, Kirschtomaten längs vierteln.',
  leftover:'Fisch-Reis-Pfanne · 10 Min. – Reis und Gemüse in der Pfanne anbraten, zerpflückten Fisch zugeben und vollständig erhitzen.',
  tipp:'Felchen kommen aus Schweizer Seen und dem Bodensee, Forelle oder Saibling sind ein guter Ersatz.'
},
{
  id:'ch-fischchnusperli', name:'Fischchnusperli aus dem Ofen · knusprige Fischstreifen mit Kartoffelschnitzen, Rüeblisalat und Joghurtsoße', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'fisch', base:'kartoffeln', time:{a:15,c:27}, devices:[['ofen','airfryer']], method:'Backofen, ein Blech',
  allergens:['fisch','gluten','ei','milch'], wholegrain:false, lowChop:false, oneVessel:true, baseCount:3,
  veg:['Kartoffeln','Karotten','Zitrone'], season:[],
  ing:[
    {n:'Seelachs- oder Kabeljaufilet',q:140,u:'g',c:'fisch'},
    {n:'Kartoffeln, festkochend',q:250,u:'g',c:'gemuese'},
    {n:'Vollkorn-Semmelbrösel',q:20,u:'g',c:'vorrat'},
    {n:'Eier',q:0.5,u:'Stk.',c:'kuehl'},
    {n:'Mehl',q:1,u:'EL',c:'vorrat',p:true},
    {n:'Karotten',q:2,u:'Stk.',c:'gemuese'},
    {n:'Zitrone',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Naturjoghurt',q:60,u:'g',c:'kuehl'},
    {n:'Gewürzgurke',q:0.5,u:'Stk.',c:'vorrat'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Ofen auf 220 °C vorheizen. Kartoffeln in Schnitze schneiden, mit der Hälfte des Öls mischen und auf dem Blech 15 Minuten backen.',
    'Fisch in fingerdicke Streifen schneiden und nacheinander in Mehl, verquirltem Ei und Bröseln wenden. Zu den Kartoffeln legen, mit dem restlichen Öl beträufeln und 10 bis 12 Minuten backen, bis die Panade goldbraun und der Fisch durchgegart ist.',
    'Karotten fein raspeln und mit Zitronensaft mischen. Joghurt mit fein gehackter Gewürzgurke verrühren, vorher etwas Joghurt für das Kind beiseitestellen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer und wenig Salz würzen und mit Rüeblisalat und Joghurtsoße servieren.'
  ],
  kidName:'Mini-Chnusperli',
  kid:'Fischstreifen sind ideal zum Greifen, vorher auf Gräten prüfen. Karotten für das Kind sehr fein raspeln oder kurz dünsten, Gewürzgurke weglassen.',
  leftover:'Fisch-Sandwich · 5 Min. – Chnusperli vollständig erhitzen und mit Salat und Joghurtsoße zwischen Vollkornbrot legen.',
  tipp:'In der Heißluftfritteuse werden die Chnusperli bei 200 °C in 8 bis 10 Minuten knusprig.'
},
{
  id:'ch-zuercher-geschnetzeltes', name:'Zürcher Geschnetzeltes · Hähnchengeschnetzeltes mit Champignons in heller Soße und Vollkorn-Nüdeli', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'gefluegel', base:'nudeln', time:{a:10,c:12}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten','milch'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Pilze','Zwiebel','Brokkoli','Kräuter'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Champignons',q:120,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.25,u:'Stk.',c:'gemuese'},
    {n:'Brokkoli',q:100,u:'g',c:'gemuese'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Gemüsebrühe, salzarm',q:50,u:'ml',c:'vorrat'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Petersilie, frisch',q:1,u:'EL',c:'gemuese'},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Nudeln nach Packungsangabe etwa 10 Minuten garen, Brokkoliröschen in den letzten 4 Minuten mitkochen.',
    'Hähnchen in feine Streifen schneiden und in Öl portionsweise 3 bis 4 Minuten scharf anbraten, bis es durchgegart ist, dann herausnehmen.',
    'Zwiebel fein würfeln, Champignons in Scheiben schneiden und 4 Minuten im Bratfett braten. Brühe und die mit Stärke verrührte Milch angießen, 2 Minuten köcheln, bis die Soße bindet, und das Fleisch zurückgeben.',
    'Kinderportion ungewürzt abnehmen. Erwachsene mit Pfeffer, wenig Salz und Petersilie würzen.'
  ],
  kidName:'Mini-Geschnetzeltes',
  kid:'Hähnchen sehr fein schneiden und mit viel Soße über die weichen Nudeln geben. Champignons klein hacken, Brokkoli weich garen.',
  leftover:'Geschnetzeltes im Wrap · 8 Min. – Reste vollständig erhitzen und mit Salat in eine Vollkorn-Tortilla rollen.',
  tipp:'Klassisch wird Kalbfleisch verwendet, Hähnchen ist günstiger und bleibt genauso zart, wenn es nur kurz gebraten wird.'
},
{
  id:'ch-ghackets-hoernli', name:'Ghackets mit Hörnli · Hackfleischsoße mit Rüebli und Erbsen zu Vollkorn-Hörnli', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'fleisch', base:'nudeln', time:{a:8,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['gluten'], wholegrain:true, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Zwiebel','Erbsen'], season:[],
  ing:[
    {n:'Rinderhack, mager',q:100,u:'g',c:'fisch'},
    {n:'Vollkornnudeln',q:80,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Gemüsebrühe, salzarm',q:100,u:'ml',c:'vorrat'},
    {n:'Tomatenmark',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Speisestärke',q:0.5,u:'TL',c:'vorrat',p:true},
    {n:'Paprikapulver, edelsüß',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Hörnli nach Packungsangabe etwa 10 Minuten garen.',
    'Zwiebel fein würfeln und Karotte fein raspeln. Hack in Öl krümelig und vollständig durchbraten, Zwiebel und Karotte zugeben und 3 Minuten mitbraten.',
    'Tomatenmark kurz mitrösten, mit Brühe ablöschen, Erbsen zugeben und 5 Minuten köcheln. Stärke mit wenig Wasser anrühren und die Soße damit leicht binden.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Paprikapulver, Pfeffer und wenig Salz würzen und mit den Hörnli mischen.'
  ],
  kidName:'Mini-Ghackets',
  kid:'Hack fein krümeln und mit der Soße und den weichen Hörnli mischen. Erbsen leicht zerdrücken.',
  leftover:'Hörnli-Gratin · 20 Min. – Reste mit etwas Milch und wenig Käse in eine Form geben und bei 200 °C vollständig durchbacken.',
  tipp:'In der Schweiz gehört Apfelmus dazu, selbst gekocht und ungesüßt passt es auch für Kinder.'
},
{
  id:'ch-riz-casimir', name:'Riz Casimir · mildes Hähnchen-Curry mit Ananas, Banane und Reis', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'gefluegel', base:'reis', time:{a:10,c:14}, devices:[['pfanne'],['topf']], method:'Pfanne + Topf',
  allergens:['milch'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:4,
  veg:['Rote Paprika','Erbsen','Ananas','Banane'], season:[],
  ing:[
    {n:'Hähnchenbrust',q:130,u:'g',c:'fisch'},
    {n:'Reis',q:75,u:'g',c:'vorrat'},
    {n:'Rote Paprika',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Erbsen, TK',q:50,u:'g',c:'tk'},
    {n:'Ananas (Dose, ohne Zucker)',q:60,u:'g',c:'vorrat'},
    {n:'Banane',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Speisestärke',q:1,u:'TL',c:'vorrat',p:true},
    {n:'Mildes Currypulver',q:1,u:'TL',c:'gewuerz',p:true},
    {n:'Rapsöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Reis in der doppelten Menge Wasser zugedeckt 12 bis 14 Minuten garen.',
    'Hähnchen in Streifen schneiden und in Öl 4 Minuten anbraten, bis es durchgegart ist. Paprikawürfel und Erbsen zugeben und 3 Minuten mitbraten.',
    'Currypulver kurz mitrösten, die mit Stärke verrührte Milch angießen und 2 Minuten köcheln, bis die Soße sämig ist. Ananasstücke unterheben und Bananenscheiben darauflegen.',
    'Kinderportion ungesalzen abnehmen. Erwachsene mit Pfeffer, wenig Salz und nach Wunsch etwas Chili abschmecken.'
  ],
  kidName:'Mini-Riz-Casimir',
  kid:'Hähnchen fein zerpflücken und mit der milden Soße unter den Reis mischen. Ananas und Banane in kleine, weiche Stücke schneiden.',
  leftover:'Curry-Reis-Pfanne · 10 Min. – Reis und Curryreste mit etwas Wasser in der Pfanne vollständig erhitzen.',
  tipp:'Das Gericht stammt aus den 1950er-Jahren und ist bis heute ein Klassiker in Schweizer Kantinen und Familien.'
},
{
  id:'ch-polenta-brasato', name:'Polenta e brasato · Tessiner Rinderschmorbraten mit Tomaten, Wurzelgemüse und cremiger Polenta', cuisine:'Schweiz', flag:'🇨🇭',
  protein:'fleisch', base:'polenta', time:{a:20,c:120}, devices:[['topf','slowcooker']], method:'Schmortopf + Topf',
  allergens:['milch','sellerie'], wholegrain:false, lowChop:false, oneVessel:false, baseCount:3,
  veg:['Karotten','Sellerie','Zwiebel','Tomaten'], season:[],
  ing:[
    {n:'Rindfleisch zum Schmoren, mager',q:120,u:'g',c:'fisch'},
    {n:'Polenta (Maisgrieß)',q:70,u:'g',c:'vorrat'},
    {n:'Karotten',q:1,u:'Stk.',c:'gemuese'},
    {n:'Knollensellerie',q:40,u:'g',c:'gemuese'},
    {n:'Zwiebel',q:0.5,u:'Stk.',c:'gemuese'},
    {n:'Tomaten, gehackt (Dose)',q:150,u:'g',c:'vorrat'},
    {n:'Gemüsebrühe, salzarm',q:150,u:'ml',c:'vorrat'},
    {n:'Milch',q:100,u:'ml',c:'kuehl'},
    {n:'Rosmarin, getrocknet',q:0.25,u:'TL',c:'gewuerz',p:true},
    {n:'Olivenöl',q:1,u:'EL',c:'gewuerz',p:true}
  ],
  steps:[
    'Fleisch in 4 cm große Stücke schneiden und in Öl im Schmortopf rundum 5 Minuten anbraten. Zwiebel, Karotten und Sellerie fein würfeln und 3 Minuten mitrösten.',
    'Tomaten, Brühe und Rosmarin zugeben und zugedeckt bei kleiner Hitze 2 Stunden schmoren, bis das Fleisch zerfällt.',
    'Für die Polenta die Milch mit 200 ml Wasser aufkochen, Maisgrieß einrühren und unter Rühren 5 bis 10 Minuten cremig quellen lassen.',
    'Kinderportion ungesalzen abnehmen. Schmorsoße für die Erwachsenen mit Pfeffer und wenig Salz abschmecken.'
  ],
  kidName:'Mini-Brasato',
  kid:'Fleisch fein zerzupfen und mit Soße unter die weiche, cremige Polenta rühren. Gemüse aus der Soße zerdrücken.',
  leftover:'Polentaschnitten mit Ragout · 15 Min. – Feste Polentareste in Scheiben in der Pfanne anbraten und mit dem vollständig erhitzten Ragout servieren.',
  tipp:'Im Tessin wird oft mit Rotwein geschmort, hier sorgen Tomaten und Brühe für die Tiefe, ganz ohne Alkohol.'
}
);
