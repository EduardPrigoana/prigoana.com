const CACHE_NAME = 'v1';
const URLS_TO_CACHE = [
    './favicon.png',
    './cursor.cur',
    'https://unpkg.com/webamp/built/webamp.bundle.min.js',
    'https://unpkg.com/butterchurn/lib/butterchurn.min.js',
    'https://unpkg.com/butterchurn-presets/lib/butterchurnPresets.min.js',
    'https://lastfm.freetls.fastly.net/'
];

// Install event: Pre-cache the static resources
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

// Fetch event: Serve cached files and dynamically cache .mp3 or .flac files
self.addEventListener('fetch', function(event) {
    const requestUrl = new URL(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            // If the resource is already cached, return it
            if (response) {
                return response;
            }

            // Otherwise, fetch the resource and check if it's an audio file
            return fetch(event.request).then(function(fetchResponse) {
                // Clone the response (responses can only be used once)
                const fetchResponseClone = fetchResponse.clone();

                // Check if the file ends with .mp3 or .flac
                if (requestUrl.pathname.endsWith('.mp3') || requestUrl.pathname.endsWith('.flac')) {
                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(event.request, fetchResponseClone);
                    });
                }

                return fetchResponse;
            });
        })
    );
});

// Activate event: Clean up old caches
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
