import Firebase from 'firebase'

const firebaseConfing = {
  apiKey: "AIzaSyCBLF9eznx6559KHXrVeojwnC-o8h5aQmc",
  authDomain: "miba-app-5e329.firebaseapp.com",
  databaseURL: "https://miba-app-5e329.firebaseio.com",
  projectId: "miba-app-5e329",
  storageBucket: "miba-app-5e329.appspot.com",
  messagingSenderId: "546184305250"
};
const firebaseApp = Firebase.initializeApp(firebaseConfing);
const db = firebaseApp.database();

export {firebaseApp, db};
