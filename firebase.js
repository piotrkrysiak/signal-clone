import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFI_QG2oPrWQYExYVLy7SjvNHdD0Ioh1I",
  authDomain: "singal-clone-2.firebaseapp.com",
  projectId: "singal-clone-2",
  storageBucket: "singal-clone-2.appspot.com",
  messagingSenderId: "340633210215",
  appId: "1:340633210215:web:23afacbfab81c217d3b3c2",
};

let firebaseApp;

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

//
