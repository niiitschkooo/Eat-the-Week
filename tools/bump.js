#!/usr/bin/env node
/* Stempelt eine neue Version in index.html (Meta-Tag und ?v= an den eigenen Dateien). Aufruf: node tools/bump.js */
const fs = require('fs'); const path = require('path');
const f = path.join(__dirname, '..', 'index.html'); let s = fs.readFileSync(f, 'utf8');
const d = new Date(); const v = d.toISOString().slice(0, 10) + '.' + String(d.getHours()).padStart(2, '0') + String(d.getMinutes()).padStart(2, '0');
s = s.replace(/<meta name="app-version" content="[^"]*">/, '<meta name="app-version" content="' + v + '">');
s = s.replace(/(href|src)="(assets\/[^"?]+|manifest\.webmanifest)(\?v=[^"]*)?"/g, (m, a, p) => a + '="' + p + '?v=' + v + '"');
fs.writeFileSync(f, s); console.log('Version ' + v);
