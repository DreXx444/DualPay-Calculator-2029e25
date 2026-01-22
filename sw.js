const CACHE_NAME = 'dp-v1';
const ASSETS = [
    'index.html',
    'manifest.json',
    'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
