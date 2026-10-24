#!/usr/bin/env node
/* Prüft Rezeptdateien: node tools/validate.js [assets/world/xx.js ...]
   Ohne Argumente werden alle Dateien unter assets/world geprüft. */
const fs = require('fs'); const path = require('path'); const vm = require('vm');
const root = path.join(__dirname, '..', 'assets');
const base = ['data.js', 'kids.js'].map(f => path.join(root, f));
const more = path.join(root, 'data-more.js');
const worldDir = path.join(root, 'world');
let files = process.argv.slice(2).map(f => path.resolve(f));
if (!files.length && fs.existsSync(worldDir)) files = fs.readdirSync(worldDir).filter(f => f.endsWith('.js')).sort().map(f => path.join(worldDir, f));
const ctx = {}; vm.createContext(ctx);
const run = f => { try { vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f }); } catch (e) { console.log('SYNTAX', path.basename(f), e.message); process.exitCode = 1; } };
base.forEach(run); if (fs.existsSync(more)) run(more);
const G = () => vm.runInContext('({RECIPES, KIDS, EXTRAS})', ctx);
const before = G().RECIPES.length, beforeK = G().KIDS.length;
files.forEach(run);
const { RECIPES: R, KIDS: K, EXTRAS } = G(); const ids = new Set(); let err = 0;
const log = (...a) => { console.log(...a); err++; };
const need = ['id','name','cuisine','flag','protein','base','time','devices','method','allergens','wholegrain','lowChop','oneVessel','baseCount','veg','season','ing','steps','kid'];
const CATS = ['gemuese','vorrat','kuehl','fisch','tk','brot','gewuerz'];
const PROT = ['fisch','fleisch','gefluegel','huelsen','tofu','ei','milch'];
const ALL = ['gluten','milch','ei','soja','nuesse','fisch','sesam','sellerie'];
const BASES = ['quinoa','reis','kartoffeln','nudeln','couscous','bulgur','polenta',null];
const DEV = ['topf','pfanne','ofen','airfryer','mikrowelle','maschine','slowcooker'];
const perCountry = {};
R.forEach((r, idx) => {
  const tag = r.id || ('#' + idx);
  if (ids.has(r.id)) log('DUP', tag); ids.add(r.id);
  for (const k of need) if (!(k in r)) log('MISSING', tag, k);
  if (idx >= before && !('kidName' in r)) log('MISSING', tag, 'kidName');
  if (!/^[a-z0-9-]+$/.test(r.id || '')) log('BADID', tag);
  if (!PROT.includes(r.protein)) log('BADPROT', tag, r.protein);
  if (!BASES.includes(r.base)) log('BADBASE', tag, r.base);
  if (!r.time || typeof r.time.a !== 'number' || typeof r.time.c !== 'number') log('BADTIME', tag);
  if (!Array.isArray(r.devices) || !r.devices.every(g => Array.isArray(g) && g.every(d => DEV.includes(d)))) log('BADDEV', tag);
  (r.allergens || []).forEach(a => { if (!ALL.includes(a)) log('BADALL', tag, a); });
  if (!Array.isArray(r.ing) || r.ing.length < 3) log('FEWING', tag);
  (r.ing || []).forEach(i => { if (!CATS.includes(i.c)) log('BADCAT', tag, i.n, i.c); if (typeof i.q !== 'number' || !i.u || !i.n) log('BADING', tag, i.n); });
  if (!Array.isArray(r.steps) || r.steps.length < 3) log('FEWSTEPS', tag);
  if (!Array.isArray(r.veg) || !r.veg.length) log('NOVEG', tag);
  if (!Array.isArray(r.season)) log('BADSEASON', tag);
  if (r.extras) r.extras.forEach(e => { if (!EXTRAS[e]) log('BADEXTRA', tag, e); });
  if (typeof r.kid !== 'string' || r.kid.length < 20) log('SHORTKID', tag);
  perCountry[r.cuisine] = (perCountry[r.cuisine] || 0) + 1;
});
const kids = new Set(); K.forEach(k => { if (kids.has(k.id)) log('DUPKID', k.id); kids.add(k.id); if (!k.parts || k.parts.length !== 3 || !k.steps || k.steps.length !== 3) log('KIDSHAPE', k.id); });
console.log(err ? 'ERRORS ' + err : 'OK', '· recipes:', R.length, '(+' + (R.length - before) + ')', '· kids:', K.length, '(+' + (K.length - beforeK) + ')');
if (files.length) { const mine = R.slice(before); const c = {}; mine.forEach(r => { c[r.cuisine] = (c[r.cuisine] || 0) + 1; }); console.log('pro Land:', JSON.stringify(c)); }
if (err) process.exitCode = 1;
