// Self-unregistering service worker to clean up any previously installed SWs
// This helps resolve issues with stale cached assets and 404s for old chunk paths.

self.addEventListener('install', (event) => {
  // Activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      // Clear all caches
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));
    } catch {}

    try {
      // Unregister this service worker
      await self.registration.unregister();
    } catch {}

    // Take control of uncontrolled clients to flush old SW immediately
    await self.clients.claim();

    // Attempt to refresh all open clients so they load fresh assets
    const allClients = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
    for (const client of allClients) {
      try { client.navigate(client.url); } catch {}
    }
  })());
});

self.addEventListener('fetch', () => {
  // No-op: let network handle everything
});



