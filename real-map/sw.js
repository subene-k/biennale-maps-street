/* Offline support for the Biennale Fort Maps: keeps the pages, places, photos, map tiles and libraries
   so a kiosk keeps working if the internet drops. Routing between distant venues still needs the internet. */
const V = 'bfm-v1';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(V).then(c => c.addAll(['./', 'index.html', 'red-fort.html', 'purana-qila.html', 'pois.json', 'pois-purana-qila.json'])).catch(() => {})); });
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request; if(r.method !== 'GET') return;
  const u = new URL(r.url);
  if(/routing\.openstreetmap\.de|google\.|mapillary/.test(u.hostname)) return;
  const keep = res => { if(res && (res.ok || res.type === 'opaque')){ const c = res.clone(); caches.open(V).then(x => x.put(r, c)); } return res; };
  if(u.origin === location.origin){   // pages and data: newest when online, saved copy when offline
    e.respondWith(fetch(r).then(keep).catch(() => caches.match(r, { ignoreSearch:true }).then(m => m || caches.match('index.html'))));
    return;
  }
  // map tiles, fonts, libraries: saved copy first
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(keep)));
});
