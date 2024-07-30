importScripts(
    'https://www.gstatic.com/firebasejs/9.8.0/firebase-app-compat.js',
);
importScripts(
    'https://www.gstatic.com/firebasejs/9.8.0/firebase-messaging-compat.js',
);

const app = firebase.initializeApp({
    projectId: 'inka-d9e02',
    appId: '1:533979448150:web:6ab8095b4cc7a8922a0cf7',
    storageBucket: 'inka-d9e02.appspot.com',
    apiKey: 'AIzaSyDlLKEVZ1sVvnePDjNu15RSPiRVqG5orWk',
    authDomain: 'inka-d9e02.firebaseapp.com',
    messagingSenderId: '533979448150',
    measurementId: 'G-4R1B2ZTR5L'
});

const msg = firebase.messaging(app);

msg.setBackgroundMessageHandler(function (payload) {
    let options = {
        body: payload.data.body,
        icon: payload.data.icon
    }

    return self.registration.showNotification(payload.data.title, options);

});