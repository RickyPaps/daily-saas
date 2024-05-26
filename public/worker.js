self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
});

self.addEventListener("push", (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
  });
});
