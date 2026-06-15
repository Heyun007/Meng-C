self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {title:'梦角查岗',body:'来消息了'};
  e.waitUntil(self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon || '',
    tag: 'dream-' + Date.now(),
    requireInteraction: true
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = '/Meng-C/?action=call';
  clients.openWindow(url);
});