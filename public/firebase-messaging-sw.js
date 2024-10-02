// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBUKagWaLpNR35Y0sm4zWrS_QKA2jhoeP4",
    authDomain: "webpushtest-a894a.firebaseapp.com",
    projectId: "webpushtest-a894a",
    storageBucket: "webpushtest-a894a.appspot.com",
    messagingSenderId: "288596309820",
    appId: "1:288596309820:web:ddd2158900ef830c1b5039"
});

// Retrieve an instance of Firebase Messaging so that it can handle background

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });