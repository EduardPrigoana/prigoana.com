const CACHE_NAME = 'v1';
const URLS_TO_CACHE = [
    './favicon.png',
    './cursor.cur',
    'https://unpkg.com/webamp/built/webamp.bundle.min.js',
    'https://unpkg.com/butterchurn/lib/butterchurn.min.js',
    'https://unpkg.com/butterchurn-presets/lib/butterchurnPresets.min.js',
    'https://lastfm.freetls.fastly.net/'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
