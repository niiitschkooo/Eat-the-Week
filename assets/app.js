/* Grün geplant · Anwendung
   Alles läuft im Browser. Gespeichert wird nur lokal (localStorage). */
(function () {
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const WD = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];
const WDS = ['Mo','Di','Mi','Do','Fr','Sa','So'];
const MONTHS = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
const MONTHS_S = ['Jan.','Feb.','März','Apr.','Mai','Juni','Juli','Aug.','Sept.','Okt.','Nov.','Dez.'];
const BASE_LABEL = {quinoa:'Quinoa',reis:'Reis',kartoffeln:'Kartoffeln',nudeln:'Nudeln',couscous:'Couscous',bulgur:'Bulgur',polenta:'Polenta'};
const BASE_KEY = {quinoa:'quinoa',reis:'reis',kartoffeln:'kartoffel',nudeln:'nudeln',couscous:'couscous',bulgur:'bulgur',polenta:'polenta'};
const VIEWS = ['woche','laender','vorrat','kinder','einkauf','vorbereitung','feinplanung','wissen'];
const REGION_OF = (() => { const m = {}; const add = (reg, list) => list.forEach(c => { m[c] = reg; });
  add('Europa', ['Deutschland','Österreich','Schweiz','Niederlande','Italien','Frankreich','Spanien','Portugal','Griechenland','Türkei','Kroatien','Rumänien','Polen','Tschechien','Ungarn','Ukraine','Großbritannien','Irland','Belgien','Georgien','Schweden','Norwegen','Dänemark','Finnland','Russland']);
  add('Asien', ['Usbekistan','Afghanistan','China','Taiwan','Japan','Korea','Vietnam','Thailand','Kambodscha','Laos','Indien','Pakistan','Sri Lanka','Nepal','Indonesien','Malaysia','Philippinen','Bangladesch']);
  add('Nahost', ['Iran','Persien','Libanon','Syrien','Israel','Jordanien','Irak','Jemen','Nahost']);
  add('Afrika', ['Ägypten','Tunesien','Marokko','Äthiopien','Kenia','Tansania','Nigeria','Ghana','Senegal','Südafrika']);
  add('Amerika', ['USA','Kanada','Mexiko','Kuba','Brasilien','Argentinien','Peru','Kolumbien','Jamaika','Chile']);
  add('Ozeanien', ['Australien']); add('Alltag', ['Alltag','Weltküche']); return m; })();
const REGIONS = ['Europa','Asien','Nahost','Afrika','Amerika','Ozeanien','Alltag'];
const regionOf = c => REGION_OF[c] || 'Weitere';
const PALETTE_FALLBACK = ['#7CB342','#E67E22','#D9472B','#8E2A4F','#3C8A49','#E9C13B','#B8A08A','#88C36B','#E0862B','#A4C86A'];
const vegColor = v => VEG_COLORS[v] || PALETTE_FALLBACK[hashStr(v) % PALETTE_FALLBACK.length];
const IS_ARTIFACT = !!window.__GG_ARTIFACT__;

/* ---------- Zutatennamen vereinheitlichen (Einkaufsliste fasst gleiche Namen zusammen) ---------- */
const ING_SYNONYMS = {
  'Petersilie': 'Petersilie, frisch', 'Petersilie, glatt': 'Petersilie, frisch', 'Petersilie, frisch (Bund)': 'Petersilie, frisch',
  'Koriandergrün': 'Koriander, frisch', 'Koriandergrün (Bund)': 'Koriander, frisch', 'Koriander frisch': 'Koriander, frisch',
  'Erdnussmus, ohne Zucker und Salz': 'Erdnussmus, ungesüßt', 'Erdnussmus (ohne Zucker und Salz)': 'Erdnussmus, ungesüßt', 'Erdnussmus': 'Erdnussmus, ungesüßt',
  'Schnittlauch, frisch oder TK': 'Schnittlauch', 'Schnittlauch, frisch': 'Schnittlauch',
  'Lammfleisch, mager (Keule)': 'Lammfleisch, mager, gewürfelt', 'Lammfleisch, mager (Keule oder Schulter)': 'Lammfleisch, mager, gewürfelt', 'Lammkeule, ausgelöst': 'Lammkeule, mager, gewürfelt',
  'Okra, TK': 'Okra', 'Okra (TK)': 'Okra', 'Thunfisch (Dose, in Wasser, abgetropft)': 'Thunfisch (Dose, im eigenen Saft)', 'Thunfisch im eigenen Saft (Dose)': 'Thunfisch (Dose, im eigenen Saft)',
  'Makrelenfilet': 'Makrelenfilet, frisch oder TK', 'Mungbohnen, getrocknet': 'Mungbohnen, trocken', 'Maiskolben': 'Maiskolben, vorgegart', 'Meerrettich (Kren)': 'Meerrettich (Glas)',
  'Mungobohnensprossen': 'Mungbohnensprossen', 'Vollkornbaguette': 'Vollkorn-Baguette', 'Erdnüsse, geröstet, ungesalzen': 'Erdnüsse, ungesalzen', 'Cashewkerne, ungesalzen': 'Cashewkerne',
  'Paniermehl, Vollkorn': 'Vollkorn-Paniermehl', 'Minze, frisch (Bund)': 'Minze, frisch', 'Basilikum, frisch (Bund)': 'Basilikum, frisch', 'Grüne Bohnen, TK': 'Grüne Bohnen', 'Brokkoli, TK': 'Brokkoli',
  'Kreuzkümmel gemahlen': 'Kreuzkümmel, gemahlen', 'Senf mittelscharf': 'Senf, mittelscharf', 'Minze frisch': 'Minze, frisch', 'Gouda, gerieben': 'Gouda', 'Weizenmehl': 'Mehl'
};
(function () { const fix = list => list.forEach(x => x.ing.forEach(i => { if (ING_SYNONYMS[i.n]) i.n = ING_SYNONYMS[i.n]; })); fix(RECIPES); fix(KIDS); })();

/* ---------- Zustand ---------- */
const LS = 'gruen-geplant:v1';
const DEFAULTS = {
  settings: {
    adults: 2, kids: [{ age: 19 }], extraPortions: 1,
    diet: 'alles', fish: 1, legumes: 2, plant: 3, meatMax: 2,
    allergens: [], dislikes: '', timeWeek: 30, timeWeekend: 45,
    lowChop: false, oneVessel: false, base3: false, seasonal: true,
    devices: { ofen: true, airfryer: false, mikrowelle: true, maschine: false, slowcooker: false },
    kidMode: 'welt', hideDone: false, showPantry: false, preferHave: false, photos: true
  },
  weeks: {}, favorites: [], diary: [], notes: {}, pantry: [], have: [], photos: {}, theme: 'system', view: 'woche'
};
function deepMerge(a, b) {
  if (Array.isArray(a) || Array.isArray(b) || typeof a !== 'object' || typeof b !== 'object' || !a || !b) return b === undefined ? a : b;
  const o = Object.assign({}, a);
  for (const k of Object.keys(b)) o[k] = deepMerge(a[k], b[k]);
  return o;
}
function load() {
  try { const raw = localStorage.getItem(LS); if (raw) return deepMerge(JSON.parse(JSON.stringify(DEFAULTS)), JSON.parse(raw)); } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULTS));
}
let S = load();
function save() { try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) {} }

/* ---------- Datum ---------- */
function mondayOf(d) { const x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; }
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function isoWeek(d) { const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); const day = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - day); const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1)); return Math.ceil((((t - y0) / 864e5) + 1) / 7); }
function fmtRange(mon) { const sun = addDays(mon, 6); if (mon.getMonth() === sun.getMonth()) return mon.getDate() + '.–' + sun.getDate() + '. ' + MONTHS_S[mon.getMonth()] + ' ' + sun.getFullYear(); return mon.getDate() + '. ' + MONTHS_S[mon.getMonth()] + ' – ' + sun.getDate() + '. ' + MONTHS_S[sun.getMonth()] + ' ' + sun.getFullYear(); }
function fmtDay(d) { return d.getDate() + '.' + (d.getMonth() + 1) + '.'; }
function daysAgo(isoStr) { const d = new Date(isoStr + 'T12:00:00'); return Math.floor((Date.now() - d.getTime()) / 864e5); }
let curMon = mondayOf(new Date());
const todayIso = iso(new Date());

/* ---------- Zufall (deterministisch) ---------- */
function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed) { let t = seed >>> 0; return () => { t += 0x6D2B79F5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; }; }

/* ---------- Haushalt ---------- */
const R = id => RECIPES.find(r => r.id === id) || null;
const K = id => KIDS.find(k => k.id === id) || null;
function tierFor(months) { if (months == null) return null; return AGE_TIERS.find(t => months >= t.min && months <= t.max) || (months < 6 ? null : AGE_TIERS[AGE_TIERS.length - 1]); }
function youngest() { const k = S.settings.kids; return k.length ? Math.min.apply(null, k.map(c => c.age)) : null; }
function eatingKids() { return S.settings.kids.filter(c => c.age >= 6); }
function portions() {
  const st = S.settings; let p = st.adults;
  if (st.kidMode !== 'welt') for (const c of st.kids) { const t = tierFor(c.age); if (t) p += t.factor; }
  p += st.extraPortions;
  return Math.max(1, Math.round(p * 2) / 2);
}
function portionsText() {
  const st = S.settings; const parts = [st.adults + ' Erw.'];
  if (st.kids.length && st.kidMode !== 'welt') parts.push(st.kids.length + (st.kids.length === 1 ? ' Kind' : ' Kinder'));
  if (st.extraPortions) parts.push(st.extraPortions + ' Reste');
  return 'Mengen für ' + fmtNum(portions()) + ' Portionen (' + parts.join(' · ') + ')';
}
function ageText(months) { if (months < 24) return months + ' Mon.'; const y = Math.floor(months / 12); const m = months % 12; return y + ' J.' + (m ? ' ' + m + ' Mon.' : ''); }

/* ---------- Mengen ---------- */
function fmtNum(n) { return (Math.round(n * 100) / 100).toString().replace('.', ','); }
function roundQ(q, u) {
  if (u === 'g' || u === 'ml') { if (q < 10) return Math.max(1, Math.round(q)); if (q < 100) return Math.round(q / 5) * 5; return Math.round(q / 10) * 10; }
  if (u === 'Stk.' || u === 'Scheiben' || u === 'Zehe' || u === 'Stange') return Math.ceil(q * 2) / 2;
  return Math.round(q * 4) / 4;
}
function fmtQ(q, u) {
  let r = roundQ(q, u);
  if ((u === 'g' || u === 'ml') && r >= 1000) return fmtNum(Math.round(r / 50) * 50 / 1000) + (u === 'g' ? ' kg' : ' l');
  return fmtNum(r) + ' ' + u;
}

/* ---------- Filter ---------- */
const isMeat = r => r.protein === 'fleisch' || r.protein === 'gefluegel';
const plantBased = r => !isMeat(r) && r.protein !== 'fisch';
const isVegan = r => plantBased(r) && r.protein !== 'ei' && r.protein !== 'milch' && !r.allergens.includes('milch') && !r.allergens.includes('ei');
function dietOk(r, st) { if (st.diet === 'vegan') return isVegan(r); if (st.diet === 'vegetarisch') return plantBased(r); if (st.diet === 'pescetarisch') return !isMeat(r); return true; }
function missingDevices(r, st) { return r.devices.filter(g => !g.some(d => d === 'topf' || d === 'pfanne' || st.devices[d])).map(g => g.map(d => DEVICE_LABEL[d] || d).join(' oder ')); }
function dislikes(st) { return st.dislikes.split(',').map(s => s.trim().toLowerCase()).filter(Boolean); }
function dislikeHit(r, st) { const dl = dislikes(st); if (!dl.length) return null; const hay = [r.name].concat(r.ing.map(i => i.n), r.veg).join(' ').toLowerCase(); return dl.find(d => hay.includes(d)) || null; }
function hardIssues(r, st) {
  const out = []; const al = r.allergens.filter(a => st.allergens.includes(a));
  if (al.length) out.push('Enthält ' + al.map(a => ALLERGEN_LABEL[a]).join(', '));
  if (!dietOk(r, st)) out.push('Passt nicht zur Ernährungsweise');
  const md = missingDevices(r, st); if (md.length) out.push('Gerät fehlt: ' + md.join(', '));
  const d = dislikeHit(r, st); if (d) out.push('Enthält „' + d + '“');
  return out;
}
function softIssues(r, st, i) {
  const out = []; const max = i >= 5 ? st.timeWeekend : st.timeWeek; const t = r.time.a + r.time.c;
  if (t > max) out.push(t + ' Min. statt ' + max);
  if (st.lowChop && !r.lowChop) out.push('Mehr Schneidearbeit');
  if (st.oneVessel && !r.oneVessel) out.push('Mehr als ein Gefäß');
  if (st.base3 && r.baseCount > 3) out.push('Mehr als 3 Grundzutaten');
  return out;
}
function simplicity(r) { return [r.time.a <= 20, r.baseCount <= 3, r.lowChop, r.oneVessel, r.steps.length <= 5].filter(Boolean).length; }
function simplicityLabel(n) { return n >= 5 ? 'sehr einfach' : n === 4 ? 'einfach' : n === 3 ? 'mittel' : 'mehr Aufwand'; }
function kidDietOk(k, st) {
  const hasMeatOrFish = k.ing.some(i => i.c === 'fisch'); const hasFish = k.allergens.includes('fisch');
  if (st.diet === 'vegan') return !hasMeatOrFish && !k.allergens.includes('milch') && !k.allergens.includes('ei');
  if (st.diet === 'vegetarisch') return !hasMeatOrFish;
  if (st.diet === 'pescetarisch') return !hasMeatOrFish || hasFish;
  return true;
}
function kidOk(k, st) { return kidDietOk(k, st) && !k.allergens.some(a => st.allergens.includes(a)); }

/* ---------- Optionale Felder ergänzen ---------- */
const LEGUME_RE = /linsen|bohnen|kichererbsen|erbsen|edamame|hummus|tofu|tempeh/i;
const IRON_RE = /linsen|bohnen|kichererbsen|spinat|grünkohl|mangold|rind|hack|lamm|tofu|quinoa|hirse|haferflocken|eier|kürbiskerne|sesam|tahin|brokkoli|pak choi/i;
const PROT_RE = /linsen|bohnen|kichererbsen|erbsen|edamame|tofu|tempeh|eier|ei\b|feta|käse|joghurt|quark|skyr|ricotta|hüttenkäse|halloumi|lachs|fisch|forelle|kabeljau|seelachs|makrele|thunfisch|garnelen|hähnchen|pute|rind|hack|schwein|lamm|hummus|quinoa|milch/i;
const FAT_RE = /öl|avocado|nuss|kerne|sesam|tahin|kokos|lachs|makrele|butter|sahne|käse|feta|halloumi|oliven/i;
const WHOLE_RE = /vollkorn|quinoa|hafer|bulgur|hirse|buchweizen|naturreis|dinkel|graupen|kartoffel|süßkartoffel/i;
const short = n => n.split(/[(,]/)[0].trim();
function nutriFor(r) {
  if (r.nutri) return r.nutri;
  const names = r.ing.filter(i => !i.p).map(i => i.n);
  const uniq = a => Array.from(new Set(a));
  return {
    p: uniq(names.filter(n => PROT_RE.test(n)).map(short)).slice(0, 3),
    f: uniq(names.filter(n => WHOLE_RE.test(n) || LEGUME_RE.test(n) || r.veg.some(v => n.toLowerCase().includes(v.toLowerCase().split(' ')[0]))).map(short)).slice(0, 3),
    i: uniq(names.filter(n => IRON_RE.test(n)).map(short)).slice(0, 3),
    fat: uniq(r.ing.filter(i => FAT_RE.test(i.n)).map(i => short(i.n))).slice(0, 2)
  };
}
function extrasFor(r) { if (r.extras) return r.extras; return plantBased(r) ? ['feta', 'ei', 'tofu', 'kichererbsen', 'joghurt'] : ['joghurt', 'kichererbsen']; }
function leftoverFor(r) { return r.leftover || 'Reste-Pfanne · 8 Min. – Reste vollständig erhitzen und als neue Pfanne oder Bowl anrichten.'; }

/* ---------- Was ist da? (Zutatenabgleich) ---------- */
const norm = s => String(s).toLowerCase().replace(/\(.*?\)/g, '').split(',')[0].replace(/[^a-zäöüß ]/g, ' ').replace(/\s+/g, ' ').trim();
function termMatches(term, ingName) { const t = norm(term), n = norm(ingName); if (t.length < 3 || !n) return false; if (n.includes(t) || t.includes(n)) return true; const stem = x => x.replace(/(en|n|e|s)$/, ''); return n.split(' ').some(w => w.length > 3 && (stem(w) === stem(t) || w.startsWith(t) || t.startsWith(w))); }
function haveMatch(r) {
  const have = S.have || []; const core = r.ing.filter(i => !i.p);
  const ok = [], missing = [];
  core.forEach(i => { (have.some(h => termMatches(h, i.n)) ? ok : missing).push(i); });
  return { ok, missing, pct: core.length ? ok.length / core.length : 0, total: core.length };
}
function allIngredientNames() { const set = new Set(); RECIPES.forEach(r => r.ing.forEach(i => { if (!i.p) set.add(short(i.n)); })); return Array.from(set).sort((a, b) => a.localeCompare(b, 'de')); }

/* ---------- Woche und Plan ---------- */
function settingsSig(st) { return JSON.stringify([st.diet, st.fish, st.legumes, st.plant, st.meatMax, st.allergens, st.dislikes, st.timeWeek, st.timeWeekend, st.lowChop, st.oneVessel, st.base3, st.seasonal, st.devices]); }
function week() {
  const k = iso(curMon);
  if (!S.weeks[k]) S.weeks[k] = { days: Array.from({ length: 7 }, () => ({})), shuffle: 0, checked: [], own: [], sel: 0, sig: '' };
  const w = S.weeks[k];
  if (!Array.isArray(w.days) || w.days.length !== 7) w.days = Array.from({ length: 7 }, () => ({}));
  return w;
}
function targets(st) { let fish = st.fish, meatMax = st.meatMax; if (st.diet === 'vegetarisch' || st.diet === 'vegan') { fish = 0; meatMax = 0; } if (st.diet === 'pescetarisch') meatMax = 0; return { fish, legumes: st.legumes, plant: st.plant, meatMax }; }
function tally(c, r) { if (r.protein === 'fisch') c.fish++; if (r.protein === 'huelsen') c.legumes++; if (plantBased(r)) c.plant++; if (isMeat(r)) c.meat++; c.byProt = c.byProt || {}; c.byProt[r.protein] = (c.byProt[r.protein] || 0) + 1; }
function ensurePlan() {
  const w = week(); const st = S.settings; const sig = settingsSig(st);
  const needs = w.days.some(d => !d.id || !R(d.id) || (!d.locked && hardIssues(R(d.id), st).length));
  if (w.sig !== sig || needs) { buildPlan(w, st); w.sig = sig; save(); }
}
function buildPlan(w, st) {
  const rnd = rng(hashStr(iso(curMon) + '|' + w.shuffle + '|' + settingsSig(st)));
  const tg = targets(st); const month = curMon.getMonth() + 1;
  const used = new Set(); const counts = { fish: 0, legumes: 0, plant: 0, meat: 0 };
  w.days.forEach(d => { if (d.locked && d.id && R(d.id)) { used.add(d.id); tally(counts, R(d.id)); } });
  const recent = new Set(S.diary.filter(e => daysAgo(e.date) < 21).map(e => e.id));
  for (let i = 0; i < 7; i++) {
    const d = w.days[i];
    if (d.locked && d.id && R(d.id)) continue;
    const slotsLeft = w.days.slice(i).filter(x => !(x.locked && x.id && R(x.id))).length;
    let pool = RECIPES.filter(r => !used.has(r.id) && !hardIssues(r, st).length);
    if (!pool.length) pool = RECIPES.filter(r => !hardIssues(r, st).length);
    if (!pool.length) { d.id = null; continue; }
    const prev = i > 0 ? R(w.days[i - 1].id) : null;
    const vegSoFar = new Set(); w.days.slice(0, i).forEach(x => { const r = R(x.id); if (r) r.veg.forEach(v => vegSoFar.add(v)); });
    let best = null, bs = -Infinity;
    for (const r of pool) {
      let s = 0;
      const needF = tg.fish - counts.fish, needL = tg.legumes - counts.legumes, needP = tg.plant - counts.plant, meatLeft = tg.meatMax - counts.meat;
      if (r.protein === 'fisch') s += needF > 0 ? 60 + 110 * (needF / slotsLeft) : -140;
      if (r.protein === 'huelsen') s += needL > 0 ? 50 + 90 * (needL / slotsLeft) : 8;
      if (isMeat(r)) s += meatLeft > 0 ? 45 : -300;
      s -= 16 * ((counts.byProt && counts.byProt[r.protein]) || 0);
      if (plantBased(r)) { if (needP > 0) s += 20 + 60 * (needP / slotsLeft); }
      else if (slotsLeft - Math.max(0, needP) <= 0) s -= 250;
      s -= 70 * softIssues(r, st, i).length;
      if (prev) { if (prev.cuisine === r.cuisine) s -= 35; if (prev.base && prev.base === r.base) s -= 15; if (prev.protein === r.protein && r.protein !== 'huelsen') s -= 20; }
      s += 4 * r.veg.filter(v => !vegSoFar.has(v)).length;
      if (st.seasonal && r.season.length) s += r.season.includes(month) ? 22 : -12;
      if (S.favorites.includes(r.id)) s += 15;
      if (recent.has(r.id)) s -= 40;
      if (r.wholegrain) s += 5;
      if (st.preferHave && S.have.length) s += 60 * haveMatch(r).pct;
      s += rnd() * 50;
      if (s > bs) { bs = s; best = r; }
    }
    d.id = best.id; d.locked = false; used.add(best.id); tally(counts, best);
    if (d.chainFrom != null && !(w.days[d.chainFrom] && w.days[d.chainFrom].chain)) delete d.chainFrom;
  }
}
function alternatives(i, n) {
  const w = week(); const st = S.settings; const used = new Set(w.days.map(d => d.id)); const cur = R(w.days[i].id);
  const rnd = rng(hashStr(iso(curMon) + 'alt' + i + '|' + w.shuffle));
  return RECIPES.filter(r => !used.has(r.id) && !hardIssues(r, st).length).map(r => {
    let s = 0; if (cur) { if (r.protein === cur.protein) s += 30; if (plantBased(r) === plantBased(cur)) s += 20; }
    s -= 50 * softIssues(r, st, i).length; if (S.favorites.includes(r.id)) s += 10; s += rnd() * 25; return { r, s };
  }).sort((a, b) => b.s - a.s).slice(0, n).map(x => x.r);
}
function setDay(i, id) {
  const w = week(); const d = w.days[i];
  if (d.chainFrom != null) { const src = w.days[d.chainFrom]; if (src) src.chain = false; delete d.chainFrom; delete d.prevId; delete d.prevLocked; }
  if (d.chain) { d.chain = false; const nx = w.days[i + 1]; if (nx && nx.chainFrom === i) { nx.id = nx.prevId || nx.id; nx.locked = !!nx.prevLocked; delete nx.chainFrom; delete nx.prevId; delete nx.prevLocked; } }
  d.id = id; d.locked = true; d.kidId = null; d.extras = []; d.cooked = false;
  save(); render();
}
function toggleChain(i) {
  const w = week(); const d = w.days[i]; const r = R(d.id); if (!r || !r.base || i >= 6) return;
  const nx = w.days[i + 1];
  if (d.chain) {
    if (nx.chainFrom === i) { nx.id = nx.prevId || nx.id; nx.locked = !!nx.prevLocked; delete nx.chainFrom; delete nx.prevId; delete nx.prevLocked; }
    d.chain = false;
  } else {
    const used = new Set(w.days.map(x => x.id));
    const cand = RECIPES.filter(x => x.base === r.base && x.id !== r.id && !used.has(x.id) && !hardIssues(x, S.settings).length)
      .sort((a, b) => softIssues(a, S.settings, i + 1).length - softIssues(b, S.settings, i + 1).length);
    if (!cand.length) { toast('Kein zweites Gericht mit ' + BASE_LABEL[r.base] + ' verfügbar'); return; }
    if (nx.chainFrom != null || nx.chain) { toast('Der Folgetag ist schon verkettet'); return; }
    nx.prevId = nx.id; nx.prevLocked = !!nx.locked; nx.id = cand[0].id; nx.locked = true; nx.chainFrom = i; nx.kidId = null; d.chain = true;
  }
  save(); render();
}
function baseIng(r) { if (!r || !r.base) return null; const key = BASE_KEY[r.base]; return r.ing.find(x => x.n.toLowerCase().includes(key)) || null; }
function kidFor(i) {
  const w = week(); const d = w.days[i]; const st = S.settings;
  if (d.kidId) { const k = K(d.kidId); if (k) return k; }
  const r = R(d.id); if (!r) return null;
  let c = KIDS.filter(k => kidOk(k, st) && k.match.includes(r.cuisine));
  if (!c.length && r.base) c = KIDS.filter(k => kidOk(k, st) && k.base.includes(r.base));
  if (!c.length) c = KIDS.filter(k => kidOk(k, st));
  if (!c.length) return null;
  const rnd = rng(hashStr(iso(curMon) + 'kid' + i + (r.id)));
  return c[Math.floor(rnd() * c.length)];
}
function kidPlannedDays(kidId) { const w = week(); const out = []; w.days.forEach((d, i) => { if (d.kidId === kidId) out.push(i); }); return out; }
function balance() {
  const w = week(); const c = { fish: 0, legumes: 0, plant: 0, meat: 0 }; let whole = 0; const veg = new Set(), cui = new Set(); let cooked = 0;
  w.days.forEach(d => { const r = R(d.id); if (!r) return; tally(c, r); if (r.wholegrain) whole++; r.veg.forEach(v => veg.add(v)); cui.add(r.cuisine); if (d.cooked) cooked++; });
  return { c, whole, veg: veg.size, cui: cui.size, cooked };
}

/* ---------- Einkauf ---------- */
function shoppingItems() {
  const w = week(); const st = S.settings; const P = portions(); const map = new Map();
  const add = (ing, q, dayIdx, own) => {
    const key = ing.n + '|' + ing.u; let it = map.get(key);
    if (!it) { it = { key, n: ing.n, u: ing.u, c: ing.c || 'vorrat', p: !!ing.p, q: 0, days: new Set(), hint: ing.hint, own: false }; map.set(key, it); }
    it.q += q; if (dayIdx != null) it.days.add(dayIdx); if (own) it.own = true;
  };
  w.days.forEach((d, i) => {
    const r = R(d.id); if (!r) return;
    r.ing.forEach(ing => add(ing, ing.q * P, i));
    (d.extras || []).forEach(e => { const x = EXTRAS[e]; if (x) add(x, x.q * (st.adults / 2), i); });
    if (st.kidMode !== 'familie') { const k = kidFor(i); const nk = eatingKids().length; if (k && nk) k.ing.forEach(ing => add(ing, ing.q * nk, i)); }
  });
  (w.own || []).forEach(o => add({ n: o.n, u: o.u, c: o.c }, o.q, null, true));
  return Array.from(map.values());
}
function shoppingText() {
  const items = shoppingItems(); const w = week(); const lines = ['Einkaufsliste · KW ' + isoWeek(curMon) + ' (' + fmtRange(curMon) + ')', ''];
  CATEGORY_ORDER.forEach(c => {
    const list = items.filter(i => i.c === c && (!i.p || S.settings.showPantry)); if (!list.length) return;
    lines.push(CATEGORY_LABEL[c].toUpperCase());
    list.sort((a, b) => a.n.localeCompare(b.n, 'de')).forEach(i => lines.push((w.checked.includes(i.key) ? '[x] ' : '[ ] ') + fmtQ(i.q, i.u) + ' ' + i.n));
    lines.push('');
  });
  return lines.join('\n').trim();
}

/* ---------- Apple Erinnerungen ---------- */
const SHORTCUT_NAME = 'Grün geplant Einkauf';
function linesFor(items) { const by = {}; items.forEach(i => { (by[i.c] = by[i.c] || []).push(i); }); const out = []; CATEGORY_ORDER.forEach(c => (by[c] || []).sort((a, b) => a.n.localeCompare(b.n, 'de')).forEach(i => out.push(fmtQ(i.q, i.u) + ' ' + i.n))); return out; }
function openItems() { const w = week(); return shoppingItems().filter(i => !i.p && !w.checked.includes(i.key)); }
function dayItems(i) {
  const w = week(); const st = S.settings; const d = w.days[i]; const r = R(d.id); if (!r) return [];
  const P = portions(); const map = new Map();
  const add = (ing, q) => { const key = ing.n + '|' + ing.u; const it = map.get(key) || { key, n: ing.n, u: ing.u, c: ing.c || 'vorrat', p: !!ing.p, q: 0 }; it.q += q; map.set(key, it); };
  r.ing.forEach(x => add(x, x.q * P));
  (d.extras || []).forEach(e => { const x = EXTRAS[e]; if (x) add(x, x.q * (st.adults / 2)); });
  if (st.kidMode !== 'familie') { const k = kidFor(i); const nk = eatingKids().length; if (k && nk) k.ing.forEach(x => add(x, x.q * nk)); }
  return Array.from(map.values()).filter(x => !x.p);
}
function missingItems(items) { const have = S.have || []; return items.filter(x => !have.some(h => termMatches(h, x.n))); }
function shortcutUrl(lines) { return 'shortcuts://run-shortcut?name=' + encodeURIComponent(SHORTCUT_NAME) + '&input=text&text=' + encodeURIComponent(lines.join('\n')); }
function remindButtons(lines, scope) {
  if (!lines.length) return '';
  return '<button type="button" class="btn sm" data-act="copylines" data-scope="' + scope + '">' + ICON.copy + ' Für Erinnerungen kopieren</button>' +
    '<a class="btn sm primary" href="' + shortcutUrl(lines) + '" data-act="remind" data-scope="' + scope + '">' + ICON.check + ' An Erinnerungen senden</a>';
}
function remindHelp() {
  return '<details class="panel soft" style="padding:12px"><summary style="cursor:pointer;font-weight:600">Apple Erinnerungen: so klappt die Übergabe</summary>' +
    '<div class="stack small" style="margin-top:10px">' +
    '<div><b>Weg 1, ohne Einrichtung:</b> „Für Erinnerungen kopieren“ antippen, dann in Erinnerungen eine Liste öffnen, eine neue Erinnerung anlegen und einfügen. Erinnerungen legt aus jeder Zeile eine eigene Erinnerung an.</div>' +
    '<div><b>Weg 2, ein Tipp:</b> „An Erinnerungen senden“ startet den Kurzbefehl „' + SHORTCUT_NAME + '“ mit der Liste als Text. Den Kurzbefehl einmal anlegen: Kurzbefehle-App öffnen, neuen Kurzbefehl erstellen, Aktion „Text aufteilen“ (Kurzbefehleingabe, bei neuen Zeilen), dann „Für jedes Element wiederholen“ und darin „Neue Erinnerung hinzufügen“ mit Titel „Wiederholungselement“ und eurer Einkaufsliste als Liste. Kurzbefehl genau „' + SHORTCUT_NAME + '“ nennen. Funktioniert auf iPhone, iPad und Mac.</div>' +
    (IS_ARTIFACT ? '<div class="tiny">In dieser Vorschau kann der Kurzbefehl-Link blockiert sein; Weg 1 geht immer. In der installierten Version (GitHub Pages oder lokal geöffnet) funktionieren beide Wege.</div>' : '') +
    '</div></details>';
}

/* ---------- Thema ---------- */
function applyTheme() {
  const root = document.documentElement;
  if (S.theme === 'light' || S.theme === 'dark') root.setAttribute('data-theme', S.theme); else root.removeAttribute('data-theme');
  const b = $('#theme-btn'); if (b) { b.title = 'Thema: ' + (S.theme === 'system' ? 'wie das System' : S.theme === 'dark' ? 'dunkel' : 'hell'); b.setAttribute('aria-label', b.title); }
}

/* ---------- Fotos aus Wikipedia (werden erst beim Anzeigen geladen) ---------- */
const photoKey = r => (r.photo || r.name.split(' · ')[0]).trim();
let photoFails = 0; const photoPending = new Set(); const photoQueue = []; let photoActive = 0;
function wikiQuery(lang, params) { return fetch('https://' + lang + '.wikipedia.org/w/api.php?format=json&origin=*&' + params).then(r => r.json()); }
function pickImage(data, lang) { const pages = data && data.query && data.query.pages; if (!pages) return null; for (const id in pages) { const p = pages[id]; if (p.thumbnail && p.thumbnail.source) return { url: p.thumbnail.source, page: p.fullurl || ('https://' + lang + '.wikipedia.org/wiki/' + encodeURIComponent(p.title)), title: p.title }; } return null; }
async function lookupPhoto(key) {
  const enc = encodeURIComponent(key); const shortName = key.split(/\s+/).length <= 3;
  const tries = [['de', 'action=query&prop=pageimages|info&inprop=url&redirects=1&pithumbsize=640&titles=' + enc], ['en', 'action=query&prop=pageimages|info&inprop=url&redirects=1&pithumbsize=640&titles=' + enc]];
  if (shortName) tries.push(['de', 'action=query&generator=search&gsrlimit=1&gsrnamespace=0&prop=pageimages|info&inprop=url&pithumbsize=640&gsrsearch=' + enc], ['en', 'action=query&generator=search&gsrlimit=1&gsrnamespace=0&prop=pageimages|info&inprop=url&pithumbsize=640&gsrsearch=' + enc]);
  for (const t of tries) { const img = pickImage(await wikiQuery(t[0], t[1]), t[0]); if (img) return img; }
  return null;
}
function applyPhoto(el, c) {
  if (!el || el.classList.contains('has-photo')) return;
  el.classList.add('has-photo'); el.style.backgroundImage = 'url("' + c.url.replace(/"/g, '%22') + '")';
  el.setAttribute('role', 'img'); el.setAttribute('aria-label', 'Foto: ' + c.title);
  if (el.dataset.credit != null) { const a = document.createElement('a'); a.className = 'photo-credit'; a.href = c.page; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'Foto: Wikipedia'; el.appendChild(a); }
}
function photoWork() {
  while (photoActive < 3 && photoQueue.length) {
    const key = photoQueue.shift(); photoActive++;
    lookupPhoto(key).then(img => { photoFails = 0; S.photos[key] = img ? img : { none: true, t: Date.now() }; save(); if (img) $$('[data-photo]').forEach(el => { if (el.dataset.photo === key) applyPhoto(el, img); }); })
      .catch(() => { photoFails++; })
      .finally(() => { photoActive--; photoPending.delete(key); photoWork(); });
  }
}
const photoObserver = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => { entries.forEach(e => { if (!e.isIntersecting) return; photoObserver.unobserve(e.target); const key = e.target.dataset.photo; if (photoFails >= 3 || photoPending.has(key)) return; photoPending.add(key); photoQueue.push(key); photoWork(); }); }, { rootMargin: '200px' }) : null;
function hydratePhotos() {
  if (!S.settings.photos) return;
  $$('[data-photo]').forEach(el => {
    if (el.classList.contains('has-photo')) return;
    const key = el.dataset.photo; const c = S.photos[key];
    if (c && c.url) { applyPhoto(el, c); return; }
    if (c && c.none && Date.now() - c.t < 30 * 864e5) return;
    if (photoFails >= 3 || !photoObserver) return;
    photoObserver.observe(el);
  });
}
function photoBox(r, cls, credit) { if (!r) return plateSVG(null, 'plate'); return '<span class="photo ' + (cls || '') + '" data-photo="' + esc(photoKey(r)) + '"' + (credit ? ' data-credit' : '') + '>' + plateSVG(r, 'plate') + '</span>'; }

/* ---------- Teller-Illustration ---------- */
function plateSVG(r, cls) {
  if (!r) return '<svg class="' + (cls || 'plate') + '" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="48" fill="var(--plate-rim)"/><circle cx="50" cy="50" r="40" fill="var(--plate)"/></svg>';
  const cols = r.veg.slice(0, 5).map(v => vegColor(v)); const pc = PROTEIN_COLORS[r.protein] || '#CCCCCC';
  const pos = [[34, 46], [62, 36], [66, 62], [42, 68], [50, 52]]; let blobs = '';
  cols.forEach((c, i) => { const x = pos[i][0], y = pos[i][1], rot = (i * 37) % 180; blobs += '<ellipse cx="' + x + '" cy="' + y + '" rx="14" ry="10" transform="rotate(' + rot + ' ' + x + ' ' + y + ')" fill="' + c + '" opacity=".92"/>'; });
  let prot = '';
  switch (r.protein) {
    case 'fisch': prot = '<path d="M36 54c8-12 22-12 30 0-8 12-22 12-30 0z" fill="' + pc + '"/><path d="M66 54l9-7v14z" fill="' + pc + '"/>'; break;
    case 'ei': prot = '<circle cx="52" cy="54" r="12" fill="#FFFDF7" stroke="#E8E2D0"/><circle cx="52" cy="54" r="6" fill="' + pc + '"/>'; break;
    case 'huelsen': prot = [[44, 50], [54, 46], [58, 56], [48, 60], [38, 58]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="' + pc + '" stroke="rgba(0,0,0,.08)"/>').join(''); break;
    case 'tofu': prot = [[40, 48], [52, 44], [50, 58]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="11" height="11" rx="2" fill="' + pc + '" stroke="rgba(0,0,0,.1)"/>').join(''); break;
    case 'milch': prot = '<ellipse cx="52" cy="54" rx="13" ry="9" fill="' + pc + '" stroke="rgba(0,0,0,.08)"/>'; break;
    default: prot = '<rect x="38" y="46" width="26" height="16" rx="7" fill="' + pc + '"/>';
  }
  return '<svg class="' + (cls || 'plate') + '" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="48" fill="var(--plate-rim)"/><circle cx="50" cy="50" r="40" fill="var(--plate)"/>' + blobs + prot + '</svg>';
}
const ICON = {
  check: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3 3 7-7"/></svg>',
  lock: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5 7V5a3 3 0 0 1 6 0v2"/></svg>',
  swap: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h9l-3-3M14 11H5l3 3"/></svg>',
  heart: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 14s-6-3.7-6-8a3.5 3.5 0 0 1 6-2.4A3.5 3.5 0 0 1 14 6c0 4.3-6 8-6 8z"/></svg>',
  heartO: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 14s-6-3.7-6-8a3.5 3.5 0 0 1 6-2.4A3.5 3.5 0 0 1 14 6c0 4.3-6 8-6 8z"/></svg>',
  list: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 4h9M5 8h9M5 12h9M2 4h.01M2 8h.01M2 12h.01"/></svg>',
  copy: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="5" width="9" height="9" rx="1.5"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5"/></svg>',
  dice: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="2" width="12" height="12" rx="2.5"/><circle cx="5.5" cy="5.5" r="1" fill="currentColor"/><circle cx="10.5" cy="10.5" r="1" fill="currentColor"/><circle cx="10.5" cy="5.5" r="1" fill="currentColor"/><circle cx="5.5" cy="10.5" r="1" fill="currentColor"/></svg>',
  link: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6.5 9.5l3-3M5 11l-1 1a2.5 2.5 0 0 1-3.5-3.5l2-2A2.5 2.5 0 0 1 6 6M11 5l1-1a2.5 2.5 0 0 1 3.5 3.5l-2 2A2.5 2.5 0 0 1 10 10"/></svg>',
  sun: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8" cy="8" r="3"/><path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1"/></svg>',
  moon: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 10.5A6 6 0 0 1 5.5 3a6 6 0 1 0 7.5 7.5z"/></svg>',
  auto: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="8" r="6"/><path d="M8 2a6 6 0 0 1 0 12z" fill="currentColor"/></svg>',
  x: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>',
  plus: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>',
  print: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="2" width="8" height="4"/><rect x="2" y="6" width="12" height="6" rx="1"/><rect x="4" y="10" width="8" height="4"/></svg>'
};

/* ---------- Kochmodus: Karte für Karte ---------- */
let cook = null; let timer = null; let wake = null;
function parseMinutes(text) { const out = []; const re = /(\d+)(?:\s*(?:bis|–|-)\s*(\d+))?\s*(?:Minuten|Min\.|Min\b)/gi; let m; while ((m = re.exec(text))) out.push({ from: +m[1], to: m[2] ? +m[2] : +m[1], label: m[0] }); const rh = /(\d+(?:[,.]\d+)?)\s*Stunden?/gi; while ((m = rh.exec(text))) { const h = parseFloat(m[1].replace(',', '.')); out.push({ from: Math.round(h * 60), to: Math.round(h * 60), label: m[0] }); } return out; }
function parseTemp(text) { const m = text.match(/(\d{2,3})\s*°\s*C/); return m ? +m[1] : null; }
function recipeTemp(r) { for (const st of r.steps) { const t = parseTemp(st); if (t) return t; } return null; }
async function wakeOn() { try { if (navigator.wakeLock) wake = await navigator.wakeLock.request('screen'); } catch (e) {} }
function wakeOff() { try { if (wake) { wake.release(); wake = null; } } catch (e) {} }
function startTimer(min, label) { stopTimer(false); timer = { end: Date.now() + min * 60000, label, done: false }; timer.iv = setInterval(tickTimer, 500); tickTimer(); try { if (navigator.vibrate) navigator.vibrate(30); } catch (e) {} toast('Timer läuft: ' + min + ' Min.'); }
function tickTimer() { const el = $('#cook-timer'); if (!timer) return; const left = timer.end - Date.now(); if (left <= 0) { if (!timer.done) { timer.done = true; alarm(); } if (el) { el.className = 'cook-timer done'; el.innerHTML = '⏱ Fertig · ' + esc(timer.label) + ' <button type="button" class="btn sm" data-act="timerstop">OK</button>'; } return; } if (!el) return; const m = Math.floor(left / 60000), sec = Math.floor((left % 60000) / 1000); el.className = 'cook-timer'; el.innerHTML = '⏱ <b class="num">' + m + ':' + String(sec).padStart(2, '0') + '</b> <span class="tiny">' + esc(timer.label) + '</span> <button type="button" class="btn icon sm ghost" data-act="timerstop" aria-label="Timer stoppen">' + ICON.x + '</button>'; }
function stopTimer(clear) { if (timer) { clearInterval(timer.iv); timer = null; } const el = $('#cook-timer'); if (el && clear !== false) { el.innerHTML = ''; el.className = 'cook-timer empty'; } }
function alarm() { try { if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 400]); } catch (e) {} try { const Ctx = window.AudioContext || window.webkitAudioContext; const ctx = new Ctx(); [0, 0.35, 0.7].forEach(t => { const o = ctx.createOscillator(); const g = ctx.createGain(); o.frequency.value = 880; o.connect(g); g.connect(ctx.destination); g.gain.setValueAtTime(0.0001, ctx.currentTime + t); g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + 0.3); o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.32); }); } catch (e) {} toast('Timer abgelaufen' + (timer ? ': ' + timer.label : '')); }
function openCook(i) { const w = week(); const r = R(w.days[i].id); if (!r) return; cook = { i, idx: 0, checked: {} }; renderCook(); const c = $('#cook'); c.hidden = false; document.body.style.overflow = 'hidden'; wakeOn(); setTimeout(() => { hydratePhotos(); cookGo(0, true); }, 0); }
function closeCook() { const c = $('#cook'); if (!c || c.hidden) return; c.hidden = true; document.body.style.overflow = ''; wakeOff(); cook = null; render(); }
function cookGo(idx, instant) { if (!cook) return; const track = $('#cook-track'); const n = track.children.length; cook.idx = Math.max(0, Math.min(n - 1, idx)); track.scrollTo({ left: cook.idx * track.clientWidth, behavior: instant ? 'auto' : 'smooth' }); cookNav(); }
function cookNav() { if (!cook) return; const track = $('#cook-track'); const n = track.children.length; $('#cook-dots').innerHTML = Array.from({ length: n }, (_, k) => '<button type="button" data-act="cookgo" data-k="' + k + '" aria-label="Karte ' + (k + 1) + '" aria-current="' + (k === cook.idx) + '"></button>').join(''); $('#cook-prev').disabled = cook.idx === 0; const next = $('#cook-next'); if (cook.idx === n - 1) { next.textContent = 'Schließen'; next.dataset.act = 'cookclose'; } else { next.textContent = cook.idx === 0 ? 'Los geht’s' : 'Weiter'; next.dataset.act = 'cooknext'; } const r = R(week().days[cook.i].id); $('#cook-pos').textContent = cook.idx === 0 ? 'Überblick' : cook.idx <= r.steps.length ? 'Schritt ' + cook.idx + ' von ' + r.steps.length : 'Fertig'; }
function renderCook() {
  const w = week(); const d = w.days[cook.i]; const r = R(d.id); const st = S.settings; const P = portions(); const temp = recipeTemp(r); const kid = st.kidMode !== 'familie' ? kidFor(cook.i) : null; const tier = tierFor(youngest());
  $('#cook-title').textContent = WD[cook.i] + ' · ' + r.name.split(' · ')[0];
  const card = inner => '<section class="cook-card"><div class="inner">' + inner + '</div></section>';
  let html = card(
    photoBox(r, 'big', true) + '<div><div class="eyebrow">' + r.flag + ' ' + esc(r.cuisine) + '</div><h2 class="cook-h">' + esc(r.name) + '</h2></div>' +
    '<div class="meta">' +
    '<div class="m"><span class="eyebrow">Gesamt</span><b class="num">' + (r.time.a + r.time.c) + ' Min.</b></div>' +
    '<div class="m"><span class="eyebrow">Aktiv</span><b class="num">' + r.time.a + ' Min.</b></div>' +
    '<div class="m"><span class="eyebrow">Garzeit</span><b class="num">' + r.time.c + ' Min.</b></div>' +
    (temp ? '<div class="m"><span class="eyebrow">Ofen</span><b class="num">' + temp + ' °C</b></div>' : '') +
    '<div class="m"><span class="eyebrow">Geräte</span><b>' + esc(r.method) + '</b></div>' +
    '<div class="m"><span class="eyebrow">Portionen</span><b class="num">' + fmtNum(P) + '</b></div></div>' +
    (temp ? '<div class="panel soft" style="padding:12px"><b>Zuerst:</b> Backofen auf ' + temp + ' °C vorheizen.</div>' : '') +
    '<div><div class="panel-head"><h3>Zutaten bereitlegen</h3><span class="tiny">antippen zum Abhaken</span></div>' +
    r.ing.map((x, k) => '<label class="cook-check"><input type="checkbox" data-act="cookcheck" data-k="' + k + '"><span style="flex:1">' + esc(x.n) + (x.p ? ' <span class="tiny">(Vorrat)</span>' : '') + '</span><b class="num">' + fmtQ(x.q * P, x.u) + '</b></label>').join('') + '</div>' +
    '<div class="panel kid" style="padding:12px"><div class="eyebrow accent">Fürs Kind</div><p style="margin-top:4px">' + (r.kidName ? '<b>' + esc(r.kidName) + ':</b> ' : '') + esc(r.kid) + '</p></div>'
  );
  r.steps.forEach((step, k) => {
    const mins = parseMinutes(step); const t = parseTemp(step);
    html += card('<div class="eyebrow">Schritt ' + (k + 1) + ' von ' + r.steps.length + '</div><div class="cook-num num">' + (k + 1) + '</div><p class="cook-step">' + esc(step) + '</p>' +
      '<div class="chips">' + (t ? chip(t + ' °C', 'brand') : '') + '</div>' +
      (mins.length ? '<div><div class="eyebrow" style="margin-bottom:6px">Timer</div><div class="timer-btns">' + mins.map(m => '<button type="button" class="btn" data-act="timer" data-min="' + m.from + '" data-label="Schritt ' + (k + 1) + ': ' + esc(m.label) + '">⏱ ' + (m.from === m.to ? m.from : m.from + ' bis ' + m.to) + ' Min. starten</button>').join('') + '</div></div>' : '') +
      (k === r.steps.length - 1 && tier ? '<div class="panel kid" style="padding:12px"><div class="eyebrow accent">Textur ' + esc(tier.label.split(' · ')[0]) + '</div><p class="small" style="margin-top:4px">' + esc(tier.texture) + '</p></div>' : ''));
  });
  html += card('<div class="eyebrow">Geschafft</div><h2 class="cook-h">Guten Appetit.</h2>' +
    (kid ? '<div class="panel kid" style="padding:12px"><div class="eyebrow accent">Kinderoption heute</div><p style="margin-top:4px"><b>' + kid.flag + ' ' + esc(kid.name) + '</b> · ' + esc(kid.serve) + '</p></div>' : '') +
    '<div class="panel soft" style="padding:12px"><b>Tag-2-Idee:</b> ' + esc(leftoverFor(r)) + '</div>' +
    '<div class="row between"><b>Wie war es?</b>' + ratingHtml(r.id) + '</div>' +
    '<textarea data-act="note" data-id="' + r.id + '" placeholder="Notiz für das nächste Mal">' + esc((S.notes[r.id] && S.notes[r.id].text) || '') + '</textarea>' +
    '<button type="button" class="btn primary" style="min-height:52px;justify-content:center" data-act="cookdone" data-i="' + cook.i + '">' + ICON.check + ' ' + (d.cooked ? 'Gekocht, schließen' : 'Als gekocht markieren und schließen') + '</button>');
  $('#cook-track').innerHTML = html;
  const tEl = $('#cook-timer'); if (tEl) { if (timer) tickTimer(); else { tEl.innerHTML = ''; tEl.className = 'cook-timer empty'; } }
  cookNav();
}

/* ---------- Rendern ---------- */
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2200); }
function chip(txt, cls) { return '<span class="chip ' + (cls || '') + '">' + txt + '</span>'; }
function ratingHtml(id) { const n = (S.notes[id] && S.notes[id].stars) || 0; let h = '<span class="stars" role="group" aria-label="Bewertung">'; for (let i = 1; i <= 5; i++) h += '<button type="button" class="' + (i <= n ? 'on' : '') + '" data-act="rate" data-id="' + id + '" data-n="' + i + '" aria-label="' + i + ' von 5">★</button>'; return h + '</span>'; }

function renderHeader() {
  $('#week-label').textContent = 'KW ' + isoWeek(curMon) + ' · ' + fmtRange(curMon);
  const b = $('#theme-btn'); b.innerHTML = S.theme === 'dark' ? ICON.moon : S.theme === 'light' ? ICON.sun : ICON.auto;
  $$('.tab').forEach(t => t.setAttribute('aria-selected', t.dataset.view === S.view ? 'true' : 'false'));
  $('#tab-count-rezepte').textContent = countries().length;
  const hv = $('#tab-count-vorrat'); if (hv) { hv.textContent = (S.have || []).length; hv.hidden = !(S.have || []).length; }
  $('#tab-count-kinder').textContent = KIDS.length;
  const shop = shoppingItems().filter(i => !i.p); const open = shop.filter(i => !week().checked.includes(i.key)).length;
  $('#tab-count-einkauf').textContent = open;
  VIEWS.forEach(v => { const el = $('#view-' + v); if (el) el.hidden = v !== S.view; });
  $('#today-btn').hidden = iso(curMon) === iso(mondayOf(new Date()));
}

function renderWoche() {
  ensurePlan();
  const w = week(); const st = S.settings; const tg = targets(st); const bal = balance();
  const ym = youngest(); const tier = tierFor(ym);
  const hh = [
    '<button type="button" class="chip brand" data-act="goto" data-view="feinplanung">' + st.adults + ' Erwachsene</button>',
    st.kids.length ? '<button type="button" class="chip kid" data-act="goto" data-view="feinplanung">' + st.kids.map(k => 'Kind ' + ageText(k.age)).join(' · ') + '</button>' : '<button type="button" class="chip" data-act="goto" data-view="feinplanung">ohne Kind</button>',
    '<button type="button" class="chip" data-act="goto" data-view="feinplanung">' + ({ alles: 'Alles', pescetarisch: 'Pescetarisch', vegetarisch: 'Vegetarisch', vegan: 'Vegan' }[st.diet]) + '</button>',
    st.allergens.length ? '<button type="button" class="chip crit" data-act="goto" data-view="feinplanung">ohne ' + st.allergens.map(a => ALLERGEN_LABEL[a]).join(', ') + '</button>' : '',
    '<button type="button" class="chip" data-act="goto" data-view="feinplanung">werktags ≤ ' + st.timeWeek + ' Min.</button>',
    st.seasonal ? '<button type="button" class="chip" data-act="goto" data-view="feinplanung">saisonal · ' + MONTHS[curMon.getMonth()] + '</button>' : ''
  ].join('');
  const meter = (label, val, goal, mode) => {
    const pct = goal ? Math.min(100, Math.round(100 * val / goal)) : (val ? 100 : 0);
    const ok = mode === 'max' ? val <= goal : val >= goal; const over = mode === 'max' && val > goal;
    return '<div class="meter ' + (over ? 'over' : ok ? 'ok' : '') + '"><div class="lbl"><span>' + label + '</span><b>' + val + (goal != null ? '/' + goal : '') + (ok && mode !== 'count' ? ' <span class="ok-ic">✓</span>' : '') + '</b></div><div class="bar"><i style="width:' + pct + '%"></i></div></div>';
  };
  let meters = '';
  if (tg.fish > 0) meters += meter('Fisch', bal.c.fish, tg.fish);
  meters += meter('Hülsenfrüchte', bal.c.legumes, tg.legumes);
  meters += meter('Pflanzlich', bal.c.plant, tg.plant);
  if (st.diet === 'alles') meters += meter('Fleisch höchstens', bal.c.meat, tg.meatMax, 'max');
  meters += meter('Vollkorn', bal.whole, 7, 'count');
  meters += '<div class="meter ok"><div class="lbl"><span>Gemüsesorten</span><b>' + bal.veg + '</b></div><div class="bar"><i style="width:' + Math.min(100, bal.veg * 6) + '%"></i></div></div>';
  meters += '<div class="meter ok"><div class="lbl"><span>Länderküchen</span><b>' + bal.cui + '</b></div><div class="bar"><i style="width:' + Math.min(100, bal.cui * 14) + '%"></i></div></div>';
  const circ = 2 * Math.PI * 30; const dash = (bal.cooked / 7) * circ;
  $('#woche-summary').innerHTML =
    '<div class="panel"><div class="eyebrow">Euer Haushalt</div><div class="household" style="margin-top:6px">' + hh + '</div>' +
    '<div class="eyebrow" style="margin-top:16px">Wochen-Balance</div><div class="balance">' + meters + '</div></div>' +
    '<div class="panel ring-card"><svg class="ring" viewBox="0 0 72 72" aria-hidden="true"><circle class="track" cx="36" cy="36" r="30"/><circle class="prog" cx="36" cy="36" r="30" stroke-dasharray="' + dash.toFixed(1) + ' ' + circ.toFixed(1) + '"/><text x="36" y="43" text-anchor="middle">' + bal.cooked + '</text></svg>' +
    '<div><b>' + bal.cooked + ' von 7 Gerichten</b><br><span class="small muted">diese Woche gekocht</span><br>' +
    '<span class="tiny">' + (tier ? 'Kind: ' + tier.label.split(' · ')[0] : 'Ohne Kinderoption') + '</span></div></div>';

  $('#days').innerHTML = w.days.map((d, i) => {
    const r = R(d.id); const date = addDays(curMon, i); const isToday = iso(date) === todayIso;
    const hi = r ? hardIssues(r, st) : []; const si = r ? softIssues(r, st, i) : [];
    const kid = st.kidMode !== 'familie' ? kidFor(i) : null;
    return '<button type="button" class="day ' + (d.cooked ? 'cooked' : '') + '" data-act="sel" data-i="' + i + '" aria-pressed="' + (w.sel === i) + '">' +
      '<div class="dh"><span class="wd">' + WD[i] + (isToday ? ' <span class="chip brand" style="font-size:.65rem;padding:1px 6px">heute</span>' : '') + '</span><span class="dr"><span class="dt num">' + fmtDay(date) + '</span><span class="marks">' + (d.cooked ? '<span class="mark ok" title="gekocht">' + ICON.check + '</span>' : '') + (d.locked ? '<span class="mark lock" title="fest">' + ICON.lock + '</span>' : '') + (hi.length ? '<span class="mark warn" title="' + esc(hi.join(', ')) + '">!</span>' : si.length ? '<span class="mark warn" title="' + esc(si.join(', ')) + '">~</span>' : '') + '</span></span></div>' +
      photoBox(r, 'day-photo') +
      '<div class="nm">' + (r ? esc(r.name) : 'Kein passendes Gericht') + '</div>' +
      (r ? '<div class="mt"><span class="dot" style="background:' + PROTEIN_COLORS[r.protein] + '"></span>' + PROTEIN_LABEL[r.protein] + ' · <span class="num">' + (r.time.a + r.time.c) + ' Min.</span>' + (d.chain ? ' · ' + ICON.link : '') + '</div>' : '') +
      (kid ? '<div class="kidline">' + kid.flag + ' <span>' + esc(kid.name) + '</span></div>' : '') +
      '</button>';
  }).join('');
  renderDetail();
  renderMyKitchen();
  setTimeout(hydratePhotos, 0);
}

function renderDetail() {
  const w = week(); const st = S.settings; const i = Math.min(6, Math.max(0, w.sel || 0)); const d = w.days[i]; const r = R(d.id);
  const el = $('#detail');
  if (!r) { el.innerHTML = '<div class="panel"><h2>Kein passendes Gericht</h2><p class="muted">Die Filter in der Feinplanung lassen für diesen Tag kein Gericht übrig. Lockere Zeit, Geräte oder Allergene.</p></div>'; return; }
  const date = addDays(curMon, i); const hi = hardIssues(r, st); const si = softIssues(r, st, i); const P = portions();
  const simp = simplicity(r); const fav = S.favorites.includes(r.id);
  const ym = youngest(); const tier = tierFor(ym); const kid = st.kidMode !== 'familie' ? kidFor(i) : null;
  const month = curMon.getMonth() + 1; const inSeason = r.season.length && r.season.includes(month);
  const nu = nutriFor(r);
  const extrasOk = Object.keys(EXTRAS).filter(k => extrasFor(r).includes(k)).filter(k => { const x = EXTRAS[k]; if (x.allergens.some(a => st.allergens.includes(a))) return false; if (st.diet === 'vegan') return x.diet === 'vegan'; if (st.diet === 'vegetarisch') return x.diet !== 'alles'; if (st.diet === 'pescetarisch') return x.diet !== 'alles'; return true; });
  const bi = baseIng(r); const nextR = d.chain ? R(w.days[i + 1].id) : null; const nextBi = nextR ? baseIng(nextR) : null;
  const note = S.notes[r.id] || {};
  const kidSelect = st.kidMode !== 'familie' ? '<select data-act="kidsel" data-i="' + i + '" aria-label="Kindergericht wählen">' + KIDS.filter(k => kidOk(k, st)).sort((a, b) => a.land.localeCompare(b.land, 'de')).map(k => '<option value="' + k.id + '"' + (kid && kid.id === k.id ? ' selected' : '') + '>' + k.flag + ' ' + esc(k.land) + ' · ' + esc(k.name) + '</option>').join('') + '</select>' : '';

  el.innerHTML =
    '<div class="panel detail">' +
    '<div class="detail-head">' + photoBox(r, 'big', true) +
    '<div class="titles"><div class="dayline"><span class="eyebrow">' + WD[i] + ' · ' + fmtDay(date) + '</span>' + (d.locked ? chip(ICON.lock + ' fest', 'outline') : '') + (d.cooked ? chip(ICON.check + ' gekocht', 'brand') : '') + (d.chainFrom != null ? chip(ICON.link + ' nutzt die Basis von ' + WD[d.chainFrom], 'brand') : '') + '</div>' +
    '<h2>' + esc(r.name) + '</h2>' +
    '<div class="chips">' + chip(r.flag + ' ' + esc(r.cuisine)) + chip('<span class="dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:' + PROTEIN_COLORS[r.protein] + '"></span> ' + PROTEIN_LABEL[r.protein]) + chip('<span class="num">' + (r.time.a + r.time.c) + '</span> Min.') + (r.wholegrain ? chip('Vollkorn', 'brand') : '') + (isVegan(r) ? chip('vegan', 'brand') : plantBased(r) ? chip('vegetarisch', 'brand') : '') + (inSeason ? chip('Saison', 'brand') : '') +
    hi.map(x => chip('! ' + esc(x), 'crit')).join('') + si.map(x => chip('~ ' + esc(x), 'warn')).join('') + '</div>' +
    '<div class="detail-actions">' +
    '<button type="button" class="btn primary" data-act="cook" data-i="' + i + '">▶ Schritt für Schritt kochen</button>' +
    '<button type="button" class="btn sm" data-act="swap" data-i="' + i + '">' + ICON.swap + ' Tauschen</button>' +
    '<button type="button" class="btn sm" data-act="pick" data-i="' + i + '">' + ICON.list + ' Alle Gerichte</button>' +
    '<button type="button" class="btn sm" data-act="lock" data-i="' + i + '" aria-pressed="' + !!d.locked + '">' + ICON.lock + ' ' + (d.locked ? 'Fest' : 'Festhalten') + '</button>' +
    '<button type="button" class="btn sm" data-act="cooked" data-i="' + i + '" aria-pressed="' + !!d.cooked + '">' + ICON.check + ' ' + (d.cooked ? 'Gekocht' : 'Gekocht?') + '</button>' +
    '<button type="button" class="btn sm" data-act="fav" data-id="' + r.id + '" aria-pressed="' + fav + '">' + (fav ? ICON.heart : ICON.heartO) + ' Favorit</button>' +
    '<a class="btn sm ghost" href="https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(photoKey(r) + ' Gericht') + '" target="_blank" rel="noopener">Bilder im Netz</a>' +
    '</div></div></div>' +

    '<div class="meta">' +
    '<div class="m"><span class="eyebrow">Aktive Zeit</span><b class="num">' + r.time.a + ' Min.</b></div>' +
    '<div class="m"><span class="eyebrow">Garzeit</span><b class="num">' + r.time.c + ' Min.</b></div>' +
    '<div class="m"><span class="eyebrow">Methode</span><b>' + esc(r.method) + '</b></div>' +
    (recipeTemp(r) ? '<div class="m"><span class="eyebrow">Ofen</span><b class="num">' + recipeTemp(r) + ' °C</b></div>' : '') +
    '<div class="m"><span class="eyebrow">Allergene</span><b>' + (r.allergens.length ? r.allergens.map(a => ALLERGEN_LABEL[a]).join(', ') : 'keine typischen') + '</b></div>' +
    '<div class="m"><span class="eyebrow">Einfachheit</span><b><span class="simplicity" aria-label="' + simp + ' von 5">' + [1, 2, 3, 4, 5].map(n => '<i class="' + (n <= simp ? 'on' : '') + '"></i>').join('') + '</span> ' + simp + '/5 · ' + simplicityLabel(simp) + '</b></div>' +
    '<div class="m"><span class="eyebrow">Portionen</span><b class="num">' + fmtNum(P) + '</b></div>' +
    '</div>' +

    '<div class="cols">' +
    '<div><div class="panel-head"><h3>Zutaten</h3><span class="tiny">' + esc(portionsText()) + '</span></div><ul class="ing-list">' +
    r.ing.map(x => '<li class="' + (x.p ? 'pantry' : '') + '"><span>' + esc(x.n) + (x.hint ? '<span class="hint">' + esc(x.hint) + '</span>' : '') + (x.p ? '<span class="hint">Vorrat</span>' : '') + '</span><span class="q">' + fmtQ(x.q * P, x.u) + '</span></li>').join('') + '</ul>' +
    (function () { const all = dayItems(i); const miss = missingItems(all); const hv = (S.have || []).length; return '<div class="panel soft" style="margin-top:12px;padding:12px"><div class="row between"><div><b>Noch einkaufen für ' + WD[i] + '</b><br><span class="small muted">' + (hv ? miss.length + ' von ' + all.length + ' Zutaten fehlen laut „Was ist da?“' : all.length + ' Zutaten; trage unter „Was ist da?“ ein, was ihr habt, dann bleibt nur der Rest') + '</span></div></div>' + (miss.length ? '<div class="chips" style="margin:8px 0">' + miss.map(x => chip(esc(fmtQ(x.q, x.u) + ' ' + short(x.n)), 'outline')).join('') + '</div>' : '<p class="small" style="margin:8px 0;color:var(--brand)">Alles da.</p>') + '<div class="row">' + remindButtons(linesFor(miss), 'day:' + i) + '</div></div>'; })() +
    (bi ? '<div class="panel soft" style="margin-top:12px;padding:12px"><div class="row between"><div><b>Basis für 2 Tage</b><br><span class="small muted">' + esc(BASE_LABEL[r.base]) + ' einmal kochen, ' + (i < 6 ? WD[i + 1] : 'morgen') + ' neu kombinieren.</span></div>' + (i < 6 ? '<button type="button" class="btn sm" data-act="chain" data-i="' + i + '" aria-pressed="' + !!d.chain + '">' + ICON.link + ' ' + (d.chain ? 'Verkettet' : 'Verketten') + '</button>' : '') + '</div>' +
      (d.chain && nextBi ? '<div class="row" style="margin-top:8px;gap:16px"><span class="small"><span class="eyebrow">Heute gesamt</span><br><b class="num">' + fmtQ(bi.q * P + nextBi.q * P, bi.u) + '</b></span><span class="small"><span class="eyebrow">Davon für ' + WD[i + 1] + '</span><br><b class="num">' + fmtQ(nextBi.q * P, nextBi.u) + '</b></span><span class="small muted">' + WD[i + 1] + ': ' + esc(nextR.name) + '</span></div>' : '') + '</div>' : '') +
    '</div>' +
    '<div><div class="panel-head"><h3>Zubereitung</h3><span class="tiny">' + r.steps.length + ' Schritte</span></div><ol class="steps">' + r.steps.map(s => '<li><span>' + esc(s) + '</span></li>').join('') + '</ol>' +
    (r.tipp ? '<p class="small muted" style="margin-top:12px"><b>Tipp:</b> ' + esc(r.tipp) + '</p>' : '') +
    '<p class="small muted" style="margin-top:8px"><b>Tag-2-Idee:</b> ' + esc(leftoverFor(r)) + '</p></div>' +
    '<div class="panel kid"><div class="panel-head"><h3>Fürs Kind</h3>' + (tier ? '<span class="chip kid">' + esc(tier.label.split(' · ')[0]) + '</span>' : '') + '</div>' +
    '<div class="rules">' +
    '<div class="rule"><span class="ic">1</span><div><b>Mild fürs Kind.</b> Kräftige Gewürze und scharfe Toppings erst nach der Kinderportion ergänzen.</div></div>' +
    '<div class="rule"><span class="ic">2</span><div><b>Salz später.</b> Kinderportion vor dem Nachsalzen abnehmen.</div></div>' +
    '<div class="rule"><span class="ic">3</span><div><b>' + (r.kidName ? 'Kinderversion „' + esc(r.kidName) + '“.' : 'Bei diesem Gericht.') + '</b> ' + esc(r.kid) + '</div></div>' +
    (tier ? '<div class="rule"><span class="ic">4</span><div><b>Textur ' + esc(tier.label.split(' · ')[0]) + '.</b> ' + esc(tier.texture) + '</div></div>' : '') +
    '</div>' +
    (kid ? '<div style="margin-top:14px"><div class="eyebrow accent">' + (st.kidMode === 'beides' ? 'Zusätzlich aus der Kinder-Weltküche' : 'Kinderoption aus der Weltküche') + '</div>' +
      '<div class="row between" style="margin-top:6px"><b>' + kid.flag + ' ' + esc(kid.name) + '</b><span class="chip kid num">' + kid.min + ' Min.</span></div>' +
      '<p class="small muted">' + esc(kid.text) + '</p><div class="chips" style="margin:8px 0">' + kid.parts.map(p => chip(esc(p), 'kid')).join('') + '</div>' +
      '<ol class="steps kid small">' + kid.steps.map(s => '<li><span>' + esc(s) + '</span></li>').join('') + '</ol>' +
      '<div class="row" style="margin-top:10px">' + kidSelect + '<button type="button" class="btn sm ghost" data-act="goto" data-view="kinder">Alle Kindergerichte</button></div></div>' : '') +
    '</div>' +
    '</div>' +

    '<div class="cols">' +
    '<div><div class="panel-head"><h3>Nährstoff-Orientierung</h3></div><div class="nutri">' +
    '<div class="n"><span class="eyebrow">Eiweiß</span><b>' + esc(nu.p.join(' · ') || '–') + '</b></div><div class="n"><span class="eyebrow">Ballaststoffe</span><b>' + esc(nu.f.join(' · ') || '–') + '</b></div>' +
    '<div class="n"><span class="eyebrow">Eisen</span><b>' + esc(nu.i.join(' · ') || '–') + '</b></div><div class="n"><span class="eyebrow">Fett</span><b>' + esc(nu.fat.join(' · ') || '–') + '</b></div></div>' +
    '<p class="tiny" style="margin-top:10px">Orientierung anhand der Zutaten, keine berechnete Nährwertanalyse und keine Aussage zur vollständigen Versorgung.</p></div>' +
    (extrasOk.length ? '<div><div class="panel-head"><h3>Optionales Extra-Eiweiß</h3><span class="tiny">für ' + st.adults + ' Erw.</span></div><div class="extras-list">' +
      extrasOk.map(k => { const x = EXTRAS[k]; const on = (d.extras || []).includes(k); return '<label class="extra"><input type="checkbox" data-act="extra" data-i="' + i + '" data-k="' + k + '"' + (on ? ' checked' : '') + '><span class="t">' + esc(x.n) + ' · ' + fmtQ(x.q * st.adults / 2, x.u) + '<span>' + esc(x.note) + '</span></span><span class="p num">≈ ' + Math.round(x.prot * st.adults / 2) + ' g Eiweiß</span></label>'; }).join('') +
      '<p class="tiny">Erst durch Auswahl kommt die Ergänzung auf die Einkaufsliste. Eiweißwerte sind grobe Orientierungen.</p></div></div>' : '') +
    '<div><div class="panel-head"><h3>Notiz und Bewertung</h3>' + ratingHtml(r.id) + '</div><textarea data-act="note" data-id="' + r.id + '" placeholder="Was hat geklappt, was ändert ihr nächstes Mal?">' + esc(note.text || '') + '</textarea>' +
    (note.last ? '<p class="tiny" style="margin-top:6px">Zuletzt gekocht: ' + esc(note.last) + '</p>' : '') + '</div>' +
    '</div>' +

    '<div><div class="panel-head"><h3>Alternativen für ' + WD[i] + '</h3><span class="tiny">passen zu euren Filtern</span></div><div class="alts">' +
    alternatives(i, 3).map(a => '<button type="button" class="alt" data-act="take" data-i="' + i + '" data-id="' + a.id + '">' + photoBox(a, 'thumb') + '<span><b>' + esc(a.name) + '</b><small>' + a.flag + ' ' + esc(a.cuisine) + ' · ' + (a.time.a + a.time.c) + ' Min. · ' + PROTEIN_LABEL[a.protein] + '</small></span></button>').join('') +
    '</div></div>' +
    '</div>';
}

function renderMyKitchen() {
  const favs = S.favorites.map(R).filter(Boolean);
  const diary = S.diary.slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 12);
  $('#my-kitchen').innerHTML =
    '<div class="grid cols-2">' +
    '<div class="panel"><div class="panel-head"><h3>Favoriten</h3><span class="tiny">' + favs.length + '</span></div>' +
    (favs.length ? '<div class="alts">' + favs.map(r => '<button type="button" class="alt" data-act="pickfav" data-id="' + r.id + '">' + photoBox(r, 'thumb') + '<span><b>' + esc(r.name) + '</b><small>' + r.flag + ' ' + esc(r.cuisine) + ' · ' + (r.time.a + r.time.c) + ' Min.</small></span></button>').join('') + '</div><p class="tiny" style="margin-top:8px">Antippen setzt das Gericht auf den gewählten Tag.</p>' : '<p class="muted small">Noch keine Favoriten. Das Herz am Gericht merkt es sich. Favoriten werden beim Planen leicht bevorzugt.</p>') + '</div>' +
    '<div class="panel"><div class="panel-head"><h3>Koch-Tagebuch</h3><span class="tiny">' + S.diary.length + ' Einträge</span></div>' +
    (diary.length ? '<ul class="checklist">' + diary.map(e => { const r = R(e.id); return '<li class="on"><span><span class="num">' + e.date.split('-').reverse().join('.') + '</span> · ' + (r ? esc(r.name) : e.id) + (S.notes[e.id] && S.notes[e.id].stars ? ' · ' + '★'.repeat(S.notes[e.id].stars) : '') + '</span></li>'; }).join('') + '</ul>' : '<p class="muted small">Sobald ihr ein Gericht als gekocht markiert, erscheint es hier. Kürzlich Gekochtes wird drei Wochen lang seltener vorgeschlagen.</p>') + '</div></div>';
}

function renderKinder() {
  const st = S.settings; const w = week(); const ym = youngest(); const tier = tierFor(ym) || AGE_TIERS[3];
  const f = renderKinder.filter || (renderKinder.filter = { region: 'alle', fast: false, q: '' });
  const regions = ['alle'].concat(Array.from(new Set(KIDS.map(k => k.region))).sort((a, b) => a.localeCompare(b, 'de')));
  let list = KIDS.filter(k => kidOk(k, st));
  const hidden = KIDS.length - list.length;
  if (f.region !== 'alle') list = list.filter(k => k.region === f.region);
  if (f.fast) list = list.filter(k => k.min <= 20);
  if (f.q) { const q = f.q.toLowerCase(); list = list.filter(k => (k.land + ' ' + k.name + ' ' + k.text + ' ' + k.parts.join(' ')).toLowerCase().includes(q)); }
  list.sort((a, b) => a.land.localeCompare(b.land, 'de'));
  $('#kinder-intro').innerHTML =
    '<div class="panel kid"><div class="eyebrow accent">Für euer Kind</div><div class="row between" style="margin-top:6px"><h2>' + (ym != null ? esc(tier.label) : 'Ohne Kind eingetragen') + '</h2>' + (ym != null ? '<span class="chip kid num">Portionsfaktor ' + fmtNum(tier.factor) + '</span>' : '<button type="button" class="btn sm" data-act="goto" data-view="feinplanung">Kind eintragen</button>') + '</div>' +
    '<p style="margin-top:8px;max-width:70ch">' + esc(tier.texture) + '</p>' +
    '<div class="agebar" style="margin-top:12px">' + AGE_TIERS.map(t => '<span class="chip kid ' + (t.id === tier.id ? 'cur' : '') + '">' + esc(t.label.split(' · ')[0]) + '</span>').join('') + '</div></div>' +
    '<div class="principles">' + PRINCIPLES.map(p => '<div class="principle"><h4>' + esc(p.t) + '</h4><p class="small muted">' + esc(p.d) + '</p></div>').join('') + '</div>';
  $('#kinder-filter').innerHTML =
    '<div class="row"><div class="chips">' + regions.map(r => '<button type="button" class="chip pick kid" data-act="kreg" data-r="' + esc(r) + '" aria-pressed="' + (f.region === r) + '">' + (r === 'alle' ? 'Alle Regionen' : esc(r)) + '</button>').join('') + '</div>' +
    '<button type="button" class="chip pick kid" data-act="kfast" aria-pressed="' + f.fast + '">≤ 20 Min.</button>' +
    '<input type="search" id="kid-q" placeholder="Suchen: Land, Zutat, Gericht" value="' + esc(f.q) + '" data-act="kq" aria-label="Kindergerichte suchen" style="flex:1;min-width:180px"></div>' +
    (hidden ? '<p class="tiny" style="margin-top:6px">' + hidden + ' Gerichte sind wegen Allergien oder Ernährungsweise ausgeblendet.</p>' : '');
  $('#kinder-grid').innerHTML = list.map(k => {
    const planned = kidPlannedDays(k.id);
    return '<article class="kid-card ' + (planned.length ? 'planned' : '') + '">' +
      '<div class="kh"><span class="land"><span class="fl">' + k.flag + '</span>' + esc(k.land) + '</span><span class="chip num">' + k.min + ' Min.</span></div>' +
      '<h3>' + esc(k.name) + '</h3><p class="small muted">' + esc(k.text) + '</p>' +
      '<div class="parts">' + k.parts.map(p => chip(esc(p), 'kid')).join('') + '</div>' +
      '<div class="small"><span class="eyebrow">Textur</span> ' + esc(k.texture) + '</div>' +
      '<details><summary>Zubereitung, Sicherheit, Zutaten</summary><div class="kv">' +
      '<div><span class="eyebrow">So anrichten</span><br>' + esc(k.serve) + '</div>' +
      '<div><span class="eyebrow">Zubereitung</span><ol class="steps kid small" style="margin-top:6px">' + k.steps.map(s => '<li><span>' + esc(s) + '</span></li>').join('') + '</ol></div>' +
      '<div><span class="eyebrow">Gewürz-Brücke</span><br>' + esc(k.spice) + '</div>' +
      '<div><span class="eyebrow">Zutaten für 1 Kinderportion</span><ul class="ing-list small">' + k.ing.map(x => '<li><span>' + esc(x.n) + '</span><span class="q">' + fmtQ(x.q, x.u) + '</span></li>').join('') + '</ul></div>' +
      '<div><span class="eyebrow">Allergene</span><br>' + (k.allergens.length ? k.allergens.map(a => ALLERGEN_LABEL[a]).join(', ') : 'keine typischen') + '</div>' +
      '</div></details>' +
      '<div class="plan-row">' + (planned.length ? '<span class="chip kid">' + ICON.check + ' ' + planned.map(i => WD[i]).join(', ') + '</span>' : '') +
      '<select data-act="kplan" data-k="' + k.id + '" aria-label="Tag wählen"><option value="">Als Kinderoption am …</option>' + WD.map((n, i) => '<option value="' + i + '">' + n + ' ' + fmtDay(addDays(curMon, i)) + (R(w.days[i].id) ? ' · zu ' + esc(R(w.days[i].id).name.split(' · ')[0].slice(0, 26)) : '') + '</option>').join('') + '</select>' + '</div>' +
      '</article>';
  }).join('') || '<p class="muted">Keine Gerichte passen zu dieser Auswahl.</p>';
  $('#kinder-spices').innerHTML = SPICE_BRIDGES.map(s => '<div class="spice"><b>' + esc(s.s) + '</b><small>' + esc(s.k) + '</small>' + esc(s.d) + '</div>').join('');
  $('#kinder-safety').innerHTML =
    '<div class="panel"><div class="eyebrow accent">Sicher anbieten · ' + esc(tier.label.split(' · ')[0]) + '</div><ul class="checklist" style="margin-top:8px">' + tier.rules.map(r => '<li class="on"><span>' + esc(r) + '</span></li>').join('') + '</ul></div>' +
    '<div class="panel soft"><div class="eyebrow">Wichtig</div><h3 style="margin-top:4px">Orientierung, keine medizinische Einzelberatung.</h3><p class="small muted" style="margin-top:6px">Entwicklung und Kauvermögen unterscheiden sich. Bei Allergien, Schluckproblemen oder Unsicherheit bitte Kinderarztpraxis, Hebamme oder Ernährungsfachkraft einbeziehen.</p></div>';
  renderKidCountries();
}
function countries() {
  const m = new Map();
  RECIPES.forEach(r => { if (!m.has(r.cuisine)) m.set(r.cuisine, { name: r.cuisine, flag: r.flag, region: regionOf(r.cuisine), n: 0 }); m.get(r.cuisine).n++; });
  const list = Array.from(m.values()); list.forEach(c => { if (c.name === 'Alltag') c.flag = '🏠'; if (c.name === 'Weltküche') c.flag = '🌍'; if (c.name === 'Nahost') c.flag = '🧆'; });
  return list.sort((a, b) => REGIONS.indexOf(a.region) - REGIONS.indexOf(b.region) || a.name.localeCompare(b.name, 'de'));
}
function daySelect(act, extra, label) { const w = week(); const cut = s => { s = s.split(' · ')[0]; return s.length > 26 ? s.slice(0, 25) + '…' : s; }; return '<select data-act="' + act + '" ' + (extra || '') + ' aria-label="Tag wählen"><option value="">' + (label || 'Einplanen am …') + '</option>' + WD.map((n, i) => '<option value="' + i + '">' + n + ' ' + fmtDay(addDays(curMon, i)) + (R(w.days[i].id) ? ' · statt ' + esc(cut(R(w.days[i].id).name)) : '') + '</option>').join('') + '</select>'; }
function renderKidCountries() {
  const el = $('#kinder-laender'); if (!el) return; const st = S.settings;
  const cs = countries().filter(c => RECIPES.some(r => r.cuisine === c.name && r.kidName));
  if (!cs.length) { el.innerHTML = ''; return; }
  const state = renderKidCountries.state || (renderKidCountries.state = { c: cs[0].name });
  if (!cs.some(c => c.name === state.c)) state.c = cs[0].name;
  const list = RECIPES.filter(r => r.cuisine === state.c && r.kidName && !hardIssues(r, st).length);
  el.innerHTML = '<div class="panel"><div class="panel-head"><div><div class="eyebrow accent">Kinderversionen der Länderküche</div><h3 style="margin-top:4px">Jedes Länder-Gericht hat eine Kleinkind-Version.</h3></div>' +
    '<select data-act="kidcountry" aria-label="Land wählen">' + cs.map(c => '<option value="' + esc(c.name) + '"' + (c.name === state.c ? ' selected' : '') + '>' + c.flag + ' ' + esc(c.name) + '</option>').join('') + '</select></div>' +
    '<p class="small muted" style="margin-bottom:12px">Die Familie isst das Gericht, das Kind bekommt die mild abgenommene, weich gegarte Version. Einplanen setzt das Gericht auf den gewählten Tag.</p>' +
    (list.length ? '<div class="kids-grid">' + list.map(r => '<article class="kid-card"><div class="kh"><span class="land"><span class="fl">' + r.flag + '</span>' + esc(r.kidName) + '</span><span class="chip num">' + (r.time.a + r.time.c) + ' Min.</span></div><p class="small muted">aus: ' + esc(r.name) + '</p><p class="small">' + esc(r.kid) + '</p><div class="chips">' + (r.allergens.length ? r.allergens.map(a => chip(ALLERGEN_LABEL[a], 'outline')).join('') : chip('keine typischen Allergene', 'outline')) + '</div><div class="plan-row">' + daySelect('planday', 'data-id="' + r.id + '"') + '</div></article>').join('') + '</div>' : '<p class="muted small">Für dieses Land passt mit den aktuellen Filtern kein Gericht.</p>') + '</div>';
}

function renderLaender() {
  const st = S.settings; const state = renderLaender.state || (renderLaender.state = { region: 'alle', country: null, q: '', showKid: false, limit: 60 });
  const cs = countries(); const regions = REGIONS.filter(r => cs.some(c => c.region === r));
  let head = '<div class="view-head"><div><div class="eyebrow">Weltküche</div><h2>Pro Land die 15 bekanntesten Gerichte, gesund und familientauglich.</h2><p class="lead">' + RECIPES.length + ' Gerichte aus ' + cs.length + ' Küchen, jedes mit Kinderversion. Antippen zeigt die Liste eines Landes, „Einplanen“ setzt ein Gericht auf einen Wochentag.</p></div></div>' +
    '<div class="row"><input type="search" id="land-q" data-act="landq" value="' + esc(state.q) + '" placeholder="Gericht suchen, zum Beispiel Curry, Lachs, Linsen" aria-label="Gericht suchen" style="flex:1;min-width:200px">' +
    '<div class="chips">' + ['alle'].concat(regions).map(r => '<button type="button" class="chip pick" data-act="landreg" data-r="' + r + '" aria-pressed="' + (state.region === r) + '">' + (r === 'alle' ? 'Alle Regionen' : r) + '</button>').join('') + '</div></div>';
  $('#laender-head').innerHTML = head;
  const card = (r, extraLine) => '<article class="alt" style="grid-template-columns:64px 1fr;cursor:default">' + photoBox(r, 'thumb') + '<span style="min-width:0"><b>' + esc(r.name) + '</b><small>' + r.flag + ' ' + esc(r.cuisine) + ' · ' + (r.time.a + r.time.c) + ' Min. · ' + PROTEIN_LABEL[r.protein] + (r.allergens.length ? ' · ' + r.allergens.map(a => ALLERGEN_LABEL[a]).join(', ') : '') + '</small>' + (extraLine || '') + '<span class="row" style="margin-top:8px">' + daySelect('planday', 'data-id="' + r.id + '"') + '<button type="button" class="btn icon sm ghost" data-act="fav" data-id="' + r.id + '" aria-pressed="' + S.favorites.includes(r.id) + '" aria-label="Favorit">' + (S.favorites.includes(r.id) ? ICON.heart : ICON.heartO) + '</button></span></span></article>';
  if (state.q.trim()) {
    const q = state.q.trim().toLowerCase();
    const hits = RECIPES.filter(r => (r.name + ' ' + r.cuisine + ' ' + r.veg.join(' ') + ' ' + (r.kidName || '')).toLowerCase().includes(q) && !hardIssues(r, st).length);
    $('#laender-grid').innerHTML = '<p class="muted small">' + hits.length + ' Treffer' + (hits.length > state.limit ? ', die ersten ' + state.limit : '') + '</p><div class="alts" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr))">' + hits.slice(0, state.limit).map(r => card(r, r.kidName ? '<small class="small" style="color:var(--accent)">Kind: ' + esc(r.kidName) + '</small>' : '')).join('') + '</div>' + (hits.length > state.limit ? '<p style="margin-top:10px"><button type="button" class="btn sm" data-act="landmore">Mehr anzeigen</button></p>' : '');
    $('#laender-country').innerHTML = ''; return;
  }
  const shown = cs.filter(c => state.region === 'alle' || c.region === state.region);
  let grid = '';
  regions.filter(r => state.region === 'alle' || r === state.region).forEach(reg => {
    const list = shown.filter(c => c.region === reg); if (!list.length) return;
    grid += '<div class="eyebrow" style="margin:14px 0 8px">' + reg + '</div><div class="chips">' + list.map(c => '<button type="button" class="chip pick" style="font-size:.9rem;padding:6px 12px" data-act="landpick" data-c="' + esc(c.name) + '" aria-pressed="' + (state.country === c.name) + '">' + c.flag + ' ' + esc(c.name) + ' <span class="num muted">' + c.n + '</span></button>').join('') + '</div>';
  });
  $('#laender-grid').innerHTML = grid;
  if (!state.country || !cs.some(c => c.name === state.country)) state.country = (shown[0] || cs[0] || {}).name || null;
  const c = cs.find(x => x.name === state.country);
  if (!c) { $('#laender-country').innerHTML = ''; return; }
  const list = RECIPES.filter(r => r.cuisine === c.name); const okList = list.filter(r => !hardIssues(r, st).length);
  $('#laender-country').innerHTML = '<div class="panel"><div class="panel-head"><h2>' + c.flag + ' ' + esc(c.name) + '</h2><div class="row"><span class="chip num">' + okList.length + ' von ' + list.length + ' passen zu euren Filtern</span><button type="button" class="btn sm" data-act="landkid" aria-pressed="' + state.showKid + '">Kinderversionen zeigen</button></div></div>' +
    '<div class="alts" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr))">' + okList.map(r => card(r, state.showKid && r.kidName ? '<small class="small" style="display:block;margin-top:4px;color:var(--accent)"><b>' + esc(r.kidName) + ':</b> ' + esc(r.kid) + '</small>' : (r.kidName ? '<small class="small" style="color:var(--accent)">Kind: ' + esc(r.kidName) + '</small>' : ''))).join('') + '</div>' +
    (list.length > okList.length ? '<p class="tiny" style="margin-top:10px">Ausgeblendet wegen Allergien, Ernährungsweise oder Geräten: ' + list.filter(r => hardIssues(r, st).length).map(r => esc(r.name.split(' · ')[0])).join(', ') + '</p>' : '') + '</div>';
}

function renderVorrat() {
  const st = S.settings; const state = renderVorrat.state || (renderVorrat.state = { limit: 40 });
  const have = S.have || [];
  const quick = ['Kartoffeln','Reis','Nudeln','Eier','Tomaten','Zwiebel','Karotten','Brokkoli','Zucchini','Paprika','Spinat','Kichererbsen','Linsen','Bohnen','Tofu','Hähnchen','Lachs','Hackfleisch','Feta','Joghurt','Kürbis','Erbsen','Mais','Kokosmilch','Quinoa','Couscous'];
  $('#vorrat-head').innerHTML = '<div class="view-head"><div><div class="eyebrow">Was ist da?</div><h2>Zutaten eintragen, passende Gerichte finden, in die Woche einplanen.</h2><p class="lead">Die Liste sortiert alle ' + RECIPES.length + ' Gerichte danach, wie viele Zutaten ihr schon im Haus habt. Öl und Gewürze zählen nicht mit.</p></div></div>' +
    '<div class="panel"><form class="row" data-act="haveadd" style="margin-bottom:10px"><input type="text" id="have-in" list="have-list" placeholder="Zutat eintippen, zum Beispiel Kartoffeln" aria-label="Zutat" style="flex:1;min-width:200px" autocomplete="off"><datalist id="have-list">' + allIngredientNames().map(n => '<option value="' + esc(n) + '">').join('') + '</datalist><button type="submit" class="btn sm primary">' + ICON.plus + ' Hinzufügen</button>' + (have.length ? '<button type="button" class="btn sm ghost" data-act="haveclear">Alle entfernen</button>' : '') + '</form>' +
    '<div class="chips" style="margin-bottom:10px">' + (have.length ? have.map(h => '<span class="chip brand">' + esc(h) + ' <button type="button" class="rm" data-act="haverm" data-h="' + esc(h) + '" aria-label="' + esc(h) + ' entfernen" style="appearance:none;border:0;background:none;color:inherit;cursor:pointer;padding:0 0 0 4px;display:inline-flex">' + ICON.x + '</button></span>').join('') : '<span class="muted small">Noch nichts eingetragen.</span>') + '</div>' +
    '<div class="eyebrow">Schnell hinzufügen</div><div class="chips" style="margin-top:6px">' + quick.filter(q => !have.some(h => norm(h) === norm(q))).map(q => '<button type="button" class="chip pick" data-act="havequick" data-h="' + q + '">' + q + '</button>').join('') + '</div>' +
    '<label class="switch" style="margin-top:10px;border:0"><input type="checkbox" data-act="toggle-have"' + (st.preferHave ? ' checked' : '') + '><span class="sw"></span><span class="txt"><b>Beim Wochenplan bevorzugen</b><span>Gerichte, die zu euren Vorräten passen, werden beim automatischen Planen höher bewertet.</span></span></label></div>';
  if (!have.length) { $('#vorrat-list').innerHTML = '<p class="muted">Tragt zwei, drei Zutaten ein. Dann erscheinen hier die Gerichte, die am besten dazu passen.</p>'; return; }
  const scored = RECIPES.filter(r => !hardIssues(r, st).length).map(r => ({ r, m: haveMatch(r) })).filter(x => x.m.ok.length > 0)
    .sort((a, b) => b.m.pct - a.m.pct || a.m.missing.length - b.m.missing.length || (a.r.time.a + a.r.time.c) - (b.r.time.a + b.r.time.c));
  $('#vorrat-list').innerHTML = '<p class="muted small">' + scored.length + ' Gerichte nutzen mindestens eine eurer Zutaten' + (scored.length > state.limit ? ', die besten ' + state.limit + ' zuerst' : '') + '.</p>' +
    '<div class="alts" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),1fr))">' + scored.slice(0, state.limit).map(x => { const r = x.r, m = x.m; const pct = Math.round(m.pct * 100);
      return '<article class="alt" style="grid-template-columns:64px 1fr;cursor:default;align-items:start">' + photoBox(r, 'thumb') + '<span style="min-width:0"><b>' + esc(r.name) + '</b><small>' + r.flag + ' ' + esc(r.cuisine) + ' · ' + (r.time.a + r.time.c) + ' Min. · ' + PROTEIN_LABEL[r.protein] + '</small>' +
        '<div class="meter ' + (pct === 100 ? 'ok' : '') + '" style="margin-top:6px"><div class="lbl"><span>' + m.ok.length + ' von ' + m.total + ' Zutaten da</span><b class="num">' + pct + ' %</b></div><div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
        (m.missing.length ? '<small class="small" style="display:block;margin-top:6px"><span class="eyebrow">Fehlt</span> ' + m.missing.map(i => esc(short(i.n))).join(', ') + '</small>' : '<small class="small" style="display:block;margin-top:6px;color:var(--brand)">Alles da.</small>') +
        '<span class="row" style="margin-top:8px">' + daySelect('planday', 'data-id="' + r.id + '"') + '</span></span></article>'; }).join('') + '</div>' +
    (scored.length > state.limit ? '<p style="margin-top:10px"><button type="button" class="btn sm" data-act="havemore">Mehr anzeigen</button></p>' : '');
}


function renderEinkauf() {
  const w = week(); const st = S.settings; const items = shoppingItems();
  const main = items.filter(i => !i.p); const done = main.filter(i => w.checked.includes(i.key)).length;
  $('#einkauf-head').innerHTML =
    '<div class="row between"><div><h2>Einkaufsliste</h2><p class="muted small">' + esc(portionsText()) + (st.kidMode !== 'familie' && eatingKids().length ? ' · Kindergerichte für ' + eatingKids().length + (eatingKids().length === 1 ? ' Kind' : ' Kinder') + ' enthalten' : '') + '</p></div>' +
    '<div class="row"><span class="chip ' + (done === main.length && main.length ? 'brand' : '') + ' num">' + done + ' / ' + main.length + ' erledigt</span></div></div>' +
    '<div class="row" style="margin-top:12px">' +
    '<button type="button" class="btn sm" data-act="copyshop">' + ICON.copy + ' Als Text kopieren</button>' +
    (IS_ARTIFACT ? '' : '<button type="button" class="btn sm" data-act="print">' + ICON.print + ' Drucken</button>') +
    '<button type="button" class="btn sm" data-act="hidedone" aria-pressed="' + !!st.hideDone + '">Abgehakte ausblenden</button>' +
    '<button type="button" class="btn sm" data-act="showpantry" aria-pressed="' + !!st.showPantry + '">Öl und Gewürze zeigen</button>' +
    '<button type="button" class="btn sm ghost" data-act="uncheck">Haken zurücksetzen</button></div>' +
    '<div class="row" style="margin-top:10px">' + remindButtons(linesFor(openItems()), 'week') + '<span class="tiny">' + openItems().length + ' offene Einträge</span></div>' +
    '<div style="margin-top:10px">' + remindHelp() + '</div>';
  $('#shop').innerHTML = CATEGORY_ORDER.map(c => {
    if (c === 'gewuerz' && !st.showPantry) return '';
    let list = items.filter(i => i.c === c); if (!list.length) return '';
    if (st.hideDone) list = list.filter(i => !w.checked.includes(i.key)); if (!list.length) return '';
    list.sort((a, b) => a.n.localeCompare(b.n, 'de'));
    return '<section class="shop-group"><h3>' + CATEGORY_LABEL[c] + '<span class="num">' + list.length + '</span></h3>' + list.map(i => {
      const on = w.checked.includes(i.key);
      return '<label class="shop-item ' + (on ? 'done' : '') + '"><input type="checkbox" data-act="check" data-key="' + esc(i.key) + '"' + (on ? ' checked' : '') + '><span class="t"><span class="n">' + esc(i.n) + '</span><br><span class="d">' + (i.days.size ? Array.from(i.days).sort().map(d => WDS[d]).join(' · ') : 'eigener Eintrag') + (i.hint ? ' · ' + esc(i.hint) : '') + '</span></span><span class="q">' + fmtQ(i.q, i.u) + '</span>' + (i.own ? '<button type="button" class="rm" data-act="rmown" data-key="' + esc(i.key) + '" aria-label="Eintrag entfernen">' + ICON.x + '</button>' : '') + '</label>';
    }).join('') + '</section>';
  }).join('');
  $('#shop-add').innerHTML = '<div class="panel soft"><div class="eyebrow">Eigenes hinzufügen</div><form class="addrow" style="margin-top:8px" data-act="addown"><input type="text" id="own-n" placeholder="Zum Beispiel Haferflocken" aria-label="Artikel" required><input type="number" id="own-q" placeholder="Menge" min="0" step="any" aria-label="Menge" value="1"><select id="own-u" aria-label="Einheit"><option>Stk.</option><option>g</option><option>ml</option><option>Pack.</option><option>Bund</option></select><select id="own-c" aria-label="Kategorie">' + CATEGORY_ORDER.filter(c => c !== 'gewuerz').map(c => '<option value="' + c + '">' + CATEGORY_LABEL[c] + '</option>').join('') + '</select><button type="submit" class="btn sm primary">' + ICON.plus + ' Hinzufügen</button></form></div>';
}

function renderVorbereitung() {
  ensurePlan();
  const w = week(); const st = S.settings; const P = portions();
  const dayIng = new Map();
  w.days.forEach((d, i) => { const r = R(d.id); if (!r) return; r.ing.filter(x => x.c === 'gemuese').forEach(x => { if (!dayIng.has(x.n)) dayIng.set(x.n, new Set()); dayIng.get(x.n).add(i); }); });
  const multi = Array.from(dayIng.entries()).filter(e => e[1].size >= 2).sort((a, b) => b[1].size - a[1].size);
  const bases = Array.from(new Set(w.days.map(d => R(d.id)).filter(Boolean).map(r => r.base).filter(Boolean)));
  const t1 = Math.min(8, Math.max(3, multi.length * 2)), t2 = bases.length ? 5 : 0, t3 = 4;
  $('#prep-start').innerHTML =
    '<div class="panel"><div class="panel-head"><div><div class="eyebrow">Gesund und einfach</div><h2>Einmal kurz vorbereiten, die ganze Woche leichter kochen.</h2></div><span class="chip brand num">' + (t1 + t2 + t3) + ' Min.</span></div>' +
    '<p class="muted small" style="margin-bottom:14px">Die Vorschläge beziehen sich nur auf diesen Wochenplan. Eine gekochte Basis wird höchstens bis zum direkt folgenden Tag genutzt.</p>' +
    '<div class="timeline">' +
    '<div class="tl"><span class="t">' + t1 + ' Min.</span><div><b>Mehrfach genutzte Komponenten ordnen</b><span class="small muted">' + (multi.length ? multi.slice(0, 5).map(e => e[0]).join(', ') + ' nach Tagen bündeln; nur festes frisches Gemüse für die nächsten 2 bis 3 Tage waschen und abgedeckt kalt stellen.' : 'Diese Woche wiederholt sich kaum Gemüse. Frisches erst am Kochtag waschen.') + '</span></div></div>' +
    (t2 ? '<div class="tl"><span class="t">' + t2 + ' Min.</span><div><b>Trockene Beilagen portionieren</b><span class="small muted">' + bases.map(b => BASE_LABEL[b]).join(', ') + ' tageweise abwiegen. Reis bewusst noch nicht vorkochen.</span></div></div>' : '') +
    '<div class="tl"><span class="t">' + t3 + ' Min.</span><div><b>Milde Würzbasis mischen</b><span class="small muted">Kräuter und milde Gewürze ohne Salz vormischen; Salz und Schärfe bleiben für den Erwachsenenteller.</span></div></div>' +
    '</div></div>';
  $('#prep-reuse').innerHTML =
    '<div class="panel"><div class="panel-head"><h3>Zutaten clever nutzen</h3><span class="chip num">' + multi.length + '</span></div>' +
    (multi.length ? '<ul class="reuse">' + multi.map(e => '<li><b>' + esc(e[0]) + '</b><span class="chips">' + Array.from(e[1]).sort().map(i => chip(WD[i])).join('') + '</span></li>').join('') + '</ul>' : '<p class="muted small">Kein Gemüse kommt an mehreren Tagen vor.</p>') + '</div>' +
    '<div class="panel"><div class="panel-head"><h3>1 Basis → 2 Gerichte</h3></div><p class="small muted">Im Tagesgericht „Basis für 2 Tage“ verketten. Das Gericht am Folgetag wechselt dann automatisch zu einem mit derselben Basis.</p><ul class="checklist" style="margin-top:10px">' +
    w.days.map((d, i) => { const r = R(d.id); if (!r || !r.base || i >= 6) return ''; const used = new Set(w.days.map(x => x.id)); const possible = d.chain || RECIPES.some(x => x.base === r.base && !used.has(x.id) && !hardIssues(x, st).length); return '<li class="' + (d.chain ? 'on' : '') + '"><span><b>' + WD[i] + '</b> · ' + BASE_LABEL[r.base] + (d.chain ? ' → ' + WD[i + 1] + ' verkettet' : possible ? ' <button type="button" class="btn sm ghost" data-act="chain" data-i="' + i + '">verketten</button>' : ' · kein zweites Gericht frei') + '</span></li>'; }).join('') + '</ul></div>';
  $('#prep-rest').innerHTML =
    '<div class="panel"><div class="panel-head"><h3>Tag-2-Ideen für Reste</h3></div><ul class="checklist">' + w.days.map((d, i) => { const r = R(d.id); return r ? '<li class="on"><span><b>' + WD[i] + ':</b> ' + esc(leftoverFor(r)) + '</span></li>' : ''; }).join('') + '</ul><p class="tiny" style="margin-top:8px">Reste vollständig durcherhitzen und innerhalb von zwei Tagen verbrauchen.</p></div>' +
    '<div class="panel"><div class="panel-head"><h3>Notfallgerichte aus dem Vorrat</h3></div><ul class="checklist">' + EMERGENCY.map(e => '<li><span><b class="num">' + e.min + ' Min. · ' + e.base + ' Grundzutaten</b><br>' + esc(e.n) + '<br><span class="tiny">' + esc(e.parts.join(' · ')) + '</span></span></li>').join('') + '</ul>' +
    '<div class="eyebrow" style="margin-top:14px">Vorrat prüfen</div><div class="chips" style="margin-top:6px">' + PANTRY_CHECK.map(p => '<button type="button" class="chip pick" data-act="pantry" data-p="' + esc(p) + '" aria-pressed="' + S.pantry.includes(p) + '">' + esc(p) + '</button>').join('') + '</div><p class="tiny" style="margin-top:6px">Angetippt heißt: ist da. Öl, Wasser und trockene Gewürze werden als Vorrat separat mitgeführt.</p></div>';
}

function renderFeinplanung() {
  const st = S.settings; const tg = targets(st);
  const seg = (act, opts, cur, extra) => '<div class="seg" ' + (extra || '') + '>' + opts.map(o => '<button type="button" data-act="' + act + '" data-v="' + o.v + '" aria-pressed="' + (String(cur) === String(o.v)) + '">' + o.l + '</button>').join('') + '</div>';
  const stepper = (key, val, min, max) => '<div class="stepper"><button type="button" data-act="step" data-key="' + key + '" data-d="-1" aria-label="weniger">−</button><span class="val">' + val + '</span><button type="button" data-act="step" data-key="' + key + '" data-d="1" aria-label="mehr">+</button></div>';
  const sw = (key, label, help) => '<label class="switch"><input type="checkbox" data-act="toggle" data-key="' + key + '"' + (st[key] ? ' checked' : '') + '><span class="sw"></span><span class="txt"><b>' + label + '</b><span>' + help + '</span></span></label>';
  const dev = (key, label, help) => '<label class="switch"><input type="checkbox" data-act="device" data-key="' + key + '"' + (st.devices[key] ? ' checked' : '') + '><span class="sw"></span><span class="txt"><b>' + label + '</b><span>' + help + '</span></span></label>';
  const times = [15, 20, 30, 45, 60].map(t => ({ v: t, l: t }));
  $('#settings').innerHTML =
    '<div class="panel"><div class="eyebrow">Haushalt</div><h3 style="margin-top:4px">Wer isst mit?</h3>' +
    '<div class="field"><span class="lab">Erwachsene</span>' + stepper('adults', st.adults, 1, 8) + '</div>' +
    '<div class="field"><span class="lab">Kinder</span><div class="kidrows">' + st.kids.map((k, i) => { const t = tierFor(k.age); return '<div class="kidrow"><input type="number" min="0" max="216" value="' + k.age + '" data-act="kidage" data-i="' + i + '" aria-label="Alter in Monaten"><span class="age">Monate · ' + ageText(k.age) + (t ? ' · ' + esc(t.label.split(' · ')[0]) + ' · Faktor ' + fmtNum(t.factor) : ' · noch Milch') + '</span><button type="button" class="btn icon sm ghost" data-act="kidrm" data-i="' + i + '" aria-label="Kind entfernen">' + ICON.x + '</button></div>'; }).join('') + '</div><button type="button" class="btn sm" data-act="kidadd" style="justify-self:start;margin-top:6px">' + ICON.plus + ' Kind hinzufügen</button><span class="help">Alter in Monaten. Daraus folgen Portionsfaktor, Textur und Sicherheitsregeln.</span></div>' +
    '<div class="field"><span class="lab">Extra-Portionen für Reste</span>' + stepper('extraPortions', st.extraPortions, 0, 4) + '<span class="help">Zum Beispiel fürs Mittagessen am nächsten Tag. Aktuell: ' + esc(portionsText()) + '</span></div>' +
    '<div class="field"><span class="lab">Kinderoption</span>' + seg('kidmode', [{ v: 'welt', l: 'Weltküche-Gericht' }, { v: 'familie', l: 'Vom Familiengericht' }, { v: 'beides', l: 'Beides zeigen' }], st.kidMode) + '<span class="help">Weltküche: das Kind bekommt pro Tag ein eigenes kleines Gericht, die Zutaten landen auf der Einkaufsliste. Vom Familiengericht: das Kind isst mild abgenommen mit und zählt bei den Portionen.</span></div>' +
    '</div>' +

    '<div class="panel"><div class="eyebrow">Balance</div><h3 style="margin-top:4px">Was soll die Woche können?</h3>' +
    '<div class="field"><span class="lab">Ernährungsweise</span>' + seg('diet', [{ v: 'alles', l: 'Alles' }, { v: 'pescetarisch', l: 'Pescetarisch' }, { v: 'vegetarisch', l: 'Vegetarisch' }, { v: 'vegan', l: 'Vegan' }], st.diet) + '</div>' +
    (tg.fish > 0 || st.diet === 'alles' || st.diet === 'pescetarisch' ? '<div class="field"><span class="lab">Fisch pro Woche</span>' + stepper('fish', st.fish, 0, 3) + '</div>' : '') +
    '<div class="field"><span class="lab">Hülsenfrüchte als Hauptprotein</span>' + stepper('legumes', st.legumes, 0, 7) + '<span class="help">Bohnen, Linsen oder Kichererbsen.</span></div>' +
    '<div class="field"><span class="lab">Mindestens pflanzliche Tage</span>' + stepper('plant', st.plant, 0, 7) + '<span class="help">Tage ohne Fleisch und Fisch.</span></div>' +
    (st.diet === 'alles' ? '<div class="field"><span class="lab">Fleisch höchstens</span>' + stepper('meatMax', st.meatMax, 0, 7) + '</div>' : '') +
    sw('seasonal', 'Saisonal bevorzugen', 'Gerichte mit Gemüse der Saison werden bevorzugt (' + MONTHS[curMon.getMonth()] + ').') +
    sw('photos', 'Fotos aus Wikipedia laden', 'Zeigt beim Anzeigen ein passendes Foto aus Wikipedia (frei lizenziert, Quelle verlinkt). Ohne Foto bleibt die Teller-Illustration.' + (IS_ARTIFACT ? ' In dieser Vorschau sind externe Bilder gesperrt; in der installierten Version funktioniert es.' : '')) +
    '</div>' +

    '<div class="panel"><div class="eyebrow">Allergien und No-Gos</div><h3 style="margin-top:4px">Was bleibt draußen?</h3>' +
    '<div class="field"><span class="lab">Allergene ausschließen</span><div class="chips">' + Object.keys(ALLERGEN_LABEL).map(a => '<button type="button" class="chip pick" data-act="allergen" data-a="' + a + '" aria-pressed="' + st.allergens.includes(a) + '">' + ALLERGEN_LABEL[a] + '</button>').join('') + '</div><span class="help">Gerichte mit diesen Allergenen werden nicht geplant und in der Kinderküche ausgeblendet.</span></div>' +
    '<div class="field"><label for="dislikes">Mag niemand (Zutaten, mit Komma)</label><input type="text" id="dislikes" data-act="dislikes" value="' + esc(st.dislikes) + '" placeholder="zum Beispiel Pilze, Rosenkohl"></div>' +
    '</div>' +

    '<div class="panel"><div class="eyebrow">Zeit und Aufwand</div><h3 style="margin-top:4px">Wie viel Zeit ist da?</h3>' +
    '<div class="field"><span class="lab">Höchstens Minuten werktags</span>' + seg('timeweek', times, st.timeWeek) + '</div>' +
    '<div class="field"><span class="lab">Höchstens Minuten am Wochenende</span>' + seg('timeweekend', times, st.timeWeekend) + '</div>' +
    sw('lowChop', 'Wenig Schneiden', 'Bevorzugt Gerichte mit wenig Schneidearbeit.') +
    sw('oneVessel', 'Nur ein Gefäß', 'Ein Topf, eine Pfanne oder ein Blech.') +
    sw('base3', 'Höchstens 3 Grundzutaten', 'Einfache Gerichte mit wenigen Hauptkomponenten.') +
    '<span class="help">Zeit und Aufwand sind weiche Ziele: Passt nichts anderes, wird ein Gericht trotzdem geplant und mit ~ markiert.</span>' +
    '</div>' +

    '<div class="panel"><div class="eyebrow">Küche</div><h3 style="margin-top:4px">Welche Geräte habt ihr?</h3><p class="help">Herd mit Topf und Pfanne ist immer dabei.</p>' +
    dev('ofen', 'Backofen', 'Ofenblech-Gerichte, Aufläufe.') + dev('airfryer', 'Airfryer', 'Knuspriges Gemüse in kurzer Zeit.') + dev('mikrowelle', 'Mikrowelle', 'Zum Erwärmen von Resten.') + dev('maschine', 'Küchenmaschine', 'Zerkleinern, Reiben, Thermomix-Art.') + dev('slowcooker', 'Slow Cooker', 'Lange, unbeaufsichtigt garen.') +
    '</div>' +

    '<div class="panel"><div class="eyebrow">Daten</div><h3 style="margin-top:4px">Sichern und zurücksetzen</h3><p class="help">Alles bleibt in diesem Browser. Mit „Kopieren“ bekommt ihr einen Text, den ihr auf einem anderen Gerät einlesen könnt.</p>' +
    '<div class="row" style="margin-top:10px"><button type="button" class="btn sm" data-act="export">' + ICON.copy + ' Daten kopieren</button><button type="button" class="btn sm" data-act="importshow">Daten einlesen</button><button type="button" class="btn sm danger" data-act="reset">' + (renderFeinplanung.confirm ? 'Wirklich alles löschen?' : 'Alles zurücksetzen') + '</button></div>' +
    '<div id="import-box" ' + (renderFeinplanung.showImport ? '' : 'hidden') + ' style="margin-top:10px"><textarea id="import-text" placeholder="Hier den kopierten Text einfügen"></textarea><button type="button" class="btn sm primary" style="margin-top:6px" data-act="import">Einlesen</button></div>' +
    '<p class="tiny" style="margin-top:10px">' + RECIPES.length + ' Familiengerichte · ' + KIDS.length + ' Kindergerichte · Woche KW ' + isoWeek(curMon) + '</p></div>';
}

function renderWissen() {
  const month = curMon.getMonth() + 1;
  $('#wissen-know').innerHTML = KNOWLEDGE.map(k => '<div class="k"><h4>' + esc(k.t) + '</h4><p class="small muted">' + esc(k.d) + '</p></div>').join('');
  $('#wissen-season').innerHTML = Object.keys(SEASON).map(m => '<div class="mo ' + (Number(m) === month ? 'cur' : '') + '"><b>' + MONTHS[m - 1] + '</b>' + SEASON[m].join(', ') + '</div>').join('');
  $('#wissen-safety').innerHTML = AGE_TIERS.map(t => '<div class="panel"><div class="eyebrow accent">' + esc(t.label) + '</div><p class="small" style="margin:6px 0 8px">' + esc(t.texture) + '</p><ul class="checklist">' + t.rules.map(r => '<li class="on"><span>' + esc(r) + '</span></li>').join('') + '</ul></div>').join('');
}

function render() {
  ensurePlan();
  renderHeader();
  setTimeout(hydratePhotos, 0);
  switch (S.view) {
    case 'woche': renderWoche(); break;
    case 'laender': renderLaender(); break;
    case 'vorrat': renderVorrat(); break;
    case 'kinder': renderKinder(); break;
    case 'einkauf': renderEinkauf(); break;
    case 'vorbereitung': renderVorbereitung(); break;
    case 'feinplanung': renderFeinplanung(); break;
    case 'wissen': renderWissen(); break;
  }
}
function goto(view) { if (!VIEWS.includes(view)) view = 'woche'; S.view = view; save(); try { if (location.hash.slice(1) !== view) history.replaceState(null, '', '#' + view); } catch (e) {} render(); window.scrollTo({ top: 0, behavior: 'auto' }); }

/* ---------- Auswahl-Dialog ---------- */
function openPicker(i) {
  const dlg = $('#picker'); dlg.dataset.i = i; $('#picker-q').value = ''; fillPicker(); if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
}
function fillPicker(more) {
  const dlg = $('#picker'); const i = Number(dlg.dataset.i); const st = S.settings; const q = $('#picker-q').value.trim().toLowerCase(); const w = week(); const used = new Set(w.days.map(d => d.id));
  const f = fillPicker.state || (fillPicker.state = { land: '', prot: 'alle', limit: 60 }); if (!more) f.limit = 60; else f.limit += 60;
  const landSel = $('#picker-land'); if (landSel && !landSel.options.length) landSel.innerHTML = '<option value="">Alle Länder</option>' + countries().map(c => '<option value="' + esc(c.name) + '">' + c.flag + ' ' + esc(c.name) + '</option>').join('');
  let list = RECIPES.filter(r => !hardIssues(r, st).length);
  if (f.land) list = list.filter(r => r.cuisine === f.land);
  if (f.prot === 'pflanzlich') list = list.filter(plantBased); else if (f.prot === 'fisch') list = list.filter(r => r.protein === 'fisch'); else if (f.prot === 'fleisch') list = list.filter(isMeat); else if (f.prot === 'schnell') list = list.filter(r => r.time.a + r.time.c <= 20);
  if (q) list = list.filter(r => (r.name + ' ' + r.cuisine + ' ' + r.veg.join(' ') + ' ' + PROTEIN_LABEL[r.protein] + ' ' + (r.kidName || '')).toLowerCase().includes(q));
  list.sort((a, b) => softIssues(a, st, i).length - softIssues(b, st, i).length || a.name.localeCompare(b.name, 'de'));
  $$('#picker-prot button').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === f.prot));
  $('#picker-list').innerHTML = (list.slice(0, f.limit).map(r => { const si = softIssues(r, st, i); return '<button type="button" class="alt" data-act="take" data-i="' + i + '" data-id="' + r.id + '">' + plateSVG(r) + '<span><b>' + esc(r.name) + '</b><small>' + r.flag + ' ' + esc(r.cuisine) + ' · ' + (r.time.a + r.time.c) + ' Min. · ' + PROTEIN_LABEL[r.protein] + (used.has(r.id) ? ' · schon in dieser Woche' : '') + '</small></span><span class="chips">' + (si.length ? chip('~ ' + esc(si[0]), 'warn') : '') + (S.favorites.includes(r.id) ? chip(ICON.heart, 'brand') : '') + '</span></button>'; }).join('') || '<p class="muted">Nichts gefunden.</p>') +
    (list.length > f.limit ? '<button type="button" class="btn sm" data-act="pickermore">Mehr anzeigen (' + (list.length - f.limit) + ' weitere)</button>' : '');
  $('#picker-count').textContent = list.length + ' Gerichte';
  setTimeout(hydratePhotos, 0);
}

/* ---------- Ereignisse ---------- */
function copyText(txt, okMsg) {
  const done = () => toast(okMsg || 'Kopiert');
  const fallback = () => { const ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) { toast('Kopieren nicht möglich, Text markieren und kopieren'); } document.body.removeChild(ta); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, fallback); else fallback();
}
function clampStep(key, d) {
  const st = S.settings; const lim = { adults: [1, 8], extraPortions: [0, 4], fish: [0, 3], legumes: [0, 7], plant: [0, 7], meatMax: [0, 7] }[key];
  st[key] = Math.min(lim[1], Math.max(lim[0], st[key] + d));
}
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const act = el.dataset.act; const w = week(); const st = S.settings; const i = el.dataset.i != null ? Number(el.dataset.i) : null;
  switch (act) {
    case 'goto': goto(el.dataset.view); break;
    case 'sel': w.sel = i; save(); renderWoche(); { const det = $('#detail'); if (window.innerWidth < 900 && det) det.scrollIntoView({ behavior: 'smooth', block: 'start' }); } break;
    case 'swap': { const alts = alternatives(i, 1); if (!alts.length) { toast('Keine Alternative frei'); break; } setDay(i, alts[0].id); break; }
    case 'take': { const dlg = $('#picker'); if (dlg.open) dlg.close(); w.sel = i; setDay(i, el.dataset.id); break; }
    case 'pickfav': setDay(w.sel || 0, el.dataset.id); toast('Auf ' + WD[w.sel || 0] + ' gesetzt'); break;
    case 'pick': openPicker(i); break;
    case 'lock': w.days[i].locked = !w.days[i].locked; save(); render(); break;
    case 'cooked': { const d = w.days[i]; d.cooked = !d.cooked; const date = iso(addDays(curMon, i)); S.diary = S.diary.filter(x => !(x.date === date && x.id === d.id)); if (d.cooked) { S.diary.push({ date, id: d.id }); S.notes[d.id] = Object.assign({}, S.notes[d.id], { last: date.split('-').reverse().join('.') }); } save(); render(); break; }
    case 'fav': { const id = el.dataset.id; S.favorites = S.favorites.includes(id) ? S.favorites.filter(x => x !== id) : S.favorites.concat(id); save(); render(); break; }
    case 'rate': { const id = el.dataset.id; const n = Number(el.dataset.n); S.notes[id] = Object.assign({}, S.notes[id], { stars: (S.notes[id] && S.notes[id].stars === n) ? 0 : n }); save(); renderDetail(); break; }
    case 'chain': toggleChain(i); break;
    case 'shuffle': w.shuffle = (w.shuffle || 0) + 1; w.days.forEach(d => { if (!d.locked) { d.id = null; d.kidId = null; d.extras = []; d.chain = false; delete d.chainFrom; } }); buildPlan(w, st); save(); render(); toast('Woche neu gemischt, feste Tage bleiben'); break;
    case 'unlockall': w.days.forEach(d => { d.locked = false; }); save(); render(); break;
    case 'prevweek': curMon = addDays(curMon, -7); week().sel = 0; render(); break;
    case 'nextweek': curMon = addDays(curMon, 7); week().sel = 0; render(); break;
    case 'today': curMon = mondayOf(new Date()); render(); break;
    case 'theme': S.theme = S.theme === 'system' ? 'dark' : S.theme === 'dark' ? 'light' : 'system'; save(); applyTheme(); renderHeader(); break;
    case 'kreg': renderKinder.filter.region = el.dataset.r; renderKinder(); break;
    case 'kfast': renderKinder.filter.fast = !renderKinder.filter.fast; renderKinder(); break;
    case 'copyshop': copyText(shoppingText(), 'Einkaufsliste kopiert'); break;
    case 'print': try { window.print(); } catch (err) {} break;
    case 'hidedone': st.hideDone = !st.hideDone; save(); renderEinkauf(); break;
    case 'showpantry': st.showPantry = !st.showPantry; save(); renderEinkauf(); break;
    case 'uncheck': w.checked = []; save(); render(); break;
    case 'rmown': w.own = (w.own || []).filter(o => (o.n + '|' + o.u) !== el.dataset.key); save(); render(); break;
    case 'pantry': { const p = el.dataset.p; S.pantry = S.pantry.includes(p) ? S.pantry.filter(x => x !== p) : S.pantry.concat(p); save(); renderVorbereitung(); break; }
    case 'step': clampStep(el.dataset.key, Number(el.dataset.d)); save(); renderFeinplanung(); break;
    case 'kidadd': st.kids.push({ age: 24 }); save(); renderFeinplanung(); break;
    case 'kidrm': st.kids.splice(i, 1); save(); renderFeinplanung(); break;
    case 'kidmode': st.kidMode = el.dataset.v; save(); renderFeinplanung(); break;
    case 'diet': st.diet = el.dataset.v; save(); renderFeinplanung(); break;
    case 'timeweek': st.timeWeek = Number(el.dataset.v); save(); renderFeinplanung(); break;
    case 'timeweekend': st.timeWeekend = Number(el.dataset.v); save(); renderFeinplanung(); break;
    case 'allergen': { const a = el.dataset.a; st.allergens = st.allergens.includes(a) ? st.allergens.filter(x => x !== a) : st.allergens.concat(a); save(); renderFeinplanung(); break; }
    case 'export': copyText(JSON.stringify(S), 'Daten kopiert. Auf dem anderen Gerät unter „Daten einlesen“ einfügen.'); break;
    case 'importshow': renderFeinplanung.showImport = !renderFeinplanung.showImport; renderFeinplanung(); break;
    case 'import': { try { const obj = JSON.parse($('#import-text').value); if (!obj || !obj.settings) throw new Error('x'); S = deepMerge(JSON.parse(JSON.stringify(DEFAULTS)), obj); save(); applyTheme(); renderFeinplanung.showImport = false; toast('Daten eingelesen'); render(); } catch (err) { toast('Das war kein gültiger Datentext'); } break; }
    case 'reset': { if (!renderFeinplanung.confirm) { renderFeinplanung.confirm = true; renderFeinplanung(); setTimeout(() => { renderFeinplanung.confirm = false; if (S.view === 'feinplanung') renderFeinplanung(); }, 4000); } else { renderFeinplanung.confirm = false; try { localStorage.removeItem(LS); } catch (err) {} S = JSON.parse(JSON.stringify(DEFAULTS)); S.view = 'feinplanung'; applyTheme(); render(); toast('Alles zurückgesetzt'); } break; }
    case 'closepicker': $('#picker').close(); break;
    case 'pickermore': fillPicker(true); break;
    case 'cook': openCook(i); break;
    case 'cookclose': closeCook(); break;
    case 'cooknext': cookGo(cook.idx + 1); break;
    case 'cookprev': cookGo(cook.idx - 1); break;
    case 'cookgo': cookGo(Number(el.dataset.k)); break;
    case 'timer': startTimer(Number(el.dataset.min), el.dataset.label); break;
    case 'timerstop': stopTimer(); break;
    case 'cookdone': { const d = w.days[i]; if (!d.cooked) { d.cooked = true; const date = iso(addDays(curMon, i)); S.diary = S.diary.filter(x => !(x.date === date && x.id === d.id)); S.diary.push({ date, id: d.id }); S.notes[d.id] = Object.assign({}, S.notes[d.id], { last: date.split('-').reverse().join('.') }); save(); } closeCook(); toast('Als gekocht markiert'); break; }
    case 'copylines': { const sc = el.dataset.scope; const items = sc === 'week' ? openItems() : missingItems(dayItems(Number(sc.split(':')[1]))); copyText(linesFor(items).join('\n'), 'Liste kopiert: in Erinnerungen einfügen, je Zeile eine Erinnerung'); break; }
    case 'remind': { setTimeout(() => toast('Kurzbefehl „' + SHORTCUT_NAME + '“ wird gestartet. Nichts passiert? Dann Weg 1: kopieren und einfügen.'), 300); break; }
    case 'pickerprot': fillPicker.state.prot = el.dataset.v; fillPicker(); break;
    case 'landreg': renderLaender.state.region = el.dataset.r; renderLaender.state.country = null; renderLaender(); break;
    case 'landpick': renderLaender.state.country = el.dataset.c; renderLaender(); { const c = $('#laender-country'); if (c && window.innerWidth < 900) c.scrollIntoView({ behavior: 'smooth', block: 'start' }); } break;
    case 'landkid': renderLaender.state.showKid = !renderLaender.state.showKid; renderLaender(); break;
    case 'landmore': renderLaender.state.limit += 60; renderLaender(); break;
    case 'havequick': S.have = S.have.concat(el.dataset.h); save(); renderVorrat(); break;
    case 'haverm': S.have = S.have.filter(h => h !== el.dataset.h); save(); renderVorrat(); break;
    case 'haveclear': S.have = []; save(); renderVorrat(); break;
    case 'havemore': renderVorrat.state.limit += 40; renderVorrat(); break;
  }
});
document.addEventListener('change', e => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const act = el.dataset.act; const w = week(); const st = S.settings; const i = el.dataset.i != null ? Number(el.dataset.i) : null;
  switch (act) {
    case 'extra': { const d = w.days[i]; d.extras = d.extras || []; const k = el.dataset.k; d.extras = el.checked ? Array.from(new Set(d.extras.concat(k))) : d.extras.filter(x => x !== k); save(); renderHeader(); break; }
    case 'kidsel': w.days[i].kidId = el.value || null; save(); renderWoche(); break;
    case 'kplan': { const di = el.value; if (di === '') break; w.days[Number(di)].kidId = el.dataset.k; save(); renderKinder(); toast('Für ' + WD[Number(di)] + ' eingeplant'); break; }
    case 'check': { const key = el.dataset.key; w.checked = el.checked ? Array.from(new Set(w.checked.concat(key))) : w.checked.filter(k => k !== key); save(); renderEinkauf(); renderHeader(); break; }
    case 'toggle': st[el.dataset.key] = el.checked; save(); renderFeinplanung(); break;
    case 'device': st.devices[el.dataset.key] = el.checked; save(); renderFeinplanung(); break;
    case 'kidage': { const v = Math.max(0, Math.min(216, Number(el.value) || 0)); st.kids[i].age = v; save(); renderFeinplanung(); break; }
    case 'dislikes': st.dislikes = el.value; save(); break;
    case 'cookcheck': el.closest('.cook-check').classList.toggle('on', el.checked); break;
    case 'planday': { const di = el.value; if (di === '') break; const id = el.dataset.id; week().sel = Number(di); setDay(Number(di), id); toast(WD[Number(di)] + ': ' + (R(id) ? R(id).name.split(' · ')[0] : '') ); break; }
    case 'kidcountry': renderKidCountries.state.c = el.value; renderKidCountries(); break;
    case 'toggle-have': st.preferHave = el.checked; save(); break;
    case 'pickerland': fillPicker.state.land = el.value; fillPicker(); break;
  }
});
document.addEventListener('input', e => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  if (el.dataset.act === 'note') { const id = el.dataset.id; S.notes[id] = Object.assign({}, S.notes[id], { text: el.value }); clearTimeout(renderDetail._t); renderDetail._t = setTimeout(save, 300); }
  if (el.dataset.act === 'kq') { renderKinder.filter.q = el.value; const pos = el.selectionStart; renderKinder(); const n = $('#kid-q'); if (n) { n.focus(); try { n.setSelectionRange(pos, pos); } catch (err) {} } }
  if (el.id === 'picker-q') fillPicker();
  if (el.dataset.act === 'landq') { renderLaender.state.q = el.value; renderLaender.state.limit = 60; const pos = el.selectionStart; renderLaender(); const n = $('#land-q'); if (n) { n.focus(); try { n.setSelectionRange(pos, pos); } catch (err) {} } }
});
document.addEventListener('submit', e => {
  const hf = e.target.closest('[data-act="haveadd"]');
  if (hf) { e.preventDefault(); const v = $('#have-in').value.trim(); if (!v) return; if (!S.have.some(h => norm(h) === norm(v))) S.have = S.have.concat(v); save(); renderVorrat(); const n = $('#have-in'); if (n) n.focus(); return; }
  const f = e.target.closest('[data-act="addown"]'); if (!f) return; e.preventDefault();
  const n = $('#own-n').value.trim(); if (!n) return; const q = Number($('#own-q').value) || 1; const u = $('#own-u').value; const c = $('#own-c').value;
  const w = week(); w.own = w.own || []; const ex = w.own.find(o => o.n === n && o.u === u); if (ex) ex.q += q; else w.own.push({ n, q, u, c });
  save(); renderEinkauf(); renderHeader(); toast(n + ' hinzugefügt');
});
document.addEventListener('keydown', e => { if (!cook) return; if (e.key === 'ArrowRight') cookGo(cook.idx + 1); if (e.key === 'ArrowLeft') cookGo(cook.idx - 1); if (e.key === 'Escape') closeCook(); });
(function () { const track = $('#cook-track'); if (!track) return; let raf = 0; track.addEventListener('scroll', () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; if (!cook) return; const idx = Math.round(track.scrollLeft / Math.max(1, track.clientWidth)); if (idx !== cook.idx) { cook.idx = idx; cookNav(); } }); }, { passive: true }); })();
window.addEventListener('hashchange', () => { const v = location.hash.slice(1); if (VIEWS.includes(v) && v !== S.view) { S.view = v; save(); render(); } });

/* ---------- Start ---------- */
document.documentElement.lang = 'de';
applyTheme();
{ const v = location.hash.slice(1); if (VIEWS.includes(v)) S.view = v; else if (!VIEWS.includes(S.view)) S.view = 'woche'; }
render();
})();
