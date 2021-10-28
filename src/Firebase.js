import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAE146LI1aafbQI2k7PwDl1-B90cygykXg",
    authDomain: "react-contact-form-50c92.firebaseapp.com",
    projectId: "react-contact-form-50c92",
    storageBucket: "react-contact-form-50c92.appspot.com",
    messagingSenderId: "1000596157738",
    appId: "1:1000596157738:web:471f230af88fde28bbda53"
  
});

var db = firebaseApp.firestore();

export { db };