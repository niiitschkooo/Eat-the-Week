#!/usr/bin/env node
/* Fasst assets/world/*.js zu assets/world.js zusammen (kein Build-Werkzeug nötig).
   Aufruf: node tools/bundle.js */
const fs = require('fs'); const path = require('path');
const dir = path.join(__dirname, '..', 'assets', 'world'); const out = path.join(__dirname, '..', 'assets', 'world.js');
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort() : [];
const parts = ['/* Grün geplant · Länderküchen (automatisch aus assets/world/*.js gebündelt, nicht von Hand bearbeiten) */'];
const vm = require('vm'); let skipped = 0;
for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  try { new vm.Script(src, { filename: f }); } catch (e) { console.warn('übersprungen (Syntaxfehler): ' + f + ' – ' + e.message); skipped++; continue; }
  parts.push('\n/* ===== ' + f + ' ===== */\n' + src.trim());
}
fs.writeFileSync(out, parts.join('\n') + '\n');
console.log('world.js: ' + (files.length - skipped) + ' Dateien, ' + (fs.statSync(out).size / 1024).toFixed(0) + ' KB');
