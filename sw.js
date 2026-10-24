/* Grün geplant · Service Worker: erst Netz, bei Ausfall Zwischenspeicher. So kommen Updates sofort, und offline startet die App trotzdem. */
const CACHE = 'gruen-geplant-v1';
const CORE = ['./', './index.html', './manifest.webmanifest', './assets/styles.css', './assets/app.js', './assets/data.js', './assets/kids.js', './assets/data-more.js', './assets/world.js', './assets/icons/icon-192.png', './assets/icons/icon-512.png', './assets/icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE).catch(() => null)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).then(res => { if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return res; })
    .catch(() => caches.match(e.request, { ignoreSearch: true }).then(hit => hit || (e.request.mode === 'navigate' ? caches.match('./index.html', { ignoreSearch: true }) : undefined))));
});
