const CACHE_NAME = 'anime-app-v1';
const ASSETS = [
  '/',
  '/index.html' // تأكد من كتابة اسم ملفك الرئيسي هنا بدقة
];

// تثبيت الـ Service Worker وحفظ الملفات في الكاش
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// تشغيل الموقع من الكاش مباشرة عند عدم وجود إنترنت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
