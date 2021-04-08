import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAGB4Vyej_BbXDrG4R3UTsf8xc0GVDWXL8',
	authDomain: 'robinhood-7cb5d.firebaseapp.com',
	projectId: 'robinhood-7cb5d',
	storageBucket: 'robinhood-7cb5d.appspot.com',
	messagingSenderId: '996772214977',
	appId: '1:996772214977:web:f1f488b74f26e0bc1f7c40',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
